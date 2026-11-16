var A=[
 {g:'Música',f:'play_sala',k:'music',ms:90000,p:'Calm, warm ambient lounge music for a game lobby in the Andes at golden hour: soft synth pads, gentle charango arpeggios, distant quena flute, light shaker, 84 BPM, hopeful and premium, seamless loop feel, no vocals.'},
 {g:'Música',f:'vuelo_tema',k:'music',ms:120000,p:'Cinematic Andean electronic soundtrack for flying like a condor between volcanoes at sunset: soaring quena and pan flute melody, charango plucks, deep warm sub bass, airy pads, steady downtempo beat that builds energy, 96 BPM, epic but elegant, instrumental, loop-friendly ending.'},
 {g:'Música',f:'descenso_tema',k:'music',ms:120000,p:'Energetic downhill mountain-bike track: driving indie-electronic drums, punchy bass, fast charango riffs and bombo legüero percussion from the Andes, adrenaline and fun, 128 BPM, instrumental, loop-friendly ending.'},
 {g:'Música',f:'feria_tema',k:'music',ms:90000,p:'Playful, sunny puzzle-game music inspired by an Ecuadorian street market: marimba esmeraldeña melody, nylon guitar, light congas and claps, cheerful and relaxed, 104 BPM, instrumental, loop-friendly.'},
 {g:'Vuelo Andino',f:'viento_loop',k:'sfx',sec:10,loop:true,p:'High mountain wind rushing past while gliding, smooth steady airflow, no gusts clipping'},
 {g:'Vuelo Andino',f:'orbe',k:'sfx',sec:0.7,p:'Bright crystalline magical pickup chime, short and sparkly, game collectible'},
 {g:'Vuelo Andino',f:'arco',k:'sfx',sec:1.3,p:'Magical whoosh flying through a glowing ring, rising shimmer and soft choir sparkle'},
 {g:'Vuelo Andino',f:'rozon',k:'sfx',sec:0.9,p:'Fast close air whoosh pass-by, a large bird skimming past a rock'},
 {g:'Vuelo Andino',f:'choque_condor',k:'sfx',sec:1.4,p:'Soft heavy thud against rock followed by feathers fluttering, cartoon-friendly, not violent'},
 {g:'Descenso Andino',f:'grava_loop',k:'sfx',sec:6,loop:true,p:'Mountain bike tires rolling fast on a dry gravel and dirt trail, continuous'},
 {g:'Descenso Andino',f:'salto',k:'sfx',sec:0.8,p:'Mountain bike bunny hop: quick suspension spring and air whoosh'},
 {g:'Descenso Andino',f:'aterrizaje',k:'sfx',sec:0.8,p:'Mountain bike landing on packed dirt, suspension thump and gravel crunch'},
 {g:'Descenso Andino',f:'bandera',k:'sfx',sec:1,p:'Cloth flag flapping as you pass, followed by a bright positive ding'},
 {g:'Descenso Andino',f:'choque_bici',k:'sfx',sec:1.5,p:'Bike skidding and tumbling on a dirt trail with a soft crash, not violent'},
 {g:'Feria',f:'fruta',k:'sfx',sec:0.5,p:'Juicy fruit pop and squish, cute match-three game sound'},
 {g:'Feria',f:'canasta',k:'sfx',sec:1.2,p:'Woven wicker basket whoosh with sparkling reward chime'},
 {g:'Billetera',f:'canje',k:'sfx',sec:1.6,p:'Premium reward unlocked sound: warm rising bell arpeggio with soft shimmer'}
];
var tok=document.getElementById('tok'); try{ tok.value=sessionStorage.getItem('ctrd_audio_tok')||''; }catch(e){}
tok.addEventListener('change',function(){ try{ sessionStorage.setItem('ctrd_audio_tok',tok.value); }catch(e){} });
var L=document.getElementById('lists'), groups={};
A.forEach(function(a,i){ if(!groups[a.g]){ var h=document.createElement('h2'); h.textContent=a.g; L.appendChild(h); var g=document.createElement('div'); g.className='grid'; L.appendChild(g); groups[a.g]=g; }
  var d=document.createElement('div'); d.className='it'; d.innerHTML='<div class="row"><b>'+a.f+'.mp3</b><code>'+(a.k==='music'?('música · '+a.ms/1000+' s'):('efecto · '+a.sec+' s'+(a.loop?' · loop':'')))+'</code></div><div class="pr"></div><div class="row"><button data-i="'+i+'">Generar</button><span class="st"></span></div>';
  d.querySelector('.pr').textContent=a.p; groups[a.g].appendChild(d); a.el=d; });
async function gen(i){ var a=A[i], b=a.el.querySelector('button'), st=a.el.querySelector('.st'); if(!tok.value){ st.textContent='Falta el token'; st.className='st err'; return false; }
  b.disabled=true; st.className='st'; st.textContent=a.k==='music'?'Componiendo… (puede tardar 1–2 min)':'Generando…';
  try{ var r=await fetch('/api/audiogen',{method:'POST',headers:{'content-type':'application/json','x-admin':tok.value},body:JSON.stringify({kind:a.k,prompt:a.p,ms:a.ms,sec:a.sec,loop:a.loop})});
    var ct=r.headers.get('content-type')||''; if(ct.indexOf('audio')<0){ var j=await r.json().catch(function(){ return {}; }); throw new Error((j.error||('HTTP '+r.status))+(j.detail?(': '+j.detail):'')); }
    var blob=await r.blob(), u=URL.createObjectURL(blob); var old=a.el.querySelector('audio'); if(old) old.remove(); var old2=a.el.querySelector('a.dl'); if(old2) old2.remove();
    var au=document.createElement('audio'); au.controls=true; au.src=u; if(a.loop) au.loop=true; a.el.appendChild(au);
    var dl=document.createElement('a'); dl.className='dl'; dl.href=u; dl.download=a.f+'.mp3'; dl.textContent='Descargar '+a.f+'.mp3'; b.parentNode.insertBefore(dl,st); b.textContent='Regenerar'; a.done=true; st.textContent='Listo ('+Math.round(blob.size/1024)+' KB)'; st.className='st ok'; return true;
  }catch(e){ st.textContent='Error: '+e.message; st.className='st err'; return false; } finally{ b.disabled=false; } }
L.addEventListener('click',function(e){ var b=e.target.closest('button[data-i]'); if(b) gen(+b.getAttribute('data-i')); });
document.getElementById('all').onclick=async function(){ var g=document.getElementById('gst'), n=0; for(var i=0;i<A.length;i++){ if(A[i].done) continue; g.textContent='Generando '+(i+1)+' de '+A.length+'…'; if(await gen(i)) n++; } g.textContent='Terminado: '+n+' archivos nuevos. Descárgalos uno por uno.'; };
