/* CruzTRD — menú y año del pie, compartidos por todas las páginas */
(function(){
  var b=document.getElementById('burger'), n=document.getElementById('navlinks');
  if(b&&n){
    var poner=function(o){ n.classList.toggle('open',o); b.setAttribute('aria-expanded',o?'true':'false'); b.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú'); };
    b.addEventListener('click',function(e){ e.stopPropagation(); var o=!n.classList.contains('open'); poner(o); if(o){ var a=n.querySelector('a'); if(a) setTimeout(function(){ a.focus(); },60); } });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&n.classList.contains('open')){ poner(false); b.focus(); } });
    // con el menú abierto, un toque fuera solo lo cierra: no activa lo que hay debajo
    var tragar=false;
    document.addEventListener('pointerdown',function(e){ tragar=n.classList.contains('open')&&!n.contains(e.target)&&!b.contains(e.target); },true);
    document.addEventListener('click',function(e){ if(tragar||(n.classList.contains('open')&&!n.contains(e.target)&&!b.contains(e.target))){ tragar=false; e.preventDefault(); e.stopPropagation(); poner(false); } },true);
    addEventListener('scroll',function(){ if(n.classList.contains('open')&&scrollY>40) poner(false); },{passive:true});
    n.addEventListener('click',function(e){ if(e.target.tagName==='A') poner(false); });
    n.addEventListener('focusout',function(e){ if(n.classList.contains('open')&&e.relatedTarget&&!n.contains(e.relatedTarget)&&e.relatedTarget!==b) poner(false); });
  }
  var y=document.querySelectorAll('[data-year]'); for(var i=0;i<y.length;i++) y[i].textContent=new Date().getFullYear();
})();
/* Índice de las páginas legales: marca la sección que estás leyendo */
(function(){
  var ix=document.querySelector('.indice'); if(!ix||!('IntersectionObserver' in window)) return;
  var ls=[].slice.call(ix.querySelectorAll('a')), vis={};
  function marca(){ var id=null; ls.some(function(a){ var k=a.getAttribute('href').slice(1); if(vis[k]){ id=k; return true; } return false; }); if(!id) return; ls.forEach(function(a){ if(a.getAttribute('href')==='#'+id) a.setAttribute('aria-current','true'); else a.removeAttribute('aria-current'); }); }
  var io=new IntersectionObserver(function(es){ es.forEach(function(e){ vis[e.target.id]=e.isIntersecting; }); marca(); },{rootMargin:'-20% 0px -60% 0px'});
  ls.forEach(function(a){ var t=document.getElementById(a.getAttribute('href').slice(1)); if(t) io.observe(t); });
})();
