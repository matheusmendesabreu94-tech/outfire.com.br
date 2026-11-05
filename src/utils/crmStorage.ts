import { useState, useEffect } from 'react';
import { CrmLead, RedeRestauranteShopping, LeadStatus, StatusProspeccao } from '../types/crm';
import { SHOPPING_RESTAURANT_CHAINS } from '../data/shoppingChainsData';
import { getSavedLeads } from './leadStorage';

const CRM_LEADS_KEY = 'outfire_crm_leads_v2';
const PROSPECTING_STATUS_KEY = 'outfire_prospecting_status_v1';
const CRM_UPDATED_EVENT = 'outfire_crm_updated';

// Leads iniciais de demonstração / captados no site
const INITIAL_DEMO_LEADS: CrmLead[] = [
  {
    id: 'lead_fasano_01',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 horas atrás
    nome: 'Marcelo Fasano',
    telefone: '(11) 98765-4321',
    email: 'marcelo.obras@fasano.com.br',
    empresa: 'Parrilla Fasano (Shopping Cidade Jardim)',
    cargo: 'Gerente de Obras & Implantação',
    cidade: 'São Paulo',
    estado: 'SP',
    origem: 'calculadora_cozinha',
    detalhes: 'Cozinha com Parrilla Argentina de alta temperatura. Dimensionado 1 coifa de 3.2m com 5 bicos de saponificante e 1 duto com injeção de CO2. Exigência do Corpo de Bombeiros e Shopping Cidade Jardim.',
    totalPedido: 14500,
    status: 'novo',
    temperatura: 'quente',
    tipoCozinha: 'Parrilla & Carnes Nobres',
    numeroCoifas: 1,
    notasComerciais: 'Cliente prioritário. Solicitou visita técnica para checagem do duto de exaustão existente.'
  },
  {
    id: 'lead_madero_eldorado_02',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    nome: 'Rodrigo Silveira',
    telefone: '(11) 91234-5678',
    email: 'rodrigo.eng@maderoburgers.com.br',
    empresa: 'Jeronimo Burger (Shopping Eldorado)',
    cargo: 'Engenheiro de Instalações',
    cidade: 'São Paulo',
    estado: 'SP',
    origem: 'carrinho_loja',
    detalhes: 'Pedido online de 1x Kit Instalação Loja Pequena com bicos extras e tubos de inox para inauguração prevista para o final do mês.',
    totalPedido: 7490,
    status: 'em_contato',
    temperatura: 'quente',
    tipoCozinha: 'Hamburgueria / Smash Burger',
    numeroCoifas: 1,
    notasComerciais: 'Primeiro contato realizado via WhatsApp. Enviada proposta técnica com ART.'
  },
  {
    id: 'lead_spoleto_iguatemi_03',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    nome: 'Fernanda Meirelles',
    telefone: '(21) 99887-6655',
    email: 'fernanda.franquias@grupotrigo.com.br',
    empresa: 'Spoleto Franquia (Shopping Iguatemi Alphaville)',
    cargo: 'Coordenadora de Franquias',
    cidade: 'Barueri',
    estado: 'SP',
    origem: 'apresentacao_comercial',
    detalhes: 'Interesse na Central Outfire VTS para substituição de sistema mecânico antigo com cabo de aço que disparou em falso.',
    totalPedido: 8900,
    status: 'proposta_enviada',
    temperatura: 'quente',
    tipoCozinha: 'Massas Rápidas',
    numeroCoifas: 1,
    notasComerciais: 'Proposta enviada com desconto de frotas para 3 lojas do mesmo franqueado.'
  },
  {
    id: 'lead_dark_kitchen_04',
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    nome: 'Carlos Eduardo Mendes',
    telefone: '(11) 97766-5544',
    email: 'carlos@darkkitchenhub.com.br',
    empresa: 'Dark Kitchen Hub Pinheiros',
    cargo: 'Sócio Diretor',
    cidade: 'São Paulo',
    estado: 'SP',
    origem: 'whatsapp',
    detalhes: 'Complexo com 4 coifas industriais para delivery de hambúrguer e pizza. Precisa de laudo para emissão de AVCB.',
    totalPedido: 19800,
    status: 'novo',
    temperatura: 'morno',
    tipoCozinha: 'Múltiplas Operações / Dark Kitchen',
    numeroCoifas: 4,
    notasComerciais: 'Aguardando envio da planta baixa da cozinha para projeto executivo.'
  }
];

/**
 * Obtém todos os leads do CRM, integrando leads salvos no site
 */
export function getCrmLeads(): CrmLead[] {
  if (typeof window === 'undefined') return INITIAL_DEMO_LEADS;

  try {
    const stored = localStorage.getItem(CRM_LEADS_KEY);
    let leads: CrmLead[] = stored ? JSON.parse(stored) : [];

    // Se estiver vazio, inicializa com os leads padrão
    if (!leads || leads.length === 0) {
      leads = [...INITIAL_DEMO_LEADS];
      localStorage.setItem(CRM_LEADS_KEY, JSON.stringify(leads));
    }

    // Também verifica se há leads recentes no leadStorage do site e importa
    const siteSaved = getSavedLeads();
    if (siteSaved && siteSaved.length > 0) {
      const existingIds = new Set(leads.map(l => l.id));
      let imported = false;

      siteSaved.forEach(sl => {
        if (!existingIds.has(sl.id)) {
          leads.unshift({
            id: sl.id,
            timestamp: sl.timestamp,
            nome: sl.nome,
            telefone: sl.telefone,
            email: sl.email,
            empresa: sl.empresa,
            cidade: sl.cidade,
            origem: (sl.origem as any) || 'whatsapp',
            detalhes: sl.detalhes,
            totalPedido: sl.totalPedido,
            status: 'novo',
            temperatura: 'quente'
          });
          imported = true;
        }
      });

      if (imported) {
        localStorage.setItem(CRM_LEADS_KEY, JSON.stringify(leads));
      }
    }

    return leads;
  } catch (err) {
    console.error('Erro ao ler CRM leads:', err);
    return INITIAL_DEMO_LEADS;
  }
}

/**
 * Salva ou atualiza um lead no CRM
 */
export function saveCrmLead(lead: CrmLead): void {
  const current = getCrmLeads();
  const index = current.findIndex(l => l.id === lead.id);

  let updated: CrmLead[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = lead;
  } else {
    updated = [lead, ...current];
  }

  localStorage.setItem(CRM_LEADS_KEY, JSON.stringify(updated));
  window.dispatchEvent(new CustomEvent(CRM_UPDATED_EVENT));
}

/**
 * Atualiza o status de um lead
 */
export function updateLeadStatus(id: string, status: LeadStatus, notas?: string): void {
  const current = getCrmLeads();
  const updated = current.map(l => {
    if (l.id === id) {
      return {
        ...l,
        status,
        notasComerciais: notas !== undefined ? notas : l.notasComerciais
      };
    }
    return l;
  });

  localStorage.setItem(CRM_LEADS_KEY, JSON.stringify(updated));
  window.dispatchEvent(new CustomEvent(CRM_UPDATED_EVENT));
}

/**
 * Exclui um lead do CRM
 */
export function deleteCrmLead(id: string): void {
  const current = getCrmLeads();
  const updated = current.filter(l => l.id !== id);
  localStorage.setItem(CRM_LEADS_KEY, JSON.stringify(updated));
  window.dispatchEvent(new CustomEvent(CRM_UPDATED_EVENT));
}

/**
 * Hook reativo para leads
 */
export function useCrmLeads(): CrmLead[] {
  const [leads, setLeads] = useState<CrmLead[]>(getCrmLeads);

  useEffect(() => {
    const handleUpdate = () => setLeads(getCrmLeads());
    window.addEventListener(CRM_UPDATED_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener(CRM_UPDATED_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  return leads;
}

/**
 * Gestão de Prospecção das Redes de Restaurantes de Shopping
 */
export function getShoppingChains(): RedeRestauranteShopping[] {
  if (typeof window === 'undefined') return SHOPPING_RESTAURANT_CHAINS;

  try {
    const statusMapStr = localStorage.getItem(PROSPECTING_STATUS_KEY);
    const statusMap: Record<string, { status: StatusProspeccao; notas?: string }> = statusMapStr ? JSON.parse(statusMapStr) : {};

    return SHOPPING_RESTAURANT_CHAINS.map(chain => {
      const custom = statusMap[chain.id];
      if (custom) {
        return {
          ...chain,
          statusProspeccao: custom.status,
          notasProspeccao: custom.notas || chain.notasProspeccao
        };
      }
      return chain;
    });
  } catch {
    return SHOPPING_RESTAURANT_CHAINS;
  }
}

/**
 * Atualiza status de prospecção de uma rede
 */
export function updateChainProspectingStatus(id: string, status: StatusProspeccao, notas?: string): void {
  try {
    const statusMapStr = localStorage.getItem(PROSPECTING_STATUS_KEY);
    const statusMap: Record<string, { status: StatusProspeccao; notas?: string }> = statusMapStr ? JSON.parse(statusMapStr) : {};

    statusMap[id] = {
      status,
      notas: notas !== undefined ? notas : statusMap[id]?.notas
    };

    localStorage.setItem(PROSPECTING_STATUS_KEY, JSON.stringify(statusMap));
    window.dispatchEvent(new CustomEvent(CRM_UPDATED_EVENT));
  } catch (err) {
    console.error('Erro ao atualizar prospecção:', err);
  }
}

/**
 * Exporta leads para CSV
 */
export function exportLeadsToCsv(leads: CrmLead[]): void {
  const headers = ['ID', 'Data/Hora', 'Nome', 'Telefone', 'E-mail', 'Empresa/Restaurante', 'Cidade', 'Origem', 'Valor Pedido', 'Status', 'Detalhes', 'Notas Comerciais'];
  const rows = leads.map(l => [
    l.id,
    new Date(l.timestamp).toLocaleString('pt-BR'),
    `"${l.nome.replace(/"/g, '""')}"`,
    `"${l.telefone}"`,
    `"${l.email}"`,
    `"${l.empresa.replace(/"/g, '""')}"`,
    `"${l.cidade || ''}"`,
    l.origem,
    l.totalPedido ? `R$ ${l.totalPedido}` : '0',
    l.status,
    `"${(l.detalhes || '').replace(/"/g, '""')}"`,
    `"${(l.notasComerciais || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(';'), ...rows.map(e => e.join(';'))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `leads_outfire_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Exporta redes de shoppings para CSV
 */
export function exportChainsToCsv(chains: RedeRestauranteShopping[]): void {
  const headers = ['Rede', 'Grupo', 'Categoria', 'Lojas Estimadas', 'Sede Cidade/UF', 'Endereço', 'Setor de Contato', 'Telefones', 'WhatsApp', 'E-mail Obras/Expansão', 'Site', 'Risco Fogo', 'Status Prospecção', 'Pitch Sugerido', 'Anotações'];
  const rows = chains.map(c => [
    `"${c.nomeRede}"`,
    `"${c.grupoEmpresarial}"`,
    `"${c.categoria}"`,
    c.unidadesEstimadas,
    `"${c.sedeCidadeUF}"`,
    `"${c.enderecoSede.replace(/"/g, '""')}"`,
    `"${c.contatoSetor}"`,
    `"${c.telefones.join(' / ')}"`,
    `"${c.whatsappPrincipal}"`,
    `"${c.emailExpansaoObras}"`,
    `"${c.siteOficial}"`,
    `"${c.perfilRiscoFogo}"`,
    c.statusProspeccao,
    `"${c.pitchRecomendado.replace(/"/g, '""')}"`,
    `"${(c.notasProspeccao || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(';'), ...rows.map(e => e.join(';'))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `prospeccao_shoppings_outfire_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
