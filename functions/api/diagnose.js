// Cloudflare Pages Function — POST /api/diagnose
// Diagnóstico D2C de CruzTRD con IA real. La API key vive SOLO como variable
// de entorno cifrada en Cloudflare (env.ANTHROPIC_API_KEY), nunca en el navegador.

const SCLBL = { s1: 'menos de 1.000', s2: '1.000 a 10.000', s3: '10.000 a 50.000', s4: 'mas de 50.000' };
const MOLBL = { sub: 'suscripcion recurrente', once: 'pago unico', fee: 'comisiones por transaccion', ads: 'publicidad', none: 'aun no la monetiza', '': 'a definir' };

function buildPrompt(idea, country, scale, monet, hasBase) {
  const ctx = ' Contexto de negocio: se lanza en ' + (country || 'Ecuador') +
    ', para una escala inicial de ' + (SCLBL[scale] || '') + ' usuarios; monetizacion: ' +
    (MOLBL[monet] || 'a definir') +
    '. Regla: si el modelo es suscripcion incluye susc y pagos; si es pago unico o comisiones incluye pagos y no susc; si es publicidad prioriza mkt sin pagos ni susc; si aun no la monetiza no incluyas pagos ni susc.';
  return 'Eres el asesor experto de CruzTRD, un estudio que arma apps D2C por capas. Capas disponibles (key: cuando aplica): infra=Infraestructura (servidores/BD/escalado, casi siempre necesaria); seg=Seguridad (si hay usuarios o datos); pagos=Pagos (cobros unicos); susc=Suscripciones (planes/cobros recurrentes/membresias); mkt=Marketing (analitica/SEO/campanas/crecimiento); fidel=Fidelizacion (recompensas/referidos/retencion); dash=Dashboards & KPIs (metricas/reportes). Idea del usuario: "' + (idea || '') + '". Diagnostica que tipo de app es y que capacidades necesita. Devuelve SOLO JSON con esta forma exacta: {"appType":"tipo de app en 2-4 palabras","summary":"1-2 frases en espanol explicando el diagnostico","caps":[{"k":"key","why":"una frase corta de por que la necesita"}]}. Ordena caps de mas a menos fundamental. Incluye infra como primera capa salvo que claramente no aplique.' +
    ctx + (hasBase ? ' Nota: el usuario ya tiene su propia base/infraestructura; puedes omitir la capa infra.' : '');
}

function extractJSON(text) {
  if (!text) return null;
  // quita fences ```json ... ```
  let t = String(text).replace(/```json/gi, '').replace(/```/g, '').trim();
  const a = t.indexOf('{'), b = t.lastIndexOf('}');
  if (a < 0 || b < 0 || b <= a) return null;
  try { return JSON.parse(t.slice(a, b + 1)); } catch (e) { return null; }
}

const J = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

export async function onRequestPost({ request, env }) {
  let body = {};
  try { body = await request.json(); } catch (e) {}
  const { idea, country, scale, monet, hasBase } = body;

  if (!idea || !String(idea).trim()) return J({ error: 'idea requerida' }, 400);
  if (!env.ANTHROPIC_API_KEY) return J({ error: 'falta ANTHROPIC_API_KEY' }, 500);

  const model = env.CRUZ_MODEL || 'claude-3-5-haiku-latest';
  const prompt = buildPrompt(String(idea).slice(0, 1200), country, scale, monet, hasBase);

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model,
        max_tokens: 700,
        temperature: 0.4,
        system: 'Responde SOLO con el JSON pedido, sin texto adicional ni explicaciones fuera del JSON.',
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      return J({ error: 'upstream', status: r.status, detail: detail.slice(0, 300) }, 502);
    }

    const data = await r.json();
    const text = (data && data.content && data.content[0] && data.content[0].text) || '';
    const parsed = extractJSON(text);
    if (!parsed || !parsed.caps) return J({ error: 'sin_json', raw: text.slice(0, 300) }, 502);
    return J(parsed);
  } catch (e) {
    return J({ error: 'fetch_fail', detail: String(e).slice(0, 200) }, 502);
  }
}

// Salud: GET /api/diagnose -> {ok:true}
export async function onRequestGet() {
  return J({ ok: true, service: 'cruztrd-diagnose' });
}
