// Cloudflare Pages Function — POST /api/contacto
// Recibe el formulario de contacto del sitio corporativo.
// Validación en el servidor + entrega opcional por correo.
//
// Para entregar los mensajes por correo, define una de estas variables de
// entorno (cifradas) en el proyecto de Cloudflare Pages:
//   RESEND_API_KEY   -> envía vía Resend a CONTACT_TO (requiere dominio verificado en Resend)
//   CONTACT_WEBHOOK  -> hace POST del mensaje (JSON) a esa URL (p. ej. un webhook de correo/Slack)
// Y opcionalmente:
//   CONTACT_TO       -> destinatario (por defecto esteban@cruztrd.com)
//   CONTACT_FROM     -> remitente verificado (por defecto no-reply@cruztrd.com)
//
// Si no hay ninguna configurada, el endpoint valida y acepta el mensaje
// (200) para que el formulario sea funcional; la entrega se conecta después.

const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' };

function json(obj, status) {
  return new Response(JSON.stringify(obj), { status: status || 200, headers: JSON_HEADERS });
}

function clean(s, max) {
  return String(s == null ? '' : s).replace(/\s+/g, ' ').trim().slice(0, max);
}
function emailOk(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
function esc(s) {
  return String(s).replace(/[<>&]/g, function (c) { return c === '<' ? '&lt;' : c === '>' ? '&gt;' : '&amp;'; });
}

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch (e) { return json({ error: 'JSON inválido' }, 400); }

  const nombre = clean(body.nombre, 80);
  const correo = clean(body.correo, 120);
  const mensaje = String(body.mensaje == null ? '' : body.mensaje).trim().slice(0, 2000);
  // honeypot opcional
  if (clean(body.website, 80)) return json({ ok: true });

  if (nombre.length < 2) return json({ error: 'Nombre inválido' }, 400);
  if (!emailOk(correo)) return json({ error: 'Correo inválido' }, 400);
  if (mensaje.length < 10) return json({ error: 'Mensaje muy corto' }, 400);

  const to = env.CONTACT_TO || 'esteban@cruztrd.com';
  const from = env.CONTACT_FROM || 'no-reply@cruztrd.com';
  const subject = 'Contacto web · ' + nombre;
  const text =
    'Nuevo mensaje desde cruztrd.com/contacto\n\n' +
    'Nombre: ' + nombre + '\n' +
    'Correo: ' + correo + '\n\n' +
    'Mensaje:\n' + mensaje + '\n';

  try {
    if (env.RESEND_API_KEY) {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'CruzTRD <' + from + '>',
          to: [to],
          reply_to: correo,
          subject: subject,
          text: text,
          html: '<p><b>Nombre:</b> ' + esc(nombre) + '</p><p><b>Correo:</b> ' + esc(correo) +
                '</p><p><b>Mensaje:</b></p><p>' + esc(mensaje).replace(/\n/g, '<br>') + '</p>'
        })
      });
      if (!r.ok) return json({ error: 'No se pudo enviar el correo' }, 502);
      return json({ ok: true });
    }

    if (env.CONTACT_WEBHOOK) {
      const r = await fetch(env.CONTACT_WEBHOOK, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: nombre, correo: correo, mensaje: mensaje, source: 'cruztrd.com/contacto' })
      });
      if (!r.ok) return json({ error: 'No se pudo entregar el mensaje' }, 502);
      return json({ ok: true });
    }

    // Sin proveedor configurado todavía: aceptamos para que el formulario sea funcional.
    return json({ ok: true, delivered: false });
  } catch (e) {
    return json({ error: 'Error de entrega' }, 502);
  }
}
