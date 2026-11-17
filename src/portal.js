
// ===== enlaces del recorrido (dejar '' mientras no existan) =====
//  libs: descarga de librerias; si es una por capa, usar '{k}' en la URL (p. ej. 'https://…/libs/{k}.zip')
//  live: plataforma en vivo (se muestra solo cuando tenga URL)
var LINKS={libs:'', live:''};
// librerias por capa (mismas del sitio principal)
var LIBS={infra:['Docker','DigitalOcean Droplets','PostgreSQL','Redis','Nginx','Cloudflare'],seg:['OAuth 2.0 / Auth.js','JWT','bcrypt','Helmet','Rate limiting','2FA (TOTP)'],pagos:['Stripe','PayPhone','Kushki','Datafast','Webhooks'],susc:['Stripe Billing','Cron jobs','Dunning','Prorrateo','Cupones'],mkt:['Google Analytics 4','Meta Ads API','Next SEO','Mailchimp','PostHog'],fidel:['Motor de recompensas','Referidos','Intercom','WhatsApp API','NPS'],dash:['Metabase','Recharts','PostHog','Exportes CSV/Excel','Alertas']};
// explicacion ampliada de cada especialista
var INFO={
 intro:{lead:'Aquí tu idea se convierte en una app D2C lista para miles de personas. Cada piso del estudio es una capa de tu producto y en cada uno te espera su guía virtual: de la base técnica a los ingresos, el crecimiento y los datos.',
  sec:'Las capas del estudio',
  items:['<b>01 · Infraestructura.</b> La base lista para crecer sin rehacerla.','<b>02 · Seguridad.</b> Tus datos y los de tus usuarios, protegidos por defecto.','<b>03 · Pagos.</b> Cobros directos, sin fricción.','<b>04 · Suscripciones.</b> Ingresos que se repiten mes a mes.','<b>05 · Marketing.</b> Atraer a las personas correctas.','<b>06 · Fidelización.</b> Que vuelvan y recomienden.','<b>07 · Dashboards.</b> Todo tu negocio en una pantalla.'],
  note:'Llama al ascensor o abre el Directorio para subir a cualquier piso. En cada sala, toca al guía para conocer su capa.'},
 infra:{lead:'Es la base sobre la que corre toda tu app. Dejamos listos servidores, base de datos y caché desde el primer día, preparados para ampliar capacidad cuando sube el tráfico, sin tener que rehacer nada.',
  items:['<b>Despliegue automático.</b> Cada mejora sale a producción en minutos, con despliegues pensados para no interrumpir el servicio.','<b>Datos rápidos y ordenados.</b> PostgreSQL para tu información y Redis como caché para acelerar las respuestas.','<b>Escala cuando lo necesitas.</b> Más capacidad cuando llegan usuarios y menos costo cuando bajan.','<b>Respaldos y monitoreo.</b> Copias de seguridad programadas y alertas para enterarte de un problema cuanto antes.']},
 seg:{lead:'Protegemos tu negocio y a tus usuarios desde el diseño, no como un parche al final. Quién entra, qué puede ver y cómo viajan los datos queda resuelto por defecto.',
  items:['<b>Acceso seguro.</b> Inicio de sesión con OAuth 2.0, contraseñas cifradas y verificación en dos pasos (2FA).','<b>Roles y permisos.</b> Cada persona de tu equipo ve y edita solo lo que le corresponde.','<b>Cifrado en tránsito y en reposo.</b> Los datos viajan y se guardan protegidos.','<b>Defensa activa.</b> Límite de intentos, cabeceras seguras y registro de accesos para auditar.']},
 pagos:{lead:'Cobra desde el primer día, directo a tu cuenta. Integramos las pasarelas líderes, también las locales, para que tus clientes paguen como prefieren.',
  items:['<b>Checkout sin fricción.</b> Pago en pocos pasos, en web y en móvil.','<b>Pasarelas globales y locales.</b> Stripe, PayPhone, Kushki o Datafast según tu mercado.','<b>Comprobantes automáticos.</b> Cada venta envía su comprobante de pago; la factura electrónica del SRI se integra aparte.','<b>Todo conectado.</b> Cada pago confirmado activa al instante lo que sigue: acceso, envío o aviso.']},
 susc:{lead:'Convierte clientes en ingresos que se repiten. Planes, renovaciones y cobros recurrentes funcionan solos, con reintentos automáticos para recuperar pagos fallidos antes de que se vuelvan bajas.',
  items:['<b>Planes a tu medida.</b> Mensuales o anuales, con pruebas gratis y cupones.','<b>Renovación automática.</b> Cambios de plan con prorrateo, sin cálculos manuales.','<b>Recuperación de pagos.</b> Reintentos y avisos cuando una tarjeta falla (dunning).','<b>Autogestión.</b> Tus clientes cambian o pausan su plan sin escribirte.']},
 mkt:{lead:'Atraemos a las personas correctas al menor costo y medimos qué funciona de verdad. La IA ayuda a encontrar audiencias, probar mensajes y optimizar cada campaña.',
  items:['<b>Analítica de todo el embudo.</b> De la primera visita a la compra, con datos reales.','<b>SEO técnico.</b> Que te encuentren en Google sin pagar cada clic.','<b>Campañas conectadas a ventas.</b> Meta y Google optimizados con lo que de verdad vende.','<b>Email y automatizaciones.</b> Mensajes personalizados con IA en el momento justo.']},
 fidel:{lead:'Conseguir un cliente cuesta; que vuelva vale más. Construimos lo que hace que regresen por gusto y que recomienden tu producto a otros.',
  items:['<b>Recompensas.</b> Puntos y beneficios que premian cada compra.','<b>Referidos.</b> Tus clientes traen clientes, con premio para ambos.','<b>Soporte cercano.</b> Chat y WhatsApp integrados a tu app.','<b>Escucha activa.</b> Encuestas NPS para mejorar antes de perder a alguien.']},
 dash:{lead:'Todo tu negocio en una sola pantalla. Métricas en vivo, cohortes y alertas para decidir con datos y actuar a tiempo, no con corazonadas.',
  items:['<b>Panel en tiempo real.</b> Usuarios, ventas, conversión e ingresos recurrentes.','<b>Cohortes y retención.</b> Qué clientes se quedan, cuáles se van y por qué.','<b>Alertas.</b> Te avisamos cuando algo se sale de lo normal.','<b>Exportes.</b> CSV y Excel para tu contabilidad y tu equipo.']}
};
var SPEC={"intro": {"n": "00", "lead": "Bienvenido al estudio donde tu idea se convierte en una app D2C lista para vender.", "why": "Una app que vende directo a tus clientes necesita siete capas funcionando juntas. Aquí recorres cada una, piso por piso, con un guía virtual que te la explica.", "sec": "Las capas del estudio", "items": [["01 · Infraestructura", "La base lista para crecer sin rehacerla."], ["02 · Seguridad", "Tus datos y los de tus usuarios, protegidos por defecto."], ["03 · Pagos", "Cobros directos a tu cuenta, sin fricción."], ["04 · Suscripciones", "Ingresos que se repiten mes a mes."], ["05 · Marketing", "Las personas correctas, midiendo cada dólar invertido."], ["06 · Fidelización", "Clientes que vuelven y recomiendan."], ["07 · Dashboards", "Todo tu negocio en una pantalla."]], "wins": ["Entiendes en minutos cómo se arma tu producto completo", "Ganas puntos del Club CruzTRD en cada piso", "Al final eliges con qué capa empezar"], "cta": "Quiero mi app D2C"}, "infra": {"n": "01", "lead": "La base sobre la que corre toda tu app, lista desde el primer día.", "why": "Cuando la base falla, falla todo: ventas, pagos y confianza. Por eso la dejamos preparada para crecer sin tener que rehacerla.", "items": [["Despliegue automático", "Cada mejora sale a producción en minutos, con despliegues pensados para no interrumpir el servicio."], ["Datos rápidos y ordenados", "PostgreSQL guarda tu información y Redis, como caché, acelera las respuestas."], ["Escala cuando lo necesitas", "Más capacidad cuando llegan usuarios y menos costo cuando bajan."], ["Respaldos y monitoreo", "Copias de seguridad programadas y alertas para enterarte de un problema cuanto antes."]], "wins": ["Una base preparada para picos de tráfico", "Empiezas con un costo fijo bajo", "Lanzas mejoras con pruebas y vuelta atrás"]}, "seg": {"n": "02", "lead": "Seguridad desde el diseño, no como parche al final.", "why": "Un solo incidente puede costarte la confianza de tus clientes. Definimos desde el inicio quién entra, qué puede ver y cómo viajan los datos.", "items": [["Acceso seguro", "Inicio de sesión con OAuth 2.0, contraseñas cifradas y verificación en dos pasos (2FA)."], ["Roles y permisos", "Cada persona de tu equipo ve y edita solo lo que le corresponde."], ["Datos cifrados", "La información viaja y se guarda protegida."], ["Defensa activa", "Límite de intentos, cabeceras seguras y registro de accesos para auditar."]], "wins": ["Tus clientes confían en dejarte sus datos", "Tu equipo trabaja con accesos ordenados", "Cada acceso queda registrado"]}, "pagos": {"n": "03", "lead": "Cobra desde el primer día, directo a tu cuenta.", "why": "Cada paso de más en el checkout es una venta que se pierde. Integramos pasarelas globales y locales para que tus clientes paguen como prefieren.", "items": [["Checkout sin fricción", "Pago en pocos pasos, en web y en móvil."], ["Pasarelas globales y locales", "Stripe, PayPhone, Kushki o Datafast, según tu mercado."], ["Comprobantes automáticos", "Cada venta envía su comprobante de pago; la factura electrónica del SRI se integra aparte."], ["Todo conectado", "Cada pago confirmado activa lo que sigue: acceso, envío o aviso."]], "wins": ["Menos carritos abandonados", "El dinero llega directo a tu cuenta", "Menos trabajo manual en cada venta"]}, "susc": {"n": "04", "lead": "Clientes que se convierten en ingresos que se repiten.", "why": "Vender una vez es bueno; cobrar cada mes es un negocio. Planes, renovaciones y cobros funcionan solos, con reintentos automáticos para recuperar pagos fallidos antes de que se vuelvan bajas.", "items": [["Planes a tu medida", "Mensuales o anuales, con pruebas gratis y cupones."], ["Renovación automática", "Cambios de plan con prorrateo, sin cálculos manuales."], ["Recuperación de pagos", "Reintentos y avisos cuando una tarjeta falla (dunning)."], ["Autogestión", "Tus clientes cambian o pausan su plan sin escribirte."]], "wins": ["Ingresos previsibles mes a mes", "Menos bajas por tarjetas rechazadas", "Menos soporte por cambios de plan"]}, "mkt": {"n": "05", "lead": "Llegas a las personas correctas y mides cada dólar invertido.", "why": "Invertir en anuncios sin medir es adivinar. Conectamos cada campaña con tus ventas para invertir solo en lo que funciona, con IA para encontrar audiencias y probar mensajes.", "items": [["Analítica de todo el embudo", "De la primera visita a la compra, con datos reales."], ["SEO técnico", "Que te encuentren en Google sin pagar cada clic."], ["Campañas conectadas a ventas", "Meta y Google optimizados con lo que de verdad vende."], ["Email y automatizaciones", "Mensajes personalizados con IA, en el momento justo."]], "wins": ["Sabes qué canal trae ventas y cuál no", "Sabes cuánto te cuesta conseguir cada cliente", "Tu marca aparece cuando te buscan"]}, "fidel": {"n": "06", "lead": "Clientes que vuelven por gusto y recomiendan tu marca.", "why": "Conseguir un cliente cuesta; que vuelva vale más. Lo estás viviendo en esta sala: el Club CruzTRD te reconoce, te premia y te da un motivo para regresar.", "items": [["Recompensas", "Puntos, niveles y beneficios que premian cada compra."], ["Referidos", "Tus clientes traen clientes, con premio para ambos."], ["Soporte cercano", "Chat y WhatsApp integrados a tu app."], ["Escucha activa", "Encuestas NPS para mejorar antes de perder a alguien."]], "wins": ["Más compras repetidas por cliente", "Crecimiento por recomendación", "Detectas a tiempo a quien está por irse"]}, "dash": {"n": "07", "lead": "Todo tu negocio en una sola pantalla.", "why": "Decidir con corazonadas sale caro. Métricas en vivo, cohortes y alertas para actuar a tiempo, con los datos de todas las capas anteriores.", "items": [["Panel en tiempo real", "Usuarios, ventas, conversión e ingresos recurrentes."], ["Cohortes y retención", "Qué clientes se quedan, cuáles se van y por qué."], ["Alertas", "Te avisamos cuando algo se sale de lo normal."], ["Exportes", "CSV y Excel para tu contabilidad y tu equipo."]], "wins": ["Ves el estado de tu negocio en segundos", "Alertas para detectar problemas a tiempo", "Todo tu equipo decide con los mismos datos"]}};
var SPNEXT={"intro": 1, "infra": 2, "seg": 3, "pagos": 4, "susc": 5, "mkt": 6, "fidel": 7, "dash": 0};
var SPTAG={"intro": "Bienvenida y mapa del estudio", "infra": "La base preparada para crecer", "seg": "Datos protegidos por defecto", "pagos": "Cobra directo a tu cuenta", "susc": "Ingresos que se repiten", "mkt": "Clientes medidos, no adivinados", "fidel": "Clientes que vuelven", "dash": "Tu negocio en una pantalla"};
var MAG=[{"id": "d2c", "kick": "Editorial", "room": 0, "min": 3, "title": "Vender directo ya no es opcional", "deck": "Las marcas que controlan su propio canal conocen a su cliente, cuidan su margen y deciden a qué ritmo crecer.", "quote": "Cuando vendes directo, el cliente es tuyo.", "body": ["Vender directo, o D2C (direct-to-consumer), significa llegar a tu cliente sin intermediarios. Tu app o tu web son, al mismo tiempo, la tienda, la caja y el mostrador.", "Cuando vendes a través de un marketplace o de un distribuidor, ellos se quedan con una parte de cada venta y, sobre todo, con la relación: saben quién compra, cuándo y por qué. Tú solo ves un pedido.", "Vender directo cambia eso. Sabes qué compra cada persona, cada cuánto vuelve y qué le falta. Con esa información decides precios, lanzamientos y promociones con datos propios, no prestados.", "El costo es que tienes que construir lo que el intermediario te daba hecho: servidores estables, cobros seguros, protección de datos, marketing que traiga gente y razones para que vuelva. Por eso muchas marcas se quedan a medio camino.", "Este estudio existe para resolver ese tramo. Cada piso es una capa de tu producto y en cada uno hay un guía virtual que te la explica. Recorrerlo es ver tu app armada, pieza por pieza."]}, {"id": "capas", "kick": "Guía", "room": 1, "min": 4, "title": "Las 7 capas de una app D2C", "deck": "Un mapa rápido para saber qué necesitas, en qué orden y por qué.", "quote": "No necesitas las siete el primer día, pero sí saber cuándo llega cada una.", "body": ["<b>01 · Infraestructura.</b> Servidores, base de datos y despliegues. Es lo que prepara a tu app para responder igual con diez usuarios que con diez mil.", "<b>02 · Seguridad.</b> Quién entra, qué puede ver y cómo viajan los datos. Se define desde el diseño, no como parche al final.", "<b>03 · Pagos.</b> El checkout, las pasarelas y los comprobantes. Cada paso de más es una venta que se pierde.", "<b>04 · Suscripciones.</b> Planes, renovaciones y cobros recurrentes. Convierten una venta en un ingreso que se repite.", "<b>05 · Marketing.</b> Analítica, SEO, campañas y automatizaciones. Traen a las personas correctas y te dicen qué canal vende de verdad.", "<b>06 · Fidelización.</b> Recompensas, referidos y escucha activa. Hacen que el cliente vuelva y que recomiende.", "<b>07 · Dashboards.</b> Todo lo anterior en una pantalla, para decidir con datos y actuar a tiempo.", "El orden importa. Sin infraestructura y seguridad no hay dónde vender; sin pagos no hay negocio; sin marketing nadie llega; sin fidelización cada cliente se va después de la primera compra."]}, {"id": "cobros", "kick": "Capa 03 · Pagos", "room": 3, "min": 3, "title": "Cobrar en Ecuador sin fricción", "deck": "Cuatro decisiones que separan un checkout que vende de uno que espanta.", "quote": "El mejor checkout es el que el cliente casi no nota.", "body": ["<b>1. Pocos pasos.</b> Pide solo lo necesario para cobrar y entregar. Cada campo extra es una oportunidad para abandonar la compra.", "<b>2. Los medios de pago que tu cliente ya usa.</b> En Ecuador eso significa pasarelas locales como PayPhone, Kushki o Datafast para tarjetas y otros medios. Si vendes fuera del país, se suma una pasarela internacional.", "<b>3. Nunca guardes una tarjeta.</b> La pasarela la convierte en un token y tú solo guardas ese token. Así tus clientes pueden recomprar con un toque y tú no cargas con el riesgo de custodiar números de tarjeta.", "<b>4. Que el pago dispare todo lo demás.</b> Un pago confirmado debe activar al instante el acceso, el envío y el aviso al cliente, sin que nadie de tu equipo tenga que hacerlo a mano; la factura electrónica del SRI se conecta como una integración aparte.", "Con eso resuelto, cobrar deja de ser un trámite y se vuelve una ventaja: el cliente paga rápido, tú recibes directo y cada cobro queda registrado."]}, {"id": "volver", "kick": "Capa 06 · Fidelización", "room": 6, "min": 3, "title": "El cliente que vuelve", "deck": "Conseguir un cliente cuesta; que regrese por gusto vale mucho más.", "quote": "Un buen programa de lealtad no se explica: se siente.", "body": ["La primera compra suele ser la más cara: anuncios, descuentos y tiempo para convencer. La segunda, si el cliente quedó contento, cuesta mucho menos. Ahí está el margen de una marca D2C.", "<b>Reconocer.</b> Saludar por su nombre, recordar lo que compró y mostrarle su progreso. La gente vuelve a donde la reconocen.", "<b>Premiar lo que importa.</b> Puntos y niveles funcionan cuando la recompensa se puede ver y alcanzar, no cuando queda en la letra pequeña.", "<b>Convertir clientes en canal.</b> Un programa de referidos con premio para ambos lados hace que tus mejores clientes te traigan a los siguientes.", "<b>Escuchar antes de perder.</b> Una encuesta corta en el momento justo te avisa quién está por irse mientras todavía puedes hacer algo.", "Si ya pasaste por la capa 06, lo viviste: el Club CruzTRD de este recorrido funciona exactamente así."]}, {"id": "datos", "kick": "Capa 07 · Dashboards", "room": 7, "min": 3, "title": "Cinco números para decidir sin adivinar", "deck": "Los indicadores que toda app D2C debería mirar cada semana.", "quote": "Si lo que te cuesta conseguir un cliente supera lo que te deja, crecer solo acelera la pérdida.", "body": ["<b>Costo de adquisición (CAC).</b> Lo que inviertes en marketing y ventas dividido para los clientes nuevos que llegaron. Te dice cuánto te cuesta cada cliente.", "<b>Conversión.</b> De cada cien personas que visitan tu app, cuántas compran. Es el primer lugar donde mirar cuando las ventas no despegan.", "<b>Retención.</b> Qué porcentaje de tus clientes sigue comprando o usando tu app después de uno, tres y seis meses. Mide si tu producto de verdad sirve.", "<b>Valor de vida del cliente (LTV).</b> Lo que deja un cliente promedio durante toda su relación contigo. Es el techo de lo que puedes invertir para conseguirlo.", "<b>Ingresos recurrentes (MRR).</b> Si cobras por suscripción, lo que entra cada mes de forma predecible. Es la base para planificar contrataciones y gastos.", "La regla de oro: el LTV tiene que ser bastante mayor que el CAC. Un buen dashboard te lo muestra en segundos, sin esperar al cierre de mes."]}];
var WDASH={"seg":"<div class=\"wdash\"><div class=\"wdhead\"><span>Seguridad · 24h</span><span class=\"live\"><i></i>datos de ejemplo</span></div><div class=\"wdbody\"><div class=\"wdradar\"><div class=\"radar\"><svg viewBox=\"0 0 120 120\"><circle class=\"rgrid\" cx=\"60\" cy=\"60\" r=\"18\"/><circle class=\"rgrid\" cx=\"60\" cy=\"60\" r=\"36\"/><circle class=\"rgrid\" cx=\"60\" cy=\"60\" r=\"54\"/><g class=\"sweep\"><defs><linearGradient id=\"swW\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#2DD4A7\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#2DD4A7\" stop-opacity=\".55\"/></linearGradient></defs><path d=\"M60 60 L114 60 A54 54 0 0 0 78 12 Z\" fill=\"url(#swW)\"/></g><circle class=\"rblip\" cx=\"54\" cy=\"93\" r=\"3\"/><circle class=\"rblip\" cx=\"84\" cy=\"32\" r=\"3\"/><circle class=\"rblip\" cx=\"40\" cy=\"71\" r=\"3\"/></svg><div class=\"radarv\"><b>0</b><span>brechas · 24h</span></div></div></div><div class=\"wdkpis\"><div class=\"vkpi\"><div class=\"l\">Cifrado</div><div class=\"v\">AES-256</div></div><div class=\"vkpi\"><div class=\"l\">Acceso</div><div class=\"v\">2FA activo</div></div><div class=\"vkpi\"><div class=\"l\">Bloqueos · 24h</div><div class=\"v\">1.2K</div></div></div></div></div>"};
WDASH.infra="<div class=\"wdash\"><div class=\"wdhead\"><span>Infraestructura · tiempo real</span><span class=\"live\"><i></i>datos de ejemplo</span></div><div class=\"wdbody\"><div class=\"wdhero\"><div class=\"gauge\"><svg viewBox=\"0 0 120 120\"><circle class=\"garc\" cx=\"60\" cy=\"60\" r=\"52\"/><circle class=\"gfill\" cx=\"60\" cy=\"60\" r=\"52\" style=\"--c:327;--o:0.1;transform:rotate(-90deg);transform-origin:center\"/><g class=\"gspin\"><circle class=\"gping\" cx=\"60\" cy=\"8\" r=\"3.4\"/></g></svg><div class=\"gaugev\"><b>99.98%</b><span>uptime</span></div></div></div><div class=\"wdkpis\"><div class=\"vkpi\"><div class=\"l\">Nodos activos</div><div class=\"v\">12</div></div><div class=\"vkpi\"><div class=\"l\">Req / min</div><div class=\"v\">8.5K</div></div><div class=\"vkpi\"><div class=\"l\">Latencia</div><div class=\"v\">42 ms</div></div></div></div></div>";
WDASH.pagos="<div class=\"wdash\"><div class=\"wdhead\"><span>Pagos · hoy</span><span class=\"live\"><i></i>datos de ejemplo</span></div><div class=\"wdbody\"><div class=\"wdhero\"><div class=\"donut\"><svg viewBox=\"0 0 120 120\"><circle class=\"dntrack\" cx=\"60\" cy=\"60\" r=\"52\"/><circle class=\"dnfill\" cx=\"60\" cy=\"60\" r=\"52\" style=\"--c:327;--o:9.8\"/></svg><div class=\"donutv\"><b>97%</b><span>aprobación</span></div></div></div><div class=\"wdkpis\"><div class=\"vkpi\"><div class=\"l\">Hoy</div><div class=\"v\">▲ 24%</div></div><div class=\"vkpi\"><div class=\"l\">Ticket prom.</div><div class=\"v\">$34</div></div><div class=\"vkpi\"><div class=\"l\">Transacciones</div><div class=\"v\">1.2K</div></div></div></div></div>";
WDASH.susc="<div class=\"wdash\"><div class=\"wdhead\"><span>Suscripciones · 12m</span><span class=\"live\"><i></i>datos de ejemplo</span></div><div class=\"wdbody\"><div class=\"wdhero\"><div class=\"wdbig\"><b>$48.2K</b><span>MRR · ▲ 12% mes a mes</span></div></div><div class=\"wdkpis\"><div class=\"vkpi\"><div class=\"l\">Churn</div><div class=\"v\">2.1%</div></div><div class=\"vkpi\"><div class=\"l\">Activas</div><div class=\"v\">3.4K</div></div><div class=\"vkpi\"><div class=\"l\">Retención</div><div class=\"v\">97.9%</div></div></div></div></div>";
WDASH.mkt="<div class=\"wdash\"><div class=\"wdhead\"><span>Campañas · embudo</span><span class=\"live\"><i></i>datos de ejemplo</span></div><div class=\"wdbody\"><div class=\"wdhero\"><div class=\"wfunnel\"><i style=\"width:100%;--d:0.4s\">Alcance 480K</i><i style=\"width:80%;--d:0.5s\">Clics 21K</i><i style=\"width:62%;--d:0.6s\">Leads 4.3K</i><i style=\"width:48%;--d:0.7s\">Ventas 1.1K</i></div></div><div class=\"wdkpis\"><div class=\"vkpi\"><div class=\"l\">CTR</div><div class=\"v\">4.3%</div></div><div class=\"vkpi\"><div class=\"l\">CAC</div><div class=\"v\">$6.20</div></div><div class=\"vkpi\"><div class=\"l\">ROAS</div><div class=\"v\">2.8x</div></div></div></div></div>";
WDASH.fidel="<div class=\"wdash\"><div class=\"wdhead\"><span>Lealtad · 90 días</span><span class=\"live\"><i></i>datos de ejemplo</span></div><div class=\"wdbody\"><div class=\"wdhero\"><div class=\"rings\"><svg viewBox=\"0 0 120 120\"><circle class=\"rtrack\" cx=\"60\" cy=\"60\" r=\"52\"/><circle class=\"rfill\" cx=\"60\" cy=\"60\" r=\"52\" style=\"--c:327;--o:127.5;stroke:#2DD4A7\"/><circle class=\"rtrack\" cx=\"60\" cy=\"60\" r=\"38\"/><circle class=\"rfill\" cx=\"60\" cy=\"60\" r=\"38\" style=\"--c:238.8;--o:66.9;stroke:#5BF3C0\"/></svg><div class=\"donutv\"><b>61%</b><span>recurrencia</span></div></div></div><div class=\"wdkpis\"><div class=\"vkpi\"><div class=\"l\">NPS</div><div class=\"v\">72</div></div><div class=\"vkpi\"><div class=\"l\">Referidos</div><div class=\"v\">1.1K</div></div><div class=\"vkpi\"><div class=\"l\">Recompra</div><div class=\"v\">▲ 18%</div></div></div></div></div>";
WDASH.dash="<div class=\"wdash\"><div class=\"wdhead\"><span>Panel · tiempo real</span><span class=\"live\"><i></i>datos de ejemplo</span></div><div class=\"wdbody\"><div class=\"wdhero\"><div class=\"wdbig\"><b>12.4K</b><span>usuarios · ▲ 8% semana</span></div></div><div class=\"wdkpis\"><div class=\"vkpi\"><div class=\"l\">Conversión</div><div class=\"v\">3.7%</div></div><div class=\"vkpi\"><div class=\"l\">Ticket prom.</div><div class=\"v\">$42</div></div><div class=\"vkpi\"><div class=\"l\">MRR</div><div class=\"v\">$48.2K</div></div></div></div></div>";
(function(){
  var loader=document.getElementById('loader');
  function sin3D(){ loader.innerHTML='<div class="loadwrap" style="max-width:520px;padding:0 24px;text-align:center"><div class="loadmark">Cruz<b>TRD</b></div><p style="font:400 17px/1.5 Inter,system-ui,sans-serif;color:#dfe7e4;margin:18px 0 22px">Tu navegador no puede mostrar el recorrido en 3D. Puedes ver las siete capas y diagnosticar tu idea desde el inicio.</p><a href="/#capas" style="display:inline-flex;align-items:center;min-height:50px;padding:0 26px;border-radius:999px;background:#2DD4A7;color:#04130E;text-decoration:none;font:500 16px Inter,system-ui,sans-serif">Ver las siete capas</a></div>'; }
  if(!window.THREE){ sin3D(); return; }
  try{ var __t=document.createElement('canvas'); if(!(__t.getContext('webgl2')||__t.getContext('webgl'))) throw 0; }catch(e){ sin3D(); return; }
  var cv=document.getElementById('c');
  var renderer=new THREE.WebGLRenderer({canvas:cv,antialias:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  var scene=new THREE.Scene();
  var camera=new THREE.PerspectiveCamera(72,innerWidth/innerHeight,0.1,1100);
  camera.position.set(0,0,0);
  var RADIUS=500;
  var geo=new THREE.SphereGeometry(RADIUS,80,50); geo.scale(-1,1,1);
  var sphere=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({map:null}));
  sphere.rotation.y=Math.PI/2; scene.add(sphere);
  // sala con foto panoramica parcial (no 360): esfera parcial con la foto en su resolucion completa
  var flatMesh=null, flatTex={};
  function setFlat(room){
    if(!room.flat){ if(flatMesh)flatMesh.visible=false; sphere.visible=true; return; }
    var F=room.flat, d2r=Math.PI/180; sphere.visible=false;
    if(!flatMesh){ var g=new THREE.SphereGeometry(RADIUS*0.999,180,72,(((F.lonA-180)%360)+360)%360*d2r,(F.lonB-F.lonA)*d2r,(90-F.latT)*d2r,(F.latT-F.latB)*d2r); g.scale(-1,1,1);
      flatMesh=new THREE.Mesh(g,new THREE.MeshBasicMaterial({color:0x000000})); flatMesh.rotation.y=Math.PI/2; scene.add(flatMesh); }
    flatMesh.visible=true;
    function use(t){ flatMesh.material.map=t; flatMesh.material.color.set(0xffffff); flatMesh.material.needsUpdate=true; }
    if(flatTex[room.pano]) use(flatTex[room.pano]);
    else texLoader.load(room.pano,function(t){ t.minFilter=THREE.LinearMipmapLinearFilter; t.magFilter=THREE.LinearFilter; t.generateMipmaps=true; t.anisotropy=renderer.capabilities.getMaxAnisotropy(); flatTex[room.pano]=t; use(t); });
  }
  // ===== compositing (motor VFX): bloom SELECTIVO (solo el tablero) + grano de película =====
  var BLOOM_LAYER=1, bloomLayer=new THREE.Layers(); bloomLayer.set(BLOOM_LAYER);
  var darkMat=new THREE.MeshBasicMaterial({color:0x000000}); var matStash={};
  var renderPass=new THREE.RenderPass(scene,camera);
  var bloomPass=new THREE.UnrealBloomPass(new THREE.Vector2(innerWidth,innerHeight),0.55,0.4,0.55); // strength, radius, threshold
  var bloomComposer=new THREE.EffectComposer(renderer); bloomComposer.renderToScreen=false;
  bloomComposer.addPass(renderPass); bloomComposer.addPass(bloomPass);
  var mixPass=new THREE.ShaderPass(new THREE.ShaderMaterial({
    uniforms:{baseTexture:{value:null}, bloomTexture:{value:bloomComposer.renderTarget2.texture}, texel:{value:new THREE.Vector2(1/1920,1/1080)}, sharp:{value:0.28}},
    vertexShader:'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader:'uniform sampler2D baseTexture; uniform sampler2D bloomTexture; uniform vec2 texel; uniform float sharp; varying vec2 vUv; void main(){ vec4 c=texture2D(baseTexture,vUv); vec4 n=texture2D(baseTexture,vUv+vec2(texel.x,0.0))+texture2D(baseTexture,vUv-vec2(texel.x,0.0))+texture2D(baseTexture,vUv+vec2(0.0,texel.y))+texture2D(baseTexture,vUv-vec2(0.0,texel.y)); c=c+(c-n*0.25)*sharp; gl_FragColor = c + texture2D(bloomTexture,vUv); }'
  }),'baseTexture');
  var filmPass=new THREE.FilmPass(0.035,0.0,0,false); filmPass.renderToScreen=true;
  var __pr=Math.min(devicePixelRatio,2), __msRT=(renderer.capabilities.isWebGL2&&THREE.WebGLMultisampleRenderTarget)?new THREE.WebGLMultisampleRenderTarget(innerWidth*__pr,innerHeight*__pr,{format:THREE.RGBAFormat}):undefined;
  var finalComposer=new THREE.EffectComposer(renderer,__msRT);
  finalComposer.addPass(renderPass); finalComposer.addPass(mixPass); finalComposer.addPass(filmPass);
  function darkenNB(o){ if(o.isMesh && o.layers && !bloomLayer.test(o.layers)){ matStash[o.uuid]=o.material; o.material=darkMat; } }
  function restoreNB(o){ if(matStash[o.uuid]){ o.material=matStash[o.uuid]; delete matStash[o.uuid]; } }
  function renderComposited(){ scene.traverse(darkenNB); bloomComposer.render(); scene.traverse(restoreNB); finalComposer.render(); }
  var texLoader=new THREE.TextureLoader();
  // caché LRU de texturas: volver entre pisos ya vistos es instantáneo (sin re-decodificar 4K)
  var texCache=Object.create(null), texOrder=[], MAXTEX=4;
  function applyTex(t){ sphere.material.map=t; sphere.material.needsUpdate=true; }
  function touchCache(url){
    var i=texOrder.indexOf(url); if(i>-1)texOrder.splice(i,1); texOrder.push(url);
    while(texOrder.length>MAXTEX){ var ev=texOrder.shift(); if(texCache[ev] && texCache[ev]!==sphere.material.map){ texCache[ev].dispose(); delete texCache[ev]; } }
  }
  function setPano(url,cb){
    if(texCache[url]){ applyTex(texCache[url]); touchCache(url); if(cb)cb(); return; }
    texLoader.load(url,function(t){
      t.minFilter=THREE.LinearMipmapLinearFilter;t.magFilter=THREE.LinearFilter;t.generateMipmaps=true;t.anisotropy=renderer.capabilities.getMaxAnisotropy();
      texCache[url]=t; touchCache(url); applyTex(t); if(cb)cb();
    },undefined,function(){
      // si la imagen falla: un reintento y, si vuelve a fallar, seguimos para no dejar el recorrido colgado
      if(!setPano._r) setPano._r={};
      if(!setPano._r[url]){ setPano._r[url]=1; setTimeout(function(){ setPano(url,cb); },700); return; }
      delete setPano._r[url];
      if(cb)cb(false);
    });
  }

  // ===== muro: tablero renderizado en WebGL sobre una pantalla real (textura canvas + compositing) =====
  function lonlatToDir(lon,lat){var a=lon*Math.PI/180,b=lat*Math.PI/180;return new THREE.Vector3(-Math.cos(b)*Math.sin(a),Math.sin(b),Math.cos(b)*Math.cos(a));}
  function dirToLonLat(d){var b=Math.asin(Math.max(-1,Math.min(1,d.y)));var a=Math.atan2(-d.x,d.z);return [a*180/Math.PI,b*180/Math.PI];}
  function screenToDir(px,py){var v=new THREE.Vector3(px/innerWidth*2-1,-(py/innerHeight*2-1),0.5).unproject(camera);return v.normalize();}
  // ---- paleta de acentos (multicolor, no solo verde) ----
  var ACC={g:'#2DD4A7',c:'#38E5FF',b:'#5AA0FF',a:'#FFB84D',m:'#FF6FA5',v:'#B98CFF'};
  function hx(h,a){var n=parseInt(h.slice(1),16);return 'rgba('+((n>>16)&255)+','+((n>>8)&255)+','+(n&255)+','+a+')';}
  // ---- varias pantallas vivas por sala (textura canvas en WebGL) ----
  var screens=[], __fw=new THREE.Vector3();
  function clearWall(){ screens.forEach(function(s){if(s.vid){try{s.vid.pause();s.vid.removeAttribute('src');s.vid.load();}catch(e){}} scene.remove(s.mesh); if(s.mesh.geometry)s.mesh.geometry.dispose(); if(s.mesh.material)s.mesh.material.dispose(); if(s.tex)s.tex.dispose();}); screens=[]; }

  // ===== MOTOR FX ==========================================================================================
  // Todo se registra en pixeles del panorama (4096x2048): lo que se ve fuera del contorno medido es la foto original.
  //  · pantallas: video o interfaz en vivo recortada por pixel al area activa de un monitor real (sc.act)
  //  · fx: luces sobre la foto (LEDs, pulsos, ondas, barridos, vapor) y animaciones aditivas sobre contenido existente
  var PANO_W=4096, PANO_H=2048, fxs=[], __fxT=0;
  function pxToLL(x,y){var lon=360*x/PANO_W+180; lon=((lon+180)%360+360)%360-180; return [lon, 90-180*y/PANO_H];}
  function pxDir(x,y){var q=pxToLL(x,y);return lonlatToDir(q[0],q[1]).normalize();}
  function quadGeo(a,M,N,Mv,pxs){
    M=M||5; N=N||16; Mv=Mv||10;
    var ctr=[(a[0][0]+a[1][0]+a[2][0]+a[3][0])/4,(a[0][1]+a[1][1]+a[2][1]+a[3][1])/4];
    var C3=a.map(function(q){var dx=q[0]-ctr[0],dy=q[1]-ctr[1],l=Math.hypot(dx,dy)||1;return pxDir(q[0]+dx/l*M*1.42,q[1]+dy/l*M*1.42);});
    var Ex=a.map(function(q){var dx=q[0]-ctr[0],dy=q[1]-ctr[1],l=Math.hypot(dx,dy)||1;return [q[0]+dx/l*M*1.42,q[1]+dy/l*M*1.42];});
    function P3(s,t){ if(pxs){ var x=(1-t)*((1-s)*Ex[0][0]+s*Ex[1][0])+t*((1-s)*Ex[3][0]+s*Ex[2][0]), y=(1-t)*((1-s)*Ex[0][1]+s*Ex[1][1])+t*((1-s)*Ex[3][1]+s*Ex[2][1]); return pxDir(x,y); }
      var v=new THREE.Vector3();['x','y','z'].forEach(function(k){v[k]=(1-t)*((1-s)*C3[0][k]+s*C3[1][k])+t*((1-s)*C3[3][k]+s*C3[2][k]);});return v.normalize();}
    var R=RADIUS*0.992,pos=[],puv=[],idx=[];
    for(var j=0;j<=Mv;j++)for(var i=0;i<=N;i++){var d=P3(i/N,j/Mv),q=dirToLonLat(d);d.multiplyScalar(R);pos.push(d.x,d.y,d.z);var u=((q[0]-180)/360)%1;if(u<0)u+=1;puv.push(u,(q[1]+90)/180);}
    for(var j=0;j<Mv;j++)for(var i=0;i<N;i++){var a0=j*(N+1)+i,b0=a0+1,c0=a0+N+1,d0=c0+1;idx.push(a0,b0,d0,a0,d0,c0);}
    var g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3)); g.setAttribute('puv',new THREE.Float32BufferAttribute(puv,2)); g.setIndex(idx);
    return {g:g, cdir:P3(0.5,0.5).clone()};
  }
  function qU(a){return {es:{value:window.__ES||1},q0:{value:new THREE.Vector2(a[0][0],a[0][1])},q1:{value:new THREE.Vector2(a[1][0],a[1][1])},q2:{value:new THREE.Vector2(a[2][0],a[2][1])},q3:{value:new THREE.Vector2(a[3][0],a[3][1])}};}
  var GL_VS='attribute vec2 puv; varying vec2 vP; void main(){ vP=puv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }';
  var GL_Q=['uniform vec2 q0,q1,q2,q3; uniform vec4 rad; uniform float es; varying vec2 vP;',
    'float sd(vec2 a,vec2 b,vec2 p){vec2 e=b-a; return (e.x*(p.y-a.y)-e.y*(p.x-a.x))/length(e);}',
    'vec2 PX(){return vec2(vP.x*'+PANO_W+'.0,(1.0-vP.y)*'+PANO_H+'.0);}',
    'float qm(vec2 p,out vec2 st){',
    '  float dT=sd(q0,q1,p), dR=sd(q1,q2,p), dB=sd(q2,q3,p), dL=sd(q3,q0,p);',
    '  float m=min(min(dT,dB),min(dL,dR));',
    '  if(dT<rad.x&&dL<rad.x) m=min(m,rad.x-length(vec2(rad.x-dT,rad.x-dL)));',
    '  if(dT<rad.y&&dR<rad.y) m=min(m,rad.y-length(vec2(rad.y-dT,rad.y-dR)));',
    '  if(dB<rad.z&&dR<rad.z) m=min(m,rad.z-length(vec2(rad.z-dB,rad.z-dR)));',
    '  if(dB<rad.w&&dL<rad.w) m=min(m,rad.w-length(vec2(rad.w-dB,rad.w-dL)));',
    '  st=vec2(dL/(dL+dR), dT/(dT+dB)); return m*es;}',
    'float h21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}',
    'float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y);}',
    'float fbm(vec2 p){float s=0.0,a=0.5;for(int i=0;i<5;i++){s+=a*vn(p);p*=2.03;a*=0.5;}return s;}'].join('\n');

  // ---------- pantallas (video o interfaz) recortadas al area activa ----------
  function quadAspect(a){
    var w=(Math.hypot(a[1][0]-a[0][0],a[1][1]-a[0][1])+Math.hypot(a[2][0]-a[3][0],a[2][1]-a[3][1]))/2;
    var h=(Math.hypot(a[3][0]-a[0][0],a[3][1]-a[0][1])+Math.hypot(a[2][0]-a[1][0],a[2][1]-a[1][1]))/2;
    var latc=Math.abs(pxToLL(0,(a[0][1]+a[2][1])/2)[1])*Math.PI/180; return (w*Math.cos(latc))/h;
  }
  function makeQuadScreen(sc){
    var a=sc.act, wide=Math.abs(a[1][0]-a[0][0])>420, G=quadGeo(a,5,wide?64:16,wide?12:10,wide||sc.pxgeo), tex, vid=null, cv=null, cx=null, asp=sc.aspect||quadAspect(a), crop=[1,1,0.5,0.5];
    if(sc.video){
      vid=document.createElement('video'); vid.src=sc.video; vid.muted=true; vid.defaultMuted=true; vid.loop=true; vid.playsInline=true;
      vid.setAttribute('playsinline',''); vid.setAttribute('muted',''); vid.crossOrigin='anonymous'; vid.preload='auto';
      var tryPlay=function(){var pr=vid.play(); if(pr&&pr.catch)pr.catch(function(){});}; tryPlay();
      addEventListener('pointerdown',tryPlay,{once:true}); addEventListener('touchstart',tryPlay,{once:true,passive:true});
      tex=new THREE.VideoTexture(vid);
      var av=16/9, sx=asp<av?asp/av:1, sy=asp<av?1:av/asp, ccx=sc.cx!=null?sc.cx:0.5, ccy=sc.cy!=null?sc.cy:0.5;
      crop=[sx,sy,Math.min(1-sx/2,Math.max(sx/2,ccx)),Math.min(1-sy/2,Math.max(sy/2,ccy))];
    } else {
      var Hc=sc.res||520, Wc=sc.sprite?sc.cw:Math.round(Hc*asp); if(sc.sprite)Hc=sc.ch; cv=document.createElement('canvas'); cv.width=Wc; cv.height=Hc; cx=cv.getContext('2d');
      tex=new THREE.CanvasTexture(cv);
    }
    tex.flipY=false; tex.magFilter=THREE.LinearFilter;
    if(renderer.capabilities.isWebGL2){tex.minFilter=THREE.LinearMipmapLinearFilter; tex.generateMipmaps=true;} else {tex.minFilter=THREE.LinearFilter; tex.generateMipmaps=false;}
    tex.anisotropy=renderer.capabilities.getMaxAnisotropy();
    var add=sc.blend==='add', alpha=sc.blend==='alpha', lift=sc.lift||(vid?[0.095,0.108,0.113]:[0.02,0.026,0.03]);
    var U=qU(a); U.vid={value:tex}; U.rad={value:new THREE.Vector4().fromArray(sc.rad||[1,1,1,1])}; U.crop={value:new THREE.Vector4().fromArray(crop)};
    U.gain={value:sc.gain||(vid?0.9:1.0)}; U.lift={value:new THREE.Vector3().fromArray(lift)}; U.glass={value:sc.glass!=null?sc.glass:0.045}; U.op={value:sc.op!=null?sc.op:1.0}; U.pano={value:sphere.material.map}; U.key={value:new THREE.Vector2().fromArray(sc.key||[-1,0])}; U.spos={value:new THREE.Vector4(0,0,1,1)}; U.spr={value:sc.sprite?1:0}; U.mtex={value:null}; U.mrect={value:new THREE.Vector4().fromArray(sc.mrect||[0,0,1,1])}; U.hasm={value:0};
    if(sc.mask){ new THREE.TextureLoader().load(sc.mask,function(mt){ mt.flipY=false; mt.minFilter=THREE.LinearFilter; mt.generateMipmaps=false; U.mtex.value=mt; U.hasm.value=1; }); }
    var mat=new THREE.ShaderMaterial({uniforms:U, vertexShader:GL_VS,
      fragmentShader:[GL_Q,'uniform sampler2D vid; uniform sampler2D pano; uniform vec2 key; uniform float gain,glass,op; uniform vec4 crop; uniform vec3 lift; uniform vec4 spos; uniform int spr; uniform sampler2D mtex; uniform vec4 mrect; uniform int hasm;',
        'void main(){ vec2 st; float m=qm(PX(),st); float al=clamp(m+0.5,0.0,1.0); if(al<=0.0) discard;',
        '  vec2 uv=crop.zw+(st-0.5)*crop.xy; if(spr==1){ uv=(PX()-spos.xy)/spos.zw; if(uv.x<0.0||uv.x>1.0||uv.y<0.0||uv.y>1.0) discard; } vec4 tx=texture2D(vid,uv);',
        alpha?['  float km=1.0; vec3 rgb=tx.rgb; if(key.x>=0.0){ vec3 pc=texture2D(pano,vP,1.5).rgb; float pl=dot(pc,vec3(0.299,0.587,0.114))*255.0; km=smoothstep(key.x,key.y,pl); rgb=mix(tx.rgb*vec3(1.0,0.965,0.925), texture2D(pano,vP,4.0).rgb, 0.13); } if(hasm==1){ vec2 mu=(PX()-mrect.xy)/mrect.zw; km=(mu.x<0.0||mu.x>1.0||mu.y<0.0||mu.y>1.0)?0.0:texture2D(mtex,mu).r; }',
         '  gl_FragColor=vec4(rgb, tx.a*al*op*km);'].join('\n'):
        add?'  gl_FragColor=vec4(tx.rgb*tx.a*gain*op*al,1.0);':
        ['  vec3 col=lift+tx.rgb*gain; float e=smoothstep(0.0,3.0,m); col=mix(lift*0.85,col,0.55+0.45*e);',
         '  col+=vec3(smoothstep(0.15,0.0,abs(st.x*0.55+st.y*0.45-0.30))*glass);',
         '  gl_FragColor=vec4(col,al*op);'].join('\n'),
        '}'].join('\n'),
      transparent:true, depthTest:false, depthWrite:false, side:THREE.DoubleSide,
      blending:add?THREE.AdditiveBlending:THREE.NormalBlending});
    var mesh=new THREE.Mesh(G.g,mat); mesh.renderOrder=add?5:(alpha?7:3); scene.add(mesh);
    var s2=Object.assign({},sc); s2.mesh=mesh; s2.tex=tex; s2.vid=vid; s2.cv=cv; s2.cx=cx; s2.cdir=G.cdir;
    if(cv){s2.W=cv.width; s2.H=cv.height; s2.iv=sc.iv||66; s2.last=0; s2.t0=performance.now()/1000-Math.random()*20; s2.st={}; drawUI(s2,0); tex.needsUpdate=true;}
    screens.push(s2);
  }

  // ---------- efectos de luz sobre la foto ----------
  // kinds: 0 glow · 1 scan (barrido) · 2 ripple (telefono sonando) · 3 beam (pulso que recorre una franja) · 4 keys (teclas) · 5 steam (vapor)
  var FXK={glow:0,scan:1,ripple:2,beam:3,keys:4,steam:5,orbit:6};
  function makeFx(f){
    if(f.type==='leds'){makeLeds(f);return;}
    if(f.type==='shine'||f.type==='sway'){makePanoFx(f);return;}
    var a=f.q; if(!a){var r=f.r||10, ry=f.ry||r; a=[[f.x-r*2.2,f.y-ry*2.2],[f.x+r*2.2,f.y-ry*2.2],[f.x+r*2.2,f.y+ry*2.2],[f.x-r*2.2,f.y+ry*2.2]];}
    var G=quadGeo(a,f.pad!=null?f.pad:2,8,6), U=qU(a);
    U.rad={value:new THREE.Vector4().fromArray(f.rad||[0,0,0,0])}; U.t={value:0}; U.kind={value:FXK[f.type]};
    U.col={value:new THREE.Vector3().fromArray(f.color||[0.2,1,0.75])}; U.c={value:new THREE.Vector2(f.x||0,f.y||0)};
    U.rr={value:new THREE.Vector2(f.r||10,f.ry||f.r||10)}; U.p={value:new THREE.Vector4().fromArray(f.p||[1,0.5,0.5,0])};
    var mat=new THREE.ShaderMaterial({uniforms:U, vertexShader:GL_VS,
      fragmentShader:[GL_Q,'uniform float t; uniform int kind; uniform vec3 col; uniform vec2 c,rr; uniform vec4 p;',
       'void main(){ vec2 X=PX(), st; float m=qm(X,st); float al=clamp(m+0.5,0.0,1.0); if(al<=0.0) discard; float b=0.0;',
       '  vec2 d=(X-c)/rr; float r=length(d);',
       '  if(kind==0){ b=(p.y+p.z*(0.5+0.5*sin(t*p.x*6.2832+p.w)))*exp(-r*r*2.2); }',
       '  else if(kind==1){ float y=fract(t*p.x); y=y<0.5?y*2.0:2.0-y*2.0; float ln=exp(-pow((st.y-y)*p.y,2.0)); float edge=smoothstep(0.0,4.0,m);',
       '    b=(ln*1.1+p.z*(0.6+0.4*sin(t*2.6)))*edge; }',
       '  else if(kind==2){ float ph=fract(t/p.x); float gate=ph<p.y?1.0:0.0; float tt=t*p.z;',
       '    for(int k=0;k<3;k++){ float f=fract(tt+float(k)/3.0); float ring=exp(-pow((r-0.25-f*1.5)*11.0,2.0))*(1.0-f)*smoothstep(0.0,0.15,f); b+=ring; }',
       '    b=b*gate*0.85+gate*exp(-r*r*9.0)*(0.5+0.5*sin(t*40.0))*0.18; }',
       '  else if(kind==3){ float y=1.0-fract(t*p.x+p.w); float band=exp(-pow((st.y-y)*p.y,2.0)); float edge=smoothstep(0.0,2.0,m); b=(band+p.z)*edge; }',
       '  else if(kind==4){ vec2 g=floor(st*p.xy); float k=h21(g+floor(t*p.z)*vec2(13.1,7.7)); float on=step(0.86,k); vec2 f=fract(st*p.xy)-0.5;',
       '    b=on*exp(-dot(f,f)*7.0)*smoothstep(0.0,2.0,m); }',
       '  else if(kind==6){ float ang=atan(d.y,d.x); float hd=t*p.x*6.2832+p.w; float da=mod(hd-ang,6.2832); float tr=exp(-da*1.6); float ring=exp(-pow((r-p.y)*p.z,2.0)); b=ring*(tr*1.1+0.06); }',
       '  else { vec2 q=vec2(st.x*p.y,st.y*2.4+t*p.x); float n=fbm(q+vec2(fbm(q*0.7+t*0.25)*1.4,0.0)); float w=0.22+0.55*(1.0-st.y);',
       '    float cone=smoothstep(w,0.0,abs(st.x-0.5-(1.0-st.y)*0.06*sin(t*0.9))); float fade=smoothstep(1.0,0.9,st.y)*smoothstep(0.0,0.5,st.y);',
       '    b=smoothstep(0.42,0.85,n)*cone*fade*p.z; }',
       '  gl_FragColor=vec4(col*b*al,1.0); }'].join('\n'),
      transparent:true, depthTest:false, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending});
    var mesh=new THREE.Mesh(G.g,mat); mesh.renderOrder=6; if(f.bloom)mesh.layers.enable(BLOOM_LAYER); scene.add(mesh);
    fxs.push({mesh:mesh, u:U});
  }
  // LEDs: cada punto detectado en la foto (equipos, consolas) parpadea con su propio ritmo; apagado = disco oscuro
  function makeLeds(f){
    var P=f.pts, n=P.length, pos=new Float32Array(n*3), col=new Float32Array(n*3), prm=new Float32Array(n*4), R=RADIUS*0.99;
    for(var i=0;i<n;i++){var p=P[i], d=pxDir(p[0],p[1]).multiplyScalar(R); pos.set([d.x,d.y,d.z],i*3);
      var r=p[2]/255,g=p[3]/255,b=p[4]/255, mx=Math.max(r,g,b,0.01); col.set([Math.min(1,r/mx*0.9+0.1),Math.min(1,g/mx*0.9+0.1),Math.min(1,b/mx*0.9+0.1)],i*3);
      var h=Math.sin(i*12.9898+n)*43758.5453; h-=Math.floor(h);
      prm.set([0.75+0.25*h, h*7.3, (h<0.35?0.6:(h<0.8?3.2:9.0))*(f.speed||1), (p[5]||3)*0.75+0.9],i*4);}
    var g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.BufferAttribute(pos,3)); g.setAttribute('col',new THREE.BufferAttribute(col,3)); g.setAttribute('prm',new THREE.BufferAttribute(prm,4));
    var U={t:{value:0}, pxs:{value:1}, dark:{value:new THREE.Vector3().fromArray(f.dark||[0.05,0.055,0.06])}};
    var mat=new THREE.ShaderMaterial({uniforms:U,
      vertexShader:['attribute vec3 col; attribute vec4 prm; uniform float t,pxs; varying vec3 vC; varying float vB;',
        'float hh(float x){return fract(sin(x)*43758.5453);}',
        'void main(){ float k=floor(t*prm.z+prm.y); float on=prm.z<1.0?1.0:step(0.3,hh(k*1.37+prm.y*17.0));',
        '  vB=on*prm.x*(prm.z<1.0?(0.75+0.25*sin(t*1.7+prm.y*3.0)):1.0); vC=col;',
        '  gl_PointSize=max(2.0,prm.w*pxs); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }'].join('\n'),
      fragmentShader:['uniform vec3 dark; varying vec3 vC; varying float vB;',
        'void main(){ vec2 d=gl_PointCoord-0.5; float r2=dot(d,d)*4.0; if(r2>1.0) discard; float core=exp(-r2*2.4);',
        '  vec3 c=mix(dark, vC*1.25+0.12, vB); gl_FragColor=vec4(c, core*mix(0.85,1.0,vB)); }'].join('\n'),
      transparent:true, depthTest:false, depthWrite:false});
    var pts=new THREE.Points(g,mat); pts.renderOrder=6; pts.frustumCulled=false; scene.add(pts);
    fxs.push({mesh:pts, u:U, leds:true});
  }

  // efectos que leen la propia foto: brillo que recorre objetos de vidrio/metal y hojas que se mecen con la brisa
  function makePanoFx(f){
    var a=f.q, G=quadGeo(a,f.pad!=null?f.pad:2,f.n||14,f.m||10), U=qU(a);
    U.rad={value:new THREE.Vector4().fromArray(f.rad||[0,0,0,0])}; U.t={value:0}; U.pano={value:sphere.material.map};
    U.p={value:new THREE.Vector4().fromArray(f.p||[1,1,1,0])}; U.col={value:new THREE.Vector3().fromArray(f.color||[1,0.95,0.85])};
    var sway=f.type==='sway';
    var frag=[GL_Q,'uniform sampler2D pano; uniform float t; uniform vec4 p; uniform vec3 col;',
      'void main(){ vec2 X=PX(), st; float m=qm(X,st); float al=clamp(m+0.5,0.0,1.0); if(al<=0.0) discard;',
      sway?[
       '  float fe=smoothstep(0.0,p.w,m);',
       '  vec3 c0=texture2D(pano,vP).rgb; float leaf=smoothstep(0.02,0.10,c0.g-max(c0.r,c0.b));',
       '  float hgt=pow(1.0-st.y,1.3);',
       '  float w=sin(t*p.y+X.x*0.045+X.y*0.02)*0.65+sin(t*p.y*1.93+X.y*0.09)*0.35;',
       '  vec2 off=vec2(w*p.x*hgt, 0.35*p.x*hgt*sin(t*p.y*1.4+X.x*0.06))/vec2('+PANO_W+'.0,'+PANO_H+'.0);',
       '  vec3 c1=texture2D(pano,vP+off).rgb; float g1=smoothstep(0.02,0.10,c1.g-max(c1.r,c1.b));',
       '  float k=max(leaf,g1)*fe*al; gl_FragColor=vec4(c1,k); }'].join('\n'):[
       '  vec3 c0=texture2D(pano,vP).rgb; vec3 c3=texture2D(pano,vP,3.0).rgb;',
       '  float L0=dot(c0,vec3(0.299,0.587,0.114)), L3=dot(c3,vec3(0.299,0.587,0.114));',
       '  float det=smoothstep(p.z*0.02,p.z*0.08,abs(L0-L3))*smoothstep(0.35,0.7,L0);',
       '  float ph=fract(t*p.x+p.w); float u=(st.x*0.75+st.y*0.45)-(ph*2.4-0.6); float band=exp(-u*u*p.y);',
       '  float edge=smoothstep(0.0,3.0,m); gl_FragColor=vec4(col*band*det*edge*0.85,1.0); }'].join('\n')].join('\n');
    var mat=new THREE.ShaderMaterial({uniforms:U, vertexShader:GL_VS, fragmentShader:frag, transparent:true, depthTest:false, depthWrite:false,
      side:THREE.DoubleSide, blending:sway?THREE.NormalBlending:THREE.AdditiveBlending});
    var mesh=new THREE.Mesh(G.g,mat); mesh.renderOrder=sway?4:6; scene.add(mesh); fxs.push({mesh:mesh,u:U});
  }

  // ===== hologramas de fidelizacion (DOM proyectado: texto nitido y siempre de frente al visitante) =====
  var holoEls=[], holoNext=0, holoK=0;
  var HOLO_SET=[['★','Nivel Oro desbloqueado','Ana · 650 pts'],['+','Nuevo referido','Diego invitó a Sofía'],['☕','Canjeó 500 pts','café de cortesía'],
    ['↺','Volvió por 3ª vez','Mateo · cliente frecuente'],['♥','Reseña 5 estrellas','“¡Me encanta!” · Lucía'],['%','Cupón aplicado','-15% en su recompra'],
    ['+','2 nuevos referidos','Valeria invitó a sus amigas'],['★','+150 puntos','compra de $42 · Andrés'],['✓','Renovó su plan','12 meses · Camila'],['🎁','Recompensa enviada','kit de bienvenida · Jorge']];
  function clearHolo(){ holoEls.forEach(function(h){h.el.remove();}); holoEls=[]; holoNext=0; }
  function updateHolo(now){
    var H=ROOMS[cur].holo; if(!H||moving){ if(holoEls.length&&moving)clearHolo(); return; }
    if(now>holoNext){ holoNext=now+(H.per||2600)*(0.75+Math.random()*0.5);
      var maxN=innerWidth<820?1:2, shown=holoEls.filter(function(h){return h.vis;});
      function scr(dd){proj.copy(dd).multiplyScalar(RADIUS*0.9).project(camera); return [(proj.x*0.5+0.5)*innerWidth,(-proj.y*0.5+0.5)*innerHeight,proj.z<1&&dd.dot(fwd)>0.15&&Math.abs(proj.x)<0.85&&Math.abs(proj.y)<0.8];}
      var pool=H.pts.filter(function(q){ var dd=pxDir(q[0],q[1]), sp=scr(dd); if(!sp[2])return false;
        return !holoEls.some(function(h){ var hp=scr(h.dir); return Math.abs(hp[0]-sp[0])<(innerWidth<820?200:270) && Math.abs(hp[1]-sp[1])<110; }); });
      if(shown.length>=maxN||!pool.length){ holoNext=now+500; } else {
      var a=pool[Math.floor(Math.random()*pool.length)], m=HOLO_SET[holoK++%HOLO_SET.length];
      var el=document.createElement('div'); el.className='holo-n'; el.innerHTML='<span class="hic">'+m[0]+'</span><span class="htx"><b>'+m[1]+'</b><i>'+m[2]+'</i></span>';
      document.body.appendChild(el); holoEls.push({el:el, dir:pxDir(a[0],a[1]), t0:now, life:H.life||7000, vis:true}); } }
    for(var i=holoEls.length-1;i>=0;i--){ var h=holoEls[i], age=(now-h.t0)/h.life;
      if(age>1){ h.el.remove(); holoEls.splice(i,1); continue; }
      proj.copy(h.dir).multiplyScalar(RADIUS*0.9).project(camera);
      var vis=proj.z<1 && h.dir.dot(fwd)>0.15 && Math.abs(proj.x)<1.1 && Math.abs(proj.y)<1.1;
      var op=Math.min(1,age*6)*Math.min(1,(1-age)*4);
      h.vis=vis; h.el.style.opacity=vis?op:0;
      h.el.style.transform='translate(-50%,-100%) translateY('+(-age*46)+'px) scale('+(0.92+0.08*Math.min(1,age*6))+')';
      h.el.style.left=((proj.x*0.5+0.5)*innerWidth)+'px'; h.el.style.top=((-proj.y*0.5+0.5)*innerHeight)+'px'; }
  }
  function clearFx(){ clearHolo(); fxs.forEach(function(o){scene.remove(o.mesh); o.mesh.geometry.dispose(); o.mesh.material.dispose();}); fxs=[]; }
  function updateFx(now){
    var t=now/1000, pxs=renderer.domElement.height/(2*Math.tan(camera.fov*Math.PI/360))*(Math.PI/PANO_H);
    for(var i=0;i<fxs.length;i++){var u=fxs[i].u; u.t.value=t; if(u.pxs)u.pxs.value=pxs; if(u.pano&&u.pano.value!==sphere.material.map)u.pano.value=sphere.material.map;}
  }

  // ---------- interfaces en vivo (canvas) ----------
  var UIK={};
  function rr2(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function clk(){var d=new Date();function z(n){return (n<10?'0':'')+n;}return z(d.getHours())+':'+z(d.getMinutes())+':'+z(d.getSeconds());}
  function spriteMove(s,now){ var t=now/1000+(s.toff||0), per=s.per, ph=(t%per)/per, P=s.path, w=s.sw, h=w*s.ch/s.cw;
    var x=P[0][0]+(P[1][0]-P[0][0])*ph, y=P[0][1]+(P[1][1]-P[0][1])*ph+Math.sin(t*0.5)*(s.bob||3);
    s.mesh.material.uniforms.spos.value.set(x-w/2,y-h/2,w,h); s.sx=x; }
  function drawUI(s,now){ if(s.sprite){ var c=s.cx; c.save(); SPR[s.sprite](c,s.W,s.H,(now||performance.now())/1000,s); c.restore(); return; } var f=UIK[s.ui]; if(!f)return; var c=s.cx; c.save(); f(c,s.W,s.H,(now||performance.now())/1000-s.t0,s); c.restore(); }
  var MONO="'Share Tech Mono',monospace", SANS="Inter Tight,system-ui,sans-serif";
  // terminal de despliegue
  UIK.term=function(c,W,H,t,s){
    c.fillStyle='#071015'; c.fillRect(0,0,W,H); var u=H/20;
    c.fillStyle='#0d1c22'; c.fillRect(0,0,W,u*2.2); c.fillStyle='#2DD4A7'; c.beginPath(); c.arc(u*1.1,u*1.1,u*0.38,0,7); c.fill();
    c.font=(u*0.95)+'px '+MONO; c.fillStyle='#9fe9cf'; c.textBaseline='middle'; c.fillText((s.title||'deploy · cruztrd-api'),u*2,u*1.1);
    var cyc=14, k=Math.floor(t/cyc), tt=t-k*cyc, b=482+k;
    var L=[['$ git push origin main','#eafff6'],['→ build #'+b+' · imagen 214 MB','#7fb7c6'],['✓ pruebas 128/128','#2DD4A7'],['→ escaneo de seguridad · 0 alertas','#7fb7c6'],
           ['→ actualización gradual · 3/3 pods','#7fb7c6'],['✓ healthcheck 200 OK · 38 ms','#2DD4A7'],['✓ en producción · v2.'+(14+k%9)+'.'+(b%7),'#2DD4A7']];
    var shown=Math.min(L.length,Math.floor(tt/1.4)+1); c.font=(u*1.02)+'px '+MONO;
    for(var i=0;i<shown;i++){ var str=L[i][0]; if(i===shown-1&&tt<L.length*1.4){var n=Math.floor((tt-i*1.4)/1.4*str.length*1.6); str=str.slice(0,Math.max(1,n));}
      c.fillStyle=L[i][1]; c.fillText(str,u*1.1,u*(3.6+i*1.75)); }
    if(Math.floor(t*2)%2===0&&shown<=L.length){c.fillStyle='#2DD4A7'; c.fillRect(u*1.1,u*(3.6+shown*1.75)-u*0.55,u*0.6,u*1.1);}
    var pr=Math.min(1,tt/(L.length*1.4)); c.fillStyle='#10262c'; rr2(c,u*1.1,H-u*2.2,W-u*2.2,u*0.7,u*0.35); c.fill();
    c.fillStyle='#2DD4A7'; rr2(c,u*1.1,H-u*2.2,(W-u*2.2)*pr,u*0.7,u*0.35); c.fill();
  };
  // estado del cluster (nodos + autoescalado)
  UIK.cluster=function(c,W,H,t,s){
    c.fillStyle='#071015'; c.fillRect(0,0,W,H); var u=H/20;
    var extra=(Math.floor(t/9)%3===2)?1:0, n=11+extra;
    c.font='600 '+(u*1.15)+'px '+SANS; c.fillStyle='#eafff6'; c.textBaseline='middle'; c.fillText('Clúster · '+n+' nodos',u*1.2,u*1.6);
    c.font=(u*0.85)+'px '+MONO; c.fillStyle=extra?'#FFB84D':'#2DD4A7'; c.fillText(extra?'▲ autoescalado +1':'● estable',W-u*9.4,u*1.6);
    var cols=4, rows=3, gx=u*1.2, gy=u*3.2, cw=(W-gx*2-u*0.6*(cols-1))/cols, ch=u*3.6;
    for(var i=0;i<12;i++){ var x=gx+(i%cols)*(cw+u*0.6), y=gy+Math.floor(i/cols)*(ch+u*0.6); var live=i<n;
      var v=live?0.25+0.55*(0.5+0.5*Math.sin(t*(0.7+i*0.13)+i*1.7)):0; if(i===11&&extra)v=0.12+0.2*Math.min(1,(t%9)/2);
      c.fillStyle=live?'#0e1f25':'#0a1418'; rr2(c,x,y,cw,ch,u*0.4); c.fill();
      c.strokeStyle=i===11&&extra?'rgba(255,184,77,.7)':'rgba(45,212,167,.25)'; c.lineWidth=Math.max(1,u*0.08); c.stroke();
      if(!live)continue; c.font=(u*0.72)+'px '+MONO; c.fillStyle='#7fb7c6'; c.fillText('node-'+(i+1),x+u*0.45,y+u*0.75);
      c.font='600 '+(u*1.05)+'px '+SANS; c.fillStyle='#eafff6'; c.fillText(Math.round(v*100)+'%',x+u*0.45,y+u*1.9);
      c.fillStyle='#10262c'; c.fillRect(x+u*0.45,y+ch-u*0.75,cw-u*0.9,u*0.4);
      c.fillStyle=v>0.7?'#FFB84D':'#2DD4A7'; c.fillRect(x+u*0.45,y+ch-u*0.75,(cw-u*0.9)*v,u*0.4); }
    var by=gy+3*(ch+u*0.6)+u*0.4, bh=H-by-u*1.0; c.strokeStyle='#2DD4A7'; c.lineWidth=Math.max(1.5,u*0.14); c.beginPath();
    for(var x=0;x<=60;x++){var X=gx+(W-gx*2)*x/60, Y=by+bh*(0.55-0.32*Math.sin(x*0.28+t*1.4)*Math.sin(x*0.07+t*0.3)); x?c.lineTo(X,Y):c.moveTo(X,Y);} c.stroke();
    c.font=(u*0.8)+'px '+MONO; c.fillStyle='#7fb7c6'; c.fillText('req/s · '+(8400+Math.round(600*Math.sin(t*0.8)))+'',gx,by+u*0.2);
  };
  // camara de seguridad en vivo: recorte del propio panorama con paneo lento, ruido, REC y hora
  var __noise=null;
  function noiseCanvas(){ if(__noise)return __noise; var n=document.createElement('canvas'); n.width=n.height=256; var x=n.getContext('2d'), d=x.createImageData(256,256);
    for(var i=0;i<d.data.length;i+=4){var v=Math.random()*255; d.data[i]=d.data[i+1]=d.data[i+2]=v; d.data[i+3]=255;} x.putImageData(d,0,0); __noise=n; return n; }
  UIK.cctv=function(c,W,H,t,s){
    var img=sphere.material.map&&sphere.material.map.image; c.fillStyle='#0a0d0e'; c.fillRect(0,0,W,H);
    if(img&&img.width){ var k=img.width/PANO_W, cr=s.crop, ph=0.5+0.5*Math.sin(t*(s.pan||0.06)*6.2832), sw=cr[2]*k, sh=sw*H/W, sx=(cr[0]+(cr[4]||0)*ph)*k, sy=cr[1]*k;
      try{ c.drawImage(img,sx,sy,sw,sh,0,0,W,H); }catch(e){} }
    c.globalCompositeOperation='saturation'; c.fillStyle='#777'; c.fillRect(0,0,W,H);
    c.globalCompositeOperation='multiply'; c.fillStyle=s.tint||'#a8c7bd'; c.fillRect(0,0,W,H);
    c.globalCompositeOperation='screen'; c.fillStyle='rgba(20,34,32,0.55)'; c.fillRect(0,0,W,H);
    c.globalCompositeOperation='source-over'; c.globalAlpha=0.09; var nz=noiseCanvas(); c.drawImage(nz,Math.random()*-120,Math.random()*-120,W*1.6,H*1.6); c.globalAlpha=1;
    c.fillStyle='rgba(0,0,0,0.12)'; for(var y=0;y<H;y+=3)c.fillRect(0,y,W,1);
    var vg=c.createRadialGradient(W/2,H/2,H*0.3,W/2,H/2,W*0.75); vg.addColorStop(0,'rgba(0,0,0,0)'); vg.addColorStop(1,'rgba(0,0,0,0.55)'); c.fillStyle=vg; c.fillRect(0,0,W,H);
    var u=H/16; c.textBaseline='middle'; c.font=(u*0.95)+'px '+MONO; c.fillStyle='rgba(235,255,246,.92)';
    c.fillText(s.label||'CAM 01',u*0.8,u*1.1); c.fillText(clk(),W-u*0.8-c.measureText(clk()).width,H-u*1.1);
    if(Math.floor(t*1.6)%2===0){c.fillStyle='#ff4d4d'; c.beginPath(); c.arc(u*1.1,H-u*1.1,u*0.38,0,7); c.fill();}
    c.fillStyle='rgba(235,255,246,.92)'; c.fillText('REC',u*1.8,H-u*1.1);
    c.strokeStyle='rgba(235,255,246,.75)'; c.lineWidth=Math.max(1,u*0.09); var m=u*0.5,l=u*1.2;
    [[m,m,1,1],[W-m,m,-1,1],[W-m,H-m,-1,-1],[m,H-m,1,-1]].forEach(function(q){c.beginPath();c.moveTo(q[0]+q[2]*l,q[1]);c.lineTo(q[0],q[1]);c.lineTo(q[0],q[1]+q[3]*l);c.stroke();});
    if(s.motion&&(t%11)>7){ var mb=s.motion; c.strokeStyle='#2DD4A7'; c.lineWidth=Math.max(1.5,u*0.12); c.strokeRect(mb[0]*W,mb[1]*H,mb[2]*W,mb[3]*H);
      c.font=(u*0.8)+'px '+MONO; c.fillStyle='#2DD4A7'; c.fillText('MOVIMIENTO',mb[0]*W,mb[1]*H-u*0.6); }
  };
  // registro de accesos
  UIK.access=function(c,W,H,t,s){
    c.fillStyle='#090d10'; c.fillRect(0,0,W,H); var u=H/18;
    c.font='600 '+(u*1.05)+'px '+SANS; c.fillStyle='#eafff6'; c.textBaseline='middle'; c.fillText('Control de acceso',u,u*1.4);
    c.font=(u*0.8)+'px '+MONO; c.fillStyle='#2DD4A7'; c.fillText('● en vivo',W-u*6,u*1.4);
    var who=['a.mora','j.rivas','c.paz','m.leon','d.vega','s.ortiz','l.cruz','r.ponce'], how=['huella','2FA','tarjeta','huella','2FA'];
    var step=Math.floor(t/2.6), fr=(t/2.6)%1;
    for(var i=0;i<7;i++){ var k=step-i, y=u*(3.3+i*2.05)+(i===0?0:0), h=Math.abs(Math.sin(k*91.7)), deny=h>0.9;
      var a=i===0?Math.min(1,fr*4):1; c.globalAlpha=a*(1-i*0.08);
      c.fillStyle=i===0?'rgba(45,212,167,.10)':'rgba(255,255,255,.025)'; rr2(c,u*0.6,y-u*0.85,W-u*1.2,u*1.7,u*0.35); c.fill();
      var d=new Date(Date.now()-i*2600); function z(n){return (n<10?'0':'')+n;}
      c.font=(u*0.82)+'px '+MONO; c.fillStyle='#7fb7c6'; c.fillText(z(d.getHours())+':'+z(d.getMinutes())+':'+z(d.getSeconds()),u*1.1,y);
      c.fillStyle='#eafff6'; c.fillText(who[(k%8+8)%8],u*6.4,y); c.fillStyle='#9fb3ae'; c.fillText(how[(k%5+5)%5],u*11.2,y);
      c.fillStyle=deny?'#ff6b6b':'#2DD4A7'; var tx=deny?'✗ DENEGADO':'✓ PERMITIDO'; c.fillText(tx,W-u*1.1-c.measureText(tx).width,y); }
    c.globalAlpha=1;
  };
  // kiosco de pago: acerque · procesando · aprobado
  UIK.kiosk=function(c,W,H,t,s){
    var cyc=7.5, ph=((t+(s.off||0))%cyc), k=Math.floor((t+(s.off||0))/cyc), amt=['$34,00','$120,00','$18,50','$212,00','$56,90'][k%5];
    var g=c.createLinearGradient(0,0,0,H); g.addColorStop(0,'#0c1a2a'); g.addColorStop(1,'#06101a'); c.fillStyle=g; c.fillRect(0,0,W,H);
    var u=H/12; c.textAlign='center'; c.textBaseline='middle';
    c.font='600 '+(u*0.9)+'px '+SANS; c.fillStyle='#9fc7e8'; c.fillText('Total',W/2,u*1.6);
    c.font='700 '+(u*2.1)+'px '+SANS; c.fillStyle='#ffffff'; c.fillText(amt,W/2,u*3.6);
    if(ph<3.2){ var p=(ph%1.2)/1.2; c.strokeStyle='rgba(120,190,255,'+(1-p)+')'; c.lineWidth=u*0.28;
      for(var i=0;i<3;i++){c.beginPath(); c.arc(W/2-u*1.2,u*7.3,u*(0.8+i*0.9+p*0.9),-0.9,0.9); c.stroke();}
      c.font='600 '+(u*0.95)+'px '+SANS; c.fillStyle='#d6ebff'; c.fillText('Acerque su tarjeta',W/2,u*10.4); }
    else if(ph<4.8){ c.strokeStyle='#6fb4ff'; c.lineWidth=u*0.4; c.beginPath(); c.arc(W/2,u*7.2,u*1.5,ph*6,ph*6+4.2); c.stroke();
      c.font='600 '+(u*0.95)+'px '+SANS; c.fillStyle='#d6ebff'; c.fillText('Procesando…',W/2,u*10.4); }
    else { var e=Math.min(1,(ph-4.8)*3); c.fillStyle='rgba(45,212,167,'+(0.25*e)+')'; c.beginPath(); c.arc(W/2,u*7.2,u*2.2,0,7); c.fill();
      c.fillStyle='#2DD4A7'; c.beginPath(); c.arc(W/2,u*7.2,u*1.6*e,0,7); c.fill(); c.strokeStyle='#04110c'; c.lineWidth=u*0.42; c.lineCap='round';
      c.beginPath(); c.moveTo(W/2-u*0.7,u*7.25); c.lineTo(W/2-u*0.15,u*7.8); c.lineTo(W/2+u*0.8,u*6.7); c.stroke();
      c.font='700 '+(u*1.0)+'px '+SANS; c.fillStyle='#2DD4A7'; c.fillText('Pago aprobado',W/2,u*10.4); }
    c.textAlign='left';
  };
  // tablets de fidelizacion
  UIK.tablet=function(c,W,H,t,s){
    var g=c.createLinearGradient(0,0,0,H); g.addColorStop(0,'#0f2a27'); g.addColorStop(1,'#07120f'); c.fillStyle=g; c.fillRect(0,0,W,H);
    var u=W/12; c.textAlign='center'; c.textBaseline='middle';
    if(s.mode==='ref'){
      c.font='600 '+(u*1.05)+'px '+SANS; c.fillStyle='#bff3e1'; c.fillText('Invita y gana',W/2,u*2.2);
      var k=Math.floor(t/4), n=1100+k*3; c.font='700 '+(u*3.0)+'px '+SANS; c.fillStyle='#ffffff'; c.fillText(n.toLocaleString('es'),W/2,H*0.42);
      c.font=(u*0.95)+'px '+MONO; c.fillStyle='#2DD4A7'; c.fillText('referidos',W/2,H*0.42+u*2.2);
      var p=(t%4)/4; c.globalAlpha=p<0.6?Math.min(1,p*5):Math.max(0,1-(p-0.6)*4); c.fillStyle='rgba(45,212,167,.16)'; rr2(c,u*1,H*0.72,W-u*2,u*2.6,u*0.8); c.fill();
      c.font='600 '+(u*0.95)+'px '+SANS; c.fillStyle='#2DD4A7'; c.fillText('+1 referido',W/2,H*0.72+u*1.3); c.globalAlpha=1;
    } else {
      c.font='600 '+(u*1.05)+'px '+SANS; c.fillStyle='#bff3e1'; c.fillText('Club CruzTRD',W/2,u*2.2);
      var pts=1240+Math.floor(t/3)*50, lvl=(pts%2000)/2000, cyy=H*0.42, R=W*0.32;
      c.lineWidth=u*0.7; c.strokeStyle='rgba(45,212,167,.18)'; c.beginPath(); c.arc(W/2,cyy,R,0,7); c.stroke();
      c.strokeStyle='#2DD4A7'; c.lineCap='round'; c.beginPath(); c.arc(W/2,cyy,R,-Math.PI/2,-Math.PI/2+lvl*6.2832); c.stroke();
      c.font='700 '+(u*1.9)+'px '+SANS; c.fillStyle='#fff'; c.fillText(pts.toLocaleString('es'),W/2,cyy-u*0.2);
      c.font=(u*0.85)+'px '+MONO; c.fillStyle='#2DD4A7'; c.fillText('puntos',W/2,cyy+u*1.5);
      c.font='600 '+(u*1.0)+'px '+SANS; c.fillStyle='#FFD27A'; c.fillText('Nivel Oro',W/2,H*0.76);
      var p=(t%3)/3; if(p<0.5){c.globalAlpha=1-p*2; c.font='600 '+(u*0.95)+'px '+SANS; c.fillStyle='#2DD4A7'; c.fillText('+50 pts',W/2,H*0.87-p*u*2);} c.globalAlpha=1;
    }
    c.textAlign='left';
  };
  // capa aditiva sobre un mapa existente: pings y arcos de trafico (fondo transparente)
  UIK.mapfx=function(c,W,H,t,s){
    c.clearRect(0,0,W,H); var P=s.cities||[[0.22,0.35],[0.28,0.62],[0.48,0.3],[0.53,0.45],[0.72,0.38],[0.8,0.66],[0.62,0.55]], col=s.color||'45,212,167', u=Math.min(W,H)/20;
    for(var i=0;i<P.length;i++){ var ph=(t*0.55+i*0.37)%1, x=P[i][0]*W, y=P[i][1]*H;
      c.strokeStyle='rgba('+col+','+(1-ph)*0.9+')'; c.lineWidth=u*0.18; c.beginPath(); c.arc(x,y,u*(0.3+ph*2.2),0,7); c.stroke();
      c.fillStyle='rgba('+col+',0.95)'; c.beginPath(); c.arc(x,y,u*0.32,0,7); c.fill(); }
    for(var j=0;j<(s.hub?P.length-1:4);j++){ var A=s.hub?P[0]:P[(j*2)%P.length], B=s.hub?P[j+1]:P[(j*2+3)%P.length], ax=A[0]*W, ay=A[1]*H, bx=B[0]*W, by=B[1]*H, mx=(ax+bx)/2, my=Math.min(ay,by)-Math.abs(bx-ax)*0.28;
      c.strokeStyle='rgba('+col+',0.35)'; c.lineWidth=u*0.12; c.beginPath(); c.moveTo(ax,ay); c.quadraticCurveTo(mx,my,bx,by); c.stroke();
      var q=(t*0.32+j*0.25)%1, qx=(1-q)*(1-q)*ax+2*(1-q)*q*mx+q*q*bx, qy=(1-q)*(1-q)*ay+2*(1-q)*q*my+q*q*by;
      var gr=c.createRadialGradient(qx,qy,0,qx,qy,u*1.1); gr.addColorStop(0,'rgba(255,255,255,0.95)'); gr.addColorStop(0.3,'rgba('+col+',0.8)'); gr.addColorStop(1,'rgba('+col+',0)');
      c.fillStyle=gr; c.beginPath(); c.arc(qx,qy,u*1.1,0,7); c.fill(); }
  };

  // notificaciones holograficas de fidelizacion que flotan en el salon
  var HOLO_MSG=[['★','Nivel Oro desbloqueado','Ana · 650 pts'],['+','Nuevo referido','Diego invitó a Sofía'],['☕','Canjeó 500 pts','café de cortesía'],
    ['↺','Volvió por 3ª vez','Mateo · cliente frecuente'],['♥','Reseña 5 estrellas','“¡Me encanta!” · Lucía'],['%','Cupón aplicado','-15% en su recompra'],
    ['+','Nuevo referido','Valeria invitó a 2 amigos'],['★','+150 puntos','compra de $42'],['✓','Renovó su plan','12 meses · Camila']];
  UIK.holo=function(c,W,H,t,s){
    c.clearRect(0,0,W,H); var u=H/16, per=s.per||2.6, life=s.life||7.5, n=Math.ceil(life/per)+1, k0=Math.floor(t/per);
    for(var j=0;j<n;j++){ var k=k0-j, ph=(t-k*per)/life; if(ph<0||ph>1)continue;
      var h=Math.abs(Math.sin(k*12.9898+(s.seed||0)))*1000%1, h2=Math.abs(Math.sin(k*78.233+(s.seed||0)))*1000%1;
      var msg=HOLO_MSG[(((k*7)%HOLO_MSG.length)+HOLO_MSG.length)%HOLO_MSG.length];
      var cw=u*11.5, ch=u*3.1, x=u+(W-cw-2*u)*h, y=H-ch-u*0.6-(H-ch-u*1.6)*ph*0.85-h2*u;
      var a=Math.min(1,ph*7)*Math.min(1,(1-ph)*4); c.globalAlpha=a*0.94;
      var g=c.createLinearGradient(x,y,x,y+ch); g.addColorStop(0,'rgba(14,40,36,0.78)'); g.addColorStop(1,'rgba(7,22,20,0.72)');
      c.fillStyle=g; rr2(c,x,y,cw,ch,ch/2); c.fill(); c.strokeStyle='rgba(45,212,167,0.85)'; c.lineWidth=Math.max(1,u*0.09); c.stroke();
      c.fillStyle='rgba(45,212,167,0.22)'; c.beginPath(); c.arc(x+ch/2,y+ch/2,ch*0.34,0,7); c.fill();
      c.fillStyle='#bdfbe6'; c.textAlign='center'; c.textBaseline='middle'; c.font='700 '+(u*1.25)+'px '+SANS; c.fillText(msg[0],x+ch/2,y+ch/2+u*0.05);
      c.textAlign='left'; c.font='600 '+(u*1.0)+'px '+SANS; c.fillStyle='#effff9'; c.fillText(msg[1],x+ch*0.98,y+ch*0.36);
      c.font=(u*0.8)+'px '+MONO; c.fillStyle='rgba(159,233,207,0.95)'; c.fillText(msg[2],x+ch*0.98,y+ch*0.70);
      // pequeñas chispas al aparecer
      if(ph<0.12){ for(var q=0;q<6;q++){ var an=q*1.047+k, r=ch*(0.6+ph*6); c.fillStyle='rgba(45,212,167,'+(0.8-ph*6)+')'; c.beginPath(); c.arc(x+ch/2+Math.cos(an)*r,y+ch/2+Math.sin(an)*r,u*0.18,0,7); c.fill(); } }
    }
    c.globalAlpha=1;
  };
  // cielo: bandadas de aves y un dron que lleva una recompensa (solo visible sobre el cielo, detras de los marcos)
  function bird(c,x,y,sz,fl){ c.beginPath(); c.moveTo(x-sz,y-sz*0.35*fl); c.quadraticCurveTo(x-sz*0.4,y-sz*0.5*fl,x,y); c.quadraticCurveTo(x+sz*0.4,y-sz*0.5*fl,x+sz,y-sz*0.35*fl); c.stroke(); }
  UIK.sky=function(c,W,H,t,s){
    c.clearRect(0,0,W,H); var u=H/40;
    c.strokeStyle='rgba(58,54,58,0.7)'; c.lineCap='round';
    for(var fk=0;fk<3;fk++){ var per=[26,34,19][fk], ph=((t+fk*11)/per)%1, dir=fk===1?-1:1, bx=dir>0?(-0.1+ph*1.2)*W:(1.1-ph*1.2)*W, by=H*[0.52,0.32,0.68][fk]+Math.sin(t*0.25+fk)*u*2;
      for(var b=0;b<[7,5,4][fk];b++){ var ox=(b%2?1:-1)*Math.ceil(b/2)*u*2.2*(-dir), oy=Math.ceil(b/2)*u*1.15+Math.sin(t*1.3+b)*u*0.4, fl=Math.sin(t*(8.5+b*0.7)+b*1.7);
        c.lineWidth=Math.max(1,u*0.22); bird(c,bx+ox,by+oy,u*(fk?0.68:0.85),0.4+0.9*Math.abs(fl)); } }
    // dron con caja de regalo CruzTRD
    var per=22, ph=(t/per)%1, x=(-0.08+ph*1.16)*W, y=H*0.40+Math.sin(t*0.9)*u*1.4+Math.sin(ph*Math.PI)*-u*3, sz=u*1.6;
    c.save(); c.translate(x,y); c.rotate(0.06*Math.sin(t*1.7));
    c.strokeStyle='rgba(30,34,38,0.9)'; c.lineWidth=Math.max(1,sz*0.16); c.beginPath(); c.moveTo(-sz*1.6,0); c.lineTo(sz*1.6,0); c.stroke();
    c.fillStyle='rgba(28,32,36,0.95)'; rr2(c,-sz*0.6,-sz*0.32,sz*1.2,sz*0.6,sz*0.2); c.fill();
    for(var r=-1;r<=1;r+=2){ var rx=r*sz*1.6, sp=Math.sin(t*60+r)*0.5+0.5; c.strokeStyle='rgba(40,44,48,'+(0.35+0.4*sp)+')'; c.lineWidth=Math.max(1,sz*0.12);
      c.beginPath(); c.moveTo(rx-sz*0.9*sp-sz*0.2,-sz*0.32); c.lineTo(rx+sz*0.9*sp+sz*0.2,-sz*0.32); c.stroke(); }
    c.fillStyle=(Math.floor(t*3)%2)?'rgba(255,70,70,0.95)':'rgba(45,212,167,0.95)'; c.beginPath(); c.arc(sz*0.5,sz*0.05,sz*0.12,0,7); c.fill();
    c.strokeStyle='rgba(40,44,48,0.8)'; c.lineWidth=Math.max(1,sz*0.06); c.beginPath(); c.moveTo(-sz*0.25,sz*0.28); c.lineTo(-sz*0.3,sz*1.0); c.moveTo(sz*0.25,sz*0.28); c.lineTo(sz*0.3,sz*1.0); c.stroke();
    c.fillStyle='#2DD4A7'; c.fillRect(-sz*0.45,sz*1.0,sz*0.9,sz*0.75); c.fillStyle='#eafff6'; c.fillRect(-sz*0.07,sz*1.0,sz*0.14,sz*0.75); c.fillRect(-sz*0.45,sz*1.3,sz*0.9,sz*0.12);
    c.restore();
  };
  // barrido de luz sobre graficos existentes (aditivo, fondo transparente)
  UIK.sweep=function(c,W,H,t,s){
    c.clearRect(0,0,W,H); var p=((t*(s.speed||0.12))%1.4)-0.2, x=p*W, g=c.createLinearGradient(x-W*0.12,0,x+W*0.12,0);
    g.addColorStop(0,'rgba(255,255,255,0)'); g.addColorStop(0.5,'rgba('+(s.color||'180,255,230')+','+(s.amp||0.22)+')'); g.addColorStop(1,'rgba(255,255,255,0)');
    c.fillStyle=g; c.fillRect(0,0,W,H);
  };

  // ===== sprites del cielo (Fidelizacion): avioneta con pancarta y dirigible con pantalla =====
  var SPR={};
  var BANNER_MSG=['Gracias por volver','Nivel Oro · 650 pts','Invita y gana','Tus clientes, de regreso'];
  // avioneta remolcando pancarta. Canvas 2048x320: pancarta a la izquierda, avion a la derecha (vuela hacia la derecha)
  SPR.plane=function(c,W,H,t,s){
    c.clearRect(0,0,W,H);
    var k=Math.floor((t+(s.toff||0))/(s.per||46)), msg=BANNER_MSG[((k%BANNER_MSG.length)+BANNER_MSG.length)%BANNER_MSG.length];
    // --- avion (vista lateral, ~360 px) ---
    var px=W-500, py=H*0.40, sc=1.28;
    c.save(); c.translate(px,py); c.rotate(-0.025+0.012*Math.sin(t*0.9)); c.scale(sc,sc);
    // ala trasera (lejana)
    c.fillStyle='#9aa3ab'; c.beginPath(); c.moveTo(150,10); c.lineTo(205,-8); c.lineTo(222,-6); c.lineTo(190,14); c.closePath(); c.fill();
    // fuselaje
    var g=c.createLinearGradient(0,-34,0,30); g.addColorStop(0,'#ffffff'); g.addColorStop(0.45,'#eef1f4'); g.addColorStop(0.8,'#b9c1c8'); g.addColorStop(1,'#8d969e');
    c.fillStyle=g; c.beginPath(); c.moveTo(0,0); c.bezierCurveTo(10,-22,60,-30,150,-28); c.lineTo(300,-24); c.bezierCurveTo(338,-22,352,-8,352,2); c.bezierCurveTo(350,16,330,24,300,24);
    c.lineTo(120,22); c.bezierCurveTo(70,20,30,14,0,0); c.closePath(); c.fill();
    // franja de marca
    c.fillStyle='#2DD4A7'; c.beginPath(); c.moveTo(40,2); c.lineTo(330,-2); c.lineTo(334,5); c.lineTo(44,9); c.closePath(); c.fill();
    c.fillStyle='#07090C'; c.beginPath(); c.moveTo(42,10); c.lineTo(334,6); c.lineTo(332,11); c.lineTo(46,15); c.closePath(); c.fill();
    // cabina
    var gc=c.createLinearGradient(230,-40,280,-10); gc.addColorStop(0,'#2b3b48'); gc.addColorStop(0.6,'#4d6a7e'); gc.addColorStop(1,'#9fc4d8');
    c.fillStyle=gc; c.beginPath(); c.moveTo(220,-27); c.bezierCurveTo(232,-48,272,-50,292,-25); c.closePath(); c.fill();
    c.strokeStyle='rgba(255,255,255,.55)'; c.lineWidth=2; c.beginPath(); c.moveTo(236,-36); c.lineTo(262,-42); c.stroke();
    // cola
    c.fillStyle='#f4f6f8'; c.beginPath(); c.moveTo(6,-4); c.lineTo(-14,-62); c.lineTo(14,-62); c.lineTo(56,-22); c.closePath(); c.fill();
    c.fillStyle='#2DD4A7'; c.beginPath(); c.moveTo(-10,-52); c.lineTo(-14,-62); c.lineTo(14,-62); c.lineTo(24,-52); c.closePath(); c.fill();
    c.fillStyle='#c9d0d6'; c.beginPath(); c.moveTo(0,-2); c.lineTo(-30,4); c.lineTo(-24,10); c.lineTo(40,6); c.closePath(); c.fill();
    // ala (cercana) con sombra
    var gw=c.createLinearGradient(0,-6,0,22); gw.addColorStop(0,'#ffffff'); gw.addColorStop(1,'#a9b2ba');
    c.fillStyle=gw; c.beginPath(); c.moveTo(170,-4); c.lineTo(250,-6); c.lineTo(262,2); c.lineTo(200,30); c.lineTo(150,32); c.closePath(); c.fill();
    c.fillStyle='rgba(0,0,0,.18)'; c.beginPath(); c.moveTo(150,32); c.lineTo(200,30); c.lineTo(204,34); c.lineTo(152,36); c.closePath(); c.fill();
    // ventanas
    c.fillStyle='#33475a'; for(var i=0;i<4;i++){ c.beginPath(); c.ellipse(120+i*26,-12,7,6,0,0,7); c.fill(); }
    // rueda
    c.strokeStyle='#5c656d'; c.lineWidth=4; c.beginPath(); c.moveTo(240,22); c.lineTo(246,40); c.stroke();
    c.fillStyle='#2a2f34'; c.beginPath(); c.arc(247,44,8,0,7); c.fill();
    // helice (disco borroso) + buje
    c.fillStyle='rgba(70,76,82,.25)'; c.beginPath(); c.ellipse(356,2,7,44,0,0,7); c.fill();
    var a=t*95; c.strokeStyle='rgba(40,44,48,.55)'; c.lineWidth=5; c.beginPath(); c.moveTo(356,2-40*Math.cos(a)); c.lineTo(356,2+40*Math.cos(a)); c.stroke();
    c.fillStyle='#2DD4A7'; c.beginPath(); c.ellipse(356,2,9,11,0,0,7); c.fill();
    c.restore();
    // --- cuerda ---
    var bx1=W-640, by=H*0.50;
    c.strokeStyle='rgba(60,60,64,.75)'; c.lineWidth=2.2; c.beginPath(); c.moveTo(px-30,py+4); c.quadraticCurveTo((px-30+bx1)/2,py+20,bx1,by); c.stroke();
    // --- pancarta ondeando (tiras verticales con desplazamiento senoidal) ---
    var bw=1360, bh=140, bx0=bx1-bw;
    if(!s._ban||s._msg!==msg){ var o=s._ban||document.createElement('canvas'); o.width=bw; o.height=bh; var oc=o.getContext('2d');
      var gb=oc.createLinearGradient(0,0,0,bh); gb.addColorStop(0,'#ffffff'); gb.addColorStop(1,'#e9ecef'); oc.fillStyle=gb; oc.fillRect(0,0,bw,bh);
      oc.fillStyle='#2DD4A7'; oc.fillRect(0,0,bw,9); oc.fillRect(0,bh-9,bw,9);
      oc.textBaseline='middle'; oc.font='700 92px Inter Tight,system-ui,sans-serif'; var w1=oc.measureText('Cruz').width, w2=oc.measureText('TRD').width;
      oc.font='600 70px Inter Tight,system-ui,sans-serif'; var w3=oc.measureText('  ·  '+msg).width, tot=w1+w2+w3, x0=(bw-tot)/2;
      oc.font='700 92px Inter Tight,system-ui,sans-serif'; oc.fillStyle='#0B0E14'; oc.fillText('Cruz',x0,bh/2+4); oc.fillStyle='#19a882'; oc.fillText('TRD',x0+w1,bh/2+4);
      oc.font='600 70px Inter Tight,system-ui,sans-serif'; oc.fillStyle='#0B0E14'; oc.fillText('  ·  '+msg,x0+w1+w2,bh/2+6);
      s._ban=o; s._msg=msg; }
    var strips=120, sw=bw/strips;
    for(var i=0;i<strips;i++){ var u=i/strips, amp=(1-u)*14+3, dy=Math.sin(t*5.2-u*9.0)*amp, sh=0.88+0.12*Math.cos(t*5.2-u*9.0);
      c.drawImage(s._ban,i*sw,0,sw+1,bh,bx0+i*sw,by-bh/2+dy,sw+1,bh);
      c.fillStyle='rgba(0,0,0,'+((1-sh)*1.4)+')'; c.fillRect(bx0+i*sw,by-bh/2+dy,sw+1,bh); }
    // borde derecho de la pancarta (barra)
    c.strokeStyle='rgba(80,80,84,.9)'; c.lineWidth=4; c.beginPath(); c.moveTo(bx1,by-bh/2+Math.sin(t*5.2-9*(1-1/strips))*3); c.lineTo(bx1,by+bh/2+Math.sin(t*5.2)*3); c.stroke();
  };
  // dirigible con pantalla LED de fidelizacion. Canvas 1400x520
  var BLIMP_MSG=[['★','650 pts','Nivel Oro'],['+1','referido','Invita y gana'],['3ª','visita','Cliente frecuente'],['♥','5 estrellas','Reseñas reales']];
  SPR.blimp=function(c,W,H,t,s){
    c.clearRect(0,0,W,H); var cx=W*0.5, cy=H*0.44, rx=W*0.42, ry=H*0.30;
    c.save(); c.translate(0,Math.sin(t*0.6)*6);
    // aletas traseras
    c.fillStyle='#c4cad0'; c.beginPath(); c.moveTo(cx-rx*0.78,cy-ry*0.2); c.lineTo(cx-rx*1.06,cy-ry*1.05); c.lineTo(cx-rx*0.92,cy-ry*0.15); c.closePath(); c.fill();
    c.beginPath(); c.moveTo(cx-rx*0.78,cy+ry*0.2); c.lineTo(cx-rx*1.06,cy+ry*1.0); c.lineTo(cx-rx*0.92,cy+ry*0.15); c.closePath(); c.fill();
    // casco
    var g=c.createRadialGradient(cx+rx*0.2,cy-ry*0.55,ry*0.2,cx,cy,rx*1.05); g.addColorStop(0,'#ffffff'); g.addColorStop(0.5,'#e6eaee'); g.addColorStop(0.85,'#b3bcc4'); g.addColorStop(1,'#8f99a2');
    c.fillStyle=g; c.beginPath(); c.ellipse(cx,cy,rx,ry,0,0,7); c.fill();
    c.fillStyle='rgba(45,212,167,.95)'; c.beginPath(); c.ellipse(cx,cy+ry*0.02,rx*0.995,ry*0.10,0,0,7); c.fill();
    // pantalla LED
    var sx=cx-rx*0.42, sy=cy-ry*0.70, sw=rx*0.95, sh=ry*0.62;
    c.fillStyle='#07090C'; c.beginPath(); c.moveTo(sx+18,sy); c.lineTo(sx+sw-18,sy); c.quadraticCurveTo(sx+sw,sy,sx+sw,sy+18); c.lineTo(sx+sw,sy+sh-18); c.quadraticCurveTo(sx+sw,sy+sh,sx+sw-18,sy+sh); c.lineTo(sx+18,sy+sh); c.quadraticCurveTo(sx,sy+sh,sx,sy+sh-18); c.lineTo(sx,sy+18); c.quadraticCurveTo(sx,sy,sx+18,sy); c.fill();
    var k=Math.floor(t/4.5), m=BLIMP_MSG[k%BLIMP_MSG.length], ph=(t/4.5)%1, al=Math.min(1,ph*5)*Math.min(1,(1-ph)*5);
    c.globalAlpha=al; c.textBaseline='middle'; c.textAlign='left';
    c.font='700 '+(sh*0.40)+'px Inter Tight,system-ui,sans-serif'; var w0=c.measureText(m[0]).width;
    c.font='700 '+(sh*0.36)+'px Inter Tight,system-ui,sans-serif'; var w1=c.measureText(m[1]).width;
    c.font='600 '+(sh*0.21)+'px Inter Tight,system-ui,sans-serif'; var w2=c.measureText(m[2]).width;
    var tw=w0+sh*0.22+Math.max(w1,w2), tx=sx+(sw-tw)/2;
    c.font='700 '+(sh*0.40)+'px Inter Tight,system-ui,sans-serif'; c.fillStyle='#2DD4A7'; c.fillText(m[0],tx,sy+sh*0.52);
    var tx2=tx+w0+sh*0.22;
    c.font='700 '+(sh*0.36)+'px Inter Tight,system-ui,sans-serif'; c.fillStyle='#ffffff'; c.fillText(m[1],tx2,sy+sh*0.37);
    c.font='600 '+(sh*0.21)+'px Inter Tight,system-ui,sans-serif'; c.fillStyle='#9fe9cf'; c.fillText(m[2],tx2,sy+sh*0.73);
    c.globalAlpha=1;
    // logo en el casco
    c.textAlign='left'; c.font='700 '+(ry*0.36)+'px Inter Tight,system-ui,sans-serif'; c.fillStyle='#0B0E14'; c.fillText('Cruz',cx-rx*0.86,cy+ry*0.45); var wl=c.measureText('Cruz').width;
    c.fillStyle='#19a882'; c.fillText('TRD',cx-rx*0.86+wl,cy+ry*0.45);
    // gondola
    var gg=c.createLinearGradient(0,cy+ry*0.9,0,cy+ry*1.35); gg.addColorStop(0,'#d7dce0'); gg.addColorStop(1,'#8e979f');
    c.fillStyle=gg; c.beginPath(); c.ellipse(cx+rx*0.1,cy+ry*1.06,rx*0.2,ry*0.2,0,0,7); c.fill();
    c.fillStyle='#33475a'; for(var i=0;i<4;i++){ c.fillRect(cx-rx*0.04+i*rx*0.07,cy+ry*0.98,rx*0.045,ry*0.1); }
    // luz de navegacion
    c.fillStyle=(Math.floor(t*1.5)%2)?'rgba(255,80,80,.95)':'rgba(255,80,80,.25)'; c.beginPath(); c.arc(cx-rx*0.98,cy,6,0,7); c.fill();
    c.restore();
  };

  // ===== Fidelizacion: escalera de niveles grabada en el vidrio de la vitrina (aditivo) =====
  UIK.tiers=function(c,W,H,t,s){
    c.clearRect(0,0,W,H); var T=[['PLATINO','#d9f3ff'],['ORO','#ffd27a'],['PLATA','#e6eef2'],['BRONCE','#f0b089']];
    var u=W/10, top=H*0.07, bot=H*0.93, step=(bot-top)/4, cyc=12, ph=(t%cyc)/cyc;
    // progreso del socio: sube de Bronce a Platino y reinicia
    var lvl=Math.min(3.999,ph*4.6), cur=Math.floor(lvl);
    var lx=u*1.4; c.lineCap='round';
    c.strokeStyle='rgba(120,255,214,0.18)'; c.lineWidth=u*0.32; c.beginPath(); c.moveTo(lx,bot-step*0.5); c.lineTo(lx,top+step*0.5); c.stroke();
    var py=bot-step*0.5-(lvl/3.999)*(step*3); var g=c.createLinearGradient(0,bot,0,py); g.addColorStop(0,'rgba(45,212,167,0.35)'); g.addColorStop(1,'rgba(160,255,225,1)');
    c.strokeStyle=g; c.lineWidth=u*0.32; c.beginPath(); c.moveTo(lx,bot-step*0.5); c.lineTo(lx,py); c.stroke();
    var rg=c.createRadialGradient(lx,py,0,lx,py,u*1.6); rg.addColorStop(0,'rgba(255,255,255,1)'); rg.addColorStop(0.35,'rgba(140,255,220,0.8)'); rg.addColorStop(1,'rgba(45,212,167,0)'); c.fillStyle=rg; c.beginPath(); c.arc(lx,py,u*1.6,0,7); c.fill();
    for(var i=0;i<4;i++){ var k=3-i, y=top+step*i+step*0.5, on=cur>=k, here=cur===k;
      c.fillStyle=on?T[i][1]:'rgba(200,230,222,0.35)'; c.beginPath(); c.arc(lx,y,u*(here?0.62:0.42),0,7); c.fill();
      c.textBaseline='middle'; c.textAlign='left'; c.font='700 '+(u*1.25)+'px Inter Tight,system-ui,sans-serif';
      c.globalAlpha=on?(here?(0.85+0.15*Math.sin(t*4)):0.75):0.28; c.fillStyle=T[i][1]; c.fillText(T[i][0],u*2.7,y-u*0.55);
      c.font='600 '+(u*0.78)+'px Inter Tight,system-ui,sans-serif'; c.fillStyle='rgba(220,255,244,0.9)';
      c.fillText(['Experiencias VIP','Envío gratis','Doble puntos','Bienvenida +50'][i],u*2.7,y+u*0.75); c.globalAlpha=1;
      if(here){ var a=(t*1.2)%1; c.strokeStyle='rgba(160,255,225,'+(1-a)*0.8+')'; c.lineWidth=u*0.12; c.beginPath(); c.arc(lx,y,u*(0.6+a*1.3),0,7); c.stroke(); } }
  };
  // ===== Fidelizacion: vidrio inteligente en la ventana (retencion en vivo) =====
  UIK.glasshud=function(c,W,H,t,s){
    c.clearRect(0,0,W,H); var u=W/16;
    var g=c.createLinearGradient(0,0,0,H); g.addColorStop(0,'rgba(6,24,23,0.62)'); g.addColorStop(1,'rgba(6,24,23,0.48)'); c.fillStyle=g; c.fillRect(0,0,W,H);
    c.textBaseline='alphabetic'; c.fillStyle='rgba(225,255,246,0.95)'; c.font='600 '+(u*0.95)+'px Inter Tight,system-ui,sans-serif'; c.fillText('Retención · 90 días',u*1.1,u*2.1);
    var k=Math.floor(t/6), base=58+(k%4), val=base+Math.min(3,((t%6)/6)*6);
    c.font='700 '+(u*3.4)+'px Inter Tight,system-ui,sans-serif'; c.fillStyle='#ffffff'; c.fillText(Math.round(val)+'%',u*1.0,u*5.6);
    c.font='600 '+(u*0.9)+'px Inter Tight,system-ui,sans-serif'; c.fillStyle='#7dffd6'; c.fillText('▲ +8 pts con el programa',u*1.1,u*6.9);
    // curvas de retencion por cohorte: con programa vs sin programa
    var x0=u*1.1, x1=W-u*1.1, y0=u*8.2, y1=H-u*3.6, n=12, pr=Math.min(1,(t%8)/3);
    function curve(a,b,col,wd,dash){ c.strokeStyle=col; c.lineWidth=wd; c.setLineDash(dash||[]); c.beginPath();
      for(var i=0;i<=n*pr;i++){ var f=i/n, v=a+(1-a)*Math.exp(-f*b); var X=x0+(x1-x0)*f, Y=y1-(y1-y0)*v; i?c.lineTo(X,Y):c.moveTo(X,Y);} c.stroke(); c.setLineDash([]); }
    curve(0.22,3.2,'rgba(220,240,236,0.55)',Math.max(1,u*0.12),[u*0.35,u*0.3]); curve(0.58,2.4,'#5dffcf',Math.max(1.5,u*0.2));
    c.font='600 '+(u*0.72)+'px Inter Tight,system-ui,sans-serif'; c.fillStyle='#5dffcf'; c.fillText('con programa',x0,y1+u*1.2); c.fillStyle='rgba(220,240,236,0.75)'; c.fillText('sin programa',x0+(x1-x0)*0.52,y1+u*1.2);
    c.font='600 '+(u*0.78)+'px Inter Tight,system-ui,sans-serif'; c.fillStyle='rgba(225,255,246,0.95)'; c.fillText('Recompra +18%   ·   NPS 72',u*1.1,H-u*1.15);
  };

  // ===== CLUB CRUZTRD: el recorrido es un programa de lealtad real para el visitante =====
  // Puntos: +100 por capa visitada, +50 por especialista conocido, +200 por cada regreso al estudio.
  var CLUB=(function(){
    var KEY='cruztrd_club_v1', st={v:1,rooms:[],spec:[],last:Date.now(),first:Date.now(),share:0};
    try{ var r=JSON.parse(localStorage.getItem(KEY)||'null'); if(r&&r.rooms){ st=r; if(Date.now()-(st.last||0)>30*60*1000) st.v=(st.v||1)+1; } }catch(e){}
    st.last=Date.now();
    var TIERS=[['Bronce',0,'#f0b089'],['Plata',300,'#e6eef2'],['Oro',600,'#ffd27a'],['Platino',900,'#d9f3ff']];
    var REWARD={Plata:'Diagnostica tu idea y llévate la estimación en PDF',Oro:'Sesión 1:1 con el equipo CruzTRD',Platino:'Sesión 1:1 con el equipo CruzTRD'};
    function save(){ try{localStorage.setItem(KEY,JSON.stringify(st));}catch(e){} }
    function pts(){ return st.rooms.length*100+st.spec.length*50+Math.max(0,(st.v||1)-1)*200+Math.min(3,st.share||0)*100+(st.read||[]).length*25+(st.play?50:0); }
    function tier(p){ p=p==null?pts():p; var t=0; for(var i=0;i<TIERS.length;i++) if(p>=TIERS[i][1]) t=i; return t; }
    function progress(){ var p=pts(), t=tier(p); if(t===TIERS.length-1) return 1; return (p-TIERS[t][1])/(TIERS[t+1][1]-TIERS[t][1]); }
    var pill=null, toastEl=null, toastT=null;
    function ui(){ if(!pill){ pill=document.createElement('div'); pill.className='clubpill'; pill.title='Club CruzTRD: ganas puntos recorriendo el estudio. Canjéalos en la capa 06 · Fidelización'; document.body.appendChild(pill);
        pill.onclick=function(){ if(typeof clubLounge==='function') clubLounge(); }; pill.setAttribute('role','button'); pill.tabIndex=0; pill.addEventListener('keydown',function(ev){ if(ev.key==='Enter'||ev.key===' '){ ev.preventDefault(); pill.click(); } }); pill.title='Club CruzTRD: ganas puntos recorriendo el estudio'; }
      var t=tier(); pill.innerHTML='<span class="cs">★</span><b>'+pts().toLocaleString('es')+' pts</b><i style="color:'+TIERS[t][2]+'">'+TIERS[t][0]+'</i>'; }
    function toast(main,sub){ if(!toastEl){toastEl=document.createElement('div'); toastEl.className='clubtoast'; toastEl.setAttribute('role','status'); toastEl.setAttribute('aria-live','polite'); document.body.appendChild(toastEl);}
      toastEl.innerHTML='<b>'+main+'</b><span>'+sub+'</span>'; toastEl.classList.remove('on'); void toastEl.offsetWidth; toastEl.classList.add('on');
      clearTimeout(toastT); toastT=setTimeout(function(){toastEl.classList.remove('on');},3200); }
    function gain(before,label){ var a=pts()-before; if(a<=0)return; var t0=tier(before), t1=tier();
      if(t1>t0) toast('¡Subiste a nivel '+TIERS[t1][0]+'!', TIERS[t1][0]==='Oro'?'Recompensa desbloqueada: '+REWARD.Oro:(TIERS[t1][0]==='Platino'?'El nivel más alto del recorrido':'Mira tu tarjeta del Club'));
      else toast('+'+a+' pts', label); if(pill){pill.classList.remove('bump'); void pill.offsetWidth; pill.classList.add('bump');} ui(); }
    return {
      st:st, TIERS:TIERS, REWARD:REWARD, pts:pts, tier:tier, progress:progress, ui:ui, toast:toast,
      room:function(i){ if(i<1||st.rooms.indexOf(i)>-1){save();return;} var b=pts(); st.rooms.push(i); save(); gain(b,'Visitaste '+ROOMS[i].name); },
      spec:function(k){ if(!k||k==='intro'||st.spec.indexOf(k)>-1)return; var b=pts(); st.spec.push(k); save(); gain(b,'Conociste a tu guía'); },
      play:function(){ if(st.play)return; var b=pts(); st.play=1; save(); gain(b,'Volaste la Ruta del día en CruzTRD Play'); },
      read:function(k){ st.read=st.read||[]; if(st.read.indexOf(k)>-1)return; var b=pts(); st.read.push(k); save(); gain(b,'Leíste un artículo de la Revista CruzTRD'); },
      share:function(){ var b=pts(); st.share=(st.share||0)+1; save(); gain(b,'Compartiste el estudio'); },
      missing:function(){ var m=[]; for(var i=1;i<ROOMS.length;i++) if(st.rooms.indexOf(i)<0) m.push(i); return m; }
    };
  })();
  // tablet 1: tu tarjeta de socio (datos reales del visitante)
  UIK.member=function(c,W,H,t,s){
    var g=c.createLinearGradient(0,0,0,H); g.addColorStop(0,'#0f2a27'); g.addColorStop(1,'#07120f'); c.fillStyle=g; c.fillRect(0,0,W,H);
    var u=W/12, p=CLUB.pts(), ti=CLUB.tier(), T=CLUB.TIERS[ti], pr=CLUB.progress(), v=CLUB.st.v||1; c.textAlign='center'; c.textBaseline='middle';
    var hr=new Date().getHours(), hola=hr<12?'Buenos días':(hr<19?'Buenas tardes':'Buenas noches');
    c.font='600 '+(u*0.95)+'px '+SANS; c.fillStyle='#bff3e1'; c.fillText(v>1?'Hola de nuevo':hola,W/2,u*1.9);
    c.font=(u*0.72)+'px '+MONO; c.fillStyle='rgba(159,233,207,.8)'; c.fillText(v>1?('tu visita nº '+v):'tu primera visita',W/2,u*3.0);
    var cyy=H*0.45, R=W*0.32, an=Math.min(1,(t%60)/1.2)*pr;
    c.lineWidth=u*0.7; c.strokeStyle='rgba(45,212,167,.18)'; c.beginPath(); c.arc(W/2,cyy,R,0,7); c.stroke();
    c.strokeStyle=T[2]; c.lineCap='round'; c.beginPath(); c.arc(W/2,cyy,R,-Math.PI/2,-Math.PI/2+Math.max(0.02,an)*6.2832); c.stroke();
    c.font='700 '+(u*1.9)+'px '+SANS; c.fillStyle='#fff'; c.fillText(p.toLocaleString('es'),W/2,cyy-u*0.2);
    c.font=(u*0.85)+'px '+MONO; c.fillStyle='#2DD4A7'; c.fillText('tus puntos',W/2,cyy+u*1.5);
    c.font='700 '+(u*1.1)+'px '+SANS; c.fillStyle=T[2]; c.fillText('Nivel '+T[0],W/2,H*0.76);
    var nx=CLUB.TIERS[ti+1]; c.font=(u*0.7)+'px '+MONO; c.fillStyle='rgba(191,243,225,.85)';
    c.fillText(nx?('faltan '+(nx[1]-p)+' pts para '+nx[0]):'nivel máximo',W/2,H*0.85); c.textAlign='left';
  };
  // tablet 2: invita y gana (toca para copiar tu enlace)
  UIK.invite=function(c,W,H,t,s){
    var g=c.createLinearGradient(0,0,0,H); g.addColorStop(0,'#0f2a27'); g.addColorStop(1,'#07120f'); c.fillStyle=g; c.fillRect(0,0,W,H);
    var u=W/12; c.textAlign='center'; c.textBaseline='middle';
    c.font='600 '+(u*1.05)+'px '+SANS; c.fillStyle='#bff3e1'; c.fillText('Invita y gana',W/2,u*2.2);
    c.font='700 '+(u*3.2)+'px '+SANS; c.fillStyle='#ffffff'; c.fillText('+100',W/2,H*0.40);
    c.font=(u*0.95)+'px '+MONO; c.fillStyle='#2DD4A7'; c.fillText('pts por compartir',W/2,H*0.40+u*2.2);
    var pu=0.5+0.5*Math.sin(t*3); c.fillStyle='rgba(45,212,167,'+(0.18+0.22*pu)+')'; rr2(c,u*1,H*0.70,W-u*2,u*2.8,u*1.4); c.fill();
    c.font='600 '+(u*0.92)+'px '+SANS; c.fillStyle='#2DD4A7'; c.fillText('Toca para copiar',W/2,H*0.70+u*1.4);
    c.font=(u*0.7)+'px '+MONO; c.fillStyle='rgba(191,243,225,.8)'; c.fillText('compartido '+(CLUB.st.share||0)+'×',W/2,H*0.88); c.textAlign='left';
  };
  // escalera de niveles en el vidrio: muestra TU posicion real
  UIK.tiersme=function(c,W,H,t,s){
    c.clearRect(0,0,W,H); var T=CLUB.TIERS, me=CLUB.tier(), pr=CLUB.progress();
    var u=W/10, top=H*0.07, bot=H*0.93, step=(bot-top)/4, lx=u*1.4; c.lineCap='round';
    var lvl=Math.min(3,me+pr*(me<3?1:0)), intro=Math.min(1,(t%45)/2.5), shown=lvl*intro;
    c.strokeStyle='rgba(120,255,214,0.18)'; c.lineWidth=u*0.32; c.beginPath(); c.moveTo(lx,bot-step*0.5); c.lineTo(lx,top+step*0.5); c.stroke();
    var py=bot-step*0.5-(shown/3)*(step*3), g=c.createLinearGradient(0,bot,0,py); g.addColorStop(0,'rgba(45,212,167,0.35)'); g.addColorStop(1,'rgba(160,255,225,1)');
    c.strokeStyle=g; c.beginPath(); c.moveTo(lx,bot-step*0.5); c.lineTo(lx,py); c.stroke();
    var rg=c.createRadialGradient(lx,py,0,lx,py,u*1.6); rg.addColorStop(0,'rgba(255,255,255,1)'); rg.addColorStop(0.35,'rgba(140,255,220,0.8)'); rg.addColorStop(1,'rgba(45,212,167,0)'); c.fillStyle=rg; c.beginPath(); c.arc(lx,py,u*1.6,0,7); c.fill();
    var sub=['Bienvenida','Guía PDF','Diagnóstico','Sesión 1:1'];
    for(var k=0;k<4;k++){ var i=3-k, y=top+step*i+step*0.5, on=me>=k, here=me===k;
      c.fillStyle=on?T[k][2]:'rgba(200,230,222,0.35)'; c.beginPath(); c.arc(lx,y,u*(here?0.62:0.42),0,7); c.fill();
      c.textBaseline='middle'; c.textAlign='left'; c.font='700 '+(u*1.2)+'px Inter Tight,system-ui,sans-serif';
      c.globalAlpha=on?(here?(0.85+0.15*Math.sin(t*4)):0.75):0.3; c.fillStyle=T[k][2]; c.fillText(T[k][0].toUpperCase(),u*2.7,y-u*0.55);
      c.font='600 '+(u*0.76)+'px Inter Tight,system-ui,sans-serif'; c.fillStyle='rgba(220,255,244,0.9)'; c.fillText(here?'TÚ ESTÁS AQUÍ':sub[k],u*2.7,y+u*0.75); c.globalAlpha=1;
      if(here){ var a=(t*1.2)%1; c.strokeStyle='rgba(160,255,225,'+(1-a)*0.8+')'; c.lineWidth=u*0.12; c.beginPath(); c.arc(lx,y,u*(0.6+a*1.3),0,7); c.stroke(); } }
  };
  // ===== FIDELIZACIÓN (foto nueva): lounge del Club CruzTRD =====
  var TIK=['#8a4f2a','#56636b','#8f6410','#2c7690'];          // tinta oscura por nivel
  var TMET=[['#3a2418','#b8774f','#f6c3a0'],['#2a3034','#9aa7ae','#f4f8fa'],['#33260c','#c49634','#ffe3a3'],['#1d3540','#8fc2d4','#eefcff']];
  var TREW=['Bienvenida al Club','Estimación de tu idea (PDF)','Diagnóstico de tu app con IA','Sesión 1:1 con el equipo'];
  function wrapL(c,txt,maxW){ var w=txt.split(' '),L=[],cur=''; for(var i=0;i<w.length;i++){ var tt=cur?cur+' '+w[i]:w[i]; if(c.measureText(tt).width>maxW&&cur){L.push(cur);cur=w[i];} else cur=tt; } if(cur)L.push(cur); return L; }
  function star(c,x,y,R,col){ c.beginPath(); for(var i=0;i<10;i++){ var a=-Math.PI/2+i*Math.PI/5, r=i%2?R*0.45:R; c.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r);} c.closePath(); c.fillStyle=col; c.fill(); }
  function hola(){ var h=new Date().getHours(); return (h<5||h>=19)?'Buenas noches':(h<12?'Buenos días':'Buenas tardes'); }
  // TV principal: tu tarjeta de socio, en vivo
  UIK.cardtv=function(c,W,H,t,s){
    var u=H/20, p=CLUB.pts(), me=CLUB.tier(), T=CLUB.TIERS, nx=T[me+1], pr=CLUB.progress(), v=CLUB.st.v||1, M=TMET[me];
    var g=c.createLinearGradient(0,0,W,H); g.addColorStop(0,'#071311'); g.addColorStop(1,'#0c1f1c'); c.fillStyle=g; c.fillRect(0,0,W,H);
    var gx=W*(0.25+0.08*Math.sin(t*0.21)), gy=H*(0.45+0.1*Math.cos(t*0.17)), rg=c.createRadialGradient(gx,gy,0,gx,gy,W*0.45);
    rg.addColorStop(0,'rgba(45,212,167,0.16)'); rg.addColorStop(1,'rgba(45,212,167,0)'); c.fillStyle=rg; c.fillRect(0,0,W,H);
    var hx2=W*(0.78+0.06*Math.cos(t*0.19)), rg2=c.createRadialGradient(hx2,H*0.3,0,hx2,H*0.3,W*0.35); rg2.addColorStop(0,hx(T[me][2],0.12)); rg2.addColorStop(1,hx(T[me][2],0)); c.fillStyle=rg2; c.fillRect(0,0,W,H);
    c.textBaseline='middle'; c.textAlign='left';
    // cabecera
    c.font='600 '+(u*0.62)+'px '+MONO; c.fillStyle='rgba(159,233,207,.85)'; c.fillText('CLUB CRUZTRD  ·  LOUNGE DE SOCIOS',u*1.6,u*1.5);
    var d=new Date(), hh=('0'+d.getHours()).slice(-2)+(Math.floor(t*2)%2?':':' ')+('0'+d.getMinutes()).slice(-2);
    c.textAlign='right'; c.fillText(hh,W-u*1.6,u*1.5); c.textAlign='left';
    c.strokeStyle='rgba(159,233,207,.14)'; c.lineWidth=1.5; c.beginPath(); c.moveTo(u*1.6,u*2.4); c.lineTo(W-u*1.6,u*2.4); c.stroke();
    // tarjeta
    var cw=W*0.43, ch=cw/1.586, cx0=u*1.8, cy0=H*0.5-ch/2+Math.sin(t*0.9)*u*0.12, r=u*0.75;
    c.save(); c.shadowColor='rgba(0,0,0,.55)'; c.shadowBlur=u*1.4; c.shadowOffsetY=u*0.5; rr2(c,cx0,cy0,cw,ch,r); c.fillStyle='#0b0f10'; c.fill(); c.restore();
    c.save(); rr2(c,cx0,cy0,cw,ch,r); c.clip();
    var cg=c.createLinearGradient(cx0,cy0,cx0+cw,cy0+ch); cg.addColorStop(0,'#14191b'); cg.addColorStop(0.55,'#0a0d0e'); cg.addColorStop(1,M[0]); c.fillStyle=cg; c.fillRect(cx0,cy0,cw,ch);
    c.strokeStyle='rgba(255,255,255,0.025)'; c.lineWidth=1; for(var i=-ch;i<cw;i+=5){ c.beginPath(); c.moveTo(cx0+i,cy0); c.lineTo(cx0+i+ch*0.35,cy0+ch); c.stroke(); }
    var ph=((t%6)/6)*1.8-0.4, sx=cx0+cw*ph, sg=c.createLinearGradient(sx-cw*0.25,cy0,sx+cw*0.25,cy0+ch);
    sg.addColorStop(0,'rgba(255,255,255,0)'); sg.addColorStop(0.5,'rgba(255,255,255,0.10)'); sg.addColorStop(1,'rgba(255,255,255,0)'); c.fillStyle=sg; c.fillRect(cx0,cy0,cw,ch);
    c.restore();
    var eg=c.createLinearGradient(cx0,cy0,cx0+cw,cy0+ch); eg.addColorStop(0,M[1]); eg.addColorStop(0.5,M[2]); eg.addColorStop(1,M[1]);
    c.strokeStyle=eg; c.lineWidth=u*0.09; rr2(c,cx0,cy0,cw,ch,r); c.stroke();
    var pad=cw*0.075; c.font='700 '+(ch*0.105)+'px '+SANS; c.fillStyle='#f2f6f5'; c.fillText('Cruz',cx0+pad,cy0+pad+ch*0.06);
    var wC=c.measureText('Cruz').width; c.fillStyle='#2DD4A7'; c.fillText('TRD',cx0+pad+wC,cy0+pad+ch*0.06);
    c.font='600 '+(ch*0.055)+'px '+MONO; c.fillStyle='rgba(230,240,238,.6)'; c.textAlign='right'; c.fillText('CLUB',cx0+cw-pad,cy0+pad+ch*0.06); c.textAlign='left';
    var chx=cx0+pad, chy=cy0+ch*0.36, chw=ch*0.2, chh=ch*0.155, chg=c.createLinearGradient(chx,chy,chx+chw,chy+chh); chg.addColorStop(0,'#c9a24d'); chg.addColorStop(0.5,'#f3dc9a'); chg.addColorStop(1,'#a8822f');
    rr2(c,chx,chy,chw,chh,chh*0.18); c.fillStyle=chg; c.fill(); c.strokeStyle='rgba(80,60,20,.55)'; c.lineWidth=1.2;
    c.beginPath(); c.moveTo(chx,chy+chh/2); c.lineTo(chx+chw,chy+chh/2); c.moveTo(chx+chw*0.35,chy); c.lineTo(chx+chw*0.35,chy+chh); c.moveTo(chx+chw*0.65,chy); c.lineTo(chx+chw*0.65,chy+chh); c.stroke();
    var f0=new Date(CLUB.st.first||Date.now()), num=String((CLUB.st.first||0)%100000000); while(num.length<8)num='0'+num;
    c.font='500 '+(ch*0.085)+'px '+MONO; c.fillStyle='rgba(236,244,242,.92)'; c.fillText('CTRD  '+num.slice(0,4)+'  '+num.slice(4),cx0+pad,cy0+ch*0.66);
    c.font='600 '+(ch*0.05)+'px '+MONO; c.fillStyle='rgba(230,240,238,.55)'; c.fillText('SOCIO DESDE '+('0'+(f0.getMonth()+1)).slice(-2)+'/'+String(f0.getFullYear()).slice(-2),cx0+pad,cy0+ch*0.84);
    var tg=c.createLinearGradient(cx0+cw*0.5,0,cx0+cw,0); tg.addColorStop(0,M[1]); tg.addColorStop(0.5,M[2]); tg.addColorStop(1,M[1]);
    c.font='700 '+(ch*0.12)+'px '+SANS; c.fillStyle=tg; c.textAlign='right'; c.fillText(T[me][0].toUpperCase(),cx0+cw-pad,cy0+ch*0.83); c.textAlign='left';
    // columna derecha
    var x0=W*0.53, cwid=W-x0-u*1.8;
    c.font='600 '+(u*1.05)+'px '+SANS; c.fillStyle='#d6fbee'; c.fillText(v>1?'Hola de nuevo':hola(),x0,H*0.22);
    c.font=(u*0.62)+'px '+MONO; c.fillStyle='rgba(159,233,207,.8)'; c.fillText((v>1?'visita nº '+v:'tu primera visita')+'  ·  nivel '+T[me][0].toLowerCase(),x0,H*0.29);
    c.font='700 '+(u*3.1)+'px '+SANS; c.fillStyle='#ffffff'; var ps=p.toLocaleString('es'); c.fillText(ps,x0-u*0.1,H*0.43);
    var pw=c.measureText(ps).width; c.font='600 '+(u*0.95)+'px '+SANS; c.fillStyle=T[me][2]; c.fillText('pts',x0+pw+u*0.4,H*0.455);
    var by=H*0.56, bh=u*0.42; rr2(c,x0,by,cwid,bh,bh/2); c.fillStyle='rgba(159,233,207,.12)'; c.fill();
    var fw=Math.max(bh,cwid*(nx?pr:1)), fg=c.createLinearGradient(x0,0,x0+fw,0); fg.addColorStop(0,'#2DD4A7'); fg.addColorStop(1,(nx?nx:T[me])[2]);
    rr2(c,x0,by,fw,bh,bh/2); c.fillStyle=fg; c.fill();
    var gl=(t*0.35)%1; c.save(); rr2(c,x0,by,fw,bh,bh/2); c.clip(); var gg=c.createLinearGradient(x0+fw*gl-u*2,0,x0+fw*gl+u*2,0); gg.addColorStop(0,'rgba(255,255,255,0)'); gg.addColorStop(0.5,'rgba(255,255,255,.55)'); gg.addColorStop(1,'rgba(255,255,255,0)'); c.fillStyle=gg; c.fillRect(x0,by,fw,bh); c.restore();
    c.font='600 '+(u*0.6)+'px '+MONO; c.fillStyle='rgba(214,251,238,.85)'; c.fillText(T[me][0],x0,by+bh+u*0.75);
    c.textAlign='right'; c.fillText(nx?(nx[0]+' · '+nx[1]+' pts'):'nivel máximo',x0+cwid,by+bh+u*0.75); c.textAlign='left';
    c.font='600 '+(u*0.72)+'px '+SANS; c.fillStyle='#ffffff';
    var msg=nx?('Te faltan '+(nx[1]-p)+' pts: '+TREW[me+1]):'Todas tus recompensas están desbloqueadas'; var L=wrapL(c,msg,cwid);
    for(var i=0;i<Math.min(2,L.length);i++) c.fillText(L[i],x0,H*0.675+i*u*0.95);
    // capas recorridas
    var cy=H*0.855, n=7, gap=cwid/n, rr=Math.min(gap*0.34,u*0.68);
    c.font='600 '+(u*0.5)+'px '+MONO; c.fillStyle='rgba(159,233,207,.75)'; c.fillText('CAPAS RECORRIDAS  '+CLUB.st.rooms.length+'/7',x0,cy-u*1.25);
    for(var k=1;k<=n;k++){ var on=CLUB.st.rooms.indexOf(k)>-1, ccx=x0+gap*(k-0.5);
      c.beginPath(); c.arc(ccx,cy,rr,0,7); if(on){c.fillStyle=k===6?T[me][2]:'#2DD4A7'; c.fill();} else {c.strokeStyle='rgba(159,233,207,.35)'; c.lineWidth=1.5; c.stroke();}
      c.font='700 '+(rr*0.8)+'px '+SANS; c.textAlign='center'; c.fillStyle=on?'#06120f':'rgba(159,233,207,.6)'; c.fillText('0'+k,ccx,cy+1); c.textAlign='left';
      if(k===6){ var a=(t*0.9)%1; c.strokeStyle=hx(T[me][2],(1-a)*0.7); c.lineWidth=2; c.beginPath(); c.arc(ccx,cy,rr*(1+a*0.8),0,7); c.stroke(); } }
    // ticker
    var ty=H-u*0.95; c.fillStyle='rgba(45,212,167,.07)'; c.fillRect(0,ty-u*0.62,W,u*1.24);
    var msg2='ASÍ SE SIENTE UN PROGRAMA DE LEALTAD BIEN HECHO: TE RECONOCE, TE PREMIA Y TE DA UN MOTIVO PARA VOLVER   ·   ESTO LO CONSTRUIMOS PARA TU APP   ·   ';
    c.font='600 '+(u*0.55)+'px '+MONO; var mw=c.measureText(msg2).width, off=(t*u*2.2)%mw; c.fillStyle='rgba(159,233,207,.8)';
    c.save(); c.beginPath(); c.rect(0,ty-u*0.62,W,u*1.24); c.clip(); for(var xx=-off;xx<W;xx+=mw) c.fillText(msg2,xx,ty); c.restore();
  };
  // muro de niveles: cada caja de luz es un nivel; la tuya se enciende
  UIK.tierbox=function(c,W,H,t,s){
    var k=s.k, T=CLUB.TIERS, me=CLUB.tier(), p=CLUB.pts(), here=k===me, on=k<=me, col=T[k][2], ink='#eef2f0', u=W/10;
    var bg=c.createRadialGradient(W/2,H/2,W*0.2,W/2,H/2,H*0.62); bg.addColorStop(0,'#161b22'); bg.addColorStop(1,'#0b0e14'); c.fillStyle=bg; c.fillRect(0,0,W,H);
    if(on){ var tg=c.createLinearGradient(0,0,0,H); tg.addColorStop(0,hx(col,here?0.26:0.12)); tg.addColorStop(0.5,hx(col,here?0.10:0.04)); tg.addColorStop(1,hx(col,here?0.26:0.12)); c.fillStyle=tg; c.fillRect(0,0,W,H); }
    if(here){ var sy=((t*0.22)%1)*H*1.4-H*0.2, sg=c.createLinearGradient(0,sy-H*0.18,0,sy+H*0.18); sg.addColorStop(0,'rgba(255,255,255,0)'); sg.addColorStop(0.5,'rgba(255,255,255,.10)'); sg.addColorStop(1,'rgba(255,255,255,0)'); c.fillStyle=sg; c.fillRect(0,0,W,H); }
    c.globalAlpha=on?1:0.58; c.textAlign='center'; c.textBaseline='middle';
    c.font='600 '+(u*0.78)+'px '+MONO; c.fillStyle=ink; c.fillText('NIVEL 0'+(k+1),W/2,H*0.075);
    var my=H*0.22, mr=u*2.7, mg=c.createRadialGradient(W/2-mr*0.3,my-mr*0.3,mr*0.1,W/2,my,mr); mg.addColorStop(0,'#ffffff'); mg.addColorStop(0.45,col); mg.addColorStop(1,TIK[k]);
    c.beginPath(); c.arc(W/2,my,mr,0,7); c.fillStyle=mg; c.fill(); c.lineWidth=u*0.18; c.strokeStyle=hx(ink,0.55); c.stroke();
    star(c,W/2,my+mr*0.04,mr*0.52,'#ffffff');
    if(here){ var a=(t*0.8)%1; c.strokeStyle=hx(ink,(1-a)*0.75); c.lineWidth=u*0.16; c.beginPath(); c.arc(W/2,my,mr*(1.05+a*0.5),0,7); c.stroke(); }
    var nm=T[k][0].toUpperCase(), fs=u*2.0; c.font='700 '+fs+'px '+SANS; while(c.measureText(nm).width>W*0.9){fs*=0.94;c.font='700 '+fs+'px '+SANS;}
    c.fillStyle=ink; c.fillText(nm,W/2,H*0.39);
    c.font='600 '+(u*0.82)+'px '+MONO; c.fillStyle=hx(ink,0.85); c.fillText(T[k][1]?('desde '+T[k][1]+' pts'):'al entrar',W/2,H*0.445);
    c.strokeStyle=hx(ink,0.3); c.lineWidth=2; c.beginPath(); c.moveTo(W*0.25,H*0.5); c.lineTo(W*0.75,H*0.5); c.stroke();
    c.font='600 '+(u*0.7)+'px '+MONO; c.fillStyle=hx(ink,0.8); c.fillText('RECOMPENSA',W/2,H*0.55);
    c.font='600 '+(u*1.08)+'px '+SANS; c.fillStyle='#eef2f0'; var L=wrapL(c,TREW[k],W*0.84);
    for(var i=0;i<L.length;i++) c.fillText(L[i],W/2,H*0.61+i*u*1.42);
    c.globalAlpha=1;
    var py=H*0.86, pw=W*0.82, ph=u*1.9, lab=here?'TÚ ESTÁS AQUÍ':(on?'DESBLOQUEADO ✓':('faltan '+(T[k][1]-p)+' pts'));
    rr2(c,(W-pw)/2,py-ph/2,pw,ph,ph/2);
    if(here){ c.fillStyle='#2DD4A7'; c.fill(); c.fillStyle='#07090C'; } else if(on){ c.fillStyle=hx(ink,0.14); c.fill(); c.fillStyle=ink; } else { c.strokeStyle='rgba(238,242,240,.3)'; c.lineWidth=2; c.stroke(); c.fillStyle='rgba(238,242,240,.7)'; }
    var lf=u*0.8; c.font='700 '+lf+'px '+SANS; while(c.measureText(lab).width>pw*0.88){lf*=0.94;c.font='700 '+lf+'px '+SANS;} c.fillText(lab,W/2,py+1);
    c.textAlign='left';
  };
  // pantalla de pared: tu próxima recompensa
  UIK.reward=function(c,W,H,t,s){
    var u=W/12, T=CLUB.TIERS, me=CLUB.tier(), p=CLUB.pts(), nx=T[me+1], pr=CLUB.progress();
    var g=c.createLinearGradient(0,0,0,H); g.addColorStop(0,'#0f2a27'); g.addColorStop(1,'#06110f'); c.fillStyle=g; c.fillRect(0,0,W,H);
    c.textAlign='center'; c.textBaseline='middle';
    c.font='600 '+(u*0.62)+'px '+MONO; c.fillStyle='rgba(159,233,207,.85)'; c.fillText(nx?'TU PRÓXIMA RECOMPENSA':'TODO DESBLOQUEADO',W/2,u*1.6);
    var tc=(nx||T[me])[2], gy=H*0.2, gs=u*2.6, bob=Math.sin(t*1.6)*u*0.15;
    var hg=c.createRadialGradient(W/2,gy,0,W/2,gy,gs*1.8); hg.addColorStop(0,hx(tc,0.35)); hg.addColorStop(1,hx(tc,0)); c.fillStyle=hg; c.fillRect(0,gy-gs*2,W,gs*4);
    var gx0=W/2, gy0=gy+bob; c.fillStyle=tc; rr2(c,gx0-gs*0.46,gy0-gs*0.12,gs*0.92,gs*0.62,u*0.18); c.fill();
    c.fillStyle=hx(tc,0.85); rr2(c,gx0-gs*0.56,gy0-gs*0.36,gs*1.12,gs*0.28,u*0.16); c.fill();
    c.fillStyle='#ffffff'; c.globalAlpha=0.9; c.fillRect(gx0-gs*0.07,gy0-gs*0.36,gs*0.14,gs*0.86); c.globalAlpha=1;
    c.strokeStyle='#ffffff'; c.lineWidth=gs*0.08; c.lineJoin='round';
    c.beginPath(); c.ellipse(gx0-gs*0.2,gy0-gs*0.5,gs*0.2,gs*0.12,-0.35,0,7); c.stroke(); c.beginPath(); c.ellipse(gx0+gs*0.2,gy0-gs*0.5,gs*0.2,gs*0.12,0.35,0,7); c.stroke();
    c.font='700 '+(u*1.12)+'px '+SANS; c.fillStyle='#ffffff'; var L=wrapL(c,TREW[nx?me+1:me],W*0.86);
    for(var i=0;i<L.length;i++) c.fillText(L[i],W/2,H*0.36+i*u*1.4);
    c.font='600 '+(u*0.72)+'px '+MONO; c.fillStyle=tc; c.fillText(nx?('nivel '+nx[0]+' · '+nx[1]+' pts'):'nivel Platino',W/2,H*0.36+L.length*u*1.4+u*0.2);
    var by=H*0.6, bw=W*0.8, bh=u*0.5; rr2(c,(W-bw)/2,by,bw,bh,bh/2); c.fillStyle='rgba(159,233,207,.14)'; c.fill();
    var fw=Math.max(bh,bw*(nx?pr:1)); rr2(c,(W-bw)/2,by,fw,bh,bh/2); c.fillStyle=tc; c.fill();
    c.font='600 '+(u*0.68)+'px '+SANS; c.fillStyle='#d6fbee'; c.fillText(nx?('faltan '+(nx[1]-p)+' pts'):'¡gracias por volver!',W/2,by+bh+u*0.9);
    var rows=[['+100','cada capa'],['+50','cada especialista'],['+200','si vuelves otro día'],['+100','por invitar']];
    c.font='600 '+(u*0.55)+'px '+MONO; c.fillStyle='rgba(159,233,207,.65)'; c.fillText('CÓMO GANAR PUNTOS',W/2,H*0.728);
    for(var r=0;r<4;r++){ var yy=H*0.768+r*u*0.88; c.textAlign='right'; c.font='700 '+(u*0.68)+'px '+SANS; c.fillStyle='#2DD4A7'; c.fillText(rows[r][0],W*0.36,yy);
      c.textAlign='left'; c.font=(u*0.62)+'px '+MONO; c.fillStyle='rgba(220,250,240,.85)'; c.fillText(rows[r][1],W*0.40,yy); }
    c.textAlign='center'; var cy=H*0.955, pu=0.5+0.5*Math.sin(t*3), can=me>=1;
    rr2(c,W*0.12,cy-u*0.75,W*0.76,u*1.5,u*0.75); c.fillStyle=can?hx(tc,0.25+0.25*pu):'rgba(159,233,207,.10)'; c.fill();
    c.font='700 '+(u*0.72)+'px '+SANS; c.fillStyle=can?'#ffffff':'rgba(214,251,238,.8)'; c.fillText(can?'Reclamar recompensa →':'Sigue recorriendo el estudio',W/2,cy+1); c.textAlign='left';
  };
  // tablet del concierge (casi de canto): pulso de "reclamar"
  UIK.tabglow=function(c,W,H,t,s){
    c.fillStyle='#0a1a1c'; c.fillRect(0,0,W,H); var pu=0.5+0.5*Math.sin(t*2.4), x=((t*0.25)%1)*W;
    var g=c.createLinearGradient(x-W*0.2,0,x+W*0.2,0); g.addColorStop(0,'rgba(45,212,167,0)'); g.addColorStop(0.5,'rgba(45,212,167,'+(0.25+0.25*pu)+')'); g.addColorStop(1,'rgba(45,212,167,0)'); c.fillStyle=g; c.fillRect(0,0,W,H);
    c.fillStyle='rgba(45,212,167,'+(0.55+0.35*pu)+')'; rr2(c,W*0.3,H*0.3,W*0.4,H*0.4,H*0.2); c.fill();
  };
  function makeScreen(sc){
    if(sc.act){makeQuadScreen(sc);return;}
    var sm=!!sc.sm, cw=sm?448:640, ch=sm?272:384, TW=sm?1024:2048, TH=sm?512:1024;
    var cv=document.createElement('canvas'); cv.width=TW; cv.height=TH; var cx=cv.getContext('2d'); cx.scale(TW/cw,TH/ch); try{Object.defineProperty(cx,'shadowBlur',{get:function(){return 0;},set:function(v){},configurable:true});}catch(e){}
    var tex=new THREE.CanvasTexture(cv); tex.flipY=false; tex.minFilter=THREE.LinearMipmapLinearFilter; tex.magFilter=THREE.LinearFilter; tex.generateMipmaps=true; tex.anisotropy=renderer.capabilities.getMaxAnisotropy();
    var c=sc.corners, N=24, M=12, R=RADIUS*0.992, pos=[],uv=[],puv=[],idx=[];
    var C3=[0,1,2,3].map(function(k){return lonlatToDir(c[k][0],c[k][1]).normalize();});
    var E=sc.edges; // bordes curvos medidos (Coons): [top TL->TR, right TR->BR, bottom BL->BR, left TL->BL]
    function ev(poly,u){var n=poly.length-1,f=Math.max(0,Math.min(1,u))*n,i=Math.min(n-1,Math.floor(f)),r=f-i;var a=lonlatToDir(poly[i][0],poly[i][1]),b=lonlatToDir(poly[i+1][0],poly[i+1][1]);return a.multiplyScalar(1-r).add(b.multiplyScalar(r)).normalize();}
    function P3(s,t){var v=new THREE.Vector3();
      if(E){v.addScaledVector(ev(E[0],s),1-t).addScaledVector(ev(E[2],s),t).addScaledVector(ev(E[3],t),1-s).addScaledVector(ev(E[1],t),s)
             .addScaledVector(C3[0],-(1-s)*(1-t)).addScaledVector(C3[1],-s*(1-t)).addScaledVector(C3[2],-s*t).addScaledVector(C3[3],-(1-s)*t);}
      else{['x','y','z'].forEach(function(k){v[k]=(1-t)*((1-s)*C3[0][k]+s*C3[1][k])+t*((1-s)*C3[3][k]+s*C3[2][k]);});}
      return v.normalize();}
    function L2(s,t){return dirToLonLat(P3(s,t));}
    for(var j=0;j<=M;j++)for(var i=0;i<=N;i++){var s=i/N,t=j/M,q=L2(s,t),d=P3(s,t).multiplyScalar(R);pos.push(d.x,d.y,d.z);uv.push(s,t);var u=((q[0]-180)/360)%1;if(u<0)u+=1;puv.push(u,(q[1]+90)/180);}
    for(var j=0;j<M;j++)for(var i=0;i<N;i++){var a=j*(N+1)+i,b=a+1,c2=a+N+1,d2=c2+1;idx.push(a,b,d2,a,d2,c2);}
    var g=new THREE.BufferGeometry();
    g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
    g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));
    g.setAttribute('puv',new THREE.Float32BufferAttribute(puv,2));
    g.setIndex(idx);
    var mat=new THREE.ShaderMaterial({
      uniforms:{dash:{value:tex},pano:{value:sphere.material.map},avg:{value:sc.avg||0.28},str:{value:(sc.str!=null?sc.str:0.7)}},
      vertexShader:'attribute vec2 puv; varying vec2 vUv; varying vec2 vP; void main(){ vUv=uv; vP=puv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader:'uniform sampler2D dash; uniform sampler2D pano; uniform float avg; uniform float str; varying vec2 vUv; varying vec2 vP; void main(){ vec3 d=texture2D(dash,vUv).rgb; vec3 p=texture2D(pano,vP,4.5).rgb; float lum=dot(p,vec3(0.299,0.587,0.114)); float sh=clamp(lum/max(avg,0.04),0.65,1.3); sh=mix(1.0,sh,str); vec3 hi=max(texture2D(pano,vP,6.0).rgb-vec3(0.72),vec3(0.0))*0.22; float fx=smoothstep(0.0,0.006,vUv.x)*smoothstep(0.0,0.006,1.0-vUv.x); float fy=smoothstep(0.0,0.009,vUv.y)*smoothstep(0.0,0.009,1.0-vUv.y); gl_FragColor=vec4(d*sh+hi, fx*fy); }',
      transparent:true, depthTest:false, depthWrite:false, side:THREE.DoubleSide
    });
    var mesh=new THREE.Mesh(g,mat); mesh.renderOrder=3; mesh.layers.enable(BLOOM_LAYER); scene.add(mesh);
    var s=Object.assign({},sc); s.mesh=mesh;s.cx=cx;s.tex=tex;(function(){var q=L2(0.5,0.5);s.cdir=lonlatToDir(q[0],q[1]).normalize();})();s.acc=ACC[sc.acc]||sc.acc||ACC.g;s.title=sc.title||'';s.seed=sc.seed||Math.random()*7;s.W=cw;s.H=ch;s.iv=sc.iv||(sm?150:70);s.last=performance.now()-Math.random()*s.iv;
    drawPanel(s,performance.now()/1000); s.tex.needsUpdate=true; screens.push(s);
  }
  function buildWall(room){ clearWall(); clearFx(); if(room.screens)room.screens.forEach(makeScreen); if(room.fx)room.fx.forEach(makeFx); }
  // ---- librería de paneles (estilo pantalla emisiva, animados, multicolor) ----
  function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function frame(c,W,H,acc,title,t){
    c.clearRect(0,0,W,H); c.fillStyle='rgba(12,19,23,1)'; c.fillRect(0,0,W,H);
    c.lineWidth=1; c.strokeStyle=hx(acc,0.05);
    for(var gx=34;gx<W;gx+=42){c.beginPath();c.moveTo(gx,0);c.lineTo(gx,H);c.stroke();}
    for(var gy=34;gy<H;gy+=42){c.beginPath();c.moveTo(0,gy);c.lineTo(W,gy);c.stroke();}
    c.lineJoin='round';c.lineCap='round';c.textBaseline='alphabetic';c.textAlign='left';
    c.font='600 17px monospace'; c.fillStyle='#e6fff7'; c.shadowColor=hx(acc,0.7); c.shadowBlur=8; c.fillText(title,22,40); c.shadowBlur=0;
    var pl=0.5+0.5*Math.sin(t*3.5); c.fillStyle=hx(acc,0.35+0.55*pl); c.beginPath(); c.arc(W-74,34,6,0,7); c.fill();
    c.font='600 13px monospace'; c.fillStyle='#9fe9cf'; c.fillText('LIVE',W-60,39);
  }
  function finish(c,W,H,acc){
    c.globalAlpha=0.05; c.fillStyle='#000'; for(var sy=0;sy<H;sy+=4)c.fillRect(0,sy,W,2); c.globalAlpha=1;
    var vg=c.createRadialGradient(W/2,H/2,H*0.3,W/2,H/2,H*0.85); vg.addColorStop(0,'rgba(0,0,0,0)'); vg.addColorStop(1,'rgba(0,0,0,0.4)'); c.fillStyle=vg; c.fillRect(0,0,W,H);
    c.strokeStyle=hx(acc,0.75); c.lineWidth=2.5; var b=18,m=12;
    c.beginPath();c.moveTo(m,m+b);c.lineTo(m,m);c.lineTo(m+b,m);c.stroke();
    c.beginPath();c.moveTo(W-m-b,m);c.lineTo(W-m,m);c.lineTo(W-m,m+b);c.stroke();
    c.beginPath();c.moveTo(W-m,H-m-b);c.lineTo(W-m,H-m);c.lineTo(W-m-b,H-m);c.stroke();
    c.beginPath();c.moveTo(m+b,H-m);c.lineTo(m,H-m);c.lineTo(m,H-m-b);c.stroke();
  }
  function drawPanel(s,t){
    var c=s.cx,W=s.W,H=s.H,acc=s.acc,sd=s.seed,i,x,y,n;
    frame(c,W,H,acc,s.title,t);
    if(s.type==='bigline'){
      n=16; var cx0=22,cx1=W-22,cy0=H-26,cy1=118;
      function X(i){return cx0+(cx1-cx0)*i/(n-1);} function Y(v){return cy0-(cy0-cy1)*Math.max(0.04,Math.min(1,v));}
      var pv=[]; for(i=0;i<n;i++)pv.push(0.18+0.62*(i/(n-1))+0.1*Math.sin(i*1.2+sd+t*0.5));
      c.beginPath();c.moveTo(cx0,cy0);for(i=0;i<n;i++)c.lineTo(X(i),Y(pv[i]));c.lineTo(cx1,cy0);c.closePath();
      var g=c.createLinearGradient(0,cy1,0,cy0);g.addColorStop(0,hx(acc,0.32));g.addColorStop(1,hx(acc,0));c.fillStyle=g;c.fill();
      c.beginPath();for(i=0;i<n;i++){i?c.lineTo(X(i),Y(pv[i])):c.moveTo(X(i),Y(pv[i]));}
      c.strokeStyle=hx(acc,1);c.lineWidth=3;c.shadowColor=hx(acc,0.9);c.shadowBlur=16;c.stroke();c.shadowBlur=0;
      var pp=(t*0.12+sd)%1,fi=pp*(n-1),i0=Math.floor(fi),fr=fi-i0,i1=Math.min(i0+1,n-1);
      var dx=X(i0)+(X(i1)-X(i0))*fr,dy=Y(pv[i0])+(Y(pv[i1])-Y(pv[i0]))*fr;
      c.fillStyle='#fff';c.shadowColor=hx(acc,1);c.shadowBlur=14;c.beginPath();c.arc(dx,dy,5,0,7);c.fill();c.shadowBlur=0;
      c.font='700 58px Inter Tight,system-ui,sans-serif';c.fillStyle='#eafff6';c.shadowColor=hx(acc,0.5);c.shadowBlur=16;c.fillText(s.big||'$48.2K',22,96);c.shadowBlur=0;
      c.font='600 14px monospace';c.fillStyle=hx(acc,0.85);c.fillText(s.sub||'MRR · ▲ 12%',24,118);
    } else if(s.type==='bars'){
      n=18; var bw=(W-44)/n, base=H-26, top=96;
      for(i=0;i<n;i++){var h=(0.15+0.75*Math.abs(Math.sin(i*0.8+sd+t*0.9)))*(base-top);var bx=22+i*bw,by=base-h;
        var g=c.createLinearGradient(0,by,0,base);g.addColorStop(0,hx(acc,1));g.addColorStop(1,hx(acc,0.12));
        c.fillStyle=g;c.shadowColor=hx(acc,0.5);c.shadowBlur=6;c.fillRect(bx+2,by,bw-5,h);c.shadowBlur=0;}
      c.font='700 46px Inter Tight,system-ui,sans-serif';c.fillStyle='#eafff6';c.shadowColor=hx(acc,0.5);c.shadowBlur=14;c.fillText(s.big||'8.5K',24,80);c.shadowBlur=0;
    } else if(s.type==='radar'){
      var cr=W/2,cy=H/2+20,rad=Math.min(W,H)/2-44;
      c.strokeStyle=hx(acc,0.22);for(i=1;i<=3;i++){c.beginPath();c.arc(cr,cy,rad*i/3,0,7);c.stroke();}
      c.beginPath();c.moveTo(cr-rad,cy);c.lineTo(cr+rad,cy);c.moveTo(cr,cy-rad);c.lineTo(cr,cy+rad);c.stroke();
      c.save();c.translate(cr,cy);c.rotate(t*1.1);var wg=c.createLinearGradient(0,0,rad,0);wg.addColorStop(0,hx(acc,0));wg.addColorStop(1,hx(acc,0.5));c.fillStyle=wg;c.beginPath();c.moveTo(0,0);c.arc(0,0,rad,-0.55,0);c.closePath();c.fill();c.restore();
      for(i=0;i<5;i++){var ba=sd+i*1.6,br=rad*(0.3+0.6*((i*0.41)%1)),bx=cr+Math.cos(ba)*br,by=cy+Math.sin(ba)*br,pu=0.4+0.6*Math.abs(Math.sin(t*3+i));c.fillStyle=hx(acc,pu);c.shadowColor=hx(acc,1);c.shadowBlur=10;c.beginPath();c.arc(bx,by,4,0,7);c.fill();c.shadowBlur=0;}
      c.textAlign='center';c.font='700 40px Inter Tight,system-ui,sans-serif';c.fillStyle='#eafff6';c.fillText(s.big||'0',cr,cy+12);c.font='600 12px monospace';c.fillStyle=hx(acc,0.85);c.fillText(s.sub||'EVENTOS',cr,cy+34);c.textAlign='left';
    } else if(s.type==='ring'){
      var cr2=W/2,cy2=H/2+16,rad2=Math.min(W,H)/2-46,val=s.val||0.9;
      c.lineWidth=16;c.strokeStyle=hx(acc,0.12);c.beginPath();c.arc(cr2,cy2,rad2,0,7);c.stroke();
      var fillp=val*(0.6+0.4*Math.min(1,t*0.25));
      c.strokeStyle=hx(acc,1);c.shadowColor=hx(acc,0.85);c.shadowBlur=16;c.beginPath();c.arc(cr2,cy2,rad2,-Math.PI/2,-Math.PI/2+fillp*2*Math.PI);c.stroke();c.shadowBlur=0;
      var ea=-Math.PI/2+fillp*2*Math.PI;c.fillStyle='#fff';c.shadowColor=hx(acc,1);c.shadowBlur=12;c.beginPath();c.arc(cr2+Math.cos(ea)*rad2,cy2+Math.sin(ea)*rad2,6,0,7);c.fill();c.shadowBlur=0;
      c.textAlign='center';c.font='700 '+Math.round(rad2*0.72)+'px Inter Tight,system-ui,sans-serif';c.fillStyle='#eafff6';c.fillText(Math.round(val*100)+'%',cr2,cy2+rad2*0.24);c.font='600 13px monospace';c.fillStyle=hx(acc,0.85);c.fillText(s.sub||'APROB.',cr2,cy2+rad2*0.55);c.textAlign='left';
    } else if(s.type==='wave'){
      for(var k=0;k<3;k++){var yb=96+k*((H-120)/3)+((H-120)/3)/2;c.beginPath();for(x=22;x<W-22;x+=3){var yy=yb+Math.sin(x*0.05+t*(2.2+k*0.7)+sd+k)*16*Math.sin(x*0.012+t*0.6);(x===22)?c.moveTo(x,yy):c.lineTo(x,yy);}c.strokeStyle=hx(acc,0.85-k*0.22);c.lineWidth=2;c.shadowColor=hx(acc,0.55);c.shadowBlur=7;c.stroke();c.shadowBlur=0;}
      c.font='700 40px Inter Tight,system-ui,sans-serif';c.fillStyle='#eafff6';c.shadowColor=hx(acc,0.5);c.shadowBlur=12;c.fillText(s.big||'42ms',24,82);c.shadowBlur=0;
    } else if(s.type==='stream'){
      var rows=s.rows||['AUTH · ok','SYNC · 12ms','TX #'+(1480+Math.floor(t*4)),'NODE · up','CACHE · hit','RT · 38ms','QUEUE · 2'];
      c.font='15px monospace';var rh=30,off=(t*26)%rh,rn=Math.floor((H-110)/rh)+2;
      for(i=0;i<rn;i++){y=96+i*rh-off;var r=rows[(i+Math.floor(t*0.9))%rows.length];var al=Math.max(0,Math.min(1,(y-90)/40))*Math.max(0,Math.min(1,(H-30-y)/40));
        c.fillStyle=hx(acc,0.9*al);c.fillText('› '+r,24,y);c.fillStyle=hx(acc,0.5*al);c.beginPath();c.arc(16,y-5,3,0,7);c.fill();}
    }
    finish(c,W,H,acc);
  }

  // ===== salas del recorrido =====
  var ROOMS=[
    {name:'Recepción · Lobby', pano:'media/lab-pano.webp?v=w4', lim:{giro:1,lonA:-180,lonB:180,latT:58,latB:-58}, entryYaw:0, fx:[], spots:[
      {type:'char', lon:0,lat:-15, hk:'intro', eye:'Anfitrión', title:'Bienvenido al estudio', who:'ANFITRIÓN · D2C',
       text:'Tu idea entra por aquí y se construye capa por capa hasta ser una app lista para miles de personas. Llama al ascensor cuando quieras subir a cualquier piso del estudio.', cls:'hosta'},
      {type:'act', act:'mag', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 5.5c3-1.3 6-1.3 9 .6 3-1.9 6-1.9 9-.6v13c-3-1.3-6-1.3-9 .6-3-1.9-6-1.9-9-.6z"/><path d="M12 6.1v13"/></svg>', label:'Revista', lon:-114,lat:-15},
      {type:'act', act:'play', icon:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 11c3.5-2.5 6.5-2.6 10 0 3.5-2.6 6.5-2.5 10 0"/><path d="M5 9.4L3.5 7M8.5 8.6L8 6M19 9.4L20.5 7M15.5 8.6L16 6"/><path d="M12 11v3.5"/></svg>', label:'Juegos', lon:159,lat:-22},
      {type:'act', act:'equipo', icon:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z"/><path d="M18.5 15.5l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z"/></svg>', label:'Diagnostica tu idea con IA', lon:-133,lat:-17.5},
      {type:'dir', lon:49,lat:-1, label:'Subir a los pisos'}
    ]},
    {name:'Capa 01 · Infraestructura', pano:'media/sala2.webp?v=w4', p6:'media/sala2-6k.webp?v=w4', lim:{giro:1,lonA:-180,lonB:180,latT:58,latB:-58}, entryYaw:0, fx:[], screens:[], spots:[
      {type:'act', act:'mag', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 5.5c3-1.3 6-1.3 9 .6 3-1.9 6-1.9 9-.6v13c-3-1.3-6-1.3-9 .6-3-1.9-6-1.9-9-.6z"/><path d="M12 6.1v13"/></svg>', label:'Leer: las 7 capas de una app', pg:5, lon:62,lat:-6},
      {type:'char', lon:0,lat:-24, hk:'infra', eye:'Capa 01', title:'Infraestructura', who:'GUÍA VIRTUAL · INFRA',
       text:'La base que deja tu app lista para crecer sin rehacerla.', cls:'infraa'},
      {type:'door', lon:-46,lat:-2, to:0, label:'Volver a Recepción'}
    ]},
    {name:'Capa 02 · Seguridad', pano:'media/sala3.webp?v=w4', p6:'media/sala3-6k.webp?v=w4', lim:{giro:1,lonA:-180,lonB:180,latT:58,latB:-58}, entryYaw:0, fx:[], screens:[], spots:[
      {type:'char', lon:27,lat:-12, hk:'seg', eye:'Capa 02', title:'Seguridad', who:'GUÍA VIRTUAL · SEGURIDAD',
       text:'Cifrado, 2FA y registro de accesos: tus datos y los de tus usuarios, protegidos desde el diseño.', cls:'sega'},
      {type:'door', lon:-47,lat:-1, to:0, label:'Volver a Recepción'}
    ]},
    {name:'Capa 03 · Pagos', pano:'media/sala4.webp?v=w4', p6:'media/sala4-6k.webp?v=w4', lim:{giro:1,lonA:-180,lonB:180,latT:58,latB:-58}, entryYaw:0, fx:[], screens:[], spots:[
      {type:'act', act:'mag', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 5.5c3-1.3 6-1.3 9 .6 3-1.9 6-1.9 9-.6v13c-3-1.3-6-1.3-9 .6-3-1.9-6-1.9-9-.6z"/><path d="M12 6.1v13"/></svg>', label:'Leer: cobrar en Ecuador sin fricción', pg:7, lon:128,lat:-12},
      {type:'char', lon:13,lat:-12, hk:'pagos', eye:'Capa 03', title:'Pagos', who:'GUÍA VIRTUAL · PAGOS',
       text:'Cobros directos al consumidor, sin fricción: la capa que convierte usuarios en ingresos.', cls:'pagosa'},
      {type:'door', lon:48,lat:-2, to:0, label:'Volver a Recepción'}
    ]},
    {name:'Capa 04 · Suscripciones', pan:0.3, pano:'media/sala5.webp?v=w4', p6:'media/sala5-6k.webp?v=w4', lim:{giro:1,lonA:-180,lonB:180,latT:58,latB:-58}, entryYaw:0, fx:[], screens:[], spots:[
      {type:'char', lon:0,lat:-18, hk:'susc', eye:'Capa 04', title:'Suscripciones', who:'GUÍA VIRTUAL · SUSCRIPCIONES',
       text:'Ingresos recurrentes: planes, renovaciones y reintentos que crecen mes a mes.', cls:'susca'},
      {type:'door', lon:48,lat:-2, to:0, label:'Volver a Recepción'}
    ]},
    {name:'Capa 05 · Marketing', pan:0.3, pano:'media/sala6.webp?v=w4', p6:'media/sala6-6k.webp?v=w4', lim:{giro:1,lonA:-180,lonB:180,latT:58,latB:-58}, entryYaw:0, fx:[], screens:[], spots:[
      {type:'char', lon:0,lat:-18, hk:'mkt', eye:'Capa 05', title:'Marketing', who:'GUÍA VIRTUAL · MARKETING',
       text:'Llega a las personas correctas al menor costo de adquisición, y hazlas entrar al producto.', cls:'mkta'},
      {type:'door', lon:166,lat:-2, to:0, label:'Volver a Recepción'}
    ]},
    {name:'Capa 06 · Fidelización', pano:'media/sala7f.webp?v=w4', p6:'media/sala7f-6k.webp?v=w4', flat:{lonA:-45.3617,lonB:45.3948,latT:18.4474,latB:-18.6971}, es:3, entryYaw:0, fx:[], screens:[{"ui":"cardtv","act":[[1955.604,962.702],[2140.559,962.791],[2140.497,1069.398],[1955.684,1069.473]],"rad":[0,0,0,0],"res":760,"iv":60,"glass":0.035,"lift":[0.0,0.0,0.0],"fxui":1},{"ui":"tierbox","k":0,"act":[[2209.426,946.863],[2248.031,951.339],[2248.036,1090.555],[2209.479,1094.612]],"rad":[0,0,0,0],"res":1000,"iv":80,"glass":0.0,"lift":[0.0,0.0,0.0],"fxui":1},{"ui":"tierbox","k":1,"act":[[2269.035,953.847],[2302.932,958.092],[2302.852,1084.402],[2269.029,1088.22]],"rad":[0,0,0,0],"res":1000,"iv":80,"glass":0.0,"lift":[0.0,0.0,0.0],"fxui":1},{"ui":"tierbox","k":2,"act":[[2321.562,960.629],[2352.232,964.813],[2352.217,1078.432],[2321.461,1082.062]],"rad":[0,0,0,0],"res":1000,"iv":80,"glass":0.0,"lift":[0.0,0.0,0.0],"fxui":1},{"ui":"tierbox","k":3,"act":[[2368.639,967.061],[2390.314,970.087],[2390.323,1073.721],[2368.588,1076.452]],"rad":[0,0,0,0],"res":1000,"iv":80,"glass":0.0,"lift":[0.0,0.0,0.0],"fxui":1},{"ui":"invite","act":[[1854.389,1011.904],[1886.586,1011.55],[1883.924,1075.659],[1851.706,1074.331]],"rad":[0,0,0,0],"res":640,"iv":66,"glass":0.04,"fxui":1},{"ui":"reward","act":[[2484.325,963.984],[2535.743,960.834],[2535.629,1056.519],[2484.325,1055.202]],"rad":[0,0,0,0],"res":900,"iv":66,"glass":0.04,"fxui":1},{"ui":"tabglow","act":[[2492.376,1073.968],[2532.63,1075.102],[2528.882,1078.178],[2482.923,1076.721]],"rad":[0.6,0.6,0.6,0.6],"res":90,"iv":80,"glass":0.0,"fxui":1}], spots:[
      {type:'act', act:'card', icon:'★', label:'Mi tarjeta', lon:0.009,lat:-5.231},
      {type:'act', act:'chakra', icon:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-9"/><path d="M12 12c0-4 3-6.5 7-6.5 0 4-3 6.5-7 6.5zM12 14.5c0-3-2.4-5-5.5-5 0 3 2.4 5 5.5 5z"/><path d="M7 21h10"/></svg>', label:'Chakra · tu huerto de fidelidad', lon:21.5,lat:-8.2},
      {type:'char', lon:-5.534,lat:-6.2, hk:'fidel', eye:'Capa 06', title:'Fidelización', who:'GUÍA VIRTUAL · FIDELIZACIÓN',
       text:'Que vuelvan y recomienden: recurrencia, referidos y recompra como motor de crecimiento.', cls:'fidela'},
      {type:'door', lon:-35.328,lat:-3.237, to:0, label:'Volver a Recepción'}
    ]},
    {name:'Capa 07 · Dashboards', pan:0.3, ep:0.07, pano:'media/sala8.webp?v=w4', p6:'media/sala8-6k.webp?v=w4', lim:{giro:1,lonA:-180,lonB:180,latT:58,latB:-58}, entryYaw:0, fx:[], screens:[], spots:[
      {type:'act', act:'mag', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 5.5c3-1.3 6-1.3 9 .6 3-1.9 6-1.9 9-.6v13c-3-1.3-6-1.3-9 .6-3-1.9-6-1.9-9-.6z"/><path d="M12 6.1v13"/></svg>', label:'Leer: cinco números para decidir', pg:11, lon:33,lat:-15},
      {type:'char', lon:0,lat:-16, hk:'dash', eye:'Capa 07', title:'Dashboards', who:'GUÍA VIRTUAL · DATOS',
       text:'Todo el estudio en una pantalla: métricas vivas para decidir con datos, no con corazonadas.', cls:'dasha'},
      {type:'door', lon:166,lat:-2, to:0, label:'Volver a Recepción'}
    ]}
  ];
  var cur=0;
  // cada guía lleva el signo de su capa dentro del punto de luz
  var GLIFO=(function(){ var a='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">', z='</svg>'; return {
    intro:a+'<path d="M12 3.5l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>'+z,
    infra:a+'<rect x="4" y="4.5" width="16" height="6" rx="1.5"/><rect x="4" y="13.5" width="16" height="6" rx="1.5"/><path d="M7.5 7.5h.01M7.5 16.5h.01"/>'+z,
    seg:a+'<path d="M12 3.5l7 2.6v5.2c0 4.3-2.9 7.6-7 9.2-4.1-1.6-7-4.9-7-9.2V6.1z"/><path d="M9 12l2.2 2.2L15.2 10"/>'+z,
    pagos:a+'<rect x="3.5" y="6" width="17" height="12" rx="2"/><path d="M3.5 10h17M7 14.5h3"/>'+z,
    susc:a+'<path d="M19 9a7.5 7.5 0 00-13.4-2.5M5 15a7.5 7.5 0 0013.4 2.5"/><path d="M5.5 3.5v3.3h3.3M18.5 20.5v-3.3h-3.3"/>'+z,
    mkt:a+'<path d="M4 10v4l10 4.5v-13z"/><path d="M14 9.2a3 3 0 010 5.6M7 14.8V19h3v-2.9"/>'+z,
    fidel:a+'<path d="M12 19.5s-7-4.2-7-9.3A3.9 3.9 0 0112 8a3.9 3.9 0 017 2.2c0 5.1-7 9.3-7 9.3z"/>'+z,
    dash:a+'<path d="M5 19.5V11M10 19.5V5M15 19.5v-6M20 19.5V8.5"/>'+z }; })();

  var panel=document.getElementById('panel'), pChar=document.getElementById('pChar');
  panel.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.pNext'); if(b){ goRoom(+b.getAttribute('data-go')); }});
  function esc(t){return String(t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  // ---- ruta del diagnóstico: acompaña piso a piso ----
  var HKI={infra:1,seg:2,pagos:3,susc:4,mkt:5,fidel:6,dash:7}, rutaEl=null;
  function pad2(n){ return String(n).padStart(2,'0'); }
  function planCaps(){ try{ return (EQUIPO.last&&EQUIPO.last.caps)||[]; }catch(e){ return []; } }
  function rutaUI(){
    var caps=planCaps();
    if(!rutaEl){ if(!caps.length) return; rutaEl=document.createElement('div'); rutaEl.className='ruta'; rutaEl.setAttribute('role','status'); document.body.appendChild(rutaEl);
      rutaEl.addEventListener('click',function(e){ var b=e.target.closest('[data-go]'); if(b) goRoom(+b.getAttribute('data-go')); else if(e.target.closest('[data-fin]')){ try{ EQUIPO.fin(); }catch(er){} } else if(e.target.closest('[data-ver]')){ try{ openDir(); }catch(er){} } }); }
    if(!caps.length){ rutaEl.classList.remove('on'); return; }
    var i=-1; caps.forEach(function(c,k){ if(HKI[c.k]===cur) i=k; });
    var nx=caps[i+1], h;
    if(i<0){ var c0=caps[0]; h='<button type="button" class="rT" data-ver="1"><span class="rL">Tu plan · </span>'+caps.length+(caps.length===1?' piso':' pisos')+'</button><button type="button" class="rN" data-go="'+HKI[c0.k]+'">Empezar en <span class="rL">el piso&nbsp;</span>'+pad2(HKI[c0.k])+' · '+esc(TEAM[c0.k].role)+'</button>'; }
    else if(nx){ h='<button type="button" class="rT" data-ver="1"><span class="rL">Tu plan · </span>paso '+(i+1)+' de '+caps.length+'</button><button type="button" class="rN" data-go="'+HKI[nx.k]+'">Siguiente: <span class="rL">piso&nbsp;</span>'+pad2(HKI[nx.k])+' · '+esc(TEAM[nx.k].role)+'</button>'; }
    else { h='<button type="button" class="rT" data-ver="1"><span class="rL">Tu plan · </span>último paso</button><button type="button" class="rN" data-fin="1">Cerrar mi plan</button>'; }
    rutaEl.innerHTML=h; rutaEl.classList.add('on');
  }
  function planHs(){ var caps=planCaps(), i=-1; caps.forEach(function(c,k){ if(HKI[c.k]===cur) i=k; });
    [].forEach.call(document.querySelectorAll('.hs.char'),function(el){ var t=el.querySelector('.pst'); if(i<0){ el.classList.remove('enplan'); if(t) t.remove(); return; } el.classList.add('enplan'); if(!t){ t=document.createElement('span'); t.className='pst'; el.querySelector('.lbl').appendChild(t); } t.textContent='Paso '+(i+1)+' de tu plan'; });
    try{ roomtag.textContent=ROOMS[cur].name+(i>-1&&innerWidth>820?' · Paso '+(i+1)+' de '+caps.length:''); }catch(e){} }
  window.__planHs=planHs;
  window.__rutaUI=rutaUI;
  function panelBody(s){
    var D=SPEC[s.hk], I=INFO[s.hk]||{lead:s.text,items:[]}, h='';
    var __pc=planCaps(), __pi=-1; __pc.forEach(function(c,k){ if(c.k===s.hk) __pi=k; });
    var __plan=__pi>-1?'<div class="pPlan"><b>En tu plan · paso '+(__pi+1)+' de '+__pc.length+'</b><p>'+esc(__pc[__pi].why)+'</p></div>':'';
    if(!D){ h='<p class="pLead">'+I.lead+'</p>'; }
    else {
      h+='<p class="pLead2">'+esc(D.lead)+'</p>';
      h+='<div class="pWhy">'+esc(D.why)+'</div>';
      h+='<div class="pSec">'+esc(D.sec||'Qué construimos')+'</div><div class="pCards">';
      D.items.forEach(function(it,k){ h+='<div class="pCard"><span class="pK">'+(D.sec?'':('0'+(k+1)))+'</span><div><b>'+esc(it[0])+'</b><p>'+esc(it[1])+'</p></div></div>'; });
      h+='</div><div class="pSec">Lo que ganas</div><ul class="pWins">'+D.wins.map(function(w){return '<li>'+esc(w)+'</li>';}).join('')+'</ul>';
    }
    var L=LIBS[s.hk];
    if(L){h+='<div class="pSec">Tecnología con la que construimos</div><div class="pLibs">'+L.map(function(x){return '<span>'+esc(x)+'</span>';}).join('')+'</div>';}
    h+='<div class="pCta">'; if(s.hk==='intro') h+='<button class="pBtn eqb" data-vz="design">Diagnostica tu idea con IA<span>→</span></button>'; if(TEAM[s.hk]) h+='<button class="pBtn vzb" data-vz="'+s.hk+'">Hablar con '+(s.hk==='intro'?'el anfitrión':esc(TEAM[s.hk].nm))+' por voz<span>🎙</span></button>';
    h+='<a class="pBtn pri" href="/#diagnostico">'+esc((D&&D.cta)||'Quiero esta capa en mi app')+'<span>→</span></a>';
    if(LINKS.live) h+='<a class="pBtn sec" href="'+esc(LINKS.live)+'" target="_blank" rel="noopener">Ver la plataforma en vivo<span>↗</span></a>';
    var nx=SPNEXT[s.hk], __np=(__pi>-1&&__pc[__pi+1])?HKI[__pc[__pi+1].k]:null;
    if(__np&&ROOMS[__np]) h+='<button class="pNext" data-go="'+__np+'"><span>Siguiente en tu plan</span><b>'+esc(ROOMS[__np].name.replace(/^Capa /,''))+'</b><i>→</i></button>';
    else if(nx!=null&&ROOMS[nx]) h+='<button class="pNext" data-go="'+nx+'"><span>'+(nx===0?'Volver a':'Siguiente capa')+'</span><b>'+esc(nx===0?'Recepción':ROOMS[nx].name.replace(/^Capa /,''))+'</b><i>→</i></button>';
    h+='</div>';
    if(s.hk==='intro'&&I.note) h+='<p class="pNote" style="margin-top:14px">'+I.note+'</p>';
    h=__plan+h;
    return h;
  }
  function openPanel(s){
    if(clubCard) clubCard.classList.remove('on'); try{ closeDir(); }catch(e){}
    CLUB.spec(s.hk);
    pChar.className='charspr '+s.cls; 
    try{ var __n={intro:0,infra:1,seg:2,pagos:3,susc:4,mkt:5,fidel:6,dash:7}[s.hk]||0; pChar.parentNode.style.backgroundImage='url(/media/'+(__n?('home-capa-0'+__n+'.webp?v=n8'):'home-recepcion.webp?v=1')+')'; }catch(e){}
    void pChar.offsetWidth; pChar.classList.add('go','reveal');
    try{ var fg=pChar.parentNode.querySelector('.pfig'); if(!fg){ fg=document.createElement('img'); fg.className='pfig'; fg.alt=''; fg.decoding='async'; pChar.parentNode.appendChild(fg); }
      fg.classList.remove('on'); fg.onload=function(){ fg.classList.add('on'); }; fg.src='/media/fig-'+s.hk+'.webp?v=2'; if(fg.complete&&fg.naturalWidth) fg.classList.add('on'); }catch(e){}
    var D=SPEC[s.hk]; document.getElementById('pNum').textContent=D?D.n:'';
    if(s.el){ s.el.classList.add('seen'); s.el.classList.remove('say'); }
    document.getElementById('pEye').textContent=s.eye;
    document.getElementById('pTitle').textContent=s.title;
    document.getElementById('pWho').textContent=(TEAM[s.hk]&&s.hk!=='intro')?TEAM[s.hk].nm+', tu guía virtual':s.who;
    document.getElementById('pBody').innerHTML=panelBody(s);
    panel.classList.add('open');
  }
  document.getElementById('panelX').onclick=function(){panel.classList.remove('open');};

  function mkDir(s){var a=s.lon*Math.PI/180,b=s.lat*Math.PI/180;s.dir=new THREE.Vector3(-Math.cos(b)*Math.sin(a),Math.sin(b),Math.cos(b)*Math.cos(a));s.pos=s.dir.clone().multiplyScalar(RADIUS*0.9);}
  var edgeH=document.createElement('button'); edgeH.className='edgeh'; edgeH.setAttribute('aria-label','Ir a tu guía'); document.body.appendChild(edgeH);
  edgeH.onclick=function(){ var s=edgeH.__s; if(!s)return; var d=s.dir, t=Math.atan2(d.x,d.z); while(t-yaw>Math.PI)t-=2*Math.PI; while(t-yaw<-Math.PI)t+=2*Math.PI; tyaw=t; tpitch=Math.max(-1,Math.min(1,Math.asin(d.y))); };
  function buildHotspots(room){
    [].slice.call(document.querySelectorAll('.hs')).forEach(function(e){e.remove();});
    (window.__hsT||[]).forEach(function(t){clearTimeout(t);clearInterval(t);}); window.__hsT=[]; edgeH.__s=null; edgeH.classList.remove('on');
    room.spots.forEach(function(s){
      mkDir(s);
      var el=document.createElement('div');
      if(s.type==='door'){ el.className='hs door';
        el.innerHTML='<div class="mk"><span class="ic">↗</span></div><div class="lbl">'+s.label+'</div>';
        el.addEventListener('click',function(ev){ev.stopPropagation(); goRoom(s.to);}); }
      else if(s.type==='act'){ el.className='hs act'+(s.act==='mag'?' rev':'');
        el.innerHTML='<div class="mk"><span class="ic">'+s.icon+'</span></div><div class="lbl">'+s.label+'</div>';
        el.addEventListener('click',function(ev){ev.stopPropagation(); if(s.act==='share')clubShare(); else if(s.act==='card')clubLounge(); else if(s.act==='mag'){ if(s.pg) window.__revp=s.pg; openMag(); } else if(s.act==='play')openPlay(); else if(s.act==='chakra')openChakra(); else if(s.act==='equipo')openEquipo();}); }
      else if(s.type==='dir'){ el.className='hs dir';
        el.innerHTML='<div class="mk"><span class="ic">⊞</span></div><div class="lbl">'+s.label+'</div>';
        el.addEventListener('click',function(ev){ev.stopPropagation(); openDir();}); }
      else { var seen=CLUB.st.spec.indexOf(s.hk)>-1; el.className='hs char'+(seen?' seen':'');
        var who=s.hk==='intro'?'¡Hola! Soy tu anfitrión':'Hola, soy tu guía virtual de '+s.title;
        el.innerHTML='<div class="cav"><span class="gl" aria-hidden="true">'+(GLIFO[s.hk]||GLIFO.intro)+'</span><span class="ck">✓</span></div>'+
          '<div class="lbl">'+(s.hk==='intro'?'Anfitrión':s.title)+'</div>'+
          '<div class="bub"><b>'+who+'</b><span class="b1">'+(s.hk==='intro'?'Tócame y te cuento cómo funciona el estudio':'Tócame y te cuento esta capa<em>+50 pts</em>')+'</span><span class="b2">Toca para ver de nuevo</span></div>';
        el.addEventListener('click',function(ev){ev.stopPropagation(); openPanel(s);});
        edgeH.innerHTML='<span class="eav" style="background-image:url(media/av-'+s.hk+'.webp)"></span><span class="etx"><b>Tu guía</b><i>está por aquí</i></span><span class="earr">→</span>'; edgeH.__s=s;
        (function(el,s){ var T=window.__hsT; T.push(setTimeout(function(){ if(s.hk==='intro'&&!el.classList.contains('seen')){ el.classList.add('say'); T.push(setTimeout(function(){el.classList.remove('say');},7000)); } },2600));
          T.push(setInterval(function(){ if(el.classList.contains('seen')||panel.classList.contains('open'))return; el.classList.remove('nudge'); void el.offsetWidth; el.classList.add('nudge','say'); T.push(setTimeout(function(){el.classList.remove('say');},5000)); },22000)); })(el,s); }
      el.setAttribute('role','button'); el.tabIndex=0; el.setAttribute('aria-label',s.label||(s.hk==='intro'?'Anfitrión':'Guía de '+(s.title||'')));
      el.addEventListener('keydown',function(ev){ if(ev.key==='Enter'||ev.key===' '){ ev.preventDefault(); el.click(); } });
      document.body.appendChild(el); s.el=el;
    });
  }

  var clubCard=document.createElement('div'); clubCard.className='clubcard'; clubCard.id='clubCard'; clubCard.setAttribute('role','dialog'); clubCard.setAttribute('aria-modal','true'); clubCard.setAttribute('aria-label','Mi tarjeta del Club'); clubCard.inert=true; document.body.appendChild(clubCard);
  var __ccOn=false; try{ new MutationObserver(function(){ var on=clubCard.classList.contains('on'); if(__ccOn&&!on) setTimeout(function(){ try{ if(!document.activeElement||document.activeElement===document.body){ var d=document.querySelector('.clubpill'); if(d) d.focus({preventScroll:true}); } }catch(e){} },120); __ccOn=on; clubCard.inert=!on; var hay=on||!!document.querySelector('#panel.open,#dirPanel.open,#mag.open,#ply.open,#chakra.open'); document.querySelectorAll('.salto,#c,.badge,#navHub,.clubpill,.edgeh,.hs,#roomtag').forEach(function(x){ x.inert=hay; }); }).observe(clubCard,{attributes:true,attributeFilter:['class']}); }catch(e){ clubCard.inert=false; }
  function clubLounge(){
    if(clubCard&&clubCard.classList.contains('on')){ clubCard.classList.remove('on'); return; } if(!clubCard){ clubCard=document.createElement('div'); clubCard.className='clubcard'; document.body.appendChild(clubCard); }
    var p=CLUB.pts(), ti=CLUB.tier(), T=CLUB.TIERS[ti], nx=CLUB.TIERS[ti+1], miss=CLUB.missing().filter(function(i){return i!==6;});
    var h='<div class="cbar"><span class="ce">Club CruzTRD · tu tarjeta</span><button class="cx" aria-label="Cerrar">✕</button></div>'+
      '<div class="ctj" style="--niv:'+T[2]+'"><span class="ctm">Cruz<b>TRD</b></span><span class="ctk">Club</span><i class="ctc" aria-hidden="true"></i><span class="ctd">CTRD · '+('000'+((CLUB.st.v||1)*37%10000)).slice(-4)+' · '+('000'+(p%10000)).slice(-4)+'</span><span class="ctn">'+T[0]+'</span><b class="ctp">'+p.toLocaleString('es')+' <small>pts</small></b><span class="ctv">Visita nº '+(CLUB.st.v||1)+'</span></div>';
    if(ti>=1){ h+='<div class="cr"><span>'+(T[0]==='Plata'?'Tu siguiente paso':'Recompensa desbloqueada')+'</span><b>'+CLUB.REWARD[T[0]]+'</b><a class="cbtn" href="'+(T[0]!=='Plata'?'https://wa.me/593988011913?text='+encodeURIComponent('Hola CruzTRD, llegué a nivel '+T[0]+' en el Estudio 360° y quiero mi sesión 1:1.'):'/#diagnostico')+'"'+(T[0]!=='Plata'?' target="_blank" rel="noopener"':' target="_top"')+'>'+(T[0]==='Plata'?'Diagnosticar':'Reclamar')+'</a></div>'; }
    if(nx){ h+='<p class="cp">Te faltan <b>'+(nx[1]-p)+' pts</b> para <b style="color:'+nx[2]+'">'+nx[0]+'</b>'+(nx[0]==='Oro'?' · '+CLUB.REWARD.Oro:'')+'.</p>'; } else { h+='<p class="cp">Llegaste al nivel más alto del recorrido.</p>'; }
    if(miss.length){ h+='<div class="cm"><span>Gana +100 en cada capa que te falta:</span><div>'+miss.map(function(i){return '<button data-go="'+i+'">'+ROOMS[i].name.replace(/^Capa (\d+) · /,'$1 · ')+'</button>';}).join('')+'</div></div>'; }
    h+='<p class="cn">Así se siente un programa de lealtad bien hecho: te reconoce, te premia y te da un motivo para volver. Esto construimos para tus clientes.</p>';
    clubCard.innerHTML=h; clubCard.classList.add('on'); var __pv=document.activeElement;
    clubCard.querySelector('.cx').onclick=function(){clubCard.classList.remove('on'); setTimeout(function(){ try{ var d=(__pv&&__pv!==document.body&&document.contains(__pv))?__pv:document.querySelector('.clubpill'); if(d) d.focus({preventScroll:true}); }catch(e){} },80); };
    setTimeout(function(){ try{ clubCard.querySelector('.cx').focus({preventScroll:true}); }catch(e){} },80);
    [].slice.call(clubCard.querySelectorAll('.cm button')).forEach(function(b){b.onclick=function(){clubCard.classList.remove('on'); goRoom(+b.getAttribute('data-go'));};});
  }
  function clubShare(){
    var url=location.origin+location.pathname+'?ref=club', ok=function(){CLUB.share(); CLUB.toast('Enlace copiado','Compártelo: '+url.replace(/^https?:\/\//,''));};
    try{ navigator.clipboard.writeText(url).then(ok,function(){CLUB.share(); CLUB.toast('Tu enlace',url.replace(/^https?:\/\//,''));}); }catch(e){ CLUB.share(); CLUB.toast('Tu enlace',url.replace(/^https?:\/\//,'')); }
  }
  var fadeov=document.getElementById('fadeov'), roomtag=document.getElementById('roomtag');
  // ===== ascensor =====
  var elev=document.getElementById('elev'),
      elevNum=document.getElementById('elevNum'),
      elevArrow=document.getElementById('elevArrow'),
      elevName=document.getElementById('elevName'),
      elevFill=document.getElementById('elevFill');
  function floorLabel(i){return i===0?'L':(i<10?'0'+i:''+i);}
  function floorName(i){return i===0?'Recepción':ROOMS[i].name.replace(/^Capa \d+ · /,'');}
  // ding suave de ascensor (dos tonos) vía WebAudio
  var actx=null;
  function ding(){
    try{
      actx=actx||new (window.AudioContext||window.webkitAudioContext)();
      if(actx.state==='suspended')actx.resume();
      var t=actx.currentTime;
      [988,1319].forEach(function(f,i){
        var o=actx.createOscillator(),g=actx.createGain();
        o.type='sine';o.frequency.value=f;o.connect(g);g.connect(actx.destination);
        var st=t+i*0.13;
        g.gain.setValueAtTime(0,st);
        g.gain.linearRampToValueAtTime(0.16,st+0.012);
        g.gain.exponentialRampToValueAtTime(0.0008,st+0.5);
        o.start(st);o.stop(st+0.55);
      });
    }catch(e){}
  }
  var moving=false, elevCabin=document.getElementById('elevCabin');
  function wait(ms){return new Promise(function(r){setTimeout(r,ms);});}
  // vista de entrada: en vertical se centra en el especialista; en horizontal solo se corrige si quedaría fuera de cuadro
  function entryYawFor(R){ var e=R.entryYaw||0, c=null; (R.spots||[]).forEach(function(s){ if(!c&&s.type==='char') c=s; }); if(!c) return e;
    var cy=-c.lon*Math.PI/180, d=cy-e; while(d>Math.PI)d-=2*Math.PI; while(d<-Math.PI)d+=2*Math.PI;
    var asp=innerWidth/innerHeight, half=Math.atan(Math.tan((camera.fov||60)*Math.PI/360)*asp);
    if(asp<1) return e+d; if(Math.abs(d)>half*0.62) return e+d-(d>0?1:-1)*half*0.5; return e; }
  function goRoom(idx){
    if(moving)return;
    if(idx===cur){panel.classList.remove('open');return;}
    runElevator(cur,idx);
  }
  var RM=false; try{ RM=matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){}
  addEventListener('popstate',function(){ var c=0; try{ c=parseInt(new URLSearchParams(location.search).get('capa')||'0',10)||0; }catch(e){} if(moving){ window.__czPend=true; return; } if(c>=0&&c<=7&&c!==cur){ window.__czPop=true; goRoom(c); } });
  async function runElevator(from,to){
    moving=true;
    panel.classList.remove('open');
    var up=to>=from, f, k;
    // 1 · aparece el ascensor; las puertas cierran sobre la sala actual
    elev.classList.add('on');
    elevArrow.textContent=up?'▲':'▼';
    elevNum.textContent=floorLabel(from);
    elevName.textContent=''; elevFill.style.width='0%';
    void elev.offsetWidth;
    elev.classList.add('shut');
    await wait(640);
    // 2 · con las puertas cerradas se carga el piso destino y corre el indicador
    elev.classList.add('riding');
    var __okP=true, __pEnd=Promise.resolve(); setFlat(ROOMS[to]); if(!ROOMS[to].flat) __pEnd=new Promise(function(res){ setPano(ROOMS[to].pano,function(ok){ __okP=ok!==false; res(); }); });
    window.__ES=ROOMS[to].es||1; buildHotspots(ROOMS[to]); buildWall(ROOMS[to]); cur=to; roomtag.textContent=ROOMS[to].name; window.__clubArr=to; try{ rutaUI(); planHs(); }catch(e){}
    var __empujo=false; try{ if(!window.__czPop){ var __u=to?('?capa='+to):location.pathname; if(history.state&&history.state.ov) history.replaceState({r:to},'',__u); else { history.pushState({r:to},'',__u); __empujo=true; } } }catch(e){} window.__czPop=false;
    var seq=[];
    if(up){for(f=from;f<=to;f++)seq.push(f);} else {for(f=from;f>=to;f--)seq.push(f);}
    var d=Math.max(1,seq.length-1), stepMs=RM?0:Math.max(90,Math.min(180,640/d));
    for(k=0;k<seq.length;k++){
      elevNum.textContent=floorLabel(seq[k]); try{ elevName.textContent=floorName(seq[k]); }catch(e){}
      elevFill.style.width=Math.round((k/d)*100)+'%';
      if(k<seq.length-1&&stepMs)await wait(stepMs);
    }
    await Promise.race([__pEnd,wait(9000)]);
    if(!__okP){ // la sala no cargó: volvemos al piso anterior, sin puntos, y lo decimos
      setFlat(ROOMS[from]); if(!ROOMS[from].flat) setPano(ROOMS[from].pano); window.__ES=ROOMS[from].es||1; buildHotspots(ROOMS[from]); buildWall(ROOMS[from]); cur=from; roomtag.textContent=ROOMS[from].name; window.__clubArr=from;
      try{ if(__empujo) history.back(); else history.replaceState({r:from},'',from?('?capa='+from):location.pathname); }catch(e){}
      var __dest=floorName(to); to=from; setTimeout(function(){ try{ CLUB.toast('No pudimos cargar '+__dest,'Revisa tu conexión y vuelve a llamar al ascensor'); }catch(e){} },900); }
    elevName.textContent=floorName(to)+(function(){ var c=planCaps(), k=-1; c.forEach(function(x,j){ if(HKI[x.k]===to) k=j; }); return k>-1?' · paso '+(k+1)+' de '+c.length+' de tu plan':''; })(); elevFill.style.width='100%';
    if(!RM&&__okP) ding();
    await wait(RM?120:380);
    elev.classList.remove('riding');
    tyaw=yaw=entryYawFor(ROOMS[to]); tpitch=pitch=(innerWidth<innerHeight&&!ROOMS[to].flat)?-0.08:(ROOMS[to].ep||0); window.__czTocado=false; // prepara la vista + re-dispara el FOV de entrada
    if(gyro.on)gyro.have=false;                     // recalibra el giroscopio a la nueva sala
    t0=performance.now();
    elev.classList.remove('shut');                  // puertas abren → sala destino
    await wait(640);
    elev.classList.remove('on'); moving=false;
    if(window.__czPend){ window.__czPend=false; var __c=0; try{ __c=parseInt(new URLSearchParams(location.search).get('capa')||'0',10)||0; }catch(e){} if(__c>=0&&__c<=7&&__c!==cur){ window.__czPop=true; setTimeout(function(){ goRoom(__c); },60); } }
    if(__okP) CLUB.room(to);
  }
  addEventListener('keydown',function(e){ if(e.key!=='Escape') return;
    var bv=document.getElementById('bienv');
    if(clubCard&&clubCard.classList.contains('on')){ clubCard.classList.remove('on'); return; }
    if(dirPanel.classList.contains('open')){ closeDir(); return; }
    if(panel.classList.contains('open')){ panel.classList.remove('open'); return; }
    if(bv&&!bv.hidden){ var g=document.getElementById('bienvGo'); if(g) g.click(); } });
  addEventListener('pointerdown',function(e){ if(clubCard&&clubCard.classList.contains('on')&&!clubCard.contains(e.target)&&!(e.target.closest&&e.target.closest('.clubpill,.hs'))) clubCard.classList.remove('on'); },true);
  // tocar la sala (sin arrastrar) cierra el panel abierto; al abrir, el foco va al botón de cierre
  (function(){ var dx=0,dy=0, cz=document.getElementById('c'); cz.addEventListener('pointerdown',function(e){ dx=e.clientX; dy=e.clientY; }); cz.addEventListener('pointerup',function(e){ if(panel.classList.contains('open')&&Math.abs(e.clientX-dx)+Math.abs(e.clientY-dy)<8) panel.classList.remove('open'); }); })();
  document.addEventListener('click',function(e){ if(!panel.classList.contains('open')) return; var t=e.target; if(t===document.body||t===document.documentElement||(t.id==='c')) panel.classList.remove('open'); });
  // Atrás del navegador cierra lo que esté a pantalla completa (revista, Play, Chakra)
  (function(){ var ov=null, t=0, ids=['mag','ply','chakra','dirPanel','panel','clubCard'], cierra={clubCard:function(){ clubCard.classList.remove('on'); }, mag:function(){ closeMag(); }, ply:function(){ closePlay(); }, chakra:function(){ CHAKRA.close(); }, dirPanel:function(){ closeDir(); }, panel:function(){ panel.classList.remove('open'); }};
    function abierto(){ for(var i=0;i<ids.length;i++){ var el=document.getElementById(ids[i]); if(el&&(el.classList.contains('open')||(ids[i]==='clubCard'&&el.classList.contains('on')))) return ids[i]; } return null; }
    function conciliar(){ t=0; var c=abierto(); try{
      if(c&&c!==ov){ ov=c; if(history.state&&history.state.ov) history.replaceState({ov:c},''); else history.pushState({ov:c},''); }
      else if(!c&&ov){ ov=null; if(history.state&&history.state.ov&&!moving) history.back(); } }catch(e){} }
    addEventListener('popstate',function(){ if(ov){ var id=ov; ov=null; try{ cierra[id](); }catch(e){} } },true);
    ids.forEach(function(id){ var el=document.getElementById(id); if(!el) return; try{ new MutationObserver(function(){ if(!t) t=setTimeout(conciliar,0); }).observe(el,{attributes:true,attributeFilter:['class']}); }catch(e){} }); })();
  document.addEventListener('click',function(e){ var t=e.target&&e.target.closest&&e.target.closest('.hs,#navHub,.clubpill,.edgeh'); if(t) window.__czUlt=t; },true);
  // diálogos: cerrados no reciben foco; al abrir, el foco entra y al cerrar vuelve a donde estaba
  (function(){ [['panel','Capa del estudio'],['dirPanel','Directorio de pisos'],['mag','Revista CruzTRD'],['ply','CruzTRD Play, demo'],['chakra','Chakra, demo']].forEach(function(d){ var el=document.getElementById(d[0]); if(!el) return; var prev=null;
    if(!el.getAttribute('role')) el.setAttribute('role','dialog'); if(!el.getAttribute('aria-label')) el.setAttribute('aria-label',d[1]);
    el.setAttribute('aria-modal','true');
    function sync(){ var on=el.classList.contains('open'); if(on===!el.inert) return; if(on){ var ae=document.activeElement; if(ae&&ae!==document.body&&!el.contains(ae)) prev=ae; else if(window.__czUlt) prev=window.__czUlt; } el.inert=!on; try{ var hay=!!document.querySelector('#panel.open,#dirPanel.open,#mag.open,#ply.open,#chakra.open,#clubCard.on'); document.querySelectorAll('.salto,#c,.badge,#navHub,.clubpill,.edgeh,.hs,#roomtag').forEach(function(x){ x.inert=hay; }); }catch(e){}
      if(on){ var enfoca=function(){ try{ if(el.contains(document.activeElement)) return; var b=el.querySelector('button,[href],[tabindex="0"]'); if(b) b.focus({preventScroll:true}); }catch(e){} }; setTimeout(enfoca,90); setTimeout(enfoca,460); }
      else if(prev&&prev.focus&&document.contains(prev)){ try{ prev.focus({preventScroll:true}); }catch(e){} prev=null; } }
    el.inert=!el.classList.contains('open'); try{ new MutationObserver(sync).observe(el,{attributes:true,attributeFilter:['class']}); }catch(e){ el.inert=false; } }); })();
  // directorio (hub): lista las capas y salta a cada una
  var dirPanel=document.getElementById('dirPanel'), dirList=document.getElementById('dirList'), dirBack=document.getElementById('dirBack');
  function closeDir(){dirPanel.classList.remove('open');dirBack.classList.remove('open');}
  function openDir(){
    panel.classList.remove('open'); if(clubCard) clubCard.classList.remove('on');
    var vis=CLUB.st.rooms, n=0, html='', plan=[];
    try{ if(EQUIPO.last&&EQUIPO.last.caps) plan=EQUIPO.last.caps.map(function(c){ return c.k; }); }catch(e){}
    for(var i=1;i<ROOMS.length;i++){
      var R=ROOMS[i], ch=null; R.spots.forEach(function(sp){ if(sp.type==='char')ch=sp; });
      var hk=ch?ch.hk:'', nm=R.name.replace(/^Capa \d+ · /,''), here=i===cur, seen=vis.indexOf(i)>-1; if(seen)n++;
      var pl=plan.indexOf(hk), enPlan=pl>-1;
      var st=here?'<span class="dst here">Estás aquí'+(enPlan?' · paso '+(pl+1):'')+'</span>':(enPlan?'<span class="dst plan">En tu plan · paso '+(pl+1)+'</span>':(seen?'<span class="dst ok">Visitada ✓</span>':''));
      html+='<button class="dcard'+(here?' cur':'')+(seen?' seen':'')+(enPlan?' plan':'')+(plan.length&&!enPlan?' fuera':'')+'" data-go="'+i+'" style="--d:'+(i*45)+'ms">'+
        '<span class="dbig">'+(i<10?'0'+i:i)+'</span>'+
        '<span class="dav" style="background-image:url(media/av-'+hk+'.webp)"></span>'+
        '<span class="dtx"><span class="dno">Piso '+(i<10?'0'+i:i)+'</span><b>'+nm+'</b><em>'+(SPTAG[hk]||'')+'</em></span>'+st+'</button>';
    }
    var pr=Math.round(n/7*100);
    document.getElementById('dirProg').innerHTML='<div class="dpr"><b>'+n+'<i>/7</i></b><span>capas recorridas</span></div><div class="dbar"><i style="width:'+pr+'%"></i></div>'+(plan.length?'<p class="dplan">Tu idea necesita '+plan.length+' de las 7 capas. Están marcadas en el orden sugerido.</p>':'');
    dirList.innerHTML='<button class="dlobby'+(cur===0?' cur':'')+'" data-go="0" style="--d:0ms"><span class="dav" style="background-image:url(media/av-intro.webp)"></span><span><b>Recepción</b><em>'+(cur===0?'Estás aquí':'Volver a la recepción')+'</em></span><span class="darr">→</span></button>'+html;
    [].slice.call(dirList.querySelectorAll('[data-go]')).forEach(function(b){b.onclick=function(){var g=+b.getAttribute('data-go'); closeDir(); if(g!==cur)goRoom(g);};});
    dirBack.classList.add('open'); dirPanel.classList.add('open');
  }

  // ===== Revista CruzTRD: revistero de la sala de espera =====
  var magEl=document.getElementById('mag'), magBack=document.getElementById('magBack'), magView=document.getElementById('magView');
  
  
  function magArt(i){
    var a=MAG[i], h='<article class="mpage"><div class="mtop"><button class="mback" data-idx="1">← Volver a la revista</button><span class="mpg">'+(i+1)+' / '+MAG.length+'</span></div>';
    h+='<div class="mk">'+a.kick+'</div><h1>'+a.title+'</h1><p class="mdeck">'+a.deck+'</p><div class="mby">Revista CruzTRD · Edición 01 · Lectura de '+a.min+' min</div><div class="mbody">';
    a.body.forEach(function(pp,k){ h+='<p'+(k===0&&pp.charAt(0)!=='<'?' class="drop"':'')+'>'+pp+'</p>'; if(k===1) h+='<blockquote>'+a.quote+'</blockquote>'; });
    h+='</div><div class="mcta">'+(a.room?'<button class="mgo" data-room="'+a.room+'">Ver esta capa en el estudio <span>→</span></button>':'<button class="mgo" data-room="1">Empezar el recorrido <span>→</span></button>')+
       '<a class="mlink" href="/#diagnostico">Quiero esto en mi app</a></div>';
    h+='<div class="mnav">'+(i>0?'<button data-art="'+(i-1)+'">← '+MAG[i-1].title+'</button>':'<span></span>')+(i<MAG.length-1?'<button data-art="'+(i+1)+'">'+MAG[i+1].title+' →</button>':'<button data-idx="1">Volver a la revista →</button>')+'</div></article>';
    window.__revp=3+i*2; magView.innerHTML=h; magView.className='magview vart'; magEl.scrollTop=0;
    setTimeout(function(){ CLUB.read(a.id); },1200);
  }

  var HD=null, HCRED={};

  // ===== Revista CruzTRD maquetada como revista: 16 páginas que se pasan como las demás =====
  var RVN=16, RVROOMN=['','Infraestructura','Seguridad','Pagos','Suscripciones','Marketing','Fidelización','Dashboards'];
  function rvStack(big){ var h='', cx=130, nm=['Infraestructura','Seguridad','Pagos','Suscripciones','Marketing','Fidelización','Dashboards'];
    for(var i=0;i<7;i++){ var y=196-24*i, o=(0.25+i*0.11).toFixed(2);
      h+='<path class="pside" d="M'+(cx-110)+' '+y+'L'+cx+' '+(y+34)+'L'+(cx+110)+' '+y+'v8L'+cx+' '+(y+42)+'L'+(cx-110)+' '+(y+8)+'z"/>'+
         '<path class="ptop" style="fill-opacity:'+o+'" d="M'+(cx-110)+' '+y+'L'+cx+' '+(y-34)+'L'+(cx+110)+' '+y+'L'+cx+' '+(y+34)+'z"/>';
      if(!big) h+='<line class="pl" x1="'+(cx+112)+'" y1="'+y+'" x2="258" y2="'+y+'"/><text class="lb" x="264" y="'+(y+4.5)+'"><tspan class="ac">0'+(i+1)+'</tspan> '+nm[i]+'</text>'; }
    return '<svg class="ill" viewBox="0 0 '+(big?262:400)+' 250" aria-hidden="true">'+h+'</svg>'; }
  var RVILL=[
    '<svg class="ill" viewBox="0 0 400 232" aria-hidden="true"><text x="0" y="14" class="sl">CON INTERMEDIARIO</text><line x1="46" y1="60" x2="156" y2="60" class="dsh"/><line x1="244" y1="60" x2="354" y2="60" class="dsh"/><circle cx="30" cy="60" r="16" class="n2"/><rect x="156" y="42" width="88" height="36" rx="6" class="n2"/><circle cx="370" cy="60" r="16" class="n2"/><text x="200" y="64.5" class="nt" text-anchor="middle">Intermediario</text><text x="30" y="98" class="lb" text-anchor="middle">Marca</text><text x="370" y="98" class="lb" text-anchor="middle">Cliente</text><text x="200" y="98" class="lb mu" text-anchor="middle">se queda con margen y datos</text><text x="0" y="142" class="sl ac">DIRECTO</text><line x1="48" y1="186" x2="344" y2="186" class="sol"/><path d="M338 177l13 9-13 9" class="sol"/><circle cx="30" cy="186" r="16" class="n1"/><circle cx="370" cy="186" r="16" class="n1"/><text x="196" y="174" class="lb ac" text-anchor="middle">margen, datos y relación</text><text x="30" y="226" class="lb" text-anchor="middle">Marca</text><text x="370" y="226" class="lb" text-anchor="middle">Cliente</text></svg>',
    null,
    (function(){ var L=[['Pocos','pasos'],['Medios','locales'],['Token, no','tarjeta'],['Todo','automático']], h='<line x1="40" y1="80" x2="360" y2="80" class="dsh"/><line x1="40" y1="80" x2="360" y2="80" class="sol prog"/>';
      L.forEach(function(l,i){ var x=40+i*106.67; h+='<circle cx="'+x+'" cy="80" r="22" class="'+(i===3?'n1':'n3')+'"/><text x="'+x+'" y="87" class="big" text-anchor="middle">'+(i+1)+'</text><text x="'+x+'" y="134" class="lb" text-anchor="middle">'+l[0]+'</text><text x="'+x+'" y="152" class="lb" text-anchor="middle">'+l[1]+'</text>'; });
      h+='<rect x="96" y="182" width="208" height="40" rx="20" class="btn"/><text x="200" y="207" class="bt" text-anchor="middle">Pagar con un toque</text>';
      return '<svg class="ill" viewBox="0 0 400 232" aria-hidden="true">'+h+'</svg>'; })(),
    '<svg class="ill" viewBox="0 0 400 240" aria-hidden="true"><circle cx="200" cy="120" r="78" class="ring"/><path d="M262 72l14 4-6 13M138 168l-14-4 6-13" class="sol"/><circle cx="200" cy="42" r="9" class="n1"/><circle cx="278" cy="120" r="9" class="n1"/><circle cx="200" cy="198" r="9" class="n1"/><circle cx="122" cy="120" r="9" class="n1"/><text x="200" y="22" class="lb" text-anchor="middle">Reconocer</text><text x="294" y="124.5" class="lb">Premiar</text><text x="200" y="230" class="lb" text-anchor="middle">Referir</text><text x="106" y="124.5" class="lb" text-anchor="end">Escuchar</text><text x="200" y="116" class="serif" text-anchor="middle">El cliente</text><text x="200" y="138" class="serif" text-anchor="middle">que vuelve</text></svg>',
    '<svg class="ill" viewBox="0 0 400 232" aria-hidden="true"><line x1="0" y1="200" x2="170" y2="200" class="ax"/><rect x="22" y="146" width="52" height="54" class="b2"/><rect x="100" y="34" width="52" height="166" class="b1"/><text x="48" y="222" class="lb" text-anchor="middle">CAC</text><text x="126" y="222" class="lb" text-anchor="middle">LTV</text><text x="126" y="24" class="sl ac" text-anchor="middle">MUCHO MAYOR</text>'+
      ['CAC · costo por cliente','Conversión','Retención','LTV · valor de vida','MRR · ingreso recurrente'].map(function(t,i){ var y=46+i*36; return '<circle cx="214" cy="'+(y-4.5)+'" r="5" class="n1"/><text x="228" y="'+y+'" class="lb">'+t+'</text><line x1="228" y1="'+(y+11)+'" x2="'+(300+((i*37)%70))+'" y2="'+(y+11)+'" class="spk"/>'; }).join('')+'</svg>'];
  RVILL[1]=rvStack(false);
  function rvHead(l,r){ return '<div class="rvrh"><span>'+l+'</span><span>'+r+'</span></div>'; }
  function rvFoot(p,t){ return '<div class="rvf '+(p%2?'l':'r')+'"><b>'+(p+1)+'</b><span>'+(t||'Revista CruzTRD · Edición 01 · Octubre 2026')+'</span></div>'; }
  function rvPage(p){
    var R=(CLUB.st.read||[]);
    if(p===0) return '<div class="rv cov"><div class="cvm"><span class="cvr">Revista</span><span class="cvn">Cruz<b>TRD</b></span></div><div class="cvmeta"><span>Edición 01</span><span>Octubre 2026</span><span>Gratis</span></div>'+
      '<div class="cvd">D2C</div><div class="cvst">'+rvStack(true)+'</div><div class="cvk">Portada · Editorial</div><h1 class="cvh">Vender directo ya no es opcional</h1>'+
      '<ul class="cvl"><li><b>Guía</b> Las 7 capas de una app D2C</li><li><b>Pagos</b> Cobrar en Ecuador sin fricción</li><li><b>Fidelización</b> El cliente que vuelve</li><li><b>Datos</b> Cinco números para decidir</li></ul>'+
      '<div class="cvf"><span>Para visitantes del estudio 360°</span><i class="cvbar"></i></div></div>';
    if(p===1) return '<div class="rv pap">'+rvHead('Revista CruzTRD','Edición 01')+'<div class="rvk">Carta del estudio</div><h2 class="rvt sm">Bienvenido a la sala de espera</h2>'+
      '<div class="ltr"><img class="ltrav" src="media/av-intro.webp" alt=""><div class="ltrt"><p class="dc">Esta revista nació en el mismo lugar donde la estás leyendo: la recepción de un estudio que construye apps para marcas que quieren vender directo.</p>'+
      '<p>Cada piso del recorrido es una capa de esas apps, desde la infraestructura hasta los dashboards, y en cada uno te espera un guía virtual que te la explica.</p>'+
      '<p>Aquí está la versión para leer con calma: qué hace cada capa, en qué orden conviene construirla y qué números mirar para saber si vas bien. Son textos cortos, escritos para quien tiene un negocio, no para quien programa.</p>'+
      '<p>Lee lo que te interese, sube al piso que quieras y, si algo encaja con tu marca, conversemos.</p><p class="sig">Estudio CruzTRD</p></div></div>'+
      '<div class="colo"><b>Revista CruzTRD</b><span>Edición 01 · Octubre 2026</span><span>Publicación del Estudio CruzTRD · Ecuador</span><span>Distribución gratuita dentro del recorrido 360°</span><span>Cada artículo que leas suma 25 puntos al Club CruzTRD</span></div>'+rvFoot(p)+'</div>';
    if(p===2){ var h='<div class="rv pap">'+rvHead('Sumario','Edición 01')+'<div class="smh">Sumario</div><div class="sml">';
      MAG.forEach(function(a,i){ var rd=R.indexOf(a.id)>-1; h+='<button class="smi" data-go="'+(3+i*2)+'"><span class="smn">'+String(4+i*2).padStart(2,'0')+'</span><span class="smt"><i>'+a.kick+'</i><b>'+a.title+'</b><em>'+a.deck+'</em></span><span class="smr">'+(rd?'✓ Leído':a.min+' min')+'</span></button>'; });
      h+='<button class="smi" data-go="13"><span class="smn">14</span><span class="smt"><i>Club</i><b>Tu progreso en el Club CruzTRD</b></span><span class="smr">'+R.length+'/'+MAG.length+'</span></button></div>'+
         '<div class="smpts"><span>★</span>Cada artículo que leas suma <b>+25 pts</b>. Toca un título para ir a su página.</div>'+rvFoot(p)+'</div>'; return h; }
    if(p>=3&&p<=12){ var ai=(p-3)>>1, a=MAG[ai];
      if(p%2) return '<div class="rv op t'+ai+'">'+rvHead('Revista CruzTRD',a.kick)+'<div class="opn">0'+(ai+1)+'</div><div class="rvk">'+a.kick+'</div><h2 class="rvt">'+a.title+'</h2><p class="rvd">'+a.deck+'</p>'+
        '<div class="opil">'+RVILL[ai]+'</div><div class="opm"><span>Lectura de '+a.min+' min</span><span>'+(a.kick.indexOf('Capa')===0?a.kick:(ai===0?'Antes de subir':'Guía del recorrido'))+'</span></div>'+rvFoot(p)+'</div>';
      var b='<div class="rv pap bd">'+rvHead(a.title,a.kick)+'<div class="cols">';
      a.body.forEach(function(pp,k){ b+='<p'+(k===0&&pp.charAt(0)!=='<'?' class="dc"':'')+'>'+pp+(k===a.body.length-1?' <i class="end"></i>':'')+'</p>'; if(k===1) b+='<blockquote>'+a.quote+'</blockquote>'; });
      b+='</div><div class="bdcta"><span>'+(R.indexOf(a.id)>-1?'✓ Leído · +25 pts':'+25 pts al Club')+'</span><button class="rvgo" data-room="'+(a.room||1)+'">'+(a.kick.indexOf('Capa')===0?'Ver la capa 0'+a.room+' en el estudio':'Empezar el recorrido')+' →</button></div>'+rvFoot(p)+'</div>'; return b; }
    if(p===13){ var pts=CLUB.pts(), ti=CLUB.tier(), T=CLUB.TIERS[ti], nx=CLUB.TIERS[ti+1];
      return '<div class="rv pap">'+rvHead('Club CruzTRD','Edición 01')+'<div class="rvk">Club CruzTRD</div><h2 class="rvt sm">Leer también suma</h2>'+
        '<div class="clc"><span class="clt">Tu nivel</span><b style="color:'+T[2]+'">'+T[0]+'</b><span class="clp">'+pts+' pts</span><span class="cln">'+(nx?'Te faltan '+(nx[1]-pts)+' pts para '+nx[0]:'Nivel máximo alcanzado')+'</span></div>'+
        '<div class="cll"><div class="clh">Lecturas de esta edición · '+R.length+'/'+MAG.length+'</div>'+MAG.map(function(a,i){ var rd=R.indexOf(a.id)>-1; return '<button class="clr'+(rd?' rd':'')+'" data-go="'+(3+i*2)+'"><i>'+(rd?'✓':'')+'</i><span>'+a.title+'</span><em>'+(rd?'+25':'pág. '+(4+i*2))+'</em></button>'; }).join('')+'</div>'+
        '<div class="clw"><div class="clh">Cómo sumar puntos</div><div class="clg"><span><b>+100</b>por cada piso que visitas</span><span><b>+50</b>por cada guía que conoces</span><span><b>+25</b>por cada artículo que lees</span><span><b>+100</b>por compartir el recorrido</span></div></div>'+rvFoot(p)+'</div>'; }
    if(p===14) return '<div class="rv ad">'+rvHead('Estudio CruzTRD','Publicidad de la casa')+'<div class="adk">Estudio CruzTRD</div><h2 class="adh">Tu marca.<br>Tu canal.<br><em>Tu cliente.</em></h2><p class="add">Diseñamos y construimos las siete capas de tu app para vender directo, de la infraestructura al dashboard.</p><div class="adst">'+rvStack(true)+'</div>'+
      '<div class="adb"><a class="adgo" href="/#diagnostico">Quiero esto en mi app →</a><button class="adgo2" data-room="1">Seguir el recorrido</button></div>'+rvFoot(p,'Estudio CruzTRD')+'</div>';
    if(p===15) return '<div class="rv bk"><div class="bkm">Cruz<b>TRD</b></div><div class="bks">Estudio de apps para marcas que venden directo</div><div class="bkn"><span>Próxima edición</span><b>Edición 02</b><em>Muy pronto en esta misma sala</em></div><div class="bkf"><span>Revista CruzTRD · Edición 01 · Octubre 2026<br>Distribución gratuita</span><i class="cvbar"></i></div></div>';
    return '';
  }
  // ===== Kiosco y lector v3 — tres modos (Revista · Continuo · Texto), carga progresiva, zoom en sitio =====
  var FB=null, FBIMG={}, FBU={}, FBAC=null, FCF={}, FCCOV={};
  function fbMem(k,v){ try{ var o=JSON.parse(localStorage.getItem('cruztrd_lect_v1')||'{}'); if(v===undefined) return o[k]; o[k]=v; localStorage.setItem('cruztrd_lect_v1',JSON.stringify(o)); }catch(e){} return undefined; }
  try{ FCCOV=JSON.parse(localStorage.getItem('cruztrd_fccov_v1')||'{}'); }catch(e){ FCCOV={}; }
  var FBSND=fbMem('snd')===1, FBFS=+fbMem('fs')||1, FBTH=fbMem('th')||'paper';
  var FBIC={prev:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',
    grid:'<svg viewBox="0 0 24 24"><rect x="3.5" y="4" width="7" height="7" rx="1"/><rect x="13.5" y="4" width="7" height="7" rx="1"/><rect x="3.5" y="13" width="7" height="7" rx="1"/><rect x="13.5" y="13" width="7" height="7" rx="1"/></svg>',
    full:'<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
    snd:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path class="w" d="M15.5 9a4 4 0 010 6M18 6.5a7.5 7.5 0 010 11"/></svg>',
    book:'<svg viewBox="0 0 24 24"><path d="M3 5.5c3-1.3 6-1.3 9 .6 3-1.9 6-1.9 9-.6v13c-3-1.3-6-1.3-9 .6-3-1.9-6-1.9-9-.6z"/><path d="M12 6.1v13"/></svg>',
    scroll:'<svg viewBox="0 0 24 24"><rect x="6" y="3" width="12" height="8" rx="1.2"/><rect x="6" y="13" width="12" height="8" rx="1.2"/></svg>',
    text:'<svg viewBox="0 0 24 24"><path d="M5 6h14M5 10h14M5 14h14M5 18h9"/></svg>',
    minus:'<svg viewBox="0 0 24 24"><path d="M6 12h12"/></svg>',plus:'<svg viewBox="0 0 24 24"><path d="M6 12h12M12 6v12"/></svg>',
    moon:'<svg viewBox="0 0 24 24"><path d="M19 14.5A7.5 7.5 0 019.5 5a7.5 7.5 0 109.5 9.5z"/></svg>'};
  function $i(id){ return document.getElementById(id); }
  function nf(n){ return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'.'); }
  function fbSound(){ if(!FBSND) return; try{ FBAC=FBAC||new (window.AudioContext||window.webkitAudioContext)(); var A=FBAC, d=.32, b=A.createBuffer(1,Math.floor(A.sampleRate*d),A.sampleRate), x=b.getChannelData(0);
      for(var i=0;i<x.length;i++){ var t=i/x.length; x[i]=(Math.random()*2-1)*Math.pow(Math.sin(Math.PI*Math.min(1,t*1.25)),1.8)*(.55+.45*Math.random()); }
      var s=A.createBufferSource(); s.buffer=b; var f=A.createBiquadFilter(); f.type='bandpass'; f.Q.value=.8; f.frequency.setValueAtTime(700,A.currentTime); f.frequency.exponentialRampToValueAtTime(3600,A.currentTime+d*.75);
      var g=A.createGain(); g.gain.value=.08; s.connect(f); f.connect(g); g.connect(A.destination); s.start(); }catch(e){} }
  // ---------- fuentes de imagen ----------
  var STDW=[330,500,960,1280,1920];
  function stdW(w){ for(var i=0;i<STDW.length;i++) if(STDW[i]>=w) return STDW[i]; return 1920; }
  function hImg(){ return ''; }
  function fbLoad(u){ if(!FBIMG[u]) FBIMG[u]=new Promise(function(ok,ko){ var im=new Image(); im.decoding='async'; im.onload=function(){ var done=function(){ ok(im); }; if(im.decode) im.decode().then(done,done); else done(); }; im.onerror=function(){ delete FBIMG[u]; ko(); }; im.src=u; }); return FBIMG[u]; }
  // ¿página en blanco? (guardas, hojas de respeto): poca variación tonal y casi nada de tinta. Calibrado con tomos reales de Commons.
  function inkOf(im){ try{ var c=document.createElement('canvas'), w=c.width=100, h=c.height=Math.max(8,Math.round(100*im.naturalHeight/im.naturalWidth)), x=c.getContext('2d',{willReadFrequently:true}); x.drawImage(im,0,0,w,h);
      var d=x.getImageData(0,0,w,h).data, n=w*h, s=0, q=0, L=new Float32Array(n), i, j; for(i=0,j=0;i<d.length;i+=4,j++){ var l=.3*d[i]+.59*d[i+1]+.11*d[i+2]; L[j]=l; s+=l; q+=l*l; } var m=s/n, rd=0; for(j=0;j<n;j++) if(L[j]<m-35) rd++; return {sd:Math.sqrt(Math.max(0,q/n-m*m)), rd:rd/n}; }catch(e){ return null; } }
  function isBlank(r){ return !!r&&r.sd<24&&r.rd<.07; }
  // cola con prioridad: Commons genera cada página bajo demanda (2–10 s la primera vez), así que pedimos varias en paralelo y por delante del lector
  var FQ=[], FQN=0;
  function fq(job,front){ if(front) FQ.unshift(job); else FQ.push(job); fqRun(); }
  function fqRun(){ while(FQN<6&&FQ.length){ var j=FQ.shift(); FQN++; j().then(fqDone,fqDone); } }
  function fqDone(){ FQN--; fqRun(); }
  function fcFull(){ return Promise.reject(new Error('sin fuente')); }
  function fcRender(){ return Promise.reject(new Error('sin fuente')); }
  // devuelve la mejor imagen disponible de la página p con al menos w px de ancho
  function pgLoad(p,w,front){ var me=FB, key=FB.key+':'+p;
    if(FB.k==='fc') return fcRender(FB.doc,FB.it.n,p,w,front).then(function(r){ var h=FBU[key]; if(!h||h.w<r.w) FBU[key]=r; return FBU[key]; });
    var sw=stdW(w), u=hImg(FB.it,p+1,sw);
    return new Promise(function(ok,ko){ fq(function(){ return fbLoad(u).then(function(im){ var h=FBU[key]; if(!h||h.w<sw) FBU[key]={u:u,w:sw}; if(me.blank&&p<18&&me.blank[p]==null) me.blank[p]=isBlank(inkOf(im)); ok(FBU[key]); },function(){ ko(); }); },front); }); }
  function pgSet(el,r,p){ var im=el.querySelector('img.pg'); if(im&&+im.getAttribute('data-w')>=r.w) return; if(!im){ im=document.createElement('img'); im.className='pg'; im.alt='Página '+(p+1); im.draggable=false; el.appendChild(im); }
    im.src=r.u; im.setAttribute('data-w',r.w); var l=el.querySelector('.pgl'); if(l) l.remove(); }
  function pgFill(el,p,w){ el.setAttribute('data-p',p); el.classList.remove('blank');
    if(FB.k==='rev'){ if(!el.querySelector('.rvp')) el.innerHTML='<div class="rvp">'+rvPage(p)+'</div>'; return; }
    var key=FB.key+':'+p, h=FBU[key]; if(h) pgSet(el,h,p);
    if(h&&h.w>=w*.9) return; if(!h&&FB.k==='fc'&&w>700) pgLoad(p,600,true).then(function(r){ if(el.getAttribute('data-p')===String(p)) pgSet(el,r,p); },function(){});
    if(!el.querySelector('img.pg')&&!el.querySelector('.pgl')){ var l=document.createElement('span'); l.className='pgl'; l.innerHTML='<i></i>Cargando página '+(p+1); el.appendChild(l); }
    pgLoad(p,w,true).then(function(r){ if(el.getAttribute('data-p')===String(p)) pgSet(el,r,p); },function(){ var l=el.querySelector('.pgl'); if(l) l.innerHTML='No se pudo cargar · toca para reintentar'; }); }
  function pgWarm(p){ if(!FB||FB.k==='rev'||p<0||p>=FB.n) return; var h=FBU[FB.key+':'+p], w=FB.mode==='scroll'?FB.sw:FB.rw; if(h&&h.w>=w*.9) return; pgLoad(p,w,false).catch(function(){}); }
  // ---------- kiosco ----------
  function fbKeyOf(k,it){ return k==='rev'?'rev01':(k==='fc'?'fc'+it.n:String(it.thumb||'').replace(/\?.*$/,'').slice(-120)); }
  function kLabel(k,it){ if(k==='fc') return 'Edición #'+it.n; if(k==='sciam'||k==='pm'||k==='psm') return it.label||''; var y=(String(it.title||'').match(/\b(1[89]\d\d)\b/)||[])[1]; return y?'Año '+y:'Tomo encuadernado'; }
  
  // color dominante de una portada (para teñir tarjeta y sala de lectura)
  
  
  
  
  
  magView.addEventListener('click',function(e){ var b=e.target.closest&&e.target.closest('[data-krs]'); if(!b) return; e.stopPropagation(); var s=b.closest('.kr').querySelector('.krs'); s.scrollBy({left:+b.getAttribute('data-krs')*s.clientWidth*.85,behavior:'smooth'}); });
  // portada que se inclina siguiendo el cursor
  magView.addEventListener('pointermove',function(e){ if(e.pointerType!=='mouse') return; var c=e.target.closest&&e.target.closest('.kcv,.kfc'); if(!c||!c.closest('.vshelf')) return; var r=c.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    c.style.setProperty('--ry',(x*14).toFixed(2)+'deg'); c.style.setProperty('--rx',(-y*10).toFixed(2)+'deg'); c.style.setProperty('--gx',((x+.5)*100).toFixed(1)+'%'); c.classList.add('tilt'); });
  magView.addEventListener('pointerout',function(e){ var c=e.target.closest&&e.target.closest('.kcv,.kfc'); if(!c||(e.relatedTarget&&c.contains(e.relatedTarget))) return; c.classList.remove('tilt'); c.style.removeProperty('--rx'); c.style.removeProperty('--ry'); });
  // la portada vuela del estante al lector (transición compartida)
  var KFLY=null;
  function kFlyFrom(btn){ KFLY=null; var src=btn.querySelector('.kcv,.kfc'); if(!src) return; var r=src.getBoundingClientRect(); if(!r.width) return; var c=document.createElement('div'); c.className='kfly';
    var im=src.querySelector('img'); if(im&&im.naturalWidth){ var i2=new Image(); i2.src=im.src; c.appendChild(i2); KFLY={ar:im.naturalWidth/im.naturalHeight}; } else if(src.querySelector('.rvp')){ c.classList.add('rvthumb'); c.innerHTML='<span class="rvp">'+rvPage(0)+'</span>'; KFLY={ar:.75}; } else return;
    KFLY.el=c; KFLY.r=r; KFLY.tint=btn.style.getPropertyValue('--tint')||''; }
  function kFlyGo(){ var F=KFLY; if(!F||!FB) return; KFLY=null; var st=$i('fbStage'); if(!st){ return; } var S=st.getBoundingClientRect(), W=S.width, H=S.height, ar=FB.ar||F.ar, tw, th, tx, ty;
    if(FB.mode==='book'){ var sg=FB.land||innerWidth<760||W/H<1.15, A=sg?ar:ar*2, bw=Math.min(W*(sg?.96:.94),(H-6)*A), bh=bw/A; tw=sg?bw:bw/2; th=bh; tx=S.left+(W-tw)/2; ty=S.top+(H-th)/2; }
    else if(FB.mode==='scroll'){ tw=Math.max(200,Math.min(W-(innerWidth<760?12:48),FB.land?1500:980)); th=tw/ar; tx=S.left+(W-tw)/2; ty=S.top+(innerWidth<760?10:20); }
    else return;
    var c=F.el, r=F.r; c.style.left=tx+'px'; c.style.top=ty+'px'; c.style.width=tw+'px'; c.style.height=th+'px'; magEl.appendChild(c); FB.fly=c;
    var a=c.animate([{transform:'translate('+(r.left-tx)+'px,'+(r.top-ty)+'px) scale('+(r.width/tw)+','+(r.height/th)+')',boxShadow:'0 10px 20px rgba(0,0,0,.4)'},{transform:'none',boxShadow:'0 40px 80px rgba(0,0,0,.6)'}],{duration:640,easing:'cubic-bezier(.2,.8,.2,1)',fill:'both'});
    c.__done=new Promise(function(ok){ a.onfinish=ok; setTimeout(ok,900); }); }
  function kFlyEnd(){ var c=FB&&FB.fly; if(!c) return; FB.fly=null; var t0=performance.now();
    c.__done.then(function(){ var wait=function(){ var ok=document.querySelector('#fbBook .fbp img.pg,#fbBook .fbp .rvp,.scp img.pg,.scp .rvp'); if(ok||performance.now()-t0>2500){ c.animate([{opacity:1},{opacity:0}],{duration:280,fill:'both'}).onfinish=function(){ c.remove(); }; } else setTimeout(wait,60); }; wait(); }); }
  // ---------- lector ----------
  function fbNorm(i){ if(FB.single) return Math.max(0,Math.min(FB.n-1,i)); if(i<=0) return 0; if(i%2===0) i--; return Math.max(0,Math.min(FB.n%2?FB.n-2:FB.n-1,i)); }
  function fbPages(i){ return FB.single?[i]:(i===0?[-1,0]:[i,i+1]); }
  function fbShift(P){ return FB.single?0:(P[0]<0?-25:(P[1]>=FB.n?25:0)); }
  function fbTarget(d){ var step=FB.single?1:(FB.i===0?1:2), ni=fbNorm(d>0?FB.i+step:FB.i-(FB.i===1?1:step)), B=FB.blank, g=0;
    if(B) while(g++<10&&ni>0&&ni<18&&fbPages(ni).every(function(p){ return p<0||p>=FB.n||B[p]===true; })){ var nn=fbNorm(d>0?ni+(FB.single?1:2):ni-(FB.single?1:2)); if(nn===ni) break; ni=nn; }
    return ni; }
  function fbVis(){ return fbPages(FB.i).filter(function(x){ return x>=0&&x<FB.n; }); }
  function fbCur(){ return FB.mode==='book'?fbVis()[0]:FB.cp||0; }
  function fbTextOK(){ return FB.k==='rev'||FB.k==='fc'; }
  function fbOpen(k,idx,start,mode){
    fbClose(true); var it,title,sub,cred;
    if(k==='rev'){ it={n:'01'}; title='Revista CruzTRD'; sub='Edición 01 · Octubre 2026'; cred='Revista CruzTRD · publicación del Estudio CruzTRD · distribución gratuita dentro del recorrido.'; }
    else { var C=HD[k]; it=C.issues[idx]; title=k==='fc'?'Full Circle Magazine':C.name; sub=k==='fc'?'Edición #'+it.n+' · en inglés · CC BY-SA 3.0':(kLabel(k,it)+(it.pages?' · '+nf(it.pages)+' páginas':'')); cred=(HCRED[k]||'')+(it.license&&k!=='fc'?' ('+it.license+')':''); }
    var me=FB={k:k,idx:idx,it:it,i:0,cp:0,n:k==='rev'?RVN:(it.pages||0),doc:null,ar:k==='rev'?.75:.72,land:false,single:true,T:null,ready:false,rw:960,sw:960,z:1,blank:(k!=='rev'&&k!=='fc')?{}:null,q:0};
    FB.key=fbKeyOf(k,it); FB.saved=+fbMem(FB.key)||0;
    var phone=innerWidth<760; FB.mode=mode||(k==='rev'?(innerWidth<600?'text':'book'):(phone?'scroll':'book'));
    magEl.classList.add('reading'); magView.className='magview vfb'; magEl.scrollTop=0; if(KFLY&&KFLY.ar&&k!=='rev') FB.ar=KFLY.ar; if(KFLY&&KFLY.ar>1.05&&k!=='rev') FB.land=true; if(KFLY&&KFLY.tint) magEl.style.setProperty('--tint',KFLY.tint); else if(k==='rev') magEl.style.setProperty('--tint','45,212,167');
    magView.innerHTML='<div class="fbw" id="fbW"><header class="fbtop"><button class="kback" data-shelf="1">← Volver al estudio</button><div class="fbti"><b>'+esc(title)+'</b><span>'+esc(sub)+'</span></div>'+
      '<div class="fbmodes" id="fbModes" role="tablist" aria-label="Modo de lectura"><button data-mode="book" role="tab">'+FBIC.book+'<em>Revista</em></button><button data-mode="scroll" role="tab">'+FBIC.scroll+'<em>Continuo</em></button>'+(k==='rev'||k==='fc'?'<button data-mode="text" role="tab">'+FBIC.text+'<em>Texto</em></button>':'')+'</div><span class="fbpg" id="fbPg"></span></header>'+
      '<div class="fbstage" id="fbStage"><div class="fbload" id="fbLoad"><span class="fbspin"></span><span id="fbLoadT">Abriendo la edición…</span><span class="fbbar"><i id="fbLoadB"></i></span></div></div>'+
      '<footer class="fbfoot"><div class="fbtools" id="fbTools"></div><div class="fbcred">'+esc(cred)+'</div></footer></div>';
    var flying=!!KFLY; kFlyGo();
    $i('fbModes').onclick=function(e){ var b=e.target.closest('[data-mode]'); if(b&&FB.ready) fbMode(b.getAttribute('data-mode')); };
    var go=function(){ if(FB!==me) return; FB.ready=true; var L=$i('fbLoad'); if(L) L.remove(); var st=$i('fbStage');
      if(window.ResizeObserver){ FB.ro=new ResizeObserver(function(){ if(FB&&FB.mode==='book') fbLayout(); else if(FB&&FB.mode==='scroll') scSize(true); }); FB.ro.observe(st); }
      fbMode(FB.mode,start!=null?start:0,!flying); fbResume(start); kFlyEnd();
      if(FB.blank){ for(var p=1;p<14&&p<FB.n;p++) pgWarm(p); } };
    var fail=function(){ if(FB!==me) return; var L=$i('fbLoad'); if(L) L.innerHTML='<span class="kerr" style="color:#e9f1ee"><b>No pudimos abrir esta edición.</b><span>Intenta de nuevo en unos minutos.</span></span>'; };
    if(k==='fc'&&FCCOV[it.n]){ var L0=$i('fbLoad'); if(L0) L0.insertAdjacentHTML('afterbegin','<img class="fblc" alt="" src="'+FCCOV[it.n]+'">'); }
    if(k==='rev') setTimeout(go,40);
    else if(k==='fc') fcFull(it.n,function(f){ if(FB!==me) return; var b=$i('fbLoadB'), t=$i('fbLoadT'); if(b) b.style.width=Math.round(f*100)+'%'; if(t) t.textContent='Descargando la edición · '+Math.round(f*100)+'%'; })
      .then(function(doc){ FB.doc=doc; FB.n=doc.numPages; return doc.getPage(1).then(function(pg){ var v=pg.getViewport({scale:1}); FB.ar=v.width/v.height; FB.land=FB.ar>1.05; go(); }); }).catch(fail);
    else { var t0=$i('fbLoadT'); if(t0) t0.textContent='Preparando las primeras páginas…'; fbLoad(hImg(it,1,500)).then(function(im){ if(im.naturalWidth){ FB.ar=im.naturalWidth/im.naturalHeight; FB.land=FB.ar>1.05; } FBU[FB.key+':0']={u:hImg(it,1,500),w:500}; go(); },go); }
  }
  function fbResume(start){ if(start!=null||FB.saved<2||FB.saved>=FB.n) return; var st=$i('fbStage'), me=FB, r=document.createElement('button'); r.className='fbres'; r.id='fbRes'; r.innerHTML='Seguir donde ibas · página '+(FB.saved+1)+' <span>→</span>'; r.onclick=function(){ r.remove(); fbGo(me.saved); }; st.appendChild(r); setTimeout(function(){ if(r.isConnected) r.classList.add('out'); },9000); }
  function fbClose(keep){ if(!FB) return; if(FB.T&&FB.T.raf) cancelAnimationFrame(FB.T.raf); if(FB.ro) FB.ro.disconnect(); if(FB.io) FB.io.disconnect(); if(FB.tio) FB.tio.disconnect(); clearTimeout(FB.rt);
    if(FB.grid) FB.grid.remove(); if(FB.fly) FB.fly.remove(); FB=null; FQ.length=0; magEl.classList.remove('reading');
    if(!keep&&document.fullscreenElement&&document.exitFullscreen) document.exitFullscreen().catch(function(){}); }
  function fbMode(m,page,first){ if(!FB) return; if(m==='text'&&!fbTextOK()) m='scroll'; var p=page!=null?page:fbCur(); if(FB.T){ if(FB.T.raf) cancelAnimationFrame(FB.T.raf); FB.T=null; }
    if(FB.io){ FB.io.disconnect(); FB.io=null; } if(FB.tio){ FB.tio.disconnect(); FB.tio=null; }
    FB.mode=m; FB.bk=null; FB.sc=null; FB.tx=null; if(m==='scroll') FB.z=1; var st=$i('fbStage'); [].slice.call(st.children).forEach(function(c){ if(c.id!=='fbRes') c.remove(); }); st.className='fbstage m-'+m; st.removeAttribute('data-cz');
    [].slice.call($i('fbModes').children).forEach(function(b){ var on=b.getAttribute('data-mode')===m; b.classList.toggle('on',on); b.setAttribute('aria-selected',on); });
    fbBar();
    if(m==='book'){ fbLayout(true); FB.i=fbNorm(p); fbDraw(true); if(first){ FB.bk.classList.add('intro'); var b=FB.bk; setTimeout(function(){ b.classList.remove('intro'); },900); } }
    else if(m==='scroll'){ scBuild(p); }
    else txBuild(p); }
  function fbBar(){ var m=FB.mode, h='';
    if(m!=='text') h+='<button class="fbt nav" id="fbPrev" aria-label="Página anterior">'+FBIC.prev+'</button><button class="fbt lab" id="fbGridB" aria-label="Ver todas las páginas">'+FBIC.grid+'<em>Páginas</em></button><label class="fbsl"><input type="range" id="fbRange" min="0" max="'+(FB.n-1)+'" value="0" aria-label="Ir a página"><span id="fbPgS">—</span></label>';
    if(m==='scroll') h+='<span class="fbsep"></span><button class="fbt" id="fbZo" aria-label="Alejar">'+FBIC.minus+'</button><b class="fbzl" id="fbZl">100%</b><button class="fbt" id="fbZi" aria-label="Acercar">'+FBIC.plus+'</button>';
    if(m==='text') h+='<button class="fbt nav" id="fbPrev" aria-label="Anterior">'+FBIC.prev+'</button><span class="fbtxl" id="fbPgS">—</span><button class="fbt nav" id="fbNext" aria-label="Siguiente">'+FBIC.next+'</button><span class="fbsep"></span><button class="fbt" id="fbFm" aria-label="Letra más pequeña"><b class="aa s">A</b></button><button class="fbt" id="fbFp" aria-label="Letra más grande"><b class="aa">A</b></button><button class="fbt'+(FBTH==='night'?' on':'')+'" id="fbTh" aria-label="Fondo oscuro">'+FBIC.moon+'</button>';
    h+='<span class="fbsep"></span>'+(m==='book'?'<button class="fbt'+(FBSND?'':' off')+'" id="fbSndB" aria-label="Sonido al pasar página" aria-pressed="'+FBSND+'">'+FBIC.snd+'</button>':'')+'<button class="fbt" id="fbFullB" aria-label="Pantalla completa">'+FBIC.full+'</button>';
    if(m!=='text') h+='<button class="fbt nav" id="fbNext" aria-label="Página siguiente">'+FBIC.next+'</button>';
    $i('fbTools').innerHTML=h;
    var on=function(id,f){ var e=$i(id); if(e) e.onclick=f; };
    on('fbPrev',function(){ fbStep(-1); }); on('fbNext',function(){ fbStep(1); }); on('fbGridB',fbGrid); on('fbFullB',fbFull);
    on('fbSndB',function(){ FBSND=!FBSND; fbMem('snd',FBSND?1:0); this.classList.toggle('off',!FBSND); this.setAttribute('aria-pressed',FBSND); if(FBSND) fbSound(); });
    on('fbZi',function(){ scZoomBy(1.35); }); on('fbZo',function(){ scZoomBy(1/1.35); });
    on('fbFm',function(){ txFont(-1); }); on('fbFp',function(){ txFont(1); }); on('fbTh',function(){ FBTH=FBTH==='night'?'paper':'night'; fbMem('th',FBTH); this.classList.toggle('on',FBTH==='night'); var w=$i('fbTx'); if(w) w.className='fbtx th-'+FBTH; });
    var rg=$i('fbRange'); if(rg) rg.oninput=function(){ fbGo(+rg.value,true); }; }
  function fbStep(d){ if(!FB||!FB.ready) return; if(FB.mode==='book') fbTurn(d); else if(FB.mode==='scroll') scGo(FB.cp+d,true); else txStep(d); }
  function fbGo(p,quick){ if(!FB) return; p=Math.max(0,Math.min(FB.n-1,p)); if(FB.mode==='book') fbJump(p,quick); else if(FB.mode==='scroll') scGo(p,!quick); else txGo(p); }
  function fbStatus(a){ if(!FB) return; var lab=(a.length>1?(a[0]+1)+'–'+(a[1]+1):String(a[0]+1)); $i('fbPg').textContent=(a.length>1?'Páginas ':'Página ')+lab+' de '+FB.n; var s=$i('fbPgS'); if(s) s.textContent=lab+' / '+FB.n;
    var rg=$i('fbRange'); if(rg&&document.activeElement!==rg){ rg.value=a[0]; } if(rg) rg.style.setProperty('--v',(FB.n>1?a[0]/(FB.n-1)*100:0)+'%'); var tl=$i('fbTools'); if(tl) tl.style.setProperty('--p',(FB.n>1?a[a.length-1]/(FB.n-1):0).toFixed(4));
    var pv=$i('fbPrev'), nx=$i('fbNext'); if(pv) pv.disabled=a[0]<=0; if(nx) nx.disabled=a[a.length-1]>=FB.n-1;
    if(a[0]>1||FB.saved<2) fbMem(FB.key,a[0]); if(FB.k==='rev') fbRevRead(a); }
  function fbRevRead(a){ var ai=-1; a.forEach(function(p){ if(p>=3&&p<=12) ai=(p-3)>>1; }); clearTimeout(FB.rt); if(ai<0) return; var id=MAG[ai].id, me=FB; FB.rt=setTimeout(function(){ if(FB===me) fbReadArt(ai); },6000); }
  function fbReadArt(ai){ var id=MAG[ai].id; if((CLUB.st.read||[]).indexOf(id)>-1) return; CLUB.read(id); fbToast('+25 pts · Club CruzTRD','Leíste «'+MAG[ai].title+'»'); }
  function fbToast(a,b){ var t=document.createElement('div'); t.className='fbtoast'; t.innerHTML='<b>★ '+esc(a)+'</b><span>'+esc(b)+'</span>'; magEl.appendChild(t); setTimeout(function(){ t.classList.add('out'); },3200); setTimeout(function(){ t.remove(); },3800); }
  function fbFull(){ try{ if(document.fullscreenElement){ document.exitFullscreen(); return; } var r=(magEl.requestFullscreen||magEl.webkitRequestFullscreen); if(r){ var q=r.call(magEl); if(q&&q.catch) q.catch(function(){}); } }catch(e){} }
  // ---------- modo Revista: libro con lomo, grosor y giro de hoja ----------
  function fbBuild(){ var st=$i('fbStage'), old=$i('fbBook'); if(old) old.remove();
    var b=document.createElement('div'); b.id='fbBook'; b.className='fbbook'+(FB.single?' one':'')+(FB.k==='rev'?' rev':'');
    b.innerHTML='<i class="fbedge l"></i><i class="fbedge r"></i>'+(FB.single?'<div class="fbp s"></div>':'<div class="fbp l"></div><div class="fbp r"></div>')+'<i class="fbcast l"></i><i class="fbcast r"></i>';
    st.appendChild(b); FB.bk=b; FB.slots=[].slice.call(b.querySelectorAll('.fbp')); FB.cast={l:b.querySelector('.fbcast.l'),r:b.querySelector('.fbcast.r')}; if(!st.__ptr){ st.__ptr=1; fbPtr(st); } }
  function fbLayout(first){ if(!FB||!FB.ready||FB.mode!=='book') return; var st=$i('fbStage'); if(!st) return; var W=st.clientWidth, H=st.clientHeight; if(!W||!H) return;
    var sg=FB.land||innerWidth<760||W/H<1.15;
    if(first||sg!==FB.single||!FB.bk){ if(FB.T){ if(FB.T.raf) cancelAnimationFrame(FB.T.raf); FB.T=null; } FB.single=sg; fbBuild(); if(!first){ FB.i=fbNorm(FB.i); fbDraw(true); } }
    var A=FB.single?FB.ar:FB.ar*2, bw=Math.min(W*(FB.single?.96:.94),(H-6)*A), bh=bw/A;
    FB.bk.style.width=Math.round(bw)+'px'; FB.bk.style.height=Math.round(bh)+'px'; FB.pw=FB.single?bw:bw/2; FB.rw=Math.round(FB.pw*Math.min(2,window.devicePixelRatio||1)); }
  function fbEdges(){ var n=FB.n, P=fbPages(FB.i), left=FB.single?0:(P[0]<0?0:P[0]+1), right=FB.single?n-FB.i-1:(P[1]>=n?0:n-P[1]-1), mx=Math.min(9,Math.max(3,n/7));
    FB.bk.style.setProperty('--el',(left>0?Math.max(1.5,Math.min(mx,mx*left/Math.min(n,80))):0).toFixed(1)+'px'); FB.bk.style.setProperty('--er',(right>0?Math.max(1.5,Math.min(mx,mx*right/Math.min(n,80))):0).toFixed(1)+'px'); }
  function fbFill(el,p){ if(p<0||p>=FB.n){ el.innerHTML=''; el.classList.add('blank'); el.removeAttribute('data-p'); return; } if(el.getAttribute('data-p')!==String(p)){ el.innerHTML=''; } pgFill(el,p,FB.rw); }
  function fbCopy(dst,src){ dst.innerHTML=''; while(src.firstChild) dst.appendChild(src.firstChild); var p=src.getAttribute('data-p'); if(p==null) dst.removeAttribute('data-p'); else dst.setAttribute('data-p',p); dst.classList.toggle('blank',src.classList.contains('blank')); src.removeAttribute('data-p'); }
  function fbDraw(force){ if(!FB||!FB.bk) return; var P=fbPages(FB.i);
    FB.slots.forEach(function(el,j){ if(force||el.getAttribute('data-p')!==String(P[j])||(P[j]<0||P[j]>=FB.n)!==el.classList.contains('blank')) fbFill(el,P[j]); else if(P[j]>=0&&P[j]<FB.n) pgFill(el,P[j],FB.rw); });
    FB.bk.style.setProperty('--shift',fbShift(P)+'%'); fbEdges(); fbStatus(fbVis());
    var st=FB.single?1:2; [FB.i+st,FB.i+st*2,FB.i+st*3,FB.i-st].forEach(function(i){ fbPages(fbNorm(i)).forEach(pgWarm); }); }
  function fbPrep(d){ if(!FB||!FB.bk) return null; if(FB.T) return FB.T.d===d?FB.T:null; var ni=fbTarget(d); if(ni===FB.i) return null;
    var cur=fbPages(FB.i), nxt=fbPages(ni), S=FB.slots, leaf=document.createElement('div');
    leaf.className='fbleaf '+(FB.single?'s':(d>0?'r':'l')); leaf.innerHTML='<div class="fbf"></div><div class="fbb"></div>';
    var T={d:d,ni:ni,leaf:leaf,t:0,s0:fbShift(cur),s1:fbShift(nxt),mode:'prep'}, F=leaf.children[0], B=leaf.children[1];
    if(FB.single){ if(d>0){ fbCopy(F,S[0]); fbFill(S[0],nxt[0]); } else fbFill(F,nxt[0]); B.classList.add('blank'); }
    else if(d>0){ fbCopy(F,S[1]); fbFill(B,nxt[0]); fbFill(S[1],nxt[1]); T.land=S[0]; }
    else { fbCopy(F,S[0]); fbFill(B,nxt[1]); fbFill(S[0],nxt[0]); T.land=S[1]; }
    FB.bk.appendChild(leaf); FB.T=T; fbSet(T,0); return T; }
  function fbCast(el,side,e,A){ if(!el) return; if(A<.006){ el.style.opacity=0; return; } el.style.opacity=1;
    el.style.background='linear-gradient('+(side==='r'?'90deg':'270deg')+',rgba(0,0,0,'+(A*.85).toFixed(3)+') 0%,rgba(0,0,0,'+A.toFixed(3)+') '+e.toFixed(1)+'%,rgba(0,0,0,0) '+Math.min(100,e+24).toFixed(1)+'%)'; }
  function fbSet(T,t){ T.t=t; var L=T.leaf, a, s=Math.sin(Math.PI*t);
    if(FB.single){ a=T.d>0?-180*t:-180*(1-t); var u=T.d>0?t:1-t; L.style.opacity=Math.max(0,Math.min(1,1-(u-.4)*2.6)); } else a=T.d>0?-180*t:180*t;
    L.style.transform='rotateY('+a.toFixed(2)+'deg)';
    L.style.setProperty('--shf',(Math.min(1,t*1.7)*.42).toFixed(3)); L.style.setProperty('--shb',(Math.min(1,(1-t)*1.7)*.42).toFixed(3)); L.style.setProperty('--gl',s.toFixed(3));
    var c=Math.cos(a*Math.PI/180), A=.44*s, rv=FB.single?'r':(T.d>0?'r':'l'), ld=T.d>0?'l':'r';
    fbCast(FB.cast[rv],rv,c>0?c*100:0,c>0?A:A*.45);
    if(!FB.single){ fbCast(FB.cast[ld],ld,c<0?-c*100:0,(c<0&&T.land&&!T.land.classList.contains('blank'))?A:0); FB.bk.style.setProperty('--shift',(T.s0+(T.s1-T.s0)*t).toFixed(2)+'%'); } }
  function fbAnim(T,to,dur,done){ if(T.raf) cancelAnimationFrame(T.raf); var from=T.t, t0=performance.now();
    var f=function(now){ if(!FB||FB.T!==T) return; var k=Math.min(1,(now-t0)/dur), e=1-Math.pow(1-k,3); fbSet(T,from+(to-from)*e); if(k<1) T.raf=requestAnimationFrame(f); else { T.raf=0; if(done) done(); } };
    T.raf=requestAnimationFrame(f);
    if(document.hidden){ cancelAnimationFrame(T.raf); fbSet(T,to); if(done) done(); } }
  function fbEnd(T,ok){ if(!FB||FB.T!==T) return; if(T.raf) cancelAnimationFrame(T.raf); var S=FB.slots, F=T.leaf.children[0], B=T.leaf.children[1];
    if(ok){ if(FB.single){ if(T.d<0) fbCopy(S[0],F); } else fbCopy(T.land,B); FB.i=T.ni; }
    else { if(FB.single){ if(T.d>0) fbCopy(S[0],F); } else fbCopy(T.d>0?S[1]:S[0],F); }
    T.leaf.remove(); FB.T=null; fbCast(FB.cast.l,'l',0,0); fbCast(FB.cast.r,'r',0,0); fbDraw(); if(ok){ var r=$i('fbRes'); if(r) r.remove(); }
    if(ok&&FB.q){ var d=FB.q>0?1:-1; FB.q-=d; fbTurn(d,true); } }
  function fbBump(d){ if(!FB||!FB.bk) return; FB.bk.classList.remove('bump','bumpl'); void FB.bk.offsetWidth; FB.bk.classList.add(d>0?'bump':'bumpl'); }
  function fbTurn(d,chain){ if(!FB||!FB.ready||!FB.bk) return; var T=FB.T;
    if(T&&(T.mode==='turn'||T.mode==='drag')){ if(T.mode==='turn'&&T.d===d&&Math.abs(FB.q)<4){ FB.q+=d; if(T.raf) fbAnim(T,1,140,function(){ fbEnd(T,true); }); } return; }
    if(!chain) FB.q=0; if(T&&T.d!==d){ fbEnd(T,false); T=null; }
    T=T||fbPrep(d); if(!T){ fbBump(d); FB.q=0; return; } T.mode='turn'; fbSound(); fbAnim(T,1,FB.q?260:(FB.single?380:Math.round(460*(1-T.t))+80),function(){ fbEnd(T,true); }); }
  function fbJump(i,quick){ if(!FB||!FB.bk) return; if(FB.T) fbEnd(FB.T,false); FB.i=fbNorm(i); if(!quick){ FB.bk.classList.remove('jump'); void FB.bk.offsetWidth; FB.bk.classList.add('jump'); } fbDraw(); }
  function fbPeek(d){ var T=FB.T; if(T){ if(T.d===d||T.mode!=='peek') return; fbEnd(T,false); } T=fbPrep(d); if(!T) return; T.mode='peek'; fbAnim(T,FB.single?.04:.06,220); }
  function fbPeekOff(){ var T=FB&&FB.T; if(T&&T.mode==='peek'){ T.mode='unpeek'; fbAnim(T,0,200,function(){ fbEnd(T,false); }); } }
  function fbZone(e){ var r=FB.bk.getBoundingClientRect(), P=fbPages(FB.i), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
    if(x<-.03||x>1.03||y<0||y>1) return ''; if(!FB.single&&P[0]<0) return x>.5?(x>.9?'n':'nz'):''; if(!FB.single&&P[1]>=FB.n) return x<.5?(x<.1?'p':'pz'):'';
    var ed=FB.single?.16:.09; return x>1-ed?'n':(x<ed?'p':'z'); }
  function fbPtr(st){ var P=null;
    st.addEventListener('pointerdown',function(e){ if(!FB||!FB.ready||FB.mode!=='book'||!FB.bk||(e.pointerType==='mouse'&&e.button!==0)) return; if(e.target.closest('a,button')) return;
      P={id:e.pointerId,x0:e.clientX,y0:e.clientY,lx:e.clientX,lt:performance.now(),v:0,type:e.pointerType,T:null,moved:false}; });
    st.addEventListener('pointermove',function(e){ if(!FB||FB.mode!=='book'||!FB.bk) return;
      if(!P){ if(e.pointerType==='mouse'&&!e.buttons){ var z=fbZone(e); st.setAttribute('data-cz',z); if(!FB.T||FB.T.mode==='peek'||FB.T.mode==='unpeek'){ if(z==='n') fbPeek(1); else if(z==='p') fbPeek(-1); else fbPeekOff(); } } return; }
      if(e.pointerId!==P.id) return; var dx=e.clientX-P.x0, dy=e.clientY-P.y0;
      if(!P.moved){ if(Math.abs(dx)<8) return; if(Math.abs(dy)>Math.abs(dx)*1.2){ P=null; return; } P.moved=true; var d=dx<0?1:-1, T=FB.T;
        if(T&&T.mode==='turn'){ P=null; return; } if(T&&T.d!==d){ fbEnd(T,false); T=null; } P.T=T||fbPrep(d); if(!P.T){ fbBump(d); return; }
        if(P.T.raf){ cancelAnimationFrame(P.T.raf); P.T.raf=0; } P.T.mode='drag'; P.base=P.T.t; fbSound(); try{ st.setPointerCapture(e.pointerId); }catch(_){ } }
      if(!P.T) return; var now=performance.now(); P.v=(e.clientX-P.lx)/Math.max(1,now-P.lt); P.lx=e.clientX; P.lt=now;
      fbSet(P.T,Math.max(0,Math.min(1,P.base+(-dx*P.T.d)/(FB.pw*(FB.single?1.05:1.8))))); });
    var up=function(e){ if(!P||e.pointerId!==P.id) return; var p=P; P=null;
      if(p.T){ var T=p.T, f=-p.v*T.d; T.mode='turn'; if(T.t>.3||f>.3) fbAnim(T,1,Math.max(160,Math.round(380*(1-T.t))),function(){ fbEnd(T,true); }); else fbAnim(T,0,200,function(){ fbEnd(T,false); }); return; }
      if(!p.moved&&e.type==='pointerup') fbTap(e); };
    st.addEventListener('pointerup',up); st.addEventListener('pointercancel',up);
    st.addEventListener('pointerleave',function(e){ if(e.pointerType==='mouse'&&!P&&FB&&FB.mode==='book'){ st.setAttribute('data-cz',''); fbPeekOff(); } }); }
  function fbTap(e){ var z=fbZone(e); if(z==='n'||z==='nz') return fbTurn(1); if(z==='p'||z==='pz') return fbTurn(-1); if(z!=='z') return;
    // tocar el centro de una página = leerla en grande: pasa a modo Continuo con esa página a todo el ancho, en el mismo punto
    var r=FB.bk.getBoundingClientRect(), P=fbPages(FB.i), j=FB.single?0:((e.clientX-r.left)>r.width/2?1:0), p=P[j]; if(p<0||p>=FB.n) return;
    var pr=FB.slots[j].getBoundingClientRect(); fbMode('scroll',p); scFocus(p,(e.clientX-pr.left)/pr.width,(e.clientY-pr.top)/pr.height,e.clientX,e.clientY); }
  // ---------- modo Continuo: páginas a todo el ancho, desliza, pellizca o usa +/− ----------
  function scBase(){ var st=$i('fbStage'), W=st.clientWidth-(innerWidth<760?12:48); return Math.max(200,Math.min(W,FB.land?1500:980)); }
  function scBuild(p){ var st=$i('fbStage'), sc=document.createElement('div'); sc.className='fbsc'; sc.id='fbSc'; sc.tabIndex=0;
    var h=''; for(var i=0;i<FB.n;i++) h+='<div class="scp" data-p="'+i+'"><span class="scn">'+(i+1)+'</span></div>'; sc.innerHTML='<div class="scin">'+h+'</div>'; st.appendChild(sc); FB.sc=sc; FB.cp=p||0;
    FB.z=FB.z||1; scSize(); FB.pages=[].slice.call(sc.querySelectorAll('.scp'));
    FB.io=new IntersectionObserver(function(es){ es.forEach(function(x){ var el=x.target, q=+el.getAttribute('data-p'); if(x.isIntersecting){ el.__vis=1; pgFill(el,q,FB.sw); } else if(el.__vis){ el.__vis=0; var im=el.querySelector('img.pg'); if(im&&Math.abs(q-FB.cp)>12){ im.remove(); } } }); },{root:sc,rootMargin:'120% 0px'});
    FB.pages.forEach(function(el){ FB.io.observe(el); });
    sc.addEventListener('scroll',function(){ if(FB.scr) return; FB.scr=requestAnimationFrame(function(){ FB.scr=0; scTrack(); }); },{passive:true});
    scGestures(sc); scGo(FB.cp,false); scTrack(); sc.focus({preventScroll:true}); }
  function scSize(keep){ if(!FB||!FB.sc) return; var pw=Math.round(scBase()*FB.z), old=FB.pwS||pw; FB.pwS=pw; FB.sc.style.setProperty('--pw',pw+'px'); FB.sc.style.setProperty('--ar',FB.ar);
    FB.sw=Math.round(pw*Math.min(2,window.devicePixelRatio||1)); var zl=$i('fbZl'); if(zl) zl.textContent=Math.round(FB.z*100)+'%'; FB.sc.classList.toggle('zin',FB.z>1.02);
    if(keep&&old!==pw){ var c=FB.cp; scGo(c,false); } clearTimeout(FB.zt); FB.zt=setTimeout(function(){ if(!FB||!FB.pages) return; FB.pages.forEach(function(el){ if(el.__vis) pgFill(el,+el.getAttribute('data-p'),FB.sw); }); },220); }
  function scGap(){ return innerWidth<760?10:20; }
  function scPitch(){ return FB.pwS/FB.ar+scGap(); }
  function scTrack(){ if(!FB||!FB.sc) return; var sc=FB.sc, c=Math.floor((sc.scrollTop+sc.clientHeight*.35-scGap())/scPitch()); c=Math.max(0,Math.min(FB.n-1,c)); if(c!==FB.cp||!FB.__st){ FB.cp=c; FB.__st=1; fbStatus([c]); [c+1,c+2,c+3,c-1].forEach(pgWarm); } }
  function scGo(p,smooth){ if(!FB||!FB.sc) return; p=Math.max(0,Math.min(FB.n-1,p)); FB.sc.scrollTo({top:Math.round(scGap()+p*scPitch()-(innerWidth<760?6:12)),behavior:smooth?'smooth':'auto'}); FB.cp=p; fbStatus([p]); }
  function scFocus(p,fx,fy,cx,cy){ var sc=FB.sc, r=sc.getBoundingClientRect(), W=r.width-(innerWidth<760?12:48); FB.z=Math.min(3,Math.max(1,W/scBase())); scSize();
    var top=scGap()+p*scPitch()+fy*FB.pwS/FB.ar-(cy-r.top), inner=sc.firstChild, left=(inner.scrollWidth-FB.pwS)/2+fx*FB.pwS-(cx-r.left); sc.scrollTo({top:Math.round(top),left:Math.max(0,Math.round(left))}); FB.cp=p; fbStatus([p]);
    fbToast2('Modo Continuo: desliza para leer · toca «Revista» arriba para volver a hojear'); }
  function fbToast2(t){ if(fbMem('t2')) return; fbMem('t2',1); var h=document.createElement('div'); h.className='fbhint'; h.innerHTML='<span>'+esc(t)+'</span>'; var st=$i('fbStage'); st.appendChild(h); setTimeout(function(){ h.classList.add('out'); },3600); setTimeout(function(){ h.remove(); },4300); }
  function scZoomAt(nz,cx,cy){ if(!FB||!FB.sc) return; var sc=FB.sc, r=sc.getBoundingClientRect(); nz=Math.max(.5,Math.min(4,nz)); if(Math.abs(nz-FB.z)<.001) return;
    var ox=cx-r.left, oy=cy-r.top, inner=sc.firstChild, oldW=inner.scrollWidth, oldPw=FB.pwS, px=(sc.scrollLeft+ox-(Math.max(oldW,sc.clientWidth)-oldPw)/2)/oldPw, py=(sc.scrollTop+oy)/(scPitch());
    FB.z=nz; scSize(); var nw=inner.scrollWidth; sc.scrollLeft=Math.max(0,px*FB.pwS+(Math.max(nw,sc.clientWidth)-FB.pwS)/2-ox); sc.scrollTop=Math.max(0,py*scPitch()-oy); scTrack(); }
  function scZoomBy(f){ var r=FB.sc.getBoundingClientRect(); scZoomAt(FB.z*f,r.left+r.width/2,r.top+r.height/2); }
  function scGestures(sc){ var pts={}, d0=0, z0=1, drag=null, lastTap=0;
    sc.addEventListener('wheel',function(e){ if(!e.ctrlKey&&!e.metaKey) return; e.preventDefault(); scZoomAt(FB.z*Math.exp(-e.deltaY*.01),e.clientX,e.clientY); },{passive:false});
    sc.addEventListener('pointerdown',function(e){ pts[e.pointerId]={x:e.clientX,y:e.clientY}; var k=Object.keys(pts); if(k.length===2){ var a=pts[k[0]],b=pts[k[1]]; d0=Math.hypot(a.x-b.x,a.y-b.y); z0=FB.z; drag=null; }
      else if(e.pointerType==='mouse'&&e.button===0&&!e.target.closest('a,button')){ drag={x:e.clientX,y:e.clientY,l:sc.scrollLeft,t:sc.scrollTop,m:false}; } });
    sc.addEventListener('pointermove',function(e){ if(!pts[e.pointerId]) return; pts[e.pointerId]={x:e.clientX,y:e.clientY}; var k=Object.keys(pts);
      if(k.length===2&&d0){ var a=pts[k[0]],b=pts[k[1]], d=Math.hypot(a.x-b.x,a.y-b.y); if(!FB.pz) FB.pz=requestAnimationFrame(function(){ FB.pz=0; scZoomAt(z0*d/d0,(a.x+b.x)/2,(a.y+b.y)/2); }); return; }
      if(drag){ var dx=e.clientX-drag.x, dy=e.clientY-drag.y; if(!drag.m&&Math.hypot(dx,dy)>5){ drag.m=true; sc.classList.add('drag'); } if(drag.m){ sc.scrollLeft=drag.l-dx; sc.scrollTop=drag.t-dy; } } });
    var up=function(e){ var wasPinch=Object.keys(pts).length===2; delete pts[e.pointerId]; if(Object.keys(pts).length<2) d0=0; var dm=drag&&drag.m; drag=null; sc.classList.remove('drag');
      if(e.type!=='pointerup'||wasPinch||dm||e.target.closest('a,button')) return; var now=performance.now();
      if(now-lastTap<320){ lastTap=0; scZoomAt(FB.z>1.3?1:2.2,e.clientX,e.clientY); } else lastTap=now; };
    sc.addEventListener('pointerup',up); sc.addEventListener('pointercancel',up);
    sc.addEventListener('dblclick',function(e){ e.preventDefault(); }); }
  // ---------- modo Texto: artículo a una columna, letra ajustable (Revista CruzTRD y Full Circle) ----------
  function fcDrop(){ FQ.length=0; }
  function txBuild(p){ fcDrop(); var st=$i('fbStage'), w=document.createElement('div'); w.className='fbtx th-'+FBTH; w.id='fbTx'; w.style.setProperty('--fs',FBFS); st.appendChild(w); FB.tx=w; FB.cp=p||0;
    if(FB.k==='rev') txRev(w,p); else txFc(w,p); }
  function txRev(w,p){ var ai=p>=3&&p<=12?(p-3)>>1:0, R=(CLUB.st.read||[]), h='<div class="txin"><div class="txhead"><span>Revista CruzTRD · Edición 01</span><b>Modo texto</b><em>Los mismos artículos de la revista, a una columna y con la letra a tu medida.</em></div><nav class="txtoc">';
    MAG.forEach(function(a,i){ h+='<button data-txa="'+i+'"><span>0'+(i+1)+'</span><b>'+a.title+'</b><em>'+(R.indexOf(a.id)>-1?'✓ leído':a.min+' min')+'</em></button>'; }); h+='</nav>';
    MAG.forEach(function(a,i){ h+='<article class="txa" id="txa'+i+'" data-ai="'+i+'"><div class="txk">'+a.kick+'</div><h2>'+a.title+'</h2><p class="txd">'+a.deck+'</p><div class="txby">Lectura de '+a.min+' min · páginas '+(4+i*2)+'–'+(5+i*2)+' de la revista <button data-txpage="'+(3+i*2)+'">Ver en la revista →</button></div>';
      a.body.forEach(function(pp,k){ h+='<p'+(k===0&&pp.charAt(0)!=='<'?' class="dc"':'')+'>'+pp+'</p>'; if(k===1) h+='<blockquote>'+a.quote+'</blockquote>'; });
      h+='<div class="txend" data-ai="'+i+'"><i></i><button class="rvgo" data-room="'+(a.room||1)+'">'+(a.kick.indexOf('Capa')===0?'Ver la capa 0'+a.room+' en el estudio':'Empezar el recorrido')+' →</button></div></article>'; });
    w.innerHTML=h+'</div>'; FB.tio=new IntersectionObserver(function(es){ es.forEach(function(x){ if(x.isIntersecting&&x.target.classList.contains('txend')) fbReadArt(+x.target.getAttribute('data-ai')); if(x.isIntersecting&&x.target.classList.contains('txa')){ FB.ai=+x.target.getAttribute('data-ai'); var s=$i('fbPgS'); if(s) s.textContent='Artículo '+(FB.ai+1)+' de '+MAG.length; FB.cp=3+FB.ai*2; } }); },{root:w,threshold:0,rootMargin:'-30% 0px -60% 0px'});
    [].slice.call(w.querySelectorAll('.txa,.txend')).forEach(function(e){ FB.tio.observe(e); });
    w.onclick=function(e){ var b=e.target.closest('[data-txa],[data-txpage]'); if(!b) return; if(b.hasAttribute('data-txa')) txArt(+b.getAttribute('data-txa')); else fbMode('book',+b.getAttribute('data-txpage')); };
    $i('fbPgS').textContent='Artículo '+(ai+1)+' de '+MAG.length; $i('fbPg').textContent='Modo texto'; FB.ai=ai; if(p>=3) setTimeout(function(){ txArt(ai,true); },30); fbStatusT(); }
  function txArt(i,inst){ var a=$i('txa'+i); if(a) FB.tx.scrollTo({top:a.offsetTop-14,behavior:inst?'auto':'smooth'}); }
  function txStep(d){ if(FB.k==='rev'){ var i=Math.max(0,Math.min(MAG.length-1,(FB.ai||0)+d)); txArt(i); } else txGo(FB.cp+d); }
  function txGo(p){ if(FB.k==='rev'){ txArt(p>=3&&p<=12?(p-3)>>1:0); return; } var s=$i('txp'+p); if(s) FB.tx.scrollTo({top:s.offsetTop-14,behavior:'smooth'}); }
  function txFont(d){ var S=[.85,.95,1,1.1,1.22,1.36,1.5], i=S.indexOf(FBFS); if(i<0) i=2; i=Math.max(0,Math.min(S.length-1,i+d)); FBFS=S[i]; fbMem('fs',FBFS); if(FB.tx) FB.tx.style.setProperty('--fs',FBFS); }
  function fbStatusT(){ var pv=$i('fbPrev'), nx=$i('fbNext'); if(pv) pv.disabled=false; if(nx) nx.disabled=false; }
  function fcLines(tc,vh){ var B=[], cur=null, L=null;
    tc.items.forEach(function(i){ var s=i.str, y=i.transform[5], x=i.transform[4], h=Math.abs(i.transform[3])||i.height||10; if(y<24||y>vh-10) return;
      if(!s){ if(i.hasEOL&&L) L.eol=true; return; }
      var head=h>=14.5, nl=!L||L.eol||Math.abs(y-L.y)>h*.45;
      if(!cur){ cur={h:head,t:''}; B.push(cur); }
      else if(!nl){ if(x>L.xe+h*.12&&!/\s$/.test(cur.t)&&!/^\s/.test(s)) cur.t+=' '; }
      else { var gap=L.y-y, col=gap<-h||Math.abs(x-L.x0)>h*5, endS=/[.!?:”"»)]\s*$/.test(cur.t);
        if(head!==cur.h||(!col&&gap>L.h*1.75)||(col&&endS)){ cur={h:head,t:''}; B.push(cur); }
        else if(/[a-zà-ü]-$/i.test(cur.t)&&/^[a-zà-ü]/.test(s)) cur.t=cur.t.slice(0,-1); else if(!/\s$/.test(cur.t)) cur.t+=' '; }
      cur.t+=s; L={y:y,x0:nl?x:L.x0,xe:x+(i.width||0),h:h,eol:!!i.hasEOL}; });
    // títulos con contorno duplican cada letra («BBuuiilldd» → «Build»); la letra capital llega suelta y se une al párrafo
    var dd=function(w){ return w.length>=4&&w.length%2===0&&/^(?:([^\s])\1)+$/.test(w)?w.replace(/(.)\1/g,'$1'):w; };
    B=B.map(function(b){ b.t=b.t.replace(/\s+/g,' ').trim().split(' ').map(dd).join(' '); return b; });
    for(var i=0;i<B.length-1;i++) if(/^[A-ZÁÉÍÓÚÑ]$/.test(B[i].t)&&!B[i+1].h){ B[i+1].t=B[i].t+B[i+1].t; B[i].t=''; }
    return B.filter(function(b){ return b.t.length>1&&!/^(contents\s*\^?|full circle magazine #?\d*|\d{1,3})$/i.test(b.t); }); }
  function txFc(w,p){ var h='<div class="txin"><div class="txhead"><span>Full Circle Magazine #'+FB.it.n+' · en inglés</span><b>Modo texto</b><em>Texto extraído del PDF original, página por página. Las imágenes, tablas y capturas se ven en modo Revista.</em></div>';
    for(var i=0;i<FB.n;i++) h+='<section class="txp" id="txp'+i+'" data-p="'+i+'"><div class="txpn"><span>Página '+(i+1)+'</span><button data-txpage="'+i+'">Ver la página →</button></div><div class="txpb"><p class="txsk"></p><p class="txsk"></p></div></section>';
    w.innerHTML=h+'</div>'; var me=FB, pin=p>0?performance.now():0; ['wheel','touchstart','keydown'].forEach(function(ev){ w.addEventListener(ev,function(){ pin=0; },{passive:true,once:true}); });
    var ext=function(s){ if(s.__done) return; s.__done=1; var q=+s.getAttribute('data-p'); FB.doc.getPage(q+1).then(function(pg){ var vh=pg.getViewport({scale:1}).height; return pg.getTextContent().then(function(tc){ if(FB!==me) return; var B=fcLines(tc,vh), b=s.querySelector('.txpb');
        var above=s.offsetTop+s.offsetHeight<=w.scrollTop+4, h0=s.offsetHeight; b.innerHTML=B.length?B.map(function(k){ return k.h?'<h3>'+esc(k.t)+'</h3>':'<p>'+esc(k.t)+'</p>'; }).join(''):'<p class="txnone">Esta página es sobre todo gráfica: ábrela en modo Revista para verla.</p>'; if(pin&&performance.now()-pin<1500){ var tg=$i('txp'+p); if(tg) w.scrollTop=tg.offsetTop-14; } else if(above) w.scrollTop+=s.offsetHeight-h0; }); }).catch(function(){ s.__done=0; }); };
    FB.io=new IntersectionObserver(function(es){ es.forEach(function(x){ if(x.isIntersecting) ext(x.target); }); },{root:w,rootMargin:'150% 0px'});
    FB.tio=new IntersectionObserver(function(es){ es.forEach(function(x){ if(!x.isIntersecting) return; var q=+x.target.getAttribute('data-p'); FB.cp=q; var t=$i('fbPgS'); if(t) t.textContent='Página '+(q+1)+' / '+FB.n; $i('fbPg').textContent='Modo texto · página '+(q+1)+' de '+FB.n; fbMem(FB.key,q); }); },{root:w,rootMargin:'0px 0px -60% 0px'});
    [].slice.call(w.querySelectorAll('.txp')).forEach(function(e){ FB.io.observe(e); FB.tio.observe(e); });
    w.onclick=function(e){ var b=e.target.closest('[data-txpage]'); if(b) fbMode('book',+b.getAttribute('data-txpage')); };
    setTimeout(function(){ if(p>0){ var s=$i('txp'+p); if(s) w.scrollTop=s.offsetTop-14; } },30); fbStatusT(); }
  // ---------- todas las páginas ----------
  function fbGrid(){ if(!FB||!FB.ready) return; if(FB.grid){ FB.grid.remove(); FB.grid=null; return; }
    var G=[], i, cur=FB.mode==='book'?fbVis():[FB.cp], sp=FB.mode==='book'&&!FB.single; if(!sp){ for(i=0;i<FB.n;i++) G.push([i]); } else { G.push([0]); for(i=1;i<FB.n;i+=2) G.push(i+1<FB.n?[i,i+1]:[i]); }
    var g=document.createElement('div'); g.className='fbgrid'; g.style.setProperty('--ar',FB.ar);
    g.innerHTML='<div class="fbgh"><b>Todas las páginas</b><span>'+nf(FB.n)+' páginas · toca una para ir</span><button class="kback" data-gx="1">✕ Cerrar</button></div><div class="fbgl'+(sp?'':' one')+'">'+G.map(function(s){ var on=s.some(function(p){ return cur.indexOf(p)>-1; });
      return '<button class="fbgs'+(on?' on':'')+(s.length<2?' one':'')+'" data-gi="'+s[0]+'"><span class="fbgp">'+s.map(function(p){ return '<i data-tp="'+p+'" class="'+(s.length>1?(p%2?'l':'r'):'')+'"></i>'; }).join('')+'</span><em>'+s.map(function(p){ return p+1; }).join('–')+'</em></button>'; }).join('')+'</div>';
    magEl.appendChild(g); FB.grid=g; var me=FB;
    var fill=function(el){ var p=+el.getAttribute('data-tp'); if(el.getAttribute('data-ok')) return; el.setAttribute('data-ok',1);
      if(FB.k==='rev') el.innerHTML='<div class="rvp">'+rvPage(p)+'</div>'; else if(FB.k==='fc') fcRender(FB.doc,FB.it.n,p,400).then(function(r){ if(FB===me) el.innerHTML='<img alt="" src="'+r.u+'">'; },function(){});
      else { var h=FBU[FB.key+':'+p]; el.innerHTML='<img alt="" loading="lazy" src="'+(h?h.u:hImg(FB.it,p+1,330))+'">'; } };
    var tiles=[].slice.call(g.querySelectorAll('[data-tp]')), io=new IntersectionObserver(function(es){ es.forEach(function(x){ if(x.isIntersecting){ fill(x.target); io.unobserve(x.target); } }); },{root:g,rootMargin:'300px'}); tiles.forEach(function(t){ io.observe(t); });
    g.onclick=function(e){ var b=e.target.closest('[data-gi],[data-gx]'); if(!b&&e.target!==g) return; g.remove(); if(FB) FB.grid=null; io.disconnect(); if(b&&b.hasAttribute('data-gi')) fbGo(+b.getAttribute('data-gi')); };
    var on=g.querySelector('.fbgs.on'); if(on) setTimeout(function(){ on.scrollIntoView({block:'center'}); },30); }
  addEventListener('keydown',function(e){ if(!FB||!magEl.classList.contains('open')) return;
    if(e.key==='Escape'&&FB.grid){ e.stopImmediatePropagation(); e.preventDefault(); FB.grid.remove(); FB.grid=null; return; }
    if(FB.grid||(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName||'')&&e.target.type!=='range')) return;
    var k=e.key;
    if(FB.mode==='book'){ if(k==='ArrowRight'||k==='PageDown'||k===' '){ e.preventDefault(); fbTurn(1); } else if(k==='ArrowLeft'||k==='PageUp'){ e.preventDefault(); fbTurn(-1); } else if(k==='Home') fbJump(0); else if(k==='End') fbJump(FB.n-1); }
    else if(FB.mode==='scroll'){ if(k==='ArrowRight'||k==='PageDown'){ e.preventDefault(); scGo(FB.cp+1,true); } else if(k==='ArrowLeft'||k==='PageUp'){ e.preventDefault(); scGo(FB.cp-1,true); } else if(k==='+'||k==='='){ scZoomBy(1.25); } else if(k==='-'){ scZoomBy(.8); } }
    if(k==='f'||k==='F') fbFull(); },true);
  magView.addEventListener('click',function(e){ var t=e.target.closest&&e.target.closest('[data-hem],[data-go],.pgl'); if(!t) return; e.stopPropagation();
    if(t.classList.contains('pgl')){ var el=t.parentNode, p=+el.getAttribute('data-p'); t.innerHTML='<i></i>Cargando página '+(p+1); pgFill(el,p,FB.mode==='scroll'?FB.sw:FB.rw); return; }
    if(t.hasAttribute('data-go')){ fbGo(+t.getAttribute('data-go')); return; } if(t.closest('.vshelf')) kFlyFrom(t); fbOpen(t.getAttribute('data-hem'),+t.getAttribute('data-hi')); });
  magView.addEventListener('click',function(e){ var t=e.target.closest&&e.target.closest('[data-pub="rev"]'); if(t&&t.closest('.vshelf')) kFlyFrom(t); },true);
  function magIndex(){ fbOpen('rev',0,window.__revp!=null?window.__revp:null); window.__revp=null; }

  /* ============ CruzTRD Play · Vuelo Andino (motor 3D) ============ */
  var VAUD=(function(){
    var A=null, master=null, sfxG=null, musG=null, wind=null, windF=null, padG=null, muted=false, padT=null;
    try{ muted=localStorage.getItem('ctrd_play_mute')==='1'; }catch(e){}
    // Muestras reales (ElevenLabs) en media/audio/: se cargan si figuran en manifest.json; si no, se usa el sintetizador.
    var BUF={}, MAN=null, manP=null, LOOP={}, MUS={cur:null,src:null,g:null};
    function manifest(){ if(manP) return manP; manP=fetch('media/audio/manifest.json',{cache:'no-cache'}).then(function(r){ return r.ok?r.json():{files:[]}; }).then(function(m){ MAN={}; (m.files||[]).forEach(function(f){ MAN[f]=1; }); return MAN; }).catch(function(){ MAN={}; return MAN; }); return manP; }
    function load(n){ if(BUF[n]) return BUF[n].then?BUF[n]:Promise.resolve(BUF[n].b); BUF[n]=manifest().then(function(m){ if(!m[n]||!A) return null; return fetch('media/audio/'+n+'.mp3').then(function(r){ if(!r.ok) throw 0; return r.arrayBuffer(); }).then(function(ab){ return new Promise(function(res){ A.decodeAudioData(ab,res,function(){ res(null); }); }); }); }).then(function(b){ BUF[n]={b:b}; return b; },function(){ BUF[n]={b:null}; return null; }); return BUF[n]; }
    function has(n){ return BUF[n]&&BUF[n].b; }
    function smp(n,o){ if(!A||muted||!has(n)) return false; o=o||{}; var s=A.createBufferSource(), g=A.createGain(); s.buffer=BUF[n].b; s.playbackRate.value=o.rate||1; g.gain.value=o.vol==null?0.8:o.vol; s.connect(g); g.connect(sfxG); s.start(); return true; }
    function loopTo(n,gain,rate){ if(!A||!has(n)){ return false; } var L=LOOP[n]; if(!L){ var s=A.createBufferSource(), g=A.createGain(); s.buffer=BUF[n].b; s.loop=true; g.gain.value=0; s.connect(g); g.connect(sfxG); s.start(); L=LOOP[n]={s:s,g:g}; } L.g.gain.setTargetAtTime(gain,A.currentTime,0.25); if(rate) L.s.playbackRate.setTargetAtTime(rate,A.currentTime,0.3); return true; }
    var PRE=['orbe','arco','rozon','choque_condor','viento_loop','grava_loop','salto','aterrizaje','bandera','choque_bici','fruta','canasta','canje','play_sala','vuelo_tema','descenso_tema','feria_tema'];
    function ok(){ if(A) { if(A.state==='suspended') A.resume(); return true; }
      try{ A=new (window.AudioContext||window.webkitAudioContext)(); }catch(e){ return false; }
      master=A.createGain(); master.gain.value=muted?0:0.9; master.connect(A.destination); sfxG=A.createGain(); sfxG.connect(master); musG=A.createGain(); musG.gain.value=0.55; musG.connect(master);
      var n=A.createBuffer(1,A.sampleRate*2,A.sampleRate), d=n.getChannelData(0); for(var i=0;i<d.length;i++) d[i]=Math.random()*2-1;
      wind=A.createBufferSource(); wind.buffer=n; wind.loop=true; windF=A.createBiquadFilter(); windF.type='bandpass'; windF.frequency.value=500; windF.Q.value=0.7;
      var wg=A.createGain(); wg.gain.value=0; wind.connect(windF); windF.connect(wg); wg.connect(master); wind.start(); wind._g=wg;
      padG=A.createGain(); padG.gain.value=0; var lp=A.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=900; padG.connect(lp); lp.connect(master);
      PRE.forEach(function(k){ load(k); }); return true; }
    function tone(f,t0,dur,type,vol,dest){ var o=A.createOscillator(), g=A.createGain(); o.type=type||'sine'; o.frequency.value=f; g.gain.setValueAtTime(0,t0); g.gain.linearRampToValueAtTime(vol,t0+0.012); g.gain.exponentialRampToValueAtTime(0.0001,t0+dur); o.connect(g); g.connect(dest||master); o.start(t0); o.stop(t0+dur+0.05); return o; }
    var PENTA=[0,2,4,7,9,12,14,16,19,21,24,26,28];
    var CH=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]];
    function mf(m){ return 440*Math.pow(2,(m-69)/12); }
    function synthNear(){ var t=A.currentTime, s=A.createBufferSource(); s.buffer=wind.buffer; var f=A.createBiquadFilter(); f.type='bandpass'; f.Q.value=2; f.frequency.setValueAtTime(2400,t); f.frequency.exponentialRampToValueAtTime(400,t+0.35); var g=A.createGain(); g.gain.setValueAtTime(0.25,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.4); s.connect(f); f.connect(g); g.connect(master); s.start(t,Math.random()); s.stop(t+0.45); tone(mf(88),t+0.02,0.25,'sine',0.05); }
    function synthScrape(){ var t=A.currentTime, s=A.createBufferSource(); s.buffer=wind.buffer; var f=A.createBiquadFilter(); f.type='lowpass'; f.frequency.value=700; var g=A.createGain(); g.gain.setValueAtTime(0.22,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.3); s.connect(f); f.connect(g); g.connect(master); s.start(t); s.stop(t+0.32); }
    function synthRing(mu){ var t=A.currentTime; [0,4,7,12].forEach(function(s,i){ tone(mf(64+s+Math.min(mu,8)),t+i*0.045,0.6,'triangle',0.07); }); }
    function synthWin(){ var t=A.currentTime; [0,4,7,11,14].forEach(function(s,i){ tone(mf(64+s),t+i*0.08,0.9,'triangle',0.06); }); }
    function music(n){ if(!A) return; var t=A.currentTime; if(MUS.cur===n) return; if(MUS.src){ var o=MUS; o.g.gain.setTargetAtTime(0,t,0.6); var os=o.src; setTimeout(function(){ try{ os.stop(); }catch(e){} },2500); MUS={cur:null,src:null,g:null}; } if(!n) return;
      load(n).then(function(b){ if(!b||!A) return; if(MUS.cur&&MUS.cur!==n) return; var s=A.createBufferSource(), g=A.createGain(); s.buffer=b; s.loop=true; g.gain.value=0; s.connect(g); g.connect(musG); s.start(); g.gain.setTargetAtTime(1,A.currentTime,0.8); MUS={cur:n,src:s,g:g}; }); MUS.cur=n; }
    return {
      ok:ok, has:function(n){ return !!has(n); },
      get muted(){ return muted; },
      mute:function(m){ muted=m; try{ localStorage.setItem('ctrd_play_mute',m?'1':'0'); }catch(e){} if(master) master.gain.value=m?0:0.9; },
      music:music,
      wind:function(v,on){ if(!A) return; var t=A.currentTime; if(loopTo('viento_loop',on?0.18+v*0.006:0,0.85+v*0.006)){ wind._g.gain.setTargetAtTime(0,t,0.2); return; } wind._g.gain.setTargetAtTime(on?0.025+v*0.0011:0,t,0.3); windF.frequency.setTargetAtTime(380+v*11,t,0.3); },
      gravel:function(on,v){ if(!A) return; loopTo('grava_loop',on?0.35+(v||0)*0.006:0,0.8+(v||0)*0.008); },
      pad:function(on){ if(!A) return; if(has('play_sala')){ padG.gain.setTargetAtTime(0,A.currentTime,0.5); if(padT){ clearInterval(padT); padT=null; } music(on?'play_sala':null); return; }
        padG.gain.setTargetAtTime(on?0.05:0,A.currentTime,1.2); if(on&&!padT){ var k=0; var play=function(){ if(!A) return; var t=A.currentTime; CH[k%4].forEach(function(m,i){ var o=A.createOscillator(), g=A.createGain(); o.type=i?'triangle':'sine'; o.frequency.value=mf(m-12+(i?12:0)); g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(0.22,t+1.6); g.gain.linearRampToValueAtTime(0,t+6.2); o.connect(g); g.connect(padG); o.start(t); o.stop(t+6.4); }); k++; }; play(); padT=setInterval(play,5000); } if(!on&&padT){ clearInterval(padT); padT=null; } },
      orb:function(c){ if(!A||muted) return; if(smp('orbe',{rate:1+Math.min(c,12)*0.045,vol:0.55})) return; var t=A.currentTime, m=69+PENTA[Math.min(PENTA.length-1,c)]; tone(mf(m),t,0.35,'sine',0.13); tone(mf(m+12),t,0.18,'triangle',0.04); },
      ring:function(mu){ if(!A||muted) return; if(smp('arco',{rate:1+Math.min(mu,8)*0.03,vol:0.75})) return; synthRing(mu); },
      gate:function(mu){ if(!A||muted) return; if(smp('bandera',{rate:1+Math.min(mu,8)*0.03,vol:0.75})) return; synthRing(mu); },
      near:function(){ if(!A||muted) return; if(smp('rozon',{rate:0.9+Math.random()*0.2,vol:0.8})) return; synthNear(); },
      jump:function(){ if(!A||muted) return; if(smp('salto',{vol:0.8})) return; synthNear(); },
      land:function(){ if(!A||muted) return; if(smp('aterrizaje',{vol:0.85})) return; synthScrape(); },
      scrape:function(){ if(!A||muted) return; synthScrape(); },
      crash:function(kind){ if(!A||muted) return; if(smp(kind==='bike'?'choque_bici':'choque_condor',{vol:0.9})) return; var t=A.currentTime, o=A.createOscillator(), g=A.createGain(); o.type='sine'; o.frequency.setValueAtTime(140,t); o.frequency.exponentialRampToValueAtTime(38,t+0.6); g.gain.setValueAtTime(0.5,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.8); o.connect(g); g.connect(master); o.start(t); o.stop(t+0.85);
        var s=A.createBufferSource(); s.buffer=wind.buffer; var f=A.createBiquadFilter(); f.type='lowpass'; f.frequency.setValueAtTime(3000,t); f.frequency.exponentialRampToValueAtTime(200,t+0.7); var g2=A.createGain(); g2.gain.setValueAtTime(0.35,t); g2.gain.exponentialRampToValueAtTime(0.001,t+0.75); s.connect(f); f.connect(g2); g2.connect(master); s.start(t); s.stop(t+0.8); },
      fruit:function(c){ if(!A||muted) return; if(smp('fruta',{rate:1+Math.min(c,12)*0.05,vol:0.7})) return; this.orb(c); },
      basket:function(){ if(!A||muted) return; if(smp('canasta',{vol:0.8})) return; synthRing(5); },
      ui:function(){ if(!A||muted) return; var t=A.currentTime; tone(mf(76),t,0.12,'sine',0.06); tone(mf(83),t+0.06,0.16,'sine',0.05); },
      win:function(){ if(!A||muted) return; if(smp('canje',{vol:0.8})) return; synthWin(); },
      duck:function(on){ if(!A) return; musG.gain.setTargetAtTime(on?0.12:0.55,A.currentTime,0.3); sfxG.gain.setTargetAtTime(on?0.4:1,A.currentTime,0.3); }
    };
  })();

  var VUELO=(function(){
    var T=THREE, FLOOR=10.5, CH=60, CSEG=12, XSEG=36, VIEW=330, YMIN=1.4, YMAX=13;
    var FOGC=new T.Color(0.91,0.565,0.43);
    function cx(s){ return 14*Math.sin(s*0.0045)+7*Math.sin(s*0.011+1.3)+3*Math.sin(s*0.023+0.4); }
    function hash(x,y){ var h=Math.sin(x*127.1+y*311.7)*43758.5453; return h-Math.floor(h); }
    function vn(x,y){ var xi=Math.floor(x), yi=Math.floor(y), xf=x-xi, yf=y-yi, u=xf*xf*(3-2*xf), v=yf*yf*(3-2*yf);
      var a=hash(xi,yi), b=hash(xi+1,yi), c=hash(xi,yi+1), d=hash(xi+1,yi+1); return a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v; }
    function fbm(x,y){ return vn(x,y)*0.55+vn(x*2.1+5.2,y*2.1+1.3)*0.28+vn(x*4.3+9.1,y*4.3+3.7)*0.17; }
    function hgt(x,s){ var d=Math.abs(x-cx(s));
      if(d<FLOOR){ var f=-0.3+fbm(x*0.08,s*0.08)*0.45; if(d<2) f-=(2-d)*0.16; if(d>FLOOR-2.5) f+=(d-FLOOR+2.5)*0.3; return f; }
      var e=d-FLOOR; return 0.45+Math.pow(e,1.22)*0.47+(fbm(x*0.02+7,s*0.02)-0.5)*e*1.1+(fbm(x*0.07,s*0.07)-0.5)*e*0.28; }
    function rng(seed){ var s=(seed>>>0)||1; return function(){ s^=s<<13; s>>>=0; s^=s>>>17; s^=s<<5; s>>>=0; return s/4294967296; }; }
    function tcol(h,ny,r){ var c;
      if(h<1.3&&ny>0.8) c=[0.31,0.36,0.2]; else if(h>44&&ny>0.42) c=[0.96,0.88,0.85]; else if(ny<0.5) c=[0.26,0.18,0.23];
      else if(h<10) c=[0.48,0.34,0.22]; else if(h<28) c=[0.41,0.26,0.3]; else c=[0.56,0.41,0.43];
      var v=0.86+r*0.26; return [c[0]*v,c[1]*v,c[2]*v]; }
    function texGlow(){ var c=document.createElement('canvas'); c.width=c.height=64; var g=c.getContext('2d'), gr=g.createRadialGradient(32,32,0,32,32,32);
      gr.addColorStop(0,'rgba(255,255,255,1)'); gr.addColorStop(0.25,'rgba(255,255,255,.55)'); gr.addColorStop(1,'rgba(255,255,255,0)'); g.fillStyle=gr; g.fillRect(0,0,64,64); var t=new T.CanvasTexture(c); return t; }
    function texCloud(){ var c=document.createElement('canvas'); c.width=c.height=128; var g=c.getContext('2d'), r=rng(7);
      for(var i=0;i<14;i++){ var x=30+r()*68, y=48+r()*34, R=14+r()*26, gr=g.createRadialGradient(x,y,0,x,y,R); gr.addColorStop(0,'rgba(255,255,255,.34)'); gr.addColorStop(1,'rgba(255,255,255,0)'); g.fillStyle=gr; g.fillRect(0,0,128,128); }
      return new T.CanvasTexture(c); }
    function texBanner(){ var c=document.createElement('canvas'); c.width=512; c.height=96; var g=c.getContext('2d');
      g.fillStyle='#0b0e14'; g.fillRect(0,0,512,96); g.fillStyle='#2DD4A7'; g.fillRect(0,88,512,8);
      g.font='800 46px Inter, system-ui, sans-serif'; g.textAlign='center'; g.textBaseline='middle'; g.fillStyle='#f3f1ec'; var w=g.measureText('CRUZ').width, w2=g.measureText('TRD').width, x0=256-(w+w2)/2-40;
      g.textAlign='left'; g.fillText('CRUZ',x0,46); g.fillStyle='#2DD4A7'; g.fillText('TRD',x0+w,46); g.fillStyle='rgba(243,241,236,.6)'; g.font='600 26px Inter, system-ui, sans-serif'; g.fillText('PLAY',x0+w+w2+16,48);
      var t=new T.CanvasTexture(c); return t; }
    function jitterGeo(geo,amt,r){ var p=geo.attributes.position; for(var i=0;i<p.count;i++){ var y=p.getY(i); var k=hash(Math.round(p.getX(i)*100)+r*17,Math.round(y*100)+Math.round(p.getZ(i)*100)*3); var k2=hash(k*91,r); p.setX(i,p.getX(i)*(1+(k-0.5)*amt)); p.setZ(i,p.getZ(i)*(1+(k2-0.5)*amt)); }
      var g=geo.toNonIndexed(); g.computeVertexNormals(); return g; }
    function colorize(geo,fn){ var p=geo.attributes.position, n=geo.attributes.normal, col=new Float32Array(p.count*3);
      for(var i=0;i<p.count;i+=3){ var y=(p.getY(i)+p.getY(i+1)+p.getY(i+2))/3, c=fn(y,n.getY(i),hash(i,3)); for(var k=0;k<3;k++){ col[(i+k)*3]=c[0]; col[(i+k)*3+1]=c[1]; col[(i+k)*3+2]=c[2]; } }
      geo.setAttribute('color',new T.BufferAttribute(col,3)); return geo; }

    function mkCondor(){ var g=new T.Group(), dark=new T.MeshLambertMaterial({color:0x1a171d,side:T.DoubleSide}), white=new T.MeshLambertMaterial({color:0xf2ede6,side:T.DoubleSide}), head=new T.MeshLambertMaterial({color:0x9c6a60});
      var body=new T.Mesh(new T.OctahedronGeometry(1,0),dark); body.scale.set(0.26,0.2,0.95); g.add(body);
      var ruff=new T.Mesh(new T.OctahedronGeometry(1,0),white); ruff.scale.set(0.2,0.15,0.13); ruff.position.set(0,0.03,-0.66); g.add(ruff);
      var hd=new T.Mesh(new T.OctahedronGeometry(1,0),head); hd.scale.set(0.11,0.1,0.17); hd.position.set(0,0.06,-0.9); g.add(hd);
      var tail=new T.BufferGeometry(); tail.setAttribute('position',new T.Float32BufferAttribute([0,0.02,0.6, -0.36,0.04,1.32, 0.36,0.04,1.32, 0,0.02,0.6, 0.36,0.04,1.32, 0,0.06,1.42, 0,0.02,0.6, 0,0.06,1.42, -0.36,0.04,1.32],3)); tail.computeVertexNormals(); g.add(new T.Mesh(tail,dark));
      function wing(sg){ var P=[], W=[]; function q(a,b,c,d,arr){ arr.push(a[0]*sg,a[1],a[2], b[0]*sg,b[1],b[2], c[0]*sg,c[1],c[2], b[0]*sg,b[1],b[2], d[0]*sg,d[1],d[2], c[0]*sg,c[1],c[2]); }
        var LE=[[0,0,-0.32],[1.3,0.08,-0.28],[2.5,0.22,-0.06]], TE=[[0,0,0.42],[1.3,0.06,0.52],[2.45,0.2,0.4]];
        q(LE[0],LE[1],TE[0],TE[1],P); q(LE[1],LE[2],TE[1],TE[2],P);
        for(var k=0;k<5;k++){ var z0=-0.06+k*0.092, z1=z0+0.092, tip=[3.05+(2-Math.abs(k-2))*0.09, 0.3+k*0.035, -0.16+k*0.15]; P.push(2.45*sg,0.21,z0, 2.45*sg,0.21,z1, tip[0]*sg,tip[1],tip[2]); }
        q([0.4,0.035,0.16],[2.05,0.17,0.2],[0.4,0.025,0.43],[2.05,0.15,0.47],W);
        var gp=new T.Group(), ge=new T.BufferGeometry(); ge.setAttribute('position',new T.Float32BufferAttribute(P,3)); ge.computeVertexNormals(); gp.add(new T.Mesh(ge,dark));
        var gw=new T.BufferGeometry(); gw.setAttribute('position',new T.Float32BufferAttribute(W.map(function(v,i){ return i%3===1?v+0.012:v; }),3)); gw.computeVertexNormals(); gp.add(new T.Mesh(gw,white));
        gp.position.x=0.18*sg; return gp; }
      var wl=wing(-1), wr=wing(1); g.add(wl); g.add(wr); g.userData={wl:wl,wr:wr}; g.scale.setScalar(0.5); return g; }

    var UP=new T.Vector3(0,1,0);
    function mkBiker(){ var g=new T.Group(), fr=new T.MeshLambertMaterial({color:0x2DD4A7}), ti=new T.MeshLambertMaterial({color:0x17161a}), jer=new T.MeshLambertMaterial({color:0xf2ede6}), shm=new T.MeshLambertMaterial({color:0x1f2129}), hel=new T.MeshLambertMaterial({color:0xff8a3d}), sk=new T.MeshLambertMaterial({color:0xc08a6a}), spk=new T.MeshLambertMaterial({color:0x8c8f96});
      var UC=new T.CylinderGeometry(1,1,1,6);
      function bar(m,rad){ var me=new T.Mesh(UC,m); me.userData.r=rad; g.add(me); return me; }
      function setBar(me,a,b){ var d=new T.Vector3().subVectors(b,a), L=d.length()||1; me.position.copy(a).addScaledVector(d,0.5); me.scale.set(me.userData.r,L,me.userData.r); me.quaternion.setFromUnitVectors(UP,d.divideScalar(L)); }
      function V(x,y,z){ return new T.Vector3(x,y,z); }
      var RH=V(0,0.36,0.56), FH=V(0,0.36,-0.58), BB=V(0,0.32,0.02), SE=V(0,0.86,0.2), HD=V(0,0.84,-0.36), BR=V(0,1.0,-0.4);
      [[RH,BB],[RH,SE],[BB,SE],[BB,HD],[SE,HD],[HD,FH],[HD,BR]].forEach(function(q){ setBar(bar(fr,0.036),q[0],q[1]); });
      setBar(bar(ti,0.024),V(-0.34,1.0,-0.4),V(0.34,1.0,-0.4));
      var wheels=[RH,FH].map(function(h){ var w=new T.Group(), t=new T.Mesh(new T.TorusGeometry(0.36,0.055,6,20),ti); t.rotation.y=Math.PI/2; w.add(t); for(var k=0;k<3;k++){ var sp=new T.Mesh(new T.BoxGeometry(0.014,0.66,0.014),spk); sp.rotation.x=k*Math.PI/3; w.add(sp); } w.position.copy(h); g.add(w); return w; });
      var HIP=V(0,1.0,0.16), SHO=V(0,1.4,-0.2); setBar(bar(jer,0.16),HIP,SHO);
      var head=new T.Mesh(new T.SphereGeometry(0.12,10,8),sk); head.position.set(0,1.56,-0.3); g.add(head);
      var helm=new T.Mesh(new T.SphereGeometry(0.15,10,6,0,Math.PI*2,0,Math.PI*0.55),hel); helm.position.set(0,1.6,-0.31); helm.scale.set(1,1,1.25); g.add(helm);
      [-1,1].forEach(function(k){ setBar(bar(jer,0.055),V(k*0.17,1.36,-0.2),V(k*0.3,1.01,-0.4)); });
      var legs=[-1,1].map(function(k){ return {k:k,th:bar(shm,0.075),sn:bar(shm,0.055)}; });
      g.userData={wheels:wheels,legs:legs,crank:0,setBar:setBar,BB:BB,HIP:HIP}; return g; }
    function legsUpd(U){ U.legs.forEach(function(L,i){ var a=U.crank+(i?Math.PI:0), foot=new T.Vector3(L.k*0.12,U.BB.y+Math.sin(a)*0.17,U.BB.z+Math.cos(a)*0.17), hip=new T.Vector3(L.k*0.1,U.HIP.y,U.HIP.z), d=foot.clone().sub(hip), Ld=d.length(), h=Math.sqrt(Math.max(0,0.2116-(Ld/2)*(Ld/2))), perp=new T.Vector3(0,d.z,-d.y).normalize(); if(perp.z>0) perp.negate();
      var knee=hip.clone().addScaledVector(d,0.5).addScaledVector(perp,h); U.setBar(L.th,hip,knee); U.setBar(L.sn,knee,foot); }); }
    function mergeAdd(P,N,C,geo,x,y,z,sc2,ry){ var p=geo.attributes.position, n=geo.attributes.normal, c=geo.attributes.color, cs=Math.cos(ry), sn=Math.sin(ry); for(var i=0;i<p.count;i++){ var px=p.getX(i)*sc2, py=p.getY(i)*sc2, pz=p.getZ(i)*sc2; P.push(x+px*cs-pz*sn,y+py,z+px*sn+pz*cs); var nx=n.getX(i), nz=n.getZ(i); N.push(nx*cs-nz*sn,n.getY(i),nx*sn+nz*cs); C.push(c.getX(i),c.getY(i),c.getZ(i)); } }

    function create(cv,opt){
      opt=opt||{}; var R=new T.WebGLRenderer({canvas:cv,antialias:true,powerPreference:'high-performance'});
      R.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)); R.setClearColor(FOGC);
      var sc=new T.Scene(); sc.fog=new T.Fog(FOGC,55,VIEW);
      var cam=new T.PerspectiveCamera(62,1,0.1,1600); sc.add(cam);
      var SUN=new T.Vector3(-0.32,0.1,-1).normalize();
      var sky=new T.Mesh(new T.SphereGeometry(1000,32,16),new T.ShaderMaterial({side:T.BackSide,depthWrite:false,fog:false,uniforms:{sun:{value:SUN}},
        vertexShader:'varying vec3 vD; void main(){ vD=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
        fragmentShader:'uniform vec3 sun; varying vec3 vD; void main(){ float h=vD.y; vec3 hor=vec3(0.91,0.565,0.43); vec3 mid=vec3(0.45,0.25,0.42); vec3 top=vec3(0.07,0.07,0.2);'+
          'vec3 c=mix(hor,mid,smoothstep(0.0,0.2,h)); c=mix(c,top,smoothstep(0.16,0.62,h)); float s=max(dot(normalize(vD),sun),0.0);'+
          'c+=vec3(1.0,0.55,0.3)*pow(s,7.0)*0.42*(1.0-smoothstep(0.1,0.5,h)); c+=vec3(1.0,0.82,0.62)*pow(s,160.0)*0.9; c=mix(c,vec3(1.0,0.96,0.86),smoothstep(0.9986,0.9993,s));'+
          'gl_FragColor=vec4(c,1.0); }'}));
      sc.add(sky);
      var sp=[], sr=rng(99); for(var i=0;i<380;i++){ var th=sr()*Math.PI*2, ph=0.28+sr()*1.1; sp.push(Math.cos(th)*Math.cos(ph)*950,Math.sin(ph)*950,Math.sin(th)*Math.cos(ph)*950); }
      var sg=new T.BufferGeometry(); sg.setAttribute('position',new T.Float32BufferAttribute(sp,3)); var stars=new T.Points(sg,new T.PointsMaterial({color:0xfff3e0,size:1.6,sizeAttenuation:false,transparent:true,opacity:0.55,fog:false,depthWrite:false})); sc.add(stars);
      // volcanes lejanos (Cotopaxi, Chimborazo, Cayambe...)
      var volc=new T.Group(); sc.add(volc);
      [[-430,-760,190,170,0.18],[-120,-880,260,150,0.3],[260,-720,170,190,0.12],[560,-840,230,140,0.25],[-760,-700,150,120,0.22],[90,-660,110,80,0.4]].forEach(function(v,i){
        var geo=jitterGeo(new T.ConeGeometry(v[2],v[3],11,4,false),0.16,i+3);
        colorize(geo,function(y,ny,r){ var t=(y+v[3]/2)/v[3]; var rock=[0.36,0.24,0.33], snow=[1,0.9,0.86], k=t>0.62+v[4]*0.3-r*0.06?1:0, c=k?snow:rock, hz=k?0.28:0.55+(1-t)*0.25; return [c[0]*(1-hz)+0.91*hz,c[1]*(1-hz)+0.565*hz,c[2]*(1-hz)+0.43*hz]; });
        var m=new T.Mesh(geo,new T.MeshBasicMaterial({vertexColors:true,fog:false})); m.position.set(v[0],v[3]/2-18,v[1]); volc.add(m); });
      var hemi=new T.HemisphereLight(0xa8b6ff,0x6a3a48,0.85); sc.add(hemi);
      var dl=new T.DirectionalLight(0xffb98a,1.25); dl.position.set(-0.8,0.55,-0.35); sc.add(dl);
      var GLOW=texGlow(), CLOUD=texCloud(), BAN=texBanner();
      var tMat=new T.MeshLambertMaterial({vertexColors:true});
      var rMat=new T.MeshBasicMaterial({color:0xf0ae90,transparent:true,opacity:0.82});
      var oMat=new T.MeshLambertMaterial({vertexColors:true});
      var orbM=new T.MeshBasicMaterial({color:0xfff0c8}), orbG=new T.SpriteMaterial({map:GLOW,color:0xffc46b,transparent:true,blending:T.AdditiveBlending,depthWrite:false});
      var ringM=new T.MeshBasicMaterial({color:0xffcf78}), ringG=new T.SpriteMaterial({map:GLOW,color:0xff9a4a,transparent:true,opacity:0.55,blending:T.AdditiveBlending,depthWrite:false});
      var cloudM=new T.SpriteMaterial({map:CLOUD,color:0xffe3d2,transparent:true,opacity:0.75,depthWrite:false});
      var banM=new T.MeshBasicMaterial({map:BAN});
      var orbGeo=new T.OctahedronGeometry(0.36,0), ringGeo=new T.TorusGeometry(1.55,0.11,6,30);
      var SPV=[]; for(var v=0;v<6;v++){ SPV.push(colorize(jitterGeo(new T.CylinderGeometry(0.5,1,1,6,4,false),0.35,v),function(y,ny,r){ var t=y+0.5; if(t>0.93&&ny>0.3) return [0.95,0.88,0.86]; var a=[0.22,0.16,0.2], b=[0.5,0.32,0.36], v2=0.86+r*0.26; return [(a[0]+(b[0]-a[0])*t)*v2,(a[1]+(b[1]-a[1])*t)*v2,(a[2]+(b[2]-a[2])*t)*v2]; })); }
      var RDG=colorize(jitterGeo(new T.BoxGeometry(1,1,1,8,2,2),0.25,5),function(y,ny,r){ var v2=0.86+r*0.26; return ny>0.7?[0.33*v2,0.38*v2,0.21*v2]:[0.36*v2,0.24*v2,0.27*v2]; });
      var LIN=colorize(jitterGeo(new T.BoxGeometry(1,1,1,5,2,2),0.18,8),function(y,ny,r){ var v2=0.86+r*0.26; return ny>0.7?[0.55*v2,0.42*v2,0.42*v2]:[0.34*v2,0.23*v2,0.27*v2]; });
      var condor=mkCondor(); sc.add(condor);
      var biker=mkBiker(); biker.scale.setScalar(1.15); biker.visible=false; sc.add(biker); var K=0;
      var ROCK=[0,1,2].map(function(v){ return colorize(jitterGeo(new T.DodecahedronGeometry(1,0),0.3,v+11),function(y,ny,r2){ var q=0.86+r2*0.26; return ny>0.6?[0.55*q,0.45*q,0.44*q]:[0.36*q,0.27*q,0.3*q]; }); });
      var LOGG=colorize(jitterGeo(new T.CylinderGeometry(0.3,0.3,1,7,3,false),0.12,21),function(y,ny,r2){ var q=0.86+r2*0.26; return Math.abs(ny)>0.9?[0.72*q,0.55*q,0.36*q]:[0.36*q,0.24*q,0.16*q]; });
      var RAMPG=(function(){ var w=1.4,L=3.6,h=1.0, a=[-w,0,L],b=[w,0,L],c2=[w,h,0],d=[-w,h,0],e=[-w,0,0],f=[w,0,0], P=[]; [[a,b,c2],[a,c2,d],[a,d,e],[b,f,c2],[e,d,c2],[e,c2,f]].forEach(function(t){ t.forEach(function(v){ P.push(v[0],v[1],v[2]); }); });
        var g=new T.BufferGeometry(); g.setAttribute('position',new T.Float32BufferAttribute(P,3)); g.computeVertexNormals(); return colorize(g,function(y,ny,r2){ var q=0.9+r2*0.2; return ny>0.5?[0.78*q,0.56*q,0.38*q]:[0.45*q,0.3*q,0.22*q]; }); })();
      var POLE=new T.CylinderGeometry(0.05,0.05,2.3,5), poleM=new T.MeshLambertMaterial({color:0xf2ede6});
      function flagGeo(k){ var g=new T.BufferGeometry(); g.setAttribute('position',new T.Float32BufferAttribute([0,0.32,0, 0,-0.32,0, -k*0.8,0.05,0],3)); g.computeVertexNormals(); return g; }
      var FLG=[flagGeo(-1),flagGeo(1)], flagM=[new T.MeshLambertMaterial({color:0xff8a3d,side:T.DoubleSide}),new T.MeshLambertMaterial({color:0xffd36b,side:T.DoubleSide})];
      var FRA=[colorize(jitterGeo(new T.CylinderGeometry(0.3,0.34,1.4,6,3,false),0.25,31).translate(0,0.7,0),function(y,ny,r2){ var q=0.8+r2*0.35; return [0.36*q,0.27*q,0.19*q]; }),
        colorize(jitterGeo(new T.IcosahedronGeometry(0.62,0),0.4,32).scale(1,0.9,1).translate(0,1.62,0),function(y,ny,r2){ var q=0.85+r2*0.3; return ny>0.3?[0.6*q,0.68*q,0.47*q]:[0.42*q,0.5*q,0.33*q]; })];
      var trailM=new T.MeshLambertMaterial({color:0x7c5238});
      // estelas
      function mkTrail(){ var N=28, g=new T.BufferGeometry(), pos=new Float32Array(N*2*3), col=new Float32Array(N*2*3), idx=[]; for(var i=0;i<N-1;i++){ var a=i*2; idx.push(a,a+1,a+2, a+1,a+3,a+2); }
        g.setIndex(idx); g.setAttribute('position',new T.BufferAttribute(pos,3)); g.setAttribute('color',new T.BufferAttribute(col,3));
        var m=new T.Mesh(g,new T.MeshBasicMaterial({vertexColors:true,transparent:true,blending:T.AdditiveBlending,depthWrite:false,side:T.DoubleSide,fog:false})); m.frustumCulled=false; sc.add(m); return {m:m,pts:[],N:N}; }
      var trails=[mkTrail(),mkTrail()];
      // líneas de velocidad
      var SLN=90, slp=new Float32Array(SLN*6), slr=rng(3), sld=[]; for(i=0;i<SLN;i++){ var a2=slr()*Math.PI*2, rr=2.5+slr()*9; sld.push({x:Math.cos(a2)*rr,y:Math.sin(a2)*rr*0.7+1,z:-slr()*70}); }
      var slg=new T.BufferGeometry(); slg.setAttribute('position',new T.BufferAttribute(slp,3)); var slm=new T.LineSegments(slg,new T.LineBasicMaterial({color:0xfff4e8,transparent:true,opacity:0,blending:T.AdditiveBlending,depthWrite:false,fog:false})); slm.frustumCulled=false; cam.add(slm);
      // partículas
      var PP=[]; for(i=0;i<48;i++){ var spm=new T.Sprite(new T.SpriteMaterial({map:GLOW,color:0xffd08a,transparent:true,blending:T.AdditiveBlending,depthWrite:false})); spm.visible=false; sc.add(spm); PP.push({m:spm,l:0}); }
      var DU=[]; for(i=0;i<60;i++){ var dsp=new T.Sprite(new T.SpriteMaterial({map:GLOW,color:0xb88f6c,transparent:true,depthWrite:false,opacity:0.5})); dsp.visible=false; sc.add(dsp); DU.push({m:dsp,l:0}); }
      function dust(x,y,z,n,sp){ for(var i=0,c=0;i<DU.length&&c<n;i++){ var p=DU[i]; if(p.l>0) continue; c++; p.l=0.45+Math.random()*0.4; p.L=p.l; p.m.visible=true; p.m.position.set(x,y,z); p.vx=(Math.random()*2-1)*sp; p.vy=Math.random()*sp*0.7; p.vz=Math.random()*sp; p.s=0.35+Math.random()*0.45; } }
      var feathers=[]; var fGeo=new T.BufferGeometry(); fGeo.setAttribute('position',new T.Float32BufferAttribute([0,0,-0.25, 0.07,0,0.2, -0.07,0,0.2],3)); fGeo.computeVertexNormals();

      var chunks={}, obs=[], S=null, inp={nx:0,ny:-0.35,keys:{}}, raf=0, alive=true, paused=false, last=0, W=1, H=1;
      function size(){ var r=cv.parentNode.getBoundingClientRect(); W=Math.max(1,r.width); H=Math.max(1,r.height); R.setSize(W,H,false); cam.aspect=W/H; cam.updateProjectionMatrix(); }
      var ro=window.ResizeObserver?new ResizeObserver(size):null; if(ro) ro.observe(cv.parentNode); else addEventListener('resize',size); size();

      function buildChunk(ci){ var s0=ci*CH, rows=[], P=[], N=[], C=[], j, k;
        for(j=0;j<=CSEG;j++){ var s=s0+j*CH/CSEG, c=cx(s), row=[]; for(k=0;k<=XSEG;k++){ var u=k/XSEG*2-1, o=(u<0?-1:1)*Math.pow(Math.abs(u),1.6)*130, x=c+o; row.push([x,hgt(x,s),-(s-s0)]); } rows.push(row); }
        function tri(a,b,c2){ var ux=b[0]-a[0],uy=b[1]-a[1],uz=b[2]-a[2],vx=c2[0]-a[0],vy=c2[1]-a[1],vz=c2[2]-a[2], nx=uy*vz-uz*vy, ny=uz*vx-ux*vz, nz=ux*vy-uy*vx, l=Math.sqrt(nx*nx+ny*ny+nz*nz)||1; nx/=l; ny/=l; nz/=l;
          var col=tcol((a[1]+b[1]+c2[1])/3,ny,hash(a[0]*0.37+c2[2],a[2]*0.71+b[0])); [a,b,c2].forEach(function(p){ P.push(p[0],p[1]+K*p[2],p[2]); N.push(nx,ny,nz); C.push(col[0],col[1],col[2]); }); }
        for(j=0;j<CSEG;j++) for(k=0;k<XSEG;k++){ var A=rows[j][k], B=rows[j][k+1], C2=rows[j+1][k], D=rows[j+1][k+1]; if((j+k)%2){ tri(A,B,C2); tri(B,D,C2); } else { tri(A,B,D); tri(A,D,C2); } }
        var g=new T.BufferGeometry(); g.setAttribute('position',new T.Float32BufferAttribute(P,3)); g.setAttribute('normal',new T.Float32BufferAttribute(N,3)); g.setAttribute('color',new T.Float32BufferAttribute(C,3));
        var grp=new T.Group(), m=new T.Mesh(g,tMat); grp.add(m);
        var BK=S&&S.kind==='bike', RP=[], RS=BK?24:CSEG; for(j=0;j<=RS;j++){ var s1=s0+j*CH/RS, c1=cx(s1), w=BK?1.5:0.85+Math.sin(s1*0.03)*0.3, ry=BK?-0.02:-0.12, z1=-(s1-s0); RP.push(c1-w,ry+K*z1,z1, c1+w,ry+K*z1,z1); }
        var ri=[]; for(j=0;j<RS;j++){ var a=j*2; ri.push(a,a+1,a+2, a+1,a+3,a+2); } var rg=new T.BufferGeometry(); rg.setIndex(ri); rg.setAttribute('position',new T.Float32BufferAttribute(RP,3)); if(BK) rg.computeVertexNormals(); grp.add(new T.Mesh(rg,BK?trailM:rMat));
        var cr=rng(ci*7919+13);
        if(BK){ var DP=[],DN=[],DC=[]; for(j=0;j<18;j++){ var fs=s0+cr()*CH, fc=cx(fs), side=cr()<0.5?-1:1, fx=fc+side*(FLOOR-1.1+cr()*7), fz=-(fs-s0); var sc3=0.8+cr()*0.9, fy=hgt(fx,fs)+K*fz-0.05, fr2=cr()*6; mergeAdd(DP,DN,DC,FRA[0],fx,fy,fz,sc3,fr2); mergeAdd(DP,DN,DC,FRA[1],fx,fy,fz,sc3,fr2); }
          for(j=0;j<10;j++){ var bs=s0+cr()*CH, bc=cx(bs), bx=bc+(cr()<0.5?-1:1)*(2.4+cr()*9), bz=-(bs-s0), bsz=0.25+cr()*0.5; mergeAdd(DP,DN,DC,ROCK[j%3],bx,hgt(bx,bs)+K*bz,bz,bsz,cr()*6); }
          var dg=new T.BufferGeometry(); dg.setAttribute('position',new T.Float32BufferAttribute(DP,3)); dg.setAttribute('normal',new T.Float32BufferAttribute(DN,3)); dg.setAttribute('color',new T.Float32BufferAttribute(DC,3)); grp.add(new T.Mesh(dg,oMat)); }
        for(j=0;j<3;j++){ var cl=new T.Sprite(cloudM), ss=s0+cr()*CH; cl.position.set(cx(ss)+(cr()*2-1)*34,7+cr()*20+K*(-(ss-s0)),-(ss-s0)); var sz=22+cr()*30; cl.scale.set(sz,sz*0.55,1); grp.add(cl); }
        sc.add(grp); return grp; }
      function disposeGrp(g){ sc.remove(g); g.traverse(function(o){ if(o.geometry&&o.geometry!==orbGeo&&o.geometry!==ringGeo&&SPV.indexOf(o.geometry)<0&&o.geometry!==RDG&&o.geometry!==LIN&&ROCK.indexOf(o.geometry)<0&&o.geometry!==LOGG&&o.geometry!==RAMPG&&o.geometry!==POLE&&FLG.indexOf(o.geometry)<0) o.geometry.dispose(); }); }

      function addObs(o){ o.by=o.m.position.y; obs.push(o); sc.add(o.m); return o; }
      function gnd(x,s2){ return Math.max(hgt(x,s2), Math.abs(x-cx(s2))<1.6?-0.02:-9); }
      function rock(s2,x,rr){ var m=new T.Mesh(ROCK[Math.floor(S.rng()*3)],oMat); m.scale.set(rr,rr*0.8,rr); m.position.set(x,gnd(x,s2)+rr*0.35,0); m.rotation.y=S.rng()*6; return addObs({t:'rock',s:s2,x:x,r:rr,m:m}); }
      function log(s2,x,hw){ var m=new T.Mesh(LOGG,oMat); m.scale.set(1,hw*2,1); m.rotation.z=Math.PI/2; m.position.set(x,gnd(x,s2)+0.28,0); return addObs({t:'log',s:s2,x:x,hw:hw,m:m}); }
      function ramp(s2,x){ var m=new T.Mesh(RAMPG,oMat); m.position.set(x,gnd(x,s2)-0.02,0); return addObs({t:'ramp',s:s2,x:x,m:m}); }
      function gate(s2,x){ var g=new T.Group(); [-1,1].forEach(function(k,i){ var pl=new T.Mesh(POLE,poleM); pl.position.set(k*2.4,1.15,0); g.add(pl); var f=new T.Mesh(FLG[i],flagM[i]); f.position.set(k*2.4,1.98,0); g.add(f); }); g.position.set(x,gnd(x,s2),0); return addObs({t:'gate',s:s2,x:x,m:g}); }
      function borb(s2,x,h){ var o=orb(s2,x,gnd(x,s2)+h); o.h=h; return o; }
      function genBike(){ var r=S.rng, s2=S.gen, c=cx(s2), d=Math.min(1,s2/4200), gap=30-d*13, p=r(), i, o;
        if(s2<110){ for(i=0;i<5;i++) borb(s2+i*5,cx(s2+i*5),1.0); S.gen+=36; return; }
        if(p<0.22){ var off=(r()*2-1)*2.2, rr=0.75+r()*0.45+d*0.2, sx; o=rock(s2,c+off,rr); sx=c+off+(off>0?-1:1)*(rr+2); o.safe={x:sx}; for(i=0;i<4;i++) borb(s2-8+i*3,sx,1.0); }
        else if(p<0.40){ var rx=c+(r()*2-1)*1.1; o=ramp(s2,rx); o.safe={x:rx}; for(i=1;i<7;i++){ var t=i/6; borb(s2+i*3.4,rx,1.8+Math.sin(t*Math.PI)*3.4); } }
        else if(p<0.55){ var hw=2.6+r()*2.2+d, lx=c+(r()*2-1)*1.5; o=log(s2,lx,hw); o.safe={x:lx,jump:true}; borb(s2,lx,2.3); }
        else if(p<0.75){ var gx=c+(r()*2-1)*(3.5+d*2); o=gate(s2,gx); o.safe={x:gx}; borb(s2-4,gx,1.0); }
        else if(p<0.83){ o=arch(s2,c); o.safe={x:c}; }
        else { var n=3+Math.floor(d*2), k2=r()>0.5?1:-1; for(i=0;i<n;i++){ var ss=s2+i*11, cc=cx(ss), rr2=0.7+r()*0.35, oo=rock(ss,cc+k2*1.3,rr2); oo.safe={x:cc-k2*(rr2+1.9)}; borb(ss-4,cc-k2*(rr2+1.7),1.0); k2=-k2; } S.gen+=(n-1)*11; }
        if(r()<0.3){ var es=s2+gap*0.5, ec=cx(es); spire(es,ec+(r()<0.5?-1:1)*(FLOOR-0.8),1.1+r()*0.5,9+r()*8); }
        S.gen+=gap+r()*8; }
      function spire(s,x,r,hh){ var m=new T.Mesh(SPV[Math.floor(S.rng()*6)],oMat); m.scale.set(r,hh,r); m.position.set(x,hh/2-0.6,0); m.rotation.y=S.rng()*3; return addObs({t:'spire',s:s,x:x,r:r,m:m}); }
      function orb(s,x,y){ var g=new T.Group(), c=new T.Mesh(orbGeo,orbM), gl=new T.Sprite(orbG); gl.scale.set(2.2,2.2,1); g.add(c); g.add(gl); g.position.set(x,y,0); return addObs({t:'orb',s:s,x:x,y:y,m:g,c:c}); }
      function ring(s,x,y){ var g=new T.Group(), c=new T.Mesh(ringGeo,ringM), gl=new T.Sprite(ringG); gl.scale.set(6,6,1); g.add(gl); g.add(c); g.position.set(x,y,0); return addObs({t:'ring',s:s,x:x,y:y,m:g,c:c}); }
      function ridge(s,H2){ var c=cx(s), m=new T.Mesh(RDG,oMat); m.scale.set(FLOOR*2+10,H2+1,3.2); m.position.set(c,(H2+1)/2-1,0); return addObs({t:'ridge',s:s,x:c,H:H2,m:m}); }
      function arch(s,x){ var g=new T.Group(); [-1,1].forEach(function(k){ var p=new T.Mesh(SPV[Math.floor(S.rng()*6)],oMat); p.scale.set(1.35,10.4,1.35); p.position.set(k*4.6,4.6,0); g.add(p); });
        var l=new T.Mesh(LIN,oMat); l.scale.set(12.4,2.8,2.6); l.position.set(0,8.6,0); g.add(l);
        var b=new T.Mesh(new T.PlaneGeometry(6.2,1.16),banM); b.position.set(0,8.55,1.32); g.add(b); g.position.set(x,0,0);
        return addObs({t:'arch',s:s,x:x,m:g}); }

      function gen(){ var r=S.rng, s=S.gen, c=cx(s), d=Math.min(1,s/5200), gap=44-d*24, p=r(), o, i, safe;
        if(s<160){ for(i=0;i<6;i++) orb(s+i*5,cx(s+i*5)+Math.sin(i*0.6)*3,3.2+i*0.2); S.gen+=48; return; }
        if(p<0.27){ var off=(r()*2-1)*(FLOOR-3), rr=1.3+r()*0.9+d*0.4; o=spire(s,c+off,rr,16+r()*12); var side=off>0?-1:1; safe=c+off+side*(rr+3.4); o.safe={x:safe,y:3+r()*3};
          for(i=0;i<5;i++) orb(s-8+i*4,safe,o.safe.y);
        } else if(p<0.42){ var gc=(r()*2-1)*3.5, gh=2.5+(1-d)*1.4, r1=1.6+r()*0.6, r2=1.6+r()*0.6;
          o=spire(s,c+gc-gh-r1,r1,18+r()*8); var o2=spire(s+r()*2,c+gc+gh+r2,r2,18+r()*8); o.safe=o2.safe={x:c+gc,y:4+r()*4}; ring(s,c+gc,o.safe.y);
        } else if(p<0.58){ var hh=3.2+r()*2.6+d*1.4; o=ridge(s,hh); o.safe={x:c+(r()*2-1)*3,y:hh+2.6}; for(i=0;i<7;i++){ var t=(i-3)/3; orb(s-9+i*3,o.safe.x,hh+1.6+(1-t*t)*2.2); }
        } else if(p<0.78){ var ax=c+(r()*2-1)*3; o=arch(s,ax); o.safe={x:ax,y:3.8}; ring(s,ax,3.8); for(i=1;i<4;i++) orb(s-i*5,ax,3.8);
        } else { var n=3+Math.floor(d*2), k2=r()>0.5?1:-1; for(i=0;i<n;i++){ var ss=s+i*15, cc=cx(ss), rr2=1.3+r()*0.5; var oo=spire(ss,cc+k2*2.4,rr2,17+r()*9); oo.safe={x:cc-k2*(rr2+3.4),y:3.5}; for(var j=0;j<3;j++) orb(ss-6+j*3,cc-k2*(rr2+3.1),3.5); k2=-k2; } S.gen+=(n-1)*15; }
        if(r()<0.35){ var y0=5+r()*5, x0=(r()*2-1)*4; for(i=0;i<6;i++){ var s2=s+gap*0.5+i*3.4; orb(s2,cx(s2)+x0+Math.sin(i*0.9)*2.2,y0+Math.cos(i*0.9)*1.4); } }
        S.gen+=gap+r()*10; }

      function clearWorld(){ obs.forEach(function(o){ sc.remove(o.m); }); obs=[]; Object.keys(chunks).forEach(function(k){ disposeGrp(chunks[k]); }); chunks={}; trails.forEach(function(t){ t.pts=[]; }); feathers.forEach(function(f){ sc.remove(f.m); }); feathers=[]; }
      function run(mode,seed,kind){ clearWorld(); kind=kind||'fly'; K=kind==='bike'?0.085:0; S={kind:kind,air:0,gy:0,vy:0,jumps:0,jq:false,jT:0,mode:mode,seed:seed,rng:rng(seed),dist:0,v:24,x:cx(0),y:4,vx:0,vy:0,tx:cx(0),ty:4,score:0,orbPts:0,mult:1,maxMult:1,orbs:0,rings:0,near:0,time:0,alive:true,dead:0,slow:1,shake:0,gen:40,scrT:0,combo:0,comboT:0,fall:0,spin:0};
        inp.nx=0; inp.ny=-0.3; inp.jump=false; var BKk=kind==='bike'; condor.visible=!BKk; biker.visible=BKk; trails.forEach(function(t){ t.m.visible=!BKk; }); condor.rotation.set(0,0,0); biker.rotation.set(0,0,0); if(BKk){ S.y=0; S.v=17; } paused=false; if(!raf){ last=performance.now(); raf=requestAnimationFrame(frame); } }

      function burst(x,y,z,col,n,sp){ for(var i=0,c=0;i<PP.length&&c<n;i++){ var p=PP[i]; if(p.l>0) continue; c++; p.l=0.5+Math.random()*0.35; p.L=p.l; p.m.visible=true; p.m.material.color.setHex(col); p.m.position.set(x,y,z); var a=Math.random()*Math.PI*2, b=Math.random()*2-1, v=(sp||6)*(0.4+Math.random()*0.8); p.vx=Math.cos(a)*v*Math.sqrt(1-b*b); p.vy=b*v; p.vz=Math.sin(a)*v*Math.sqrt(1-b*b); p.s=0.5+Math.random()*0.7; } }
      function ev(t,d){ if(S.mode==='play'&&opt.onEvent) opt.onEvent(t,d||{}); }
      function crash(){ if(!S.alive) return; S.alive=false; S.dead=0; S.slow=0.22; S.shake=1.4; VAUD.crash(S.kind); S.fall=2; S.spin=(Math.random()<0.5?-1:1)*5;
        if(S.kind==='bike'){ dust(S.x,S.y+0.4,0,22,4); ev('crash'); return; }
        var dm=new T.MeshLambertMaterial({color:0x1a171d,side:T.DoubleSide}), wm=new T.MeshLambertMaterial({color:0xf2ede6,side:T.DoubleSide});
        for(var i=0;i<18;i++){ var m=new T.Mesh(fGeo,i%4?dm:wm); m.position.copy(condor.position); sc.add(m); feathers.push({m:m,vx:(Math.random()*2-1)*6,vy:Math.random()*6,vz:(Math.random()*2-1)*6+4,r:(Math.random()*2-1)*8}); }
        burst(condor.position.x,condor.position.y,0,0xfff2dd,16,9); ev('crash'); }

      function report(){ if(S.reported) return; S.reported=true; if(opt.onOver) opt.onOver({kind:S.kind,score:S.score,dist:Math.floor(S.dist),orbs:S.orbs,rings:S.rings,near:S.near,jumps:S.jumps,maxMult:S.maxMult,time:S.time}); }
      function bikePhys(dt,prev,c,auto){ var i, o;
        if(S.alive){
          if(auto){ var tgt=null; for(i=0;i<obs.length;i++){ o=obs[i]; if(o.s>S.dist&&o.s<S.dist+30&&o.safe){ tgt=o; break; } }
            S.tx=tgt?tgt.safe.x:c+Math.sin(S.dist*0.012)*1.0; if(tgt&&tgt.safe.jump&&tgt.s-S.dist<S.v*0.3&&S.air<=0) S.jq=true; }
          else { var kx=(inp.keys.r?1:0)-(inp.keys.l?1:0); inp.nx=Math.max(-1,Math.min(1,inp.nx+kx*dt*2.6)); S.tx=c+inp.nx*(FLOOR-1.6); if(inp.jump){ S.jq=true; inp.jump=false; } }
          var px=S.x, k=Math.min(1,dt*(auto?3.5:6)); S.x+=(S.tx-S.x)*k; var lim=FLOOR-1.4, dx=S.x-c; if(Math.abs(dx)>lim) S.x=c+Math.sign(dx)*lim; S.vx=(S.x-px)/Math.max(dt,1e-3);
          var onT=Math.abs(S.x-c)<1.6; if(!onT&&S.air<=0) S.v*=0.9;
          var rh=0; for(i=0;i<obs.length;i++){ o=obs[i]; if(o.t!=='ramp') continue; var rl=o.s-S.dist; if(rl>=0&&rl<=3.6&&Math.abs(S.x-o.x)<1.4) rh=Math.max(rh,(1-rl/3.6)*1.0); }
          if(S.jq&&S.air<=0){ S.vy=7.4; S.air=0.01+rh; S.jT=S.time; VAUD.jump(); } S.jq=false;
          if(S.air>0){ S.vy-=24*dt; S.air+=S.vy*dt; if(S.air<=rh){ S.air=0; var at=S.time-S.jT; VAUD.land(); S.shake=Math.max(S.shake,0.18); dust(S.x,S.gy+0.1,0.6,10,2.5); if(at>0.7&&!auto){ var ap=Math.round(at*60)*S.mult; S.orbPts+=ap; S.jumps++; ev('air',{pts:ap,t:at}); } } }
          S.gy=Math.max(hgt(S.x,S.dist),onT?-0.02:-9); S.y=S.gy+(S.air>0?S.air:rh);
          for(i=0;i<obs.length;i++){ o=obs[i]; if(o.done||o.s<=prev||o.s>S.dist) continue; var ddx=S.x-o.x, ad=Math.abs(ddx), hy=S.y-S.gy;
            if(o.t==='orb'){ var ddy=(hy+0.9)-o.h; if(ddx*ddx+ddy*ddy<1.7*1.7){ o.done=true; o.m.visible=false; if(!auto){ S.comboT=1.3; S.combo=Math.min(12,S.combo+1); var pts=10*S.mult; S.orbPts+=pts; S.orbs++; VAUD.orb(S.combo); ev('orb',{pts:pts}); } burst(o.x,S.y+0.9,0,0xffcf7a,5,5); } }
            else if(o.t==='gate'){ o.done=true; if(ad<2.25){ if(!auto){ S.mult=Math.min(8,S.mult+1); S.maxMult=Math.max(S.maxMult,S.mult); S.rings++; var gp=25*S.mult; S.orbPts+=gp; VAUD.gate(S.mult); ev('gate',{mult:S.mult,pts:gp}); } burst(o.x,S.y+1.2,0,0xff9a4a,10,6); } else if(!auto){ if(S.mult>1) ev('miss',{}); S.mult=1; } }
            else if(o.t==='rock'){ o.done=true; if(ad<o.r*0.85+0.35&&hy<o.r*0.95){ if(!auto) crash(); } else if(!auto&&ad<o.r+1.5){ S.near++; var np=40*S.mult; S.orbPts+=np; VAUD.near(); ev('near',{pts:np}); } }
            else if(o.t==='log'){ o.done=true; if(ad<o.hw+0.3){ if(hy<0.62){ if(!auto) crash(); } else if(!auto){ S.near++; var hp=40*S.mult; S.orbPts+=hp; ev('hop',{pts:hp}); } } }
            else if(o.t==='ramp'){ o.done=true; if(ad<1.4&&hy<1.3){ S.vy=6.2+S.v*0.17; S.air=Math.max(S.air,1.0); S.jT=S.time; VAUD.jump(); } }
            else if(o.t==='spire'){ o.done=true; if(ad<o.r*0.82+0.5){ if(!auto) crash(); } }
            else if(o.t==='arch'){ o.done=true; if(!auto&&ad>3.15&&ad<6.1) crash(); } }
          if(S.comboT>0){ S.comboT-=dt; if(S.comboT<=0) S.combo=0; }
          S.score=Math.floor(S.dist*0.5)+S.orbPts; if(!auto&&opt.onHud) opt.onHud(S);
        } else { S.dead+=dt; S.fall+=dt*14; S.y=Math.max(S.gy,S.y-S.fall*dt*0.3); S.x+=S.vx*dt*0.15; if(S.dead>0.9) S.slow=Math.min(1,S.slow+dt*2); if(S.dead>1.25) report(); } }
      function step(dt){ var auto=S.mode!=='play';
        var BK=S.kind==='bike'; if(S.alive){ S.time+=dt; S.v=BK?(auto?22:17+Math.min(29,S.dist*0.0065)):(auto?31:24+Math.min(52,S.dist*0.0105)); }
        var ds=S.v*dt*(S.alive?1:0.35), prev=S.dist; S.dist+=ds; var c=cx(S.dist);
        while(S.gen<S.dist+VIEW) (BK?genBike:gen)();
        if(BK) bikePhys(dt,prev,c,auto); else {
        if(auto){ var tgt=null; for(var i=0;i<obs.length;i++){ var o=obs[i]; if(o.s>S.dist&&o.s<S.dist+42&&o.safe){ tgt=o; break; } }
          if(tgt){ S.tx=tgt.safe.x; S.ty=tgt.safe.y; } else { var nb=null; for(i=0;i<obs.length;i++){ var q=obs[i]; if(q.t==='orb'&&!q.done&&q.s>S.dist+2&&q.s<S.dist+24){ nb=q; break; } } if(nb){ S.tx=nb.x; S.ty=nb.y; } else { S.tx=c+Math.sin(S.dist*0.01)*3; S.ty=4+Math.sin(S.dist*0.007)*1.5; } } }
        else { var kx=(inp.keys.r?1:0)-(inp.keys.l?1:0), ky=(inp.keys.u?1:0)-(inp.keys.d?1:0); inp.nx=Math.max(-1,Math.min(1,inp.nx+kx*dt*2.3)); inp.ny=Math.max(-1,Math.min(1,inp.ny+ky*dt*2.3));
          S.tx=c+inp.nx*(FLOOR-1); S.ty=YMIN+(inp.ny*0.5+0.5)*(YMAX-YMIN); }
        if(S.alive){ var px=S.x, py=S.y, k=Math.min(1,dt*(auto?3.2:6.5)); S.x+=(S.tx-S.x)*k; S.y+=(S.ty-S.y)*k; S.y=Math.max(YMIN,Math.min(YMAX,S.y));
          var lim=FLOOR-1.1+(S.y-1)*0.32, dx=S.x-c; if(Math.abs(dx)>lim){ S.x=c+Math.sign(dx)*lim; if(!auto&&S.scrT<=0){ S.scrT=0.7; S.shake=Math.max(S.shake,0.5); VAUD.scrape(); if(S.mult>1) ev('scrape',{mult:S.mult}); S.mult=1; burst(S.x+Math.sign(dx)*0.8,S.y-0.3,0,0xffe0c0,6,4); } }
          S.vx=(S.x-px)/Math.max(dt,1e-3); S.vy=(S.y-py)/Math.max(dt,1e-3); S.scrT-=dt;
          for(i=0;i<obs.length;i++){ var o2=obs[i]; if(o2.done||o2.s<=prev||o2.s>S.dist) continue; var ddx=S.x-o2.x, ddy;
            if(o2.t==='orb'){ ddy=S.y-o2.y; if(ddx*ddx+ddy*ddy<1.9*1.9){ o2.done=true; o2.m.visible=false; if(!auto){ S.comboT=1.3; S.combo=Math.min(12,S.combo+1); var pts=10*S.mult; S.orbPts+=pts; S.orbs++; VAUD.orb(S.combo); ev('orb',{pts:pts}); } burst(o2.x,o2.y,0,0xffcf7a,5,5); } }
            else if(o2.t==='ring'){ ddy=S.y-o2.y; if(Math.abs(ddx)<1.6&&Math.abs(ddy)<1.6){ o2.done=true; o2.pop=0.01; if(!auto){ S.mult=Math.min(8,S.mult+1); S.maxMult=Math.max(S.maxMult,S.mult); S.rings++; var rp=25*S.mult; S.orbPts+=rp; VAUD.ring(S.mult); ev('ring',{mult:S.mult,pts:rp}); } burst(o2.x,o2.y,0,0xff9a4a,10,7); } }
            else if(o2.t==='spire'){ var ad=Math.abs(ddx); o2.done=true; if(ad<o2.r*0.82+0.5){ if(!auto) crash(); } else if(ad<o2.r+2.4&&!auto){ S.near++; var np=50*S.mult; S.orbPts+=np; S.shake=Math.max(S.shake,0.25); VAUD.near(); ev('near',{pts:np}); } }
            else if(o2.t==='ridge'){ o2.done=true; if(S.y<o2.H+0.55&&!auto) crash(); else if(S.y<o2.H+1.6&&!auto){ S.near++; var np2=50*S.mult; S.orbPts+=np2; VAUD.near(); ev('near',{pts:np2}); } }
            else if(o2.t==='arch'){ o2.done=true; var a3=Math.abs(ddx); if(!auto&&((a3>3.15&&a3<6.1&&S.y<10.2)||(a3<6.1&&S.y>7.1&&S.y<10.2))) crash(); } }
          if(S.comboT>0){ S.comboT-=dt; if(S.comboT<=0) S.combo=0; }
          S.score=Math.floor(S.dist*0.4)+S.orbPts;
          if(!auto&&opt.onHud) opt.onHud(S);
        } else { S.dead+=dt; S.fall+=dt*14; S.y=Math.max(-0.2,S.y-S.fall*dt); S.x+=S.vx*dt*0.2; if(S.dead>0.9) S.slow=Math.min(1,S.slow+dt*2);
          if(S.dead>1.25) report(); } }
        // objetos
        for(i=obs.length-1;i>=0;i--){ var ob=obs[i]; ob.m.position.z=S.dist-ob.s; ob.m.position.y=ob.by+K*(S.dist-ob.s); if((ob.t==='orb'||ob.t==='ring')&&ob.m.position.z>2.5) ob.m.visible=false; if(ob.t==='orb'&&ob.c){ ob.c.rotation.y+=dt*2.6; ob.c.position.y=Math.sin(S.time*3+ob.s)*0.12; } if(ob.t==='gate'){ ob.m.children[1].rotation.y=Math.sin(S.time*6+ob.s)*0.25; ob.m.children[3].rotation.y=Math.sin(S.time*6+ob.s+1)*0.25; }
          if(ob.t==='ring'){ ob.c.rotation.z+=dt*0.8; if(ob.pop){ ob.pop+=dt; ob.m.scale.setScalar(1+ob.pop*4); ob.c.material=ob.c.material; if(ob.pop>0.3) ob.m.visible=false; } }
          if(ob.s<S.dist-14){ sc.remove(ob.m); obs.splice(i,1); } }
        var c0=Math.floor((S.dist-30)/CH), c1=Math.floor((S.dist+VIEW)/CH); Object.keys(chunks).forEach(function(k){ k=+k; if(k<c0||k>c1){ disposeGrp(chunks[k]); delete chunks[k]; } });
        for(var ci=c0;ci<=c1;ci++){ if(!chunks[ci]) chunks[ci]=buildChunk(ci); chunks[ci].position.z=S.dist-ci*CH; chunks[ci].position.y=K*(S.dist-ci*CH); }
        if(BK){ biker.position.set(S.x,S.y,0); var lean=Math.max(-0.6,Math.min(0.6,-S.vx*0.06)); if(S.alive){ biker.rotation.z+=(lean-biker.rotation.z)*Math.min(1,dt*8); var bp=S.air>0?Math.max(-0.35,Math.min(0.35,S.vy*0.03)):0; biker.rotation.x+=(bp-biker.rotation.x)*Math.min(1,dt*6); } else { biker.rotation.z+=S.spin*dt*0.5; biker.rotation.x-=dt*2.2; }
          var U=biker.userData; U.wheels.forEach(function(w){ w.rotation.x-=S.v*dt/0.36*(S.alive?1:0.3); }); U.crank-=S.v*dt*(S.air>0?0.4:0.55); legsUpd(U); if(S.alive&&S.air<=0&&Math.random()<0.6) dust(S.x+(Math.random()-0.5)*0.4,S.y+0.08,0.9,1,1.2); }
        else {
        // cóndor
        condor.position.set(S.x,S.y,0); var bank=Math.max(-0.9,Math.min(0.9,-S.vx*0.075)), pitch=Math.max(-0.5,Math.min(0.5,S.vy*0.05));
        if(S.alive){ condor.rotation.z+=(bank-condor.rotation.z)*Math.min(1,dt*8); condor.rotation.x+=(pitch-condor.rotation.x)*Math.min(1,dt*8); var fl=Math.sin(S.time*(S.vy>1?11:2.2))*(S.vy>1?0.32:0.06); condor.userData.wl.rotation.z=fl; condor.userData.wr.rotation.z=-fl; }
        else { condor.rotation.z+=S.spin*dt; condor.rotation.x+=dt*3; }
        // estelas
        condor.updateMatrixWorld(); [[-1.95,0.24,0.2],[1.95,0.24,0.2]].forEach(function(tp,ti){ var tr=trails[ti], v=new T.Vector3(tp[0],tp[1],tp[2]); condor.localToWorld(v); if(S.alive) tr.pts.unshift({x:v.x,y:v.y,s:S.dist-v.z}); if(tr.pts.length>tr.N||(!S.alive&&tr.pts.length)) tr.pts.pop(); while(tr.pts.length>2&&S.dist-tr.pts[tr.pts.length-1].s>2.8) tr.pts.pop();
          var P=tr.m.geometry.attributes.position, C=tr.m.geometry.attributes.color, n=tr.pts.length; for(var q=0;q<tr.N;q++){ var p=tr.pts[Math.min(q,n-1)]||{x:0,y:-50,s:S.dist}, a=q<n?(1-q/tr.N):0, w=0.045*(1-q/tr.N)+0.006, z=S.dist-p.s; P.setXYZ(q*2,p.x-w,p.y,z); P.setXYZ(q*2+1,p.x+w,p.y+w*0.6,z); var ia=a*a*(S.mode==='play'?0.75:0.5); C.setXYZ(q*2,0.18*ia,0.83*ia,0.65*ia); C.setXYZ(q*2+1,0.18*ia,0.83*ia,0.65*ia); }
          P.needsUpdate=true; C.needsUpdate=true; });
        }
        // cámara
        var la=cx(S.dist+34)-c, fov=BK?58+Math.max(0,S.v-17)*0.5:60+Math.max(0,S.v-24)*0.32; cam.fov+=(fov-cam.fov)*Math.min(1,dt*2); cam.updateProjectionMatrix();
        if(BK){ var bxp=S.x*0.86+c*0.14, byp=S.y+2.15+S.air*0.2; cam.position.x+=(bxp-cam.position.x)*Math.min(1,dt*5); cam.position.y+=(byp-cam.position.y)*Math.min(1,dt*6); cam.position.z=6.4; cam.lookAt(S.x*0.9+c*0.1+la*0.5,S.y+0.55-K*16,-16); cam.rotateZ(Math.max(-0.1,Math.min(0.1,-S.vx*0.01))); }
        else { var cxp=S.x*0.82+c*0.18, cyp=S.y+2.9+Math.max(0,4-S.y)*0.25; cam.position.x+=(cxp-cam.position.x)*Math.min(1,dt*5); cam.position.y+=(cyp-cam.position.y)*Math.min(1,dt*5); cam.position.z=7.6;
        cam.lookAt(S.x*0.88+c*0.12+la*0.55,S.y-0.1,-16); cam.rotateZ(Math.max(-0.12,Math.min(0.12,-S.vx*0.011))); }
        if(S.shake>0){ cam.position.x+=(Math.random()*2-1)*S.shake*0.3; cam.position.y+=(Math.random()*2-1)*S.shake*0.3; S.shake=Math.max(0,S.shake-dt*2.6); }
        sky.position.copy(cam.position); stars.position.copy(cam.position); volc.position.set(cam.position.x*0.96,0,0);
        // líneas de velocidad
        var sa=BK?Math.max(0,Math.min(0.32,(S.v-22)/50)):Math.max(0,Math.min(0.42,(S.v-30)/70)); slm.material.opacity=S.mode==='play'?sa:sa*0.4; for(i=0;i<SLN;i++){ var L=sld[i]; L.z+=S.v*dt*1.6; if(L.z>2) L.z-=72; var len=1+S.v*0.05; slp[i*6]=L.x; slp[i*6+1]=L.y; slp[i*6+2]=L.z; slp[i*6+3]=L.x; slp[i*6+4]=L.y; slp[i*6+5]=L.z-len; } slg.attributes.position.needsUpdate=true;
        for(i=0;i<PP.length;i++){ var pp=PP[i]; if(pp.l<=0) continue; pp.l-=dt; if(pp.l<=0){ pp.m.visible=false; continue; } pp.m.position.x+=pp.vx*dt; pp.m.position.y+=pp.vy*dt; pp.m.position.z+=pp.vz*dt+ds; var f=pp.l/pp.L; pp.m.scale.setScalar(pp.s*f+0.1); pp.m.material.opacity=f; }
        for(i=0;i<DU.length;i++){ var du=DU[i]; if(du.l<=0) continue; du.l-=dt; if(du.l<=0){ du.m.visible=false; continue; } du.m.position.x+=du.vx*dt; du.m.position.y+=du.vy*dt; du.m.position.z+=du.vz*dt+ds; var fd=du.l/du.L; du.m.scale.setScalar(du.s*(1.6-fd)); du.m.material.opacity=fd*0.45; }
        for(i=0;i<feathers.length;i++){ var fe=feathers[i]; fe.vy-=9*dt; fe.vx*=0.98; fe.m.position.x+=fe.vx*dt; fe.m.position.y=Math.max(-0.3,fe.m.position.y+fe.vy*dt); fe.m.position.z+=fe.vz*dt+ds; fe.m.rotation.x+=fe.r*dt; fe.m.rotation.y+=fe.r*0.7*dt; }
        VAUD.wind(BK?S.v*0.6:S.v,S.mode==='play'&&S.alive); VAUD.gravel(BK&&S.mode==='play'&&S.alive&&S.air<=0,S.v);
      }
      function frame(now){ if(!alive) return; raf=requestAnimationFrame(frame); var dt=Math.min(0.05,(now-last)/1000); last=now; if(paused||!S) return; step(dt*(S.slow||1)); R.render(sc,cam); }

      // entrada
      var drag=null;
      function rel(e){ var r=cv.getBoundingClientRect(); return {x:(e.clientX-r.left)/r.width,y:(e.clientY-r.top)/r.height,w:r.width,h:r.height}; }
      function pd(e){ if(!S||S.mode!=='play') return; var p=rel(e); drag={x:p.x,y:p.y,nx:inp.nx,ny:inp.ny,t:e.pointerType,t0:performance.now()}; if(e.pointerType==='mouse'){ if(S.kind==='bike') inp.jump=true; pm(e); } }
      function pm(e){ if(!S||S.mode!=='play') return; var p=rel(e);
        if(e.pointerType==='mouse'){ inp.nx=Math.max(-1,Math.min(1,(p.x*2-1)*1.2)); if(S.kind==='bike') return; inp.ny=Math.max(-1,Math.min(1,-(p.y*2-1)*1.25+0.1)); return; }
        if(!drag) return; e.preventDefault(); if(S.kind==='bike'){ inp.nx=Math.max(-1,Math.min(1,drag.nx+(p.x-drag.x)*2.8)); if(drag.y-p.y>0.07&&!drag.j){ drag.j=true; inp.jump=true; } return; } inp.nx=Math.max(-1,Math.min(1,drag.nx+(p.x-drag.x)*2.8)); inp.ny=Math.max(-1,Math.min(1,drag.ny-(p.y-drag.y)*2.6)); }
      function pu(e){ if(drag&&S&&S.kind==='bike'&&drag.t!=='mouse'&&!drag.j&&performance.now()-drag.t0<260){ var p=rel(e); if(Math.abs(p.x-drag.x)<0.03&&Math.abs(p.y-drag.y)<0.03) inp.jump=true; } drag=null; }
      var KM={ArrowLeft:'l',KeyA:'l',ArrowRight:'r',KeyD:'r',ArrowUp:'u',KeyW:'u',ArrowDown:'d',KeyS:'d',Space:'j'};
      function kd(e){ if(!S||S.mode!=='play') return; var k=KM[e.code]; if(k){ e.preventDefault(); if(S.kind==='bike'&&(k==='u'||k==='j')){ if(!e.repeat) inp.jump=true; return; } inp.keys[k]=true; } }
      function ku(e){ var k=KM[e.code]; if(k) inp.keys[k]=false; }
      var IE=opt.inputEl||cv; IE.addEventListener('pointerdown',pd); IE.addEventListener('pointermove',pm,{passive:false}); addEventListener('pointerup',pu); addEventListener('pointercancel',pu); addEventListener('keydown',kd); addEventListener('keyup',ku);
      return {
        run:run, get state(){ return S; },
        pause:function(b){ paused=b; if(!b) last=performance.now(); VAUD.wind(0,false); VAUD.gravel(false); },
        destroy:function(){ alive=false; cancelAnimationFrame(raf); raf=0; clearWorld(); if(ro) ro.disconnect(); else removeEventListener('resize',size);
          IE.removeEventListener('pointerdown',pd); IE.removeEventListener('pointermove',pm); removeEventListener('pointerup',pu); removeEventListener('pointercancel',pu); removeEventListener('keydown',kd); removeEventListener('keyup',ku);
          VAUD.wind(0,false); VAUD.gravel(false); sc.traverse(function(o){ if(o.geometry) o.geometry.dispose(); if(o.material){ if(o.material.map) o.material.map.dispose(); o.material.dispose(); } }); R.dispose(); try{ R.forceContextLoss(); }catch(e){} }
      };
    }
    return {create:create};
  })();
  /* ============ CruzTRD Play · Feria (puzzle diario de frutas ecuatorianas) ============ */
  var FERIA=(function(){
    var N=7, NT=6;
    var NAMES=['maracuyá','naranjilla','mora','guanábana','tomate de árbol','pitahaya'];
    var JUICE=['#ffd23f','#ff8a1f','#6a1f6e','#7fb043','#e8452c','#ff3d8f'];
    function rng(seed){ var s=(seed>>>0)||1; return function(){ s^=s<<13; s>>>=0; s^=s>>>17; s^=s<<5; s>>>=0; return s/4294967296; }; }
    function rad(g,x,y,r,a,b,ox,oy){ var gr=g.createRadialGradient(x+(ox||-0.35)*r,y+(oy||-0.4)*r,r*0.1,x,y,r*1.05); gr.addColorStop(0,a); gr.addColorStop(1,b); return gr; }
    function hl(g,x,y,r){ g.save(); g.globalAlpha=0.55; g.fillStyle='#fff'; g.beginPath(); g.ellipse(x-r*0.36,y-r*0.42,r*0.26,r*0.15,-0.6,0,Math.PI*2); g.fill(); g.restore(); }
    function leaf(g,x,y,l,w,ang,col){ g.save(); g.translate(x,y); g.rotate(ang); g.fillStyle=col; g.beginPath(); g.moveTo(0,0); g.quadraticCurveTo(l*0.5,-w,l,0); g.quadraticCurveTo(l*0.5,w,0,0); g.fill(); g.restore(); }
    function fruit(g,t,x,y,R){ var i,a;
      g.save(); g.fillStyle='rgba(0,0,0,.28)'; g.beginPath(); g.ellipse(x,y+R*0.9,R*0.78,R*0.2,0,0,Math.PI*2); g.fill(); g.restore();
      if(t===0){ g.fillStyle=rad(g,x,y,R,'#fff3a0','#d99a00'); g.beginPath(); g.arc(x,y,R*0.92,0,Math.PI*2); g.fill(); g.fillStyle='rgba(120,70,0,.22)'; for(i=0;i<14;i++){ a=i*2.4; var rr=R*(0.25+(i%5)*0.13); g.beginPath(); g.arc(x+Math.cos(a)*rr,y+Math.sin(a)*rr,R*0.045,0,Math.PI*2); g.fill(); }
        g.strokeStyle='#6b4a1f'; g.lineWidth=R*0.1; g.lineCap='round'; g.beginPath(); g.moveTo(x,y-R*0.86); g.quadraticCurveTo(x+R*0.08,y-R*1.1,x+R*0.25,y-R*1.15); g.stroke(); hl(g,x,y,R); }
      else if(t===1){ g.fillStyle=rad(g,x,y,R,'#ffd08a','#e0600c'); g.beginPath(); g.arc(x,y+R*0.04,R*0.9,0,Math.PI*2); g.fill(); g.fillStyle='rgba(255,255,255,.12)'; g.beginPath(); g.arc(x,y+R*0.04,R*0.9,0,Math.PI*2); g.fill();
        for(i=0;i<5;i++) leaf(g,x,y-R*0.78,R*0.5,R*0.16,-Math.PI/2+(i-2)*0.62,'#3f7a25'); g.fillStyle='#2f5a1c'; g.beginPath(); g.arc(x,y-R*0.8,R*0.1,0,Math.PI*2); g.fill(); hl(g,x,y,R); }
      else if(t===2){ var P=[[0,-0.5],[-0.36,-0.3],[0.36,-0.3],[-0.48,0.06],[0,-0.08],[0.48,0.06],[-0.3,0.42],[0.3,0.42],[0,0.3],[0,0.72]]; leaf(g,x,y-R*0.7,R*0.5,R*0.17,-2.3,'#4b8a2e'); leaf(g,x,y-R*0.7,R*0.5,R*0.17,-0.85,'#3f7a25');
        P.forEach(function(p){ var px=x+p[0]*R, py=y+p[1]*R, r2=R*0.3; g.fillStyle=rad(g,px,py,r2,'#b05ab8','#2a0634'); g.beginPath(); g.arc(px,py,r2,0,Math.PI*2); g.fill(); g.fillStyle='rgba(255,255,255,.6)'; g.beginPath(); g.arc(px-r2*0.35,py-r2*0.35,r2*0.18,0,Math.PI*2); g.fill(); }); }
      else if(t===3){ g.save(); g.translate(x,y); g.rotate(-0.25); g.fillStyle=rad(g,0,0,R,'#cfe9a0','#3f6b22'); g.beginPath(); g.moveTo(0,-R*0.95); g.bezierCurveTo(R*0.95,-R*0.75,R*0.9,R*0.7,0,R*0.95); g.bezierCurveTo(-R*0.9,R*0.7,-R*0.95,-R*0.75,0,-R*0.95); g.fill();
        g.fillStyle='#2d4f18'; for(var yy=-3;yy<=3;yy++) for(var xx=-3;xx<=3;xx++){ var sx=xx*R*0.24+(yy%2?R*0.12:0), sy=yy*R*0.26; if(sx*sx/(R*R*0.62)+sy*sy/(R*R*0.75)>1) continue; g.beginPath(); g.moveTo(sx-R*0.04,sy+R*0.03); g.quadraticCurveTo(sx,sy-R*0.08,sx+R*0.07,sy-R*0.06); g.quadraticCurveTo(sx+R*0.01,sy,sx-R*0.04,sy+R*0.03); g.fill(); }
        g.restore(); hl(g,x,y,R); }
      else if(t===4){ g.fillStyle=rad(g,x,y,R,'#ffb08a','#b3201a'); g.beginPath(); g.ellipse(x,y+R*0.08,R*0.7,R*0.92,0,0,Math.PI*2); g.fill(); g.strokeStyle='rgba(255,220,180,.25)'; g.lineWidth=R*0.05; g.beginPath(); g.ellipse(x,y+R*0.08,R*0.45,R*0.8,0,-2.4,-0.8); g.stroke();
        for(i=0;i<4;i++) leaf(g,x,y-R*0.78,R*0.38,R*0.12,-Math.PI/2+(i-1.5)*0.8,'#2f5a1c'); g.strokeStyle='#3d5a1f'; g.lineWidth=R*0.09; g.lineCap='round'; g.beginPath(); g.moveTo(x,y-R*0.82); g.lineTo(x+R*0.12,y-R*1.12); g.stroke(); hl(g,x,y,R); }
      else { for(i=0;i<10;i++){ a=i/10*Math.PI*2+0.3; var bx=x+Math.cos(a)*R*0.62, by=y+Math.sin(a)*R*0.78; g.save(); g.translate(bx,by); g.rotate(a+Math.PI/2); g.fillStyle='#ff5aa8'; g.beginPath(); g.moveTo(-R*0.14,0); g.quadraticCurveTo(0,-R*0.42,R*0.06,-R*0.46); g.quadraticCurveTo(R*0.05,-R*0.2,R*0.14,0); g.fill(); g.fillStyle='#7cc243'; g.beginPath(); g.arc(R*0.05,-R*0.42,R*0.06,0,Math.PI*2); g.fill(); g.restore(); }
        g.fillStyle=rad(g,x,y,R,'#ffa3cf','#a8105f'); g.beginPath(); g.ellipse(x,y,R*0.72,R*0.86,0,0,Math.PI*2); g.fill(); g.fillStyle='rgba(124,194,67,.85)'; for(i=0;i<6;i++){ a=i*1.05; g.beginPath(); g.ellipse(x+Math.cos(a)*R*0.38,y+Math.sin(a)*R*0.48,R*0.12,R*0.06,a,0,Math.PI*2); g.fill(); } hl(g,x,y,R); } }
    function special(g,sp,x,y,R,t){ g.save();
      if(sp==='h'||sp==='v'){ g.translate(x,y); if(sp==='v') g.rotate(Math.PI/2); var gr=g.createLinearGradient(-R,0,R,0); gr.addColorStop(0,'rgba(255,247,226,0)'); gr.addColorStop(0.5,'rgba(255,247,226,.95)'); gr.addColorStop(1,'rgba(255,247,226,0)'); g.fillStyle=gr; g.fillRect(-R*1.05,-R*0.11,R*2.1,R*0.22);
        g.fillStyle='#fff7e2'; [-1,1].forEach(function(k){ g.beginPath(); g.moveTo(k*R*1.05,0); g.lineTo(k*R*0.78,-R*0.2); g.lineTo(k*R*0.78,R*0.2); g.fill(); }); }
      else if(sp==='b'){ g.strokeStyle='rgba(255,214,120,'+(0.7+Math.sin(t*6)*0.25)+')'; g.lineWidth=R*0.14; g.setLineDash([R*0.22,R*0.12]); g.beginPath(); g.arc(x,y,R*1.02,t*1.5,t*1.5+Math.PI*2); g.stroke(); }
      g.restore(); }
    function mixed(g,x,y,R,t){ for(var i=0;i<6;i++){ g.fillStyle=JUICE[i]; g.beginPath(); g.moveTo(x,y); g.arc(x,y,R*0.86,t+i*Math.PI/3,t+(i+1)*Math.PI/3); g.fill(); } g.fillStyle=rad(g,x,y,R*0.5,'#fffbe8','#ffd36b'); g.beginPath(); g.arc(x,y,R*0.42,0,Math.PI*2); g.fill();
      g.strokeStyle='rgba(255,255,255,.9)'; g.lineWidth=R*0.07; g.beginPath(); g.arc(x,y,R*0.88,0,Math.PI*2); g.stroke(); hl(g,x,y,R); }
    function icon(t,px){ var c=document.createElement('canvas'), d=Math.min(2,window.devicePixelRatio||1); c.width=c.height=px*d; c.style.width=c.style.height=px+'px'; var g=c.getContext('2d'); g.scale(d,d); fruit(g,t,px/2,px/2-px*0.03,px*0.36); return c; }

    function create(host,opt){
      host.innerHTML='<div class="frWrap"><div class="frTop"><div class="frOrder"><span class="frK">Pedido del día</span><div class="frGoals"></div></div><div class="frMv"><b>0</b><span>movimientos</span></div><div class="frSc"><b>0</b><span>puntos</span></div></div><div class="frBw"><canvas class="frCv"></canvas></div><div class="frHint">Desliza una fruta hacia su vecina · 3 iguales en línea · 4 hacen una canasta en línea, 5 una canasta mixta</div></div>';
      var cv=host.querySelector('.frCv'), g=cv.getContext('2d'), bw=host.querySelector('.frBw'), elM=host.querySelector('.frMv b'), elS=host.querySelector('.frSc b'), elG=host.querySelector('.frGoals');
      var G=[], dying=[], parts=[], beams=[], pops=[], S=null, cs=40, dpr=1, raf=0, alive=true, last=0, cache={}, sel=null, drag=null, idleT=0, hint=null;
      function size(){ var r=bw.getBoundingClientRect(), side=Math.max(200,Math.floor(Math.min(r.width,r.height))); dpr=Math.min(2,window.devicePixelRatio||1); cv.style.width=cv.style.height=side+'px'; cv.width=cv.height=side*dpr; cs=side/N; cache={}; }
      var ro=window.ResizeObserver?new ResizeObserver(size):null; if(ro) ro.observe(bw); else addEventListener('resize',size);
      function spr(t){ var k=t; if(cache[k]) return cache[k]; var c=document.createElement('canvas'), w=Math.ceil(cs*dpr*1.35); c.width=c.height=w; var gg=c.getContext('2d'); fruit(gg,t,w/2,w/2-w*0.02,cs*dpr*0.41); cache[k]=c; return c; }
      function tile(t,c,r,y0){ return {t:t,sp:0,x:c,y:y0==null?r:y0,vy:0,s:1}; }
      function at(c,r){ return c>=0&&r>=0&&c<N&&r<N?G[r][c]:null; }
      function same(a,b){ return a&&b&&a.sp!=='c'&&b.sp!=='c'&&a.t===b.t; }
      function runs(){ var R=[], r, c, L;
        for(r=0;r<N;r++){ c=0; while(c<N){ L=1; while(c+L<N&&same(G[r][c],G[r][c+L])) L++; if(L>=3) R.push({d:'h',r:r,c:c,L:L}); c+=L; } }
        for(c=0;c<N;c++){ r=0; while(r<N){ L=1; while(r+L<N&&same(G[r][c],G[r+L][c])) L++; if(L>=3) R.push({d:'v',r:r,c:c,L:L}); r+=L; } } return R; }
      function cellsOf(u){ var o=[]; for(var i=0;i<u.L;i++) o.push(u.d==='h'?[u.c+i,u.r]:[u.c,u.r+i]); return o; }
      function hasMove(){ for(var r=0;r<N;r++) for(var c=0;c<N;c++){ if(G[r][c].sp==='c') return [[c,r],[c,r]]; var nb=[[c+1,r],[c,r+1]]; for(var k=0;k<2;k++){ var q=nb[k]; if(q[0]>=N||q[1]>=N) continue; sw(c,r,q[0],q[1]); var ok=runs().length>0; sw(c,r,q[0],q[1]); if(ok) return [[c,r],q]; } } return null; }
      function sw(c1,r1,c2,r2){ var t=G[r1][c1]; G[r1][c1]=G[r2][c2]; G[r2][c2]=t; }
      function fill(){ G=[]; for(var r=0;r<N;r++){ G.push([]); for(var c=0;c<N;c++){ var t, k=0; do{ t=Math.floor(S.rng()*NT); k++; } while(k<20&&((c>=2&&G[r][c-1].t===t&&G[r][c-2].t===t)||(r>=2&&G[r-1][c].t===t&&G[r-2][c].t===t))); G[r].push(tile(t,c,r,r-N-1-Math.random()*2)); } } if(!hasMove()) fill(); }
      function shuffle(){ var L=[]; G.forEach(function(row){ row.forEach(function(t){ if(t.sp!=='c') L.push(t.t); }); }); var n=0; do{ for(var i=L.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)), q=L[i]; L[i]=L[j]; L[j]=q; } var k=0; G.forEach(function(row){ row.forEach(function(t){ if(t.sp!=='c') t.t=L[k++]; }); }); n++; } while(n<30&&(runs().length||!hasMove())); pop('Barajando la feria',N/2,N/2,'#fff'); }
      function pop(txt,c,r,col){ pops.push({txt:txt,x:c,y:r,l:1,col:col||'#FFE0A6'}); }
      function goalsHtml(){ elG.innerHTML=''; S.goals.forEach(function(go){ var d=document.createElement('div'); d.className='frG'+(go.got>=go.n?' ok':''); d.appendChild(icon(go.t,30)); var b=document.createElement('b'); b.textContent=Math.min(go.got,go.n)+'/'+go.n; d.appendChild(b); go.el=b; go.box=d; elG.appendChild(d); }); }
      function hud(){ elM.textContent=S.moves; elS.textContent=S.score.toLocaleString('es-EC'); S.goals.forEach(function(go){ go.el.textContent=Math.min(go.got,go.n)+'/'+go.n; go.box.classList.toggle('ok',go.got>=go.n); }); host.querySelector('.frMv').classList.toggle('low',S.moves<=5); }
      function run(seed){ var r=rng(seed); S={rng:r,score:0,moves:20+Math.floor(r()*5),state:'fall',casc:0,maxC:0,fr:0,spc:0,won:false,piv:null,t:0,ended:false};
        var a=Math.floor(r()*NT), b=(a+1+Math.floor(r()*(NT-1)))%NT; S.goals=[{t:a,n:18+Math.floor(r()*6),got:0},{t:b,n:14+Math.floor(r()*6),got:0}];
        dying=[]; parts=[]; beams=[]; pops=[]; sel=null; size(); fill(); goalsHtml(); hud(); if(!raf){ last=performance.now(); raf=requestAnimationFrame(frame); } }
      function clearSet(set,swapC){ // set: mapa "c,r" -> true ; activa especiales en cadena
        var q=Object.keys(set), seen={}, i;
        while(q.length){ var k=q.pop(); if(seen[k]) continue; seen[k]=1; var p=k.split(','), c=+p[0], r=+p[1], tl=G[r][c]; if(!tl) continue;
          if(tl.sp==='h'||tl.sp==='v'){ beams.push({d:tl.sp,c:c,r:r,l:1}); for(i=0;i<N;i++){ var kk=tl.sp==='h'?(i+','+r):(c+','+i); if(!set[kk]){ set[kk]=1; q.push(kk); } } VAUD.ring(3); }
          else if(tl.sp==='b'){ for(var dy=-1;dy<=1;dy++) for(var dx=-1;dx<=1;dx++){ var kb=(c+dx)+','+(r+dy); if(at(c+dx,r+dy)&&!set[kb]){ set[kb]=1; q.push(kb); } } beams.push({d:'b',c:c,r:r,l:1}); VAUD.ring(5); }
          else if(tl.sp==='c'){ var tt=swapC!=null?swapC:Math.floor(Math.random()*NT); for(var rr=0;rr<N;rr++) for(var cc=0;cc<N;cc++){ var kc=cc+','+rr; if(G[rr][cc]&&G[rr][cc].t===tt&&!set[kc]){ set[kc]=1; q.push(kc); } } beams.push({d:'c',c:c,r:r,l:1}); VAUD.ring(7); } }
        var n=0; Object.keys(set).forEach(function(k){ var p=k.split(','), c=+p[0], r=+p[1], tl=G[r][c]; if(!tl) return; n++; S.fr++; S.goals.forEach(function(go){ if(go.t===tl.t&&tl.sp!=='c') go.got++; });
          for(var j=0;j<5;j++) parts.push({x:c+0.5,y:r+0.5,vx:(Math.random()*2-1)*3,vy:-Math.random()*4-1,l:0.6+Math.random()*0.3,col:JUICE[tl.t]||'#fff'});
          dying.push({t:tl.t,sp:tl.sp,x:c,y:r,s:1}); G[r][c]=null; });
        var gain=n*10*Math.max(1,S.casc); S.score+=gain; return gain; }
      function resolve(swapC){ var R=runs(); if(!R.length) return false; S.casc++; S.maxC=Math.max(S.maxC,S.casc);
        var set={}, keep={}, inH={}, inV={};
        R.forEach(function(u){ cellsOf(u).forEach(function(p){ set[p[0]+','+p[1]]=1; (u.d==='h'?inH:inV)[p[0]+','+p[1]]=1; }); });
        var mk=[]; R.forEach(function(u){ var cl=cellsOf(u), pv=null; if(S.piv) cl.forEach(function(p){ if(p[0]===S.piv[0]&&p[1]===S.piv[1]) pv=p; }); if(!pv) pv=cl[Math.floor(cl.length/2)];
          var t=G[pv[1]][pv[0]].t; if(u.L>=5) mk.push({p:pv,sp:'c',t:-1}); else if(u.L===4) mk.push({p:pv,sp:u.d,t:t}); });
        Object.keys(inH).forEach(function(k){ if(inV[k]){ var p=k.split(','); mk.push({p:[+p[0],+p[1]],sp:'b',t:G[+p[1]][+p[0]].t}); } });
        var gain=clearSet(set,swapC);
        mk.forEach(function(m){ var c=m.p[0], r=m.p[1]; if(G[r][c]) return; var tl=tile(m.t<0?0:m.t,c,r); tl.sp=m.sp; if(m.sp==='c') tl.t=-1; tl.s=0.2; G[r][c]=tl; S.spc++; pop(m.sp==='c'?'¡Canasta mixta!':(m.sp==='b'?'¡Canasta!':'¡Canasta en línea!'),c+0.5,r,'#fff'); VAUD.basket(); });
        VAUD.fruit(Math.min(12,S.casc*2)); if(S.casc>1) pop('Combo ×'+S.casc+'  +'+gain,N/2,1.2);
        S.piv=null; S.state='pop'; S.t=0.17; hud(); return true; }
      function gravity(){ for(var c=0;c<N;c++){ var w=N-1; for(var r=N-1;r>=0;r--){ if(G[r][c]){ if(w!==r){ G[w][c]=G[r][c]; G[r][c]=null; } w--; } } var sp=0; for(var r2=w;r2>=0;r2--){ sp++; G[r2][c]=tile(Math.floor(S.rng()*NT),c,r2,-sp-0.2); } } S.state='fall'; }
      function settled(){ for(var r=0;r<N;r++) for(var c=0;c<N;c++){ var t=G[r][c]; if(!t||Math.abs(t.x-c)>0.001||Math.abs(t.y-r)>0.001) return false; } return !dying.length; }
      function finish(){ if(S.ended) return; S.ended=true; S.state='over'; var bonus=0; if(S.won){ bonus=S.moves*60; S.score+=bonus; VAUD.win(); } hud();
        setTimeout(function(){ if(alive&&opt.onOver) opt.onOver({kind:'feria',score:S.score,won:S.won,left:S.moves,bonus:bonus,fruits:S.fr,maxC:S.maxC,specials:S.spc,goals:S.goals.map(function(g2){ return {t:g2.t,n:g2.n,got:Math.min(g2.got,g2.n)}; })}); },S.won?1100:700); }
      function afterSettle(){ if(resolve(null)) return; S.casc=0; var done=S.goals.every(function(go){ return go.got>=go.n; });
        if(done){ S.won=true; pop('¡Pedido completo!',N/2,N/2-0.4,'#FFE0A6'); finish(); return; }
        if(S.moves<=0){ pop('Sin movimientos',N/2,N/2-0.4,'#ffb4a0'); finish(); return; }
        if(!hasMove()) shuffle(); S.state='idle'; idleT=0; hint=null; }
      function trySwap(a,b){ if(S.state!=='idle') return; var A=G[a[1]][a[0]], B=G[b[1]][b[0]]; if(!A||!B) return; sel=null; hint=null; VAUD.ok(); VAUD.ui();
        sw(a[0],a[1],b[0],b[1]);
        if(A.sp==='c'||B.sp==='c'){ S.moves--; var set={}; if(A.sp==='c'&&B.sp==='c'){ for(var r=0;r<N;r++) for(var c=0;c<N;c++) set[c+','+r]=1; } else { var C=A.sp==='c'?A:B, O=A.sp==='c'?B:A; var pc=A.sp==='c'?b:a; set[pc[0]+','+pc[1]]=1; var po=A.sp==='c'?a:b; set[po[0]+','+po[1]]=1; S.casc=1; clearSet(set,O.t); S.state='pop'; S.t=0.2; hud(); return; } S.casc=1; clearSet(set,null); S.state='pop'; S.t=0.2; hud(); return; }
        if(runs().length){ S.moves--; S.piv=b; S.casc=0; S.state='swap'; S.after=function(){ resolve(null); }; hud(); }
        else { S.state='swap'; S.after=function(){ sw(a[0],a[1],b[0],b[1]); VAUD.scrape(); S.state='swapback'; }; } }
      function update(dt){ var r,c,t;
        for(r=0;r<N;r++) for(c=0;c<N;c++){ t=G[r][c]; if(!t) continue; var dx=c-t.x; if(Math.abs(dx)>0.001) t.x+=Math.sign(dx)*Math.min(Math.abs(dx),dt*8);
          var dy=r-t.y; if(dy>0.001){ if(S.state==='fall'||S.state==='idle'){ t.vy=Math.min(t.vy+50*dt,20); t.y=Math.min(r,t.y+t.vy*dt); if(t.y>=r){ t.y=r; t.vy=0; } } else t.y+=Math.min(dy,dt*8); } else if(dy<-0.001) t.y+=Math.max(dy,-dt*8); else t.vy=0;
          if(t.s<1) t.s=Math.min(1,t.s+dt*5); }
        for(var i=dying.length-1;i>=0;i--){ dying[i].s-=dt*6; if(dying[i].s<=0) dying.splice(i,1); }
        for(i=parts.length-1;i>=0;i--){ var p=parts[i]; p.l-=dt; p.vy+=12*dt; p.x+=p.vx*dt; p.y+=p.vy*dt; if(p.l<=0) parts.splice(i,1); }
        for(i=beams.length-1;i>=0;i--){ beams[i].l-=dt*3; if(beams[i].l<=0) beams.splice(i,1); }
        for(i=pops.length-1;i>=0;i--){ pops[i].l-=dt*0.9; pops[i].y-=dt*0.6; if(pops[i].l<=0) pops.splice(i,1); }
        if(S.state==='swap'||S.state==='swapback'){ var moving=false; for(r=0;r<N;r++) for(c=0;c<N;c++){ t=G[r][c]; if(t&&(Math.abs(t.x-c)>0.001||Math.abs(t.y-r)>0.001)) moving=true; } if(!moving){ if(S.state==='swap'){ var f=S.after; S.after=null; f(); } else S.state='idle'; } }
        else if(S.state==='pop'){ S.t-=dt; if(S.t<=0) gravity(); }
        else if(S.state==='fall'){ if(settled()) afterSettle(); }
        else if(S.state==='idle'){ idleT+=dt; if(idleT>6&&!hint) hint=hasMove(); } }
      function rr(x,y,w,h,r2){ g.beginPath(); g.moveTo(x+r2,y); g.arcTo(x+w,y,x+w,y+h,r2); g.arcTo(x+w,y+h,x,y+h,r2); g.arcTo(x,y+h,x,y,r2); g.arcTo(x,y,x+w,y,r2); g.closePath(); }
      function draw(now){ var W=cv.width/dpr, tt=now/1000; g.setTransform(dpr,0,0,dpr,0,0); g.clearRect(0,0,W,W);
        var bg=g.createLinearGradient(0,0,0,W); bg.addColorStop(0,'#3a2619'); bg.addColorStop(1,'#24160f'); g.fillStyle=bg; rr(0,0,W,W,cs*0.32); g.fill();
        for(var r=0;r<N;r++) for(var c=0;c<N;c++){ g.fillStyle=(r+c)%2?'rgba(255,236,210,.06)':'rgba(255,236,210,.1)'; rr(c*cs+cs*0.05,r*cs+cs*0.05,cs*0.9,cs*0.9,cs*0.2); g.fill(); }
        if(hint){ var hp=0.35+Math.sin(tt*6)*0.25; g.strokeStyle='rgba(255,224,166,'+hp+')'; g.lineWidth=3; hint.forEach(function(p){ rr(p[0]*cs+cs*0.06,p[1]*cs+cs*0.06,cs*0.88,cs*0.88,cs*0.2); g.stroke(); }); }
        if(sel){ g.strokeStyle='#FFE0A6'; g.lineWidth=3; rr(sel[0]*cs+cs*0.05,sel[1]*cs+cs*0.05,cs*0.9,cs*0.9,cs*0.2); g.stroke(); }
        g.save(); rr(0,0,W,W,cs*0.32); g.clip();
        function dt1(t,x,y,s,sp){ var cx2=x*cs+cs/2, cy2=y*cs+cs/2, sz=cs*1.35*s; if(sp==='c'){ g.save(); g.translate(cx2,cy2); g.scale(s,s); mixed(g,0,0,cs*0.4,tt*1.4); g.restore(); return; } if(t<0) return; var im=spr(t); g.drawImage(im,cx2-sz/2,cy2-sz/2,sz,sz); if(sp) special(g,sp,cx2,cy2,cs*0.4*s,tt); }
        for(r=0;r<N;r++) for(c=0;c<N;c++){ var tl=G[r]&&G[r][c]; if(!tl) continue; var bob=(sel&&sel[0]===c&&sel[1]===r)?1+Math.sin(tt*10)*0.05:1; dt1(tl.t,tl.x,tl.y,tl.s*bob,tl.sp); }
        dying.forEach(function(d){ dt1(d.t,d.x,d.y,Math.max(0,d.s)*1.15,d.sp); });
        beams.forEach(function(b){ g.save(); g.globalAlpha=Math.max(0,b.l); g.globalCompositeOperation='lighter'; var gr;
          if(b.d==='h'){ gr=g.createLinearGradient(0,b.r*cs,0,b.r*cs+cs); gr.addColorStop(0,'rgba(255,240,200,0)'); gr.addColorStop(0.5,'rgba(255,240,200,.9)'); gr.addColorStop(1,'rgba(255,240,200,0)'); g.fillStyle=gr; g.fillRect(0,b.r*cs,W,cs); }
          else if(b.d==='v'){ gr=g.createLinearGradient(b.c*cs,0,b.c*cs+cs,0); gr.addColorStop(0,'rgba(255,240,200,0)'); gr.addColorStop(0.5,'rgba(255,240,200,.9)'); gr.addColorStop(1,'rgba(255,240,200,0)'); g.fillStyle=gr; g.fillRect(b.c*cs,0,cs,W); }
          else { var R2=cs*(b.d==='c'?4:1.6)*(1.2-b.l); gr=g.createRadialGradient(b.c*cs+cs/2,b.r*cs+cs/2,0,b.c*cs+cs/2,b.r*cs+cs/2,R2); gr.addColorStop(0,'rgba(255,230,170,.9)'); gr.addColorStop(1,'rgba(255,230,170,0)'); g.fillStyle=gr; g.fillRect(0,0,W,W); } g.restore(); });
        parts.forEach(function(p){ g.globalAlpha=Math.max(0,p.l/0.9); g.fillStyle=p.col; g.beginPath(); g.arc(p.x*cs,p.y*cs,cs*0.07,0,Math.PI*2); g.fill(); }); g.globalAlpha=1;
        g.restore();
        pops.forEach(function(p){ g.save(); g.globalAlpha=Math.min(1,p.l*2); g.font='800 '+Math.round(cs*0.42)+'px Inter, system-ui, sans-serif'; g.textAlign='center'; g.lineWidth=4; g.strokeStyle='rgba(20,12,8,.7)'; g.strokeText(p.txt,p.x*cs,p.y*cs); g.fillStyle=p.col; g.fillText(p.txt,p.x*cs,p.y*cs); g.restore(); }); }
      function frame(now){ if(!alive) return; raf=requestAnimationFrame(frame); var dt=Math.min(0.05,(now-last)/1000); last=now; if(!S) return; update(dt); draw(now); }
      function cell(e){ var r=cv.getBoundingClientRect(); return [Math.floor((e.clientX-r.left)/r.width*N),Math.floor((e.clientY-r.top)/r.height*N),e.clientX,e.clientY]; }
      function pd(e){ if(!S||S.state!=='idle') return; var p=cell(e); if(!at(p[0],p[1])) return; e.preventDefault(); drag={c:p[0],r:p[1],x:p[2],y:p[3],moved:false}; try{ cv.setPointerCapture(e.pointerId); }catch(er){} }
      function pm(e){ if(!drag) return; var dx=e.clientX-drag.x, dy=e.clientY-drag.y, th=cs*0.35*(cv.getBoundingClientRect().width/(cv.width/dpr)); if(Math.max(Math.abs(dx),Math.abs(dy))<th) return;
        var b=Math.abs(dx)>Math.abs(dy)?[drag.c+(dx>0?1:-1),drag.r]:[drag.c,drag.r+(dy>0?1:-1)]; var a=[drag.c,drag.r]; drag=null; if(at(b[0],b[1])) trySwap(a,b); }
      function pu(e){ if(!drag) return; var a=[drag.c,drag.r]; drag=null; if(sel&&Math.abs(sel[0]-a[0])+Math.abs(sel[1]-a[1])===1){ var s0=sel; sel=null; trySwap(s0,a); } else { sel=(sel&&sel[0]===a[0]&&sel[1]===a[1])?null:a; VAUD.ok(); VAUD.ui(); } }
      cv.addEventListener('pointerdown',pd); cv.addEventListener('pointermove',pm); cv.addEventListener('pointerup',pu); cv.addEventListener('pointercancel',function(){ drag=null; });
      return { run:run, get state(){ return S; }, destroy:function(){ alive=false; cancelAnimationFrame(raf); if(ro) ro.disconnect(); else removeEventListener('resize',size); host.innerHTML=''; } };
    }
    return {create:create,icon:icon,NAMES:NAMES};
  })();
  /* ============ CruzTRD Play · sala, juegos, billetera, ranking y escalera de premios ============ */
  var PLY=(function(){
    var KEY='ctrd_play_v1', st={pts:0,days:[],runs:0,best:0,day:{},earn:{},red:[],issued:0,wk:{},bestG:{},dayG:{},runsG:{},g:'vuelo',welcome:0};
    try{ var r=JSON.parse(localStorage.getItem(KEY)||'null'); if(r&&typeof r.pts==='number') st=Object.assign(st,r); }catch(e){}
    st.bestG=st.bestG||{}; st.dayG=st.dayG||{}; st.runsG=st.runsG||{}; if(st.best&&!st.bestG.vuelo){ st.bestG.vuelo=st.best; st.runsG.vuelo=st.runs; }
    function save(){ try{ localStorage.setItem(KEY,JSON.stringify(st)); }catch(e){} }
    function ymd(d){ d=d||new Date(); return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate(); }
    function week(d){ d=d?new Date(d):new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate()+3-(d.getDay()+6)%7); var w1=new Date(d.getFullYear(),0,4); return 1+Math.round(((d-w1)/864e5-3+(w1.getDay()+6)%7)/7); }
    function dayNo(){ var d=new Date(), s=new Date(d.getFullYear(),0,0); return Math.floor((d-s)/864e5); }
    function streak(){ var n=0, d=new Date(); if(st.days.indexOf(ymd(d))<0) d.setDate(d.getDate()-1); while(st.days.indexOf(ymd(d))>-1){ n++; d.setDate(d.getDate()-1); } return n; }
    var MS={3:50,7:150,14:250,30:400};
    function nextMs(n){ var k=[3,7,14,30].filter(function(x){ return x>n; })[0]; return k?{d:k,p:MS[k]}:null; }
    var GAMES={
      vuelo:{kind:'fly',name:'Vuelo Andino',h1:'Vuelo<br>Andino',eye:'Ruta del día',desc:'Planea como un cóndor entre volcanes. Cruza los arcos para multiplicar, roza las rocas para sumar más y vuelve cada día: la ruta cambia a medianoche y es la misma para todos.',cta:'Volar la ruta de hoy',again:'Volar otra vez',hint:'Ratón, flechas o arrastra con el dedo',tip:'Arrastra o mueve el ratón para volar · cruza los arcos',over:'Fin del vuelo',unit:'Vuelos',tag:'3D · habilidad',salt:11},
      bici:{kind:'bike',name:'Descenso Andino',h1:'Descenso<br>Andino',eye:'Sendero del día',desc:'Baja en bici de montaña por el páramo, entre frailejones. Salta troncos y rampas, pasa entre las banderas para multiplicar y esquiva las rocas. Sendero nuevo cada día.',cta:'Bajar el sendero de hoy',again:'Bajar otra vez',hint:'Ratón o flechas para girar · clic o espacio para saltar',tip:'Desliza para girar · toca o desliza hacia arriba para saltar',over:'Fin del descenso',unit:'Descensos',tag:'3D · MTB',salt:23},
      feria:{kind:'feria',name:'Feria',h1:'Feria',eye:'Pedido del día',desc:'Arma el pedido de la casera combinando maracuyá, naranjilla, mora, guanábana, tomate de árbol y pitahaya. Cuatro en línea hacen una canasta; cinco, una canasta mixta. Tablero nuevo cada día.',cta:'Armar el pedido de hoy',again:'Jugar otra vez',hint:'Desliza una fruta hacia su vecina',tip:'',over:'Feria cerrada',unit:'Pedidos',tag:'Puzzle diario',salt:37}
    };
    function seed(g){ var t=ymd(); return (((t*2654435761)>>>0)^0x5bd1e995^(GAMES[g].salt*40503))>>>0; }
    var TIERS=[
      {n:'Primer triunfo',p:300,items:[{id:'cup',n:'Cupón 10% o envío gratis',d:'En la tienda de la marca',p:300,usd:0.6}]},
      {n:'Utilidad',p:1000,items:[{id:'rec2',n:'Recarga móvil US$2',d:'Al número verificado del jugador',p:1000,usd:2},{id:'rec3',n:'Recarga US$3 o café',d:'Recarga o un café en una cafetería aliada',p:1500,usd:3}]},
      {n:'Gustito del mes',p:2400,items:[{id:'dat5',n:'Paquete de datos US$5',d:'Datos móviles por 15 días',p:2400,usd:5},{id:'kfc5',n:'Combo de comida US$5',d:'Código digital en un restaurante aliado',p:2400,usd:5}]},
      {n:'Despensa y movilidad',p:4800,buy:1,items:[{id:'smx',n:'Bono de supermercado US$10',d:'El premio que más se usaría',p:4800,usd:10,star:1},{id:'pya',n:'Delivery US$10',d:'Tarjeta digital',p:4800,usd:10},{id:'ub',n:'Movilidad US$10',d:'Solo viajes',p:4800,usd:10},{id:'pmx',n:'Combustible US$10',d:'En estaciones aliadas',p:4800,usd:10}]},
      {n:'Aspiracional',p:7000,buy:1,items:[{id:'asp',n:'US$15 a elección',d:'Supermercado, delivery o movilidad · 1 por temporada',p:7000,usd:15}]}
    ];
    var ALL=[]; TIERS.forEach(function(t,i){ t.items.forEach(function(it){ it.tier=i; it.buy=t.buy; ALL.push(it); }); });
    var NAMES=['Valeria R.','Mateo C.','Daniela P.','Sebastián L.','Camila V.','Joaquín A.','Paula M.','Andrés T.','Gabriela N.','Nicolás E.','Isabela F.','Martín Q.'];
    var E=null, F=null, view=null, tab='rank', root=null, timers=[], hud={}, lastHud={}, cur=GAMES[st.g]?st.g:'vuelo';
    function $q(s){ return root.querySelector(s); }
    function fmt(n){ return Math.round(n).toLocaleString('es-EC'); }
    function wkKey(g){ return g+'|'+new Date().getFullYear()+'-'+week(); }
    function board(g){ var w=week(), y=new Date().getFullYear(), r=(function(s){ return function(){ s^=s<<13; s>>>=0; s^=s>>>17; s^=s<<5; s>>>=0; return s/4294967296; }; })((w*7919+y+GAMES[g].salt*131)>>>0||1);
      var base=g==='feria'?1800:2200, span=g==='feria'?5200:9800, dw=((new Date().getDay()+6)%7)+1, rows=NAMES.map(function(n){ return {n:n,s:Math.round((base+r()*span)*(0.45+dw*0.08)/10)*10}; });
      var mine=st.wk[wkKey(g)]||0; if(mine) rows.push({n:'Tú',s:mine,me:1}); rows.sort(function(a,b){ return b.s-a.s; }); return rows; }
    function weekLeft(){ var d=new Date(), e=new Date(d); e.setDate(d.getDate()+(7-((d.getDay()+6)%7))); e.setHours(0,0,0,0); var h=Math.floor((e-d)/36e5); return Math.floor(h/24)+' d '+(h%24)+' h'; }
    function redSeason(id){ var w=week(); return st.red.some(function(x){ return x.id===id&&x.w===w; }); }

    var GI={vuelo:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 11c3.5-2.5 6.5-2.6 10 0 3.5-2.6 6.5-2.5 10 0"/><path d="M5 9.4L3.5 7M8.5 8.6L8 6M19 9.4L20.5 7M15.5 8.6L16 6"/></svg>',
      bici:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="16" r="3.5"/><circle cx="18.5" cy="16" r="3.5"/><path d="M5.5 16l4-7h6l3 7M9.5 9l3 7h-7M14 6h2.5l-1 3"/></svg>',
      feria:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="4"/><circle cx="16" cy="14" r="4"/><path d="M8 10c0-2 1-3.5 3-4M16 10c0-2-1-3.5-3-4"/></svg>'};
    function shell(){ var G=GAMES[cur], DAYS=['L','M','M','J','V','S','D'], now=new Date(), wd=(now.getDay()+6)%7, cells='', k0=ymd();
      for(var i=0;i<7;i++){ var d=new Date(now); d.setDate(now.getDate()-wd+i); var k=ymd(d), on=st.days.indexOf(k)>-1, tod=i===wd; cells+='<i class="'+(on?'on ':'')+(tod?'td':'')+(i>wd?' fut':'')+'"><b>'+DAYS[i]+'</b></i>'; }
      var sk=streak(), played=st.days.indexOf(k0)>-1, fecha=now.toLocaleDateString('es-EC',{weekday:'long',day:'numeric',month:'long'}), nm=nextMs(sk), dg=(st.dayG[cur]||{})[k0]||0;
      var sw=Object.keys(GAMES).map(function(g){ var b=st.bestG[g]||0; return '<button class="pySw'+(g===cur?' on':'')+'" data-g="'+g+'" aria-pressed="'+(g===cur)+'">'+GI[g]+'<span><b>'+GAMES[g].name+'</b><em>'+GAMES[g].tag+(b?' · récord '+fmt(b):'')+'</em></span></button>'; }).join('');
      return '<header class="pyTop"><button class="pyBack" data-py="close">← Volver al estudio</button><div class="pyBrand">Cruz<i>TRD</i> <span>Play · demo para marcas</span></div>'+
        '<div class="pyWal" title="Billetera de puntos canjeables"><span>Puntos</span><b id="pyPts">'+fmt(st.pts)+'</b></div><button class="pySnd'+(VAUD.muted?' off':'')+'" data-py="snd" aria-label="Sonido" aria-pressed="'+(VAUD.muted?'false':'true')+'"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path class="w" d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"/></svg></button></header>'+
        '<div class="pyMain"><div class="pyHero"><div class="pySws">'+sw+'</div><span class="pyEye"><i></i>'+G.eye+' nº '+dayNo()+' · '+fecha+'</span><h1>'+G.h1+'</h1><p>'+G.desc+'</p>'+
        '<div class="pyCta"><button class="pyGo" data-py="go"><span>'+(dg?G.again:G.cta)+'</span><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h13M13 6l6 6-6 6"/></svg></button><span class="pyHint">'+G.hint+'</span></div>'+
        '<div class="pyStreak"><div class="pyDays">'+cells+'</div><div class="pyStx"><b>'+(sk?('Racha de '+sk+' '+(sk===1?'día':'días')):'Empieza tu racha hoy')+'</b><span>'+(nm?('Al día '+nm.d+' de racha: +'+nm.p+' pts de bono · cuenta cualquier juego'):'Racha máxima: sigue así')+'</span></div></div>'+
        '<div class="pyStats"><div><b>'+fmt(dg)+'</b><span>Récord de hoy</span></div><div><b>'+fmt(st.bestG[cur]||0)+'</b><span>Tu mejor</span></div><div><b>'+fmt(st.runsG[cur]||0)+'</b><span>'+G.unit+'</span></div></div></div>'+
        '<aside class="pyPanel"><nav class="pyTabs" role="tablist"><button data-tab="rank">Ranking</button><button data-tab="prem">Premios</button><button data-tab="mar">Para marcas</button></nav><div class="pyTab" id="pyTab"></div></aside></div>'+
        '<footer class="pyFoot">Demo de CruzTRD Play · el ranking usa jugadores de demostración y los códigos mostrados no son canjeables</footer>'; }
    function ladder(){ var top=7000, pct=Math.min(1,st.pts/top), nx=ALL.filter(function(it){ return it.p>st.pts; })[0];
      return '<div class="pyLad"><div class="pyLadB"><i style="width:'+(pct*100)+'%"></i>'+TIERS.map(function(t,i){ var x=t.p/top*100, ok=st.pts>=t.p; return '<em class="'+(ok?'ok':'')+'" style="left:'+x+'%"><b>'+(i+1)+'</b></em>'; }).join('')+'</div>'+
        '<p>'+(nx?('Te faltan <b>'+fmt(nx.p-st.pts)+' pts</b> para '+nx.n.toLowerCase()):'Llegaste al nivel aspiracional')+'</p></div>'; }
    function tabHtml(){ if(tab==='rank'){ var b=board(cur), me=-1; b.forEach(function(x,i){ if(x.me) me=i; }); var show=b.slice(0,8); if(me>7) show.push(b[me]);
        return '<div class="pyRk"><div class="pyRkH"><b>'+GAMES[cur].name+' · ranking de demostración</b><span>cierra en '+weekLeft()+'</span></div><ol>'+show.map(function(x){ var i=b.indexOf(x); return '<li class="'+(x.me?'me':'')+(i<3?' top':'')+'"><em>'+(i+1)+'</em><span>'+x.n+'</span><b>'+fmt(x.s)+'</b></li>'; }).join('')+'</ol>'+
          (me<0?'<p class="pyNote">Juega una vez para entrar al ranking de la semana.</p>':'')+'<div class="pyPrize"><b>El ranking da estatus, no dinero</b><span>Insignia y acceso anticipado a lanzamientos de la marca para el top 3. Premiar el puntaje con saldo atrae bots.</span></div></div>'; }
      if(tab==='prem'){ return '<div class="pyCat"><div class="pyRkH"><b>Escalera de premios · demo</b><span>'+fmt(st.pts)+' pts</span></div>'+ladder()+
          TIERS.map(function(t,i){ return '<div class="pyTier"><div class="pyTierH"><span>Nivel '+(i+1)+' · '+t.n+'</span>'+(t.buy?'<em>requiere 1 compra en 60 días</em>':'')+'</div><div class="pyItems">'+t.items.map(function(c){ var used=c.buy&&redSeason(c.id), can=!used&&st.pts>=c.p, pct=Math.min(1,st.pts/c.p);
            return '<div class="pyIt'+(c.star?' star':'')+'"><div class="pyItT"><b>'+c.n+'</b><span>'+c.d+'</span></div><div class="pyItR"><b>'+fmt(c.p)+'</b><button data-red="'+c.id+'"'+(can?'':' disabled')+'>'+(used?'Visto':(can?'Ver canje de ejemplo':'Faltan '+fmt(c.p-st.pts)))+'</button></div><i class="pyBar" style="--p:'+pct+'"></i></div>'; }).join('')+'</div></div>'; }).join('')+
          (st.red.length?'<div class="pyMine"><b>Mis canjes</b>'+st.red.slice(-3).reverse().map(function(x){ return '<div><span>'+x.n+'</span><code>'+x.c+'</code></div>'; }).join('')+'</div>':'')+
          '<button class="pyChk" data-py="chakra">Ver tu chakra en la capa 06 · Fidelización →</button><button class="pyDemo" data-py="demo">+650 pts de demostración</button></div>'; }
      var usd=st.issued*0.002, gid={vuelo:'vuelo-andino',bici:'descenso-andino',feria:'feria'}[cur];
      return '<div class="pyMar"><div class="pyRkH"><b>Esto mismo, con tu marca</b><span>demo</span></div>'+
        '<ul><li><b>Tres juegos, una billetera.</b> Vuelo y Descenso en 3D, Feria como puzzle diario; racha y puntos compartidos.</li><li><b>Tu marca dentro del juego.</b> Arcos, banderas y premios con tu marca.</li><li><b>Premios que reemplazan un gasto.</b> Escalera de 5 niveles pensada para Ecuador: cupón, recarga, gustito, despensa y uno aspiracional.</li><li><b>La compra sostiene el programa.</b> Los premios de US$10 o más piden una compra verificada en 60 días; las compras suman 10 pts por US$1.</li><li><b>Costo con tope.</b> El juego da hasta 100 pts al día más bonos de racha; máximo US$15 al mes por persona.</li></ul>'+
        '<div class="pyLive"><b>En vivo, esta demo</b><div><span>Partidas</span><em>'+fmt(st.runs)+'</em></div><div><span>Puntos emitidos</span><em>'+fmt(st.issued)+'</em></div><div><span>Costo estimado</span><em>US$'+usd.toFixed(2).replace('.',',')+'</em></div><div><span>Canjes</span><em>'+st.red.length+'</em></div></div></div>'; }
    function paintTab(){ var t=$q('#pyTab'); if(!t) return; t.innerHTML=tabHtml(); [].slice.call(root.querySelectorAll('.pyTabs button')).forEach(function(b){ b.classList.toggle('on',b.getAttribute('data-tab')===tab); b.setAttribute('aria-selected',b.getAttribute('data-tab')===tab); }); }
    function paintRoom(){ $q('#plyRoom').innerHTML=shell(); paintTab(); }
    function setView(v){ view=v; root.className='ply open v-'+v+' g-'+cur; }
    function toast(a,b){ var t=document.createElement('div'); t.className='pyToast'; t.innerHTML='<b>'+a+'</b><span>'+b+'</span>'; root.appendChild(t); setTimeout(function(){ t.classList.add('out'); },3600); setTimeout(function(){ t.remove(); },4200); }

    function attract(){ if(!E) return; E.pause(false); E.run('attract',(Math.random()*1e9)>>>0,GAMES[cur].kind==='bike'?'bike':'fly'); }
    function room(){ timers.forEach(clearTimeout); timers=[]; if(F){ F.destroy(); F=null; } setView('room'); paintRoom(); attract(); VAUD.music(null); VAUD.pad(true); }
    function go(){ VAUD.ok(); VAUD.ui(); VAUD.pad(false); VAUD.music({vuelo:'vuelo_tema',bici:'descenso_tema',feria:'feria_tema'}[cur]); lastHud={}; var G=GAMES[cur];
      if(G.kind==='feria'){ setView('feria'); if(E) E.pause(true); if(F) F.destroy(); F=FERIA.create($q('#frHost'),{onOver:onOver}); F.run(seed(cur)); return; }
      setView('game'); $q('#hPop').innerHTML=''; var hl=$q('.hS span'); if(hl) hl.textContent=G.kind==='bike'?'puntos de descenso':'puntos de vuelo'; var tip=$q('.hTip'); tip.textContent=G.tip; tip.classList.remove('off'); timers.push(setTimeout(function(){ tip.classList.add('off'); },3600)); if(E)E.pause(false); E.run('play',seed(cur),G.kind); }
    function onHud(S){ var s=S.score, m=S.mult, d=Math.floor(S.dist);
      if(s!==lastHud.s){ hud.s.textContent=fmt(s); lastHud.s=s; } if(m!==lastHud.m){ hud.m.textContent='×'+m; hud.m.classList.toggle('hot',m>1); hud.m.classList.remove('bump'); void hud.m.offsetWidth; hud.m.classList.add('bump'); lastHud.m=m; }
      var dd=Math.floor(d/10)*10; if(dd!==lastHud.d){ hud.d.textContent=fmt(dd)+' m'; lastHud.d=dd; } }
    function pop(txt,cls){ var p=document.createElement('div'); p.className='hP '+(cls||''); p.textContent=txt; $q('#hPop').appendChild(p); setTimeout(function(){ p.remove(); },1100); }
    function onEvent(t,d){ if(t==='ring') pop('Arco ×'+d.mult+'  +'+d.pts,'ring'); else if(t==='gate') pop('Bandera ×'+d.mult+'  +'+d.pts,'ring'); else if(t==='near') pop('¡Rozaste!  +'+d.pts,'near');
      else if(t==='air') pop('¡Salto de '+d.t.toFixed(1).replace('.',',')+' s!  +'+d.pts,'near'); else if(t==='hop') pop('¡Tronco limpio!  +'+d.pts,'near'); else if(t==='miss') pop('Bandera perdida · ×1','bad'); else if(t==='scrape') pop('Multiplicador perdido','bad'); else if(t==='orb'&&d.pts>=30) pop('+'+d.pts,'orb'); }
    function onOver(res){ var g=cur, G=GAMES[g], k=ymd(), first=st.days.indexOf(k)<0, sk0=streak(), base=Math.floor(res.score/40), capLeft=Math.max(0,100-(st.earn[k]||0)), got=Math.min(base,capLeft);
      var bonus=first?15:0, sb=first?(MS[sk0+1]||0):0, total=got+bonus+sb, prevBest=st.bestG[g]||0, dd=st.dayG[g]=st.dayG[g]||{}, wk=wkKey(g);
      if(first) st.days.push(k); st.days=st.days.slice(-60); st.earn[k]=(st.earn[k]||0)+got; st.pts+=total; st.issued+=total; st.runs++; st.runsG[g]=(st.runsG[g]||0)+1; st.bestG[g]=Math.max(prevBest,res.score); dd[k]=Math.max(dd[k]||0,res.score); st.wk[wk]=Math.max(st.wk[wk]||0,res.score); save();
      try{ if(CLUB&&CLUB.play) CLUB.play(); }catch(e){}
      var b=board(g), pos=0; b.forEach(function(x,i){ if(x.me) pos=i+1; }); var rec=res.score>prevBest&&prevBest>0;
      if(F){ F.destroy(); F=null; } if(E&&G.kind==='feria'){ E.pause(false); E.run('attract',(Math.random()*1e9)>>>0,'fly'); }
      setView('over'); if(rec||pos&&pos<=3) VAUD.win();
      var row;
      if(g==='feria') row=[[res.won?'Completo':'Incompleto','pedido'],[res.fruits,'frutas'],['×'+res.maxC,'combo máx.'],[res.specials,'canastas'],[res.left,'mov. extra']];
      else if(g==='bici') row=[[fmt(res.dist)+' m','distancia'],[res.orbs,'orbes'],[res.rings,'banderas'],[res.jumps,'saltos'],['×'+res.maxMult,'mejor mult.']];
      else row=[[fmt(res.dist)+' m','distancia'],[res.orbs,'orbes'],[res.rings,'arcos'],[res.near,'rozones'],['×'+res.maxMult,'mejor mult.']];
      var title=rec?'¡Nuevo récord!':(g==='feria'?(res.won?'¡Pedido completo!':'Pedido incompleto'):G.over);
      $q('#plyOver').innerHTML='<div class="pyRes"><span class="pyEye"><i></i>'+G.name+' · '+G.eye.toLowerCase()+' nº '+dayNo()+'</span><h2>'+title+'</h2><div class="pyBig">'+fmt(res.score)+'</div>'+
        '<div class="pyRow">'+row.map(function(x){ return '<div><b>'+x[0]+'</b><span>'+x[1]+'</span></div>'; }).join('')+'</div>'+
        '<div class="pyEarn"><div><span>Puntos de la partida</span><b>+'+fmt(got)+'</b></div>'+(first?'<div><span>Primera partida del día</span><b>+15</b></div>'+(sb?'<div><span>Bono por '+(sk0+1)+' días de racha</span><b>+'+sb+'</b></div>':'<div class="cap"><span>Racha día '+(sk0+1)+(nextMs(sk0+1)?' · bono al día '+nextMs(sk0+1).d:'')+'</span><b>—</b></div>'):'')+(got<base?'<div class="cap"><span>Tope diario de 100 pts de juego alcanzado</span><b>—</b></div>':'')+'<div class="tot"><span>A tu billetera</span><b>+'+fmt(total)+' pts</b></div></div>'+
        '<p class="pyPos">'+(pos?('Puesto '+pos+' de '+b.length+' en '+G.name+' · temporada '+week()):'')+'</p>'+
        '<div class="pyBtns"><button class="pyGo" data-py="go"><span>'+G.again+'</span></button><button class="pyGhost" data-py="prem">Ver premios · '+fmt(st.pts)+' pts</button></div></div>'; }

    function redeem(id){ var c=ALL.filter(function(x){ return x.id===id; })[0]; if(!c||st.pts<c.p||(c.buy&&redSeason(c.id))) return; VAUD.ok(); VAUD.ui();
      var M=$q('#plyModal'), steps=['Validando tus partidas (demo)','Revisión antifraude (demo)'].concat(c.buy?['Compra verificada en la tienda en los últimos 60 días']:[]).concat(c.id.indexOf('rec')===0||c.id==='dat5'?['Número celular verificado (demo)']:[]).concat(['Reservando presupuesto de la campaña','Emitiendo el código de demostración','Entregado en tu billetera']);
      M.innerHTML='<div class="pyMd" role="dialog" aria-modal="true"><span class="pyEye"><i></i>Canje de demostración · nivel '+(c.tier+1)+'</span><h3>'+c.n+'</h3><p class="pyMdP">'+fmt(c.p)+' pts</p><ol class="pySteps">'+steps.map(function(s){ return '<li><i></i><span>'+s+'</span></li>'; }).join('')+'</ol><div class="pyCode" id="pyCode"></div><button class="pyGhost" data-py="mclose" disabled>Cerrar</button></div>';
      M.classList.add('on'); var li=[].slice.call(M.querySelectorAll('.pySteps li')), i=0;
      (function next(){ if(i>0) li[i-1].className='ok'; if(i>=li.length){ var code='DEMO-'+Math.random().toString(36).slice(2,6).toUpperCase()+'-'+Math.random().toString(36).slice(2,6).toUpperCase();
          st.pts-=c.p; st.red.push({id:c.id,n:c.n,c:code,t:Date.now(),w:week()}); save(); VAUD.win(); var nx=ALL.filter(function(it){ return it.p>st.pts; })[0];
          $q('#pyCode').innerHTML='<code>'+code+'</code><span>Código de demostración · no canjeable. En producción el proveedor lo devuelve por API y queda en el historial del cliente.'+(nx?' Próxima meta: '+nx.n+', te faltan '+fmt(nx.p-st.pts)+' pts.':'')+'</span>';
          M.querySelector('[data-py="mclose"]').disabled=false; var w=$q('#pyPts'); if(w) w.textContent=fmt(st.pts); paintTab(); return; }
        li[i].className='run'; i++; timers.push(setTimeout(next,480+Math.random()*380)); })(); }

    function click(e){ var b=e.target.closest('[data-py],[data-tab],[data-red],[data-g]'); if(!b||!root.contains(b)) return; var a=b.getAttribute('data-py');
      if(b.hasAttribute('data-g')){ var ng=b.getAttribute('data-g'); if(ng!==cur){ var prevK=GAMES[cur].kind; cur=ng; st.g=ng; save(); VAUD.ok(); VAUD.ui(); paintRoom(); root.className='ply open v-room g-'+cur; if((GAMES[cur].kind==='bike')!==(prevK==='bike')) attract(); } return; }
      if(b.hasAttribute('data-tab')){ tab=b.getAttribute('data-tab'); VAUD.ok(); VAUD.ui(); paintTab(); return; }
      if(b.hasAttribute('data-red')){ redeem(b.getAttribute('data-red')); return; }
      if(a==='close') closePlay(); else if(a==='go') go(); else if(a==='snd'){ VAUD.ok(); VAUD.mute(!VAUD.muted); b.classList.toggle('off',VAUD.muted); b.setAttribute('aria-pressed',VAUD.muted?'false':'true'); if(!VAUD.muted) VAUD.pad(view!=='game'); }
      else if(a==='prem'){ tab='prem'; room(); } else if(a==='demo'){ st.pts+=2000; save(); var w=$q('#pyPts'); if(w) w.textContent=fmt(st.pts); paintTab(); }
      else if(a==='chakra'){ closePlay(); try{ if(typeof goRoom==='function') goRoom(6); }catch(er){} setTimeout(openChakra,700); }
      else if(a==='mclose'){ $q('#plyModal').classList.remove('on'); } else if(a==='quit'){ room(); } }
    function key(e){ if(!root||!root.classList.contains('open')) return; if(e.key==='Escape'){ e.preventDefault(); e.stopImmediatePropagation(); var M=$q('#plyModal'); if(M.classList.contains('on')){ if(!M.querySelector('[data-py="mclose"]').disabled) M.classList.remove('on'); return; } if(view==='game'||view==='over'||view==='feria') room(); else closePlay(); }
      else if((e.key==='Enter'||e.key===' ')&&view==='over'&&!e.target.closest('button')){ e.preventDefault(); go(); } }
    function open(tb){ if(tb) tab=tb; root=$i('ply'); if(!root) return; if(typeof closeDir==='function') closeDir(); try{ panel.classList.remove('open'); }catch(e){} document.body.classList.add('magopen','plyopen');
      if(!root._b){ root._b=1; root.addEventListener('click',click); addEventListener('keydown',key,true); }
      hud={s:$q('#hS'),m:$q('#hM'),d:$q('#hD')};
      try{ if(!E) E=VUELO.create($q('#plyCv'),{inputEl:$q('#plyStage'),onHud:onHud,onEvent:onEvent,onOver:onOver}); }catch(err){ E=null; }
      room();
      if(!st.welcome){ st.welcome=1; st.pts+=60; st.issued+=60; save(); var w=$q('#pyPts'); if(w) w.textContent=fmt(st.pts); timers.push(setTimeout(function(){ toast('Bono de bienvenida · +60 pts','Puntos de demostración: así se vería en tu marca'); },900)); } }
    function close(){ timers.forEach(clearTimeout); timers=[]; VAUD.pad(false); VAUD.music(null); if(F){ F.destroy(); F=null; } if(E){ E.destroy(); E=null; } if(root){ root.className='ply'; $q('#plyModal').classList.remove('on'); } document.body.classList.remove('magopen','plyopen'); }
    function addPts(n,why){ st.pts+=n; st.issued+=n; if(why==='buy'){ st.buys=(st.buys||0)+1; st.lastBuy=Date.now(); } save(); }
    function water(){ var k=ymd(); if(st.days.indexOf(k)<0){ st.days.push(k); st.days=st.days.slice(-60); } st.water=k; save(); }
    return {open:open,close:close,st:function(){ return st; },streak:streak,add:addPts,water:water};
  })();
  function openPlay(){ PLY.open(); }
  function closePlay(){ PLY.close(); }
  /* ============ Capa 06 · Chakra: la billetera de fidelidad hecha huerto ============ */
  var CHAKRA=(function(){
    var T=THREE, LV=[{p:0,n:'Semilla'},{p:300,n:'Brote'},{p:1000,n:'Plántula'},{p:2400,n:'Arbusto'},{p:4800,n:'Árbol joven'},{p:7000,n:'Árbol en cosecha'}];
    var FR=[{p:300,n:'Cupón 10% o envío gratis',t:'Nivel 1 · Primer triunfo'},{p:1000,n:'Recarga US$2',t:'Nivel 2 · Utilidad'},{p:2400,n:'Datos o combo de US$5',t:'Nivel 3 · Gustito del mes'},{p:4800,n:'Bono Supermaxi / Akí US$10',t:'Nivel 4 · Despensa y movilidad'},{p:7000,n:'US$15 a elección',t:'Nivel 5 · Aspiracional'}];
    function rng(seed){ var s=(seed>>>0)||1; return function(){ s^=s<<13; s>>>=0; s^=s>>>17; s^=s<<5; s>>>=0; return s/4294967296; }; }
    function gOf(life){ return Math.min(1,Math.pow(Math.max(0,life)/7000,0.62)); }
    function ymd(d){ d=d||new Date(); return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate(); }
    function fmt(n){ return Math.round(n).toLocaleString('es-EC'); }
    var root=null, R=null, raf=0, alive=false, ro=null;
    function build(){ var host=root.querySelector('.chStage'), cv=root.querySelector('#chCv'), W=1, H=1;
      R=new T.WebGLRenderer({canvas:cv,antialias:true}); R.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)); R.shadowMap.enabled=true; R.shadowMap.type=T.PCFSoftShadowMap;
      var FOG=new T.Color(0.95,0.74,0.58); R.setClearColor(FOG); var sc=new T.Scene(); sc.fog=new T.Fog(FOG,28,95);
      var cam=new T.PerspectiveCamera(42,1,0.1,400);
      var sky=new T.Mesh(new T.SphereGeometry(300,24,12),new T.ShaderMaterial({side:T.BackSide,depthWrite:false,fog:false,uniforms:{sun:{value:new T.Vector3(-0.6,0.18,-0.78).normalize()}},
        vertexShader:'varying vec3 vD; void main(){ vD=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
        fragmentShader:'uniform vec3 sun; varying vec3 vD; void main(){ float h=vD.y; vec3 hor=vec3(0.95,0.74,0.58); vec3 mid=vec3(0.62,0.6,0.78); vec3 top=vec3(0.28,0.36,0.62); vec3 c=mix(hor,mid,smoothstep(0.0,0.25,h)); c=mix(c,top,smoothstep(0.2,0.75,h)); float s=max(dot(normalize(vD),sun),0.0); c+=vec3(1.0,0.7,0.4)*pow(s,8.0)*0.35; c+=vec3(1.0,0.9,0.7)*pow(s,300.0); gl_FragColor=vec4(c,1.0); }'}));
      sc.add(sky);
      sc.add(new T.HemisphereLight(0xcfd8ff,0x6b4a3a,0.75)); var dl=new T.DirectionalLight(0xffd2a0,1.15); dl.position.set(-9,12,6); dl.castShadow=true; dl.shadow.mapSize.set(1024,1024); var sca=dl.shadow.camera; sca.left=-9; sca.right=9; sca.top=9; sca.bottom=-9; sca.near=1; sca.far=40; dl.shadow.bias=-0.0008; sc.add(dl);
      function vc(geo,fn){ var g=geo.toNonIndexed(); g.computeVertexNormals(); var p=g.attributes.position, n=g.attributes.normal, col=new Float32Array(p.count*3); for(var i=0;i<p.count;i+=3){ var y=(p.getY(i)+p.getY(i+1)+p.getY(i+2))/3, c=fn(y,n.getY(i),Math.abs(Math.sin(i*12.9898)*43758.5453)%1,p.getX(i),p.getZ(i)); for(var k=0;k<3;k++){ col[(i+k)*3]=c[0]; col[(i+k)*3+1]=c[1]; col[(i+k)*3+2]=c[2]; } } g.setAttribute('color',new T.BufferAttribute(col,3)); return g; }
      var VM=new T.MeshLambertMaterial({vertexColors:true});
      // terreno: colinas de páramo, la chakra al centro
      var gp=new T.PlaneGeometry(140,140,46,46); gp.rotateX(-Math.PI/2); var pp=gp.attributes.position, r0=rng(5);
      for(var i=0;i<pp.count;i++){ var x=pp.getX(i), z=pp.getZ(i), d=Math.sqrt(x*x+z*z), hh=d<20?r0()*0.12:Math.pow((d-20)/18,1.5)*(1.0+Math.sin(x*0.11)*0.6+Math.cos(z*0.13)*0.5)+r0()*0.3; pp.setY(i,hh-0.02); }
      var ground=new T.Mesh(vc(gp,function(y,ny,r){ var q=0.85+r*0.25; return y<0.05?[0.42*q,0.52*q,0.25*q]:(y>9?[0.62*q,0.5*q,0.42*q]:[0.36*q,0.47*q,0.22*q]); }),VM); ground.receiveShadow=true; sc.add(ground);
      var plot=new T.Mesh(vc(new T.CylinderGeometry(3.3,3.5,0.3,28,1),function(y,ny,r){ var q=0.85+r*0.25; return ny>0.5?[0.42*q,0.29*q,0.2*q]:[0.33*q,0.23*q,0.16*q]; }),VM); plot.position.y=0.12; plot.receiveShadow=true; sc.add(plot);
      for(i=0;i<5;i++){ var fur=new T.Mesh(new T.TorusGeometry(0.9+i*0.5,0.05,4,40),new T.MeshLambertMaterial({color:0x5a3d29})); fur.rotation.x=Math.PI/2; fur.position.y=0.28; fur.receiveShadow=true; sc.add(fur); }
      var rockG=vc(new T.DodecahedronGeometry(1,0),function(y,ny,r){ var q=0.8+r*0.3; return [0.58*q,0.54*q,0.5*q]; });
      for(i=0;i<34;i++){ var a=i/34*Math.PI*2, st=new T.Mesh(rockG,VM), s=0.22+r0()*0.14; st.scale.set(s,s*0.8,s); st.position.set(Math.cos(a)*3.6,0.15,Math.sin(a)*3.6); st.rotation.set(r0()*3,r0()*3,0); st.castShadow=true; sc.add(st); }
      [[-60,-120,40,46,0.3],[25,-130,30,34,0.36],[85,-100,22,22,0.45],[-120,-80,26,24,0.4]].forEach(function(v){ var m=new T.Mesh(vc(new T.ConeGeometry(v[2],v[3],10,3),function(y,ny,r){ var t=(y+v[3]/2)/v[3], k=t>1-v[4]; var c=k?[1,0.93,0.9]:[0.5,0.42,0.5], hz=k?0.25:0.5; return [c[0]*(1-hz)+0.95*hz,c[1]*(1-hz)+0.74*hz,c[2]*(1-hz)+0.58*hz]; }),new T.MeshBasicMaterial({vertexColors:true,fog:false})); m.position.set(v[0],v[3]/2-3,v[1]); sc.add(m); });
      // surcos de visitas: un brote de maíz por día que volviste
      var sprG=vc(new T.ConeGeometry(0.09,0.5,5,1).translate(0,0.25,0),function(){ return [0.45,0.62,0.25]; }), leafG=vc(new T.ConeGeometry(0.05,0.42,3,1).translate(0,0.21,0),function(){ return [0.5,0.7,0.3]; });
      var sprouts=[]; for(i=0;i<30;i++){ var ring=i<15?4.3:5.0, a2=(i%15)/15*Math.PI*2+(i<15?0:0.2), g2=new T.Group(); g2.add(new T.Mesh(sprG,VM)); var l1=new T.Mesh(leafG,VM); l1.rotation.z=0.7; l1.position.y=0.15; g2.add(l1); var l2=new T.Mesh(leafG,VM); l2.rotation.z=-0.7; l2.position.y=0.22; g2.add(l2); g2.position.set(Math.cos(a2)*ring,0.02,Math.sin(a2)*ring); g2.rotation.y=a2; g2.scale.setScalar(0.001); g2.children.forEach(function(m){ m.castShadow=true; }); sc.add(g2); sprouts.push(g2); }
      // árbol de tomate de árbol: ramas con nacimiento progresivo
      var tr=rng(20261021), barkM=new T.MeshLambertMaterial({color:0x6b4a33}), leafM=new T.MeshLambertMaterial({color:0x5f8f3a}), leafM2=new T.MeshLambertMaterial({color:0x7aa84a}), UC=new T.CylinderGeometry(1,1,1,6).translate(0,0.5,0), LG=new T.IcosahedronGeometry(1,0);
      var B=[], LEAVES=[], tips=[], tree=new T.Group(); sc.add(tree); tree.position.y=0.28; tree.scale.setScalar(1.3);
      function branch(par,len,rad,depth,birth,ang,rot){ var g=new T.Group(); g.rotation.set(ang,rot,0,'YXZ'); par.add(g); var m=new T.Mesh(UC,barkM); m.castShadow=true; g.add(m); var b={g:g,m:m,len:len,rad:rad,birth:birth,depth:depth,kids:[]}; B.push(b);
        if(depth<4){ var n=depth===0?3:(tr()<0.6?2:3); for(var k=0;k<n;k++){ var cb=branch(g,len*(0.74+tr()*0.12),rad*0.62,depth+1,birth+0.15+tr()*0.05,0.42+tr()*0.38,k/n*Math.PI*2+tr()*0.8+depth); b.kids.push(cb); } }
        if(true){ var lf=new T.Mesh(LG,tr()<0.5?leafM:leafM2); lf.castShadow=true; g.add(lf); var L={m:lf,b:b,birth:birth+(depth<2?0.03:0.08),s:depth<2?0.22+tr()*0.08:(0.32+tr()*0.22)*(depth>=4?0.85:1.05)}; LEAVES.push(L); b.leaf=L; }
        if(depth>=1) tips.push(b); return b; }
      var trunk=branch(tree,1.35,0.17,0,0,0,0);
      var thr=FR.map(function(f){ return gOf(f.p); }), used={}, fruitG=new T.SphereGeometry(0.21,14,10), fruits=[];
      var GLOWT=(function(){ var c=document.createElement('canvas'); c.width=c.height=64; var g=c.getContext('2d'), gr=g.createRadialGradient(32,32,0,32,32,32); gr.addColorStop(0,'rgba(255,255,255,1)'); gr.addColorStop(0.3,'rgba(255,255,255,.5)'); gr.addColorStop(1,'rgba(255,255,255,0)'); g.fillStyle=gr; g.fillRect(0,0,64,64); return new T.CanvasTexture(c); })();
      FR.forEach(function(f,k){ var cand=tips.filter(function(b){ return !used[B.indexOf(b)]&&b.birth+0.1<=thr[k]+0.02; }).sort(function(a,b2){ return b2.depth-a.depth||b2.birth-a.birth; }), b=cand[0]||tips.filter(function(q){ return !used[B.indexOf(q)]; })[0]||trunk; used[B.indexOf(b)]=1;
        var fm=new T.Mesh(fruitG,new T.MeshLambertMaterial({color:0x7aa84a})); fm.scale.set(1,1.3,1); fm.castShadow=true; var gl=new T.Sprite(new T.SpriteMaterial({map:GLOWT,color:0xffb060,transparent:true,blending:T.AdditiveBlending,depthWrite:false,opacity:0})); gl.scale.set(1.1,1.1,1); var hold=new T.Group(); hold.add(fm); hold.add(gl); b.g.add(hold); fruits.push({k:k,b:b,m:fm,gl:gl,h:hold,f:f}); fm.userData.fk=k; });
      // agua al regar
      var drops=[], dropM=new T.MeshBasicMaterial({color:0xbfe6ff,transparent:true,opacity:0.85}), dropG=new T.SphereGeometry(0.05,6,4);
      var S={g:0,gt:0,orbit:0.6,drag:null,ripe:[],wilt:0,t:0};
      function size(){ var r=host.getBoundingClientRect(); W=Math.max(1,r.width); H=Math.max(1,r.height); R.setSize(W,H,false); cam.aspect=W/H; if(S&&S.vo){ cam.clearViewOffset(); S.vo=0; } cam.updateProjectionMatrix(); }
      ro=window.ResizeObserver?new ResizeObserver(size):null; if(ro) ro.observe(host); size();
      function clamp(x){ return Math.max(0,Math.min(1,x)); }
      function apply(){ var g=S.g;
        B.forEach(function(b){ var s=clamp((g-b.birth)/(b.depth?0.22:0.45)), e=s*s*(3-2*s); b.m.scale.set(b.rad*Math.max(0.15,e),b.len*Math.max(0.001,e),b.rad*Math.max(0.15,e)); b.m.visible=e>0.002; b.kids.forEach(function(k){ k.g.position.set(0,b.len*e*0.96,0); }); if(b.leaf){ b.leaf.m.position.set(0,b.len*e,0); } });
        LEAVES.forEach(function(L){ var s=clamp((g-L.birth)/0.2), e=s*s*(3-2*s); var wl=1-S.wilt*0.25; L.m.scale.set(L.s*e,L.s*e*0.7*wl,L.s*e); L.m.visible=e>0.01; });
        fruits.forEach(function(F){ var s=clamp((g-thr[F.k]+0.02)/0.05), ripe=S.ripe[F.k]; F.h.position.set(0,F.b.len*clamp((g-F.b.birth)/(F.b.depth?0.22:0.45))*0.72,0.0); F.h.translateX(F.b.rad*1.6+0.2); F.h.translateY(-0.12); F.m.scale.set(s,1.3*s,s); F.h.visible=s>0.02; F.m.material.color.setHex(ripe?0xe8452c:0x8fb54a); F.gl.material.opacity=ripe?0.55+Math.sin(S.t*3+F.k)*0.25:0; }); }
      function setState(life,bal,days,watered){ S.gt=gOf(life); S.ripe=FR.map(function(f){ return bal>=f.p; }); S.wilt=watered?0:1; var n=Math.min(30,days); sprouts.forEach(function(sp,i){ sp.userData.on=i<n; }); }
      function water(){ for(var i=0;i<60;i++){ var d=new T.Mesh(dropG,dropM); d.position.set((Math.random()*2-1)*1.6,4.5+Math.random()*1.5,(Math.random()*2-1)*1.6); d.userData.v=-3-Math.random()*3; sc.add(d); drops.push(d); } }
      var ray=new T.Raycaster(), mv=new T.Vector2();
      function pick(e){ var r=cv.getBoundingClientRect(); mv.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1); ray.setFromCamera(mv,cam); var hit=ray.intersectObjects(fruits.filter(function(F){ return F.h.visible; }).map(function(F){ return F.m; }),false)[0]; return hit?hit.object.userData.fk:null; }
      cv.addEventListener('pointerdown',function(e){ S.drag={x:e.clientX,o:S.orbit,t:performance.now()}; });
      addEventListener('pointermove',S.pm=function(e){ if(!S.drag) return; S.orbit=S.drag.o-(e.clientX-S.drag.x)*0.006; S.idle=0; });
      addEventListener('pointerup',S.pu=function(e){ if(!S.drag) return; var tap=Math.abs(e.clientX-S.drag.x)<6&&performance.now()-S.drag.t<350; S.drag=null; if(tap){ var k=pick(e); if(k!=null&&API.onFruit) API.onFruit(k); } });
      var last=performance.now();
      function frame(now){ if(!alive) return; raf=requestAnimationFrame(frame); var dt=Math.min(0.05,(now-last)/1000); last=now; S.t+=dt;
        S.g+=(S.gt-S.g)*Math.min(1,dt*1.6); if(!S.drag){ S.idle=(S.idle||0)+dt; if(S.idle>2) S.orbit+=dt*0.08; }
        var cr=(15.5-S.g*1.5)*(W>820?1:1.3), ty=0.9+S.g*2.0; cam.position.set(Math.sin(S.orbit)*cr,5.2+S.g*2.2,Math.cos(S.orbit)*cr); cam.lookAt(0,ty,0); if(W>820){ if(!S.vo){ cam.setViewOffset(W,H,-W*0.17,0,W,H); S.vo=1; } } else if(S.vo!==2){ cam.setViewOffset(W,H,0,H*0.2,W,H); S.vo=2; }
        sprouts.forEach(function(sp){ var tg=sp.userData.on?1:0.001, s=sp.scale.x+(tg-sp.scale.x)*Math.min(1,dt*3); sp.scale.setScalar(s); });
        tree.rotation.z=Math.sin(S.t*0.8)*0.012; S.wilt+=( (S.wiltT==null?S.wilt:S.wiltT) -S.wilt)*dt;
        for(var i=drops.length-1;i>=0;i--){ var d=drops[i]; d.userData.v-=9*dt; d.position.y+=d.userData.v*dt; if(d.position.y<0.3){ sc.remove(d); drops.splice(i,1); } }
        apply(); R.render(sc,cam); }
      alive=true; raf=requestAnimationFrame(frame);
      var API={set:setState,water:water,onFruit:null,dispose:function(){ alive=false; cancelAnimationFrame(raf); if(ro) ro.disconnect(); removeEventListener('pointermove',S.pm); removeEventListener('pointerup',S.pu); sc.traverse(function(o){ if(o.geometry) o.geometry.dispose(); if(o.material){ if(o.material.map) o.material.map.dispose(); o.material.dispose(); } }); R.dispose(); try{ R.forceContextLoss(); }catch(er){} },S:S};
      return API; }
    var V=null;
    function level(life){ var k=0; for(var i=0;i<LV.length;i++) if(life>=LV[i].p) k=i; return k; }
    function paint(){ var st=PLY.st(), life=st.issued||0, bal=st.pts||0, k=level(life), nx=LV[k+1], today=ymd(), watered=st.days.indexOf(today)>-1, sk=PLY.streak(), ripe=FR.filter(function(f){ return bal>=f.p; }).length;
      if(V){ V.set(life,bal,st.days.length,watered); V.S.wiltT=watered?0:1; }
      root.querySelector('.chPts b').textContent=fmt(bal);
      var pct=nx?Math.min(1,(life-LV[k].p)/(nx.p-LV[k].p)):1;
      root.querySelector('.chCard').innerHTML='<span class="pyEye"><i></i>Tu chakra · etapa '+(k+1)+' de 6</span><h2>'+LV[k].n+'</h2>'+
        '<div class="chBar"><i style="width:'+(pct*100)+'%"></i></div><p class="chNx">'+(nx?('Faltan <b>'+fmt(nx.p-life)+' pts ganados</b> para que crezca a '+nx.n.toLowerCase()):'Tu árbol está en plena cosecha')+'</p>'+
        '<div class="chKpi"><div><b>'+fmt(life)+'</b><span>pts ganados en total</span></div><div><b>'+fmt(bal)+'</b><span>pts para cosechar</span></div><div><b>'+ripe+' / 5</b><span>frutos maduros</span></div></div>'+
        '<div class="chActs"><button class="pyGo" data-ch="water"'+(watered?' disabled':'')+'><span>'+(watered?'Ya regaste hoy':'Regar hoy')+'</span></button><button class="pyGhost" data-ch="buy">Simular compra US$30 · +300 pts</button><button class="pyGhost" data-ch="play">Ganar puntos jugando →</button></div>'+
        '<p class="chStx">'+(sk?('Racha de '+sk+' '+(sk===1?'día':'días')+' · '):'')+Math.min(30,st.days.length)+' surcos sembrados'+(watered?'':' · tu planta te espera')+'</p>'+
        '<ul class="chHow"><li><b>Jugar</b> hasta 100 pts al día</li><li><b>Comprar</b> 10 pts por cada US$1</li><li><b>Volver cada día</b> siembra un surco y sostiene la racha</li><li><b>Cosechar</b> un fruto maduro es canjear un premio</li></ul>'; }
    function fruitCard(k){ var f=FR[k], st=PLY.st(), ok=st.pts>=f.p, c=root.querySelector('.chFruit');
      c.innerHTML='<button class="chFx" data-ch="fx" aria-label="Cerrar">✕</button><span class="pyEye"><i></i>'+f.t+'</span><h3>'+f.n+'</h3><p>'+(ok?'Este fruto está maduro: tienes los '+fmt(f.p)+' pts para cosecharlo.':'Aún está verde: te faltan '+fmt(f.p-st.pts)+' pts.')+'</p><button class="pyGo" data-ch="harvest"'+(ok?'':' disabled')+'><span>Cosechar en CruzTRD Play</span></button>'; c.classList.add('on'); }
    function click(e){ var b=e.target.closest('[data-ch]'); if(!b) return; var a=b.getAttribute('data-ch');
      if(a==='close') close(); else if(a==='water'){ PLY.water(); VAUD.ok(); VAUD.ring(2); if(V) V.water(); setTimeout(paint,600); }
      else if(a==='buy'){ PLY.add(300,'buy'); VAUD.ok(); VAUD.orb(6); paint(); }
      else if(a==='play'||a==='harvest'){ close(); PLY.open(a==='harvest'?'prem':null); }
      else if(a==='fx') root.querySelector('.chFruit').classList.remove('on'); }
    function open(){ root=$i('chakra'); if(!root) return; if(typeof closeDir==='function') closeDir(); try{ panel.classList.remove('open'); }catch(e){} document.body.classList.add('magopen','plyopen','chopen'); root.classList.add('open');
      if(!root._b){ root._b=1; root.addEventListener('click',click); addEventListener('keydown',function(e){ if(e.key==='Escape'&&root.classList.contains('open')){ e.stopImmediatePropagation(); close(); } },true); }
      try{ V=build(); V.onFruit=fruitCard; }catch(err){ V=null; } paint(); }
    function close(){ if(V){ V.dispose(); V=null; } if(root){ root.classList.remove('open'); root.querySelector('.chFruit').classList.remove('on'); } document.body.classList.remove('magopen','plyopen','chopen'); }
    return {open:open,close:close};
  })();
  function openChakra(){ CHAKRA.open(); }
  /* ============ Diseña tu app con el equipo: diagnóstico con IA + voz de los especialistas ============ */
  var TEAM={intro:{nm:'Tu anfitrión',short:'el anfitrión',role:'Anfitrión del estudio'},infra:{nm:'Mateo',role:'Infraestructura'},seg:{nm:'Diana',role:'Seguridad'},pagos:{nm:'Camilo',role:'Pagos'},susc:{nm:'Bruna',role:'Suscripciones'},mkt:{nm:'Nico',role:'Marketing'},fidel:{nm:'Renata',role:'Fidelización'},dash:{nm:'Andrés',role:'Dashboards & KPIs'}};
  var TORDER=['infra','seg','pagos','susc','mkt','fidel','dash'];
  function tRoom(hk){ for(var i=0;i<ROOMS.length;i++){ var sp=ROOMS[i].spots||[]; for(var j=0;j<sp.length;j++) if(sp[j].type==='char'&&sp[j].hk===hk) return i; } return 0; }
  function tAv(hk){ return 'media/av-'+hk+'.webp'; }

  /* ---------- VOZ: agentes conversacionales de ElevenLabs ---------- */
  var VOZ=(function(){
    var st=null, conv=null, who=null, ctx=null, dock=null, tmr=null, t0=0, MAXS=240, libP=null, ending=false;
    function avail(){ if(st) return st; st=fetch('/api/voz',{cache:'no-store'}).then(function(r){ return r.json(); }).then(function(j){ return !!(j&&j.voice); }).catch(function(){ return false; }); return st; }
    function lib(){ if(libP) return libP; libP=new Promise(function(res,rej){ if(window.ElevenLabsClient) return res(window.ElevenLabsClient); var s=document.createElement('script'); s.src='vendor/elevenlabs-client-1.28.0.js'; s.onload=function(){ window.ElevenLabsClient?res(window.ElevenLabsClient):rej(new Error('sdk')); }; s.onerror=function(){ libP=null; rej(new Error('sdk')); }; document.head.appendChild(s); }); return libP; }
    function teamLine(){ return TORDER.map(function(k){ return TEAM[k].nm+' ('+TEAM[k].role+', clave "'+k+'")'; }).join('; '); }
    function knowledge(hk){ var D=SPEC[hk]; if(!D) return ''; var t='Tu capa: '+(D.lead||'')+' '+(D.why||'');
      if(D.items) t+=' Lo que construimos: '+D.items.map(function(it){ return it[0]+' ('+it[1]+')'; }).join('; ')+'.';
      if(D.wins) t+=' Lo que gana el cliente: '+D.wins.join('; ')+'.'; var L=LIBS[hk]; if(L) t+=' Tecnología: '+L.join(', ')+'.'; return t; }
    function persona(hk,c){ var T=TEAM[hk], host=hk==='intro';
      var p=(host?'Eres el anfitrión del Estudio CruzTRD':'Eres '+T.nm+', especialista en '+T.role+' del Estudio CruzTRD')+' (CRUZTRD CT S.A.S., Quito, Ecuador). CruzTRD integra plataformas con IA y construye apps D2C, de venta directa al consumidor, en siete capas: Infraestructura, Seguridad, Pagos, Suscripciones, Marketing, Fidelización y Dashboards. Hablas por voz con alguien que recorre el estudio en 360 grados.\n'+
        'Estilo: español latinoamericano neutro, cálido y directo. Turnos cortos: dos o tres oraciones como máximo, una pregunta a la vez, sin listas ni formato. Usa "tú".\n'+
        (host?'Tu trabajo: entender la idea del visitante (qué hace su app, para quién es y cómo gana dinero) y diseñar con él su app ideal. Cuando tengas esos tres datos, llama a la herramienta diagnosticar_app. Luego resume el resultado en dos frases y ofrece pasarlo con el especialista de la capa más importante usando pasar_a. '+knowledge('intro'):'Tu trabajo: explicar tu capa aplicada a la idea del visitante, con ejemplos concretos, y resolver sus dudas. '+knowledge(hk))+'\n'+
        'Equipo: '+teamLine()+'. Si el visitante quiere hablar de otra capa, dile con quién lo pasas y llama a pasar_a con la clave. Si quiere ver el piso de una capa en el recorrido, llama a ir_a_capa.\n'+
        'Reglas: no inventes precios, plazos ni clientes; si preguntan precio, explica que depende de las capas que necesite y ofrece agendar una llamada en cruztrd.com. No prometas resultados garantizados. Si la conversación se sale de CruzTRD o de su app, vuelve con amabilidad al tema.';
      if(c&&c.dx){ p+='\nContexto: el visitante ya hizo su diagnóstico. Idea: "'+(c.idea||'')+'". Tipo de app: '+c.dx.appType+'. Resumen: '+c.dx.summary+'. Capas recomendadas: '+c.dx.caps.map(function(x){ return x.k+' ('+x.why+')'; }).join('; ')+'.'; }
      else if(c&&c.idea) p+='\nContexto: el visitante escribió esta idea: "'+c.idea+'".';
      return p; }
    function first(hk,c){ var T=TEAM[hk];
      if(hk==='intro') return c&&c.dx?'¡Hola de nuevo! Ya tengo tu diagnóstico: '+c.dx.appType+'. ¿Quieres que lo repasemos o te paso con alguien del equipo?':'Hola, bienvenido al Estudio CruzTRD. Cuéntame tu idea: ¿qué hace tu app y para quién es?';
      var w=c&&c.dx?(c.dx.caps.filter(function(x){ return x.k===hk; })[0]||{}).why:''; return 'Hola, soy '+T.nm+', de '+T.role+'. '+(w?'Para tu app, '+w.charAt(0).toLowerCase()+w.slice(1)+' ':'')+'¿Qué te gustaría saber?'; }
    function ui(){ if(dock) return dock; dock=document.createElement('div'); dock.className='vzDock'; dock.innerHTML='<div class="vzAv"><img alt=""><i></i></div><div class="vzTx"><b class="vzNm"></b><span class="vzSt">Conectando…</span><p class="vzCap"></p></div><div class="vzBt"><button class="vzMic" aria-label="Silenciar micrófono"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></svg></button><button class="vzEnd" aria-label="Terminar">Terminar</button></div>';
      document.body.appendChild(dock); dock.querySelector('.vzEnd').onclick=function(){ stop(); }; dock.querySelector('.vzMic').onclick=function(){ if(!conv) return; var m=!dock.classList.contains('muted'); dock.classList.toggle('muted',m); try{ conv.setMicMuted(m); }catch(e){} }; return dock; }
    function setWho(hk){ var d=ui(), T=TEAM[hk]; d.querySelector('img').src=tAv(hk); d.querySelector('.vzNm').textContent=hk==='intro'?'Tu anfitrión · guía virtual del estudio':T.nm+' · guía virtual de '+T.role; }
    function status(t,cls){ var d=ui(); d.querySelector('.vzSt').textContent=t; d.className='vzDock on '+(cls||'')+(d.classList.contains('muted')?' muted':''); }
    function cap(t){ ui().querySelector('.vzCap').textContent=String(t||'').replace(/\[[^\]]{1,24}\]\s*/g,'').trim(); }
    async function start(hk,c){ if(conv) await stop(true); who=hk; ctx=c||ctx||{}; ending=false; setWho(hk); status('Conectando…','con'); cap('');
      try{ await navigator.mediaDevices.getUserMedia({audio:true}); }catch(e){ status('Necesito permiso para usar tu micrófono','err'); return false; }
      try{
        var r=await fetch('/api/voz?t=1',{cache:'no-store'}).then(function(x){ return x.json(); }); if(!r.ok||!r.token) throw new Error(r.error||'token');
        var L=await lib(), vid=(r.voices||{})[hk];
        var opts={conversationToken:r.token,connectionType:'webrtc',
          overrides:{agent:{prompt:{prompt:persona(hk,ctx)+'\nYa saludaste con un mensaje de bienvenida general. En tu primera respuesta preséntate en una frase con tu nombre y tu capa, y sigue con lo que el visitante pregunte.',},language:'es'}},
          clientTools:{
            diagnosticar_app:async function(p){ status('Diseñando tu app…','think'); var dx=await EQUIPO.run({idea:p.idea||'',country:p.pais||'Ecuador',scale:p.escala||'s1',monet:p.monetizacion||''},true); ctx.dx=dx&&dx.status==='ok'?dx:null; ctx.idea=p.idea; status('Hablando','talk');
              if(!dx) return 'No pude completar el diagnóstico ahora. Pide al visitante que lo intente con el botón Diseñar mi app.';
              if(dx.status==='incompleto') return 'La idea aún está incompleta. Motivo: '+dx.reason+' Pregunta: '+(dx.questions||[]).slice(0,2).join(' / ');
              return 'Diagnóstico listo y ya visible en pantalla. Tipo de app: '+dx.appType+'. '+dx.summary+' Capas en orden: '+dx.caps.map(function(x){ return TEAM[x.k]?TEAM[x.k].nm+' ('+TEAM[x.k].role+'): '+x.why:x.k; }).join(' | ')+'.'; },
            pasar_a:async function(p){ var k=String(p.especialista||p.capa||'').toLowerCase().trim(); if(!TEAM[k]){ var f=Object.keys(TEAM).filter(function(q){ return TEAM[q].nm.toLowerCase()===k||TEAM[q].role.toLowerCase().indexOf(k)===0; })[0]; k=f||''; } if(!TEAM[k]) return 'No encontré a ese especialista. Claves válidas: '+TORDER.join(', ');
              setTimeout(function(){ start(k,ctx); },2600); return 'Listo, despídete en una frase corta: el visitante pasa con '+TEAM[k].nm+'.'; },
            ir_a_capa:async function(p){ var k=String(p.capa||'').toLowerCase().trim(); if(!TEAM[k]) return 'Capa no válida'; try{ EQUIPO.close(); if(typeof goRoom==='function') goRoom(tRoom(k)); }catch(e){} return 'El visitante ya está en el piso de '+TEAM[k].role+'.'; }
          },
          onStatusChange:function(s){ var v=s&&s.status||s; if(v==='connected') status('Escuchando','listen'); },
          onModeChange:function(m){ var v=m&&m.mode||m; status(v==='speaking'?'Hablando':'Escuchando',v==='speaking'?'talk':'listen'); },
          onMessage:function(m){ if(m&&m.source==='ai'&&m.message) cap(m.message); },
          onError:function(e){ status('Se cortó la conexión','err'); },
          onDisconnect:function(){ if(!ending) status('Conversación terminada',''); conv=null; clearInterval(tmr); setTimeout(function(){ if(!conv&&dock) dock.classList.remove('on'); },2500); } };
        if(vid) opts.overrides.tts={voiceId:vid};
        conv=await L.Conversation.startSession(opts); t0=Date.now(); clearInterval(tmr); tmr=setInterval(function(){ if(Date.now()-t0>MAXS*1000){ cap('Llegamos al límite de esta conversación. Puedes iniciar otra cuando quieras.'); stop(); } },2000);
        try{ VAUD.duck&&VAUD.duck(true); }catch(e){} return true;
      }catch(e){ status('La voz no está disponible ahora','err'); setTimeout(function(){ if(!conv&&dock) dock.classList.remove('on'); },3500); return false; } }
    async function stop(quiet){ ending=true; clearInterval(tmr); var c=conv; conv=null; try{ if(c) await c.endSession(); }catch(e){} try{ VAUD.duck&&VAUD.duck(false); }catch(e){} if(!quiet&&dock) dock.classList.remove('on'); }
    return {avail:avail,start:start,stop:stop,get on(){ return !!conv; }};
  })();

  /* ---------- EQUIPO: diagnóstico con IA (usa /api/diagnose, el mismo del laboratorio) ---------- */
  var EQUIPO=(function(){
    var root=null, last=null, F={idea:'',country:'Ecuador',scale:'s1',monet:'',hasBase:false}, voiceOn=false;
    var finMode=false;
    var PK='cruztrd_plan_v1', ORD=['infra','seg','pagos','susc','mkt','fidel','dash'];
    var WHY={infra:'La base estable sobre la que corre toda tu app.',seg:'Cuentas y datos personales protegidos desde el inicio.',pagos:'Cobros dentro de la app con los medios de tu mercado.',susc:'Ingresos recurrentes y renovaciones.',mkt:'Atraer a las personas correctas y medir qué vende.',fidel:'Que tus clientes vuelvan y te recomienden.',dash:'Decidir con datos en vivo.'};
    function orden(d){ d.caps=d.caps.filter(function(c){ return ORD.indexOf(c.k)>-1; }).sort(function(a,b){ return ORD.indexOf(a.k)-ORD.indexOf(b.k); }); return d; }
    function guarda(){ try{ if(last) localStorage.setItem(PK,JSON.stringify({appType:last.appType,summary:last.summary,caps:last.caps,__local:!!last.__local,idea:F.idea})); else localStorage.removeItem(PK); }catch(e){} }
    function borra(){ last=null; guarda(); try{ window.__rutaUI(); window.__planHs&&window.__planHs(); }catch(e){} }
    (function(){ try{
      var q=new URLSearchParams(location.search).get('plan');
      if(q){ var ks=q.split(',').filter(function(k,i,a){ return ORD.indexOf(k)>-1&&a.indexOf(k)===i; }); if(ks.length){ var __ap=String(new URLSearchParams(location.search).get('app')||'').replace(/[<>]/g,'').slice(0,60); last=orden({status:'ok',appType:__ap||'Tu plan',summary:'Plan compartido: '+ks.length+' de las 7 capas del estudio.',caps:ks.map(function(k){ return {k:k,why:WHY[k]}; }),__local:true,__link:true}); guarda(); return; } }
      var d=JSON.parse(localStorage.getItem(PK)||'null'); if(d&&d.caps&&d.caps.length){ F.idea=String(d.idea||'').slice(0,1200); last=orden({status:'ok',appType:String(d.appType||'Tu plan'),summary:String(d.summary||''),caps:d.caps.map(function(c){ return {k:c.k,why:String(c.why||WHY[c.k]||'')}; }),__local:!!d.__local}); }
    }catch(e){} })();
    var PAIS=['Ecuador','Colombia','Perú','México','Chile','Otro'], ESC=[['s1','Menos de 1.000'],['s2','1.000 a 10.000'],['s3','10.000 a 50.000'],['s4','Más de 50.000']], MON=[['sub','Suscripción'],['once','Pago único'],['fee','Comisión'],['ads','Publicidad'],['none','Aún no cobra']];
    function esc2(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
    function chips(name,list,val){ return '<div class="eqChips" data-n="'+name+'">'+list.map(function(x){ var k=Array.isArray(x)?x[0]:x, l=Array.isArray(x)?x[1]:x; return '<button type="button" class="'+(k===val?'on':'')+'" data-v="'+esc2(k)+'">'+esc2(l)+'</button>'; }).join('')+'</div>'; }
    function teamHtml(sel){ return '<div class="eqTeam">'+['intro'].concat(TORDER).map(function(k){ var on=sel&&sel.indexOf(k)>-1; return '<div class="eqP'+(on?' on':'')+(sel&&!on&&k!=='intro'?' off':'')+'" data-k="'+k+'"><img src="'+tAv(k)+'" alt=""><b>'+esc2(TEAM[k].nm)+'</b><span>'+esc2(TEAM[k].role)+'</span></div>'; }).join('')+'</div>'; }
    function shell(){ return '<header class="eqTop"><button class="pyBack" data-eq="close">← Volver al estudio</button><div class="pyBrand">Cruz<i>TRD</i> <span>· Diseña tu app con el equipo</span></div><span class="eqVz" hidden>Voz activa</span></header><div class="eqMain"><div class="eqL" id="eqL"></div><aside class="eqR" id="eqR"></aside></div>'; }
    function form(note){ return '<span class="pyEye"><i></i>Diagnóstico con IA</span><h2>Cuéntanos tu idea y el equipo arma tu app ideal</h2>'+(note?'<div class="eqNote">'+note+'</div>':'')+
      '<label class="eqLbl" for="eqIdea">Tu idea</label><textarea id="eqIdea" rows="4" maxlength="1200" placeholder="Qué hace tu app, para quién es y cómo gana dinero. Ej.: cursos de cocina ecuatoriana por suscripción, con recetas en video y comunidad.">'+esc2(F.idea)+'</textarea>'+
      '<label class="eqLbl">Dónde lanzas</label>'+chips('country',PAIS,F.country)+'<label class="eqLbl">Usuarios al inicio</label>'+chips('scale',ESC,F.scale)+'<label class="eqLbl">Cómo cobras</label>'+chips('monet',MON,F.monet)+
      '<label class="eqTg"><input type="checkbox" id="eqBase"'+(F.hasBase?' checked':'')+'> Ya tengo una app o web propia</label>'+
      '<div class="eqActs"><button class="pyGo" data-eq="go"><span>Diseñar mi app</span><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h13M13 6l6 6-6 6"/></svg></button><button class="pyGhost eqVoice" data-eq="voice"'+(voiceOn?'':' hidden')+'>Contárselo por voz</button></div>'; }
    function loading(){ return '<span class="pyEye"><i></i>Diagnóstico con IA</span><h2>El equipo está diseñando tu app…</h2><div class="eqLoad"><i></i><i></i><i></i></div><p class="eqMuted">Leemos tu idea, elegimos las capas y le asignamos a cada una su guía.</p>'; }
    function incomplete(d){ return form('<b>'+esc2(d.reason||'Nos falta un poco de detalle.')+'</b>'+(d.questions&&d.questions.length?'<ul>'+d.questions.map(function(q){ return '<li>'+esc2(q)+'</li>'; }).join('')+'</ul>':'')+(d.example?'<p class="eqEx">Ejemplo: '+esc2(d.example)+'</p>':'')); }
    function finHtml(d){ var vis=[]; try{ vis=(CLUB.st.rooms||[]).slice(); if(cur>0&&vis.indexOf(cur)<0) vis.push(cur); }catch(e){} var ks=d.caps.map(function(c){ return c.k; }), hechos=ks.filter(function(k){ return vis.indexOf(ORD.indexOf(k)+1)>-1; }).length;
      // corte axonométrico del edificio: un volumen por piso
      var W=300, fh=40, dx=58, dy=26, x0=8, y0=dy+8, svg='<svg class="eqCorte" viewBox="0 0 '+(W+dx+20)+' '+(y0+fh*8+16)+'" role="group" aria-label="Corte del edificio: '+hechos+' de '+ks.length+' pisos de tu plan recorridos">';
      svg+='<defs><linearGradient id="eqG" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#2DD4A7"/><stop offset="1" stop-color="#18a982"/></linearGradient></defs>';
      for(var f=7;f>=0;f--){ var y=y0+(7-f)*fh, k=f?ORD[f-1]:null, en=k&&ks.indexOf(k)>-1, ok=en&&vis.indexOf(f)>-1, fr=ok?'url(#eqG)':en?'#16201f':'#0f1317', sd=ok?'#11866a':en?'#0d1514':'#0a0d10', st=en&&!ok?'#ffd27a':'rgba(243,241,236,.14)', tx=ok?'#03110b':en?'#f3f1ec':'rgba(243,241,236,.38)';
        if(f===7) svg+='<path d="M'+x0+' '+y+' L'+(x0+dx)+' '+(y-dy)+' L'+(x0+W+dx)+' '+(y-dy)+' L'+(x0+W)+' '+y+' Z" fill="#1b2226" stroke="rgba(243,241,236,.14)"/>';
        svg+='<path d="M'+(x0+W)+' '+y+' L'+(x0+W+dx)+' '+(y-dy)+' L'+(x0+W+dx)+' '+(y-dy+fh)+' L'+(x0+W)+' '+(y+fh)+' Z" fill="'+sd+'" stroke="rgba(243,241,236,.1)"/>';
        svg+='<g class="eqPiso'+(ok?' ok':en?' en':'')+'" style="--i:'+f+'" data-eq="room" data-k="'+(k||'intro')+'" tabindex="0" role="button" aria-label="Ir al piso '+String(f).padStart(2,'0')+'"><rect x="'+x0+'" y="'+y+'" width="'+W+'" height="'+fh+'" fill="'+fr+'" stroke="'+st+'"'+(en&&!ok?' stroke-dasharray="4 3"':'')+'/>';
        svg+='<text x="'+(x0+14)+'" y="'+(y+25)+'" fill="'+tx+'" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="600">'+String(f).padStart(2,'0')+'</text><text x="'+(x0+48)+'" y="'+(y+25)+'" fill="'+tx+'" font-family="Inter,system-ui,sans-serif" font-size="14">'+esc2(f?TEAM[k].role:'Recepción')+'</text>'+(en?'<text x="'+(x0+W-12)+'" y="'+(y+25)+'" text-anchor="end" fill="'+(ok?'#03110b':'#ffd27a')+'" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="600">'+(ok?'Recorrido':'Pendiente')+'</text>':'')+'</g>';
        for(var w=0;w<3;w++) svg+='<rect class="eqVen" style="--i:'+f+'" x="'+(x0+W+12+w*15)+'" y="'+(y-dy+fh*0.5+ (w*-dy/dx*15) -dy*0.25+dy)+'" width="7" height="12" fill="'+(ok?'#c9fbe9':en?'#ffd27a':'#1a2228')+'" opacity="'+(en?'.85':'.6')+'" transform="skewY('+(-Math.atan(dy/dx)*180/Math.PI)+')" transform-origin="'+(x0+W)+' '+y+'"/>';
      }
      svg+='<rect x="'+(x0-6)+'" y="'+(y0+fh*8)+'" width="'+(W+dx+12)+'" height="3" fill="rgba(243,241,236,.18)"/></svg>';
      var pisos=''; for(var i=6;i>=0;i--){ var k=ORD[i], en=ks.indexOf(k)>-1, ok=vis.indexOf(i+1)>-1; pisos+='<li class="'+(en?'en':'')+(en&&ok?' ok':'')+'"><b>'+String(i+1).padStart(2,'0')+'</b><span>'+esc2(TEAM[k].role)+'</span>'+(en?'<i>'+(ok?'Recorrido':'Pendiente')+'</i>':'')+'</li>'; }
      var sig=null; ks.forEach(function(k){ if(!sig&&vis.indexOf(ORD.indexOf(k)+1)<0) sig=k; });
      return '<div class="eqFin"><div class="eqCorteW">'+svg+'<ol class="eqEdif sr" aria-label="Los pisos de tu plan en el edificio">'+pisos+'</ol></div><div class="eqFinT"><span class="pyEye"><i></i>Tu recorrido</span><h2>'+(hechos>=ks.length?'Recorriste los '+ks.length+' pisos de tu plan':hechos?'Llevas '+hechos+' de '+ks.length+' pisos de tu plan':'Tu plan tiene '+ks.length+' pisos')+'</h2><p class="eqSum">'+(hechos>=ks.length?'Ya viste todas las capas que tu idea necesita. El siguiente paso es conversarlo con nosotros: tu plan y tu idea llegan escritos al formulario.':'Te '+(ks.length-hechos===1?'falta 1 piso':'faltan '+(ks.length-hechos)+' pisos')+'. Puedes seguir el recorrido o conversar tu plan con nosotros desde ya.')+'</p><div class="eqActs">'+(sig?'<button class="pyGhost eqSig" data-eq="room" data-k="'+sig+'">Ir al siguiente pendiente: piso '+String(ORD.indexOf(sig)+1).padStart(2,'0')+'</button>':'')+'<a class="pyGo eqA eqMain1" href="/contacto" data-eq="quiero"><span>Quiero construirla</span></a><button class="pyGhost" data-eq="pdf"><span>Descargar mi plan (PDF)</span></button><button class="pyGhost" data-eq="link">Copiar enlace de mi plan</button></div></div></div>'; }
    function result(d){ var n=d.caps.length;
      return (finMode?finHtml(d):'')+'<span class="pyEye"><i></i>Tu app ideal'+(d.__local?' · diagnóstico rápido':'')+'</span><h2>'+esc2(d.appType)+'</h2><p class="eqSum">'+esc2(d.summary)+'</p>'+
        '<div class="eqCaps">'+d.caps.map(function(c,i){ var T=TEAM[c.k]||{nm:c.k,role:c.k}; return '<div class="eqCap"><img src="'+tAv(c.k)+'" alt=""><div class="eqCt"><em>Paso '+(i+1)+' · Piso '+String(ORD.indexOf(c.k)+1).padStart(2,'0')+' · '+esc2(T.role)+'</em><b>'+esc2(T.nm)+'</b><p>'+esc2(c.why)+'</p></div><div class="eqCb">'+(voiceOn?'<button class="pyGhost" data-eq="talk" data-k="'+c.k+'">Hablar con '+esc2(T.nm)+'</button>':'')+'<button class="pyGhost" data-eq="room" data-k="'+c.k+'">Ver su capa</button></div></div>'; }).join('')+'</div>'+
        '<div class="eqActs"><button class="pyGo" data-eq="ruta"><span>Ver mi ruta en el edificio</span></button><button class="pyGhost" data-eq="pdf"><span>Descargar mi plan (PDF)</span></button><a class="pyGhost eqA" href="/contacto" data-eq="quiero">Quiero construirla</a><button class="pyGhost" data-eq="link">Copiar enlace de mi plan</button><button class="pyGhost" data-eq="edit">Ajustar la idea</button><button class="pyGhost" data-eq="borrar">Borrar plan</button></div>'+
        '<p class="eqMuted">'+n+' capas · '+(d.__local?'Diagnóstico rápido por palabras clave: la IA no respondió en este momento.':'Diagnóstico generado con IA a partir de tu descripción.')+'</p>'; }
    function paint(view,d){ var L=root.querySelector('#eqL'), R=root.querySelector('#eqR');
      L.innerHTML=view==='load'?loading():(view==='res'?result(d):(view==='inc'?incomplete(d):form()));
      R.innerHTML=teamHtml(view==='res'?d.caps.map(function(c){ return c.k; }):null)+'<p class="eqRn">'+(view==='res'?'Tu equipo para esta app':'8 guías virtuales · 7 capas')+'</p>';
      root.querySelector('#eqL').scrollTop=0; }
    function readForm(){ var t=root.querySelector('#eqIdea'); if(t) F.idea=t.value.trim(); var b=root.querySelector('#eqBase'); if(b) F.hasBase=b.checked; }
    function local(p){ var t=(p.idea||'').toLowerCase(), caps=[], has=function(rx){ return rx.test(t); };
      if(!p.hasBase) caps.push({k:'infra',why:'Necesitas una base estable que crezca con tus usuarios.'});
      var sub=p.monet==='sub'||has(/suscrip|membres|mensual|plan /), pay=p.monet==='once'||p.monet==='fee'||has(/venta|vend|tienda|cobr|pago|pedido|reserv|comisi|compra/);
      if(sub||pay||has(/usuari|cuenta|registr|login|datos|perfil|salud|clientes|comunidad|socio|alumno|paciente/)) caps.push({k:'seg',why:sub||pay?'Vas a cobrar y guardar cuentas: los datos y los pagos se protegen desde el primer día.':'Manejas cuentas y datos personales que hay que proteger.'});
      if(sub) caps.push({k:'susc',why:'Tu modelo vive de cobros recurrentes y renovaciones.'}); if(pay||sub) caps.push({k:'pagos',why:'Vas a cobrar dentro de la app con los medios de tu mercado.'});
      caps.push({k:'mkt',why:'Una app D2C necesita atraer a las personas correctas y medir qué vende.'});
      var big=p.scale==='s3'||p.scale==='s4', rep=has(/puntos|fideli|recompens|frecuent|vuelv|club|membres|comunidad/)||(pay&&has(/caf[eé]|comida|restaur|pan|tienda|ropa/));
      if(rep&&p.monet!=='ads') caps.push({k:'fidel',why:'Tus clientes compran seguido: que vuelvan y te recomienden cuesta menos que conseguir nuevos.'});
      if(big||has(/m[eé]trica|reporte|dashboard|anal[ií]tica|kpi|inventario|sucursal/)) caps.push({k:'dash',why:'Con tu volumen necesitas ver ventas, retención y costo por cliente en vivo.'});
      var omit=['seg','pagos','susc','fidel','dash'].filter(function(k){ return !caps.some(function(c){ return c.k===k; }); });
      var ty=has(/pedido|deliver|domicilio/)?'App de pedidos':has(/yoga|gimnas|entren|fitness|pilates|crossfit|baile/)?'App de clases y entrenamiento':has(/curso|aprend|academ|lecci|tutor/)?'Plataforma de cursos':has(/reserv|cita|turno|agenda/)?'App de reservas':has(/deliver|pedido|comida|restaur|caf[eé]/)?'App de pedidos':has(/tienda|producto|vend|ropa|marca/)?'Tienda D2C':has(/clase/)?'App de clases':'App D2C';
      var NOM={seg:'Seguridad',pagos:'Pagos',susc:'Suscripciones',fidel:'Fidelización',dash:'Dashboards'};
      return {status:'ok',appType:ty,summary:'Esta '+ty.charAt(0).toLowerCase()+ty.slice(1)+' arranca con '+caps.length+' de las 7 capas.'+(omit.length?' Dejamos para después '+omit.map(function(k){ return NOM[k]; }).join(', ')+': tu idea no las necesita para salir; se suman cuando el negocio crezca.':''),caps:caps,__local:true}; }
    async function run(p,fromVoice){ F.idea=p.idea!=null?p.idea:F.idea; if(p.country) F.country=p.country; if(p.scale) F.scale=/^s[1-4]$/.test(p.scale)?p.scale:F.scale; if(p.monet!=null) F.monet=['sub','once','fee','ads','none'].indexOf(p.monet)>-1?p.monet:F.monet; if(p.hasBase!=null) F.hasBase=!!p.hasBase;
      if(!root||!root.classList.contains('open')) open(true); paint('load'); var d=null;
      try{ var ctl=new AbortController(), to=setTimeout(function(){ ctl.abort(); },25000);
        d=await fetch('/api/diagnose',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({idea:F.idea,country:F.country,scale:F.scale,monet:F.monet,hasBase:F.hasBase}),signal:ctl.signal}).then(function(r){ return r.json(); }); clearTimeout(to); }catch(e){ d=null; }
      if(d&&d.status==='incompleto'){ paint('inc',d); return d; }
      if(!d||d.status!=='ok'||!d.caps||!d.caps.length) d=local(F);
      d.caps=d.caps.filter(function(c){ return TEAM[c.k]&&c.k!=='intro'; }); orden(d); last=d; guarda(); paint('res',d); try{ window.__rutaUI(); window.__planHs&&window.__planHs(); }catch(e){} try{ CLUB.spec&&CLUB.spec('intro'); }catch(e){} return d; }
    function llevaIdea(){ try{ if(last) sessionStorage.setItem('cz_plan',JSON.stringify({t:last.appType,c:last.caps.map(function(c){ return TEAM[c.k].role; }),i:F.idea})); }catch(e){} }
    function prompt2(u,bt){ var i=document.createElement('input'); i.value=u; i.readOnly=true; i.className='eqLink'; i.setAttribute('aria-label','Enlace de tu plan'); bt.parentNode.insertBefore(i,bt.nextSibling); i.focus(); i.select(); }
    async function pdf(){ var d=last; if(!d) return; var btn=root.querySelector('[data-eq="pdf"] span'); if(btn) btn.textContent='Preparando PDF…';
      try{ if(!window.jspdf){ await new Promise(function(res,rej){ var s=document.createElement('script'); s.src='/vendor/jspdf.umd.min.js?v=1'; s.onload=res; s.onerror=rej; document.head.appendChild(s); }); }
        var J=new window.jspdf.jsPDF({unit:'mm',format:'a4'}), W=210, H=297, M=18, y;
        function txt(t,x,yy,sz,col,st,mw){ J.setFont('helvetica',st||'normal'); J.setFontSize(sz); J.setTextColor(col[0],col[1],col[2]); var L=J.splitTextToSize(String(t),mw||W-2*M); J.text(L,x,yy); return yy+L.length*sz*0.42; }
        // portada oscura
        J.setFillColor(7,9,12); J.rect(0,0,W,H,'F'); txt('Cruz',M,30,22,[243,241,236],'bold'); J.setTextColor(45,212,167); J.text('TRD',M+J.getTextWidth('Cruz'),30);
        txt('PLAN DE TU APP · DIAGNÓSTICO CON IA',M,92,9,[160,170,168],'bold'); y=txt(d.appType,M,108,30,[243,241,236],'bold');
        y=txt(F.idea?'“'+F.idea+'”':'',M,y+6,12,[200,206,204],'italic'); y=txt(d.summary,M,y+6,11,[200,206,204]);
        J.setDrawColor(40,46,52); J.setFillColor(14,17,22); J.roundedRect(M,228,W-2*M,22,3,3,'FD'); txt('EMPRESA',M+5,236,7,[140,150,148],'bold'); txt('CRUZTRD CT S.A.S. · RUC 1793237622001 · Quito, Ecuador · cruztrd.com',M+5,243,9,[230,234,232]);
        J.setFillColor(14,17,22); J.roundedRect(M,254,(W-2*M)/2-3,18,3,3,'FD'); txt('DIRIGIDO A',M+5,261,7,[140,150,148],'bold'); txt('Visitante del Estudio CruzTRD',M+5,267,9,[230,234,232]);
        J.setDrawColor(45,212,167); J.setFillColor(14,17,22); J.roundedRect(W/2+2,254,(W-2*M)/2-2,18,3,3,'FD'); txt('CLASIFICACIÓN',W/2+7,261,7,[140,150,148],'bold'); txt('Documento de trabajo · Uso reservado',W/2+7,267,9,[45,212,167]);
        txt('Fecha: '+new Date().toLocaleDateString('es-EC',{day:'numeric',month:'long',year:'numeric'}),M,285,8,[140,150,148]);
        // interior claro
        J.addPage(); function head(){ txt('CRUZTRD CT S.A.S. · RUC 1793237622001',M,12,7.5,[110,118,121]); J.setTextColor(110,118,121); J.text('Plan de tu app · Uso reservado',W-M,12,{align:'right'}); J.setDrawColor(225,228,230); J.line(M,15,W-M,15); }
        head(); y=28; function h2(n,t){ if(y>255){ J.addPage(); head(); y=28; } J.setFont('helvetica','bold'); J.setFontSize(14); J.setTextColor(45,212,167); J.text(n,M,y); J.setTextColor(11,14,20); J.text(t,M+11,y); y+=8; }
        h2('01','Diagnóstico'); y=txt('Tipo de app: '+d.appType,M,y,10.5,[11,14,20],'bold')+1; y=txt(d.summary,M,y,10,[60,66,70])+6;
        h2('02','Capas y equipo'); J.setFillColor(11,14,20); J.rect(M,y-4,W-2*M,8,'F'); txt('CAPA',M+3,y+1,8,[243,241,236],'bold'); J.text('ESPECIALISTA',M+50,y+1); J.text('POR QUÉ LA NECESITAS',M+92,y+1); y+=9;
        d.caps.forEach(function(c,i){ var T=TEAM[c.k], L=J.splitTextToSize(c.why,W-2*M-95), h=Math.max(8,L.length*4.4+3); if(y+h>275){ J.addPage(); head(); y=28; } if(i%2===0){ J.setFillColor(245,247,247); J.rect(M,y-4.5,W-2*M,h,'F'); }
          txt(String(i+1).padStart(2,'0')+' · '+T.role,M+3,y,9,[11,14,20],'bold'); txt(T.nm,M+50,y,9,[60,66,70]); J.setFont('helvetica','normal'); J.setFontSize(9); J.setTextColor(60,66,70); J.text(L,M+92,y); y+=h; });
        y+=6; h2('03','Próximos pasos'); ['Llamada de 30 minutos para validar la idea, el mercado y el orden de las capas.','Prototipo navegable de la primera capa con tus datos y tu marca.','Lanzamiento por etapas: cada capa entra cuando el negocio la necesita, con métricas desde el día uno.'].forEach(function(s,i){ y=txt((i+1)+'.  '+s,M,y,10,[60,66,70])+2; });
        y+=4; h2('04','Cómo construirla con IA'); y=txt('Describe cada capa como una tarea concreta para un asistente de IA (por ejemplo, Claude): qué datos entran, qué debe hacer y cómo sabrás que funciona. Empieza por la base, valida con usuarios reales y suma capas cuando cada una tenga una métrica clara. CruzTRD integra esas piezas en una sola app D2C, con tu marca y tus datos.',M,y,10,[60,66,70])+8;
        if(y>250){ J.addPage(); head(); y=28; } J.setDrawColor(200,206,208); J.setFillColor(250,251,251); J.roundedRect(M,y,W-2*M,22,2,2,'FD'); txt('NOTA DE USO',M+5,y+7,7.5,[110,118,121],'bold'); txt('Diagnóstico orientativo generado con IA a partir de tu descripción. No es una cotización ni un compromiso de alcance; el plan definitivo se arma con el equipo de CruzTRD.',M+5,y+13,8.5,[60,66,70],'normal',W-2*M-10);
        var n=J.getNumberOfPages(); for(var p=2;p<=n;p++){ J.setPage(p); txt('Cruz',M,288,8,[11,14,20],'bold'); J.setTextColor(45,212,167); J.text('TRD',M+J.getTextWidth('Cruz'),288); J.setTextColor(110,118,121); J.setFont('helvetica','normal'); J.text(p+' / '+n,W-M,288,{align:'right'}); }
        J.save('Plan de tu app - CruzTRD.pdf');
      }catch(e){ alertless('No pude generar el PDF ahora. Intenta de nuevo.'); }
      if(btn) btn.textContent='Descargar mi plan (PDF)'; }
    function alertless(t){ var n=root.querySelector('.eqMuted'); if(n) n.textContent=t; }
    function click(e){ var b=e.target.closest('[data-eq],.eqChips button'); if(!b||!root.contains(b)) return;
      if(b.parentNode.classList&&b.parentNode.classList.contains('eqChips')){ var nm=b.parentNode.getAttribute('data-n'); F[nm]=b.getAttribute('data-v'); [].forEach.call(b.parentNode.children,function(x){ x.classList.toggle('on',x===b); }); return; }
      var a=b.getAttribute('data-eq'), k=b.getAttribute('data-k');
      if(a==='close') close(); else if(a==='go'){ readForm(); if(F.idea.length<8){ var t=root.querySelector('#eqIdea'); t.focus(); t.classList.add('shake'); setTimeout(function(){ t.classList.remove('shake'); },500); var er=root.querySelector('#eqErr'); if(!er){ er=document.createElement('p'); er.id='eqErr'; er.className='eqErr'; er.setAttribute('role','alert'); t.parentNode.insertBefore(er,t.nextSibling); } er.textContent='Cuéntanos tu idea en una o dos frases para armar tu plan.'; t.setAttribute('aria-invalid','true'); t.setAttribute('aria-describedby','eqErr'); return; } run({}); }
      else if(a==='voice'){ readForm(); VOZ.start('intro',{idea:F.idea}); } else if(a==='talk'){ VOZ.start(k,{idea:F.idea,dx:last}); }
      else if(a==='room'){ close(); try{ goRoom(tRoom(k)); }catch(er){} } else if(a==='ruta'){ close(); try{ openDir(); }catch(er){} }
      else if(a==='borrar'){ borra(); paint('form'); }
      else if(a==='quiero'){ llevaIdea(); }
      else if(a==='link'){ var u=location.origin+'/portal360?plan='+last.caps.map(function(c){ return c.k; }).join(',')+(last.appType&&last.appType!=='Tu plan'?'&app='+encodeURIComponent(String(last.appType).slice(0,60)):''); var bt=b; (navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(function(){ bt.textContent='Enlace copiado'; },function(){ prompt2(u,bt); }); } else if(a==='pdf') pdf(); else if(a==='edit'){ paint('form'); } }
    function open(keep){ root=$i('equipo'); if(!root) return; if(typeof closeDir==='function') closeDir(); try{ panel.classList.remove('open'); }catch(e){} document.body.classList.add('magopen','eqopen'); root.classList.add('open');
      if(!root._b){ root._b=1; root.innerHTML=shell(); root.addEventListener('click',click); root.addEventListener('keydown',function(e){ var g=e.target.closest&&e.target.closest('.eqPiso'); if(g&&(e.key==='Enter'||e.key===' ')){ e.preventDefault(); g.dispatchEvent(new MouseEvent('click',{bubbles:true})); } }); addEventListener('keydown',function(e){ if(e.key==='Escape'&&root.classList.contains('open')){ e.stopImmediatePropagation(); close(); } },true); }
      if(!keep) last?paint('res',last):paint('form');
      VOZ.avail().then(function(v){ voiceOn=v; root.querySelector('.eqVz').hidden=!v; [].forEach.call(root.querySelectorAll('.eqVoice'),function(x){ x.hidden=!v; }); if(v&&last&&!keep) paint('res',last); }); }
    function close(){ if(root) root.classList.remove('open'); document.body.classList.remove('magopen','eqopen'); finMode=false; try{ root.classList.remove('modoFin'); }catch(e){} }
    return {open:open,close:close,run:run,llevaIdea:llevaIdea,fin:function(){ finMode=true; open(); try{ root.classList.add('modoFin'); var fm=root.querySelector('.eqFin'); if(fm){ fm.classList.remove('anim'); void fm.offsetWidth; fm.classList.add('anim'); } root.querySelector('.eqMain').scrollTop=0; }catch(e){} },get last(){ return last; }};
  })();
  function irDiagnostico(){ try{ document.body.style.transition='opacity .25s'; document.body.style.opacity='0'; }catch(e){} setTimeout(function(){ location.href='/#diagnostico'; },240); }
  addEventListener('pageshow',function(){ try{ document.body.style.opacity=''; }catch(e){} });
  function openEquipo(){ EQUIPO.open(); }
  // botones de voz en los paneles de especialistas (se muestran solo si la voz está conectada)
  document.addEventListener('click',function(e){ var b=e.target.closest('[data-vz]'); if(!b) return; e.preventDefault(); var k=b.getAttribute('data-vz'); if(k==='design'){ EQUIPO.open(); return; } VOZ.start(k,{idea:'',dx:EQUIPO.last}); });
  (function(){ var hecho=0; document.addEventListener('click',function(e){ if(hecho||!e.target.closest||!e.target.closest('.hs')) return; hecho=1; VOZ.avail().then(function(v){ if(v) document.body.classList.add('vzok'); }); },true); })();
  function openMag(){ closeDir(); panel.classList.remove('open'); magIndex(); magBack.classList.add('open'); magEl.classList.add('open'); document.body.classList.add('magopen'); }
  function closeMag(){ fbClose(); magEl.classList.remove('open'); magBack.classList.remove('open'); document.body.classList.remove('magopen'); }
  magView.addEventListener('click',function(e){ var t=e.target.closest&&e.target.closest('[data-art],[data-idx],[data-room],[data-shelf],[data-pub],[data-retry]'); if(!t)return;
    if(t.hasAttribute('data-shelf')){ closeMag(); return; } if(t.hasAttribute('data-pub')){ var k=t.getAttribute('data-pub'); if(k==='rev') magIndex(); return; }
    if(t.hasAttribute('data-art')) magArt(+t.getAttribute('data-art')); else if(t.hasAttribute('data-idx')) magIndex(); else { closeMag(); var r=+t.getAttribute('data-room'); if(r!==cur) goRoom(r); } });
  document.getElementById('magX').onclick=closeMag; magBack.onclick=closeMag;
  addEventListener('keydown',function(e){ if(e.key==='Escape'&&magEl.classList.contains('open'))closeMag(); });
  document.getElementById('dirX').onclick=closeDir;
  dirBack.onclick=closeDir;
  document.getElementById('navHub').onclick=openDir;

  // arranque en Recepción
  try{ var tactil=matchMedia('(pointer:coarse)').matches, red=navigator.connection||{}, mem=navigator.deviceMemory||8;
    // 6K en escritorio; en móviles solo en equipos recientes, con buena red y guardando menos salas en memoria
    var movil6=tactil&&devicePixelRatio>=2&&Math.max(screen.width,screen.height)>=800&&mem>=6&&!red.saveData&&(!red.effectiveType||red.effectiveType==='4g');
    if(movil6) MAXTEX=2;
    if(renderer.capabilities.maxTextureSize>=8192&&((!tactil&&innerWidth>=1100&&mem>=4)||movil6)){ ROOMS[0].pano='media/lab-pano-6k.webp?v=w4'; ROOMS.forEach(function(R){ if(R.p6) R.pano=R.p6; }); } }catch(e){}
  setPano(ROOMS[0].pano, function(){loader.style.opacity='0';setTimeout(function(){loader.style.display='none';},900);
    // bienvenida (una vez por visita) o entrada directa a un piso desde el inicio (?capa=N)
    var capa=0; try{ capa=parseInt(new URLSearchParams(location.search).get('capa')||'0',10)||0; }catch(e){}
    var bv=document.getElementById('bienv'), visto=false; try{ visto=sessionStorage.getItem('cz_bienv')==='1'; }catch(e){}
    if(capa>=1&&capa<=7){ setTimeout(function(){ try{ window.__czPop=true; goRoom(capa); }catch(e){} },1100); }
    var desde=''; try{ desde=new URLSearchParams(location.search).get('desde')||''; }catch(e){}
    try{ if(new URLSearchParams(location.search).get('con')==='anfitrion'){ desde='inicio'; history.replaceState(null,'',location.pathname); setTimeout(function(){ try{ var h=document.querySelector('.hs.char'); if(h) h.click(); }catch(e){} },1400); } }catch(e){}
    if(desde==='inicio'){ try{ history.replaceState(null,'',location.pathname); sessionStorage.setItem('cz_bienv','1'); }catch(e){} }
    else if(capa>=1&&capa<=7){}
    var __pl=null; try{ if(new URLSearchParams(location.search).get('plan')) __pl=planCaps(); }catch(e){}
    if(bv&&__pl&&__pl.length){ visto=false; var __h=bv.querySelector('h2'), __p=bv.querySelector('p'), __g=document.getElementById('bienvGo');
      var __ap=''; try{ __ap=EQUIPO.last&&EQUIPO.last.appType!=='Tu plan'?EQUIPO.last.appType:''; }catch(e){}
      __h.textContent=__ap?'Te compartieron el plan de una '+__ap.charAt(0).toLowerCase()+__ap.slice(1):'Te compartieron un plan de '+__pl.length+(__pl.length===1?'\u00a0piso':'\u00a0pisos');
      __p.textContent=(__ap?__pl.length+(__pl.length===1?' piso. ':' pisos. '):'')+'Capas: '+__pl.map(function(c){ return TEAM[c.k].role; }).join(', ')+'. Te llevamos piso por piso; en cada uno, su guía te explica por qué está en el plan.';
      __g.textContent='Empezar en el piso '+pad2(HKI[__pl[0].k]); __g.addEventListener('click',function(){ setTimeout(function(){ try{ goRoom(HKI[__pl[0].k]); }catch(e){} },560); }); }
    if(bv&&!visto&&desde!=='inicio'&&!(capa>=1&&capa<=7)){ bv.hidden=false; var cerrar=function(){ bv.classList.add('fuera'); try{ sessionStorage.setItem('cz_bienv','1'); }catch(e){} setTimeout(function(){ bv.hidden=true; },520); };
      document.getElementById('bienvGo').onclick=cerrar; bv.addEventListener('keydown',function(e){ if(e.key==='Tab'){ var fs=bv.querySelectorAll('button,a[href]'), i=[].indexOf.call(fs,document.activeElement); e.preventDefault(); try{ fs[(i+(e.shiftKey?-1:1)+fs.length)%fs.length].focus(); }catch(_){} } else if(e.key==='Escape'){ cerrar(); } }); setTimeout(function(){ try{ document.getElementById('bienvGo').focus(); }catch(e){} },950); }
  });
  buildHotspots(ROOMS[0]); buildWall(ROOMS[0]); roomtag.textContent=ROOMS[0].name; CLUB.ui(); try{ rutaUI(); planHs(); }catch(e){} setTimeout(function(){ try{ rutaUI(); planHs(); }catch(e){} },1800); if((CLUB.st.v||1)>1) setTimeout(function(){CLUB.toast('Bienvenido de vuelta','+200 pts por regresar · visita nº '+CLUB.st.v);},1600);
  var noDrift=false; try{ noDrift=matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){}
  if(/[?&]calibrar=1/.test(location.search)||/^localhost$|^127\./.test(location.hostname)) window.__T={ROOMS:ROOMS, go:goRoom, curRoom:function(){return cur;},
    yaw:function(v){tyaw=yaw=v;},
    freeze:function(on){noDrift=(on!==false);return noDrift;},
    vp:function(){return [innerWidth,innerHeight];},
    // calibración multi-pantalla: agrega una pantalla desde 4 puntos de pantalla (client px) TL,TR,BR,BL
    sAdd:function(type,acc,title,pts,extra){var rm=ROOMS[cur];if(!rm.screens)rm.screens=[];var sc={corners:pts.map(function(p){return dirToLonLat(screenToDir(p[0],p[1]));}),type:type,acc:acc,title:title};if(extra)for(var k in extra)sc[k]=extra[k];rm.screens.push(sc);buildWall(rm);return rm.screens.length;},
    sAddBatch:function(arr){var rm=ROOMS[cur];if(!rm.screens)rm.screens=[];arr.forEach(function(a){var sc={corners:a.pts.map(function(p){return dirToLonLat(screenToDir(p[0],p[1]));}),type:a.type,acc:a.acc,title:a.title||''};if(a.sm)sc.sm=1;if(a.extra)for(var k in a.extra)sc[k]=a.extra[k];rm.screens.push(sc);});buildWall(rm);return rm.screens.length;},
    sClear:function(){var rm=ROOMS[cur];rm.screens=[];buildWall(rm);return 0;},
    sDel:function(i){var rm=ROOMS[cur];if(rm.screens)rm.screens.splice(i,1);buildWall(rm);return rm.screens?rm.screens.length:0;},
    sDump:function(){var rm=ROOMS[cur];return rm.screens?JSON.stringify(rm.screens):'sin screens';},
    sHide:function(b){screens.forEach(function(s){s.mesh.visible=!b;});}};

  var yaw=0, pitch=0, tyaw=0, tpitch=0, dragging=false, px=0, py=0;
  addEventListener('keydown',function(e){ var k=e.key; if(k!=='ArrowLeft'&&k!=='ArrowRight'&&k!=='ArrowUp'&&k!=='ArrowDown') return; var t=e.target, tg=t&&t.tagName; if(tg==='INPUT'||tg==='TEXTAREA'||tg==='SELECT') return; if(document.body.classList.contains('magopen')||document.querySelector('.panel.open,.dirmodal.open,.clubcard.on,.ply.open,.chakra.open,.bienv:not([hidden])')) return; e.preventDefault(); if(k==='ArrowLeft') tyaw+=0.2; else if(k==='ArrowRight') tyaw-=0.2; else if(k==='ArrowUp') tpitch=Math.min(1.1,tpitch+0.1); else tpitch=Math.max(-1.1,tpitch-0.1); }); try{ tyaw=yaw=entryYawFor(ROOMS[0]); if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&!/[?&]capa=/.test(location.search)) yaw=tyaw+1.62; }catch(e){}
  cv.addEventListener('pointerdown',function(e){dragging=true;px=e.clientX;py=e.clientY;cv.classList.add('drag');});
  addEventListener('pointermove',function(e){ if(!dragging)return; window.__czTocado=true; var dk=ROOMS[cur].flat?camera.fov/70:1; tyaw+=(e.clientX-px)*0.0022*dk; tpitch+=(e.clientY-py)*0.0022*dk; px=e.clientX;py=e.clientY; tpitch=Math.max(-1.0,Math.min(1.0,tpitch)); hideHint();});
  addEventListener('pointerup',function(){dragging=false;cv.classList.remove('drag');});
  addEventListener('wheel',function(e){camera.fov=capFov(Math.max(38,Math.min(Math.max(86,fovBase()),camera.fov+e.deltaY*0.03)));camera.updateProjectionMatrix();},{passive:true});
  var hint=document.getElementById('hint'), hintHid=false;
  function hideHint(){if(!hintHid){hintHid=true;hint.style.opacity='0';}}
  setTimeout(hideHint,6500);
  function fovBase(){ var a=innerWidth/innerHeight; return a<1?Math.min(100,2*Math.atan(Math.tan(29*Math.PI/180)/a)*180/Math.PI):72; }
  function capFov(f){var asp=innerWidth/innerHeight,mx=2*Math.atan(Math.tan(48*Math.PI/180)/asp)*180/Math.PI; var R=ROOMS[cur]; if(R&&R.flat){var F=R.flat,d=Math.PI/180,v=(F.latT-F.latB)-0.4,hm=(F.lonB-F.lonA)-0.6; mx=Math.min(v,2*Math.atan(Math.tan(hm/2*d)/asp)/d);} return Math.min(f,mx);}
  function fit(){renderer.setSize(innerWidth,innerHeight,false);mixPass.uniforms.texel.value.set(1/(innerWidth*__pr),1/(innerHeight*__pr));bloomComposer.setSize(innerWidth,innerHeight);finalComposer.setSize(innerWidth,innerHeight);bloomPass.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.fov=capFov(ROOMS[cur]&&ROOMS[cur].flat?camera.fov:fovBase());camera.updateProjectionMatrix();}
  addEventListener('resize',fit); fit();

  // ===== giroscopio móvil (relativo: tu vista actual es el ancla) =====
  var gyro={on:false,have:false,a0:0,b0:0,g0:0,yaw0:0,pitch0:0};
  var gyroBtn=document.getElementById('gyroBtn');
  function onOrient(ev){
    if(!gyro.on||ev.alpha==null)return;
    var a=ev.alpha,b=ev.beta,g=ev.gamma;
    var or=(screen.orientation&&screen.orientation.angle)||window.orientation||0;
    if(!gyro.have){gyro.a0=a;gyro.b0=b;gyro.g0=g;gyro.yaw0=tyaw;gyro.pitch0=tpitch;gyro.have=true;return;}
    var da=a-gyro.a0; if(da>180)da-=360; if(da<-180)da+=360;
    tyaw=gyro.yaw0 - da*Math.PI/180;
    var vb=(or===90||or===-90||or===270)?(g-gyro.g0):(b-gyro.b0);
    tpitch=gyro.pitch0 - vb*Math.PI/180;
    tpitch=Math.max(-1.0,Math.min(1.0,tpitch));
    hideHint();
  }
  function enableGyro(){
    function start(){gyro.on=true;gyro.have=false;gyroBtn.classList.add('active');addEventListener('deviceorientation',onOrient,true);}
    if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){
      DeviceOrientationEvent.requestPermission().then(function(r){if(r==='granted')start();}).catch(function(){});
    } else start();
  }
  function disableGyro(){gyro.on=false;gyroBtn.classList.remove('active');removeEventListener('deviceorientation',onOrient,true);}
  if(('DeviceOrientationEvent' in window)&&(('ontouchstart' in window)||navigator.maxTouchPoints>0)&&matchMedia('(pointer:coarse)').matches){
    gyroBtn.hidden=false;
    gyroBtn.onclick=function(){ if(gyro.on)disableGyro(); else enableGyro(); };
  }

  var t0=performance.now(), FOV0=40, FOV1=72, ENTER=1800, proj=new THREE.Vector3(), fwd=new THREE.Vector3(), lastDash=0;
  function loop(){
    requestAnimationFrame(loop); if(document.body.classList.contains('plyopen')) return;
    var now=performance.now(), e=now-t0;
    if(e<ENTER){var k=e/ENTER;k=1-Math.pow(1-k,3);camera.fov=ROOMS[cur].flat?capFov(99)*(0.84+0.16*k):capFov(FOV0+(fovBase()-FOV0)*k);camera.updateProjectionMatrix();}
    var __v=innerWidth<innerHeight&&!ROOMS[cur].flat&&!window.__czTocado; var drift=noDrift?0:(__v?Math.sin((now-t0)/5200)*(ROOMS[cur].pan||0.2):Math.sin(now/4200)*0.05);
    yaw+=((tyaw+drift)-yaw)*0.08; pitch+=(tpitch-pitch)*0.08;
    var RF=ROOMS[cur]; if(RF.flat||RF.lim){ var FF=RF.flat||RF.lim,dd=Math.PI/180,hv=camera.fov/2*dd,th=Math.tan(hv)*camera.aspect,tv=Math.tan(hv),ap=Math.abs(pitch),den=Math.cos(ap)-tv*Math.sin(ap),hh=den>0.05?Math.atan2(th,den):1.5;
      var pmx=FF.latT*dd-hv, pmn=FF.latB*dd+hv; if(pmx<pmn){pmx=pmn=(pmx+pmn)/2;} tpitch=Math.max(pmn,Math.min(pmx,tpitch)); pitch=Math.max(pmn,Math.min(pmx,pitch));
      if(!FF.giro){ var ymn=-(FF.lonB*dd-hh), ymx=-(FF.lonA*dd+hh); if(ymn>ymx){ymn=ymx=(ymn+ymx)/2;} tyaw=Math.max(ymn,Math.min(ymx,tyaw)); yaw=Math.max(ymn,Math.min(ymx,yaw)); } }
    var cp=Math.cos(pitch);
    fwd.set(Math.sin(yaw)*cp, Math.sin(pitch), Math.cos(yaw)*cp);
    camera.lookAt(fwd.x,fwd.y,fwd.z);
    var spots=ROOMS[cur].spots; for(var i=0;i<spots.length;i++){var s=spots[i];
      proj.copy(s.pos).project(camera);
      var vis=proj.z<1 && proj.x>-1.08 && proj.x<1.08 && proj.y>-1.08 && proj.y<1.08 && s.dir.dot(fwd)>0.12;
      if(vis){s.el.style.opacity='1';s.el.style.pointerEvents='auto';if(s.el.tabIndex!==0)s.el.tabIndex=0;
        s.el.style.left=((proj.x*0.5+0.5)*innerWidth)+'px';
        s.el.style.top=((-proj.y*0.5+0.5)*innerHeight)+'px';
      } else {s.el.style.opacity='0';s.el.style.pointerEvents='none';if(s.el.tabIndex!==-1)s.el.tabIndex=-1;}
    }
    var chs=edgeH.__s; if(chs){ var cvis=chs.el.style.opacity==='1', sn=chs.el.classList.contains('seen');
      if(!cvis&&!sn&&!moving&&!panel.classList.contains('open')&&e>2200){ var v3=chs.dir.clone().transformDirection(camera.matrixWorldInverse); edgeH.classList.add('on'); edgeH.classList.toggle('r',v3.x>0); edgeH.classList.toggle('l',!(v3.x>0)); }
      else edgeH.classList.remove('on'); }
    for(var wi=0;wi<screens.length;wi++){var sc=screens[wi]; if(sc.mesh.material.uniforms&&sc.mesh.material.uniforms.pano&&sc.mesh.material.uniforms.pano.value!==sphere.material.map)sc.mesh.material.uniforms.pano.value=sphere.material.map; camera.getWorldDirection(__fw); if(sc.vid)continue; if(sc.cv){ if(sc.sprite)spriteMove(sc,now); if(sc.cdir&&sc.cdir.dot(__fw)<0.05)continue; if(now-sc.last>sc.iv){sc.last=now; drawUI(sc,now); sc.tex.needsUpdate=true;} continue; } if(sc.cdir&&sc.cdir.dot(__fw)<0.2)continue; if(now-sc.last>sc.iv){sc.last=now; drawPanel(sc, now/1000); sc.tex.needsUpdate=true;}}
    updateFx(now); updateHolo(now);
    renderComposited();
  }
  loop();
})();