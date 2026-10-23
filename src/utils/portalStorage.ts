import { 
  ClientUser, ObraItem, PreInstallationChecklist, 
  DocumentoProjeto, PedidoItemPortal, TecnicoResponsavel 
} from '../types/clientPortal';

const PORTAL_SESSION_KEY = 'outfire_portal_session_v1';
const PORTAL_OBRAS_KEY = 'outfire_portal_obras_v1';
const PORTAL_USERS_KEY = 'outfire_portal_users_v1';

// Técnico Padrão de Engenharia da Outfire
export const DEFAULT_OUTFIRE_TECNICO: TecnicoResponsavel = {
  nome: 'Carlos Eduardo Nogueira',
  cargo: 'Técnico Especialista em Supressão Classe K',
  registro: 'CFT/CRT-SP: 492.180',
  telefoneWhatsApp: '5515996576807',
  fotoUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=250',
  dataAgendamento: '28 de Outubro de 2026',
  turno: 'Manhã (07h30 às 11h30 — Antes da abertura da cozinha)'
};

// Obra Demonstrativa Inicial de Alto Nível para Teste Imediato
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

/**
 * Retorna o usuário logado atualmente (ou null se deslogado)
 */
export function getCurrentPortalUser(): ClientUser | null {
  try {
    const raw = localStorage.getItem(PORTAL_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Define a sessão do usuário
 */
export function setPortalSession(user: ClientUser | null): void {
  try {
    if (user) {
      localStorage.setItem(PORTAL_SESSION_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(PORTAL_SESSION_KEY);
    }
  } catch {}
}

/**
 * Retorna as obras cadastradas para o usuário/empresa
 */
export function getObrasDoCliente(empresaId?: string): ObraItem[] {
  try {
    const raw = localStorage.getItem(PORTAL_OBRAS_KEY);
    let obras: ObraItem[] = raw ? JSON.parse(raw) : [];

    // Se estiver vazio, popula com a obra modelo inicial
    if (obras.length === 0) {
      obras = [DEMO_OBRA];
      localStorage.setItem(PORTAL_OBRAS_KEY, JSON.stringify(obras));
    }

    if (empresaId) {
      return obras.filter(o => o.empresaId === empresaId);
    }
    return obras;
  } catch {
    return [DEMO_OBRA];
  }
}

/**
 * Salva ou atualiza uma obra no storage seguro
 */
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

/**
 * Atualiza o checklist pré-instalação de uma obra
 */
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

  // Calcula % de prontidão dos 7 itens físicos
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

/**
 * Adiciona um documento/planta enviado pelo cliente na obra
 */
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

/**
 * Cadastra um novo cliente com validação e cria sua primeira obra
 */
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
