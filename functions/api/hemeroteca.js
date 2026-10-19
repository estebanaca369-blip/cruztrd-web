// Cloudflare Pages Function — GET /api/hemeroteca
// Revistas y periódicos cuya edición digital ORIGINAL (las páginas tal cual) se puede mostrar libremente:
//  · Full Circle Magazine — CC BY-SA 3.0 (texto e imágenes), mensual, PDF original
//  · Colecciones de dominio público en Wikimedia Commons (páginas escaneadas originales)
// ?pdf=fc&n=233&lang=en  → sirve el PDF original (proxy con soporte de rangos) para leerlo dentro del sitio
const UA = 'CruzTRD-Hemeroteca/1.0 (+https://cruztrd.com)';
const DAY = 86400;
const COMMONS = 'https://commons.wikimedia.org/w/api.php';
const COLS = {
  byn:   { name: 'Blanco y Negro', place: 'Madrid · revista ilustrada', lang: 'ES', search: 'intitle:"Blanco y negro (IA"', kind: 'revista' },
  ilus:  { name: 'La Ilustración Española y Americana', place: 'Madrid · revista ilustrada', lang: 'ES', search: 'intitle:"La Ilustración Española y Americana" filemime:application/pdf', kind: 'revista' },
  ilart: { name: 'La Ilustración Artística', place: 'Barcelona · revista de arte y actualidad', lang: 'ES', search: 'intitle:"La Ilustración Artística" filemime:application/pdf', kind: 'revista' },
  sciam: { name: 'Scientific American', place: 'Nueva York · periódico de ciencia e inventos', lang: 'EN', search: 'intitle:"Scientific American - Series" filemime:application/pdf', kind: 'periodico' },
  pm:    { name: 'Popular Mechanics', place: 'Chicago · revista de mecánica y tecnología', lang: 'EN', search: 'intitle:"Popular Mechanics" filemime:application/pdf', kind: 'revista' },
  psm:   { name: 'Popular Science Monthly', place: 'Nueva York · revista de ciencia', lang: 'EN', search: 'intitle:"Popular Science Monthly Volume" filemime:image/vnd.djvu', kind: 'revista' },
};
const MES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
function label(key, t, year) {
  let m;
  if (key === 'sciam' && (m = t.match(/Series (\d+) - Volume 0*(\d+) - Issue 0*(\d+)/))) return 'Serie ' + m[1] + ' · vol. ' + m[2] + ' · n.º ' + m[3] + (year ? ' · ' + year : '');
  if (key === 'psm' && (m = t.match(/Volume (\d+)/))) return 'Volumen ' + m[1] + (year ? ' · ' + year : '');
  if (key === 'pm' && (m = t.match(/(19[0-3]\d)[-_ .]?(\d\d)/))) return MES[(+m[2] - 1) % 12] + ' de ' + m[1];
  return year ? 'Año ' + year : 'Volumen encuadernado';
}
const OK_LIC = /^(public domain|pd|cc0|cc by(-sa)? \d|cc-by(-sa)?-\d|no restrictions)/i;

async function cj(u, ttl = DAY) {
  const r = await fetch(u, { headers: { 'user-agent': UA, accept: 'application/json' }, cf: { cacheTtl: ttl, cacheEverything: true } });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  return r.json();
}
function strip(s) { return String(s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); }

async function commonsCol(key, debug) {
  const C = COLS[key];
  const q = COMMONS + '?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=40&gsrsearch=' + encodeURIComponent(C.search) +
    '&prop=imageinfo&iiprop=url|size|mime|extmetadata&iiurlwidth=1000&iiurlparam=page1-1000px';
  const j = await cj(q);
  const pages = Object.values((j.query && j.query.pages) || {});
  const out = [], rej = [];
  for (const p of pages) {
    const ii = p.imageinfo && p.imageinfo[0]; if (!ii) continue;
    const em = ii.extmetadata || {};
    const lic = strip(em.LicenseShortName && em.LicenseShortName.value);
    const ym = (strip(em.DateTimeOriginal && em.DateTimeOriginal.value) + ' ' + strip(em.ImageDescription && em.ImageDescription.value) + ' ' + strip(em.ObjectName && em.ObjectName.value)).match(/\b(1[789]\d\d)\b/);
    const date = ym ? ym[1] : '';
    const pc = ii.pagecount || 0;
    if (!OK_LIC.test(lic) || !pc || !ii.thumburl) { rej.push(p.title + ' | ' + lic + ' | pages ' + pc); continue; }
    const t = p.title.replace(/^File:/, '').replace(/\.(pdf|djvu)$/i, '');
    out.push({ title: t, label: label(key, t, date), file: p.title, pages: pc, thumb: ii.thumburl, desc: ii.descriptionurl, license: lic, date, size: ii.size });
  }
  out.sort((a, b) => a.title.localeCompare(b.title, 'es', { numeric: true }));
  return { key, ...C, source: 'Wikimedia Commons', issues: out, ...(debug ? { rejected: rej.slice(0, 15), total: pages.length } : {}) };
}
async function fullCircle(debug) {
  // último número publicado: se busca hacia adelante desde una referencia conocida (233 = sept 2026)
  const tried = []; let last = 0;
  for (let n = 232; n <= 240; n++) {
    const r = await fetch('https://dl.fullcirclemagazine.org/issue' + n + '_en.pdf', { method: 'HEAD', headers: { 'user-agent': UA }, cf: { cacheTtl: DAY, cacheEverything: true } });
    tried.push(n + ':' + r.status); if (r.ok) last = n; else if (n > 233) break;
  }
  const issues = [];
  for (let n = last; n > last - 4 && n > 0; n--) {
    const langs = ['en'];
    const es = await fetch('https://dl.fullcirclemagazine.org/issue' + n + '_es.pdf', { method: 'HEAD', headers: { 'user-agent': UA }, cf: { cacheTtl: DAY, cacheEverything: true } });
    if (es.ok) langs.unshift('es');
    issues.push({ n, langs, title: 'Full Circle #' + n });
  }
  return { key: 'fc', name: 'Full Circle Magazine', place: 'Revista de tecnología · Linux y software libre', lang: 'EN', kind: 'revista', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/deed.es', home: 'https://fullcirclemagazine.org', issues, ...(debug ? { tried } : {}) };
}

export async function onRequestGet({ request, waitUntil }) {
  const url = new URL(request.url), debug = url.searchParams.has('debug');
  // proxy del PDF original de Full Circle (solo ese dominio y ese patrón: no es un proxy abierto)
  if (url.searchParams.get('pdf') === 'fc') {
    const n = parseInt(url.searchParams.get('n'), 10), lang = url.searchParams.get('lang') === 'es' ? 'es' : 'en';
    if (!(n > 0 && n < 1000)) return new Response('bad issue', { status: 400 });
    const h = { 'user-agent': UA }; const range = request.headers.get('range'); if (range) h.range = range;
    const r = await fetch('https://dl.fullcirclemagazine.org/issue' + n + '_' + lang + '.pdf', { headers: h, cf: { cacheTtl: 30 * DAY, cacheEverything: true } });
    const rh = new Headers(); ['content-type', 'content-length', 'content-range', 'accept-ranges', 'last-modified', 'etag'].forEach(k => { const v = r.headers.get(k); if (v) rh.set(k, v); });
    rh.set('cache-control', 'public, max-age=' + 30 * DAY); rh.set('access-control-expose-headers', 'content-range, accept-ranges, content-length');
    return new Response(r.body, { status: r.status, headers: rh });
  }
  const cache = caches.default, ck = new Request(url.origin + '/api/hemeroteca?v3' + (debug ? '&debug' : ''));
  if (!debug) { const hit = await cache.match(ck); if (hit) return hit; }
  const res = await Promise.all([fullCircle(debug).catch(e => ({ key: 'fc', error: e.message, issues: [] })),
    ...Object.keys(COLS).map(k => commonsCol(k, debug).catch(e => ({ key: k, error: e.message, issues: [] })))]);
  const body = JSON.stringify({ updated: new Date().toISOString(), collections: res });
  const out = new Response(body, { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=21600' } });
  if (!debug) waitUntil(cache.put(ck, out.clone()));
  return out;
}
