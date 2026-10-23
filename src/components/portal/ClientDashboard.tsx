import React, { useState } from 'react';
import { 
  Building2, Wrench, FileText, ShoppingBag, ShieldCheck, 
  Clock, CheckCircle2, Phone, Download, Upload, Plus, 
  MapPin, Calendar, AlertTriangle, LogOut, ArrowRight, 
  Sparkles, ExternalLink, HardHat, Check, User
} from 'lucide-react';
import { ClientUser, ObraItem, DocumentoProjeto } from '../../types/clientPortal';
import { PreInstallationChecklist } from './PreInstallationChecklist';
import { addDocumentoObra, saveObra } from '../../utils/portalStorage';

interface Props {
  user: ClientUser;
  obra: ObraItem;
  onLogout: () => void;
  onUpdateObra: (updatedObra: ObraItem) => void;
}

type TabType = 'obras' | 'checklist' | 'documentos' | 'pedidos' | 'supervisor';

export const ClientDashboard: React.FC<Props> = ({ user, obra, onLogout, onUpdateObra }) => {
  const [activeTab, setActiveTab] = useState<TabType>('obras');
  const [newDocTitle, setNewDocTitle] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Timeline Steps
  const timelineSteps = [
    { id: 1, label: 'Planejamento & Dimensionamento', status: 'completed' },
    { id: 2, label: 'Checklist Pré-Instalação da Cozinha', status: obra.progressoPorcentagem >= 30 ? 'completed' : 'current' },
    { id: 3, label: 'Análise Técnica pela Engenharia', status: obra.progressoPorcentagem >= 50 ? 'completed' : obra.progressoPorcentagem >= 30 ? 'current' : 'pending' },
    { id: 4, label: 'Técnico Agendado & Despachado', status: obra.progressoPorcentagem >= 65 ? 'completed' : obra.progressoPorcentagem >= 50 ? 'current' : 'pending' },
    { id: 5, label: 'Montagem & Comissionamento', status: obra.progressoPorcentagem >= 85 ? 'completed' : obra.progressoPorcentagem >= 65 ? 'current' : 'pending' },
    { id: 6, label: 'Concluído com ART & Laudo AVCB', status: obra.progressoPorcentagem === 100 ? 'completed' : 'pending' },
  ];

  const handleSimulateUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDocTitle.trim()) return;

    setIsUploading(true);
    setTimeout(() => {
      const added = addDocumentoObra(obra.id, {
        tipo: 'planta_baixa_dwg_pdf',
        titulo: newDocTitle.trim(),
        descricao: 'Projeto técnico de layout da cozinha adicionado pelo cliente.',
        nomeArquivoOriginal: `${newDocTitle.toLowerCase().replace(/\s+/g, '_')}.pdf`,
        tamanhoFormatado: '2.8 MB',
        hashSha256: `sha256_${Math.random().toString(36).substring(2, 15)}`,
        dataEmissao: new Date().toISOString().split('T')[0],
        downloadUrl: '#',
        isOficialOutfire: false
      });

      const updated = {
        ...obra,
        documentos: [added, ...obra.documentos]
      };
      onUpdateObra(updated);
      setNewDocTitle('');
      setIsUploading(false);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }, 800);
  };

  // Funções de Simulação do Modo Supervisor
  const handleSetStatus = (status: ObraItem['status'], progress: number, label: string) => {
    const updated = {
      ...obra,
      status,
      progressoPorcentagem: progress,
      statusLabel: label
    };
    saveObra(updated);
    onUpdateObra(updated);
  };

  return (
    <div className="min-h-[85vh] bg-[#07090c] text-slate-100 flex flex-col font-sans">
      
      {/* 1. TOP CORPORATE BAR */}
      <div className="bg-[#0b0e14] border-b border-amber-500/20 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#d4af37] via-[#f3e5ab] to-[#b89628] p-[2px] shadow-glow-gold shrink-0">
              <div className="w-full h-full rounded-2xl bg-[#0e1014] flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#d4af37]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-white">{obra.nomeLoja}</h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                  {obra.codigoObra}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Responsável: <strong className="text-white">{user.nome}</strong> • {user.empresaNome} ({user.cidade})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://wa.me/5511916999411?text=Ol%C3%A1%20Engenharia%20Outfire%2C%20estou%20no%20Portal%20do%20Cliente%20e%20preciso%20de%20suporte."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-amber-500/30 text-xs font-semibold text-amber-300 flex items-center gap-1.5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Plantão Engenharia</span>
            </a>

            <button
              onClick={onLogout}
              className="px-3 py-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-300 border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Sair do Portal"
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
            { key: 'obras', label: 'Minhas Obras & Cronograma', icon: Building2 },
            { key: 'checklist', label: 'Checklist Pré-Instalação', icon: ShieldCheck, badge: obra.progressoPorcentagem < 50 ? 'Obrigatório' : undefined },
            { key: 'documentos', label: 'Vault de Documentos (ART/AVCB)', icon: FileText, count: obra.documentos.length },
            { key: 'pedidos', label: 'Meus Pedidos & Cotações', icon: ShoppingBag, count: obra.pedidos.length },
            { key: 'supervisor', label: 'Modo Engenharia Outfire', icon: HardHat, highlight: true }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as TabType)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black shadow-glow-gold'
                    : tab.highlight
                    ? 'bg-amber-500/10 text-[#f3e5ab] hover:bg-amber-500/20 border border-amber-500/30'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : tab.highlight ? 'text-amber-400' : 'opacity-80'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-red-500 text-white font-extrabold animate-pulse">
                    {tab.badge}
                  </span>
                )}
                {tab.count !== undefined && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-gray-300'}`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. TAB CONTENT */}
      <div className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-8">
        
        {/* ================= TAB 1: OBRAS & CRONOGRAMA ================= */}
        {activeTab === 'obras' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Status & Key Metrics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Status da Instalação */}
              <div className="p-6 rounded-3xl bg-[#0e1014] border border-amber-500/30 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase text-gray-400 font-bold">Fase da Obra</span>
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-xs font-mono">
                    {obra.progressoPorcentagem}%
                  </div>
                </div>
                <h4 className="text-xl font-black text-white mb-1">{obra.statusLabel}</h4>
                <p className="text-xs text-gray-400">Previsão de Entrega: <strong className="text-[#f3e5ab]">{obra.dataPrevisaoConclusao}</strong></p>

                {/* Progress bar */}
                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden mt-5">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-emerald-400 transition-all duration-700"
                    style={{ width: `${obra.progressoPorcentagem}%` }}
                  />
                </div>
              </div>

              {/* Card 2: Especificações da Cozinha */}
              <div className="p-6 rounded-3xl bg-[#0e1014] border border-white/10 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase text-gray-400 font-bold">Sistema Projetado</span>
                  <Wrench className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{obra.especificacoes.centralModelo}</h4>
                <div className="space-y-1.5 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Coifas Industriais:</span>
                    <strong className="text-white">{obra.especificacoes.coifasQtd} unidades</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Extensão do Duto:</span>
                    <strong className="text-white">{obra.especificacoes.dutoMetros} metros</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Agente Saponificante:</span>
                    <strong className="text-amber-400">{obra.especificacoes.saponificanteLitros} Litros (Classe K)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Gás Inerte no Duto:</span>
                    <strong className="text-emerald-400">{obra.especificacoes.co2Kg} kg CO2</strong>
                  </div>
                </div>
              </div>

              {/* Card 3: Técnico Responsável em Campo */}
              <div className="p-6 rounded-3xl bg-gradient-to-b from-[#141720] to-[#0e1014] border border-amber-500/30 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase text-amber-400 font-bold">Técnico Alocado</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">CREA/CFT Ativo</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={obra.tecnico?.fotoUrl || 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=250'} 
                      alt={obra.tecnico?.nome}
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-500 shadow-md"
                    />
                    <div>
                      <h5 className="text-sm font-bold text-white">{obra.tecnico?.nome}</h5>
                      <p className="text-[11px] text-gray-400">{obra.tecnico?.cargo}</p>
                      <p className="text-[10px] font-mono text-amber-300">{obra.tecnico?.registro}</p>
                    </div>
                  </div>

                  <div className="bg-black/40 p-2.5 rounded-xl border border-white/5 text-[11px] text-gray-300 mb-3">
                    <p className="text-gray-400">Visita Agendada:</p>
                    <strong className="text-white block">{obra.tecnico?.dataAgendamento}</strong>
                    <span className="text-amber-300 text-[10px]">{obra.tecnico?.turno}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${obra.tecnico?.telefoneWhatsApp}?text=Ol%C3%A1%20${encodeURIComponent(obra.tecnico?.nome || 'Técnico')}%2C%20sou%20o%20respons%C3%A1vel%20pela%20obra%20${encodeURIComponent(obra.nomeLoja)}%20no%20Portal%20Outfire.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Falar com o Técnico no WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Timeline Visual de 6 Etapas */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1014] border border-white/10 shadow-xl">
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Cronograma de Instalação e Comissionamento</span>
              </h4>
              <p className="text-xs text-gray-400 mb-8">
                Acompanhe em tempo real cada fase técnica até a liberação do laudo AVCB para o Corpo de Bombeiros.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 relative">
                {timelineSteps.map((step, idx) => (
                  <div key={step.id} className="relative flex flex-col items-center text-center">
                    
                    {/* Circle icon */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs mb-3 transition-all ${
                      step.status === 'completed'
                        ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                        : step.status === 'current'
                        ? 'bg-amber-500 text-black shadow-glow-gold animate-pulse'
                        : 'bg-white/10 text-gray-500 border border-white/10'
                    }`}>
                      {step.status === 'completed' ? <Check className="w-5 h-5 stroke-[3]" /> : step.id}
                    </div>

                    <p className={`text-xs font-semibold leading-tight ${
                      step.status === 'completed' ? 'text-white' : step.status === 'current' ? 'text-amber-300 font-bold' : 'text-gray-500'
                    }`}>
                      {step.label}
                    </p>

                    <span className="text-[10px] mt-1 font-mono uppercase text-gray-500">
                      {step.status === 'completed' ? 'Concluído' : step.status === 'current' ? 'Em Andamento' : 'Pendente'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Banner de Ação Rápida para o Checklist */}
            {obra.progressoPorcentagem < 50 && (
              <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-950/40 via-[#18140c] to-amber-950/40 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Atenção: O Checklist Pré-Instalação precisa ser preenchido</h5>
                    <p className="text-xs text-gray-300 mt-1">
                      Antes que nosso técnico viaje até a loja, confirme se o duto, a coifa e o ponto 220V estão prontos para montagem.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('checklist')}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black text-xs font-extrabold shadow-glow-gold hover:scale-105 transition-all shrink-0 flex items-center gap-1.5"
                >
                  <span>Preencher Checklist</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        )}

        {/* ================= TAB 2: CHECKLIST PRÉ-INSTALAÇÃO ================= */}
        {activeTab === 'checklist' && (
          <div className="animate-fadeIn">
            <PreInstallationChecklist obra={obra} onUpdate={onUpdateObra} />
          </div>
        )}

        {/* ================= TAB 3: VAULT DE DOCUMENTOS & PROJETOS ================= */}
        {activeTab === 'documentos' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Header & Upload Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-400" />
                  <span>Vault de Documentos Oficiais & Projetos Técnicos</span>
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Documentação comprobatória com assinatura digital do CREA, laudos de estanqueidade e plantas baixas da cozinha.
                </p>
              </div>

              {/* Botão de Upload pelo Cliente */}
              <form onSubmit={handleSimulateUpload} className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Nome do arquivo (ex: Planta Coifa DWG)"
                  value={newDocTitle}
                  onChange={(e) => setNewDocTitle(e.target.value)}
                  className="bg-black/40 border border-white/15 text-xs text-white rounded-xl px-3 py-2 outline-none focus:border-amber-500 w-48 sm:w-64"
                />
                <button
                  type="submit"
                  disabled={isUploading || !newDocTitle.trim()}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-amber-500 hover:text-black text-white text-xs font-bold border border-white/10 transition-all flex items-center gap-1.5 disabled:opacity-40"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{isUploading ? 'Anexando...' : 'Anexar Projeto'}</span>
                </button>
              </form>
            </div>

            {uploadSuccess && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 font-bold flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Projeto anexado ao cofre da obra com hash criptográfico SHA-256 gerado!</span>
              </div>
            )}

            {/* Documents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {obra.documentos.map(doc => (
                <div 
                  key={doc.id}
                  className={`p-6 rounded-3xl border flex flex-col justify-between transition-all ${
                    doc.isOficialOutfire
                      ? 'bg-gradient-to-b from-[#141720] to-[#0e1014] border-amber-500/30 shadow-glow-gold'
                      : 'bg-[#0e1014] border-white/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-gray-300 font-bold">
                        {doc.tipo.replace(/_/g, ' ')}
                      </span>
                      {doc.isOficialOutfire && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-[#f3e5ab] font-bold border border-amber-500/30">
                          Oficial Outfire
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 line-clamp-2">
                      {doc.titulo}
                    </h4>

                    {doc.descricao && (
                      <p className="text-xs text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                        {doc.descricao}
                      </p>
                    )}

                    <div className="space-y-1 text-[11px] text-gray-400 font-mono pt-3 border-t border-white/5">
                      <div className="flex justify-between">
                        <span>Emissão:</span>
                        <strong className="text-white">{doc.dataEmissao}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Tamanho:</span>
                        <strong className="text-white">{doc.tamanhoFormatado}</strong>
                      </div>
                      {doc.numeroArtCrea && (
                        <div className="flex justify-between text-amber-300">
                          <span>Registro:</span>
                          <strong>{doc.numeroArtCrea}</strong>
                        </div>
                      )}
                      <div className="flex justify-between text-[9px] text-gray-500 truncate pt-1">
                        <span>Hash SHA-256:</span>
                        <span className="truncate max-w-[120px]">{doc.hashSha256}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <a
                      href={doc.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-amber-500/30 text-[#f3e5ab] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5 text-amber-400" />
                      <span>Baixar Documento com Assinatura</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ================= TAB 4: MEUS PEDIDOS & COTAÇÕES ================= */}
        {activeTab === 'pedidos' && (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-amber-400" />
                  <span>Histórico de Pedidos de Peças e Recargas</span>
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Acompanhe a fabricação e o envio dos cilindros de saponificante, bicos e centrais da sua loja.
                </p>
              </div>

              <a
                href="#loja"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black text-xs font-bold flex items-center gap-1.5 shadow-glow-gold hover:scale-105 transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Comprar Peças / Recargas</span>
              </a>
            </div>

            <div className="space-y-4">
              {obra.pedidos.map(ped => (
                <div key={ped.id} className="p-6 rounded-3xl bg-[#0e1014] border border-white/10 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-black text-white font-mono">{ped.numeroPedido}</span>
                      <span className="text-xs text-gray-400">• Realizado em {ped.data}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                        {ped.statusLabel}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 max-w-2xl leading-relaxed">
                      {ped.descricaoItens}
                    </p>
                    {ped.codigoRastreio && (
                      <p className="text-xs text-amber-300 font-mono mt-2">
                        Rastreio Transportadora: <strong>{ped.codigoRastreio}</strong>
                      </p>
                    )}
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[10px] uppercase text-gray-400 block">Valor Faturado</span>
                    <span className="text-lg font-black text-amber-400 font-mono">
                      R$ {ped.valorTotalBRL.toLocaleString('pt-BR')},00
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ================= TAB 5: MODO SUPERVISOR ENGENHARIA (ADMIN PREVIEW) ================= */}
        {activeTab === 'supervisor' && (
          <div className="p-8 rounded-3xl bg-[#0c0f16] border border-amber-500/40 shadow-2xl space-y-6 animate-fadeIn">
            <div className="border-b border-white/10 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <HardHat className="w-4 h-4" />
                Painel Interno da Engenharia Outfire (Demonstração Interativa)
              </div>
              <h3 className="text-xl font-black text-white">Controle de Status e Liberação da Obra</h3>
              <p className="text-xs text-gray-400 mt-1">
                Utilize os botões abaixo para simular como a equipe da Outfire aprova checklists, agenda técnicos e emite laudos no banco de dados.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => handleSetStatus('checklist_pendente', 25, 'Aguardando Checklist do Cliente')}
                className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-all"
              >
                <span className="text-[10px] text-amber-400 font-mono font-bold block">Fase 1</span>
                <strong className="text-xs text-white block mt-1">Checklist Pendente</strong>
                <p className="text-[11px] text-gray-400 mt-1">Cliente ainda precisa preencher dados da coifa.</p>
              </button>

              <button
                onClick={() => handleSetStatus('em_analise_engenharia', 45, 'Checklist em Análise Técnica')}
                className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-all"
              >
                <span className="text-[10px] text-blue-400 font-mono font-bold block">Fase 2</span>
                <strong className="text-xs text-white block mt-1">Análise da Engenharia</strong>
                <p className="text-[11px] text-gray-400 mt-1">Engenheiro checando as fotos do duto e exaustor.</p>
              </button>

              <button
                onClick={() => handleSetStatus('tecnico_agendado', 70, 'Técnico Agendado (Checklist Aprovado)')}
                className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-amber-500/40 text-left transition-all shadow-glow-gold"
              >
                <span className="text-[10px] text-emerald-400 font-mono font-bold block">Fase 3 (Recomendada)</span>
                <strong className="text-xs text-white block mt-1">Técnico em Campo</strong>
                <p className="text-[11px] text-gray-400 mt-1">Carlos Eduardo alocado para montagem terça-feira.</p>
              </button>

              <button
                onClick={() => handleSetStatus('concluida_avcb', 100, 'Obra Concluída & Aprovada AVCB')}
                className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-emerald-500/40 text-left transition-all shadow-glow-gold"
              >
                <span className="text-[10px] text-emerald-400 font-mono font-bold block">Fase 4</span>
                <strong className="text-xs text-white block mt-1">Conclusão Total AVCB</strong>
                <p className="text-[11px] text-gray-400 mt-1">Laudos finais emitidos e garantia de 12 meses ativa.</p>
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
