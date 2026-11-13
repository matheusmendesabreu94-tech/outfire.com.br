import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  Flame, ShieldCheck, AlertOctagon, ZapOff, Wind, Droplets,
  RotateCcw, Sparkles, BellRing, Eye, Camera, CheckCircle2,
  ChevronDown, Radio, XCircle, User, Play, Pause, MousePointer, HelpCircle,
  Volume2, VolumeX, ShieldAlert, UtensilsCrossed, Zap, AlertTriangle
} from 'lucide-react';
import {
  createNormalizedIhmScreenCanvas,
  drawAlarmScreenToCanvas,
  drawSuppressionScreenToCanvas,
  drawExtinguishedScreenToCanvas,
  drawAbortedScreenToCanvas
} from '../utils/ihmScreen';
import { soundEffects } from '../utils/soundEffects';
import { createCylinderLabelTexture } from '../utils/cylinderLabels';

export interface CinematicZoomPoint {
  id: number;
  label: string;
  name: string;
  progress: number;
  camPos: [number, number, number];
  camLook: [number, number, number];
  camPosMobile: [number, number, number];
  camLookMobile: [number, number, number];
  badgeTitle: string;
  badgeDesc: string;
  icon: string;
}

export const CINEMATIC_ZOOM_STOPS: CinematicZoomPoint[] = [
  {
    id: 1,
    label: '1',
    name: 'Cozinha Standby',
    progress: 0.05,
    camPos: [0, 2.2, 4.4],
    camLook: [0, 1.4, 0],
    camPosMobile: [0.5, 2.1, 7.0],
    camLookMobile: [0.5, 1.3, 0],
    badgeTitle: '1. Cozinha em Standby & Supervisão',
    badgeDesc: 'Sistema Outfire VTS 32S3 operando em prontidão e supervisão autônoma contínua (NBR 14518).',
    icon: 'shield',
  },
  {
    id: 2,
    label: '2',
    name: 'Início do Fogo',
    progress: 0.18,
    camPos: [-0.55, 1.45, 1.8],
    camLook: [-0.55, 1.05, 0],
    camPosMobile: [-0.55, 1.45, 2.3],
    camLookMobile: [-0.55, 1.05, 0],
    badgeTitle: '2. Princípio de Incêndio na Fritadeira',
    badgeDesc: 'Gordura e óleo vegetal/animal superaquecem até autoignição (>340°C). Fogo inicia.',
    icon: 'flame',
  },
  {
    id: 3,
    label: '3',
    name: 'Sensor 145°C',
    progress: 0.32,
    camPos: [-0.45, 2.05, 1.15],
    camLook: [-0.55, 2.15, 0],
    camPosMobile: [-0.45, 2.05, 1.6],
    camLookMobile: [-0.55, 2.15, 0],
    badgeTitle: '3. Sensor Blindado Atinge 145°C',
    badgeDesc: 'Temperatura na coifa atinge 145°C (NBR 14518). O sensor blindado fecha circuito de disparo imediato.',
    icon: 'sensor',
  },
  {
    id: 4,
    label: '4',
    name: 'Damper Corta-Fogo',
    progress: 0.45,
    camPos: [0.1, 2.75, 1.35],
    camLook: [0, 2.85, 0],
    camPosMobile: [0.1, 2.75, 1.8],
    camLookMobile: [0, 2.85, 0],
    badgeTitle: '4. Damper Corta-Fogo Fechado (Duto Isolado)',
    badgeDesc: 'Solenoide desarmada: lâmina fecha em 90° bloqueando a passagem de fogo para a exaustão predial.',
    icon: 'damper',
  },
  {
    id: 5,
    label: '5',
    name: 'Corte de Gás',
    progress: 0.58,
    camPos: [0.65, 1.45, 1.55],
    camLook: [0.65, 1.05, 0],
    camPosMobile: [0.65, 1.45, 2.1],
    camLookMobile: [0.65, 1.05, 0],
    badgeTitle: '5. Corte Imediato de Gás GN/GLP por Válvula Solenoide',
    badgeDesc: 'Válvula solenoide fecha instantaneamente o gás, apagando as chamas sob a panela e eliminando o combustível.',
    icon: 'gas',
  },
  {
    id: 6,
    label: '6',
    name: 'Quadro Elétrico',
    progress: 0.70,
    camPos: [-2.2, 1.95, 1.4],
    camLook: [-2.6, 1.9, -0.4],
    camPosMobile: [-2.0, 1.95, 1.9],
    camLookMobile: [-2.6, 1.9, -0.4],
    badgeTitle: '6. Intertravamento Elétrico: Exaustão & Fritadeira Desenergizadas',
    badgeDesc: 'Luzes do painel desligam: motor do exaustor e resistências das fritadeiras são cortados para evitar reignição.',
    icon: 'electrical',
  },
  {
    id: 7,
    label: '7',
    name: 'Central Outfire IHM',
    progress: 0.82,
    camPos: [2.1, 1.8, 0.72],
    camLook: [2.1, 1.8, 0.15],
    camPosMobile: [2.05, 1.8, 1.0],
    camLookMobile: [2.1, 1.8, 0.15],
    badgeTitle: '7. Central Outfire VTS 32S3 em Alarme com IHM Touch',
    badgeDesc: 'Cronômetro regressivo ativado com áudio sincronizado: 11s bips de aviso + 5s sirene de evacuação.',
    icon: 'central',
  },
  {
    id: 8,
    label: '8',
    name: 'Extinção Total',
    progress: 0.95,
    camPos: [0, 1.8, 3.0],
    camLook: [-0.1, 1.25, 0],
    camPosMobile: [0, 1.8, 3.8],
    camLookMobile: [-0.1, 1.25, 0],
    badgeTitle: '8. Supressão Ativa com Saponificante Classe K & CO2',
    badgeDesc: 'Bicos aspersores criam manta espumosa saponificada, resfriando o óleo e isolando o oxigênio. Fogo 100% extinto!',
    icon: 'droplets',
  },
];

type SimStage = 'STANDBY' | 'HEATING' | 'FIRE_ALARM' | 'SUPPRESSION' | 'EXTINGUISHED';

interface TelemetryData {
  temp: number;
  gasStatus: 'ABERTO' | 'CORTADO';
  exhaustStatus: 'LIGADO' | 'INTERTRAVADO';
  systemStatus: 'PRONTIDÃO' | 'AQUECIMENTO' | 'ALERTA DE FOGO' | 'COMBATE ATIVO' | 'INCÊNDIO EXTINTO';
  countdown: number;
}

interface HeroProps {
  onOpenPortal?: (mode?: 'client' | 'admin') => void;
}

export const Hero3DScrollytelling: React.FC<HeroProps> = ({ onOpenPortal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Scrollytelling Scroll Progress (0 to 1)
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const scrollProgressRef = useRef<number>(0);

  // Auto-Play / Pause State & Modo Scroll
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const autoPlayRafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Pop-up Automático de Entrada (Aperte o Play vs Modo Descendo a Tela)
  const [showEntryModal, setShowEntryModal] = useState<boolean>(false);
  const hasShownEntryModalRef = useRef<boolean>(false);
  const [showScrollPromptArrows, setShowScrollPromptArrows] = useState<boolean>(false);

  // Cenário Ativo: Incêndio Real vs Disparo Acidental
  const [activeScenario, setActiveScenario] = useState<'real_fire' | 'accidental_discharge'>('real_fire');
  const activeScenarioRef = useRef<'real_fire' | 'accidental_discharge'>('real_fire');
  activeScenarioRef.current = activeScenario;

  const [accidentalStep, setAccidentalStep] = useState<'idle' | 'walking' | 'falling' | 'alarm_waiting_click' | 'aborted'>('idle');
  const accidentalStepRef = useRef<'idle' | 'walking' | 'falling' | 'alarm_waiting_click' | 'aborted'>('idle');
  accidentalStepRef.current = accidentalStep;

  // Áudio Mudo / Ligado & Controle do Áudio Oficial da Central
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const isMutedRef = useRef<boolean>(false);
  isMutedRef.current = isMuted;

  const officialAudioRef = useRef<HTMLAudioElement | null>(null);
  const audioCycleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sirenStopFnRef = useRef<(() => void) | null>(null);

  // Overlay de Notificação Cinematográfica da Câmera
  const [cinematicBadge, setCinematicBadge] = useState<{ title: string; desc: string; iconType: string } | null>(null);
  const [activeZoomIndex, setActiveZoomIndex] = useState<number>(0);
  const [showAbortedModal, setShowAbortedModal] = useState<boolean>(false);

  // Audio Tracking Refs
  const hasPlayedAlarmAudioRef = useRef<boolean>(false);
  const hasPlayedEvacuationRef = useRef<boolean>(false);
  const hasPlayedGasCutoffRef = useRef<boolean>(false);

  const stopAllAudioCycles = useCallback(() => {
    if (audioCycleTimeoutRef.current) {
      clearTimeout(audioCycleTimeoutRef.current);
      audioCycleTimeoutRef.current = null;
    }
    if (officialAudioRef.current) {
      try {
        officialAudioRef.current.pause();
        officialAudioRef.current.currentTime = 0;
      } catch {}
      officialAudioRef.current = null;
    }
    if (sirenStopFnRef.current) {
      try {
        sirenStopFnRef.current();
      } catch {}
      sirenStopFnRef.current = null;
    }
    soundEffects.stopAll();
  }, []);

  const startOfficialAlarmAudioCycle = useCallback(() => {
    stopAllAudioCycles();
    if (isMutedRef.current) return;

    const runCycle = () => {
      try {
        // 1. Toca a voz oficial de disparo da coifa 1 (/assets/audio/sensor_coifa.m4a) por 11 segundos
        const audio = new Audio('/assets/audio/sensor_coifa.m4a');
        officialAudioRef.current = audio;
        audio.play().catch(e => console.log('Audio autoplay prevented:', e));

        // 2. Após 11 segundos da voz, toca a sirene de evacuação por 5 segundos
        audioCycleTimeoutRef.current = setTimeout(() => {
          if (officialAudioRef.current) {
            officialAudioRef.current.pause();
            officialAudioRef.current = null;
          }

          sirenStopFnRef.current = soundEffects.playEvacuationSiren(5);

          // 3. Após 5 segundos de sirene (total 16s de ciclo), se ainda em alarme, repete a voz por 11s!
          audioCycleTimeoutRef.current = setTimeout(() => {
            sirenStopFnRef.current = null;
            if (simStageRef.current === 'FIRE_ALARM' || accidentalStepRef.current === 'alarm_waiting_click') {
              runCycle();
            }
          }, 5000);

        }, 11000);
      } catch (err) {
        console.warn('Erro ao inicializar áudio oficial:', err);
      }
    };

    runCycle();
  }, [stopAllAudioCycles]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      soundEffects.setMuted(next);
      if (next) {
        stopAllAudioCycles();
      } else {
        if (simStageRef.current === 'FIRE_ALARM' || accidentalStepRef.current === 'alarm_waiting_click') {
          startOfficialAlarmAudioCycle();
        }
      }
      return next;
    });
  }, [stopAllAudioCycles, startOfficialAlarmAudioCycle]);

  // Manual Trigger Override (if user clicks Acionador Manual)
  const [manualOverride, setManualOverride] = useState<boolean>(false);
  const manualOverrideRef = useRef<boolean>(false);

  // Simulation Stage
  const [simStage, setSimStage] = useState<SimStage>('STANDBY');
  const simStageRef = useRef<SimStage>('STANDBY');
  simStageRef.current = simStage;

  const [countdown, setCountdown] = useState<number>(10);
  const countdownRef = useRef<number>(10);
  countdownRef.current = countdown;

  const [telemetry, setTelemetry] = useState<TelemetryData>({
    temp: 180,
    gasStatus: 'ABERTO',
    exhaustStatus: 'LIGADO',
    systemStatus: 'PRONTIDÃO',
    countdown: 10,
  });

  const [hoveredObjectName, setHoveredObjectName] = useState<string | null>(null);
  const [activeCameraView, setActiveCameraView] = useState<'geral' | 'central' | 'fritadeira' | 'botoeira'>('geral');

  // Three.js References
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  // Dynamic Meshes & Lights
  const centralScreenTextureRef = useRef<THREE.CanvasTexture | null>(null);
  const centralScreenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const lcdScreenMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const standbyScreenTextureRef = useRef<THREE.Texture | null>(null);
  const alarmScreenTextureRef = useRef<THREE.Texture | null>(null);
  const centralStrobeLightRef = useRef<THREE.PointLight | null>(null);
  const centralStrobeMeshRef = useRef<THREE.Mesh | null>(null);
  const fireLightRef = useRef<THREE.PointLight | null>(null);
  const manualPullLeverRef = useRef<THREE.Mesh | null>(null);
  const manualStationMeshRef = useRef<THREE.Group | null>(null);
  const centralGroupRef = useRef<THREE.Group | null>(null);
  const fryerGroupRef = useRef<THREE.Group | null>(null);
  const foamBlanketMeshRef = useRef<THREE.Mesh | null>(null);
  const fireParticlesGroupRef = useRef<THREE.Group | null>(null);
  const smokeParticlesGroupRef = useRef<THREE.Group | null>(null);
  const foamSprayGroupRef = useRef<THREE.Group | null>(null);
  const co2FogGroupRef = useRef<THREE.Group | null>(null);

  // 3D Meshes & Elementos Dinâmicos Adicionais (Panela, Chamas Azuis, Sensor, Damper, Quadro, Lavador)
  const stovePanGroupRef = useRef<THREE.Group | null>(null);
  const blueFlameGroupRef = useRef<THREE.Group | null>(null);
  const blueFlameLightRef = useRef<THREE.PointLight | null>(null);
  const shieldedSensorGroupRef = useRef<THREE.Group | null>(null);
  const sensorGlowMeshRef = useRef<THREE.Mesh | null>(null);
  const damperFlapMeshRef = useRef<THREE.Mesh | null>(null);
  const electricalPanelGroupRef = useRef<THREE.Group | null>(null);
  const panelLedExhaustRef = useRef<THREE.Mesh | null>(null);
  const panelLedFryerRef = useRef<THREE.Mesh | null>(null);
  const panelLedAmberRef = useRef<THREE.Mesh | null>(null);
  const dishwasherGroupRef = useRef<THREE.Group | null>(null);
  const platesStackGroupRef = useRef<THREE.Group | null>(null);
  const fallingPlateMeshRef = useRef<THREE.Mesh | null>(null);

  // Camera Target Interpolation
  const targetCamPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 2.2, 4.4));
  const targetCamLook = useRef<THREE.Vector3>(new THREE.Vector3(0, 1.4, 0));

  // --- DRAW CENTRAL LCD DIGITAL TOUCHSCREEN CANVAS TEXTURE ---
  // Renderiza dinamicamente as telas da IHM (Alarme com cronômetro em tempo real, Supressão e Extinto)
  const updateLcdScreenTexture = useCallback(() => {
    const canvas = centralScreenCanvasRef.current;
    if (!canvas) return;

    const stage = simStageRef.current;
    const timeSec = countdownRef.current;

    if (stage === 'FIRE_ALARM') {
      drawAlarmScreenToCanvas(canvas, timeSec);
    } else if (stage === 'SUPPRESSION') {
      drawSuppressionScreenToCanvas(canvas);
    } else if (stage === 'EXTINGUISHED') {
      drawExtinguishedScreenToCanvas(canvas);
    }

    if (centralScreenTextureRef.current) {
      centralScreenTextureRef.current.needsUpdate = true;
    }
  }, []);

  // Estado para controle de contagem regressiva manual disparada pela botoeira
  const [isManualCountdown, setIsManualCountdown] = useState<boolean>(false);

  // --- MANUAL TRIGGER ACTION (BOTOEIRA) ---
  // Regra crítica do cliente: ao puxar o acionador manual, inicia a contagem regressiva
  // e NÃO despeja o saponificante antes de zerar a contagem!
  const handleManualTrigger = useCallback(() => {
    setIsPlaying(false);
    if (simStage === 'SUPPRESSION' || simStage === 'EXTINGUISHED') return;

    if (manualPullLeverRef.current) {
      manualPullLeverRef.current.rotation.x = 0.65;
    }

    manualOverrideRef.current = true;
    setManualOverride(true);
    setSimStage('FIRE_ALARM');
    setCountdown(60);
    setIsManualCountdown(true);

    setTelemetry({
      temp: 290,
      gasStatus: 'CORTADO',
      exhaustStatus: 'INTERTRAVADO',
      systemStatus: 'ALERTA DE FOGO',
      countdown: 60,
    });
  }, [simStage]);

  // --- ABORTAR DISPARO (ANULAR DISPARO EM FALSO CONFORME REQUISITO) ---
  const handleAbortDisparo = useCallback(() => {
    setIsPlaying(false);
    stopAllAudioCycles();
    soundEffects.playSuccessChime();

    manualOverrideRef.current = false;
    setManualOverride(false);
    setIsManualCountdown(false);

    if (activeScenarioRef.current === 'accidental_discharge') {
      setAccidentalStep('aborted');
      setShowAbortedModal(true);
    } else {
      setShowAbortedModal(true);
    }

    const canvas = centralScreenCanvasRef.current;
    if (canvas) {
      drawAbortedScreenToCanvas(canvas);
      if (centralScreenTextureRef.current) {
        centralScreenTextureRef.current.needsUpdate = true;
      }
      if (lcdScreenMatRef.current) {
        lcdScreenMatRef.current.map = centralScreenTextureRef.current;
        lcdScreenMatRef.current.emissiveMap = centralScreenTextureRef.current;
        lcdScreenMatRef.current.emissiveIntensity = 1.0;
        lcdScreenMatRef.current.needsUpdate = true;
      }
    }

    if (manualPullLeverRef.current) {
      manualPullLeverRef.current.rotation.x = 0;
    }

    setSimStage('STANDBY');
    setCountdown(60);
    setTelemetry({
      temp: 180,
      gasStatus: 'ABERTO',
      exhaustStatus: 'LIGADO',
      systemStatus: 'PRONTIDÃO',
      countdown: 60,
    });
  }, [stopAllAudioCycles]);

  // --- CENÁRIO 1: INICIAR SIMULAÇÃO DE INCÊNDIO REAL (8 ZOOMS CINEMATOGRÁFICOS) ---
  const startRealFireScenario = useCallback((autoPlay: boolean = true) => {
    setIsPlaying(false);
    stopAllAudioCycles();
    setActiveScenario('real_fire');
    setAccidentalStep('idle');
    setShowAbortedModal(false);
    setActiveCameraView('geral');

    if (dishwasherGroupRef.current) {
      dishwasherGroupRef.current.visible = false;
    }
    if (manualPullLeverRef.current) {
      manualPullLeverRef.current.rotation.x = 0;
    }

    hasPlayedGasCutoffRef.current = false;
    hasPlayedAlarmAudioRef.current = false;
    hasPlayedEvacuationRef.current = false;

    // Rola de volta para o topo da simulação
    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      window.scrollTo({ top: containerTop + 20, behavior: 'smooth' });
    }
    setScrollProgress(0.02);
    scrollProgressRef.current = 0.02;
    setActiveZoomIndex(0);
    setSimStage('STANDBY');
    setCountdown(60);
    setTelemetry({
      temp: 180,
      gasStatus: 'ABERTO',
      exhaustStatus: 'LIGADO',
      systemStatus: 'PRONTIDÃO',
      countdown: 60,
    });

    if (lcdScreenMatRef.current && standbyScreenTextureRef.current) {
      lcdScreenMatRef.current.map = standbyScreenTextureRef.current;
      lcdScreenMatRef.current.emissiveMap = standbyScreenTextureRef.current;
      lcdScreenMatRef.current.needsUpdate = true;
    }

    if (autoPlay) {
      setIsPlaying(true);
      setShowScrollPromptArrows(false);
    }
  }, [stopAllAudioCycles]);

  // --- CENÁRIO 2: INICIAR SIMULAÇÃO DE DISPARO ACIDENTAL (COMÉDIA DOS PRATOS) ---
  const startAccidentalDischargeScenario = useCallback(() => {
    setIsPlaying(false);
    stopAllAudioCycles();
    setActiveScenario('accidental_discharge');
    setAccidentalStep('walking');
    setShowAbortedModal(false);
    setActiveCameraView('geral');

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      targetCamPos.current.set(1.4, 1.6, 2.8);
      targetCamLook.current.set(1.5, 1.35, 0.1);
    } else {
      targetCamPos.current.set(1.4, 1.6, 2.3);
      targetCamLook.current.set(1.5, 1.35, 0.1);
    }

    if (dishwasherGroupRef.current) {
      dishwasherGroupRef.current.visible = true;
      dishwasherGroupRef.current.position.set(2.8, 0, 0.3);
      dishwasherGroupRef.current.rotation.y = -Math.PI / 2;
    }
    if (platesStackGroupRef.current) {
      platesStackGroupRef.current.rotation.set(0, 0, 0);
    }
    if (fallingPlateMeshRef.current) {
      fallingPlateMeshRef.current.position.set(0, 12 * 0.028 + 0.02, 0);
      fallingPlateMeshRef.current.rotation.set(0, 0, 0);
    }
    if (manualPullLeverRef.current) {
      manualPullLeverRef.current.rotation.x = 0;
    }

    if (lcdScreenMatRef.current && standbyScreenTextureRef.current) {
      lcdScreenMatRef.current.map = standbyScreenTextureRef.current;
      lcdScreenMatRef.current.emissiveMap = standbyScreenTextureRef.current;
      lcdScreenMatRef.current.needsUpdate = true;
    }
  }, [stopAllAudioCycles]);

  // Helpers de rolagem suave da tela
  const scrollToKitchen = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
    hasShownEntryModalRef.current = true;
    setTimeout(() => {
      setShowEntryModal(true);
    }, 450);
  };

  const handleScrollDownStep = () => {
    if (!containerRef.current) return;
    const currentScroll = window.scrollY;
    const step = window.innerHeight * 0.85;
    window.scrollTo({ top: currentScroll + step, behavior: 'smooth' });
  };

  const scrollToProgress = (progressRatio: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const scrollDist = containerRef.current.offsetHeight - window.innerHeight;
    const targetY = containerTop + (scrollDist * progressRatio);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const scrollToNextSection = () => {
    setIsPlaying(false);
    if (!containerRef.current) return;
    const containerBottom = containerRef.current.offsetTop + containerRef.current.offsetHeight;
    window.scrollTo({ top: containerBottom + 10, behavior: 'smooth' });
  };

  // --- SELEÇÃO NO POP-UP DE ENTRADA & CONTROLES ---
  // 1. Apresentação Automática Rápida (Aperte o Play ~13s)
  const handleSelectAutoPlay = useCallback(() => {
    setShowEntryModal(false);
    setShowScrollPromptArrows(false);
    if (scrollProgressRef.current >= 0.94 || scrollProgressRef.current < 0.02) {
      if (containerRef.current) {
        const containerTop = containerRef.current.offsetTop;
        window.scrollTo({ top: containerTop + 20, behavior: 'auto' });
        scrollProgressRef.current = 0.02;
        setScrollProgress(0.02);
      }
    }
    setIsPlaying(true);
  }, []);

  // 2. Modo Descendo a Tela (Rolagem Manual)
  const handleSelectScrollMode = useCallback(() => {
    setShowEntryModal(false);
    setIsPlaying(false);
    setShowScrollPromptArrows(true);
  }, []);

  // --- CONTROLES DE AUTO-PLAY / PAUSE & MODO MANUAL SCROLL ---
  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => {
      const next = !prev;
      if (next) {
        setShowScrollPromptArrows(false);
        // Se a simulação já estava no final (> 0.94), reinicia do início da cozinha instantaneamente
        if (scrollProgressRef.current >= 0.94) {
          if (containerRef.current) {
            const containerTop = containerRef.current.offsetTop;
            window.scrollTo({ top: containerTop + 20, behavior: 'auto' });
            scrollProgressRef.current = 0.02;
            setScrollProgress(0.02);
          }
        } else if (scrollProgressRef.current < 0.02 && containerRef.current) {
          // Se o usuário estiver acima da seção 3D, rola até o início da cozinha
          const containerTop = containerRef.current.offsetTop;
          if (window.scrollY < containerTop - 50) {
            window.scrollTo({ top: containerTop + 20, behavior: 'auto' });
          }
        }
      } else {
        setShowScrollPromptArrows(true);
      }
      return next;
    });
  }, []);

  const handleSetManualMode = useCallback(() => {
    setIsPlaying(false);
    setShowScrollPromptArrows(true);
  }, []);

  // Loop contínuo e suave com requestAnimationFrame para o Auto-Play acelerado e dinâmico
  useEffect(() => {
    if (!isPlaying) {
      if (autoPlayRafRef.current) {
        cancelAnimationFrame(autoPlayRafRef.current);
        autoPlayRafRef.current = null;
      }
      return;
    }

    lastTimeRef.current = performance.now();

    const loop = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = currentTime;

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollDist = containerRef.current.offsetHeight - window.innerHeight;

        if (scrollDist > 0) {
          const scrolled = -rect.top;
          const p = scrolled / scrollDist;

          // Ao atingir o final da simulação (Fase 4 extinta), pausa automaticamente
          if (p >= 0.985) {
            setIsPlaying(false);
            if (autoPlayRafRef.current) {
              cancelAnimationFrame(autoPlayRafRef.current);
              autoPlayRafRef.current = null;
            }
            return;
          }

          // Duração cinematográfica completa solicitada pelo cliente: ~25.0 segundos para percorrer as 8 etapas com locução e extinção
          const totalDuration = 25.0;
          const pixelsPerSec = scrollDist / totalDuration;
          const step = pixelsPerSec * dt;

          window.scrollBy({ top: step, behavior: 'auto' });
        }
      }

      autoPlayRafRef.current = requestAnimationFrame(loop);
    };

    autoPlayRafRef.current = requestAnimationFrame(loop);

    return () => {
      if (autoPlayRafRef.current) {
        cancelAnimationFrame(autoPlayRafRef.current);
        autoPlayRafRef.current = null;
      }
    };
  }, [isPlaying]);

  // Interrupção inteligente por rolagem manual (mouse wheel ou touchmove na tela)
  useEffect(() => {
    if (!isPlaying) return;

    const handleUserInterrupt = () => {
      setIsPlaying(false);
      setShowScrollPromptArrows(true);
    };

    window.addEventListener('wheel', handleUserInterrupt, { passive: true });
    window.addEventListener('touchmove', handleUserInterrupt, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleUserInterrupt);
      window.removeEventListener('touchmove', handleUserInterrupt);
    };
  }, [isPlaying]);



  // Efeito do cronômetro da tela de alarme: decrementa segundo a segundo (60s, 59s, 58s... 0s)
  // e faz o cronômetro funcionar em tempo real na tela vermelha da central 3D
  useEffect(() => {
    if (simStage !== 'FIRE_ALARM') return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsManualCountdown(false);
          // Zerou a contagem regressiva -> Agora sim despeja o saponificante!
          setSimStage('SUPPRESSION');
          setTelemetry((t) => ({
            ...t,
            temp: 140,
            systemStatus: 'COMBATE ATIVO',
            countdown: 0,
          }));
          setTimeout(() => {
            setSimStage('EXTINGUISHED');
            setTelemetry((t) => ({
              ...t,
              temp: 38,
              systemStatus: 'INCÊNDIO EXTINTO',
              countdown: 0,
            }));
          }, 3500);
          return 0;
        }
        const nextVal = prev - 1;
        setTelemetry((t) => ({
          ...t,
          countdown: nextVal,
        }));
        return nextVal;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [simStage]);

  // --- RESET SCENE ACTION ---
  const handleResetScene = useCallback(() => {
    setIsPlaying(false);
    manualOverrideRef.current = false;
    setManualOverride(false);
    setIsManualCountdown(false);
    setSimStage('STANDBY');
    setCountdown(60);
    setTelemetry({
      temp: 180,
      gasStatus: 'ABERTO',
      exhaustStatus: 'LIGADO',
      systemStatus: 'PRONTIDÃO',
      countdown: 60,
    });
    if (manualPullLeverRef.current) {
      manualPullLeverRef.current.rotation.x = 0;
    }
    if (foamBlanketMeshRef.current) {
      foamBlanketMeshRef.current.scale.set(0.001, 0.001, 0.001);
      foamBlanketMeshRef.current.visible = false;
    }
  }, []);

  // Update canvas texture on stage change
  useEffect(() => {
    updateLcdScreenTexture();
  }, [simStage, countdown, updateLcdScreenTexture]);

  // --- SCROLLYTELLING LISTENER (PINNED ROLAGEM CONTÍNUA COM FASES) ---
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollDist = containerRef.current.offsetHeight - window.innerHeight;
      if (scrollDist <= 0) return;

      const scrolled = -rect.top;
      const p = Math.min(1, Math.max(0, scrolled / scrollDist));
      scrollProgressRef.current = p;
      setScrollProgress(p);

      // Dispara o pop-up de boas-vindas na primeira vez que a seção 3D entrar em visão
      if (!hasShownEntryModalRef.current && rect.top <= window.innerHeight * 0.65 && rect.bottom >= window.innerHeight * 0.3) {
        hasShownEntryModalRef.current = true;
        setShowEntryModal(true);
      }

      // Ao avançar na simulação (p >= 0.15), oculta as setas indicadoras de scroll
      if (p >= 0.15) {
        setShowScrollPromptArrows(false);
      }
      // Se voltar ao início em modo manual, reativa as setas para continuar orientando
      if (p <= 0.05 && !isPlaying) {
        setShowScrollPromptArrows(true);
      }

      // Se a contagem regressiva manual da botoeira estiver em andamento, não sobrescrever por rolagem
      if (manualOverrideRef.current && isManualCountdown) return;

      // Se o usuário rolou de volta para o topo da simulação, reseta o override manual
      if (manualOverrideRef.current && p <= 0.05) {
        manualOverrideRef.current = false;
        setManualOverride(false);
        setIsManualCountdown(false);
      }

      // Mapeamento dos 8 Zooms Cinematográficos no Incêndio Real
      if (activeScenarioRef.current === 'real_fire') {
        let zoomIdx = 0;
        if (p < 0.125) {
          zoomIdx = 0;
          setSimStage('STANDBY');
          setTelemetry({
            temp: 180,
            gasStatus: 'ABERTO',
            exhaustStatus: 'LIGADO',
            systemStatus: 'PRONTIDÃO',
            countdown: 60,
          });
        } else if (p < 0.250) {
          zoomIdx = 1;
          setSimStage('HEATING'); // ETAPA 2: Início do fogo
          const t = Math.round(180 + ((p - 0.125) / 0.125) * 160);
          setTelemetry({
            temp: t,
            gasStatus: 'ABERTO',
            exhaustStatus: 'LIGADO',
            systemStatus: 'AQUECIMENTO',
            countdown: 60,
          });
        } else if (p < 0.375) {
          zoomIdx = 2;
          setSimStage('FIRE_ALARM'); // ETAPA 3: Sensor 145°C
          setCountdown(55);
          setTelemetry({
            temp: 145,
            gasStatus: 'ABERTO',
            exhaustStatus: 'LIGADO',
            systemStatus: 'ALERTA DE FOGO',
            countdown: 55,
          });
        } else if (p < 0.500) {
          zoomIdx = 3;
          setSimStage('FIRE_ALARM'); // ETAPA 4: Damper fecha no duto
          setCountdown(45);
          setTelemetry({
            temp: 340,
            gasStatus: 'ABERTO',
            exhaustStatus: 'INTERTRAVADO',
            systemStatus: 'ALERTA DE FOGO',
            countdown: 45,
          });
        } else if (p < 0.625) {
          zoomIdx = 4;
          setSimStage('FIRE_ALARM'); // ETAPA 5: Corte de gás GN/GLP
          setCountdown(35);
          setTelemetry({
            temp: 360,
            gasStatus: 'CORTADO',
            exhaustStatus: 'INTERTRAVADO',
            systemStatus: 'ALERTA DE FOGO',
            countdown: 35,
          });
          if (!hasPlayedGasCutoffRef.current && !isMuted) {
            hasPlayedGasCutoffRef.current = true;
            soundEffects.playGasCutoff();
          }
        } else if (p < 0.750) {
          zoomIdx = 5;
          setSimStage('FIRE_ALARM'); // ETAPA 6: Quadro elétrico intertravado
          setCountdown(20);
          setTelemetry({
            temp: 375,
            gasStatus: 'CORTADO',
            exhaustStatus: 'INTERTRAVADO',
            systemStatus: 'ALERTA DE FOGO',
            countdown: 20,
          });
        } else if (p < 0.875) {
          zoomIdx = 6;
          setSimStage('FIRE_ALARM'); // ETAPA 7: Central IHM em alarme
          const cDown = Math.max(1, Math.round(16 - ((p - 0.750) / 0.125) * 15));
          setCountdown(cDown);
          setTelemetry({
            temp: 380,
            gasStatus: 'CORTADO',
            exhaustStatus: 'INTERTRAVADO',
            systemStatus: 'ALERTA DE FOGO',
            countdown: cDown,
          });
          if (!hasPlayedAlarmAudioRef.current && !isMuted) {
            hasPlayedAlarmAudioRef.current = true;
            startOfficialAlarmAudioCycle();
          }
        } else {
          zoomIdx = 7;
          setSimStage('EXTINGUISHED'); // ETAPA 8: Extinção com saponificante e CO2
          setCountdown(0);
          setTelemetry({
            temp: 38,
            gasStatus: 'CORTADO',
            exhaustStatus: 'INTERTRAVADO',
            systemStatus: 'INCÊNDIO EXTINTO',
            countdown: 0,
          });
          stopAllAudioCycles();
        }

        setActiveZoomIndex(zoomIdx);
        const stop = CINEMATIC_ZOOM_STOPS[zoomIdx];
        setCinematicBadge({
          title: stop.badgeTitle,
          desc: stop.badgeDesc,
          iconType: stop.icon,
        });

        // Interpola a câmera suavemente conforme a etapa cinematográfica
        if (activeCameraView === 'geral') {
          const isMobile = window.innerWidth < 768;
          const pos = isMobile ? stop.camPosMobile : stop.camPos;
          const look = isMobile ? stop.camLookMobile : stop.camLook;
          targetCamPos.current.set(pos[0], pos[1], pos[2]);
          targetCamLook.current.set(look[0], look[1], look[2]);
        }

        // Reseta flags de áudio quando voltar pro início da rolagem
        if (p < 0.20) {
          hasPlayedGasCutoffRef.current = false;
          hasPlayedAlarmAudioRef.current = false;
          stopAllAudioCycles();
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isManualCountdown]);

  // Camera Quick Jump
  const setCameraView = (view: 'geral' | 'central' | 'fritadeira' | 'botoeira') => {
    setActiveCameraView(view);
    const isMobile = window.innerWidth < 768;
    if (view === 'geral') {
      if (isMobile) {
        // Zoom reduzido em 25%-30% no celular: enquadra coifa, central, cilindros e botoeira
        targetCamPos.current.set(0.5, 2.1, 7.0);
        targetCamLook.current.set(0.5, 1.3, 0);
      } else {
        targetCamPos.current.set(0, 2.2, 4.4);
        targetCamLook.current.set(0, 1.4, 0);
      }
    } else if (view === 'central') {
      if (isMobile) {
        targetCamPos.current.set(1.9, 1.85, 1.6);
        targetCamLook.current.set(2.1, 1.8, 0.15);
      } else {
        targetCamPos.current.set(1.9, 1.85, 1.5);
        targetCamLook.current.set(2.1, 1.8, 0.15);
      }
    } else if (view === 'fritadeira') {
      if (isMobile) {
        targetCamPos.current.set(-0.2, 1.4, 2.6);
        targetCamLook.current.set(-0.2, 1.0, 0);
      } else {
        targetCamPos.current.set(-0.2, 1.4, 2.2);
        targetCamLook.current.set(-0.2, 1.0, 0);
      }
    } else if (view === 'botoeira') {
      if (isMobile) {
        targetCamPos.current.set(1.4, 1.45, 1.6);
        targetCamLook.current.set(1.45, 1.4, 0.05);
      } else {
        targetCamPos.current.set(1.4, 1.45, 1.3);
        targetCamLook.current.set(1.45, 1.4, 0.05);
      }
    }
  };

  // --- THREE.JS INITIALIZATION & SCENE SETUP ---
  useEffect(() => {
    if (!canvasRef.current || !mountRef.current) return;

    const width = mountRef.current.clientWidth || window.innerWidth;
    const height = mountRef.current.clientHeight || window.innerHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x1a202c);
    // Cozinha clara sem névoa escura densa para visualização cristalina do inox e equipamentos
    scene.fog = null;

    // 2. Camera com enquadramento responsivo para Mobile e Desktop (zoom 25-30% mais aberto no celular)
    const isMobile = width < 768;
    const camera = new THREE.PerspectiveCamera(isMobile ? 68 : 45, width / height, 0.1, 100);
    if (isMobile) {
      camera.position.set(0.5, 2.1, 7.0);
      targetCamPos.current.set(0.5, 2.1, 7.0);
      targetCamLook.current.set(0.5, 1.3, 0);
    } else {
      camera.position.set(0, 2.2, 4.4);
      targetCamPos.current.set(0, 2.2, 4.4);
      targetCamLook.current.set(0, 1.4, 0);
    }
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.domElement.style.touchAction = 'pan-y';
    rendererRef.current = renderer;

    // 4. OrbitControls (Ativado SOMENTE em Desktop; no Mobile fica desativado para garantir scroll nativo suave)
    let controls: OrbitControls | null = null;
    if (!isMobile) {
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false; // NEVER trap page wheel scroll
      controls.enablePan = false;
      controls.maxPolarAngle = Math.PI / 2 + 0.05;
      controls.target.set(0, 1.4, 0);
      controlsRef.current = controls;
    } else {
      // Em celulares: SEM OrbitControls no canvas.
      // O navegador mantém 100% o controle nativo da rolagem vertical suave ao passar o dedo sobre a tela.
      controlsRef.current = null;
    }

    // 5. Lighting (Iluminação de Cozinha Industrial Clara com Destaque Especular para Inox)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(3.5, 6, 4);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    scene.add(dirLight);

    // Calhas de LED industriais brilhantes de teto (iluminam bancada, coifa e central gerando brilho de espelho)
    const ceilingTroffer1 = new THREE.DirectionalLight(0xffffff, 1.6);
    ceilingTroffer1.position.set(-1.2, 5.0, 1.5);
    scene.add(ceilingTroffer1);

    const ceilingTroffer2 = new THREE.DirectionalLight(0xffffff, 1.6);
    ceilingTroffer2.position.set(1.5, 5.0, 1.5);
    scene.add(ceilingTroffer2);

    // Luz frontal suave de preenchimento para ambiente limpo e claro
    const frontFill = new THREE.DirectionalLight(0xf8fafc, 1.3);
    frontFill.position.set(0, 3.2, 5.5);
    scene.add(frontFill);

    // Spot Light under Hood
    const hoodSpot = new THREE.SpotLight(0xfff7ed, 3.4, 7, Math.PI / 3, 0.25);
    hoodSpot.position.set(0, 2.7, 0);
    hoodSpot.target.position.set(0, 0.9, 0);
    scene.add(hoodSpot);
    scene.add(hoodSpot.target);

    // Dynamic Fire Point Light
    const fireLight = new THREE.PointLight(0xff5500, 0, 5);
    fireLight.position.set(-0.35, 1.2, 0.1);
    scene.add(fireLight);
    fireLightRef.current = fireLight;

    // Central Red Strobe Light
    const strobeLight = new THREE.PointLight(0xff0000, 0, 8);
    strobeLight.position.set(2.1, 2.25, 0.2);
    scene.add(strobeLight);
    centralStrobeLightRef.current = strobeLight;

    // --- MATERIALS (INOX CROMADO ESPELHADO PBR ULTRARREALISTA & COZINHA CLARA) ---
    const matStainlessSteel = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.98,
      roughness: 0.08,
    });

    const matWhiteTile = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.22,
      metalness: 0.08,
    });

    const matFloor = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.35,
      metalness: 0.20,
    });

    // 6. Room Environment
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), matFloor);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(14, 8), matWhiteTile);
    backWall.position.set(0, 4, -1.2);
    backWall.receiveShadow = true;
    scene.add(backWall);

    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(14, 8), matWhiteTile);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-4.5, 4, 0);
    scene.add(leftWall);

    // 7. Kitchen Cooking Counter & Appliances (Inox Cromado)
    const counterGroup = new THREE.Group();
    scene.add(counterGroup);

    const counterBody = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 0.9, 1.0),
      matStainlessSteel
    );
    counterBody.position.set(0, 0.45, 0);
    counterBody.castShadow = true;
    counterBody.receiveShadow = true;
    counterGroup.add(counterBody);

    // Industrial Fryer
    const fryerGroup = new THREE.Group();
    fryerGroup.position.set(-0.55, 0.9, 0);
    counterGroup.add(fryerGroup);
    fryerGroupRef.current = fryerGroup;

    const fryerRim = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, 0.12, 0.75),
      matStainlessSteel
    );
    fryerRim.position.set(0, 0.06, 0);
    fryerGroup.add(fryerRim);

    // Hot Oil Surface
    const oilMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.72, 0.02, 0.62),
      new THREE.MeshStandardMaterial({ color: 0x92400e, roughness: 0.1, metalness: 0.3 })
    );
    oilMesh.position.set(0, 0.11, 0);
    fryerGroup.add(oilMesh);

    // Fryer Handles
    const basketHandleMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5 });
    const handle1 = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.28), basketHandleMat);
    handle1.position.set(-0.16, 0.22, 0.34);
    handle1.rotation.x = Math.PI / 3;
    fryerGroup.add(handle1);

    const handle2 = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.28), basketHandleMat);
    handle2.position.set(0.16, 0.22, 0.34);
    handle2.rotation.x = Math.PI / 3;
    fryerGroup.add(handle2);

    // Cooktop Griddle & Fogão Industrial
    const stoveGroup = new THREE.Group();
    stoveGroup.position.set(0.65, 0.9, 0);
    counterGroup.add(stoveGroup);

    const griddlePlate = new THREE.Mesh(
      new THREE.BoxGeometry(0.95, 0.06, 0.75),
      matStainlessSteel
    );
    griddlePlate.position.set(0, 0.03, 0);
    stoveGroup.add(griddlePlate);

    // Trempe de ferro fundido do queimador de gás
    const burnerGrate = new THREE.Mesh(
      new THREE.TorusGeometry(0.18, 0.014, 8, 24),
      new THREE.MeshStandardMaterial({ color: 0x1f242d, roughness: 0.8, metalness: 0.2 })
    );
    burnerGrate.rotation.x = Math.PI / 2;
    burnerGrate.position.set(0, 0.065, 0);
    stoveGroup.add(burnerGrate);

    // Panela em Inox Cromado Real Espelhado
    const panGroup = new THREE.Group();
    panGroup.position.set(0, 0.08, 0);
    stoveGroup.add(panGroup);
    stovePanGroupRef.current = panGroup;

    const panBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.20, 0.18, 0.16, 32),
      matStainlessSteel
    );
    panBody.position.set(0, 0.08, 0);
    panBody.castShadow = true;
    panGroup.add(panBody);

    // Fundo sólido da panela para fechar e barrar qualquer luz ou chama por cima
    const panBottom = new THREE.Mesh(
      new THREE.CylinderGeometry(0.182, 0.182, 0.015, 32),
      matStainlessSteel
    );
    panBottom.position.set(0, 0.005, 0);
    panGroup.add(panBottom);

    const panLid = new THREE.Mesh(
      new THREE.CylinderGeometry(0.205, 0.205, 0.02, 32),
      matStainlessSteel
    );
    panLid.position.set(0, 0.17, 0);
    panGroup.add(panLid);

    const panKnob = new THREE.Mesh(
      new THREE.SphereGeometry(0.022, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4 })
    );
    panKnob.position.set(0, 0.19, 0);
    panGroup.add(panKnob);

    const panHandleGeo = new THREE.TorusGeometry(0.035, 0.007, 8, 16, Math.PI);
    const panHandleL = new THREE.Mesh(panHandleGeo, matStainlessSteel);
    panHandleL.rotation.y = Math.PI / 2;
    panHandleL.position.set(-0.21, 0.12, 0);
    panGroup.add(panHandleL);

    const panHandleR = new THREE.Mesh(panHandleGeo, matStainlessSteel);
    panHandleR.rotation.y = -Math.PI / 2;
    panHandleR.position.set(0.21, 0.12, 0);
    panGroup.add(panHandleR);

    // Anel de Chamas Azuis (GN/GLP estritamente SOB a panela)
    const blueFlameGroup = new THREE.Group();
    blueFlameGroup.position.set(0, 0.040, 0);
    stoveGroup.add(blueFlameGroup);
    blueFlameGroupRef.current = blueFlameGroup;

    // Cones pequenos apontados estritamente para cima (raio 0.085 fica 100% sob o fundo da panela de raio 0.18)
    const blueConeGeo = new THREE.ConeGeometry(0.007, 0.018, 8);
    const blueMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff, transparent: true, opacity: 0.95 });
    const flameRadius = 0.085;
    for (let b = 0; b < 16; b++) {
      const angle = (b / 16) * Math.PI * 2;
      const jet = new THREE.Mesh(blueConeGeo, blueMat);
      jet.position.set(Math.cos(angle) * flameRadius, 0.010, Math.sin(angle) * flameRadius);
      jet.rotation.x = 0;
      jet.rotation.z = 0;
      blueFlameGroup.add(jet);
    }

    const blueFlameLight = new THREE.PointLight(0x00c8ff, 0.75, 0.7);
    blueFlameLight.position.set(0, 0.025, 0);
    blueFlameGroup.add(blueFlameLight);
    blueFlameLightRef.current = blueFlameLight;

    // 8. Industrial Exhaust Hood (Coifa com Duto e Pleno NBR 14518 em Inox Cromado)
    const hoodGroup = new THREE.Group();
    hoodGroup.position.set(0, 2.3, 0);
    scene.add(hoodGroup);

    const hoodMesh = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.6, 1.2), matStainlessSteel);
    hoodMesh.castShadow = true;
    hoodGroup.add(hoodMesh);

    // Baffle Filters
    const filterMat = new THREE.MeshStandardMaterial({ color: 0x999999, metalness: 0.9, roughness: 0.3 });
    for (let f = -1.0; f <= 1.0; f += 0.5) {
      const filter = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.35, 0.04), filterMat);
      filter.position.set(f, -0.15, 0);
      filter.rotation.x = -Math.PI / 6;
      hoodGroup.add(filter);
    }

    // Exhaust Duct
    const ductMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 1.5, 32),
      matStainlessSteel
    );
    ductMesh.position.set(0, 1.0, 0);
    hoodGroup.add(ductMesh);

    // Damper Corta-Fogo Motorizado Automático no Duto (NBR 14518)
    const damperHousing = new THREE.Mesh(
      new THREE.BoxGeometry(0.64, 0.18, 0.64),
      new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.85, roughness: 0.25 })
    );
    damperHousing.position.set(0, 0.55, 0);
    hoodGroup.add(damperHousing);

    // Lâmina Móvel Interna do Damper (fecha a 90° para isolar o duto)
    const damperFlap = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.018, 0.48),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 })
    );
    damperFlap.position.set(0, 0.55, 0);
    damperFlap.rotation.x = Math.PI / 2; // Aberto em standby (vertical / fluxo livre)
    hoodGroup.add(damperFlap);
    damperFlapMeshRef.current = damperFlap;

    const damperMotor = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.14, 0.14),
      new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4 })
    );
    damperMotor.position.set(0.36, 0.55, 0);
    hoodGroup.add(damperMotor);

    // Solenoide de liberação rápida do Damper Corta-Fogo
    const damperSolenoide = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 0.12, 16),
      new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.85, roughness: 0.25 })
    );
    damperSolenoide.rotation.z = Math.PI / 2;
    damperSolenoide.position.set(0.36, 0.64, 0);
    hoodGroup.add(damperSolenoide);

    // Sensor Blindado Térmico 145°C instalado na Coifa (NBR 14518)
    const sensorGroup = new THREE.Group();
    sensorGroup.position.set(-0.55, -0.22, 0.08);
    hoodGroup.add(sensorGroup);
    shieldedSensorGroupRef.current = sensorGroup;
    sensorGroup.userData = { interactiveType: 'sensor', name: 'Sensor Blindado Térmico 145°C (NBR 14518)' };

    const sensorBracket = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.06, 0.04),
      matStainlessSteel
    );
    sensorGroup.add(sensorBracket);

    const sensorTube = new THREE.Mesh(
      new THREE.CylinderGeometry(0.007, 0.007, 0.12, 16),
      matStainlessSteel
    );
    sensorTube.position.set(0, -0.06, 0);
    sensorGroup.add(sensorTube);

    const sensorBulb = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.015, 0.05, 16),
      new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        metalness: 0.9,
        roughness: 0.2,
        emissive: 0x000000,
        emissiveIntensity: 0
      })
    );
    sensorBulb.position.set(0, -0.13, 0);
    sensorGroup.add(sensorBulb);
    sensorGlowMeshRef.current = sensorBulb;

    const sensorGuard = new THREE.Mesh(
      new THREE.TorusGeometry(0.022, 0.004, 8, 16),
      matStainlessSteel
    );
    sensorGuard.rotation.x = Math.PI / 2;
    sensorGuard.position.set(0, -0.13, 0);
    sensorGroup.add(sensorGuard);

    // Quadro Elétrico Industrial de Intertravamento na Parede
    const elecPanel = new THREE.Group();
    elecPanel.position.set(-2.6, 2.0, -0.58);
    scene.add(elecPanel);
    electricalPanelGroupRef.current = elecPanel;
    elecPanel.userData = { interactiveType: 'quadro', name: 'Quadro Elétrico de Intertravamento' };

    const panelBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.65, 0.12),
      new THREE.MeshStandardMaterial({ color: 0x1e242d, metalness: 0.8, roughness: 0.35 })
    );
    panelBox.castShadow = true;
    elecPanel.add(panelBox);

    const panelDoor = new THREE.Mesh(
      new THREE.BoxGeometry(0.45, 0.62, 0.02),
      new THREE.MeshStandardMaterial({ color: 0x28303d, metalness: 0.85, roughness: 0.3 })
    );
    panelDoor.position.set(0, 0, 0.065);
    elecPanel.add(panelDoor);

    const panelLabel = new THREE.Mesh(
      new THREE.PlaneGeometry(0.34, 0.08),
      new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.85, roughness: 0.25 })
    );
    panelLabel.position.set(0, 0.22, 0.078);
    elecPanel.add(panelLabel);

    const ledGeo = new THREE.SphereGeometry(0.022, 16, 16);

    // LED Exaustão (Verde)
    const ledExhaust = new THREE.Mesh(
      ledGeo,
      new THREE.MeshStandardMaterial({
        color: 0x22c55e,
        emissive: 0x22c55e,
        emissiveIntensity: 1.0,
        roughness: 0.1
      })
    );
    ledExhaust.position.set(-0.12, 0.05, 0.078);
    elecPanel.add(ledExhaust);
    panelLedExhaustRef.current = ledExhaust;

    // LED Fritadeira (Verde)
    const ledFryer = new THREE.Mesh(
      ledGeo,
      new THREE.MeshStandardMaterial({
        color: 0x22c55e,
        emissive: 0x22c55e,
        emissiveIntensity: 1.0,
        roughness: 0.1
      })
    );
    ledFryer.position.set(0, 0.05, 0.078);
    elecPanel.add(ledFryer);
    panelLedFryerRef.current = ledFryer;

    // LED Falha / Intertravamento (Âmbar)
    const ledAmber = new THREE.Mesh(
      ledGeo,
      new THREE.MeshStandardMaterial({
        color: 0x451a03,
        emissive: 0x000000,
        emissiveIntensity: 0.0,
        roughness: 0.1
      })
    );
    ledAmber.position.set(0.12, 0.05, 0.078);
    elecPanel.add(ledAmber);
    panelLedAmberRef.current = ledAmber;

    // Painel de Inox Escovado (Backsplash industrial atrás da bancada)
    const backsplashMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      metalness: 0.98,
      roughness: 0.09,
    });
    const backsplash = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 1.4), backsplashMat);
    backsplash.position.set(0, 1.6, -0.6);
    scene.add(backsplash);

    // Barra de utensílios em inox
    const utensilBar = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 2.4, 16), matStainlessSteel);
    utensilBar.rotation.z = Math.PI / 2;
    utensilBar.position.set(0, 1.95, -0.58);
    scene.add(utensilBar);

    // Saponificant Piping & Specialized Nozzles
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.8, roughness: 0.3 });
    const nozzleMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 });

    const mainPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 2.4), pipeMat);
    mainPipe.rotation.z = Math.PI / 2;
    mainPipe.position.set(0, -0.28, -0.2);
    hoodGroup.add(mainPipe);

    const nozzlePositions = [
      [-0.7, -0.32, 0.0],
      [-0.35, -0.32, 0.0],
      [0.45, -0.32, 0.0],
      [0.85, -0.32, 0.0],
    ];

    nozzlePositions.forEach(([nx, ny, nz]) => {
      const noz = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.06, 16), nozzleMat);
      noz.position.set(nx, ny, nz);
      noz.rotation.x = Math.PI;
      hoodGroup.add(noz);
    });

    // 9. CENTRAL OUTFIRE 3D COM ARTE OFICIAL (PDF TAMPA CENTRAL MODERNA)
    const centralGroup = new THREE.Group();
    centralGroup.position.set(2.1, 1.8, 0.15);
    centralGroup.rotation.y = -0.28;
    scene.add(centralGroup);
    centralGroupRef.current = centralGroup;
    centralGroup.userData = { interactiveType: 'central', name: 'Central Outfire VTS' };

    // Load authentic front face from PDF conversion
    const textureLoader = new THREE.TextureLoader();
    const frontCoverTexture = textureLoader.load('/assets/tampa-central-moderna.png');
    frontCoverTexture.colorSpace = THREE.SRGBColorSpace;

    // Standby Screen normalizada: 3 luzes verdes em cima e 4 botões azuis embaixo
    const standbyCanvas = createNormalizedIhmScreenCanvas();
    const standbyScreenTexture = new THREE.CanvasTexture(standbyCanvas);
    standbyScreenTexture.colorSpace = THREE.SRGBColorSpace;
    standbyScreenTextureRef.current = standbyScreenTexture;

    // Dynamic Alarm Screen Canvas Texture (1024x768 com cronômetro ativo em tempo real)
    const alarmCanvas = document.createElement('canvas');
    alarmCanvas.width = 1024;
    alarmCanvas.height = 768;
    drawAlarmScreenToCanvas(alarmCanvas, countdownRef.current);
    const alarmScreenTexture = new THREE.CanvasTexture(alarmCanvas);
    alarmScreenTexture.colorSpace = THREE.SRGBColorSpace;
    centralScreenCanvasRef.current = alarmCanvas;
    centralScreenTextureRef.current = alarmScreenTexture;
    alarmScreenTextureRef.current = alarmScreenTexture;

    const matCabinetSteel = new THREE.MeshStandardMaterial({
      color: 0x14161a,
      roughness: 0.45,
      metalness: 0.8,
    });

    const matModernFrontCover = new THREE.MeshStandardMaterial({
      map: frontCoverTexture,
      roughness: 0.35,
      metalness: 0.25,
    });

    const centralMaterials = [
      matCabinetSteel,      // right
      matCabinetSteel,      // left
      matCabinetSteel,      // top
      matCabinetSteel,      // bottom
      matModernFrontCover,  // FRONT: Authentic Artwork from PDF!
      matCabinetSteel       // back
    ];

    const centralCabinet = new THREE.Mesh(
      new THREE.BoxGeometry(0.72, 0.52, 0.22),
      centralMaterials
    );
    centralCabinet.castShadow = true;
    centralGroup.add(centralCabinet);

    // Front Touchscreen IHM Display (2.8" QVGA centralizado no centro da tampa)
    const lcdMat = new THREE.MeshStandardMaterial({
      map: standbyScreenTexture,
      roughness: 0.15,
      metalness: 0.05,
      emissive: 0xffffff,
      emissiveMap: standbyScreenTexture,
      emissiveIntensity: 0.95, // Backlight brilhante para ser 100% visível na cena
      depthTest: true,
      depthWrite: true,
    });
    lcdScreenMatRef.current = lcdMat;

    // Tela de 2.8" exatamente no centro da tampa (X = 0, Y = 0)
    // Dimensões proporcionais ideais para visualização no 3D: 0.20 de largura x 0.15 de altura
    const lcdScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.20, 0.15), lcdMat);
    lcdScreen.position.set(0, 0.0, 0.116);
    lcdScreen.renderOrder = 10;
    lcdScreen.userData = { interactiveType: 'central' };
    centralGroup.add(lcdScreen);

    // Moldura metálica (Bezel vazado) posicionada ao redor da tela (zero colisão)
    const screenBezelMat = new THREE.MeshStandardMaterial({
      color: 0x181a20,
      metalness: 0.9,
      roughness: 0.35,
    });
    const lcdFrameGroup = new THREE.Group();
    const lTop = new THREE.Mesh(new THREE.BoxGeometry(0.222, 0.012, 0.006), screenBezelMat);
    lTop.position.set(0, 0.081, 0.113);
    const lBottom = new THREE.Mesh(new THREE.BoxGeometry(0.222, 0.012, 0.006), screenBezelMat);
    lBottom.position.set(0, -0.081, 0.113);
    const lLeft = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.150, 0.006), screenBezelMat);
    lLeft.position.set(-0.106, 0, 0.113);
    const lRight = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.150, 0.006), screenBezelMat);
    lRight.position.set(0.106, 0, 0.113);
    lcdFrameGroup.add(lTop, lBottom, lLeft, lRight);
    centralGroup.add(lcdFrameGroup);

    // 4 Parafusos de fixação nos cantos
    const screwMat = new THREE.MeshStandardMaterial({ color: 0xb0b3b8, metalness: 0.95, roughness: 0.2 });
    const screwGeo = new THREE.CylinderGeometry(0.004, 0.004, 0.005, 8);
    [
      [-0.098, 0.072],
      [0.098, 0.072],
      [-0.098, -0.072],
      [0.098, -0.072]
    ].forEach(([sx, sy]) => {
      const screw = new THREE.Mesh(screwGeo, screwMat);
      screw.rotation.x = Math.PI / 2;
      screw.position.set(sx, sy, 0.1155);
      centralGroup.add(screw);
    });

    // Luz dedicada focada na Central para realçar a tampa e a tela IHM
    const centralSpot = new THREE.SpotLight(0xfff6ea, 2.2, 5, Math.PI / 3, 0.3);
    centralSpot.position.set(2.4, 2.4, 1.6);
    centralSpot.target = centralGroup;
    scene.add(centralSpot);

    // Top Electrical Conduit to Ceiling
    const conduit = new THREE.Mesh(
      new THREE.CylinderGeometry(0.016, 0.016, 1.6, 16),
      matStainlessSteel
    );
    conduit.position.set(0, 1.05, 0);
    centralGroup.add(conduit);

    // Top Red Strobe Siren Beacon
    const sirenBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.045, 0.045, 0.03, 16),
      new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.8 })
    );
    sirenBase.position.set(0, 0.275, 0);
    centralGroup.add(sirenBase);

    const sirenCapMat = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      transparent: true,
      opacity: 0.85,
      roughness: 0.1,
    });
    const sirenCap = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.042, 0.065, 16), sirenCapMat);
    sirenCap.position.set(0, 0.32, 0);
    centralGroup.add(sirenCap);
    centralStrobeMeshRef.current = sirenCap;

    // Bottom Battery Shelf & Dual Pionero 12V Batteries
    const batShelf = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.02, 0.20), matCabinetSteel);
    batShelf.position.set(0, -0.32, 0);
    centralGroup.add(batShelf);

    const batMat = new THREE.MeshStandardMaterial({ color: 0x090a0c, roughness: 0.5 });
    const bat1 = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.15, 0.14), batMat);
    bat1.position.set(-0.16, -0.23, 0);
    centralGroup.add(bat1);

    const bat2 = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.15, 0.14), batMat);
    bat2.position.set(0.16, -0.23, 0);
    centralGroup.add(bat2);

    // 10. ACIONADOR MANUAL (BOTOEIRA 3D INTERATIVA)
    const manualGroup = new THREE.Group();
    manualGroup.position.set(1.45, 1.4, 0.08);
    scene.add(manualGroup);
    manualStationMeshRef.current = manualGroup;
    manualGroup.userData = { interactiveType: 'botoeira', name: 'Acionador Manual de Emergência' };

    const stationBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.24, 0.08),
      new THREE.MeshStandardMaterial({ color: 0xcc1111, roughness: 0.3, metalness: 0.3 })
    );
    stationBox.castShadow = true;
    manualGroup.add(stationBox);

    const glass = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.18, 0.015),
      new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.45, roughness: 0.1 })
    );
    glass.position.set(0, 0, 0.042);
    manualGroup.add(glass);

    const lever = new THREE.Mesh(
      new THREE.BoxGeometry(0.10, 0.06, 0.025),
      new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3 })
    );
    lever.position.set(0, -0.01, 0.048);
    manualGroup.add(lever);
    manualPullLeverRef.current = lever;

    // 11. CILINDRO DE SAPONIFICANTE CROMADO (INOX) AO LADO DA COIFA
    const sapCylinderGroup = new THREE.Group();
    sapCylinderGroup.position.set(-1.85, 1.1, -0.3);
    scene.add(sapCylinderGroup);
    sapCylinderGroup.userData = { interactiveType: 'saponificante', name: 'Cilindro Saponificante Classe K (Inox Cromado)' };

    const matChromeCylinder = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.99,
      roughness: 0.05,
    });

    const sapBody = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.82, 32), matChromeCylinder);
    sapBody.castShadow = true;
    sapCylinderGroup.add(sapBody);

    const sapCapTop = new THREE.Mesh(new THREE.SphereGeometry(0.13, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), matChromeCylinder);
    sapCapTop.position.set(0, 0.41, 0);
    sapCylinderGroup.add(sapCapTop);

    const sapCapBottom = new THREE.Mesh(new THREE.SphereGeometry(0.13, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), matChromeCylinder);
    sapCapBottom.position.set(0, -0.41, 0);
    sapCylinderGroup.add(sapCapBottom);

    const sapBracketMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8 });
    const sapBrk1 = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.04, 0.06), sapBracketMat);
    sapBrk1.position.set(0, 0.22, -0.09);
    sapCylinderGroup.add(sapBrk1);

    const sapBrk2 = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.04, 0.06), sapBracketMat);
    sapBrk2.position.set(0, -0.22, -0.09);
    sapCylinderGroup.add(sapBrk2);

    const gaugeRing = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.02, 16), new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.85 }));
    gaugeRing.rotation.x = Math.PI / 2;
    gaugeRing.position.set(0, 0.55, 0.08);
    sapCylinderGroup.add(gaugeRing);

    const gaugeFace = new THREE.Mesh(new THREE.CircleGeometry(0.028, 16), new THREE.MeshBasicMaterial({ color: 0x22c55e }));
    gaugeFace.position.set(0, 0.55, 0.091);
    sapCylinderGroup.add(gaugeFace);

    const sapValve = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.12, 16), new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9 }));
    sapValve.position.set(0, 0.52, 0);
    sapCylinderGroup.add(sapValve);

    const sapStripe = new THREE.Mesh(new THREE.CylinderGeometry(0.132, 0.132, 0.12, 32), new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.85, roughness: 0.2 }));
    sapStripe.position.set(0, 0.05, 0);
    sapCylinderGroup.add(sapStripe);

    // Selo Oficial Outfire no Cilindro de Saponificante Classe K
    const sapLabelTexture = createCylinderLabelTexture('saponificante');
    const sapLabelMat = new THREE.MeshStandardMaterial({
      map: sapLabelTexture,
      roughness: 0.25,
      metalness: 0.35,
    });
    const sapLabelMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.132, 0.132, 0.36, 32, 1, true, -Math.PI / 1.7, Math.PI * 1.18),
      sapLabelMat
    );
    sapLabelMesh.position.set(0, -0.06, 0);
    sapCylinderGroup.add(sapLabelMesh);

    // 12. CILINDRO DE CO2 VERMELHO NO FINAL DO DUTO
    const co2CylinderGroup = new THREE.Group();
    co2CylinderGroup.position.set(0.85, 2.7, -0.35);
    scene.add(co2CylinderGroup);
    co2CylinderGroup.userData = { interactiveType: 'co2', name: 'Cilindro de CO2 (Injeção no Duto)' };

    const matRedCylinder = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      metalness: 0.65,
      roughness: 0.28,
    });

    const co2Body = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.95, 32), matRedCylinder);
    co2Body.castShadow = true;
    co2CylinderGroup.add(co2Body);

    const co2CapTop = new THREE.Mesh(new THREE.SphereGeometry(0.09, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), matRedCylinder);
    co2CapTop.position.set(0, 0.475, 0);
    co2CylinderGroup.add(co2CapTop);

    const co2CapBottom = new THREE.Mesh(new THREE.SphereGeometry(0.09, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), matRedCylinder);
    co2CapBottom.position.set(0, -0.475, 0);
    co2CylinderGroup.add(co2CapBottom);

    const co2Valve = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.14, 16), new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.85 }));
    co2Valve.position.set(0, 0.6, 0);
    co2CylinderGroup.add(co2Valve);

    const co2Pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.85, 16), matStainlessSteel);
    co2Pipe.rotation.z = Math.PI / 2;
    co2Pipe.position.set(-0.42, 0.66, 0.35);
    co2CylinderGroup.add(co2Pipe);

    // Selo Oficial Outfire no Cilindro de CO2 Alta Pressão
    const co2LabelTexture = createCylinderLabelTexture('co2');
    const co2LabelMat = new THREE.MeshStandardMaterial({
      map: co2LabelTexture,
      roughness: 0.25,
      metalness: 0.3,
    });
    const co2LabelMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.092, 0.092, 0.42, 32, 1, true, -Math.PI / 1.7, Math.PI * 1.18),
      co2LabelMat
    );
    co2LabelMesh.position.set(0, -0.02, 0);
    co2CylinderGroup.add(co2LabelMesh);

    // 13. PERSONAGEM CÔMICO: LAVADOR DE PRATOS 3D COM PILHA GIGANTE (DISPARO ACIDENTAL)
    const dwGroup = new THREE.Group();
    dwGroup.position.set(2.8, 0, 0.3);
    dwGroup.visible = false;
    scene.add(dwGroup);
    dishwasherGroupRef.current = dwGroup;

    const matChefCoat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 });
    const matDarkPants = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 });
    const matSkin = new THREE.MeshStandardMaterial({ color: 0xe0ac69, roughness: 0.7 });
    const matApron = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 });

    const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.05, 0.65, 12), matDarkPants);
    legL.position.set(-0.09, 0.325, 0);
    dwGroup.add(legL);

    const legR = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.05, 0.65, 12), matDarkPants);
    legR.position.set(0.09, 0.325, 0);
    dwGroup.add(legR);

    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.15, 0.55, 12), matChefCoat);
    torso.position.set(0, 0.925, 0);
    dwGroup.add(torso);

    const apron = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.5), matApron);
    apron.position.set(0, 0.82, 0.16);
    dwGroup.add(apron);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.10, 16, 16), matSkin);
    head.position.set(0, 1.32, 0);
    dwGroup.add(head);

    const chefHat = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.10, 0.16, 16), matChefCoat);
    chefHat.position.set(0, 1.45, 0);
    dwGroup.add(chefHat);

    const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.36, 8), matChefCoat);
    armL.rotation.x = -Math.PI / 3;
    armL.rotation.z = -Math.PI / 12;
    armL.position.set(-0.19, 0.98, 0.15);
    dwGroup.add(armL);

    const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.36, 8), matChefCoat);
    armR.rotation.x = -Math.PI / 3;
    armR.rotation.z = Math.PI / 12;
    armR.position.set(0.19, 0.98, 0.15);
    dwGroup.add(armR);

    // Pilha Gigante de 12 Pratos de Cerâmica Branca
    const platesGroup = new THREE.Group();
    platesGroup.position.set(0, 0.98, 0.32);
    dwGroup.add(platesGroup);
    platesStackGroupRef.current = platesGroup;

    const plateMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.1,
    });
    const plateGeo = new THREE.CylinderGeometry(0.15, 0.12, 0.022, 20);

    for (let i = 0; i < 11; i++) {
      const pl = new THREE.Mesh(plateGeo, plateMat);
      pl.position.set(
        Math.sin(i * 1.4) * 0.01,
        i * 0.026,
        Math.cos(i * 1.4) * 0.01
      );
      pl.rotation.z = (Math.random() - 0.5) * 0.06;
      platesGroup.add(pl);
    }

    // O prato do topo que cai em direção à alavanca da botoeira
    const fallingPlate = new THREE.Mesh(plateGeo, plateMat);
    fallingPlate.position.set(0, 11 * 0.026 + 0.02, 0);
    platesGroup.add(fallingPlate);
    fallingPlateMeshRef.current = fallingPlate;

    // 14. SAPONIFICANT FOAM BLANKET MESH
    const foamBlanket = new THREE.Mesh(
      new THREE.BoxGeometry(0.74, 0.08, 0.64),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.9, metalness: 0.05 })
    );
    foamBlanket.position.set(-0.55, 1.05, 0);
    foamBlanket.scale.set(0.001, 0.001, 0.001);
    foamBlanket.visible = false;
    scene.add(foamBlanket);
    foamBlanketMeshRef.current = foamBlanket;

    // 15. PARTICLE SYSTEMS
    // Fire
    const fireGroup = new THREE.Group();
    scene.add(fireGroup);
    fireParticlesGroupRef.current = fireGroup;

    const fireCount = 70;
    const fireGeo = new THREE.DodecahedronGeometry(0.08, 1);
    const fireMeshes: THREE.Mesh[] = [];

    for (let i = 0; i < fireCount; i++) {
      const p = new THREE.Mesh(
        fireGeo,
        new THREE.MeshBasicMaterial({ color: 0xff4500, transparent: true, opacity: 0.85 })
      );
      p.position.set(
        -0.55 + (Math.random() - 0.5) * 0.5,
        1.05 + Math.random() * 0.4,
        (Math.random() - 0.5) * 0.4
      );
      p.userData = {
        baseY: 1.05,
        speedY: 0.8 + Math.random() * 1.5,
        scale: 0.4 + Math.random() * 0.8,
      };
      fireGroup.add(p);
      fireMeshes.push(p);
    }

    // Smoke
    const smokeGroup = new THREE.Group();
    scene.add(smokeGroup);
    smokeParticlesGroupRef.current = smokeGroup;

    const smokeCount = 50;
    const smokeGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const smokeMeshes: THREE.Mesh[] = [];

    for (let i = 0; i < smokeCount; i++) {
      const sm = new THREE.Mesh(
        smokeGeo,
        new THREE.MeshBasicMaterial({ color: 0x1f242d, transparent: true, opacity: 0.4 })
      );
      sm.position.set(
        -0.55 + (Math.random() - 0.5) * 0.6,
        1.3 + Math.random() * 1.0,
        (Math.random() - 0.5) * 0.4
      );
      sm.userData = { speedY: 0.6 + Math.random() * 1.0, maxH: 2.2 };
      smokeGroup.add(sm);
      smokeMeshes.push(sm);
    }

    // Foam Spray
    const sprayGroup = new THREE.Group();
    scene.add(sprayGroup);
    foamSprayGroupRef.current = sprayGroup;

    const sprayCount = 80;
    const sprayGeo = new THREE.SphereGeometry(0.025, 8, 8);
    const sprayMeshes: THREE.Mesh[] = [];

    for (let i = 0; i < sprayCount; i++) {
      const sp = new THREE.Mesh(sprayGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 }));
      sp.position.set(-0.55, 1.9, 0);
      sp.userData = {
        origY: 1.98,
        speed: 3.5 + Math.random() * 2.0,
        spread: (Math.random() - 0.5) * 0.4,
      };
      sprayGroup.add(sp);
      sprayMeshes.push(sp);
    }

    // CO2 Fog
    const co2Group = new THREE.Group();
    scene.add(co2Group);
    co2FogGroupRef.current = co2Group;

    const co2Count = 35;
    const co2Geo = new THREE.SphereGeometry(0.16, 8, 8);
    const co2Meshes: THREE.Mesh[] = [];

    for (let i = 0; i < co2Count; i++) {
      const c = new THREE.Mesh(co2Geo, new THREE.MeshBasicMaterial({ color: 0xe2e8f0, transparent: true, opacity: 0.4 }));
      c.position.set((Math.random() - 0.5) * 0.4, 2.7 + Math.random() * 0.5, (Math.random() - 0.5) * 0.3);
      co2Group.add(c);
      co2Meshes.push(c);
    }

    // 16. RAYCASTER FOR 3D CLICK & HOVER
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([manualGroup, centralGroup, fryerGroup, sapCylinderGroup, co2CylinderGroup, elecPanel], true);

      if (intersects.length > 0) {
        let root: THREE.Object3D | null = intersects[0].object;
        while (root && !root.userData?.interactiveType && root.parent) {
          root = root.parent;
        }
        if (root && root.userData?.interactiveType) {
          renderer.domElement.style.cursor = 'pointer';
          setHoveredObjectName(root.userData.name);
          return;
        }
      }
      renderer.domElement.style.cursor = 'default';
      setHoveredObjectName(null);
    };

    const onPointerDown = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([manualGroup, centralGroup, fryerGroup, sapCylinderGroup, co2CylinderGroup, elecPanel], true);

      if (intersects.length > 0) {
        let root: THREE.Object3D | null = intersects[0].object;
        while (root && !root.userData?.interactiveType && root.parent) {
          root = root.parent;
        }
        if (root?.userData?.interactiveType === 'botoeira') {
          handleManualTrigger();
        } else if (root?.userData?.interactiveType === 'central') {
          // REGRA DE OURO: Clique direto na tela da Central 3D cancela o disparo!
          if (activeScenarioRef.current === 'accidental_discharge' && accidentalStepRef.current === 'alarm_waiting_click') {
            handleAbortDisparo();
          } else if (simStageRef.current === 'FIRE_ALARM') {
            handleAbortDisparo();
          } else {
            setCameraView('central');
          }
        } else if (root?.userData?.interactiveType === 'fritadeira') {
          setCameraView('fritadeira');
        }
      }
    };

    renderer.domElement.addEventListener('mousemove', onPointerMove);
    renderer.domElement.addEventListener('click', onPointerDown);

    // 14. RESIZE
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      const mobile = w < 768;
      cameraRef.current.aspect = w / h;
      cameraRef.current.fov = mobile ? 68 : 45;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 15. RENDER LOOP
    let animId: number;
    const clock = new THREE.Clock();

    const render = () => {
      animId = requestAnimationFrame(render);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth camera interpolation
      camera.position.lerp(targetCamPos.current, 0.05);
      if (controlsRef.current) {
        controlsRef.current.target.lerp(targetCamLook.current, 0.05);
        controlsRef.current.update();
      } else {
        camera.lookAt(targetCamLook.current);
      }

      const stage = simStageRef.current;
      const p = scrollProgressRef.current;

      // --- ANIMATION EFFECTS BASED ON STAGE / SCROLL ---
      if (stage === 'HEATING' || stage === 'FIRE_ALARM') {
        fireGroup.visible = true;
        smokeGroup.visible = true;
        foamSprayGroupRef.current!.visible = false;
        co2FogGroupRef.current!.visible = false;

        const intensityFactor = stage === 'FIRE_ALARM' ? 1.0 : Math.max(0.2, (p - 0.18) / 0.24);

        if (fireLightRef.current) {
          fireLightRef.current.intensity = (2.5 + Math.sin(time * 20) * 1.5) * intensityFactor;
          fireLightRef.current.color.setHex(Math.random() > 0.3 ? 0xff4500 : 0xffaa00);
        }

        fireMeshes.forEach((mesh, idx) => {
          mesh.visible = true;
          mesh.position.y += mesh.userData.speedY * delta;
          mesh.position.x += Math.sin(time * 10 + idx) * 0.006;
          const prog = (mesh.position.y - mesh.userData.baseY) / 1.0;
          mesh.scale.setScalar(Math.max(0.01, (1 - prog) * mesh.userData.scale * intensityFactor));
          (mesh.material as THREE.MeshBasicMaterial).opacity = 1 - prog;

          if (mesh.position.y > mesh.userData.baseY + 0.9) {
            mesh.position.y = mesh.userData.baseY;
            mesh.position.x = -0.55 + (Math.random() - 0.5) * 0.5;
            mesh.position.z = (Math.random() - 0.5) * 0.4;
          }
        });

        smokeMeshes.forEach((sm) => {
          sm.visible = true;
          sm.position.y += sm.userData.speedY * delta;
          sm.scale.setScalar(intensityFactor);
          if (sm.position.y > sm.userData.maxH) {
            sm.position.y = 1.3;
            sm.position.x = -0.55 + (Math.random() - 0.5) * 0.4;
          }
        });

        // Strobe Siren Flash in Fire Alarm
        if (stage === 'FIRE_ALARM') {
          const strobe = Math.sin(time * 24) > 0;
          if (centralStrobeLightRef.current && centralStrobeMeshRef.current) {
            centralStrobeLightRef.current.intensity = strobe ? 5.0 : 0.0;
            (centralStrobeMeshRef.current.material as THREE.MeshStandardMaterial).emissive = strobe
              ? new THREE.Color(0xff0000)
              : new THREE.Color(0x000000);
          }
        }

      } else if (stage === 'SUPPRESSION') {
        fireGroup.visible = true;
        foamSprayGroupRef.current!.visible = true;
        co2FogGroupRef.current!.visible = true;

        fireMeshes.forEach((mesh) => {
          mesh.scale.multiplyScalar(0.92);
          if (mesh.scale.x < 0.05) mesh.visible = false;
        });
        if (fireLightRef.current) {
          fireLightRef.current.intensity = Math.max(0, fireLightRef.current.intensity - delta * 4);
        }

        // Foam spray streams
        sprayMeshes.forEach((sp, idx) => {
          sp.visible = true;
          sp.position.y -= sp.userData.speed * delta;
          sp.position.x += Math.sin(time * 15 + idx) * 0.01;
          if (sp.position.y < 1.05) {
            sp.position.y = sp.userData.origY;
            sp.position.x = -0.55 + sp.userData.spread;
          }
        });

        // Expand foam blanket
        if (foamBlanketMeshRef.current) {
          foamBlanketMeshRef.current.visible = true;
          foamBlanketMeshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.08);
        }

        // CO2 fog
        co2Meshes.forEach((c, idx) => {
          c.visible = true;
          c.position.y += Math.sin(time * 3 + idx) * 0.004;
          c.position.x += Math.cos(time * 2 + idx) * 0.004;
        });

        // Fast Strobe
        const strobe = Math.sin(time * 30) > 0;
        if (centralStrobeLightRef.current && centralStrobeMeshRef.current) {
          centralStrobeLightRef.current.intensity = strobe ? 4.0 : 0.2;
          (centralStrobeMeshRef.current.material as THREE.MeshStandardMaterial).emissive = strobe
            ? new THREE.Color(0xff0000)
            : new THREE.Color(0x330000);
        }

      } else if (stage === 'EXTINGUISHED') {
        fireGroup.visible = false;
        smokeGroup.visible = false;
        foamSprayGroupRef.current!.visible = false;
        co2FogGroupRef.current!.visible = false;
        if (fireLightRef.current) fireLightRef.current.intensity = 0;

        if (foamBlanketMeshRef.current) {
          foamBlanketMeshRef.current.visible = true;
          foamBlanketMeshRef.current.scale.set(1, 1, 1);
        }

        if (centralStrobeLightRef.current && centralStrobeMeshRef.current) {
          centralStrobeLightRef.current.intensity = 0;
          (centralStrobeMeshRef.current.material as THREE.MeshStandardMaterial).emissive = new THREE.Color(0x000000);
        }

      } else {
        // STANDBY
        fireGroup.visible = false;
        smokeGroup.visible = false;
        foamSprayGroupRef.current!.visible = false;
        co2FogGroupRef.current!.visible = false;
        if (fireLightRef.current) fireLightRef.current.intensity = 0;
        if (foamBlanketMeshRef.current) foamBlanketMeshRef.current.visible = false;
        if (centralStrobeLightRef.current && centralStrobeMeshRef.current) {
          centralStrobeLightRef.current.intensity = 0;
          (centralStrobeMeshRef.current.material as THREE.MeshStandardMaterial).emissive = new THREE.Color(0x000000);
        }
      }

      // --- ANIMAÇÃO DOS ELEMENTOS ADICIONAIS ---
      // 1. Chamas Azuis e Gás no Fogão Industrial
      if (blueFlameGroupRef.current) {
        const isGasCut = (activeScenarioRef.current === 'real_fire' && p >= 0.50) || stage === 'SUPPRESSION' || stage === 'EXTINGUISHED';
        blueFlameGroupRef.current.visible = !isGasCut;
        if (blueFlameLightRef.current) {
          blueFlameLightRef.current.intensity = isGasCut ? 0 : 0.9 + Math.sin(time * 30) * 0.3;
        }
      }

      // 2. Sensor Blindado 145°C Glow na Coifa
      if (sensorGlowMeshRef.current) {
        const mat = sensorGlowMeshRef.current.material as THREE.MeshStandardMaterial;
        const isSensorTripped = (activeScenarioRef.current === 'real_fire' && p >= 0.25 && p < 0.88) || stage === 'FIRE_ALARM';
        if (isSensorTripped) {
          mat.emissive.setHex(0xef4444);
          mat.emissiveIntensity = 1.0 + Math.sin(time * 18) * 0.8;
        } else {
          mat.emissive.setHex(0x000000);
          mat.emissiveIntensity = 0;
        }
      }

      // 3. Damper Corta-Fogo Motorizado no Duto (Gira lâmina 90° para fechar o duto)
      if (damperFlapMeshRef.current) {
        const isDamperClosed = (activeScenarioRef.current === 'real_fire' && p >= 0.375) || stage === 'FIRE_ALARM' || stage === 'SUPPRESSION' || stage === 'EXTINGUISHED';
        const targetRot = isDamperClosed ? 0 : Math.PI / 2;
        damperFlapMeshRef.current.rotation.x = THREE.MathUtils.lerp(damperFlapMeshRef.current.rotation.x, targetRot, 0.12);
      }

      // 4. Quadro Elétrico Industrial de Intertravamento
      if (panelLedExhaustRef.current && panelLedFryerRef.current && panelLedAmberRef.current) {
        const isInterlocked = (activeScenarioRef.current === 'real_fire' && p >= 0.625) || stage === 'SUPPRESSION' || stage === 'EXTINGUISHED';
        const matExhaust = panelLedExhaustRef.current.material as THREE.MeshStandardMaterial;
        const matFryer = panelLedFryerRef.current.material as THREE.MeshStandardMaterial;
        const matAmber = panelLedAmberRef.current.material as THREE.MeshStandardMaterial;

        if (isInterlocked) {
          matExhaust.emissive.setHex(0x052e16);
          matExhaust.emissiveIntensity = 0.1;
          matFryer.emissive.setHex(0x052e16);
          matFryer.emissiveIntensity = 0.1;
          matAmber.emissive.setHex(0xf59e0b);
          matAmber.emissiveIntensity = 1.2 + Math.sin(time * 12) * 0.5;
        } else {
          matExhaust.emissive.setHex(0x22c55e);
          matExhaust.emissiveIntensity = 1.0;
          matFryer.emissive.setHex(0x22c55e);
          matFryer.emissiveIntensity = 1.0;
          matAmber.emissive.setHex(0x000000);
          matAmber.emissiveIntensity = 0;
        }
      }

      // 5. Cenário Cômico de Disparo Acidental (Lavador de Pratos)
      if (activeScenarioRef.current === 'accidental_discharge') {
        const step = accidentalStepRef.current;
        const dw = dishwasherGroupRef.current;
        const plates = platesStackGroupRef.current;
        const fallingPlate = fallingPlateMeshRef.current;

        if (dw && dw.visible) {
          if (step === 'walking') {
            dw.position.x = Math.max(1.78, dw.position.x - delta * 0.95);
            dw.rotation.z = Math.sin(time * 12) * 0.08;
            if (plates) {
              plates.rotation.z = Math.sin(time * 14) * 0.14;
            }
            targetCamPos.current.set(1.4, 1.6, 2.3);
            targetCamLook.current.set(1.45, 1.35, 0.1);

            if (dw.position.x <= 1.82) {
              setAccidentalStep('falling');
            }
          } else if (step === 'falling') {
            if (plates) {
              plates.rotation.x = Math.min(0.68, plates.rotation.x + delta * 2.8);
            }
            if (fallingPlate) {
              fallingPlate.position.y -= delta * 1.6;
              fallingPlate.position.z -= delta * 0.75;
              fallingPlate.position.x -= delta * 0.55;
              fallingPlate.rotation.x += delta * 9;

              if (fallingPlate.position.y <= 0.22) {
                soundEffects.playClackImpact();
                if (manualPullLeverRef.current) {
                  manualPullLeverRef.current.rotation.x = 0.65;
                }
                startOfficialAlarmAudioCycle();
                setAccidentalStep('alarm_waiting_click');
                setSimStage('FIRE_ALARM');
                setCountdown(60);

                targetCamPos.current.set(2.1, 1.8, 0.65);
                targetCamLook.current.set(2.1, 1.8, 0.15);
              }
            }
          } else if (step === 'alarm_waiting_click') {
            targetCamPos.current.set(2.1, 1.8, 0.65);
            targetCamLook.current.set(2.1, 1.8, 0.15);
          }
        }
      }

      // Alternância dinâmica da tela TFT da Central IHM
      if (lcdScreenMatRef.current) {
        if (stage === 'FIRE_ALARM' || stage === 'SUPPRESSION' || stage === 'EXTINGUISHED') {
          if (centralScreenTextureRef.current && lcdScreenMatRef.current.map !== centralScreenTextureRef.current) {
            lcdScreenMatRef.current.map = centralScreenTextureRef.current;
            lcdScreenMatRef.current.emissiveMap = centralScreenTextureRef.current;
            lcdScreenMatRef.current.emissiveIntensity = 1.0;
            lcdScreenMatRef.current.needsUpdate = true;
          }
        } else {
          if (standbyScreenTextureRef.current && lcdScreenMatRef.current.map !== standbyScreenTextureRef.current) {
            lcdScreenMatRef.current.map = standbyScreenTextureRef.current;
            lcdScreenMatRef.current.emissiveMap = standbyScreenTextureRef.current;
            lcdScreenMatRef.current.emissiveIntensity = 0.95;
            lcdScreenMatRef.current.needsUpdate = true;
          }
        }
      }

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', onPointerMove);
      renderer.domElement.removeEventListener('click', onPointerDown);
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
      renderer.dispose();
    };
  }, [handleManualTrigger, updateLcdScreenTexture]);

  return (
    <>
      {/* TELA 1 DE ABERTURA (PRIMEIRO CONTATO): FUNDO PRETO, LOGO DOURADO E ACESSO RÁPIDO AOS PORTAIS */}
      <section
        id="splash-hero"
        className="relative w-full h-[100dvh] bg-[#05070a] flex flex-col items-center justify-center select-none overflow-hidden z-20"
      >
        {/* Top Header Bar: Visível imediatamente no carregamento da página / refresh */}
        <div className="absolute top-0 left-0 w-full z-30 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-3 bg-gradient-to-b from-[#05070a]/95 via-[#05070a]/60 to-transparent">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d4af37]"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#e5c05d] font-bold">
              NBR 14518 / NFPA 96 & 17A
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Botão Área do Cliente */}
            <button
              type="button"
              onClick={() => onOpenPortal?.('client')}
              className="px-3 sm:px-4 py-2 rounded-xl bg-black/60 hover:bg-[#d4af37]/20 border border-[#d4af37]/40 hover:border-[#d4af37] text-[#f3e5ab] text-xs font-bold transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)] flex items-center gap-2 cursor-pointer backdrop-blur-md"
              title="Acessar Área do Cliente / Restaurante"
            >
              <User className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Área do Cliente</span>
            </button>
          </div>
        </div>

        {/* Brilho radial dourado sutil no centro escuro */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-[#0a0c10]/60 to-[#05070a] pointer-events-none" />

        {/* LOGO OUTFIRE DOURADO CENTRALIZADO */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
          <img
            src="/assets/logo-outfire-gold.png"
            alt="Outfire Sistemas Contra Incêndio"
            className="w-80 sm:w-96 md:w-[480px] max-w-[88vw] object-contain drop-shadow-[0_0_45px_rgba(212,175,55,0.4)] select-none transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* SETA DOURADA PARA BAIXO SINALIZANDO O USUÁRIO PARA DESCER A TELA */}
        <button
          onClick={scrollToKitchen}
          aria-label="Descer para a simulação da cozinha"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none z-30"
        >
          <div className="w-12 h-12 rounded-full border border-[#d4af37]/50 bg-black/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.35)] group-hover:border-[#d4af37] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all">
            <ChevronDown className="w-6 h-6 text-[#d4af37] animate-bounce" />
          </div>
          <span className="text-[11px] font-bold text-[#f3e5ab] tracking-wide uppercase opacity-85 group-hover:opacity-100 flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full border border-[#d4af37]/30 backdrop-blur-sm shadow-md">
            <span>Iniciar Simulação 3D Interativa</span>
          </span>
        </button>
      </section>

      {/* TELA 2: CENÁRIO DA COZINHA INDUSTRIAL & SIMULAÇÃO 3D POR FASES */}
      <section
        id="hero-3d"
        ref={containerRef}
        className="relative w-full h-[450vh] bg-[#07080a] overflow-x-clip"
        style={{ touchAction: 'pan-y' }}
      >
        {/* STICKY 3D VIEWPORT PINNED TO SCREEN (100dvh) */}
        <div
          ref={mountRef}
          onClick={(e) => {
            // Em dispositivos móveis, um toque leve sem arrasto (tap) aciona a botoeira ou foca a câmera
            if (window.innerWidth < 768 && cameraRef.current && mountRef.current) {
              const rect = mountRef.current.getBoundingClientRect();
              const m = new THREE.Vector2(
                ((e.clientX - rect.left) / rect.width) * 2 - 1,
                -((e.clientY - rect.top) / rect.height) * 2 + 1
              );
              const rc = new THREE.Raycaster();
              rc.setFromCamera(m, cameraRef.current);
              const targets = [manualStationMeshRef.current, centralGroupRef.current, fryerGroupRef.current].filter(Boolean) as THREE.Object3D[];
              const hits = rc.intersectObjects(targets, true);
              if (hits.length > 0) {
                let root: THREE.Object3D | null = hits[0].object;
                while (root && !root.userData?.interactiveType && root.parent) {
                  root = root.parent;
                }
                if (root?.userData?.interactiveType === 'botoeira') {
                  handleManualTrigger();
                } else if (root?.userData?.interactiveType === 'central') {
                  if (activeScenarioRef.current === 'accidental_discharge' && accidentalStepRef.current === 'alarm_waiting_click') {
                    handleAbortDisparo();
                  } else if (simStageRef.current === 'FIRE_ALARM') {
                    handleAbortDisparo();
                  } else {
                    setCameraView('central');
                  }
                } else if (root?.userData?.interactiveType === 'fritadeira') {
                  setCameraView('fritadeira');
                }
              }
            }
          }}
          className="sticky top-0 w-full h-[100dvh] overflow-x-clip flex flex-col justify-between select-none"
          style={{ touchAction: 'pan-y' }}
        >
          {/* 1. THREE.JS 3D WEBGL CANVAS (pointer-events-none no mobile para permitir rolagem nativa 100% desobstruída em toda a tela) */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full block z-0 outline-none pointer-events-none md:pointer-events-auto"
            style={{ touchAction: 'pan-y' }}
          />

          {/* 2. TOP FLOATING HUD OVERLAY (STATUS, CENÁRIOS & TELEMETRIA) */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 flex flex-col gap-2.5 pointer-events-none">

            {/* CABEÇALHO SUPERIOR CLEAN: STATUS DO SISTEMA + SELETOR DE CENÁRIOS & ÁUDIO */}
            <div className="w-full flex items-center justify-between gap-2.5 pointer-events-auto">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#d4af37]/50 shadow-glow-gold text-xs font-bold text-[#f3e5ab]">
                  <Radio className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
                  <span className="hidden sm:inline">Central Outfire VTS 32S3 Autônoma</span>
                  <span className="sm:hidden">Outfire VTS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span className="text-[11px] font-mono text-gray-300">NBR 14518</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Botão de Trocar Cenário */}
                <button
                  type="button"
                  onClick={() => setShowEntryModal(true)}
                  className="px-3 py-1.5 rounded-xl bg-black/80 hover:bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#f3e5ab] text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
                  title="Trocar entre Incêndio Real e Disparo Acidental"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="hidden sm:inline">Cenário:</span>
                  <span className="text-white font-extrabold">{activeScenario === 'real_fire' ? '🔥 Incêndio Real' : '🍽️ Acidental'}</span>
                </button>

                {/* Botão de Áudio Mudo / Ligado */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border cursor-pointer backdrop-blur-md ${
                    isMuted
                      ? 'bg-red-950/70 border-red-500/50 text-red-300'
                      : 'bg-black/80 border-[#d4af37]/60 text-[#f3e5ab] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  }`}
                  title={isMuted ? 'Ativar voz oficial da central e efeitos sonoros' : 'Silenciar áudio'}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-red-400" />
                      <span className="hidden sm:inline">Mudo</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
                      <span className="hidden sm:inline">Voz Ativa</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Linha de Badges de Telemetria e Status */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none">

              {/* Left: System Badge & Real-time State */}
              <div className="flex flex-col gap-1.5 pointer-events-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/40 shadow-glow-gold text-xs font-bold text-[#f3e5ab]">
                  <Radio className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
                  <span>Central Outfire VTS 32S3 Autônoma</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span className="text-[11px] font-mono text-gray-300">NBR 14518</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-lg text-xs font-black tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md border ${simStage === 'STANDBY'
                      ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                      : simStage === 'HEATING'
                        ? 'bg-amber-950/80 border-amber-500/50 text-amber-300'
                        : simStage === 'FIRE_ALARM'
                          ? 'bg-red-950/90 border-red-500 text-red-200 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                          : simStage === 'SUPPRESSION'
                            ? 'bg-cyan-950/90 border-cyan-500 text-cyan-200 shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                            : 'bg-emerald-900/90 border-emerald-400 text-emerald-200'
                    }`}>
                    {simStage === 'STANDBY' && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
                    {simStage === 'HEATING' && <Flame className="w-4 h-4 text-amber-400 animate-pulse" />}
                    {simStage === 'FIRE_ALARM' && <Flame className="w-4 h-4 text-red-400 animate-bounce" />}
                    {simStage === 'SUPPRESSION' && <Droplets className="w-4 h-4 text-cyan-300 animate-spin" />}
                    {simStage === 'EXTINGUISHED' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    {telemetry.systemStatus}
                  </span>

                  {simStage === 'FIRE_ALARM' && (
                    <span className="px-2.5 py-1 rounded-lg bg-red-600 text-white font-mono font-black text-xs animate-pulse">
                      DISPARO EM {countdown}s
                    </span>
                  )}
                </div>
              </div>

              {/* Right: Real-time Telemetry Chips (Gas, Exhaust, Temp) */}
              <div className="flex items-center gap-2 pointer-events-auto bg-black/80 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl">
                <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <Flame className={`w-3.5 h-3.5 ${telemetry.temp > 200 ? 'text-red-400 animate-pulse' : 'text-amber-400'}`} />
                  <div className="flex flex-col">
                    <span className="text-[9px] text-gray-400 font-mono">TEMP. ÓLEO</span>
                    <span className="text-xs font-bold text-white font-mono">{telemetry.temp}°C</span>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <ZapOff className={`w-3.5 h-3.5 ${telemetry.gasStatus === 'CORTADO' ? 'text-red-400' : 'text-emerald-400'}`} />
                  <div className="flex flex-col">
                    <span className="text-[9px] text-gray-400 font-mono">VÁLVULA GÁS</span>
                    <span className={`text-xs font-bold font-mono ${telemetry.gasStatus === 'CORTADO' ? 'text-red-400' : 'text-emerald-400'}`}>
                      {telemetry.gasStatus}
                    </span>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <Wind className={`w-3.5 h-3.5 ${telemetry.exhaustStatus === 'INTERTRAVADO' ? 'text-red-400' : 'text-emerald-400'}`} />
                  <div className="flex flex-col">
                    <span className="text-[9px] text-gray-400 font-mono">EXAUSTÃO</span>
                    <span className={`text-xs font-bold font-mono ${telemetry.exhaustStatus === 'INTERTRAVADO' ? 'text-red-400' : 'text-emerald-400'}`}>
                      {telemetry.exhaustStatus}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* BANNER PULSANTE: CLIQUE DIRETAMENTE NA TELA DA CENTRAL 3D PARA ABORTAR O DISPARO ACIDENTAL */}
          {activeScenario === 'accidental_discharge' && accidentalStep === 'alarm_waiting_click' && (
            <div className="absolute top-40 sm:top-44 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-xl p-4 sm:p-5 rounded-3xl bg-gradient-to-b from-red-950/95 via-black/95 to-black border-2 border-red-500 text-white shadow-[0_0_60px_rgba(239,68,68,0.9)] flex flex-col items-center gap-2.5 text-center pointer-events-auto animate-bounce">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider shadow-md">
                <AlertOctagon className="w-4 h-4 animate-spin" />
                <span>Disparo Acidental Detectado!</span>
              </div>
              <h4 className="text-sm sm:text-base font-black text-amber-300 tracking-tight leading-snug">
                👉 CLIQUE DIRETAMENTE NA TELA DA CENTRAL 3D PARA ABORTAR!
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-200 max-w-md">
                A pilha de pratos atingiu a botoeira manual! Toque agora na tela da Central Outfire no cenário 3D para cancelar o disparo e economizar R$ 15.000!
              </p>
              <button
                type="button"
                onClick={handleAbortDisparo}
                className="mt-1 w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-600 hover:brightness-110 text-black font-black text-xs sm:text-sm uppercase tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.8)] transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 fill-black text-white" />
                <span>Ou Toque Aqui para Abortar na Central</span>
              </button>
            </div>
          )}

          {/* BADGE CINEMATOGRÁFICO DE ETAPA (INCÊNDIO REAL - 8 ZOOMS) */}
          {activeScenario === 'real_fire' && cinematicBadge && (
            <div className="absolute bottom-28 sm:bottom-32 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-xl pointer-events-none animate-fadeIn">
              <div className="bg-black/90 backdrop-blur-xl border border-[#d4af37]/60 p-3.5 sm:p-4 rounded-2xl shadow-[0_0_35px_rgba(212,175,55,0.35)] flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center shrink-0 shadow-md">
                  {cinematicBadge.iconType === 'shield' && <ShieldCheck className="w-5 h-5 text-[#d4af37]" />}
                  {cinematicBadge.iconType === 'flame' && <Flame className="w-5 h-5 text-amber-400 animate-pulse" />}
                  {cinematicBadge.iconType === 'sensor' && <AlertOctagon className="w-5 h-5 text-red-400 animate-bounce" />}
                  {cinematicBadge.iconType === 'damper' && <Wind className="w-5 h-5 text-cyan-300" />}
                  {cinematicBadge.iconType === 'gas' && <ZapOff className="w-5 h-5 text-red-400" />}
                  {cinematicBadge.iconType === 'electrical' && <ZapOff className="w-5 h-5 text-amber-400" />}
                  {cinematicBadge.iconType === 'central' && <Radio className="w-5 h-5 text-[#d4af37] animate-pulse" />}
                  {cinematicBadge.iconType === 'droplets' && <Droplets className="w-5 h-5 text-cyan-300 animate-spin" />}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-black text-white tracking-tight flex items-center gap-2">
                    <span>{cinematicBadge.title}</span>
                  </span>
                  <span className="text-[11px] sm:text-xs text-gray-300 line-clamp-2 mt-0.5 leading-relaxed">
                    {cinematicBadge.desc}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* MODAL COMEMORATIVO DE SUCESSO: R$ 15.000 ECONOMIZADOS AO ABORTAR DISPARO ACIDENTAL */}
          {showAbortedModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn pointer-events-auto">
              <div className="relative w-full max-w-2xl bg-[#090b0e] border-2 border-emerald-500 rounded-3xl p-5 sm:p-7 shadow-[0_0_70px_rgba(16,185,129,0.5)] text-white overflow-hidden">
                {/* Brilhos de fundo */}
                <div className="absolute -top-24 -left-24 w-60 h-60 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />

                {/* Botão Fechar */}
                <button
                  type="button"
                  onClick={() => setShowAbortedModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center text-sm transition-all cursor-pointer z-10"
                >
                  ✕
                </button>

                {/* Ícone e Título de Sucesso */}
                <div className="text-center mb-5">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/60 text-emerald-300 text-xs font-black uppercase tracking-wider mb-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Disparo Acidental Anulado com Sucesso</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                    😅 Ufa! Alguns pratos quebraram... <br className="hidden sm:inline" />
                    <span className="text-[#facc15]">mas você economizou R$ 15.000,00!</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-lg mx-auto">
                    Apenas a <strong>Central Outfire VTS 32S3</strong> possui cancelamento eletrônico de disparo em falso sem descarregar o agente químico.
                  </p>
                </div>

                {/* Comparativo Visual: Concorrência Mecânica vs Outfire Digital */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
                  {/* Concorrência */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-red-950/30 border border-red-500/30 flex flex-col gap-2">
                    <span className="text-xs font-black uppercase text-red-400 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                      Sistemas Mecânicos Convencionais
                    </span>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      • Bateu na botoeira por engano? <strong>Dispara na hora sem volta.</strong><br />
                      • Contamina todos os alimentos, panelas e insumos da cozinha.<br />
                      • Prejuízo de até <strong>R$ 15.000</strong> em recarga e descarte.<br />
                      • <strong>2 a 3 dias de cozinha fechada</strong> para descarte e limpeza pesada.
                    </p>
                  </div>

                  {/* Outfire VTS */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/50 flex flex-col gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <span className="text-xs font-black uppercase text-emerald-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      Central Outfire VTS 32S3
                    </span>
                    <p className="text-[11px] text-gray-200 leading-relaxed">
                      • <strong>Tempo de segurança</strong> com contagem regressiva visível.<br />
                      • Cancelamento imediato com <strong>um toque na tela touch</strong>.<br />
                      • <strong>Zero desperdício de saponificante ou CO2</strong> (R$ 0,00 gasto).<br />
                      • Cozinha continua operando normalmente, sem contaminação e sem paralisação!
                    </p>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => startRealFireScenario(true)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-[#d4af37] text-black font-black text-xs uppercase tracking-wide shadow-glow-gold hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Flame className="w-4 h-4 fill-black" />
                    <span>Ver Simulação de Incêndio Real</span>
                  </button>

                  <a
                    href="https://wa.me/5511916999411?text=Ol%C3%A1!%20Acabei%20de%20ver%20a%20simula%C3%A7%C3%A3o%20do%20disparo%20acidental%20e%20gostaria%20de%20um%20or%C3%A7amento%20da%20Central%20Outfire%20para%20minha%20cozinha."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Falar no WhatsApp Outfire</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setShowAbortedModal(false);
                      startAccidentalDischargeScenario();
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-bold uppercase transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Repetir</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 3. HOVER OBJECT TOOLTIP (3D RAYCASTING) */}
          {hoveredObjectName && (
            <div className="absolute top-28 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/60 text-xs text-[#f3e5ab] font-bold shadow-glow-gold flex items-center gap-2 animate-pulse">
              <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{hoveredObjectName} — Clique para interagir</span>
            </div>
          )}

          {/* BANNER DE CONTAGEM REGRESSIVA MANUAL QUANDO ACIONADOR FOI PUXADO */}
          {isManualCountdown && (
            <div className="absolute top-44 left-1/2 -translate-x-1/2 z-20 pointer-events-auto px-5 py-3 rounded-2xl bg-red-950/95 backdrop-blur-md border border-red-500 text-white shadow-[0_0_40px_rgba(239,68,68,0.7)] flex flex-col items-center gap-2 text-center max-w-md animate-pulse">
              <div className="flex items-center gap-2 text-red-300 font-bold text-xs uppercase tracking-wider">
                <AlertOctagon className="w-4 h-4 text-red-400" />
                <span>Acionador Manual Disparado • Contagem de Segurança</span>
              </div>
              <div className="font-mono text-2xl font-black text-[#67e8f9]">
                Supressão em {countdown}s
              </div>
              <p className="text-[11px] text-gray-200">
                O saponificante <strong>NÃO</strong> é descarregado de imediato. Aguarda zerar a contagem para evacuação da cozinha ou cancelamento.
              </p>
              <button
                onClick={handleAbortDisparo}
                className="mt-1 px-4 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 border border-white/30"
              >
                <XCircle className="w-3.5 h-3.5 text-white" />
                <span>Toque aqui para Abortar Disparo</span>
              </button>
            </div>
          )}

          {/* PROMPT DE INTERATIVIDADE ESTILO GAME: TOQUE NA CENTRAL 3D PARA ABORTAR */}
          {(simStage === 'FIRE_ALARM' || accidentalStep === 'alarm_waiting_click') && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center pointer-events-auto">
              <button
                type="button"
                onClick={handleAbortDisparo}
                className="group px-6 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 via-rose-500 to-red-600 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-sm uppercase tracking-wider shadow-[0_0_40px_rgba(239,68,68,0.9)] hover:shadow-[0_0_40px_rgba(16,185,129,0.9)] border-2 border-white flex items-center gap-3 cursor-pointer transform hover:scale-105 active:scale-95 transition-all animate-bounce"
                title="Toque na tela da central para anular o disparo em falso e economizar R$ 15.000"
              >
                <span className="text-xl">🛑</span>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-yellow-200 font-mono tracking-widest">
                    {activeScenario === 'accidental_discharge' ? 'QUEDA DE PRATOS DETECTADA' : 'DISPARO EM ANDAMENTO'}
                  </span>
                  <span className="font-extrabold text-sm sm:text-base">
                    TOQUE NA TELA PARA ABORTAR ({countdown}s)
                  </span>
                </div>
                <span className="text-xs bg-white text-red-700 px-2.5 py-1 rounded-lg font-mono font-black shadow-md">
                  R$ 15.000
                </span>
              </button>
            </div>
          )}

          {/* POP-UP PRINCIPAL DE ENTRADA: ESCOLHA ENTRE INCÊNDIO REAL (AUTOMÁTICO) E DISPARO ACIDENTAL (INTERATIVO) */}
          {showEntryModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn pointer-events-auto">
              <div className="relative w-full max-w-2xl bg-[#090b0e] border-2 border-[#d4af37]/80 rounded-3xl p-5 sm:p-7 shadow-[0_0_70px_rgba(212,175,55,0.4)] text-white overflow-hidden">
                {/* Brilho dourado de fundo */}
                <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Botão de Fechar */}
                <button
                  onClick={() => setShowEntryModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center text-sm transition-all cursor-pointer z-10"
                  title="Fechar modal"
                  aria-label="Fechar pop-up"
                >
                  ✕
                </button>

                {/* Cabeçalho */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/50 text-[#f3e5ab] text-xs font-black uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Simulação 3D Interativa • Central Outfire VTS 32S3</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Qual simulação você deseja vivenciar?
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1.5 max-w-lg mx-auto">
                    Selecione um dos cenários abaixo. O sistema iniciará a apresentação com fidelidade total:
                  </p>
                </div>

                {/* Os 2 Grandes Cards de Cenário Solicitados */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Card 1: Simular Incêndio Real (Vídeo Automatizado) */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowEntryModal(false);
                      startRealFireScenario(true);
                    }}
                    className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-red-950/40 via-black/80 to-black border-2 border-red-500/70 hover:border-[#d4af37] shadow-[0_0_25px_rgba(239,68,68,0.25)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-left cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="px-2 py-0.5 rounded-md bg-gradient-to-r from-red-600 to-amber-500 text-white font-black text-[10px] uppercase tracking-wider">
                          Vídeo Automatizado
                        </span>
                        <span className="text-[11px] font-bold text-amber-300">8 Etapas • ~25s</span>
                      </div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-full bg-red-600/30 border border-red-500/60 flex items-center justify-center shrink-0 shadow-md">
                          <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                        </div>
                        <span className="text-sm font-black text-white group-hover:text-[#f3e5ab]">
                          Simular Incêndio Real
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-300 leading-relaxed">
                        Execução <strong>automatizada contínua do início ao fim</strong>: detecção térmica 145°C, fechamento do damper, corte de gás na panela, voz oficial da central e extinção total com saponificante Classe K.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-[#d4af37] text-black font-extrabold text-xs uppercase tracking-wide group-hover:brightness-110 shadow-glow-gold">
                      <Play className="w-3.5 h-3.5 fill-black" />
                      <span>Iniciar Incêndio Real</span>
                    </div>
                  </button>

                  {/* Card 2: Simular Disparo Acidental (Interativo / Comédia dos Pratos) */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowEntryModal(false);
                      startAccidentalDischargeScenario();
                    }}
                    className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-amber-950/40 via-black/80 to-black border-2 border-[#d4af37]/70 hover:border-[#f3e5ab] shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-left cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="px-2 py-0.5 rounded-md bg-[#d4af37] text-black font-black text-[10px] uppercase tracking-wider">
                          Modo Interativo
                        </span>
                        <span className="text-[11px] font-bold text-emerald-400">Economia R$ 15k</span>
                      </div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/60 flex items-center justify-center shrink-0">
                          <UtensilsCrossed className="w-4 h-4 text-[#d4af37]" />
                        </div>
                        <span className="text-sm font-black text-white group-hover:text-[#f3e5ab]">
                          Simular Disparo Acidental
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-300 leading-relaxed">
                        Queda cômica de pratos sobre a botoeira manual. A câmera foca na <strong>Central 3D com IHM Touch</strong>: toque na tela para anular o disparo em falso e economizar R$ 15.000 em recarga!
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-amber-400 to-[#b89628] text-black font-extrabold text-xs uppercase tracking-wide group-hover:brightness-110 shadow-glow-gold">
                      <Sparkles className="w-3.5 h-3.5 fill-black" />
                      <span>Iniciar Disparo Acidental</span>
                    </div>
                  </button>

                </div>

                {/* Rodapé / Opção Manual */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                  <span>💡 Você pode alternar os cenários ou pausar a qualquer momento</span>
                  <button
                    type="button"
                    onClick={() => {
                      setShowEntryModal(false);
                      setIsPlaying(false);
                      setShowScrollPromptArrows(true);
                    }}
                    className="text-gray-300 hover:text-white underline cursor-pointer"
                  >
                    Ou navegar descendo a tela
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* INDICADOR COM SETAS ANIMADAS PARA BAIXO (MODO DESCENDO A TELA) */}
          {!isPlaying && (simStage === 'STANDBY' || showScrollPromptArrows) && (
            <div
              onClick={handleScrollDownStep}
              className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 cursor-pointer group pointer-events-auto select-none"
              title="Role para baixo com o mouse ou deslize o dedo para ver a simulação"
            >
              {/* Badge Chamativo */}
              <div className="px-4 py-2 rounded-2xl bg-black/90 backdrop-blur-md border border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.5)] flex items-center gap-2.5 text-xs font-bold text-[#f3e5ab] group-hover:scale-105 transition-all">
                <MousePointer className="w-4 h-4 text-[#d4af37] animate-pulse" />
                <span className="font-extrabold uppercase tracking-wide text-white">
                  Role a tela para baixo
                </span>
                <span className="text-[#d4af37] font-black text-sm">👇</span>
              </div>

              {/* Setas Douradas Triplas em Cascata Animadas */}
              <div className="flex flex-col items-center -space-y-2 mt-1">
                <ChevronDown className="w-7 h-7 text-[#d4af37] animate-bounce" />
                <ChevronDown className="w-6 h-6 text-[#f3e5ab] animate-bounce [animation-delay:150ms]" />
                <ChevronDown className="w-5 h-5 text-white/80 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}

          {/* 4. BARRA INFERIOR COM CONTROLES DE REPRODUÇÃO (PLAY/PAUSE & SCROLL), SETA DOURADA E FASES */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 flex flex-col items-center gap-3 pointer-events-none">

            {/* BARRA CENTRAL DE COMANDOS (PLAY/PAUSE, MODO DESCENDO A TELA, ESCOLHER MODO E FASES) */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-black/90 backdrop-blur-md px-3.5 sm:px-5 py-2 rounded-2xl border border-[#d4af37]/40 shadow-[0_10px_35px_rgba(0,0,0,0.9)] max-w-full pointer-events-auto">

              {/* Botão Play / Pause Auto-Scroll */}
              <button
                onClick={togglePlayPause}
                aria-label={isPlaying ? 'Pausar apresentação automática' : 'Aperte o Play para apresentação automática'}
                className={`py-1.5 px-3.5 rounded-xl font-black text-xs flex items-center gap-1.5 transition-all duration-300 shadow-md cursor-pointer ${isPlaying
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-[#d4af37] text-black shadow-[0_0_20px_rgba(245,158,11,0.8)] scale-105 animate-pulse'
                    : 'bg-[#181a20] hover:bg-[#22252c] text-[#f3e5ab] border border-[#d4af37]/50 hover:border-[#d4af37]'
                  }`}
                title={isPlaying ? 'Pausar simulação automática' : 'Iniciar apresentação automática acelerada (~13s)'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-black" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-[#d4af37]" />
                    <span>Aperte o Play</span>
                  </>
                )}
              </button>

              {/* Botão / Indicador de Modo Descendo a Tela */}
              <button
                onClick={handleSetManualMode}
                className={`py-1.5 px-2.5 sm:px-3 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer border ${!isPlaying
                    ? 'bg-blue-950/40 text-blue-200 border-blue-400/50 shadow-sm'
                    : 'bg-black/50 hover:bg-white/10 text-gray-400 border-white/10'
                  }`}
                title="Modo Descendo a Tela: Role a tela livremente com o mouse ou deslize o dedo"
              >
                <MousePointer className="w-3 h-3 text-blue-400" />
                <span className="hidden sm:inline">Modo</span>
                <span>Descendo a Tela</span>
              </button>

              {/* Botão para Reabrir Escolha dos Cenários */}
              <button
                onClick={() => setShowEntryModal(true)}
                className="py-1.5 px-2.5 rounded-xl border border-[#d4af37]/40 bg-[#d4af37]/10 hover:bg-[#d4af37]/25 text-[#f3e5ab] hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs shadow-sm"
                title="Escolher entre Simulação de Incêndio Real ou Disparo Acidental"
                aria-label="Trocar Cenário"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-[11px] font-bold">Trocar Cenário</span>
              </button>

              {/* Divisor vertical */}
              <div className="w-[1px] h-5 bg-white/20 hidden sm:block" />

              {/* Seta Dourada Interativa com Bounce / Pulse */}
              <button
                onClick={handleScrollDownStep}
                aria-label="Avançar simulação para baixo"
                className="w-8 h-8 rounded-full bg-gradient-to-b from-[#d4af37]/25 to-black/80 border border-[#d4af37]/60 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_12px_rgba(212,175,55,0.4)] cursor-pointer shrink-0"
                title="Avançar um passo na simulação"
              >
                <ChevronDown className={`w-4 h-4 text-[#d4af37] ${simStage !== 'STANDBY' ? 'animate-bounce' : 'animate-pulse'}`} />
              </button>

              {/* Indicador Dinâmico de Fase ao Lado da Seta */}
              <div className="flex items-center gap-2 truncate max-w-[260px] sm:max-w-md">
                {simStage === 'STANDBY' && (
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-gray-200">
                      Cozinha em Standby • <span className="text-[#d4af37]">{isPlaying ? 'Reproduzindo...' : 'Aperte o Play ou Desça a tela'}</span>
                    </span>
                  </div>
                )}

                {simStage === 'HEATING' && (
                  <div className="flex items-center gap-2 animate-pulse">
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/60 text-amber-300 font-black text-xs shrink-0">
                      FASE 1
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-amber-200 truncate">
                      Princípio de Incêndio (Óleo a {telemetry.temp}°C)
                    </span>
                  </div>
                )}

                {simStage === 'FIRE_ALARM' && (
                  <div className="flex items-center gap-2 animate-pulse">
                    <span className="px-2 py-0.5 rounded-md bg-red-600/30 border border-red-500 text-red-200 font-black text-xs shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                      FASE 2
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-red-200 truncate">
                      Alarme Térmico 145°C Disparado • Contagem: {countdown}s
                    </span>
                  </div>
                )}

                {simStage === 'SUPPRESSION' && (
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-cyan-600/30 border border-cyan-400 text-cyan-200 font-black text-xs shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                      FASE 3
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-cyan-200 truncate">
                      Supressão Ativa: Saponificante Classe K + CO2 no duto
                    </span>
                  </div>
                )}

                {simStage === 'EXTINGUISHED' && (
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-600/30 border border-emerald-400 text-emerald-200 font-black text-xs shrink-0">
                      FASE 4
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-200 truncate">
                      Cozinha Preservada • NBR 14518 Cumprida
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* CONTROLES DE INTERAÇÃO (BOTOEIRA, RESTAURAR, CÂMERAS) */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">

              {/* Botões de Ação de Emergência */}
              <div className="flex flex-wrap items-center gap-2 pointer-events-auto">
                {/* Botão Acionador Manual (Botoeira) */}
                <button
                  onClick={handleManualTrigger}
                  disabled={simStage === 'SUPPRESSION' || simStage === 'EXTINGUISHED' || isManualCountdown}
                  className={`py-2 px-4 rounded-xl font-black text-xs flex items-center gap-2 transition-all duration-300 border ${simStage === 'FIRE_ALARM'
                      ? 'bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white border-white animate-pulse shadow-[0_0_25px_rgba(225,29,72,0.8)] scale-105'
                      : 'bg-[#181212]/90 hover:bg-red-950/80 text-red-300 border-red-500/40 shadow-lg'
                    }`}
                >
                  <AlertOctagon className="w-3.5 h-3.5 text-red-400" />
                  <span>🚨 Disparar Acionador Manual</span>
                </button>

                {/* Botão Abortar Disparo em Falso */}
                {(isManualCountdown || simStage === 'FIRE_ALARM') && (
                  <button
                    onClick={handleAbortDisparo}
                    className="py-2 px-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-bold text-xs flex items-center gap-1.5 border border-amber-500/40 transition-all active:scale-95"
                  >
                    <XCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Abortar Disparo</span>
                  </button>
                )}

                {/* Reset Button */}
                {(simStage === 'EXTINGUISHED' || simStage === 'FIRE_ALARM' || simStage === 'SUPPRESSION') && (
                  <button
                    onClick={handleResetScene}
                    className="py-2 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 border border-white/15 transition-all duration-200 active:scale-95"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Restaurar</span>
                  </button>
                )}

                {/* Botao Direto de Conversao na Fase 4 */}
                {simStage === 'EXTINGUISHED' && (
                  <button
                    onClick={scrollToNextSection}
                    className="py-2 px-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89628] hover:from-[#f3e5ab] hover:to-[#d4af37] text-black font-extrabold text-xs flex items-center gap-1.5 shadow-glow-gold hover:scale-105 active:scale-95 transition-all animate-pulse"
                    title="Avançar para a escolha de Kits e Instalação"
                  >
                    <Sparkles className="w-3.5 h-3.5 fill-black" />
                    <span>Escolher Minha Solução</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Câmeras Rápidas */}
              <div className="flex items-center gap-1 bg-black/75 backdrop-blur-md p-1 rounded-xl border border-white/10 text-xs pointer-events-auto">
                <span className="text-[10px] text-gray-400 px-1.5 font-mono flex items-center gap-1">
                  <Camera className="w-3 h-3 text-[#d4af37]" /> Câmera:
                </span>
                <button
                  onClick={() => setCameraView('geral')}
                  className={`px-2 py-0.5 rounded-lg font-bold transition-all ${activeCameraView === 'geral' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
                    }`}
                >
                  Geral
                </button>
                <button
                  onClick={() => setCameraView('central')}
                  className={`px-2 py-0.5 rounded-lg font-bold transition-all ${activeCameraView === 'central' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
                    }`}
                >
                  Central
                </button>
                <button
                  onClick={() => setCameraView('fritadeira')}
                  className={`px-2 py-0.5 rounded-lg font-bold transition-all ${activeCameraView === 'fritadeira' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
                    }`}
                >
                  Fritadeira
                </button>
                <button
                  onClick={() => setCameraView('botoeira')}
                  className={`px-2 py-0.5 rounded-lg font-bold transition-all ${activeCameraView === 'botoeira' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
                    }`}
                >
                  Botoeira
                </button>
              </div>

            </div>

          </div>

          {/* 5. BARRA DE ROLAGEM LATERAL DOURADA & NAVEGADOR DE FASES (SLIM & ELEGANT) */}
          <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-auto">
            {/* Mini Botão Play/Pause Lateral */}
            <button
              onClick={togglePlayPause}
              title={isPlaying ? "Pausar apresentação automática" : "Auto-Play apresentação contínua"}
              className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all shadow-md cursor-pointer ${isPlaying
                  ? 'bg-amber-400 text-black shadow-[0_0_12px_rgba(251,191,36,0.9)] scale-110'
                  : 'bg-black/85 hover:bg-[#d4af37] text-[#d4af37] hover:text-black border border-[#d4af37]/50'
                }`}
            >
              {isPlaying ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current ml-0.5" />}
            </button>

            {/* Trilho da Barra Dourada */}
            <div
              onClick={(e) => {
                setIsPlaying(false);
                const rect = e.currentTarget.getBoundingClientRect();
                const clickY = e.clientY - rect.top;
                const ratio = Math.max(0, Math.min(1, clickY / rect.height));
                scrollToProgress(ratio);
              }}
              title="Clique para rolar na simulação"
              className="relative w-2 sm:w-2.5 h-32 sm:h-48 rounded-full bg-black/75 backdrop-blur-md border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.25)] cursor-pointer p-0.5 flex flex-col justify-start overflow-hidden group hover:border-[#d4af37] transition-all"
            >
              {/* Preenchimento em gradiente dourado proporcional ao scrollProgress */}
              <div
                className="w-full rounded-full bg-gradient-to-b from-[#ffffff] via-[#d4af37] to-[#9a741e] shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-[height] duration-150"
                style={{ height: `${Math.max(10, scrollProgress * 100)}%` }}
              />
            </div>

            {/* Marcadores / Botões de Salto Direto para as 8 Etapas Cinematográficas */}
            <div className="flex flex-col items-center gap-1">
              {CINEMATIC_ZOOM_STOPS.map((item, idx) => {
                const isActive = activeScenario === 'real_fire' && activeZoomIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsPlaying(false);
                      if (activeScenario !== 'real_fire') {
                        startRealFireScenario();
                      }
                      scrollToProgress(item.progress);
                    }}
                    title={item.badgeTitle}
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-black transition-all ${
                      isActive
                        ? 'bg-[#d4af37] text-black shadow-[0_0_12px_rgba(212,175,55,0.9)] scale-110 border border-white'
                        : 'bg-black/80 hover:bg-black text-gray-400 hover:text-white border border-[#d4af37]/30 hover:border-[#d4af37]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Atalho para sair da simulação / avançar para a próxima seção */}
            <button
              onClick={() => {
                setIsPlaying(false);
                scrollToNextSection();
              }}
              title="Avançar para a Central Outfire"
              className="mt-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/80 hover:bg-black border border-[#d4af37]/50 text-[#d4af37] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-glow-gold"
              aria-label="Avançar para a próxima seção"
            >
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>

        </div>
      </section>
    </>
  );
};
