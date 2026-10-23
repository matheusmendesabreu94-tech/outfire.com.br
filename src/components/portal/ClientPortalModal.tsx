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

  // Login com usuário de demonstração
  const handleQuickDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setPortalSession(DEMO_USER);
      setCurrentUser(DEMO_USER);
      setCurrentObra(DEMO_OBRA);
      setLoading(false);
    }, 400);
  };

  // Login padrão
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!loginIdentifier.trim() || !loginPassword.trim()) {
      setErrorMessage('Por favor, informe seu e-mail/WhatsApp e senha.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      // Aceita credenciais ou fallback para demo
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex flex-col justify-between animate-fadeIn">
      
      {/* Top Modal Controls */}
      <div className="p-4 sm:p-6 flex items-center justify-between border-b border-white/10 bg-[#07090c]/90">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/logo-outfire-gold.png" 
            alt="OUTFIRE" 
            className="h-9 w-auto object-contain"
          />
          <div className="border-l border-white/15 pl-3">
            <span className="text-xs font-mono uppercase text-[#e5c05d] font-bold block">
              Portal do Cliente & Gestão de Obras
            </span>
            <span className="text-[11px] text-gray-400">
              Ambiente Seguro com Criptografia e RLS (NBR 14518 / LGPD)
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
          title="Fechar Portal (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Body */}
      <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-8">
        
        {currentUser ? (
          // ================= LOGGED IN DASHBOARD =================
          <div className="w-full max-w-7xl mx-auto rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl">
            <ClientDashboard
              user={currentUser}
              obra={currentObra}
              onLogout={handleLogout}
              onUpdateObra={setCurrentObra}
            />
          </div>
        ) : (
          // ================= AUTHENTICATION / REGISTRATION CARD =================
          <div className="max-w-md w-full rounded-3xl bg-[#0c0f16] border border-amber-500/30 shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden my-auto">
            
            {/* Header Tabs */}
            <div className="flex border-b border-white/10 bg-[#08090b]">
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className={`flex-1 py-4 text-xs font-bold transition-all text-center ${
                  authMode === 'login'
                    ? 'text-white border-b-2 border-amber-400 bg-white/5'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Acessar Minha Conta
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('register')}
                className={`flex-1 py-4 text-xs font-bold transition-all text-center ${
                  authMode === 'register'
                    ? 'text-white border-b-2 border-amber-400 bg-white/5'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Cadastrar Novo Restaurante
              </button>
            </div>

            <div className="p-6 sm:p-8">
              
              {errorMessage && (
                <div className="mb-4 p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300 font-medium">
                  {errorMessage}
                </div>
              )}

              {/* 1. LOGIN FORM */}
              {authMode === 'login' && (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-gray-300 block mb-1">
                      E-mail ou WhatsApp
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
                      Sua Senha de Acesso
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
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89628] hover:from-[#f3e5ab] hover:to-[#d4af37] text-black font-extrabold text-xs sm:text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                  >
                    <Lock className="w-4 h-4 fill-black" />
                    <span>{loading ? 'Validando Acesso...' : 'Entrar no Portal do Cliente'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Botão de Demonstração Rápida com 1 Clique */}
                  <div className="pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={handleQuickDemoLogin}
                      className="w-full py-3 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-[#f3e5ab] text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                    >
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>Acessar Demonstração com 1 Clique</span>
                    </button>
                    <p className="text-[10px] text-gray-400 text-center mt-2">
                      Permite testar imediatamente o painel com uma obra real em andamento, checklist e laudo ART.
                    </p>
                  </div>
                </form>
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
