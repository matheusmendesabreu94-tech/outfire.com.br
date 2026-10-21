import React, { useState, useEffect, useRef } from 'react';
import { 
  Flame, 
  Wind, 
  Zap, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  ShieldCheck, 
  AlertTriangle, 
  Radio, 
  Settings, 
  CheckCircle2, 
  XCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export type IhmScreen = 
  | 'T_MAIN' 
  | 'T_SENHA' 
  | 'T_PROG' 
  | 'T_GAS' 
  | 'T_SETORES_LISTA' 
  | 'T_SETOR_DETALHE'
  | 'T_STATUS_DIAG' 
  | 'T_AJUSTE_TEMPOS' 
  | 'T_CHECKLIST_WIZARD' 
  | 'T_CILINDROS' 
  | 'T_VISTORIA' 
  | 'T_ALARME' 
  | 'T_DISPARO_EFETUADO'
  | 'T_TREINAMENTO';

interface IhmEmulatorProps {
  compact?: boolean;
}

export const IhmEmulator: React.FC<IhmEmulatorProps> = ({ compact = false }) => {
  // --- ESTADO DO HARDWARE / MASTER ---
  const [conectado, setConectado] = useState(true);
  const [telaAtual, setTelaAtual] = useState<IhmScreen>('T_MAIN');
  const [fogoGeral, setFogoGeral] = useState(false);
  const [setorAlarme, setSetorAlarme] = useState<'coifa' | 'duto' | 'fogao'>('coifa');
  const [segundosRestantes, setSegundosRestantes] = useState(60);
  const [exaustorOk, setExaustorOk] = useState(true);
  const [acOk, setAcOk] = useState(true);
  const [gasLeak, setGasLeak] = useState(false);
  const [valvulaAberta, setValvulaAberta] = useState<1 | 2 | 0>(1); // 1 = Sol 1, 2 = Sol 2, 0 = Fechada
  const [modoGas, setModoGas] = useState<'AUTO' | 'SOL1' | 'SOL2'>('AUTO');
  const [somHabilitado, setSomHabilitado] = useState(true);
  
  // Senha
  const [senhaDigitada, setSenhaDigitada] = useState('');
  const [senhaErro, setSenhaErro] = useState(false);
  const [destinoSenha, setDestinoSenha] = useState<IhmScreen>('T_PROG');

  // Carrossel Prog (17 itens)
  const [progIdx, setProgIdx] = useState(0);

  // Setores
  const [setorSelecionadoIdx, setSetorSelecionadoIdx] = useState(0);

  // Relógio
  const [horaStr, setHoraStr] = useState('12:45');
  const [dataStr, setDataStr] = useState('21/10');

  // Barra de status alternante
  const [tickerToggle, setTickerToggle] = useState(false);
  const [popupTreino, setPopupTreino] = useState(false);
  const [treinoAtivo, setTreinoAtivo] = useState(false);

  // Áudio Ref
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Itens do Carrossel de Configurações
  const progItems = [
    { label: 'CHECKLIST', desc: 'ASSISTENTE DE ENTREGA E TESTES (NBR 14518)', target: 'T_CHECKLIST_WIZARD', color: '#108535' },
    { label: 'CENTRAL MISTA', desc: 'DETECCAO DE INCENDIO E CO2', target: 'T_STATUS_DIAG', color: '#108535' },
    { label: 'CFG CO2/SAP', desc: 'TEMPO E PULSO DE SOLENOIDES', target: 'T_AJUSTE_TEMPOS', color: '#003399' },
    { label: 'AVISOS', desc: 'CONFIGURACAO DE AVISOS SONOROS', target: 'T_MAIN', color: '#003399' },
    { label: 'STATUS', desc: 'STATUS GERAL DO SISTEMA E HARDWARE', target: 'T_STATUS_DIAG', color: '#003399' },
    { label: 'DATA / HORA', desc: 'CONFIGURACAO DE DATA E HORA RTC', target: 'T_MAIN', color: '#003399' },
    { label: 'TEMPOS', desc: 'TEMPOS DE DISPARO E RETARDO DAMPERS', target: 'T_AJUSTE_TEMPOS', color: '#003399' },
    { label: 'AGENDA / LISTA', desc: 'HORARIOS DE CORTE E LIBERACAO DE GAS', target: 'T_GAS', color: '#003399' },
    { label: 'ALARME', desc: 'AJUSTE DE TEMPO DA SIRENE BITONAL', target: 'T_MAIN', color: '#003399' },
    { label: 'PREVENTIVA', desc: 'AGENDAMENTO VISTORIA SEMESTRAL', target: 'T_VISTORIA', color: '#d97706' },
    { label: 'CILINDROS', desc: 'VALIDADE CO2 E SAPONIFICANTE CLASSE K', target: 'T_CILINDROS', color: '#003399' },
    { label: 'CFG BAT.', desc: 'CALIBRACAO E TENSAO DA BATERIA (24V)', target: 'T_STATUS_DIAG', color: '#003399' },
    { label: 'FALHAS', desc: 'INTEGRACAO RELE SHOPPING / BMS', target: 'T_MAIN', color: '#003399' },
    { label: 'DAMPERS', desc: 'CONFIGURACAO DE DAMPERS CORTA-FOGO', target: 'T_MAIN', color: '#003399' },
    { label: 'GIRAR TELA', desc: 'INVERTER DISPLAY 180 GRAUS', target: 'T_MAIN', color: '#d97706' },
    { label: 'ALTERAR SENHA', desc: 'ALTERACAO SENHA USUARIO/TECNICO', target: 'T_SENHA', color: '#003399' },
    { label: 'PAREAMENTO', desc: 'PAREAMENTO ESP-NOW MASTER / IHM', target: 'T_MAIN', color: '#003399' },
  ];

  // Setores da Cozinha
  const setores = [
    { nome: 'LAÇO 1: COIFA', temp: 85, status: 'OK' },
    { nome: 'LAÇO 2: DUTO', temp: 42, status: 'OK' },
    { nome: 'LAÇO 3: FOGÃO', temp: 120, status: 'OK' },
    { nome: 'LAÇO 4: FRITADEIRA', temp: 180, status: 'OK' },
    { nome: 'LAÇO 5: CHARBROILER', temp: 165, status: 'OK' },
    { nome: 'LAÇO 6: FORNO COMB.', temp: 95, status: 'OK' },
    { nome: 'LAÇO 7: ESTOQUE', temp: 24, status: 'OK' },
    { nome: 'LAÇO 8: SALÃO', temp: 22, status: 'OK' },
  ];

  // Atualizar Relógio em tempo real
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const d = String(now.getDate()).padStart(2, '0');
      const mo = String(now.getMonth() + 1).padStart(2, '0');
      setHoraStr(`${h}:${m}`);
      setDataStr(`${d}/${mo}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Alternar ticker da barra de status
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerToggle(prev => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Contagem regressiva do alarme
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (fogoGeral && segundosRestantes > 0) {
      timer = setInterval(() => {
        setSegundosRestantes(prev => {
          if (prev <= 1) {
            setTelaAtual('T_DISPARO_EFETUADO');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [fogoGeral, segundosRestantes]);

  // Função para tocar áudio oficial
  const tocarAudio = (arquivo: string) => {
    if (!somHabilitado) return;
    try {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      const audio = new Audio(`/assets/audio/${arquivo}`);
      audioRef.current = audio;
      audio.play().catch(e => console.log('Audio autoplay blocked:', e));
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  };

  const pararAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setTreinoAtivo(false);
  };

  // --- CONTROLES DE SIMULAÇÃO RÁPIDOS ---
  const simularNormal = () => {
    pararAudio();
    setConectado(true);
    setFogoGeral(false);
    setSegundosRestantes(60);
    setExaustorOk(true);
    setAcOk(true);
    setGasLeak(false);
    setValvulaAberta(1);
    setModoGas('AUTO');
    setTelaAtual('T_MAIN');
    setPopupTreino(false);
  };

  const simularAlarmeCoifa = () => {
    pararAudio();
    setConectado(true);
    setFogoGeral(true);
    setSetorAlarme('coifa');
    setSegundosRestantes(60);
    setValvulaAberta(0); // corta gás
    setTelaAtual('T_ALARME');
    tocarAudio('sensor_coifa.m4a');
  };

  const simularAlarmeDuto = () => {
    pararAudio();
    setConectado(true);
    setFogoGeral(true);
    setSetorAlarme('duto');
    setSegundosRestantes(30);
    setValvulaAberta(0);
    setTelaAtual('T_ALARME');
    tocarAudio('sensor_duto.m4a');
  };

  const simularVazamentoGas = () => {
    pararAudio();
    setConectado(true);
    setGasLeak(true);
    setValvulaAberta(0); // corta solenoide de gás
    setTelaAtual('T_MAIN');
    tocarAudio('gas.m4a');
  };

  const simularQuedaEnergia = () => {
    pararAudio();
    setConectado(true);
    setAcOk(false);
    setTelaAtual('T_MAIN');
    tocarAudio('energia.m4a');
  };

  const simularFalhaExaustor = () => {
    pararAudio();
    setConectado(true);
    setExaustorOk(false);
    setValvulaAberta(0); // gás cortado por intertravamento
    setTelaAtual('T_MAIN');
    tocarAudio('exaustor.m4a');
  };

  const simularPerdaLink = () => {
    pararAudio();
    setConectado(false);
    setTelaAtual('T_MAIN');
  };

  const abortarAlarme = () => {
    pararAudio();
    setFogoGeral(false);
    setSegundosRestantes(60);
    setTelaAtual('T_MAIN');
  };

  const rearmarSistema = () => {
    pararAudio();
    setFogoGeral(false);
    setSegundosRestantes(60);
    setGasLeak(false);
    setExaustorOk(true);
    setAcOk(true);
    setValvulaAberta(1);
    setTelaAtual('T_MAIN');
  };

  // Teclado numérico
  const handleKeypadPress = (val: string) => {
    setSenhaErro(false);
    if (val === 'C') {
      setSenhaDigitada('');
      return;
    }
    if (val === 'OK') {
      if (senhaDigitada === '1701' || senhaDigitada === '2580') {
        setSenhaDigitada('');
        setTelaAtual(destinoSenha);
      } else {
        setSenhaErro(true);
        setSenhaDigitada('');
      }
      return;
    }
    if (senhaDigitada.length < 4) {
      setSenhaDigitada(prev => prev + val);
    }
  };

  // --- CORES IDÊNTICAS AO HARDWARE LOVYANGFX ---
  const corAzulClaro = '#0284c7'; // COR_AZUL_CL
  const corAzulEscuro = '#003399'; // COR_AZUL_STD
  const corVerde = '#108535';    // COR_VERDE_ESC
  const corVermelho = '#dc2626'; // COR_VERMELHO

  return (
    <div className="flex flex-col items-center w-full select-none">
      {/* MOLDURA EXTERNA DO GABINETE DA CENTRAL (AÇO TEXTURIZADO E ACRÍLICO) */}
      <div className={`w-full ${compact ? 'max-w-[460px]' : 'max-w-[560px]'} bg-gradient-to-b from-[#181a20] via-[#0f1115] to-[#0a0b0d] p-3 sm:p-5 rounded-3xl border-2 border-[#d4af37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_3px_rgba(212,175,55,0.3)] relative`}>
        
        {/* PARAFUSOS ALLEN NOS 4 CANTOS */}
        <div className="absolute top-2.5 left-2.5 w-3 h-3 rounded-full bg-gradient-to-tr from-gray-700 to-gray-400 border border-gray-600 flex items-center justify-center shadow-inner">
          <div className="w-1.5 h-1.5 bg-black/60 rotate-45 rounded-xs" />
        </div>
        <div className="absolute top-2.5 right-2.5 w-3 h-3 rounded-full bg-gradient-to-tr from-gray-700 to-gray-400 border border-gray-600 flex items-center justify-center shadow-inner">
          <div className="w-1.5 h-1.5 bg-black/60 rotate-45 rounded-xs" />
        </div>
        <div className="absolute bottom-2.5 left-2.5 w-3 h-3 rounded-full bg-gradient-to-tr from-gray-700 to-gray-400 border border-gray-600 flex items-center justify-center shadow-inner">
          <div className="w-1.5 h-1.5 bg-black/60 rotate-45 rounded-xs" />
        </div>
        <div className="absolute bottom-2.5 right-2.5 w-3 h-3 rounded-full bg-gradient-to-tr from-gray-700 to-gray-400 border border-gray-600 flex items-center justify-center shadow-inner">
          <div className="w-1.5 h-1.5 bg-black/60 rotate-45 rounded-xs" />
        </div>

        {/* LOGO SUPERIOR & STATUS LEDS */}
        <div className="flex items-center justify-between mb-3 px-1 sm:px-2">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            </div>
            <div>
              <span className="text-xs font-black tracking-widest text-[#d4af37] font-sans">OUTFIRE VTS 32S3</span>
              <span className="block text-[9px] text-gray-400 font-mono tracking-tighter">IHM TFT 2.8" TOUCHSCREEN</span>
            </div>
          </div>

          {/* LEDS DE STATUS DA TAMPA (NORMALIZADOS: VERDES EM CIMA, AZUL LINK) */}
          <div className="flex items-center gap-2 sm:gap-3 bg-black/40 px-2.5 py-1 rounded-full border border-white/5">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-full ${conectado && !fogoGeral && !gasLeak ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-emerald-950'}`} />
              <span className="text-[9px] font-mono text-gray-400">OPERANTE</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-full ${fogoGeral || gasLeak ? 'bg-red-500 animate-ping shadow-[0_0_10px_#ef4444]' : 'bg-red-950'}`} />
              <span className="text-[9px] font-mono text-gray-400">ALARME</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-full ${conectado ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]' : 'bg-blue-950'}`} />
              <span className="text-[9px] font-mono text-gray-400">LINK</span>
            </div>
          </div>
        </div>

        {/* BEZEL INTERNO DO DISPLAY TFT 2.8" (320x240 NATIVO) */}
        <div className="p-2 sm:p-2.5 bg-[#000000] rounded-xl border border-gray-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.9)] relative overflow-hidden">
          
          {/* REFLEXO DE VIDRO BRILHANTE ACRÍLICO */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-30" />

          {/* ÁREA DA TELA TFT 320x240 */}
          <div 
            className="w-full aspect-[320/240] bg-white rounded-md overflow-hidden relative font-sans flex flex-col justify-between text-black shadow-inner"
            style={{ 
              backgroundColor: telaAtual === 'T_ALARME' || telaAtual === 'T_DISPARO_EFETUADO' ? '#dc2626' : '#ffffff' 
            }}
          >
            {/* 1. CABEÇALHO SUPERIOR (HEADER COMPACTO 30px) */}
            <div 
              onClick={() => {
                if (telaAtual !== 'T_MAIN') setTelaAtual('T_MAIN');
              }}
              className="h-[30px] px-3 flex items-center justify-between text-white cursor-pointer transition-colors z-20 shrink-0"
              style={{ 
                backgroundColor: !conectado ? corVermelho : (fogoGeral ? corVermelho : corAzulClaro) 
              }}
            >
              <div className="text-xs font-bold font-mono tracking-wide">
                {!conectado ? (
                  'SEM COMUNICAÇÃO'
                ) : fogoGeral ? (
                  'FOGO DETECTADO'
                ) : (
                  telaAtual === 'T_MAIN' ? `${dataStr}  ${horaStr}` : 'TOQUE PARA VOLTAR'
                )}
              </div>

              {/* ÍCONE DE CONEXÃO MASTER */}
              <div className="flex items-center gap-1">
                {conectado ? (
                  <div className="w-5 h-5 rounded-full bg-[#05D142] flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-red-800 flex items-center justify-center">
                    <XCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
              </div>
            </div>

            {/* 2. CORPO DA TELA CONFORME ESTADO */}
            <div className="flex-1 overflow-hidden relative p-1.5 flex flex-col justify-between z-10">

              {/* TELA PRINCIPAL (T_MAIN) */}
              {telaAtual === 'T_MAIN' && (
                <div className="h-full flex flex-col justify-between">
                  {/* TRÊS CARDS SUPERIORES: EXAUSTOR, ENERGIA, GÁS */}
                  <div className="grid grid-cols-3 gap-1.5">
                    {/* EXAUSTOR */}
                    <div 
                      onClick={() => setExaustorOk(!exaustorOk)}
                      className={`p-1.5 rounded-md border flex items-center gap-1.5 cursor-pointer transition-all ${
                        exaustorOk ? 'bg-gray-50 border-gray-200' : 'bg-red-50 border-red-300'
                      }`}
                    >
                      <div className={`p-1 rounded ${exaustorOk ? 'bg-blue-700 text-white' : 'bg-red-600 text-white'}`}>
                        <Wind className="w-3.5 h-3.5" />
                      </div>
                      <div className="leading-tight">
                        <span className="text-[9px] font-bold text-gray-500 block">EXAUSTOR</span>
                        <span className={`text-[11px] font-black ${exaustorOk ? 'text-emerald-700' : 'text-red-600 font-mono'}`}>
                          {exaustorOk ? 'OK' : 'FALHA'}
                        </span>
                      </div>
                    </div>

                    {/* ENERGIA */}
                    <div 
                      onClick={() => setAcOk(!acOk)}
                      className={`p-1.5 rounded-md border flex items-center gap-1.5 cursor-pointer transition-all ${
                        acOk ? 'bg-gray-50 border-gray-200' : 'bg-red-50 border-red-300'
                      }`}
                    >
                      <div className={`p-1 rounded ${acOk ? 'bg-blue-700 text-white' : 'bg-red-600 text-white'}`}>
                        <Zap className="w-3.5 h-3.5" />
                      </div>
                      <div className="leading-tight">
                        <span className="text-[9px] font-bold text-gray-500 block">ENERGIA</span>
                        <span className={`text-[11px] font-black ${acOk ? 'text-emerald-700' : 'text-red-600'}`}>
                          {acOk ? 'OK' : 'FALHA AC'}
                        </span>
                      </div>
                    </div>

                    {/* GÁS */}
                    <div 
                      onClick={() => setTelaAtual('T_GAS')}
                      className={`p-1.5 rounded-md border flex items-center gap-1.5 cursor-pointer transition-all ${
                        gasLeak ? 'bg-red-100 border-red-400' : (valvulaAberta > 0 ? 'bg-gray-50 border-gray-200' : 'bg-amber-50 border-amber-300')
                      }`}
                    >
                      <div className={`p-1 rounded ${gasLeak ? 'bg-red-600 text-white' : 'bg-blue-700 text-white'}`}>
                        <Flame className="w-3.5 h-3.5" />
                      </div>
                      <div className="leading-tight">
                        <span className="text-[9px] font-bold text-gray-500 block">GÁS</span>
                        <span className={`text-[10px] font-black ${
                          gasLeak ? 'text-red-600' : (valvulaAberta > 0 ? 'text-emerald-700' : 'text-gray-600')
                        }`}>
                          {gasLeak ? 'VAZAM.' : (valvulaAberta > 0 ? 'ABERTO' : 'FECHADO')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* GRID 4 BOTÕES PRINCIPAIS */}
                  <div className="grid grid-cols-2 gap-1.5 mt-1">
                    <button
                      onClick={() => setTelaAtual('T_SETORES_LISTA')}
                      className="h-[32px] sm:h-[35px] rounded-md font-bold text-xs text-white flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm"
                      style={{ backgroundColor: corAzulEscuro }}
                    >
                      <Radio className="w-3.5 h-3.5 text-blue-200" />
                      <span>SETORES</span>
                    </button>

                    <button
                      onClick={() => setTelaAtual('T_GAS')}
                      className={`h-[32px] sm:h-[35px] rounded-md font-bold text-xs text-white flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm ${
                        gasLeak ? 'bg-red-600 animate-pulse' : ''
                      }`}
                      style={{ backgroundColor: gasLeak ? corVermelho : corAzulEscuro }}
                    >
                      <Flame className="w-3.5 h-3.5 text-orange-200" />
                      <span>CONTROLE GÁS</span>
                    </button>

                    <button
                      onClick={rearmarSistema}
                      className="h-[32px] sm:h-[35px] rounded-md font-bold text-xs text-white flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm"
                      style={{ backgroundColor: (gasLeak || !acOk || !exaustorOk) ? corVermelho : corAzulEscuro }}
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-amber-200" />
                      <span>REARMAR</span>
                    </button>

                    <button
                      onClick={() => {
                        setDestinoSenha('T_PROG');
                        setTelaAtual('T_SENHA');
                      }}
                      className="h-[32px] sm:h-[35px] rounded-md font-bold text-xs text-white flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm"
                      style={{ backgroundColor: corAzulEscuro }}
                    >
                      <Settings className="w-3.5 h-3.5 text-gray-200" />
                      <span>CONFIG</span>
                    </button>
                  </div>

                  {/* BANNER DETECÇÃO DE INCÊNDIO / MODO HÍBRIDO */}
                  <div 
                    onClick={() => setTelaAtual('T_STATUS_DIAG')}
                    className="h-[30px] rounded-md text-white flex items-center justify-between px-3 cursor-pointer active:scale-95 transition-all shadow-sm"
                    style={{ backgroundColor: corAzulEscuro }}
                  >
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-orange-300" />
                      <div className="text-left">
                        <span className="text-[10px] font-black tracking-wide block leading-none">DETECCAO INCENDIO</span>
                        <span className="text-[8px] text-blue-200 font-mono block leading-none">Central Externa Conectada</span>
                      </div>
                    </div>
                    <span className="text-[9px] bg-white/15 px-1.5 py-0.5 rounded text-white font-mono">OK</span>
                  </div>

                  {/* POPUP DE CONFIRMAÇÃO DE TREINAMENTO */}
                  {popupTreino && (
                    <div className="absolute inset-x-2 top-10 bottom-12 bg-gray-100 rounded-lg border-2 border-black p-3 flex flex-col justify-between items-center z-40 shadow-xl">
                      <div className="text-center font-black text-xs text-black">
                        {treinoAtivo ? 'INTERROMPER TREINAMENTO?' : 'INICIAR TREINAMENTO OPERACIONAL?'}
                      </div>
                      <p className="text-[10px] text-gray-600 text-center">
                        {treinoAtivo ? 'O áudio do guia oficial da central será pausado.' : 'Instruções oficiais narradas por voz para a equipe do restaurante.'}
                      </p>
                      <div className="flex gap-2 w-full">
                        <button
                          onClick={() => {
                            if (!treinoAtivo) {
                              setTreinoAtivo(true);
                              tocarAudio('guia_rapido.m4a');
                            } else {
                              pararAudio();
                            }
                            setPopupTreino(false);
                          }}
                          className="flex-1 py-1.5 bg-emerald-700 text-white rounded font-bold text-xs hover:bg-emerald-800"
                        >
                          SIM
                        </button>
                        <button
                          onClick={() => setPopupTreino(false)}
                          className="flex-1 py-1.5 bg-red-600 text-white rounded font-bold text-xs hover:bg-red-700"
                        >
                          NÃO
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 3. BARRA INFERIOR DE STATUS DINÂMICA (TICKER) */}
                  <div 
                    onClick={() => setPopupTreino(true)}
                    className="h-[30px] rounded flex items-center justify-center font-bold text-xs text-white cursor-pointer active:brightness-95 transition-all shrink-0"
                    style={{ 
                      backgroundColor: !conectado 
                        ? corVermelho 
                        : (gasLeak 
                            ? corVermelho 
                            : (treinoAtivo ? corVerde : corAzulClaro)) 
                    }}
                  >
                    {!conectado ? (
                      'ERRO: PERDA DE LINK MASTER'
                    ) : gasLeak ? (
                      '⚠️ VAZAMENTO DE GÁS DETECTADO!'
                    ) : treinoAtivo ? (
                      '🔊 TREINAMENTO EM ANDAMENTO (TOQUE P/ PAUSAR)'
                    ) : (
                      tickerToggle ? 'SISTEMA OPERANTE' : 'TREINAMENTO: TOQUE AQUI'
                    )}
                  </div>
                </div>
              )}

              {/* TELA DE SENHA (T_SENHA) */}
              {telaAtual === 'T_SENHA' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="h-[28px] bg-gray-200 rounded flex items-center justify-center font-mono font-bold text-base tracking-widest text-black">
                    {senhaErro ? (
                      <span className="text-red-600 text-xs font-sans">ERRO: SENHA INCORRETA</span>
                    ) : (
                      senhaDigitada.padEnd(4, '•').split('').join(' ')
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-1 flex-1 my-1">
                    {['1','2','3','4','5','6','7','8','9','C','0','OK'].map(key => (
                      <button
                        key={key}
                        onClick={() => handleKeypadPress(key)}
                        className={`rounded font-bold text-sm flex items-center justify-center active:scale-95 transition-all text-white ${
                          key === 'C' ? 'bg-red-600' : (key === 'OK' ? 'bg-emerald-600' : 'bg-blue-800')
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                  </div>

                  <div className="text-[9px] text-gray-500 text-center font-mono">
                    SENHA USUÁRIO: 1701 | TÉCNICO: 2580
                  </div>
                </div>
              )}

              {/* TELA DE CONFIGURAÇÕES / CARROSSEL (T_PROG) */}
              {telaAtual === 'T_PROG' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-bold text-xs text-blue-900">
                    CONFIGURACOES ({progIdx + 1}/{progItems.length})
                  </div>

                  <div 
                    className="p-3 rounded-lg text-white flex flex-col justify-between shadow-md"
                    style={{ backgroundColor: progItems[progIdx].color }}
                  >
                    <div>
                      <span className="text-[9px] opacity-75 font-mono block">OPÇÃO {progIdx + 1} DE {progItems.length}</span>
                      <h4 className="text-base font-black tracking-wide">{progItems[progIdx].label}</h4>
                      <p className="text-[10px] mt-0.5 opacity-90 leading-tight">{progItems[progIdx].desc}</p>
                    </div>

                    <button
                      onClick={() => setTelaAtual(progItems[progIdx].target as IhmScreen)}
                      className="mt-2 py-1 bg-white/20 hover:bg-white/30 text-white rounded text-[11px] font-black uppercase tracking-wider transition-colors"
                    >
                      TOQUE PARA ABRIR
                    </button>
                  </div>

                  <div className="flex justify-between gap-2">
                    <button
                      onClick={() => setProgIdx(prev => (prev > 0 ? prev - 1 : progItems.length - 1))}
                      className="flex-1 py-1.5 bg-blue-900 text-white rounded font-bold text-xs flex items-center justify-center gap-1"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" /> ANTERIOR
                    </button>
                    <button
                      onClick={() => setProgIdx(prev => (prev < progItems.length - 1 ? prev + 1 : 0))}
                      className="flex-1 py-1.5 bg-blue-900 text-white rounded font-bold text-xs flex items-center justify-center gap-1"
                    >
                      PRÓXIMO <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* TELA DE CONTROLE DE GÁS (T_GAS) */}
              {telaAtual === 'T_GAS' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-gray-800">
                    CONTROLE DE GÁS (SOLENOIDES)
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      onClick={() => { setModoGas('AUTO'); setValvulaAberta(1); }}
                      className={`py-1.5 rounded font-bold text-xs text-white ${modoGas === 'AUTO' ? 'bg-emerald-700' : 'bg-blue-900'}`}
                    >
                      AUTO
                    </button>
                    <button
                      onClick={() => { setModoGas('SOL1'); setValvulaAberta(1); }}
                      className={`py-1.5 rounded font-bold text-xs text-white ${modoGas === 'SOL1' ? 'bg-emerald-700' : 'bg-blue-900'}`}
                    >
                      SOL 1
                    </button>
                    <button
                      onClick={() => { setModoGas('SOL2'); setValvulaAberta(2); }}
                      className={`py-1.5 rounded font-bold text-xs text-white ${modoGas === 'SOL2' ? 'bg-emerald-700' : 'bg-blue-900'}`}
                    >
                      SOL 2
                    </button>
                  </div>

                  <div className="bg-gray-100 p-2 rounded border border-gray-300 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-700">[X] AUTO POR EXAUSTÃO</span>
                    <span className="text-[10px] font-mono text-emerald-700 font-bold">ATIVO</span>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => setValvulaAberta(1)}
                      className="flex-1 py-2 bg-blue-800 text-white rounded font-bold text-xs"
                    >
                      +1 HORA
                    </button>
                    <div className={`flex-1 py-2 rounded font-black text-xs text-white flex items-center justify-center ${
                      gasLeak ? 'bg-red-600' : (valvulaAberta > 0 ? 'bg-emerald-700' : 'bg-gray-600')
                    }`}>
                      {gasLeak ? 'VAZAMENTO!' : (valvulaAberta > 0 ? 'SOL 1 ABERTA' : 'FECHADO')}
                    </div>
                  </div>

                  <button
                    onClick={rearmarSistema}
                    className="w-full py-1.5 bg-blue-900 text-white rounded font-bold text-xs"
                  >
                    REARMAR SISTEMA
                  </button>
                </div>
              )}

              {/* TELA DE SETORES / LAÇOS (T_SETORES_LISTA) */}
              {telaAtual === 'T_SETORES_LISTA' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-bold text-xs text-gray-800">
                    SETORES E LAÇOS DE COMBATE
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 overflow-y-auto max-h-[145px] pr-1">
                    {setores.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSetorSelecionadoIdx(idx);
                          setTelaAtual('T_SETOR_DETALHE');
                        }}
                        className="p-1.5 bg-blue-900 text-white rounded text-left flex items-center justify-between hover:bg-blue-800 transition-colors"
                      >
                        <span className="text-[10px] font-bold truncate">{s.nome}</span>
                        <span className="text-[9px] bg-white/20 px-1 rounded font-mono">{s.temp}°C</span>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setTelaAtual('T_STATUS_DIAG')}
                    className="w-full py-1.5 bg-blue-900 text-white rounded font-bold text-xs"
                  >
                    STATUS & DIAGNÓSTICO COMPLETO
                  </button>
                </div>
              )}

              {/* TELA DE DETALHE DO SETOR */}
              {telaAtual === 'T_SETOR_DETALHE' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    {setores[setorSelecionadoIdx].nome}
                  </div>

                  <div className="bg-gray-100 p-2.5 rounded border space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Temperatura Atual:</span>
                      <span className="font-bold text-emerald-700">{setores[setorSelecionadoIdx].temp}°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Limiar Alarme:</span>
                      <span className="font-bold text-red-600">145°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status do Laço:</span>
                      <span className="font-bold text-blue-800">SUPERVISIONADO (OK)</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => setTelaAtual('T_SETORES_LISTA')}
                      className="flex-1 py-1.5 bg-gray-600 text-white rounded font-bold text-xs"
                    >
                      VOLTAR
                    </button>
                    <button 
                      onClick={simularAlarmeCoifa}
                      className="flex-1 py-1.5 bg-red-600 text-white rounded font-bold text-xs"
                    >
                      TESTAR DISPARO
                    </button>
                  </div>
                </div>
              )}

              {/* TELA DE DIAGNÓSTICO (T_STATUS_DIAG) */}
              {telaAtual === 'T_STATUS_DIAG' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    DIAGNÓSTICO GERAL DE HARDWARE
                  </div>

                  <div className="bg-gray-100 p-2 rounded border border-gray-300 text-[10px] space-y-1">
                    <div className="flex justify-between border-b pb-0.5">
                      <span>Rede Elétrica (AC 220V):</span>
                      <span className={`font-bold ${acOk ? 'text-emerald-700' : 'text-red-600'}`}>{acOk ? 'OK (224V)' : 'FALHA (0V)'}</span>
                    </div>
                    <div className="flex justify-between border-b pb-0.5">
                      <span>Bateria Backup 24V:</span>
                      <span className="font-bold text-emerald-700">OK (27.2V FLUTUAÇÃO)</span>
                    </div>
                    <div className="flex justify-between border-b pb-0.5">
                      <span>Exaustor Industrial:</span>
                      <span className={`font-bold ${exaustorOk ? 'text-emerald-700' : 'text-red-600'}`}>{exaustorOk ? 'OPERANDO NORMAL' : 'DESLIGADO/FALHA'}</span>
                    </div>
                    <div className="flex justify-between border-b pb-0.5">
                      <span>Válvula de Corte de Gás:</span>
                      <span className={`font-bold ${valvulaAberta > 0 ? 'text-emerald-700' : 'text-gray-700'}`}>{valvulaAberta > 0 ? 'ABERTA (FLUXO OK)' : 'CORTADA'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Link ESP-NOW Master:</span>
                      <span className={`font-bold ${conectado ? 'text-emerald-700' : 'text-red-600'}`}>{conectado ? 'CONECTADO (-52dBm)' : 'SEM SINAL'}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setTelaAtual('T_MAIN')}
                    className="w-full py-1.5 bg-blue-900 text-white rounded font-bold text-xs"
                  >
                    VOLTAR PARA TELA INICIAL
                  </button>
                </div>
              )}

              {/* TELA DE VALIDADE DE CILINDROS */}
              {telaAtual === 'T_CILINDROS' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    VALIDADE DOS CILINDROS (NBR 14518)
                  </div>

                  <div className="bg-gray-100 p-2.5 rounded border space-y-2 text-xs">
                    <div>
                      <div className="flex justify-between font-bold">
                        <span>Cilindro Saponificante Classe K:</span>
                        <span className="text-emerald-700">OK</span>
                      </div>
                      <p className="text-[10px] text-gray-500 font-mono">Pressão: 13.7 bar | Validade: 04/2031</p>
                    </div>

                    <div>
                      <div className="flex justify-between font-bold">
                        <span>Cilindro CO2 Alta Pressão (Duto):</span>
                        <span className="text-emerald-700">OK</span>
                      </div>
                      <p className="text-[10px] text-gray-500 font-mono">Pressão: 58 bar | Validade: 04/2031</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setTelaAtual('T_MAIN')}
                    className="w-full py-1.5 bg-blue-900 text-white rounded font-bold text-xs"
                  >
                    VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE VISTORIA PREVENTIVA */}
              {telaAtual === 'T_VISTORIA' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-amber-800">
                    MANUTENÇÃO PREVENTIVA REGULAMENTAR
                  </div>

                  <div className="bg-amber-50 p-2.5 rounded border border-amber-300 text-xs space-y-1">
                    <p className="font-bold text-amber-900">Periodicidade Semestral Obrigatória</p>
                    <p className="text-[10px] text-gray-700">Última inspeção: 15/04/2026</p>
                    <p className="text-[10px] text-gray-700">Próxima revisão técnica: 15/10/2026</p>
                    <p className="text-[10px] text-emerald-700 font-bold">Situação: CONFORME COM ABNT NBR 14518</p>
                  </div>

                  <button
                    onClick={() => setTelaAtual('T_MAIN')}
                    className="w-full py-1.5 bg-blue-900 text-white rounded font-bold text-xs"
                  >
                    VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE CHECKLIST WIZARD */}
              {telaAtual === 'T_CHECKLIST_WIZARD' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-emerald-800">
                    ASSISTENTE DE ENTREGA TÉCNICA
                  </div>

                  <div className="bg-gray-100 p-2 rounded border text-[10px] space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 1. Sensores Térmicos 145°C/300°C Testados
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 2. Intertravamento Exaustor e Gás Ativo
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 3. Solenoide Saponificante Verificada
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 4. Botoeira Manual e Damper Calibrados
                    </div>
                  </div>

                  <button
                    onClick={() => setTelaAtual('T_MAIN')}
                    className="w-full py-1.5 bg-emerald-700 text-white rounded font-bold text-xs"
                  >
                    FINALIZAR COMISSIONAMENTO
                  </button>
                </div>
              )}

              {/* TELA DE AJUSTE DE TEMPOS */}
              {telaAtual === 'T_AJUSTE_TEMPOS' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    TEMPOS DE DISPARO E RETARDO
                  </div>

                  <div className="bg-gray-100 p-2.5 rounded border space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span>Tempo Pré-Alarme:</span>
                      <span className="font-bold text-blue-900 font-mono text-sm">60 SEG</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Retardo Fechamento Dampers:</span>
                      <span className="font-bold text-blue-900 font-mono text-sm">05 SEG</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setTelaAtual('T_MAIN')}
                    className="w-full py-1.5 bg-blue-900 text-white rounded font-bold text-xs"
                  >
                    SALVAR E VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE ALARME DE EMERGÊNCIA (T_ALARME - VERMELHA VIVA) */}
              {telaAtual === 'T_ALARME' && (
                <div className="h-full flex flex-col justify-between items-center text-white py-1">
                  <div className="text-center">
                    <span className="text-[10px] font-mono tracking-widest bg-black/30 px-2 py-0.5 rounded">
                      SETOR: {setorAlarme === 'coifa' ? 'COIFA 145°C' : (setorAlarme === 'duto' ? 'DUTO EXAUSTÃO' : 'FOGÃO')}
                    </span>
                    <h3 className="text-sm font-black tracking-wider uppercase mt-1 animate-pulse">
                      DISPARO AUTOMÁTICO EM:
                    </h3>
                  </div>

                  {/* CONTAGEM REGRESSIVA GIGANTE */}
                  <div className="text-5xl font-black font-mono tracking-tighter text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                    {String(segundosRestantes).padStart(2, '0')}<span className="text-xl">s</span>
                  </div>

                  <div className="w-full space-y-1">
                    <button
                      onClick={abortarAlarme}
                      className="w-full py-2 bg-white text-red-700 hover:bg-gray-100 rounded-lg font-black text-xs tracking-wider uppercase shadow-lg active:scale-95 transition-all"
                    >
                      TOQUE NA TELA PARA ABORTAR
                    </button>
                    <span className="text-[9px] block text-center opacity-80">
                      Gás cortado • Dampers fechados
                    </span>
                  </div>
                </div>
              )}

              {/* TELA DE DESCARGA EFETUADA */}
              {telaAtual === 'T_DISPARO_EFETUADO' && (
                <div className="h-full flex flex-col justify-between items-center text-white py-2">
                  <div className="text-center">
                    <span className="text-xs font-mono font-bold">SISTEMA CO2 / SAPONIFICANTE</span>
                    <h2 className="text-base font-black tracking-wider mt-1 text-yellow-300">
                      DESCARGA EFETUADA
                    </h2>
                  </div>

                  <p className="text-[10px] text-center max-w-[240px] opacity-90">
                    Agente supressor injetado com sucesso. Cozinha protegida e chamas extintas.
                  </p>

                  <button
                    onClick={rearmarSistema}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
                  >
                    REARMAR SISTEMA
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* CONTROLES DE ÁUDIO & INSTRUÇÕES RÁPIDAS ABAIXO DO DISPLAY */}
        <div className="flex items-center justify-between mt-3 px-1 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                if (somHabilitado) {
                  pararAudio();
                  setSomHabilitado(false);
                } else {
                  setSomHabilitado(true);
                  tocarAudio('manual_acionador.m4a');
                }
              }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 hover:border-[#d4af37]/40 text-gray-300 transition-colors"
            >
              {somHabilitado ? <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" /> : <VolumeX className="w-3.5 h-3.5 text-gray-500" />}
              <span className="text-[10px] font-mono">{somHabilitado ? 'ÁUDIO ATIVO' : 'MUDO'}</span>
            </button>
          </div>

          <div className="text-[10px] text-[#f3e5ab] font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>EMULADOR OFICIAL SISTEMA 09</span>
          </div>
        </div>
      </div>

      {/* CONSOLE DE TESTES E SIMULAÇÕES PARA O VISITANTE (PROVANDO QUE ESTÁ CONECTADA NA MASTER) */}
      <div className={`w-full ${compact ? 'max-w-[460px]' : 'max-w-[560px]'} mt-4 bg-[#12141a] p-3 sm:p-4 rounded-2xl border border-[#d4af37]/25 shadow-lg`}>
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Painel de Simulações em Tempo Real
            </span>
          </div>
          <span className="text-[10px] text-gray-400 font-mono">
            Teste como a IHM e a Master reagem:
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {/* BOTÃO NORMAL / STANDBY */}
          <button
            onClick={simularNormal}
            className="p-2 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 text-left transition-all active:scale-95"
          >
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-black">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Standby Normal</span>
            </div>
            <span className="text-[9px] text-gray-400 block mt-0.5">Master conectada (Luzes verdes)</span>
          </button>

          {/* BOTÃO ALARME COIFA */}
          <button
            onClick={simularAlarmeCoifa}
            className="p-2 rounded-xl bg-red-950/60 hover:bg-red-900/80 border border-red-500/40 text-left transition-all active:scale-95"
          >
            <div className="flex items-center gap-1.5 text-red-400 text-xs font-black">
              <Flame className="w-3.5 h-3.5 text-red-400" />
              <span>Alarme Coifa 145°C</span>
            </div>
            <span className="text-[9px] text-gray-400 block mt-0.5">Contagem 60s + Áudio Coifa</span>
          </button>

          {/* BOTÃO ALARME DUTO */}
          <button
            onClick={simularAlarmeDuto}
            className="p-2 rounded-xl bg-orange-950/60 hover:bg-orange-900/80 border border-orange-500/40 text-left transition-all active:scale-95"
          >
            <div className="flex items-center gap-1.5 text-orange-400 text-xs font-black">
              <Wind className="w-3.5 h-3.5 text-orange-400" />
              <span>Alarme no Duto</span>
            </div>
            <span className="text-[9px] text-gray-400 block mt-0.5">Retardo + Fechamento Damper</span>
          </button>

          {/* BOTÃO VAZAMENTO DE GÁS */}
          <button
            onClick={simularVazamentoGas}
            className="p-2 rounded-xl bg-amber-950/60 hover:bg-amber-900/80 border border-amber-500/40 text-left transition-all active:scale-95"
          >
            <div className="flex items-center gap-1.5 text-amber-400 text-xs font-black">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>Vazamento de Gás</span>
            </div>
            <span className="text-[9px] text-gray-400 block mt-0.5">Corte solenoide + Alerta</span>
          </button>

          {/* BOTÃO FALHA EXAUSTOR */}
          <button
            onClick={simularFalhaExaustor}
            className="p-2 rounded-xl bg-blue-950/60 hover:bg-blue-900/80 border border-blue-500/40 text-left transition-all active:scale-95"
          >
            <div className="flex items-center gap-1.5 text-blue-400 text-xs font-black">
              <Wind className="w-3.5 h-3.5 text-blue-400" />
              <span>Falha Exaustor</span>
            </div>
            <span className="text-[9px] text-gray-400 block mt-0.5">Intertravamento com gás</span>
          </button>

          {/* BOTÃO QUEDA ENERGIA AC */}
          <button
            onClick={simularQuedaEnergia}
            className="p-2 rounded-xl bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/40 text-left transition-all active:scale-95"
          >
            <div className="flex items-center gap-1.5 text-purple-400 text-xs font-black">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span>Queda AC / Bateria</span>
            </div>
            <span className="text-[9px] text-gray-400 block mt-0.5">Backup 24V ativo</span>
          </button>
        </div>
      </div>
    </div>
  );
};
