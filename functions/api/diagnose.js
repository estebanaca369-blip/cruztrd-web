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


// Límite de uso por visitante (por IP), guardado en la caché del borde: sin servicios adicionales.
async function limited(request, name, perMin, perDay) {
  try {
    const ip = request.headers.get('cf-connecting-ip') || 'x';
    const cache = caches.default, now = Date.now();
    const wins = [[60, perMin, Math.floor(now / 60000)], [86400, perDay, Math.floor(now / 86400000)]];
    for (const [ttl, max, bucket] of wins) {
      const key = new Request('https://limite.cruztrd.internal/' + name + '/' + encodeURIComponent(ip) + '/' + ttl + '/' + bucket);
      const hit = await cache.match(key);
      const n = hit ? (parseInt(await hit.text(), 10) || 0) : 0;
      if (n >= max) return true;
      await cache.put(key, new Response(String(n + 1), { headers: { 'cache-control': 'max-age=' + ttl } }));
    }
  } catch (e) {}
  return false;
}

export async function onRequestPost({ request, env }) {
  // Solo desde el propio sitio; cuerpo acotado; campos validados contra listas.
  const origin = request.headers.get('origin') || '';
  if (origin && !/^https:\/\/([a-z0-9-]+\.)?(cruztrd\.com|cruztrd-web\.pages\.dev)$/i.test(origin) && !/^http:\/\/localhost(:\d+)?$/i.test(origin)) return J({ error: 'origen no permitido' }, 403);
  let body = {};
  try { const raw = await request.text(); if (raw.length > 6000) return J({ error: 'solicitud demasiado grande' }, 413); body = JSON.parse(raw); } catch (e) {}
  if (!body || typeof body !== 'object' || Array.isArray(body)) body = {};
  if (await limited(request, 'diagnose', 5, 40)) return J({ status: 'error', error: 'limite' });
  const PAISES = ['Ecuador', 'Colombia', 'Perú', 'Peru', 'México', 'Mexico', 'Chile', 'Argentina', 'Otro'];
  const country = PAISES.indexOf(String(body.country || '')) >= 0 ? String(body.country) : 'Ecuador';
  const scale = SCLBL[body.scale] ? body.scale : 's2';
  const monet = Object.prototype.hasOwnProperty.call(MOLBL, body.monet || '') ? (body.monet || '') : '';
  const hasBase = body.hasBase === true;
  const idea = String(body.idea || '').replace(/[\u0000-\u001f"`\\]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 800);

  if (!idea || !String(idea).trim()) return J({ error: 'idea requerida' }, 400);
  if (!env.ANTHROPIC_API_KEY) return J({ error: 'falta ANTHROPIC_API_KEY' }, 500);

  const key = env.ANTHROPIC_API_KEY;
  const prompt = buildPrompt(idea, country, scale, monet, hasBase);

  try {
    let model = resolveModel(env);
    let r;
    try { r = await callMessages(key, model, prompt); }
    catch (e) { return J({ status: 'error', error: 'network' }); }

    // Si el modelo por defecto no existe para esta key, descubre uno válido y reintenta una vez.
    if (r.status === 404) {
      const ids = await listModels(key);
      const alt = chooseModel(ids);
      if (alt && alt !== model) {
        MODEL_CACHE = alt; model = alt;
        try { r = await callMessages(key, model, prompt); }
        catch (e) { return J({ status: 'error', error: 'network' }); }
      }
    }
    // IMPORTANTE: nunca devolver 5xx. Cloudflare reemplaza cualquier 5xx de la Function
    // por su propia pagina HTML y el frontend no puede leer el JSON. Siempre 200 + status.
    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      return J({ status: 'error', error: 'upstream' });
    }

    const data = await r.json();
    const text = (data && data.content && data.content[0] && data.content[0].text) || '';
    const parsed = extractJSON(text);
    if (!parsed) return J({ status: 'error', error: 'sin_json' });

    // "incompleto": el frontend muestra al anfitrión pidiendo más datos.
    if (isIncomplete(parsed)) {
      MODEL_CACHE = model;
      { const t = (v, n) => String(v == null ? '' : v).replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, n);
      return J({ status: 'incompleto', reason: t(parsed.reason || parsed.summary, 300), questions: (Array.isArray(parsed.questions) ? parsed.questions : []).slice(0, 4).map(q => t(q, 200)), example: t(parsed.example, 300) }); }
    }
    if (!parsed.caps || !parsed.caps.length) return J({ status: 'error', error: 'sin_caps' });

    MODEL_CACHE = model;
    // Solo sale lo que el sitio usa: capas conocidas y textos acotados, sin etiquetas.
    const txt = (v, n) => String(v == null ? '' : v).replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, n);
    const KEYS = ['infra', 'seg', 'pagos', 'susc', 'mkt', 'fidel', 'dash'];
    const seen = {};
    const caps = (Array.isArray(parsed.caps) ? parsed.caps : []).filter(c => c && KEYS.indexOf(c.k) >= 0 && !seen[c.k] && (seen[c.k] = 1)).map(c => ({ k: c.k, why: txt(c.why, 220) }));
    if (!caps.length) return J({ status: 'error', error: 'sin_caps' });
    return J({ status: 'ok', appType: txt(parsed.appType, 60), summary: txt(parsed.summary, 400), caps });
  } catch (e) {
    return J({ status: 'error', error: 'fetch_fail' });
  }
}

// Salud: GET /api/diagnose -> {ok, hasKey, model}
export async function onRequestGet({ env }) {
  const out = { ok: true, service: 'cruztrd-diagnose', ready: !!(env && env.ANTHROPIC_API_KEY) };
  return J(out);
}
