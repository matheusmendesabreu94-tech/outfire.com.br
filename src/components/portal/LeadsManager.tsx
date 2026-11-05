import React, { useState } from 'react';
import { 
  Users, Search, Filter, Phone, MessageSquare, Mail, 
  MapPin, Calendar, Clock, DollarSign, Download, Plus, 
  Trash2, Edit3, CheckCircle2, AlertCircle, Building2, 
  Briefcase, Sparkles, Flame, ShieldAlert, ArrowRight, 
  Copy, ExternalLink, Check, ChevronRight, RefreshCw,
  FileText, Eye, Send
} from 'lucide-react';
import { 
  CrmLead, RedeRestauranteShopping, LeadStatus, 
  StatusProspeccao, CategoriaRede 
} from '../../types/crm';
import { 
  useCrmLeads, getShoppingChains, updateLeadStatus, 
  saveCrmLead, deleteCrmLead, updateChainProspectingStatus, 
  exportLeadsToCsv, exportChainsToCsv 
} from '../../utils/crmStorage';
import { PlantaBaixaModal } from './PlantaBaixaModal';
import { ProposalGeneratorModal } from './ProposalGeneratorModal';

export const LeadsManager: React.FC = () => {
  const leads = useCrmLeads();
  const [shoppingChains, setShoppingChains] = useState<RedeRestauranteShopping[]>(getShoppingChains);
  
  // Controle de sub-aba: 'leads_site' ou 'prospeccao_shoppings'
  const [subTab, setSubTab] = useState<'leads_site' | 'prospeccao_shoppings'>('leads_site');

  // Filtros Leads do Site
  const [searchLead, setSearchLead] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('todos');

  // Filtros Prospecção Shoppings
  const [searchChain, setSearchChain] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoriaRede>('Todas');
  const [statusChainFilter, setStatusChainFilter] = useState<string>('todos');

  // Modais e Feedback
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [leadToDelete, setLeadToDelete] = useState<CrmLead | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  // Modais de Planta Baixa e Orçamento Comercial
  const [selectedLeadForPlanta, setSelectedLeadForPlanta] = useState<CrmLead | null>(null);
  const [selectedLeadForProposal, setSelectedLeadForProposal] = useState<CrmLead | null>(null);

  // Modal Novo Lead Manual
  const [showNewLeadModal, setShowNewLeadModal] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    empresa: '',
    cargo: '',
    cidade: '',
    tipoCozinha: '',
    detalhes: '',
    totalPedido: ''
  });

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const copyToClipboard = (text: string, id: string, msg: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast(msg);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Disparar Varredura do Agente IA
  const handleRunAgentScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setShoppingChains(getShoppingChains());
      showToast('Agente B2B: Varredura de escritórios corporativos atualizada com sucesso!');
    }, 1800);
  };

  // Salvar Lead Manual
  const handleSaveManualLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadForm.nome.trim() || !newLeadForm.telefone.trim() || !newLeadForm.empresa.trim()) {
      showToast('Preencha os campos obrigatórios (Nome, Telefone e Empresa/Restaurante).');
      return;
    }

    const lead: CrmLead = {
      id: `lead_manual_${Date.now()}`,
      timestamp: new Date().toISOString(),
      nome: newLeadForm.nome.trim(),
      telefone: newLeadForm.telefone.trim(),
      email: newLeadForm.email.trim(),
      empresa: newLeadForm.empresa.trim(),
      cargo: newLeadForm.cargo.trim(),
      cidade: newLeadForm.cidade.trim(),
      origem: 'manual',
      tipoCozinha: newLeadForm.tipoCozinha.trim(),
      detalhes: newLeadForm.detalhes.trim(),
      totalPedido: newLeadForm.totalPedido ? parseFloat(newLeadForm.totalPedido) : undefined,
      status: 'novo',
      temperatura: 'quente'
    };

    saveCrmLead(lead);
    setShowNewLeadModal(false);
    setNewLeadForm({ nome: '', telefone: '', email: '', empresa: '', cargo: '', cidade: '', tipoCozinha: '', detalhes: '', totalPedido: '' });
    showToast('Lead cadastrado com sucesso no CRM!');
  };

  // Filtragem dos Leads do Site
  const filteredLeads = leads.filter(l => {
    const matchStatus = statusFilter === 'todos' || l.status === statusFilter;
    const term = searchLead.toLowerCase();
    const matchSearch = 
      l.nome.toLowerCase().includes(term) ||
      l.empresa.toLowerCase().includes(term) ||
      l.telefone.includes(term) ||
      (l.cidade && l.cidade.toLowerCase().includes(term));
    return matchStatus && matchSearch;
  });

  // Filtragem das Redes de Shopping
  const filteredChains = shoppingChains.filter(c => {
    const matchCat = categoryFilter === 'Todas' || c.categoria === categoryFilter;
    const matchStatus = statusChainFilter === 'todos' || c.statusProspeccao === statusChainFilter;
    const term = searchChain.toLowerCase();
    const matchSearch = 
      c.nomeRede.toLowerCase().includes(term) ||
      c.grupoEmpresarial.toLowerCase().includes(term) ||
      c.sedeCidadeUF.toLowerCase().includes(term) ||
      c.presencaShoppings.toLowerCase().includes(term);
    return matchCat && matchStatus && matchSearch;
  });

  // Estatísticas Rápidas
  const leadsNovos = leads.filter(l => l.status === 'novo').length;
  const leadsEmContato = leads.filter(l => l.status === 'em_contato').length;
  const leadsProposta = leads.filter(l => l.status === 'proposta_enviada').length;
  const leadsGanhos = leads.filter(l => l.status === 'ganho').length;

  return (
    <div className="space-y-6">

      {/* TOAST NOTIFICATION */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161a24] border border-[#d4af37] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in font-sans text-xs">
          <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
          <span className="font-medium">{toastMsg}</span>
        </div>
      )}

      {/* 1. HEADER & KPI CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        <div className="bg-[#10131a] border border-white/10 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#d4af37] flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono text-gray-400 block">Total de Leads</span>
            <span className="text-xl font-black text-white">{leads.length}</span>
          </div>
        </div>

        <div className="bg-[#10131a] border border-amber-500/30 rounded-2xl p-4 flex items-center gap-3 shadow-glow-gold/10">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-[#f3e5ab] flex items-center justify-center shrink-0 animate-pulse">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono text-amber-300 block font-bold">Novos (Aguardando)</span>
            <span className="text-xl font-black text-[#f3e5ab]">{leadsNovos}</span>
          </div>
        </div>

        <div className="bg-[#10131a] border border-white/10 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono text-gray-400 block">Em Negociação</span>
            <span className="text-xl font-black text-white">{leadsEmContato + leadsProposta}</span>
          </div>
        </div>

        <div className="bg-[#10131a] border border-white/10 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono text-gray-400 block">Vendas Fechadas</span>
            <span className="text-xl font-black text-emerald-400">{leadsGanhos}</span>
          </div>
        </div>

        <div className="bg-[#10131a] border border-purple-500/30 rounded-2xl p-4 flex items-center gap-3 col-span-2 lg:col-span-1">
          <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono text-purple-300 block">Redes Mapeadas</span>
            <span className="text-xl font-black text-white">18 <span className="text-[10px] text-gray-400 font-normal">(+4.5k lojas)</span></span>
          </div>
        </div>
      </div>

      {/* 2. SUB-TABS SELECTOR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div className="flex bg-[#0a0c12] p-1 rounded-2xl border border-white/10 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setSubTab('leads_site')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 justify-center flex-1 sm:flex-initial ${
              subTab === 'leads_site'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black shadow-glow-gold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>📥 Leads Recebidos do Site ({leads.length})</span>
            {leadsNovos > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-red-600 text-white text-[10px] font-bold">
                {leadsNovos}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setSubTab('prospeccao_shoppings')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 justify-center flex-1 sm:flex-initial ${
              subTab === 'prospeccao_shoppings'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black shadow-glow-gold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>🎯 Agente B2B: Redes de Shoppings Brasil</span>
            <span className="ml-1 px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-[10px] font-bold">
              IA Ativa
            </span>
          </button>
        </div>

        {/* Botões de Ação Topo */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          {subTab === 'leads_site' ? (
            <>
              <button
                type="button"
                onClick={() => exportLeadsToCsv(leads)}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 font-bold flex items-center gap-1.5 transition-all"
                title="Exportar planilha de leads para Excel/CSV"
              >
                <Download className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="hidden md:inline">Exportar CSV</span>
              </button>
              <button
                type="button"
                onClick={() => setShowNewLeadModal(true)}
                className="px-4 py-2 rounded-xl bg-[#d4af37] hover:bg-[#e5c05d] text-black text-xs font-extrabold flex items-center gap-1.5 shadow-glow-gold transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Cadastrar Lead</span>
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleRunAgentScan}
                disabled={isScanning}
                className="px-4 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-300 text-xs font-bold flex items-center gap-2 transition-all disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                <span>{isScanning ? 'Varrendo Escritórios...' : 'Atualizar Prospecção IA'}</span>
              </button>
              <button
                type="button"
                onClick={() => exportChainsToCsv(shoppingChains)}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 font-bold flex items-center gap-1.5 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-purple-400" />
                <span>Exportar Redes (CSV)</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* ============================================================== */}
      {/* ABA 1: LEADS RECEBIDOS DO SITE */}
      {/* ============================================================== */}
      {subTab === 'leads_site' && (
        <div className="space-y-4">
          
          {/* Barra de Filtro e Busca */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-[#0d1017] p-3 rounded-2xl border border-white/10">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por nome, restaurante, telefone..."
                value={searchLead}
                onChange={(e) => setSearchLead(e.target.value)}
                className="w-full bg-[#141824] border border-white/10 text-white text-xs rounded-xl pl-9 pr-3 py-2 focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Filtro de Status */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full md:w-auto">
              {[
                { id: 'todos', label: 'Todos' },
                { id: 'novo', label: 'Novos', badge: leadsNovos },
                { id: 'em_contato', label: 'Em Contato' },
                { id: 'proposta_enviada', label: 'Proposta Enviada' },
                { id: 'ganho', label: 'Fechados' },
                { id: 'perdido', label: 'Perdidos' }
              ].map(st => (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setStatusFilter(st.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1 ${
                    statusFilter === st.id
                      ? 'bg-[#d4af37] text-black shadow-glow-gold'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{st.label}</span>
                  {st.badge !== undefined && st.badge > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full bg-red-600 text-white text-[10px]">
                      {st.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Lista de Leads Cards */}
          {filteredLeads.length === 0 ? (
            <div className="p-12 text-center bg-[#0d1017] rounded-3xl border border-white/10 space-y-3">
              <Users className="w-10 h-10 text-gray-600 mx-auto" />
              <h3 className="text-base font-bold text-white">Nenhum lead encontrado com esse filtro</h3>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                Quando os clientes preencherem os formulários de contato, calculadora ou loja, eles aparecerão automaticamente aqui.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredLeads.map(lead => {
                const cleanPhone = lead.telefone.replace(/\D/g, '');
                const waMessage = encodeURIComponent(
                  `Olá ${lead.nome}! Sou da Outfire Engenharia Contra Incêndio. Vi seu contato referente ao ${lead.empresa} e estou entrando em contato para apresentar nossa proposta técnica da Central Outfire VTS para cozinhas.`
                );
                const waUrl = `https://wa.me/55${cleanPhone}?text=${waMessage}`;

                return (
                  <div 
                    key={lead.id}
                    className="bg-[#0f131c] rounded-3xl border border-white/10 hover:border-[#d4af37]/50 p-5 transition-all shadow-lg flex flex-col md:flex-row gap-5 justify-between items-start"
                  >
                    {/* Coluna 1: Informações Principais do Restaurante e Responsável */}
                    <div className="space-y-3 flex-1">
                      
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-base font-black text-white">{lead.nome}</span>
                        {lead.cargo && (
                          <span className="text-xs text-gray-400 font-medium">({lead.cargo})</span>
                        )}
                        <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f3e5ab] text-xs font-bold flex items-center gap-1">
                          <Building2 className="w-3 h-3 text-[#d4af37]" />
                          <span>{lead.empresa}</span>
                        </span>

                        {/* Status Badge */}
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          lead.status === 'novo' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse' :
                          lead.status === 'em_contato' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' :
                          lead.status === 'proposta_enviada' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' :
                          lead.status === 'ganho' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' :
                          'bg-red-500/20 text-red-300 border border-red-500/40'
                        }`}>
                          {lead.status === 'novo' ? '🔥 Novo Lead' :
                           lead.status === 'em_contato' ? 'Em Contato' :
                           lead.status === 'proposta_enviada' ? 'Proposta Enviada' :
                           lead.status === 'ganho' ? 'Venda Concluída' : 'Perdido'}
                        </span>
                      </div>

                      {/* Dados de Contato e Localização */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300">
                        <a 
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-emerald-400 font-bold hover:underline flex items-center gap-1 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/30"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>{lead.telefone}</span>
                        </a>

                        <a 
                          href={`mailto:${lead.email}`}
                          className="text-gray-300 hover:text-white flex items-center gap-1 font-mono"
                        >
                          <Mail className="w-3.5 h-3.5 text-gray-400" />
                          <span>{lead.email}</span>
                        </a>

                        {lead.cidade && (
                          <span className="text-gray-400 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-gray-500" />
                            <span>{lead.cidade} {lead.estado ? `(${lead.estado})` : ''}</span>
                          </span>
                        )}

                        <span className="text-gray-500 flex items-center gap-1 text-[11px] font-mono">
                          <Clock className="w-3 h-3" />
                          <span>{new Date(lead.timestamp).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}</span>
                        </span>

                        <span className="text-[10px] font-mono text-gray-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                          Origem: {lead.origem}
                        </span>
                      </div>

                      {/* Detalhes / Especificações Solicitadas */}
                      {lead.detalhes && (
                        <div className="p-3 rounded-2xl bg-black/50 border border-white/5 text-xs text-gray-300 leading-relaxed">
                          <span className="font-bold text-[#f3e5ab] block mb-0.5">Demanda do Cliente:</span>
                          <p>{lead.detalhes}</p>
                        </div>
                      )}

                      {/* Status de Planta Baixa e Orçamento Comercial */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {lead.plantaBaixa ? (
                          <button
                            type="button"
                            onClick={() => setSelectedLeadForPlanta(lead)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-medium hover:bg-emerald-900/40 transition-colors"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Planta Baixa: <strong>{lead.plantaBaixa.nomeArquivo}</strong></span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setSelectedLeadForPlanta(lead)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium hover:bg-amber-500/20 transition-colors"
                          >
                            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                            <span>Aguardando Envio da Planta Baixa</span>
                          </button>
                        )}

                        {lead.propostaComercial && (
                          <button
                            type="button"
                            onClick={() => setSelectedLeadForProposal(lead)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-medium hover:bg-[#d4af37]/25 transition-colors"
                          >
                            <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
                            <span>Proposta <strong>{lead.propostaComercial.numeroProposta}</strong> ({lead.propostaComercial.valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })})</span>
                          </button>
                        )}
                      </div>

                      {/* Anotações Comerciais Internas */}
                      <div className="flex items-center gap-2 pt-1">
                        <Edit3 className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                        <input
                          type="text"
                          placeholder="Adicionar anotação comercial sobre este lead..."
                          defaultValue={lead.notasComerciais || ''}
                          onBlur={(e) => updateLeadStatus(lead.id, lead.status, e.target.value)}
                          className="bg-transparent border-b border-white/10 hover:border-[#d4af37] focus:border-[#d4af37] text-xs text-gray-300 px-1 py-0.5 w-full focus:outline-none transition-colors"
                        />
                      </div>

                    </div>

                    {/* Coluna 2: Ações Comerciais Rápidas e Valor */}
                    <div className="flex flex-col md:items-end justify-between gap-3 w-full md:w-auto shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-white/10">
                      
                      {lead.totalPedido && lead.totalPedido > 0 && (
                        <div className="text-right">
                          <span className="text-[10px] text-gray-400 block font-mono">Valor Estimado</span>
                          <span className="text-lg font-black text-[#d4af37] font-mono">
                            {lead.totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                          </span>
                        </div>
                      )}

                      {/* Dropdown de Status */}
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-400 font-mono">Status:</span>
                        <select
                          value={lead.status}
                          onChange={(e) => updateLeadStatus(lead.id, e.target.value as LeadStatus)}
                          className="bg-[#161a26] border border-white/20 rounded-xl px-2.5 py-1 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                        >
                          <option value="novo">🔥 Novo</option>
                          <option value="em_contato">💬 Em Contato</option>
                          <option value="proposta_enviada">📄 Proposta Enviada</option>
                          <option value="ganho">🏆 Venda Fechada</option>
                          <option value="perdido">❌ Perdido</option>
                        </select>
                      </div>

                      {/* Botões de Ação */}
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Botão Planta Baixa */}
                        <button
                          type="button"
                          onClick={() => setSelectedLeadForPlanta(lead)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                            lead.plantaBaixa
                              ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900/60'
                              : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/15'
                          }`}
                          title="Gerenciar Planta Baixa e Croqui"
                        >
                          <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span>{lead.plantaBaixa ? '📐 Planta' : '📐 Anexar Planta'}</span>
                        </button>

                        {/* Botão Orçamento Oficial */}
                        <button
                          type="button"
                          onClick={() => setSelectedLeadForProposal(lead)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                            lead.propostaComercial
                              ? 'bg-[#d4af37]/20 text-[#f3e5ab] border border-[#d4af37]/50 hover:bg-[#d4af37]/30'
                              : 'bg-gradient-to-r from-[#d4af37] to-[#b38728] text-black font-extrabold shadow-glow-gold hover:brightness-110'
                          }`}
                          title="Gerar Proposta Comercial / Orçamento Executivo"
                        >
                          <DollarSign className="w-3.5 h-3.5" />
                          <span>{lead.propostaComercial ? '📄 Ver Orçamento' : '📄 Criar Orçamento'}</span>
                        </button>

                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>

                        <a
                          href={`tel:${cleanPhone}`}
                          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all"
                          title="Ligar para o cliente"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>

                        <button
                          type="button"
                          onClick={() => setLeadToDelete(lead)}
                          className="p-2 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-red-300 border border-red-500/30 transition-all"
                          title="Excluir Lead"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      )}

      {/* ============================================================== */}
      {/* ABA 2: AGENTE B2B DE REDES DE RESTAURANTES DE SHOPPINGS */}
      {/* ============================================================== */}
      {subTab === 'prospeccao_shoppings' && (
        <div className="space-y-4">
          
          {/* Banner de Apresentação do Agente de Inteligência */}
          <div className="bg-gradient-to-r from-[#17122b] via-[#111422] to-[#0c0f18] p-5 rounded-3xl border border-purple-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Diretório de Inteligência Comercial B2B (Shopping Centers)</span>
              </div>
              <h3 className="text-lg font-black text-white">
                Escritórios Administrativos, Engenharia & Expansão de Redes Nacionais
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Mapeamento ativo das sedes corporativas das maiores redes de gastronomia em shopping centers do Brasil. 
                Todas essas operações utilizam cozinhas pesadas (grelhas, charbroilers e fritadeiras Classe K) e sofrem 
                fiscalização severa de AVCB e NBR 14518 pelas administradoras (Multiplan, Iguatemi, Allos, Ancar, etc.).
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleRunAgentScan}
                disabled={isScanning}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg flex items-center gap-2 transition-all cursor-pointer"
              >
                <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
                <span>Atualizar Varredura IA</span>
              </button>
            </div>
          </div>

          {/* Filtros das Redes */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 bg-[#0d1017] p-3 rounded-2xl border border-white/10">
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar rede (ex: Outback, Madero, Spoleto)..."
                value={searchChain}
                onChange={(e) => setSearchChain(e.target.value)}
                className="w-full bg-[#141824] border border-white/10 text-white text-xs rounded-xl pl-9 pr-3 py-2 focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* Categorias */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full lg:w-auto">
              {[
                'Todas',
                'Steakhouses & Carnes',
                'Hamburguerias',
                'Cozinha Italiana & Massas',
                'Frutos do Mar',
                'Comida Brasileira & Buffet',
                'Fast Food & Frango Frito'
              ].map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategoryFilter(cat as CategoriaRede)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    categoryFilter === cat
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards das Redes de Shopping */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredChains.map(chain => {
              const cleanWa = chain.whatsappPrincipal.replace(/\D/g, '');
              const waMessage = encodeURIComponent(
                `Olá equipe de Engenharia e Expansão do ${chain.nomeRede}! Sou da Outfire Engenharia Contra Incêndio. Somos fabricantes da Central Outfire VTS para cozinhas profissionais e shopping centers em conformidade com a ABNT NBR 14518. Gostaríamos de apresentar nossa solução para novas lojas e reformas da rede.`
              );
              const waUrl = `https://wa.me/55${cleanWa}?text=${waMessage}`;

              return (
                <div 
                  key={chain.id}
                  className="bg-[#0f131c] rounded-3xl border border-white/10 hover:border-purple-500/50 p-5 transition-all shadow-lg flex flex-col justify-between space-y-4"
                >
                  <div>
                    {/* Topo do Card */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[10px] font-bold">
                            {chain.categoria}
                          </span>
                          <span className="text-[10px] font-mono text-gray-400">
                            ~{chain.unidadesEstimadas} operações
                          </span>
                        </div>
                        <h4 className="text-base font-black text-white mt-1">
                          {chain.nomeRede}
                        </h4>
                        <span className="text-xs text-gray-400 font-medium block">
                          Grupo: {chain.grupoEmpresarial}
                        </span>
                      </div>

                      {/* Risco de Incêndio */}
                      <span className={`px-2.5 py-1 rounded-xl text-[10px] font-extrabold uppercase shrink-0 ${
                        chain.perfilRiscoFogo.includes('Extremo')
                          ? 'bg-red-950/60 text-red-300 border border-red-500/40'
                          : 'bg-amber-950/60 text-amber-300 border border-amber-500/40'
                      }`}>
                        🔥 {chain.perfilRiscoFogo}
                      </span>
                    </div>

                    {/* Presença nos Shoppings */}
                    <p className="text-xs text-gray-300 mt-2 bg-black/40 p-2.5 rounded-xl border border-white/5">
                      <strong className="text-gray-400 font-mono text-[10px] uppercase block">Presença:</strong>
                      {chain.presencaShoppings}
                    </p>

                    {/* Endereço e Departamento de Contato */}
                    <div className="mt-3 space-y-1.5 text-xs text-gray-300">
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">{chain.sedeCidadeUF}:</strong> {chain.enderecoSede}
                        </div>
                      </div>

                      <div className="flex items-start gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Alvo Comercial:</strong> {chain.contatoSetor}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        <div className="flex items-center gap-1 font-mono text-xs text-white">
                          <Phone className="w-3 h-3 text-gray-400" />
                          <span>{chain.telefones.join(' / ')}</span>
                        </div>
                        <div className="flex items-center gap-1 font-mono text-xs text-purple-300">
                          <Mail className="w-3 h-3 text-purple-400" />
                          <span>{chain.emailExpansaoObras}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pitch de Vendas Recomendado */}
                    <div className="mt-3 p-3 rounded-2xl bg-purple-950/20 border border-purple-500/20 text-xs text-purple-200">
                      <span className="font-bold text-white text-[10px] font-mono uppercase block mb-1">
                        💡 Argumento de Venda Sugerido:
                      </span>
                      <p className="italic text-[11px] leading-relaxed">"{chain.pitchRecomendado}"</p>
                    </div>
                  </div>

                  {/* Rodapé do Card: Status da Prospecção e Ações */}
                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-gray-400 font-mono">Status:</span>
                      <select
                        value={chain.statusProspeccao}
                        onChange={(e) => {
                          updateChainProspectingStatus(chain.id, e.target.value as StatusProspeccao);
                          setShoppingChains(getShoppingChains());
                        }}
                        className="bg-[#141824] border border-white/20 rounded-xl px-2 py-1 text-xs text-white focus:outline-none focus:border-purple-400"
                      >
                        <option value="nao_contatado">⚪ Não Contatado</option>
                        <option value="em_prospeccao">🟡 Em Prospecção</option>
                        <option value="reuniao_agendada">📅 Reunião Agendada</option>
                        <option value="proposta_enviada">📄 Proposta Enviada</option>
                        <option value="homologado">🏆 Homologado</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => copyToClipboard(chain.pitchRecomendado, chain.id, `Pitch de vendas copiado para ${chain.nomeRede}!`)}
                        className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-bold flex items-center gap-1 transition-all"
                        title="Copiar texto do pitch para enviar por e-mail ou WhatsApp"
                      >
                        {copiedId === chain.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span className="hidden sm:inline">Copiar Pitch</span>
                      </button>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md transition-all"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Chamar</span>
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: CADASTRAR LEAD MANUALMENTE */}
      {/* ============================================================== */}
      {showNewLeadModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0f131c] border border-[#d4af37]/40 w-full max-w-lg rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#d4af37]" />
                <span>Cadastrar Novo Lead Comercial</span>
              </h3>
              <button 
                type="button"
                onClick={() => setShowNewLeadModal(false)}
                className="text-gray-400 hover:text-white text-xs"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveManualLead} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-mono text-gray-400 block mb-1">Nome do Contato *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João da Silva"
                    value={newLeadForm.nome}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, nome: e.target.value })}
                    className="w-full bg-[#141824] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-gray-400 block mb-1">WhatsApp / Telefone *</label>
                  <input
                    type="text"
                    required
                    placeholder="(11) 99999-9999"
                    value={newLeadForm.telefone}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, telefone: e.target.value })}
                    className="w-full bg-[#141824] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-mono text-gray-400 block mb-1">Empresa / Restaurante *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Hamburgueria Grill"
                    value={newLeadForm.empresa}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, empresa: e.target.value })}
                    className="w-full bg-[#141824] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-gray-400 block mb-1">Cargo / Setor</label>
                  <input
                    type="text"
                    placeholder="Ex: Gerente de Obras"
                    value={newLeadForm.cargo}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, cargo: e.target.value })}
                    className="w-full bg-[#141824] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-mono text-gray-400 block mb-1">E-mail</label>
                  <input
                    type="email"
                    placeholder="contato@empresa.com.br"
                    value={newLeadForm.email}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, email: e.target.value })}
                    className="w-full bg-[#141824] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-gray-400 block mb-1">Cidade / UF</label>
                  <input
                    type="text"
                    placeholder="Ex: São Paulo / SP"
                    value={newLeadForm.cidade}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, cidade: e.target.value })}
                    className="w-full bg-[#141824] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-gray-400 block mb-1">Tipo de Cozinha / Demanda</label>
                <input
                  type="text"
                  placeholder="Ex: Cozinha com 2 coifas, charbroiler e fritadeira"
                  value={newLeadForm.tipoCozinha}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, tipoCozinha: e.target.value })}
                  className="w-full bg-[#141824] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-gray-400 block mb-1">Valor Estimado do Orçamento (R$)</label>
                <input
                  type="number"
                  placeholder="Ex: 8900"
                  value={newLeadForm.totalPedido}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, totalPedido: e.target.value })}
                  className="w-full bg-[#141824] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-gray-400 block mb-1">Anotações / Detalhes</label>
                <textarea
                  rows={2}
                  placeholder="Informações adicionais da conversa..."
                  value={newLeadForm.detalhes}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, detalhes: e.target.value })}
                  className="w-full bg-[#141824] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="flex gap-2 justify-end pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowNewLeadModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#d4af37] hover:bg-[#e5c05d] text-black text-xs font-extrabold shadow-glow-gold"
                >
                  Salvar Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: CONFIRMAR EXCLUSÃO DE LEAD */}
      {/* ============================================================== */}
      {leadToDelete && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121622] border border-red-500/40 w-full max-w-sm rounded-3xl p-6 shadow-2xl space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Excluir Lead?</h3>
              <p className="text-xs text-gray-400 mt-1">
                Deseja realmente remover o lead de <strong className="text-white">{leadToDelete.nome}</strong> ({leadToDelete.empresa})? Esta ação não pode ser desfeita.
              </p>
            </div>
            <div className="flex gap-2 justify-center pt-2">
              <button
                type="button"
                onClick={() => setLeadToDelete(null)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteCrmLead(leadToDelete.id);
                  setLeadToDelete(null);
                  showToast('Lead excluído do CRM.');
                }}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-extrabold"
              >
                Sim, Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: PLANTA BAIXA E CROQUI DA COZINHA */}
      {/* ============================================================== */}
      {selectedLeadForPlanta && (
        <PlantaBaixaModal
          lead={selectedLeadForPlanta}
          isOpen={true}
          onClose={() => setSelectedLeadForPlanta(null)}
          onOpenProposal={(l) => {
            setSelectedLeadForPlanta(null);
            setSelectedLeadForProposal(l);
          }}
          onShowToast={showToast}
        />
      )}

      {/* ============================================================== */}
      {/* MODAL: GERADOR DE ORÇAMENTO & PROPOSTA COMERCIAL */}
      {/* ============================================================== */}
      {selectedLeadForProposal && (
        <ProposalGeneratorModal
          lead={selectedLeadForProposal}
          isOpen={true}
          onClose={() => setSelectedLeadForProposal(null)}
          onShowToast={showToast}
        />
      )}

    </div>
  );
};

