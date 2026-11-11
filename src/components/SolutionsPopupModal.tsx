import React, { useState, useEffect } from 'react';
import { 
  Package, Wrench, X, MessageSquare, Phone, 
  CheckCircle2, Sparkles, Maximize2, ArrowRight
} from 'lucide-react';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

type PopupTab = 'kit' | 'instalacao';

interface SolutionsPopupModalProps {
  // Trigger sentinel ID on page (defaults to 'apresentacao')
  triggerSectionId?: string;
}

export const SolutionsPopupModal: React.FC<SolutionsPopupModalProps> = ({
  triggerSectionId = 'apresentacao'
}) => {
  const { openLeadModal } = useWhatsAppModal();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<PopupTab>('kit');
  const [hasTriggered, setHasTriggered] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    // Verificar se já foi exibido nesta sessão
    if (typeof window === 'undefined') return;
    const alreadyShown = sessionStorage.getItem('outfire_solutions_popup_shown_v2');
    if (alreadyShown) {
      setHasTriggered(true);
      return;
    }

    const checkScroll = () => {
      if (hasTriggered) return;

      const triggerEl = document.getElementById(triggerSectionId);
      if (!triggerEl) return;

      const rect = triggerEl.getBoundingClientRect();
      // Quando o fundo da seção de apresentação passar para cima da viewport
      // (isto é, o usuário navegou além da apresentação comercial)
      if (rect.bottom < window.innerHeight * 0.4 && rect.bottom > -2000) {
        setHasTriggered(true);
        sessionStorage.setItem('outfire_solutions_popup_shown_v2', 'true');
        // Pequeno delay de 400ms para suavidade
        setTimeout(() => {
          setIsOpen(true);
        }, 400);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, [triggerSectionId, hasTriggered]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRequestKit = () => {
    setIsOpen(false);
    openLeadModal({
      origem: 'popup_kit_completo',
      title: 'Solicitar Projeto & Kit Completo',
      subtitle: 'Preencha seus dados para receber o dimensionamento sob medida e a proposta oficial no WhatsApp.',
      defaultMessage: 'Olá! Vi a apresentação do Kit Completo no site da Outfire e gostaria de solicitar o projeto sob medida para a minha cozinha.',
      detalhes: 'Interesse no Kit Completo Outfire (Central VTS, Saponificante, CO2, bicos, tubos e sensores).'
    });
  };

  const handleRequestInstallation = () => {
    setIsOpen(false);
    openLeadModal({
      origem: 'popup_instalacao_manutencao',
      title: 'Solicitar Instalação & Manutenção Profissional',
      subtitle: 'Preencha seus dados para agendamento de equipe técnica própria em qualquer lugar do Brasil.',
      defaultMessage: 'Olá! Vi a apresentação de Instalação & Manutenção Profissional no site da Outfire e gostaria de solicitar atendimento para a minha cozinha.',
      detalhes: 'Interesse em Instalação Noturna, Manutenção Preventiva/Corretiva ou Recarga de Sistema.'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in">
      
      {/* Janela do Pop-up */}
      <div 
        className="bg-gradient-to-b from-[#121622] via-[#0d1017] to-[#07090d] border-2 border-[#d4af37]/60 rounded-3xl w-full max-w-4xl max-h-[94vh] flex flex-col shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#171c2b] to-[#0f131c]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono font-bold text-[#d4af37] tracking-wider">
                  Atendimento Especializado • Engenharia Outfire
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white font-sans">
                O que você precisa para a sua cozinha hoje?
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all cursor-pointer"
            title="Fechar Janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo do Pop-up com Scroll Suave */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 custom-scrollbar">
          
          {/* Abas de Seleção Interativa (Botões para o cliente escolher) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* Opção 1: Kit Completo */}
            <button
              type="button"
              onClick={() => setActiveTab('kit')}
              className={`p-3.5 sm:p-4 rounded-2xl border transition-all text-left flex items-center gap-3.5 cursor-pointer ${
                activeTab === 'kit'
                  ? 'bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] text-black border-[#f3e5ab] shadow-glow-gold scale-[1.01]'
                  : 'bg-[#141824] hover:bg-[#1a202e] text-white border-white/10'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                activeTab === 'kit' ? 'bg-black text-[#d4af37]' : 'bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30'
              }`}>
                <Package className="w-6 h-6" />
              </div>
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                  activeTab === 'kit' ? 'text-black/80 font-mono' : 'text-[#d4af37]'
                }`}>
                  Opção 1 • Projeto de Fábrica
                </span>
                <h4 className="text-sm sm:text-base font-black leading-tight">
                  Vendemos o Kit Completo
                </h4>
                <p className={`text-xs mt-0.5 ${
                  activeTab === 'kit' ? 'text-black/90 font-medium' : 'text-gray-400'
                }`}>
                  Central VTS, cilindros, bicos e conexões sob medida
                </p>
              </div>
            </button>

            {/* Opção 2: Instalação & Manutenção */}
            <button
              type="button"
              onClick={() => setActiveTab('instalacao')}
              className={`p-3.5 sm:p-4 rounded-2xl border transition-all text-left flex items-center gap-3.5 cursor-pointer ${
                activeTab === 'instalacao'
                  ? 'bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] text-black border-[#f3e5ab] shadow-glow-gold scale-[1.01]'
                  : 'bg-[#141824] hover:bg-[#1a202e] text-white border-white/10'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                activeTab === 'instalacao' ? 'bg-black text-[#d4af37]' : 'bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30'
              }`}>
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                  activeTab === 'instalacao' ? 'text-black/80 font-mono' : 'text-[#d4af37]'
                }`}>
                  Opção 2 • Equipe Nacional
                </span>
                <h4 className="text-sm sm:text-base font-black leading-tight">
                  Instalação & Manutenção
                </h4>
                <p className={`text-xs mt-0.5 ${
                  activeTab === 'instalacao' ? 'text-black/90 font-medium' : 'text-gray-400'
                }`}>
                  Sem parar a cozinha • ART no CREA • Multimarcas
                </p>
              </div>
            </button>

          </div>

          {/* Banner de Apresentação Selecionado */}
          <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-xl bg-black group">
            <img
              src={activeTab === 'kit' ? '/assets/apresentacao-kit-completo.jpg' : '/assets/apresentacao-instalacao-manutencao.jpg'}
              alt={activeTab === 'kit' ? 'Vendemos o Kit Completo' : 'Instalação e Manutenção Profissional'}
              className="w-full h-auto object-cover max-h-[360px] sm:max-h-[420px]"
            />

            {/* Botão de Ver em Tela Cheia */}
            <button
              type="button"
              onClick={() => setFullscreenImage(activeTab === 'kit' ? '/assets/apresentacao-kit-completo.jpg' : '/assets/apresentacao-instalacao-manutencao.jpg')}
              className="absolute top-3 right-3 p-2 rounded-xl bg-black/75 hover:bg-black/90 text-[#f3e5ab] hover:text-white border border-[#d4af37]/40 backdrop-blur-md text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              title="Ver Imagem Completa"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="hidden sm:inline">Ampliar</span>
            </button>
          </div>

          {/* Resumo dos Diferenciais da Opção Escolhida */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#141824] border border-white/5 space-y-2">
            <div className="text-xs font-bold text-[#f3e5ab] uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>
                {activeTab === 'kit' 
                  ? 'O que inclui no Kit de Fábrica Outfire:' 
                  : 'Garantias do Serviço de Instalação e Manutenção:'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
              {activeTab === 'kit' ? (
                <>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span>Central Outfire VTS com IHM Touchscreen e avisos de voz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span>Cilindro Inox Saponificante Classe K + Cilindro de CO2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span>Bicos de aspersão em inox, tubos, conexões e mangueiras R1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span>Detector de gás, sensores térmicos e baterias seladas Moura</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span>Montagem rápida e limpa no turno noturno (sem parar a cozinha)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span>Emissão de ART no CREA e Laudo de Estanqueidade NBR 14518</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span>Treinamento operacional para a equipe do restaurante</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span>Suporte e recargas em centrais Outfire, Ansul, Kidde e multimarcas</span>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Actions Bar */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0e121a] flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <button
            type="button"
            onClick={handleClose}
            className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer order-2 sm:order-1"
          >
            Continuar navegando no site
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2.5 w-full sm:w-auto order-1 sm:order-2">
            
            <a
              href="https://wa.me/5511916999411?text=Olá!%20Estava%20no%20site%20da%20Outfire%20e%20gostaria%20de%20um%20atendimento%20técnico."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(11) 91699-9411</span>
            </a>

            <button
              type="button"
              onClick={activeTab === 'kit' ? handleRequestKit : handleRequestInstallation}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-glow-gold hover:shadow-glow-gold-lg transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>
                {activeTab === 'kit' 
                  ? 'Solicitar Orçamento do Kit Completo' 
                  : 'Solicitar Instalação ou Manutenção'}
              </span>
            </button>

          </div>

        </div>

      </div>

      {/* Modal Fullscreen caso queira dar zoom total */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-2"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button
              type="button"
              onClick={() => setFullscreenImage(null)}
              className="absolute -top-12 right-0 p-2 text-white bg-white/10 hover:bg-white/20 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={fullscreenImage} 
              alt="Visualização em Tela Cheia" 
              className="max-h-[85vh] w-auto mx-auto object-contain rounded-xl shadow-2xl" 
            />
          </div>
        </div>
      )}

    </div>
  );
};
