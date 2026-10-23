import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, Settings, Check, X, FileText, Lock, ExternalLink } from 'lucide-react';

const COOKIE_STORAGE_KEY = 'outfire_cookie_consent_v1';

export interface CookiePreferences {
  necessary: boolean; // Sempre true
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    marketing: false,
    timestamp: ''
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!saved) {
        // Exibe o banner após 1 segundo para não poluir a entrada imediata
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      } else {
        setPreferences(JSON.parse(saved));
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  // Permite que links do footer reabram o banner de cookies a qualquer momento
  useEffect(() => {
    const handleReopen = () => {
      setIsVisible(true);
      setShowPreferences(true);
    };
    window.addEventListener('openCookieSettings', handleReopen);
    return () => window.removeEventListener('openCookieSettings', handleReopen);
  }, []);

  const saveConsent = (updated: CookiePreferences) => {
    const finalPrefs = { ...updated, necessary: true, timestamp: new Date().toISOString() };
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(finalPrefs));
    } catch {}
    setPreferences(finalPrefs);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: ''
    });
  };

  const handleAcceptNecessaryOnly = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: ''
    });
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  if (!isVisible && !showPrivacyPolicy) return null;

  return (
    <>
      {/* 1. FLOATING COOKIE CONSENT BANNER */}
      {isVisible && !showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#08090b]/95 backdrop-blur-xl border-t border-amber-500/30 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] animate-slideUp">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Info Text */}
            <div className="flex items-start gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Privacidade e Segurança de Dados (LGPD)</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-[#f3e5ab] border border-amber-500/30">
                    Lei 13.709/2018
                  </span>
                </h4>
                <p className="text-xs text-gray-300 mt-1 max-w-3xl leading-relaxed">
                  Utilizamos cookies essenciais e criptografia para garantir a segurança da navegação, 
                  salvaguardar projetos técnicos de cozinhas e otimizar sua experiência no portal. 
                  Você tem controle total sobre seus dados.
                </p>
                <div className="mt-2 flex items-center gap-3 text-xs">
                  <button 
                    onClick={() => setShowPrivacyPolicy(true)} 
                    className="text-amber-400 hover:text-amber-300 underline font-medium"
                  >
                    Ler Política de Privacidade e Termos de Uso
                  </button>
                  <span className="text-gray-600">•</span>
                  <button 
                    onClick={() => setShowPreferences(true)} 
                    className="text-gray-400 hover:text-white underline font-medium"
                  >
                    Personalizar preferências
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-end gap-2.5 w-full lg:w-auto shrink-0">
              <button
                onClick={handleAcceptNecessaryOnly}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 transition-all"
              >
                Apenas Essenciais
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-amber-500/30 text-xs font-semibold text-amber-300 flex items-center gap-1.5 transition-all"
              >
                <Settings className="w-3.5 h-3.5" />
                Opções
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89628] text-black text-xs font-extrabold shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all"
              >
                Aceitar Todos
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 2. CUSTOMIZE PREFERENCES MODAL */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1014] border border-amber-500/30 rounded-3xl max-w-lg w-full p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)] animate-scaleIn">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <Cookie className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="text-base font-bold text-white">Preferências de Privacidade</h3>
              </div>
              <button 
                onClick={() => setShowPreferences(false)}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-xs">
              {/* Necessary */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">Cookies Estritamente Necessários</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-[#f3e5ab] font-bold">
                      Sempre Ativos
                    </span>
                  </div>
                  <p className="text-gray-400 mt-1 leading-relaxed">
                    Indispensáveis para autenticação segura no Portal do Cliente, funcionamento do carrinho e proteção contra ataques de bots e CSRF.
                  </p>
                </div>
                <input type="checkbox" checked disabled className="mt-1 accent-amber-500 opacity-80 cursor-not-allowed" />
              </div>

              {/* Analytics */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start justify-between gap-3">
                <div>
                  <span className="font-bold text-white">Cookies Analíticos e Desempenho</span>
                  <p className="text-gray-400 mt-1 leading-relaxed">
                    Permitem medir de forma anônima o uso da calculadora de coifas e tempo de resposta para melhorias técnicas contínuas.
                  </p>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-amber-500 cursor-pointer" 
                />
              </div>

              {/* Marketing */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start justify-between gap-3">
                <div>
                  <span className="font-bold text-white">Comunicação Personalizada & Marketing</span>
                  <p className="text-gray-400 mt-1 leading-relaxed">
                    Utilizados para direcionar propostas comerciais e novidades sobre atualizações da norma NBR 14518 e manutenções do sistema.
                  </p>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-amber-500 cursor-pointer" 
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => setShowPrivacyPolicy(true)}
                className="text-xs text-amber-400 hover:underline flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" /> Ler Política
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAcceptNecessaryOnly}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-gray-300"
                >
                  Recusar Opcionais
                </button>
                <button
                  onClick={handleSaveCustom}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black text-xs font-bold shadow-glow-gold"
                >
                  Salvar Preferências
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 3. FULL PRIVACY POLICY & TERMS MODAL */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1014] border border-amber-500/30 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-[0_25px_70px_rgba(0,0,0,0.95)] animate-scaleIn">
            
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Política de Privacidade & Termos de Uso</h3>
                  <p className="text-xs text-[#e5c05d]">OUTFIRE® Sistemas Contra Incêndio — Versão 2026.1 (LGPD)</p>
                </div>
              </div>
              <button 
                onClick={() => setShowPrivacyPolicy(false)}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs text-gray-300 leading-relaxed font-sans">
              <section>
                <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5 text-amber-400">
                  1. Compromisso com a Privacidade e LGPD
                </h4>
                <p>
                  A <strong>OUTFIRE SISTEMAS CONTRA INCÊNDIO LTDA.</strong>, comprometida com a transparência, segurança da informação e a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD), estabelece este documento para esclarecer aos seus clientes, parceiros, restaurantes e usuários como seus dados são tratados com segurança e rigor técnico.
                </p>
              </section>

              <section>
                <h4 className="text-sm font-bold text-white mb-1.5 text-amber-400">
                  2. Dados Coletados e Finalidade
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li><strong>Dados de Contato e Identificação:</strong> Nome do responsável, nome fantasia do restaurante, WhatsApp, e-mail e cidade. Finalidade: Atendimento comercial, elaboração de proposta orçamentária e agendamento de vistorias técnicas.</li>
                  <li><strong>Dados de Engenharia da Cozinha:</strong> Medidas de coifa, bicos, dutos e equipamentos de cocção. Finalidade: Cálculo de vazão conforme ABNT NBR 14518:2020 e dimensionamento da Central VTS 32S3.</li>
                  <li><strong>Projetos e Plantas Baixas:</strong> Arquivos DWG/PDF e fotos do local inseridos no Portal do Cliente. Finalidade: Emissão de ART (Anotação de Responsabilidade Técnica) do CREA e instrução de processos no Corpo de Bombeiros (AVCB/CLCB).</li>
                </ul>
              </section>

              <section>
                <h4 className="text-sm font-bold text-white mb-1.5 text-amber-400">
                  3. Sigilo Industrial e Isolamento de Documentos
                </h4>
                <p>
                  Plantas baixas, memoriais descritivos e receitas operacionais do restaurante recebem tratamento de <strong>Segredo Comercial e Industrial</strong>. O Portal do Cliente Outfire emprega isolamento estrito via Row-Level Security (RLS) e chaves criptográficas UUIDv4, garantindo que nenhum terceiro ou restaurante concorrente tenha acesso aos dados ou laudos de sua cozinha.
                </p>
              </section>

              <section>
                <h4 className="text-sm font-bold text-white mb-1.5 text-amber-400">
                  4. Direitos do Titular de Dados (Art. 18 da LGPD)
                </h4>
                <p>
                  O titular dos dados tem o direito de solicitar a qualquer momento a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou a revogação do consentimento, através do e-mail do nosso Encarregado de Dados (DPO): <strong className="text-amber-300">contato@outfire.com.br</strong> (ou <strong className="text-amber-300">privacidade@outfire.com.br</strong>).
                </p>
              </section>

              <section>
                <h4 className="text-sm font-bold text-white mb-1.5 text-amber-400">
                  5. Segurança e Armazenamento
                </h4>
                <p>
                  Todos os dados são transmitidos via conexão criptografada SSL/TLS (HTTPS) de 256 bits. Arquivos e laudos emitidos pela engenharia Outfire são assinados digitalmente com hash criptográfico SHA-256 e disponibilizados através de links com expiração temporária de segurança (Signed URLs).
                </p>
              </section>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-gray-400">
                Encarregado de Proteção de Dados (DPO): contato@outfire.com.br
              </span>
              <button
                onClick={() => setShowPrivacyPolicy(false)}
                className="px-5 py-2 rounded-xl bg-amber-500 text-black text-xs font-bold hover:bg-amber-400 transition-all shadow-glow-gold"
              >
                Entendi e Concordo
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
