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
    <section id="central-vts" className="py-24 bg-[#0d0f13] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-wide uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Engenharia e Automação Nacional
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Central de Comando Inteligente <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-red-500">
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
            <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1a1c23] to-[#0e1014] border border-white/10 p-4 shadow-2xl flex items-center justify-center overflow-hidden group">
              
              {/* Active Photo */}
              {activeTab === 'ihm' && (
                <img 
                  src="/assets/central-outfire-fundo-removido.png" 
                  alt="Central Outfire VTS 32S3" 
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(230,36,41,0.25)] transition-all duration-500 group-hover:scale-105"
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
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono text-gray-200">
                {activeTab === 'ihm' && 'Vista Frontal do Gabinete & IHM'}
                {activeTab === 'interno' && 'Eletrônica Robusta, Relés de Potência & Bornes'}
                {activeTab === 'instalado' && 'Instalação Real em Cozinha Profissional'}
              </div>
            </div>

            {/* Photo Selector Pills */}
            <div className="flex items-center gap-2 mt-4 bg-[#14161c] p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={() => setActiveTab('ihm')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'ihm'
                    ? 'bg-red-600 text-white shadow-glow-red'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Gabinete & IHM Touch
              </button>
              <button
                onClick={() => setActiveTab('interno')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'interno'
                    ? 'bg-red-600 text-white shadow-glow-red'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Eletrônica Interna
              </button>
              <button
                onClick={() => setActiveTab('instalado')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'instalado'
                    ? 'bg-red-600 text-white shadow-glow-red'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Instalação Real
              </button>
            </div>
          </div>

          {/* Key Specs Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white font-sans">
                    Painel Central VTS 32S3
                  </h3>
                  <span className="text-xs text-red-400 font-mono">
                    AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500">
                  <Shield className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Dupla Ação de Supressão:</strong> Saponificante na cocção + CO2 e Dampers no duto.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Corte de Gás e Exaustor:</strong> Intertravamento elétrico instantâneo ao sinal de disparo.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Detecção Térmica Regulável:</strong> Calibração em 145°C na coifa e 300°C no duto.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Bateria de Backup Interna:</strong> Funcionamento ininterrupto mesmo com queda de energia.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Menu protegido por senha:</strong> Previne alterações indevidas por pessoas não autorizadas.
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href="#calculadora"
                  className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-500 text-white font-bold text-center text-sm rounded-xl shadow-glow-red transition-all flex items-center justify-center gap-2"
                >
                  <span>Dimensionar para Minha Cozinha</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="/assets/manual-instalacao-central-outfire.pdf"
                  target="_blank"
                  className="py-3 px-4 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-semibold text-center text-sm rounded-xl border border-white/10 transition-all"
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
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-sans">
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
