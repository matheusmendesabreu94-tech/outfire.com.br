import React from 'react';
import { 
  AlertTriangle, XCircle, CheckCircle2, Flame, 
  Droplet, ShieldAlert, Sparkles, TrendingUp 
} from 'lucide-react';

export const WhyOutfire: React.FC = () => {
  return (
    <section id="por-que-outfire" className="py-24 bg-[#0a0c0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            Entenda o Risco Real em Cozinhas Industriais
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Por Que Extintores Comuns e Água <br />
            <span className="text-red-500">São Fatais em Incêndio de Óleo?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            Mais de 65% dos incêndios que destroem restaurantes começam na linha de cocção. 
            Conheça a diferença entre uma tragédia anunciada e a proteção autônoma Classe K.
          </p>
        </div>

        {/* 3-Way Comparative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Option 1: Água (Extremamente Fatal) */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black/40 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30">
                  PERIGO EXTREMO
                </span>
                <XCircle className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-sans">
                Jogar Água em Óleo Fervente
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                A água ferve a 100°C e o óleo em chamas está acima de 360°C. Ao atingir o fundo da cuba, a água vaporiza instantaneamente, expandindo seu volume em <strong>1.700 vezes</strong>.
              </p>

              <div className="p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-300 space-y-2">
                <div className="flex items-center gap-2 font-bold">
                  <Flame className="w-4 h-4 text-red-400" />
                  Efeito Bola de Fogo (BLEVE):
                </div>
                <p>
                  O óleo ardente é arremessado no teto e contra os cozinheiros em uma fração de segundo, gerando queimaduras de 3° grau e destruição imediata da cozinha.
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-red-900/30 text-xs font-mono text-red-400 font-bold">
              Resultado: Tragédia & Risco de Morte
            </div>
          </div>

          {/* Option 2: Extintor de Pó Comum (ABC / BC) */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-900/30 bg-gradient-to-b from-amber-950/10 to-black/40 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30">
                  INEFICAZ NA PRÁTICA
                </span>
                <XCircle className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-sans">
                Extintor Manual de Pó (ABC)
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Extintores de pó químico comum sufocam a chama por poucos segundos, mas <strong>não resfriam a massa de óleo</strong>, que permanece acima do ponto de ignição.
              </p>

              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300 space-y-2">
                <div className="flex items-center gap-2 font-bold">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Reignição e Sujeira Tóxica:
                </div>
                <p>
                  Assim que o pó se dissipa ou o ar circula, o óleo em chamas volta a pegar fogo com a mesma violência. Além disso, o pó contamina todos os alimentos e dutos.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-900/30 text-xs font-mono text-amber-400 font-bold">
              Resultado: Reignição e Perda Total
            </div>
          </div>

          {/* Option 3: Outfire Classe K + CO2 */}
          <div className="glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/60 bg-gradient-to-b from-[#1a170e]/80 via-[#0e1015] to-[#08090c] relative flex flex-col justify-between shadow-glow-gold">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black bg-[#d4af37] text-black px-3 py-1 rounded-full shadow-glow-gold">
                  SOLUÇÃO DEFINITIVA OUTFIRE
                </span>
                <CheckCircle2 className="w-7 h-7 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-black text-white mb-2 font-sans">
                Sistema Automatizado Outfire
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Ao disparar, o agente saponificante reage quimicamente com os ácidos graxos do óleo quente em um processo chamado <strong>saponificação</strong>.
              </p>

              <div className="p-4 rounded-xl bg-[#14171e] border border-[#d4af37]/30 text-xs text-[#f3e5ab] space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#e5c05d]">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  Manta Espumosa e Resfriamento:
                </div>
                <p className="text-gray-300">
                  Cria uma espessa manta de sabão alcalino que bloqueia o oxigênio, impede a liberação de vapores inflamáveis e resfria o óleo rapidamente. O CO2 protege o duto sem deixar resíduos.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#d4af37]/30 text-xs font-mono text-[#e5c05d] font-bold">
              Resultado: Fogo 100% Extinto & Cozinha Salva
            </div>
          </div>

        </div>

        {/* Shock Statistics Box */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#121418] border border-white/10 text-center">
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-black text-red-500 font-mono">65%</div>
            <p className="text-xs text-gray-400 mt-2">
              dos incêndios em restaurantes iniciam nos equipamentos de cocção e coifas.
            </p>
          </div>

          <div className="p-4 border-t md:border-t-0 md:border-l border-white/10">
            <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">360°C</div>
            <p className="text-xs text-gray-400 mt-2">
              temperatura crítica em que o óleo vegetal entra em autoignição espontânea.
            </p>
          </div>

          <div className="p-4 border-t md:border-t-0 md:border-l border-white/10">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">0 seg</div>
            <p className="text-xs text-gray-400 mt-2">
              tempo de hesitação humana: a Central Outfire atua 100% de forma autônoma.
            </p>
          </div>

          <div className="p-4 border-t md:border-t-0 md:border-l border-white/10">
            <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono">100%</div>
            <p className="text-xs text-gray-400 mt-2">
              garantia de conformidade para aprovação em vistoria do Corpo de Bombeiros (AVCB).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
