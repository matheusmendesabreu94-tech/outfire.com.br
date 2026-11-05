import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, CheckSquare, Receipt, Wrench, Bot, 
  MapPin, Clock, DollarSign, Camera, CheckCircle2, 
  AlertCircle, ChevronRight, ArrowLeft, Send, Sparkles, 
  LogOut, Phone, Navigation, ShieldCheck, FileCheck, RefreshCw,
  Plus, Calendar
} from 'lucide-react';
import { VoiceTextInput } from '../shared/VoiceTextInput';
import { MultiPhotoUpload } from '../shared/MultiPhotoUpload';
import { DEFAULT_CHECKLIST_TEMPLATES } from '../../data/defaultChecklistTemplates';
import { 
  TemplateChecklist, DespesaTecnico, FerramentaPatrimonio, 
  RegistroPontoGps, CategoriaDespesa 
} from '../../types/clientPortal';

interface TecnicoMobilePortalProps {
  usuario: {
    id: string;
    nome: string;
    pin: string;
    role: 'tecnico' | 'admin_outfire';
    perfil: string;
    telefone?: string;
  };
  onLogout: () => void;
}

export const TecnicoMobilePortal: React.FC<TecnicoMobilePortalProps> = ({ usuario, onLogout }) => {
  // Aba ativa: 'home' | 'checklists' | 'despesas' | 'ferramentas' | 'ia'
  const [activeTab, setActiveTab] = useState<'home' | 'checklists' | 'despesas' | 'ferramentas' | 'ia'>('home');

  // Estado da Obra do Dia
  const [obraHoje] = useState({
    id: 'obr_fasano_01',
    cliente: 'Parrilla Fasano Itaim',
    endereco: 'Rua Pedroso Alvarenga, 1080 - Itaim Bibi, São Paulo - SP',
    horario: '08:30 - Instalação Central VTS 32S3',
    valorReceber: 380.00,
    telefoneContato: '(11) 98765-4321',
    coifasQtd: 2,
    centralModelo: 'Outfire VTS 32S3 (Saponificante + CO2)',
  });

  // Estado do Ponto GPS
  const [pontoStatus, setPontoStatus] = useState<'fora' | 'trabalhando'>('fora');
  const [pontoHistorico, setPontoHistorico] = useState<RegistroPontoGps[]>(() => {
    const saved = localStorage.getItem(`outfire_ponto_${usuario.id}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [localizacaoAtual, setLocalizacaoAtual] = useState<{ lat: number; lng: number } | null>(null);
  const [capturandoGps, setCapturandoGps] = useState(false);
  const [gpsErro, setGpsErro] = useState<string | null>(null);

  // Estado de Checklists
  const [templates] = useState<TemplateChecklist[]>(DEFAULT_CHECKLIST_TEMPLATES);
  const [activeChecklist, setActiveChecklist] = useState<TemplateChecklist | null>(null);
  const [checklistRespostas, setChecklistRespostas] = useState<{
    [itemId: string]: { concluido: boolean; observacao: string; fotos: string[] }
  }>({});
  const [checklistFinalizado, setChecklistFinalizado] = useState<{ [templateId: string]: boolean }>({});

  // Estado de Despesas
  const [despesas, setDespesas] = useState<DespesaTecnico[]>(() => {
    const saved = localStorage.getItem(`outfire_despesas_${usuario.id}`);
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 'desp_1',
        tecnicoId: usuario.id,
        tecnicoNome: usuario.nome,
        obraId: 'obr_fasano_01',
        obraCliente: 'Parrilla Fasano',
        categoria: 'Combustível',
        descricao: 'Abastecimento veículo utilitário na ida',
        valor: 120.00,
        data: Date.now() - 3600000 * 2,
        fotos: [],
        status: 'Aprovada',
        criadoEm: Date.now() - 3600000 * 2,
      }
    ];
  });
  const [novaDespesaModal, setNovaDespesaModal] = useState(false);
  const [categoriaDespesa, setCategoriaDespesa] = useState<CategoriaDespesa>('Alimentação');
  const [descricaoDespesa, setDescricaoDespesa] = useState('');
  const [valorDespesa, setValorDespesa] = useState('');
  const [fotosDespesa, setFotosDespesa] = useState<string[]>([]);

  // Estado de Ferramentas
  const [ferramentasCustodia, setFerramentasCustodia] = useState<FerramentaPatrimonio[]>([
    {
      id: 'fer_01',
      nome: 'Chave Dinamométrica de Precisão 1/2"',
      numeroPatrimonio: 'PAT-OUT-0042',
      status: 'Em Uso',
      tecnicoResponsavelId: usuario.id,
      tecnicoResponsavelNome: usuario.nome,
    },
    {
      id: 'fer_02',
      nome: 'Manômetro Digital Pressurização CO2',
      numeroPatrimonio: 'PAT-OUT-0019',
      status: 'Em Uso',
      tecnicoResponsavelId: usuario.id,
      tecnicoResponsavelNome: usuario.nome,
    },
    {
      id: 'fer_03',
      nome: 'Furadeira / Parafusadeira Bosch 18V Industrial',
      numeroPatrimonio: 'PAT-OUT-0088',
      status: 'Em Uso',
      tecnicoResponsavelId: usuario.id,
      tecnicoResponsavelNome: usuario.nome,
    },
  ]);

  // Estado do IA Copilot
  const [chatMensagens, setChatMensagens] = useState<Array<{ remetente: 'ia' | 'tecnico'; texto: string; timestamp: number }>>([
    {
      remetente: 'ia',
      texto: `Olá ${usuario.nome}! Sou o Copilot de Campo da Engenharia Outfire. Posso tirar dúvidas sobre o esquema elétrico da Central VTS, fusíveis de 5A de retardo, intertravamento de gás, NBR 14518 ou te ajudar a registrar despesas. Como posso ajudar agora?`,
      timestamp: Date.now(),
    }
  ]);
  const [inputIa, setInputIa] = useState('');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMensagens]);

  // Salvar despesas localmente
  useEffect(() => {
    localStorage.setItem(`outfire_despesas_${usuario.id}`, JSON.stringify(despesas));
  }, [despesas, usuario.id]);

  // Registrar Check-in / Check-out com GPS
  const handleRegistrarPonto = (tipo: 'checkin' | 'checkout') => {
    setCapturandoGps(true);
    setGpsErro(null);

    if (!('geolocation' in navigator)) {
      setGpsErro('GPS não disponível neste dispositivo.');
      setCapturandoGps(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setLocalizacaoAtual(coords);

        const novoPonto: RegistroPontoGps = {
          id: `ponto_${Date.now()}`,
          tecnicoId: usuario.id,
          tecnicoNome: usuario.nome,
          obraId: obraHoje.id,
          obraCliente: obraHoje.cliente,
          tipo,
          lat: coords.lat,
          lng: coords.lng,
          precisaoMetros: Math.round(pos.coords.accuracy),
          timestamp: Date.now(),
        };

        const atualizado = [novoPonto, ...pontoHistorico];
        setPontoHistorico(atualizado);
        localStorage.setItem(`outfire_ponto_${usuario.id}`, JSON.stringify(atualizado));
        setPontoStatus(tipo === 'checkin' ? 'trabalhando' : 'fora');
        setCapturandoGps(false);
      },
      (err) => {
        console.warn('Erro GPS:', err);
        // Fallback com coordenadas aproximadas
        const fallbackPonto: RegistroPontoGps = {
          id: `ponto_${Date.now()}`,
          tecnicoId: usuario.id,
          tecnicoNome: usuario.nome,
          obraId: obraHoje.id,
          obraCliente: obraHoje.cliente,
          tipo,
          lat: -23.5855,
          lng: -46.6784,
          timestamp: Date.now(),
          observacao: 'Localização estimada (GPS sem permissão total)',
        };
        const atualizado = [fallbackPonto, ...pontoHistorico];
        setPontoHistorico(atualizado);
        localStorage.setItem(`outfire_ponto_${usuario.id}`, JSON.stringify(atualizado));
        setPontoStatus(tipo === 'checkin' ? 'trabalhando' : 'fora');
        setCapturandoGps(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  // Salvar despesa
  const handleSalvarDespesa = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(valorDespesa.replace(',', '.'));
    if (isNaN(val) || val <= 0) return;

    const nova: DespesaTecnico = {
      id: `desp_${Date.now()}`,
      tecnicoId: usuario.id,
      tecnicoNome: usuario.nome,
      obraId: obraHoje.id,
      obraCliente: obraHoje.cliente,
      categoria: categoriaDespesa,
      descricao: descricaoDespesa || `${categoriaDespesa} em campo`,
      valor: val,
      data: Date.now(),
      fotos: fotosDespesa,
      status: 'Pendente',
      criadoEm: Date.now(),
    };

    setDespesas([nova, ...despesas]);
    setDescricaoDespesa('');
    setValorDespesa('');
    setFotosDespesa([]);
    setNovaDespesaModal(false);
  };

  // Enviar mensagem para IA Copilot
  const handleEnviarIa = (textoEnviar?: string) => {
    const texto = (textoEnviar || inputIa).trim();
    if (!texto) return;

    const novaMsgTecnico = {
      remetente: 'tecnico' as const,
      texto,
      timestamp: Date.now(),
    };

    setChatMensagens((prev) => [...prev, novaMsgTecnico]);
    setInputIa('');

    // Resposta inteligente simulada da engenharia Outfire
    setTimeout(() => {
      let resposta = '';
      const tLower = texto.toLowerCase();

      if (tLower.includes('fusivel') || tLower.includes('fusível') || tLower.includes('amper') || tLower.includes('amperes')) {
        resposta = `⚡ **Atenção aos Fusíveis:** Na Central Outfire VTS 32S3, utilize SEMPRE **fusíveis de 5 Amperes de retardo (ação lenta)**. Eles suportam o pico de corrente da solenoide e dos módulos sem queimar durante a partida do sistema. Nunca substitua por fusíveis rápidos de 2A ou 3A.`;
      } else if (tLower.includes('gas') || tLower.includes('gás') || tLower.includes('valvula') || tLower.includes('válvula')) {
        resposta = `🔥 **Intertravamento de Válvula de Gás:** A Central VTS comanda a válvula solenoide normalmente fechada (NF) ou rearme manual. No disparo, o relé NA/NF corta a alimentação da linha de gás imediatamente antes da pressurização do saponificante, garantindo corte total da chama de cocção conforme NBR 14518.`;
      } else if (tLower.includes('exaustor') || tLower.includes('coifa') || tLower.includes('duto')) {
        resposta = `💨 **Intertravamento de Exaustão:** Conforme item 5.4 da NBR 14518, o exaustor deve ser DESLIGADO automaticamente no disparo do sistema para não sugar o saponificante para o duto de descarga e mantê-lo concentrado na superfície quente da coifa.`;
      } else if (tLower.includes('despesa') || tLower.includes('gastei') || tLower.includes('combustivel') || tLower.includes('nota')) {
        resposta = `💰 **Registro de Despesa:** Você pode registrar essa despesa agora na aba **💸 Despesas** tocando em "+ Nova Despesa". Use o microfone para ditar o que comprou e anexe a foto da nota fiscal para reembolso rápido pela diretoria!`;
      } else {
        resposta = `Recebido! Para a obra **${obraHoje.cliente}**, siga o checklist de 10 passos. Qualquer divergência de pressão no manômetro ou dúvida na fixação dos bicos angulares, acione o Eng. Robson via WhatsApp direto.`;
      }

      setChatMensagens((prev) => [
        ...prev,
        {
          remetente: 'ia',
          texto: resposta,
          timestamp: Date.now(),
        }
      ]);
    }, 700);
  };

  const totalDespesasHoje = despesas.reduce((acc, d) => acc + d.valor, 0);

  return (
    <div className="min-h-screen bg-[#08090b] text-slate-100 flex flex-col font-sans pb-24 select-none">
      
      {/* Top Header Mobile */}
      <header className="sticky top-0 z-40 bg-[#0d1017]/95 backdrop-blur-md border-b border-[#d4af37]/30 px-4 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b89628] flex items-center justify-center text-black font-black text-sm shadow-glow-gold">
            🔧
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-white tracking-wide">{usuario.nome}</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-500/20 text-[#f3e5ab] border border-amber-500/30 uppercase font-mono">
                {usuario.perfil}
              </span>
            </div>
            <span className="text-[10px] text-gray-400 font-mono block">Outfire Field Tech Ops</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onLogout}
          className="p-2 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 hover:bg-red-900/60 transition-colors"
          title="Sair do Portal Técnico"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </header>

      {/* Main Content Area conforme Tab selecionada */}
      <main className="flex-1 px-4 py-4 max-w-lg mx-auto w-full">
        
        {/* ============================================================== */}
        {/* ABA 1: HOME / DASHBOARD DO DIA                                 */}
        {/* ============================================================== */}
        {activeTab === 'home' && (
          <div className="space-y-4 animate-fadeIn">
            
            {/* Card Obra do Dia */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#121622] to-[#0c0f16] border border-[#d4af37]/40 shadow-[0_0_25px_rgba(212,175,55,0.15)] relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] font-bold flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Obra do Dia
                </span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Agendada
                </span>
              </div>

              <h2 className="text-base font-black text-white mb-1">{obraHoje.cliente}</h2>
              
              <div className="flex items-start gap-1.5 text-xs text-gray-300 mb-3">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="leading-tight">{obraHoje.endereco}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs">
                <div className="bg-black/40 p-2 rounded-xl">
                  <span className="text-[10px] text-gray-400 block font-mono">REMUNERAÇÃO DA OBRA</span>
                  <span className="text-sm font-black text-[#f3e5ab]">
                    R$ {obraHoje.valorReceber.toFixed(2)}
                  </span>
                </div>
                <div className="bg-black/40 p-2 rounded-xl">
                  <span className="text-[10px] text-gray-400 block font-mono">CENTRAL</span>
                  <span className="text-xs font-bold text-white truncate block">
                    VTS 32S3 (2 Coifas)
                  </span>
                </div>
              </div>

              {/* Ações Rápidas da Obra */}
              <div className="flex items-center gap-2 mt-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(obraHoje.endereco)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-[#f3e5ab] text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-amber-500/30 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Traçar Rota GPS</span>
                </a>
                <a
                  href={`tel:${obraHoje.telefoneContato}`}
                  className="py-2 px-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ligar</span>
                </a>
              </div>
            </div>

            {/* Card Ponto Eletrônico GPS */}
            <div className="p-4 rounded-2xl bg-[#0e121a] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  Controle de Horário & GPS
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  pontoStatus === 'trabalhando' 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {pontoStatus === 'trabalhando' ? '● Em Operação' : '○ Aguardando Início'}
                </span>
              </div>

              {pontoStatus === 'fora' ? (
                <button
                  type="button"
                  onClick={() => handleRegistrarPonto('checkin')}
                  disabled={capturandoGps}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-sm shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{capturandoGps ? 'Registrando GPS...' : '📍 FAZER CHECK-IN NA OBRA'}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleRegistrarPonto('checkout')}
                  disabled={capturandoGps}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-black text-sm shadow-lg shadow-red-900/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{capturandoGps ? 'Finalizando...' : '🚪 FAZER CHECK-OUT (CONCLUIR DIA)'}</span>
                </button>
              )}

              {gpsErro && (
                <div className="p-2 rounded-lg bg-red-950/40 border border-red-500/30 text-[11px] text-red-300 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{gpsErro}</span>
                </div>
              )}

              {/* Últimos registros de ponto */}
              {pontoHistorico.length > 0 && (
                <div className="pt-2 border-t border-white/5 space-y-1.5">
                  <span className="text-[10px] text-gray-400 font-mono block">Último registro de hoje:</span>
                  <div className="flex items-center justify-between text-xs text-gray-300 bg-black/30 p-2 rounded-lg font-mono">
                    <span className="capitalize font-bold text-amber-300">{pontoHistorico[0].tipo}</span>
                    <span>{new Date(pontoHistorico[0].timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    <span className="text-[10px] text-gray-500">
                      {pontoHistorico[0].lat.toFixed(4)}, {pontoHistorico[0].lng.toFixed(4)}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Resumo de Metas e Despesas */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setActiveTab('checklists')}
                className="p-3.5 rounded-2xl bg-[#0e121a] border border-white/10 hover:border-[#d4af37]/40 text-left transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <CheckSquare className="w-4 h-4 text-[#d4af37]" />
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" />
                </div>
                <span className="text-xs font-bold text-white block">Checklists</span>
                <span className="text-[11px] text-amber-300 font-mono">3 modelos prontos</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('despesas')}
                className="p-3.5 rounded-2xl bg-[#0e121a] border border-white/10 hover:border-[#d4af37]/40 text-left transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <Receipt className="w-4 h-4 text-emerald-400" />
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" />
                </div>
                <span className="text-xs font-bold text-white block">Despesas Hoje</span>
                <span className="text-[11px] text-emerald-300 font-mono">
                  R$ {totalDespesasHoje.toFixed(2)}
                </span>
              </button>
            </div>

            {/* Dica do Dia da Engenharia */}
            <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200/90 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold">Lembrete Técnico Central VTS:</strong>
                Lembre-se de instalar exclusivamente os <strong>fusíveis de 5A de retardo</strong> e testar o intertravamento do exaustor antes da assinatura final do cliente.
              </div>
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 2: CHECKLISTS                                              */}
        {/* ============================================================== */}
        {activeTab === 'checklists' && (
          <div className="space-y-4 animate-fadeIn">
            {!activeChecklist ? (
              <>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-sm font-black text-white">Checklists Obrigatórios</h2>
                  <span className="text-[10px] font-mono text-[#d4af37]">Outfire Quality Standard</span>
                </div>

                <div className="space-y-3">
                  {templates.map((tpl) => {
                    const isDone = checklistFinalizado[tpl.id];
                    return (
                      <div
                        key={tpl.id}
                        onClick={() => setActiveChecklist(tpl)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                          isDone 
                            ? 'bg-emerald-950/20 border-emerald-500/40' 
                            : 'bg-[#0e121a] border-white/10 hover:border-[#d4af37]/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-white">{tpl.nome}</span>
                          {isDone ? (
                            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              Concluído
                            </span>
                          ) : (
                            <span className="text-[10px] font-mono text-gray-400">
                              {tpl.itens.length} itens
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-400 mb-2">
                          {tpl.tipo === 'retirada_kit' && 'Conferência de peças e ferramentas na saída do almoxarifado.'}
                          {tpl.tipo === 'instalacao_concluida' && 'Comissionamento completo, estanqueidade e termo de aceite.'}
                          {tpl.tipo === 'manutencao' && 'Revisão periódica de fusíveis 5A de retardo e pressão.'}
                        </p>
                        <div className="flex items-center justify-between text-xs text-[#d4af37] font-semibold">
                          <span>{isDone ? 'Revisar respostas' : 'Preencher agora'}</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              // Formulário do Checklist Aberto
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => setActiveChecklist(null)}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white mb-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Voltar aos Checklists</span>
                </button>

                <div className="p-3.5 rounded-2xl bg-black/40 border border-[#d4af37]/30">
                  <h3 className="text-sm font-black text-white">{activeChecklist.nome}</h3>
                  <span className="text-[11px] text-gray-400 block font-mono">
                    Obra: {obraHoje.cliente}
                  </span>
                </div>

                <div className="space-y-3">
                  {activeChecklist.itens.map((item, idx) => {
                    const resposta = checklistRespostas[item.id] || { concluido: false, observacao: '', fotos: [] };
                    return (
                      <div
                        key={item.id}
                        className={`p-3.5 rounded-2xl border transition-all ${
                          resposta.concluido
                            ? 'bg-emerald-950/15 border-emerald-500/30'
                            : 'bg-[#0e121a] border-white/10'
                        }`}
                      >
                        <div className="flex items-start gap-2.5 mb-2">
                          <input
                            type="checkbox"
                            id={`chk_${item.id}`}
                            checked={resposta.concluido}
                            onChange={(e) => {
                              setChecklistRespostas({
                                ...checklistRespostas,
                                [item.id]: { ...resposta, concluido: e.target.checked }
                              });
                            }}
                            className="mt-1 w-4 h-4 rounded text-amber-500 focus:ring-0 accent-amber-500 cursor-pointer"
                          />
                          <label htmlFor={`chk_${item.id}`} className="text-xs font-semibold text-gray-200 cursor-pointer flex-1 leading-snug">
                            {idx + 1}. {item.descricao}
                          </label>
                        </div>

                        {/* Campo de voz para observação */}
                        <div className="mt-2 pl-6">
                          <VoiceTextInput
                            value={resposta.observacao}
                            onChange={(text) => {
                              setChecklistRespostas({
                                ...checklistRespostas,
                                [item.id]: { ...resposta, observacao: text }
                              });
                            }}
                            placeholder="Observação (digite ou dite por voz 🎤)..."
                            className="text-xs"
                          />
                        </div>

                        {/* Upload de fotos obrigatório ou opcional */}
                        {item.requerFoto && (
                          <div className="mt-2.5 pl-6">
                            <MultiPhotoUpload
                              photos={resposta.fotos}
                              onPhotosChange={(photos) => {
                                setChecklistRespostas({
                                  ...checklistRespostas,
                                  [item.id]: { ...resposta, fotos: photos }
                                });
                              }}
                              maxPhotos={4}
                              label="Foto Comprobatória (Obrigatória)"
                              helperText="Tire foto nítida do item instalado"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setChecklistFinalizado({
                      ...checklistFinalizado,
                      [activeChecklist.id]: true
                    });
                    setActiveChecklist(null);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89628] text-black font-black text-xs sm:text-sm shadow-glow-gold transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>CONCLUIR E ASSINAR CHECKLIST</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 3: DESPESAS                                                */}
        {/* ============================================================== */}
        {activeTab === 'despesas' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between mb-1">
              <div>
                <h2 className="text-sm font-black text-white">Despesas & Reembolso</h2>
                <span className="text-[10px] text-gray-400 font-mono">
                  Total de hoje: <strong className="text-emerald-400">R$ {totalDespesasHoje.toFixed(2)}</strong>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setNovaDespesaModal(true)}
                className="py-2 px-3 rounded-xl bg-[#d4af37] hover:bg-[#e5c05d] text-black font-black text-xs flex items-center gap-1 shadow-glow-gold transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Nova Despesa</span>
              </button>
            </div>

            {/* Modal / Card de Nova Despesa */}
            {novaDespesaModal && (
              <form onSubmit={handleSalvarDespesa} className="p-4 rounded-2xl bg-[#121622] border border-[#d4af37]/40 space-y-3 shadow-xl">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-[#f3e5ab]">Lançar Nova Despesa de Campo</span>
                  <button
                    type="button"
                    onClick={() => setNovaDespesaModal(false)}
                    className="text-xs text-gray-400 hover:text-white"
                  >
                    Cancelar
                  </button>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">Categoria *</label>
                  <select
                    value={categoriaDespesa}
                    onChange={(e) => setCategoriaDespesa(e.target.value as CategoriaDespesa)}
                    className="w-full bg-[#08090b] border border-[#d4af37]/30 text-white text-xs rounded-xl px-3 py-2.5 outline-none focus:border-[#d4af37]"
                  >
                    <option value="Combustível">⛽ Combustível</option>
                    <option value="Alimentação">🍽️ Alimentação</option>
                    <option value="Material">🔩 Material Emergencial</option>
                    <option value="Transporte">🚕 Transporte / Estacionamento / Pedágio</option>
                    <option value="Hospedagem">🏨 Hospedagem</option>
                    <option value="Outros">📦 Outros</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">Valor (R$) *</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="0,00"
                    value={valorDespesa}
                    onChange={(e) => setValorDespesa(e.target.value)}
                    className="w-full bg-[#08090b] border border-[#d4af37]/30 text-white font-mono text-sm rounded-xl px-3.5 py-2.5 outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <VoiceTextInput
                    label="Descrição (Dite ou Escreva) *"
                    value={descricaoDespesa}
                    onChange={setDescricaoDespesa}
                    placeholder="Ex: Almoço no shopping ou combustível posto Ipiranga..."
                    required
                  />
                </div>

                <div>
                  <MultiPhotoUpload
                    photos={fotosDespesa}
                    onPhotosChange={setFotosDespesa}
                    maxPhotos={5}
                    label="Fotos do Comprovante / Nota Fiscal (Obrigatório)"
                    helperText="Tire foto da nota fiscal para reembolso imediato"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-xs shadow-lg transition-all"
                >
                  💾 SALVAR E ENVIAR PARA APROVAÇÃO
                </button>
              </form>
            )}

            {/* Lista de Despesas */}
            <div className="space-y-2.5">
              {despesas.length === 0 ? (
                <div className="text-center py-8 text-gray-500 text-xs">
                  Nenhuma despesa lançada hoje.
                </div>
              ) : (
                despesas.map((desp) => (
                  <div
                    key={desp.id}
                    className="p-3.5 rounded-2xl bg-[#0e121a] border border-white/10 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-xs font-bold text-white">{desp.descricao}</span>
                        <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                          desp.status === 'Aprovada'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}>
                          {desp.status}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono">
                        {desp.categoria} • {new Date(desp.data).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        {desp.fotos.length > 0 && ` • 📷 ${desp.fotos.length} foto(s)`}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-sm font-black text-[#f3e5ab] font-mono">
                        R$ {desp.valor.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 4: FERRAMENTAS SOB CUSTÓDIA                                */}
        {/* ============================================================== */}
        {activeTab === 'ferramentas' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between mb-1">
              <div>
                <h2 className="text-sm font-black text-white">Ferramentas sob Custódia</h2>
                <span className="text-[10px] text-gray-400 font-mono">
                  {ferramentasCustodia.length} itens vinculados ao seu PIN
                </span>
              </div>
              <span className="text-xs text-[#d4af37] font-mono font-bold">Patrimônio Outfire</span>
            </div>

            <div className="space-y-2.5">
              {ferramentasCustodia.map((fer) => (
                <div
                  key={fer.id}
                  className="p-3.5 rounded-2xl bg-[#0e121a] border border-white/10 flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-white block">{fer.nome}</span>
                    <span className="text-[10px] text-[#d4af37] font-mono block">
                      {fer.numeroPatrimonio}
                    </span>
                    <span className="text-[9px] text-emerald-400 font-semibold">
                      ● Cautela Ativa
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      alert(`Solicitação de devolução da ferramenta ${fer.nome} registrada.`);
                    }}
                    className="py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium border border-white/10"
                  >
                    Devolver
                  </button>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 text-xs text-gray-400 leading-relaxed">
              <strong className="text-white block mb-1">Responsabilidade Técnica:</strong>
              As ferramentas sob sua cautela foram inspecionadas e calibradas para instalação conforme as normas NBR 14518 e NFPA 96. Em caso de avaria ou perda, informe imediatamente a Engenharia.
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 5: IA COPILOT DE CAMPO                                     */}
        {/* ============================================================== */}
        {activeTab === 'ia' && (
          <div className="flex flex-col h-[calc(100vh-160px)] animate-fadeIn">
            
            {/* Header da IA */}
            <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 mb-3 flex items-center gap-2">
              <div className="p-2 rounded-xl bg-[#d4af37]/20 text-[#d4af37]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-black text-white block">Outfire Field AI Copilot</span>
                <span className="text-[10px] text-gray-400 font-mono">Suporte Técnico & Normas em Tempo Real</span>
              </div>
            </div>

            {/* Balões de Chat */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {chatMensagens.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.remetente === 'tecnico' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                      msg.remetente === 'tecnico'
                        ? 'bg-[#d4af37] text-black font-medium rounded-br-none'
                        : 'bg-[#121622] text-gray-200 border border-white/10 rounded-bl-none'
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.texto}</div>
                    <span
                      className={`text-[9px] block text-right mt-1 font-mono ${
                        msg.remetente === 'tecnico' ? 'text-black/60' : 'text-gray-500'
                      }`}
                    >
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={chatBottomRef} />
            </div>

            {/* Sugestões Rápidas */}
            <div className="flex gap-2 overflow-x-auto py-2 no-scrollbar">
              <button
                type="button"
                onClick={() => handleEnviarIa('Qual o fusível correto da Central VTS?')}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 hover:text-white shrink-0"
              >
                ⚡ Fusíveis 5A retardo
              </button>
              <button
                type="button"
                onClick={() => handleEnviarIa('Como ligar a válvula de gás?')}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 hover:text-white shrink-0"
              >
                🔥 Válvula de gás
              </button>
              <button
                type="button"
                onClick={() => handleEnviarIa('O que diz a NBR 14518 sobre exaustores?')}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 hover:text-white shrink-0"
              >
                💨 Exaustor NBR 14518
              </button>
            </div>

            {/* Input com Ditado de Voz */}
            <div className="pt-2 border-t border-white/10 flex items-center gap-2">
              <div className="flex-1">
                <VoiceTextInput
                  value={inputIa}
                  onChange={setInputIa}
                  placeholder="Pergunte ao Copilot ou fale no microfone 🎤..."
                />
              </div>
              <button
                type="button"
                onClick={() => handleEnviarIa()}
                className="p-3 rounded-xl bg-[#d4af37] text-black font-bold hover:bg-[#e5c05d] transition-colors"
                title="Enviar mensagem"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </main>

      {/* ============================================================== */}
      {/* BOTTOM TAB BAR (PWA NATIVE STYLE)                              */}
      {/* ============================================================== */}
      <nav className="fixed bottom-0 inset-x-0 bg-[#07090c]/98 border-t border-[#d4af37]/30 px-2 py-1.5 z-40 backdrop-blur-xl">
        <div className="max-w-md mx-auto grid grid-cols-5 gap-1">
          
          <button
            type="button"
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'home'
                ? 'text-[#d4af37] bg-white/5'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">Início</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('checklists')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'checklists'
                ? 'text-[#d4af37] bg-white/5'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <CheckSquare className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">Checklists</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('despesas')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'despesas'
                ? 'text-[#d4af37] bg-white/5'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Receipt className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">Despesas</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ferramentas')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'ferramentas'
                ? 'text-[#d4af37] bg-white/5'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Wrench className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">Ferramentas</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ia')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'ia'
                ? 'text-[#d4af37] bg-white/5'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Bot className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">IA Copilot</span>
          </button>

        </div>
      </nav>

    </div>
  );
};
