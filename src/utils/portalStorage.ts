import { 
  ClientUser, ObraItem, PreInstallationChecklist, 
  DocumentoProjeto, PedidoItemPortal, TecnicoResponsavel,
  TecnicoContratado, MensagemChat 
} from '../types/clientPortal';

const PORTAL_SESSION_KEY = 'outfire_portal_session_v1';
const PORTAL_OBRAS_KEY = 'outfire_portal_obras_v1';
const PORTAL_TECNICOS_KEY = 'outfire_portal_tecnicos_v1';
const PORTAL_CHAT_KEY = 'outfire_portal_chat_v1';

// Técnico Padrão de Engenharia da Outfire
export const DEFAULT_OUTFIRE_TECNICO: TecnicoResponsavel = {
  id: 'tec_carlos_01',
  nome: 'Carlos Eduardo Nogueira',
  cargo: 'Técnico Especialista em Supressão Classe K',
  registro: 'CFT/CRT-SP: 492.180',
  telefoneWhatsApp: '5515996576807',
  fotoUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=250',
  dataAgendamento: '28 de Outubro de 2026',
  turno: 'Manhã (07h30 às 11h30 — Antes da abertura da cozinha)'
};

// Lista Inicial de Técnicos Contratados e Credenciados Outfire
export const DEFAULT_TECNICOS_CONTRATADOS: TecnicoContratado[] = [
  {
    id: 'tec_carlos_01',
    nome: 'Carlos Eduardo Nogueira',
    telefoneWhatsApp: '5515996576807',
    email: 'carlos.instalador@outfire.com.br',
    registro: 'CFT/CRT-SP: 492.180',
    regiao: 'São Paulo Capital, Campinas e Sorocaba',
    especialidade: 'Tubulação Inox, Bicos Aspersores e Central VTS',
    status: 'em_obra',
    fotoUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=250',
    obrasAtribuidasQtd: 2
  },
  {
    id: 'tec_roberto_02',
    nome: 'Roberto Alves Santos',
    telefoneWhatsApp: '5511916999411',
    email: 'roberto.dutos@outfire.com.br',
    registro: 'CFT/CRT-SP: 381.902',
    regiao: 'Grande São Paulo, ABC Paulista e Litoral',
    especialidade: 'Solda Estanque de Dutos, Dampers e Injeção CO2',
    status: 'disponivel',
    fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    obrasAtribuidasQtd: 1
  },
  {
    id: 'tec_marcio_03',
    nome: 'Márcio Vinícius Toledo',
    telefoneWhatsApp: '5521987123456',
    email: 'marcio.toledo@outfire.com.br',
    registro: 'CREA-RJ: 201.890/D',
    regiao: 'Rio de Janeiro, Niterói e Região Serrana',
    especialidade: 'Comissionamento Eletroeletrônico e IHM Touch',
    status: 'disponivel',
    fotoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
    obrasAtribuidasQtd: 0
  }
];

// Administrador Master (Engenharia Outfire)
export const ADMIN_USER: ClientUser = {
  id: 'usr_admin_robson',
  email: 'engenharia@outfire.com.br',
  nome: 'Eng. Robson (Administrador)',
  telefone: '(11) 91699-9411',
  role: 'admin_outfire',
  empresaId: 'emp_outfire_matriz',
  empresaNome: 'Outfire Sistemas — Matriz Engenharia',
  cidade: 'São Paulo - SP',
  avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  criadoEm: '2026-01-01T00:00:00Z'
};

// Obra Demonstrativa Inicial de Alto Nível
export const DEMO_OBRA: ObraItem = {
  id: 'obra_fasano_jardins_01',
  empresaId: 'emp_demo_fasano',
  codigoObra: 'OBR-2026-OUT-0042',
  nomeLoja: 'Parrilla & Grill Fasano — Unidade Jardins',
  endereco: 'Rua Bela Cintra, 2240 - Cerqueira César',
  cidade: 'São Paulo',
  uf: 'SP',
  status: 'tecnico_agendado',
  statusLabel: 'Técnico Agendado (Checklist Aprovado)',
  progressoPorcentagem: 65,
  engenheiroNome: 'Eng. Robson (CREA-SP 506.291)',
  tecnico: DEFAULT_OUTFIRE_TECNICO,
  especificacoes: {
    coifasQtd: 2,
    dutoMetros: 9.5,
    saponificanteLitros: 12.0,
    co2Kg: 10.0,
    centralModelo: 'Central Outfire VTS 32S3 Híbrida (Classe K + CO2)'
  },
  dataPrevisaoConclusao: '04 de Novembro de 2026',
  checklist: {
    id: 'chk_demo_01',
    obraId: 'obra_fasano_jardins_01',
    dutoPronto: true,
    dutoObs: 'Duto em chapa preta 1.37mm com solda estanque contínua já fixado até o forro.',
    coifaInstalada: true,
    coifaObs: 'Coifa em inox 304 com calha coletora e filtros inerciais labirinto nivelados.',
    painelEletrico220v: true,
    painelObs: 'Ponto bifásico 220V com aterramento independente a 1.2m da central.',
    exaustorFuncionando: true,
    exaustorObs: 'Motor de exaustão testado com chave contatora disponível para desarme.',
    portasInspecaoDutos: true,
    portasObs: 'Duas portas estanques de inspeção instaladas nas curvas do duto.',
    redeGasBloqueio: true,
    gasObs: 'Válvula manual e ponto roscado para solenoide 1" instalada no ramal.',
    coccaoPosicionada: true,
    coccaoObs: '1 Chapa dupla, 2 Fritadeiras e 1 Charbroiler já posicionados sob os bicos.',
    restricaoHorario: 'Execução permitida apenas de manhã das 06h às 11h.',
    dataPretendida: '2026-10-28',
    status: 'aprovado_engenharia',
    parecerEngenharia: 'Checklist verificado e aprovado pelo Eng. Robson. Local pronto para montagem dos tubos em inox e fixação dos bicos.',
    aprovadoEm: '2026-10-23T11:30:00Z',
    atualizadoEm: '2026-10-23T11:30:00Z'
  },
  documentos: [
    {
      id: 'doc_art_01',
      obraId: 'obra_fasano_jardins_01',
      tipo: 'art_crea',
      titulo: 'ART CREA-SP — Responsabilidade Técnica de Instalação',
      descricao: 'Anotação de Responsabilidade Técnica com recolhimento oficial e assinatura digital do Engenheiro Mecânico.',
      nomeArquivoOriginal: 'ART_CREA_SP_Outfire_Fasano_2026.pdf',
      tamanhoFormatado: '1.4 MB',
      hashSha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
      numeroArtCrea: 'ART-SP 2026/0491829-0',
      dataEmissao: '2026-10-20',
      downloadUrl: '/assets/Apresentacao_Comercial_Outfire_2026.pdf',
      isOficialOutfire: true
    },
    {
      id: 'doc_memorial_02',
      obraId: 'obra_fasano_jardins_01',
      tipo: 'memorial_calculo_nbr14518',
      titulo: 'Memorial de Cálculo de Vazão e Bicos (ABNT NBR 14518)',
      descricao: 'Dimensionamento hidráulico dos bicos aspersores de saponificante e cálculo de saturação por CO2 no duto.',
      nomeArquivoOriginal: 'Memorial_Calculo_NBR14518_Fasano.pdf',
      tamanhoFormatado: '890 KB',
      hashSha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
      dataEmissao: '2026-10-21',
      downloadUrl: '/assets/Manual_Tecnico_OutFire_2026.pdf',
      isOficialOutfire: true
    },
    {
      id: 'doc_pop_03',
      obraId: 'obra_fasano_jardins_01',
      tipo: 'pop_pos_disparo',
      titulo: 'POP Operacional Pós-Disparo Personalizado da Loja',
      descricao: 'Guia de contingência para brigada de incêndio do restaurante e procedimentos de limpeza pós-combate.',
      nomeArquivoOriginal: 'POP_Pos_Disparo_Fasano.pdf',
      tamanhoFormatado: '420 KB',
      hashSha256: '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
      dataEmissao: '2026-10-22',
      downloadUrl: '/pop-pos-disparo.html',
      isOficialOutfire: true
    }
  ],
  pedidos: [
    {
      id: 'ped_01',
      numeroPedido: 'PED-2026-0089',
      data: '2026-10-18',
      status: 'em_transito',
      statusLabel: 'Em Trânsito para a Obra',
      valorTotalBRL: 8450.00,
      descricaoItens: '1x Central Outfire VTS 32S3, 1x Cilindro Saponificante 10L Inox, 8x Bicos Aspersores 1/2", 4x Sensores 145°C',
      codigoRastreio: 'BR-SEDEX-918239012SP'
    }
  ]
};

// Usuário Demo Pré-Configurado
export const DEMO_USER: ClientUser = {
  id: 'usr_demo_fasano',
  email: 'gestao@fasano.com.br',
  nome: 'Marcelo Fasano Albuquerque',
  telefone: '(11) 98765-4321',
  role: 'cliente_gestor',
  empresaId: 'emp_demo_fasano',
  empresaNome: 'Grupo Gastronômico Fasano',
  cnpjCpf: '60.872.504/0001-20',
  cidade: 'São Paulo - SP',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  criadoEm: '2026-10-15T09:00:00Z'
};

// Mensagens Iniciais de Demonstração
const INITIAL_CHAT_MESSAGES: MensagemChat[] = [
  {
    id: 'msg_01',
    canalId: 'obra_fasano_jardins_01',
    remetenteId: 'usr_demo_fasano',
    remetenteNome: 'Marcelo Fasano',
    remetenteTipo: 'cliente',
    texto: 'Boa tarde Eng. Robson! Anexei as fotos do duto e da coifa no checklist. O ponto 220V com disjuntor já está energizado.',
    timestamp: '2026-10-23T10:15:00Z'
  },
  {
    id: 'msg_02',
    canalId: 'obra_fasano_jardins_01',
    remetenteId: 'usr_admin_robson',
    remetenteNome: 'Eng. Robson (Outfire)',
    remetenteTipo: 'admin',
    texto: 'Excelente Marcelo! Analisei as fotos do duto e das portas de inspeção. Vistoria civil aprovada! Já aloquei o técnico Carlos Eduardo para terça-feira às 07h30.',
    timestamp: '2026-10-23T11:20:00Z'
  },
  {
    id: 'msg_tec_01',
    canalId: 'tec_carlos_01',
    remetenteId: 'usr_admin_robson',
    remetenteNome: 'Eng. Robson (Outfire)',
    remetenteTipo: 'admin',
    texto: 'Carlos, a obra do Fasano Jardins (OBR-2026-OUT-0042) foi aprovada no checklist prévio. São 2 coifas e 9.5m de duto. Horário permitido pelo restaurante: das 06h às 11h.',
    timestamp: '2026-10-23T11:30:00Z'
  },
  {
    id: 'msg_tec_02',
    canalId: 'tec_carlos_01',
    remetenteId: 'tec_carlos_01',
    remetenteNome: 'Carlos Eduardo Nogueira',
    remetenteTipo: 'tecnico',
    texto: 'Recebido Eng. Robson! Tubulação em inox 304 e o cilindro de saponificante 12L já estão no meu veículo de suporte. Chegarei às 07h30 em ponto.',
    timestamp: '2026-10-23T11:45:00Z'
  }
];

export function getCurrentPortalUser(): ClientUser | null {
  try {
    const raw = localStorage.getItem(PORTAL_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setPortalSession(user: ClientUser | null): void {
  try {
    if (user) {
      localStorage.setItem(PORTAL_SESSION_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(PORTAL_SESSION_KEY);
    }
  } catch {}
}

export function getObrasDoCliente(empresaId?: string): ObraItem[] {
  try {
    const raw = localStorage.getItem(PORTAL_OBRAS_KEY);
    let obras: ObraItem[] = raw ? JSON.parse(raw) : [];

    if (obras.length === 0) {
      obras = [DEMO_OBRA];
      localStorage.setItem(PORTAL_OBRAS_KEY, JSON.stringify(obras));
    }

    if (empresaId && empresaId !== 'emp_outfire_matriz') {
      return obras.filter(o => o.empresaId === empresaId);
    }
    return obras;
  } catch {
    return [DEMO_OBRA];
  }
}

export function saveObra(obra: ObraItem): void {
  try {
    const obras = getObrasDoCliente();
    const idx = obras.findIndex(o => o.id === obra.id);
    if (idx >= 0) {
      obras[idx] = obra;
    } else {
      obras.unshift(obra);
    }
    localStorage.setItem(PORTAL_OBRAS_KEY, JSON.stringify(obras));
  } catch {}
}

// ================= GESTÃO DE TÉCNICOS CONTRATADOS =================
export function getTecnicosContratados(): TecnicoContratado[] {
  try {
    const raw = localStorage.getItem(PORTAL_TECNICOS_KEY);
    let tecnicos: TecnicoContratado[] = raw ? JSON.parse(raw) : [];
    if (tecnicos.length === 0) {
      tecnicos = DEFAULT_TECNICOS_CONTRATADOS;
      localStorage.setItem(PORTAL_TECNICOS_KEY, JSON.stringify(tecnicos));
    }
    return tecnicos;
  } catch {
    return DEFAULT_TECNICOS_CONTRATADOS;
  }
}

export function saveTecnicoContratado(tecnico: TecnicoContratado): void {
  try {
    const tecnicos = getTecnicosContratados();
    const idx = tecnicos.findIndex(t => t.id === tecnico.id);
    if (idx >= 0) {
      tecnicos[idx] = tecnico;
    } else {
      tecnicos.unshift(tecnico);
    }
    localStorage.setItem(PORTAL_TECNICOS_KEY, JSON.stringify(tecnicos));
  } catch {}
}

export function atribuirTecnicoAObra(obraId: string, tecnico: TecnicoContratado, dataAgendamento?: string, turno?: string): ObraItem {
  const obras = getObrasDoCliente();
  const obra = obras.find(o => o.id === obraId) || DEMO_OBRA;

  obra.tecnico = {
    id: tecnico.id,
    nome: tecnico.nome,
    cargo: tecnico.especialidade,
    registro: tecnico.registro,
    telefoneWhatsApp: tecnico.telefoneWhatsApp,
    fotoUrl: tecnico.fotoUrl,
    dataAgendamento: dataAgendamento || 'Data a confirmar com restaurante',
    turno: turno || 'Manhã (07h às 11h)'
  };
  obra.status = 'tecnico_agendado';
  obra.statusLabel = `Técnico Agendado (${tecnico.nome})`;
  obra.progressoPorcentagem = Math.max(65, obra.progressoPorcentagem);

  saveObra(obra);
  return obra;
}

// ================= CHAT CONVERSAS (CLIENTES & TÉCNICOS) =================
export function getMensagensChat(canalId: string): MensagemChat[] {
  try {
    const raw = localStorage.getItem(PORTAL_CHAT_KEY);
    let all: MensagemChat[] = raw ? JSON.parse(raw) : [];
    if (all.length === 0) {
      all = INITIAL_CHAT_MESSAGES;
      localStorage.setItem(PORTAL_CHAT_KEY, JSON.stringify(all));
    }
    return all.filter(m => m.canalId === canalId);
  } catch {
    return INITIAL_CHAT_MESSAGES.filter(m => m.canalId === canalId);
  }
}

export function enviarMensagemChat(
  canalId: string, 
  remetenteId: string, 
  remetenteNome: string, 
  remetenteTipo: 'admin' | 'cliente' | 'tecnico', 
  texto: string
): MensagemChat {
  const newMsg: MensagemChat = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    canalId,
    remetenteId,
    remetenteNome,
    remetenteTipo,
    texto: texto.trim(),
    timestamp: new Date().toISOString()
  };

  try {
    const raw = localStorage.getItem(PORTAL_CHAT_KEY);
    let all: MensagemChat[] = raw ? JSON.parse(raw) : [];
    if (all.length === 0) all = INITIAL_CHAT_MESSAGES;
    all.push(newMsg);
    localStorage.setItem(PORTAL_CHAT_KEY, JSON.stringify(all));
  } catch {}

  return newMsg;
}

export function updateChecklist(obraId: string, checklist: Partial<PreInstallationChecklist>): PreInstallationChecklist {
  const obras = getObrasDoCliente();
  const obra = obras.find(o => o.id === obraId) || DEMO_OBRA;

  const currentChk = obra.checklist || {
    id: `chk_${Date.now()}`,
    obraId,
    dutoPronto: false,
    coifaInstalada: false,
    painelEletrico220v: false,
    exaustorFuncionando: false,
    portasInspecaoDutos: false,
    redeGasBloqueio: false,
    coccaoPosicionada: false,
    restricaoHorario: 'Livre',
    status: 'pendente' as const,
    atualizadoEm: new Date().toISOString()
  };

  const updatedChk: PreInstallationChecklist = {
    ...currentChk,
    ...checklist,
    atualizadoEm: new Date().toISOString()
  };

  const items = [
    updatedChk.dutoPronto,
    updatedChk.coifaInstalada,
    updatedChk.painelEletrico220v,
    updatedChk.exaustorFuncionando,
    updatedChk.portasInspecaoDutos,
    updatedChk.redeGasBloqueio,
    updatedChk.coccaoPosicionada
  ];
  const countChecked = items.filter(Boolean).length;
  const progressPct = Math.min(100, Math.round(20 + (countChecked / 7) * 60));

  obra.checklist = updatedChk;
  obra.progressoPorcentagem = progressPct;

  if (countChecked === 7 && updatedChk.status === 'pendente') {
    updatedChk.status = 'em_analise';
    obra.status = 'em_analise_engenharia';
    obra.statusLabel = 'Em Análise pela Engenharia Outfire';
  }

  saveObra(obra);
  return updatedChk;
}

export function addDocumentoObra(obraId: string, doc: Omit<DocumentoProjeto, 'id' | 'obraId'>): DocumentoProjeto {
  const obras = getObrasDoCliente();
  const obra = obras.find(o => o.id === obraId) || DEMO_OBRA;

  const newDoc: DocumentoProjeto = {
    ...doc,
    id: `doc_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    obraId
  };

  obra.documentos.unshift(newDoc);
  saveObra(obra);
  return newDoc;
}

export function registerNewClient(params: {
  nome: string;
  email: string;
  telefone: string;
  empresaNome: string;
  cidade: string;
  cnpjCpf?: string;
}): { user: ClientUser; obra: ObraItem } {
  const empresaId = `emp_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  const userId = `usr_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  const obraId = `obr_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;

  const newUser: ClientUser = {
    id: userId,
    email: params.email.trim().toLowerCase(),
    nome: params.nome.trim(),
    telefone: params.telefone.trim(),
    empresaId,
    empresaNome: params.empresaNome.trim(),
    cnpjCpf: params.cnpjCpf ? params.cnpjCpf.trim() : undefined,
    cidade: params.cidade.trim(),
    role: 'cliente_gestor',
    criadoEm: new Date().toISOString()
  };

  const newObra: ObraItem = {
    id: obraId,
    empresaId,
    codigoObra: `OBR-${new Date().getFullYear()}-OUT-${Math.floor(1000 + Math.random() * 9000)}`,
    nomeLoja: `${params.empresaNome.trim()} — Unidade Principal`,
    endereco: 'Endereço da Cozinha a Confirmar',
    cidade: params.cidade.trim(),
    uf: 'SP',
    status: 'checklist_pendente',
    statusLabel: 'Aguardando Preenchimento do Checklist',
    progressoPorcentagem: 20,
    engenheiroNome: 'Eng. Robson (CREA-SP 506.291)',
    tecnico: DEFAULT_OUTFIRE_TECNICO,
    especificacoes: {
      coifasQtd: 1,
      dutoMetros: 6.0,
      saponificanteLitros: 10.0,
      co2Kg: 10.0,
      centralModelo: 'Central Outfire VTS 32S3 Híbrida'
    },
    dataPrevisaoConclusao: 'A definir após vistoria',
    checklist: {
      id: `chk_${Date.now()}`,
      obraId,
      dutoPronto: false,
      coifaInstalada: false,
      painelEletrico220v: false,
      exaustorFuncionando: false,
      portasInspecaoDutos: false,
      redeGasBloqueio: false,
      coccaoPosicionada: false,
      restricaoHorario: 'A combinar',
      status: 'pendente',
      atualizadoEm: new Date().toISOString()
    },
    documentos: [
      {
        id: `doc_art_blank_${Date.now()}`,
        obraId,
        tipo: 'art_crea',
        titulo: 'ART CREA-SP Oficial (Aguardando Comissionamento)',
        descricao: 'Será emitida pelo Engenheiro Mecânico da Outfire após a aprovação da montagem técnica.',
        nomeArquivoOriginal: 'Aguardando_Instalacao.pdf',
        tamanhoFormatado: 'Em emissão',
        hashSha256: 'pending',
        dataEmissao: new Date().toISOString().split('T')[0],
        downloadUrl: '#',
        isOficialOutfire: true
      }
    ],
    pedidos: []
  };

  saveObra(newObra);
  setPortalSession(newUser);

  return { user: newUser, obra: newObra };
}
