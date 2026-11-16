// Cloudflare Pages Function — POST /api/audiogen  (solo para el administrador)
// Genera música (Eleven Music) o efectos (Sound Effects) para los juegos de CruzTRD Play.
// Protegida con env.AUDIO_ADMIN_TOKEN (header x-admin). La API key nunca sale del servidor.
const J = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

// Límite de uso por visitante (por IP), guardado en la caché del borde: sin servicios adicionales.
async function limited(request, name, perMin, perDay, soloLeer) {
  try {
    const ip = request.headers.get('cf-connecting-ip') || 'x';
    const cache = caches.default, now = Date.now();
    const wins = [[60, perMin, Math.floor(now / 60000)], [86400, perDay, Math.floor(now / 86400000)]];
    for (const [ttl, max, bucket] of wins) {
      const key = new Request('https://limite.cruztrd.internal/' + name + '/' + encodeURIComponent(ip) + '/' + ttl + '/' + bucket);
      const hit = await cache.match(key);
      const n = hit ? (parseInt(await hit.text(), 10) || 0) : 0;
      if (n >= max) return true;
      if (!soloLeer) await cache.put(key, new Response(String(n + 1), { headers: { 'cache-control': 'max-age=' + ttl } }));
    }
  } catch (e) {}
  return false;
}

// Comparación en tiempo constante (no revela cuántos caracteres del token coinciden).
async function igual(a, b) {
  const e = new TextEncoder();
  const [x, y] = await Promise.all([crypto.subtle.digest('SHA-256', e.encode(String(a))), crypto.subtle.digest('SHA-256', e.encode(String(b)))]);
  const u = new Uint8Array(x), v = new Uint8Array(y); let d = 0;
  for (let k = 0; k < u.length; k++) d |= u[k] ^ v[k];
  return d === 0;
}

export async function onRequestPost({ request, env }) {
  if (!env.ELEVENLABS_API_KEY) return J({ ok: false, error: 'falta ELEVENLABS_API_KEY' });
  // El límite cuenta solo los intentos con token inválido; quien se pasa queda bloqueado aunque luego acierte.
  if (await limited(request, 'audiogen', 6, 60, true)) return J({ ok: false, error: 'limite' }, 429);
  if (!env.AUDIO_ADMIN_TOKEN || !(await igual(request.headers.get('x-admin') || '', env.AUDIO_ADMIN_TOKEN))) { await limited(request, 'audiogen', 6, 60); return J({ ok: false, error: 'token_admin_invalido' }, 401); }
  let b = {}; try { b = await request.json(); } catch (e) {}
  const H = { 'content-type': 'application/json', 'xi-api-key': env.ELEVENLABS_API_KEY };
  let url, body;
  if (b.kind === 'music') {
    url = 'https://api.elevenlabs.io/v1/music?output_format=mp3_44100_128';
    body = { prompt: String(b.prompt || '').slice(0, 2000), music_length_ms: Math.max(10000, Math.min(240000, +b.ms || 90000)), model_id: b.model || 'music_v2', force_instrumental: b.instrumental !== false };
  } else if (b.kind === 'sfx') {
    url = 'https://api.elevenlabs.io/v1/sound-generation?output_format=mp3_44100_128';
    body = { text: String(b.prompt || '').slice(0, 1000), duration_seconds: Math.max(0.5, Math.min(30, +b.sec || 1)), loop: !!b.loop, prompt_influence: b.influence != null ? +b.influence : 0.45, model_id: b.model || 'eleven_text_to_sound_v2' };
  } else return J({ ok: false, error: 'kind' }, 400);
  try {
    const r = await fetch(url, { method: 'POST', headers: H, body: JSON.stringify(body) });
    if (!r.ok) return J({ ok: false, error: 'upstream', http: r.status, detail: (await r.text()).slice(0, 300) });
    return new Response(r.body, { headers: { 'content-type': 'audio/mpeg', 'cache-control': 'no-store' } });
  } catch (e) { return J({ ok: false, error: 'fetch_fail', detail: String(e).slice(0, 160) }); }
}
