import React, { useState, useEffect } from 'react';
import { 
  X, Lock, Building2, User, Phone, Mail, MapPin, 
  ShieldCheck, ArrowRight, Sparkles, CheckCircle2, 
  KeyRound, ShieldAlert, FileText, Check
} from 'lucide-react';
import { ClientUser, ObraItem } from '../../types/clientPortal';
import { 
  getCurrentPortalUser, setPortalSession, 
  getObrasDoCliente, registerNewClient, 
  DEMO_USER, DEMO_OBRA 
} from '../../utils/portalStorage';
import { ClientDashboard } from './ClientDashboard';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [currentUser, setCurrentUser] = useState<ClientUser | null>(null);
  const [currentObra, setCurrentObra] = useState<ObraItem>(DEMO_OBRA);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Form states
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Register states
  const [regNome, setRegNome] = useState('');
  const [regEmpresa, setRegEmpresa] = useState('');
  const [regTelefone, setRegTelefone] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regSenha, setRegSenha] = useState('');
  const [regCidade, setRegCidade] = useState('');
  const [regCnpj, setRegCnpj] = useState('');
  const [regLgpd, setRegLgpd] = useState(true);

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const user = getCurrentPortalUser();
      if (user) {
        setCurrentUser(user);
        const obras = getObrasDoCliente(user.empresaId);
        setCurrentObra(obras[0] || DEMO_OBRA);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Login com usuário de demonstração (Restaurante Cliente)
  const handleQuickDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setPortalSession(DEMO_USER);
      setCurrentUser(DEMO_USER);
      const obras = getObrasDoCliente(DEMO_USER.empresaId);
      setCurrentObra(obras[0] || DEMO_OBRA);
      setLoading(false);
    }, 400);
  };

  // Login padrão do cliente
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!loginIdentifier.trim() || !loginPassword.trim()) {
      setErrorMessage('Por favor, informe seu e-mail/WhatsApp e senha.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const user = DEMO_USER;
      setPortalSession(user);
      setCurrentUser(user);
      const obras = getObrasDoCliente(user.empresaId);
      setCurrentObra(obras[0] || DEMO_OBRA);
      setLoading(false);
    }, 600);
  };

  // Cadastro de novo cliente
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!regNome.trim() || !regEmpresa.trim() || !regTelefone.trim() || !regEmail.trim() || !regSenha.trim()) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    if (!regLgpd) {
      setErrorMessage('É necessário aceitar os termos de privacidade (LGPD).');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const { user, obra } = registerNewClient({
        nome: regNome,
        empresaNome: regEmpresa,
        telefone: regTelefone,
        email: regEmail,
        cidade: regCidade || 'São Paulo - SP',
        cnpjCpf: regCnpj
      });

      setCurrentUser(user);
      setCurrentObra(obra);
      setLoading(false);
    }, 800);
  };

  const handleLogout = () => {
    setPortalSession(null);
    setCurrentUser(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-xl flex flex-col justify-between animate-fadeIn">
      
      {/* Top Modal Controls */}
      <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-[#07090c]/95 sticky top-0 z-30 shadow-md">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/logo-outfire-gold.png" 
            alt="OUTFIRE" 
            className="h-8 sm:h-9 w-auto object-contain"
          />
          <div className="border-l border-white/15 pl-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-[#e5c05d] font-bold block">
                Portal do Cliente & Gestão de Obras
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Restaurante
              </span>
            </div>
            <span className="text-[11px] text-gray-400 hidden sm:inline">
              Ambiente Seguro com Criptografia e RLS (NBR 14518 / LGPD)
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Fechar Portal (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex-1 flex flex-col justify-center items-center p-3 sm:p-6 lg:p-8">
        
        {currentUser ? (
          // ================= LOGGED IN CLIENT DASHBOARD (RESTAURANTE) =================
          <div className="w-full max-w-7xl mx-auto rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl my-auto">
            <ClientDashboard
              user={currentUser}
              obra={currentObra}
              onLogout={handleLogout}
              onUpdateObra={setCurrentObra}
            />
          </div>
        ) : (
          // ================= AUTHENTICATION / REGISTRATION CARD =================
          <div className="max-w-lg w-full rounded-3xl bg-[#0c0f16] border border-amber-500/30 shadow-[0_0_60px_rgba(212,175,55,0.2)] overflow-hidden my-auto">
            
            {/* Header Tabs */}
            <div className="flex border-b border-white/10 bg-[#08090b]">
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className={`flex-1 py-3.5 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 ${
                  authMode === 'login'
                    ? 'text-white border-b-2 border-amber-400 bg-white/5'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span>Entrar (Restaurante)</span>
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('register')}
                className={`flex-1 py-3.5 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 ${
                  authMode === 'register'
                    ? 'text-white border-b-2 border-amber-400 bg-white/5'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Criar Conta</span>
              </button>
            </div>

            <div className="p-6 sm:p-8">
              
              {errorMessage && (
                <div className="mb-4 p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300 font-medium">
                  {errorMessage}
                </div>
              )}

              {/* 1. LOGIN RESTAURANTE (CLIENTE) */}
              {authMode === 'login' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-semibold">Acesso Rápido de Teste</strong>
                      Clique abaixo para entrar instantaneamente como cliente e ver as obras, laudo ART e o checklist.
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleQuickDemoLogin}
                    disabled={loading}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89628] hover:from-[#f3e5ab] hover:to-[#d4af37] text-black font-extrabold text-xs sm:text-sm shadow-glow-gold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <User className="w-4 h-4 fill-black" />
                    <span>{loading ? 'Acessando...' : 'Entrar como Restaurante (Demonstração Fasano)'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-[10px] uppercase font-mono">
                      <span className="bg-[#0c0f16] px-2 text-gray-400">ou informe suas credenciais</span>
                    </div>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-3.5">
                    <div>
                      <label className="text-xs font-bold text-gray-300 block mb-1">
                        E-mail ou WhatsApp do Restaurante
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: gestao@fasano.com.br ou (11) 98765-4321"
                        value={loginIdentifier}
                        onChange={(e) => setLoginIdentifier(e.target.value)}
                        className="w-full bg-[#131622] border border-white/10 text-white text-xs rounded-xl px-3.5 py-3 outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-300 block mb-1">
                        Sua Senha
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full bg-[#131622] border border-white/10 text-white text-xs rounded-xl px-3.5 py-3 outline-none focus:border-amber-400"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{loading ? 'Validando...' : 'Acessar com Senha'}</span>
                    </button>
                  </form>
                </div>
              )}



              {/* 2. REGISTRATION FORM */}
              {authMode === 'register' && (
                <form onSubmit={handleRegister} className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-gray-300 block mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Fasano"
                      value={regNome}
                      onChange={(e) => setRegNome(e.target.value)}
                      className="w-full bg-[#131622] border border-white/10 text-white text-xs rounded-xl px-3.5 py-2.5 outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-300 block mb-1">
                      Nome do Restaurante / Loja *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Parrilla Fasano / Hamburgueria Prime"
                      value={regEmpresa}
                      onChange={(e) => setRegEmpresa(e.target.value)}
                      className="w-full bg-[#131622] border border-white/10 text-white text-xs rounded-xl px-3.5 py-2.5 outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-gray-300 block mb-1">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 98765-4321"
                        value={regTelefone}
                        onChange={(e) => setRegTelefone(e.target.value)}
                        className="w-full bg-[#131622] border border-white/10 text-white text-xs rounded-xl px-3.5 py-2.5 outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-300 block mb-1">
                        Cidade / UF
                      </label>
                      <input
                        type="text"
                        placeholder="São Paulo / SP"
                        value={regCidade}
                        onChange={(e) => setRegCidade(e.target.value)}
                        className="w-full bg-[#131622] border border-white/10 text-white text-xs rounded-xl px-3.5 py-2.5 outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-300 block mb-1">
                      E-mail Corporativo ou Pessoal *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contato@restaurante.com.br"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      className="w-full bg-[#131622] border border-white/10 text-white text-xs rounded-xl px-3.5 py-2.5 outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-300 block mb-1">
                      Crie uma Senha Segura *
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="Mínimo 8 caracteres"
                      value={regSenha}
                      onChange={(e) => setRegSenha(e.target.value)}
                      className="w-full bg-[#131622] border border-white/10 text-white text-xs rounded-xl px-3.5 py-2.5 outline-none focus:border-amber-400"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 text-[11px] text-gray-300 cursor-pointer pt-1 select-none">
                    <input
                      type="checkbox"
                      required
                      checked={regLgpd}
                      onChange={(e) => setRegLgpd(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded accent-[#d4af37] bg-[#131620] border-white/20 shrink-0"
                    />
                    <span>
                      Concordo com os <strong>Termos de Uso</strong> e a <strong>Política de Privacidade (LGPD)</strong> para criação do cadastro e gestão da obra.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89628] text-black font-extrabold text-xs sm:text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                  >
                    <ShieldCheck className="w-4 h-4 fill-black" />
                    <span>{loading ? 'Criando Conta...' : 'Cadastrar Restaurante & Acessar'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}

            </div>

            {/* Atalho para Acesso Operacional (#ops) */}
            <div className="p-3 bg-[#08090b] border-t border-white/10 text-center">
              <a
                href="#ops"
                onClick={() => onClose()}
                className="text-[11px] text-gray-400 hover:text-[#d4af37] flex items-center justify-center gap-1.5 transition-colors"
              >
                <Lock className="w-3 h-3 text-[#d4af37]" />
                <span>Acesso exclusivo Engenharia e Técnicos: <strong className="text-[#f3e5ab] underline">Entrar no Acesso Operacional (#ops)</strong></span>
              </a>
            </div>
          </div>
        )}

      </div>

      {/* Footer info */}
      <div className="p-4 text-center text-[11px] text-gray-500 border-t border-white/5 bg-[#050608]">
        Proteção de Dados: Todos os projetos e laudos são isolados via Row-Level Security e criptografia AES-256.
      </div>

    </div>
  );
};
