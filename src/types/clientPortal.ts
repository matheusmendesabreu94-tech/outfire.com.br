export type UserRole = 'cliente_gestor' | 'cliente_gerente_loja' | 'engenheiro_responsavel' | 'tecnico_instalador' | 'admin_outfire';

export type ObraStatus = 
  | 'planejamento'
  | 'checklist_pendente'
  | 'em_analise_engenharia'
  | 'tecnico_agendado'
  | 'instalacao_em_andamento'
  | 'comissionamento_wizard'
  | 'concluida_avcb';

export type TipoDocumento = 
  | 'art_crea'
  | 'laudo_avcb_clcb'
  | 'memorial_calculo_nbr14518'
  | 'planta_baixa_dwg_pdf'
  | 'certificado_conformidade_outfire'
  | 'relatorio_comissionamento'
  | 'pop_pos_disparo'
  | 'foto_vistoria_evidencia';

export interface ClientUser {
  id: string;
  email: string;
  nome: string;
  telefone: string;
  role: UserRole;
  empresaId: string;
  empresaNome: string;
  cnpjCpf?: string;
  cidade: string;
  avatarUrl?: string;
  criadoEm: string;
}

export interface TecnicoResponsavel {
  id?: string;
  nome: string;
  cargo: string;
  registro: string;
  telefoneWhatsApp: string;
  fotoUrl: string;
  dataAgendamento?: string;
  turno?: string;
}

export interface TecnicoContratado {
  id: string;
  nome: string;
  telefoneWhatsApp: string;
  email: string;
  registro: string;
  regiao: string;
  especialidade: string;
  status: 'disponivel' | 'em_obra' | 'ferias';
  fotoUrl: string;
  obrasAtribuidasQtd: number;
}

export interface MensagemChat {
  id: string;
  canalId: string; // obraId ou tecnicoId ou clienteId
  remetenteId: string;
  remetenteNome: string;
  remetenteTipo: 'admin' | 'cliente' | 'tecnico';
  texto: string;
  timestamp: string;
}

export interface PreInstallationChecklist {
  id: string;
  obraId: string;
  
  // Os 8 Requisitos Críticos
  dutoPronto: boolean;
  dutoObs?: string;
  dutoFotoUrl?: string;

  coifaInstalada: boolean;
  coifaObs?: string;
  coifaFotoUrl?: string;

  painelEletrico220v: boolean;
  painelObs?: string;

  exaustorFuncionando: boolean;
  exaustorObs?: string;

  portasInspecaoDutos: boolean;
  portasObs?: string;

  redeGasBloqueio: boolean;
  gasObs?: string;

  coccaoPosicionada: boolean;
  coccaoObs?: string;

  restricaoHorario: string;
  dataPretendida?: string;

  // Validação
  status: 'pendente' | 'em_analise' | 'aprovado_engenharia' | 'ajustes_solicitados';
  parecerEngenharia?: string;
  aprovadoEm?: string;
  atualizadoEm: string;
}

export interface DocumentoProjeto {
  id: string;
  obraId: string;
  tipo: TipoDocumento;
  titulo: string;
  descricao?: string;
  nomeArquivoOriginal: string;
  tamanhoFormatado: string;
  hashSha256: string;
  numeroArtCrea?: string;
  dataEmissao: string;
  downloadUrl: string;
  isOficialOutfire: boolean;
}

export interface PedidoItemPortal {
  id: string;
  numeroPedido: string;
  data: string;
  status: 'orcamento' | 'aguardando_aprovacao' | 'em_separacao' | 'em_transito' | 'entregue';
  statusLabel: string;
  valorTotalBRL: number;
  descricaoItens: string;
  codigoRastreio?: string;
}

export interface ObraItem {
  id: string;
  empresaId: string;
  codigoObra: string;
  nomeLoja: string;
  endereco: string;
  cidade: string;
  uf: string;
  status: ObraStatus;
  statusLabel: string;
  progressoPorcentagem: number;
  
  // Engenheiro e Técnico
  engenheiroNome: string;
  tecnico?: TecnicoResponsavel;

  // Especificações da Cozinha
  especificacoes: {
    coifasQtd: number;
    dutoMetros: number;
    saponificanteLitros: number;
    co2Kg: number;
    centralModelo: string;
  };

  checklist?: PreInstallationChecklist;
  documentos: DocumentoProjeto[];
  pedidos: PedidoItemPortal[];

  dataPrevisaoConclusao: string;
}

// ---------------------------------------------------------------------------
// Checklist Templates
// ---------------------------------------------------------------------------

export interface ItemTemplateChecklist {
  id: string;
  descricao: string;
  requerFoto: boolean;
  requerAssinatura?: boolean;
  ordem: number;
}

export type TipoChecklist = 'retirada_kit' | 'instalacao_concluida' | 'manutencao' | 'pre_instalacao_cliente';

export interface TemplateChecklist {
  id: string;
  nome: string;
  tipo: TipoChecklist;
  itens: ItemTemplateChecklist[];
  criadoEm: number;
  atualizadoEm: number;
  ativo: boolean;
}

// ---------------------------------------------------------------------------
// Technician GPS & Attendance
// ---------------------------------------------------------------------------

export type TipoPonto = 'checkin' | 'checkout' | 'pausa' | 'retorno';

export interface RegistroPontoGps {
  id: string;
  tecnicoId: string;
  tecnicoNome: string;
  obraId?: string;
  obraCliente?: string;
  tipo: TipoPonto;
  lat: number;
  lng: number;
  precisaoMetros?: number;
  timestamp: number;
  observacao?: string;
}

// ---------------------------------------------------------------------------
// Fleet Management
// ---------------------------------------------------------------------------

export type StatusVeiculo = 'Disponível' | 'Em Uso' | 'Manutenção' | 'Alugado';

export interface VeiculoFrota {
  id: string;
  placa: string;
  modelo: string;
  ano?: number;
  cor?: string;
  status: StatusVeiculo;
  kmAtual: number;
  responsavelId?: string;
  responsavelNome?: string;
  observacoes?: string;
  fotos?: string[]; // base64
}

export interface RegistroUsoVeiculoPortal {
  id: string;
  veiculoId: string;
  veiculoPlaca: string;
  tecnicoId: string;
  tecnicoNome: string;
  obraId?: string;
  kmSaida: number;
  kmRetorno?: number;
  kmPercorrido?: number;
  dataSaida: number;
  dataRetorno?: number;
  observacoes?: string;
  assinatura?: string; // base64
}

// ---------------------------------------------------------------------------
// Tools & Assets
// ---------------------------------------------------------------------------

export type StatusFerramenta = 'Disponível' | 'Em Uso' | 'Manutenção' | 'Perdida';

export interface FerramentaPatrimonio {
  id: string;
  nome: string;
  descricao?: string;
  numeroPatrimonio?: string;
  numeroSerie?: string;
  dataAquisicao?: string;
  valorAquisicao?: number;
  status: StatusFerramenta;
  tecnicoResponsavelId?: string;
  tecnicoResponsavelNome?: string;
  fotos?: string[]; // base64
}

export interface CautelaFerramenta {
  id: string;
  ferramentaId: string;
  ferramentaNome: string;
  tecnicoId: string;
  tecnicoNome: string;
  obraId?: string;
  dataRetirada: number;
  dataDevolucao?: number;
  assinaturaRetirada?: string; // base64
  assinaturaDevolucao?: string; // base64
  observacoes?: string;
  status: 'Ativa' | 'Devolvida';
}

// ---------------------------------------------------------------------------
// Technician Expenses
// ---------------------------------------------------------------------------

export type CategoriaDespesa =
  | 'Combustível'
  | 'Alimentação'
  | 'Material'
  | 'Transporte'
  | 'Hospedagem'
  | 'Outros';

export type StatusDespesa = 'Pendente' | 'Aprovada' | 'Rejeitada' | 'Reembolsada';

export interface DespesaTecnico {
  id: string;
  tecnicoId: string;
  tecnicoNome: string;
  obraId?: string;
  obraCliente?: string;
  categoria: CategoriaDespesa;
  descricao: string;
  valor: number;
  data: number;
  fotos: string[]; // base64 receipts
  audioUrl?: string;
  status: StatusDespesa;
  aprovadoPor?: string;
  observacoes?: string;
  criadoEm: number;
}

// ---------------------------------------------------------------------------
// Technician Remuneration
// ---------------------------------------------------------------------------

export type TipoRemuneracao = 'Diária' | 'Por Obra' | 'Comissão';

export interface RemuneracaoObraTecnico {
  id: string;
  tecnicoId: string;
  tecnicoNome: string;
  obraId: string;
  obraCliente: string;
  tipo: TipoRemuneracao;
  valorBase: number;
  valorDespesasAprovadas: number;
  totalAPagar: number;
  status: 'Pendente' | 'Aprovado' | 'Pago';
  dataFechamento?: number;
  dataPagamento?: number;
  aprovadoPor?: string;
  observacoes?: string;
}

// ---------------------------------------------------------------------------
// Site Store Sales
// ---------------------------------------------------------------------------

export type FormaPagamento = 'PIX' | 'Cartão de Crédito' | 'Cartão de Débito' | 'Boleto' | 'WhatsApp';
export type StatusVenda = 'Pendente' | 'Confirmada' | 'Cancelada' | 'Entregue';

export interface VendaSite {
  id: string;
  produtoId: string;
  produtoNome: string;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
  clienteId?: string;
  clienteNome?: string;
  clienteTelefone?: string;
  formaPagamento: FormaPagamento;
  status: StatusVenda;
  dataVenda: number;
  observacoes?: string;
  vendedorId?: string;
}

// ---------------------------------------------------------------------------
// Checklist Response (from technician)
// ---------------------------------------------------------------------------

export interface RespostaItemChecklist {
  itemId: string;
  descricao: string;
  concluido: boolean;
  observacao?: string;
  fotos: string[]; // base64
  audioUrl?: string;
  timestamp?: number;
}

export interface RespostaChecklist {
  id: string;
  templateId: string;
  templateNome: string;
  tipo: TipoChecklist;
  tecnicoId: string;
  tecnicoNome: string;
  obraId: string;
  obraCliente: string;
  itens: RespostaItemChecklist[];
  status: 'Rascunho' | 'Concluído' | 'Aprovado';
  criadoEm: number;
  concluidoEm?: number;
  assinaturaTecnico?: string; // base64
  assinaturaCliente?: string; // base64
  coordenadasConclusao?: { lat: number; lng: number };
}
