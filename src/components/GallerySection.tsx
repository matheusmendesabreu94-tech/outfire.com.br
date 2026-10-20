import React, { useState } from 'react';
import { Sparkles, Maximize2, Shield, CheckCircle, Eye } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeModalImg, setActiveModalImg] = useState<{ src: string; title: string; desc: string } | null>(null);

  const galleryItems = [
    {
      src: '/assets/central-outfire-instalada.jpg',
      title: 'Central Outfire VTS Instalada em Cozinha Real',
      category: 'Instalação em Restaurante',
      desc: 'Central montada estrategicamente na parede lateral da coifa, com chicote elétrico de alta temperatura interligado à válvula de corte de gás e aos dampers do duto.'
    },
    {
      src: '/assets/central-outfire-interno.jpg',
      title: 'Placa de Controle & Relés de Potência Outfire',
      category: 'Engenharia Interna',
      desc: 'Eletrônica industrial com proteção contra surtos, bornes reforçados para conexões dos sensores de 145°C e 300°C, relés dedicados e backup por bateria.'
    },
    {
      src: '/assets/central-outfire-ihm.jpg',
      title: 'IHM Touchscreen em Operação com Alerta',
      category: 'Interface de Operação',
      desc: 'Tela de alta resolução colorida exibindo o status de alerta térmico, contagem regressiva anti-disparo acidental e menu com senha para parametrizações.'
    },
    {
      src: '/assets/central-outfire-fundo-removido.png',
      title: 'Gabinete Industrial Outfire VTS 32S3',
      category: 'Design Robusto',
      desc: 'Construção em chapa de aço com pintura eletrostática texturizada de alta durabilidade, projetada para suportar a gordura e o ambiente severo de cozinhas industriais.'
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-[#0d0f13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Casos Reais & Engenharia em Campo
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Instalações Reais do <br />
            <span className="gold-gradient-text">
              Sistema Outfire em Ação
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            Veja detalhes da montagem física da Central Outfire VTS 32S3, acabamento dos componentes 
            e a integração visual impecável nas cozinhas dos nossos clientes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveModalImg(item)}
              className="glass-panel rounded-3xl border border-white/10 hover:border-amber-500/40 hover:shadow-glow-gold overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-72 sm:h-80 bg-black/50 overflow-hidden flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm">
                  <Eye className="w-5 h-5 text-amber-400" />
                  <span>Clique para Ampliar Foto</span>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full border border-amber-500/30">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 font-sans flex items-center justify-between">
                  <span>{item.title}</span>
                  <Maximize2 className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors" />
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalImg && (
        <div 
          onClick={() => setActiveModalImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-[#12141a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center p-2">
              <img
                src={activeModalImg.src}
                alt={activeModalImg.title}
                className="max-h-[65vh] w-auto object-contain rounded-xl"
              />
            </div>
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white">{activeModalImg.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{activeModalImg.desc}</p>
              </div>
              <button
                onClick={() => setActiveModalImg(null)}
                className="py-2 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
