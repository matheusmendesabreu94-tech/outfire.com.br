import React, { useState, useEffect } from 'react';
import { 
  X, MessageCircle, Phone, Mail, User, Building2, 
  MapPin, CheckCircle2, ArrowRight, ShieldCheck, Sparkles,
  ShoppingBag
} from 'lucide-react';
import { LeadModalOptions } from '../types';
import { dispatchAndOpenWhatsApp } from '../utils/leadDispatcher';

interface WhatsAppLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  options: LeadModalOptions;
}

export const WhatsAppLeadModal: React.FC<WhatsAppLeadModalProps> = ({
  isOpen,
  onClose,
  options
}) => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    email: '',
    cidade: ''
  });

  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fecha no ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reseta estado quando o modal abre
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormError('');
      setLoading(false);
    }
  }, [isOpen, options]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.nome.trim() || !formData.telefone.trim() || !formData.email.trim() || !formData.empresa.trim()) {
      setFormError('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    setLoading(true);

    try {
      await dispatchAndOpenWhatsApp({
        nome: formData.nome.trim(),
        empresa: formData.empresa.trim(),
        telefone: formData.telefone.trim(),
        email: formData.email.trim(),
        cidade: formData.cidade.trim(),
        origem: options.origem || 'whatsapp_modal',
        detalhes: options.detalhes,
        totalPedido: options.totalPedido,
        cartItems: options.cartItems,
        customMessage: options.defaultMessage
      });

      setSubmitted(true);
      if (options.onSuccess) {
        options.onSuccess();
      }
    } catch (err) {
      console.error('Erro ao despachar lead:', err);
      setFormError('Ocorreu um erro ao abrir o WhatsApp. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const hasCart = options.cartItems && options.cartItems.length > 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#151821] via-[#0d0f15] to-[#0a0c10] border border-[#d4af37]/35 rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden z-10 my-auto">
        
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-white/10 flex items-start justify-between relative bg-[#0d0f15]/80">
          <div className="pr-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-2.5">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Comercial Oficial • (15) 99657-6807</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight">
              {options.title || 'Fale com um Especialista Outfire'}
            </h3>

            <p className="text-xs text-gray-300 mt-1.5 leading-relaxed">
              {options.subtitle || 'Preencha seus dados para direcionarmos seu atendimento com proposta técnica e cálculo de frete.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors shrink-0"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            /* Tela de Sucesso */
            <div className="text-center py-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-9 h-9 text-emerald-400" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-white font-sans">
                  Atendimento Iniciado no WhatsApp!
                </h4>
                <p className="text-xs text-gray-300 mt-2 max-w-sm mx-auto leading-relaxed">
                  Obrigado, <strong className="text-white">{formData.nome}</strong>! Os dados de <strong className="text-white">{formData.empresa}</strong> foram registrados com sucesso.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-left space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between text-gray-400">
                  <span>Destino:</span>
                  <strong className="text-emerald-400 font-mono">(15) 99657-6807</strong>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Status do Registro:</span>
                  <strong className="text-emerald-400">Salvo e Encaminhado</strong>
                </div>
                {options.totalPedido && options.totalPedido > 0 && (
                  <div className="flex justify-between text-gray-400 pt-1 border-t border-white/10">
                    <span>Total Estimado:</span>
                    <strong className="text-amber-400 font-mono">
                      R$ {options.totalPedido.toLocaleString('pt-BR')},00
                    </strong>
                  </div>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center">
                <a
                  href="https://wa.me/5515996576807"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Reabrir Conversa no WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          ) : (
            /* Formulário de Identificação */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Resumo do Pedido se veio do Carrinho ou Produto */}
              {hasCart && (
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-amber-200">
                    <ShoppingBag className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>{options.cartItems!.length} item(ns)</strong> no carrinho</span>
                  </div>
                  {options.totalPedido && (
                    <span className="font-mono font-bold text-amber-400">
                      R$ {options.totalPedido.toLocaleString('pt-BR')},00
                    </span>
                  )}
                </div>
              )}

              {options.detalhes && !hasCart && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{options.detalhes}</span>
                </div>
              )}

              {formError && (
                <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-xs text-red-300 font-semibold">
                  {formError}
                </div>
              )}

              {/* Nome Completo */}
              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span>Seu Nome Completo *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full bg-[#131620] border border-white/10 focus:border-[#d4af37] text-white text-xs rounded-xl px-3.5 py-3 outline-none transition-colors"
                />
              </div>

              {/* Restaurante / Empresa que representa */}
              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Restaurante / Loja / Empresa que representa *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Restaurante Grill Fasano / Hamburgueria Prime"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full bg-[#131620] border border-white/10 focus:border-[#d4af37] text-white text-xs rounded-xl px-3.5 py-3 outline-none transition-colors"
                />
              </div>

              {/* WhatsApp e Cidade */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp com DDD *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (11) 98765-4321"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="w-full bg-[#131620] border border-white/10 focus:border-emerald-400 text-white text-xs rounded-xl px-3.5 py-3 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Cidade / UF</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: São Paulo / SP"
                    value={formData.cidade}
                    onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                    className="w-full bg-[#131620] border border-white/10 focus:border-blue-400 text-white text-xs rounded-xl px-3.5 py-3 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* E-mail */}
              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>E-mail Corporativo ou Pessoal *</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ex: contato@restaurante.com.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#131620] border border-white/10 focus:border-[#d4af37] text-white text-xs rounded-xl px-3.5 py-3 outline-none transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-black text-xs sm:text-sm rounded-2xl shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] transition-all flex items-center justify-center gap-2 group active:scale-95 disabled:opacity-50"
                >
                  <Phone className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                  <span>
                    {loading ? 'Preparando Atendimento...' : 'Iniciar Conversa no WhatsApp (15) 99657-6807'}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Atendimento prioritário de engenharia com laudo de conformidade NBR 14518</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
