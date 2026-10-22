import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

export const FloatingWhatsApp: React.FC = () => {
  const { openLeadModal } = useWhatsAppModal();

  const handleClick = () => {
    openLeadModal({
      origem: 'whatsapp_flutuante',
      title: 'Atendimento Comercial & Engenharia',
      subtitle: 'Preencha seus dados para direcionarmos seu atendimento imediato no WhatsApp comercial oficial.',
      defaultMessage: 'Olá! Estou no site da Outfire e gostaria de solicitar um orçamento técnico para minha cozinha.'
    });
  };

  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#12141a]/95 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Falar com Engenheiro no WhatsApp 💬
      </div>

      <button
        type="button"
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 relative border-2 border-white/20 cursor-pointer"
        title="Atendimento no WhatsApp"
        aria-label="Atendimento no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/10" />

        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"></span>
        </span>
      </button>
    </aside>
  );
};
