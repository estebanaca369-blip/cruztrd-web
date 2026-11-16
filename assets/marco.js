/* CruzTRD — menú y año del pie, compartidos por todas las páginas */
(function(){
  var b=document.getElementById('burger'), n=document.getElementById('navlinks');
  if(b&&n){
    var poner=function(o){ n.classList.toggle('open',o); b.setAttribute('aria-expanded',o?'true':'false'); b.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú'); };
    b.addEventListener('click',function(e){ e.stopPropagation(); var o=!n.classList.contains('open'); poner(o); if(o){ var a=n.querySelector('a'); if(a) setTimeout(function(){ a.focus(); },60); } });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&n.classList.contains('open')){ poner(false); b.focus(); } });
    document.addEventListener('click',function(e){ if(n.classList.contains('open')&&!n.contains(e.target)) poner(false); });
    n.addEventListener('click',function(e){ if(e.target.tagName==='A') poner(false); });
    n.addEventListener('focusout',function(e){ if(n.classList.contains('open')&&e.relatedTarget&&!n.contains(e.relatedTarget)&&e.relatedTarget!==b) poner(false); });
  }
  var y=document.querySelectorAll('[data-year]'); for(var i=0;i<y.length;i++) y[i].textContent=new Date().getFullYear();
})();
