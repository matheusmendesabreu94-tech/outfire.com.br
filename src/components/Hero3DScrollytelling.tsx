import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { 
  Flame, ShieldCheck, AlertOctagon, ZapOff, Wind, Droplets, 
  RotateCcw, Sparkles, BellRing, Eye, Camera, CheckCircle2,
  ChevronDown, Radio, XCircle
} from 'lucide-react';
import { 
  createNormalizedIhmScreenCanvas, 
  drawAlarmScreenToCanvas, 
  drawSuppressionScreenToCanvas, 
  drawExtinguishedScreenToCanvas 
} from '../utils/ihmScreen';

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
  }, []);

  // Helpers de rolagem suave da tela
  const scrollToKitchen = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
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
    if (!containerRef.current) return;
    const containerBottom = containerRef.current.offsetTop + containerRef.current.offsetHeight;
    window.scrollTo({ top: containerBottom + 10, behavior: 'smooth' });
  };

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

      // Se a contagem regressiva manual da botoeira estiver em andamento, não sobrescrever por rolagem
      if (manualOverrideRef.current && isManualCountdown) return;

      // Se o usuário rolou de volta para o topo da simulação, reseta o override manual
      if (manualOverrideRef.current && p <= 0.05) {
        manualOverrideRef.current = false;
        setManualOverride(false);
        setIsManualCountdown(false);
      }

      // Mapeamento preciso das Fases da Simulação solicitadas:
      // Standby (p < 0.20): Cozinha em prontidão, sem fogo
      // Fase 1 (0.20 <= p < 0.45): Princípio de incêndio (óleo esquenta de 180°C a 340°C)
      // Fase 2 (0.45 <= p < 0.70): Alarme térmico 145°C disparado, alarme 60s na tela da central
      // Fase 3 (0.70 <= p < 0.88): Supressão ativa (saponificante classe K + CO2 no duto)
      // Fase 4 (p >= 0.88): Incêndio extinto, cozinha preservada e norma NBR 14518
      if (p < 0.20) {
        setSimStage('STANDBY');
        setTelemetry({
          temp: 180,
          gasStatus: 'ABERTO',
          exhaustStatus: 'LIGADO',
          systemStatus: 'PRONTIDÃO',
          countdown: 60,
        });
      } else if (p >= 0.20 && p < 0.45) {
        setSimStage('HEATING'); // FASE 1
        const t = Math.round(180 + ((p - 0.20) / 0.25) * 160);
        setTelemetry({
          temp: t,
          gasStatus: 'ABERTO',
          exhaustStatus: 'LIGADO',
          systemStatus: 'AQUECIMENTO',
          countdown: 60,
        });
      } else if (p >= 0.45 && p < 0.70) {
        setSimStage('FIRE_ALARM'); // FASE 2
        const cDown = Math.max(1, Math.round(60 - ((p - 0.45) / 0.25) * 59));
        setCountdown(cDown);
        setTelemetry({
          temp: 380,
          gasStatus: 'CORTADO',
          exhaustStatus: 'INTERTRAVADO',
          systemStatus: 'ALERTA DE FOGO',
          countdown: cDown,
        });
      } else if (p >= 0.70 && p < 0.88) {
        setSimStage('SUPPRESSION'); // FASE 3
        setTelemetry({
          temp: 135,
          gasStatus: 'CORTADO',
          exhaustStatus: 'INTERTRAVADO',
          systemStatus: 'COMBATE ATIVO',
          countdown: 0,
        });
      } else {
        setSimStage('EXTINGUISHED'); // FASE 4
        setTelemetry({
          temp: 38,
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
    scene.background = new THREE.Color(0x0a0c10);
    scene.fog = new THREE.FogExp2(0x0a0c10, 0.035);

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
    renderer.toneMappingExposure = 1.1;
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

    // Damper Corta-Fogo Motorizado Automático no Duto (NBR 14518)
    const damperHousing = new THREE.Mesh(
      new THREE.BoxGeometry(0.64, 0.18, 0.64),
      new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.85, roughness: 0.25 })
    );
    damperHousing.position.set(0, 0.55, 0);
    hoodGroup.add(damperHousing);

    const damperMotor = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.14, 0.14),
      new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4 })
    );
    damperMotor.position.set(0.36, 0.55, 0);
    hoodGroup.add(damperMotor);

    // Painel de Inox Escovado (Backsplash industrial atrás da bancada)
    const backsplashMat = new THREE.MeshStandardMaterial({
      color: 0xb0b5bc,
      metalness: 0.88,
      roughness: 0.3,
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
      color: 0xf1f5f9,
      metalness: 0.96,
      roughness: 0.12,
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
      const intersects = raycaster.intersectObjects([manualGroup, centralGroup, fryerGroup, sapCylinderGroup, co2CylinderGroup], true);

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
      const intersects = raycaster.intersectObjects([manualGroup, centralGroup, fryerGroup, sapCylinderGroup, co2CylinderGroup], true);

      if (intersects.length > 0) {
        let root: THREE.Object3D | null = intersects[0].object;
        while (root && !root.userData?.interactiveType && root.parent) {
          root = root.parent;
        }
        if (root?.userData?.interactiveType === 'botoeira') {
          handleManualTrigger();
        } else if (root?.userData?.interactiveType === 'central') {
          setCameraView('central');
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
      {/* TELA 1 DE ABERTURA (PRIMEIRO CONTATO): FUNDO PRETO, APENAS O LOGO E A SETA DOURADA */}
      <section 
        id="splash-hero"
        className="relative w-full h-[100dvh] bg-[#05070a] flex flex-col items-center justify-center select-none overflow-hidden z-20"
      >
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-12 h-12 rounded-full border border-[#d4af37]/50 bg-black/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.35)] group-hover:border-[#d4af37] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all">
            <ChevronDown className="w-6 h-6 text-[#d4af37] animate-bounce" />
          </div>
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
            // Em celulares, permite toque na cena para acionar a botoeira ou focar câmera
            if (window.innerWidth < 768 && cameraRef.current) {
              const rect = mountRef.current?.getBoundingClientRect();
              if (!rect) return;
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
                  setCameraView('central');
                } else if (root?.userData?.interactiveType === 'fritadeira') {
                  setCameraView('fritadeira');
                }
              }
            }
          }}
          className="sticky top-0 w-full h-[100dvh] overflow-x-clip flex flex-col justify-between select-none"
          style={{ touchAction: 'pan-y' }}
        >
          {/* 1. THREE.JS 3D WEBGL CANVAS (pointer-events-none no mobile para permitir rolagem nativa 100% livre) */}
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full block z-0 outline-none pointer-events-none md:pointer-events-auto"
            style={{ touchAction: 'pan-y' }}
          />

          {/* 2. TOP FLOATING HUD OVERLAY (STATUS & TELEMETRY) */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none">
            
            {/* Left: System Badge & Real-time State */}
            <div className="flex flex-col gap-1.5 pointer-events-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/40 shadow-glow-gold text-xs font-bold text-[#f3e5ab]">
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

          {/* 4. BARRA INFERIOR COM SETA DOURADA PISCANTE E INDICADOR DE FASES */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 flex flex-col items-center gap-3">
            
            {/* BARRA CENTRAL DE FASES E SETA DOURADA */}
            <div className="flex items-center gap-3 bg-black/85 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#d4af37]/40 shadow-[0_10px_35px_rgba(0,0,0,0.9)] max-w-full overflow-hidden">
              {/* Seta Dourada Interativa com Bounce / Pulse */}
              <button 
                onClick={handleScrollDownStep}
                aria-label="Avançar simulação para baixo"
                className="w-10 h-10 rounded-full bg-gradient-to-b from-[#d4af37]/25 to-black/80 border border-[#d4af37]/60 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] cursor-pointer shrink-0"
              >
                <ChevronDown className={`w-5 h-5 text-[#d4af37] ${simStage !== 'STANDBY' ? 'animate-bounce' : 'animate-pulse'}`} />
              </button>

              {/* Indicador Dinâmico de Fase ao Lado da Seta */}
              <div className="flex items-center gap-2 truncate">
                {simStage === 'STANDBY' && (
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-gray-200">
                      Cozinha Industrial em Standby • <span className="text-[#d4af37]">Role para descer</span>
                    </span>
                  </div>
                )}

                {simStage === 'HEATING' && (
                  <div className="flex items-center gap-2 animate-pulse">
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/60 text-amber-300 font-black text-xs shrink-0">
                      FASE 1
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-amber-200 truncate">
                      Princípio de Incêndio (Óleo a {telemetry.temp}°C) — Continue descendo
                    </span>
                  </div>
                )}

                {simStage === 'FIRE_ALARM' && (
                  <div className="flex items-center gap-2 animate-pulse">
                    <span className="px-2.5 py-0.5 rounded-md bg-red-600/30 border border-red-500 text-red-200 font-black text-xs shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                      FASE 2
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-red-200 truncate">
                      Alarme Térmico 145°C Disparado • Contagem: {countdown}s
                    </span>
                  </div>
                )}

                {simStage === 'SUPPRESSION' && (
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-cyan-600/30 border border-cyan-400 text-cyan-200 font-black text-xs shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                      FASE 3
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-cyan-200 truncate">
                      Supressão Ativa: Saponificante Classe K + CO2 no duto
                    </span>
                  </div>
                )}

                {simStage === 'EXTINGUISHED' && (
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-600/30 border border-emerald-400 text-emerald-200 font-black text-xs shrink-0">
                      FASE 4
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-200 truncate">
                      Cozinha Preservada • NBR 14518 Cumprida — Continue descendo
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* CONTROLES DE INTERAÇÃO (BOTOEIRA, RESTAURAR, CÂMERAS) */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
              
              {/* Botões de Ação de Emergência */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Botão Acionador Manual (Botoeira) */}
                <button
                  onClick={handleManualTrigger}
                  disabled={simStage === 'SUPPRESSION' || simStage === 'EXTINGUISHED' || isManualCountdown}
                  className={`py-2 px-4 rounded-xl font-black text-xs flex items-center gap-2 transition-all duration-300 border ${
                    simStage === 'FIRE_ALARM'
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
              </div>

              {/* Câmeras Rápidas */}
              <div className="flex items-center gap-1 bg-black/75 backdrop-blur-md p-1 rounded-xl border border-white/10 text-xs">
                <span className="text-[10px] text-gray-400 px-1.5 font-mono flex items-center gap-1">
                  <Camera className="w-3 h-3 text-[#d4af37]" /> Câmera:
                </span>
                <button
                  onClick={() => setCameraView('geral')}
                  className={`px-2 py-0.5 rounded-lg font-bold transition-all ${
                    activeCameraView === 'geral' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Geral
                </button>
                <button
                  onClick={() => setCameraView('central')}
                  className={`px-2 py-0.5 rounded-lg font-bold transition-all ${
                    activeCameraView === 'central' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Central
                </button>
                <button
                  onClick={() => setCameraView('fritadeira')}
                  className={`px-2 py-0.5 rounded-lg font-bold transition-all ${
                    activeCameraView === 'fritadeira' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Fritadeira
                </button>
                <button
                  onClick={() => setCameraView('botoeira')}
                  className={`px-2 py-0.5 rounded-lg font-bold transition-all ${
                    activeCameraView === 'botoeira' ? 'bg-[#d4af37] text-black shadow-glow-gold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Botoeira
                </button>
              </div>

            </div>

          </div>

          {/* 5. BARRA DE ROLAGEM LATERAL DOURADA & NAVEGADOR DE FASES (SLIM & ELEGANT) */}
          <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-auto">
            {/* Trilho da Barra Dourada */}
            <div 
              onClick={(e) => {
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

            {/* Marcadores / Botões de Salto Direto para as Fases */}
            <div className="flex flex-col items-center gap-1">
              {[
                { label: '0', title: 'Início / Standby', progress: 0.05, stage: 'STANDBY' },
                { label: '1', title: 'Fase 1: Princípio de Incêndio', progress: 0.32, stage: 'HEATING' },
                { label: '2', title: 'Fase 2: Alarme Térmico 60s', progress: 0.58, stage: 'FIRE_ALARM' },
                { label: '3', title: 'Fase 3: Supressão Ativa', progress: 0.78, stage: 'SUPPRESSION' },
                { label: '4', title: 'Fase 4: Incêndio Extinto', progress: 0.95, stage: 'EXTINGUISHED' },
              ].map((item) => {
                const isActive = simStage === item.stage;
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToProgress(item.progress)}
                    title={item.title}
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
              onClick={scrollToNextSection}
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
