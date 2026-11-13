import * as THREE from 'three';

/**
 * Cria a textura do selo/etiqueta oficial Outfire para os cilindros 3D
 */
export function createCylinderLabelTexture(type: 'saponificante' | 'co2'): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  // Fundo com acabamento metálico
  if (type === 'saponificante') {
    // Fundo Inox / Dourado escovado
    const grad = ctx.createLinearGradient(0, 0, 512, 256);
    grad.addColorStop(0, '#111317');
    grad.addColorStop(0.5, '#1e222a');
    grad.addColorStop(1, '#111317');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 256);

    // Borda Dourada Luxuosa
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 8;
    ctx.strokeRect(10, 10, 492, 236);

    ctx.strokeStyle = '#f3e5ab';
    ctx.lineWidth = 2;
    ctx.strokeRect(18, 18, 476, 220);

    // Tarja Dourada Superior
    ctx.fillStyle = '#d4af37';
    ctx.fillRect(20, 20, 472, 38);

    ctx.fillStyle = '#0a0c10';
    ctx.font = '900 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('OUTFIRE SISTEMAS • NBR 14518', 256, 39);

    // Texto Central: SAPONIFICANTE CLASSE K
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('SAPONIFICANTE', 256, 95);

    ctx.fillStyle = '#d4af37';
    ctx.font = '900 28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('CLASSE K (WET CHEMICAL)', 256, 132);

    // Dados Técnicos
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 16px "Courier New", Courier, monospace';
    ctx.fillText('CAPACIDADE: 15L • PRESSÃO: 14 BAR', 256, 172);

    // Selo de Inspeção / QR
    ctx.fillStyle = '#22c55e';
    ctx.fillRect(40, 198, 14, 14);
    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'bold 14px "Courier New", Courier, monospace';
    ctx.textAlign = 'left';
    ctx.fillText('CERTIFICADO NFPA 17A / NBR 14518', 64, 206);
  } else {
    // Cilindro de CO2 (Vermelho / Dourado Industrial)
    const grad = ctx.createLinearGradient(0, 0, 512, 256);
    grad.addColorStop(0, '#590a0a');
    grad.addColorStop(0.5, '#7f1d1d');
    grad.addColorStop(1, '#590a0a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 256);

    // Borda Prateada / Dourada
    ctx.strokeStyle = '#f8fafc';
    ctx.lineWidth = 6;
    ctx.strokeRect(10, 10, 492, 236);

    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(20, 20, 472, 38);

    ctx.fillStyle = '#7f1d1d';
    ctx.font = '900 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('OUTFIRE • SUPRESSÃO EM DUTOS', 256, 39);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 34px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('CILINDRO CO2', 256, 95);

    ctx.fillStyle = '#facc15';
    ctx.font = '900 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('ALTA PRESSÃO (DUTOS & EXAUSTÃO)', 256, 134);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 16px "Courier New", Courier, monospace';
    ctx.fillText('CARGA: 6.0 KG • NBR 14518 & 12232', 256, 172);

    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(40, 198, 14, 14);
    ctx.fillStyle = '#f1f5f9';
    ctx.font = 'bold 14px "Courier New", Courier, monospace';
    ctx.textAlign = 'left';
    ctx.fillText('VÁLVULA SOLENOIDE RÁPIDA 24VDC', 64, 206);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
