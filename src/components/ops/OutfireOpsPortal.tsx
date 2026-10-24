import React, { useState } from 'react';
import { 
  Lock, ShieldCheck, Wrench, Building2, 
  ArrowRight, KeyRound, Sparkles, AlertCircle, Eye, EyeOff,
  Smartphone, Monitor, LogOut
} from 'lucide-react';
import { AdminPortalDashboard } from '../portal/AdminPortalDashboard';
import { TecnicoMobilePortal } from '../portal/TecnicoMobilePortal';
import { ADMIN_USER } from '../../utils/portalStorage';

interface UsuarioOps {
  id: string;
  nome: string;
  pin: string;
  role: 'admin_outfire' | 'tecnico';
  perfil: 'Engenheiro Chefe' | 'Técnico Instalador' | 'Diretoria';
  telefone: string;
}

const USUARIOS_OPS_PADRAO: UsuarioOps[] = [
  {
    id: 'usr_robson_eng',
    nome: 'Eng. Robson',
    pin: '4321',
    role: 'admin_outfire',
    perfil: 'Engenheiro Chefe',
    telefone: '(11) 91699-9411',
  },
  {
    id: 'usr_carlos_tec',
    nome: 'Carlos Eduardo (Técnico SP)',
    pin: '1234',
    role: 'tecnico',
    perfil: 'Técnico Instalador',
    telefone: '(11) 98765-4321',
  },
  {
    id: 'usr_diretoria',
    nome: 'Diretoria Executiva Outfire',
    pin: '9999',
    role: 'admin_outfire',
    perfil: 'Diretoria',
    telefone: '(11) 91699-9411',
  },
];

export const OutfireOpsPortal: React.FC = () => {
  const [usuarioLogado, setUsuarioLogado] = useState<UsuarioOps | null>(() => {
    const saved = sessionStorage.getItem('outfire_ops_session');
    return saved ? JSON.parse(saved) : null;
  });

  const [pinInput, setPinInput] = useState('');
  const [erroPin, setErroPin] = useState<string | null>(null);
  const [modoVisao, setModoVisao] = useState<'admin' | 'tecnico'>('admin');

  // Adicionar dígito do PIN
  const handleDigitPress = (digit: string) => {
    if (pinInput.length < 4) {
      const novoPin = pinInput + digit;
      setPinInput(novoPin);
      setErroPin(null);

      // Auto-submit no 4º dígito
      if (novoPin.length === 4) {
        validarPin(novoPin);
      }
    }
  };

  const handleBackspace = () => {
    setPinInput((prev) => prev.slice(0, -1));
    setErroPin(null);
  };

  const validarPin = (pinParaValidar: string) => {
    const achou = USUARIOS_OPS_PADRAO.find((u) => u.pin === pinParaValidar);
    if (achou) {
      setUsuarioLogado(achou);
      setModoVisao(achou.role === 'admin_outfire' ? 'admin' : 'tecnico');
      sessionStorage.setItem('outfire_ops_session', JSON.stringify(achou));
      setPinInput('');
    } else {
      setErroPin('PIN inválido. Tente 4321 (Admin) ou 1234 (Técnico).');
      setPinInput('');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('outfire_ops_session');
    setUsuarioLogado(null);
    setPinInput('');
  };

  // Se já está logado, renderiza o Painel correspondente
  if (usuarioLogado) {
    return (
      <div className="min-h-screen bg-[#08090b] text-slate-100 flex flex-col font-sans">
        
        {/* Barra superior de controle operacional interno */}
        <header className="bg-[#050608] border-b border-[#d4af37]/30 px-4 py-2.5 flex items-center justify-between text-xs sticky top-0 z-50 shadow-md">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[#d4af37] font-black uppercase tracking-wider flex items-center gap-1.5">
              <span>🔒 OUTFIRE OPS</span>
              <span className="text-[10px] text-gray-500 font-normal hidden sm:inline">| Rota Interna Segura</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[#f3e5ab] text-[10px] font-bold">
              {usuarioLogado.nome} ({usuarioLogado.perfil})
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Alternador de visualização para testes da Engenharia */}
            {usuarioLogado.role === 'admin_outfire' && (
              <div className="flex items-center bg-black/60 rounded-xl p-0.5 border border-white/10">
                <button
                  type="button"
                  onClick={() => setModoVisao('admin')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all ${
                    modoVisao === 'admin'
                      ? 'bg-[#d4af37] text-black shadow-glow-gold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  title="Visão Desktop do Administrador"
                >
                  <Monitor className="w-3 h-3" />
                  <span className="hidden sm:inline">Painel Admin</span>
                </button>
                <button
                  type="button"
                  onClick={() => setModoVisao('tecnico')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all ${
                    modoVisao === 'tecnico'
                      ? 'bg-[#d4af37] text-black shadow-glow-gold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  title="Visão Mobile do Técnico no Celular"
                >
                  <Smartphone className="w-3 h-3" />
                  <span className="hidden sm:inline">App Técnico</span>
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={handleLogout}
              className="p-1.5 px-2.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-300 border border-red-500/30 flex items-center gap-1 text-[11px] font-bold transition-colors"
            >
              <LogOut className="w-3 h-3" />
              <span>Sair</span>
            </button>
          </div>
        </header>

        {/* Corpo do Portal */}
        <main className="flex-1">
          {modoVisao === 'admin' ? (
            <div className="p-2 sm:p-6 max-w-7xl mx-auto">
              <AdminPortalDashboard
                adminUser={ADMIN_USER}
                onLogout={handleLogout}
                onSwitchToClientMode={() => setModoVisao('tecnico')}
              />
            </div>
          ) : (
            <TecnicoMobilePortal
              usuario={{
                id: usuarioLogado.id,
                nome: usuarioLogado.nome,
                pin: usuarioLogado.pin,
                role: 'tecnico',
                perfil: usuarioLogado.perfil,
                telefone: usuarioLogado.telefone,
              }}
              onLogout={handleLogout}
            />
          )}
        </main>
      </div>
    );
  }

  // ==============================================================
  // TELA DE LOGIN COM TECLADO NUMÉRICO (PIN 4 DÍGITOS)
  // ==============================================================
  return (
    <div className="min-h-screen bg-[#07080a] text-slate-100 flex flex-col justify-center items-center p-4 relative overflow-hidden select-none font-sans">
      
      {/* Brilho dourado de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-sm rounded-3xl bg-[#0c0f16]/95 border border-[#d4af37]/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(212,175,55,0.2)] backdrop-blur-xl relative z-10 space-y-6">
        
        {/* Logo Outfire */}
        <div className="text-center space-y-2">
          <img 
            src="/assets/logo-outfire-gold.png" 
            alt="Outfire Engenharia" 
            className="h-10 sm:h-12 mx-auto object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]"
          />
          <div>
            <h1 className="text-sm font-mono uppercase tracking-widest text-[#f3e5ab] font-bold">
              🔒 OUTFIRE OPERATIONS
            </h1>
            <p className="text-[11px] text-gray-400 font-mono">
              Acesso Restrito: Engenharia & Técnicos
            </p>
          </div>
        </div>

        {/* Display do PIN */}
        <div className="space-y-2 text-center">
          <span className="text-xs text-gray-300 font-semibold block">
            Digite seu PIN de 4 dígitos:
          </span>

          <div className="flex justify-center gap-3 py-2">
            {[0, 1, 2, 3].map((index) => {
              const preenchido = pinInput.length > index;
              return (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-200 ${
                    preenchido
                      ? 'bg-[#d4af37] shadow-glow-gold scale-110'
                      : 'border-2 border-white/20 bg-black/40'
                  }`}
                />
              );
            })}
          </div>

          {erroPin && (
            <div className="p-2 rounded-xl bg-red-950/50 border border-red-500/40 text-[11px] text-red-300 flex items-center justify-center gap-1.5 font-medium animate-shake">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{erroPin}</span>
            </div>
          )}
        </div>

        {/* Teclado Numérico */}
        <div className="grid grid-cols-3 gap-2.5 max-w-[260px] mx-auto">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => handleDigitPress(num)}
              className="h-14 rounded-2xl bg-[#141824] hover:bg-[#1c2233] active:bg-[#d4af37] active:text-black border border-white/10 hover:border-[#d4af37]/40 text-lg font-bold text-white transition-all shadow-md cursor-pointer flex items-center justify-center"
            >
              {num}
            </button>
          ))}
          
          <button
            type="button"
            onClick={handleBackspace}
            className="h-14 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-400 hover:text-white transition-all flex items-center justify-center cursor-pointer"
          >
            Limpar
          </button>

          <button
            type="button"
            onClick={() => handleDigitPress('0')}
            className="h-14 rounded-2xl bg-[#141824] hover:bg-[#1c2233] active:bg-[#d4af37] active:text-black border border-white/10 hover:border-[#d4af37]/40 text-lg font-bold text-white transition-all shadow-md cursor-pointer flex items-center justify-center"
          >
            0
          </button>

          <button
            type="button"
            onClick={() => validarPin(pinInput)}
            disabled={pinInput.length !== 4}
            className="h-14 rounded-2xl bg-[#d4af37] hover:bg-[#e5c05d] text-black font-extrabold text-xs transition-all shadow-glow-gold flex items-center justify-center cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Atalhos Rápidos para Demonstração */}
        <div className="pt-2 border-t border-white/10 text-[11px] text-gray-400 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block text-center">
            Atalhos Rápidos de Acesso:
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => validarPin('4321')}
              className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-[#f3e5ab] text-left hover:bg-amber-500/25 transition-all"
            >
              <div className="font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Admin (Robson)</span>
              </div>
              <span className="text-[10px] text-gray-400 font-mono">PIN: 4321</span>
            </button>

            <button
              type="button"
              onClick={() => validarPin('1234')}
              className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-left hover:bg-emerald-500/25 transition-all"
            >
              <div className="font-bold flex items-center gap-1">
                <Wrench className="w-3.5 h-3.5 text-emerald-400" />
                <span>Técnico (Campo)</span>
              </div>
              <span className="text-[10px] text-gray-400 font-mono">PIN: 1234</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
