/* Productos: recorrido por las pantallas de Declárame */
(function(){
  'use strict';
  var tl=document.getElementById('demoTabs'), img=document.getElementById('demoImg'), fig=document.getElementById('dp'), n=document.getElementById('demoN');
  if(!tl||!img) return;
  var tabs=[].slice.call(tl.querySelectorAll('[role="tab"]')), cur=0, pre={};
  function carga(i){ if(pre[i]) return; var im=new Image(); im.src=tabs[i].getAttribute('data-src'); pre[i]=im; }
  function ver(i,foco){
    i=(i+tabs.length)%tabs.length; if(i===cur&&!foco) return; cur=i;
    tabs.forEach(function(t,k){ var on=k===i; t.setAttribute('aria-selected',on?'true':'false'); t.tabIndex=on?0:-1; });
    var t=tabs[i]; fig.setAttribute('aria-labelledby',t.id); n.textContent=(i+1)+' de '+tabs.length;
    img.classList.add('cambia');
    var src=t.getAttribute('data-src'), alt=t.getAttribute('data-alt');
    setTimeout(function(){ img.src=src; img.alt=alt; var fin=function(){ img.classList.remove('cambia'); }; if(img.complete) fin(); else { img.onload=fin; img.onerror=fin; } },160);
    if(foco) t.focus();
    if(t.scrollIntoView&&tl.scrollWidth>tl.clientWidth) tl.scrollTo({left:t.offsetLeft-tl.clientWidth/2+t.offsetWidth/2,behavior:'smooth'});
    carga((i+1)%tabs.length);
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){ ver(i); });
    t.addEventListener('pointerenter',function(){ carga(i); });
  });
  tl.addEventListener('keydown',function(e){
    var k=e.key;
    if(k==='ArrowDown'||k==='ArrowRight'){ e.preventDefault(); ver(cur+1,true); }
    else if(k==='ArrowUp'||k==='ArrowLeft'){ e.preventDefault(); ver(cur-1,true); }
    else if(k==='Home'){ e.preventDefault(); ver(0,true); }
    else if(k==='End'){ e.preventDefault(); ver(tabs.length-1,true); }
  });
  // en el teléfono: deslizar sobre la pantalla para pasar a la siguiente
  var x0=null;
  fig.addEventListener('touchstart',function(e){ x0=e.touches[0].clientX; },{passive:true});
  fig.addEventListener('touchend',function(e){ if(x0===null) return; var dx=e.changedTouches[0].clientX-x0; x0=null; if(Math.abs(dx)>40) ver(cur+(dx<0?1:-1)); },{passive:true});
  fig.addEventListener('click',function(){ ver(cur+1); });
  carga(1);
})();
