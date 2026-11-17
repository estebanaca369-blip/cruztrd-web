/* Empresa: el edificio por capas. Un piso abierto a la vez. */
(function(){
  'use strict';
  var ed=document.getElementById('edificio'); if(!ed) return;
  ed.classList.add('js');
  var pisos=[].slice.call(ed.querySelectorAll('.piso'));
  function abrir(p){
    pisos.forEach(function(q){ var on=q===p; q.classList.toggle('abierto',on); q.querySelector('button').setAttribute('aria-expanded',on?'true':'false'); });
  }
  pisos.forEach(function(p){
    p.querySelector('button').addEventListener('click',function(){ abrir(p); });
    p.addEventListener('click',function(e){ if(!e.target.closest('a,button')) abrir(p); });
  });
})();
