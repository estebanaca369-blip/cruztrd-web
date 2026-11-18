/* CruzTRD — inicio: portada, lista de capas y diagnóstico */
(function(){

  /* Pisos: la foto sigue a la fila */
  var filas=[].slice.call(document.querySelectorAll('#lista a')), fotos=[].slice.call(document.querySelectorAll('#visor img')), txt=document.getElementById('visorTxt');
  var losas=[].slice.call(document.querySelectorAll('#torre i')), alto=0;
  function torre(i){ losas.forEach(function(l,k){ l.className=k===i?'on':(k<i?'ya':''); }); }
  function ver(a){ var i=+a.getAttribute('data-i'); filas.forEach(function(f){f.classList.toggle('on',f===a);}); fotos.forEach(function(f,k){f.classList.toggle('on',k===i);}); txt.textContent=a.getAttribute('data-n'); torre(i); }
  var actual=null; function poner(a){ if(a&&a!==actual){ actual=a; ver(a); } }
  /* mientras se hace scroll, el puntero no manda: solo cuenta si de verdad se mueve sobre una fila */
  var rodando=0, raiz=document.documentElement;
  addEventListener('scroll',function(){ raiz.classList.add('rodando'); clearTimeout(rodando); rodando=setTimeout(function(){ raiz.classList.remove('rodando'); },180); centro(); },{passive:true});
  filas.forEach(function(a){ a.addEventListener('pointermove',function(e){ if(e.pointerType==='mouse'&&!raiz.classList.contains('rodando')) poner(a); }); a.addEventListener('focus',function(){poner(a);}); });
  /* al bajar por la lista, se enciende la fila más cercana al centro de la pantalla */
  var pend=false; function centro(){ if(pend||!filas.length) return; pend=true; requestAnimationFrame(function(){ pend=false; var mid=innerHeight/2, mejor=null, d=1e9;
    filas.forEach(function(a){ var r=a.getBoundingClientRect(); if(r.bottom<0||r.top>innerHeight) return; var c=Math.abs((r.top+r.bottom)/2-mid); if(c<d){ d=c; mejor=a; } });
    var lista=document.getElementById('lista'), rl=lista&&lista.getBoundingClientRect(); if(mejor&&rl&&rl.top<mid&&rl.bottom>mid*0.6) poner(mejor); }); }
  centro();

  /* Portada: la recepción gira sola y se puede arrastrar */
  (function(){
    var caja=document.querySelector('.portada'), tira=document.querySelector('.giro'), pista=document.getElementById('pista'); if(!caja||!tira) return;
    var quieto=false; try{ quieto=matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){}
    var x=0, v=quieto?0:-0.012, base=v, ancho=0, arr=false, px=0, ult=0, t0=0;
    var puesto=false; function medir(){ var w=tira.scrollWidth/2; if(w<200){ setTimeout(medir,120); return; } ancho=w; if(!puesto){ puesto=true; x=innerWidth<900?-(ancho*0.4535-innerWidth/2):-(ancho*0.5-innerWidth*0.72); } }
    function pinta(){ if(ancho){ while(x<=-ancho) x+=ancho; while(x>0) x-=ancho; } tira.style.transform='translate3d('+x.toFixed(1)+'px,0,0)'; }
    function paso(t){ var dt=Math.min(50,t-(t0||t)); t0=t; if(!arr&&puesto){ x+=v*dt; v+=(base-v)*0.035; } pinta(); requestAnimationFrame(paso); }
    caja.addEventListener('pointerdown',function(e){ if(e.target.closest('a:not(.toca),button')) return; arr=true; px=e.clientX; ult=0; movido=0; caja.classList.add('arr'); if(pista) pista.classList.add('fuera'); });
    addEventListener('pointermove',function(e){ if(!arr) return; var d=e.clientX-px; px=e.clientX; x+=d; ult=d; movido+=Math.abs(d); });
    var movido=0; tira.addEventListener('click',function(e){ if(movido>8&&e.target.closest('.toca')){ e.preventDefault(); e.stopPropagation(); } },true);
    tira.addEventListener('dragstart',function(e){ e.preventDefault(); });
    tira.addEventListener('focusin',function(e){ var a=e.target.closest('.toca'); if(!a) return; v=0; base=0; var r=a.getBoundingClientRect(); if(r.left<40||r.right>innerWidth-40){ x+=innerWidth/2-(r.left+r.width/2); } });
    function suelta(){ if(!arr) return; arr=false; caja.classList.remove('arr'); v=Math.max(-2.2,Math.min(2.2,ult/16)); }
    addEventListener('pointerup',suelta); addEventListener('pointercancel',suelta);
    var im=tira.querySelector('img'); im.addEventListener('load',medir); medir(); addEventListener('resize',function(){ ancho=tira.scrollWidth/2; });
    setTimeout(function(){ if(pista) pista.classList.add('fuera'); },6000);
    requestAnimationFrame(paso);
  })();
  /* Entrada al estudio: funde a negro y continúa en el recorrido */
  [].slice.call(document.querySelectorAll('[data-entrar]')).forEach(function(a){ a.addEventListener('click',function(e){ if(e.metaKey||e.ctrlKey||e.shiftKey||e.button) return; e.preventDefault(); var v=document.getElementById('velo'); v.classList.add('on'); setTimeout(function(){ location.href=a.href; },260); }); });
  addEventListener('pageshow',function(){ var v=document.getElementById('velo'); if(v) v.classList.remove('on'); });

  /* Diagnóstico con IA */
  var NOM={infra:'Infraestructura',seg:'Seguridad',pagos:'Pagos',susc:'Suscripciones',mkt:'Marketing',fidel:'Fidelización',dash:'Dashboards'};
  var ORDEN=['infra','seg','pagos','susc','mkt','fidel','dash'];
  window.COST={infra:{s:[400,900],m:[15,60]},seg:{s:[300,700],m:[0,15]},pagos:{s:[350,750],m:[0,20]},susc:{s:[400,850],m:[0,25]},mkt:{s:[300,650],m:[20,80]},fidel:{s:[350,700],m:[0,35]},dash:{s:[300,600],m:[0,25]}};
  window.nameOf=function(k){ return NOM[k]||k; };
  var ta=document.getElementById('aiText'), go=document.getElementById('aiGo'), nota=document.getElementById('aiNote'), plan=document.getElementById('plan');
  function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function val(id){ var r=document.querySelector('#'+id+' input:checked'); return r?r.value:''; }
  function avisar(html,campo){ nota.innerHTML=html||''; ta.setAttribute('aria-invalid',html&&campo?'true':'false'); if(html){ try{ nota.scrollIntoView({behavior:'smooth',block:'center'}); if(campo) ta.focus({preventScroll:true}); else { nota.setAttribute('tabindex','-1'); nota.focus({preventScroll:true}); } }catch(e){} } }
  function pocaInfo(t){ var w=t.split(/\s+/).filter(function(x){return x.length>1;}); return t.length<15||w.length<3; }

  go.addEventListener('click', async function(){
    var t=(ta.value||'').trim();
    if(!t){ ta.focus({preventScroll:true}); avisar('Escribe tu idea en una o dos frases y armamos tu plan.',1); return; }
    if(pocaInfo(t)){ ta.focus({preventScroll:true}); avisar('Cuéntanos un poco más: qué hace la app, para quién es y cómo cobra.',1); return; }
    var pais=val('aiCountry'), esc_=val('aiScale'), mon=val('aiMonet');
    window.__cruzCtx={country:pais,scale:esc_,monet:mon};
    avisar(''); plan.hidden=true; go.disabled=true; var antes=go.textContent; go.textContent='Analizando tu idea…';
    var out=null;
    try{
      var r=await fetch('/api/diagnose',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({idea:t,country:pais,scale:esc_,monet:mon,hasBase:false})});
      if(r.ok) out=await r.json();
    }catch(e){}
    go.disabled=false; go.textContent=antes;
    if(out&&String(out.status||'')==='error') out=null;
    if(!out){ avisar('No pudimos conectar con el diagnóstico. Inténtalo de nuevo en un momento o <a href="https://wa.me/593988011913?text='+encodeURIComponent('Hola CruzTRD, mi idea es: '+t)+'" target="_blank" rel="noopener">envíanos tu idea por WhatsApp</a>.'); return; }
    var caps=(out.caps||[]).filter(function(c){return c&&NOM[c.k];});
    if(String(out.status||'').toLowerCase().indexOf('incompl')>=0||!caps.length){
      var qs=(out.questions||[]).slice(0,3).map(function(q){return '<li>'+esc(q)+'</li>';}).join('');
      ta.focus({preventScroll:true}); avisar(esc(out.reason||'Nos falta un poco de detalle para armar tu plan.')+(qs?'<ul>'+qs+'</ul>':''),1); return;
    }
    var vistos={}; caps=caps.filter(function(c){ if(vistos[c.k])return false; vistos[c.k]=1; return true; });
    caps.sort(function(a,b){return ORDEN.indexOf(a.k)-ORDEN.indexOf(b.k);});
    window.__cruzDiag={appType:out.appType||'App D2C',summary:out.summary||'',keys:caps.map(function(c){return c.k;})};
    if(!mon){ window.__cruzCtx.monet=window.__cruzDiag.keys.indexOf('susc')>=0?'sub':(window.__cruzDiag.keys.indexOf('pagos')>=0?'once':''); }
    document.getElementById('planTipo').textContent=window.__cruzDiag.appType;
    document.getElementById('planRes').textContent=window.__cruzDiag.summary;
    document.getElementById('planCapas').innerHTML=caps.map(function(c){ var n=('0'+(ORDEN.indexOf(c.k)+1)).slice(-2); return '<li><span class="n">'+n+'</span><b>'+NOM[c.k]+'</b><span class="por">'+esc(c.why||'')+'</span></li>'; }).join('');
    document.getElementById('planWa').href='https://wa.me/593988011913?text='+encodeURIComponent('Hola CruzTRD, hice el diagnóstico en la web. Mi idea: '+t);
    plan.hidden=false;
    try{ plan.scrollIntoView({behavior:'smooth',block:'start'}); plan.focus({preventScroll:true}); }catch(e){}
  });

  /* Propuesta en PDF: el generador se carga solo cuando se pide */
  var cargando=null;
  function generador(){ if(window.__cruzGenPDF) return Promise.resolve(); if(cargando) return cargando;
    cargando=new Promise(function(ok,mal){ var s=document.createElement('script'); s.src='/assets/propuesta.js?v=10'; s.onload=ok; s.onerror=mal; document.head.appendChild(s); }); return cargando; }
  document.getElementById('fcta').addEventListener('click',function(e){ e.preventDefault();
    generador().then(function(){ return window.__cruzGenPDF(); }).catch(function(){ avisar('No pudimos generar el PDF. Escríbenos por WhatsApp y te lo enviamos.'); });
  });
})();
