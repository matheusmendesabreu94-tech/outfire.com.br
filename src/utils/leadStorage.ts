import { LeadItem } from '../types';

const LEADS_STORAGE_KEY = 'outfire_leads_secure';
const RETENTION_MS = 7 * 24 * 60 * 60 * 1000; // 7 dias de retenção conforme princípio de minimização LGPD

/**
 * Sanitiza texto simples contra injeção de HTML/scripts
 */
function sanitizeInput(text?: string): string {
  if (!text) return '';
  return text
    .replace(/[<>]/g, '') // Remove tags < e >
    .trim()
    .slice(0, 500); // Limite de comprimento seguro
}

/**
 * Salva um novo lead captado no armazenamento local seguro com limpeza automática de expiração
 */
export function saveLead(leadData: Omit<LeadItem, 'id' | 'timestamp'>): LeadItem {
  const newLead: LeadItem = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    timestamp: new Date().toISOString(),
    nome: sanitizeInput(leadData.nome),
    telefone: sanitizeInput(leadData.telefone),
    email: sanitizeInput(leadData.email).toLowerCase(),
    empresa: sanitizeInput(leadData.empresa),
    cidade: sanitizeInput(leadData.cidade),
    origem: sanitizeInput(leadData.origem),
    detalhes: sanitizeInput(leadData.detalhes),
    totalPedido: leadData.totalPedido && Number.isFinite(leadData.totalPedido) ? leadData.totalPedido : undefined
  };

  try {
    const existingStr = localStorage.getItem(LEADS_STORAGE_KEY);
    const existing: LeadItem[] = existingStr ? JSON.parse(existingStr) : [];
    
    // Purga leads antigos que ultrapassaram o tempo de retenção LGPD
    const now = Date.now();
    const filtered = existing.filter(item => {
      const itemTime = new Date(item.timestamp).getTime();
      return now - itemTime < RETENTION_MS;
    });

    filtered.unshift(newLead);
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(filtered.slice(0, 20))); // Mantém no máximo os 20 mais recentes
  } catch (err) {
    // Falha silenciosa de storage sem vazar PII no console
  }

  return newLead;
}

/**
 * Retorna os leads salvos localmente
 */
export function getSavedLeads(): LeadItem[] {
  try {
    const existingStr = localStorage.getItem(LEADS_STORAGE_KEY);
    return existingStr ? JSON.parse(existingStr) : [];
  } catch {
    return [];
  }
}
