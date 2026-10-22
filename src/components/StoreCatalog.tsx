import React, { useState } from 'react';
import { 
  ShoppingCart, Shield, Check, Phone, Filter, 
  Search, ArrowRight, Tag, Info, Sparkles, Building2,
  Mail, User, MapPin, CheckCircle2, FileSpreadsheet
} from 'lucide-react';
import { ProductItem } from '../types';
import { PRODUCTS } from '../data/products';
import { dispatchAndOpenWhatsApp } from '../utils/leadDispatcher';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

interface StoreCatalogProps {
  onAddToCart: (product: ProductItem) => void;
}

export const StoreCatalog: React.FC<StoreCatalogProps> = ({ onAddToCart }) => {
  const { openLeadModal } = useWhatsAppModal();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Formulário B2B / Lojas e Revendas
  const [b2bForm, setB2bForm] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    email: '',
    cidade: ''
  });
  const [b2bSubmitted, setB2bSubmitted] = useState(false);
  const [b2bError, setB2bError] = useState('');

  const handleB2bSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setB2bError('');

    if (!b2bForm.nome.trim() || !b2bForm.telefone.trim() || !b2bForm.email.trim() || !b2bForm.empresa.trim()) {
      setB2bError('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    setB2bSubmitted(true);

    await dispatchAndOpenWhatsApp({
      nome: b2bForm.nome.trim(),
      empresa: b2bForm.empresa.trim(),
      telefone: b2bForm.telefone.trim(),
      email: b2bForm.email.trim(),
      cidade: b2bForm.cidade.trim() || 'Não informada',
      origem: 'loja_b2b',
      detalhes: 'Solicitação de Tabela Comercial de Revenda com desconto de fábrica',
      customMessage: 'Represento a empresa acima e tenho interesse em revender ou adquirir sistemas e componentes com tabela diferenciada de fábrica.'
    });
  };

  const categories = [
    { id: 'all', name: 'Todos os Produtos' },
    { id: 'kit', name: 'Sistemas Completos' },
    { id: 'bicos', name: 'Bicos de Aspersão' },
    { id: 'sensores', name: 'Sensores Reguláveis' },
    { id: 'cilindro', name: 'Cilindros & Recargas' },
    { id: 'valvulas', name: 'Válvulas de Gás' },
    { id: 'acessorios', name: 'Acessórios & Acionadores' },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDirectWhatsAppBuy = (product: ProductItem) => {
    openLeadModal({
      origem: 'loja_direta',
      title: `Proposta: ${product.name}`,
      subtitle: `Preencha seus dados para receber proposta comercial e condições de entrega para ${product.sku}.`,
      defaultMessage: `Olá! Tenho interesse no produto ${product.name} (SKU: ${product.sku}) no valor de R$ ${product.priceBRL.toLocaleString('pt-BR')},00. Poderiam me passar os prazos de entrega e condições de faturamento?`,
      detalhes: `${product.name} (SKU: ${product.sku}) - R$ ${product.priceBRL.toLocaleString('pt-BR')},00`
    });
  };

  return (
    <section id="loja" className="py-24 bg-[#08090c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4">
            <ShoppingCart className="w-3.5 h-3.5 text-[#d4af37]" />
            Loja Oficial Outfire
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Sistemas Completos & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]">
              Peças de Reposição Certificadas
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            Adquira o sistema completo para sua cozinha ou componentes avulsos para manutenção preventiva. 
            Entrega expressa para todo o Brasil com nota fiscal e laudos de conformidade técnica.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#d4af37] text-black shadow-glow-gold'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar bicos, sensores, cilindros..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#12141a] border border-[#d4af37]/20 text-white text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="glass-panel-gold rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 shadow-lg"
            >
              <div>
                
                {/* Product Image Box */}
                <div className="relative w-full h-56 bg-gradient-to-br from-[#171a22] to-[#0a0c10] p-6 flex items-center justify-center overflow-hidden border-b border-white/5">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500" 
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {product.featured && (
                      <span className="bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-glow-gold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 fill-black" />
                        Mais Vendido
                      </span>
                    )}
                    <span className="bg-black/80 backdrop-blur-md text-[#f3e5ab] text-[10px] font-mono px-2 py-0.5 rounded border border-[#d4af37]/30">
                      SKU: {product.sku}
                    </span>
                  </div>

                  <span className="absolute bottom-3 right-3 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    Pronta Entrega
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 font-sans line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="space-y-1.5 mb-6">
                    {product.specs.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-gray-300">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Price & Action Footer */}
              <div className="p-6 pt-0">
                <div className="flex items-baseline justify-between mb-4 pt-4 border-t border-white/10">
                  <div>
                    <span className="text-[10px] text-gray-400 block">Preço à vista ou faturado</span>
                    <span className="text-2xl font-black text-[#f3e5ab] font-mono">
                      R$ {product.priceBRL.toLocaleString('pt-BR')},00
                    </span>
                  </div>
                  <span className="text-xs text-[#e5c05d] font-bold">
                    Em até 12x
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="py-2.5 px-3 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-1.5"
                  >
                    <ShoppingCart className="w-3.5 h-3.5 fill-black" />
                    <span>Adicionar</span>
                  </button>

                  <button
                    onClick={() => handleDirectWhatsAppBuy(product)}
                    className="py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5"
                    title="Negociar faturamento via WhatsApp"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* B2B / Lojas Lead Capture Banner */}
        <div id="cadastro-lojas" className="mt-16 glass-panel-gold rounded-3xl border border-[#d4af37]/40 bg-gradient-to-br from-[#1c1912] via-[#0d0f14] to-[#0a0c10] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#e5c05d] text-[11px] font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-[#d4af37]" />
                Canal Exclusivo para Lojas & Revendas
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
                Representa uma Loja, Instaladora <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]">
                  ou Franquia de Restaurantes?
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Cadastre sua empresa e receba a <strong>Tabela de Preços com Desconto Direto de Fábrica</strong>, faturamento para 28 dias e suporte de engenharia para projetos em todo o Brasil.
              </p>

              <div className="space-y-2 pt-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Descontos progressivos por volume para revendedores e instaladores</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Kits pré-montados com laudos ART e conformidade NBR 14518</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Atendimento ágil via WhatsApp Comercial Oficial: <strong>(11) 91699-9411</strong></span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              <div className="bg-[#12141c]/90 border border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl">
                {b2bSubmitted ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="text-base font-bold text-white">Dados Registrados com Sucesso!</h4>
                    <p className="text-xs text-gray-300">
                      O contato da sua empresa foi salvo e a conversa no WhatsApp foi iniciada para envio da tabela comercial.
                    </p>
                    <a
                      href="https://wa.me/5511916999411"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Abrir WhatsApp (11) 91699-9411</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleB2bSubmit} className="space-y-3">
                    <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-[#d4af37]" />
                      <span>Solicitar Cadastro de Loja / Revenda</span>
                    </h4>

                    {b2bError && (
                      <div className="p-2.5 rounded-lg bg-red-500/20 border border-red-500/30 text-[11px] text-red-300 font-semibold">
                        {b2bError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-semibold text-gray-300 block mb-1">
                          Seu Nome Completo *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Carlos Silva"
                          value={b2bForm.nome}
                          onChange={(e) => setB2bForm({ ...b2bForm, nome: e.target.value })}
                          className="w-full bg-[#161922] border border-white/10 text-white text-xs rounded-xl px-3 py-2 outline-none focus:border-[#d4af37] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-gray-300 block mb-1">
                          Loja / Empresa que representa *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Extintores & Cia / Loja SP"
                          value={b2bForm.empresa}
                          onChange={(e) => setB2bForm({ ...b2bForm, empresa: e.target.value })}
                          className="w-full bg-[#161922] border border-white/10 text-white text-xs rounded-xl px-3 py-2 outline-none focus:border-[#d4af37] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-semibold text-gray-300 block mb-1">
                          WhatsApp com DDD *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Ex: (11) 98765-4321"
                          value={b2bForm.telefone}
                          onChange={(e) => setB2bForm({ ...b2bForm, telefone: e.target.value })}
                          className="w-full bg-[#161922] border border-white/10 text-white text-xs rounded-xl px-3 py-2 outline-none focus:border-emerald-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-gray-300 block mb-1">
                          Cidade / UF
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: Curitiba / PR"
                          value={b2bForm.cidade}
                          onChange={(e) => setB2bForm({ ...b2bForm, cidade: e.target.value })}
                          className="w-full bg-[#161922] border border-white/10 text-white text-xs rounded-xl px-3 py-2 outline-none focus:border-[#d4af37] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-gray-300 block mb-1">
                        E-mail Corporativo ou Pessoal *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Ex: comercial@sualoja.com.br"
                        value={b2bForm.email}
                        onChange={(e) => setB2bForm({ ...b2bForm, email: e.target.value })}
                        className="w-full bg-[#161922] border border-white/10 text-white text-xs rounded-xl px-3 py-2 outline-none focus:border-[#d4af37] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-xs rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group active:scale-95"
                    >
                      <Phone className="w-3.5 h-3.5 fill-black" />
                      <span>Cadastrar e Receber Tabela no WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
