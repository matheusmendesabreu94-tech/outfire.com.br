import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { 
  Flame, ShieldCheck, AlertOctagon, ZapOff, Wind, Droplets, 
  RotateCcw, Sparkles, BellRing, Eye, Camera, CheckCircle2,
  ChevronDown, Radio
} from 'lucide-react';

type SimStage = 'STANDBY' | 'HEATING' | 'FIRE_ALARM' | 'SUPPRESSION' | 'EXTINGUISHED';

interface TelemetryData {
  temp: number;
  gasStatus: 'ABERTO' | 'CORTADO';
  exhaustStatus: 'LIGADO' | 'INTERTRAVADO';
  systemStatus: 'PRONTIDÃO' | 'AQUECIMENTO' | 'ALERTA DE FOGO' | 'COMBATE ATIVO' | 'INCÊNDIO EXTINTO';
  countdown: number;
}

export const Hero3DScrollytelling: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Scrollytelling Scroll Progress (0 to 1)
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const scrollProgressRef = useRef<number>(0);

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

  // Camera Target Interpolation
  const targetCamPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 2.2, 4.4));
  const targetCamLook = useRef<THREE.Vector3>(new THREE.Vector3(0, 1.4, 0));

  // --- DRAW CENTRAL LCD DIGITAL TOUCHSCREEN CANVAS TEXTURE ---
  const updateLcdScreenTexture = useCallback(() => {
    let canvas = centralScreenCanvasRef.current;
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 360;
      centralScreenCanvasRef.current = canvas;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stage = simStageRef.current;
    const timeSec = countdownRef.current;

    // Screen Inner Background
    if (stage === 'STANDBY' || stage === 'HEATING') {
      ctx.fillStyle = '#061a1b';
    } else if (stage === 'FIRE_ALARM') {
      ctx.fillStyle = '#3a0808';
    } else if (stage === 'SUPPRESSION') {
      ctx.fillStyle = '#3a1f04';
    } else {
      ctx.fillStyle = '#05291b';
    }
    ctx.fillRect(0, 0, 512, 360);

    // Bevel border
    ctx.strokeStyle = '#3f3f46';
    ctx.lineWidth = 4;
    ctx.strokeRect(2, 2, 508, 356);

    // Header bar
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, 512, 42);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('OUTFIRE IHM v3.2', 16, 27);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#10b981';
    ctx.fillText('BAT: 13.8V [100%]', 496, 27);

    // Dynamic UI states
    if (stage === 'STANDBY' || stage === 'HEATING') {
      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 24px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('● SISTEMA PROTEGIDO', 256, 90);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '13px monospace';
      ctx.fillText('MONITORAMENTO ATIVO (145°C / 300°C)', 256, 120);

      // Status rows
      ctx.fillStyle = '#0f2922';
      ctx.fillRect(24, 145, 464, 46);
      ctx.fillStyle = '#a7f3d0';
      ctx.font = '13px Inter, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('SENSOR COIFA (145°C):', 38, 174);
      ctx.textAlign = 'right';
      ctx.fillText(stage === 'HEATING' ? '280°C [SUBINDO]' : '180°C [NORMAL]', 474, 174);

      ctx.fillStyle = '#0f2922';
      ctx.fillRect(24, 200, 464, 46);
      ctx.fillStyle = '#a7f3d0';
      ctx.textAlign = 'left';
      ctx.fillText('VÁLVULA SOLENOIDE DE GÁS:', 38, 229);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#34d399';
      ctx.fillText('ABERTA / LIBERADA', 474, 229);

      ctx.fillStyle = '#0f2922';
      ctx.fillRect(24, 255, 464, 46);
      ctx.fillStyle = '#a7f3d0';
      ctx.textAlign = 'left';
      ctx.fillText('SISTEMA DE EXAUSTÃO:', 38, 284);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#34d399';
      ctx.fillText('OPERANDO / CONECTADO', 474, 284);

      ctx.fillStyle = '#64748b';
      ctx.font = '11px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('DISPARO AUTOMÁTICO EM CASO DE FOGO OU BOTOEIRA MANUAL', 256, 332);

    } else if (stage === 'FIRE_ALARM') {
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 26px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🚨 FOGO DETECTADO! 🚨', 256, 82);

      ctx.fillStyle = '#fecaca';
      ctx.font = 'bold 14px Inter, sans-serif';
      ctx.fillText('SENSOR TÉRMICO SUPEROU 145°C', 256, 110);

      // Countdown Clock
      ctx.fillStyle = '#1c0505';
      ctx.fillRect(40, 128, 432, 105);
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.strokeRect(40, 128, 432, 105);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 64px monospace';
      ctx.fillText(`00:0${Math.max(0, timeSec)}`, 256, 204);

      ctx.fillStyle = '#fca5a5';
      ctx.font = 'bold 13px Inter, sans-serif';
      ctx.fillText('DISPARO AUTOMÁTICO DE SAPONIFICANTE', 256, 260);

      ctx.fillStyle = '#dc2626';
      ctx.fillRect(24, 285, 464, 52);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px Inter, sans-serif';
      ctx.fillText('EVACUAR O LOCAL OU ACIONAR A BOTOEIRA MANUAL', 256, 317);

    } else if (stage === 'SUPPRESSION') {
      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 25px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('⚡ DISPARO DE SUPRESSÃO ATIVO ⚡', 256, 85);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 15px monospace';
      ctx.fillText('DESCARGA DE SAPONIFICANTE & CO2', 256, 118);

      ctx.fillStyle = '#ef4444';
      ctx.fillRect(24, 140, 464, 48);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px Inter, sans-serif';
      ctx.fillText('VÁLVULA DE GÁS: CORTADA (BLOQUEADA)', 256, 170);

      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(24, 198, 464, 48);
      ctx.fillStyle = '#ffffff';
      ctx.fillText('EXAUSTOR: DESLIGADO (DAMPER FECHADO)', 256, 228);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = 'bold 13px Inter, sans-serif';
      ctx.fillText('MANTA DE SABÃO ENCAPSULANDO O ÓLEO QUENTE', 256, 282);

      ctx.fillStyle = '#a7f3d0';
      ctx.font = '12px monospace';
      ctx.fillText('TEMPERATURA EM QUEDA DRÁSTICA...', 256, 318);

    } else if (stage === 'EXTINGUISHED') {
      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 25px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('✓ INCÊNDIO EXTINTO COM SUCESSO', 256, 85);

      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 14px Inter, sans-serif';
      ctx.fillText('REIGNIÇÃO 100% IMPEDIDA (SAPONIFICAÇÃO)', 256, 118);

      ctx.fillStyle = '#064e3b';
      ctx.fillRect(24, 140, 464, 46);
      ctx.fillStyle = '#6ee7b7';
      ctx.font = '13px Inter, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('TEMPERATURA FINAL DO ÓLEO:', 38, 169);
      ctx.textAlign = 'right';
      ctx.fillText('42°C (TOTALMENTE RESFRIADO)', 474, 169);

      ctx.fillStyle = '#064e3b';
      ctx.fillRect(24, 198, 464, 46);
      ctx.fillStyle = '#6ee7b7';
      ctx.textAlign = 'left';
      ctx.fillText('INTERTRAVAMENTO DE SEGURANÇA:', 38, 227);
      ctx.textAlign = 'right';
      ctx.fillText('ATIVO / SEGURO', 474, 227);

      ctx.fillStyle = '#064e3b';
      ctx.fillRect(24, 256, 464, 46);
      ctx.fillStyle = '#6ee7b7';
      ctx.textAlign = 'left';
      ctx.fillText('COZINHA & ESTRUTURA:', 38, 285);
      ctx.textAlign = 'right';
      ctx.fillText('100% PRESERVADAS (AVCB OK)', 474, 285);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('SISTEMA PRONTO PARA LIMPEZA COM ÁGUA E REARME', 256, 332);
    }

    if (centralScreenTextureRef.current) {
      centralScreenTextureRef.current.needsUpdate = true;
    }
  }, []);

  // --- MANUAL TRIGGER ACTION (BOTOEIRA) ---
  const handleManualTrigger = useCallback(() => {
    manualOverrideRef.current = true;
    setManualOverride(true);
    setSimStage('SUPPRESSION');
    setCountdown(0);
    setTelemetry({
      temp: 140,
      gasStatus: 'CORTADO',
      exhaustStatus: 'INTERTRAVADO',
      systemStatus: 'COMBATE ATIVO',
      countdown: 0,
    });

    if (manualPullLeverRef.current) {
      manualPullLeverRef.current.rotation.x = 0.65;
    }

    setTimeout(() => {
      setSimStage('EXTINGUISHED');
      setTelemetry({
        temp: 42,
        gasStatus: 'CORTADO',
        exhaustStatus: 'INTERTRAVADO',
        systemStatus: 'INCÊNDIO EXTINTO',
        countdown: 0,
      });
    }, 3500);
  }, []);

  // --- RESET SCENE ACTION ---
  const handleResetScene = useCallback(() => {
    manualOverrideRef.current = false;
    setManualOverride(false);
    setSimStage('STANDBY');
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

  // Update canvas texture on stage change
  useEffect(() => {
    updateLcdScreenTexture();
  }, [simStage, countdown, updateLcdScreenTexture]);

  // --- SCROLLYTELLING LISTENER (PINNED ROLAGEM CONTÍNUA) ---
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

      // If manual trigger was clicked, don't revert to fire unless scrolled back to top
      if (manualOverrideRef.current && p > 0.05) return;
      if (manualOverrideRef.current && p <= 0.05) {
        manualOverrideRef.current = false;
        setManualOverride(false);
      }

      // Map scroll progress to stages
      if (p < 0.18) {
        setSimStage('STANDBY');
        setTelemetry({
          temp: 180,
          gasStatus: 'ABERTO',
          exhaustStatus: 'LIGADO',
          systemStatus: 'PRONTIDÃO',
          countdown: 10,
        });
      } else if (p >= 0.18 && p < 0.42) {
        setSimStage('HEATING');
        const t = Math.round(180 + ((p - 0.18) / 0.24) * 185);
        setTelemetry({
          temp: t,
          gasStatus: 'ABERTO',
          exhaustStatus: 'LIGADO',
          systemStatus: 'AQUECIMENTO',
          countdown: 10,
        });
      } else if (p >= 0.42 && p < 0.65) {
        setSimStage('FIRE_ALARM');
        const cDown = Math.max(1, Math.round(10 - ((p - 0.42) / 0.23) * 9));
        setCountdown(cDown);
        setTelemetry({
          temp: 420,
          gasStatus: 'ABERTO',
          exhaustStatus: 'LIGADO',
          systemStatus: 'ALERTA DE FOGO',
          countdown: cDown,
        });
      } else if (p >= 0.65 && p < 0.85) {
        setSimStage('SUPPRESSION');
        setTelemetry({
          temp: 160,
          gasStatus: 'CORTADO',
          exhaustStatus: 'INTERTRAVADO',
          systemStatus: 'COMBATE ATIVO',
          countdown: 0,
        });
      } else {
        setSimStage('EXTINGUISHED');
        setTelemetry({
          temp: 42,
          gasStatus: 'CORTADO',
          exhaustStatus: 'INTERTRAVADO',
          systemStatus: 'INCÊNDIO EXTINTO',
          countdown: 0,
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Camera Quick Jump
  const setCameraView = (view: 'geral' | 'central' | 'fritadeira' | 'botoeira') => {
    setActiveCameraView(view);
    if (view === 'geral') {
      targetCamPos.current.set(0, 2.2, 4.4);
      targetCamLook.current.set(0, 1.4, 0);
    } else if (view === 'central') {
      targetCamPos.current.set(1.9, 1.85, 1.5);
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

    // 4. OrbitControls (CRITICAL: enableZoom = false so wheel scrolls page!)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false; // NEVER trap page wheel scroll
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 2 + 0.05;
    controls.target.set(0, 1.4, 0);
    controlsRef.current = controls;

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xfff6ea, 0.75);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.3);
    dirLight.position.set(4, 6, 4);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // Spot Light under Hood
    const hoodSpot = new THREE.SpotLight(0xffd7a0, 2.8, 6, Math.PI / 3, 0.3);
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

    // 6. Room Environment
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), matFloor);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(14, 8), matDarkTile);
    backWall.position.set(0, 4, -1.2);
    backWall.receiveShadow = true;
    scene.add(backWall);

    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(14, 8), matDarkTile);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-4.5, 4, 0);
    scene.add(leftWall);

    // 7. Kitchen Cooking Counter & Appliances
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

    // Cooktop Griddle
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

    // Live Digital LCD Screen Overlay (2.8" QVGA centralizado abaixo do logo)
    updateLcdScreenTexture();
    const lcdTexture = new THREE.CanvasTexture(centralScreenCanvasRef.current!);
    lcdTexture.colorSpace = THREE.SRGBColorSpace;
    centralScreenTextureRef.current = lcdTexture;

    const lcdMat = new THREE.MeshBasicMaterial({
      map: lcdTexture,
      transparent: false,
    });
    // Tela 2.8" em escala exata (0.114 x 0.085) no centro da tampa (X = 0, Y = 0)
    const lcdScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.114, 0.085), lcdMat);
    lcdScreen.position.set(0, 0.0, 0.112);
    centralGroup.add(lcdScreen);

    const lcdFrame = new THREE.Mesh(new THREE.BoxGeometry(0.124, 0.095, 0.004), matCabinetSteel);
    lcdFrame.position.set(0, 0.0, 0.1105);
    centralGroup.add(lcdFrame);

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

    // 11. SAPONIFICANT FOAM BLANKET MESH
    const foamBlanket = new THREE.Mesh(
      new THREE.BoxGeometry(0.74, 0.08, 0.64),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.9, metalness: 0.05 })
    );
    foamBlanket.position.set(-0.55, 1.05, 0);
    foamBlanket.scale.set(0.001, 0.001, 0.001);
    foamBlanket.visible = false;
    scene.add(foamBlanket);
    foamBlanketMeshRef.current = foamBlanket;

    // 12. PARTICLE SYSTEMS
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

    // 13. RAYCASTER FOR 3D CLICK & HOVER
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

    // 14. RESIZE
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
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
      controls.target.lerp(targetCamLook.current, 0.05);
      controls.update();

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
  }, [handleManualTrigger, updateLcdScreenTexture]);

  return (
    <section 
      id="hero-3d" 
      ref={containerRef} 
      className="relative w-full h-[350vh] bg-[#07080a]"
    >
      {/* STICKY 3D VIEWPORT PINNED TO SCREEN */}
      <div 
        ref={mountRef} 
        className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between select-none"
      >
        {/* 1. THREE.JS 3D WEBGL CANVAS */}
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
                simStage === 'STANDBY' 
                  ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300' 
                  : simStage === 'HEATING'
                  ? 'bg-amber-950/80 border-amber-500/50 text-amber-300'
                  : simStage === 'FIRE_ALARM'
                  ? 'bg-red-950/90 border-red-500 text-red-200 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                  : simStage === 'SUPPRESSION'
                  ? 'bg-amber-950/90 border-amber-500 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                  : 'bg-emerald-900/90 border-emerald-400 text-emerald-200'
              }`}>
                {simStage === 'STANDBY' && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
                {simStage === 'HEATING' && <Flame className="w-4 h-4 text-amber-400 animate-pulse" />}
                {simStage === 'FIRE_ALARM' && <Flame className="w-4 h-4 text-red-400 animate-bounce" />}
                {simStage === 'SUPPRESSION' && <Droplets className="w-4 h-4 text-amber-300 animate-spin" />}
                {simStage === 'EXTINGUISHED' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                {telemetry.systemStatus}
              </span>

              {simStage === 'FIRE_ALARM' && (
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

        {/* 4. BOTTOM FLOATING CONTROLS & SCROLL CUE */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Main Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Emergency Manual Pull Station Button */}
            <button
              onClick={handleManualTrigger}
              disabled={simStage === 'SUPPRESSION' || simStage === 'EXTINGUISHED'}
              className={`py-2.5 px-5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 border ${
                simStage === 'FIRE_ALARM'
                  ? 'bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white border-white animate-pulse shadow-[0_0_35px_rgba(225,29,72,0.8)] scale-105'
                  : 'bg-[#181212]/90 hover:bg-red-950/80 text-red-300 border-red-500/40 shadow-lg'
              }`}
            >
              <AlertOctagon className="w-4 h-4 text-red-400" />
              <span>🚨 Disparar Acionador Manual</span>
            </button>

            {/* Reset Button */}
            {(simStage === 'EXTINGUISHED' || simStage === 'FIRE_ALARM' || simStage === 'SUPPRESSION') && (
              <button
                onClick={handleResetScene}
                className="py-2.5 px-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-2 border border-white/15 transition-all duration-200 active:scale-95"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restaurar</span>
              </button>
            )}
          </div>

          {/* Center: Dynamic Animated Scroll Indicator */}
          <div className="flex items-center gap-2 text-xs font-medium text-[#f3e5ab]/90 bg-black/75 backdrop-blur-md px-4 py-2 rounded-full border border-[#d4af37]/30 shadow-lg">
            <ChevronDown className="w-4 h-4 text-[#d4af37] animate-bounce" />
            <span>
              {scrollProgress < 0.85 
                ? 'Role a página para ver a evolução do fogo e o combate automático' 
                : 'Continue rolando para conhecer os detalhes técnicos da Central Outfire'}
            </span>
          </div>

          {/* Right: Camera Quick Views */}
          <div className="hidden sm:flex items-center gap-1 bg-black/70 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 text-xs">
            <span className="text-[10px] text-gray-400 px-2 font-mono flex items-center gap-1">
              <Camera className="w-3 h-3 text-[#d4af37]" /> Câmera:
            </span>
            <button
              onClick={() => setCameraView('geral')}
              className={`px-2.5 py-1 rounded-xl font-bold transition-all ${
                activeCameraView === 'geral' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
              }`}
            >
              Geral
            </button>
            <button
              onClick={() => setCameraView('central')}
              className={`px-2.5 py-1 rounded-xl font-bold transition-all ${
                activeCameraView === 'central' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
              }`}
            >
              Central
            </button>
            <button
              onClick={() => setCameraView('fritadeira')}
              className={`px-2.5 py-1 rounded-xl font-bold transition-all ${
                activeCameraView === 'fritadeira' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
              }`}
            >
              Fritadeira
            </button>
            <button
              onClick={() => setCameraView('botoeira')}
              className={`px-2.5 py-1 rounded-xl font-bold transition-all ${
                activeCameraView === 'botoeira' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
              }`}
            >
              Botoeira
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
