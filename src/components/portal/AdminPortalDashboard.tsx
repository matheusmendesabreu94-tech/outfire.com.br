import React, { useState, useEffect } from 'react';
import { 
  Building2, HardHat, MessageSquare, CheckCircle2, 
  AlertTriangle, Clock, Phone, Send, Plus, 
  ShieldCheck, User, Wrench, Download, Upload, 
  Calendar, Check, X, FileText, Sparkles, LogOut, ArrowRight,
  ShoppingBag, Truck, Receipt, Sliders, DollarSign, Edit3, Trash2, MapPin, Tag, Users,
  Lock, KeyRound, Eye, EyeOff, Copy
} from 'lucide-react';
import { 
  ObraItem, TecnicoContratado, MensagemChat, ClientUser,
  VendaSite, VeiculoFrota, FerramentaPatrimonio, DespesaTecnico, TemplateChecklist
} from '../../types/clientPortal';
import { 
  getObrasDoCliente, getTecnicosContratados, 
  saveTecnicoContratado, atribuirTecnicoAObra, 
  getMensagensChat, enviarMensagemChat, saveObra 
} from '../../utils/portalStorage';
import { DEFAULT_CHECKLIST_TEMPLATES } from '../../data/defaultChecklistTemplates';
import { CatalogManager } from './CatalogManager';
import { useStoreCatalog } from '../../utils/catalogStorage';
import { LeadsManager } from './LeadsManager';
import { useCrmLeads } from '../../utils/crmStorage';
import { useOpsAuthPins } from '../../utils/opsAuth';

interface Props {
  adminUser: ClientUser;
  onLogout: () => void;
  onSwitchToClientMode?: () => void;
}

type AdminTab = 
  | 'obras' 
  | 'catalogo'
  | 'leads'
  | 'vendas' 
  | 'tecnicos' 
  | 'checklists' 
  | 'frota' 
  | 'ferramentas' 
  | 'despesas' 
  | 'editor_checklists' 
  | 'chat';

export const AdminPortalDashboard: React.FC<Props> = ({ adminUser, onLogout, onSwitchToClientMode }) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('obras');
  const produtosCatalogo = useStoreCatalog();
  const crmLeads = useCrmLeads();
  const leadsNovosCount = crmLeads.filter(l => l.status === 'novo').length;
  const [obras, setObras] = useState<ObraItem[]>(() => getObrasDoCliente());
  const [tecnicos, setTecnicos] = useState<TecnicoContratado[]>(() => getTecnicosContratados());
  
  // Gestão de Senhas Operacionais (#ops)
  const { adminPin, techPin, setAdminPin, setTechnicianPin } = useOpsAuthPins();
  const [tempTechPin, setTempTechPin] = useState(techPin);
  const [tempAdminPin, setTempAdminPin] = useState(adminPin);
  const [showTechPinInput, setShowTechPinInput] = useState(false);
  const [showAdminPinInput, setShowAdminPinInput] = useState(false);
  const [feedbackTech, setFeedbackTech] = useState<string | null>(null);
  const [feedbackAdmin, setFeedbackAdmin] = useState<string | null>(null);

  useEffect(() => {
    setTempTechPin(techPin);
  }, [techPin]);

  useEffect(() => {
    setTempAdminPin(adminPin);
  }, [adminPin]);

  const handleSaveTechPin = () => {
    const cleaned = tempTechPin.trim();
    if (!cleaned || cleaned.length < 3) {
      setFeedbackTech('A senha deve conter no mínimo 3 caracteres.');
      return;
    }
    const ok = setTechnicianPin(cleaned);
    if (ok) {
      setFeedbackTech('Senha dos técnicos atualizada com sucesso!');
      setTimeout(() => setFeedbackTech(null), 3500);
    }
  };

  const handleSaveAdminPin = () => {
    const cleaned = tempAdminPin.trim();
    if (!cleaned || cleaned.length < 4) {
      setFeedbackAdmin('A senha admin deve ter no mínimo 4 caracteres.');
      return;
    }
    const ok = setAdminPin(cleaned);
    if (ok) {
      setFeedbackAdmin('Senha mestra do Administrador atualizada!');
      setTimeout(() => setFeedbackAdmin(null), 3500);
    }
  };

  const handleShareTechPinWhatsApp = () => {
    const pinAtual = tempTechPin.trim() || techPin;
    const texto = encodeURIComponent(
      `🔒 *OUTFIRE ENGENHARIA - Acesso Operacional Técnico*\n\n` +
      `Olá! A sua senha de acesso ao portal do técnico Outfire foi atualizada:\n\n` +
      `🔑 *Sua Senha de Acesso:* ${pinAtual}\n` +
      `📱 *Link do Portal:* https://outfire.com.br/#ops\n\n` +
      `Acesse diariamente para preencher checklists, vistorias e ordens de serviço.`
    );
    window.open(`https://wa.me/?text=${texto}`, '_blank');
  };
  
  // Chat state
  const [activeChannelId, setActiveChannelId] = useState<string>('obra_fasano_jardins_01');
  const [channelTitle, setChannelTitle] = useState<string>('Parrilla Fasano (Cliente Marcelo)');
  const [chatMessages, setChatMessages] = useState<MensagemChat[]>(() => getMensagensChat('obra_fasano_jardins_01'));
  const [newMsgText, setNewMsgText] = useState('');

  // Modal para cadastrar novo técnico
  const [showNewTecnicoModal, setShowNewTecnicoModal] = useState(false);
  const [tecNome, setTecNome] = useState('');
  const [tecTel, setTecTel] = useState('');
  const [tecEmail, setTecEmail] = useState('');
  const [tecRegistro, setTecRegistro] = useState('');
  const [tecRegiao, setTecRegiao] = useState('');
  const [tecEspecialidade, setTecEspecialidade] = useState('');

  // Modal de atribuição de técnico
  const [selectedObraForAssignment, setSelectedObraForAssignment] = useState<ObraItem | null>(null);
  const [assignTecId, setAssignTecId] = useState('');
  const [assignData, setAssignData] = useState('2026-10-28');
  const [assignTurno, setAssignTurno] = useState('Manhã (07h30 às 11h30)');

  // 1. Estado de Vendas da Loja do Site & Centrais
  const [vendas, setVendas] = useState<VendaSite[]>([
    {
      id: 'vnd_01',
      produtoId: 'prod_central_32s3',
      produtoNome: 'Central Outfire VTS 32S3 Inox (Comissionada)',
      quantidade: 1,
      valorUnitario: 14850.00,
      valorTotal: 14850.00,
      clienteNome: 'Restaurante Fasano Itaim',
      clienteTelefone: '(11) 98765-4321',
      formaPagamento: 'PIX',
      status: 'Confirmada',
      dataVenda: Date.now() - 86400000 * 2,
    },
    {
      id: 'vnd_02',
      produtoId: 'prod_kit_bicos_6',
      produtoNome: 'Kit Bicos Angulares Inox NBR 14518 (6 Bicos)',
      quantidade: 2,
      valorUnitario: 2950.00,
      valorTotal: 5900.00,
      clienteNome: 'Parrilla Dourada Jardins',
      clienteTelefone: '(11) 91234-5678',
      formaPagamento: 'Boleto',
      status: 'Entregue',
      dataVenda: Date.now() - 86400000 * 5,
    },
    {
      id: 'vnd_03',
      produtoId: 'prod_modulo_rearme',
      produtoNome: 'Módulo de Rearme com Fusível 5A Retardo',
      quantidade: 4,
      valorUnitario: 420.00,
      valorTotal: 1680.00,
      clienteNome: 'Hamburgueria 77 Pinheiros',
      clienteTelefone: '(11) 99887-7665',
      formaPagamento: 'WhatsApp',
      status: 'Pendente',
      dataVenda: Date.now() - 3600000 * 4,
    }
  ]);

  // 2. Estado de Frota & Logística (baseado em FrotaLogisticaView.tsx)
  const [veiculos, setVeiculos] = useState<VeiculoFrota[]>([
    {
      id: 'vec_01',
      placa: 'BRA2E19',
      modelo: 'Renault Master L2H2 (Oficina Móvel & Almoxarifado)',
      status: 'Em Uso',
      kmAtual: 42180,
      responsavelNome: 'Carlos Eduardo (Técnico)',
      observacoes: 'Contém kit de tubos inox, prensa e cilindros de saponificante',
    },
    {
      id: 'vec_02',
      placa: 'FXT4B88',
      modelo: 'Fiat Strada Endurance 1.4 (Instalações Rápidas)',
      status: 'Disponível',
      kmAtual: 18450,
      responsavelNome: 'Pátio Central Engenharia',
      observacoes: 'Revisão e pneus novos em dia',
    }
  ]);

  // 3. Estado de Ferramentas & Patrimônio (baseado em FerramentasView.tsx)
  const [ferramentas, setFerramentas] = useState<FerramentaPatrimonio[]>([
    {
      id: 'fer_01',
      nome: 'Chave Dinamométrica de Precisão 1/2"',
      numeroPatrimonio: 'PAT-OUT-0042',
      status: 'Em Uso',
      tecnicoResponsavelNome: 'Carlos Eduardo',
      valorAquisicao: 1250.00,
      dataAquisicao: '2025-11-10',
    },
    {
      id: 'fer_02',
      nome: 'Manômetro Digital Pressurização CO2',
      numeroPatrimonio: 'PAT-OUT-0019',
      status: 'Em Uso',
      tecnicoResponsavelNome: 'Carlos Eduardo',
      valorAquisicao: 2400.00,
      dataAquisicao: '2026-01-15',
    },
    {
      id: 'fer_03',
      nome: 'Rosqueadeira Manual para Tubos Inox NPT 1"',
      numeroPatrimonio: 'PAT-OUT-0007',
      status: 'Disponível',
      tecnicoResponsavelNome: 'Almoxarifado Central',
      valorAquisicao: 3800.00,
      dataAquisicao: '2025-08-20',
    }
  ]);

  // 4. Estado de Despesas dos Técnicos para Aprovação
  const [despesasTecnicos, setDespesasTecnicos] = useState<DespesaTecnico[]>([
    {
      id: 'desp_adm_1',
      tecnicoId: 'tec_carlos',
      tecnicoNome: 'Carlos Eduardo',
      obraCliente: 'Parrilla Fasano Itaim',
      categoria: 'Combustível',
      descricao: 'Abastecimento utilitário ida e volta para obra',
      valor: 120.00,
      data: Date.now() - 3600000 * 2,
      fotos: [],
      status: 'Aprovada',
      criadoEm: Date.now() - 3600000 * 2,
    },
    {
      id: 'desp_adm_2',
      tecnicoId: 'tec_carlos',
      tecnicoNome: 'Carlos Eduardo',
      obraCliente: 'Parrilla Fasano Itaim',
      categoria: 'Material',
      descricao: 'Fusíveis reserva 5A retardo adquiridos em emergência',
      valor: 45.00,
      data: Date.now() - 3600000 * 5,
      fotos: [],
      status: 'Pendente',
      criadoEm: Date.now() - 3600000 * 5,
    }
  ]);

  // 5. Estado do Editor Dinâmico de Checklists
  const [checklistTemplates, setChecklistTemplates] = useState<TemplateChecklist[]>(DEFAULT_CHECKLIST_TEMPLATES);
  const [novoItemDesc, setNovoItemDesc] = useState('');
  const [novoItemRequerFoto, setNovoItemRequerFoto] = useState(true);
  const [selectedTemplateForEdit, setSelectedTemplateForEdit] = useState<string>('tpl_instalacao');

  // Feedback banner
  const [actionSuccessMsg, setActionSuccessMsg] = useState('');

  const showSuccess = (msg: string) => {
    setActionSuccessMsg(msg);
    setTimeout(() => setActionSuccessMsg(''), 3500);
  };

  // Envio de mensagem no chat
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsgText.trim()) return;

    const sent = enviarMensagemChat(
      activeChannelId,
      adminUser.id,
      adminUser.nome,
      'admin',
      newMsgText.trim()
    );

    setChatMessages(prev => [...prev, sent]);
    setNewMsgText('');
  };

  // Alterna o canal de chat
  const handleSelectChannel = (canalId: string, title: string) => {
    setActiveChannelId(canalId);
    setChannelTitle(title);
    setChatMessages(getMensagensChat(canalId));
    setActiveTab('chat');
  };

  // Cadastrar novo técnico contratado
  const handleCreateTecnico = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tecNome.trim() || !tecTel.trim() || !tecRegistro.trim()) return;

    const newTec: TecnicoContratado = {
      id: `tec_${Date.now()}`,
      nome: tecNome.trim(),
      telefoneWhatsApp: tecTel.replace(/\D/g, ''),
      email: tecEmail.trim() || 'tecnico@outfire.com.br',
      registro: tecRegistro.trim(),
      regiao: tecRegiao.trim() || 'São Paulo e Região',
      especialidade: tecEspecialidade.trim() || 'Instalador Mecânico Tubulação Inox',
      status: 'disponivel',
      fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
      obrasAtribuidasQtd: 0
    };

    saveTecnicoContratado(newTec);
    setTecnicos(getTecnicosContratados());
    setShowNewTecnicoModal(false);
    setTecNome('');
    setTecTel('');
    setTecEmail('');
    setTecRegistro('');
    setTecRegiao('');
    setTecEspecialidade('');
    showSuccess(`Técnico ${newTec.nome} cadastrado com sucesso!`);
  };

  // Atribuir técnico à obra
  const handleAssignTecnico = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedObraForAssignment || !assignTecId) return;

    const tec = tecnicos.find(t => t.id === assignTecId);
    if (!tec) return;

    const updated = atribuirTecnicoAObra(
      selectedObraForAssignment.id,
      tec,
      assignData,
      assignTurno
    );

    setObras(getObrasDoCliente());
    setSelectedObraForAssignment(null);
    showSuccess(`Técnico ${tec.nome} alocado com sucesso para a obra ${updated.nomeLoja}!`);
  };

  // Aprovação do checklist
  const handleApproveChecklist = (obra: ObraItem) => {
    const defaultTec = tecnicos[0];
    const updated = atribuirTecnicoAObra(
      obra.id,
      defaultTec,
      '28 de Outubro de 2026',
      'Manhã (07h30 às 11h30)'
    );

    if (updated.checklist) {
      updated.checklist.status = 'aprovado_engenharia';
      updated.checklist.parecerEngenharia = 'Checklist civil e eletromecânico aprovado pelo Eng. Robson. Técnico alocado com kit completo.';
      updated.checklist.aprovadoEm = new Date().toISOString();
    }
    saveObra(updated);
    setObras(getObrasDoCliente());
    showSuccess(`Checklist da obra ${obra.nomeLoja} aprovado! Técnico ${defaultTec.nome} notificado.`);
  };

  return (
    <div className="min-h-[85vh] bg-[#07090c] text-slate-100 flex flex-col font-sans">
      
      {/* 1. TOP ADMIN BAR */}
      <div className="bg-[#0b0e14] border-b border-amber-500/30 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#d4af37] via-[#f3e5ab] to-[#b89628] p-[2px] shadow-glow-gold shrink-0">
              <div className="w-full h-full rounded-2xl bg-[#0e1014] flex items-center justify-center">
                <HardHat className="w-6 h-6 text-[#d4af37]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-white">Painel da Engenharia & Administração Outfire</h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-[#f3e5ab] border border-amber-500/30 font-bold">
                  MASTER ADMIN
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Diretor Técnico: <strong className="text-white">{adminUser.nome}</strong> • Controle Geral de Obras, Clientes e Técnicos
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {onSwitchToClientMode && (
              <button
                onClick={onSwitchToClientMode}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 flex items-center gap-1.5 transition-all"
              >
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span>Alternar para Visão do Cliente</span>
              </button>
            )}

            <button
              onClick={onLogout}
              className="px-3 py-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-300 border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sair</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. TAB NAVIGATION */}
      <div className="border-b border-white/10 bg-[#090b10] px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex overflow-x-auto no-scrollbar gap-2 py-2.5">
          {[
            { key: 'obras', label: 'Obras & Clientes', icon: Building2, count: obras.length },
            { key: 'catalogo', label: 'Catálogo da Loja & Preços', icon: Tag, count: produtosCatalogo.length },
            { key: 'leads', label: 'Leads & Prospecção B2B', icon: Users, count: crmLeads.length, badge: leadsNovosCount, highlight: leadsNovosCount > 0 },
            { key: 'vendas', label: 'Vendas da Loja & Centrais', icon: ShoppingBag, count: vendas.length },
            { key: 'tecnicos', label: 'Técnicos & Campo', icon: HardHat, count: tecnicos.length },
            { key: 'checklists', label: 'Aprovação Checklists', icon: CheckCircle2, badge: obras.filter(o => o.checklist?.status === 'em_analise' || o.checklist?.status === 'pendente').length },
            { key: 'frota', label: 'Frota & Veículos', icon: Truck, count: veiculos.length },
            { key: 'ferramentas', label: 'Ferramentas & Patrimônio', icon: Wrench, count: ferramentas.length },
            { key: 'despesas', label: 'Aprovação de Despesas', icon: Receipt, badge: despesasTecnicos.filter(d => d.status === 'Pendente').length },
            { key: 'editor_checklists', label: 'Editor de Checklists', icon: Sliders },
            { key: 'chat', label: 'Chat Unificado', icon: MessageSquare, highlight: true }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as AdminTab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black shadow-glow-gold'
                    : tab.highlight
                    ? 'bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 border border-emerald-500/30'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : tab.highlight ? 'text-emerald-400' : 'opacity-80'}`} />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-gray-300'}`}>
                    {tab.count}
                  </span>
                )}
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500 text-black font-extrabold animate-pulse">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Success Alert */}
      {actionSuccessMsg && (
        <div className="bg-emerald-950/80 border-b border-emerald-500/40 p-3 text-center text-xs font-bold text-emerald-300 animate-fadeIn flex items-center justify-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{actionSuccessMsg}</span>
        </div>
      )}

      {/* 3. TAB CONTENT */}
      <div className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-8">
        
        {/* ================= TAB 1: GESTÃO DE OBRAS & CLIENTES ================= */}
        {activeTab === 'obras' && (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-amber-400" />
                  <span>Obras de Instalação em Andamento ({obras.length})</span>
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Acompanhe a prontidão da cozinha, alocação de instaladores e emissão de laudos de cada cliente.
                </p>
              </div>

              <button
                onClick={() => {
                  handleSelectChannel('obra_fasano_jardins_01', 'Parrilla Fasano (Cliente Marcelo)');
                }}
                className="px-4 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-[#f3e5ab] text-xs font-bold flex items-center gap-2 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>Abrir Chat com Clientes</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {obras.map(obra => (
                <div key={obra.id} className="p-6 rounded-3xl bg-[#0e1014] border border-amber-500/20 shadow-lg flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-amber-500/50 transition-all">
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-base font-black text-white">{obra.nomeLoja}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300 font-bold">
                        {obra.codigoObra}
                      </span>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-[#f3e5ab] border border-amber-500/30 font-bold">
                        {obra.statusLabel}
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{obra.endereco} — {obra.cidade}/{obra.uf}</span>
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300 pt-1">
                      <span>Sistema: <strong className="text-white">{obra.especificacoes.centralModelo}</strong></span>
                      <span>•</span>
                      <span>Duto: <strong className="text-white">{obra.especificacoes.dutoMetros}m</strong></span>
                      <span>•</span>
                      <span>Coifas: <strong className="text-white">{obra.especificacoes.coifasQtd} un</strong></span>
                      <span>•</span>
                      <span>Técnico: <strong className="text-amber-400">{obra.tecnico?.nome || 'Pendente de Atribuição'}</strong></span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                    <button
                      onClick={() => setSelectedObraForAssignment(obra)}
                      className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-200 flex items-center gap-1.5 transition-all"
                    >
                      <HardHat className="w-3.5 h-3.5 text-amber-400" />
                      <span>Alocar Técnico</span>
                    </button>

                    <button
                      onClick={() => handleSelectChannel(obra.id, `${obra.nomeLoja} (Cliente)`)}
                      className="px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-1.5 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Conversar com Cliente</span>
                    </button>

                    <a
                      href={`https://wa.me/5511987654321?text=Ol%C3%A1%2C%20aqui%20%C3%A9%20o%20Eng.%20Robson%20da%20Outfire%20sobre%20a%20obra%20${encodeURIComponent(obra.nomeLoja)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 hover:bg-emerald-600 text-gray-300 hover:text-white transition-all"
                      title="Chamar no WhatsApp"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* ================= TAB: GESTÃO DO CATÁLOGO DE PRODUTOS ================= */}
        {activeTab === 'catalogo' && (
          <div className="animate-fadeIn">
            <CatalogManager />
          </div>
        )}

        {/* ================= TAB: LEADS DO SITE & PROSPECÇÃO B2B ================= */}
        {activeTab === 'leads' && (
          <div className="animate-fadeIn">
            <LeadsManager />
          </div>
        )}

        {/* ================= TAB 2: TÉCNICOS CONTRATADOS & INSTALADORES ================= */}
        {activeTab === 'tecnicos' && (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <HardHat className="w-5 h-5 text-amber-400" />
                  <span>Quadro de Técnicos e Instaladores Credenciados ({tecnicos.length})</span>
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Gerencie os técnicos contratados, despache ordens de serviço e mantenha contato direto em tempo real.
                </p>
              </div>

              <button
                onClick={() => setShowNewTecnicoModal(true)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black text-xs font-bold flex items-center gap-1.5 shadow-glow-gold hover:scale-105 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Cadastrar Novo Técnico</span>
              </button>
            </div>

            {/* PAINEL EXECUTIVO: GESTÃO DE SENHAS OPERACIONAIS */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#12151e] to-[#0c0e15] border border-[#d4af37]/40 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                    <KeyRound className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Gestão de Senhas de Acesso Operacional (#ops)</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
                        Criptografia Ativa
                      </span>
                    </h4>
                    <p className="text-[11px] text-gray-400">
                      Configure a senha que os técnicos de campo usam no aplicativo e gerencie a senha mestra da Engenharia Chefe.
                    </p>
                  </div>
                </div>

                <div className="text-[11px] text-gray-400 font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span>Senhas 100% ocultadas na tela de login público</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {/* CARD 1: SENHA DO TÉCNICO DE CAMPO */}
                <div className="p-4 rounded-2xl bg-[#090b10] border border-emerald-500/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Senha de Acesso dos Técnicos
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-mono font-bold">
                      Acesso aos Checklists & OS
                    </span>
                  </div>

                  <p className="text-[11px] text-gray-400">
                    Defina a senha que a equipe técnica usará para entrar no portal móvel e registrar vistorias.
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <input
                        type={showTechPinInput ? 'text' : 'password'}
                        value={tempTechPin}
                        onChange={(e) => setTempTechPin(e.target.value)}
                        placeholder="Ex: 2468"
                        className="w-full bg-black/60 border border-emerald-500/40 rounded-xl px-3 py-2 text-sm font-mono text-emerald-300 focus:outline-none focus:border-emerald-400"
                      />
                      <button
                        type="button"
                        onClick={() => setShowTechPinInput(!showTechPinInput)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                        title={showTechPinInput ? 'Ocultar' : 'Ver'}
                      >
                        {showTechPinInput ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={handleSaveTechPin}
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1 cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Salvar</span>
                    </button>
                  </div>

                  {feedbackTech && (
                    <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{feedbackTech}</span>
                    </p>
                  )}

                  <div className="pt-2 border-t border-white/5 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={handleShareTechPinWhatsApp}
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Enviar aos Técnicos via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(tempTechPin || techPin);
                        setFeedbackTech('Senha copiada com sucesso!');
                        setTimeout(() => setFeedbackTech(null), 3000);
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copiar Senha</span>
                    </button>
                  </div>
                </div>

                {/* CARD 2: SENHA DO ADMINISTRADOR (ENGENHARIA CHEFE) */}
                <div className="p-4 rounded-2xl bg-[#090b10] border border-[#d4af37]/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Senha Mestra Admin (Engenharia Chefe)
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-[#f3e5ab] font-mono font-bold">
                      Acesso Total Irrestrito
                    </span>
                  </div>

                  <p className="text-[11px] text-gray-400">
                    Senha mestra para acesso total ao CRM, Leads, Clientes, Obras e Gestão de Senhas.
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <input
                        type={showAdminPinInput ? 'text' : 'password'}
                        value={tempAdminPin}
                        onChange={(e) => setTempAdminPin(e.target.value)}
                        placeholder="Ex: 864173"
                        className="w-full bg-black/60 border border-[#d4af37]/40 rounded-xl px-3 py-2 text-sm font-mono text-[#f3e5ab] focus:outline-none focus:border-[#d4af37]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowAdminPinInput(!showAdminPinInput)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                        title={showAdminPinInput ? 'Ocultar' : 'Ver'}
                      >
                        {showAdminPinInput ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={handleSaveAdminPin}
                      className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black text-xs font-bold transition-all shadow-glow-gold flex items-center gap-1 cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Salvar</span>
                    </button>
                  </div>

                  {feedbackAdmin && (
                    <p className="text-[11px] text-amber-300 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{feedbackAdmin}</span>
                    </p>
                  )}

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                    <span>Senha atual ativa: {showAdminPinInput ? (tempAdminPin || adminPin) : '••••••'}</span>
                    <button
                      type="button"
                      onClick={() => {
                        setTempAdminPin('864173');
                        setAdminPin('864173');
                        setFeedbackAdmin('Senha restaurada para a oficial: 864173');
                        setTimeout(() => setFeedbackAdmin(null), 3500);
                      }}
                      className="text-gray-400 hover:text-[#d4af37] underline cursor-pointer"
                    >
                      Restaurar padrão (864173)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tecnicos.map(tec => (
                <div key={tec.id} className="p-6 rounded-3xl bg-[#0e1014] border border-white/10 shadow-lg flex flex-col justify-between hover:border-amber-500/30 transition-all">
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold ${
                        tec.status === 'em_obra' 
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                          : tec.status === 'disponivel'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {tec.status === 'em_obra' ? 'EM OBRA' : tec.status === 'disponivel' ? 'DISPONÍVEL' : 'FÉRIAS'}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono">
                        {tec.obrasAtribuidasQtd} obras ativas
                      </span>
                    </div>

                    <div className="flex items-center gap-3.5 mb-4">
                      <img 
                        src={tec.fotoUrl} 
                        alt={tec.nome} 
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-500 shadow-md"
                      />
                      <div>
                        <h4 className="text-base font-bold text-white">{tec.nome}</h4>
                        <p className="text-[11px] text-[#e5c05d] font-mono">{tec.registro}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{tec.especialidade}</p>
                      </div>
                    </div>

                    <div className="bg-black/40 p-3 rounded-xl border border-white/5 space-y-1 text-xs text-gray-300 mb-4">
                      <p className="text-gray-400 text-[11px]">Região de Atuação:</p>
                      <strong className="text-white block">{tec.regiao}</strong>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <button
                      onClick={() => handleSelectChannel(tec.id, `Técnico ${tec.nome}`)}
                      className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Conversar no Chat Interno</span>
                    </button>

                    <a
                      href={`https://wa.me/${tec.telefoneWhatsApp}?text=Ol%C3%A1%20${encodeURIComponent(tec.nome)}%2C%20aqui%20%C3%A9%20o%20Eng.%20Robson%20da%20Outfire.%20Seguem%20as%20instru%C3%A7%C3%B5es%20da%20pr%C3%B3xima%20obra.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Chamar Técnico no WhatsApp</span>
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* ================= TAB 3: APROVAÇÃO DE CHECKLISTS ================= */}
        {activeTab === 'checklists' && (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="pb-4 border-b border-white/10">
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
                <span>Análise e Validação Técnica de Checklists de Cozinhas</span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Avalie os dados de duto, coifa, quadro 220V e portas de inspeção preenchidos pelos clientes antes de aprovar a viagem do instalador.
              </p>
            </div>

            <div className="space-y-6">
              {obras.map(obra => {
                const chk = obra.checklist;
                if (!chk) return null;

                return (
                  <div key={obra.id} className="p-6 sm:p-8 rounded-3xl bg-[#0e1014] border border-amber-500/30 shadow-xl space-y-6">
                    
                    {/* Header da Obra no Checklist */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
                          Checklist de Instalação • {obra.codigoObra}
                        </span>
                        <h4 className="text-lg font-black text-white">{obra.nomeLoja}</h4>
                        <p className="text-xs text-gray-400">{obra.endereco} ({obra.cidade}/{obra.uf})</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-3 py-1 rounded-full font-bold border ${
                          chk.status === 'aprovado_engenharia'
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                        }`}>
                          {chk.status === 'aprovado_engenharia' ? 'Aprovado pela Engenharia' : 'Aguardando Aprovação'}
                        </span>

                        {chk.status !== 'aprovado_engenharia' && (
                          <button
                            onClick={() => handleApproveChecklist(obra)}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg transition-all"
                          >
                            <Check className="w-4 h-4 stroke-[3]" />
                            <span>Aprovar Checklist & Agendar Técnico</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Os Requisitos Respondidos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                      <div className={`p-3.5 rounded-xl border ${chk.dutoPronto ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-red-950/20 border-red-500/30 text-red-300'}`}>
                        <strong>1. Duto de Exaustão:</strong>
                        <p className="text-white mt-1">{chk.dutoPronto ? 'Solda estanque concluída' : 'Pendente de solda'}</p>
                      </div>

                      <div className={`p-3.5 rounded-xl border ${chk.coifaInstalada ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-red-950/20 border-red-500/30 text-red-300'}`}>
                        <strong>2. Coifa Industrial:</strong>
                        <p className="text-white mt-1">{chk.coifaInstalada ? 'Chumbada e nivelada' : 'Não fixada'}</p>
                      </div>

                      <div className={`p-3.5 rounded-xl border ${chk.painelEletrico220v ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-red-950/20 border-red-500/30 text-red-300'}`}>
                        <strong>3. Ponto Elétrico 220V:</strong>
                        <p className="text-white mt-1">{chk.painelEletrico220v ? 'Tomada com aterramento OK' : 'Sem alimentação'}</p>
                      </div>

                      <div className={`p-3.5 rounded-xl border ${chk.portasInspecaoDutos ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-red-950/20 border-red-500/30 text-red-300'}`}>
                        <strong>4. Portas de Inspeção:</strong>
                        <p className="text-white mt-1">{chk.portasInspecaoDutos ? 'Instaladas conforme NBR 14518' : 'Sem portas nas curvas'}</p>
                      </div>
                    </div>

                    {/* Parecer do Engenheiro */}
                    {chk.parecerEngenharia && (
                      <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-gray-300">
                        <span className="text-amber-400 font-bold block mb-1">Parecer da Engenharia Outfire:</span>
                        <p>{chk.parecerEngenharia}</p>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* ================= TAB 4: CENTRAL UNIFICADA DE CHAT ================= */}
        {activeTab === 'chat' && (
          <div className="h-[68vh] rounded-3xl bg-[#0c0f16] border border-amber-500/30 shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fadeIn">
            
            {/* Sidebar: Lista de Conversas (Clientes & Técnicos) */}
            <div className="w-full md:w-80 border-r border-white/10 bg-[#08090b] flex flex-col shrink-0">
              <div className="p-4 border-b border-white/10">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>Canais de Comunicação</span>
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Selecione para conversar</p>
              </div>

              <div className="overflow-y-auto flex-1 p-2 space-y-1">
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase text-gray-500 font-bold">
                  Restaurantes / Clientes
                </div>
                {obras.map(obra => (
                  <button
                    key={obra.id}
                    onClick={() => {
                      setActiveChannelId(obra.id);
                      setChannelTitle(`${obra.nomeLoja} (Cliente)`);
                      setChatMessages(getMensagensChat(obra.id));
                    }}
                    className={`w-full text-left p-3 rounded-xl text-xs transition-all flex items-center justify-between ${
                      activeChannelId === obra.id 
                        ? 'bg-amber-500/20 text-[#f3e5ab] font-bold border border-amber-500/30' 
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="truncate">
                      <p className="truncate font-semibold">{obra.nomeLoja}</p>
                      <span className="text-[10px] text-gray-400">{obra.codigoObra}</span>
                    </div>
                  </button>
                ))}

                <div className="px-3 pt-3 pb-1.5 text-[10px] font-mono uppercase text-gray-500 font-bold">
                  Técnicos Contratados em Campo
                </div>
                {tecnicos.map(tec => (
                  <button
                    key={tec.id}
                    onClick={() => {
                      setActiveChannelId(tec.id);
                      setChannelTitle(`Técnico ${tec.nome} (${tec.registro})`);
                      setChatMessages(getMensagensChat(tec.id));
                    }}
                    className={`w-full text-left p-3 rounded-xl text-xs transition-all flex items-center justify-between ${
                      activeChannelId === tec.id 
                        ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30' 
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="truncate">
                      <p className="truncate font-semibold">{tec.nome}</p>
                      <span className="text-[10px] text-gray-400">{tec.regiao}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Body & Messages */}
            <div className="flex-1 flex flex-col justify-between bg-[#0e1014]">
              
              {/* Chat Header */}
              <div className="p-4 border-b border-white/10 bg-[#0b0e14] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{channelTitle}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </h4>
                  <p className="text-[11px] text-gray-400">Canal direto criptografado com a Engenharia Central Outfire</p>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {chatMessages.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-xs text-gray-500">
                    Nenhuma mensagem anterior neste canal. Envie a primeira mensagem abaixo!
                  </div>
                ) : (
                  chatMessages.map(msg => {
                    const isAdmin = msg.remetenteTipo === 'admin';
                    return (
                      <div 
                        key={msg.id} 
                        className={`flex flex-col ${isAdmin ? 'items-end' : 'items-start'}`}
                      >
                        <div className="text-[10px] font-mono text-gray-400 mb-1 flex items-center gap-1.5">
                          <strong>{msg.remetenteNome}</strong>
                          <span>• {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <div className={`p-3.5 rounded-2xl text-xs max-w-lg leading-relaxed shadow-md ${
                          isAdmin 
                            ? 'bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black font-semibold' 
                            : 'bg-white/10 text-white border border-white/10'
                        }`}>
                          {msg.texto}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-[#090b10] flex items-center gap-2">
                <input
                  type="text"
                  placeholder={`Digite sua mensagem para ${channelTitle}...`}
                  value={newMsgText}
                  onChange={(e) => setNewMsgText(e.target.value)}
                  className="flex-1 bg-[#131622] border border-white/10 text-white text-xs rounded-xl px-4 py-3 outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  disabled={!newMsgText.trim()}
                  className="p-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black hover:scale-105 transition-all shadow-glow-gold disabled:opacity-40 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 5: VENDAS DA LOJA DO SITE & CENTRAIS                       */}
        {/* ============================================================== */}
        {activeTab === 'vendas' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
                  <span>Controle de Vendas da Loja & Centrais VTS</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Acompanhamento em tempo real dos pedidos recebidos através do site e WhatsApp
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-3 rounded-2xl bg-black/40 border border-[#d4af37]/30 text-right">
                  <span className="text-[10px] text-gray-400 font-mono block">FATURAMENTO TOTAL</span>
                  <span className="text-base font-black text-[#f3e5ab] font-mono">
                    R$ {vendas.reduce((acc, v) => acc + v.valorTotal, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>

            {/* Grid de KPIs de Vendas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#0e121a] border border-white/10">
                <span className="text-xs text-gray-400 font-mono block">TOTAL DE PEDIDOS</span>
                <span className="text-xl font-black text-white mt-1 block">{vendas.length} pedidos</span>
                <span className="text-[11px] text-emerald-400 font-medium">100% integrados à Engenharia</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0e121a] border border-white/10">
                <span className="text-xs text-gray-400 font-mono block">TICKET MÉDIO</span>
                <span className="text-xl font-black text-[#d4af37] mt-1 block">
                  R$ {(vendas.reduce((acc, v) => acc + v.valorTotal, 0) / (vendas.length || 1)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
                <span className="text-[11px] text-gray-400 font-medium">Centrais VTS + Kits Inox</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0e121a] border border-white/10">
                <span className="text-xs text-gray-400 font-mono block">FORMA PRINCIPAL</span>
                <span className="text-xl font-black text-emerald-400 mt-1 block">PIX & Boleto</span>
                <span className="text-[11px] text-gray-400 font-medium">Cotação via WhatsApp de Vendas</span>
              </div>
            </div>

            {/* Tabela de Vendas */}
            <div className="rounded-2xl border border-white/10 bg-[#0c0f16] overflow-hidden shadow-xl">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Histórico de Pedidos</span>
                <span className="text-xs text-gray-400">Atualizado automaticamente</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#08090b] text-gray-400 font-mono uppercase text-[10px] border-b border-white/10">
                    <tr>
                      <th className="p-3.5">Produto / Descrição</th>
                      <th className="p-3.5">Cliente</th>
                      <th className="p-3.5">Qtd</th>
                      <th className="p-3.5">Total (R$)</th>
                      <th className="p-3.5">Pagamento</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5 text-right">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {vendas.map((v) => (
                      <tr key={v.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 font-semibold text-white">
                          <div>{v.produtoNome}</div>
                          <span className="text-[10px] text-gray-500 font-mono">ID: {v.id}</span>
                        </td>
                        <td className="p-3.5 text-gray-300">
                          <div>{v.clienteNome || 'Cliente Direto'}</div>
                          <span className="text-[10px] text-gray-500">{v.clienteTelefone}</span>
                        </td>
                        <td className="p-3.5 text-white font-mono">{v.quantidade}</td>
                        <td className="p-3.5 font-bold text-[#f3e5ab] font-mono">
                          R$ {v.valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </td>
                        <td className="p-3.5">
                          <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] font-mono">
                            {v.formaPagamento}
                          </span>
                        </td>
                        <td className="p-3.5">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            v.status === 'Confirmada'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : v.status === 'Entregue'
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}>
                            {v.status}
                          </span>
                        </td>
                        <td className="p-3.5 text-right">
                          <button
                            type="button"
                            onClick={() => showSuccess(`Comprovante fiscal da venda ${v.id} emitido.`)}
                            className="text-xs text-[#d4af37] hover:underline font-semibold"
                          >
                            Nota / Recibo
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 6: FROTA & VEÍCULOS                                        */}
        {/* ============================================================== */}
        {activeTab === 'frota' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#d4af37]" />
                  <span>Controle de Frota & Logística de Deslocamento</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Baseado no módulo do Outfire ERP — controle de quilometragem e veículos alocados
                </p>
              </div>

              <button
                type="button"
                onClick={() => showSuccess('Módulo de cadastro de novo veículo aberto.')}
                className="py-2 px-3.5 rounded-xl bg-[#d4af37] text-black font-bold text-xs flex items-center gap-1.5 shadow-glow-gold"
              >
                <Plus className="w-4 h-4" />
                <span>Adicionar Veículo</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {veiculos.map((v) => (
                <div key={v.id} className="p-5 rounded-2xl bg-[#0e121a] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="px-2.5 py-1 rounded-lg bg-black border border-white/20 font-mono font-black text-xs text-white tracking-widest">
                        {v.placa}
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        v.status === 'Em Uso'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {v.status}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 font-mono">
                      KM: <strong className="text-white">{v.kmAtual.toLocaleString('pt-BR')} km</strong>
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white">{v.modelo}</h4>
                    <span className="text-xs text-gray-400 block mt-0.5">
                      Condutor: <strong className="text-gray-200">{v.responsavelNome}</strong>
                    </span>
                    {v.observacoes && (
                      <p className="text-[11px] text-gray-500 mt-1 italic">{v.observacoes}</p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        const novoKm = prompt(`Atualizar KM do veículo ${v.placa}:`, String(v.kmAtual));
                        if (novoKm && !isNaN(Number(novoKm))) {
                          setVeiculos(veiculos.map(item => item.id === v.id ? { ...item, kmAtual: Number(novoKm) } : item));
                          showSuccess(`KM do veículo ${v.placa} atualizado para ${novoKm} km.`);
                        }
                      }}
                      className="text-[#d4af37] font-semibold hover:underline"
                    >
                      Atualizar Odômetro
                    </button>
                    <span className="text-[11px] text-gray-400">Revisão NBR 14518 OK</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 7: FERRAMENTAS & PATRIMÔNIO                                */}
        {/* ============================================================== */}
        {activeTab === 'ferramentas' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-[#d4af37]" />
                  <span>Controle de Ferramentas & Cautelas Técnicas</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Baseado no FerramentasView do ERP — patrimônio e cautelas assinadas digitalmente
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-black/40 border border-[#d4af37]/30 text-right">
                <span className="text-[10px] text-gray-400 font-mono block">VALOR PATRIMONIAL TOTAL</span>
                <span className="text-base font-black text-[#f3e5ab] font-mono">
                  R$ {ferramentas.reduce((acc, f) => acc + (f.valorAquisicao || 0), 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0c0f16] overflow-hidden shadow-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#08090b] text-gray-400 font-mono uppercase text-[10px] border-b border-white/10">
                  <tr>
                    <th className="p-3.5">Ferramenta / Equipamento</th>
                    <th className="p-3.5">Nº Patrimônio</th>
                    <th className="p-3.5">Responsável / Cautela</th>
                    <th className="p-3.5">Valor (R$)</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5 text-right">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {ferramentas.map((f) => (
                    <tr key={f.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-3.5 font-bold text-white">{f.nome}</td>
                      <td className="p-3.5 font-mono text-[#d4af37]">{f.numeroPatrimonio}</td>
                      <td className="p-3.5 text-gray-300">{f.tecnicoResponsavelNome}</td>
                      <td className="p-3.5 font-mono text-gray-200">
                        R$ {(f.valorAquisicao || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="p-3.5">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          f.status === 'Disponível'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}>
                          {f.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-right">
                        <button
                          type="button"
                          onClick={() => showSuccess(`Termo de Cautela de ${f.nome} emitido.`)}
                          className="text-xs text-[#d4af37] hover:underline font-semibold"
                        >
                          Ver Cautela
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 8: APROVAÇÃO DE DESPESAS                                   */}
        {/* ============================================================== */}
        {activeTab === 'despesas' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-[#d4af37]" />
                  <span>Aprovação de Despesas dos Técnicos</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Comprovantes e notas fiscais enviadas via smartphone pelos técnicos de campo
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-black/40 border border-emerald-500/30 text-right">
                <span className="text-[10px] text-gray-400 font-mono block">TOTAL PENDENTE DE REEMBOLSO</span>
                <span className="text-base font-black text-emerald-400 font-mono">
                  R$ {despesasTecnicos.filter(d => d.status === 'Pendente').reduce((acc, d) => acc + d.valor, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {despesasTecnicos.map((desp) => (
                <div key={desp.id} className="p-4 rounded-2xl bg-[#0e121a] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-white">{desp.descricao}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        desp.status === 'Aprovada'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}>
                        {desp.status}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 block font-mono">
                      Técnico: <strong className="text-gray-200">{desp.tecnicoNome}</strong> • Categoria: {desp.categoria} • Obra: {desp.obraCliente}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-base font-black text-[#f3e5ab] font-mono">
                      R$ {desp.valor.toFixed(2)}
                    </span>
                    {desp.status === 'Pendente' && (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setDespesasTecnicos(despesasTecnicos.map(item => item.id === desp.id ? { ...item, status: 'Aprovada' } : item));
                            showSuccess(`Despesa de R$ ${desp.valor.toFixed(2)} aprovada para reembolso.`);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
                        >
                          Aprovar
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setDespesasTecnicos(despesasTecnicos.map(item => item.id === desp.id ? { ...item, status: 'Rejeitada' } : item));
                            showSuccess(`Despesa de R$ ${desp.valor.toFixed(2)} rejeitada.`);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 border border-red-500/30 text-red-300 text-xs font-bold transition-all"
                        >
                          Rejeitar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 9: EDITOR DINÂMICO DE CHECKLISTS                           */}
        {/* ============================================================== */}
        {activeTab === 'editor_checklists' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-[#d4af37]" />
                  <span>Editor Dinâmico de Checklists de Campo</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Crie e personalize perguntas e itens com fotos obrigatórias para os técnicos no celular
                </p>
              </div>

              {/* Seletor de Modelo */}
              <div className="flex items-center gap-2">
                <select
                  value={selectedTemplateForEdit}
                  onChange={(e) => setSelectedTemplateForEdit(e.target.value)}
                  className="bg-[#121622] border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-bold rounded-xl px-3 py-2 outline-none"
                >
                  {checklistTemplates.map(t => (
                    <option key={t.id} value={t.id}>{t.nome}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Adicionar novo item */}
            <div className="p-4 rounded-2xl bg-[#0e121a] border border-white/10 space-y-3">
              <span className="text-xs font-bold text-white block">Adicionar Pergunta / Item ao Modelo</span>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Ex: Verificar vedação da junta elástica de exaustão..."
                  value={novoItemDesc}
                  onChange={(e) => setNovoItemDesc(e.target.value)}
                  className="flex-1 bg-[#131622] border border-white/10 text-white text-xs rounded-xl px-3.5 py-2.5 outline-none focus:border-amber-400"
                />
                <label className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={novoItemRequerFoto}
                    onChange={(e) => setNovoItemRequerFoto(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 accent-amber-500"
                  />
                  <span>Requer Foto</span>
                </label>
                <button
                  type="button"
                  onClick={() => {
                    if (!novoItemDesc.trim()) return;
                    setChecklistTemplates(checklistTemplates.map(tpl => {
                      if (tpl.id === selectedTemplateForEdit) {
                        return {
                          ...tpl,
                          itens: [
                            ...tpl.itens,
                            {
                              id: `item_${Date.now()}`,
                              descricao: novoItemDesc.trim(),
                              requerFoto: novoItemRequerFoto,
                              ordem: tpl.itens.length + 1,
                            }
                          ]
                        };
                      }
                      return tpl;
                    }));
                    setNovoItemDesc('');
                    showSuccess('Item adicionado ao modelo com sucesso!');
                  }}
                  className="py-2.5 px-4 rounded-xl bg-[#d4af37] text-black font-bold text-xs shadow-glow-gold hover:bg-[#e5c05d] transition-all"
                >
                  + Adicionar Item
                </button>
              </div>
            </div>

            {/* Lista dos Itens do Modelo Atual */}
            <div className="space-y-2.5">
              {checklistTemplates.find(t => t.id === selectedTemplateForEdit)?.itens.map((item, idx) => (
                <div key={item.id} className="p-3.5 rounded-2xl bg-[#0c0f16] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-black text-[#d4af37] font-mono font-bold text-xs flex items-center justify-center border border-white/10">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-gray-200">{item.descricao}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.requerFoto && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                        📷 Foto Obrigatória
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setChecklistTemplates(checklistTemplates.map(tpl => {
                          if (tpl.id === selectedTemplateForEdit) {
                            return {
                              ...tpl,
                              itens: tpl.itens.filter(i => i.id !== item.id)
                            };
                          }
                          return tpl;
                        }));
                        showSuccess('Item removido do checklist.');
                      }}
                      className="p-1 rounded-lg text-gray-500 hover:text-red-400 hover:bg-white/5 transition-colors"
                      title="Remover item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ================= MODAL: CADASTRAR NOVO TÉCNICO ================= */}
      {showNewTecnicoModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1014] border border-amber-500/30 rounded-3xl max-w-lg w-full p-6 shadow-2xl animate-scaleIn">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <HardHat className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Cadastrar Técnico Contratado / Instalador</h3>
              </div>
              <button 
                onClick={() => setShowNewTecnicoModal(false)}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateTecnico} className="py-4 space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-gray-300 block mb-1">Nome Completo do Técnico *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo Nogueira"
                  value={tecNome}
                  onChange={(e) => setTecNome(e.target.value)}
                  className="w-full bg-[#131622] border border-white/10 text-white rounded-xl px-3 py-2.5 outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-300 block mb-1">WhatsApp com DDD *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 98765-4321"
                    value={tecTel}
                    onChange={(e) => setTecTel(e.target.value)}
                    className="w-full bg-[#131622] border border-white/10 text-white rounded-xl px-3 py-2.5 outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-300 block mb-1">Registro CREA / CFT *</label>
                  <input
                    type="text"
                    required
                    placeholder="CFT-SP: 492.180"
                    value={tecRegistro}
                    onChange={(e) => setTecRegistro(e.target.value)}
                    className="w-full bg-[#131622] border border-white/10 text-white rounded-xl px-3 py-2.5 outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-300 block mb-1">Região de Atendimento *</label>
                <input
                  type="text"
                  placeholder="Ex: São Paulo Capital, ABC e Baixada Santista"
                  value={tecRegiao}
                  onChange={(e) => setTecRegiao(e.target.value)}
                  className="w-full bg-[#131622] border border-white/10 text-white rounded-xl px-3 py-2.5 outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="font-bold text-gray-300 block mb-1">Especialidade Principal</label>
                <input
                  type="text"
                  placeholder="Ex: Tubulação de Aço Inox, Bicos e Central VTS"
                  value={tecEspecialidade}
                  onChange={(e) => setTecEspecialidade(e.target.value)}
                  className="w-full bg-[#131622] border border-white/10 text-white rounded-xl px-3 py-2.5 outline-none focus:border-amber-400"
                />
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewTecnicoModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black font-bold shadow-glow-gold"
                >
                  Salvar Técnico
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ALOCAR TÉCNICO A UMA OBRA ================= */}
      {selectedObraForAssignment && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1014] border border-amber-500/30 rounded-3xl max-w-lg w-full p-6 shadow-2xl animate-scaleIn">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <HardHat className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Alocar Técnico para {selectedObraForAssignment.nomeLoja}</h3>
              </div>
              <button 
                onClick={() => setSelectedObraForAssignment(null)}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAssignTecnico} className="py-4 space-y-4 text-xs">
              <div>
                <label className="font-bold text-gray-300 block mb-1">Selecione o Técnico Contratado *</label>
                <select
                  required
                  value={assignTecId}
                  onChange={(e) => setAssignTecId(e.target.value)}
                  className="w-full bg-[#131622] border border-white/10 text-white rounded-xl px-3 py-2.5 outline-none focus:border-amber-400"
                >
                  <option value="">Selecione um técnico da lista...</option>
                  {tecnicos.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.nome} ({t.registro}) — {t.regiao} [{t.status === 'disponivel' ? 'Livre' : 'Em Obra'}]
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-300 block mb-1">Data Agendada da Instalação *</label>
                  <input
                    type="date"
                    required
                    value={assignData}
                    onChange={(e) => setAssignData(e.target.value)}
                    className="w-full bg-[#131622] border border-white/10 text-white rounded-xl px-3 py-2.5 outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-300 block mb-1">Turno / Horário Permitido *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Manhã (07h às 11h)"
                    value={assignTurno}
                    onChange={(e) => setAssignTurno(e.target.value)}
                    className="w-full bg-[#131622] border border-white/10 text-white rounded-xl px-3 py-2.5 outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedObraForAssignment(null)}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={!assignTecId}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold shadow-lg disabled:opacity-40"
                >
                  Confirmar Alocação
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
