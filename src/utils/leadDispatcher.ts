import { LeadItem, CartItem } from '../types';
import { saveLead } from './leadStorage';

const OFFICIAL_WHATSAPP_NUMBER = '5515996576807';

export interface DispatchLeadInput {
  nome: string;
  telefone: string;
  email: string;
  empresa: string;
  cidade?: string;
  origem: string;
  detalhes?: string;
  totalPedido?: number;
  cartItems?: CartItem[];
  customMessage?: string;
}

/**
 * Monta o texto padronizado e profissional do pedido/lead para o WhatsApp.
 */
export function formatWhatsAppMessage(input: DispatchLeadInput): string {
  let msg = `📋 *CONTATO COMERCIAL — SITE OUTFIRE.COM.BR*\n\n`;
  msg += `👤 *Nome do Responsável:* ${input.nome.trim()}\n`;
  msg += `🏢 *Restaurante / Empresa:* ${input.empresa.trim()}\n`;
  msg += `📱 *WhatsApp:* ${input.telefone.trim()}\n`;
  msg += `✉️ *E-mail:* ${input.email.trim()}\n`;
  
  if (input.cidade && input.cidade.trim()) {
    msg += `📍 *Cidade / UF:* ${input.cidade.trim()}\n`;
  }

  // Se houver itens de carrinho
  if (input.cartItems && input.cartItems.length > 0) {
    msg += `\n🛒 *ITENS DO PEDIDO:*\n`;
    input.cartItems.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.product.name}*\n`;
      msg += `   SKU: ${item.product.sku} | Qtd: ${item.quantity} un\n`;
      msg += `   Valor: R$ ${(item.product.priceBRL * item.quantity).toLocaleString('pt-BR')},00\n\n`;
    });
  }

  // Se houver valor total
  if (input.totalPedido && input.totalPedido > 0) {
    msg += `💰 *TOTAL ESTIMADO:* R$ ${input.totalPedido.toLocaleString('pt-BR')},00\n\n`;
  }

  // Se houver detalhes ou interesse específico
  if (input.detalhes && (!input.cartItems || input.cartItems.length === 0)) {
    msg += `🎯 *Interesse / Detalhes:* ${input.detalhes}\n\n`;
  }

  if (input.customMessage) {
    msg += `💬 *Mensagem do Cliente:* ${input.customMessage}\n\n`;
  }

  msg += `Olá, equipe técnica e comercial da Outfire! Registrei meus dados no site e gostaria de receber atendimento e a proposta formal com laudo ART. Aguardo retorno!`;

  return msg;
}

const TARGET_LEAD_EMAIL = 'contato@outfire.com.br';

/**
 * Envia notificação assíncrona em segundo plano por e-mail para contato@outfire.com.br.
 * Executa silenciosamente em segundo plano sem travar o cliente ou a abertura do WhatsApp.
 */
async function sendBackgroundNotification(lead: LeadItem, rawInput: DispatchLeadInput): Promise<void> {
  const payload = {
    nome: lead.nome,
    empresa: lead.empresa,
    telefone: lead.telefone,
    email: lead.email,
    cidade: lead.cidade || 'Não informada',
    origem: lead.origem,
    detalhes: lead.detalhes || '',
    totalPedido: lead.totalPedido || 0,
    customMessage: rawInput.customMessage || '',
    timestamp: lead.timestamp
  };

  // 1. Canal Primário: Script PHP nativo do servidor Hostinger (/api/send-lead.php)
  try {
    fetch('/api/send-lead.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(() => {});
  } catch {}

  // 2. Canal Secundário Redundante: FormSubmit direto para contato@outfire.com.br
  try {
    fetch(`https://formsubmit.co/ajax/${TARGET_LEAD_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `🔥 Novo Lead Outfire: ${lead.nome} (${lead.empresa})`,
        _template: 'table',
        _captcha: 'false',
        Nome_Responsavel: lead.nome,
        Restaurante_Empresa: lead.empresa,
        WhatsApp: lead.telefone,
        Email_Cliente: lead.email,
        Cidade_UF: lead.cidade || 'Não informada',
        Origem_Lead: lead.origem,
        Valor_Estimado: lead.totalPedido ? `R$ ${lead.totalPedido.toLocaleString('pt-BR')},00` : 'N/A',
        Itens_Detalhes: lead.detalhes || 'Geral',
        Observacoes: rawInput.customMessage || 'Nenhuma'
      })
    }).catch(() => {});
  } catch {}

  // 3. Webhook opcional customizável
  try {
    const customWebhook = (typeof window !== 'undefined' && (window as any).OUTFIRE_LEAD_WEBHOOK) as string | undefined;
    if (customWebhook) {
      fetch(customWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead, payload })
      }).catch(() => {});
    }
  } catch {}
}

/**
 * Função mestre:
 * 1. Salva no localStorage imediatamente.
 * 2. Dispara a notificação de segundo plano.
 * 3. Abre o WhatsApp com a mensagem pronta.
 */
export async function dispatchAndOpenWhatsApp(input: DispatchLeadInput): Promise<{ lead: LeadItem; whatsappUrl: string }> {
  // 1. Salva o lead localmente
  const savedLead = saveLead({
    nome: input.nome.trim(),
    telefone: input.telefone.trim(),
    email: input.email.trim(),
    empresa: input.empresa.trim(),
    cidade: input.cidade ? input.cidade.trim() : 'Não informada',
    origem: input.origem,
    totalPedido: input.totalPedido,
    detalhes: input.detalhes || (input.cartItems ? input.cartItems.map(i => `${i.product.name} (${i.quantity}x)`).join(', ') : undefined)
  });

  // 2. Dispara notificação de fundo (não bloqueante)
  sendBackgroundNotification(savedLead, input).catch(() => {});

  // 3. Monta a URL do WhatsApp
  const messageText = formatWhatsAppMessage(input);
  const whatsappUrl = `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;

  // 4. Abre o WhatsApp no navegador / app
  if (typeof window !== 'undefined') {
    window.open(whatsappUrl, '_blank');
  }

  return { lead: savedLead, whatsappUrl };
}
