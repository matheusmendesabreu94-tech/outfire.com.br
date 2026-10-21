import React from 'react';
import { 
  FileText, Download, CheckCircle, ExternalLink, 
  Wrench, ShieldCheck, AlertCircle, BookOpen, FileCheck 
} from 'lucide-react';

export const ManualsAndDocs: React.FC = () => {
  const manuals = [
    {
      title: 'Manual do Usuário — Sistema OutFire® (Edição Oficial 2026)',
      type: 'Manual Mais Completo (14 Seções)',
      size: '1.2 MB',
      description: 'Guia operacional definitivo da IHM: Dashboard 2026, Setores e Modo Limpeza, Central Mista (CO2 + Detecção), Checklist Wizard 8 etapas, Alertas de Falha, Pré-Alarme 15s, Agenda de Gás, Avisos de Voz DAC, Pareamento Sem Fio e Garantia de 12 Meses.',
      link: '/manual-usuario.html',
      pdfLink: '/assets/Manual_Usuario_OutFire_2026.pdf',
      featured: true
    },
    {
      title: 'Manual Técnico e Esquema Elétrico Central Outfire 2026',
      type: 'PDF Oficial de Engenharia',
      size: '750 KB',
      description: 'Diagrama elétrico completo de bornes, acionamento das solenoides, intertravamento do exaustor, sensores reguláveis 145°C/300°C e dampers motorizados.',
      link: '/assets/Manual_Tecnico_OutFire_2026.pdf',
      pdfLink: '/assets/Manual_Tecnico_OutFire_2026.pdf',
      featured: true
    },
    {
      title: 'Procedimento Operacional Padrão (POP) Pós-Disparo',
      type: 'Guia Técnico Oficial (POP)',
      size: 'A4 / Imprimível',
      description: 'Instruções passo a passo para a equipe do restaurante após o combate a incêndio: limpeza do agente saponificante, cuidados com inox, rearme da válvula e recarga 24h.',
      link: '/pop-pos-disparo.html',
      pdfLink: '/pop-pos-disparo.html',
      featured: true
    },
    {
      title: 'Certificado de Conformidade Técnica & Memorial Descritivo (NBR 14518)',
      type: 'Documento para Bombeiros / AVCB',
      size: 'A4 / Laudo Oficial',
      description: 'Documentação comprobatória das características técnicas, laudo de ensaios e conformidade estrita com a ABNT NBR 14518:2020 para instrução de processos no Corpo de Bombeiros.',
      link: '/certificado-conformidade-nbr14518.html',
      pdfLink: '/certificado-conformidade-nbr14518.html',
      featured: true
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Posicionamento da Central VTS 32S3',
      desc: 'Fixar o painel em local de fácil visualização e acesso fora da zona de fogo direto, a 1,50m do piso, próximo à rota de saída.'
    },
    {
      step: '02',
      title: 'Passagem dos Cabos Blindados de Alta Temperatura',
      desc: 'Lançar a fiação dos sensores da coifa (145°C) e dos sensores do duto (300°C) utilizando conduítes metálicos independentes.'
    },
    {
      step: '03',
      title: 'Interligação da Válvula de Gás e Exaustor',
      desc: 'Conectar os contatos secos (relés) da central à bobina da válvula solenoide de gás e ao contator do motor de exaustão.'
    },
    {
      step: '04',
      title: 'Comissionamento e Teste sem Disparo',
      desc: 'Simular acionamento pelo menu de teste da IHM para validar corte de gás e parada do exaustor antes da liberação final.'
    }
  ];

  return (
    <section id="manuais" className="py-24 bg-[#0a0c0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Engenharia & Suporte
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Central de Manuais Técnicos & <br />
            <span className="gold-gradient-text">
              Documentos de Instalação
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            Tenha acesso imediato aos esquemas elétricos, guias de montagem passo a passo 
            e memoriais de cálculo para instaladores, engenheiros e montadores de coifa.
          </p>
        </div>

        {/* Manuals Download Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {manuals.map((man, i) => (
            <div 
              key={i}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                man.featured 
                  ? 'glass-panel-gold border-amber-500/40 bg-gradient-to-b from-[#1a1710] to-[#0e1014] shadow-glow-gold' 
                  : 'glass-panel border-white/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold bg-white/10 text-gray-300 px-2.5 py-1 rounded-md">
                    {man.type}
                  </span>
                  <FileText className={`w-6 h-6 ${man.featured ? 'text-amber-400' : 'text-gray-400'}`} />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-sans">
                  {man.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {man.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs text-gray-400 font-mono">
                  {man.size}
                </span>

                <div className="flex items-center gap-2">
                  {man.pdfLink && man.pdfLink !== man.link && (
                    <a
                      href={man.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white transition-all"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      <span>Ver Online</span>
                    </a>
                  )}

                  <a
                    href={man.pdfLink || man.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                      man.featured 
                        ? 'gold-gradient hover:brightness-110 text-black font-extrabold shadow-glow-gold' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{man.link.endsWith('.pdf') ? 'Baixar PDF' : 'Ver / Imprimir'}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick 4-Step Installation Roadmap */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10">
          <div className="flex items-center gap-2.5 mb-6">
            <Wrench className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white font-sans">
              Guia Prático de Instalação da Central Outfire VTS 32S3
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="p-4 bg-white/5 rounded-2xl border border-white/5 relative">
                <span className="text-2xl font-black text-amber-400 font-mono block mb-2 opacity-90">
                  {st.step}
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5 font-sans">
                  {st.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-300 text-center sm:text-left">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Precisa de suporte na instalação da sua equipe? Engenheiros especializados disponíveis por WhatsApp.</span>
            </div>

            <a
              href="https://wa.me/5515996576807?text=Ol%C3%A1%2C%20sou%20instalador%2Fengenheiro%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20a%20Central%20Outfire."
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/10 transition-all shrink-0"
            >
              Suporte Técnico de Engenharia &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
