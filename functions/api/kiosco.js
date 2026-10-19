// Cloudflare Pages Function — GET /api/kiosco
// Kiosco del Estudio: titulares en vivo de medios con licencia abierta.
//  · Agencia SINC — Creative Commons 4.0 (se cita a SINC como fuente)
//  · Global Voices en español — CC BY (autor + Global Voices + enlace)
//  · The Conversation (España) — CC BY-ND: solo título, autor y su entradilla, con enlace al artículo completo
// No se usan imágenes de los medios (sus licencias de imagen son distintas). Caché: 30 minutos.

const TTL = 1800;
const SOURCES = {
  sinc: { name: 'Agencia SINC', home: 'https://www.agenciasinc.es', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/deed.es',
          merge: true, feeds: ['https://www.agenciasinc.es/feed/Tecnologia', 'https://www.agenciasinc.es/feed/Innova', 'https://www.agenciasinc.es/feed/Noticias'] },
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
  const S = SOURCES[key], tried = [], acc = [];
  for (const u of S.feeds) {
    try {
      const r = await fetch(u, { headers: { 'user-agent': 'CruzTRD-Kiosco/1.0 (+https://cruztrd.com)', accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml' }, cf: { cacheTtl: TTL, cacheEverything: true } });
      tried.push(u + ' ' + r.status);
      if (!r.ok) continue;
      let xml = await r.text();
      if (!/<(rss|feed|rdf:RDF)[\s>]/i.test(xml)) {            // pagina HTML: buscar su feed RSS/Atom
        const m = xml.match(/<link[^>]+type=["']application\/(?:rss|atom)\+xml["'][^>]*>/i);
        const h = m && m[0].match(/href=["']([^"']+)["']/i);
        let cands = h ? [h[1]] : (xml.match(/href=["'][^"']*(?:rss|feed|\.xml)[^"']*["']/gi) || []).map(x => x.slice(6, -1));
        cands = [...new Set(cands.map(c => new URL(decode(c), u).toString()))].filter(c => c !== u).slice(0, 6);
        if (debug) tried.push('html; candidatos: ' + cands.join(' '));
        let got = null;
        for (const fu of cands) {
          const r2 = await fetch(fu, { headers: { 'user-agent': 'CruzTRD-Kiosco/1.0 (+https://cruztrd.com)' }, cf: { cacheTtl: TTL, cacheEverything: true } });
          const t2 = r2.ok ? await r2.text() : '';
          tried.push(fu + ' ' + r2.status + (/<(rss|feed|rdf:RDF)[\s>]/i.test(t2) ? ' feed' : ''));
          if (/<(rss|feed|rdf:RDF)[\s>]/i.test(t2) && parse(t2, key).length) { got = t2; break; }
          if (debug && t2 && !got) tried.push('  en esa pagina: ' + ((t2.match(/href=["'][^"']*(?:rss|feed|\.xml)[^"']*["']/gi) || []).slice(0, 15).join(' ')));
        }
        if (!got) continue; xml = got;
      }
      const items = parse(xml, key);
      if (S.merge && items.length) { acc.push(...items); continue; }
      if (items.length) return { key, name: S.name, home: S.home, license: S.license, licenseUrl: S.licenseUrl, feed: u, items, ...(debug ? { tried } : {}) };
    } catch (e) { tried.push(u + ' ERR ' + e.message); }
  }
  if (acc.length) { const seen = new Set();
    const items = acc.filter(x => !seen.has(x.url) && seen.add(x.url)).sort((a, b) => (b.date || '').localeCompare(a.date || '')).slice(0, 12);
    return { key, name: S.name, home: S.home, license: S.license, licenseUrl: S.licenseUrl, items, ...(debug ? { tried } : {}) }; }
  return { key, name: S.name, home: S.home, license: S.license, licenseUrl: S.licenseUrl, items: [], error: 'sin datos', ...(debug ? { tried } : {}) };
}

// Validación técnica (solo URLs fijas): ¿se pueden incrustar? ¿tienen feed?
const PROBE = ['https://www.elcomercio.com/', 'https://www.elcomercio.com/feed/', 'https://www.elcomercio.com/rss/', 'https://edicionimpresa.elcomercio.com/',
  'https://www.cosas.com.ec/', 'https://www.cosas.com.ec/feed/', 'https://prensadigital.pressreader.com/', 'https://www.pressreader.com/ecuador/el-universo',
  'https://www.eluniverso.com/', 'https://www.primicias.ec/', 'https://www.vistazo.com/'];
async function probe() {
  return Promise.all(PROBE.map(async u => {
    try {
      const r = await fetch(u, { redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 (compatible; CruzTRD-Kiosco/1.0)' } });
      const t = await r.text(); const csp = r.headers.get('content-security-policy') || '';
      const fa = (csp.match(/frame-ancestors[^;]*/i) || [''])[0];
      const feed = /<(rss|feed)[\s>]/i.test(t);
      return { u, status: r.status, final: r.url, type: r.headers.get('content-type'), xfo: r.headers.get('x-frame-options'), frameAncestors: fa,
        feed, items: feed ? (t.match(/<item[\s>]|<entry[\s>]/gi) || []).length : 0, firstTitle: feed ? clean(tag((t.match(/<item[\s>][\s\S]*?<\/item>|<entry[\s>][\s\S]*?<\/entry>/i) || [''])[0], ['title'])) : '',
        rssLinks: feed ? [] : (t.match(/<link[^>]+application\/(?:rss|atom)\+xml[^>]*>/gi) || []).slice(0, 3) };
    } catch (e) { return { u, error: e.message }; }
  }));
}

export async function onRequestGet({ request, waitUntil }) {
  const url = new URL(request.url), debug = url.searchParams.has('debug');
  if (url.searchParams.has('probe')) return new Response(JSON.stringify(await probe()), { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
  const cache = caches.default, ck = new Request(url.origin + '/api/kiosco' + (debug ? '?debug' : ''));
  if (!debug) { const hit = await cache.match(ck); if (hit) return hit; }
  const out = await Promise.all(Object.keys(SOURCES).map(k => getSource(k, debug)));
  const body = JSON.stringify({ updated: new Date().toISOString(), sources: out });
  const res = new Response(body, { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=' + TTL } });
  if (!debug && out.some(s => s.items.length)) waitUntil(cache.put(ck, res.clone()));
  return res;
}
