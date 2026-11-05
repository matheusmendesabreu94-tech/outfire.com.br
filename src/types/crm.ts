export type LeadStatus = 'novo' | 'em_contato' | 'proposta_enviada' | 'ganho' | 'perdido';
export type LeadOrigem = 'whatsapp' | 'calculadora_cozinha' | 'carrinho_loja' | 'apresentacao_comercial' | 'rodape_contato' | 'manual';

export interface PlantaBaixaLead {
  url: string; // Base64 data URL ou URL do arquivo
  nomeArquivo: string;
  tipoArquivo: string; // 'image/png' | 'image/jpeg' | 'application/pdf' | etc.
  tamanhoBytes?: number;
  dataUpload: string;
  observacoes?: string;
}

export interface ProposalItem {
  id: string;
  descricao: string;
  quantidade: number;
  unidade: string;
  valorUnitario: number;
  valorTotal: number;
}

export interface LeadProposal {
  id: string;
  numeroProposta: string; // Ex: OUT-2026-0842
  dataCriacao: string;
  validadeDias: number;
  responsavelTecnico: string;
  artCrea: string;
  valorEquipamentos: number;
  valorMaoDeObra: number;
  desconto: number;
  valorFinal: number;
  condicoesPagamento: string;
  prazoExecucao: string;
  incluiArtCrea: boolean;
  incluiLaudoEstanqueidade: boolean;
  incluiTreinamentoBrigada: boolean;
  garantiaMeses: number;
  itens: ProposalItem[];
  observacoesGerais?: string;
  statusProposta: 'rascunho' | 'enviada' | 'aprovada' | 'recusada';
}

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
  plantaBaixa?: PlantaBaixaLead;
  propostaComercial?: LeadProposal;
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

