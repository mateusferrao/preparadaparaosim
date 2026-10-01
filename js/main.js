/* Preparada para o Sim · funções compartilhadas (LP + quiz) */
(function(){
  const C = window.PPS_CONFIG;
  const qs = new URLSearchParams(location.search);
  // guarda UTMs da primeira visita (sessão)
  const UTM_KEYS = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  try{ UTM_KEYS.forEach(k=>{ if(qs.get(k)) sessionStorage.setItem(k, qs.get(k)); }); }catch(e){}
  const utms = () => { const o={}; try{ UTM_KEYS.forEach(k=>{ const v=qs.get(k)||sessionStorage.getItem(k); if(v) o[k]=v; }); }catch(e){} return o; };

  const DEMO = !!C.DEMO_ESCASSEZ;
  const demoFim = DEMO ? (()=>{ const [h,m,s]=(C.DEMO_CONTADOR||'02:54:27').split(':').map(Number); return new Date(Date.now()+((h*60+m)*60+s)*1000); })() : null;
  const loteFim = DEMO ? null : (C.LOTE_FIM ? new Date(C.LOTE_FIM) : null);
  const timerFim = DEMO ? demoFim : loteFim;
  const loteAtivo = () => !loteFim || Date.now() < loteFim.getTime();

  function checkoutURL(extra){
    let base = (loteAtivo() || !C.CHECKOUT_OFICIAL) ? C.CHECKOUT_LOTE : C.CHECKOUT_OFICIAL;
    const u = new URL(base); const p = Object.assign({}, utms(), extra||{});
    Object.entries(p).forEach(([k,v])=>u.searchParams.set(k,v));
    return u.toString();
  }
  function track(ev, data){
    try{ if(window.fbq) fbq('track', ev, data||{}); }catch(e){}
    try{ if(window.ttq) ttq.track(ev==='Lead'?'SubmitForm':ev==='InitiateCheckout'?'InitiateCheckout':'ViewContent', data||{}); }catch(e){}
  }
  function goCheckout(origem){
    track('InitiateCheckout', {value: parseFloat(C.PRECO_LOTE.replace(',','.')), currency:'BRL'});
    location.href = checkoutURL(origem ? {utm_content: (utms().utm_content||origem)} : null);
  }
  // pixels (só se configurados)
  if(C.META_PIXEL_ID){
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', C.META_PIXEL_ID); fbq('track','PageView');
  }
  if(C.TIKTOK_PIXEL_ID){
    !function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=i;ttq._t=ttq._t||{};ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};var o=d.createElement("script");o.type="text/javascript";o.async=!0;o.src=i+"?sdkid="+e+"&lib="+t;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)}}(window,document,'ttq');
    ttq.load(C.TIKTOK_PIXEL_ID); ttq.page();
  }
  // preço e lote
  function paintPrices(root){
    (root||document).querySelectorAll('[data-preco]').forEach(el=>{
      el.textContent = loteAtivo() ? C.PRECO_LOTE : C.PRECO_OFICIAL;
    });
    (root||document).querySelectorAll('[data-lote]').forEach(el=>{ el.style.display = loteAtivo() ? '' : 'none'; });
    (root||document).querySelectorAll('[data-pos-lote]').forEach(el=>{ el.style.display = loteAtivo() ? 'none' : ''; });
    const vg = vagasTxt();
    (root||document).querySelectorAll('[data-urg-vagas]').forEach(el=>{ el.textContent = vg; });
    if(vg || timerFim) document.querySelectorAll('.urg').forEach(el=>el.classList.add('on'));
    if(DEMO){
      (root||document).querySelectorAll('.vagas').forEach(el=>{ el.classList.add('on'); el.textContent = 'Restam '+C.DEMO_VAGAS+' de '+C.VAGAS_TOTAL+' vagas'; });
    } else if(C.VAGAS_RESTANTES!=null && loteAtivo()){
      (root||document).querySelectorAll('.vagas').forEach(el=>{ el.classList.add('on'); el.textContent = 'Restam '+C.VAGAS_RESTANTES+' vagas no lote fundador'; });
    }
  }
  function vagasTxt(){
    const n = DEMO ? C.DEMO_VAGAS : (loteAtivo() ? C.VAGAS_RESTANTES : null);
    return n==null ? '' : 'restam '+n+' de '+C.VAGAS_TOTAL+' vagas';
  }
  function tick(){
    if(!timerFim || (!DEMO && !loteAtivo())) return;
    let s = Math.max(0, Math.floor((timerFim - Date.now())/1000));
    const d=Math.floor(s/86400); s%=86400; const h=Math.floor(s/3600); s%=3600; const m=Math.floor(s/60); s%=60;
    const f=n=>String(n).padStart(2,'0');
    const curto = (d?d+'d ':'')+f(h)+':'+f(m)+':'+f(s);
    document.querySelectorAll('[data-urg-tempo]').forEach(t=>{ t.textContent = curto; });
    document.querySelectorAll('.timer').forEach(t=>{
      t.classList.add('on');
      t.innerHTML = (d?`<div><b>${d}</b><span>dias</span></div>`:'')+`<div><b>${f(h)}</b><span>horas</span></div><div><b>${f(m)}</b><span>min</span></div><div><b>${f(s)}</b><span>seg</span></div>`;
    });
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    paintPrices(); tick(); setInterval(tick,1000);
    document.querySelectorAll('[data-checkout]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault(); goCheckout(a.dataset.checkout);}));
    const st=document.querySelector('.sticky'), trig=document.querySelector('#metodo');
    if(st && trig){ const io=new IntersectionObserver(es=>es.forEach(en=>{ if(en.isIntersecting||en.boundingClientRect.top<0) st.classList.add('on'); }),{threshold:0}); io.observe(trig); }
  });
  window.PPS = {checkoutURL, goCheckout, track, utms, paintPrices, loteAtivo, tick};
})();
