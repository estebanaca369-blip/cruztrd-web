// El código fuente legible no forma parte del sitio publicado.
export const onRequest = () => new Response('No encontrado', { status: 404, headers: { 'content-type': 'text/plain; charset=utf-8', 'x-robots-tag': 'noindex' } });
