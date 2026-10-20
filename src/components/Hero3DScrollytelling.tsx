import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { 
  Flame, ShieldCheck, AlertOctagon, ZapOff, Wind, Droplets, 
  Play, Pause, RotateCcw, ChevronDown, CheckCircle2, Thermometer,
  Eye, BellRing, Sparkles
} from 'lucide-react';

interface StageInfo {
  title: string;
  subtitle: string;
  temp: number;
  gasStatus: 'ABERTO' | 'CORTADO';
  exhaustStatus: 'LIGADO' | 'DESLIGADO';
  centralStatus: 'MONITORANDO' | 'ALERTA TÉRMICO' | 'DISPARO ATIVO' | 'PROTEGIDO';
  description: string;
}

const STAGES: StageInfo[] = [
  {
    title: '1. Cozinha em Operação Normal',
    subtitle: 'Fritadeira industrial e fogão sob coifa de exaustão.',
    temp: 180,
    gasStatus: 'ABERTO',
    exhaustStatus: 'LIGADO',
    centralStatus: 'MONITORANDO',
    description: 'Ambiente operacional seguro. A Central Outfire VTS 32S3 monitora continuamente os sensores térmicos reguláveis da coifa (145°C) e do duto (300°C).'
  },
  {
    title: '2. Superaquecimento Perigoso',
    subtitle: 'Falha no termostato da fritadeira. Temperatura do óleo sobe para > 360°C.',
    temp: 365,
    gasStatus: 'ABERTO',
    exhaustStatus: 'LIGADO',
    centralStatus: 'ALERTA TÉRMICO',
    description: 'Óleos e gorduras vegetais atingem o ponto de autoignição silenciosa sem faísca externa. Risco iminente de explosão térmica.'
  },
  {
    title: '3. Incêndio Violento Classe K',
    subtitle: 'O óleo entra em combustão violenta. Chamas sobem rumo aos filtros da coifa.',
    temp: 450,
    gasStatus: 'ABERTO',
    exhaustStatus: 'LIGADO',
    centralStatus: 'ALERTA TÉRMICO',
    description: 'Água JAMAIS pode ser usada (causaria explosão mortal de vapor). Extintores comuns de pó químico não resfriam o óleo e causam reignição.'
  },
  {
    title: '4. Detecção Dupla nos Sensores',
    subtitle: 'Sensor da coifa (145°C) e sensor do duto (300°C) acionam a Central Outfire.',
    temp: 420,
    gasStatus: 'CORTADO',
    exhaustStatus: 'DESLIGADO',
    centralStatus: 'DISPARO ATIVO',
    description: 'A Central Outfire entra em ação instantânea: sirene estroboscópica dispara, display inicia contagem de supressão e alerta por voz falada.'
  },
  {
    title: '5. Intertravamento Total: Gás & Exaustão',
    subtitle: 'Válvula solenoide fecha o gás e motor de exaustão é desligado.',
    temp: 380,
    gasStatus: 'CORTADO',
    exhaustStatus: 'DESLIGADO',
    centralStatus: 'DISPARO ATIVO',
    description: 'Corta o combustível da linha na válvula solenoide e desliga a sucção para não alimentar os dutos com oxigênio forçado. Damper fecha.'
  },
  {
    title: '6. Dupla Supressão: Saponificante & CO2',
    subtitle: 'Bicos disparam líquido saponificante na fritadeira e CO2 nos dutos.',
    temp: 160,
    gasStatus: 'CORTADO',
    exhaustStatus: 'DESLIGADO',
    centralStatus: 'DISPARO ATIVO',
    description: 'O agente saponificante reage com a gordura quente criando uma espessa camada de sabão, sufocando e resfriando. O CO2 inunda o duto simultaneamente.'
  },
  {
    title: '7. Incêndio Extinto & Cozinha Salva',
    subtitle: 'Fogo 100% extinto sem reignição. Danos zero à estrutura e às pessoas.',
    temp: 65,
    gasStatus: 'CORTADO',
    exhaustStatus: 'DESLIGADO',
    centralStatus: 'PROTEGIDO',
    description: 'A cozinha é preservada. Sistema pronto para limpeza com água e reinicialização rápida. Em conformidade com ABNT NBR 14518 e AVCB.'
  }
];

export const Hero3DScrollytelling: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [progress, setProgressState] = useState(0); // 0 to 1
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  // CRITICAL FIX: progressRef prevents stale closures in Three.js requestAnimationFrame
  const progressRef = useRef(0);
  const setProgress = useCallback((newVal: number) => {
    const clamped = Math.max(0, Math.min(1, newVal));
    progressRef.current = clamped;
    setProgressState(clamped);
    const idx = Math.min(STAGES.length - 1, Math.floor(clamped * STAGES.length));
    setCurrentStageIndex(idx);
  }, []);

  // Three.js object references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const fireGroupRef = useRef<THREE.Group | null>(null);
  const smokeGroupRef = useRef<THREE.Group | null>(null);
  const foamGroupRef = useRef<THREE.Group | null>(null);
  const co2GroupRef = useRef<THREE.Group | null>(null);
  const gasValveRef = useRef<THREE.Mesh | null>(null);
  const flameLightsRef = useRef<THREE.PointLight[]>([]);
  const centralSirenLightRef = useRef<THREE.PointLight | null>(null);
  const centralSirenMeshRef = useRef<THREE.Mesh | null>(null);
  const centralScreenMeshRef = useRef<THREE.Mesh | null>(null);

  // User mouse orbit state
  const mouseOrbitRef = useRef({ isDragging: false, startX: 0, startY: 0, rotY: 0, rotX: 0 });

  // Setup Three.js Scene
  useEffect(() => {
    if (!canvasRef.current) return;

    const width = canvasRef.current.clientWidth || window.innerWidth;
    const height = canvasRef.current.clientHeight || 700;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08090c);
    scene.fog = new THREE.FogExp2(0x08090c, 0.035);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2.3, 5.8);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const mainSpot = new THREE.SpotLight(0xfff7e6, 2.8);
    mainSpot.position.set(2, 6.5, 4.5);
    mainSpot.angle = Math.PI / 4;
    mainSpot.penumbra = 0.5;
    mainSpot.castShadow = true;
    scene.add(mainSpot);

    const goldAccentLight = new THREE.PointLight(0xd4af37, 1.5, 12);
    goldAccentLight.position.set(-2.5, 3.5, 3);
    scene.add(goldAccentLight);

    // Siren Alert Strobe Light on Central
    const sirenLight = new THREE.PointLight(0xff0000, 0, 8);
    sirenLight.position.set(2.4, 2.7, 0.35);
    scene.add(sirenLight);
    centralSirenLightRef.current = sirenLight;

    // Fire lights
    const fireLight1 = new THREE.PointLight(0xff4400, 0, 5);
    fireLight1.position.set(-0.6, 1.2, 0);
    scene.add(fireLight1);

    const fireLight2 = new THREE.PointLight(0xffaa00, 0, 5);
    fireLight2.position.set(-0.6, 1.8, 0);
    scene.add(fireLight2);
    flameLightsRef.current = [fireLight1, fireLight2];

    // Build the 3D kitchen environment
    buildKitchenScene(scene);

    // Particle groups
    const fireGroup = new THREE.Group();
    scene.add(fireGroup);
    fireGroupRef.current = fireGroup;
    initFireParticles(fireGroup);

    const smokeGroup = new THREE.Group();
    scene.add(smokeGroup);
    smokeGroupRef.current = smokeGroup;
    initSmokeParticles(smokeGroup);

    const foamGroup = new THREE.Group();
    scene.add(foamGroup);
    foamGroupRef.current = foamGroup;
    initFoamSpray(foamGroup);

    const co2Group = new THREE.Group();
    scene.add(co2Group);
    co2GroupRef.current = co2Group;
    initCo2Cloud(co2Group);

    // Resize Handler
    const handleResize = () => {
      if (!canvasRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = canvasRef.current.clientWidth;
      const h = canvasRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Mouse / Touch Drag Orbit
    const canvas = canvasRef.current;
    const onMouseDown = (e: MouseEvent) => {
      mouseOrbitRef.current.isDragging = true;
      mouseOrbitRef.current.startX = e.clientX;
      mouseOrbitRef.current.startY = e.clientY;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!mouseOrbitRef.current.isDragging) return;
      const dx = e.clientX - mouseOrbitRef.current.startX;
      const dy = e.clientY - mouseOrbitRef.current.startY;
      mouseOrbitRef.current.startX = e.clientX;
      mouseOrbitRef.current.startY = e.clientY;
      mouseOrbitRef.current.rotY += dx * 0.005;
      mouseOrbitRef.current.rotX = Math.max(-0.4, Math.min(0.4, mouseOrbitRef.current.rotX + dy * 0.005));
    };
    const onMouseUp = () => {
      mouseOrbitRef.current.isDragging = false;
    };
    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Animate particles and scene using live progressRef.current
      animateEffects(time, delta);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  // Construct Industrial 3D Meshes
  const buildKitchenScene = (scene: THREE.Scene) => {
    // Floor (Dark Industrial Tile with subtle golden sheen)
    const floorGeo = new THREE.PlaneGeometry(16, 16);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x121418,
      roughness: 0.35,
      metalness: 0.45,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);

    // Back Wall
    const wallGeo = new THREE.PlaneGeometry(16, 8);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x1a1d24,
      roughness: 0.5,
      metalness: 0.25,
    });
    const wall = new THREE.Mesh(wallGeo, wallMat);
    wall.position.set(0, 4, -1.8);
    wall.receiveShadow = true;
    scene.add(wall);

    // Stainless Cooking Counter
    const counterGeo = new THREE.BoxGeometry(4.2, 0.9, 1.2);
    const inoxMat = new THREE.MeshStandardMaterial({
      color: 0xd8e0e8,
      metalness: 0.88,
      roughness: 0.18,
    });
    const counter = new THREE.Mesh(counterGeo, inoxMat);
    counter.position.set(0, 0.45, 0);
    counter.castShadow = true;
    counter.receiveShadow = true;
    scene.add(counter);

    // Commercial Deep Fryer (left side of counter)
    const fryerBody = new THREE.Mesh(
      new THREE.BoxGeometry(1.0, 0.95, 1.1),
      inoxMat
    );
    fryerBody.position.set(-0.6, 0.475, 0.05);
    fryerBody.castShadow = true;
    scene.add(fryerBody);

    // Fryer Oil Basin (Recessed)
    const basinGeo = new THREE.BoxGeometry(0.8, 0.25, 0.8);
    const oilMat = new THREE.MeshStandardMaterial({
      color: 0x9e6500, // Golden vegetable cooking oil
      roughness: 0.08,
      metalness: 0.35,
      transparent: true,
      opacity: 0.95,
    });
    const oilWell = new THREE.Mesh(basinGeo, oilMat);
    oilWell.position.set(-0.6, 0.85, 0.05);
    scene.add(oilWell);

    // Fryer Baskets (handles sticking out)
    const handleGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.4);
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 });
    const handle1 = new THREE.Mesh(handleGeo, blackMat);
    handle1.rotation.x = Math.PI / 4;
    handle1.position.set(-0.8, 1.1, 0.5);
    scene.add(handle1);

    const handle2 = new THREE.Mesh(handleGeo, blackMat);
    handle2.rotation.x = Math.PI / 4;
    handle2.position.set(-0.4, 1.1, 0.5);
    scene.add(handle2);

    // Commercial Range / Fogão Industrial (Right side)
    const stoveBody = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 0.95, 1.1),
      inoxMat
    );
    stoveBody.position.set(1.0, 0.475, 0.05);
    stoveBody.castShadow = true;
    scene.add(stoveBody);

    // Burner Grates (Iron)
    const castIronMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 });
    for (let bx = 0.4; bx <= 1.6; bx += 0.55) {
      for (let bz = -0.25; bz <= 0.35; bz += 0.55) {
        const burner = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.04, 16), castIronMat);
        burner.position.set(bx, 0.95, bz);
        scene.add(burner);
      }
    }

    // --- COIFA INDUSTRIAL (EXHAUST HOOD) ---
    const hoodGroup = new THREE.Group();
    hoodGroup.position.set(0, 2.7, 0);

    const hoodCanopy = new THREE.Mesh(
      new THREE.BoxGeometry(4.2, 0.6, 1.6),
      inoxMat
    );
    hoodCanopy.castShadow = true;
    hoodGroup.add(hoodCanopy);

    // Slanted Baffle Filters
    const filterMat = new THREE.MeshStandardMaterial({
      color: 0xa0abb6,
      metalness: 0.9,
      roughness: 0.25,
    });
    for (let fx = -1.8; fx <= 1.8; fx += 0.6) {
      const filter = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.8), filterMat);
      filter.position.set(fx, -0.25, 0);
      filter.rotation.x = 0.2;
      hoodGroup.add(filter);
    }
    scene.add(hoodGroup);

    // --- EXHAUST DUCTWORK (DUTO DE EXAUSTÃO) ---
    const ductGeo = new THREE.CylinderGeometry(0.35, 0.35, 1.6, 24);
    const ductMat = new THREE.MeshStandardMaterial({
      color: 0xc4cbd4,
      metalness: 0.85,
      roughness: 0.2,
    });
    const ductVertical = new THREE.Mesh(ductGeo, ductMat);
    ductVertical.position.set(0, 3.8, 0);
    scene.add(ductVertical);

    const ductHorizGeo = new THREE.CylinderGeometry(0.35, 0.35, 2.5, 24);
    const ductHoriz = new THREE.Mesh(ductHorizGeo, ductMat);
    ductHoriz.rotation.x = Math.PI / 2;
    ductHoriz.position.set(0, 4.5, -0.8);
    scene.add(ductHoriz);

    // Fire Damper box on the duct
    const damperBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, 0.85, 0.4),
      new THREE.MeshStandardMaterial({ color: 0x991b1b, metalness: 0.6, roughness: 0.35 })
    );
    damperBox.position.set(0, 4.5, -0.4);
    scene.add(damperBox);

    // --- SUPPRESSION PIPING & NOZZLES ---
    const pipeMat = new THREE.MeshStandardMaterial({
      color: 0xf0f4f8,
      metalness: 0.95,
      roughness: 0.1,
    });

    const pipeGeo = new THREE.CylinderGeometry(0.02, 0.02, 3.8, 12);
    const pipe = new THREE.Mesh(pipeGeo, pipeMat);
    pipe.rotation.z = Math.PI / 2;
    pipe.position.set(0, 2.35, 0.4);
    scene.add(pipe);

    // Nozzles (Bicos de Inox e Latão Dourado)
    const nozzleMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.95, roughness: 0.15 });
    
    // Appliance Nozzle 1 (Over fryer)
    const nozzle1 = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.09, 12), nozzleMat);
    nozzle1.rotation.x = Math.PI;
    nozzle1.position.set(-0.6, 2.28, 0.1);
    scene.add(nozzle1);

    // Appliance Nozzle 2 & 3 (Over range)
    const nozzle2 = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.09, 12), nozzleMat);
    nozzle2.rotation.x = Math.PI;
    nozzle2.position.set(0.6, 2.28, 0.1);
    scene.add(nozzle2);

    const nozzle3 = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.09, 12), nozzleMat);
    nozzle3.rotation.x = Math.PI;
    nozzle3.position.set(1.4, 2.28, 0.1);
    scene.add(nozzle3);

    // 2 Plenum Nozzles (inside hood filters)
    const plenumNozzle1 = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.08, 12), nozzleMat);
    plenumNozzle1.rotation.z = Math.PI / 4;
    plenumNozzle1.position.set(-0.8, 2.6, 0);
    scene.add(plenumNozzle1);

    const plenumNozzle2 = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.08, 12), nozzleMat);
    plenumNozzle2.rotation.z = -Math.PI / 4;
    plenumNozzle2.position.set(0.8, 2.6, 0);
    scene.add(plenumNozzle2);

    // 1 Duct Nozzle
    const ductNozzle = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.08, 12), nozzleMat);
    ductNozzle.rotation.x = Math.PI;
    ductNozzle.position.set(0, 4.2, 0);
    scene.add(ductNozzle);

    // --- SENSORS ---
    // Hood Sensor 145°C
    const sensorHood = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.015, 0.14, 12),
      new THREE.MeshStandardMaterial({ color: 0xd4af37, emissive: 0x886b1a, roughness: 0.2 })
    );
    sensorHood.position.set(-0.6, 2.42, 0.25);
    scene.add(sensorHood);

    // Duct Sensor 300°C
    const sensorDuct = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.015, 0.16, 12),
      new THREE.MeshStandardMaterial({ color: 0xff3300, emissive: 0xaa1100, roughness: 0.2 })
    );
    sensorDuct.position.set(0.35, 3.8, 0);
    sensorDuct.rotation.z = Math.PI / 2;
    scene.add(sensorDuct);

    // =========================================================================
    // --- AUTHENTIC CENTRAL OUTFIRE VTS 32S3 3D HARDWARE (BLACK & GOLD) ---
    // =========================================================================
    const centralGroup = new THREE.Group();
    centralGroup.position.set(2.4, 2.15, 0.1);

    // Matte Black Industrial Steel Cabinet (Exact proportions)
    const cabinetMatSides = new THREE.MeshStandardMaterial({
      color: 0x121417,
      metalness: 0.7,
      roughness: 0.35,
    });

    // Load authentic front panel texture
    const textureLoader = new THREE.TextureLoader();
    const frontTexture = textureLoader.load('/assets/central-outfire-front.png');
    frontTexture.colorSpace = THREE.SRGBColorSpace;

    const cabinetMatFront = new THREE.MeshStandardMaterial({
      map: frontTexture,
      roughness: 0.3,
      metalness: 0.4,
    });

    // Box Geometry: [right, left, top, bottom, front (+Z), back (-Z)]
    const cabinetMaterials = [
      cabinetMatSides,
      cabinetMatSides,
      cabinetMatSides,
      cabinetMatSides,
      cabinetMatFront,
      cabinetMatSides,
    ];

    const cabinetBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.72, 0.54, 0.18),
      cabinetMaterials
    );
    cabinetBox.castShadow = true;
    centralGroup.add(cabinetBox);

    // Dynamic Central Touchscreen Overlay (Glows green in normal, red in alert)
    const screenGlowMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.25,
    });
    const screenGlow = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 0.13), screenGlowMat);
    screenGlow.position.set(0.02, 0.02, 0.092);
    centralGroup.add(screenGlow);
    centralScreenMeshRef.current = screenGlow;

    // Top Electrical Conduit Pipe to Ceiling
    const conduitGeo = new THREE.CylinderGeometry(0.018, 0.018, 1.4, 16);
    const conduitMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.9, roughness: 0.2 });
    const conduit = new THREE.Mesh(conduitGeo, conduitMat);
    conduit.position.set(0, 0.95, 0);
    centralGroup.add(conduit);

    // Red Strobe Beacon Siren (Sinalizador Audiovisual de Topo)
    const sirenBaseMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.6 });
    const sirenBase = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.03, 16), sirenBaseMat);
    sirenBase.position.set(0.28, 0.28, 0);
    centralGroup.add(sirenBase);

    const sirenCapMat = new THREE.MeshStandardMaterial({
      color: 0xff1111,
      roughness: 0.1,
      metalness: 0.3,
      transparent: true,
      opacity: 0.9,
      emissive: 0x660000,
    });
    const sirenCap = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.09, 16), sirenCapMat);
    sirenCap.position.set(0.28, 0.33, 0);
    centralGroup.add(sirenCap);
    centralSirenMeshRef.current = sirenCap;

    // Bottom Battery Shelf Bracket (Suporte das Baterias Pionero)
    const bracketMat = new THREE.MeshStandardMaterial({ color: 0x1f232b, metalness: 0.7, roughness: 0.4 });
    const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.02, 0.18), bracketMat);
    bracket.position.set(0.05, -0.38, 0);
    centralGroup.add(bracket);

    // Dual 12V Pionero Backup Batteries (Blue blocks with gold terminals)
    const batteryMat = new THREE.MeshStandardMaterial({ color: 0x123b7a, roughness: 0.5 }); // Pionero blue
    const bat1 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 0.12), batteryMat);
    bat1.position.set(-0.07, -0.29, 0);
    centralGroup.add(bat1);

    const bat2 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 0.12), batteryMat);
    bat2.position.set(0.15, -0.29, 0);
    centralGroup.add(bat2);

    scene.add(centralGroup);

    // Gas Solenoid Shutoff Valve
    const gasPipe = new THREE.Mesh(
      new THREE.CylinderGeometry(0.025, 0.025, 3.0, 16),
      new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.7, roughness: 0.25 })
    );
    gasPipe.rotation.z = Math.PI / 2;
    gasPipe.position.set(0, 0.15, 0.6);
    scene.add(gasPipe);

    const valve = new THREE.Mesh(
      new THREE.BoxGeometry(0.15, 0.18, 0.15),
      new THREE.MeshStandardMaterial({ color: 0x991b1b, metalness: 0.6, roughness: 0.3 })
    );
    valve.position.set(-1.2, 0.15, 0.6);
    scene.add(valve);
    gasValveRef.current = valve;
  };

  // Particles: Fire
  const initFireParticles = (group: THREE.Group) => {
    const count = 50;
    for (let i = 0; i < count; i++) {
      const geo = new THREE.ConeGeometry(0.13, 0.5, 8);
      const mat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xff3300 : 0xffaa00,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        -0.6 + (Math.random() - 0.5) * 0.55,
        1.0 + Math.random() * 0.4,
        0.05 + (Math.random() - 0.5) * 0.55
      );
      mesh.scale.set(0.01, 0.01, 0.01);
      group.add(mesh);
    }
  };

  // Particles: Smoke
  const initSmokeParticles = (group: THREE.Group) => {
    const count = 35;
    for (let i = 0; i < count; i++) {
      const geo = new THREE.DodecahedronGeometry(0.2, 1);
      const mat = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        roughness: 1,
        transparent: true,
        opacity: 0,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        -0.6 + (Math.random() - 0.5) * 0.45,
        1.5 + Math.random() * 1.5,
        (Math.random() - 0.5) * 0.45
      );
      group.add(mesh);
    }
  };

  // Particles: Saponificante Foam Spray
  const initFoamSpray = (group: THREE.Group) => {
    const count = 75;
    for (let i = 0; i < count; i++) {
      const geo = new THREE.SphereGeometry(0.07, 8, 8);
      const mat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.15,
        metalness: 0.1,
        transparent: true,
        opacity: 0,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        -0.6 + (Math.random() - 0.5) * 0.75,
        0.95 + Math.random() * 0.2,
        0.05 + (Math.random() - 0.5) * 0.75
      );
      group.add(mesh);
    }
  };

  // Particles: CO2 in the Duct
  const initCo2Cloud = (group: THREE.Group) => {
    const count = 30;
    for (let i = 0; i < count; i++) {
      const geo = new THREE.SphereGeometry(0.14, 8, 8);
      const mat = new THREE.MeshBasicMaterial({
        color: 0xe6f2ff,
        transparent: true,
        opacity: 0,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 0.35,
        3.5 + Math.random() * 1.0,
        -0.5 + Math.random() * 0.5
      );
      group.add(mesh);
    }
  };

  // Animate elements according to live progressRef.current
  const animateEffects = (time: number, delta: number) => {
    if (!cameraRef.current) return;

    const prog = progressRef.current;
    const orbit = mouseOrbitRef.current;

    // Base camera target positions based on simulation phase
    let targetCamPos = new THREE.Vector3(0, 2.3, 5.8);
    let targetLookAt = new THREE.Vector3(0, 1.8, 0);

    if (prog < 0.2) {
      // Normal overview
      targetCamPos.set(0, 2.3, 5.8);
      targetLookAt.set(0, 1.8, 0);
    } else if (prog < 0.55) {
      // Zoom on fryer fire
      targetCamPos.set(-0.6, 1.8, 3.2);
      targetLookAt.set(-0.6, 1.3, 0);
    } else if (prog < 0.8) {
      // Look at Central Outfire & nozzles
      targetCamPos.set(0.6, 2.3, 4.3);
      targetLookAt.set(0.4, 2.1, 0);
    } else {
      // Full panoramic view of successfully extinguished kitchen
      targetCamPos.set(0, 2.3, 5.2);
      targetLookAt.set(0, 1.8, 0);
    }

    // Apply user mouse orbit offset smoothly
    const radius = targetCamPos.distanceTo(targetLookAt);
    targetCamPos.x += Math.sin(orbit.rotY) * radius * 0.4;
    targetCamPos.z += (Math.cos(orbit.rotY) - 1) * radius * 0.4;
    targetCamPos.y += orbit.rotX * 1.5;

    cameraRef.current.position.lerp(targetCamPos, delta * 3.5);
    cameraRef.current.lookAt(targetLookAt);

    // --- Fire Intensity Calculation ---
    // Fire starts around prog = 0.22, peaks at 0.50, douses between 0.74 and 0.88
    let fireIntensity = 0;
    if (prog >= 0.22 && prog < 0.88) {
      if (prog < 0.45) {
        fireIntensity = (prog - 0.22) / 0.23; // Ramp up
      } else if (prog < 0.74) {
        fireIntensity = 1.0; // Full blaze
      } else {
        fireIntensity = 1.0 - (prog - 0.74) / 0.14; // Saponification dousing
      }
    }

    // Animate Fire Meshes
    if (fireGroupRef.current) {
      fireGroupRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshBasicMaterial;

        if (fireIntensity > 0.05) {
          mat.opacity = fireIntensity * 0.85;
          const flicker = 0.8 + 0.4 * Math.sin(time * 16 + index);
          mesh.scale.set(
            (0.85 + 0.5 * Math.sin(time * 11 + index)) * fireIntensity,
            (1.3 + 0.9 * Math.cos(time * 13 + index)) * fireIntensity * flicker,
            (0.85 + 0.5 * Math.sin(time * 11 + index)) * fireIntensity
          );
          mesh.position.y = 1.0 + Math.sin(time * 8 + index) * 0.15;
        } else {
          mat.opacity = 0;
          mesh.scale.set(0.01, 0.01, 0.01);
        }
      });
    }

    // Update Fire Lights
    flameLightsRef.current.forEach((light, i) => {
      light.intensity = fireIntensity * (3.0 + Math.sin(time * 20 + i) * 1.2);
    });

    // Animate Smoke
    if (smokeGroupRef.current) {
      smokeGroupRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;

        if (fireIntensity > 0.08 || (prog >= 0.85 && prog < 0.96)) {
          mat.opacity = Math.min(0.55, fireIntensity * 0.5);
          mesh.position.y += delta * 0.9;
          mesh.rotation.y += delta * 0.5;
          if (mesh.position.y > 3.2) mesh.position.y = 1.4;
        } else {
          mat.opacity = 0;
        }
      });
    }

    // Saponificante Foam Spray (prog >= 0.74)
    if (foamGroupRef.current) {
      const foamActive = prog >= 0.74;
      foamGroupRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;

        if (foamActive) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, 0.95, delta * 5);
          mesh.scale.set(
            1.1 + Math.sin(time * 2 + index) * 0.2,
            0.7 + Math.cos(time * 2 + index) * 0.1,
            1.1 + Math.sin(time * 2 + index) * 0.2
          );
        } else {
          mat.opacity = 0;
        }
      });
    }

    // CO2 Cloud inside the duct (prog >= 0.74 && prog < 0.95)
    if (co2GroupRef.current) {
      const co2Active = prog >= 0.74 && prog < 0.95;
      co2GroupRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshBasicMaterial;

        if (co2Active) {
          mat.opacity = 0.65 + Math.sin(time * 10 + index) * 0.2;
          mesh.position.y += delta * 0.6;
          if (mesh.position.y > 4.5) mesh.position.y = 3.6;
        } else {
          mat.opacity = 0;
        }
      });
    }

    // Central Alert Strobe Siren & Screen Glow
    if (centralSirenLightRef.current && centralSirenMeshRef.current) {
      const sirenMesh = centralSirenMeshRef.current;
      const sirenMat = sirenMesh.material as THREE.MeshStandardMaterial;

      if (prog >= 0.35 && prog < 0.88) {
        // Active alarm: Strobe flashing
        const strobe = Math.sin(time * 22) > 0;
        centralSirenLightRef.current.intensity = strobe ? 4.0 : 0.2;
        sirenMat.emissive.setHex(strobe ? 0xff0000 : 0x220000);
      } else {
        centralSirenLightRef.current.intensity = 0;
        sirenMat.emissive.setHex(0x110000);
      }
    }

    // Central Screen Color Glow
    if (centralScreenMeshRef.current) {
      const screenMat = centralScreenMeshRef.current.material as THREE.MeshBasicMaterial;
      if (prog < 0.3) {
        screenMat.color.setHex(0x00ff88); // Safe green: Sistema Operante
        screenMat.opacity = 0.25;
      } else if (prog < 0.88) {
        screenMat.color.setHex(0xff1111); // Red danger: 60s Abort / Combate
        screenMat.opacity = 0.45 + Math.sin(time * 8) * 0.2;
      } else {
        screenMat.color.setHex(0xd4af37); // Gold protected: Cozinha Salva
        screenMat.opacity = 0.35;
      }
    }

    // Gas Valve shutoff animation
    if (gasValveRef.current) {
      if (prog >= 0.50) {
        gasValveRef.current.rotation.x = THREE.MathUtils.lerp(gasValveRef.current.rotation.x, Math.PI / 2, delta * 9);
      } else {
        gasValveRef.current.rotation.x = 0;
      }
    }
  };

  // Sync scroll with progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isPlaying) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalDist = rect.height - windowHeight;
      if (totalDist <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalDist;
      setProgress(rawProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlaying, setProgress]);

  // Auto-play interval
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        const next = progressRef.current + 0.005;
        if (next >= 1) {
          setProgress(1);
          setIsPlaying(false);
        } else {
          setProgress(next);
        }
      }, 45);
    }
    return () => clearInterval(interval);
  }, [isPlaying, setProgress]);

  const currentStage = STAGES[currentStageIndex];

  return (
    <section 
      id="hero-3d" 
      ref={containerRef}
      className="relative min-h-[280vh] bg-[#08090c]"
    >
      {/* Sticky 3D Viewport container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        
        {/* 3D WebGL Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-0"
        />

        {/* Top Floating Badge & Action Controls */}
        <div className="relative z-10 p-3 sm:p-6 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
          
          {/* Status Badge */}
          <div className="flex items-center gap-2.5 pointer-events-auto bg-[#0e1015]/90 backdrop-blur-md border border-[#d4af37]/35 px-4 py-2 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
            <div className="flex h-3 w-3 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                progress >= 0.3 && progress < 0.88 ? 'bg-red-400' : 'bg-[#d4af37]'
              }`} />
              <span className={`relative inline-flex rounded-full h-3 w-3 ${
                progress >= 0.3 && progress < 0.88 ? 'bg-red-500' : 'bg-[#d4af37]'
              }`} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                Simulador 3D Central Outfire VTS 32S3
              </span>
              <span className="text-xs font-black uppercase tracking-wider text-white">
                {currentStage.centralStatus}
              </span>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 pointer-events-auto">
            
            {/* Auto-play Demonstration */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 text-xs font-black px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black shadow-glow-gold transition-all"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black" />}
              <span>{isPlaying ? 'Pausar' : 'Play Simulação'}</span>
            </button>

            {/* Test Fire / Instant Suppression Trigger */}
            <button
              onClick={() => {
                setIsPlaying(false);
                setProgress(0.76); // Jump right into saponification & CO2 suppression
              }}
              className="hidden sm:flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/40 backdrop-blur-md transition-all shadow-lg"
              title="Disparar Supressão Imediata"
            >
              <BellRing className="w-3.5 h-3.5 text-red-400 animate-pulse" />
              <span>Testar Disparo</span>
            </button>

            {/* Restart Simulation */}
            <button
              onClick={() => {
                setIsPlaying(false);
                setProgress(0);
              }}
              className="p-2 rounded-xl bg-[#14171e]/80 hover:bg-[#1f2430] text-[#f3e5ab] backdrop-blur-md border border-[#d4af37]/30 transition-all shadow-lg"
              title="Reiniciar Simulação"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Telemetry HUD & Stage Narrative Card (Bottom of Screen) */}
        <div className="relative z-10 p-3 sm:p-6 max-w-7xl mx-auto w-full pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-end">
            
            {/* Real-time Telemetry Indicators */}
            <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-2 pointer-events-auto">
              
              {/* Temperature Badge */}
              <div className="glass-panel-gold px-3.5 py-2.5 rounded-xl flex items-center justify-between border border-[#d4af37]/30 min-w-[140px] flex-1 lg:flex-initial">
                <div className="flex items-center gap-2 text-gray-300 text-xs">
                  <Thermometer className={`w-4 h-4 ${currentStage.temp > 300 ? 'text-red-500 animate-pulse' : 'text-[#d4af37]'}`} />
                  <span>Óleo Fritadeira:</span>
                </div>
                <span className={`font-mono text-sm font-black ${
                  currentStage.temp > 350 ? 'text-red-400' : currentStage.temp > 200 ? 'text-amber-400' : 'text-[#e5c05d]'
                }`}>
                  {currentStage.temp}°C
                </span>
              </div>

              {/* Gas Valve Status */}
              <div className="glass-panel px-3.5 py-2.5 rounded-xl flex items-center justify-between border border-white/10 min-w-[140px] flex-1 lg:flex-initial">
                <div className="flex items-center gap-2 text-gray-300 text-xs">
                  <ZapOff className={`w-4 h-4 ${currentStage.gasStatus === 'CORTADO' ? 'text-red-500' : 'text-gray-400'}`} />
                  <span>Válvula de Gás:</span>
                </div>
                <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                  currentStage.gasStatus === 'CORTADO' ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-emerald-500/20 text-emerald-400'
                }`}>
                  {currentStage.gasStatus}
                </span>
              </div>

              {/* Exhaust Status */}
              <div className="glass-panel px-3.5 py-2.5 rounded-xl flex items-center justify-between border border-white/10 min-w-[140px] flex-1 lg:flex-initial">
                <div className="flex items-center gap-2 text-gray-300 text-xs">
                  <Wind className="w-4 h-4 text-cyan-400" />
                  <span>Exaustão & Damper:</span>
                </div>
                <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                  currentStage.exhaustStatus === 'DESLIGADO' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-emerald-500/20 text-emerald-400'
                }`}>
                  {currentStage.exhaustStatus}
                </span>
              </div>
            </div>

            {/* Stage Narrative Card with Interactive Scrubber Timeline */}
            <div className="lg:col-span-8 pointer-events-auto">
              <div className={`rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
                currentStage.centralStatus === 'DISPARO ATIVO' || currentStage.centralStatus === 'ALERTA TÉRMICO'
                  ? 'glass-panel-glow bg-[#140b0d]/95'
                  : 'glass-panel-gold bg-[#0e1015]/95'
              }`}>
                
                {/* Interactive Scrubber Slider (Drag with finger or mouse) */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-[11px] font-bold text-gray-400 mb-1">
                    <span className="flex items-center gap-1.5 text-[#e5c05d]">
                      <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                      Controle Interativo da Simulação:
                    </span>
                    <span className="font-mono text-[#f3e5ab]">
                      {Math.round(progress * 100)}% da Linha do Tempo
                    </span>
                  </div>
                  
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.002"
                    value={progress}
                    onChange={(e) => {
                      setIsPlaying(false);
                      setProgress(parseFloat(e.target.value));
                    }}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                  />
                </div>

                {/* Direct Stage Jump Buttons (1 to 7) */}
                <div className="grid grid-cols-7 gap-1 sm:gap-1.5 mb-3">
                  {STAGES.map((s, idx) => {
                    const stageProg = idx / (STAGES.length - 1);
                    const isActive = currentStageIndex === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setIsPlaying(false);
                          setProgress(stageProg);
                        }}
                        className={`text-[10px] sm:text-xs py-1.5 rounded-lg font-bold transition-all truncate text-center ${
                          isActive
                            ? 'bg-[#d4af37] text-black shadow-glow-gold'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                        title={s.title}
                      >
                        <span className="sm:hidden">{idx + 1}</span>
                        <span className="hidden sm:inline">Etapa {idx + 1}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Stage Title and Subtitle */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-black bg-[#d4af37] text-black px-2 py-0.5 rounded-full">
                      ETAPA {currentStageIndex + 1} DE {STAGES.length}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white font-sans">
                      {currentStage.title}
                    </h3>
                  </div>
                  <span className="text-[11px] text-gray-400 hidden sm:inline">
                    Arraste o slider ou gire a cozinha com o mouse/toque
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-[#e5c05d] mb-1.5">
                  {currentStage.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {currentStage.description}
                </p>

                {/* Footer Link to Calculator */}
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5 text-gray-300 text-[11px]">
                    <ChevronDown className="w-3.5 h-3.5 text-[#d4af37] animate-bounce" />
                    Role para baixo ou use o slider acima
                  </span>

                  <a 
                    href="#calculadora" 
                    className="text-xs font-black text-[#e5c05d] hover:text-[#f3e5ab] underline underline-offset-4"
                  >
                    Dimensionar minha cozinha na Calculadora &rarr;
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
