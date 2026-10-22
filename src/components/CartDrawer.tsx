import React, { useState } from 'react';
import { 
  X, Trash2, Plus, Minus, ShoppingBag, 
  Phone, ArrowRight, ShieldCheck, CheckCircle2, ChevronLeft,
  User, Building2, Mail, MapPin, Sparkles
} from 'lucide-react';
import { CartItem } from '../types';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const { openLeadModal } = useWhatsAppModal();
  const [step, setStep] = useState<'cart' | 'lead' | 'success'>('cart');

  // Dados do Lead / Comprador
  const [leadForm, setLeadForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    empresa: '',
    cidade: ''
  });

  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const totalBRL = cartItems.reduce(
    (sum, item) => sum + item.product.priceBRL * item.quantity,
    0
  );

  const handleSendOrderWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!leadForm.nome.trim() || !leadForm.telefone.trim() || !leadForm.email.trim() || !leadForm.empresa.trim()) {
      setFormError('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    // 1. Salva o lead com os dados do pedido no localStorage para garantia total
    saveLead({
      nome: leadForm.nome.trim(),
      telefone: leadForm.telefone.trim(),
      email: leadForm.email.trim(),
      empresa: leadForm.empresa.trim(),
      cidade: leadForm.cidade.trim() || 'Não informada',
      origem: 'carrinho_whatsapp',
      totalPedido: totalBRL,
      detalhes: cartItems.map(i => `${i.product.name} (Qtd: ${i.quantity})`).join(', ')
    });

    // 2. Monta a mensagem estruturada para o WhatsApp
    let msg = `🛒 *PEDIDO OFICIAL — LOJA OUTFIRE.COM.BR*\n\n`;
    msg += `📋 *DADOS DO COMPRADOR / LEAD:*\n`;
    msg += `👤 *Nome:* ${leadForm.nome.trim()}\n`;
    msg += `🏢 *Loja / Empresa que representa:* ${leadForm.empresa.trim()}\n`;
    msg += `📱 *WhatsApp:* ${leadForm.telefone.trim()}\n`;
    msg += `✉️ *E-mail:* ${leadForm.email.trim()}\n`;
    if (leadForm.cidade.trim()) {
      msg += `📍 *Cidade / UF:* ${leadForm.cidade.trim()}\n`;
    }
    msg += `\n📦 *ITENS DO PEDIDO:*\n`;

    cartItems.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.product.name}*\n`;
      msg += `   SKU: ${item.product.sku} | Qtd: ${item.quantity} un\n`;
      msg += `   Valor: R$ ${(item.product.priceBRL * item.quantity).toLocaleString('pt-BR')},00\n\n`;
    });

    msg += `💰 *TOTAL DO PEDIDO:* R$ ${totalBRL.toLocaleString('pt-BR')},00\n\n`;
    msg += `Olá, equipe Outfire! Acabei de montar esse pedido na loja do site e gostaria de confirmar a disponibilidade para faturamento e envio. Aguardo retorno!`;

    // 3. Abre o WhatsApp oficial da Outfire
    const whatsappUrl = `https://wa.me/5515996576807?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');

    // 4. Exibe a tela de sucesso
    setStep('success');
  };

  const handleFinishAndClear = () => {
    onClearCart();
    setStep('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#0d0f14] border-l border-white/10 flex flex-col justify-between shadow-2xl relative">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between shrink-0 bg-[#0a0c10]">
            <div className="flex items-center gap-2.5">
              {step === 'lead' ? (
                <button
                  type="button"
                  onClick={() => setStep('cart')}
                  className="p-1 -ml-1 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  title="Voltar aos itens"
                >
                  <ChevronLeft className="w-5 h-5 text-amber-400" />
                </button>
              ) : (
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-amber-400" />
                </div>
              )}
              <div>
                <h2 className="text-base font-bold text-white font-sans">
                  {step === 'cart' && 'Seu Carrinho de Compras'}
                  {step === 'lead' && 'Identificação do Comprador'}
                  {step === 'success' && 'Pedido Encaminhado'}
                </h2>
                <span className="text-[11px] font-mono text-gray-400 block">
                  {step === 'cart' && `${cartItems.reduce((acc, i) => acc + i.quantity, 0)} item(ns) selecionado(s)`}
                  {step === 'lead' && 'Compra 100% via WhatsApp Oficial'}
                  {step === 'success' && 'WhatsApp Comercial: (15) 99657-6807'}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6">
            
            {/* ETAPA 1: LISTAGEM DOS ITENS */}
            {step === 'cart' && (
              <>
                {cartItems.length === 0 ? (
                  <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center text-gray-400 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Seu carrinho está vazio</h3>
                      <p className="text-xs text-gray-400 mt-1 max-w-xs leading-relaxed">
                        Monte um kit na calculadora técnica ou adicione peças avulsas de reposição do nosso catálogo.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3.5">
                    {cartItems.map((item) => (
                      <div
                        key={item.product.id}
                        className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 flex items-center gap-3 transition-colors"
                      >
                        {/* Imagem do Produto */}
                        <div className="w-16 h-16 rounded-xl bg-black/40 p-2 flex items-center justify-center shrink-0 border border-white/5">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        {/* Detalhes */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-white truncate font-sans">
                            {item.product.name}
                          </h4>
                          <span className="text-[10px] font-mono text-gray-400 block mt-0.5">
                            SKU: {item.product.sku}
                          </span>
                          <span className="text-xs font-black text-amber-400 font-mono block mt-1">
                            R$ {(item.product.priceBRL * item.quantity).toLocaleString('pt-BR')},00
                          </span>
                        </div>

                        {/* Controles de Quantidade */}
                        <div className="flex flex-col items-end justify-between h-16 shrink-0">
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.product.id)}
                            className="p-1 text-gray-500 hover:text-red-400 rounded transition-colors"
                            title="Remover item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex items-center gap-1.5 bg-black/60 rounded-lg p-1 border border-white/10">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.product.id, -1)}
                              className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-mono font-bold text-white min-w-[16px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.product.id, 1)}
                              className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* ETAPA 2: FORMULÁRIO DE CAPTAÇÃO DE LEAD / IDENTIFICAÇÃO */}
            {step === 'lead' && (
              <form id="lead-checkout-form" onSubmit={handleSendOrderWhatsApp} className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Informe os dados da sua empresa para direcionarmos este pedido ao <strong>WhatsApp Comercial Oficial da Outfire</strong> com proposta formal e cálculo de frete.
                  </p>
                </div>

                {formError && (
                  <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-xs text-red-300 font-semibold">
                    {formError}
                  </div>
                )}

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span>Seu Nome Completo *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={leadForm.nome}
                    onChange={(e) => setLeadForm({ ...leadForm, nome: e.target.value })}
                    className="w-full bg-[#141720] border border-white/10 focus:border-amber-400 text-white text-xs rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Loja / Restaurante / Empresa que representa *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Restaurante Grill Fasano / Loja Extintores SP"
                    value={leadForm.empresa}
                    onChange={(e) => setLeadForm({ ...leadForm, empresa: e.target.value })}
                    className="w-full bg-[#141720] border border-white/10 focus:border-amber-400 text-white text-xs rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-gray-300 block mb-1 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp com DDD *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (11) 98765-4321"
                      value={leadForm.telefone}
                      onChange={(e) => setLeadForm({ ...leadForm, telefone: e.target.value })}
                      className="w-full bg-[#141720] border border-white/10 focus:border-emerald-400 text-white text-xs rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-300 block mb-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span>Cidade / UF</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: São Paulo / SP"
                      value={leadForm.cidade}
                      onChange={(e) => setLeadForm({ ...leadForm, cidade: e.target.value })}
                      className="w-full bg-[#141720] border border-white/10 focus:border-blue-400 text-white text-xs rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>E-mail Corporativo ou Pessoal *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: contato@restaurante.com.br"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    className="w-full bg-[#141720] border border-white/10 focus:border-amber-400 text-white text-xs rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                  />
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1 text-[11px] text-gray-400">
                  <div className="flex justify-between">
                    <span>Itens do Pedido:</span>
                    <strong className="text-white">{cartItems.length} produto(s)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Estimado:</span>
                    <strong className="text-amber-400 font-mono font-bold">R$ {totalBRL.toLocaleString('pt-BR')},00</strong>
                  </div>
                </div>
              </form>
            )}

            {/* ETAPA 3: TELA DE SUCESSO / ENCAMINHADO */}
            {step === 'success' && (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">
                    Pedido Encaminhado via WhatsApp!
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 max-w-xs leading-relaxed">
                    Obrigado, <strong className="text-white">{leadForm.nome}</strong>! Os dados da loja <strong className="text-white">{leadForm.empresa}</strong> e os itens selecionados foram enviados para nosso atendimento comercial.
                  </p>
                </div>

                <div className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-left space-y-2 mt-4">
                  <div className="flex items-center justify-between text-gray-400">
                    <span>Destino:</span>
                    <strong className="text-emerald-400 font-mono">(15) 99657-6807</strong>
                  </div>
                  <div className="flex items-center justify-between text-gray-400">
                    <span>Total do Pedido:</span>
                    <strong className="text-amber-400 font-mono font-bold">R$ {totalBRL.toLocaleString('pt-BR')},00</strong>
                  </div>
                </div>

                <div className="w-full pt-4 space-y-2">
                  <a
                    href={`https://wa.me/5515996576807`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Reabrir Conversa no WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleFinishAndClear}
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors"
                  >
                    Concluir e Limpar Carrinho
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Footer Controls */}
          {cartItems.length > 0 && step !== 'success' && (
            <div className="p-5 sm:p-6 border-t border-white/10 bg-[#0a0c10] space-y-4 shrink-0">
              
              {/* Resumo de Valores */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal:</span>
                  <span className="font-mono text-white">
                    R$ {totalBRL.toLocaleString('pt-BR')},00
                  </span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Condição Comercial:</span>
                  <span className="text-emerald-400 font-bold">
                    Faturamento & Frete via WhatsApp
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                  <span>Total Estimado:</span>
                  <span className="font-mono text-xl text-amber-400">
                    R$ {totalBRL.toLocaleString('pt-BR')},00
                  </span>
                </div>
              </div>

              {/* Botão de Ação */}
              <button
                type="button"
                onClick={() => {
                  openLeadModal({
                    origem: 'carrinho_whatsapp',
                    title: 'Finalizar Pedido no WhatsApp Comercial',
                    subtitle: 'Preencha seus dados para direcionarmos este pedido ao WhatsApp Oficial com proposta e cálculo de frete.',
                    cartItems,
                    totalPedido: totalBRL,
                    onSuccess: () => {
                      onClearCart();
                      onClose();
                    }
                  });
                }}
                className="w-full py-4 px-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-black text-xs sm:text-sm rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-2 group active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                <span>Finalizar Pedido via WhatsApp Comercial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Compra segura com nota fiscal e garantia direta da Outfire</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
