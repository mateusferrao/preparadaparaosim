/* ===================================================================
   PREPARADA PARA O SIM · CONFIGURAÇÃO DO SITE
   Edite só este arquivo para trocar links, preço, lote e rastreamento.
   =================================================================== */
window.PPS_CONFIG = {
  // Checkout da Cakto
  CHECKOUT_LOTE: "https://pay.cakto.com.br/k64n8qr_1159767",   // link do lote fundador (R$ 37)
  CHECKOUT_OFICIAL: "",                                          // link do preço oficial (R$ 79,90). Preencha antes de o lote fechar.

  // Preços exibidos (precisam bater com a Cakto)
  PRECO_LOTE: "37",
  PRECO_OFICIAL: "79,90",

  // Lote fundador. Deixe LOTE_FIM vazio ("") para esconder o contador.
  // Formato: "2026-10-20T23:59:00-03:00" (data e hora de Brasília)
  LOTE_FIM: "",
  VAGAS_TOTAL: 50,
  VAGAS_RESTANTES: null,   // número real de vagas (atualize pela Cakto). null = não mostra.

  // MODO VALIDAÇÃO (só para testar com conhecidos). true = mostra sempre o contador
  // começando em DEMO_CONTADOR a cada visita e o aviso "Restam X de 50 vagas".
  // DESLIGUE (false) antes de divulgar ou anunciar: escassez falsa = propaganda enganosa (CDC art. 37).
  DEMO_ESCASSEZ: true,
  DEMO_CONTADOR: "02:54:27",
  DEMO_VAGAS: 4,

  // Coleta de leads do quiz (webhook do n8n que grava na planilha). Vazio = não salva.
  LEADS_ENDPOINT: "https://n8n.automato.pro/webhook/preparada-leads",

  // Rastreamento (fase de anúncios). Vazio = desligado.
  META_PIXEL_ID: "",
  TIKTOK_PIXEL_ID: "DB019ABC77UA36CC7M4G",

  // Pós-compra: upsell (/palavras-certas/) → downsell (/palavras-certas-5/) → obrigado (/obrigado/)
  // Cole aqui os links que a Cakto gerar. Vazio = o botão "Sim" fica escondido (a página não quebra).
  // As páginas usam o botão de 1 clique da Cakto (dentro de [data-cakto-widget]); estes links só aparecem se o widget for removido.
  KIT_LINK: "https://pay.cakto.com.br/fbmmpam_1166026",   // checkout do Kit Essencial (R$ 37)
  KIT5_LINK: "https://pay.cakto.com.br/3a8cueo_1166027",  // checkout do As 5 Primeiras (R$ 19,90)
  PRECO_KIT: "37",
  PRECO_KIT5: "19,90",
  AREA_MEMBROS: "",    // link de acesso à área de membros da Cakto (botão "Abrir o Dia 1" no obrigado)
  INSTAGRAM: "preparadaparaosim",       // @ do perfil, sem o @ (ex.: "preparadaparaosim"). Vazio = não mostra.

  SUPORTE: "contato@preparadaparaosim.com.br",
  FORM_DEPOIMENTO: "https://forms.gle/J4uT3NYzcT6nj9XbA"
};
