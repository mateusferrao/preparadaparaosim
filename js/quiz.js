/* Preparada para o Sim · quiz "Você está pronta para o Sim?" */
(function(){
const C = window.PPS_CONFIG;
const BASE = (document.currentScript ? document.currentScript.src : location.href).replace(/js\/quiz\.js(\?.*)?$/, '');
const Q = [
 {t:"Quando você pensa na sua vida amorosa hoje, qual frase mais parece com você?", o:{A:"\"Estou esperando o tempo de Deus. Se for pra ser, vai acontecer.\"",B:"\"Se eu não tomar a iniciativa, nada acontece.\"",C:"\"Ainda estou me recuperando do que vivi.\"",D:"\"Parece que eu sempre termino no mesmo tipo de história.\"",E:"\"Vivo me perguntando se cada rapaz que aparece é ele.\"",F:"\"Nunca namorei e às vezes acho que tem algo errado comigo.\""}},
 {t:"Quando um homem demonstra interesse por você, o que costuma acontecer?", o:{A:"Quase não acontece. Não estou em lugares onde conheço gente nova.",B:"Eu me empolgo e acabo investindo mais do que ele.",C:"Eu me fecho ou fico desconfiada.",D:"No começo fico feliz, mas logo percebo que é \"mais do mesmo\".",E:"Já começo a imaginar o casamento e a procurar sinais de que é de Deus.",F:"Fico sem saber como agir, porque nunca vivi isso."}},
 {t:"Seus últimos relacionamentos (ou quase-relacionamentos)...", o:{A:"Faz muito tempo que não tenho nenhum.",B:"Eu era quem mais corria atrás.",C:"Um deles me marcou e ainda pesa.",D:"Se parecem muito entre si.",E:"Muitos existiram mais na minha cabeça do que na vida real.",F:"Nunca tive um namoro de verdade."}},
 {t:"Fora do trabalho, sua rotina é mais parecida com...", o:{A:"Casa, trabalho, igreja, casa.",B:"Muitas conversas e tentativas que não vão para frente.",C:"Mais recolhida desde a última decepção.",D:"Movimentada, mas eu sempre me interesso pelo mesmo tipo de pessoa.",E:"Ativa na igreja, mas sempre reparando em quem pode ser \"o escolhido\".",F:"Cheia de atividades, mas me sinto atrás das minhas amigas nesse assunto."}},
 {t:"Quando alguém pergunta \"e o namorado?\", você pensa...", o:{A:"\"Deus sabe a hora.\"",B:"\"Estou tentando, mas ninguém corresponde.\"",C:"\"Não estou pronta para isso ainda.\"",D:"\"Já tive alguns. Nenhum era o certo.\"",E:"\"Acho que Deus já está me mostrando alguém.\"",F:"Fico sem graça e mudo de assunto."}},
 {t:"O que mais te dá medo?", o:{A:"Os anos passarem e nada mudar.",B:"Ficar sozinha se eu parar de tentar.",C:"Me machucar de novo.",D:"Casar com alguém igual aos que já tive.",E:"Deixar passar o homem que Deus preparou por não perceber os sinais.",F:"Nunca ser escolhida."}},
 {t:"Se você pudesse mudar uma coisa agora, seria...", o:{A:"Saber o que fazer além de orar e esperar.",B:"Parar de investir sozinha.",C:"Fechar de vez o capítulo que ficou para trás.",D:"Entender por que eu escolho sempre errado.",E:"Parar de viver ansiosa, analisando tudo.",F:"Me sentir segura de quem eu sou, com ou sem namorado."}},
 {t:"Você já leu livros ou fez cursos sobre relacionamento cristão?", o:{v:"Sim, vários",u:"Um ou dois",n:"Nunca"}, key:'livros'},
 {t:"Qual é a sua idade?", o:{a:"18–24",b:"25–29",c:"30–34",d:"35–39",e:"40–45",f:"46+"}, key:'idade'}
];
const P = {
 A:{n:"A que espera parada",
  d:"Você tem fé, e isso é lindo. Ora pelo seu futuro marido e confia no tempo de Deus. Mas, sem perceber, a espera virou imobilidade: a mesma rotina, os mesmos lugares, as mesmas pessoas. Você espera que ele apareça, mas não está em nenhum lugar onde ele poderia te encontrar.",
  c:"Cada ano na mesma rotina é um ano com as mesmas chances. A espera parada não aumenta a fé. Só aumenta a ansiedade.",
  h:"Carol, 26: casa, trabalho, culto, casa. Orava por um marido e esperava, sempre no mesmo lugar.",
  r:["\"Às vezes 'estou ocupada' é só 'estou com medo' de roupa nova.\"","D., 37, BA"], r35:["\"Não existe prazo vencido para quem está nas mãos de Deus.\"","F., 44, RJ"],
  m:"Confundir confiar com ficar parada. Rute era uma mulher de fé e também se colocou no caminho certo, com sabedoria e com conselho.",
  s:["O Mapa da Semana","Escreva 3 lugares onde você poderia servir, conviver ou aprender nos próximos 7 dias (um ministério, um grupo, um curso, um voluntariado). Escolha um e marque na agenda. Não é para \"caçar\" ninguém. É para voltar a viver."],
  b:"Na semana 3 você aprende a se tornar visível sem correr atrás: onde estar, como se posicionar e o que fazer quando alguém se aproximar.",
  f:["\"Se for de Deus, ele aparece. Preciso mesmo fazer alguma coisa?\"","Confiar em Deus é essencial. Mas confiar nunca foi o mesmo que ficar escondida. Rute esperou com fé, e estava no campo, trabalhando. A semana 3 mostra como se tornar visível sem correr atrás."]},
 B:{n:"A que corre atrás",
  d:"Você não fica esperando: puxa a conversa, manda a primeira mensagem, sugere o encontro. Isso mostra coragem. Mas você está cansada, porque quase sempre é você quem sustenta a relação sozinha.",
  c:"Quando você investe por dois, nunca descobre quem realmente se interessaria por você. E cada conversa que não anda confirma a mentira de que \"ninguém me escolhe\".",
  h:"Bia, 33, sempre mandava a primeira mensagem. E sempre terminava investindo sozinha.",
  r:["\"Encerrei uma conversa indefinida de seis meses. Doeu, mas dormi em paz. Clareza não espanta homem certo, espanta o errado.\"","A., 30, GO"],
  m:"Confundir estar disponível com estar sempre à disposição.",
  s:["O Raio-X das Conversas","Pense nas suas últimas 3 conversas com alguém de quem você gostou. Marque quem puxou o assunto na maioria das vezes. Se foi quase sempre você, nesta semana não puxe a conversa primeiro e observe quem te procura."],
  b:"Na semana 2 da jornada você define seus inegociáveis. Na semana 3, aprende a abrir espaço sem investir sozinha.",
  f:["\"Se eu não tomar a iniciativa, ninguém vai aparecer?\"","Estar disponível é bom. Estar sempre à disposição cansa, e costuma afastar quem vale a pena. A jornada ensina a abrir a porta e deixar ele dar o próximo passo."]},
 C:{n:"A que carrega feridas",
  d:"Alguém te marcou. Você segue a vida, serve, sorri, mas quando alguém se aproxima, uma voz por dentro diz: \"vai acontecer de novo\". Não é falta de vontade. É um capítulo que ainda não foi fechado.",
  c:"Enquanto o capítulo está aberto, você compara cada pessoa nova com quem te feriu e se fecha antes de conhecer.",
  h:"Júlia, 31, dizia que estava bem. Mas cada aproximação trazia a mesma voz: \"vai acontecer de novo\".",
  r:["\"Achei que com 34 não era mais para mim. Aprendi que arrependimento não é ficar se punindo.\"","P., 34, SP"], r35:["\"Na minha idade, achei que nada ia mudar. Um mês depois, consegui ficar feliz pela noiva num casamento sem voltar para casa chorando.\"","R., 41, PR"],
  m:"Achar que precisa esperar a dor passar sozinha. Encerrar um capítulo é uma decisão, não um sentimento.",
  s:["O que eu levo, o que eu deixo","Numa folha, escreva duas colunas sobre o último relacionamento. De um lado, o que você aprendeu e quer levar. Do outro, o que você decide deixar para trás. Termine lendo o Salmo 147:3: \"Só ele cura os de coração quebrantado e enfaixa as suas feridas\" (NVI)."],
  care:"Se você viveu algo grave (abuso, violência), procure apoio pastoral ou profissional. Você não precisa passar por isso sozinha. Em situação de violência contra a mulher: 180.",
  b:"Na semana 1 da jornada, o Coração, você fecha esse capítulo com calma e com a Palavra, e se prepara para abrir o próximo.",
  f:["\"Ainda não superei. Estou pronta para isso?\"","A jornada começa justamente por aí. A semana 1 trata a culpa e a mágoa antes de qualquer outra coisa. Você não precisa estar pronta para começar; começa para ficar pronta."]},
 D:{n:"A que repete o padrão",
  d:"Você não está sozinha por falta de oportunidade. Você se relaciona, conhece pessoas, se interessa. Mas os nomes mudam e a história é sempre parecida: o mesmo tipo de homem, o mesmo final.",
  c:"Enquanto o padrão estiver invisível, ele vai decidir por você. Inclusive na escolha de quem pode virar seu marido.",
  h:"Ana, 29, sempre atraía o mesmo tipo de homem. Não faltava fé nem leitura. Faltava enxergar o padrão.",
  r:["\"Já tinha lido uns três livros, mas era tudo teoria. O que mudou foi enxergar o padrão que eu repetia.\"","J., 28, MG"],
  m:"O padrão invisível que faz você repetir o mesmo tipo de homem. Você não escolhe as pessoas: repete uma história.",
  s:["O Mapa do Padrão","Escreva os 3 últimos homens por quem você se interessou. Para cada um, responda: como começou? O que te atraiu? Como terminou? Circule o que se repete. Isso que você circulou é o seu padrão."],
  b:"Esse é o passo 1: enxergar. Na jornada você aprende a entender de onde ele vem (semana 1), criar o seu filtro (semana 2) e reconhecer o homem certo quando ele aparecer (semana 3).",
  f:["\"Já li os livros. O problema sou eu?\"","Não. Os livros te deram informação. O que faltava era a prática: escrever o que se repete e descobrir de onde vem. É o Dia 4 e o Dia 5."]},
 E:{n:"A ansiosa por sinais",
  d:"Você sonha com o casamento, e isso é bom. Mas o desejo começou a comandar: cada rapaz solteiro vira um \"será que é ele?\", cada coincidência vira um sinal. Isso te deixa ansiosa e, sem perceber, estranha perto das pessoas.",
  c:"Quando tudo é sinal, nada é discernimento. E a ansiedade afasta justamente as conversas naturais em que uma amizade poderia virar algo mais.",
  h:"Lívia, 27, via um sinal em cada coincidência e um \"será que é ele?\" em cada rapaz do grupo de jovens.",
  r:["\"Eu pedia sinal para tudo. Aprendi a orar pedindo direção, não confirmação do que eu já queria.\"","L., 26, RS"],
  m:"Pedir a Deus a confirmação do que você já quer, em vez de direção.",
  s:["Desejo, sinal ou sabedoria?","Pense em quem está ocupando seus pensamentos. Em uma coluna, escreva o que você sabe de fato sobre ele (caráter, fé vivida, atitudes). Na outra, o que você imaginou ou interpretou como sinal. Termine orando com Tiago 1:5: \"Se algum de vocês tem falta de sabedoria, peça-a a Deus, que a todos dá generosamente sem reprovar ninguém, e lhe será concedida\" (NVI)."],
  b:"Na semana 2 da jornada, a Clareza, você aprende a separar desejo, sinal e sabedoria, e a sonhar com o casamento sem deixar a ansiedade no comando.",
  f:["\"Vão me mandar parar de sonhar com casamento?\"","Não. Desejar casar é bom, e o próprio Deus disse que não era bom o homem estar só. A jornada ensina a separar desejo, sinal e sabedoria, para o desejo não ficar no comando."]},
 F:{n:"A que nunca namorou",
  d:"Você nunca namorou, e em algum momento começou a acreditar que isso diz algo sobre o seu valor. As comparações com as amigas e o \"e o namorado?\" viraram uma pergunta silenciosa: \"tem algo errado comigo?\".",
  c:"Enquanto o seu valor estiver preso ao status de relacionamento, qualquer atenção vai parecer resposta. E aí cresce o risco de aceitar a pessoa errada só para \"desencalhar\".",
  h:"Bruna, 25, nunca namorou e evitava o assunto nos encontros de jovens, com medo de ser \"a única\".",
  r:["\"Eu achava que tinha algo errado comigo por nunca ter namorado. Hoje sei quem eu sou antes de saber quem eu quero.\"","C., 25, PE"],
  m:"Esperar que quem vai estar ao seu lado responda quem você é.",
  s:["Quem eu sou antes de quem eu quero","Escreva 5 frases começando com \"Eu sou...\", a partir do que a Palavra diz sobre você (comece por Efésios 2:10: \"Porque fomos feitos por Deus, criados em Cristo Jesus, para boas obras, as quais Deus preparou previamente para que andássemos nelas\", NVI). Só depois escreva 3 qualidades que você quer num marido."],
  b:"Na semana 1 da jornada, o Coração, você firma a sua identidade. Na semana 3, a Abertura, aprende o que fazer quando alguém se aproximar pela primeira vez.",
  f:["\"Tem algo errado comigo por nunca ter namorado?\"","Não tem. A jornada começa pela identidade, antes de qualquer relacionamento. \"Hoje sei quem eu sou antes de saber quem eu quero.\" (C., 25, PE)"]}
};
let i=0, ans=[], el, body, prog;
function scoreOf(){
  const s={A:0,B:0,C:0,D:0,E:0,F:0}; for(let k=0;k<7;k++) if(ans[k]) s[ans[k]]++;
  const max=Math.max(...Object.values(s)); const top=Object.keys(s).filter(k=>s[k]===max);
  return top.length===1 ? top[0] : (top.includes(ans[6]) ? ans[6] : top[0]);
}
function shell(){
  if(el) return;
  el=document.createElement('div'); el.className='qz'; el.setAttribute('role','dialog'); el.setAttribute('aria-modal','true');
  el.innerHTML=`<div class="bar"><div class="row"><span class="label" style="margin:0">Você está pronta para o Sim?</span><button class="x" aria-label="Fechar">×</button></div><div class="prog"><i></i></div></div><div class="body"></div>`;
  document.body.appendChild(el); body=el.querySelector('.body'); prog=el.querySelector('.prog i');
  el.querySelector('.x').onclick=close;
}
function open(){ shell(); el.classList.add('on'); document.body.style.overflow='hidden'; const saved=location.hash.match(/^#resultado-([A-F])$/); if(saved && P[saved[1]]) { result(saved[1]); return; } start(); }
function close(){ if(!el) return; el.classList.remove('on'); document.body.style.overflow=''; if(location.pathname.includes('/teste')) location.href=BASE; }
function setProg(p){ prog.style.width=p+'%'; el.scrollTop=0; }
function start(){
  i=0; ans=[]; setProg(0);
  body.innerHTML=`<div class="label">Teste gratuito · 2 minutos</div><h2>Você está pronta <em>para o Sim?</em></h2>
  <p class="lead">Responda 9 perguntas rápidas e descubra o padrão que está travando sua vida amorosa, e qual é o seu primeiro passo.</p>
  <p class="muted">Leva menos de 2 minutos.</p><button class="btn block" id="go">Começar o teste</button>`;
  body.querySelector('#go').onclick=()=>{ once('QuizStart'); ask(); };
}
// eventos do funil do quiz: cada um só uma vez por visita
const sent={};
function once(nome, data){ if(sent[nome]) return; sent[nome]=1; PPS.trackCustom(nome, Object.assign({content_name:'quiz'}, data||{})); }
function ask(){
  const q=Q[i]; setProg(i/ (Q.length+1) *100);
  if(i===4) once('QuizProgress', {step:5});
  const keys=Object.keys(q.o); const order = q.key ? keys : shuffle(keys);
  body.innerHTML=`<div class="label">Pergunta ${i+1} de ${Q.length}</div><h2>${q.t}</h2>`+
    order.map(k=>`<button class="opt${ans[i]===k?' sel':''}" data-k="${k}">${q.o[k]}</button>`).join('')+
    (i?'<button class="back">← Voltar</button>':'');
  body.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{ ans[i]=b.dataset.k; b.classList.add('sel'); setTimeout(()=>{ i++; i<Q.length?ask():contact(); },160); });
  const bk=body.querySelector('.back'); if(bk) bk.onclick=()=>{ i--; ask(); };
}
function shuffle(a){ a=a.slice(); for(let k=a.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[a[k],a[j]]=[a[j],a[k]];} return a; }
function contact(){
  setProg(92); once('QuizComplete');
  body.innerHTML=`<div class="label">Quase lá</div><h2>Seu resultado <em>está pronto.</em></h2>
  <p>Preencha para liberar seu perfil + o seu primeiro passo gratuito.</p>
  <form id="lf" novalidate>
   <label class="field"><span>Seu nome</span><input name="nome" autocomplete="given-name" required aria-describedby="e-nome"><small class="ferr" id="e-nome" aria-live="polite"></small></label>
   <label class="field"><span>WhatsApp (com DDD)</span><input name="whatsapp" type="tel" inputmode="tel" autocomplete="tel" placeholder="(11) 91234-5678" required aria-describedby="e-whatsapp"><small class="ferr" id="e-whatsapp" aria-live="polite"></small></label>
   <label class="consent"><input type="checkbox" name="consent" required aria-describedby="e-consent"><span>Aceito receber conteúdos e ofertas da Preparada para o Sim por WhatsApp. Posso cancelar quando quiser. <a href="${BASE}privacidade/" target="_blank">Política de privacidade</a></span></label><small class="ferr" id="e-consent" aria-live="polite"></small>
   <p class="err" id="er" aria-live="polite"></p>
   <button class="btn block" type="submit">Ver meu resultado</button></form><button class="back">← Voltar</button>`;
  body.querySelector('.back').onclick=()=>{ i=Q.length-1; ask(); };
  const f=body.querySelector('#lf'), er=body.querySelector('#er');
  // só dígitos, sem 0 inicial e sem o +55 (autopreenchimento do celular costuma incluir)
  const dig=v=>{ let d=v.replace(/\D/g,'').replace(/^0+/,''); if((d.length===12||d.length===13)&&d.startsWith('55')) d=d.slice(2); return d; };
  const EX_W='Exemplo: (11) 91234-5678';
  const checks={
    nome:()=>{ const v=f.nome.value.trim(); return !v ? 'Digite o seu nome.' : v.length<2 ? 'O nome precisa ter pelo menos 2 letras.' : ''; },
    whatsapp:()=>{ const v=f.whatsapp.value.trim(), d=dig(v);
      if(!v) return 'Digite o seu WhatsApp com DDD.';
      if(d.length<10) return `Faltam números: você digitou ${d.length}, e o WhatsApp com DDD tem 10 ou 11. ${EX_W}`;
      if(d.length>11) return `Números a mais: você digitou ${d.length}, e o WhatsApp com DDD tem 10 ou 11. ${EX_W}`;
      return ''; },
    consent:()=> f.consent.checked ? '' : 'Marque esta caixa para ver o seu resultado.'
  };
  const show=n=>{ const m=checks[n](), inp=f[n];
    inp.closest('.field,.consent').classList.toggle('bad',!!m); inp.setAttribute('aria-invalid',m?'true':'false');
    body.querySelector('#e-'+n).textContent=m; return m; };
  const summary=bad=>{ er.textContent = bad.length===1 ? 'Falta corrigir 1 campo, destacado em vermelho.' : `Faltam corrigir ${bad.length} campos, destacados em vermelho.`; er.classList.toggle('on',bad.length>0); };
  let tried=false;
  Object.keys(checks).forEach(n=>{
    // depois da 1ª tentativa, revalida enquanto digita; antes disso, só ao sair de um campo já preenchido
    f[n].addEventListener(n==='consent'?'change':'input',()=>{ if(tried){ show(n); summary(Object.keys(checks).filter(k=>checks[k]())); } });
    if(n!=='consent') f[n].addEventListener('blur',()=>{ if(tried || f[n].value.trim()) show(n); });
  });
  f.onsubmit=e=>{
    e.preventDefault(); tried=true;
    const bad=Object.keys(checks).filter(show);
    summary(bad);
    if(bad.length){ const first=f[bad[0]]; first.closest('.field,.consent').scrollIntoView({behavior:'smooth',block:'center'}); first.focus({preventScroll:true}); return; }
    const nome=f.nome.value.trim(), w=dig(f.whatsapp.value);
    const perfil=scoreOf();
    const payload=Object.assign({data:new Date().toISOString(),nome,whatsapp:w,perfil,perfil_nome:P[perfil].n,respostas:ans.join(','),livros:ans[7]||'',idade:Q[8].o[ans[8]]||'',
      consentimento:'Aceito receber conteúdos e ofertas da Preparada para o Sim por WhatsApp. Posso cancelar quando quiser.',pagina:location.href}, PPS.utms(), PPS.clickIds());
    if(C.LEADS_ENDPOINT){ try{ fetch(C.LEADS_ENDPOINT,{method:'POST',mode:'no-cors',keepalive:true,body:new URLSearchParams(payload)}); }catch(x){} }
    PPS.track('Lead',{content_name:'quiz', content_category:perfil});
    try{ localStorage.setItem('pps_perfil',perfil); localStorage.setItem('pps_nome',nome); localStorage.setItem('pps_idade',ans[8]||''); localStorage.setItem('pps_livros',ans[7]||''); }catch(x){}
    history.replaceState(null,'','#resultado-'+perfil);
    result(perfil, nome);
  };
}
function result(k, nome){
  setProg(100);
  let idade='', livros=''; try{ nome=nome||localStorage.getItem('pps_nome')||''; idade=ans[8]||localStorage.getItem('pps_idade')||''; livros=ans[7]||localStorage.getItem('pps_livros')||''; }catch(x){}
  const p=P[k]; const r=(p.r35 && ['d','e','f'].includes(idade)) ? p.r35 : p.r;
  const livrosTxt = livros==='n' ? 'Você não precisa ler dez livros. Precisa de um caminho claro, 10 minutos por dia.' : (livros ? 'Você já tem a informação. Os livros te deram isso. O que falta é a prática guiada, dia a dia.' : '');
  body.innerHTML=`
  <div class="res-h"><div class="k">Seu resultado${nome?', '+esc(nome.split(' ')[0]):''}</div><h2>${p.n}</h2><p style="margin:0">${p.d}</p></div>
  <div class="box"><div class="k">O custo de continuar assim</div><p style="margin:0">${p.c}</p></div>
  <div class="box"><div class="k">Uma história que talvez seja a sua</div><p>${p.h}</p><p class="reveal" style="font-size:16px"><i>A ${p.h.split(',')[0]} não existe.</i> <b>Mas o padrão que ela viveu, talvez você conheça bem.</b></p><div class="k" style="margin-top:18px">História real</div><p style="font-family:Fraunces;font-style:italic;font-size:19px;margin:0 0 6px">${r[0]}</p><p class="muted" style="margin:0;font-size:14px">${r[1]} · publicada com autorização</p></div>
  <div class="box"><div class="k">O padrão invisível</div><p style="margin:0;font-family:Fraunces;font-size:20px">${p.m}</p></div>
  <div class="box step"><div class="k">Seu primeiro passo · hoje, 5 minutos</div><h3>${p.s[0]}</h3><p style="margin:0">${p.s[1]}</p>${p.care?`<p class="muted" style="margin:12px 0 0;font-size:14px">${p.care}</p>`:''}</div>
  <p><strong>Esse é o passo 1. A jornada Preparada para o Sim tem 21.</strong> ${p.b} ${livrosTxt}</p>
  <p><button class="save" id="sv">Salvar meu resultado</button></p>
  <div class="pricebox">
   <div class="label" style="justify-content:center">Este foi o passo 1. A jornada completa tem 21.</div>
   <p style="text-align:left;font-size:15px;color:#E6D9D0">A jornada de 21 dias para você enxergar o seu padrão, ter clareza do que busca e se abrir com sabedoria, rumo a um namoro com propósito.</p>
   <ul style="text-align:left;font-size:15px;padding-left:20px;color:#E6D9D0;margin:0 0 14px">
    <li><b>21 dias guiados pela Palavra</b>, 10 minutos por dia</li><li><b>Mapa dos 21 Dias</b> (planner)</li><li><b>Meus Inegociáveis</b></li><li><b>Mapa de Ambientes</b></li><li><b>Verdades para Dias Difíceis</b> (21 cards)</li><li><b>e mais 2 bônus</b>: 5 Respostas para "E o namorado?" + Guia de Leitura Prática</li><li data-lote><b>Só no lote fundador:</b> Carta de Encerramento</li></ul>
   <div class="old" data-lote>R$ ${C.PRECO_OFICIAL}</div><div class="now"><small>R$</small> <span data-preco>${C.PRECO_LOTE}</span></div>
   <div class="per" data-lote>no lote fundador · menos de R$ 1,80 por dia de jornada</div>
   <div class="timer"></div><div class="vagas"></div>
   <a href="#" class="btn block" data-checkout="quiz_${k}">Quero continuar a minha jornada</a>
   <p class="small" style="margin:10px 0 0">Pix ou cartão · Acesso imediato · Garantia Clareza em 21 Dias</p>
  </div>
  <img src="${BASE}assets/img/mock-dia1.webp" alt="Página do Dia 1 da jornada no celular" style="width:220px;margin:0 auto 10px" loading="lazy">
  <p class="muted" style="text-align:center;font-size:14px">Como é cada dia: leitura curta · reflexão de 2 a 3 min · exercício de 5 min · oração · marque no seu Mapa</p>
  <div class="box"><div class="k">Risco zero, em dobro</div><p style="margin:0"><b>Garantia Sem Perguntas:</b> 7 dias para pedir o dinheiro de volta. <b>Garantia Clareza em 21 Dias:</b> se você fizer os 21 dias e não tiver clareza do que busca, do que não aceita mais e um plano para quando ele se aproximar, escreva para a gente em até 30 dias da compra e devolvemos 100%.</p><p class="muted" style="margin:10px 0 0;font-size:14px">Não é promessa de namorado em 21 dias. É o preparo e o caminho para quando ele aparecer.</p></div>
  <details open><summary>${p.f[0]}</summary><p>${p.f[1]}</p></details>
  <details><summary>Um produto de R$ <span data-preco>${C.PRECO_LOTE}</span> pode me ajudar com algo tão importante?</summary><p>Ele não promete resolver a sua vida amorosa. Promete o próximo passo, com método. E, se não te ajudar, a garantia cobre.</p></details>
  <details><summary>Não tenho tempo.</summary><p>São 10 minutos por dia, no horário que você escolher.</p></details>
  <div style="text-align:center;margin-top:28px"><h3>Você já deu o primeiro passo hoje. <em style="color:var(--rose-d)">Não pare no passo 1.</em></h3>
   <a href="#" class="btn block" data-checkout="quiz_${k}">Quero continuar a minha jornada</a>
   <p style="margin-top:14px"><a href="${BASE}" class="muted" style="font-size:15px">Quer ver tudo o que está incluso, em detalhes? Ver a página completa →</a></p></div>`;
  PPS.paintPrices(body); PPS.tick();
  // a oferta aparece aqui: ViewContent do produto, com valor, marcando o perfil
  if(!sent.result){ sent.result=1; PPS.track('ViewContent', {content_category:'quiz_'+k}); }
  body.querySelectorAll('[data-checkout]').forEach(a=>a.onclick=e=>{e.preventDefault(); PPS.goCheckout(a.dataset.checkout);});
  body.querySelector('#sv').onclick=async()=>{
    const url=BASE+'teste/#resultado-'+k;
    try{ if(navigator.share){ await navigator.share({title:'Meu resultado: '+p.n,text:'Meu perfil no teste Preparada para o Sim: '+p.n,url}); return; } }catch(x){}
    try{ await navigator.clipboard.writeText(url); alert('Link do seu resultado copiado. Guarde para ver depois.'); }catch(x){ prompt('Copie o link do seu resultado:', url); }
  };
}
function esc(s){ return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
window.PPSQuiz={open};
document.addEventListener('DOMContentLoaded',()=>{
  if(document.body.dataset.autoquiz==='1'){ open(); return; }
  // na landing page, os botões do quiz levam ao endereço próprio dele (teste/), levando junto as UTMs
  if(location.search) document.querySelectorAll('[data-quiz]').forEach(a=>{ a.search=location.search; });
});
})();
