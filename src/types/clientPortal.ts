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
  nome: string;
  cargo: string;
  registro: string;
  telefoneWhatsApp: string;
  fotoUrl: string;
  dataAgendamento?: string;
  turno?: string;
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
