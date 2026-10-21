/**
 * Gera a tela inicial normalizada da IHM Outfire VTS 32S3 em Canvas 1024x768:
 * - 3 luzes superiores TODAS VERDES (Exaustor OK, Energia OK, Gás Aberto)
 * - 4 botões táteis inferiores TODOS AZUIS (Setores, Controle Gás, Rearmar, Config)
 * - Cabeçalho azul com data/hora e LED verde
 * - Rodapé azul com SISTEMA OPERANTE
 */
export function createNormalizedIhmScreenCanvas(): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 768;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  // 1. Fundo escuro azul-marinho
  ctx.fillStyle = '#08101a';
  ctx.fillRect(0, 0, 1024, 768);

  // Helper para desenhar retângulos com cantos arredondados
  const drawRoundedRect = (x: number, y: number, w: number, h: number, r: number) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  };

  // 2. Header Superior (Azul)
  const headerGrad = ctx.createLinearGradient(0, 0, 0, 90);
  headerGrad.addColorStop(0, '#0284c7');
  headerGrad.addColorStop(1, '#0369a1');
  ctx.fillStyle = headerGrad;
  ctx.fillRect(0, 0, 1024, 90);

  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 90);
  ctx.lineTo(1024, 90);
  ctx.stroke();

  // Texto da Data e Hora
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 38px "Courier New", Courier, monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('10/05  15:42', 490, 48);

  // LED Verde superior direito de comunicação ativa
  ctx.beginPath();
  ctx.arc(950, 45, 14, 0, Math.PI * 2);
  ctx.fillStyle = '#22c55e';
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#ffffff';
  ctx.stroke();

  // 3. AS 3 LUZES DE CIMA: TODAS VERDES VIBRANTES!
  const topCards = [
    { title: 'EXAUSTOR', val: 'OK', x: 42 },
    { title: 'ENERGIA', val: 'OK', x: 367 },
    { title: 'GÁS', val: 'ABERTO', x: 692 }
  ];

  topCards.forEach((c) => {
    const cardGrad = ctx.createLinearGradient(0, 120, 0, 245);
    cardGrad.addColorStop(0, '#22c55e');
    cardGrad.addColorStop(1, '#15803d');
    ctx.fillStyle = cardGrad;

    drawRoundedRect(c.x, 120, 290, 125, 18);
    ctx.fill();

    ctx.strokeStyle = '#4ade80';
    ctx.lineWidth = 3.5;
    ctx.stroke();

    // Rótulo superior do Card
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(c.title, c.x + 145, 160);

    // Valor do Status
    ctx.font = '900 38px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(c.val, c.x + 145, 212);
  });

  // 4. AS 4 LUZES / BOTÕES DE BAIXO: TODAS AZUIS VIBRANTES!
  const bottomBtns = [
    { title: 'SETORES', x: 42, y: 280 },
    { title: 'CONTROLE GÁS', x: 532, y: 280 },
    { title: 'REARMAR', x: 42, y: 470 },
    { title: 'CONFIG', x: 532, y: 470 }
  ];

  bottomBtns.forEach((b) => {
    const btnGrad = ctx.createLinearGradient(0, b.y, 0, b.y + 160);
    btnGrad.addColorStop(0, '#2563eb');
    btnGrad.addColorStop(0.5, '#1d4ed8');
    btnGrad.addColorStop(1, '#1e40af');
    ctx.fillStyle = btnGrad;

    drawRoundedRect(b.x, b.y, 450, 160, 22);
    ctx.fill();

    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 4.0;
    ctx.stroke();

    // Destaque de reflexo (gloss) na metade superior do botão
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    drawRoundedRect(b.x + 4, b.y + 4, 442, 75, 18);
    ctx.fill();

    // Texto do botão
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(b.title, b.x + 225, b.y + 80);
  });

  // 5. Rodapé Inferior (Azul)
  const footerGrad = ctx.createLinearGradient(0, 683, 0, 768);
  footerGrad.addColorStop(0, '#0369a1');
  footerGrad.addColorStop(1, '#0284c7');
  ctx.fillStyle = footerGrad;
  ctx.fillRect(0, 683, 1024, 85);

  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 683);
  ctx.lineTo(1024, 683);
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = '900 34px "Courier New", Courier, monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('SISTEMA OPERANTE', 512, 725);

  return canvas;
}

/**
 * Renderiza dinamicamente a tela de alarme de incêndio da IHM Outfire com cronômetro ativo:
 * - Fundo vermelho vivo (#ba1016)
 * - Cabeçalho: FOGO DETECTADO + LED indicador verde
 * - FOGO DETECTADO: SUB-1 / EM DISPARO
 * - Cronômetro digital ciano (#67e8f9): ex: "60s", "59s"... "0s"
 * - Rodapé: TOQUE NA TELA PARA ABORTAR
 */
export function drawAlarmScreenToCanvas(canvas: HTMLCanvasElement, seconds: number): void {
  if (canvas.width !== 1024 || canvas.height !== 768) {
    canvas.width = 1024;
    canvas.height = 768;
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 1. Fundo vermelho vívido de alarme
  ctx.fillStyle = '#ba1016';
  ctx.fillRect(0, 0, 1024, 768);

  // 2. Header: FOGO DETECTADO
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 54px "Courier New", Courier, monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('FOGO DETECTADO', 490, 75);

  // LED Verde superior direito
  ctx.beginPath();
  ctx.arc(950, 75, 18, 0, Math.PI * 2);
  ctx.fillStyle = '#22c55e';
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#ffffff';
  ctx.stroke();

  // 3. Subtítulo: FOGO DETECTADO: SUB-1 / EM DISPARO
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 42px "Courier New", Courier, monospace';
  ctx.fillText('FOGO DETECTADO: SUB-1', 512, 175);
  ctx.fillText('EM DISPARO', 512, 240);

  // 4. Cronômetro Digital em Ciano (#67e8f9) com efeito de brilho TFT
  const sec = Math.max(0, Math.round(seconds));
  const timeStr = `${sec}s`;

  ctx.save();
  ctx.shadowColor = 'rgba(103, 232, 249, 0.75)';
  ctx.shadowBlur = 24;
  ctx.fillStyle = '#67e8f9';
  ctx.font = '900 185px "Courier New", Courier, monospace';
  ctx.fillText(timeStr, 512, 440);
  ctx.restore();

  // 5. Rodapé: TOQUE NA TELA PARA ABORTAR
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 38px "Courier New", Courier, monospace';
  ctx.fillText('TOQUE NA TELA PARA ABORTAR', 512, 670);
}

/**
 * Renderiza a tela de Supressão / Descarga de agente efetuada
 */
export function drawSuppressionScreenToCanvas(canvas: HTMLCanvasElement): void {
  if (canvas.width !== 1024 || canvas.height !== 768) {
    canvas.width = 1024;
    canvas.height = 768;
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.fillStyle = '#7f1d1d';
  ctx.fillRect(0, 0, 1024, 768);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px "Courier New", Courier, monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('SISTEMA CO2 / SAP', 512, 110);

  ctx.fillStyle = '#fef08a';
  ctx.font = '900 64px "Courier New", Courier, monospace';
  ctx.fillText('DESCARGA EFETUADA', 512, 260);

  // Botão Rearmar Sistema
  ctx.fillStyle = '#0284c7';
  ctx.fillRect(212, 420, 600, 120);
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 4;
  ctx.strokeRect(212, 420, 600, 120);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 44px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('REARMAR SISTEMA', 512, 480);
}

/**
 * Renderiza a tela após a extinção do fogo (Cozinha Salva / Operação Normalizada)
 */
export function drawExtinguishedScreenToCanvas(canvas: HTMLCanvasElement): void {
  if (canvas.width !== 1024 || canvas.height !== 768) {
    canvas.width = 1024;
    canvas.height = 768;
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.fillStyle = '#06261c';
  ctx.fillRect(0, 0, 1024, 768);

  ctx.fillStyle = '#10b981';
  ctx.font = '900 56px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('● INCÊNDIO EXTINTO', 512, 140);

  ctx.fillStyle = '#a7f3d0';
  ctx.font = 'bold 36px "Courier New", Courier, monospace';
  ctx.fillText('SUPRESSÃO CLASSE K BEM-SUCEDIDA', 512, 240);

  ctx.fillStyle = '#064e3b';
  ctx.fillRect(100, 340, 824, 110);
  ctx.strokeStyle = '#34d399';
  ctx.lineWidth = 4;
  ctx.strokeRect(100, 340, 824, 110);

  ctx.fillStyle = '#6ee7b7';
  ctx.font = 'bold 38px sans-serif';
  ctx.fillText('AVCB & NBR 14518 CONFORME', 512, 395);

  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 32px "Courier New", Courier, monospace';
  ctx.fillText('COZINHA E VIDAS PRESERVADAS', 512, 570);
}
