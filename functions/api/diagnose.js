// Cloudflare Pages Function — POST /api/diagnose
// Diagnóstico D2C de CruzTRD con IA real. La API key vive SOLO como variable
// de entorno cifrada en Cloudflare (env.ANTHROPIC_API_KEY), nunca en el navegador.

const AV = '2023-06-01';
const DEFAULT_MODEL = 'claude-haiku-4-5-20251001';
const CALL_TIMEOUT_MS = 22000;
let MODEL_CACHE = null; // string id, recordado dentro del isolate caliente

const SCLBL = { s1: 'menos de 1.000', s2: '1.000 a 10.000', s3: '10.000 a 50.000', s4: 'mas de 50.000' };
const MOLBL = { sub: 'suscripcion recurrente', once: 'pago unico', fee: 'comisiones por transaccion', ads: 'publicidad', none: 'aun no la monetiza', '': 'a definir' };

function buildPrompt(idea, country, scale, monet, hasBase) {
  const ctx = ' Contexto de negocio: se lanza en ' + (country || 'Ecuador') +
    ', para una escala inicial de ' + (SCLBL[scale] || '') + ' usuarios; monetizacion: ' +
    (MOLBL[monet] || 'a definir') +
    '. Regla: si el modelo es suscripcion incluye susc y pagos; si es pago unico o comisiones incluye pagos y no susc; si es publicidad prioriza mkt sin pagos ni susc; si aun no la monetiza no incluyas pagos ni susc.';
  return 'Eres el asesor experto de CruzTRD, un estudio que arma apps D2C por capas. Capas disponibles (key: cuando aplica): infra=Infraestructura (servidores/BD/escalado, casi siempre necesaria); seg=Seguridad (si hay usuarios o datos); pagos=Pagos (cobros unicos); susc=Suscripciones (planes/cobros recurrentes/membresias); mkt=Marketing (analitica/SEO/campanas/crecimiento); fidel=Fidelizacion (recompensas/referidos/retencion); dash=Dashboards & KPIs (metricas/reportes). Idea del usuario: "' + (idea || '') +
    '". PRIMERO evalua si la idea tiene los REQUISITOS MINIMOS para diagnosticar: (1) que hace la app o que problema resuelve, (2) para quien es (usuarios), (3) alguna nocion de valor o negocio. Si la idea es vaga, generica, sin sentido o le falta alguno de esos minimos, devuelve SOLO JSON: {"status":"incompleto","reason":"1 frase clara, en segunda persona y tono cercano, de por que todavia no alcanza","questions":["entre 2 y 4 preguntas concretas en espanol para completar la idea"],"example":"1 frase con un ejemplo de idea BIEN planteada, del mismo rubro si se intuye, si no de una app D2C tipica"}. Si la idea SI es suficiente, diagnostica que tipo de app es y que capacidades necesita y devuelve SOLO JSON con esta forma exacta: {"status":"ok","appType":"tipo de app en 2-4 palabras","summary":"1-2 frases en espanol explicando el diagnostico","caps":[{"k":"key","why":"una frase corta de por que la necesita"}]}. Ordena caps de mas a menos fundamental. Incluye infra como primera capa salvo que claramente no aplique.' +
    ctx + (hasBase ? ' Nota: el usuario ya tiene su propia base/infraestructura; puedes omitir la capa infra.' : '');
}

function extractJSON(text) {
  if (!text) return null;
  let t = String(text).replace(/```json/gi, '').replace(/```/g, '').trim();
  const a = t.indexOf('{'), b = t.lastIndexOf('}');
  if (a < 0 || b < 0 || b <= a) return null;
  try { return JSON.parse(t.slice(a, b + 1)); } catch (e) { return null; }
}

const J = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

// Descubre modelos disponibles (solo se usa si el modelo por defecto no existe).
async function listModels(key) {
  try {
    const ctrl = new AbortController();
    const to = setTimeout(() => ctrl.abort(), 8000);
    const r = await fetch('https://api.anthropic.com/v1/models?limit=100', {
      headers: { 'x-api-key': key, 'anthropic-version': AV }, signal: ctrl.signal
    });
    clearTimeout(to);
    if (!r.ok) return [];
    const d = await r.json();
    return (d && d.data ? d.data : []).map(m => m.id).filter(Boolean);
  } catch (e) { return []; }
}

function chooseModel(ids) {
  if (!ids || !ids.length) return null;
  const byPref = (kw) => ids.filter(id => id.toLowerCase().includes(kw)).sort().reverse();
  return byPref('haiku')[0] || byPref('sonnet')[0] || ids[0];
}

// Happy path: sin llamada de descubrimiento. env.CRUZ_MODEL > cache > default.
function resolveModel(env) {
  return (env && env.CRUZ_MODEL) || MODEL_CACHE || DEFAULT_MODEL;
}

async function callMessages(key, model, prompt) {
  const ctrl = new AbortController();
  const to = setTimeout(() => ctrl.abort(), CALL_TIMEOUT_MS);
  try {
    return await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST', signal: ctrl.signal,
      headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': AV },
      body: JSON.stringify({
        model,
        max_tokens: 700,
        temperature: 0.4,
        system: 'Responde SOLO con el JSON pedido, sin texto adicional ni explicaciones fuera del JSON.',
        messages: [{ role: 'user', content: prompt }]
      })
    });
  } finally { clearTimeout(to); }
}

function isIncomplete(parsed) {
  if (!parsed) return false;
  if (parsed.status && String(parsed.status).toLowerCase().indexOf('incompl') >= 0) return true;
  if (Array.isArray(parsed.questions) && (!parsed.caps || !parsed.caps.length)) return true;
  return false;
}

export async function onRequestPost({ request, env }) {
  let body = {};
  try { body = await request.json(); } catch (e) {}
  const { idea, country, scale, monet, hasBase } = body;

  if (!idea || !String(idea).trim()) return J({ error: 'idea requerida' }, 400);
  if (!env.ANTHROPIC_API_KEY) return J({ error: 'falta ANTHROPIC_API_KEY' }, 500);

  const key = env.ANTHROPIC_API_KEY;
  const prompt = buildPrompt(String(idea).slice(0, 1200), country, scale, monet, hasBase);

  try {
    let model = resolveModel(env);
    let r;
    try { r = await callMessages(key, model, prompt); }
    catch (e) { return J({ error: 'network', detail: String(e).slice(0, 160) }, 502); }

    // Si el modelo por defecto no existe para esta key, descubre uno válido y reintenta una vez.
    if (r.status === 404) {
      const ids = await listModels(key);
      const alt = chooseModel(ids);
      if (alt && alt !== model) {
        MODEL_CACHE = alt; model = alt;
        try { r = await callMessages(key, model, prompt); }
        catch (e) { return J({ error: 'network', detail: String(e).slice(0, 160) }, 502); }
      }
    }
    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      return J({ error: 'upstream', status: r.status, model, detail: detail.slice(0, 200) }, 502);
    }

    const data = await r.json();
    const text = (data && data.content && data.content[0] && data.content[0].text) || '';
    const parsed = extractJSON(text);
    if (!parsed) return J({ error: 'sin_json', model, raw: text.slice(0, 200) }, 502);

    // "incompleto" es una respuesta válida (200): el frontend muestra al anfitrión pidiendo más datos.
    if (isIncomplete(parsed)) {
      MODEL_CACHE = model;
      return J({ status: 'incompleto', reason: parsed.reason || parsed.summary || '', questions: parsed.questions || [], example: parsed.example || '', __model: model });
    }
    if (!parsed.caps || !parsed.caps.length) return J({ error: 'sin_json', model, raw: text.slice(0, 200) }, 502);

    MODEL_CACHE = model;
    parsed.status = parsed.status || 'ok';
    parsed.__model = model;
    return J(parsed);
  } catch (e) {
    return J({ error: 'fetch_fail', detail: String(e).slice(0, 200) }, 502);
  }
}

// Salud: GET /api/diagnose -> {ok, hasKey, model}
export async function onRequestGet({ env }) {
  const out = { ok: true, service: 'cruztrd-diagnose', hasKey: !!(env && env.ANTHROPIC_API_KEY), model: resolveModel(env), cruzModel: (env && env.CRUZ_MODEL) || null };
  return J(out);
}
