/* CRUZTRD CT S.A.S. — comportamiento compartido del sitio */
(function () {
  'use strict';

  // --- Tema (claro / oscuro) con preferencia guardada ---
  var root = document.documentElement;
  var KEY = 'cruztrd-theme';
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function apply(mode) {
    if (mode === 'light' || mode === 'dark') root.setAttribute('data-theme', mode);
    else root.removeAttribute('data-theme');
  }
  apply(stored());
  function currentIsDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function wireTheme() {
    var btn = document.getElementById('themeBtn');
    if (!btn) return;
    function label() { btn.setAttribute('aria-label', currentIsDark() ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'); }
    label();
    btn.addEventListener('click', function () {
      var next = currentIsDark() ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      label();
    });
  }

  // --- Menú móvil ---
  function wireMenu() {
    var burger = document.getElementById('burger');
    var links = document.getElementById('navlinks');
    if (!burger || !links) return;
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
    });
  }

  // --- Año del pie ---
  function wireYear() {
    var els = document.querySelectorAll('[data-year]');
    for (var i = 0; i < els.length; i++) els[i].textContent = new Date().getFullYear();
  }

  // --- Formulario de contacto ---
  function wireContact() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    var status = document.getElementById('formStatus');
    var btn = form.querySelector('button[type="submit"]');

    function setErr(name, msg) {
      var e = form.querySelector('[data-err="' + name + '"]');
      if (e) e.textContent = msg || '';
    }
    function emailOk(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

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
      if (!ok) return;

      btn.disabled = true; var orig = btn.textContent; btn.textContent = 'Enviando…';
      fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: nombre, correo: correo, mensaje: mensaje })
      }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { ok: r.ok, d: d }; }); })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            status.textContent = 'Gracias, ' + nombre.split(' ')[0] + '. Recibimos tu mensaje y te responderemos a ' + correo + '.';
            status.className = 'form-status ok';
          } else {
            throw new Error((res.d && res.d.error) || 'error');
          }
        })
        .catch(function () {
          status.innerHTML = 'No pudimos enviar el formulario. Escríbenos directamente a <a href="mailto:esteban@cruztrd.com">esteban@cruztrd.com</a>.';
          status.className = 'form-status bad';
        })
        .then(function () { btn.disabled = false; btn.textContent = orig; });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  function init() { wireTheme(); wireMenu(); wireYear(); wireContact(); }
})();
