import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, ShoppingCart, Phone, Menu, X, Flame, 
  FileText, Calculator, Sparkles, AlertTriangle 
} from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Simulação 3D', href: '#hero-3d', icon: Flame },
    { name: 'Central VTS', href: '#central-vts', icon: ShieldAlert },
    { name: 'Normas NBR', href: '#normas', icon: FileText },
    { name: 'Calculadora & Diagrama', href: '#calculadora', icon: Calculator, highlight: true },
    { name: 'Loja Virtual', href: '#loja', icon: ShoppingCart },
    { name: 'Manuais', href: '#manuais', icon: FileText },
    { name: 'Fotos Reais', href: '#galeria', icon: Sparkles },
    { name: 'Contato', href: '#contato', icon: Phone },
  ];

  return (
    <>
      {/* Top Emergency & Compliance Bar */}
      <div className="bg-gradient-to-r from-red-950 via-black to-red-950 border-b border-red-900/40 text-xs py-1.5 px-4 text-center text-red-200 flex items-center justify-center gap-2 font-medium">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span className="tracking-wide">
          SISTEMA EM CONFORMIDADE TOTAL COM <strong>ABNT NBR 14518</strong>, <strong>NFPA 96 & 17A</strong> E CORPO DE BOMBEIROS (AVCB)
        </span>
      </div>

      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0a0c0f]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3' 
            : 'bg-[#0a0c0f]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 via-red-800 to-black p-0.5 shadow-glow-red flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-[#121316] rounded-[10px] flex items-center justify-center">
                <Flame className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-black tracking-tight text-white font-sans">
                  OUT<span className="text-red-500">FIRE</span>
                </span>
                <span className="text-[10px] bg-red-950/80 text-red-400 border border-red-800/60 px-1.5 py-0.5 rounded font-mono font-bold uppercase tracking-wider ml-1">
                  VTS 32S3
                </span>
              </div>
              <span className="text-[10px] text-gray-400 tracking-wider uppercase -mt-0.5 font-medium">
                Supressão Inteligente em Cozinha
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    link.highlight 
                      ? 'bg-red-600/15 text-red-400 hover:bg-red-600/25 border border-red-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 opacity-70" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: WhatsApp & Cart */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Quick Quote */}
            <a
              href="https://wa.me/5515996576807?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20do%20sistema%20Outfire%20para%20minha%20cozinha%20industrial."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-lg hover:shadow-emerald-900/30 transition-all border border-emerald-400/30"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(15) 99657-6807</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white transition-all flex items-center justify-center group"
              title="Ver Carrinho de Compras"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-glow-red animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0e1014] border-b border-white/10 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-white/5 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4 text-red-500" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <div className="pt-3 border-t border-white/10">
              <a
                href="https://wa.me/5515996576807"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-lg shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Falar com Engenheiro no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
