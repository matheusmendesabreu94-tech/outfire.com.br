import React, { useState } from 'react';
import { 
  X, Trash2, Plus, Minus, ShoppingBag, 
  Phone, CreditCard, QrCode, ArrowRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { CartItem } from '../types';

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
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const totalBRL = cartItems.reduce(
    (sum, item) => sum + item.product.priceBRL * item.quantity,
    0
  );

  const handleCheckoutWhatsApp = () => {
    let msg = `🛒 *PEDIDO LOJA OUTFIRE - PROPOSTA COMERCIAL*\n\n`;
    msg += `Olá, equipe Outfire! Gostaria de fechar o pedido dos seguintes itens pelo site:\n\n`;

    cartItems.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.product.name}*\n`;
      msg += `   SKU: ${item.product.sku} | Qtd: ${item.quantity} un\n`;
      msg += `   Valor: R$ ${(item.product.priceBRL * item.quantity).toLocaleString('pt-BR')},00\n\n`;
    });

    msg += `💰 *TOTAL DO PEDIDO:* R$ ${totalBRL.toLocaleString('pt-BR')},00\n\n`;
    msg += `Por favor, me informe as opções de pagamento (Faturamento B2B / Boleto / Pix / Cartão) e valor do frete.`;

    window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleSimulatePayment = (method: string) => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutSuccess(false);
      setCheckoutModalOpen(false);
      onClose();
      alert(`Pedido registrado com sucesso via ${method}! Nossa equipe entrará em contato para emissão de NF-e e envio.`);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0f1115] border-l border-white/10 flex flex-col justify-between shadow-2xl relative">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-red-500" />
              <h2 className="text-lg font-bold text-white font-sans">
                Seu Carrinho de Compras
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Seu carrinho está vazio</h3>
                  <p className="text-xs text-gray-400 mt-1 max-w-xs">
                    Monte um kit na calculadora ou adicione peças avulsas de reposição da nossa loja.
                  </p>
                </div>
                <a
                  href="#calculadora"
                  onClick={onClose}
                  className="py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-glow-red transition-all"
                >
                  Abrir Calculadora da Cozinha
                </a>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3 relative group"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-contain rounded-xl bg-black/40 p-1 border border-white/5 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white line-clamp-1">
                      {item.product.name}
                    </h4>
                    <span className="text-[10px] font-mono text-gray-400 block mt-0.5">
                      SKU: {item.product.sku}
                    </span>
                    <span className="text-sm font-bold text-amber-400 font-mono block mt-1">
                      R$ {item.product.priceBRL.toLocaleString('pt-BR')},00
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center bg-black/50 border border-white/10 rounded-lg">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="p-1 hover:text-red-400 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1 hover:text-emerald-400 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-gray-400 hover:text-red-400 text-xs transition-colors flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Remover</span>
                      </button>
                    </div>
                  </div>

                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#0c0d10] space-y-4">
              
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Subtotal:</span>
                  <span>R$ {totalBRL.toLocaleString('pt-BR')},00</span>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Nota Fiscal & Laudo ART:</span>
                  <span className="text-emerald-400 font-medium">Incluso</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                  <span>Total Estimado:</span>
                  <span className="font-mono text-xl text-amber-400">
                    R$ {totalBRL.toLocaleString('pt-BR')},00
                  </span>
                </div>
              </div>

              {/* Checkout Options */}
              <div className="space-y-2">
                <button
                  onClick={handleCheckoutWhatsApp}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Enviar Pedido pelo WhatsApp (Comercial)</span>
                </button>

                <button
                  onClick={() => setCheckoutModalOpen(true)}
                  className="w-full py-3 px-4 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow-glow-red transition-all flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Finalizar Pagamento Online (Pix / Cartão)</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Compra segura com garantia direta do fabricante Outfire</span>
              </div>

            </div>
          )}

          {/* Online Checkout Simulation Modal */}
          {checkoutModalOpen && (
            <div className="absolute inset-0 bg-[#0d0f13] z-20 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <h3 className="font-bold text-white text-base">Checkout Rápido Outfire</h3>
                  <button 
                    onClick={() => setCheckoutModalOpen(false)}
                    className="p-1 text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {checkoutSuccess ? (
                  <div className="text-center py-12 space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                    <h4 className="text-lg font-bold text-white">Pagamento Confirmado!</h4>
                    <p className="text-xs text-gray-300">
                      Obrigado por confiar na Outfire. Seus dados foram encaminhados para a expedição e o engenheiro responsável entrará em contato.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-xs text-gray-300">
                      Selecione a forma de pagamento desejada para concluir o pedido de <strong>R$ {totalBRL.toLocaleString('pt-BR')},00</strong>:
                    </p>

                    <button
                      onClick={() => handleSimulatePayment('PIX')}
                      className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <QrCode className="w-6 h-6 text-emerald-400" />
                        <div>
                          <span className="text-sm font-bold text-white block">Pagar via Pix</span>
                          <span className="text-[11px] text-gray-400">Aprovação imediata com 5% de desconto</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </button>

                    <button
                      onClick={() => handleSimulatePayment('Cartão de Crédito')}
                      className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-6 h-6 text-blue-400" />
                        <div>
                          <span className="text-sm font-bold text-white block">Cartão de Crédito</span>
                          <span className="text-[11px] text-gray-400">Parcelamento em até 12x sem juros</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </button>

                    <button
                      onClick={() => handleSimulatePayment('Boleto Faturado B2B')}
                      className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-6 h-6 text-amber-400" />
                        <div>
                          <span className="text-sm font-bold text-white block">Faturamento B2B / Boleto PJ</span>
                          <span className="text-[11px] text-gray-400">Para restaurantes e empresas cadastradas</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => setCheckoutModalOpen(false)}
                className="w-full py-3 bg-white/10 text-gray-300 font-bold text-xs rounded-xl hover:bg-white/20 transition-all"
              >
                Voltar ao Carrinho
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
