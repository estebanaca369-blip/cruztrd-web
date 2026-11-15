/* ================= CruzTRD · Documento confidencial (PDF real) ================= */
(function(){
  var GREEN=[45,212,167], BLACK=[7,9,12], INK=[22,26,32], MUT=[95,105,115], LINE=[228,232,236], SOFT=[244,250,247];

  /* ---- Datos reales: mercado Ecuador ---- */
  /* ---- Datos reales de mercado por pais (DataReportal / Banco Mundial) ---- */
  var MARKETS={
    'Ecuador':{stats:[['Población','18,3 M (oct 2025)'],['Usuarios de internet','15,4 M - 83,9%'],['Conexiones móviles','18,4 M - ~100%'],['Compran en línea','~50% de los adultos'],['Mercado e-commerce','US$6.400 millones (2024) a US$11.000 millones en 2027 (+20%/año)'],['Ventas por móvil','75% del volumen']],
      pagos:[['Tarjeta de crédito','74%'],['Tarjeta de débito','16%'],['Billeteras (DeUna, etc.)','6%'],['Transferencias','3%'],['Efectivo','1%']],
      fuente:'DataReportal Digital 2026 Ecuador; PaymentsCMI 2024-2025.'},
    'Colombia':{stats:[['Población','~52,9 M'],['Usuarios de internet','~77% de la población'],['Conexiones móviles','>130% de la población']],
      fuente:'Banco Mundial 2023; DataReportal.'},
    'Peru':{stats:[['Población','34,4 M (ene 2025)'],['Usuarios de internet','27,3 M - 79,5%'],['Conexiones móviles','39,4 M - 115%']],
      fuente:'DataReportal Digital 2025 Peru.'},
    'Mexico':{stats:[['Población','132 M (oct 2025)'],['Usuarios de internet','110 M - 83,5%'],['Conexiones móviles','145 M - 110%']],
      fuente:'DataReportal Digital 2026 Mexico.'},
    'Chile':{stats:[['Población','19,8 M (ene 2025)'],['Usuarios de internet','18,6 M - 94,1%'],['Conexiones móviles','30,7 M - 155%']],
      fuente:'DataReportal Digital 2025 Chile.'},
    'Argentina':{stats:[['Población','45,8 M (ene 2025)'],['Usuarios de internet','41,2 M - 90,1%'],['Conexiones móviles','64,7 M - 141%']],
      fuente:'DataReportal Digital 2025 Argentina.'}
  };
  var CKEY={'Ecuador':'Ecuador','Colombia':'Colombia','Peru':'Peru','Perú':'Peru','Mexico':'Mexico','México':'Mexico','Chile':'Chile','Argentina':'Argentina'};
  var PAYRAILS={
    'Ecuador':'PayPhone, Kushki, Datafast y DeUna (local). Stripe solo si tienes una entidad en un país donde opera',
    'Colombia':'Mercado Pago, PSE, Nequi y Wompi (local). Stripe solo con entidad en un país donde opera',
    'Peru':'Mercado Pago, Yape, Niubiz, Culqi y PagoEfectivo (local). Stripe solo con entidad en un país donde opera',
    'Mexico':'Stripe / Mercado Pago + SPEI, Clip y OXXO Pay (local)',
    'Chile':'Webpay (Transbank), Khipu y Mercado Pago (local). Stripe solo con entidad en un país donde opera',
    'Argentina':'Mercado Pago, MODO y Ualá (local). Stripe solo con entidad en un país donde opera',
    'Otro':'Stripe o PayPal, según dónde esté constituida tu empresa'
  };
  function mkFor(c){ return MARKETS[CKEY[c]||c]||null; }
  function railsFor(c){ return PAYRAILS[CKEY[c]||c]||PAYRAILS['Otro']; }

  /* ---- Infraestructura DigitalOcean por escala de usuarios (precios reales 2026) ---- */
  var DO_TIERS={
    s1:{label:'menos de 1.000 usuarios', rows:[
      ['Droplet 1 vCPU - 2 GB RAM - 50 GB SSD','Servidor de la app',12],
      ['Managed PostgreSQL 1 GB - backups diarios','Base de datos',15],
      ['Spaces 250 GB + 1 TB CDN','Imágenes y archivos',5]]},
    s2:{label:'1.000 a 10.000 usuarios', rows:[
      ['Droplet 2 vCPU - 4 GB RAM - 80 GB SSD','Servidor de la app',24],
      ['Managed PostgreSQL 1 GB - backups diarios','Base de datos',15],
      ['Spaces 250 GB + 1 TB CDN','Imágenes y archivos',5]]},
    s3:{label:'10.000 a 50.000 usuarios', rows:[
      ['2 x Droplet 2 vCPU - 4 GB RAM','App con redundancia',48],
      ['Load Balancer','Reparte el tráfico, alta disponibilidad',12],
      ['Managed PostgreSQL 1 GB - backups diarios','Base de datos (se escala según carga)',15],
      ['Spaces 250 GB + 1 TB CDN','Imágenes y archivos',5]]},
    s4:{label:'más de 50.000 usuarios', rows:[
      ['2 x Droplet 4 vCPU - 8 GB RAM','App con redundancia',96],
      ['Load Balancer','Alta disponibilidad',12],
      ['Managed PostgreSQL 1 GB+ - backups diarios','Base de datos (se escala con réplicas)',15],
      ['Spaces 250 GB + 1 TB CDN','Imágenes y archivos',5]]}
  };
  function sum(arr){var t=0;arr.forEach(function(r){t+=r[2];});return t;}

  /* ---- Como ayuda de verdad cada capa ---- */
  var LAYER={
    infra:'Tu app corre en servidores virtuales de DigitalOcean con Docker, base de datos PostgreSQL gestionada (con respaldos automáticos), caché Redis y Nginx como puerta de entrada. Cloudflare aporta CDN, DNS y certificado SSL. Resultado: responde rápido, aguanta los picos de tráfico y sus datos quedan respaldados.',
    seg:'Inicio de sesión con OAuth 2.0 (Google/Apple/email): no manejamos contraseñas frágiles. Las que existen se guardan con hash bcrypt, así que aunque roben la base no sirven. Sesiones con JWT, cifrado TLS en tránsito, cabeceras Helmet contra XSS y clickjacking, rate-limiting contra fuerza bruta y bots, y 2FA (TOTP) para cuentas sensibles. Sienta la base para cumplir la Ley Orgánica de Protección de Datos Personales (LOPDP) del Ecuador.',
    pagos:'Cobros con tarjeta de crédito y débito -el 90% del volumen de e-commerce en Ecuador- dentro de la app, con la pasarela local de tu país (en Ecuador: PayPhone, Kushki o Datafast). Stripe es una opción para cobros internacionales si tu empresa tiene una entidad en un país donde opera. Los webhooks confirman cada pago en tiempo real, sin sacar al usuario de tu marca.',
    susc:'Planes y membresías que se cobran y renuevan solos con cobro recurrente de la pasarela (PayPhone o Kushki en Ecuador; Stripe Billing donde esté disponible): prorrateo al cambiar de plan, cupones y dunning (reintentos automáticos) cuando una tarjeta falla, para no perder ingresos por descuido.',
    mkt:'Google Analytics 4 y PostHog para saber de donde vienen tus usuarios y que hacen; SEO técnico para que te encuentren en Google; integración con Meta Ads y correo (Mailchimp) para campañas medibles. Inviertes donde si convierte.',
    fidel:'Motor de recompensas y referidos para que tus usuarios traigan más usuarios, soporte por Intercom y WhatsApp API, y encuestas NPS para medir satisfacción. Retener cuesta mucho menos que captar.',
    dash:'Panel con tus métricas en vivo (Metabase + Recharts): ventas, usuarios activos, cohortes de retención y alertas cuando algo se sale de rango. Exportas a CSV/Excel. Decides con datos, no a ciegas.'
  };

  /* ---- Guia de construccion: prompts listos para IA (Claude) ---- */
  var GUIDE={
    infra:'Configura el despliegue en un Droplet de DigitalOcean (2 vCPU / 4 GB) con Docker y Nginx como reverse proxy, una base PostgreSQL gestionada y variables de entorno. Dame el docker-compose, la config de Nginx y los pasos de despliegue.',
    seg:'Implementa autenticación con Auth.js (OAuth Google + email), contraseñas con bcrypt, sesiones JWT, rate-limiting y 2FA opcional (TOTP), con middleware de seguridad Helmet. Incluye el flujo de registro, login y recuperación.',
    pagos:'Integra pagos con la pasarela local (PayPhone o Kushki en Ecuador) y deja preparada la integración con Stripe para cuando haya una entidad en un país donde opera. Implementa el checkout dentro de la app y los webhooks de confirmación de pago.',
    susc:'Añade suscripciones con el cobro recurrente de la pasarela elegida: planes mensual y anual, prorrateo al cambiar de plan, cupones y reintentos (dunning) cuando falle el cobro. Muestra el estado de la suscripción en el perfil del usuario.',
    mkt:'Integra Google Analytics 4 y PostHog, configura SEO técnico (metadatos dinámicos y sitemap) y un formulario de captura de correos conectado a Mailchimp.',
    fidel:'Crea un sistema de referidos con código único por usuario y recompensas por puntos, y conecta un widget de soporte/chat. Guarda el historial de recompensas por usuario.',
    dash:'Crea un panel de métricas con Recharts: ventas diarias, usuarios activos, retención por cohortes y alertas por umbral, con exportación a CSV.'
  };

  var ORDER=['infra','seg','pagos','susc','mkt','fidel','dash'];
  function nmeOf(k){ try{return (typeof nameOf==='function')?nameOf(k):k;}catch(e){return k;} }
  function chosenKeys(){ var c=(window.chosen||{}); return ORDER.filter(function(k){return c[k];}); }
  function guessType(keys,desc){
    desc=(desc||'').toLowerCase();
    if(/curso|aprend|clase|educa/.test(desc)) return 'Plataforma de cursos / e-learning';
    if(/match|conect|cita|comunidad|red social/.test(desc)) return 'App de conexión / comunidad';
    if(/tienda|vender|producto|catalog|ecommerce|e-commerce/.test(desc)) return 'Tienda / e-commerce D2C';
    if(keys.indexOf('susc')>=0) return 'App de suscripción';
    if(keys.indexOf('pagos')>=0) return 'App con pagos integrados';
    if(keys.indexOf('dash')>=0) return 'Plataforma con panel de gestión';
    return 'Aplicación digital D2C';
  }

  function buildModel(){
    var dg=window.__cruzDiag, ctx=window.__cruzCtx||{};
    var keys=(dg&&dg.keys&&dg.keys.length)?ORDER.filter(function(k){return dg.keys.indexOf(k)>=0;}):chosenKeys();
    var desc=((document.getElementById('aiText')||{}).value||'').trim();
    var cc=document.getElementById('aiCountry'); var loc=ctx.country||(cc?cc.value:'Ecuador')||'Ecuador';
    var esEc=/ecuad/i.test(loc);
    var sc=document.getElementById('aiScale'); var scale=ctx.scale||(sc?sc.value:'s2')||'s2';
    var mo=document.getElementById('aiMonet'); var monet=ctx.monet!==undefined?ctx.monet:(mo?mo.value:'');
    var tier=DO_TIERS[scale]||DO_TIERS.s2;
    var appType=(dg&&dg.appType)||guessType(keys,desc);
    var fecha=new Date().toLocaleDateString('es-EC',{day:'2-digit',month:'long',year:'numeric'});
    // inversion desarrollo (estimacion) reusa COST si existe
    var sl=500,sh=1200;
    try{ keys.forEach(function(k){ var c=(window.COST||{})[k]; if(c){ sl+=c.s[0]; sh+=c.s[1]; } }); }catch(e){}
    var scaleMul={s1:1,s2:1,s3:1.15,s4:1.35}[scale]||1;
    sl=Math.round(sl*scaleMul); sh=Math.round(sh*scaleMul);
    var n=keys.length, wl=Math.max(3,Math.round(2+n*0.7))+(scale==='s3'?1:scale==='s4'?2:0), wh=wl+Math.max(2,Math.round(n*0.6));
    var MONET={sub:'Suscripción (cobro recurrente)',once:'Pago único / compra',fee:'Comisiones por transacción',ads:'Publicidad',none:'Aún no la monetiza','':'Por definir'};
    // ---- Caso de negocio (supuestos de referencia, ajustables) ----
    var USERS={s1:800,s2:5000,s3:25000,s4:70000}[scale]||5000;
    var monthlyCost=sum(tier.rows), setupMid=Math.round((sl+sh)/2), COMM=0.035;
    var biz={users:USERS, monthlyCost:monthlyCost, setupMid:setupMid, comm:COMM, model:monet};
    if(monet==='sub'){ var price=6, conv=0.04; var paying=Math.round(USERS*conv); var mrr=paying*price;
      var net=Math.round(mrr*(1-COMM)-monthlyCost); var be=Math.ceil(monthlyCost/(price*(1-COMM)));
      biz.price=price; biz.conv=conv; biz.paying=paying; biz.mrr=mrr; biz.net=net; biz.breakEven=be;
      biz.recover=(net>0?Math.ceil(setupMid/net):null);
      var pay2=Math.round(USERS*0.015), net2=Math.round(pay2*price*(1-COMM)-monthlyCost); biz.paying2=pay2; biz.net2=net2; biz.recover2=(net2>0?Math.ceil(setupMid/net2):null); }
    else if(monet==='once'){ var t=15, cvr=0.06; var buyers=Math.round(USERS*cvr);
      biz.price=t; biz.conv=cvr; biz.buyers=buyers; biz.rev=buyers*t;
      biz.breakEven=Math.ceil(monthlyCost/(t*(1-COMM))); }
    else if(monet==='fee'){ var order=20, om=0.10, take=0.05; var orders=Math.round(USERS*om); var gmv=orders*order;
      biz.order=order; biz.orders=orders; biz.gmv=gmv; biz.take=take; biz.rev=Math.round(gmv*take);
      biz.breakEven=Math.ceil(monthlyCost/(order*take*(1-COMM))); }
    return {keys:keys,desc:desc,loc:loc,esEc:esEc,appType:appType,fecha:fecha,sl:sl,sh:sh,wl:wl,wh:wh,
            scale:scale,tier:tier,tierTotal:monthlyCost,monet:monet,monetLbl:MONET[monet]||'Por definir',
            market:mkFor(loc),rails:railsFor(loc),biz:biz};
  }

  /* ---------- jsPDF loader ---------- */
  function loadJsPDF(){
    return new Promise(function(res,rej){
      if(window.jspdf&&window.jspdf.jsPDF) return res(window.jspdf.jsPDF);
      var s=document.createElement('script');
      s.src='/vendor/jspdf.umd.min.js';
      s.onload=function(){ (window.jspdf&&window.jspdf.jsPDF)?res(window.jspdf.jsPDF):rej(new Error('nojspdf')); };
      s.onerror=function(){ rej(new Error('cdn')); };
      document.head.appendChild(s);
    });
  }

  /* ---------- Layout ---------- */
  function makePDF(jsPDF, m){
    var doc=new jsPDF({unit:'mm',format:'a4'});
    var W=210,H=297,M=18,CW=W-2*M, y=0;
    function setC(c){ doc.setTextColor(c[0],c[1],c[2]); }
    function setF(c){ doc.setFillColor(c[0],c[1],c[2]); }
    function ensure(sp){ if(y+sp>H-16){ doc.addPage(); y=M+2; } }
    function para(txt,opt){ opt=opt||{}; var size=opt.size||10.5, lh=opt.lh||5.0, col=opt.col||INK;
      doc.setFont('helvetica',opt.style||'normal'); doc.setFontSize(size); setC(col);
      var lines=doc.splitTextToSize(txt, opt.w||CW);
      for(var i=0;i<lines.length;i++){ ensure(lh); doc.text(lines[i], opt.x||M, y+lh-1.5); y+=lh; }
      if(opt.gap!==0) y+=(opt.gap||2.5);
    }
    function h2(no,txt){ ensure(14); doc.setFont('helvetica','bold'); doc.setFontSize(8.5); setC(GREEN);
      doc.text(no+'   '+txt.toUpperCase(), M, y+4); y+=6.4;
      setF(LINE); doc.rect(M, y, CW, 0.4, 'F'); y+=5;
    }
    function kvTable(rows,c1){ c1=c1||62; var rh=7.2;
      rows.forEach(function(r){ ensure(rh);
        doc.setDrawColor(LINE[0],LINE[1],LINE[2]); doc.line(M,y+rh-1.6,M+CW,y+rh-1.6);
        doc.setFont('helvetica','bold'); doc.setFontSize(9.2); setC(INK);
        var a=doc.splitTextToSize(String(r[0]), c1); doc.text(a, M, y+3.4);
        doc.setFont('helvetica','normal'); setC(MUT);
        var b=doc.splitTextToSize(String(r[1]), CW-c1-4); doc.text(b, M+c1+4, y+3.4);
        y+=Math.max(rh, Math.max(a.length,b.length)*4.3+3.2);
      });
      y+=3;
    }
    function doTable(list){ var rh=7.4;
      // header
      ensure(rh+2); doc.setFont('helvetica','bold'); doc.setFontSize(7.6); setC(MUT);
      doc.text('SERVICIO (DIGITALOCEAN)', M, y+3.2); doc.text('USO', M+96, y+3.2); doc.text('USD/MES', M+CW, y+3.2, {align:'right'});
      y+=5.4; setF(LINE); doc.rect(M,y,CW,0.4,'F'); y+=3;
      list.forEach(function(r){ ensure(rh);
        doc.setDrawColor(LINE[0],LINE[1],LINE[2]); doc.line(M,y+rh-1.4,M+CW,y+rh-1.4);
        doc.setFont('helvetica','normal'); doc.setFontSize(8.6); setC(INK);
        var a=doc.splitTextToSize(r[0], 92); doc.text(a, M, y+3.2);
        setC(MUT); var b=doc.splitTextToSize(r[1], 40); doc.text(b, M+96, y+3.2);
        doc.setFont('helvetica','bold'); setC(INK); doc.text('$'+r[2], M+CW, y+3.2, {align:'right'});
        y+=Math.max(rh, a.length*4+3.2);
      });
      // total
      ensure(8); doc.setFont('helvetica','bold'); doc.setFontSize(9.2); setC(GREEN);
      var tot=sum(list);
      doc.text('Total mensual DigitalOcean', M, y+4); doc.text('$'+tot+' /mes', M+CW, y+4, {align:'right'}); y+=9;
    }
    function bullets(arr){ arr.forEach(function(t){ ensure(5);
      doc.setFont('helvetica','normal'); doc.setFontSize(10); setC(GREEN); doc.text('•', M, y+3.4);
      setC(INK); var l=doc.splitTextToSize(t, CW-6); doc.text(l, M+5, y+3.4); y+=Math.max(5,l.length*4.4)+1.4;
    }); y+=2; }

    /* ===== PORTADA ===== */
    setF(BLACK); doc.rect(0,0,W,H,'F');
    doc.setFont('helvetica','bold'); doc.setFontSize(30); doc.setTextColor(237,243,241);
    doc.text('Cruz', M, 52); var cw=doc.getTextWidth('Cruz');
    setC(GREEN); doc.text('TRD', M+cw, 52);
    doc.setFont('helvetica','normal'); doc.setFontSize(8.5); doc.setTextColor(138,160,168);
    doc.text('E S T U D I O   D E   A P P S   D 2 C', M, 59);
    doc.setFont('helvetica','bold'); doc.setFontSize(34); doc.setTextColor(237,243,241);
    doc.text('Estimación preliminar', M, 92);
    if(m.desc){ doc.setFont('helvetica','italic'); doc.setFontSize(12); doc.setTextColor(199,208,212);
      var q=doc.splitTextToSize('"'+m.desc+'"', CW-6); doc.text(q, M, 104); }
    var my=104+(m.desc?doc.splitTextToSize('"'+m.desc+'"',CW-6).length*6+14:8);
    doc.setFontSize(10.5);
    function meta(lbl,val,yy){ doc.setFont('helvetica','normal'); doc.setTextColor(174,184,190); doc.text(lbl, M, yy); doc.setTextColor(237,243,241); doc.text(String(val||''), M+48, yy); }
    meta('Tipo de producto:', m.appType, my);
    meta('País:', m.loc, my+8);
    meta('Usuarios al lanzar:', (m.tier&&m.tier.label)||'', my+16);
    meta('Monetización:', m.monetLbl, my+24);
    meta('Fecha:', m.fecha, my+32);
    // badge confidencial
    doc.setDrawColor(GREEN[0],GREEN[1],GREEN[2]); doc.setLineWidth(0.4);
    doc.roundedRect(M, my+42, 114, 9, 2, 2);
    setC(GREEN); doc.setFont('helvetica','bold'); doc.setFontSize(7.6);
    doc.text('ESTIMACIÓN PRELIMINAR  ·  NO ES UNA COTIZACIÓN', M+5, my+47.6);
    doc.setFont('helvetica','normal'); doc.setFontSize(8.5); doc.setTextColor(120,132,140);
    doc.text('CRUZTRD CT S.A.S.  ·  RUC 1793237622001  ·  Quito, Ecuador  ·  cruztrd.com', M, H-16);

    /* ===== INTERIOR ===== */
    doc.addPage(); y=M+2;

    h2('01','Objetivo');
    para('Llevar tu idea a una aplicación lista para el mercado bajo un modelo D2C (directo a las personas, sin intermediarios). CruzTRD arma y despliega cada capa; tú te quedas con el código y el control. Este documento resume qué construimos, con qué tecnología real, cuánto cuesta y cómo puedes construirla tú mismo si lo prefieres.',{});
    if(m.desc){ para('Tu idea, en tus palabras: "'+m.desc+'"',{style:'italic',col:MUT,size:10}); }

    h2('02','Contexto de mercado  ·  '+m.loc);
    if(m.market){
      para('Panorama digital de '+m.loc+':',{style:'bold',size:10.5,gap:1});
      kvTable(m.market.stats,60);
      if(m.market.pagos){ para('Cómo paga la gente (participación en el volumen de e-commerce):',{style:'bold',size:10.5,gap:1}); kvTable(m.market.pagos,60); }
      para('Medios de pago que integramos en '+m.loc+': '+m.rails+'.',{size:9,col:INK,lh:4.6});
      para('Fuente: '+m.market.fuente,{size:8.2,col:MUT,lh:4});
    } else {
      para('Lanzarás en '+m.loc+'. Definimos el panorama digital y los medios de pago locales al inicio del proyecto.',{});
      para('Medios de pago sugeridos para '+m.loc+': '+m.rails+'.',{size:9,col:INK,lh:4.6});
    }

    h2('03','Tu arquitectura  ·  qué incluye y cómo ayuda');
    var keys=m.keys.slice(); if(keys.indexOf('infra')<0) keys.unshift('infra');
    keys.forEach(function(k){
      para(nmeOf(k),{style:'bold',size:11,gap:0.5});
      para(LAYER[k]||'',{size:10,lh:4.8});
      if(k==='pagos'){ para('Pasarelas para '+m.loc+': '+m.rails+'.',{size:9,col:INK,lh:4.4}); }
      var st=[]; try{ st=(window.LIBS||{})[k]||[]; }catch(e){}
      if(st.length){ para('Stack: '+st.join('  ·  '),{size:8.6,col:GREEN,lh:4,gap:4}); }
    });

    h2('04','Infraestructura DigitalOcean para tu escala');
    para('Precios reales de DigitalOcean vigentes en 2026 (facturación por segundo desde el 1 de enero de 2026). Configuración recomendada para tu escala prevista: '+m.tier.label+'.',{});
    doTable(m.tier.rows);
    para('Cloudflare (CDN, DNS y SSL) se usa en su plan gratuito. Al crecer se escalan servidores y base de datos sin rehacer la app. Las comisiones de las pasarelas y la publicidad se facturan aparte según tu uso.',{size:8.6,col:MUT,lh:4.4});

    h2('05','Inversión y tiempo estimados');
    kvTable([
      ['Alcance','Aplicación web adaptable (se instala desde el navegador). Las apps nativas para App Store y Google Play se estiman aparte'],
      ['Puesta en marcha (una vez)','$'+m.sl.toLocaleString('es-EC')+' - $'+m.sh.toLocaleString('es-EC')+' USD  ·  diseño, desarrollo y despliegue'],
      ['Infraestructura mensual','$'+m.tierTotal+' USD/mes en DigitalOcean (escala: '+m.tier.label+')'],
      ['Modelo de monetización',m.monetLbl],
      ['Tiempo hasta el lanzamiento','~'+m.wl+' a '+m.wh+' semanas']
    ],62);
    para('Estimación orientativa en USD. El alcance y el valor final se definen en conjunto; no constituye un contrato.',{size:8.6,col:MUT,lh:4.4});

    h2('06','Caso de negocio  ·  la realidad de lanzar tu app');
    var bz=m.biz;
    para('Cifras de referencia para dimensionar la operación. Son supuestos ajustables (precio, conversión, usuarios) que afinamos con tus datos reales.',{});
    kvTable([
      ['Inversión inicial (una vez)','$'+m.sl.toLocaleString('es-EC')+' - $'+m.sh.toLocaleString('es-EC')+' USD'],
      ['Costo mensual de operación','$'+bz.monthlyCost+' USD/mes (infraestructura DigitalOcean)'],
      ['Comisión de pasarela','~3,5% + IVA sobre cada venta (varía por pasarela)'],
      ['Usuarios al cierre del primer año','~'+bz.users.toLocaleString('es-EC')+' (supuesto según tu escala)']
    ],62);
    if(m.monet==='sub'){
      para('Escenario con suscripción (supuestos: precio $'+bz.price+'/mes; 4% de tus usuarios pagan):',{style:'bold',size:10,gap:1});
      kvTable([
        ['Punto de equilibrio','~'+bz.breakEven+' clientes de pago cubren la operación mensual'],
        ['Escenario favorable','~'+bz.paying.toLocaleString('es-EC')+' clientes de pago = $'+bz.mrr.toLocaleString('es-EC')+'/mes de ingreso'],
        ['Utilidad mensual estimada',(bz.net>0?'~$'+bz.net.toLocaleString('es-EC')+'/mes tras costos y comisión, antes de publicidad y mantenimiento':'aún por debajo del costo en este escenario')],
        ['Recuperas la inversión',(bz.recover?'en ~'+bz.recover+' meses':'requiere más clientes o mayor precio')],
        ['Escenario conservador','Si solo paga el 1,5% (~'+bz.paying2.toLocaleString('es-EC')+' clientes): '+(bz.recover2?'recuperas la inversión en ~'+bz.recover2+' meses':'no cubre la operación mensual; hay que crecer primero')],
        ['Qué no incluye','Publicidad para captar usuarios ni mantenimiento evolutivo de la app']
      ],62);
    } else if(m.monet==='once'){
      para('Escenario con pago único (supuestos: ticket $'+bz.price+'; 6% de tus usuarios compran):',{style:'bold',size:10,gap:1});
      kvTable([
        ['Punto de equilibrio','~'+bz.breakEven+' ventas al mes cubren la operación'],
        ['Escenario favorable','~'+bz.buyers.toLocaleString('es-EC')+' compradores = $'+bz.rev.toLocaleString('es-EC')+' de ingreso']
      ],62);
    } else if(m.monet==='fee'){
      para('Escenario con comisiones (supuestos: ticket $'+bz.order+'; 5% de comisión; 10% de usuarios transaccionan al mes):',{style:'bold',size:10,gap:1});
      kvTable([
        ['Volumen transado (GMV)','~$'+bz.gmv.toLocaleString('es-EC')+'/mes'],
        ['Tu ingreso por comisión','~$'+bz.rev.toLocaleString('es-EC')+'/mes'],
        ['Punto de equilibrio','~'+bz.breakEven+' transacciones/mes cubren la operación']
      ],62);
    } else if(m.monet==='ads'){
      para('Monetizas con publicidad: el ingreso depende del tráfico y del CPM. Con una base pequeña, la publicidad rara vez cubre costos al inicio; conviene combinarla con otra fuente. Definimos metas de tráfico contigo.',{});
    } else {
      para('Aún no defines cómo monetizar. El caso de negocio se activa al elegir un modelo (suscripción, pago único o comisiones); por ahora considera el costo de operación de $'+bz.monthlyCost+'/mes más la inversión inicial.',{});
    }
    para('Importante: son proyecciones orientativas, no una promesa de resultados. Los números reales dependen de tu producto, precio, conversión y marketing. Ajustamos este caso con tus datos.',{size:8.6,col:MUT,lh:4.4});

    h2('07','Guía para construirla con IA (p. ej. Claude)');
    para('Si decides construirla tú mismo con una IA de código como Claude, sigue estos pasos y copia los prompts. Están escritos para el stack que recomendamos arriba.',{});
    para('Paso 0 - Arranque del proyecto (copia este prompt):',{style:'bold',size:10,gap:1});
    para('"Actúa como ingeniero full-stack senior. Vamos a construir una '+m.appType.toLowerCase()+(m.desc?' ('+m.desc+')':'')+'. Stack: Next.js + Node/Express, base de datos PostgreSQL, contenedores Docker y despliegue en DigitalOcean. Genera la estructura inicial del proyecto, el docker-compose y el esquema base de la base de datos."',{size:9.4,col:INK,lh:4.6,style:'italic'});
    var stepN=1;
    keys.forEach(function(k){ if(!GUIDE[k])return;
      para('Paso '+stepN+' - '+nmeOf(k)+':',{style:'bold',size:10,gap:1});
      para('"'+GUIDE[k]+'"',{size:9.4,col:INK,lh:4.6,style:'italic'});
      stepN++;
    });
    para('Consejo: pídele a la IA que trabaje capa por capa, que escriba pruebas y que te explique cada archivo. Si en algún punto quieres que lo tomemos nosotros, este documento ya deja el plan y el stack listos.',{size:8.8,col:MUT,lh:4.4});

    h2('08','Qué necesitamos de tu lado');
    var need=['Tu idea, textos e imágenes (o los creamos contigo).','Tu dominio y los accesos de tu marca.','Tu revisión y visto bueno en cada entrega.'];
    if(m.keys.indexOf('pagos')>=0||m.keys.indexOf('susc')>=0) need.push('Cuenta en la pasarela de pago de tu país (en Ecuador: PayPhone o Kushki).');
    if(m.keys.indexOf('mkt')>=0) need.push('Accesos a tus redes y analítica.');
    bullets(need);
    h2('09','Siguiente paso');
    para('Escríbenos y revisamos este plan contigo, sin compromiso: esteban@cruztrd.com  ·  WhatsApp +593 98 801 1913  ·  cruztrd.com',{size:10.5,gap:2});

    /* Footer en todas las paginas interiores */
    var pages=doc.getNumberOfPages();
    for(var p=2;p<=pages;p++){ doc.setPage(p);
      doc.setDrawColor(LINE[0],LINE[1],LINE[2]); doc.line(M,H-12,W-M,H-12);
      doc.setFont('helvetica','normal'); doc.setFontSize(7.4); setC(MUT);
      doc.text('CRUZTRD CT S.A.S.  ·  RUC 1793237622001  ·  cruztrd.com  ·  Estimación preliminar, no es una cotización', M, H-8);
      doc.text(String(p-1), W-M, H-8, {align:'right'});
    }
    return doc;
  }

  /* ---------- Entrada publica ---------- */
  window.__cruzGenPDF=async function(){
    var btn=document.getElementById('fcta'); var oldT=btn?btn.textContent:'';
    if(btn){ btn.textContent='Generando tu documento...'; btn.style.pointerEvents='none'; btn.style.opacity='.7'; }
    var restore=function(){ if(btn){ btn.textContent=oldT; btn.style.pointerEvents=''; btn.style.opacity=''; } };
    var m=buildModel();
    try{
      var jsPDF=await loadJsPDF();
      var doc=makePDF(jsPDF, m);
      var name='Estimacion-CruzTRD.pdf';
      var blob=doc.output('blob');
      var dl=(window.claude&&window.claude.use)?(await window.claude.use('downloads')):null;
      if(dl){ try{ await dl.save({filename:name, data:blob}); }catch(se){ if(!(se&&se.code==='declined')){ try{ var u0=URL.createObjectURL(blob); var a0=document.createElement('a'); a0.href=u0; a0.download=name; document.body.appendChild(a0); a0.click(); a0.remove(); }catch(e0){} } restore(); return; } restore(); return; }
      try{ doc.save(name); }catch(e){ var url=URL.createObjectURL(blob); var a=document.createElement('a'); a.href=url; a.download=name; document.body.appendChild(a); a.click(); a.remove(); }
      restore(); return;
    }catch(err){
      // Fallback: documento de marca en HTML (listo para imprimir a PDF)
      try{ var html=buildProposalHTML();
        var dl=(window.claude&&window.claude.use)?(await window.claude.use('downloads')):null;
        if(dl){ await dl.save({filename:'Estimacion-CruzTRD.html', data:html}); restore(); return; }
        var b=new Blob([html],{type:'text/html'}); var u=URL.createObjectURL(b);
        var a2=document.createElement('a'); a2.href=u; a2.download='Estimacion-CruzTRD.html'; document.body.appendChild(a2); a2.click(); a2.remove();
      }catch(e2){}
      restore();
    }
  };

  /* ---------- Guia en Markdown para pegar en Claude ---------- */
  function buildMD(m){
    var keys=m.keys.slice(); if(keys.indexOf('infra')<0) keys.unshift('infra');
    var L=[];
    L.push('# Guía de construcción - '+m.appType+' (CruzTRD)'); L.push('');
    if(m.desc) L.push('**Idea:** '+m.desc);
    L.push('**País de lanzamiento:** '+m.loc);
    L.push('**Usuarios al lanzar:** '+((m.tier&&m.tier.label)||''));
    L.push('**Monetización:** '+m.monetLbl);
    L.push('**Fecha:** '+m.fecha); L.push('');
    L.push('> Pega este archivo en Claude (o tu IA de código) y pídele que construya la app paso a paso, capa por capa, escribiendo pruebas y explicándote cada archivo.'); L.push('');
    L.push('## Stack recomendado');
    L.push('- **Frontend:** Next.js');
    L.push('- **Backend:** Node.js / Express');
    L.push('- **Base de datos:** PostgreSQL (DigitalOcean Managed, con backups diarios)');
    L.push('- **Infraestructura:** Docker + Nginx en Droplet(s) de DigitalOcean; Cloudflare para CDN, DNS y SSL');
    L.push('- **Pasarelas de pago ('+m.loc+'):** '+m.rails);
    L.push('- **Infra mensual estimada:** $'+m.tierTotal+' USD/mes en DigitalOcean (escala: '+((m.tier&&m.tier.label)||'')+')'); L.push('');
    L.push('## Infraestructura DigitalOcean para tu escala');
    (m.tier?m.tier.rows:[]).forEach(function(r){ L.push('- **'+r[0]+'** — '+r[1]+' — $'+r[2]+'/mes'); });
    L.push('- **Total:** $'+m.tierTotal+' USD/mes'); L.push('');
    (function(){ var bz=m.biz; L.push('## Caso de negocio (referencia, ajustable)');
      L.push('- **Inversión inicial (una vez):** $'+m.sl.toLocaleString('es-EC')+' - $'+m.sh.toLocaleString('es-EC')+' USD');
      L.push('- **Costo mensual de operación:** $'+bz.monthlyCost+' USD/mes (infraestructura DigitalOcean)');
      L.push('- **Comisión de pasarela:** ~3,5% + IVA sobre cada venta');
      L.push('- **Usuarios al cierre del primer año (supuesto):** ~'+bz.users.toLocaleString('es-EC'));
      if(m.monet==='sub'){ L.push('- **Punto de equilibrio:** ~'+bz.breakEven+' clientes de pago (a $'+bz.price+'/mes) cubren la operación');
        L.push('- **Escenario favorable:** ~'+bz.paying.toLocaleString('es-EC')+' clientes de pago = $'+bz.mrr.toLocaleString('es-EC')+'/mes'+(bz.recover?'; recuperas la inversión en ~'+bz.recover+' meses':'')); }
      else if(m.monet==='once'){ L.push('- **Punto de equilibrio:** ~'+bz.breakEven+' ventas/mes (ticket $'+bz.price+')');
        L.push('- **Escenario favorable:** ~'+bz.buyers.toLocaleString('es-EC')+' compradores = $'+bz.rev.toLocaleString('es-EC')); }
      else if(m.monet==='fee'){ L.push('- **GMV estimado:** ~$'+bz.gmv.toLocaleString('es-EC')+'/mes; tu comisión ~$'+bz.rev.toLocaleString('es-EC')+'/mes');
        L.push('- **Punto de equilibrio:** ~'+bz.breakEven+' transacciones/mes'); }
      else if(m.monet==='ads'){ L.push('- Ingreso por publicidad depende del tráfico/CPM; conviene combinarla con otra fuente.'); }
      else { L.push('- Elige un modelo de monetización para activar la proyección de ingresos.'); }
      L.push('- _Proyecciones orientativas, no una promesa de resultados; dependen de producto, precio, conversión y marketing._'); L.push(''); })();
    L.push('## Capas de tu app');
    keys.forEach(function(k){ L.push(''); L.push('### '+nmeOf(k)); L.push(LAYER[k]||''); if(k==='pagos') L.push('**Pasarelas ('+m.loc+'):** '+m.rails); var st=[];try{st=(window.LIBS||{})[k]||[];}catch(e){} if(st.length) L.push('**Stack:** '+st.join(', ')); });
    L.push(''); L.push('## Prompts listos (cópialos en orden)'); L.push('');
    L.push('**Paso 0 - Arranque del proyecto**'); L.push('```');
    L.push('Actúa como ingeniero full-stack senior. Vamos a construir una '+m.appType.toLowerCase()+(m.desc?' ('+m.desc+')':'')+'. Stack: Next.js + Node/Express, base de datos PostgreSQL, contenedores Docker y despliegue en DigitalOcean. Genera la estructura inicial del proyecto, el docker-compose y el esquema base de la base de datos.');
    L.push('```'); L.push('');
    var n=1;
    keys.forEach(function(k){ if(!GUIDE[k])return; L.push('**Paso '+n+' - '+nmeOf(k)+'**'); L.push('```'); L.push(GUIDE[k]); L.push('```'); L.push(''); n++; });
    L.push('## Que necesitas de tu lado');
    var need=['Tu idea, textos e imágenes.','Tu dominio y los accesos de tu marca.','Tu revisión y visto bueno en cada entrega.'];
    if(m.keys.indexOf('pagos')>=0||m.keys.indexOf('susc')>=0) need.push('Cuenta en la pasarela de pago de tu país (en Ecuador: PayPhone o Kushki).');
    if(m.keys.indexOf('mkt')>=0) need.push('Accesos a tus redes y analítica.');
    need.forEach(function(x){L.push('- '+x);});
    L.push(''); L.push('---');
    L.push('_Estimación preliminar - CRUZTRD CT S.A.S. - RUC 1793237622001 - Quito, Ecuador - cruztrd.com_');
    L.push('Si prefieres que lo construyamos nosotros, este plan y el stack ya están listos para arrancar.');
    return L.join('\n');
  }
  window.__cruzGenMD=async function(){
    var b2=document.getElementById('fmd'); var o2=b2?b2.textContent:'';
    if(b2){ b2.textContent='Generando...'; b2.style.pointerEvents='none'; }
    var rr=function(){ if(b2){ b2.textContent=o2; b2.style.pointerEvents=''; } };
    var m=buildModel(); var md=buildMD(m); var name='Guia-CruzTRD-para-Claude.md';
    try{ var dl=(window.claude&&window.claude.use)?(await window.claude.use('downloads')):null;
         if(dl){ await dl.save({filename:name, data:md}); rr(); return; } }catch(e){}
    try{ var b=new Blob([md],{type:'text/markdown'}); var u=URL.createObjectURL(b);
      var a=document.createElement('a'); a.href=u; a.download=name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function(){URL.revokeObjectURL(u);},1500);
    }catch(e2){}
    rr();
  };
  document.addEventListener('click',function(e){ var t=e.target;
    if(t && (t.id==='fmd' || (t.closest && t.closest('#fmd')))){ e.preventDefault(); window.__cruzGenMD(); }
  });

  /* ---------- Picker personalizado (dark, on-brand) que reemplaza el <select> nativo ---------- */
  function enhanceSelect(sel){
    if(!sel || sel.__pk) return; sel.__pk=1;
    sel.style.display='none';
    var wrap=document.createElement('div'); wrap.className='pk';
    var field=document.createElement('button'); field.type='button'; field.className='pk-field';
    var ICONS={
      aiCountry:'<svg viewBox="0 0 16 16" width="13" height="13" fill="none"><circle cx="8" cy="8" r="6.2" stroke="currentColor" stroke-width="1.3"/><path d="M1.8 8h12.4M8 1.8c1.7 1.7 2.6 3.9 2.6 6.2S9.7 12.5 8 14.2C6.3 12.5 5.4 10.3 5.4 8S6.3 3.5 8 1.8z" stroke="currentColor" stroke-width="1.1"/></svg>',
      aiScale:'<svg viewBox="0 0 18 16" width="15" height="13" fill="none"><circle cx="6" cy="5.4" r="2.6" stroke="currentColor" stroke-width="1.3"/><path d="M1.6 13.4c0-2.4 2-4 4.4-4s4.4 1.6 4.4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M12.2 3.3a2.4 2.4 0 010 4.5M13.4 13.4c0-1.7-.9-3-2.3-3.6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',
      aiMonet:'<svg viewBox="0 0 16 16" width="13" height="13" fill="none"><circle cx="8" cy="8" r="6.2" stroke="currentColor" stroke-width="1.3"/><path d="M8 4.4v7.2M9.9 6c-.4-.7-1.1-1-1.9-1-1 0-1.8.6-1.8 1.5S7 8.8 8 9s1.8.5 1.8 1.5-.8 1.5-1.9 1.5c-.8 0-1.5-.3-1.9-1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>'
    };
    if(ICONS[sel.id]){ var ic=document.createElement('span'); ic.className='pk-ic'; ic.innerHTML=ICONS[sel.id]; field.appendChild(ic); }
    var lbl=document.createElement('span'); lbl.className='pk-lbl';
    var chev=document.createElement('span'); chev.className='pk-chev';
    chev.innerHTML='<svg width="11" height="7" viewBox="0 0 11 7" fill="none"><path d="M1 1l4.5 4.5L10 1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    field.appendChild(lbl); field.appendChild(chev);
    wrap.appendChild(field);
    sel.parentNode.insertBefore(wrap, sel);
    function setLbl(){ var o=sel.options[sel.selectedIndex]; lbl.textContent=o?o.text:''; }
    setLbl();
    var menu=null;
    function close(){ if(!menu)return; var m=menu; menu=null; m.classList.remove('on');
      field.classList.remove('open'); document.body.classList.remove('pk-open');
      document.removeEventListener('mousedown',onDoc,true); window.removeEventListener('scroll',close,true); window.removeEventListener('resize',close);
      setTimeout(function(){ if(m&&m.parentNode) m.parentNode.removeChild(m); },180);
    }
    function onDoc(e){ if(menu && !menu.contains(e.target) && !field.contains(e.target)) close(); }
    function open(){
      if(menu){ close(); return; }
      document.body.classList.add('pk-open');
      menu=document.createElement('div'); menu.className='pk-menu';
      Array.prototype.forEach.call(sel.options,function(o,i){
        var it=document.createElement('div'); it.className='pk-opt'+(i===sel.selectedIndex?' sel':''); it.textContent=o.text;
        it.addEventListener('click',function(ev){ ev.stopPropagation(); sel.selectedIndex=i;
          try{ sel.dispatchEvent(new Event('change',{bubbles:true})); }catch(_e){}
          setLbl(); close(); });
        menu.appendChild(it);
      });
      document.body.appendChild(menu);
      var r=field.getBoundingClientRect();
      var mw=Math.max(r.width, 168);
      menu.style.width=mw+'px';
      var left=Math.max(8, Math.min(r.left, window.innerWidth-mw-8));
      menu.style.left=left+'px';
      var mh=menu.offsetHeight;
      if(r.bottom+mh+8>window.innerHeight && r.top-mh-8>0){ menu.style.top=(r.top-mh-6)+'px'; menu.style.transformOrigin='bottom center'; }
      else { menu.style.top=(r.bottom+6)+'px'; }
      field.classList.add('open');
      requestAnimationFrame(function(){ if(menu) menu.classList.add('on'); });
      setTimeout(function(){ document.addEventListener('mousedown',onDoc,true); window.addEventListener('scroll',close,true); window.addEventListener('resize',close); },0);
    }
    field.addEventListener('click',function(e){ e.stopPropagation(); e.preventDefault(); open(); });
  }
  try{ ['aiCountry','aiScale','aiMonet'].forEach(function(id){ enhanceSelect(document.getElementById(id)); }); }catch(e){}
})();