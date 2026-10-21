import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, Flame, Shield, 
  Clock, CheckCircle, ArrowRight, FileText, ShoppingCart 
} from 'lucide-react';
import { saveLead } from '../utils/leadStorage';

export const ContactFooter: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    email: '',
    cidade: '',
    coifas: '1',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Salva o lead no localStorage para auditoria/segurança
    saveLead({
      nome: formData.nome.trim(),
      telefone: formData.telefone.trim(),
      email: formData.email.trim(),
      empresa: formData.empresa.trim() || 'Não informada',
      cidade: formData.cidade.trim() || 'Não informada',
      origem: 'contato_footer',
      detalhes: `Coifas: ${formData.coifas} | Mensagem: ${formData.mensagem || 'Sem mensagem'}`
    });

    // Redirect to WhatsApp with formatted form lead
    let text = `📋 *NOVO CONTATO PELO SITE OUTFIRE.COM.BR*\n\n`;
    text += `👤 *Nome:* ${formData.nome}\n`;
    text += `🏢 *Empresa / Loja:* ${formData.empresa || 'Não informado'}\n`;
    text += `📱 *Telefone / WhatsApp:* ${formData.telefone}\n`;
    text += `✉️ *E-mail:* ${formData.email}\n`;
    text += `📍 *Cidade / Estado:* ${formData.cidade}\n`;
    text += `🍳 *Qtd de Coifas:* ${formData.coifas} coifa(s)\n`;
    if (formData.mensagem) {
      text += `💬 *Mensagem:* ${formData.mensagem}\n`;
    }

    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(false);
    }, 1000);
  };

  return (
    <footer id="contato" className="bg-[#08090b] text-gray-400 border-t border-white/10 relative overflow-hidden">
      
      {/* Contact Form & Support Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Contact Info & Engineering Support */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide">
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              Canais Diretos de Engenharia & Vendas
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight">
              Fale com um Especialista <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]">
                em Supressão Outfire
              </span>
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              Dúvidas sobre dimensionamento de bicos, sensores, laudos para o Corpo de Bombeiros (AVCB) 
              ou solicitação de visita técnica para cozinhas em shopping centers e restaurantes.
            </p>

            <div className="space-y-4 pt-4">
              {/* Phone 1 */}
              <a 
                href="https://wa.me/5515996576807"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-mono">WhatsApp Vendas & Orçamentos</span>
                  <span className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    (15) 99657-6807
                  </span>
                </div>
              </a>

              {/* Phone 2 */}
              <a 
                href="https://wa.me/5515981577847"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-mono">Suporte Técnico & Pós-Venda</span>
                  <span className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                    (15) 98157-7847
                  </span>
                </div>
              </a>

              {/* Email & Coverage */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-white block">Atendimento em Todo o Brasil</span>
                  <span className="text-gray-400">Envio de kits prontos para instalação com laudo ART e suporte remoto.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
              <h4 className="text-xl font-bold text-white mb-2 font-sans">
                Solicite uma Proposta Técnica sem Compromisso
              </h4>
              <p className="text-xs text-gray-400 mb-6">
                Preencha os dados e nosso engenheiro entrará em contato em menos de 15 minutos com o dimensionamento preliminar.
              </p>

              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h5 className="text-base font-bold text-white">Encaminhando para o WhatsApp...</h5>
                  <p className="text-xs text-gray-300">
                    Você será direcionado diretamente para um especialista no WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Silva"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                        Nome do Restaurante / Empresa
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Hamburgueria Grill"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: (11) 98765-4321"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                        Cidade e Estado *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: São Paulo / SP"
                        value={formData.cidade}
                        onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                        className="w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                      E-mail Corporativo ou Pessoal *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: contato@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                      Quantas Coifas precisam de proteção?
                    </label>
                    <select
                      value={formData.coifas}
                      onChange={(e) => setFormData({ ...formData, coifas: e.target.value })}
                      className="w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"
                    >
                      <option value="1">1 Coifa (Pequeno / Médio Porte)</option>
                      <option value="2">2 Coifas (Atuação Independente)</option>
                      <option value="3">3 Coifas (Atuação Independente)</option>
                      <option value="mais de 3">Mais de 3 Coifas / Projeto Especial</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                      Detalhes adicionais (opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ex: Tenho 2 fritadeiras e 1 chapa, preciso de laudo urgente para renovação de AVCB."
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform fill-black" />
                    <span>Enviar para a Engenharia Outfire</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Navigation */}
      <div className="border-t border-[#d4af37]/20 py-8 bg-[#050608]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/logo-outfire-gold.png" 
              alt="OUTFIRE" 
              className="h-8 w-auto object-contain"
            />
            <span>&copy; {new Date().getFullYear()} Outfire Sistemas contra Incêndio. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <a href="#hero-3d" className="hover:text-white transition-colors">Simulação 3D</a>
            <a href="#central-vts" className="hover:text-white transition-colors">Central VTS</a>
            <a href="#normas" className="hover:text-white transition-colors">Normas NBR</a>
            <a href="#calculadora" className="hover:text-white transition-colors">Calculadora</a>
            <a href="#loja" className="hover:text-white transition-colors">Loja</a>
            <a href="/assets/manual-instalacao-central-outfire.pdf" target="_blank" className="hover:text-white transition-colors">Manual PDF</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
