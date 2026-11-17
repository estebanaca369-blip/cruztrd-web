// Cloudflare Pages Function — GET /api/voz
// Voz de los especialistas (ElevenLabs Agents). La API key vive SOLO como secreto
// de Cloudflare (env.ELEVENLABS_API_KEY); el navegador recibe un token de un solo uso.
//   GET /api/voz        -> { ok, voice:true|false }   (salud: ¿está conectada la voz?)
//   GET /api/voz?t=1    -> { ok, token, voices }        (token WebRTC para una conversación)
const ALLOW = [/^https:\/\/([a-z0-9-]+\.)?cruztrd\.com$/, /^https:\/\/([a-z0-9-]+\.)?cruztrd-web\.pages\.dev$/, /^http:\/\/localhost(:\d+)?$/];
const J = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

function voices(env) {
  try { const v = JSON.parse(env.ELEVEN_VOICES || '{}'); return v && typeof v === 'object' ? v : {}; } catch (e) { return {}; }
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

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const ready = !!(env.ELEVENLABS_API_KEY && env.ELEVENLABS_AGENT_ID);
  if (!url.searchParams.get('t')) return J({ ok: true, voice: ready });
  if (!ready) return J({ ok: false, error: 'voz_no_configurada' });
  const origin = request.headers.get('origin') || request.headers.get('referer') || '';
  let o = '';
  try { o = new URL(origin).origin; } catch (e) {}
  if (!ALLOW.some(rx => rx.test(o))) return J({ ok: false, error: 'origen' }, 403);
  if (await limited(request, 'voz', 3, 12)) return J({ ok: false, error: 'limite' }, 429);
  try {
    const r = await fetch('https://api.elevenlabs.io/v1/convai/conversation/token?agent_id=' + encodeURIComponent(env.ELEVENLABS_AGENT_ID), { headers: { 'xi-api-key': env.ELEVENLABS_API_KEY } });
    if (!r.ok) return J({ ok: false, error: 'upstream' });
    const d = await r.json();
    return J({ ok: true, token: d.token, voices: voices(env) });
  } catch (e) { return J({ ok: false, error: 'fetch_fail' }); }
}
