import React from 'react';
import { 
  FileCheck2, ShieldCheck, Scale, Award, 
  AlertCircle, Building2, CheckCircle2, ChevronRight 
} from 'lucide-react';

export const NormsCompliance: React.FC = () => {
  const norms = [
    {
      code: 'ABNT NBR 14518',
      title: 'Sistemas de Ventilação para Cozinhas Profissionais',
      authority: 'Associação Brasileira de Normas Técnicas',
      details: 'Estabelece a obrigatoriedade de sistema fixo automático de extinção de incêndio para coifas, dutos e equipamentos de cocção com óleo ou gordura.',
      highlights: [
        'Intertravamento obrigatório de gás e energia elétrica',
        'Desligamento automático do sistema de exaustão mecânica',
        'Proteção específica por agente Classe K nos aparelhos de queima',
        'Dampers corta-fogo para bloqueio de propagação em dutos'
      ]
    },
    {
      code: 'NFPA 96 & NFPA 17A',
      title: 'Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations',
      authority: 'National Fire Protection Association (USA)',
      details: 'Padrão global mais respeitado do mundo para dimensionamento de agentes saponificantes líquidos e inundação por gás inerte em dutos de cocção comercial.',
      highlights: [
        'Tempo máximo de resposta de detecção térmica',
        'Cobertura milimétrica por bico aspersor calibrado',
        'Mínimo de autonomia de agente extintor para resfriamento total',
        'Acionador manual de emergência em rota de fuga'
      ]
    },
    {
      code: 'Instruções Técnicas do Corpo de Bombeiros',
      title: 'Emissão e Renovação de AVCB / CLCB',
      authority: 'Polícia Militar do Estado de São Paulo / Corpos de Bombeiros Estaduais',
      details: 'Exigência legal indispensável para a liberação de alvarás de funcionamento de restaurantes, lanchonetes, padarias, hotéis e praças de alimentação de shoppings.',
      highlights: [
        'Condição mandatória para aprovação em vistoria física',
        'Evita multas pesadas e interdição cautelar imediata da cozinha',
        'Garante laudo ART emitido por Engenheiro Mecânico credenciado',
        'Laudo de comissionamento e teste hidrostático'
      ]
    }
  ];

  return (
    <section id="normas" className="py-24 bg-[#0d0f13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wide mb-4">
            <Scale className="w-3.5 h-3.5" />
            Conformidade Regulatória Obrigatória
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Normas Técnicas & Exigências <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
              do Corpo de Bombeiros (AVCB)
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            Instalar o sistema Outfire não é apenas segurança: é uma exigência legal para 
            manter seu restaurante aberto, aprovado em vistorias e coberto pela apólice de seguro.
          </p>
        </div>

        {/* Norm Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {norms.map((norm, index) => (
            <div 
              key={index}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">
                    {norm.code}
                  </span>
                  <FileCheck2 className="w-6 h-6 text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-1 font-sans">
                  {norm.title}
                </h3>
                <span className="text-xs text-gray-400 block mb-4 font-medium">
                  {norm.authority}
                </span>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {norm.details}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {norm.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-semibold">
                <span>100% Atendido pelo Sistema Outfire</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Insurance & Shopping Warning Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-black/60 to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0">
            <Building2 className="w-8 h-8" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              Atenção: Shoppings e Seguradoras não toleram improvisos!
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Em caso de princípio de incêndio em coifas sem sistema fixo automatizado conforme a <strong>NBR 14518</strong>, 
              as companhias de seguro negam o pagamento da indenização por infração grave às normas. 
              Grandes shoppings exigem laudo de comissionamento Outfire para liberar a operação da loja.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://wa.me/5515996576807?text=Ol%C3%A1%2C%20preciso%20de%20um%20laudo%20ou%20projeto%20Outfire%20para%20aprovar%20minha%20cozinha%20no%20Corpo%20de%20Bombeiros%2FShopping."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-glow-red transition-all block text-center"
            >
              Consultar Engenheiro Outfire
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
