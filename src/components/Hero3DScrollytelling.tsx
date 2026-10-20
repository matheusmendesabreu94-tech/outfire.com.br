import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Flame, ShieldCheck, AlertOctagon, ZapOff, Wind, Droplets, 
  Play, Pause, RotateCcw, ChevronDown, CheckCircle2, Thermometer 
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
    description: 'Ambiente seguro. A Central Outfire monitora continuamente os sensores térmicos reguláveis da coifa (145°C) e do duto (300°C).'
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
    description: 'Água JAMAIS pode ser usada (causaria explosão de vapor mortal). Extintores comuns de pó não resfriam o óleo e causam reignição.'
  },
  {
    title: '4. Detecção Dupla nos Sensores',
    subtitle: 'Sensor da coifa (145°C) e sensor do duto (300°C) acionam a Central Outfire.',
    temp: 420,
    gasStatus: 'CORTADO',
    exhaustStatus: 'DESLIGADO',
    centralStatus: 'DISPARO ATIVO',
    description: 'A Central Outfire VTS 32S3 entra em ação instantânea. Identifica o setor exato da Coifa 1 e inicia contagem de supressão.'
  },
  {
    title: '5. Intertravamento Total: Gás & Exaustão',
    subtitle: 'Válvula solenoide fecha o gás e motor de exaustão é desligado.',
    temp: 380,
    gasStatus: 'CORTADO',
    exhaustStatus: 'DESLIGADO',
    centralStatus: 'DISPARO ATIVO',
    description: 'Corta o combustível da linha e desliga a sucção para não alimentar o duto com oxigênio forçado. Dampers se fecham.'
  },
  {
    title: '6. Dupla Supressão: Saponificante & CO2',
    subtitle: 'Bicos disparam líquido saponificante na fritadeira e CO2 nos dutos.',
    temp: 160,
    gasStatus: 'CORTADO',
    exhaustStatus: 'DESLIGADO',
    centralStatus: 'DISPARO ATIVO',
    description: 'O agente saponificante reage com a gordura quente criando uma espessa camada de sabão, sufocando e resfriando. O CO2 inunda o duto.'
  },
  {
    title: '7. Incêndio Extinto & Cozinha Salva',
    subtitle: 'Fogo 100% extinto sem reignição. Danos zero à estrutura e às pessoas.',
    temp: 65,
    gasStatus: 'CORTADO',
    exhaustStatus: 'DESLIGADO',
    centralStatus: 'PROTEGIDO',
    description: 'A cozinha é preservada. Sistema pronto para limpeza e reinicialização rápida. Em conformidade com NBR 14518 e AVCB do Bombeiro.'
  }
];

export const Hero3DScrollytelling: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [progress, setProgress] = useState(0); // 0 to 1
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  // References for Three.js elements
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const fireGroupRef = useRef<THREE.Group | null>(null);
  const smokeGroupRef = useRef<THREE.Group | null>(null);
  const foamGroupRef = useRef<THREE.Group | null>(null);
  const co2GroupRef = useRef<THREE.Group | null>(null);
  const centralLedRef = useRef<THREE.PointLight | null>(null);
  const gasValveRef = useRef<THREE.Mesh | null>(null);
  const flameLightsRef = useRef<THREE.PointLight[]>([]);

  // Setup Three.js Scene
  useEffect(() => {
    if (!canvasRef.current) return;

    const width = canvasRef.current.clientWidth || window.innerWidth;
    const height = canvasRef.current.clientHeight || 650;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0c10);
    scene.fog = new THREE.FogExp2(0x0a0c10, 0.035);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 5.8);
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const mainSpot = new THREE.SpotLight(0xfff5ea, 2.5);
    mainSpot.position.set(2, 6, 4);
    mainSpot.angle = Math.PI / 4;
    mainSpot.penumbra = 0.5;
    mainSpot.castShadow = true;
    scene.add(mainSpot);

    const fillLight = new THREE.PointLight(0x4a709c, 1.2, 10);
    fillLight.position.set(-3, 3, 2);
    scene.add(fillLight);

    // Central Alert LED
    const centralLed = new THREE.PointLight(0x00ff00, 0.8, 5);
    centralLed.position.set(2.4, 2.1, 0.2);
    scene.add(centralLed);
    centralLedRef.current = centralLed;

    // Fire lights
    const fireLight1 = new THREE.PointLight(0xff5500, 0, 4);
    fireLight1.position.set(-0.6, 1.2, 0);
    scene.add(fireLight1);

    const fireLight2 = new THREE.PointLight(0xffaa00, 0, 4);
    fireLight2.position.set(-0.6, 1.8, 0);
    scene.add(fireLight2);
    flameLightsRef.current = [fireLight1, fireLight2];

    // --- BUILD 3D KITCHEN ENVIRONMENT ---
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

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Animate particles based on current progress
      animateEffects(time, delta);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  // Construct Industrial 3D Meshes
  const buildKitchenScene = (scene: THREE.Scene) => {
    // Floor (Dark Industrial Tile)
    const floorGeo = new THREE.PlaneGeometry(16, 16);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x181a1f,
      roughness: 0.3,
      metalness: 0.4,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);

    // Back Wall (Stainless Steel Cladding / Dark Grey Tile)
    const wallGeo = new THREE.PlaneGeometry(16, 8);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x22262d,
      roughness: 0.5,
      metalness: 0.3,
    });
    const wall = new THREE.Mesh(wallGeo, wallMat);
    wall.position.set(0, 4, -1.8);
    wall.receiveShadow = true;
    scene.add(wall);

    // Stainless Cooking Counter
    const counterGeo = new THREE.BoxGeometry(4.2, 0.9, 1.2);
    const inoxMat = new THREE.MeshStandardMaterial({
      color: 0xc8d0d8,
      metalness: 0.85,
      roughness: 0.2,
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
      color: 0x8a5200, // Golden oil
      roughness: 0.1,
      metalness: 0.3,
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

    // Main canopy
    const hoodCanopy = new THREE.Mesh(
      new THREE.BoxGeometry(4.2, 0.6, 1.6),
      inoxMat
    );
    hoodCanopy.castShadow = true;
    hoodGroup.add(hoodCanopy);

    // Slanted Baffle Filters (inside underbelly)
    const filterMat = new THREE.MeshStandardMaterial({
      color: 0x99a3ad,
      metalness: 0.9,
      roughness: 0.3,
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
      color: 0xb5bec8,
      metalness: 0.8,
      roughness: 0.25,
    });
    const ductVertical = new THREE.Mesh(ductGeo, ductMat);
    ductVertical.position.set(0, 3.8, 0);
    scene.add(ductVertical);

    // Horizontal duct going through the wall/ceiling
    const ductHorizGeo = new THREE.CylinderGeometry(0.35, 0.35, 2.5, 24);
    const ductHoriz = new THREE.Mesh(ductHorizGeo, ductMat);
    ductHoriz.rotation.x = Math.PI / 2;
    ductHoriz.position.set(0, 4.5, -0.8);
    scene.add(ductHoriz);

    // Fire Damper box on the duct
    const damperBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, 0.85, 0.4),
      new THREE.MeshStandardMaterial({ color: 0x8b0000, metalness: 0.5, roughness: 0.4 })
    );
    damperBox.position.set(0, 4.5, -0.4);
    scene.add(damperBox);

    // --- SUPPRESSION PIPING & NOZZLES ---
    const pipeMat = new THREE.MeshStandardMaterial({
      color: 0xe0e6ed,
      metalness: 0.95,
      roughness: 0.1,
    });

    // Horizontal distribution pipe under the hood
    const pipeGeo = new THREE.CylinderGeometry(0.02, 0.02, 3.8, 12);
    const pipe = new THREE.Mesh(pipeGeo, pipeMat);
    pipe.rotation.z = Math.PI / 2;
    pipe.position.set(0, 2.35, 0.4);
    scene.add(pipe);

    // Nozzles (Bicos de Inox apontados para a fritadeira e área de cocção)
    const nozzleMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 }); // Gold/Brass or Chrome
    const nozzle1 = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.08, 12), nozzleMat);
    nozzle1.rotation.x = Math.PI;
    nozzle1.position.set(-0.6, 2.28, 0.1); // Over the fryer
    scene.add(nozzle1);

    const nozzle2 = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.08, 12), nozzleMat);
    nozzle2.rotation.x = Math.PI;
    nozzle2.position.set(0.6, 2.28, 0.1); // Over stove 1
    scene.add(nozzle2);

    const nozzle3 = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.08, 12), nozzleMat);
    nozzle3.rotation.x = Math.PI;
    nozzle3.position.set(1.4, 2.28, 0.1); // Over stove 2
    scene.add(nozzle3);

    // 2 Plenum Nozzles (inside the hood filters)
    const plenumNozzle1 = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.08, 12), nozzleMat);
    plenumNozzle1.rotation.z = Math.PI / 4;
    plenumNozzle1.position.set(-0.8, 2.6, 0);
    scene.add(plenumNozzle1);

    const plenumNozzle2 = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.08, 12), nozzleMat);
    plenumNozzle2.rotation.z = -Math.PI / 4;
    plenumNozzle2.position.set(0.8, 2.6, 0);
    scene.add(plenumNozzle2);

    // --- SENSORS ---
    // Hood Sensor 145°C
    const sensorHood = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.015, 0.12, 12),
      new THREE.MeshStandardMaterial({ color: 0xff3300, emissive: 0xaa1100, roughness: 0.2 })
    );
    sensorHood.position.set(-0.6, 2.42, 0.25);
    scene.add(sensorHood);

    // Duct Sensor 300°C
    const sensorDuct = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.015, 0.15, 12),
      new THREE.MeshStandardMaterial({ color: 0x9900ff, emissive: 0x6600aa, roughness: 0.2 })
    );
    sensorDuct.position.set(0.35, 3.8, 0);
    sensorDuct.rotation.z = Math.PI / 2;
    scene.add(sensorDuct);

    // --- CENTRAL OUTFIRE VTS 32S3 (WALL MOUNTED PANEL) ---
    const centralBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.65, 0.85, 0.18),
      new THREE.MeshStandardMaterial({
        color: 0x141518,
        metalness: 0.6,
        roughness: 0.3,
      })
    );
    centralBox.position.set(2.4, 2.1, 0.1);
    centralBox.castShadow = true;
    scene.add(centralBox);

    // Screen (IHM Touchscreen)
    const screenGeo = new THREE.PlaneGeometry(0.45, 0.35);
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x0088ff });
    const centralScreen = new THREE.Mesh(screenGeo, screenMat);
    centralScreen.position.set(2.4, 2.25, 0.195);
    scene.add(centralScreen);

    // Red emergency push / pull button
    const pullBtn = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.05, 16),
      new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.3 })
    );
    pullBtn.rotation.x = Math.PI / 2;
    pullBtn.position.set(2.4, 1.85, 0.2);
    scene.add(pullBtn);

    // Gas Solenoid Shutoff Valve on the lower gas pipe
    const gasPipe = new THREE.Mesh(
      new THREE.CylinderGeometry(0.025, 0.025, 3.0, 16),
      new THREE.MeshStandardMaterial({ color: 0xffcc00, metalness: 0.6 })
    );
    gasPipe.rotation.z = Math.PI / 2;
    gasPipe.position.set(0, 0.15, 0.6);
    scene.add(gasPipe);

    const valve = new THREE.Mesh(
      new THREE.BoxGeometry(0.15, 0.18, 0.15),
      new THREE.MeshStandardMaterial({ color: 0xcc0000, metalness: 0.5 })
    );
    valve.position.set(-1.2, 0.15, 0.6);
    scene.add(valve);
    gasValveRef.current = valve;
  };

  // Particles: Fire
  const initFireParticles = (group: THREE.Group) => {
    const count = 45;
    for (let i = 0; i < count; i++) {
      const geo = new THREE.ConeGeometry(0.12, 0.45, 8);
      const mat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xff3300 : 0xff9900,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        -0.6 + (Math.random() - 0.5) * 0.5,
        1.0 + Math.random() * 0.4,
        0.05 + (Math.random() - 0.5) * 0.5
      );
      mesh.scale.set(0.01, 0.01, 0.01);
      group.add(mesh);
    }
  };

  // Particles: Smoke
  const initSmokeParticles = (group: THREE.Group) => {
    const count = 30;
    for (let i = 0; i < count; i++) {
      const geo = new THREE.DodecahedronGeometry(0.18, 1);
      const mat = new THREE.MeshStandardMaterial({
        color: 0x222222,
        roughness: 1,
        transparent: true,
        opacity: 0,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        -0.6 + (Math.random() - 0.5) * 0.4,
        1.5 + Math.random() * 1.5,
        (Math.random() - 0.5) * 0.4
      );
      group.add(mesh);
    }
  };

  // Particles: Saponificante Foam Spray
  const initFoamSpray = (group: THREE.Group) => {
    const count = 60;
    for (let i = 0; i < count; i++) {
      const geo = new THREE.SphereGeometry(0.06, 8, 8);
      const mat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.2,
        transparent: true,
        opacity: 0,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        -0.6 + (Math.random() - 0.5) * 0.7,
        0.95 + Math.random() * 0.15,
        0.05 + (Math.random() - 0.5) * 0.7
      );
      group.add(mesh);
    }
  };

  // Particles: CO2 in the Duct
  const initCo2Cloud = (group: THREE.Group) => {
    const count = 25;
    for (let i = 0; i < count; i++) {
      const geo = new THREE.SphereGeometry(0.12, 8, 8);
      const mat = new THREE.MeshBasicMaterial({
        color: 0xddeeff,
        transparent: true,
        opacity: 0,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 0.3,
        3.5 + Math.random() * 1.0,
        -0.5 + Math.random() * 0.5
      );
      group.add(mesh);
    }
  };

  // Animate elements according to current progress
  const animateEffects = (time: number, delta: number) => {
    if (!cameraRef.current) return;

    // Camera movement based on progress
    if (progress < 0.2) {
      // Normal overview
      cameraRef.current.position.lerp(new THREE.Vector3(0, 2.2, 5.8), delta * 3);
      cameraRef.current.lookAt(0, 1.8, 0);
    } else if (progress < 0.55) {
      // Zoom on fryer fire
      cameraRef.current.position.lerp(new THREE.Vector3(-0.6, 1.7, 3.2), delta * 3);
      cameraRef.current.lookAt(-0.6, 1.3, 0);
    } else if (progress < 0.8) {
      // Look up at hood, duct and Central Outfire
      cameraRef.current.position.lerp(new THREE.Vector3(0.5, 2.4, 4.2), delta * 3);
      cameraRef.current.lookAt(0.3, 2.2, 0);
    } else {
      // Full view of successfully extinguished kitchen
      cameraRef.current.position.lerp(new THREE.Vector3(0, 2.3, 5.2), delta * 3);
      cameraRef.current.lookAt(0, 1.8, 0);
    }

    // --- Fire intensity ---
    // Fire starts around progress = 0.25, peaks at 0.50, douses between 0.75 and 0.90
    let fireIntensity = 0;
    if (progress >= 0.25 && progress < 0.85) {
      if (progress < 0.45) {
        fireIntensity = (progress - 0.25) / 0.20; // 0 to 1
      } else if (progress < 0.75) {
        fireIntensity = 1.0; // peak fire
      } else {
        fireIntensity = 1.0 - (progress - 0.75) / 0.10; // extinguishing
      }
    }

    // Update fire meshes
    if (fireGroupRef.current) {
      fireGroupRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshBasicMaterial;

        if (fireIntensity > 0.05) {
          mat.opacity = fireIntensity * 0.85;
          const flicker = 0.8 + 0.4 * Math.sin(time * 15 + index);
          mesh.scale.set(
            (0.8 + 0.5 * Math.sin(time * 10 + index)) * fireIntensity,
            (1.2 + 0.8 * Math.cos(time * 12 + index)) * fireIntensity * flicker,
            (0.8 + 0.5 * Math.sin(time * 10 + index)) * fireIntensity
          );
          mesh.position.y = 1.0 + Math.sin(time * 8 + index) * 0.15;
        } else {
          mat.opacity = 0;
          mesh.scale.set(0.01, 0.01, 0.01);
        }
      });
    }

    // Update fire lights
    flameLightsRef.current.forEach((light, i) => {
      light.intensity = fireIntensity * (2.5 + Math.sin(time * 20 + i) * 1.0);
    });

    // Update smoke
    if (smokeGroupRef.current) {
      smokeGroupRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;

        if (fireIntensity > 0.1 || (progress >= 0.85 && progress < 0.98)) {
          mat.opacity = Math.min(0.5, fireIntensity * 0.5);
          mesh.position.y += delta * 0.8;
          mesh.rotation.y += delta * 0.5;
          if (mesh.position.y > 3.0) {
            mesh.position.y = 1.4;
          }
        } else {
          mat.opacity = 0;
        }
      });
    }

    // Saponificante Foam Spray (Progress 0.75 to 1.0)
    if (foamGroupRef.current) {
      const foamActive = progress >= 0.75;
      foamGroupRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;

        if (foamActive) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, 0.95, delta * 4);
          mesh.scale.set(
            1.0 + Math.sin(time * 2 + index) * 0.2,
            0.6 + Math.cos(time * 2 + index) * 0.1,
            1.0 + Math.sin(time * 2 + index) * 0.2
          );
        } else {
          mat.opacity = 0;
        }
      });
    }

    // CO2 Cloud inside the duct (Progress 0.75 to 0.95)
    if (co2GroupRef.current) {
      const co2Active = progress >= 0.75 && progress < 0.95;
      co2GroupRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshBasicMaterial;

        if (co2Active) {
          mat.opacity = 0.6 + Math.sin(time * 10 + index) * 0.2;
          mesh.position.y += delta * 0.5;
          if (mesh.position.y > 4.5) mesh.position.y = 3.6;
        } else {
          mat.opacity = 0;
        }
      });
    }

    // Central Alert LED and Screen
    if (centralLedRef.current) {
      if (progress < 0.3) {
        centralLedRef.current.color.setHex(0x00ff00); // Green: Safe
        centralLedRef.current.intensity = 0.8;
      } else if (progress < 0.85) {
        // Red flashing: Danger / Suppression active
        const flash = Math.sin(time * 16) > 0 ? 3.0 : 0.2;
        centralLedRef.current.color.setHex(0xff0000);
        centralLedRef.current.intensity = flash;
      } else {
        centralLedRef.current.color.setHex(0x00ff66); // Protected
        centralLedRef.current.intensity = 1.2;
      }
    }

    // Gas Valve cutoff animation
    if (gasValveRef.current) {
      if (progress >= 0.55) {
        gasValveRef.current.rotation.x = THREE.MathUtils.lerp(gasValveRef.current.rotation.x, Math.PI / 2, delta * 8);
      } else {
        gasValveRef.current.rotation.x = 0;
      }
    }
  };

  // Sync scroll with progress when scrolling the container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far container has scrolled through window
      const totalDist = rect.height - windowHeight;
      if (totalDist <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalDist;
      const clamped = Math.max(0, Math.min(1, rawProgress));
      
      if (!isPlaying) {
        setProgress(clamped);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlaying]);

  // Update current stage index
  useEffect(() => {
    const idx = Math.min(
      STAGES.length - 1,
      Math.floor(progress * STAGES.length)
    );
    setCurrentStageIndex(idx);
  }, [progress]);

  // Auto-play interval
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 1) {
            setIsPlaying(false);
            return 1;
          }
          return prev + 0.005;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentStage = STAGES[currentStageIndex];

  return (
    <section 
      id="hero-3d" 
      ref={containerRef}
      className="relative min-h-[300vh] bg-[#090a0d]"
    >
      {/* Sticky 3D Viewport container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        
        {/* 3D WebGL Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-0"
        />

        {/* Top Floating Badge & Controls */}
        <div className="relative z-10 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
          <div className="flex items-center gap-2.5 pointer-events-auto bg-[#101216]/85 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl shadow-2xl">
            <div className="flex h-3 w-3 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                progress >= 0.3 && progress < 0.85 ? 'bg-red-400' : 'bg-emerald-400'
              }`} />
              <span className={`relative inline-flex rounded-full h-3 w-3 ${
                progress >= 0.3 && progress < 0.85 ? 'bg-red-500' : 'bg-emerald-500'
              }`} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Simulação 3D Interativa: {currentStage.centralStatus}
            </span>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 transition-all shadow-lg"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pausar' : 'Demonstração Automática'}</span>
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setProgress(0);
              }}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 transition-all shadow-lg"
              title="Reiniciar Simulação"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Telemetry HUD & Stage Narrative Card (Bottom of Screen) */}
        <div className="relative z-10 p-4 sm:p-6 max-w-7xl mx-auto w-full pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
            
            {/* Real-time Telemetry Indicators */}
            <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-2 pointer-events-auto">
              
              {/* Temperature Badge */}
              <div className="glass-panel px-3.5 py-2.5 rounded-xl flex items-center justify-between border border-white/10 min-w-[140px] flex-1 lg:flex-initial">
                <div className="flex items-center gap-2 text-gray-300 text-xs">
                  <Thermometer className={`w-4 h-4 ${currentStage.temp > 300 ? 'text-red-500 animate-pulse' : 'text-amber-400'}`} />
                  <span>Óleo Fritadeira:</span>
                </div>
                <span className={`font-mono text-sm font-black ${
                  currentStage.temp > 350 ? 'text-red-400' : currentStage.temp > 200 ? 'text-amber-400' : 'text-emerald-400'
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
                  currentStage.gasStatus === 'CORTADO' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-emerald-500/20 text-emerald-400'
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

            {/* Stage Narrative Card */}
            <div className="lg:col-span-8 pointer-events-auto">
              <div className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
                currentStage.centralStatus === 'DISPARO ATIVO' || currentStage.centralStatus === 'ALERTA TÉRMICO'
                  ? 'glass-panel-glow bg-[#13090a]/90'
                  : 'glass-panel bg-[#0e1014]/90'
              }`}>
                
                {/* Progress bar line */}
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-4">
                  <div 
                    className="bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 h-full transition-all duration-150"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold bg-red-600 text-white px-2 py-0.5 rounded-full">
                      ETAPA {currentStageIndex + 1} DE {STAGES.length}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                      {currentStage.title}
                    </h3>
                  </div>
                  <span className="text-xs text-gray-400">
                    Role a página para avançar a simulação
                  </span>
                </div>

                <p className="text-sm font-medium text-amber-400/90 mb-2">
                  {currentStage.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {currentStage.description}
                </p>

                {/* Scrolly indicator */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5 text-gray-300">
                    <ChevronDown className="w-4 h-4 text-red-500 animate-bounce" />
                    Role para baixo para ver a ação do Saponificante e CO2
                  </span>

                  <a 
                    href="#calculadora" 
                    className="text-xs font-bold text-red-400 hover:text-red-300 underline underline-offset-4"
                  >
                    Ir direto para a Calculadora da Cozinha &rarr;
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
