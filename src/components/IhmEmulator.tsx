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
  ChevronRight,
  Clock,
  Calendar,
  Layers,
  KeyRound,
  Sliders,
  Bell,
  Cpu,
  Power
} from 'lucide-react';

export type IhmScreen = 
  | 'T_MAIN' 
  | 'T_SENHA' 
  | 'T_PROG' 
  | 'T_GAS' 
  | 'T_SETORES_LISTA' 
  | 'T_SETOR_DETALHE'
  | 'T_STATUS_DIAG' 
  | 'T_AJUSTE_DATA'
  | 'T_AJUSTE_HORA'
  | 'T_AJUSTE_TEMPOS' 
  | 'T_AGENDA_GAS'
  | 'T_VISUALIZAR_GAS'
  | 'T_CONFIG_SIRENE'
  | 'T_CONFIG_BATERIA'
  | 'T_CALIB_BAT'
  | 'T_CONFIG_FALHAS'
  | 'T_DAMPER_SELECT'
  | 'T_DAMPER_AUTO'
  | 'T_CONFIG_DAMPERS'
  | 'T_VISTORIA' 
  | 'T_CILINDROS' 
  | 'T_CHECKLIST_WIZARD' 
  | 'T_CONFIG_HIBRIDA'
  | 'T_RENOMEAR_LACOS'
  | 'T_SELECIONAR_NOME_LACO'
  | 'T_CONFIG_TEMPO_ATUACAO'
  | 'T_AVISOS_CO2'
  | 'T_AVISOS_CO2_DETALHE'
  | 'T_ALTERAR_SENHA'
  | 'T_PAREAMENTO'
  | 'T_ALARME' 
  | 'T_DISPARO_EFETUADO';

interface IhmEmulatorProps {
  compact?: boolean;
}

export const IhmEmulator: React.FC<IhmEmulatorProps> = ({ compact = false }) => {
  // --- PILHA DE NAVEGAÇÃO REAL DO FIRMWARE (BACK STACK) ---
  const [screenStack, setScreenStack] = useState<IhmScreen[]>(['T_MAIN']);
  const telaAtual = screenStack[screenStack.length - 1] || 'T_MAIN';

  const navigateTo = (screen: IhmScreen) => {
    setScreenStack(prev => [...prev, screen]);
  };

  const goBack = () => {
    setScreenStack(prev => {
      if (prev.length <= 1) return ['T_MAIN'];
      return prev.slice(0, prev.length - 1);
    });
  };

  const goToRoot = () => {
    setScreenStack(['T_MAIN']);
  };

  // --- ESTADO DO HARDWARE / MASTER ---
  const [conectado, setConectado] = useState(true);
  const [fogoGeral, setFogoGeral] = useState(false);
  const [setorAlarme, setSetorAlarme] = useState<'coifa' | 'duto' | 'fogao'>('coifa');
  const [segundosRestantes, setSegundosRestantes] = useState(60);
  const [exaustorOk, setExaustorOk] = useState(true);
  const [acOk, setAcOk] = useState(true);
  const [gasLeak, setGasLeak] = useState(false);
  const [valvulaAberta, setValvulaAberta] = useState<1 | 2 | 0>(1); // 1 = Sol 1, 2 = Sol 2, 0 = Fechada
  const [modoGas, setModoGas] = useState<'AUTO' | 'SOL1' | 'SOL2'>('AUTO');
  const [somHabilitado, setSomHabilitado] = useState(true);
  const [telaInvertida, setTelaInvertida] = useState(false);
  
  // Senha
  const [senhaDigitada, setSenhaDigitada] = useState('');
  const [senhaErro, setSenhaErro] = useState(false);
  const [destinoSenha, setDestinoSenha] = useState<IhmScreen>('T_PROG');
  const [senhaUsuario, setSenhaUsuario] = useState('1701');
  const [senhaTecnico, setSenhaTecnico] = useState('2580');
  const [tipoSenhaEmAlteracao, setTipoSenhaEmAlteracao] = useState<'USUARIO' | 'TECNICO'>('USUARIO');
  const [novaSenhaInput, setNovaSenhaInput] = useState('');

  // Carrossel Prog (17 itens oficiais)
  const [progIdx, setProgIdx] = useState(0);

  // Setores (8 laços oficiais)
  const [setores, setSetores] = useState([
    { nome: 'LAÇO 1: COIFA', temp: 85, status: 'NORMAL', inibido: false },
    { nome: 'LAÇO 2: DUTO', temp: 42, status: 'NORMAL', inibido: false },
    { nome: 'LAÇO 3: FOGÃO', temp: 120, status: 'NORMAL', inibido: false },
    { nome: 'LAÇO 4: FRITADEIRA', temp: 180, status: 'NORMAL', inibido: false },
    { nome: 'LAÇO 5: CHARBROILER', temp: 165, status: 'NORMAL', inibido: false },
    { nome: 'LAÇO 6: FORNO COMB.', temp: 95, status: 'NORMAL', inibido: false },
    { nome: 'LAÇO 7: ESTOQUE', temp: 24, status: 'NORMAL', inibido: false },
    { nome: 'LAÇO 8: SALÃO', temp: 22, status: 'NORMAL', inibido: false },
  ]);
  const [setorSelecionadoIdx, setSetorSelecionadoIdx] = useState(0);

  // Presets de Nomes de Laços (27 oficiais do firmware)
  const presetsNomesLacos = [
    "COIFA", "ESTOQUE SECO", "ESTOQUE 1", "ESTOQUE 2", "CAIXA", 
    "SALAO", "ESCADA", "CORREDOR", "COZINHA QUENTE", "COZINHA FRITURA", 
    "CAMARA FRIA", "PREPARO PIZZA", "BAR BEBIDAS", "DEPOSITO", "AREA LIXO", 
    "QUADRO ELETRICO", "BANHEIRO", "MEZANINO", "PASSA PRATOS", "VESTIARIO", 
    "MANUAL 1", "MANUAL 2", "MANUAL TERREO", "MANUAL MEZANINO", "CASA MAQUINAS", "SOB FORRO", "LACO DETECCAO"
  ];
  const [lacoEmEdicao, setLacoEmEdicao] = useState(0);
  const [paginaPresets, setPaginaPresets] = useState(0);

  // Relógio
  const [horaStr, setHoraStr] = useState('12:45');
  const [dataStr, setDataStr] = useState('21/10');
  const [setD, setSetD] = useState(21);
  const [setM, setSetM] = useState(10);
  const [setA, setSetA] = useState(26);
  const [setH, setSetH] = useState(12);
  const [setMin, setSetMin] = useState(45);

  // Tempos de Disparo
  const [setExtintor, setSetExtintor] = useState(30);
  const [setDamper, setSetDamper] = useState(5);
  const [setModoDamper, setSetModoDamper] = useState<0 | 1 | 2>(0); // 0 = Pulso, 1 = Retenção, 2 = Direto

  // CFG CO2 / SAP (Solenoides & Pulso)
  const [setLimiteAtuacaoAtivo, setSetLimiteAtuacaoAtivo] = useState(true);
  const [setTempoAtuacaoSeg, setSetTempoAtuacaoSeg] = useState(600); // 10 min
  const [setTempoPulsoON, setSetTempoPulsoON] = useState(1);
  const [setTempoPulsoOFF, setSetTempoPulsoOFF] = useState(0); // 0 = Contínuo
  const [scrollCO2, setScrollCO2] = useState(0);

  // Agenda de Gás
  const diasSemana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
  const [agDia, setAgDia] = useState(1);
  const [agendaSemana, setAgendaSemana] = useState([
    { dia: 'DOM', hIni: 7, mIni: 0, hFim: 23, mFim: 0, sol: 1 },
    { dia: 'SEG', hIni: 7, mIni: 0, hFim: 23, mFim: 0, sol: 2 },
    { dia: 'TER', hIni: 7, mIni: 0, hFim: 23, mFim: 0, sol: 1 },
    { dia: 'QUA', hIni: 7, mIni: 0, hFim: 23, mFim: 0, sol: 2 },
    { dia: 'QUI', hIni: 7, mIni: 0, hFim: 23, mFim: 0, sol: 1 },
    { dia: 'SEX', hIni: 7, mIni: 0, hFim: 23, mFim: 0, sol: 2 },
    { dia: 'SAB', hIni: 7, mIni: 0, hFim: 23, mFim: 0, sol: 1 },
  ]);

  // Alarme e Som
  const [tempoSirene, setTempoSirene] = useState(5);
  const [tempoAudioCO2, setTempoAudioCO2] = useState(11);
  const [tempoAudioDet, setTempoAudioDet] = useState(10);
  const [sireneHabilitada, setSireneHabilitada] = useState(true);
  const [volumeLevel, setVolumeLevel] = useState(9);

  // Vistoria Preventiva e Cilindros
  const [vistoriaMes, setVistoriaMes] = useState(4);
  const [vistoriaAno, setVistoriaAno] = useState(26);
  const [vistoriaVencidaSimulada, setVistoriaVencidaSimulada] = useState(false);
  const [cilindroCO2Mes, setCilindroCO2Mes] = useState(4);
  const [cilindroCO2Ano, setCilindroCO2Ano] = useState(26);
  const [cilindroSapMes, setCilindroSapMes] = useState(4);
  const [cilindroSapAno, setCilindroSapAno] = useState(26);

  // Bateria e Falhas Relé
  const [limiteTensaoBat, setLimiteTensaoBat] = useState(21.0);
  const [calibBatMultimetro, setCalibBatMultimetro] = useState(24.0);
  const [releFalhaAC, setReleFalhaAC] = useState(true);
  const [releFalhaBat, setReleFalhaBat] = useState(true);
  const [releFalhaExaustor, setReleFalhaExaustor] = useState(true);

  // Dampers
  const [damperAutoAtivo, setDamperAutoAtivo] = useState(true);
  const [damperAutoAberto, setDamperAutoAberto] = useState(true);

  // Central Mista & Híbrida
  const [modoHibridoAtivo, setModoHibridoAtivo] = useState(1); // 1 = Mista CO2+Det, 0 = Só CO2
  const [numCoifas, setNumCoifas] = useState(1);

  // Avisos de Voz
  const [avisosConfig, setAvisosConfig] = useState([
    { id: 0, nome: 'ALARME COIFA 145C', ativo: true, modo: 'CONTINUO', ntimes: 3 },
    { id: 1, nome: 'ALARME NO DUTO', ativo: true, modo: 'CONTINUO', ntimes: 3 },
    { id: 2, nome: 'VAZAMENTO DE GAS', ativo: true, modo: 'CONTINUO', ntimes: 3 },
    { id: 3, nome: 'QUEDA ENERGIA AC', ativo: true, modo: '1 VEZ', ntimes: 1 },
    { id: 4, nome: 'FALHA DE BATERIA', ativo: true, modo: '1 VEZ', ntimes: 1 },
    { id: 5, nome: 'FALHA EXAUSTOR', ativo: true, modo: '1 VEZ', ntimes: 1 },
    { id: 6, nome: 'VISTORIA VENCIDA', ativo: true, modo: '2a FALHA', ntimes: 1 },
  ]);
  const [avisoDetalheIdx, setAvisoDetalheIdx] = useState(0);
  const [scrollAvisos, setScrollAvisos] = useState(0);

  // Assistente de Checklist Wizard (8 Etapas NBR 14518)
  const [wizardStep, setWizardStep] = useState(0);
  const [wizardModoHibrido, setWizardModoHibrido] = useState(0);
  const [wizardNumCoifas, setWizardNumCoifas] = useState(1);
  const [wizardRetardo, setWizardRetardo] = useState(30);
  const [wizardDamperTempo, setWizardDamperTempo] = useState(5);
  const [wizardDamperModo, setWizardDamperModo] = useState<0 | 1 | 2>(0);
  const [wizardSolenoides, setWizardSolenoides] = useState<1 | 2>(2);
  const [wizardExaustorIgnorado, setWizardExaustorIgnorado] = useState(false);
  const [wizardGasTesteAtivo, setWizardGasTesteAtivo] = useState(false);
  const [wizardTempoSir, setWizardTempoSir] = useState(5);
  const [wizardTempoAud, setWizardTempoAud] = useState(11);
  const [wizardPreventivaFixada, setWizardPreventivaFixada] = useState(false);
  const [wizardSucessoFlash, setWizardSucessoFlash] = useState(false);

  // Barra de status alternante
  const [tickerToggle, setTickerToggle] = useState(false);
  const [popupTreino, setPopupTreino] = useState(false);
  const [treinoAtivo, setTreinoAtivo] = useState(false);

  // Áudio Ref
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Itens do Carrossel de Configurações (17 Oficiais do Firmware Sistema 09)
  const progItems = [
    { label: 'CHECKLIST', desc: 'ASSISTENTE DE ENTREGA E TESTES', target: 'T_CHECKLIST_WIZARD', color: '#108535' },
    { label: 'CENTRAL MISTA', desc: 'DETECCAO DE INCENDIO E CO2', target: 'T_CONFIG_HIBRIDA', color: '#108535' },
    { label: 'CFG CO2/SAP', desc: 'TEMPO E PULSO DE SOLENOIDES', target: 'T_CONFIG_TEMPO_ATUACAO', color: '#003399' },
    { label: 'AVISOS', desc: 'CONFIGURACAO DE AVISOS SONOROS', target: 'T_AVISOS_CO2', color: '#003399' },
    { label: 'STATUS', desc: 'STATUS GERAL DO SISTEMA E HARDWARE', target: 'T_STATUS_DIAG', color: '#003399' },
    { label: 'DATA / HORA', desc: 'CONFIGURACAO DE DATA E HORA RTC', target: 'SPECIAL_DATA_HORA', color: '#003399' },
    { label: 'TEMPOS', desc: 'TEMPOS DE DISPARO E RETARDO DAMPERS', target: 'T_AJUSTE_TEMPOS', color: '#003399' },
    { label: 'AGENDA / LISTA', desc: 'HORARIOS DE CORTE E LIBERACAO DE GAS', target: 'SPECIAL_AGENDA', color: '#003399' },
    { label: 'ALARME', desc: 'AJUSTE DE TEMPO DA SIRENE BITONAL', target: 'T_CONFIG_SIRENE', color: '#003399' },
    { label: 'PREVENTIVA', desc: 'AGENDAMENTO VISTORIA SEMESTRAL', target: 'T_VISTORIA', color: '#dc2626' },
    { label: 'CILINDROS', desc: 'VALIDADE CO2 E SAPONIFICANTE CLASSE K', target: 'T_CILINDROS', color: '#003399' },
    { label: 'CFG BAT.', desc: 'CALIBRACAO E TENSAO DA BATERIA (24V)', target: 'T_CONFIG_BATERIA', color: '#003399' },
    { label: 'FALHAS', desc: 'INTEGRACAO RELE SHOPPING / BMS', target: 'T_CONFIG_FALHAS', color: '#003399' },
    { label: 'DAMPERS', desc: 'CONFIGURACAO DE DAMPERS CORTA-FOGO', target: 'T_DAMPER_SELECT', color: '#003399' },
    { label: 'GIRAR TELA', desc: 'INVERTER DISPLAY 180 GRAUS', target: 'SPECIAL_ROTATE', color: '#d97706' },
    { label: 'ALTERAR SENHA', desc: 'ALTERACAO SENHA USUARIO/TECNICO', target: 'T_ALTERAR_SENHA', color: '#003399' },
    { label: 'PAREAMENTO', desc: 'PAREAMENTO ESP-NOW MASTER / IHM', target: 'T_PAREAMENTO', color: '#dc2626' },
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
            setScreenStack(s => [...s, 'T_DISPARO_EFETUADO']);
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
    goToRoot();
    setPopupTreino(false);
  };

  const simularAlarmeCoifa = () => {
    pararAudio();
    setConectado(true);
    setFogoGeral(true);
    setSetorAlarme('coifa');
    setSegundosRestantes(60);
    setValvulaAberta(0); // corta gás
    navigateTo('T_ALARME');
    tocarAudio('sensor_coifa.m4a');
  };

  const simularAlarmeDuto = () => {
    pararAudio();
    setConectado(true);
    setFogoGeral(true);
    setSetorAlarme('duto');
    setSegundosRestantes(30);
    setValvulaAberta(0);
    navigateTo('T_ALARME');
    tocarAudio('sensor_duto.m4a');
  };

  const simularVazamentoGas = () => {
    pararAudio();
    setConectado(true);
    setGasLeak(true);
    setValvulaAberta(0); // corta solenoide de gás
    goToRoot();
    tocarAudio('gas.m4a');
  };

  const simularQuedaEnergia = () => {
    pararAudio();
    setConectado(true);
    setAcOk(false);
    goToRoot();
    tocarAudio('energia.m4a');
  };

  const simularFalhaExaustor = () => {
    pararAudio();
    setConectado(true);
    setExaustorOk(false);
    setValvulaAberta(0); // gás cortado por intertravamento
    goToRoot();
    tocarAudio('exaustor.m4a');
  };

  const abortarAlarme = () => {
    pararAudio();
    setFogoGeral(false);
    setSegundosRestantes(60);
    goToRoot();
  };

  const rearmarSistema = () => {
    pararAudio();
    setFogoGeral(false);
    setSegundosRestantes(60);
    setGasLeak(false);
    setExaustorOk(true);
    setAcOk(true);
    setValvulaAberta(1);
    goToRoot();
  };

  // Teclado numérico
  const handleKeypadPress = (val: string) => {
    setSenhaErro(false);
    if (val === 'C') {
      setSenhaDigitada('');
      return;
    }
    if (val === 'OK') {
      if (senhaDigitada === senhaUsuario || senhaDigitada === senhaTecnico) {
        setSenhaDigitada('');
        navigateTo(destinoSenha);
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

  // Conclusão do Checklist Wizard
  const finalizarChecklist = () => {
    setWizardSucessoFlash(true);
    setTimeout(() => {
      setWizardSucessoFlash(false);
      setWizardStep(0);
      goToRoot();
    }, 2000);
  };

  // --- CORES IDÊNTICAS AO HARDWARE LOVYANGFX ---
  const corAzulClaro = '#0284c7'; // COR_AZUL_CL
  const corAzulEscuro = '#003399'; // COR_AZUL_STD
  const corVerde = '#108535';    // COR_VERDE_ESC
  const corVermelho = '#dc2626'; // COR_VERMELHO
  const corLaranja = '#ea580c';  // COR_LARANJA

  return (
    <div className="flex flex-col items-center w-full select-none">
      {/* MOLDURA EXTERNA DO GABINETE DA CENTRAL (AÇO TEXTURIZADO E ACRÍLICO) */}
      <div className={`w-full ${compact ? 'max-w-[480px]' : 'max-w-[580px]'} bg-gradient-to-b from-[#181a20] via-[#0f1115] to-[#0a0b0d] p-3 sm:p-5 rounded-3xl border-2 border-[#d4af37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_3px_rgba(212,175,55,0.3)] relative`}>
        
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
              <span className="block text-[9px] text-gray-400 font-mono tracking-tighter">IHM TFT 2.8" TOUCHSCREEN (FIRMWARE REAL)</span>
            </div>
          </div>

          {/* LEDS DE STATUS DA TAMPA */}
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
            className={`w-full aspect-[320/240] bg-white rounded-md overflow-hidden relative font-sans flex flex-col justify-between text-black shadow-inner transition-transform duration-300 ${
              telaInvertida ? 'rotate-180' : ''
            }`}
            style={{ 
              backgroundColor: telaAtual === 'T_ALARME' || telaAtual === 'T_DISPARO_EFETUADO' ? '#dc2626' : '#ffffff' 
            }}
          >
            {/* 1. CABEÇALHO SUPERIOR (HEADER COMPACTO 30px) */}
            <div 
              onClick={() => {
                // Toque no header funciona como "VOLTAR" para a tela anterior
                if (telaAtual !== 'T_MAIN') {
                  goBack();
                }
              }}
              className="h-[30px] px-3 flex items-center justify-between text-white cursor-pointer transition-colors z-20 shrink-0"
              style={{ 
                backgroundColor: !conectado ? corVermelho : (fogoGeral ? corVermelho : corAzulClaro) 
              }}
              title={telaAtual !== 'T_MAIN' ? 'Toque no cabeçalho para voltar à tela anterior' : 'Tela Principal'}
            >
              <div className="text-xs font-bold font-mono tracking-wide flex items-center gap-1.5">
                {!conectado ? (
                  'SEM COMUNICAÇÃO'
                ) : fogoGeral ? (
                  'FOGO DETECTADO'
                ) : (
                  telaAtual === 'T_MAIN' ? (
                    `${dataStr}  ${horaStr}`
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] hover:underline">
                      <ChevronLeft className="w-3.5 h-3.5" /> VOLTAR (ANTERIOR)
                    </span>
                  )
                )}
              </div>

              {/* ÍCONE DE CONEXÃO MASTER */}
              <div className="flex items-center gap-1.5">
                {telaAtual !== 'T_MAIN' && (
                  <span className="text-[9px] bg-black/25 px-1.5 py-0.5 rounded font-mono text-white/90">
                    {telaAtual.replace('T_', '')}
                  </span>
                )}
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
            <div className="flex-1 overflow-hidden relative p-1.5 flex flex-col justify-between z-10 text-xs">

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
                      onClick={() => navigateTo('T_GAS')}
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
                      onClick={() => navigateTo('T_SETORES_LISTA')}
                      className="h-[32px] sm:h-[35px] rounded-md font-bold text-xs text-white flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm"
                      style={{ backgroundColor: corAzulEscuro }}
                    >
                      <Radio className="w-3.5 h-3.5 text-blue-200" />
                      <span>SETORES</span>
                    </button>

                    <button
                      onClick={() => navigateTo('T_GAS')}
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
                        navigateTo('T_SENHA');
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
                    onClick={() => navigateTo('T_STATUS_DIAG')}
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
                    <div className="absolute inset-x-2 top-8 bottom-10 bg-gray-100 rounded-lg border-2 border-black p-3 flex flex-col justify-between items-center z-40 shadow-xl">
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

                  <div className="flex justify-between items-center text-[9px] text-gray-500 font-mono">
                    <span>SENHA: USUÁRIO 1701 | TÉCNICO 2580</span>
                    <button onClick={goBack} className="text-red-700 font-bold hover:underline">
                      CANCELAR
                    </button>
                  </div>
                </div>
              )}

              {/* TELA DE CONFIGURAÇÕES / CARROSSEL (T_PROG) */}
              {telaAtual === 'T_PROG' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-bold text-xs text-blue-900">
                    CONFIGURACOES ({progIdx + 1}/{progItems.length})
                  </div>

                  {/* Card Central do Carrossel */}
                  <div 
                    className="p-3 rounded-lg text-white flex flex-col justify-between shadow-md"
                    style={{ backgroundColor: progItems[progIdx].color }}
                  >
                    <div>
                      <span className="text-[9px] opacity-75 font-mono block">OPÇÃO {progIdx + 1} DE {progItems.length}</span>
                      <h4 className="text-base font-black tracking-wide">{progItems[progIdx].label}</h4>
                      <p className="text-[10px] mt-0.5 opacity-90 leading-tight">{progItems[progIdx].desc}</p>
                    </div>

                    {/* Botões específicos por tipo de opção (Data/Hora, Agenda, Girar Tela ou Abrir) */}
                    {progItems[progIdx].label === 'DATA / HORA' ? (
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => navigateTo('T_AJUSTE_DATA')}
                          className="flex-1 py-1.5 bg-blue-700 hover:bg-blue-600 text-white rounded text-[11px] font-black uppercase tracking-wider transition-colors"
                        >
                          1. DATA
                        </button>
                        <button
                          onClick={() => navigateTo('T_AJUSTE_HORA')}
                          className="flex-1 py-1.5 bg-blue-700 hover:bg-blue-600 text-white rounded text-[11px] font-black uppercase tracking-wider transition-colors"
                        >
                          2. HORA
                        </button>
                      </div>
                    ) : progItems[progIdx].label === 'AGENDA / LISTA' ? (
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => navigateTo('T_AGENDA_GAS')}
                          className="flex-1 py-1.5 bg-blue-700 hover:bg-blue-600 text-white rounded text-[11px] font-black uppercase tracking-wider transition-colors"
                        >
                          1. AGENDA
                        </button>
                        <button
                          onClick={() => navigateTo('T_VISUALIZAR_GAS')}
                          className="flex-1 py-1.5 bg-blue-700 hover:bg-blue-600 text-white rounded text-[11px] font-black uppercase tracking-wider transition-colors"
                        >
                          2. VER AGENDA
                        </button>
                      </div>
                    ) : progItems[progIdx].label === 'GIRAR TELA' ? (
                      <button
                        onClick={() => setTelaInvertida(!telaInvertida)}
                        className="mt-2 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded text-[11px] font-black uppercase tracking-wider transition-colors"
                      >
                        {telaInvertida ? 'TELA INVERTIDA (TOCAR P/ NORMAL)' : 'TELA NORMAL (TOCAR P/ INVERTER)'}
                      </button>
                    ) : (
                      <button
                        onClick={() => navigateTo(progItems[progIdx].target as IhmScreen)}
                        className="mt-2 py-1 bg-white/20 hover:bg-white/30 text-white rounded text-[11px] font-black uppercase tracking-wider transition-colors"
                      >
                        TOQUE PARA ABRIR
                      </button>
                    )}
                  </div>

                  {/* Navegação Inferior Carrossel */}
                  <div className="flex justify-between gap-2">
                    <button
                      onClick={() => setProgIdx(prev => (prev > 0 ? prev - 1 : progItems.length - 1))}
                      className="flex-1 py-1.5 bg-blue-900 text-white rounded font-bold text-xs flex items-center justify-center gap-1 active:scale-95"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" /> ANTERIOR
                    </button>
                    <button
                      onClick={goBack}
                      className="px-3 py-1.5 bg-gray-600 text-white rounded font-bold text-xs active:scale-95"
                      title="Voltar para a tela inicial"
                    >
                      SAIR
                    </button>
                    <button
                      onClick={() => setProgIdx(prev => (prev < progItems.length - 1 ? prev + 1 : 0))}
                      className="flex-1 py-1.5 bg-blue-900 text-white rounded font-bold text-xs flex items-center justify-center gap-1 active:scale-95"
                    >
                      PRÓXIMO <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* TELA DE CHECKLIST WIZARD (8 ETAPAS NBR 14518 - MAIN.INO) */}
              {telaAtual === 'T_CHECKLIST_WIZARD' && (
                <div className="h-full flex flex-col justify-between">
                  {wizardSucessoFlash ? (
                    <div className="h-full bg-emerald-700 text-white rounded-lg p-4 flex flex-col items-center justify-center text-center animate-pulse">
                      <CheckCircle2 className="w-10 h-10 mb-2" />
                      <h3 className="text-base font-black uppercase">CONFIGURAÇÃO APLICADA!</h3>
                      <p className="text-xs mt-1">Central Salva e Pronta conforme NBR 14518</p>
                    </div>
                  ) : (
                    <>
                      <div className="text-center font-black text-xs text-blue-900">
                        ASSISTENTE CHECKLIST ({wizardStep + 1}/8)
                      </div>

                      {/* Card Central do Wizard */}
                      <div className="p-2.5 rounded-lg bg-blue-900 text-white flex-1 my-1 flex flex-col justify-between shadow-sm overflow-hidden">
                        
                        {/* ETAPA 1: SELEÇÃO DE MODOS */}
                        {wizardStep === 0 && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] text-blue-200 font-mono block">ETAPA 1 DE 8: SELEÇÃO DE MODOS</span>
                            <h4 className="text-xs font-black uppercase">MODO DE OPERAÇÃO</h4>
                            <div className="space-y-1 pt-1">
                              <button
                                onClick={() => { setWizardModoHibrido(0); setWizardNumCoifas(1); setWizardStep(1); }}
                                className="w-full py-1.5 px-2 bg-emerald-700 hover:bg-emerald-600 rounded text-[10px] font-bold text-left text-white"
                              >
                                1. ENTREGA OBRA (SÓ CO2)
                              </button>
                              <button
                                onClick={() => { setWizardModoHibrido(1); setWizardNumCoifas(1); setWizardStep(1); }}
                                className="w-full py-1.5 px-2 bg-sky-700 hover:bg-sky-600 rounded text-[10px] font-bold text-left text-white"
                              >
                                2. ENTREGA OBRA (MISTA CO2+DET)
                              </button>
                              <button
                                onClick={() => setWizardStep(1)}
                                className="w-full py-1.5 px-2 bg-gray-600 hover:bg-gray-500 rounded text-[10px] font-bold text-left text-white"
                              >
                                3. PERSONALIZADO (PASSO A PASSO)
                              </button>
                            </div>
                          </div>
                        )}

                        {/* ETAPA 2: MODO & LAÇOS */}
                        {wizardStep === 1 && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] text-blue-200 font-mono block">ETAPA 2 DE 8: MODO & LAÇOS</span>
                            <h4 className="text-xs font-black uppercase">CONFIGURAÇÃO DA CENTRAL</h4>
                            <div className="space-y-1 pt-1">
                              <button
                                onClick={() => setWizardModoHibrido(wizardModoHibrido === 1 ? 0 : 1)}
                                className={`w-full py-1.5 px-2 rounded text-[10px] font-bold text-left text-white ${
                                  wizardModoHibrido === 1 ? 'bg-emerald-700' : 'bg-sky-700'
                                }`}
                              >
                                MODO: {wizardModoHibrido === 1 ? 'CENTRAL MISTA (CO2 + DET)' : 'CENTRAL SÓ CO2 (PADRÃO)'}
                              </button>
                              <button
                                onClick={() => setWizardNumCoifas(prev => (prev % 3) + 1)}
                                className="w-full py-1.5 px-2 bg-sky-700 hover:bg-sky-600 rounded text-[10px] font-bold text-left text-white"
                              >
                                COIFAS CO2: {wizardNumCoifas} {wizardNumCoifas === 1 ? 'COIFA' : 'COIFAS'}
                              </button>
                              <button
                                onClick={() => navigateTo('T_RENOMEAR_LACOS')}
                                className="w-full py-1.5 px-2 bg-gray-600 hover:bg-gray-500 rounded text-[10px] font-bold text-left text-white flex justify-between items-center"
                              >
                                <span>RENOMEAR LAÇOS DE DETECÇÃO</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        )}

                        {/* ETAPA 3: RETARDO DISPARO CO2 */}
                        {wizardStep === 2 && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] text-blue-200 font-mono block">ETAPA 3 DE 8: RETARDO</span>
                            <h4 className="text-xs font-black uppercase">ATRASO DISPARO CO2</h4>
                            <div className="text-amber-300 text-xs font-mono font-bold text-center py-0.5">
                              TEMPO ATUAL: {wizardRetardo} SEGUNDOS
                            </div>
                            <div className="grid grid-cols-3 gap-1.5">
                              {[15, 30, 60].map(s => (
                                <button
                                  key={s}
                                  onClick={() => setWizardRetardo(s)}
                                  className={`py-1.5 rounded font-black text-xs text-white ${
                                    wizardRetardo === s ? 'bg-emerald-600 border border-white' : 'bg-sky-800'
                                  }`}
                                >
                                  {s}s
                                </button>
                              ))}
                            </div>
                            <div className="flex gap-2 pt-1">
                              <button
                                onClick={() => setWizardRetardo(prev => Math.max(5, prev - 5))}
                                className="flex-1 py-1 bg-gray-600 text-white rounded font-bold text-xs"
                              >
                                - 5s
                              </button>
                              <button
                                onClick={() => setWizardRetardo(prev => Math.min(180, prev + 5))}
                                className="flex-1 py-1 bg-gray-600 text-white rounded font-bold text-xs"
                              >
                                + 5s
                              </button>
                            </div>
                          </div>
                        )}

                        {/* ETAPA 4: DAMPERS */}
                        {wizardStep === 3 && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] text-blue-200 font-mono block">ETAPA 4 DE 8: DAMPERS</span>
                            <h4 className="text-xs font-black uppercase">CONTROLE DE DAMPERS</h4>
                            <div className="text-amber-300 text-[11px] font-mono font-bold text-center">
                              TEMPO: {wizardDamperTempo}s | MODO: {wizardDamperModo === 0 ? 'PULSO' : wizardDamperModo === 1 ? 'RETENÇÃO' : 'DIRETO'}
                            </div>
                            <div className="grid grid-cols-2 gap-1.5 pt-1">
                              <button
                                onClick={() => setWizardDamperTempo(5)}
                                className={`py-1.5 rounded font-black text-xs text-white ${
                                  wizardDamperTempo === 5 ? 'bg-emerald-600' : 'bg-sky-800'
                                }`}
                              >
                                TEMPO 5s
                              </button>
                              <button
                                onClick={() => setWizardDamperTempo(10)}
                                className={`py-1.5 rounded font-black text-xs text-white ${
                                  wizardDamperTempo === 10 ? 'bg-emerald-600' : 'bg-sky-800'
                                }`}
                              >
                                TEMPO 10s
                              </button>
                            </div>
                            <button
                              onClick={() => setWizardDamperModo(prev => ((prev + 1) % 3) as 0 | 1 | 2)}
                              className="w-full py-1.5 bg-sky-700 hover:bg-sky-600 rounded text-xs font-bold text-white mt-1"
                            >
                              ALTERAR MODO: {wizardDamperModo === 0 ? 'PULSO' : wizardDamperModo === 1 ? 'RETENÇÃO' : 'DIRETO'}
                            </button>
                          </div>
                        )}

                        {/* ETAPA 5: AGENDA DE GÁS & EXAUSTÃO */}
                        {wizardStep === 4 && (
                          <div className="space-y-1">
                            <span className="text-[8px] text-blue-200 font-mono block">ETAPA 5 DE 8: AGENDA GÁS & EXAUSTÃO</span>
                            <h4 className="text-[11px] font-black uppercase leading-tight">PROGRAMAÇÃO AUTOMÁTICA</h4>
                            <div className="text-amber-300 text-[9px] font-mono text-center">
                              HORÁRIO: 07:00 ÀS 23:00 (TODOS OS DIAS)
                            </div>
                            <button
                              onClick={() => setWizardSolenoides(wizardSolenoides === 2 ? 1 : 2)}
                              className="w-full py-1 px-2 bg-emerald-700 rounded text-[9px] font-bold text-left text-white"
                            >
                              SOLENOIDES: {wizardSolenoides === 2 ? '2 SOLENOIDES (ALTERNADO)' : '1 SOLENOIDE (FIXO S1)'}
                            </button>
                            <button
                              onClick={() => setWizardExaustorIgnorado(!wizardExaustorIgnorado)}
                              className={`w-full py-1 px-2 rounded text-[9px] font-bold text-left text-white ${
                                wizardExaustorIgnorado ? 'bg-amber-600' : 'bg-sky-700'
                              }`}
                            >
                              EXAUSTOR: {wizardExaustorIgnorado ? 'IGNORAR FALHA (DESAT.)' : 'MONITORAR 220V (PADRÃO)'}
                            </button>
                            <button
                              onClick={() => setWizardGasTesteAtivo(!wizardGasTesteAtivo)}
                              className={`w-full py-1 px-2 rounded text-[9px] font-bold text-left text-white ${
                                wizardGasTesteAtivo ? 'bg-red-600 animate-pulse' : 'bg-sky-700'
                              }`}
                            >
                              TESTE DE GÁS: {wizardGasTesteAtivo ? 'VÁLVULA ABERTA (TESTE ATIVO)' : 'DESLIGADO (TESTAR)'}
                            </button>
                          </div>
                        )}

                        {/* ETAPA 6: ALARME & ÁUDIO */}
                        {wizardStep === 5 && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] text-blue-200 font-mono block">ETAPA 6 DE 8: ALARME & ÁUDIO</span>
                            <h4 className="text-xs font-black uppercase">SIRENE & ÁUDIO DE ALERTA</h4>
                            <div className="text-amber-300 text-[11px] font-mono font-bold text-center">
                              SIRENE: {wizardTempoSir}s | ÁUDIO: {wizardTempoAud}s
                            </div>
                            <button
                              onClick={() => tocarAudio('guia_rapido.m4a')}
                              className="w-full py-1.5 bg-sky-700 hover:bg-sky-600 rounded text-xs font-bold text-white flex items-center justify-center gap-1.5"
                            >
                              <Volume2 className="w-3.5 h-3.5" /> TESTAR ALTO-FALANTE (ÁUDIO)
                            </button>
                            <div className="grid grid-cols-2 gap-1.5 pt-1">
                              <button
                                onClick={() => setWizardTempoSir(prev => (prev === 5 ? 10 : 5))}
                                className="py-1 bg-gray-600 text-white rounded text-[10px] font-bold"
                              >
                                SIRENE {wizardTempoSir}s
                              </button>
                              <button
                                onClick={() => setWizardTempoAud(prev => (prev === 11 ? 15 : 11))}
                                className="py-1 bg-gray-600 text-white rounded text-[10px] font-bold"
                              >
                                ÁUDIO {wizardTempoAud}s
                              </button>
                            </div>
                          </div>
                        )}

                        {/* ETAPA 7: PREVENTIVA */}
                        {wizardStep === 6 && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] text-blue-200 font-mono block">ETAPA 7 DE 8: PREVENTIVA</span>
                            <h4 className="text-xs font-black uppercase">DATA DA PREVENTIVA</h4>
                            <div className="text-amber-300 text-xs font-mono font-bold text-center py-0.5">
                              INÍCIO: 21/10/2026
                            </div>
                            <button
                              onClick={() => setWizardPreventivaFixada(true)}
                              className={`w-full py-2.5 rounded text-xs font-bold text-white transition-colors ${
                                wizardPreventivaFixada ? 'bg-emerald-700' : 'bg-sky-700'
                              }`}
                            >
                              {wizardPreventivaFixada ? 'DATA DE HOJE FIXADA! [OK]' : 'FIXAR DATA DE HOJE COMO INÍCIO'}
                            </button>
                          </div>
                        )}

                        {/* ETAPA 8: CONFIRMAÇÃO & RESUMO */}
                        {wizardStep === 7 && (
                          <div className="space-y-1 text-left text-[9px] font-mono">
                            <span className="text-[8px] text-blue-200 block">ETAPA 8 DE 8: CONFIRMAÇÃO</span>
                            <h4 className="text-[11px] font-black uppercase font-sans">RESUMO DAS CONFIGURAÇÕES</h4>
                            <div className="bg-black/25 p-1.5 rounded space-y-0.5">
                              <div>• MODO: {wizardModoHibrido === 1 ? 'MISTA (CO2+DET)' : 'SÓ CO2 (PADRÃO)'}</div>
                              <div>• RETARDO CO2: {wizardRetardo}s</div>
                              <div>• DAMPER: {wizardDamperTempo}s ({wizardDamperModo === 0 ? 'PULSO' : 'RETENÇÃO'})</div>
                              <div>• AGENDA GÁS: 07-23h ({wizardSolenoides} SOLENOIDES)</div>
                              <div>• EXAUSTOR: {wizardExaustorIgnorado ? 'IGNORADO' : 'MONITORADO'}</div>
                              <div>• ALARME: SIR {wizardTempoSir}s / AUD {wizardTempoAud}s</div>
                              <div>• PREVENTIVA: INÍCIO FIXADO</div>
                            </div>
                          </div>
                        )}

                      </div>

                      {/* Botões de Ação do Wizard: VOLTAR e AVANÇAR */}
                      <div className="flex justify-between gap-2 mt-1">
                        <button
                          onClick={() => {
                            if (wizardStep > 0) {
                              setWizardStep(prev => prev - 1);
                            } else {
                              goBack();
                            }
                          }}
                          className="flex-1 py-1.5 bg-gray-600 text-white rounded font-bold text-xs flex items-center justify-center gap-1 active:scale-95"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                          {wizardStep > 0 ? 'VOLTAR' : 'SAIR WIZARD'}
                        </button>

                        {wizardStep < 7 ? (
                          <button
                            onClick={() => setWizardStep(prev => prev + 1)}
                            className="flex-1 py-1.5 bg-blue-700 text-white rounded font-bold text-xs flex items-center justify-center gap-1 active:scale-95"
                          >
                            AVANÇAR <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <button
                            onClick={finalizarChecklist}
                            className="flex-1 py-1.5 bg-emerald-700 text-white rounded font-bold text-xs active:scale-95 shadow-md"
                          >
                            CONFIRMAR & SALVAR
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* TELA DE CONFIGURAÇÃO CO2 / SAPONIFICANTE (T_CONFIG_TEMPO_ATUACAO) */}
              {telaAtual === 'T_CONFIG_TEMPO_ATUACAO' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    CONFIGURAÇÃO CO2 / SAPONIFICANTE
                  </div>

                  <div className="space-y-1.5 flex-1 my-1 overflow-hidden">
                    {/* Item 1: Corte Pós-Descarga */}
                    <div className="p-1.5 rounded bg-blue-900 text-white flex justify-between items-center border border-white/20">
                      <div>
                        <span className="text-[10px] font-bold block">1. CORTE PÓS-DESCARGA</span>
                        <span className="text-[8px] text-amber-300 font-mono">
                          {setLimiteAtuacaoAtivo ? 'STATUS: ATIVADO (10 MIN)' : 'STATUS: TESTE CONTÍNUO'}
                        </span>
                      </div>
                      <button
                        onClick={() => setSetLimiteAtuacaoAtivo(!setLimiteAtuacaoAtivo)}
                        className={`px-2 py-1 rounded text-[10px] font-black ${
                          setLimiteAtuacaoAtivo ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
                        }`}
                      >
                        {setLimiteAtuacaoAtivo ? 'ATIVADO' : 'DESLIGADO'}
                      </button>
                    </div>

                    {/* Item 2: Tempo Limite Corte */}
                    <div className="p-1.5 rounded bg-blue-900 text-white flex justify-between items-center border border-white/20">
                      <div>
                        <span className="text-[10px] font-bold block">2. TEMPO LIMITE CORTE</span>
                        <span className="text-[8px] text-amber-300 font-mono">Corte após o retardo</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setSetTempoAtuacaoSeg(prev => Math.max(60, prev - 60))}
                          className="px-1.5 py-0.5 bg-sky-700 rounded font-bold text-xs"
                        >
                          -1m
                        </button>
                        <span className="px-2 py-0.5 bg-white text-black font-mono font-bold text-xs rounded">
                          {Math.round(setTempoAtuacaoSeg / 60)} MIN
                        </span>
                        <button
                          onClick={() => setSetTempoAtuacaoSeg(prev => Math.min(1800, prev + 60))}
                          className="px-1.5 py-0.5 bg-red-600 rounded font-bold text-xs"
                        >
                          +1m
                        </button>
                      </div>
                    </div>

                    {/* Item 3: Pulso Tempo Ligada */}
                    <div className="p-1.5 rounded bg-blue-900 text-white flex justify-between items-center border border-white/20">
                      <div>
                        <span className="text-[10px] font-bold block">3. PULSO - TEMPO LIGADA</span>
                        <span className="text-[8px] text-amber-300 font-mono">Aberta por ciclo</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setSetTempoPulsoON(prev => Math.max(1, prev - 1))}
                          className="px-2 py-0.5 bg-sky-700 rounded font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 bg-white text-black font-mono font-bold text-xs rounded">
                          {setTempoPulsoON}s
                        </span>
                        <button
                          onClick={() => setSetTempoPulsoON(prev => Math.min(30, prev + 1))}
                          className="px-2 py-0.5 bg-red-600 rounded font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Item 4: Pulso Tempo Desligada */}
                    <div className="p-1.5 rounded bg-blue-900 text-white flex justify-between items-center border border-white/20">
                      <div>
                        <span className="text-[10px] font-bold block">4. PULSO - DESLIGADA</span>
                        <span className="text-[8px] text-amber-300 font-mono">
                          {setTempoPulsoOFF === 0 ? 'MODO 100% CONTÍNUO' : 'Pausa por ciclo'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setSetTempoPulsoOFF(prev => Math.max(0, prev - 1))}
                          className="px-2 py-0.5 bg-sky-700 rounded font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 bg-white text-black font-mono font-bold text-xs rounded">
                          {setTempoPulsoOFF === 0 ? 'DIR' : `${setTempoPulsoOFF}s`}
                        </span>
                        <button
                          onClick={() => setSetTempoPulsoOFF(prev => Math.min(60, prev + 1))}
                          className="px-2 py-0.5 bg-red-600 rounded font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-emerald-700 text-white rounded font-bold text-xs active:scale-95"
                  >
                    SALVAR & VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE AJUSTE DE DATA (T_AJUSTE_DATA) */}
              {telaAtual === 'T_AJUSTE_DATA' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    AJUSTAR DATA DO SISTEMA
                  </div>

                  <div className="grid grid-cols-3 gap-2 flex-1 my-1">
                    {/* DIA */}
                    <div className="p-2 rounded bg-blue-900 text-white flex flex-col items-center justify-between border border-white/20">
                      <span className="text-[10px] font-bold">DIA</span>
                      <button
                        onClick={() => setSetD(prev => (prev === 31 ? 1 : prev + 1))}
                        className="w-full py-1 bg-red-600 rounded font-bold text-xs"
                      >
                        +
                      </button>
                      <div className="w-full py-1 bg-white text-black font-mono font-bold text-sm text-center rounded">
                        {String(setD).padStart(2, '0')}
                      </div>
                      <button
                        onClick={() => setSetD(prev => (prev === 1 ? 31 : prev - 1))}
                        className="w-full py-1 bg-sky-700 rounded font-bold text-xs"
                      >
                        -
                      </button>
                    </div>

                    {/* MÊS */}
                    <div className="p-2 rounded bg-blue-900 text-white flex flex-col items-center justify-between border border-white/20">
                      <span className="text-[10px] font-bold">MÊS</span>
                      <button
                        onClick={() => setSetM(prev => (prev === 12 ? 1 : prev + 1))}
                        className="w-full py-1 bg-red-600 rounded font-bold text-xs"
                      >
                        +
                      </button>
                      <div className="w-full py-1 bg-white text-black font-mono font-bold text-sm text-center rounded">
                        {String(setM).padStart(2, '0')}
                      </div>
                      <button
                        onClick={() => setSetM(prev => (prev === 1 ? 12 : prev - 1))}
                        className="w-full py-1 bg-sky-700 rounded font-bold text-xs"
                      >
                        -
                      </button>
                    </div>

                    {/* ANO */}
                    <div className="p-2 rounded bg-blue-900 text-white flex flex-col items-center justify-between border border-white/20">
                      <span className="text-[10px] font-bold">ANO</span>
                      <button
                        onClick={() => setSetA(prev => prev + 1)}
                        className="w-full py-1 bg-red-600 rounded font-bold text-xs"
                      >
                        +
                      </button>
                      <div className="w-full py-1 bg-white text-black font-mono font-bold text-sm text-center rounded">
                        20{setA}
                      </div>
                      <button
                        onClick={() => setSetA(prev => Math.max(24, prev - 1))}
                        className="w-full py-1 bg-sky-700 rounded font-bold text-xs"
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setDataStr(`${String(setD).padStart(2, '0')}/${String(setM).padStart(2, '0')}`);
                      goBack();
                    }}
                    className="w-full py-1.5 bg-emerald-700 text-white rounded font-bold text-xs active:scale-95"
                  >
                    SALVAR & VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE AJUSTE DE HORA (T_AJUSTE_HORA) */}
              {telaAtual === 'T_AJUSTE_HORA' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    AJUSTAR HORA DO RELÓGIO
                  </div>

                  <div className="grid grid-cols-2 gap-3 flex-1 my-2">
                    {/* HORA */}
                    <div className="p-2 rounded bg-blue-900 text-white flex flex-col items-center justify-between border border-white/20">
                      <span className="text-[10px] font-bold">HORA</span>
                      <button
                        onClick={() => setSetH(prev => (prev === 23 ? 0 : prev + 1))}
                        className="w-full py-1 bg-red-600 rounded font-bold text-xs"
                      >
                        +
                      </button>
                      <div className="w-full py-1 bg-white text-black font-mono font-bold text-lg text-center rounded">
                        {String(setH).padStart(2, '0')}
                      </div>
                      <button
                        onClick={() => setSetH(prev => (prev === 0 ? 23 : prev - 1))}
                        className="w-full py-1 bg-sky-700 rounded font-bold text-xs"
                      >
                        -
                      </button>
                    </div>

                    {/* MINUTO */}
                    <div className="p-2 rounded bg-blue-900 text-white flex flex-col items-center justify-between border border-white/20">
                      <span className="text-[10px] font-bold">MINUTO</span>
                      <button
                        onClick={() => setSetMin(prev => (prev === 59 ? 0 : prev + 1))}
                        className="w-full py-1 bg-red-600 rounded font-bold text-xs"
                      >
                        +
                      </button>
                      <div className="w-full py-1 bg-white text-black font-mono font-bold text-lg text-center rounded">
                        {String(setMin).padStart(2, '0')}
                      </div>
                      <button
                        onClick={() => setSetMin(prev => (prev === 0 ? 59 : prev - 1))}
                        className="w-full py-1 bg-sky-700 rounded font-bold text-xs"
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setHoraStr(`${String(setH).padStart(2, '0')}:${String(setMin).padStart(2, '0')}`);
                      goBack();
                    }}
                    className="w-full py-1.5 bg-emerald-700 text-white rounded font-bold text-xs active:scale-95"
                  >
                    SALVAR & VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE AJUSTE DE TEMPOS (T_AJUSTE_TEMPOS) */}
              {telaAtual === 'T_AJUSTE_TEMPOS' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    TEMPOS DE DISPARO DA CENTRAL
                  </div>

                  <div className="grid grid-cols-2 gap-2 flex-1 my-1">
                    {/* Card Atraso CO2 */}
                    <div className="p-2 rounded bg-blue-900 text-white flex flex-col justify-between border border-white/20">
                      <span className="text-[10px] font-bold text-center block">ATRASO CO2 (SEG)</span>
                      <div className="flex items-center justify-between my-2">
                        <button
                          onClick={() => setSetExtintor(prev => Math.max(5, prev - 5))}
                          className="px-2 py-1 bg-sky-700 rounded font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="px-2 py-1 bg-white text-black font-mono font-bold text-sm rounded">
                          {setExtintor}
                        </span>
                        <button
                          onClick={() => setSetExtintor(prev => Math.min(180, prev + 5))}
                          className="px-2 py-1 bg-red-600 rounded font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-[8px] text-blue-200 text-center font-mono">Retardo evacuação</span>
                    </div>

                    {/* Card Damper */}
                    <div className="p-2 rounded bg-blue-900 text-white flex flex-col justify-between border border-white/20">
                      <span className="text-[10px] font-bold text-center block">DAMPER (TEMPO/MODO)</span>
                      <div className="flex items-center justify-between my-1">
                        <button
                          onClick={() => setSetDamper(prev => Math.max(1, prev - 1))}
                          className="px-2 py-1 bg-sky-700 rounded font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="px-2 py-1 bg-white text-black font-mono font-bold text-sm rounded">
                          {setDamper}s
                        </span>
                        <button
                          onClick={() => setSetDamper(prev => Math.min(60, prev + 1))}
                          className="px-2 py-1 bg-red-600 rounded font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => setSetModoDamper(prev => ((prev + 1) % 3) as 0 | 1 | 2)}
                        className="py-1 bg-sky-700 rounded text-[9px] font-bold uppercase text-white"
                      >
                        MODO: {setModoDamper === 0 ? 'PULSO' : setModoDamper === 1 ? 'RETENÇÃO' : 'DIRETO'}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-emerald-700 text-white rounded font-bold text-xs active:scale-95"
                  >
                    SALVAR & VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE AGENDA DO GÁS (T_AGENDA_GAS) */}
              {telaAtual === 'T_AGENDA_GAS' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    AGENDA AUTOMÁTICA DO GÁS
                  </div>

                  <div className="p-2 rounded bg-blue-900 text-white flex-1 my-1 flex flex-col justify-between border border-white/20">
                    {/* Seletor do dia */}
                    <div className="flex justify-between items-center bg-black/20 p-1 rounded">
                      <button
                        onClick={() => setAgDia(prev => (prev > 0 ? prev - 1 : 6))}
                        className="px-2 py-0.5 bg-sky-700 rounded font-bold text-xs"
                      >
                        &lt;
                      </button>
                      <span className="font-bold text-xs font-mono">{diasSemana[agDia]}</span>
                      <button
                        onClick={() => setAgDia(prev => (prev < 6 ? prev + 1 : 0))}
                        className="px-2 py-0.5 bg-sky-700 rounded font-bold text-xs"
                      >
                        &gt;
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 my-1 text-center">
                      <div>
                        <span className="text-[9px] block text-blue-200">HORA LIGAR</span>
                        <span className="text-xs font-mono font-bold">07:00</span>
                      </div>
                      <div>
                        <span className="text-[9px] block text-blue-200">HORA DESLIGAR</span>
                        <span className="text-xs font-mono font-bold">23:00</span>
                      </div>
                    </div>

                    <div className="flex gap-1.5">
                      <button
                        onClick={() => {
                          setAgendaSemana(prev => prev.map((item, idx) => idx === agDia ? { ...item, sol: item.sol === 1 ? 2 : 1 } : item));
                        }}
                        className="flex-1 py-1 bg-sky-700 rounded text-[10px] font-bold"
                      >
                        SOLENOIDE: {agendaSemana[agDia]?.sol === 1 ? 'SOL 1' : 'SOL 2'}
                      </button>
                      <button
                        onClick={() => {
                          setAgendaSemana(prev => prev.map(item => ({ ...item, hIni: 7, hFim: 23 })));
                        }}
                        className="flex-1 py-1 bg-emerald-700 rounded text-[10px] font-bold"
                      >
                        SS (SEMANA)
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => navigateTo('T_VISUALIZAR_GAS')}
                      className="flex-1 py-1.5 bg-sky-700 text-white rounded font-bold text-xs active:scale-95"
                    >
                      VER AGENDA
                    </button>
                    <button
                      onClick={goBack}
                      className="flex-1 py-1.5 bg-emerald-700 text-white rounded font-bold text-xs active:scale-95"
                    >
                      VOLTAR
                    </button>
                  </div>
                </div>
              )}

              {/* TELA DE VISUALIZAR AGENDA (T_VISUALIZAR_GAS) */}
              {telaAtual === 'T_VISUALIZAR_GAS' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    LISTA DA AGENDA DO GÁS (7 DIAS)
                  </div>

                  <div className="p-1 rounded bg-blue-900 text-white flex-1 my-1 overflow-y-auto max-h-[145px] text-[9px] font-mono border border-white/20">
                    <div className="grid grid-cols-4 font-bold text-amber-300 pb-1 border-b border-white/20 text-center">
                      <span>DIA</span>
                      <span>LIGAR</span>
                      <span>DESLIGAR</span>
                      <span>SOL</span>
                    </div>
                    {agendaSemana.map((ag, i) => (
                      <div key={i} className={`grid grid-cols-4 py-0.5 text-center items-center ${i % 2 === 0 ? 'bg-white/10' : ''}`}>
                        <span className="font-bold">{ag.dia}</span>
                        <span>07:00</span>
                        <span>23:00</span>
                        <span className={ag.sol === 1 ? 'text-blue-200' : 'text-red-300 font-bold'}>
                          SOL {ag.sol}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-gray-600 text-white rounded font-bold text-xs active:scale-95"
                  >
                    &lt; VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE CONFIGURAÇÃO DE SIRENE E ÁUDIO (T_CONFIG_SIRENE) */}
              {telaAtual === 'T_CONFIG_SIRENE' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    CONFIGURAÇÃO ALARME E SOM
                  </div>

                  <div className="p-2 rounded bg-blue-900 text-white flex-1 my-1 flex flex-col justify-between border border-white/20 text-[10px]">
                    <div className="grid grid-cols-3 gap-1 text-center">
                      <div>
                        <span className="block text-[8px] text-blue-200">SIRENE</span>
                        <div className="flex items-center justify-center gap-1 mt-0.5">
                          <button onClick={() => setTempoSirene(prev => Math.max(1, prev - 1))} className="px-1.5 py-0.5 bg-sky-700 rounded font-bold">-</button>
                          <span className="font-bold font-mono">{tempoSirene}s</span>
                          <button onClick={() => setTempoSirene(prev => Math.min(60, prev + 1))} className="px-1.5 py-0.5 bg-red-600 rounded font-bold">+</button>
                        </div>
                      </div>
                      <div>
                        <span className="block text-[8px] text-blue-200">AUD. CO2</span>
                        <div className="flex items-center justify-center gap-1 mt-0.5">
                          <button onClick={() => setTempoAudioCO2(prev => Math.max(1, prev - 1))} className="px-1.5 py-0.5 bg-sky-700 rounded font-bold">-</button>
                          <span className="font-bold font-mono">{tempoAudioCO2}s</span>
                          <button onClick={() => setTempoAudioCO2(prev => Math.min(60, prev + 1))} className="px-1.5 py-0.5 bg-red-600 rounded font-bold">+</button>
                        </div>
                      </div>
                      <div>
                        <span className="block text-[8px] text-blue-200">AUD. DET.</span>
                        <div className="flex items-center justify-center gap-1 mt-0.5">
                          <button onClick={() => setTempoAudioDet(prev => Math.max(1, prev - 1))} className="px-1.5 py-0.5 bg-sky-700 rounded font-bold">-</button>
                          <span className="font-bold font-mono">{tempoAudioDet}s</span>
                          <button onClick={() => setTempoAudioDet(prev => Math.min(60, prev + 1))} className="px-1.5 py-0.5 bg-red-600 rounded font-bold">+</button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center bg-black/20 p-1.5 rounded">
                      <span>SIRENE HABILITADA:</span>
                      <button
                        onClick={() => setSireneHabilitada(!sireneHabilitada)}
                        className={`px-2 py-0.5 rounded font-black text-[9px] ${
                          sireneHabilitada ? 'bg-emerald-600' : 'bg-red-600'
                        }`}
                      >
                        {sireneHabilitada ? 'SIM' : 'NÃO'}
                      </button>
                    </div>

                    <div className="flex justify-between items-center bg-black/20 p-1.5 rounded">
                      <span>VOLUME DO SISTEMA:</span>
                      <div className="flex items-center gap-1">
                        <button onClick={() => setVolumeLevel(prev => Math.max(1, prev - 1))} className="px-1.5 py-0.5 bg-sky-700 rounded font-bold">-</button>
                        <span className="font-bold font-mono px-1">{volumeLevel}/10</span>
                        <button onClick={() => setVolumeLevel(prev => Math.min(10, prev + 1))} className="px-1.5 py-0.5 bg-red-600 rounded font-bold">+</button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-emerald-700 text-white rounded font-bold text-xs active:scale-95"
                  >
                    SALVAR & VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE CONFIGURAÇÃO DE BATERIA (T_CONFIG_BATERIA) */}
              {telaAtual === 'T_CONFIG_BATERIA' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    CONFIGURAÇÃO DA BATERIA
                  </div>

                  <div className="p-3 rounded bg-blue-900 text-white flex-1 my-1 flex flex-col justify-between border border-white/20 text-center">
                    <span className="text-xs font-bold text-blue-200">LIMITE ALARME (24V)</span>
                    <div className="flex items-center justify-center gap-3 my-2">
                      <button
                        onClick={() => setLimiteTensaoBat(prev => Math.max(10, +(prev - 0.5).toFixed(1)))}
                        className="w-10 h-10 bg-sky-700 rounded-lg font-black text-base flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 bg-white text-black font-mono font-black text-base rounded-lg">
                        {limiteTensaoBat.toFixed(1)}V
                      </span>
                      <button
                        onClick={() => setLimiteTensaoBat(prev => Math.min(30, +(prev + 0.5).toFixed(1)))}
                        className="w-10 h-10 bg-red-600 rounded-lg font-black text-base flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => navigateTo('T_CALIB_BAT')}
                      className="py-1.5 bg-sky-700 hover:bg-sky-600 rounded text-xs font-bold text-white uppercase"
                    >
                      CALIBRAR LEITURA NO MULTÍMETRO
                    </button>
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-emerald-700 text-white rounded font-bold text-xs active:scale-95"
                  >
                    SALVAR & VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE CALIBRAR BATERIA (T_CALIB_BAT) */}
              {telaAtual === 'T_CALIB_BAT' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    CALIBRAÇÃO INDUSTRIAL
                  </div>

                  <div className="p-3 rounded bg-blue-900 text-white flex-1 my-1 flex flex-col justify-between border border-white/20 text-center">
                    <span className="text-xs font-bold text-blue-200">VALOR NO MULTÍMETRO (V)</span>
                    <div className="flex items-center justify-center gap-3 my-1">
                      <button
                        onClick={() => setCalibBatMultimetro(prev => Math.max(10, +(prev - 0.5).toFixed(1)))}
                        className="w-10 h-10 bg-sky-700 rounded-lg font-black text-base flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 bg-white text-black font-mono font-black text-base rounded-lg">
                        {calibBatMultimetro.toFixed(1)}V
                      </span>
                      <button
                        onClick={() => setCalibBatMultimetro(prev => Math.min(35, +(prev + 0.5).toFixed(1)))}
                        className="w-10 h-10 bg-red-600 rounded-lg font-black text-base flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-[10px] text-emerald-300 font-mono">SISTEMA LENDO AGORA: 27.2V</span>
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-emerald-700 text-white rounded font-bold text-xs active:scale-95"
                  >
                    CONFIRMAR & VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE CONFIGURAÇÃO DE FALHAS RELÉ (T_CONFIG_FALHAS) */}
              {telaAtual === 'T_CONFIG_FALHAS' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    CONFIGURAÇÃO DE FALHAS (RELÉ SHOPPING)
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 flex-1 my-1">
                    <div className="p-2 rounded bg-blue-900 text-white flex flex-col justify-between items-center text-center border border-white/20">
                      <span className="text-[10px] font-bold">REDE AC</span>
                      <button
                        onClick={() => setReleFalhaAC(!releFalhaAC)}
                        className={`w-full py-1.5 rounded font-black text-[10px] ${releFalhaAC ? 'bg-emerald-600' : 'bg-red-600'}`}
                      >
                        {releFalhaAC ? 'ATIVO' : 'DESLIG'}
                      </button>
                      <span className="text-[8px] text-blue-200">Alarme falta luz</span>
                    </div>

                    <div className="p-2 rounded bg-blue-900 text-white flex flex-col justify-between items-center text-center border border-white/20">
                      <span className="text-[10px] font-bold">BATERIA</span>
                      <button
                        onClick={() => setReleFalhaBat(!releFalhaBat)}
                        className={`w-full py-1.5 rounded font-black text-[10px] ${releFalhaBat ? 'bg-emerald-600' : 'bg-red-600'}`}
                      >
                        {releFalhaBat ? 'ATIVO' : 'DESLIG'}
                      </button>
                      <span className="text-[8px] text-blue-200">Descarga total</span>
                    </div>

                    <div className="p-2 rounded bg-blue-900 text-white flex flex-col justify-between items-center text-center border border-white/20">
                      <span className="text-[10px] font-bold">EXAUSTOR</span>
                      <button
                        onClick={() => setReleFalhaExaustor(!releFalhaExaustor)}
                        className={`w-full py-1.5 rounded font-black text-[10px] ${releFalhaExaustor ? 'bg-emerald-600' : 'bg-red-600'}`}
                      >
                        {releFalhaExaustor ? 'ATIVO' : 'DESLIG'}
                      </button>
                      <span className="text-[8px] text-blue-200">Falta 220V motor</span>
                    </div>
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-emerald-700 text-white rounded font-bold text-xs active:scale-95"
                  >
                    SALVAR & VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE SELEÇÃO DE DAMPERS (T_DAMPER_SELECT) */}
              {telaAtual === 'T_DAMPER_SELECT' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    TECNOLOGIA DE DAMPERS
                  </div>

                  <div className="p-3 rounded bg-blue-900 text-white flex-1 my-1 flex flex-col justify-around border border-white/20">
                    <button
                      onClick={() => navigateTo('T_DAMPER_AUTO')}
                      className="py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 rounded text-xs font-bold text-left flex justify-between items-center text-white"
                    >
                      <span>1. DAMPER AUTOMÁTICO (VIRTUAL)</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigateTo('T_CONFIG_DAMPERS')}
                      className="py-2.5 px-3 bg-sky-700 hover:bg-sky-600 rounded text-xs font-bold text-left flex justify-between items-center text-white"
                    >
                      <span>2. DAMPER SEM FIO (STATUS)</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-gray-600 text-white rounded font-bold text-xs active:scale-95"
                  >
                    &lt; VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE DAMPER AUTOMÁTICO (T_DAMPER_AUTO) */}
              {telaAtual === 'T_DAMPER_AUTO' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    DAMPER AUTOMÁTICO (VIRTUAL)
                  </div>

                  <div className="p-3 rounded bg-blue-900 text-white flex-1 my-1 flex flex-col justify-around border border-white/20">
                    <span className="text-[10px] text-blue-200 text-center">ACIONAMENTO AUTOMÁTICO POR DISPARO</span>
                    <button
                      onClick={() => setDamperAutoAtivo(!damperAutoAtivo)}
                      className={`py-2 rounded text-xs font-black text-white ${damperAutoAtivo ? 'bg-emerald-600' : 'bg-red-600'}`}
                    >
                      FUNÇÃO: {damperAutoAtivo ? 'ATIVA [OK]' : 'DESLIGADA'}
                    </button>
                    {damperAutoAtivo && (
                      <button
                        onClick={() => {
                          setDamperAutoAberto(true);
                        }}
                        className="py-2 bg-sky-700 text-white rounded text-xs font-bold"
                      >
                        REARMAR DAMPERS ABERTOS
                      </button>
                    )}
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-gray-600 text-white rounded font-bold text-xs active:scale-95"
                  >
                    &lt; VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE STATUS DAMPER SEM FIO (T_CONFIG_DAMPERS) */}
              {telaAtual === 'T_CONFIG_DAMPERS' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    STATUS DOS DAMPERS SEM FIO
                  </div>

                  <div className="p-2 rounded bg-blue-900 text-white flex-1 my-1 space-y-1 text-xs border border-white/20">
                    <div className="flex justify-between items-center bg-black/20 p-1.5 rounded">
                      <span>DAMPER 1 (DUTO PRINCIPAL):</span>
                      <span className="font-bold text-emerald-400">ABERTO (OK)</span>
                    </div>
                    <div className="flex justify-between items-center bg-black/20 p-1.5 rounded">
                      <span>DAMPER 2 (COIFA 2):</span>
                      <span className="font-bold text-emerald-400">ABERTO (OK)</span>
                    </div>
                    <div className="flex justify-between items-center bg-black/20 p-1.5 rounded">
                      <span>SINAL RF TRANSMISSÃO:</span>
                      <span className="font-bold text-blue-300 font-mono">100% (-48dBm)</span>
                    </div>
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-gray-600 text-white rounded font-bold text-xs active:scale-95"
                  >
                    &lt; VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE CENTRAL MISTA / HÍBRIDA (T_CONFIG_HIBRIDA) */}
              {telaAtual === 'T_CONFIG_HIBRIDA' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    CONFIGURAÇÃO CENTRAL MISTA
                  </div>

                  <div className="p-2.5 rounded bg-blue-900 text-white flex-1 my-1 flex flex-col justify-between border border-white/20">
                    <span className="text-[10px] text-blue-200">OPÇÕES DE CENTRAL & LAÇOS</span>
                    <button
                      onClick={() => setModoHibridoAtivo(modoHibridoAtivo === 1 ? 0 : 1)}
                      className={`py-2 px-2 rounded text-xs font-bold text-left text-white ${
                        modoHibridoAtivo === 1 ? 'bg-emerald-700' : 'bg-sky-700'
                      }`}
                    >
                      MODO: {modoHibridoAtivo === 1 ? 'CENTRAL MISTA (CO2 + DETECÇÃO)' : 'CENTRAL SÓ CO2 (PADRÃO)'}
                    </button>
                    <button
                      onClick={() => setNumCoifas(prev => (prev % 3) + 1)}
                      className="py-2 px-2 bg-sky-700 rounded text-xs font-bold text-left text-white"
                    >
                      COIFAS CO2: {numCoifas} {numCoifas === 1 ? 'COIFA' : 'COIFAS'}
                    </button>
                    <button
                      onClick={() => navigateTo('T_RENOMEAR_LACOS')}
                      className="py-2 px-2 bg-gray-600 rounded text-xs font-bold text-left text-white flex justify-between items-center"
                    >
                      <span>RENOMEAR LAÇOS DE DETECÇÃO</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-emerald-700 text-white rounded font-bold text-xs active:scale-95"
                  >
                    SALVAR & VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE RENOMEAR LAÇOS (T_RENOMEAR_LACOS) */}
              {telaAtual === 'T_RENOMEAR_LACOS' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    MAPEAMENTO DE BORNES DA CENTRAL
                  </div>

                  <div className="space-y-1 flex-1 my-1 overflow-y-auto max-h-[145px]">
                    {setores.slice(0, 4).map((s, idx) => (
                      <div key={idx} className="flex gap-1.5 items-center">
                        <span className="w-24 py-1.5 bg-red-700 text-white rounded font-bold text-[9px] text-center font-mono">
                          BORNE {idx + 1}
                        </span>
                        <button
                          onClick={() => {
                            setLacoEmEdicao(idx);
                            navigateTo('T_SELECIONAR_NOME_LACO');
                          }}
                          className="flex-1 py-1.5 bg-blue-900 text-white rounded font-bold text-[10px] text-left px-2 flex justify-between items-center"
                        >
                          <span className="truncate">[ {s.nome} ]</span>
                          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-emerald-700 text-white rounded font-bold text-xs active:scale-95"
                  >
                    &lt; CONCLUÍDO
                  </button>
                </div>
              )}

              {/* TELA DE SELEÇÃO DE PRESET DE NOME (T_SELECIONAR_NOME_LACO) */}
              {telaAtual === 'T_SELECIONAR_NOME_LACO' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    ESCOLHA O NOME PARA O BORNE {lacoEmEdicao + 1}
                  </div>

                  <div className="grid grid-cols-2 gap-1 flex-1 my-1 overflow-y-auto max-h-[145px]">
                    {presetsNomesLacos.slice(paginaPresets * 8, paginaPresets * 8 + 8).map((preset, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSetores(prev => prev.map((s, i) => i === lacoEmEdicao ? { ...s, nome: `LAÇO ${lacoEmEdicao + 1}: ${preset}` } : s));
                          goBack();
                        }}
                        className="p-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded font-bold text-[9px] truncate text-left"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between gap-1">
                    <button
                      onClick={() => setPaginaPresets(prev => Math.max(0, prev - 1))}
                      className="px-2 py-1 bg-gray-600 text-white rounded text-[10px] font-bold"
                    >
                      &lt; PÁG
                    </button>
                    <button
                      onClick={goBack}
                      className="flex-1 py-1 bg-red-700 text-white rounded text-[10px] font-bold"
                    >
                      CANCELAR
                    </button>
                    <button
                      onClick={() => setPaginaPresets(prev => Math.min(2, prev + 1))}
                      className="px-2 py-1 bg-gray-600 text-white rounded text-[10px] font-bold"
                    >
                      PÁG &gt;
                    </button>
                  </div>
                </div>
              )}

              {/* TELA DE CONFIGURAÇÃO DE AVISOS DE VOZ (T_AVISOS_CO2) */}
              {telaAtual === 'T_AVISOS_CO2' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    CONFIGURAÇÃO DE AVISOS DE VOZ
                  </div>

                  <div className="space-y-1 flex-1 my-1 overflow-y-auto max-h-[140px]">
                    {avisosConfig.map((av, idx) => (
                      <div key={idx} className="p-1.5 rounded bg-blue-900 text-white flex justify-between items-center border border-white/20">
                        <div className="leading-tight">
                          <span className="text-[10px] font-bold block">{idx + 1}. {av.nome}</span>
                          <span className="text-[8px] text-amber-300 font-mono">MODO: {av.modo}</span>
                        </div>
                        <div className="flex gap-1 items-center">
                          <button
                            onClick={() => {
                              setAvisosConfig(prev => prev.map((a, i) => i === idx ? { ...a, ativo: !a.ativo } : a));
                            }}
                            className={`px-2 py-0.5 rounded font-black text-[9px] ${
                              av.ativo ? 'bg-emerald-600' : 'bg-gray-600'
                            }`}
                          >
                            {av.ativo ? 'ON' : 'OFF'}
                          </button>
                          <button
                            onClick={() => {
                              setAvisoDetalheIdx(idx);
                              navigateTo('T_AVISOS_CO2_DETALHE');
                            }}
                            className="px-2 py-0.5 bg-amber-600 rounded font-bold text-[9px] text-white"
                          >
                            CONFIG
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-emerald-700 text-white rounded font-bold text-xs active:scale-95"
                  >
                    SALVAR & VOLTAR
                  </button>
                </div>
              )}

              {/* TELA DE DETALHE DO AVISO DE VOZ (T_AVISOS_CO2_DETALHE) */}
              {telaAtual === 'T_AVISOS_CO2_DETALHE' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    CONFIG: {avisosConfig[avisoDetalheIdx]?.nome}
                  </div>

                  <div className="space-y-1 flex-1 my-1">
                    {[
                      { m: '1 VEZ', desc: '1 VEZ (Toca 1x e para)' },
                      { m: 'N VEZES', desc: 'N VEZES (Escolha quantidade)' },
                      { m: 'CONTINUO', desc: 'CONTINUO (Repete no alarme)' },
                      { m: '2a FALHA', desc: '2a FALHA (Ignora 1a oscilação)' },
                    ].map(opt => (
                      <button
                        key={opt.m}
                        onClick={() => {
                          setAvisosConfig(prev => prev.map((a, i) => i === avisoDetalheIdx ? { ...a, modo: opt.m } : a));
                        }}
                        className={`w-full py-1.5 px-2 rounded text-left font-bold text-[10px] text-white ${
                          avisosConfig[avisoDetalheIdx]?.modo === opt.m ? 'bg-emerald-600' : 'bg-gray-600'
                        }`}
                      >
                        {opt.desc}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={goBack}
                      className="flex-1 py-1.5 bg-gray-600 text-white rounded font-bold text-xs"
                    >
                      &lt; CANCELAR
                    </button>
                    <button
                      onClick={goBack}
                      className="flex-1 py-1.5 bg-emerald-700 text-white rounded font-bold text-xs"
                    >
                      SALVAR &gt;
                    </button>
                  </div>
                </div>
              )}

              {/* TELA DE ALTERAR SENHAS (T_ALTERAR_SENHA) */}
              {telaAtual === 'T_ALTERAR_SENHA' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    ALTERAR SENHAS DO SISTEMA
                  </div>

                  <div className="p-3 rounded bg-blue-900 text-white flex-1 my-1 flex flex-col justify-between border border-white/20">
                    <div className="flex gap-2">
                      <button
                        onClick={() => { setTipoSenhaEmAlteracao('USUARIO'); setNovaSenhaInput(''); }}
                        className={`flex-1 py-1.5 rounded text-xs font-bold ${
                          tipoSenhaEmAlteracao === 'USUARIO' ? 'bg-emerald-600' : 'bg-gray-700'
                        }`}
                      >
                        SENHA USUÁRIO (1701)
                      </button>
                      <button
                        onClick={() => { setTipoSenhaEmAlteracao('TECNICO'); setNovaSenhaInput(''); }}
                        className={`flex-1 py-1.5 rounded text-xs font-bold ${
                          tipoSenhaEmAlteracao === 'TECNICO' ? 'bg-emerald-600' : 'bg-gray-700'
                        }`}
                      >
                        SENHA TÉCNICO (2580)
                      </button>
                    </div>

                    <div className="text-center my-1">
                      <span className="text-[10px] text-blue-200 block">DIGITE A NOVA SENHA (4 DÍGITOS):</span>
                      <div className="bg-white text-black font-mono font-bold text-base py-1 px-4 rounded inline-block mt-1">
                        {novaSenhaInput.padEnd(4, '•').split('').join(' ')}
                      </div>
                    </div>

                    <div className="grid grid-cols-5 gap-1">
                      {['1','2','3','4','5','6','7','8','9','0'].map(d => (
                        <button
                          key={d}
                          onClick={() => {
                            if (novaSenhaInput.length < 4) setNovaSenhaInput(prev => prev + d);
                          }}
                          className="py-1 bg-sky-700 rounded text-xs font-bold"
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={goBack}
                      className="flex-1 py-1.5 bg-gray-600 text-white rounded font-bold text-xs"
                    >
                      CANCELAR
                    </button>
                    <button
                      onClick={() => {
                        if (novaSenhaInput.length === 4) {
                          if (tipoSenhaEmAlteracao === 'USUARIO') setSenhaUsuario(novaSenhaInput);
                          else setSenhaTecnico(novaSenhaInput);
                          goBack();
                        }
                      }}
                      className="flex-1 py-1.5 bg-emerald-700 text-white rounded font-bold text-xs"
                    >
                      SALVAR SENHA
                    </button>
                  </div>
                </div>
              )}

              {/* TELA DE PAREAMENTO ESP-NOW (T_PAREAMENTO) */}
              {telaAtual === 'T_PAREAMENTO' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-red-700 animate-pulse">
                    PAREAMENTO DA CENTRAL (ESP-NOW)
                  </div>

                  <div className="p-2.5 rounded bg-blue-900 text-white flex-1 my-1 flex flex-col justify-between border border-white/20 text-xs">
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>CANAL WIRELESS:</span>
                        <span className="font-mono font-bold text-emerald-400">CH 1 (2.4 GHz)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>SINAL MASTER (RSSI):</span>
                        <span className="font-mono font-bold text-emerald-400">-52 dBm (EXCELENTE)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>MAC DESTINO:</span>
                        <span className="font-mono text-[9px] text-gray-300">24:6F:28:B4:9C:10</span>
                      </div>
                    </div>

                    <div className="p-2 bg-emerald-950/80 border border-emerald-500 rounded text-center">
                      <span className="text-[10px] text-emerald-300 font-bold block">
                        ✔ VÍNCULO SINCRONIZADO COM SUCESSO!
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-gray-600 text-white rounded font-bold text-xs active:scale-95"
                  >
                    &lt; VOLTAR
                  </button>
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
                      className="flex-1 py-2 bg-blue-800 text-white rounded font-bold text-xs active:scale-95"
                    >
                      +1 HORA
                    </button>
                    <div className={`flex-1 py-2 rounded font-black text-xs text-white flex items-center justify-center ${
                      gasLeak ? 'bg-red-600' : (valvulaAberta > 0 ? 'bg-emerald-700' : 'bg-gray-600')
                    }`}>
                      {gasLeak ? 'VAZAMENTO!' : (valvulaAberta > 0 ? 'SOL 1 ABERTA' : 'FECHADO')}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={goBack}
                      className="flex-1 py-1.5 bg-gray-600 text-white rounded font-bold text-xs active:scale-95"
                    >
                      &lt; VOLTAR
                    </button>
                    <button
                      onClick={rearmarSistema}
                      className="flex-1 py-1.5 bg-blue-900 text-white rounded font-bold text-xs active:scale-95"
                    >
                      REARMAR
                    </button>
                  </div>
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
                          navigateTo('T_SETOR_DETALHE');
                        }}
                        className="p-1.5 bg-blue-900 text-white rounded text-left flex items-center justify-between hover:bg-blue-800 transition-colors"
                      >
                        <span className="text-[10px] font-bold truncate">{s.nome}</span>
                        <span className="text-[9px] bg-white/20 px-1 rounded font-mono">{s.temp}°C</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={goBack}
                      className="flex-1 py-1.5 bg-gray-600 text-white rounded font-bold text-xs active:scale-95"
                    >
                      &lt; VOLTAR
                    </button>
                    <button
                      onClick={() => navigateTo('T_STATUS_DIAG')}
                      className="flex-2 py-1.5 bg-blue-900 text-white rounded font-bold text-xs active:scale-95"
                    >
                      STATUS COMPLETO
                    </button>
                  </div>
                </div>
              )}

              {/* TELA DE DETALHE DO SETOR */}
              {telaAtual === 'T_SETOR_DETALHE' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    {setores[setorSelecionadoIdx]?.nome}
                  </div>

                  <div className="bg-gray-100 p-2.5 rounded border space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Temperatura Atual:</span>
                      <span className="font-bold text-emerald-700">{setores[setorSelecionadoIdx]?.temp}°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Limiar Alarme:</span>
                      <span className="font-bold text-red-600">145°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status do Laço:</span>
                      <span className="font-bold text-blue-800">
                        {setores[setorSelecionadoIdx]?.inibido ? 'INIBIDO' : 'SUPERVISIONADO (OK)'}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={goBack}
                      className="flex-1 py-1.5 bg-gray-600 text-white rounded font-bold text-xs"
                    >
                      &lt; VOLTAR
                    </button>
                    <button 
                      onClick={() => {
                        setSetores(prev => prev.map((s, idx) => idx === setorSelecionadoIdx ? { ...s, inibido: !s.inibido } : s));
                      }}
                      className="flex-1 py-1.5 bg-amber-600 text-white rounded font-bold text-xs"
                    >
                      {setores[setorSelecionadoIdx]?.inibido ? 'DESINIBIR' : 'INIBIR LAÇO'}
                    </button>
                    <button 
                      onClick={simularAlarmeCoifa}
                      className="flex-1 py-1.5 bg-red-600 text-white rounded font-bold text-xs"
                    >
                      DISPARAR
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

                  <div className="bg-gray-100 p-1.5 rounded border border-gray-300 text-[9px] space-y-1">
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
                    onClick={goBack}
                    className="w-full py-1.5 bg-gray-600 text-white rounded font-bold text-xs active:scale-95"
                  >
                    &lt; VOLTAR (ANTERIOR)
                  </button>
                </div>
              )}

              {/* TELA DE VALIDADE DE CILINDROS */}
              {telaAtual === 'T_CILINDROS' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-blue-900">
                    VALIDADE DOS CILINDROS (NBR 14518)
                  </div>

                  <div className="bg-gray-100 p-2 rounded border space-y-1.5 text-xs">
                    <div className="flex justify-between items-center border-b pb-1">
                      <div>
                        <div className="font-bold text-blue-900 text-[10px]">CILINDRO CO2 ALTA PRESSÃO:</div>
                        <div className="text-[9px] text-gray-600 font-mono">
                          Validade: {cilindroCO2Mes}/20{cilindroCO2Ano + 1} | 58 bar
                        </div>
                      </div>
                      <button
                        onClick={() => { setCilindroCO2Ano(26); setCilindroCO2Mes(10); }}
                        className="px-2 py-1 bg-emerald-700 text-white rounded text-[9px] font-bold"
                      >
                        RENOVAR
                      </button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-blue-900 text-[10px]">CILINDRO SAPONIFICANTE:</div>
                        <div className="text-[9px] text-gray-600 font-mono">
                          Validade: {cilindroSapMes}/20{cilindroSapAno + 1} | 13.7 bar
                        </div>
                      </div>
                      <button
                        onClick={() => { setCilindroSapAno(26); setCilindroSapMes(10); }}
                        className="px-2 py-1 bg-emerald-700 text-white rounded text-[9px] font-bold"
                      >
                        RENOVAR
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-gray-600 text-white rounded font-bold text-xs active:scale-95"
                  >
                    &lt; VOLTAR (ANTERIOR)
                  </button>
                </div>
              )}

              {/* TELA DE VISTORIA PREVENTIVA */}
              {telaAtual === 'T_VISTORIA' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center font-black text-xs text-amber-800">
                    CONTROLE DE PREVENTIVA (NBR 14518)
                  </div>

                  <div className="bg-amber-50 p-2 rounded border border-amber-300 text-xs space-y-1 text-center">
                    <p className="font-bold text-amber-900 text-[11px]">ÚLTIMA PREVENTIVA: {vistoriaMes}/20{vistoriaAno}</p>
                    <p className={`font-mono font-bold text-xs ${vistoriaVencidaSimulada ? 'text-red-600 animate-pulse' : 'text-emerald-700'}`}>
                      STATUS: {vistoriaVencidaSimulada ? 'VENCIDA (REVISÃO OBRIGATÓRIA)' : 'EM DIA (CONFORME)'}
                    </p>
                    <div className="flex gap-2 pt-1">
                      <button
                        onClick={() => setVistoriaVencidaSimulada(!vistoriaVencidaSimulada)}
                        className="flex-1 py-1 bg-amber-600 text-white rounded font-bold text-[10px]"
                      >
                        {vistoriaVencidaSimulada ? 'NORMALIZAR' : 'SIMULAR VENCIMENTO'}
                      </button>
                      <button
                        onClick={() => { setVistoriaMes(10); setVistoriaAno(26); setVistoriaVencidaSimulada(false); }}
                        className="flex-1 py-1 bg-emerald-700 text-white rounded font-bold text-[10px]"
                      >
                        RENOVAR PREVENTIVA
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={goBack}
                    className="w-full py-1.5 bg-gray-600 text-white rounded font-bold text-xs active:scale-95"
                  >
                    &lt; VOLTAR (ANTERIOR)
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
            <span>EMULADOR 100% FIRMWARE SISTEMA 09</span>
          </div>
        </div>
      </div>

      {/* CONSOLE DE TESTES E SIMULAÇÕES PARA O VISITANTE (PROVANDO QUE ESTÁ CONECTADA NA MASTER) */}
      <div className={`w-full ${compact ? 'max-w-[480px]' : 'max-w-[580px]'} mt-4 bg-[#12141a] p-3 sm:p-4 rounded-2xl border border-[#d4af37]/25 shadow-lg`}>
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Painel de Simulações em Tempo Real (Conectada à Master)
            </span>
          </div>
          <span className="text-[10px] text-gray-400 font-mono">
            Teste a reação da IHM e da Master:
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
