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
      {/* Top Compliance Bar in Black & Gold */}
      <div className="bg-gradient-to-r from-[#08090b] via-[#141208] to-[#08090b] border-b border-[#d4af37]/30 text-xs py-1.5 px-4 text-center text-[#f3e5ab] flex items-center justify-center gap-2 font-medium">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
        </span>
        <span className="tracking-wide">
          SISTEMA EM CONFORMIDADE TOTAL COM <strong className="text-[#e5c05d]">ABNT NBR 14518</strong>, <strong className="text-[#e5c05d]">NFPA 96 & 17A</strong> E CORPO DE BOMBEIROS (AVCB)
        </span>
      </div>

      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#08090b]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5' 
            : 'bg-[#08090b]/85 backdrop-blur-sm border-b border-white/5 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Authentic Outfire Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <img 
                src="/assets/logo-outfire-gold.png" 
                alt="OUTFIRE - Sistemas contra Incêndio" 
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
              />
              <span className="hidden sm:inline-block text-[10px] bg-[#1a170e] text-[#e5c05d] border border-[#d4af37]/40 px-2 py-0.5 rounded font-mono font-bold tracking-wider">
                VTS 32S3
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    link.highlight 
                      ? 'bg-[#d4af37]/15 text-[#e5c05d] hover:bg-[#d4af37]/25 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] font-semibold' 
                      : 'text-gray-300 hover:text-[#f3e5ab] hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${link.highlight ? 'text-[#d4af37]' : 'opacity-70'}`} />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: WhatsApp & Cart */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Direct Quote */}
            <a
              href="https://wa.me/5515996576807?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20do%20sistema%20Outfire%20para%20minha%20cozinha%20industrial."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black px-4 py-2 rounded-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-black" />
              <span>(15) 99657-6807</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-[#14171e] hover:bg-[#1a1f28] border border-[#d4af37]/25 text-[#f3e5ab] hover:text-white transition-all flex items-center justify-center group shadow-md"
              title="Ver Carrinho de Compras"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#d4af37] text-black font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-glow-gold animate-pulse">
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
          <div className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0e1014] border-b border-[#d4af37]/20 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#d4af37]/10 hover:text-[#f3e5ab] transition-all"
                >
                  <Icon className="w-4 h-4 text-[#d4af37]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <div className="pt-3 border-t border-white/10">
              <a
                href="https://wa.me/5515996576807"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-sm font-black rounded-lg shadow-glow-gold"
              >
                <Phone className="w-4 h-4 fill-black" />
                Falar com Engenharia Outfire no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

