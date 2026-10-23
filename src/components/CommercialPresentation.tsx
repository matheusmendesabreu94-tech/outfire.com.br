import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Maximize2, Download, 
  Sparkles, Video, Film, Eye, ChevronLeft, ChevronRight, 
  X, CheckCircle, ShieldCheck, Flame, Wrench, Layers, 
  FileText, ArrowRight, PhoneCall, ExternalLink
} from 'lucide-react';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

type CategoryFilter = 'todos' | 'engenharia' | 'cenarios' | 'inovacao' | 'operacao';

interface SlideItem {
  id: string;
  title: string;
  category: 'engenharia' | 'cenarios' | 'inovacao' | 'operacao';
  categoryLabel: string;
  image: string;
  description: string;
  highlights: string[];
}

const presentationSlides: SlideItem[] = [
  {
    id: 'capa',
    title: 'Sistema OUTFIRE® — Apresentação Comercial 2026',
    category: 'operacao',
    categoryLabel: 'Apresentação Oficial',
    image: '/assets/presentation/capa_apresentacao.jpg',
    description: 'Apresentação executiva e técnica da solução definitiva contra incêndio em cozinhas profissionais e industriais.',
    highlights: ['Classe K Especial', 'Automação Híbrida', 'Conformidade NBR 14518']
  },
  {
    id: 'risco',
    title: 'O Risco é Real: Gordura Acumulada em Chamas',
    category: 'cenarios',
    categoryLabel: 'O Risco em Cozinhas',
    image: '/assets/presentation/risco_real.jpg',
    description: 'Gordura vegetal e animal atinge autoignição a 360°C. A água vaporiza violentamente e espalha o fogo pelos dutos em segundos.',
    highlights: ['Fogo nos dutos a >400°C', 'Água agrava o incêndio', 'Risco estrutural severo']
  },
  {
    id: 'solucao',
    title: 'A Solução OUTFIRE: Supressão Inteligente',
    category: 'cenarios',
    categoryLabel: 'Solução Definitiva',
    image: '/assets/presentation/solucao_outfire.jpg',
    description: 'Sistema automático completo com agente saponificante de alta performance que encapsula a gordura e extingue as chamas instantaneamente.',
    highlights: ['Saponificação imediata', 'Resfriamento contínuo', 'Capa protetora anti-reignição']
  },
  {
    id: 'arquitetura',
    title: 'Arquitetura Completa da Cozinha em Corte',
    category: 'engenharia',
    categoryLabel: 'Engenharia da Cozinha',
    image: '/assets/presentation/arquitetura_cozinha.jpg',
    description: 'Visão esquemática em corte frontal com bicos aspersores, termovelocimétricos, coifa, dutos de exaustão, central VTS e cilindros.',
    highlights: ['Corte frontal esquemático', 'Bicos aspersores calibrados', 'Proteção tripla (fogão, coifa, duto)']
  },
  {
    id: 'automacao',
    title: 'Automação Total: 4 Ações Simultâneas',
    category: 'engenharia',
    categoryLabel: 'Automação & Intertravamento',
    image: '/assets/presentation/automacao_total.jpg',
    description: 'Em milissegundos a central corta o fornecimento de gás, desliga a energia elétrica dos equipamentos, comanda o exaustor e descarrega o agente.',
    highlights: ['Corte imediato de gás', 'Desligamento elétrico', 'Disparo seguro de saponificante']
  },
  {
    id: 'cenario-combate',
    title: 'Cenário 1: Combate a Incêndio Real em 4 Fases',
    category: 'cenarios',
    categoryLabel: 'Cenário 1: Incêndio Real',
    image: '/assets/presentation/cenario_combate_real.jpg',
    description: 'Sequência cronológica automática: detecção ultrarrápida, sirene audiovisual 105 dB, descarga direcionada e inundação de CO2 nos dutos.',
    highlights: ['Detecção milissegundos', 'Sirene e aviso de voz', 'Inundação total dos dutos']
  },
  {
    id: 'cenario-falso-alarme',
    title: 'Cenário 2: Falso Alarme Evitado em até 60s',
    category: 'cenarios',
    categoryLabel: 'Cenário 2: Falso Alarme',
    image: '/assets/presentation/cenario_falso_alarme.jpg',
    description: 'Pré-alarme configurável na IHM Touch permite ao operador abortar o disparo em caso de fumaça culinária acidental, evitando prejuízos operacionais.',
    highlights: ['Contagem regressiva na tela', 'Cancelamento por toque', 'Zero parada de produção']
  },
  {
    id: 'especificacoes',
    title: 'Dimensões e Especificações da Central VTS',
    category: 'engenharia',
    categoryLabel: 'Especificações Técnicas',
    image: '/assets/presentation/especificacoes_tecnicas.jpg',
    description: 'Gabinete metálico compacto em aço carbono (36x26x15 cm, 5,5 kg), pintura eletrostática a pó, display 3.5" IPS Touch e baterias internas.',
    highlights: ['Compacta: 36 x 26 x 15 cm', 'Peso total: 5,5 kg', 'Display 3.5" IPS colorido']
  },
  {
    id: 'duto-co2',
    title: 'Proteção Dedicada de Dutos (Injeção de CO2)',
    category: 'engenharia',
    categoryLabel: 'Proteção de Dutos',
    image: '/assets/presentation/protecao_duto_co2.jpg',
    description: 'Módulo de combate por CO2 exclusivo para a coluna de exaustão, impedindo que as chamas migrem para os andares superiores do edifício.',
    highlights: ['Inundação rápida por CO2', 'Interrupção da tiragem', 'Proteção vertical do duto']
  },
  {
    id: 'ihm-touch',
    title: 'IHM Touchscreen Gráfica Colorida',
    category: 'inovacao',
    categoryLabel: 'Interface IHM Touch',
    image: '/assets/presentation/inteligencia_touch.jpg',
    description: 'Interface gráfica moderna de alta resolução com controle intuitivo de todas as funções, testes de bancada e checklist integrado.',
    highlights: ['Controle tátil intuitivo', 'Wizard de comissionamento', 'Histórico completo de eventos']
  },
  {
    id: 'central-futuro',
    title: 'Infográfico: A Central do Futuro (7 Inovações)',
    category: 'inovacao',
    categoryLabel: 'Tecnologia Avançada',
    image: '/assets/presentation/central_do_futuro.jpg',
    description: 'Os 7 pilares tecnológicos exclusivos da engenharia Outfire: display IPS, dupla detecção, corte elétrico, no-break interno e garantia estendida.',
    highlights: ['Dupla detecção térmica', 'No-break integrado 24h', 'Sem cabos de aço frágeis']
  },
  {
    id: 'diferenciais',
    title: 'Diferenciais Competitivos OUTFIRE®',
    category: 'inovacao',
    categoryLabel: 'Diferenciais de Mercado',
    image: '/assets/presentation/diferenciais_competitivos.jpg',
    description: 'Comparativo técnico demonstrando superioridade frente aos sistemas mecânicos obsoletos do mercado nacional.',
    highlights: ['Acionamento eletrônico veloz', 'Resposta em milissegundos', 'Garantia de 12 meses']
  },
  {
    id: 'conformidade',
    title: 'Conformidade com Normas ABNT & NFPA',
    category: 'inovacao',
    categoryLabel: 'Certificação & Normas',
    image: '/assets/presentation/conformidade_normas.jpg',
    description: 'Projetado e certificado sob os mais rigorosos critérios da ABNT NBR 14518:2020, NFPA 17A, NFPA 96 e Corpo de Bombeiros.',
    highlights: ['ABNT NBR 14518:2020', 'NFPA 17A e NFPA 96', 'Aprovado para AVCB']
  },
  {
    id: 'instalacao',
    title: 'Instalação Ágil Sem Interromper o Restaurante',
    category: 'operacao',
    categoryLabel: 'Instalação Ágil',
    image: '/assets/presentation/instalacao_profissional.jpg',
    description: 'Montagem limpa e planejada executada nos intervalos do restaurante, garantindo que o faturamento e atendimento não parem.',
    highlights: ['Sem interrupção do salão', 'Tubulação em aço inox/cobre', 'Entrega técnica com laudo']
  },
  {
    id: 'manutencao',
    title: 'Manutenção Inteligente: Compartimento Inferior',
    category: 'operacao',
    categoryLabel: 'Manutenção Simplificada',
    image: '/assets/presentation/manutencao_inteligente.jpg',
    description: 'Acesso rápido para troca de baterias 12V e testes sem necessidade de desmontar a central ou desconectar a fiação principal.',
    highlights: ['Acesso inferior imediato', 'Baterias 12V 1.3Ah seladas', 'Testes preventivos sem desmonte']
  }
];

export const CommercialPresentation: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { openLeadModal } = useWhatsAppModal();

  const filteredSlides = activeCategory === 'todos' 
    ? presentationSlides 
    : presentationSlides.filter(s => s.category === activeCategory);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleOpenLead = () => {
    openLeadModal({
      origem: 'apresentacao_comercial',
      title: 'Apresentação Comercial & Proposta Técnica',
      subtitle: 'Converse com um especialista e receba o projeto preliminar para sua cozinha.',
      defaultMessage: 'Olá! Assisti à apresentação comercial no site e gostaria de solicitar um projeto e orçamento para o meu restaurante.'
    });
  };

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < presentationSlides.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : presentationSlides.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const currentSlide = lightboxIndex !== null ? presentationSlides[lightboxIndex] : null;

  return (
    <section id="apresentacao" className="py-24 bg-[#07090c] relative border-t border-amber-500/20 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Video className="w-4 h-4 text-[#d4af37]" />
            Apresentação Comercial & Vídeo Oficial
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Cinema Tecnológico & <br />
            <span className="gold-gradient-text">
              Demonstração Oficial OUTFIRE®
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            Assista ao vídeo institucional completo e explore os diagramas de engenharia, 
            cenários reais de combate e inovações que fazem da Outfire a líder em proteção para cozinhas industriais.
          </p>
        </div>

        {/* 1. CINEMA VIDEO PLAYER */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 bg-[#08090b] shadow-[0_15px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.2)] group">
            
            {/* Top Bar Detail */}
            <div className="bg-gradient-to-r from-[#12141a] via-[#1a1710] to-[#12141a] px-4 sm:px-6 py-3 border-b border-amber-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                <span className="ml-2 text-xs font-mono text-gray-300 font-semibold tracking-wider uppercase">
                  Apresentação Comercial — Sistema OUTFIRE 2026
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#e5c05d]">
                <Film className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="hidden sm:inline">Full HD 1080p</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-[10px] font-bold">4:31 min</span>
              </div>
            </div>

            {/* Video Container (16:9) */}
            <div className="relative aspect-video w-full bg-black">
              <video
                ref={videoRef}
                src="/assets/videos/apresentacao-comercial-outfire.mp4"
                poster="/assets/presentation/capa_apresentacao.jpg"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                Seu navegador não suporta a reprodução de vídeos HTML5.
              </video>

              {/* Big Initial Play Overlay (visible when not playing) */}
              {!isPlaying && (
                <div 
                  onClick={handlePlayVideo}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-opacity duration-300 hover:bg-black/25 z-10"
                >
                  <div className="relative group/play">
                    <div className="absolute -inset-4 bg-amber-500/30 rounded-full blur-xl group-hover/play:bg-amber-500/50 transition-all duration-300 animate-pulse"></div>
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#f3e5ab] to-[#b89628] p-[3px] shadow-[0_0_40px_rgba(212,175,55,0.7)] flex items-center justify-center transform transition-transform duration-300 group-hover/play:scale-110">
                      <div className="w-full h-full rounded-full bg-[#0e1014] flex items-center justify-center">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#f3e5ab] fill-[#f3e5ab] ml-1.5" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-center px-4">
                    <p className="text-lg sm:text-xl font-bold text-white drop-shadow-md tracking-tight">
                      Assistir Apresentação Comercial Oficial
                    </p>
                    <p className="text-xs sm:text-sm text-[#e5c05d] mt-1 drop-shadow font-medium">
                      4 min e 31 seg • Áudio narrado em Português • Demonstração Prática
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Video Action Footer */}
            <div className="bg-[#0e1014] p-4 sm:p-6 border-t border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-gray-300">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400" /> Locução Profissional
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Normas ABNT & NFPA
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Saponificante Classe K
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
                <a
                  href="/assets/Apresentacao_Comercial_Outfire_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-amber-500/30 text-[#f3e5ab] text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-[#d4af37]" />
                  Baixar PDF da Apresentação
                </a>
                
                <button
                  onClick={handleOpenLead}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89628] text-black text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  Solicitar Proposta no WhatsApp
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 2. SLIDE SHOWCASE & CATALOG */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                <Layers className="w-4 h-4" />
                Catálogo Técnico de Slides
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Engenharia, Automação e Cenários em Detalhes
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Clique em qualquer slide para expandir em tela cheia com zoom em alta resolução.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'todos', label: 'Todos os Slides (15)' },
                { key: 'engenharia', label: 'Engenharia & Arquitetura' },
                { key: 'cenarios', label: 'Cenários de Combate' },
                { key: 'inovacao', label: 'Tecnologia & Central' },
                { key: 'operacao', label: 'Instalação & Operação' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key as CategoryFilter)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeCategory === tab.key
                      ? 'bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Slides Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSlides.map((slide) => {
              const globalIndex = presentationSlides.findIndex(s => s.id === slide.id);
              return (
                <div
                  key={slide.id}
                  onClick={() => setLightboxIndex(globalIndex)}
                  className="group relative rounded-2xl overflow-hidden bg-[#0e1014] border border-amber-500/20 hover:border-amber-500/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.25)] flex flex-col justify-between"
                >
                  {/* Image Container with 16:9 ratio */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black/60">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1014] via-transparent to-transparent opacity-80" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-amber-500/40 text-[10px] font-bold text-[#e5c05d] uppercase tracking-wider">
                        {slide.categoryLabel}
                      </span>
                    </div>

                    {/* Hover Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-amber-500/90 text-black flex items-center justify-center shadow-glow-gold transform scale-75 group-hover:scale-100 transition-transform">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-[#f3e5ab] transition-colors line-clamp-1">
                        {slide.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    {/* Highlights tags */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                      {slide.highlights.map((h, idx) => (
                        <span 
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-[#e5c05d] border border-amber-500/20 font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* 3. FULLSCREEN LIGHTBOX MODAL */}
      {lightboxIndex !== null && currentSlide && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Lightbox Header */}
          <div 
            className="flex items-center justify-between z-10 max-w-7xl mx-auto w-full pb-4 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-[#f3e5ab] text-xs font-mono font-bold border border-amber-500/30">
                Slide {lightboxIndex + 1} de {presentationSlides.length}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1 hidden sm:block">
                {currentSlide.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/assets/Apresentacao_Comercial_Outfire_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-gray-200 flex items-center gap-1.5 font-medium transition-all"
              >
                <Download className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="hidden md:inline">Baixar PDF Completo</span>
              </a>

              <button
                onClick={() => setLightboxIndex(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-500/20 hover:text-red-400 text-gray-300 flex items-center justify-center transition-colors"
                title="Fechar (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Content & Navigation */}
          <div 
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden max-w-7xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : presentationSlides.length - 1))}
              className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-amber-500 hover:text-black text-white border border-amber-500/40 flex items-center justify-center transition-all shadow-lg"
              title="Slide Anterior (Seta Esquerda)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slide Image */}
            <div className="max-w-full max-h-full flex items-center justify-center p-2">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-amber-500/30"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev !== null && prev < presentationSlides.length - 1 ? prev + 1 : 0))}
              className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-amber-500 hover:text-black text-white border border-amber-500/40 flex items-center justify-center transition-all shadow-lg"
              title="Próximo Slide (Seta Direita)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Details */}
          <div 
            className="max-w-4xl mx-auto w-full bg-[#0e1014]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-amber-500/20 text-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-base sm:text-lg font-bold text-white">
              {currentSlide.title}
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl mx-auto">
              {currentSlide.description}
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
              {currentSlide.highlights.map((h, i) => (
                <span 
                  key={i}
                  className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-[#f3e5ab] font-mono border border-amber-500/30"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

        </div>
      )}
    </section>
  );
};
