import React, { useState } from 'react';
import { 
  Building2, HardHat, MessageSquare, CheckCircle2, 
  AlertTriangle, Clock, Phone, Send, Plus, 
  ShieldCheck, User, Wrench, Download, Upload, 
  Calendar, Check, X, FileText, Sparkles, LogOut, ArrowRight
} from 'lucide-react';
import { 
  ObraItem, TecnicoContratado, MensagemChat, ClientUser 
} from '../../types/clientPortal';
import { 
  getObrasDoCliente, getTecnicosContratados, 
  saveTecnicoContratado, atribuirTecnicoAObra, 
  getMensagensChat, enviarMensagemChat, saveObra 
} from '../../utils/portalStorage';

interface Props {
  adminUser: ClientUser;
  onLogout: () => void;
  onSwitchToClientMode?: () => void;
}

type AdminTab = 'obras' | 'tecnicos' | 'checklists' | 'chat';

export const AdminPortalDashboard: React.FC<Props> = ({ adminUser, onLogout, onSwitchToClientMode }) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('obras');
  const [obras, setObras] = useState<ObraItem[]>(() => getObrasDoCliente());
  const [tecnicos, setTecnicos] = useState<TecnicoContratado[]>(() => getTecnicosContratados());
  
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
            { key: 'obras', label: 'Gestão de Obras & Clientes', icon: Building2, count: obras.length },
            { key: 'tecnicos', label: 'Técnicos Contratados & Instaladores', icon: HardHat, count: tecnicos.length },
            { key: 'checklists', label: 'Aprovação de Checklists', icon: CheckCircle2, badge: obras.filter(o => o.checklist?.status === 'em_analise' || o.checklist?.status === 'pendente').length },
            { key: 'chat', label: 'Central de Conversas (Clientes & Técnicos)', icon: MessageSquare, highlight: true }
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
