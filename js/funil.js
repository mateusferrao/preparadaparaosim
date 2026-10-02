/* Preparada para o Sim · pós-compra (upsell → downsell → obrigado)
   - Mantém os parâmetros que a Cakto envia na URL (pedido, e-mail, callback) ao passar de uma página para a outra.
   - Botão "Sim" usa o link do config.js. Se a Cakto fornecer um widget de 1 clique, cole-o dentro de [data-cakto-widget]:
     quando o widget existir, o botão próprio some sozinho.
*/
(function(){
  const C = window.PPS_CONFIG || {};
  const passa = location.search; // repassa tudo o que veio da Cakto

  function withQS(href){
    if(!passa) return href;
    try{ const u = new URL(href, location.href); new URLSearchParams(passa).forEach((v,k)=>{ if(!u.searchParams.has(k)) u.searchParams.set(k,v); }); return u.toString(); }
    catch(e){ return href; }
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    // preços
    document.querySelectorAll('[data-preco-kit]').forEach(el=>el.textContent = C.PRECO_KIT || '37');
    document.querySelectorAll('[data-preco-kit5]').forEach(el=>el.textContent = C.PRECO_KIT5 || '19,90');

    // botões "Sim"
    document.querySelectorAll('[data-sim]').forEach(a=>{
      const link = C[a.dataset.sim]; // KIT_LINK ou KIT5_LINK
      const box = a.closest('[data-oferta]');
      const widget = box && box.querySelector('[data-cakto-widget]');
      const temWidget = widget && widget.children.length > 0;
      if(temWidget || !link){ a.classList.add('fn-hide'); if(!link && !temWidget && /[?&]debug=1/.test(location.search)) a.insertAdjacentHTML('afterend','<p class="fn-note">⚠️ Preencha '+a.dataset.sim+' no js/config.js</p>'); return; }
      a.href = withQS(link);
      a.addEventListener('click', ()=>{ try{ if(window.PPS) PPS.track('InitiateCheckout', {content_name: a.dataset.sim}); }catch(e){} });
    });

    // links internos (recusa, próximos passos) levam os parâmetros junto
    document.querySelectorAll('[data-next]').forEach(a=>{ a.href = withQS(a.getAttribute('href')); });

    // área de membros
    document.querySelectorAll('[data-area]').forEach(a=>{
      if(C.AREA_MEMBROS){ a.href = C.AREA_MEMBROS; } else { a.removeAttribute('href'); a.classList.add('fn-hide'); }
    });
    document.querySelectorAll('[data-sem-area]').forEach(el=>{ if(!C.AREA_MEMBROS) el.classList.remove('fn-hide'); });

    // Instagram
    document.querySelectorAll('[data-insta]').forEach(el=>{
      if(!C.INSTAGRAM){ el.classList.add('fn-hide'); return; } el.classList.remove('fn-hide');
      const a = el.querySelector('a'); if(a){ a.href = 'https://instagram.com/'+C.INSTAGRAM; a.textContent = '@'+C.INSTAGRAM; }
    });

    // card para amiga
    const TESTE = 'https://preparadaparaosim.com.br/teste?utm_source=card_amiga&utm_medium=indicacao';
    const MSG = 'Encontrei um teste de 2 minutos que mostra qual padrão está travando a vida amorosa. Lembrei de você: ' + TESTE;
    document.querySelectorAll('[data-whats]').forEach(a=>{ a.href = 'https://wa.me/?text=' + encodeURIComponent(MSG); });
    document.querySelectorAll('[data-copiar]').forEach(b=>b.addEventListener('click', ()=>{
      const ok = ()=>{ const t=b.textContent; b.textContent='Link copiado ✓'; setTimeout(()=>b.textContent=t,2200); };
      try{ navigator.clipboard.writeText(TESTE).then(ok, ()=>prompt('Copie o link:', TESTE)); }catch(e){ prompt('Copie o link:', TESTE); }
    }));

    // barra fixa aparece depois do primeiro botão
    const st=document.querySelector('.sticky'), trig=document.querySelector('[data-sticky-from]');
    if(st && trig){ const io=new IntersectionObserver(es=>es.forEach(en=>{ if(en.boundingClientRect.top<0) st.classList.add('on'); }),{threshold:0}); io.observe(trig); }
  });
})();
