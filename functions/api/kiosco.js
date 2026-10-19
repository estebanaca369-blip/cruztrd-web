// Cloudflare Pages Function — GET /api/kiosco
// Kiosco del Estudio: titulares en vivo de medios con licencia abierta.
//  · Agencia SINC — Creative Commons 4.0 (se cita a SINC como fuente)
//  · Global Voices en español — CC BY (autor + Global Voices + enlace)
//  · The Conversation (España) — CC BY-ND: solo título, autor y su entradilla, con enlace al artículo completo
// No se usan imágenes de los medios (sus licencias de imagen son distintas). Caché: 30 minutos.

const TTL = 1800;
const SOURCES = {
  sinc: { name: 'Agencia SINC', home: 'https://www.agenciasinc.es', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/deed.es',
          feeds: ['https://www.agenciasinc.es/feed', 'https://www.agenciasinc.es/'] },
  gv:   { name: 'Global Voices', home: 'https://es.globalvoices.org', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/deed.es',
          feeds: ['https://es.globalvoices.org/feed/'] },
  tc:   { name: 'The Conversation', home: 'https://theconversation.com/es', license: 'CC BY-ND 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-nd/4.0/deed.es',
          feeds: ['https://theconversation.com/es/articles.atom'] },
};

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', laquo: '«', raquo: '»', ndash: '–', mdash: '—', hellip: '…', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“' };
function decode(s) {
  return String(s || '').replace(/&#(\d+);/g, (m, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (m, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, n) => (ENT[n.toLowerCase()] ?? m));
}
function clean(s) {
  s = String(s || '').replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
  s = decode(s);                                   // el HTML suele venir escapado
  s = s.replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ');
  return decode(s).replace(/\s+/g, ' ').trim();
}
function tag(block, names) {
  for (const n of names) {
    const m = block.match(new RegExp('<' + n + '(?:\\s[^>]*)?>([\\s\\S]*?)<\\/' + n + '>', 'i'));
    if (m) return m[1];
  }
  return '';
}
function link(block) {
  const alt = block.match(/<link[^>]*rel=["']alternate["'][^>]*href=["']([^"']+)["']/i) || block.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']alternate["']/i);
  if (alt) return alt[1];
  const href = block.match(/<link[^>]*href=["']([^"']+)["']/i);
  if (href) return href[1];
  return clean(tag(block, ['link', 'guid']));
}
function cut(s, n) { if (s.length <= n) return s; const t = s.slice(0, n); return t.slice(0, Math.max(t.lastIndexOf(' '), n - 20)) + '…'; }
function parse(xml, key) {
  const blocks = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || xml.match(/<entry[\s>][\s\S]*?<\/entry>/gi) || [];
  return blocks.slice(0, 12).map(b => {
    const title = clean(tag(b, ['title']));
    const sum = clean(tag(b, ['description', 'summary', 'content:encoded', 'content']));
    const author = clean(tag(b, ['dc:creator', 'name', 'author']));
    const date = clean(tag(b, ['pubDate', 'published', 'updated', 'dc:date']));
    const d = Date.parse(date);
    return { title, summary: cut(sum, key === 'tc' ? 320 : 280), author: cut(author, 60), url: link(b), date: isNaN(d) ? null : new Date(d).toISOString() };
  }).filter(x => x.title && /^https?:\/\//.test(x.url));
}
async function getSource(key, debug) {
  const S = SOURCES[key], tried = [];
  for (const u of S.feeds) {
    try {
      const r = await fetch(u, { headers: { 'user-agent': 'CruzTRD-Kiosco/1.0 (+https://cruztrd.com)', accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml' }, cf: { cacheTtl: TTL, cacheEverything: true } });
      tried.push(u + ' ' + r.status);
      if (!r.ok) continue;
      let xml = await r.text();
      if (!/<(rss|feed|rdf:RDF)[\s>]/i.test(xml)) {            // pagina HTML: autodescubrir su feed RSS/Atom
        const m = xml.match(/<link[^>]+type=["']application\/(?:rss|atom)\+xml["'][^>]*>/i);
        const h = m && m[0].match(/href=["']([^"']+)["']/i);
        if (debug) tried.push('html; feed link: ' + (h ? h[1] : 'none') + ' | ' + xml.slice(0, 160).replace(/\s+/g, ' '));
        if (!h) continue;
        const fu = new URL(decode(h[1]), u).toString();
        const r2 = await fetch(fu, { headers: { 'user-agent': 'CruzTRD-Kiosco/1.0 (+https://cruztrd.com)' }, cf: { cacheTtl: TTL, cacheEverything: true } });
        tried.push(fu + ' ' + r2.status); if (!r2.ok) continue; xml = await r2.text();
      }
      const items = parse(xml, key);
      if (items.length) return { key, name: S.name, home: S.home, license: S.license, licenseUrl: S.licenseUrl, feed: u, items, ...(debug ? { tried } : {}) };
    } catch (e) { tried.push(u + ' ERR ' + e.message); }
  }
  return { key, name: S.name, home: S.home, license: S.license, licenseUrl: S.licenseUrl, items: [], error: 'sin datos', ...(debug ? { tried } : {}) };
}
export async function onRequestGet({ request, waitUntil }) {
  const url = new URL(request.url), debug = url.searchParams.has('debug');
  const cache = caches.default, ck = new Request(url.origin + '/api/kiosco' + (debug ? '?debug' : ''));
  if (!debug) { const hit = await cache.match(ck); if (hit) return hit; }
  const out = await Promise.all(Object.keys(SOURCES).map(k => getSource(k, debug)));
  const body = JSON.stringify({ updated: new Date().toISOString(), sources: out });
  const res = new Response(body, { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=' + TTL } });
  if (!debug && out.some(s => s.items.length)) waitUntil(cache.put(ck, res.clone()));
  return res;
}
