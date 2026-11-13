import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import {
  Flame, ShieldCheck, AlertOctagon, ZapOff, Wind, Droplets,
  RotateCcw, Sparkles, BellRing, Eye, Camera, CheckCircle2,
  ChevronDown, Radio, XCircle, User, Play, Pause, MousePointer, HelpCircle,
  Volume2, VolumeX, ShieldAlert, UtensilsCrossed, Zap, AlertTriangle,
  Package, Wrench, Cpu, ArrowRight
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
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

export interface CinematicZoomPoint {
  id: number;
  label: string;
  name: string;
  timeStart: number;
  timeEnd: number;
  camPos: [number, number, number];
  camLook: [number, number, number];
  camPosMobile: [number, number, number];
  camLookMobile: [number, number, number];
  badgeTitle: string;
  badgeDesc: string;
  icon: string;
}

export const TOTAL_SIM_DURATION = 27.0; // 27 segundos de simulação cinematográfica contínua

export const CINEMATIC_ZOOM_STOPS: CinematicZoomPoint[] = [
  {
    id: 1,
    label: '1',
    name: 'Cozinha Standby',
    timeStart: 0.0,
    timeEnd: 3.5,
    camPos: [0, 2.2, 4.4],
    camLook: [0, 1.4, 0],
    camPosMobile: [0.5, 2.1, 6.8],
    camLookMobile: [0.5, 1.3, 0],
    badgeTitle: '1. Cozinha em Standby & Supervisão Contínua (NBR 14518)',
    badgeDesc: 'Sistema Outfire VTS 32S3 operando em prontidão. Inox cromado reluzindo, gás ativo e supervisão contínua.',
    icon: 'shield',
  },
  {
    id: 2,
    label: '2',
    name: 'Início do Fogo',
    timeStart: 3.5,
    timeEnd: 7.0,
    camPos: [-0.55, 1.45, 1.8],
    camLook: [-0.55, 1.05, 0],
    camPosMobile: [-0.55, 1.45, 2.2],
    camLookMobile: [-0.55, 1.05, 0],
    badgeTitle: '2. Princípio de Incêndio na Fritadeira',
    badgeDesc: 'Gordura e óleo vegetal/animal superaquecem até autoignição (>340°C). Chamas e fumaça sobem em direção à coifa.',
    icon: 'flame',
  },
  {
    id: 3,
    label: '3',
    name: 'Sensor 145°C',
    timeStart: 7.0,
    timeEnd: 10.5,
    camPos: [-0.45, 2.05, 1.15],
    camLook: [-0.55, 2.15, 0],
    camPosMobile: [-0.45, 2.05, 1.5],
    camLookMobile: [-0.55, 2.15, 0],
    badgeTitle: '3. Sensor Blindado Atinge 145°C',
    badgeDesc: 'Temperatura na coifa atinge 145°C (NBR 14518). Circuito térmico fecha emitindo sinal de disparo para a Central.',
    icon: 'sensor',
  },
  {
    id: 4,
    label: '4',
    name: 'Central Outfire IHM',
    timeStart: 10.5,
    timeEnd: 16.5,
    camPos: [2.1, 1.8, 0.70],
    camLook: [2.1, 1.8, 0.15],
    camPosMobile: [2.05, 1.8, 0.95],
    camLookMobile: [2.1, 1.8, 0.15],
    badgeTitle: '4. Central Outfire VTS 32S3 em Alarme (IHM Touch)',
    badgeDesc: 'Voz oficial de disparo ativada com cronômetro regressivo. Opção: Puxe o Acionador Manual para adiantar o despejo!',
    icon: 'central',
  },
  {
    id: 5,
    label: '5',
    name: 'Damper Corta-Fogo',
    timeStart: 16.5,
    timeEnd: 19.0,
    camPos: [0.1, 2.75, 1.35],
    camLook: [0, 2.85, 0],
    camPosMobile: [0.1, 2.75, 1.75],
    camLookMobile: [0, 2.85, 0],
    badgeTitle: '5. Damper Corta-Fogo Fechado (Duto Isolado)',
    badgeDesc: 'Solenoide liberada: lâmina móvel fecha em 90° bloqueando a passagem de fogo para a exaustão predial.',
    icon: 'damper',
  },
  {
    id: 6,
    label: '6',
    name: 'Corte de Gás',
    timeStart: 19.0,
    timeEnd: 21.0,
    camPos: [0.65, 1.45, 1.55],
    camLook: [0.65, 1.05, 0],
    camPosMobile: [0.65, 1.45, 2.0],
    camLookMobile: [0.65, 1.05, 0],
    badgeTitle: '6. Corte Imediato de Gás GN/GLP por Válvula Solenoide',
    badgeDesc: 'Válvula solenoide fecha instantaneamente o gás, apagando as chamas sob a panela e eliminando o combustível.',
    icon: 'gas',
  },
  {
    id: 7,
    label: '7',
    name: 'Quadro Elétrico',
    timeStart: 21.0,
    timeEnd: 23.5,
    camPos: [-2.2, 1.95, 1.4],
    camLook: [-2.6, 1.9, -0.4],
    camPosMobile: [-2.0, 1.95, 1.8],
    camLookMobile: [-2.6, 1.9, -0.4],
    badgeTitle: '7. Intertravamento Elétrico: Exaustão & Fritadeira Desenergizadas',
    badgeDesc: 'Luzes verdes do painel desligam: motor do exaustor e resistências das fritadeiras são cortados para evitar reignição.',
    icon: 'electrical',
  },
  {
    id: 8,
    label: '8',
    name: 'Extinção Total',
    timeStart: 23.5,
    timeEnd: 27.0,
    camPos: [0, 1.8, 3.2],
    camLook: [-0.1, 1.25, 0],
    camPosMobile: [0, 1.8, 3.9],
    camLookMobile: [-0.1, 1.25, 0],
    badgeTitle: '8. Supressão Ativa com Saponificante Classe K & CO2',
    badgeDesc: 'Manta espumosa cobre o óleo e isola o oxigênio. Fogo 100% extinto! Cozinha protegida conforme NBR 14518.',
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

  const { openLeadModal } = useWhatsAppModal();

  // Virtual Simulation Time (0 a 27 segundos)
  const [simTime, setSimTime] = useState<number>(0);
  const simTimeRef = useRef<number>(0);

  // Auto-Play / Pause State (Vídeo Automatizado sem scroll de tela)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const isPlayingRef = useRef<boolean>(false);
  isPlayingRef.current = isPlaying;

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
  const hasPlayedGasCutoffRef = useRef<boolean>(false);
  const hasPlayedSuppressionRef = useRef<boolean>(false);

  // Simulation Stage
  const [simStage, setSimStage] = useState<SimStage>('STANDBY');
  const simStageRef = useRef<SimStage>('STANDBY');
  simStageRef.current = simStage;

  const [countdown, setCountdown] = useState<number>(60);
  const countdownRef = useRef<number>(60);
  countdownRef.current = countdown;

  const [telemetry, setTelemetry] = useState<TelemetryData>({
    temp: 180,
    gasStatus: 'ABERTO',
    exhaustStatus: 'LIGADO',
    systemStatus: 'PRONTIDÃO',
    countdown: 60,
  });

  const [hoveredObjectName, setHoveredObjectName] = useState<string | null>(null);
  const [activeCameraView, setActiveCameraView] = useState<'geral' | 'central' | 'fritadeira' | 'botoeira'>('geral');
  const [manualAdvanced, setManualAdvanced] = useState<boolean>(false);
  const manualAdvancedRef = useRef<boolean>(false);

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

  // --- AUDIO CONTROLLER ---
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

  // --- DRAW CENTRAL LCD DIGITAL TOUCHSCREEN CANVAS TEXTURE ---
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

  // Update canvas texture on stage change
  useEffect(() => {
    updateLcdScreenTexture();
  }, [simStage, countdown, updateLcdScreenTexture]);

  // --- INICIAR CENÁRIO 1: INCÊNDIO REAL (VÍDEO AUTOMATIZADO 60 FPS SEM SCROLL) ---
  const startRealFireScenario = useCallback(() => {
    stopAllAudioCycles();
    setActiveScenario('real_fire');
    activeScenarioRef.current = 'real_fire';
    setAccidentalStep('idle');
    accidentalStepRef.current = 'idle';
    setShowAbortedModal(false);
    setActiveCameraView('geral');
    setManualAdvanced(false);
    manualAdvancedRef.current = false;

    hasPlayedAlarmAudioRef.current = false;
    hasPlayedGasCutoffRef.current = false;
    hasPlayedSuppressionRef.current = false;

    if (dishwasherGroupRef.current) {
      dishwasherGroupRef.current.visible = false;
    }
    if (manualPullLeverRef.current) {
      manualPullLeverRef.current.rotation.x = 0;
    }
    if (foamBlanketMeshRef.current) {
      foamBlanketMeshRef.current.scale.set(0.001, 0.001, 0.001);
      foamBlanketMeshRef.current.visible = false;
    }

    simTimeRef.current = 0.0;
    setSimTime(0.0);
    setActiveZoomIndex(0);
    setSimStage('STANDBY');
    simStageRef.current = 'STANDBY';
    setCountdown(60);
    countdownRef.current = 60;
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

    setIsPlaying(true);
    isPlayingRef.current = true;
  }, [stopAllAudioCycles]);

  // --- INTERAÇÃO: PUXAR ACIONADOR MANUAL PARA ADIANTAR O DESPEJO (INCÊNDIO REAL) ---
  const handleManualAdvanceDischarge = useCallback(() => {
    if (simStageRef.current === 'SUPPRESSION' || simStageRef.current === 'EXTINGUISHED') return;

    if (manualPullLeverRef.current) {
      manualPullLeverRef.current.rotation.x = 0.65;
    }
    soundEffects.playClackImpact();
    setManualAdvanced(true);
    manualAdvancedRef.current = true;

    // Salta a simulação direto para a fase de extinção imediata (23.5s)
    simTimeRef.current = 23.5;
    setSimTime(23.5);
    setCountdown(0);
    countdownRef.current = 0;
    setSimStage('SUPPRESSION');
    simStageRef.current = 'SUPPRESSION';
    setTelemetry({
      temp: 140,
      gasStatus: 'CORTADO',
      exhaustStatus: 'INTERTRAVADO',
      systemStatus: 'COMBATE ATIVO',
      countdown: 0,
    });
    setCinematicBadge({
      title: '⚡ Disparo Manual Antecipado (Acionador)',
      desc: 'Botoeira acionada manualmente: contagem ignorada e saponificante Classe K despejado imediatamente!',
      iconType: 'droplets',
    });
  }, []);

  // --- INICIAR CENÁRIO 2: DISPARO ACIDENTAL (COMÉDIA DOS PRATOS & ABORTAR NA CENTRAL) ---
  const startAccidentalDischargeScenario = useCallback(() => {
    stopAllAudioCycles();
    setActiveScenario('accidental_discharge');
    activeScenarioRef.current = 'accidental_discharge';
    setAccidentalStep('walking');
    accidentalStepRef.current = 'walking';
    setShowAbortedModal(false);
    setActiveCameraView('geral');
    setManualAdvanced(false);
    manualAdvancedRef.current = false;

    hasPlayedAlarmAudioRef.current = false;
    hasPlayedGasCutoffRef.current = false;
    hasPlayedSuppressionRef.current = false;

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
      fallingPlateMeshRef.current.position.set(0, 11 * 0.026 + 0.02, 0);
      fallingPlateMeshRef.current.rotation.set(0, 0, 0);
    }
    if (manualPullLeverRef.current) {
      manualPullLeverRef.current.rotation.x = 0;
    }
    if (foamBlanketMeshRef.current) {
      foamBlanketMeshRef.current.scale.set(0.001, 0.001, 0.001);
      foamBlanketMeshRef.current.visible = false;
    }

    setSimStage('STANDBY');
    simStageRef.current = 'STANDBY';
    setCountdown(60);
    countdownRef.current = 60;
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

    setIsPlaying(true);
    isPlayingRef.current = true;
  }, [stopAllAudioCycles]);

  // --- ABORTAR DISPARO (ANULAR DISPARO EM FALSO E POUPAR R$ 15.000) ---
  const handleAbortDisparo = useCallback(() => {
    stopAllAudioCycles();
    soundEffects.playSuccessChime();

    if (activeScenarioRef.current === 'accidental_discharge') {
      setAccidentalStep('aborted');
      accidentalStepRef.current = 'aborted';
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
    simStageRef.current = 'STANDBY';
    setCountdown(60);
    countdownRef.current = 60;
    setTelemetry({
      temp: 180,
      gasStatus: 'ABERTO',
      exhaustStatus: 'LIGADO',
      systemStatus: 'PRONTIDÃO',
      countdown: 60,
    });
    setIsPlaying(false);
    isPlayingRef.current = false;
  }, [stopAllAudioCycles]);

  // --- REPRODUÇÃO & TIMELINE CONTROLLER ---
  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => {
      const next = !prev;
      isPlayingRef.current = next;
      if (next && simTimeRef.current >= TOTAL_SIM_DURATION - 0.2) {
        startRealFireScenario();
      }
      return next;
    });
  }, [startRealFireScenario]);

  const jumpToTime = useCallback((timeSec: number) => {
    const clamped = Math.max(0, Math.min(TOTAL_SIM_DURATION, timeSec));
    simTimeRef.current = clamped;
    setSimTime(clamped);

    // Se o usuário pular para trás antes do alarme, reseta áudios
    if (clamped < 10.5) {
      hasPlayedAlarmAudioRef.current = false;
      hasPlayedGasCutoffRef.current = false;
      hasPlayedSuppressionRef.current = false;
      stopAllAudioCycles();
    }
  }, [stopAllAudioCycles]);

  const jumpToStage = useCallback((stageIndex: number) => {
    const target = CINEMATIC_ZOOM_STOPS[stageIndex];
    if (!target) return;
    if (activeScenarioRef.current !== 'real_fire') {
      setActiveScenario('real_fire');
      activeScenarioRef.current = 'real_fire';
      if (dishwasherGroupRef.current) dishwasherGroupRef.current.visible = false;
    }
    jumpToTime(target.timeStart);
  }, [jumpToTime]);

  const handleResetScene = useCallback(() => {
    stopAllAudioCycles();
    simTimeRef.current = 0.0;
    setSimTime(0.0);
    setIsPlaying(false);
    isPlayingRef.current = false;
    setManualAdvanced(false);
    manualAdvancedRef.current = false;
    setActiveScenario('real_fire');
    activeScenarioRef.current = 'real_fire';
    setAccidentalStep('idle');
    accidentalStepRef.current = 'idle';
    setShowAbortedModal(false);

    setSimStage('STANDBY');
    simStageRef.current = 'STANDBY';
    setCountdown(60);
    countdownRef.current = 60;
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
    if (dishwasherGroupRef.current) {
      dishwasherGroupRef.current.visible = false;
    }
    if (lcdScreenMatRef.current && standbyScreenTextureRef.current) {
      lcdScreenMatRef.current.map = standbyScreenTextureRef.current;
      lcdScreenMatRef.current.emissiveMap = standbyScreenTextureRef.current;
      lcdScreenMatRef.current.needsUpdate = true;
    }
  }, [stopAllAudioCycles]);

  // Helpers de navegação na página
  const scrollToKitchen = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    startRealFireScenario();
  };

  const scrollToNextSection = () => {
    setIsPlaying(false);
    isPlayingRef.current = false;
    if (!containerRef.current) return;
    const containerBottom = containerRef.current.offsetTop + containerRef.current.offsetHeight;
    window.scrollTo({ top: containerBottom + 10, behavior: 'smooth' });
  };

  // Handlers para os 4 Botões Dourados de Ação Comercial
  const handleOpenKitOnly = () => {
    openLeadModal({
      origem: 'hub_kit_terceiros',
      title: 'Comprar Kit de Fábrica (Instalação Própria / Terceiros)',
      subtitle: 'Orçamento do Kit Completo Outfire com envio para qualquer cidade do Brasil.',
      defaultMessage: 'Olá! Tenho interesse em adquirir o Kit de Instalação Outfire direto de fábrica para montagem própria/com terceiros na minha cozinha.',
      detalhes: 'Interesse no fornecimento de equipamentos do Kit de Fábrica (Central VTS 32S3 Touch, Cilindro Saponificante Classe K, Cilindro CO2, bicos, tubos e sensores).'
    });
  };

  const handleOpenTurnkey = () => {
    openLeadModal({
      origem: 'hub_kit_instalacao_outfire',
      title: 'Kit Completo + Instalação Especializada Outfire',
      subtitle: 'Montagem noturna turnkey com emissão de ART no CREA e Laudo de Estanqueidade para os Bombeiros.',
      defaultMessage: 'Olá! Gostaria de um orçamento da Solução Completa Outfire (Kit de Fábrica + Montagem Noturna Especializada com ART e Laudo para Bombeiros/AVCB).',
      detalhes: 'Interesse na Solução Turnkey Noturna (23h às 05h sem parar a cozinha): equipamentos + tubulação inox + montagem + ART CREA + laudo Bombeiros.'
    });
  };

  const handleOpenMaintenance = () => {
    openLeadModal({
      origem: 'hub_instalacao_manutencao',
      title: 'Instalação, Manutenção & Adequação AVCB',
      subtitle: 'Vistorias preventivas, corretivas, recargas de saponificante/CO2 e regularização para sistemas Outfire, Ansul, Kidde e multimarcas.',
      defaultMessage: 'Olá! Preciso de manutenção preventiva/corretiva, recarga ou adequação de Bombeiros para a coifa do meu restaurante.',
      detalhes: 'Solicitação de vistoria técnica, manutenção ou recarga de agente saponificante/CO2 para adequação AVCB.'
    });
  };

  const handleOpenCentralDetails = () => {
    const el = document.getElementById('central-vts') || document.getElementById('system-presentation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      scrollToNextSection();
    }
  };

  // Câmeras Rápidas
  const setCameraView = (view: 'geral' | 'central' | 'fritadeira' | 'botoeira') => {
    setActiveCameraView(view);
    const isMobile = window.innerWidth < 768;
    if (view === 'geral') {
      if (isMobile) {
        targetCamPos.current.set(0.5, 2.1, 6.8);
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

  // Formatador de tempo (ex: "00:14")
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // --- THREE.JS INITIALIZATION & SCENE SETUP ---
  useEffect(() => {
    if (!canvasRef.current || !mountRef.current) return;

    const width = mountRef.current.clientWidth || window.innerWidth;
    const height = mountRef.current.clientHeight || window.innerHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    // Fundo limpo azul-escuro industrial de estúdio
    scene.background = new THREE.Color(0x131720);
    scene.fog = null;

    // 2. Camera responsiva (aberta para enquadrar a cozinha com grandiosidade)
    const isMobile = width < 768;
    const camera = new THREE.PerspectiveCamera(isMobile ? 66 : 45, width / height, 0.1, 100);
    if (isMobile) {
      camera.position.set(0.5, 2.1, 6.8);
      targetCamPos.current.set(0.5, 2.1, 6.8);
      targetCamLook.current.set(0.5, 1.3, 0);
    } else {
      camera.position.set(0, 2.2, 4.4);
      targetCamPos.current.set(0, 2.2, 4.4);
      targetCamLook.current.set(0, 1.4, 0);
    }
    cameraRef.current = camera;

    // 3. Renderer com suporte a PBR HDR Environment
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
    renderer.toneMappingExposure = 1.35;
    renderer.domElement.style.touchAction = 'pan-y';
    rendererRef.current = renderer;

    // 4. ROOM ENVIRONMENT INTEGRATION (ELIMINA 100% O INOX PRETO!)
    // Gera reflexões PBR ricas de ambiente interno iluminado para que metalness: 0.9 reflita luz real
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnv = new RoomEnvironment();
    scene.environment = pmremGenerator.fromScene(roomEnv, 0.04).texture;

    // 5. OrbitControls (Ativado apenas em desktop)
    let controls: OrbitControls | null = null;
    if (!isMobile) {
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false; // Não captura scroll da página
      controls.enablePan = false;
      controls.maxPolarAngle = Math.PI / 2 + 0.05;
      controls.target.set(0, 1.4, 0);
      controlsRef.current = controls;
    } else {
      controlsRef.current = null;
    }

    // 6. Lighting (Cozinha Industrial Clara e Brilhante)
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.4);
    dirLight.position.set(3.5, 6, 4);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    scene.add(dirLight);

    // Calhas de LED industriais brilhantes de teto (iluminam bancada, coifa e central gerando brilho cromado)
    const ceilingTroffer1 = new THREE.DirectionalLight(0xffffff, 2.0);
    ceilingTroffer1.position.set(-1.2, 5.0, 1.5);
    scene.add(ceilingTroffer1);

    const ceilingTroffer2 = new THREE.DirectionalLight(0xffffff, 2.0);
    ceilingTroffer2.position.set(1.5, 5.0, 1.5);
    scene.add(ceilingTroffer2);

    // Luz frontal suave de preenchimento para ambiente limpo e claro
    const frontFill = new THREE.DirectionalLight(0xf8fafc, 1.5);
    frontFill.position.set(0, 3.2, 5.5);
    scene.add(frontFill);

    // Spot Light under Hood
    const hoodSpot = new THREE.SpotLight(0xfff7ed, 4.0, 7, Math.PI / 3, 0.25);
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

    // --- MATERIALS (INOX CROMADO ESPELHADO PBR & ACABAMENTOS INDUSTRIAIS) ---
    const matStainlessSteel = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      metalness: 0.88,
      roughness: 0.12,
    });

    const matWhiteTile = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.18,
      metalness: 0.05,
    });

    const matFloor = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.35,
      metalness: 0.18,
    });

    // 7. Room Environment Geometries (Chão e Paredes Claras)
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

    // 8. Kitchen Cooking Counter & Appliances (Inox Cromado)
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
    fryerGroup.userData = { interactiveType: 'fritadeira', name: 'Fritadeira Industrial (Óleo a 180°C)' };

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

    // Base do queimador circular de gás
    const burnerBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.13, 0.016, 24),
      new THREE.MeshStandardMaterial({ color: 0x1e242d, roughness: 0.8, metalness: 0.25 })
    );
    burnerBase.position.set(0, 0.068, 0);
    stoveGroup.add(burnerBase);

    // Trempe de ferro fundido (grelha circular para apoiar a panela)
    const burnerGrate = new THREE.Mesh(
      new THREE.TorusGeometry(0.18, 0.014, 8, 24),
      new THREE.MeshStandardMaterial({ color: 0x181c24, roughness: 0.85, metalness: 0.2 })
    );
    burnerGrate.rotation.x = Math.PI / 2;
    burnerGrate.position.set(0, 0.082, 0);
    stoveGroup.add(burnerGrate);

    // ANEL DE CHAMAS AZUIS: ESTRITAMENTE SOB A PANELA!
    // As chamas saem do queimador em y = 0.076 e sobem até y = 0.090, ficando exatamente embaixo do fundo da panela
    const blueFlameGroup = new THREE.Group();
    blueFlameGroup.position.set(0, 0.076, 0);
    stoveGroup.add(blueFlameGroup);
    blueFlameGroupRef.current = blueFlameGroup;

    const blueConeGeo = new THREE.ConeGeometry(0.006, 0.015, 8);
    const blueMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff });
    const flameRadius = 0.075; // Raio menor que a panela (raio 0.18) para ficar 100% debaixo do fundo
    for (let b = 0; b < 16; b++) {
      const angle = (b / 16) * Math.PI * 2;
      const jet = new THREE.Mesh(blueConeGeo, blueMat);
      jet.position.set(Math.cos(angle) * flameRadius, 0.0075, Math.sin(angle) * flameRadius);
      blueFlameGroup.add(jet);
    }

    const blueFlameLight = new THREE.PointLight(0x00c8ff, 0.65, 0.35);
    blueFlameLight.position.set(0, 0.082, 0);
    blueFlameGroup.add(blueFlameLight);
    blueFlameLightRef.current = blueFlameLight;

    // PANELA EM INOX CROMADO: REPOUSA FIRMEMENTE SOBRE A TREMPE (Y = 0.095+)
    // Toda a geometria da panela fica ESTRITAMENTE ACIMA das chamas azuis!
    const panGroup = new THREE.Group();
    panGroup.position.set(0, 0.095, 0);
    stoveGroup.add(panGroup);
    stovePanGroupRef.current = panGroup;

    // Fundo sólido espesso da panela (isola e impede que qualquer luz/chama vaze por cima)
    const panBottomDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 0.015, 32),
      matStainlessSteel
    );
    panBottomDisc.position.set(0, 0.0075, 0);
    panGroup.add(panBottomDisc);

    // Corpo da panela
    const panBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.20, 0.18, 0.16, 32),
      matStainlessSteel
    );
    panBody.position.set(0, 0.085, 0);
    panBody.castShadow = true;
    panGroup.add(panBody);

    // Tampa da panela
    const panLid = new THREE.Mesh(
      new THREE.CylinderGeometry(0.205, 0.205, 0.02, 32),
      matStainlessSteel
    );
    panLid.position.set(0, 0.17, 0);
    panGroup.add(panLid);

    // Pegador preto antitérmico
    const panKnob = new THREE.Mesh(
      new THREE.SphereGeometry(0.022, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4 })
    );
    panKnob.position.set(0, 0.19, 0);
    panGroup.add(panKnob);

    // Alças laterais da panela
    const panHandleGeo = new THREE.TorusGeometry(0.035, 0.007, 8, 16, Math.PI);
    const panHandleL = new THREE.Mesh(panHandleGeo, matStainlessSteel);
    panHandleL.rotation.y = Math.PI / 2;
    panHandleL.position.set(-0.21, 0.12, 0);
    panGroup.add(panHandleL);

    const panHandleR = new THREE.Mesh(panHandleGeo, matStainlessSteel);
    panHandleR.rotation.y = -Math.PI / 2;
    panHandleR.position.set(0.21, 0.12, 0);
    panGroup.add(panHandleR);

    // 9. Industrial Exhaust Hood (Coifa com Duto NBR 14518 em Inox Cromado)
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
    damperFlap.rotation.x = Math.PI / 2; // Aberto em standby (vertical)
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

    // 10. Quadro Elétrico Industrial de Intertravamento na Parede
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

    // Backsplash de Inox Escovado atrás da bancada
    const backsplashMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.88,
      roughness: 0.15,
    });
    const backsplash = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 1.4), backsplashMat);
    backsplash.position.set(0, 1.6, -0.6);
    scene.add(backsplash);

    // Tubulação de saponificante e bicos
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

    // 11. CENTRAL OUTFIRE 3D COM ARTE OFICIAL
    const centralGroup = new THREE.Group();
    centralGroup.position.set(2.1, 1.8, 0.15);
    centralGroup.rotation.y = -0.28;
    scene.add(centralGroup);
    centralGroupRef.current = centralGroup;
    centralGroup.userData = { interactiveType: 'central', name: 'Central Outfire VTS' };

    const textureLoader = new THREE.TextureLoader();
    const frontCoverTexture = textureLoader.load('/assets/tampa-central-moderna.png');
    frontCoverTexture.colorSpace = THREE.SRGBColorSpace;

    const standbyCanvas = createNormalizedIhmScreenCanvas();
    const standbyScreenTexture = new THREE.CanvasTexture(standbyCanvas);
    standbyScreenTexture.colorSpace = THREE.SRGBColorSpace;
    standbyScreenTextureRef.current = standbyScreenTexture;

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

    // Front Touchscreen IHM Display
    const lcdMat = new THREE.MeshStandardMaterial({
      map: standbyScreenTexture,
      roughness: 0.15,
      metalness: 0.05,
      emissive: 0xffffff,
      emissiveMap: standbyScreenTexture,
      emissiveIntensity: 0.95,
      depthTest: true,
      depthWrite: true,
    });
    lcdScreenMatRef.current = lcdMat;

    const lcdScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.20, 0.15), lcdMat);
    lcdScreen.position.set(0, 0.0, 0.116);
    lcdScreen.renderOrder = 10;
    lcdScreen.userData = { interactiveType: 'central' };
    centralGroup.add(lcdScreen);

    // Moldura da tela
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

    // Luz focada na central
    const centralSpot = new THREE.SpotLight(0xfff6ea, 2.8, 5, Math.PI / 3, 0.3);
    centralSpot.position.set(2.4, 2.4, 1.6);
    centralSpot.target = centralGroup;
    scene.add(centralSpot);

    // Strobe Siren Beacon
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

    // 12. ACIONADOR MANUAL (BOTOEIRA 3D INTERATIVA)
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

    // 13. CILINDRO DE SAPONIFICANTE CROMADO (INOX RELUZENTE)
    const sapCylinderGroup = new THREE.Group();
    sapCylinderGroup.position.set(-1.85, 1.1, -0.3);
    scene.add(sapCylinderGroup);
    sapCylinderGroup.userData = { interactiveType: 'saponificante', name: 'Cilindro Saponificante Classe K (Inox Cromado)' };

    // Material Inox Cromado Real: graças ao RoomEnvironment, reflete brilho prateado vivo!
    const matChromeCylinder = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.92,
      roughness: 0.08,
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

    const sapBrk1 = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.04, 0.06), new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8 }));
    sapBrk1.position.set(0, 0.22, -0.09);
    sapCylinderGroup.add(sapBrk1);

    const sapBrk2 = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.04, 0.06), new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8 }));
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

    // Luz focada no cilindro de saponificante para realçar o brilho do inox
    const cylinderSpot = new THREE.SpotLight(0xffffff, 2.5, 5, Math.PI / 3, 0.3);
    cylinderSpot.position.set(-2.2, 2.4, 1.2);
    cylinderSpot.target = sapCylinderGroup;
    scene.add(cylinderSpot);

    // 14. CILINDRO DE CO2 VERMELHO NO FINAL DO DUTO
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

    // 15. PERSONAGEM CÔMICO: LAVADOR DE PRATOS 3D COM PILHA GIGANTE (DISPARO ACIDENTAL)
    const dwGroup = new THREE.Group();
    dwGroup.position.set(2.8, 0, 0.3);
    dwGroup.visible = false;
    scene.add(dwGroup);
    dishwasherGroupRef.current = dwGroup;

    const matChefCoat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 });
    const matDarkPants = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 });
    const matSkin = new THREE.MeshStandardMaterial({ color: 0xe0ac69, roughness: 0.7 });

    const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.05, 0.65, 12), matDarkPants);
    legL.position.set(-0.09, 0.325, 0);
    dwGroup.add(legL);

    const legR = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.05, 0.65, 12), matDarkPants);
    legR.position.set(0.09, 0.325, 0);
    dwGroup.add(legR);

    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.15, 0.55, 12), matChefCoat);
    torso.position.set(0, 0.925, 0);
    dwGroup.add(torso);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.10, 16, 16), matSkin);
    head.position.set(0, 1.32, 0);
    dwGroup.add(head);

    const chefHat = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.10, 0.16, 16), matChefCoat);
    chefHat.position.set(0, 1.45, 0);
    dwGroup.add(chefHat);

    // Pilha Gigante de 12 Pratos de Cerâmica Branca
    const platesGroup = new THREE.Group();
    platesGroup.position.set(0, 0.98, 0.32);
    dwGroup.add(platesGroup);
    platesStackGroupRef.current = platesGroup;

    const plateMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.15, metalness: 0.1 });
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

    const fallingPlate = new THREE.Mesh(plateGeo, plateMat);
    fallingPlate.position.set(0, 11 * 0.026 + 0.02, 0);
    platesGroup.add(fallingPlate);
    fallingPlateMeshRef.current = fallingPlate;

    // 16. SAPONIFICANT FOAM BLANKET MESH
    const foamBlanket = new THREE.Mesh(
      new THREE.BoxGeometry(0.74, 0.08, 0.64),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.9, metalness: 0.05 })
    );
    foamBlanket.position.set(-0.55, 1.05, 0);
    foamBlanket.scale.set(0.001, 0.001, 0.001);
    foamBlanket.visible = false;
    scene.add(foamBlanket);
    foamBlanketMeshRef.current = foamBlanket;

    // 17. PARTICLE SYSTEMS
    // Fire Particles
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

    // Smoke Particles
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

    // 18. RAYCASTER FOR 3D CLICK & HOVER
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
          // Botoeira: se em incêndio real, adianta o despejo!
          if (activeScenarioRef.current === 'real_fire') {
            handleManualAdvanceDischarge();
          }
        } else if (root?.userData?.interactiveType === 'central') {
          // Central Outfire 3D: toque na tela anula disparo em falso!
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

    // 19. RESIZE
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      const mobile = w < 768;
      cameraRef.current.aspect = w / h;
      cameraRef.current.fov = mobile ? 66 : 45;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 20. RENDER LOOP (60 FPS SUAVE COMO VÍDEO NATIVO)
    let animId: number;
    const clock = new THREE.Clock();

    const render = () => {
      animId = requestAnimationFrame(render);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // --- AVANÇO AUTOMATIZADO DO TEMPO DA SIMULAÇÃO ---
      if (isPlayingRef.current && activeScenarioRef.current === 'real_fire') {
        const nextTime = Math.min(TOTAL_SIM_DURATION, simTimeRef.current + delta);
        simTimeRef.current = nextTime;
        setSimTime(nextTime);

        if (nextTime >= TOTAL_SIM_DURATION) {
          setIsPlaying(false);
          isPlayingRef.current = false;
        }
      }

      const curTime = simTimeRef.current;

      // Smooth camera interpolation
      camera.position.lerp(targetCamPos.current, 0.06);
      if (controlsRef.current) {
        controlsRef.current.target.lerp(targetCamLook.current, 0.06);
        controlsRef.current.update();
      } else {
        camera.lookAt(targetCamLook.current);
      }

      // --- CENÁRIO 1: INCÊNDIO REAL (8 ETAPAS CINEMATOGRÁFICAS) ---
      if (activeScenarioRef.current === 'real_fire') {
        let zoomIdx = 0;
        const isMobile = window.innerWidth < 768;

        if (curTime < 3.5) {
          // ETAPA 1: STANDBY
          zoomIdx = 0;
          setSimStage('STANDBY');
          simStageRef.current = 'STANDBY';
          setCountdown(60);
          countdownRef.current = 60;
          setTelemetry({
            temp: 180,
            gasStatus: 'ABERTO',
            exhaustStatus: 'LIGADO',
            systemStatus: 'PRONTIDÃO',
            countdown: 60,
          });
        } else if (curTime < 7.0) {
          // ETAPA 2: PRINCÍPIO DE INCÊNDIO
          zoomIdx = 1;
          setSimStage('HEATING');
          simStageRef.current = 'HEATING';
          const prog = (curTime - 3.5) / 3.5;
          const t = Math.round(180 + prog * 165);
          setTelemetry({
            temp: t,
            gasStatus: 'ABERTO',
            exhaustStatus: 'LIGADO',
            systemStatus: 'AQUECIMENTO',
            countdown: 60,
          });
        } else if (curTime < 10.5) {
          // ETAPA 3: SENSOR 145°C
          zoomIdx = 2;
          setSimStage('FIRE_ALARM');
          simStageRef.current = 'FIRE_ALARM';
          setCountdown(55);
          countdownRef.current = 55;
          setTelemetry({
            temp: 145,
            gasStatus: 'ABERTO',
            exhaustStatus: 'LIGADO',
            systemStatus: 'ALERTA DE FOGO',
            countdown: 55,
          });
        } else if (curTime < 16.5) {
          // ETAPA 4: CENTRAL OUTFIRE IHM
          zoomIdx = 3;
          setSimStage('FIRE_ALARM');
          simStageRef.current = 'FIRE_ALARM';
          const cDown = Math.max(1, Math.round(15 - ((curTime - 10.5) / 6.0) * 14));
          setCountdown(cDown);
          countdownRef.current = cDown;
          setTelemetry({
            temp: 360,
            gasStatus: 'ABERTO',
            exhaustStatus: 'LIGADO',
            systemStatus: 'ALERTA DE FOGO',
            countdown: cDown,
          });

          if (!hasPlayedAlarmAudioRef.current && !isMutedRef.current) {
            hasPlayedAlarmAudioRef.current = true;
            startOfficialAlarmAudioCycle();
          }
        } else if (curTime < 19.0) {
          // ETAPA 5: DAMPER CORTA-FOGO
          zoomIdx = 4;
          setSimStage('FIRE_ALARM');
          simStageRef.current = 'FIRE_ALARM';
          setCountdown(5);
          countdownRef.current = 5;
          setTelemetry({
            temp: 370,
            gasStatus: 'ABERTO',
            exhaustStatus: 'INTERTRAVADO',
            systemStatus: 'ALERTA DE FOGO',
            countdown: 5,
          });
        } else if (curTime < 21.0) {
          // ETAPA 6: CORTE DE GÁS
          zoomIdx = 5;
          setSimStage('FIRE_ALARM');
          simStageRef.current = 'FIRE_ALARM';
          setCountdown(2);
          countdownRef.current = 2;
          setTelemetry({
            temp: 375,
            gasStatus: 'CORTADO',
            exhaustStatus: 'INTERTRAVADO',
            systemStatus: 'ALERTA DE FOGO',
            countdown: 2,
          });

          if (!hasPlayedGasCutoffRef.current && !isMutedRef.current) {
            hasPlayedGasCutoffRef.current = true;
            soundEffects.playGasCutoff();
          }
        } else if (curTime < 23.5) {
          // ETAPA 7: QUADRO ELÉTRICO INTERTRAVADO (Luzes verdes apagam AGORA)
          zoomIdx = 6;
          setSimStage('FIRE_ALARM');
          simStageRef.current = 'FIRE_ALARM';
          setCountdown(1);
          countdownRef.current = 1;
          setTelemetry({
            temp: 380,
            gasStatus: 'CORTADO',
            exhaustStatus: 'INTERTRAVADO',
            systemStatus: 'ALERTA DE FOGO',
            countdown: 1,
          });
        } else {
          // ETAPA 8: EXTINÇÃO TOTAL COM SAPONIFICANTE E CO2
          zoomIdx = 7;
          if (curTime < 24.8) {
            setSimStage('SUPPRESSION');
            simStageRef.current = 'SUPPRESSION';
          } else {
            setSimStage('EXTINGUISHED');
            simStageRef.current = 'EXTINGUISHED';
          }

          setCountdown(0);
          countdownRef.current = 0;
          setTelemetry({
            temp: 38,
            gasStatus: 'CORTADO',
            exhaustStatus: 'INTERTRAVADO',
            systemStatus: 'INCÊNDIO EXTINTO',
            countdown: 0,
          });

          if (!hasPlayedSuppressionRef.current && !isMutedRef.current) {
            hasPlayedSuppressionRef.current = true;
            soundEffects.playSuppressionHiss(3.5);
          }
          stopAllAudioCycles();
        }

        setActiveZoomIndex(zoomIdx);
        const stop = CINEMATIC_ZOOM_STOPS[zoomIdx];
        setCinematicBadge({
          title: stop.badgeTitle,
          desc: stop.badgeDesc,
          iconType: stop.icon,
        });

        // Interpola a câmera conforme a etapa cinematográfica
        if (activeCameraView === 'geral') {
          const pos = isMobile ? stop.camPosMobile : stop.camPos;
          const look = isMobile ? stop.camLookMobile : stop.camLook;
          targetCamPos.current.set(pos[0], pos[1], pos[2]);
          targetCamLook.current.set(look[0], look[1], look[2]);
        }
      }

      // --- VISUAL ELEMENTS ANIMATION ---
      const stage = simStageRef.current;

      // 1. Chamas e Fumaça da Fritadeira
      if (stage === 'HEATING' || stage === 'FIRE_ALARM') {
        fireGroup.visible = true;
        smokeGroup.visible = true;
        foamSprayGroupRef.current!.visible = false;
        co2FogGroupRef.current!.visible = false;

        const intensity = stage === 'FIRE_ALARM' ? 1.0 : Math.max(0.2, (curTime - 3.5) / 3.5);

        if (fireLightRef.current) {
          fireLightRef.current.intensity = (2.5 + Math.sin(time * 20) * 1.5) * intensity;
          fireLightRef.current.color.setHex(Math.random() > 0.3 ? 0xff4500 : 0xffaa00);
        }

        fireMeshes.forEach((mesh, idx) => {
          mesh.visible = true;
          mesh.position.y += mesh.userData.speedY * delta;
          mesh.position.x += Math.sin(time * 10 + idx) * 0.006;
          const prog = (mesh.position.y - mesh.userData.baseY) / 1.0;
          mesh.scale.setScalar(Math.max(0.01, (1 - prog) * mesh.userData.scale * intensity));
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
          sm.scale.setScalar(intensity);
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

      // 2. Chamas Azuis e Gás no Fogão Industrial (Apaga estritamente no corte de gás / Etapa 6)
      if (blueFlameGroupRef.current) {
        const isGasCut = (activeScenarioRef.current === 'real_fire' && curTime >= 19.0) || stage === 'SUPPRESSION' || stage === 'EXTINGUISHED';
        blueFlameGroupRef.current.visible = !isGasCut;
        if (blueFlameLightRef.current) {
          blueFlameLightRef.current.intensity = isGasCut ? 0 : 0.75 + Math.sin(time * 30) * 0.25;
        }
      }

      // 3. Sensor Blindado 145°C Glow na Coifa
      if (sensorGlowMeshRef.current) {
        const mat = sensorGlowMeshRef.current.material as THREE.MeshStandardMaterial;
        const isSensorTripped = (activeScenarioRef.current === 'real_fire' && curTime >= 7.0 && curTime < 23.5) || stage === 'FIRE_ALARM';
        if (isSensorTripped) {
          mat.emissive.setHex(0xef4444);
          mat.emissiveIntensity = 1.0 + Math.sin(time * 18) * 0.8;
        } else {
          mat.emissive.setHex(0x000000);
          mat.emissiveIntensity = 0;
        }
      }

      // 4. Damper Corta-Fogo Motorizado no Duto (Fecha a 90° na Etapa 5 / 16.5s)
      if (damperFlapMeshRef.current) {
        const isDamperClosed = (activeScenarioRef.current === 'real_fire' && curTime >= 16.5) || stage === 'SUPPRESSION' || stage === 'EXTINGUISHED';
        const targetRot = isDamperClosed ? 0 : Math.PI / 2;
        damperFlapMeshRef.current.rotation.x = THREE.MathUtils.lerp(damperFlapMeshRef.current.rotation.x, targetRot, 0.12);
      }

      // 5. Quadro Elétrico Industrial de Intertravamento (Luzes verdes SÓ apagam na Etapa 7 / 21.0s)
      if (panelLedExhaustRef.current && panelLedFryerRef.current && panelLedAmberRef.current) {
        const isInterlocked = (activeScenarioRef.current === 'real_fire' && curTime >= 21.0) || stage === 'SUPPRESSION' || stage === 'EXTINGUISHED';
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

      // 6. Cenário Cômico de Disparo Acidental (Lavador de Pratos)
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
              accidentalStepRef.current = 'falling';
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
                accidentalStepRef.current = 'alarm_waiting_click';
                setSimStage('FIRE_ALARM');
                simStageRef.current = 'FIRE_ALARM';
                setCountdown(60);
                countdownRef.current = 60;

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

      // 7. Alternância da tela LCD da Central IHM
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
      pmremGenerator.dispose();
      renderer.dispose();
    };
  }, [handleAbortDisparo, handleManualAdvanceDischarge, startOfficialAlarmAudioCycle, updateLcdScreenTexture]);

  return (
    <>
      {/* TELA 1 DE ABERTURA (SPLASH HERO): FUNDO PRETO, LOGO DOURADO E ACESSO RÁPIDO AOS PORTAIS */}
      <section
        id="splash-hero"
        className="relative w-full h-[100dvh] bg-[#05070a] flex flex-col items-center justify-center select-none overflow-hidden z-20"
      >
        {/* Top Header Bar */}
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

        {/* Brilho radial dourado no centro */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-[#0a0c10]/60 to-[#05070a] pointer-events-none" />

        {/* LOGO OUTFIRE DOURADO CENTRALIZADO */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
          <img
            src="/assets/logo-outfire-gold.png"
            alt="Outfire Sistemas Contra Incêndio"
            className="w-80 sm:w-96 md:w-[480px] max-w-[88vw] object-contain drop-shadow-[0_0_45px_rgba(212,175,55,0.4)] select-none transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* SETA DOURADA PARA DESCER E INICIAR A SIMULAÇÃO */}
        <button
          onClick={scrollToKitchen}
          aria-label="Descer para a simulação da cozinha"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none z-30"
        >
          <div className="w-12 h-12 rounded-full border border-[#d4af37]/50 bg-black/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.35)] group-hover:border-[#d4af37] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all">
            <ChevronDown className="w-6 h-6 text-[#d4af37] animate-bounce" />
          </div>
          <span className="text-[11px] font-bold text-[#f3e5ab] tracking-wide uppercase opacity-85 group-hover:opacity-100 flex items-center gap-1.5 bg-black/60 px-3.5 py-1 rounded-full border border-[#d4af37]/30 backdrop-blur-sm shadow-md">
            <span>Iniciar Simulação 3D Interativa</span>
          </span>
        </button>
      </section>

      {/* TELA 2: CENÁRIO DA COZINHA INDUSTRIAL & SIMULAÇÃO 3D (100dvh SUAVE COMO UM VÍDEO) */}
      <section
        id="hero-3d"
        ref={containerRef}
        className="relative w-full h-[100dvh] min-h-[700px] bg-[#07080a] overflow-hidden"
        style={{ touchAction: 'pan-y' }}
      >
        <div
          ref={mountRef}
          className="relative w-full h-full flex flex-col justify-between select-none"
        >
          {/* 1. THREE.JS 3D WEBGL CANVAS */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full block z-0 outline-none"
          />

          {/* 2. TOP FLOATING HUD: OS 2 GRANDES BOTÕES QUE SUBSTITUEM O POPUP ANTIGO */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 flex flex-col gap-2 pointer-events-none">
            <div className="w-full flex flex-wrap items-center justify-between gap-2.5 pointer-events-auto">
              
              {/* Left: Badge NBR 14518 */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#d4af37]/50 shadow-glow-gold text-xs font-bold text-[#f3e5ab]">
                <Radio className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
                <span className="hidden sm:inline">Central Outfire VTS 32S3 Autônoma</span>
                <span className="sm:hidden">Outfire VTS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span className="text-[11px] font-mono text-gray-300">NBR 14518</span>
              </div>

              {/* Center / Action Buttons: OS 2 BOTÕES SOLICITADOS POR MATHEUS */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Botão 1: Simular Incêndio Real */}
                <button
                  type="button"
                  onClick={startRealFireScenario}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wide flex items-center gap-2 transition-all cursor-pointer backdrop-blur-md shadow-md ${
                    activeScenario === 'real_fire' && isPlaying
                      ? 'bg-gradient-to-r from-red-600 via-amber-500 to-[#d4af37] text-black shadow-[0_0_20px_rgba(239,68,68,0.7)] scale-105 border-2 border-white'
                      : 'bg-black/85 hover:bg-red-950/80 text-white border border-red-500/60 hover:border-red-400'
                  }`}
                  title="Executar simulação de incêndio real automatizada como um vídeo do começo ao fim"
                >
                  <Flame className={`w-4 h-4 ${activeScenario === 'real_fire' && isPlaying ? 'fill-black text-black' : 'text-red-400'}`} />
                  <span>Simular Incêndio Real</span>
                </button>

                {/* Botão 2: Simular Disparo Acidental */}
                <button
                  type="button"
                  onClick={startAccidentalDischargeScenario}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wide flex items-center gap-2 transition-all cursor-pointer backdrop-blur-md shadow-md ${
                    activeScenario === 'accidental_discharge'
                      ? 'bg-gradient-to-r from-[#d4af37] via-amber-400 to-[#b89628] text-black shadow-[0_0_20px_rgba(212,175,55,0.7)] scale-105 border-2 border-white'
                      : 'bg-black/85 hover:bg-amber-950/80 text-[#f3e5ab] border border-[#d4af37]/60 hover:border-[#f3e5ab]'
                  }`}
                  title="Simular queda de pratos na botoeira e abortar na tela da central para economizar R$ 15.000"
                >
                  <UtensilsCrossed className="w-4 h-4 text-[#d4af37]" />
                  <span>Simular Disparo Acidental</span>
                </button>
              </div>

              {/* Right: Áudio Mudo / Voz Ativa */}
              <div className="flex items-center gap-2">
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

            {/* Linha de Telemetria Resumida */}
            <div className="flex items-center justify-between gap-2 pointer-events-none">
              <div className="flex items-center gap-2 pointer-events-auto">
                <span className={`px-2.5 py-1 rounded-lg text-xs font-black tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md border ${
                  simStage === 'STANDBY'
                    ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                    : simStage === 'HEATING'
                      ? 'bg-amber-950/80 border-amber-500/50 text-amber-300'
                      : simStage === 'FIRE_ALARM'
                        ? 'bg-red-950/90 border-red-500 text-red-200 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                        : simStage === 'SUPPRESSION'
                          ? 'bg-cyan-950/90 border-cyan-500 text-cyan-200 shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                          : 'bg-emerald-900/90 border-emerald-400 text-emerald-200'
                }`}>
                  {simStage === 'STANDBY' && <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />}
                  {simStage === 'HEATING' && <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />}
                  {simStage === 'FIRE_ALARM' && <Flame className="w-3.5 h-3.5 text-red-400 animate-bounce" />}
                  {simStage === 'SUPPRESSION' && <Droplets className="w-3.5 h-3.5 text-cyan-300 animate-spin" />}
                  {simStage === 'EXTINGUISHED' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  {telemetry.systemStatus}
                </span>

                {simStage === 'FIRE_ALARM' && (
                  <span className="px-2 py-1 rounded-lg bg-red-600 text-white font-mono font-black text-xs animate-pulse">
                    DISPARO EM {countdown}s
                  </span>
                )}
              </div>

              {/* Chips de Telemetria */}
              <div className="hidden sm:flex items-center gap-2 pointer-events-auto bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10 text-[11px] font-mono">
                <span className="text-gray-400">ÓLEO: <strong className="text-white">{telemetry.temp}°C</strong></span>
                <span className="text-white/20">•</span>
                <span className="text-gray-400">GÁS: <strong className={telemetry.gasStatus === 'CORTADO' ? 'text-red-400' : 'text-emerald-400'}>{telemetry.gasStatus}</strong></span>
                <span className="text-white/20">•</span>
                <span className="text-gray-400">EXAUSTÃO: <strong className={telemetry.exhaustStatus === 'INTERTRAVADO' ? 'text-red-400' : 'text-emerald-400'}>{telemetry.exhaustStatus}</strong></span>
              </div>
            </div>
          </div>

          {/* BOTÃO DE GAMEPLAY (INCÊNDIO REAL): ADIANTAR O DESPEJO NO ACIONADOR MANUAL */}
          {activeScenario === 'real_fire' && (simStage === 'FIRE_ALARM' || simStage === 'HEATING') && !manualAdvanced && (
            <div className="absolute top-28 sm:top-32 left-1/2 -translate-x-1/2 z-30 pointer-events-auto flex flex-col items-center gap-1.5 animate-fadeIn">
              <button
                type="button"
                onClick={handleManualAdvanceDischarge}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(239,68,68,0.8)] border border-white flex items-center gap-2.5 cursor-pointer transform hover:scale-105 active:scale-95 transition-all animate-pulse"
                title="Pressione a botoeira manual para descarregar o saponificante de imediato"
              >
                <AlertOctagon className="w-4 h-4 fill-white text-red-600 animate-spin" />
                <span>⚡ Pressionar Acionador Manual (Adiantar Disparo)</span>
              </button>
              <span className="text-[10px] text-amber-200 bg-black/80 px-3 py-0.5 rounded-full border border-amber-500/40">
                Você também pode clicar diretamente na botoeira vermelha 3D!
              </span>
            </div>
          )}

          {/* PROMPT DE GAMEPLAY (DISPARO ACIDENTAL): TOQUE NA TELA DA CENTRAL 3D PARA ABORTAR */}
          {activeScenario === 'accidental_discharge' && accidentalStep === 'alarm_waiting_click' && (
            <div className="absolute top-28 sm:top-32 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-lg p-4 sm:p-5 rounded-3xl bg-gradient-to-b from-red-950/95 via-black/95 to-black border-2 border-red-500 text-white shadow-[0_0_60px_rgba(239,68,68,0.9)] flex flex-col items-center gap-2 text-center pointer-events-auto animate-bounce">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider shadow-md">
                <AlertOctagon className="w-4 h-4 animate-spin" />
                <span>Disparo Acidental por Pratos Detectado!</span>
              </div>
              <h4 className="text-sm sm:text-base font-black text-amber-300 tracking-tight leading-snug">
                👉 CLIQUE NA TELA DA CENTRAL 3D PARA ABORTAR!
              </h4>
              <p className="text-[11px] text-gray-200">
                A pilha de pratos atingiu a botoeira! Toque na tela da Central Outfire no cenário 3D para cancelar o disparo e poupar R$ 15.000 em recarga!
              </p>
              <button
                type="button"
                onClick={handleAbortDisparo}
                className="mt-1 w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-600 hover:brightness-110 text-black font-black text-xs sm:text-sm uppercase tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.8)] transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 fill-black text-white" />
                <span>Toque Aqui ou na Tela 3D para Abortar</span>
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

          {/* 3. HOVER OBJECT TOOLTIP (3D RAYCASTING) */}
          {hoveredObjectName && (
            <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/60 text-xs text-[#f3e5ab] font-bold shadow-glow-gold flex items-center gap-2 animate-pulse">
              <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{hoveredObjectName} — Clique para interagir</span>
            </div>
          )}

          {/* MODAL COMEMORATIVO DE SUCESSO: R$ 15.000 ECONOMIZADOS AO ABORTAR DISPARO ACIDENTAL */}
          {showAbortedModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn pointer-events-auto">
              <div className="relative w-full max-w-2xl bg-[#090b0e] border-2 border-emerald-500 rounded-3xl p-5 sm:p-7 shadow-[0_0_70px_rgba(16,185,129,0.5)] text-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShowAbortedModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center text-sm transition-all cursor-pointer z-10"
                >
                  ✕
                </button>

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

                {/* Comparativo Visual */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
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

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/50 flex flex-col gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <span className="text-xs font-black uppercase text-emerald-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      Central Outfire VTS 32S3
                    </span>
                    <p className="text-[11px] text-gray-200 leading-relaxed">
                      • <strong>Tempo de segurança</strong> com contagem regressiva visível.<br />
                      • Cancelamento imediato com <strong>um toque na tela touch</strong>.<br />
                      • <strong>Zero desperdício de saponificante ou CO2</strong> (R$ 0,00 gasto).<br />
                      • Cozinha continua operando normalmente, sem paralisação!
                    </p>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAbortedModal(false);
                      startRealFireScenario();
                    }}
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

          {/* 4. VIDEO PLAYER CONTROL BAR & 4 BOTÕES DOURADOS DE CONVERSÃO */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-3 sm:pb-4 flex flex-col items-center gap-2 pointer-events-none">
            
            {/* Barra de Controle de Vídeo (Play/Pause, Linha do Tempo e 8 Etapas) */}
            <div className="w-full flex flex-col gap-2 bg-black/90 backdrop-blur-md px-3.5 sm:px-5 py-2.5 rounded-2xl border border-[#d4af37]/40 shadow-[0_10px_35px_rgba(0,0,0,0.9)] pointer-events-auto">
              
              {/* Linha Superior: Play/Pause, Scrubber da Linha do Tempo e Câmeras Rápidas */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Play/Pause */}
                <button
                  type="button"
                  onClick={togglePlayPause}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-black transition-all cursor-pointer shrink-0 ${
                    isPlaying
                      ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.8)] scale-105'
                      : 'bg-white/10 hover:bg-[#d4af37] text-white hover:text-black border border-white/20'
                  }`}
                  title={isPlaying ? 'Pausar simulação' : 'Reproduzir simulação'}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>

                {/* Scrubber da Linha do Tempo */}
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                    jumpToTime(ratio * TOTAL_SIM_DURATION);
                  }}
                  className="relative flex-1 h-3 rounded-full bg-white/15 cursor-pointer overflow-hidden group hover:h-3.5 transition-all"
                  title="Clique para avançar ou voltar na simulação"
                >
                  <div
                    className="h-full bg-gradient-to-r from-red-500 via-amber-400 to-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-75"
                    style={{ width: `${(simTime / TOTAL_SIM_DURATION) * 100}%` }}
                  />
                </div>

                {/* Mostrador de Tempo */}
                <div className="font-mono text-xs font-bold text-[#f3e5ab] shrink-0">
                  {formatTime(simTime)} / {formatTime(TOTAL_SIM_DURATION)}
                </div>

                {/* Reset Button */}
                <button
                  type="button"
                  onClick={handleResetScene}
                  className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center text-xs transition-all cursor-pointer shrink-0"
                  title="Reiniciar simulação do início"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Linha Inferior: 8 Marcadores de Etapas Cinematográficas */}
              <div className="flex items-center justify-between gap-1 overflow-x-auto py-1 scrollbar-none">
                {CINEMATIC_ZOOM_STOPS.map((stop, idx) => {
                  const isActive = activeScenario === 'real_fire' && activeZoomIndex === idx;
                  return (
                    <button
                      key={stop.id}
                      type="button"
                      onClick={() => jumpToStage(idx)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#d4af37] text-black font-extrabold shadow-[0_0_12px_rgba(212,175,55,0.8)] scale-105'
                          : 'bg-black/60 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5'
                      }`}
                      title={stop.badgeTitle}
                    >
                      <span className="font-mono">{stop.label}.</span>
                      <span className="hidden md:inline">{stop.name}</span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* OS 4 BOTÕES DOURADOS ELEGANTES DE CONVERSÃO COMERCIAL SOLICITADOS POR MATHEUS */}
            {simStage === 'EXTINGUISHED' && (
              <div className="w-full max-w-5xl mx-auto mt-1 pt-2 border-t border-[#d4af37]/30 flex flex-col items-center gap-2.5 animate-fadeIn pointer-events-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Escolha a Melhor Solução para Seu Restaurante</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 w-full">
                  {/* Botão 1: Kit para Terceiros */}
                  <button
                    type="button"
                    onClick={handleOpenKitOnly}
                    className="p-3 rounded-2xl bg-gradient-to-b from-black/85 to-[#12161f] border border-[#d4af37]/50 hover:border-[#d4af37] text-left hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mb-2 group-hover:scale-110 transition-transform">
                        <Package className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black text-white group-hover:text-[#f3e5ab] block">
                        Kit de Equipamentos
                      </span>
                      <span className="text-[11px] text-gray-300 mt-0.5 block leading-tight">
                        Para montagem com terceiros, instaladores e revendas. Envio nacional.
                      </span>
                    </div>
                    <div className="mt-2.5 flex items-center gap-1 text-[11px] font-bold text-[#d4af37] group-hover:translate-x-1 transition-transform">
                      <span>Solicitar Cotação</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>

                  {/* Botão 2: Kit Completo + Instalação Outfire */}
                  <button
                    type="button"
                    onClick={handleOpenTurnkey}
                    className="p-3 rounded-2xl bg-gradient-to-b from-[#d4af37]/25 via-black/90 to-[#12161f] border-2 border-[#d4af37] hover:border-[#f3e5ab] text-left hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                  >
                    <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-[#d4af37] text-black text-[9px] font-black uppercase tracking-wider">
                      Mais Pedido
                    </span>
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-[#d4af37]/30 border border-[#d4af37]/60 flex items-center justify-center text-[#f3e5ab] mb-2 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black text-[#f3e5ab] group-hover:text-white block">
                        Kit + Instalação Outfire
                      </span>
                      <span className="text-[11px] text-gray-200 mt-0.5 block leading-tight">
                        Turnkey Noturna (sem parar a cozinha) + ART CREA e Laudo Bombeiros.
                      </span>
                    </div>
                    <div className="mt-2.5 flex items-center gap-1 text-[11px] font-extrabold text-[#f3e5ab] group-hover:translate-x-1 transition-transform">
                      <span>Orçamento Chave na Mão</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>

                  {/* Botão 3: Instalação & Manutenção */}
                  <button
                    type="button"
                    onClick={handleOpenMaintenance}
                    className="p-3 rounded-2xl bg-gradient-to-b from-black/85 to-[#12161f] border border-[#d4af37]/50 hover:border-[#d4af37] text-left hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mb-2 group-hover:scale-110 transition-transform">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black text-white group-hover:text-[#f3e5ab] block">
                        Instalação & Manutenção
                      </span>
                      <span className="text-[11px] text-gray-300 mt-0.5 block leading-tight">
                        Vistorias preventivas, recarga de saponificante/CO2 e adequação AVCB.
                      </span>
                    </div>
                    <div className="mt-2.5 flex items-center gap-1 text-[11px] font-bold text-[#d4af37] group-hover:translate-x-1 transition-transform">
                      <span>Agendar Vistoria</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>

                  {/* Botão 4: Conhecer a Central VTS 32S3 */}
                  <button
                    type="button"
                    onClick={handleOpenCentralDetails}
                    className="p-3 rounded-2xl bg-gradient-to-b from-black/85 to-[#12161f] border border-[#d4af37]/50 hover:border-[#d4af37] text-left hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mb-2 group-hover:scale-110 transition-transform">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black text-white group-hover:text-[#f3e5ab] block">
                        Central Outfire VTS 32S3
                      </span>
                      <span className="text-[11px] text-gray-300 mt-0.5 block leading-tight">
                        IHM touch digital, supervisão autônoma e conformidade integral NBR 14518.
                      </span>
                    </div>
                    <div className="mt-2.5 flex items-center gap-1 text-[11px] font-bold text-[#d4af37] group-hover:translate-x-1 transition-transform">
                      <span>Ver Especificações</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>
    </>
  );
};
