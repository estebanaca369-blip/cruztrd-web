// Cloudflare Pages Function — POST /api/audiogen  (solo para el administrador)
// Genera música (Eleven Music) o efectos (Sound Effects) para los juegos de CruzTRD Play.
// Protegida con env.AUDIO_ADMIN_TOKEN (header x-admin). La API key nunca sale del servidor.
const J = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

export async function onRequestPost({ request, env }) {
  if (!env.ELEVENLABS_API_KEY) return J({ ok: false, error: 'falta ELEVENLABS_API_KEY' });
  if (!env.AUDIO_ADMIN_TOKEN || request.headers.get('x-admin') !== env.AUDIO_ADMIN_TOKEN) return J({ ok: false, error: 'token_admin_invalido' }, 401);
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
