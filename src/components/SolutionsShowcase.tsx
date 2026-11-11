import React, { useState } from 'react';
import { 
  Package, Wrench, ShieldCheck, CheckCircle2, 
  MessageSquare, Phone, Maximize2, X, Sparkles,
  ArrowRight, Flame, Layers
} from 'lucide-react';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

type TabType = 'kit' | 'instalacao';

export const SolutionsShowcase: React.FC = () => {
  const { openLeadModal } = useWhatsAppModal();
  const [activeTab, setActiveTab] = useState<TabType>('kit');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handleRequestKit = () => {
    openLeadModal({
      origem: 'solucoes_kit_instalacao',
      title: 'Solicitar Projeto & Kit Completo',
      subtitle: 'Preencha seus dados para receber o dimensionamento sob medida e a proposta oficial no WhatsApp.',
      defaultMessage: 'Olá! Vi a apresentação do Kit Completo no site da Outfire e gostaria de solicitar o projeto sob medida para a minha cozinha.',
      detalhes: 'Interesse no fornecimento do Kit Completo Outfire (Central VTS, Saponificante, CO2, bicos, tubos e sensores).'
    });
  };

  const handleRequestInstallation = () => {
    openLeadModal({
      origem: 'solucoes_manutencao',
      title: 'Solicitar Instalação & Manutenção Profissional',
      subtitle: 'Preencha seus dados para agendamento de equipe técnica própria em qualquer lugar do Brasil.',
      defaultMessage: 'Olá! Vi a apresentação de Instalação & Manutenção Profissional no site da Outfire e gostaria de solicitar atendimento para a minha cozinha.',
      detalhes: 'Interesse em Instalação Noturna, Manutenção Preventiva/Corretiva ou Recarga de Sistema.'
    });
  };

  const kitItems = [
    'Central Outfire VTS32S3 com IHM Touchscreen e avisos de voz',
    'Cilindro Inox de Saponificante Classe K para cocção',
    'Cilindro de CO2 de alta pressão para duto e curvas',
    'Bicos Supressores em Inox e Conexões especiais',
    'Mangueiras de Alta Pressão (CO2 e Saponificante)',
    'Tubos de Aço Inox schedule e adaptadores',
    'Sensores Blindados e Sensores Reguláveis (145°C/300°C)',
    'Acionador Manual de Emergência e Detector de Gás GN/GLP',
    '2 Baterias Seladas 12V 5A Moura com nobreak embutido',
    'Manual de Instalação e memorial descritivo completo'
  ];

  const servicesHighlights = [
    'Técnicos Certificados pela Fábrica com suporte direto da engenharia',
    'Instalação Rápida e Limpa (Sem Parar a Cozinha) planejada nos intervalos ou turno noturno',
    'Conformidade Total ABNT NBR 14518 & AVCB com emissão de ART no CREA',
    'Treinamento Operacional Incluso para os cozinheiros e equipe do restaurante',
    'Manutenção em Qualquer Sistema de Combate a Incêndio (Outfire, Ansul, Kidde, Amerex, Protege e multimarcas)'
  ];

  return (
    <section id="solucoes" className="py-24 bg-[#0a0c0e] relative border-t border-white/5 scroll-mt-20">
      
      {/* Âncora invisível para suportar links antigos #loja */}
      <span id="loja" className="absolute -top-24" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Soluções Sob Medida • Atendimento Nacional
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Kits Completos & <br />
            <span className="gold-gradient-text">
              Instalação Profissional
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            Criamos o projeto ideal para a necessidade da sua cozinha industrial, restaurante ou franquia de shopping. Selecione abaixo e entre em contato direto com a nossa engenharia:
          </p>
        </div>

        {/* Abas de Navegação (Tabs) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          
          {/* Aba 1: Vendemos o Kit Completo */}
          <button
            type="button"
            onClick={() => setActiveTab('kit')}
            className={`px-6 sm:px-9 py-4 rounded-2xl font-black text-sm sm:text-base flex items-center gap-3 transition-all cursor-pointer ${
              activeTab === 'kit'
                ? 'bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] text-black shadow-glow-gold scale-[1.02]'
                : 'bg-[#121620] hover:bg-[#1a202c] text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Package className={`w-5 h-5 ${activeTab === 'kit' ? 'text-black' : 'text-[#d4af37]'}`} />
            <span>Vendemos o Kit Completo</span>
            <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full ${
              activeTab === 'kit' ? 'bg-black/20 text-black font-extrabold' : 'bg-white/10 text-gray-400'
            }`}>
              Sob Medida
            </span>
          </button>

          {/* Aba 2: Instalação & Manutenção Profissional */}
          <button
            type="button"
            onClick={() => setActiveTab('instalacao')}
            className={`px-6 sm:px-9 py-4 rounded-2xl font-black text-sm sm:text-base flex items-center gap-3 transition-all cursor-pointer ${
              activeTab === 'instalacao'
                ? 'bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] text-black shadow-glow-gold scale-[1.02]'
                : 'bg-[#121620] hover:bg-[#1a202c] text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Wrench className={`w-5 h-5 ${activeTab === 'instalacao' ? 'text-black' : 'text-[#d4af37]'}`} />
            <span>Instalação & Manutenção</span>
            <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full ${
              activeTab === 'instalacao' ? 'bg-black/20 text-black font-extrabold' : 'bg-white/10 text-gray-400'
            }`}>
              Em todo Brasil
            </span>
          </button>

        </div>

        {/* ============================================================== */}
        {/* ABA 1: VENDEMOS O KIT COMPLETO */}
        {/* ============================================================== */}
        {activeTab === 'kit' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Banner Oficial do Kit Completo */}
            <div className="relative group rounded-3xl overflow-hidden border-2 border-[#d4af37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] bg-black">
              
              <img
                src="/assets/apresentacao-kit-completo.jpg"
                alt="Vendemos o Kit Completo para sua Loja - Outfire"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Botão de Zoom em Tela Cheia */}
              <button
                type="button"
                onClick={() => setLightboxImage('/assets/apresentacao-kit-completo.jpg')}
                className="absolute top-4 right-4 p-2.5 sm:p-3 rounded-2xl bg-black/75 hover:bg-black/90 text-[#f3e5ab] hover:text-white border border-[#d4af37]/40 backdrop-blur-md transition-all shadow-lg flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                title="Ampliar Imagem em Alta Resolução"
              >
                <Maximize2 className="w-4 h-4 text-[#d4af37]" />
                <span className="hidden sm:inline">Ampliar Imagem</span>
              </button>

              {/* Barra de Ação Inferior Integrada */}
              <div className="p-5 sm:p-7 bg-gradient-to-r from-[#0c0e14] via-[#141824] to-[#0c0e14] border-t border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f3e5ab] text-xs font-bold uppercase font-mono">
                      Projeto Sob Medida
                    </span>
                    <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Pronto para Aprovação AVCB
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Vendemos o Kit Completo para a sua Loja
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
                    Entre em contato e nossa engenharia montará a memória de cálculo e o kit homologado específico para a linha de cocção da sua cozinha.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={handleRequestKit}
                    className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-sm flex items-center justify-center gap-2 shadow-glow-gold hover:shadow-glow-gold-lg transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-black" />
                    <span>Solicitar Orçamento do Kit Completo</span>
                  </button>

                  <a
                    href="https://wa.me/5511916999411?text=Olá!%20Gostaria%20de%20um%20orçamento%20do%20Kit%20Completo%20Outfire%20para%20minha%20cozinha."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(11) 91699-9411</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Lista Visual dos Itens que Compõem o Kit */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0f131c] border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-[#f3e5ab] uppercase tracking-wider flex items-center gap-2">
                <Package className="w-4 h-4 text-[#d4af37]" />
                <span>O que vem incluso no Kit Completo de Fábrica Outfire:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {kitItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 2: INSTALAÇÃO & MANUTENÇÃO PROFISSIONAL */}
        {/* ============================================================== */}
        {activeTab === 'instalacao' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Banner Oficial de Instalação e Manutenção */}
            <div className="relative group rounded-3xl overflow-hidden border-2 border-[#d4af37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] bg-black">
              
              <img
                src="/assets/apresentacao-instalacao-manutencao.jpg"
                alt="Instalação e Manutenção Profissional Outfire em todo o Brasil"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Botão de Zoom em Tela Cheia */}
              <button
                type="button"
                onClick={() => setLightboxImage('/assets/apresentacao-instalacao-manutencao.jpg')}
                className="absolute top-4 right-4 p-2.5 sm:p-3 rounded-2xl bg-black/75 hover:bg-black/90 text-[#f3e5ab] hover:text-white border border-[#d4af37]/40 backdrop-blur-md transition-all shadow-lg flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                title="Ampliar Imagem em Alta Resolução"
              >
                <Maximize2 className="w-4 h-4 text-[#d4af37]" />
                <span className="hidden sm:inline">Ampliar Imagem</span>
              </button>

              {/* Barra de Ação Inferior Integrada */}
              <div className="p-5 sm:p-7 bg-gradient-to-r from-[#0c0e14] via-[#141824] to-[#0c0e14] border-t border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f3e5ab] text-xs font-bold uppercase font-mono">
                      Mão de Obra Própria
                    </span>
                    <span className="text-xs text-amber-400 font-bold flex items-center gap-1">
                      <Wrench className="w-3.5 h-3.5" />
                      Atendimento Multimarcas
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Instalação & Manutenção em Todo o Brasil
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
                    Montagem rápida e limpa planejada nos intervalos ou turno noturno para não parar sua operação, com entrega técnica, laudo com ART e treinamento da equipe.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={handleRequestInstallation}
                    className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-sm flex items-center justify-center gap-2 shadow-glow-gold hover:shadow-glow-gold-lg transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-black" />
                    <span>Solicitar Instalação ou Manutenção</span>
                  </button>

                  <a
                    href="https://wa.me/5511916999411?text=Olá!%20Gostaria%20de%20agendar%20uma%20instalação%20ou%20manutenção%20para%20minha%20cozinha."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(11) 91699-9411</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Diferenciais da Instalação e Manutenção Outfire */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0f131c] border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-[#f3e5ab] uppercase tracking-wider flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#d4af37]" />
                <span>Padrão de Excelência Outfire em Instalação & Suporte Técnico:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {servicesHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* ============================================================== */}
      {/* MODAL LIGHTBOX DE ALTA RESOLUÇÃO */}
      {/* ============================================================== */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-5 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-6xl w-full bg-[#0b0e14] border border-[#d4af37]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Lightbox */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#141824]">
              <span className="text-xs font-bold text-[#f3e5ab] font-mono flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                OUTFIRE® — Apresentação Técnica Oficial
              </span>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Imagem em Resolução Original */}
            <div className="overflow-auto max-h-[78vh] p-2 bg-black flex items-center justify-center">
              <img
                src={lightboxImage}
                alt="Apresentação Outfire em Alta Resolução"
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Rodapé com Botão de Ação */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0e121a] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-gray-300">
                Atendimento Nacional: <strong>(11) 91699-9411</strong> • contato@outfire.com.br
              </span>
              <button
                type="button"
                onClick={() => {
                  setLightboxImage(null);
                  if (activeTab === 'kit') handleRequestKit();
                  else handleRequestInstallation();
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b38728] text-black font-extrabold text-xs shadow-glow-gold hover:brightness-110 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
