import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { 
  Flame, ShieldCheck, AlertOctagon, ZapOff, Wind, Droplets, 
  RotateCcw, Sparkles, BellRing, Eye, Camera, CheckCircle2,
  Volume2, ShieldAlert, Radio
} from 'lucide-react';

type SimState = 'STANDBY' | 'FIRE_ALARM' | 'SUPPRESSION' | 'EXTINGUISHED';

interface TelemetryData {
  temp: number;
  gasStatus: 'ABERTO' | 'CORTADO';
  exhaustStatus: 'LIGADO' | 'INTERTRAVADO';
  systemStatus: 'PRONTIDÃO' | 'ALERTA DE FOGO' | 'COMBATE ATIVO' | 'INCÊNDIO EXTINTO';
  countdown: number;
}

export const Hero3DScrollytelling: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Simulation State
  const [simState, setSimState] = useState<SimState>('STANDBY');
  const simStateRef = useRef<SimState>('STANDBY');
  simStateRef.current = simState;

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
  const steamGroupRef = useRef<THREE.Group | null>(null);

  // Camera Target Interpolation
  const targetCamPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 2.2, 4.4));
  const targetCamLook = useRef<THREE.Vector3>(new THREE.Vector3(0, 1.4, 0));

  // --- DRAW CENTRAL OUTFIRE FRONT PANEL CANVAS TEXTURE ---
  const updateCentralScreenTexture = useCallback(() => {
    let canvas = centralScreenCanvasRef.current;
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 740;
      centralScreenCanvasRef.current = canvas;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const state = simStateRef.current;
    const timeSec = countdownRef.current;

    // 1. Cabinet Base Plate (Deep Charcoal Metal)
    ctx.fillStyle = '#121418';
    ctx.fillRect(0, 0, 1024, 740);

    // Subtle brushed metal lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    for (let y = 10; y < 740; y += 8) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }

    // Outer Beveled Golden Border
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 4;
    ctx.strokeRect(16, 16, 992, 708);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(24, 24, 976, 692);

    // 2. Header: Outfire Logo & Technical Identification
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 38px "Outfit", Inter, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('OUTFIRE', 50, 70);

    ctx.fillStyle = '#e5c05d';
    ctx.font = '600 13px Inter, sans-serif';
    ctx.fillText('SISTEMA AUTOMÁTICO DE COMBATE A INCÊNDIO EM COZINHA INDUSTRIAL', 50, 94);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 11px monospace';
    ctx.fillText('CONFORME ABNT NBR 14518 / NFPA 96 & 17A', 50, 112);

    // 3. Left: Circular Perforated Audio Grill (Saída de Áudio)
    const grillCenterX = 130;
    const grillCenterY = 240;
    const grillRadius = 65;

    ctx.beginPath();
    ctx.arc(grillCenterX, grillCenterY, grillRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#0a0b0d';
    ctx.fill();
    ctx.strokeStyle = '#2a2e36';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Perforations
    ctx.fillStyle = '#1a1d24';
    for (let r = 12; r <= grillRadius - 10; r += 12) {
      const count = Math.floor((2 * Math.PI * r) / 12);
      for (let i = 0; i < count; i++) {
        const angle = (i * 2 * Math.PI) / count;
        const hx = grillCenterX + r * Math.cos(angle);
        const hy = grillCenterY + r * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(hx, hy, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('ALTO-FALANTE GUIA POR VOZ', grillCenterX, grillCenterY + grillRadius + 22);

    // 4. Center: Interactive 2.8" LCD/OLED Touchscreen
    const scrX = 260;
    const scrY = 145;
    const scrW = 440;
    const scrH = 340;

    // Screen Bezel
    ctx.fillStyle = '#05070a';
    ctx.fillRect(scrX - 8, scrY - 8, scrW + 16, scrH + 16);
    ctx.strokeStyle = '#27272a';
    ctx.lineWidth = 2;
    ctx.strokeRect(scrX - 8, scrY - 8, scrW + 16, scrH + 16);

    // Screen Inner Background
    if (state === 'STANDBY') {
      ctx.fillStyle = '#071318';
    } else if (state === 'FIRE_ALARM') {
      ctx.fillStyle = '#3a0808';
    } else if (state === 'SUPPRESSION') {
      ctx.fillStyle = '#3a1f04';
    } else {
      ctx.fillStyle = '#062419';
    }
    ctx.fillRect(scrX, scrY, scrW, scrH);

    // Screen Top Status Bar
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(scrX, scrY, scrW, 36);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('OUTFIRE IHM v3.2', scrX + 16, scrY + 23);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#10b981';
    ctx.fillText('BATERIA: 13.8V [100%]', scrX + scrW - 16, scrY + 23);

    // Screen Dynamic Content based on Simulation State
    if (state === 'STANDBY') {
      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 22px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('● SISTEMA PROTEGIDO', scrX + scrW / 2, scrY + 80);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '13px monospace';
      ctx.fillText('MONITORAMENTO TÉRMICO ATIVO', scrX + scrW / 2, scrY + 110);

      // Status Rows
      ctx.fillStyle = '#0f2922';
      ctx.fillRect(scrX + 24, scrY + 135, scrW - 48, 44);
      ctx.fillStyle = '#a7f3d0';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('SENSOR COIFA (145°C): OK', scrX + 36, scrY + 162);
      ctx.textAlign = 'right';
      ctx.fillText('180°C (OPERACIONAL)', scrX + scrW - 36, scrY + 162);

      ctx.fillStyle = '#0f2922';
      ctx.fillRect(scrX + 24, scrY + 190, scrW - 48, 44);
      ctx.fillStyle = '#a7f3d0';
      ctx.textAlign = 'left';
      ctx.fillText('SENSOR DUTO (300°C): OK', scrX + 36, scrY + 217);
      ctx.textAlign = 'right';
      ctx.fillText('75°C (NORMAL)', scrX + scrW - 36, scrY + 217);

      ctx.fillStyle = '#0f2922';
      ctx.fillRect(scrX + 24, scrY + 245, scrW - 48, 44);
      ctx.fillStyle = '#a7f3d0';
      ctx.textAlign = 'left';
      ctx.fillText('VÁLVULA SOLENOIDE DE GÁS:', scrX + 36, scrY + 272);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#34d399';
      ctx.fillText('ABERTA / LIBERADA', scrX + scrW - 36, scrY + 272);

      ctx.fillStyle = '#64748b';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('PRESSIONE O ACIONADOR MANUAL EM CASO DE EMERGÊNCIA', scrX + scrW / 2, scrY + 318);

    } else if (state === 'FIRE_ALARM') {
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 24px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🚨 FOGO DETECTADO! 🚨', scrX + scrW / 2, scrY + 75);

      ctx.fillStyle = '#fecaca';
      ctx.font = 'bold 13px Inter, sans-serif';
      ctx.fillText('SENSOR TÉRMICO SUPEROU 145°C', scrX + scrW / 2, scrY + 102);

      // Massive Countdown Clock
      ctx.fillStyle = '#1c0505';
      ctx.fillRect(scrX + 50, scrY + 120, scrW - 100, 95);
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.strokeRect(scrX + 50, scrY + 120, scrW - 100, 95);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 54px monospace';
      ctx.fillText(`00:0${Math.max(0, timeSec)}`, scrX + scrW / 2, scrY + 185);

      ctx.fillStyle = '#fca5a5';
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.fillText('DISPARO AUTOMÁTICO DE SAPONIFICANTE', scrX + scrW / 2, scrY + 240);

      ctx.fillStyle = '#f59e0b';
      ctx.font = '11px monospace';
      ctx.fillText('ACIONE O BOTAO MANUAL PARA DISPARO IMEDIATO', scrX + scrW / 2, scrY + 265);

      // Warning Box
      ctx.fillStyle = '#dc2626';
      ctx.fillRect(scrX + 24, scrY + 285, scrW - 48, 38);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.fillText('EVACUE A ÁREA DE COZIMENTO IMEDIATAMENTE', scrX + scrW / 2, scrY + 309);

    } else if (state === 'SUPPRESSION') {
      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 24px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('⚡ DISPARO ATIVO EM CURSO ⚡', scrX + scrW / 2, scrY + 80);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 15px monospace';
      ctx.fillText('DESCARGA DE SAPONIFICANTE & CO2', scrX + scrW / 2, scrY + 115);

      ctx.fillStyle = '#ef4444';
      ctx.fillRect(scrX + 24, scrY + 140, scrW - 48, 48);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px Inter, sans-serif';
      ctx.fillText('VÁLVULA DE GÁS: CORTADA (BLOQUEADA)', scrX + scrW / 2, scrY + 170);

      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(scrX + 24, scrY + 200, scrW - 48, 48);
      ctx.fillStyle = '#ffffff';
      ctx.fillText('EXAUSTOR: DESLIGADO (DAMPER FECHADO)', scrX + scrW / 2, scrY + 230);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = 'bold 13px Inter, sans-serif';
      ctx.fillText('ESPUMA ENCAPSULANDO O ÓLEO QUENTE', scrX + scrW / 2, scrY + 280);

      ctx.fillStyle = '#a7f3d0';
      ctx.font = '11px monospace';
      ctx.fillText('TEMPERATURA EM QUEDA DRÁSTICA...', scrX + scrW / 2, scrY + 310);

    } else if (state === 'EXTINGUISHED') {
      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 24px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('✓ INCÊNDIO EXTINTO COM SUCESSO', scrX + scrW / 2, scrY + 80);

      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 14px Inter, sans-serif';
      ctx.fillText('REIGNIÇÃO 100% IMPEDIDA (SAPONIFICAÇÃO)', scrX + scrW / 2, scrY + 115);

      ctx.fillStyle = '#064e3b';
      ctx.fillRect(scrX + 24, scrY + 140, scrW - 48, 44);
      ctx.fillStyle = '#6ee7b7';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('TEMPERATURA FINAL DO ÓLEO:', scrX + 36, scrY + 167);
      ctx.textAlign = 'right';
      ctx.fillText('42°C (TOTALMENTE RESFRIADO)', scrX + scrW - 36, scrY + 167);

      ctx.fillStyle = '#064e3b';
      ctx.fillRect(scrX + 24, scrY + 195, scrW - 48, 44);
      ctx.fillStyle = '#6ee7b7';
      ctx.textAlign = 'left';
      ctx.fillText('INTERTRAVAMENTO DE SEGURANÇA:', scrX + 36, scrY + 222);
      ctx.textAlign = 'right';
      ctx.fillText('ATIVO / SEGURO', scrX + scrW - 36, scrY + 222);

      ctx.fillStyle = '#064e3b';
      ctx.fillRect(scrX + 24, scrY + 250, scrW - 48, 44);
      ctx.fillStyle = '#6ee7b7';
      ctx.textAlign = 'left';
      ctx.fillText('COZINHA & PESSOAS:', scrX + 36, scrY + 277);
      ctx.textAlign = 'right';
      ctx.fillText('100% PRESERVADAS', scrX + scrW - 36, scrY + 277);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('SISTEMA PRONTO PARA LIMPEZA COM ÁGUA E REARME', scrX + scrW / 2, scrY + 318);
    }

    // 5. Right: Technical Operation Instructions (Silkscreen)
    const instX = 720;
    const instY = 145;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('🛡️ GUIA DE OPERAÇÃO', instX, instY + 15);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px Inter, sans-serif';
    const lines = [
      'SISTEMA DE VOZ FALADA:',
      'A central avisa em áudio qualquer alteração.',
      '',
      '🟢 TUDO VERDE = OPERANDO',
      'Cozinha Protegida (CO2 e Saponificante OK).',
      '',
      '🔴 TELA VERMELHA = ALERTA',
      'Temperatura na coifa > 145°C.',
      'Disparo automático em 10 segundos.',
      '',
      '🚨 ACIONADOR MANUAL:',
      'Puxe a alavanca da botoeira para supressão',
      'imediata sem esperar o timer.',
      '',
      '⚡ CORTE AUTOMÁTICO:',
      'Válvula solenoide de gás fecha e exaustor',
      'intertrava para abafar o oxigênio.'
    ];

    let lineY = instY + 40;
    lines.forEach((l) => {
      ctx.fillText(l, instX, lineY);
      lineY += 15;
    });

    // 6. Bottom Banner: Red Safety Emergency Banner
    ctx.fillStyle = '#b91c1c';
    ctx.fillRect(30, 520, 964, 170);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 28px "Outfit", Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('EM CASO DE INCÊNDIO EVACUAR O LOCAL', 512, 565);

    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 15px Inter, sans-serif';
    ctx.fillText('AOS 144°C O SISTEMA DISPARA AUTOMATICAMENTE. SE NECESSÁRIO, ACIONE A BOTOEIRA MANUAL.', 512, 600);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px monospace';
    ctx.fillText('MANUTENÇÃO & SUPORTE TÉCNICO: (15) 99657-6807  |  WWW.OUTFIRE.COM.BR', 512, 635);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '10px monospace';
    ctx.fillText('EQUIPAMENTO HOMOLOGADO PARA COZINHAS INDUSTRIAIS - ABNT NBR 14518 / CORPO DE BOMBEIROS (AVCB)', 512, 665);

    if (centralScreenTextureRef.current) {
      centralScreenTextureRef.current.needsUpdate = true;
    }
  }, []);

  // --- ACTIONS: START FIRE SIMULATION ---
  const handleStartFire = useCallback(() => {
    if (simStateRef.current === 'FIRE_ALARM') return;
    setSimState('FIRE_ALARM');
    setCountdown(10);
    setTelemetry((prev) => ({
      ...prev,
      temp: 365,
      gasStatus: 'ABERTO',
      exhaustStatus: 'LIGADO',
      systemStatus: 'ALERTA DE FOGO',
      countdown: 10,
    }));
  }, []);

  // --- ACTIONS: MANUAL TRIGGER (BOTOEIRA) ---
  const handleManualTrigger = useCallback(() => {
    if (simStateRef.current === 'SUPPRESSION' || simStateRef.current === 'EXTINGUISHED') return;
    setSimState('SUPPRESSION');
    setCountdown(0);
    setTelemetry((prev) => ({
      ...prev,
      temp: 140,
      gasStatus: 'CORTADO',
      exhaustStatus: 'INTERTRAVADO',
      systemStatus: 'COMBATE ATIVO',
      countdown: 0,
    }));

    // Pull lever visual animation in 3D
    if (manualPullLeverRef.current) {
      manualPullLeverRef.current.rotation.x = 0.65;
    }

    // After 3.5 seconds of high-pressure saponificant, transition to EXTINGUISHED
    setTimeout(() => {
      setSimState('EXTINGUISHED');
      setTelemetry((prev) => ({
        ...prev,
        temp: 42,
        gasStatus: 'CORTADO',
        exhaustStatus: 'INTERTRAVADO',
        systemStatus: 'INCÊNDIO EXTINTO',
        countdown: 0,
      }));
    }, 3800);
  }, []);

  // --- ACTIONS: RESET SCENE ---
  const handleResetScene = useCallback(() => {
    setSimState('STANDBY');
    setCountdown(10);
    setTelemetry({
      temp: 180,
      gasStatus: 'ABERTO',
      exhaustStatus: 'LIGADO',
      systemStatus: 'PRONTIDÃO',
      countdown: 10,
    });
    if (manualPullLeverRef.current) {
      manualPullLeverRef.current.rotation.x = 0;
    }
    if (foamBlanketMeshRef.current) {
      foamBlanketMeshRef.current.scale.set(0.001, 0.001, 0.001);
      foamBlanketMeshRef.current.visible = false;
    }
  }, []);

  // Countdown Timer Effect
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (simState === 'FIRE_ALARM') {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            handleManualTrigger();
            return 0;
          }
          const next = prev - 1;
          setTelemetry((t) => ({ ...t, countdown: next }));
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [simState, handleManualTrigger]);

  // Update canvas texture whenever state or countdown changes
  useEffect(() => {
    updateCentralScreenTexture();
  }, [simState, countdown, updateCentralScreenTexture]);

  // Camera Quick Jump
  const setCameraView = (view: 'geral' | 'central' | 'fritadeira' | 'botoeira') => {
    setActiveCameraView(view);
    if (view === 'geral') {
      targetCamPos.current.set(0, 2.2, 4.4);
      targetCamLook.current.set(0, 1.4, 0);
    } else if (view === 'central') {
      targetCamPos.current.set(2.0, 1.85, 1.6);
      targetCamLook.current.set(2.1, 1.8, 0.15);
    } else if (view === 'fritadeira') {
      targetCamPos.current.set(-0.2, 1.4, 2.2);
      targetCamLook.current.set(-0.2, 1.0, 0);
    } else if (view === 'botoeira') {
      targetCamPos.current.set(1.4, 1.45, 1.3);
      targetCamLook.current.set(1.45, 1.4, 0.05);
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
    scene.background = new THREE.Color(0x0a0c10);
    scene.fog = new THREE.FogExp2(0x0a0c10, 0.035);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 4.4);
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
    renderer.toneMappingExposure = 1.1;
    rendererRef.current = renderer;

    // 4. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.05;
    controls.minDistance = 1.2;
    controls.maxDistance = 8.0;
    controls.target.set(0, 1.4, 0);
    controlsRef.current = controls;

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xfff6ea, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(4, 6, 4);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // Kitchen Wall Light (Warm Gold Under Hood)
    const hoodSpot = new THREE.SpotLight(0xffd7a0, 2.5, 6, Math.PI / 3, 0.3);
    hoodSpot.position.set(0, 2.7, 0);
    hoodSpot.target.position.set(0, 0.9, 0);
    scene.add(hoodSpot);
    scene.add(hoodSpot.target);

    // Dynamic Fire Point Light (Flickers during fire)
    const fireLight = new THREE.PointLight(0xff5500, 0, 5);
    fireLight.position.set(-0.35, 1.2, 0.1);
    scene.add(fireLight);
    fireLightRef.current = fireLight;

    // Strobe Beacon Siren Light on Central
    const strobeLight = new THREE.PointLight(0xff0000, 0, 8);
    strobeLight.position.set(2.1, 2.25, 0.2);
    scene.add(strobeLight);
    centralStrobeLightRef.current = strobeLight;

    // --- MATERIALS ---
    const matStainlessSteel = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.9,
      roughness: 0.22,
    });

    const matDarkTile = new THREE.MeshStandardMaterial({
      color: 0x181a1f,
      roughness: 0.6,
      metalness: 0.1,
    });

    const matFloor = new THREE.MeshStandardMaterial({
      color: 0x0f1115,
      roughness: 0.8,
      metalness: 0.2,
    });

    // 6. Kitchen Environment (Room)
    // Floor
    const floorGeo = new THREE.PlaneGeometry(14, 14);
    const floor = new THREE.Mesh(floorGeo, matFloor);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Back Wall
    const wallGeo = new THREE.PlaneGeometry(14, 8);
    const backWall = new THREE.Mesh(wallGeo, matDarkTile);
    backWall.position.set(0, 4, -1.2);
    backWall.receiveShadow = true;
    scene.add(backWall);

    // Left Wall
    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(14, 8), matDarkTile);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-4.5, 4, 0);
    scene.add(leftWall);

    // 7. Kitchen Cooking Counter & Appliances (Cooktop + Fryer)
    const counterGroup = new THREE.Group();
    scene.add(counterGroup);

    // Stainless Steel Table Body
    const counterBody = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 0.9, 1.0),
      matStainlessSteel
    );
    counterBody.position.set(0, 0.45, 0);
    counterBody.castShadow = true;
    counterBody.receiveShadow = true;
    counterGroup.add(counterBody);

    // Industrial Deep Fryer (Left side of counter)
    const fryerGroup = new THREE.Group();
    fryerGroup.position.set(-0.55, 0.9, 0);
    counterGroup.add(fryerGroup);
    fryerGroupRef.current = fryerGroup;

    // Fryer Basin (Depression)
    const fryerRim = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, 0.12, 0.75),
      matStainlessSteel
    );
    fryerRim.position.set(0, 0.06, 0);
    fryerGroup.add(fryerRim);

    // Hot Cooking Oil Surface
    const oilGeo = new THREE.BoxGeometry(0.72, 0.02, 0.62);
    const oilMat = new THREE.MeshStandardMaterial({
      color: 0x92400e,
      roughness: 0.1,
      metalness: 0.3,
    });
    const oilMesh = new THREE.Mesh(oilGeo, oilMat);
    oilMesh.position.set(0, 0.11, 0);
    fryerGroup.add(oilMesh);

    // Fryer Baskets (Handles)
    const basketHandleMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5 });
    const handle1 = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.28), basketHandleMat);
    handle1.position.set(-0.16, 0.22, 0.34);
    handle1.rotation.x = Math.PI / 3;
    fryerGroup.add(handle1);

    const handle2 = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.28), basketHandleMat);
    handle2.position.set(0.16, 0.22, 0.34);
    handle2.rotation.x = Math.PI / 3;
    fryerGroup.add(handle2);

    // Industrial Cooktop / Griddle (Right side of counter)
    const stoveGroup = new THREE.Group();
    stoveGroup.position.set(0.65, 0.9, 0);
    counterGroup.add(stoveGroup);

    const griddlePlate = new THREE.Mesh(
      new THREE.BoxGeometry(0.95, 0.06, 0.75),
      new THREE.MeshStandardMaterial({ color: 0x333338, roughness: 0.4, metalness: 0.7 })
    );
    griddlePlate.position.set(0, 0.03, 0);
    stoveGroup.add(griddlePlate);

    // 8. Industrial Exhaust Hood (Coifa com Duto e Pleno NBR 14518)
    const hoodGroup = new THREE.Group();
    hoodGroup.position.set(0, 2.3, 0);
    scene.add(hoodGroup);

    // Main Hood Canopy (Inverted trapezoid)
    const hoodGeo = new THREE.BoxGeometry(2.8, 0.6, 1.2);
    const hoodMesh = new THREE.Mesh(hoodGeo, matStainlessSteel);
    hoodMesh.castShadow = true;
    hoodGroup.add(hoodMesh);

    // Baffle Filters (Filtros Inerciais corta-fogo em aço inox)
    const filterMat = new THREE.MeshStandardMaterial({ color: 0x999999, metalness: 0.9, roughness: 0.3 });
    for (let f = -1.0; f <= 1.0; f += 0.5) {
      const filter = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.35, 0.04), filterMat);
      filter.position.set(f, -0.15, 0);
      filter.rotation.x = -Math.PI / 6;
      hoodGroup.add(filter);
    }

    // Exhaust Duct going into ceiling
    const ductGeo = new THREE.CylinderGeometry(0.28, 0.28, 1.5, 32);
    const ductMesh = new THREE.Mesh(ductGeo, matStainlessSteel);
    ductMesh.position.set(0, 1.0, 0);
    hoodGroup.add(ductMesh);

    // 9. Fire Suppression Piping & Specialized Nozzles
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.8, roughness: 0.3 }); // Brass/copper piping
    const nozzleMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 }); // Gold/brass nozzles

    // Horizontal pipe under hood
    const mainPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 2.4), pipeMat);
    mainPipe.rotation.z = Math.PI / 2;
    mainPipe.position.set(0, -0.28, -0.2);
    hoodGroup.add(mainPipe);

    // 4 Saponificant Nozzles (2 over fryers, 1 over stove, 1 at duct entrance)
    const nozzlePositions = [
      [-0.7, -0.32, 0.0],
      [-0.35, -0.32, 0.0],
      [0.45, -0.32, 0.0],
      [0.85, -0.32, 0.0],
    ];

    nozzlePositions.forEach(([nx, ny, nz]) => {
      const noz = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.06, 16), nozzleMat);
      noz.position.set(nx, ny, nz);
      noz.rotation.x = Math.PI; // pointing down
      hoodGroup.add(noz);
    });

    // Thermal Sensors (Bulbo / Termostato Regulável 145°C)
    const sensorMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.2 });
    const sensor1 = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.08), sensorMat);
    sensor1.position.set(-0.55, -0.25, 0.1);
    hoodGroup.add(sensor1);

    const sensorDuct = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.08), sensorMat);
    sensorDuct.position.set(0, 0.4, 0);
    hoodGroup.add(sensorDuct);

    // 10. RECONSTRUCTED CENTRAL OUTFIRE VTS 32S3 (REAL CAD PROPORTIONS)
    // Dimensions from outfire-projetos: 360 x 260 x 150 mm -> In world: 0.72 x 0.52 x 0.24
    const centralGroup = new THREE.Group();
    // Mounted prominently on the wall to the right of the cooking hood, at eye level
    centralGroup.position.set(2.1, 1.8, 0.15);
    centralGroup.rotation.y = -0.28; // Turned gently toward user
    scene.add(centralGroup);
    centralGroupRef.current = centralGroup;
    centralGroup.userData = { interactiveType: 'central', name: 'Central Outfire VTS 32S3' };

    // Canvas Texture for Front Face
    updateCentralScreenTexture();
    const centralTexture = new THREE.CanvasTexture(centralScreenCanvasRef.current!);
    centralTexture.colorSpace = THREE.SRGBColorSpace;
    centralScreenTextureRef.current = centralTexture;

    const matCabinetMetal = new THREE.MeshStandardMaterial({
      color: 0x17191d,
      roughness: 0.45,
      metalness: 0.8,
    });

    const matFrontPanel = new THREE.MeshStandardMaterial({
      map: centralTexture,
      roughness: 0.35,
      metalness: 0.3,
    });

    // 6-Sided Box with authentic front face
    const centralBodyMaterials = [
      matCabinetMetal, // right
      matCabinetMetal, // left
      matCabinetMetal, // top
      matCabinetMetal, // bottom
      matFrontPanel,   // FRONT (High-res canvas texture!)
      matCabinetMetal  // back
    ];

    const centralCabinet = new THREE.Mesh(
      new THREE.BoxGeometry(0.72, 0.52, 0.22),
      centralBodyMaterials
    );
    centralCabinet.castShadow = true;
    centralGroup.add(centralCabinet);

    // Top Electrical Conduit going to ceiling
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

    // Bottom Battery Bracket Shelf
    const batShelf = new THREE.Mesh(
      new THREE.BoxGeometry(0.68, 0.02, 0.20),
      matCabinetMetal
    );
    batShelf.position.set(0, -0.32, 0);
    centralGroup.add(batShelf);

    // Dual 12V 7Ah Pionero Backup Batteries
    const batMat = new THREE.MeshStandardMaterial({ color: 0x090a0c, roughness: 0.5 });
    const bat1 = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.15, 0.14), batMat);
    bat1.position.set(-0.16, -0.23, 0);
    centralGroup.add(bat1);

    const bat2 = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.15, 0.14), batMat);
    bat2.position.set(0.16, -0.23, 0);
    centralGroup.add(bat2);

    // Battery Blue Terminals
    const termMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, metalness: 0.7 });
    const t1 = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.02), termMat);
    t1.position.set(-0.22, -0.14, 0.04);
    centralGroup.add(t1);

    const t2 = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.02), termMat);
    t2.position.set(0.10, -0.14, 0.04);
    centralGroup.add(t2);

    // 11. CLICKABLE 3D MANUAL PULL STATION (ACIONADOR MANUAL / BOTOEIRA)
    const manualGroup = new THREE.Group();
    manualGroup.position.set(1.45, 1.4, 0.08); // Right at eye-level on the wall
    scene.add(manualGroup);
    manualStationMeshRef.current = manualGroup;
    manualGroup.userData = { interactiveType: 'botoeira', name: 'Acionador Manual de Emergência' };

    // Red Enclosure Box
    const stationBoxMat = new THREE.MeshStandardMaterial({
      color: 0xcc1111,
      roughness: 0.3,
      metalness: 0.3,
    });
    const stationBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.24, 0.08),
      stationBoxMat
    );
    stationBox.castShadow = true;
    manualGroup.add(stationBox);

    // Front Clear Glass / Plastic Frame
    const glassFrameMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
    });
    const glass = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.18, 0.015), glassFrameMat);
    glass.position.set(0, 0, 0.042);
    manualGroup.add(glass);

    // Yellow Pull Lever (Puxe / Acione)
    const leverMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3 });
    const lever = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.06, 0.025), leverMat);
    lever.position.set(0, -0.01, 0.048);
    manualGroup.add(lever);
    manualPullLeverRef.current = lever;

    // Status LED on Station
    const stationLed = new THREE.Mesh(
      new THREE.SphereGeometry(0.012, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x22c55e })
    );
    stationLed.position.set(0, 0.085, 0.045);
    manualGroup.add(stationLed);

    // 12. SAPONIFICANT FOAM BLANKET MESH (Formed over hot oil during suppression)
    const foamGeo = new THREE.BoxGeometry(0.74, 0.08, 0.64);
    const foamMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.9,
      metalness: 0.05,
      bumpScale: 0.05,
    });
    const foamBlanket = new THREE.Mesh(foamGeo, foamMat);
    foamBlanket.position.set(-0.55, 1.05, 0);
    foamBlanket.scale.set(0.001, 0.001, 0.001);
    foamBlanket.visible = false;
    scene.add(foamBlanket);
    foamBlanketMeshRef.current = foamBlanket;

    // 13. PARTICLE SYSTEMS
    // A. Fire Particles
    const fireGroup = new THREE.Group();
    scene.add(fireGroup);
    fireParticlesGroupRef.current = fireGroup;

    const fireParticlesCount = 65;
    const fireGeo = new THREE.DodecahedronGeometry(0.08, 1);
    const fireMat = new THREE.MeshBasicMaterial({
      color: 0xff4500,
      transparent: true,
      opacity: 0.85,
    });

    const fireMeshes: THREE.Mesh[] = [];
    for (let i = 0; i < fireParticlesCount; i++) {
      const p = new THREE.Mesh(fireGeo, fireMat.clone());
      p.position.set(
        -0.55 + (Math.random() - 0.5) * 0.5,
        1.05 + Math.random() * 0.4,
        (Math.random() - 0.5) * 0.4
      );
      p.userData = {
        baseY: 1.05,
        speedY: 0.8 + Math.random() * 1.5,
        rndX: (Math.random() - 0.5) * 0.3,
        rndZ: (Math.random() - 0.5) * 0.3,
        scale: 0.4 + Math.random() * 0.8,
      };
      fireGroup.add(p);
      fireMeshes.push(p);
    }

    // B. Dark Smoke Particles
    const smokeGroup = new THREE.Group();
    scene.add(smokeGroup);
    smokeParticlesGroupRef.current = smokeGroup;

    const smokeCount = 50;
    const smokeGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const smokeMat = new THREE.MeshBasicMaterial({
      color: 0x1f242d,
      transparent: true,
      opacity: 0.4,
    });

    const smokeMeshes: THREE.Mesh[] = [];
    for (let i = 0; i < smokeCount; i++) {
      const sm = new THREE.Mesh(smokeGeo, smokeMat.clone());
      sm.position.set(
        -0.55 + (Math.random() - 0.5) * 0.6,
        1.3 + Math.random() * 1.0,
        (Math.random() - 0.5) * 0.4
      );
      sm.userData = {
        speedY: 0.6 + Math.random() * 1.0,
        maxH: 2.2,
      };
      smokeGroup.add(sm);
      smokeMeshes.push(sm);
    }

    // C. Saponificant Spray Cones (High-Pressure Foam Mist from Nozzles)
    const sprayGroup = new THREE.Group();
    scene.add(sprayGroup);
    foamSprayGroupRef.current = sprayGroup;

    const sprayCount = 80;
    const sprayGeo = new THREE.SphereGeometry(0.025, 8, 8);
    const sprayMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });
    const sprayMeshes: THREE.Mesh[] = [];

    for (let i = 0; i < sprayCount; i++) {
      const sp = new THREE.Mesh(sprayGeo, sprayMat);
      sp.position.set(-0.55, 1.9, 0);
      sp.userData = {
        origY: 1.98,
        speed: 3.5 + Math.random() * 2.0,
        spread: (Math.random() - 0.5) * 0.4,
      };
      sprayGroup.add(sp);
      sprayMeshes.push(sp);
    }

    // D. CO2 Vapor Cloud at Duct Entrance
    const co2Group = new THREE.Group();
    scene.add(co2Group);
    co2FogGroupRef.current = co2Group;

    const co2Count = 35;
    const co2Geo = new THREE.SphereGeometry(0.16, 8, 8);
    const co2Mat = new THREE.MeshBasicMaterial({ color: 0xe2e8f0, transparent: true, opacity: 0.4 });
    const co2Meshes: THREE.Mesh[] = [];

    for (let i = 0; i < co2Count; i++) {
      const c = new THREE.Mesh(co2Geo, co2Mat.clone());
      c.position.set((Math.random() - 0.5) * 0.4, 2.7 + Math.random() * 0.5, (Math.random() - 0.5) * 0.3);
      co2Group.add(c);
      co2Meshes.push(c);
    }

    // 14. RAYCASTER FOR 3D CLICK & HOVER INTERACTION
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([manualGroup, centralGroup, fryerGroup], true);

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
      const intersects = raycaster.intersectObjects([manualGroup, centralGroup, fryerGroup], true);

      if (intersects.length > 0) {
        let root: THREE.Object3D | null = intersects[0].object;
        while (root && !root.userData?.interactiveType && root.parent) {
          root = root.parent;
        }
        if (root?.userData?.interactiveType === 'botoeira') {
          handleManualTrigger();
        } else if (root?.userData?.interactiveType === 'central') {
          setCameraView('central');
        }
      }
    };

    renderer.domElement.addEventListener('mousemove', onPointerMove);
    renderer.domElement.addEventListener('click', onPointerDown);

    // 15. WINDOW RESIZE
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 16. ANIMATION RENDER LOOP
    let animId: number;
    const clock = new THREE.Clock();

    const render = () => {
      animId = requestAnimationFrame(render);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth Camera Positioning towards target
      camera.position.lerp(targetCamPos.current, 0.05);
      controls.target.lerp(targetCamLook.current, 0.05);
      controls.update();

      const currentState = simStateRef.current;

      // --- ANIMATE FIRE PARTICLES ---
      if (currentState === 'FIRE_ALARM') {
        fireGroup.visible = true;
        smokeGroup.visible = true;
        foamSprayGroupRef.current!.visible = false;
        co2FogGroupRef.current!.visible = false;

        // Flicker Fire Light
        if (fireLightRef.current) {
          fireLightRef.current.intensity = 2.5 + Math.sin(time * 20) * 1.5 + Math.cos(time * 33) * 0.8;
          fireLightRef.current.color.setHex(Math.random() > 0.3 ? 0xff4500 : 0xffaa00);
        }

        // Animate Flames Rising
        fireMeshes.forEach((mesh, idx) => {
          mesh.visible = true;
          mesh.position.y += mesh.userData.speedY * delta;
          mesh.position.x += Math.sin(time * 10 + idx) * 0.006;
          const progress = (mesh.position.y - mesh.userData.baseY) / 1.0;
          mesh.scale.setScalar(Math.max(0.01, (1 - progress) * mesh.userData.scale));
          (mesh.material as THREE.MeshBasicMaterial).opacity = 1 - progress;

          if (mesh.position.y > mesh.userData.baseY + 0.9) {
            mesh.position.y = mesh.userData.baseY;
            mesh.position.x = -0.55 + (Math.random() - 0.5) * 0.5;
            mesh.position.z = (Math.random() - 0.5) * 0.4;
          }
        });

        // Animate Smoke Rising
        smokeMeshes.forEach((sm) => {
          sm.visible = true;
          sm.position.y += sm.userData.speedY * delta;
          sm.scale.addScalar(0.005);
          if (sm.position.y > sm.userData.maxH) {
            sm.position.y = 1.3;
            sm.scale.set(1, 1, 1);
            sm.position.x = -0.55 + (Math.random() - 0.5) * 0.4;
          }
        });

        // Strobe Siren Flash on Central
        const strobe = Math.sin(time * 24) > 0;
        if (centralStrobeLightRef.current && centralStrobeMeshRef.current) {
          centralStrobeLightRef.current.intensity = strobe ? 5.0 : 0.0;
          (centralStrobeMeshRef.current.material as THREE.MeshStandardMaterial).emissive = strobe
            ? new THREE.Color(0xff0000)
            : new THREE.Color(0x000000);
        }

      } else if (currentState === 'SUPPRESSION') {
        // High-velocity Saponificant Discharge & CO2
        fireGroup.visible = true;
        foamSprayGroupRef.current!.visible = true;
        co2FogGroupRef.current!.visible = true;

        // Shrink Fire Particles rapidly
        fireMeshes.forEach((mesh) => {
          mesh.scale.multiplyScalar(0.92);
          if (mesh.scale.x < 0.05) mesh.visible = false;
        });
        if (fireLightRef.current) {
          fireLightRef.current.intensity = Math.max(0, fireLightRef.current.intensity - delta * 4);
        }

        // Animate Saponificant Spray Cones Downward
        sprayMeshes.forEach((sp, idx) => {
          sp.visible = true;
          sp.position.y -= sp.userData.speed * delta;
          sp.position.x += Math.sin(time * 15 + idx) * 0.01;
          if (sp.position.y < 1.05) {
            sp.position.y = sp.userData.origY;
            sp.position.x = -0.55 + sp.userData.spread;
          }
        });

        // Expand Foam Blanket Layer
        if (foamBlanketMeshRef.current) {
          foamBlanketMeshRef.current.visible = true;
          foamBlanketMeshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.08);
        }

        // CO2 Vapor Turbulence
        co2Meshes.forEach((c, idx) => {
          c.visible = true;
          c.position.y += Math.sin(time * 3 + idx) * 0.004;
          c.position.x += Math.cos(time * 2 + idx) * 0.004;
        });

        // Fast Strobe Light
        const strobe = Math.sin(time * 30) > 0;
        if (centralStrobeLightRef.current && centralStrobeMeshRef.current) {
          centralStrobeLightRef.current.intensity = strobe ? 4.0 : 0.2;
          (centralStrobeMeshRef.current.material as THREE.MeshStandardMaterial).emissive = strobe
            ? new THREE.Color(0xff0000)
            : new THREE.Color(0x330000);
        }

      } else if (currentState === 'EXTINGUISHED') {
        // Safe & Protected State
        fireGroup.visible = false;
        smokeGroup.visible = false;
        foamSprayGroupRef.current!.visible = false;
        co2FogGroupRef.current!.visible = false;
        if (fireLightRef.current) fireLightRef.current.intensity = 0;

        // Foam Blanket remains over fryer
        if (foamBlanketMeshRef.current) {
          foamBlanketMeshRef.current.visible = true;
          foamBlanketMeshRef.current.scale.set(1, 1, 1);
        }

        // Siren off
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

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', onPointerMove);
      renderer.domElement.removeEventListener('click', onPointerDown);
      renderer.dispose();
    };
  }, [handleManualTrigger, updateCentralScreenTexture]);

  return (
    <section 
      id="hero-3d" 
      ref={mountRef} 
      className="relative w-full h-[90vh] min-h-[640px] bg-[#07080a] overflow-hidden flex flex-col justify-between select-none"
    >
      {/* 1. THREE.JS 3D WEBGL CANVAS (EXPANSIVE & CINEMATIC) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block z-0 outline-none"
      />

      {/* 2. TOP FLOATING HUD OVERLAY (STATUS & TELEMETRY) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none">
        
        {/* Left: System Badge & Real-time State */}
        <div className="flex flex-col gap-1.5 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/40 shadow-glow-gold text-xs font-bold text-[#f3e5ab]">
            <Radio className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
            <span>Simulador 3D Autônomo Outfire</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span className="text-[11px] font-mono text-gray-300">NBR 14518</span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-lg text-xs font-black tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md border ${
              simState === 'STANDBY' 
                ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300' 
                : simState === 'FIRE_ALARM'
                ? 'bg-red-950/90 border-red-500 text-red-200 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                : simState === 'SUPPRESSION'
                ? 'bg-amber-950/90 border-amber-500 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                : 'bg-emerald-900/90 border-emerald-400 text-emerald-200'
            }`}>
              {simState === 'STANDBY' && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
              {simState === 'FIRE_ALARM' && <Flame className="w-4 h-4 text-red-400 animate-bounce" />}
              {simState === 'SUPPRESSION' && <Droplets className="w-4 h-4 text-amber-300 animate-spin" />}
              {simState === 'EXTINGUISHED' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
              {telemetry.systemStatus}
            </span>

            {simState === 'FIRE_ALARM' && (
              <span className="px-2.5 py-1 rounded-lg bg-red-600 text-white font-mono font-black text-xs animate-ping">
                DISPARO EM {countdown}s
              </span>
            )}
          </div>
        </div>

        {/* Right: Real-time Telemetry Chips (Gas, Exhaust, Temp) */}
        <div className="flex items-center gap-2 pointer-events-auto bg-black/75 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl">
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

      {/* 3. HOVER OBJECT TOOLTIP (3D RAYCASTING) */}
      {hoveredObjectName && (
        <div className="absolute top-28 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/60 text-xs text-[#f3e5ab] font-bold shadow-glow-gold flex items-center gap-2 animate-pulse">
          <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>{hoveredObjectName} — Clique para interagir</span>
        </div>
      )}

      {/* 4. BOTTOM FLOATING TACTICAL CONTROLS (EXPANSIVE, CLEAN & COMPACT) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Main Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Fire Trigger Button */}
          {simState === 'STANDBY' && (
            <button
              onClick={handleStartFire}
              className="py-3 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-amber-600 to-red-600 hover:brightness-110 text-white font-extrabold text-sm shadow-[0_0_25px_rgba(239,68,68,0.5)] flex items-center gap-2.5 transition-all duration-300 active:scale-95 border border-red-400/40"
            >
              <Flame className="w-4 h-4 animate-bounce" />
              <span>Simular Superaquecimento & Fogo (145°C)</span>
            </button>
          )}

          {/* Emergency Manual Pull Station Button (Acionador Manual) */}
          <button
            onClick={handleManualTrigger}
            disabled={simState === 'SUPPRESSION' || simState === 'EXTINGUISHED'}
            className={`py-3 px-6 rounded-2xl font-black text-sm flex items-center gap-2.5 transition-all duration-300 border ${
              simState === 'FIRE_ALARM'
                ? 'bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white border-white animate-pulse shadow-[0_0_35px_rgba(225,29,72,0.8)] scale-105'
                : simState === 'STANDBY'
                ? 'bg-[#181212]/90 hover:bg-red-950/80 text-red-300 border-red-500/40 shadow-lg'
                : 'bg-white/5 text-gray-500 border-white/5 cursor-not-allowed opacity-50'
            }`}
          >
            <AlertOctagon className="w-4 h-4 text-red-400" />
            <span>🚨 Disparar Acionador Manual (Botoeira)</span>
          </button>

          {/* Reset Scenario Button */}
          {(simState === 'EXTINGUISHED' || simState === 'FIRE_ALARM' || simState === 'SUPPRESSION') && (
            <button
              onClick={handleResetScene}
              className="py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-2 border border-white/15 transition-all duration-200 active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Cozinha</span>
            </button>
          )}

        </div>

        {/* Camera Quick Views & Interaction Guide */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 bg-black/70 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 text-xs">
            <span className="text-[10px] text-gray-400 px-2 font-mono flex items-center gap-1">
              <Camera className="w-3 h-3 text-[#d4af37]" /> Câmera:
            </span>
            <button
              onClick={() => setCameraView('geral')}
              className={`px-3 py-1 rounded-xl font-bold transition-all ${
                activeCameraView === 'geral' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
              }`}
            >
              Panorâmica
            </button>
            <button
              onClick={() => setCameraView('central')}
              className={`px-3 py-1 rounded-xl font-bold transition-all ${
                activeCameraView === 'central' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
              }`}
            >
              Central Outfire
            </button>
            <button
              onClick={() => setCameraView('fritadeira')}
              className={`px-3 py-1 rounded-xl font-bold transition-all ${
                activeCameraView === 'fritadeira' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
              }`}
            >
              Fritadeira & Bicos
            </button>
            <button
              onClick={() => setCameraView('botoeira')}
              className={`px-3 py-1 rounded-xl font-bold transition-all ${
                activeCameraView === 'botoeira' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
              }`}
            >
              Botoeira
            </button>
          </div>

          <div className="hidden lg:flex items-center text-[11px] text-[#f3e5ab]/80 bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-[#d4af37]/20">
            <span>🖱️ Arraste para orbitar 360° | Scroll para Zoom</span>
          </div>
        </div>

      </div>

    </section>
  );
};
