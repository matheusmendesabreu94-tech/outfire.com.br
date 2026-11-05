export type LeadStatus = 'novo' | 'em_contato' | 'proposta_enviada' | 'ganho' | 'perdido';
export type LeadOrigem = 'whatsapp' | 'calculadora_cozinha' | 'carrinho_loja' | 'apresentacao_comercial' | 'rodape_contato' | 'manual';

export interface CrmLead {
  id: string;
  timestamp: string;
  nome: string;
  telefone: string;
  email: string;
  empresa: string; // Loja / Restaurante / Rede que representa
  cargo?: string;
  cidade?: string;
  estado?: string;
  origem: LeadOrigem;
  detalhes?: string;
  totalPedido?: number;
  status: LeadStatus;
  temperatura: 'quente' | 'morno' | 'frio';
  tipoCozinha?: string;
  numeroCoifas?: number;
  notasComerciais?: string;
}

export type CategoriaRede = 
  | 'Todas'
  | 'Steakhouses & Carnes'
  | 'Hamburguerias'
  | 'Cozinha Italiana & Massas'
  | 'Frutos do Mar'
  | 'Comida Brasileira & Buffet'
  | 'Culinária Oriental'
  | 'Fast Food & Frango Frito';

export type StatusProspeccao = 
  | 'nao_contatado'
  | 'em_prospeccao'
  | 'reuniao_agendada'
  | 'proposta_enviada'
  | 'homologado';

export interface RedeRestauranteShopping {
  id: string;
  nomeRede: string;
  grupoEmpresarial: string;
  categoria: CategoriaRede;
  unidadesEstimadas: number;
  presencaShoppings: string;
  sedeCidadeUF: string;
  enderecoSede: string;
  contatoSetor: string; // ex: 'Diretoria de Expansão, Engenharia e Obras'
  telefones: string[];
  whatsappPrincipal: string;
  emailExpansaoObras: string;
  siteOficial: string;
  perfilRiscoFogo: 'Extremo (Grelhas / Charbroilers)' | 'Alto (Fritadeiras / Óleo Quente)' | 'Médio-Alto (Chapas / Woks)';
  statusProspeccao: StatusProspeccao;
  pitchRecomendado: string;
  notasProspeccao?: string;
}
