import React, { useState, useEffect } from 'react';
import { 
  Lock, ShieldCheck, Wrench, Building2, 
  ArrowRight, KeyRound, Sparkles, AlertCircle, Eye, EyeOff,
  Smartphone, Monitor, LogOut
} from 'lucide-react';
import { AdminPortalDashboard } from '../portal/AdminPortalDashboard';
import { TecnicoMobilePortal } from '../portal/TecnicoMobilePortal';
import { ADMIN_USER } from '../../utils/portalStorage';
import { getAdminPin, getTechnicianPin } from '../../utils/opsAuth';

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

interface ErrorBoundaryProps {
  children: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class OpsErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('OpsErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#08090b] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-[#10141e] border border-amber-500/40 p-6 rounded-3xl shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#d4af37] flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Falha ao Carregar o Painel Operacional</h2>
            <p className="text-xs text-gray-300">
              {this.state.error?.message || 'Ocorreu um erro inesperado ao carregar os dados operacionais.'}
            </p>
            <div className="flex gap-2 justify-center pt-2">
              <button
                onClick={() => {
                  sessionStorage.removeItem('outfire_ops_session');
                  window.location.reload();
                }}
                className="px-4 py-2 rounded-xl bg-[#d4af37] text-black text-xs font-bold shadow-glow-gold"
              >
                Limpar Sessão e Recarregar
              </button>
              <a
                href="/"
                className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-bold"
              >
                Voltar ao Site
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const OutfireOpsPortalContent: React.FC = () => {
  const [usuarioLogado, setUsuarioLogado] = useState<UsuarioOps | null>(() => {
    const saved = sessionStorage.getItem('outfire_ops_session');
    return saved ? JSON.parse(saved) : null;
  });

  const [pinInput, setPinInput] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [erroPin, setErroPin] = useState<string | null>(null);
  const [modoVisao, setModoVisao] = useState<'admin' | 'tecnico'>('admin');

  // Adicionar dígito do PIN
  const handleDigitPress = (digit: string) => {
    if (pinInput.length < 10) {
      const novoPin = pinInput + digit;
      setPinInput(novoPin);
      setErroPin(null);

      // Auto-submit se coincidir com o PIN do admin ou do técnico
      const adminPin = getAdminPin();
      const techPin = getTechnicianPin();
      if (novoPin === adminPin || novoPin === techPin) {
        validarPin(novoPin);
      }
    }
  };

  const handleBackspace = () => {
    setPinInput((prev) => prev.slice(0, -1));
    setErroPin(null);
  };

  const handleClear = () => {
    setPinInput('');
    setErroPin(null);
  };

  const validarPin = (pinParaValidar: string) => {
    const clean = pinParaValidar.trim();
    const adminPin = getAdminPin();
    const techPin = getTechnicianPin();

    if (clean === adminPin) {
      const adminUser: UsuarioOps = {
        id: 'usr_robson_eng',
        nome: 'Eng. Robson',
        pin: adminPin,
        role: 'admin_outfire',
        perfil: 'Engenheiro Chefe',
        telefone: '(11) 91699-9411',
      };
      setUsuarioLogado(adminUser);
      setModoVisao('admin');
      sessionStorage.setItem('outfire_ops_session', JSON.stringify(adminUser));
      setPinInput('');
      setErroPin(null);
    } else if (clean === techPin) {
      const techUser: UsuarioOps = {
        id: 'usr_campo_tec',
        nome: 'Técnico Credenciado Outfire',
        pin: techPin,
        role: 'tecnico',
        perfil: 'Técnico Instalador',
        telefone: '(11) 91699-9411',
      };
      setUsuarioLogado(techUser);
      setModoVisao('tecnico');
      sessionStorage.setItem('outfire_ops_session', JSON.stringify(techUser));
      setPinInput('');
      setErroPin(null);
    } else {
      setErroPin('Senha de acesso incorreta. Tente novamente.');
      setPinInput('');
    }
  };

  // Suporte a teclado físico na tela de login
  useEffect(() => {
    if (usuarioLogado) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key >= '0' && e.key <= '9') {
        handleDigitPress(e.key);
      } else if (e.key === 'Backspace') {
        handleBackspace();
      } else if (e.key === 'Enter') {
        if (pinInput.length >= 3) {
          validarPin(pinInput);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pinInput, usuarioLogado]);

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
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs text-gray-300 font-semibold flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Senha de Acesso Operacional</span>
            </span>
            {pinInput.length > 0 && (
              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="text-gray-400 hover:text-[#d4af37] text-[11px] flex items-center gap-1 transition-colors"
                title={showPin ? 'Ocultar senha' : 'Ver senha digitada'}
              >
                {showPin ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showPin ? 'Ocultar' : 'Ver'}</span>
              </button>
            )}
          </div>

          <div className="h-14 rounded-2xl bg-black/60 border border-white/15 px-4 flex items-center justify-between text-center relative focus-within:border-[#d4af37]/60 shadow-inner">
            <div className="flex-1 flex items-center justify-center tracking-[0.35em] font-mono text-xl text-[#f3e5ab] select-all">
              {pinInput.length === 0 ? (
                <span className="text-gray-600 text-xs tracking-normal font-sans font-normal">
                  Digite seu PIN ou use o teclado
                </span>
              ) : showPin ? (
                <span>{pinInput}</span>
              ) : (
                <span className="text-lg">{'•'.repeat(pinInput.length)}</span>
              )}
            </div>

            {pinInput.length > 0 && (
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-500 hover:text-red-400 text-xs p-1 transition-colors ml-2 font-bold"
                title="Limpar campo"
              >
                Limpar
              </button>
            )}
          </div>

          {erroPin && (
            <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-500/40 text-xs text-red-300 flex items-center justify-center gap-1.5 font-medium animate-shake">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{erroPin}</span>
            </div>
          )}
        </div>

        {/* Teclado Numérico */}
        <div className="grid grid-cols-3 gap-2.5 max-w-[280px] mx-auto">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => handleDigitPress(num)}
              className="h-14 rounded-2xl bg-[#141824] hover:bg-[#1c2233] active:bg-[#d4af37] active:text-black border border-white/10 hover:border-[#d4af37]/40 text-xl font-bold text-white transition-all shadow-md cursor-pointer flex items-center justify-center"
            >
              {num}
            </button>
          ))}
          
          <button
            type="button"
            onClick={handleBackspace}
            aria-label="Apagar último dígito"
            className="h-14 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-400 hover:text-white transition-all flex items-center justify-center cursor-pointer"
          >
            Apagar
          </button>

          <button
            type="button"
            onClick={() => handleDigitPress('0')}
            className="h-14 rounded-2xl bg-[#141824] hover:bg-[#1c2233] active:bg-[#d4af37] active:text-black border border-white/10 hover:border-[#d4af37]/40 text-xl font-bold text-white transition-all shadow-md cursor-pointer flex items-center justify-center"
          >
            0
          </button>

          <button
            type="button"
            onClick={() => validarPin(pinInput)}
            disabled={pinInput.length < 3}
            aria-label="Confirmar e Entrar"
            className="h-14 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#b89628] hover:from-[#e5c05d] hover:to-[#cda835] text-black font-extrabold text-sm transition-all shadow-glow-gold flex items-center justify-center gap-1 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <span>Entrar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Rodapé de Segurança Sem Exposição de Senhas */}
        <div className="pt-3 border-t border-white/10 text-center space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Ambiente Operacional Seguro & Criptografado</span>
          </div>
          <p className="text-[10px] text-gray-500">
            Acesso restrito à Engenharia Chefe e Técnicos autorizados Outfire.
          </p>
        </div>

        {/* Voltar ao Site & Atualizar Versao */}
        <div className="pt-2 flex items-center justify-between text-xs text-gray-400">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new Event('popstate'));
            }}
            className="hover:text-[#f3e5ab] transition-colors"
          >
            ← Voltar ao site público
          </a>

          <button
            type="button"
            onClick={() => {
              sessionStorage.clear();
              window.location.reload();
            }}
            className="hover:text-[#d4af37] underline text-[10px] font-mono cursor-pointer text-gray-500 hover:text-gray-300"
            title="Recarregar nova versão e limpar sessão"
          >
            Atualizar / Nova Versão
          </button>
        </div>

      </div>

    </div>
  );
};

export const OutfireOpsPortal: React.FC = () => {
  return (
    <OpsErrorBoundary>
      <OutfireOpsPortalContent />
    </OpsErrorBoundary>
  );
};
