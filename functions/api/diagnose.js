const SCLBL = { s1: 'menos de 1.000', s2: '1.000 a 10.000', s3: '10.000 a 50.000', s4: 'mas de 50.000' };
const MOLBL = { sub: 'suscripcion recurrente', once: 'pago unico', fee: 'comisiones por transaccion', ads: 'publicidad', none: 'aun no la monetiza', '': 'a definir' };
const AV = '2023-06-01';
let MODEL_CACHE = null;

function buildPrompt(idea, country, scale, monet, hasBase) {
  const ctx = ' Contexto de negocio: se lanza en ' + (country || 'Ecuador') +
    ', para una escala inicial de ' + (SCLBL[scale] || '') + ' usuarios; monetizacion: ' +
    (MOLBL[monet] || 'a definir') +
    '. Regla: si el modelo es suscripcion incluye susc y pagos; si es pago unico o comisiones incluye pagos y no susc; si es publicidad prioriza mkt sin pagos ni susc; si aun no la monetiza no incluyas pagos ni susc.';
  return 'Eres el asesor experto de CruzTRD, un estudio que arma apps D2C por capas. Capas disponibles (key: cuando aplica): infra=Infraestructura; seg=Seguridad; pagos=Pagos; susc=Suscripciones; mkt=Marketing; fidel=Fidelizacion; dash=Dashboards & KPIs. Idea del usuario: "' + (idea || '') + '". PRIMERO evalua si la idea tiene los REQUISITOS MINIMOS para diagnosticar: (1) que hace la app o que problema resuelve, (2) para quien es (usuarios), (3) alguna nocion de valor o negocio. Si la idea es vaga, sin sentido o le falta lo minimo, devuelve SOLO JSON: {"status":"incompleto","reason":"1 frase clara de por que no alcanza","questions":["entre 2 y 4 preguntas concretas en espanol para completar la idea"],"example":"1 frase con un ejemplo de idea BIEN planteada, del mismo rubro si se intuye"}. Si la idea SI es suficiente, diagnostica que tipo de app es y que capacidades necesita y devuelve SOLO JSON con esta forma exacta: {"status":"ok","appType":"tipo de app en 2-4 palabras","summary":"1-2 frases en espanol","caps":[{"k":"key","why":"una frase corta"}]}. Ordena caps de mas a menos fundamental. Incluye infra como primera capa salvo que no aplique.' +
    ctx + (hasBase ? ' Nota: el usuario ya tiene su base; puedes omitir infra.' : '');
}

function extractJSON(text) {
  if (!text) return null;
  let t = String(text).replace(/```json/gi, '').replace(/```/g, '').trim();
  const a = t.indexOf('{'), b = t.lastIndexOf('}');
  if (a < 0 || b < 0 || b <= a) return null;
  try { return JSON.parse(t.slice(a, b + 1)); } catch (e) { return null; }
}

const J = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

async function listModels(key) {
  try {
    const r = await fetch('https://api.anthropic.com/v1/models?limit=100', { headers: { 'x-api-key': key, 'anthropic-version': AV } });
    if (!r.ok) return [];
    const d = await r.json();
    return (d && d.data ? d.data : []).map(m => m.id).filter(Boolean);
  } catch (e) { return []; }
}

function chooseModel(ids) {
  if (!ids || !ids.length) return null;
  const p = (kw) => ids.filter(id => id.toLowerCase().includes(kw)).sort().reverse();
  return p('haiku')[0] || p('sonnet')[0] || ids[0];
}

async function resolveModel(env) {
  if (env.CRUZ_MODEL) return env.CRUZ_MODEL;
  if (MODEL_CACHE && (Date.now() - MODEL_CACHE.at) < 3600000) return MODEL_CACHE.id;
  const id = chooseModel(await listModels(env.ANTHROPIC_API_KEY));
  if (id) MODEL_CACHE = { at: Date.now(), id };
  return id;
}

async function callMessages(key, model, prompt) {
  return fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': AV },
    body: JSON.stringify({ model, max_tokens: 700, temperature: 0.4, system: 'Responde SOLO con el JSON pedido.', messages: [{ role: 'user', content: prompt }] })
  });
}

export async function onRequestPost({ request, env }) {
  let body = {}; try { body = await request.json(); } catch (e) {}
  const { idea, country, scale, monet, hasBase } = body;
  if (!idea || !String(idea).trim()) return J({ error: 'idea requerida' }, 400);
  if (!env.ANTHROPIC_API_KEY) return J({ error: 'falta ANTHROPIC_API_KEY' }, 500);
  const key = env.ANTHROPIC_API_KEY;
  const prompt = buildPrompt(String(idea).slice(0, 1200), country, scale, monet, hasBase);
  try {
    let model = await resolveModel(env);
    if (!model) return J({ error: 'sin_modelos' }, 502);
    let r = await callMessages(key, model, prompt);
    if (r.status === 404) {
      const alt = chooseModel(await listModels(key));
      if (alt && alt !== model) { MODEL_CACHE = { at: Date.now(), id: alt }; model = alt; r = await callMessages(key, model, prompt); }
    }
    if (!r.ok) { const d = await r.text().catch(() => ''); return J({ error: 'upstream', status: r.status, model, detail: d.slice(0, 300) }, 502); }
    const data = await r.json();
    const text = (data && data.content && data.content[0] && data.content[0].text) || '';
    const parsed = extractJSON(text);
    if (!parsed || !parsed.caps) return J({ error: 'sin_json', model, raw: text.slice(0, 300) }, 502);
    parsed.__model = model;
    return J(parsed);
  } catch (e) { return J({ error: 'fetch_fail', detail: String(e).slice(0, 200) }, 502); }
}

export async function onRequestGet({ env }) {
  const out = { ok: true, service: 'cruztrd-diagnose', hasKey: !!env.ANTHROPIC_API_KEY, cruzModel: env.CRUZ_MODEL || null };
  if (env.ANTHROPIC_API_KEY) { const ids = await listModels(env.ANTHROPIC_API_KEY); out.models = ids; out.chosen = env.CRUZ_MODEL || chooseModel(ids); }
  return J(out);
}
