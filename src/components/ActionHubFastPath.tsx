import React from 'react';
import { 
  Package, ShieldCheck, Wrench, Cpu, 
  ArrowRight, Sparkles, CheckCircle2, Phone, 
  MessageSquare, Flame, Clock, Award, Layers
} from 'lucide-react';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

export const ActionHubFastPath: React.FC = () => {
  const { openLeadModal } = useWhatsAppModal();

  // 1. Kit para Instalação Própria ou com Terceiros
  const handleOpenKitOnly = () => {
    openLeadModal({
      origem: 'hub_kit_terceiros',
      title: 'Comprar Kit de Fábrica (Instalação Própria / Terceiros)',
      subtitle: 'Preencha seus dados para receber o orçamento do Kit Completo com envio para qualquer cidade do Brasil.',
      defaultMessage: 'Olá! Tenho interesse em adquirir o Kit de Instalação Outfire direto de fábrica para montagem própria/com terceiros na minha cozinha.',
      detalhes: 'Interesse no fornecimento de equipamentos do Kit de Fábrica (Central VTS 32S3 Touch, Cilindro Saponificante Classe K, Cilindro CO2, bicos, tubos e sensores).'
    });
  };

  // 2. Kit Completo + Instalação Especializada Outfire (Turnkey Noturno)
  const handleOpenTurnkey = () => {
    openLeadModal({
      origem: 'hub_kit_instalacao_outfire',
      title: 'Kit Completo + Instalação Especializada Outfire',
      subtitle: 'Nossa equipe própria realiza a montagem noturna turnkey com emissão de ART no CREA e Laudo de Estanqueidade para os Bombeiros.',
      defaultMessage: 'Olá! Gostaria de um orçamento da Solução Completa Outfire (Kit de Fábrica + Montagem Noturna Especializada com ART e Laudo para Bombeiros/AVCB).',
      detalhes: 'Interesse na Solução Turnkey Noturna (23h às 05h sem parar a cozinha): equipamentos + tubulação inox + montagem + ART CREA + laudo Bombeiros.'
    });
  };

  // 3. Instalação & Manutenção (Sistemas Novos & Multimarcas)
  const handleOpenMaintenance = () => {
    openLeadModal({
      origem: 'hub_instalacao_manutencao',
      title: 'Instalação, Manutenção & Adequação AVCB',
      subtitle: 'Vistorias preventivas, corretivas, recargas de saponificante/CO2 e regularização para sistemas Outfire, Ansul, Kidde e multimarcas.',
      defaultMessage: 'Olá! Preciso de manutenção preventiva/corretiva, recarga ou adequação de Bombeiros para a coifa do meu restaurante.',
      detalhes: 'Interesse em Manutenção, Recarga de Classe K/CO2, Troca de Sensores ou Regularização de AVCB para sistema de combate a incêndio.'
    });
  };

  // 4. Conhecer a Central VTS 32S3 & Tecnologia ("UTI da Central")
  const handleScrollToCentral = () => {
    const el = document.getElementById('central-vts');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#central-vts';
    }
  };

  return (
    <section 
      id="caminhos-comerciais" 
      className="py-16 sm:py-20 bg-[#08090b] relative border-t border-[#d4af37]/30 scroll-mt-20 overflow-hidden"
    >
      {/* Âncoras auxiliares para links diretos */}
      <span id="escolha-solucao" className="absolute -top-20" aria-hidden="true" />
      <span id="direcionamento-comercial" className="absolute -top-20" aria-hidden="true" />

      {/* Luzes de fundo atmosféricas */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Direcionamento Rápido • Atendimento Nacional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
            Como Podemos Proteger <br className="hidden sm:inline" />
            <span className="gold-gradient-text">
              a Sua Cozinha Hoje?
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            Seja para comprar o kit de fábrica, contratar a instalação noturna completa com ART ou solicitar manutenção periódica: <strong className="text-white">escolha a opção abaixo para atendimento imediato.</strong>
          </p>
        </div>

        {/* Grid com os 4 Caminhos Estratégicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          
          {/* ============================================================== */}
          {/* CARD 1: VENDA DIRETA DO KIT DE FÁBRICA (COM TERCEIROS) */}
          {/* ============================================================== */}
          <div className="rounded-3xl bg-[#0c0e15] border border-white/10 hover:border-[#d4af37]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] group relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/15 text-[11px] font-mono text-gray-300 font-bold">
                  📦 Venda Direta
                </span>
                <span className="text-[10px] text-gray-400 font-mono">Envio Nacional</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-[#d4af37]/15 border border-white/10 group-hover:border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mb-4 transition-all">
                <Package className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-black text-white group-hover:text-[#f3e5ab] transition-colors mb-2">
                Kit de Instalação (Fábrica)
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Compre o kit completo homologado direto da fábrica Outfire para instalação com equipe própria ou técnicos terceirizados.
              </p>

              <ul className="space-y-2 text-[11px] text-gray-400 border-t border-white/5 pt-3 mb-6">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Central Touchscreen VTS 32S3</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Cilindro Classe K + Cilindro CO2</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Bicos Inox, tubos, mangueiras e sensores</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Manual de montagem e memorial técnico</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleOpenKitOnly}
              className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-[#d4af37] text-white hover:text-black font-extrabold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group-hover:shadow-glow-gold"
            >
              <span>Solicitar Kit de Fábrica</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* ============================================================== */}
          {/* CARD 2: KIT COMPLETO + INSTALAÇÃO OUTFIRE (DESTAQUE / MAIS VENDIDO) */}
          {/* ============================================================== */}
          <div className="rounded-3xl bg-gradient-to-b from-[#181512] via-[#0f1118] to-[#0c0e15] border-2 border-[#d4af37] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-[0_0_35px_rgba(212,175,55,0.25)] relative group lg:-mt-2 lg:mb-2">
            
            {/* Tag Superior de Destaque */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black text-[10px] font-black uppercase tracking-wider shadow-glow-gold whitespace-nowrap flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-black" />
              <span>Mais Escolhido • Turnkey Noturno</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 pt-1">
                <span className="px-2.5 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-[11px] font-mono text-[#f3e5ab] font-bold">
                  ⭐ Solução Completa
                </span>
                <span className="text-[10px] text-amber-300 font-mono font-bold">Sem Parar a Cozinha</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#b89628] flex items-center justify-center text-black mb-4 shadow-glow-gold">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-black text-white group-hover:text-[#f3e5ab] transition-colors mb-2">
                Kit + Instalação Outfire
              </h3>

              <p className="text-xs text-amber-100/90 leading-relaxed mb-4">
                Engenharia de ponta a ponta. Nossa equipe própria monta no período noturno (23h às 05h) e entrega pronto com ART do CREA.
              </p>

              <ul className="space-y-2 text-[11px] text-gray-300 border-t border-amber-500/20 pt-3 mb-6">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span><strong>Todos os equipamentos do kit inclusos</strong></span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span><strong>Montagem Noturna rápida e limpa</strong></span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Tubulação Inox 304 escovado e conexões</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span><strong>Emissão de ART no CREA & Laudo Bombeiros</strong></span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Treinamento operacional para a equipe</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleOpenTurnkey}
              className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89628] hover:from-[#f3e5ab] hover:to-[#d4af37] text-black font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-glow-gold hover:shadow-glow-gold-lg hover:scale-105"
            >
              <span>Solicitar Kit + Instalação</span>
              <ArrowRight className="w-4 h-4 fill-black" />
            </button>
          </div>

          {/* ============================================================== */}
          {/* CARD 3: INSTALAÇÃO & MANUTENÇÃO (MULTIMARCAS & REGULARIZAÇÃO) */}
          {/* ============================================================== */}
          <div className="rounded-3xl bg-[#0c0e15] border border-white/10 hover:border-emerald-500/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] group relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 font-bold">
                  🔧 Suporte Técnico
                </span>
                <span className="text-[10px] text-gray-400 font-mono">Multimarcas</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-emerald-500/15 border border-white/10 group-hover:border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 transition-all">
                <Wrench className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-black text-white group-hover:text-emerald-300 transition-colors mb-2">
                Instalação & Manutenção
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Manutenção preventiva e corretiva, recargas e regularização de laudos para sistemas Outfire e marcas parceiras.
              </p>

              <ul className="space-y-2 text-[11px] text-gray-400 border-t border-white/5 pt-3 mb-6">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Atendimento: Outfire, Ansul, Kidde e outras</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Recarga rápida de Saponificante e CO2</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Troca de baterias seladas e teste de solenoide</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Laudos de Estanqueidade para AVCB / Bombeiros</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleOpenMaintenance}
              className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-emerald-600 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span>Solicitar Manutenção / Recarga</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* ============================================================== */}
          {/* CARD 4: DETALHES DA CENTRAL VTS 32S3 & TECNOLOGIA */}
          {/* ============================================================== */}
          <div className="rounded-3xl bg-[#0c0e15] border border-white/10 hover:border-cyan-500/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] group relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 font-bold">
                  🖥️ Inteligência VTS
                </span>
                <span className="text-[10px] text-gray-400 font-mono">Touchscreen</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-cyan-500/15 border border-white/10 group-hover:border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-4 transition-all">
                <Cpu className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors mb-2">
                Conhecer a Central VTS
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Conheça a tecnologia autônoma da Central Outfire VTS 32S3 com painel digital touch, corte de gás e supervisão contínua.
              </p>

              <ul className="space-y-2 text-[11px] text-gray-400 border-t border-white/5 pt-3 mb-6">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Display Touchscreen colorido e avisos de voz</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Corte automático de gás em menos de 1 segundo</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Supervisão de baterias seladas Moura (72h)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Disparo duplo elétrico e mecânico redundante</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleScrollToCentral}
              className="w-full py-3.5 px-4 rounded-xl bg-cyan-600/20 hover:bg-cyan-500 text-cyan-300 hover:text-black font-extrabold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] border border-cyan-500/40"
            >
              <span>Ver Detalhes da Central</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Faixa Inferior de Contato Imediato WhatsApp */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#12151e] via-[#151926] to-[#0f121a] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 hidden sm:flex">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                <span>Dúvida técnica ou projeto urgente para o shopping?</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                  Online
                </span>
              </h4>
              <p className="text-xs text-gray-400">
                Fale diretamente com nossa engenharia pelo WhatsApp: resposta em minutos com dimensionamento preliminar.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5511916999411?text=Olá!%20Passei%20pela%20apresentação%20no%20site%20da%20Outfire%20e%20gostaria%20de%20um%20atendimento%20rápido%20para%20a%20minha%20cozinha."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 hover:scale-105 transition-all shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Falar no WhatsApp: (11) 91699-9411</span>
          </a>
        </div>

      </div>
    </section>
  );
};
