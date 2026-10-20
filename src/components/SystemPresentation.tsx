import React, { useState } from 'react';
import { 
  Cpu, Shield, Volume2, Calendar, AlertTriangle, 
  Layers, CheckCircle, Radio, Gauge, Power, ArrowRight 
} from 'lucide-react';

export const SystemPresentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ihm' | 'interno' | 'instalado'>('ihm');

  const features = [
    {
      icon: Layers,
      title: 'Multicoifa Independente (Até 3 Coifas)',
      desc: 'Capacidade de proteger e controlar até 3 coifas simultaneamente de maneira 100% autônoma. O disparo em uma coifa não interrompe a operação das demais.'
    },
    {
      icon: Cpu,
      title: 'IHM Touchscreen Inteligente',
      desc: 'Interface gráfica colorida touch com diagnóstico contínuo de baterias, rede elétrica, pressão de cilindros e estado das válvulas de gás.'
    },
    {
      icon: Volume2,
      title: 'Alertas Inteligentes por Voz Falada',
      desc: 'Diferente de sistemas que apenas apitam gerando pânico, a Central VTS emite avisos sonoros falados em português, instruindo a brigada com clareza.'
    },
    {
      icon: Calendar,
      title: 'Agenda Semanal Automática de Gás',
      desc: 'Programe os horários em que a válvula de gás deve abrir e fechar a cada dia da semana. Garante segurança total fora do horário de expediente e evita esquecimentos.'
    },
    {
      icon: AlertTriangle,
      title: 'Proteção Anti-Disparo com Botão Abortar',
      desc: 'Em caso de alarme em falso, a tela exibe contagem regressiva configurável (ex: 60s) permitindo abortar com um toque antes de descarregar os cilindros.'
    },
    {
      icon: Radio,
      title: 'Alarme Convencional Segregado',
      desc: 'Integração perfeita com o sistema predial do shopping/edifício, mantendo a linha de supressão por saponificante imune a fumaças corriqueiras de grelhados.'
    }
  ];

  return (
    <section id="central-vts" className="py-24 bg-[#08090c] relative overflow-hidden">
      {/* Background Glows in Gold */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#997b1a]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold tracking-wide uppercase mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#d4af37]" />
            Engenharia e Automação Nacional
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Central de Comando Inteligente <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]">
              Outfire VTS 32S3
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            O verdadeiro cérebro do sistema de supressão. Controle absoluto, monitoramento em tempo real, 
            automação de gás e proteção anti-disparo acidental na ponta dos seus dedos.
          </p>
        </div>

        {/* Interactive Hardware Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Real Photo Viewer with View Switcher */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#14171e] to-[#0a0b0e] border border-[#d4af37]/30 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden group">
              
              {/* Active Photo */}
              {activeTab === 'ihm' && (
                <img 
                  src="/assets/central-outfire-fundo-removido.png" 
                  alt="Central Outfire VTS 32S3" 
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(212,175,55,0.25)] transition-all duration-500 group-hover:scale-105"
                />
              )}

              {activeTab === 'interno' && (
                <img 
                  src="/assets/central-outfire-interno.jpg" 
                  alt="Placa e Relés Internos da Central Outfire" 
                  className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"
                />
              )}

              {activeTab === 'instalado' && (
                <img 
                  src="/assets/central-outfire-instalada.jpg" 
                  alt="Central Outfire Instalada em Cozinha Real" 
                  className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"
                />
              )}

              {/* Tag indicator */}
              <div className="absolute bottom-4 left-4 bg-[#08090b]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#f3e5ab]">
                {activeTab === 'ihm' && 'Vista Frontal do Gabinete & IHM'}
                {activeTab === 'interno' && 'Eletrônica Robusta, Relés de Potência & Bornes'}
                {activeTab === 'instalado' && 'Instalação Real em Cozinha Profissional'}
              </div>
            </div>

            {/* Photo Selector Pills */}
            <div className="flex items-center gap-2 mt-4 bg-[#12141a] p-1.5 rounded-2xl border border-[#d4af37]/25 shadow-md">
              <button
                onClick={() => setActiveTab('ihm')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'ihm'
                    ? 'bg-[#d4af37] text-black shadow-glow-gold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Gabinete & IHM Touch
              </button>
              <button
                onClick={() => setActiveTab('interno')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'interno'
                    ? 'bg-[#d4af37] text-black shadow-glow-gold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Eletrônica Interna
              </button>
              <button
                onClick={() => setActiveTab('instalado')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'instalado'
                    ? 'bg-[#d4af37] text-black shadow-glow-gold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Instalação Real
              </button>
            </div>
          </div>

          {/* Key Specs Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white font-sans">
                    Painel Central VTS 32S3
                  </h3>
                  <span className="text-xs text-[#e5c05d] font-mono font-bold">
                    AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <Shield className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Dupla Ação de Supressão:</strong> Saponificante na cocção + CO2 e Dampers no duto.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Corte de Gás e Exaustor:</strong> Intertravamento elétrico instantâneo ao sinal de disparo.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Detecção Térmica Regulável:</strong> Calibração em 145°C na coifa e 300°C no duto.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Bateria de Backup Interna:</strong> Funcionamento ininterrupto mesmo com queda de rede.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Menu protegido por senha:</strong> Previne alterações indevidas por pessoas não autorizadas.
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href="#calculadora"
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-center text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2"
                >
                  <span>Dimensionar Cozinha</span>
                  <ArrowRight className="w-4 h-4 fill-black" />
                </a>

                <a
                  href="/assets/manual-instalacao-central-outfire.pdf"
                  target="_blank"
                  className="py-3 px-4 bg-[#14171e] hover:bg-[#1f2430] text-[#f3e5ab] font-bold text-center text-sm rounded-xl border border-[#d4af37]/30 transition-all"
                >
                  Baixar Manual Técnico
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-sans group-hover:text-[#f3e5ab] transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
