/* CRUZTRD CT S.A.S. — comportamiento compartido del sitio */
(function () {
  'use strict';

  // --- Formulario de contacto ---
  function wireContact() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    var status = document.getElementById('formStatus');
    var btn = form.querySelector('button[type="submit"]');

    function setErr(name, msg) {
      var e = form.querySelector('[data-err="' + name + '"]');
      if (e) { e.textContent = msg || ''; e.setAttribute('role', 'alert'); if (!e.id) e.id = 'err-' + name; }
      var f = form[name];
      if (f && f.setAttribute) { if (msg) { f.setAttribute('aria-invalid', 'true'); if (e) f.setAttribute('aria-describedby', e.id); } else { f.removeAttribute('aria-invalid'); } }
    }
    function emailOk(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
    // Si vienes del recorrido con un plan, el mensaje llega con tu idea ya escrita
    try {
      var pl = JSON.parse(sessionStorage.getItem('cz_plan') || 'null');
      if (pl && !form.mensaje.value) {
        form.mensaje.value = 'Quiero construir mi app. Plan del Estudio 360°: ' + String(pl.t || '').slice(0, 80) + ' · capas: ' + (pl.c || []).join(', ').slice(0, 200) + '.' + (pl.i ? '\nMi idea: ' + String(pl.i).slice(0, 1200) : '');
        var r0 = form.querySelector('input[name="motivo"]'); if (r0) r0.checked = true;
        sessionStorage.removeItem('cz_plan');
      }
    } catch (e) {}
    // El motivo elegido encabeza el mensaje y ajusta la pista del campo
    var pistas = { 'Quiero construir una app nueva': 'Qué hace tu app, para quién es y cómo gana dinero', 'Tengo una app y quiero mejorarla': 'Qué app tienes hoy y qué te gustaría cambiar', 'Quiero integrar IA en mi negocio': 'A qué se dedica tu negocio y qué tarea quieres resolver con IA', 'Tengo otra consulta': 'Cuéntanos tu consulta' };
    [].forEach.call(form.querySelectorAll('input[name="motivo"]'), function (r) {
      r.addEventListener('change', function () { form.mensaje.placeholder = pistas[r.value] || form.mensaje.placeholder; });
    });


    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      status.textContent = ''; status.className = 'form-status';
      var nombre = form.nombre.value.trim();
      var correo = form.correo.value.trim();
      var mensaje = form.mensaje.value.trim();
      var ok = true;
      setErr('nombre', ''); setErr('correo', ''); setErr('mensaje', '');
      if (nombre.length < 2) { setErr('nombre', 'Escribe tu nombre.'); ok = false; }
      if (!emailOk(correo)) { setErr('correo', 'Escribe un correo válido.'); ok = false; }
      if (mensaje.length < 10) { setErr('mensaje', 'Cuéntanos un poco más (mínimo 10 caracteres).'); ok = false; }
      var mot = form.querySelector('input[name="motivo"]:checked');
      if (mot) mensaje = '[' + mot.value + ']\n' + mensaje;
      if (!ok) { var mal = form.querySelector('[aria-invalid="true"]'); if (mal) { mal.focus({ preventScroll: true }); requestAnimationFrame(function () { mal.scrollIntoView({ block: 'center' }); }); } return; }

      btn.disabled = true; var orig = btn.textContent; btn.textContent = 'Enviando…';
      fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: nombre, correo: correo, mensaje: mensaje, website: (document.getElementById('website')||{}).value||'' })
      }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { ok: r.ok, d: d }; }); })
        .then(function (res) {
          if (res.ok && res.d && res.d.delivered === false) {
            // El servidor aún no tiene buzón conectado: el mensaje se entrega por correo o WhatsApp, ya escrito.
            var cuerpo = 'Hola CruzTRD, soy ' + nombre + ' (' + correo + ').\n\n' + mensaje;
            var m = 'mailto:esteban@cruztrd.com?subject=' + encodeURIComponent('Contacto web · ' + nombre) + '&body=' + encodeURIComponent(cuerpo);
            var w = 'https://wa.me/593988011913?text=' + encodeURIComponent(cuerpo);
            status.innerHTML = 'Tu mensaje está listo. Envíalo con un toque por <a href="' + m + '">correo</a> o por <a href="' + w + '" target="_blank" rel="noopener">WhatsApp</a> y te respondemos enseguida.';
            status.className = 'form-status ok'; try { status.setAttribute('tabindex','-1'); status.scrollIntoView({block:'center'}); status.focus({preventScroll:true}); } catch (e) {}
          } else if (res.ok) {
            form.reset();
            status.textContent = 'Gracias, ' + nombre.split(' ')[0] + '. Recibimos tu mensaje y te responderemos a ' + correo + '.';
            status.className = 'form-status ok'; try { status.setAttribute('tabindex','-1'); status.scrollIntoView({block:'center'}); status.focus({preventScroll:true}); } catch (e) {}
          } else {
            throw new Error((res.d && res.d.error) || 'error');
          }
        })
        .catch(function () {
          status.innerHTML = 'No pudimos enviar el formulario. Escríbenos directamente a <a href="mailto:esteban@cruztrd.com">esteban@cruztrd.com</a>.';
          status.className = 'form-status bad'; try { status.setAttribute('tabindex','-1'); status.scrollIntoView({block:'center'}); status.focus({preventScroll:true}); } catch (e) {}
        })
        .then(function () { btn.disabled = false; btn.textContent = orig; });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  function init() { wireContact(); }
})();
