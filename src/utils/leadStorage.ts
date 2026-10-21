import { LeadItem } from '../types';

const LEADS_STORAGE_KEY = 'outfire_leads';

/**
 * Salva um novo lead captado no localStorage do navegador para garantir
 * que nenhum dado seja perdido mesmo que o cliente feche a janela do WhatsApp.
 */
export function saveLead(leadData: Omit<LeadItem, 'id' | 'timestamp'>): LeadItem {
  const newLead: LeadItem = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    timestamp: new Date().toISOString(),
    ...leadData,
  };

  try {
    const existingStr = localStorage.getItem(LEADS_STORAGE_KEY);
    const existing: LeadItem[] = existingStr ? JSON.parse(existingStr) : [];
    existing.unshift(newLead);
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(existing));
    console.log('[Outfire Leads] Novo lead registrado com sucesso:', newLead);
  } catch (err) {
    console.error('[Outfire Leads] Erro ao salvar lead:', err);
  }

  return newLead;
}

/**
 * Retorna todos os leads captados pelo site.
 * Pode ser chamado no console do navegador via: window.getOutfireLeads()
 */
export function getSavedLeads(): LeadItem[] {
  try {
    const existingStr = localStorage.getItem(LEADS_STORAGE_KEY);
    return existingStr ? JSON.parse(existingStr) : [];
  } catch {
    return [];
  }
}

// Expõe no window para inspeção ou extração rápida do administrador
if (typeof window !== 'undefined') {
  (window as any).getOutfireLeads = getSavedLeads;
}
