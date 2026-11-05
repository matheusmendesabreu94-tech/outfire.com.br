import React, { useState } from 'react';
import { 
  FileText, Download, CheckCircle, ExternalLink, 
  ShieldCheck, AlertCircle, BookOpen, FileCheck,
  Building2, Sparkles, Filter
} from 'lucide-react';

type DocCategory = 'todas' | 'engenharia' | 'laudos_avcb' | 'seguranca_shoppings';

export const ManualsAndDocs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<DocCategory>('todas');

  const manuals = [
    {
      id: 'manual_usuario',
      category: 'engenharia',
      title: 'Manual do Usuário — Sistema OutFire® (Edição Oficial 2026)',
      type: 'Manual Mais Completo (14 Seções)',
      size: '1.2 MB',
      description: 'Guia operacional definitivo da IHM: Dashboard 2026, Setores e Modo Limpeza, Central Mista (CO2 + Detecção), Checklist Wizard 8 etapas, Alertas de Falha, Pré-Alarme 15s, Agenda de Gás, Avisos de Voz DAC, Pareamento Sem Fio e Garantia de 12 Meses.',
      link: '/manual-usuario.html',
      pdfLink: '/assets/Manual_Usuario_OutFire_2026.pdf',
      featured: true
    },
    {
      id: 'laudo_estanqueidade',
      category: 'laudos_avcb',
      title: 'Laudo Técnico de Estanqueidade Pneumática (150 PSI) & Ensaio de Disparo com ART',
      type: 'Laudo Oficial com ART CREA',
      size: 'A4 / Imprimível',
      description: 'Ensaio pneumático com nitrogênio a 150 PSI por 30 minutos em tubulação de aço inox 304, teste de corte imediato da solenoide de gás e desenergização do exaustor. Exigência fundamental de shoppings e bombeiros.',
      link: '/laudo-estanqueidade-nbr14518.html',
      pdfLink: '/laudo-estanqueidade-nbr14518.html',
      featured: true
    },
    {
      id: 'certificado_nbr14518',
      category: 'laudos_avcb',
      title: 'Certificado de Conformidade Técnica & Memorial Descritivo (NBR 14518)',
      type: 'Documento para Bombeiros / AVCB',
      size: 'A4 / Laudo Oficial',
      description: 'Documentação comprobatória das características técnicas, laudo de ensaios e conformidade estrita com a ABNT NBR 14518:2020 para instrução de processos no Corpo de Bombeiros.',
      link: '/certificado-conformidade-nbr14518.html',
      pdfLink: '/certificado-conformidade-nbr14518.html',
      featured: true
    },
    {
      id: 'fispq_classe_k',
      category: 'seguranca_shoppings',
      title: 'FISPQ / FDS — Agente Extintor Saponificante OutFire® Classe K',
      type: 'Ficha de Segurança Química (NBR 14725)',
      size: 'A4 / FISPQ Oficial',
      description: 'Composição química à base de sais orgânicos de potássio estabilizados. Atóxico, biodegradável (> 90%), seguro para a equipe da cozinha e homologado perante as vigilâncias sanitárias.',
      link: '/fispq-saponificante-classe-k.html',
      pdfLink: '/fispq-saponificante-classe-k.html',
      featured: true
    },
    {
      id: 'termo_garantia_noturna',
      category: 'seguranca_shoppings',
      title: 'Termo de Garantia Integral 12 Meses & Protocolo de Montagem Noturna em Shoppings',
      type: 'Garantia & Regras de Shopping',
      size: 'A4 / Termo Executivo',
      description: 'Condições de garantia de fábrica com troca expressa em 24h e diretrizes de montagem na madrugada (23h às 06h) sem solda aberta, com proteção térmica e liberação da cozinha às 06h.',
      link: '/termo-garantia-instalacao-noturna.html',
      pdfLink: '/termo-garantia-instalacao-noturna.html',
      featured: true
    },
    {
      id: 'apresentacao_comercial',
      category: 'engenharia',
      title: 'Apresentação Comercial Oficial — Sistema OUTFIRE® 2026',
      type: 'Apresentação Executiva (PDF)',
      size: '2.5 MB',
      description: 'Documento completo com arquitetura de cozinhas, automação quádrupla, especificações da Central VTS 32S3, 7 inovações exclusivas e conformidade técnica.',
      link: '/assets/Apresentacao_Comercial_Outfire_2026.pdf',
      pdfLink: '/assets/Apresentacao_Comercial_Outfire_2026.pdf',
      featured: false
    },
    {
      id: 'manual_tecnico_eletrico',
      category: 'engenharia',
      title: 'Manual Técnico e Esquema Elétrico Central Outfire 2026',
      type: 'PDF Oficial de Engenharia',
      size: '750 KB',
      description: 'Diagrama elétrico completo de bornes, acionamento das solenoides, intertravamento do exaustor, sensores reguláveis 145°C/300°C e dampers motorizados.',
      link: '/assets/Manual_Tecnico_OutFire_2026.pdf',
      pdfLink: '/assets/Manual_Tecnico_OutFire_2026.pdf',
      featured: false
    },
    {
      id: 'pop_pos_disparo',
      category: 'seguranca_shoppings',
      title: 'Procedimento Operacional Padrão (POP) Pós-Disparo',
      type: 'Guia Técnico Oficial (POP)',
      size: 'A4 / Imprimível',
      description: 'Instruções passo a passo para a equipe do restaurante após o combate a incêndio: limpeza do agente saponificante, cuidados com inox, rearme da válvula e recarga 24h.',
      link: '/pop-pos-disparo.html',
      pdfLink: '/pop-pos-disparo.html',
      featured: false
    }
  ];

  const filteredManuals = manuals.filter(man => {
    if (selectedCategory === 'todas') return true;
    return man.category === selectedCategory;
  });

  return (
    <section id="manuais" className="py-24 bg-[#0a0c0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Engenharia, AVCB & Shoppings
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Central de Documentações Técnicas, <br />
            <span className="gold-gradient-text">
              Laudos com ART & Manuais Oficiais
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            Kit documental homologado e completo exigido por administradoras de shopping centers (Multiplan, Ancar, Allos, Iguatemi), bombeiros para concessão de AVCB e engenheiros projetistas.
          </p>

          {/* Filtros por Categoria */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedCategory('todas')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === 'todas'
                  ? 'bg-[#d4af37] text-black shadow-glow-gold'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              Todos os Documentos ({manuals.length})
            </button>

            <button
              onClick={() => setSelectedCategory('laudos_avcb')}
              className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                selectedCategory === 'laudos_avcb'
                  ? 'bg-[#d4af37] text-black shadow-glow-gold'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Laudos & AVCB Bombeiros</span>
            </button>

            <button
              onClick={() => setSelectedCategory('seguranca_shoppings')}
              className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                selectedCategory === 'seguranca_shoppings'
                  ? 'bg-[#d4af37] text-black shadow-glow-gold'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Normas de Shoppings & FISPQ</span>
            </button>

            <button
              onClick={() => setSelectedCategory('engenharia')}
              className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                selectedCategory === 'engenharia'
                  ? 'bg-[#d4af37] text-black shadow-glow-gold'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Manuais de Engenharia</span>
            </button>
          </div>
        </div>

        {/* Manuals Download Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredManuals.map((man) => (
            <div 
              key={man.id}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                man.featured 
                  ? 'glass-panel-gold border-amber-500/40 bg-gradient-to-b from-[#1a1710] to-[#0e1014] shadow-glow-gold' 
                  : 'glass-panel border-white/10 bg-[#0e121a]/60 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md ${
                    man.featured 
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                      : 'bg-white/10 text-gray-300'
                  }`}>
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

      </div>
    </section>
  );
};
