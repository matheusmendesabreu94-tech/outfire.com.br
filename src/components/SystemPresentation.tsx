import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { 
  Cpu, Shield, Volume2, Calendar, AlertTriangle, 
  Layers, CheckCircle, Radio, Gauge, Power, ArrowRight,
  Download, Eye, RotateCcw, Zap, Battery, Sparkles
} from 'lucide-react';
import { createNormalizedIhmScreenCanvas } from '../utils/ihmScreen';

export const SystemPresentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'3d' | 'interno' | 'instalado'>('3d');

  // 3D Central Enclosure State
  const canvas3DRef = useRef<HTMLCanvasElement>(null);
  const container3DRef = useRef<HTMLDivElement>(null);
  const [isPsuOpen, setIsPsuOpen] = useState(false);
  const isPsuOpenRef = useRef(false);
  isPsuOpenRef.current = isPsuOpen;

  const [isBatteryOpen, setIsBatteryOpen] = useState(false);
  const isBatteryOpenRef = useRef(false);
  isBatteryOpenRef.current = isBatteryOpen;

  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  // References for 3D animation
  const psuGroupRef = useRef<THREE.Group | null>(null);
  const batteryDrawerGroupRef = useRef<THREE.Group | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  // Toggle PSU Drawer (Sobe a gaveta da fonte)
  const togglePsuDrawer = () => {
    setIsPsuOpen(prev => !prev);
  };

  // Toggle Battery Drawer (Desce a gaveta de baterias)
  const toggleBatteryDrawer = () => {
    setIsBatteryOpen(prev => !prev);
  };

  // Reset 3D camera
  const resetCamera = () => {
    if (controlsRef.current && cameraRef.current) {
      cameraRef.current.position.set(1.8, 1.2, 2.2);
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  };

  // 3D Cabinet Viewer Effect
  useEffect(() => {
    if (activeTab !== '3d' || !canvas3DRef.current || !container3DRef.current) return;

    const width = container3DRef.current.clientWidth;
    const height = container3DRef.current.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e1117);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(1.8, 1.2, 2.2);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas3DRef.current,
      antialias: true,
      powerPreference: 'high-performance',
      logarithmicDepthBuffer: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // 4. OrbitControls (Smooth 360° mouse & touch orbit)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 1.2;
    controls.maxDistance = 6.0;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;

    // 5. Lighting
    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xfff6ea, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    keyLight.position.set(3, 4, 3);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xd4af37, 0.85);
    rimLight.position.set(-3, -2, -3);
    scene.add(rimLight);

    // Soft Ambient Floor Shadow (sem grade)
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.35
    });
    const shadowPlane = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.4), shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.set(0, -0.65, 0);
    scene.add(shadowPlane);

    // --- MATERIALS ---
    const textureLoader = new THREE.TextureLoader();
    const frontCoverTexture = textureLoader.load('/assets/tampa-central-moderna.png');
    frontCoverTexture.colorSpace = THREE.SRGBColorSpace;

    const matSteelEnclosure = new THREE.MeshStandardMaterial({
      color: 0x14161b,
      metalness: 0.85,
      roughness: 0.35
    });

    const matFrontCover = new THREE.MeshStandardMaterial({
      map: frontCoverTexture,
      metalness: 0.2,
      roughness: 0.35
    });

    // Cabinet Dimensions: Width 1.4, Height 1.0, Depth 0.58
    const boxMaterials = [
      matSteelEnclosure, // right
      matSteelEnclosure, // left
      matSteelEnclosure, // top
      matSteelEnclosure, // bottom
      matFrontCover,     // FRONT: Official modern cover (clean, without white line)
      matSteelEnclosure  // back
    ];

    const cabinetMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 1.0, 0.58),
      boxMaterials
    );
    cabinetMesh.castShadow = true;
    cabinetMesh.receiveShadow = true;
    scene.add(cabinetMesh);

    // Top & Bottom Interior Slot Openings in Cabinet Sheet Metal
    const slotInteriorMat = new THREE.MeshBasicMaterial({ color: 0x07080a });
    const topSlotHole = new THREE.Mesh(new THREE.PlaneGeometry(0.88, 0.22), slotInteriorMat);
    topSlotHole.rotation.x = -Math.PI / 2;
    topSlotHole.position.set(0, 0.501, -0.05);
    scene.add(topSlotHole);

    const bottomSlotHole = new THREE.Mesh(new THREE.PlaneGeometry(0.70, 0.22), slotInteriorMat);
    bottomSlotHole.rotation.x = Math.PI / 2;
    bottomSlotHole.position.set(0, -0.501, -0.05);
    scene.add(bottomSlotHole);

    // Front Touchscreen IHM Display (2.8" QVGA 320x240 no centro da tampa 36cm x 26cm)
    // Cores normalizadas: 3 luzes superiores VERDES, 4 botões inferiores AZUIS
    const ihmCanvas = createNormalizedIhmScreenCanvas();
    const screenDisplayTexture = new THREE.CanvasTexture(ihmCanvas);
    screenDisplayTexture.colorSpace = THREE.SRGBColorSpace;
    screenDisplayTexture.generateMipmaps = true;
    screenDisplayTexture.minFilter = THREE.LinearMipmapLinearFilter;
    screenDisplayTexture.magFilter = THREE.LinearFilter;
    screenDisplayTexture.anisotropy = 16;

    const ihmMat = new THREE.MeshStandardMaterial({
      map: screenDisplayTexture,
      roughness: 0.15,
      metalness: 0.05,
      emissive: 0xffffff,
      emissiveMap: screenDisplayTexture,
      emissiveIntensity: 0.95, // Backlight nítido e iluminado da IHM
      polygonOffset: true,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
      depthTest: true,
      depthWrite: true
    });

    // Tela de 2.8" exatamente no centro da tampa (X = 0, Y = 0) logo abaixo do logo Outfire
    // Z = 0.298 posicionada claramente 4mm à frente da moldura (Z = 0.294) e 8mm à frente da tampa (Z = 0.290)
    // Elimina 100% de qualquer Z-fighting, scanlines ou cintilação
    const ihmScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.219, 0.164), ihmMat);
    ihmScreen.position.set(0, 0.0, 0.298);
    scene.add(ihmScreen);

    // Moldura metálica de encaixe (Bezel) posicionada ATRÁS da tela
    const screenBezelMat = new THREE.MeshStandardMaterial({
      color: 0x181a20,
      metalness: 0.9,
      roughness: 0.35
    });
    // Espessura 0.004 com centro em Z = 0.292 (face frontal em Z = 0.294)
    const screenFrame = new THREE.Mesh(new THREE.BoxGeometry(0.238, 0.182, 0.004), screenBezelMat);
    screenFrame.position.set(0, 0.0, 0.292);
    scene.add(screenFrame);

    // 4 Parafusos de fixação nos cantos do módulo TFT
    const screenBoltMat = new THREE.MeshStandardMaterial({ color: 0xb0b3b8, metalness: 0.95, roughness: 0.2 });
    const screenBoltGeo = new THREE.CylinderGeometry(0.004, 0.004, 0.006, 8);
    [
      [-0.108, 0.080],
      [0.108, 0.080],
      [-0.108, -0.080],
      [0.108, -0.080]
    ].forEach(([sx, sy]) => {
      const screw = new THREE.Mesh(screenBoltGeo, screenBoltMat);
      screw.rotation.x = Math.PI / 2;
      screw.position.set(sx, sy, 0.2985);
      scene.add(screw);
    });

    // Rear Mounting Holes (Keyhole Slots)
    const slotMat = new THREE.MeshBasicMaterial({ color: 0x07080a });
    const slot1 = new THREE.Mesh(new THREE.PlaneGeometry(0.04, 0.12), slotMat);
    slot1.rotation.y = Math.PI;
    slot1.position.set(-0.5, 0.3, -0.291);
    scene.add(slot1);

    const slot2 = new THREE.Mesh(new THREE.PlaneGeometry(0.04, 0.12), slotMat);
    slot2.rotation.y = Math.PI;
    slot2.position.set(0.5, 0.3, -0.291);
    scene.add(slot2);

    // Common Bolt Material for lids
    const boltMat = new THREE.MeshStandardMaterial({ color: 0xb0b3b8, metalness: 0.9, roughness: 0.2 });
    const boltGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.015, 8);

    // --- TOP PSU DRAWER (GAVETA DA FONTE - SUBIDA / DESCIDA) ---
    // Em repouso (fechada): A fonte fica DENTRO da central, e a tampa fica em cima (face superior da central).
    // Quando acionada (subir): O conjunto sobe, com a tampa na PARTE DE CIMA da fonte!
    const psuGroup = new THREE.Group();
    psuGroup.position.set(0, 0, -0.05);
    scene.add(psuGroup);
    psuGroupRef.current = psuGroup;

    // 1. PSU Cover plate (Tampa da Fonte na parte SUPERIOR)
    const psuCoverMat = new THREE.MeshStandardMaterial({
      color: 0x1f232b,
      metalness: 0.8,
      roughness: 0.35
    });
    const psuCover = new THREE.Mesh(
      new THREE.BoxGeometry(0.95, 0.02, 0.25),
      psuCoverMat
    );
    // Flush at top face of cabinet (Y = 0.50) when closed
    psuCover.position.set(0, 0.505, 0);
    psuCover.userData = { isPsu: true, name: 'Tampa da Fonte de Alimentação' };
    psuGroup.add(psuCover);

    // Screws/bolts on PSU top lid
    [
      [-0.43, 0.518, -0.09],
      [-0.43, 0.518, 0.09],
      [0.43, 0.518, -0.09],
      [0.43, 0.518, 0.09],
    ].forEach(([bx, by, bz]) => {
      const bolt = new THREE.Mesh(boltGeo, boltMat);
      bolt.position.set(bx, by, bz);
      psuGroup.add(bolt);
    });

    // 2. PSU Aluminum Casing (Andeli MS-350-24 Industrial 24V)
    // Fica DENTRO da central (abaixo da tampa) quando fechada
    const psuBoxMat = new THREE.MeshStandardMaterial({
      color: 0xd4d4d8,
      metalness: 0.9,
      roughness: 0.2
    });
    const psuBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, 0.44, 0.20),
      psuBoxMat
    );
    // Top of psuBox touches underside of psuCover (0.495)
    psuBox.position.set(0, 0.27, 0);
    psuBox.userData = { isPsu: true, name: 'Fonte de Alimentação Andeli MS-350-24 (24V Industrial)' };
    psuGroup.add(psuBox);

    // PSU Caution / Spec Label
    const psuLabelMat = new THREE.MeshBasicMaterial({ color: 0xeab308 });
    const psuLabel = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.08), psuLabelMat);
    psuLabel.position.set(0, 0.27, 0.101);
    psuGroup.add(psuLabel);

    // --- BOTTOM BATTERY DRAWER (GAVETA DE BATERIA - DESCIDA / SUBIDA) ---
    // Em repouso (fechada): As baterias ficam DENTRO da central, e a tampa fica embaixo (face inferior da central).
    // Quando acionada (descer): O conjunto desce, com a tampa na PARTE DE BAIXO da bateria!
    const batteryDrawerGroup = new THREE.Group();
    batteryDrawerGroup.position.set(0, 0, -0.05);
    scene.add(batteryDrawerGroup);
    batteryDrawerGroupRef.current = batteryDrawerGroup;

    // 1. Bottom Battery Cover plate (Tampa da Gaveta na parte INFERIOR)
    const batCoverMat = new THREE.MeshStandardMaterial({
      color: 0x1f232b,
      metalness: 0.8,
      roughness: 0.35
    });
    const batCover = new THREE.Mesh(
      new THREE.BoxGeometry(0.74, 0.02, 0.24),
      batCoverMat
    );
    // Flush at bottom face of cabinet (Y = -0.50) when closed
    batCover.position.set(0, -0.505, 0);
    batCover.userData = { isBattery: true, name: 'Tampa da Gaveta de Baterias' };
    batteryDrawerGroup.add(batCover);

    // Screws/bolts on Battery bottom lid
    [
      [-0.33, -0.518, -0.09],
      [-0.33, -0.518, 0.09],
      [0.33, -0.518, -0.09],
      [0.33, -0.518, 0.09],
    ].forEach(([bx, by, bz]) => {
      const bolt = new THREE.Mesh(boltGeo, boltMat);
      bolt.position.set(bx, by, bz);
      batteryDrawerGroup.add(bolt);
    });

    // 2. Two 12V 7Ah Pionero Backup Batteries (Ficam DENTRO da central em cima da tampa quando fechada)
    const batBodyMat = new THREE.MeshStandardMaterial({ color: 0x090a0d, roughness: 0.5 });
    const bat1 = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.38, 0.18), batBodyMat);
    bat1.position.set(-0.18, -0.305, 0);
    bat1.userData = { isBattery: true, name: 'Bateria Pionero 12V 7Ah (Banco de Backup)' };
    batteryDrawerGroup.add(bat1);

    const bat2 = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.38, 0.18), batBodyMat);
    bat2.position.set(0.18, -0.305, 0);
    bat2.userData = { isBattery: true, name: 'Bateria Pionero 12V 7Ah (Banco de Backup)' };
    batteryDrawerGroup.add(bat2);

    // Battery Terminals (polos positivo/negativo)
    const termMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, metalness: 0.8 });
    const termRedMat = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.8 });
    const t1 = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.03), termMat);
    t1.position.set(-0.24, -0.10, 0.05);
    batteryDrawerGroup.add(t1);

    const t2 = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.03), termRedMat);
    t2.position.set(-0.12, -0.10, 0.05);
    batteryDrawerGroup.add(t2);

    const t3 = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.03), termMat);
    t3.position.set(0.12, -0.10, 0.05);
    batteryDrawerGroup.add(t3);

    const t4 = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.03), termRedMat);
    t4.position.set(0.24, -0.10, 0.05);
    batteryDrawerGroup.add(t4);

    // --- RAYCASTER FOR CLICK & HOVER ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([psuGroup, batteryDrawerGroup, cabinetMesh], true);

      if (intersects.length > 0) {
        let hit = intersects[0].object;
        if (hit.userData?.isPsu) {
          renderer.domElement.style.cursor = 'pointer';
          setHoveredPart(isPsuOpenRef.current ? '⚡ Fonte Aberta (Clique para recolher)' : '⚡ Fonte de Alimentação (Clique para subir gaveta)');
          return;
        } else if (hit.userData?.isBattery) {
          renderer.domElement.style.cursor = 'pointer';
          setHoveredPart(isBatteryOpenRef.current ? '🔋 Baterias Abertas (Clique para recolher)' : '🔋 Baterias de Backup (Clique para descer gaveta)');
          return;
        } else {
          renderer.domElement.style.cursor = 'grab';
          setHoveredPart('Gabinete Central Outfire (Arraste para girar 360°)');
          return;
        }
      }
      renderer.domElement.style.cursor = 'default';
      setHoveredPart(null);
    };

    const onClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([psuGroup, batteryDrawerGroup], true);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        if (hit.userData?.isPsu) {
          setIsPsuOpen(prev => !prev);
        } else if (hit.userData?.isBattery) {
          setIsBatteryOpen(prev => !prev);
        }
      }
    };

    renderer.domElement.addEventListener('mousemove', onPointerMove);
    renderer.domElement.addEventListener('click', onClick);

    // --- RESIZE ---
    const handleResize = () => {
      if (!container3DRef.current || !renderer || !camera) return;
      const w = container3DRef.current.clientWidth;
      const h = container3DRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // --- ANIMATION LOOP ---
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth slide of PSU drawer
      const targetPsuY = isPsuOpenRef.current ? 0.52 : 0;
      if (psuGroupRef.current) {
        psuGroupRef.current.position.y += (targetPsuY - psuGroupRef.current.position.y) * 0.12;
      }

      // Smooth slide of Battery drawer
      const targetBatY = isBatteryOpenRef.current ? -0.52 : 0;
      if (batteryDrawerGroupRef.current) {
        batteryDrawerGroupRef.current.position.y += (targetBatY - batteryDrawerGroupRef.current.position.y) * 0.12;
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', onPointerMove);
      renderer.domElement.removeEventListener('click', onClick);
      renderer.dispose();
    };
  }, [activeTab]);

  const features = [
    {
      icon: Layers,
      title: 'Multicoifa Independente (Até 3 Coifas)',
      desc: 'Capacidade de proteger e controlar até 3 coifas simultaneamente de maneira 100% autônoma. O disparo em uma coifa não interrompe a operação das demais.'
    },
    {
      icon: Cpu,
      title: 'IHM Touchscreen Inteligente',
      desc: 'Interface gráfica colorida touch com diagnóstico contínuo de baterias, rede elétrica, pressão de cilindros e estado das válvulas de gás.'
    },
    {
      icon: Volume2,
      title: 'Alertas Inteligentes por Voz Falada',
      desc: 'Diferente de sistemas que apenas apitam gerando pânico, a Central VTS emite avisos sonoros falados em português, instruindo a brigada com clareza.'
    },
    {
      icon: Calendar,
      title: 'Agenda Semanal Automática de Gás',
      desc: 'Programe os horários em que a válvula de gás deve abrir e fechar a cada dia da semana. Garante segurança total fora do horário de expediente e evita esquecimentos.'
    },
    {
      icon: AlertTriangle,
      title: 'Proteção Anti-Disparo com Botão Abortar',
      desc: 'Em caso de alarme em falso, a tela exibe contagem regressiva configurável (ex: 60s) permitindo abortar com um toque antes de descarregar os cilindros.'
    },
    {
      icon: Radio,
      title: 'Alarme Convencional Segregado',
      desc: 'Integração perfeita com o sistema predial do shopping/edifício, mantendo a linha de supressão por saponificante imune a fumaças corriqueiras de grelhados.'
    }
  ];

  return (
    <section id="central-vts" className="py-24 bg-[#08090c] relative overflow-hidden">
      {/* Background Glows in Gold */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#997b1a]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold tracking-wide uppercase mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#d4af37]" />
            Engenharia e Automação Nacional
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Central de Comando Inteligente <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]">
              Outfire VTS 32S3
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            O verdadeiro cérebro do sistema de supressão. Controle absoluto, monitoramento em tempo real, 
            automação de gás e proteção anti-disparo acidental na ponta dos seus dedos.
          </p>
        </div>

        {/* Interactive Hardware Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Real Photo Viewer / 3D Interactive Enclosure */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div 
              ref={container3DRef}
              className="relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#14171e] to-[#0a0b0e] border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden group"
            >
              
              {/* 1. INTERACTIVE 3D CAD CABINET (ORBIT 360° + SLIDING DRAWERS) */}
              {activeTab === '3d' && (
                <div className="relative w-full h-full">
                  <canvas ref={canvas3DRef} className="w-full h-full block outline-none cursor-grab active:cursor-grabbing" />
                  
                  {/* Floating Tooltip */}
                  {hoveredPart && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/50 text-xs text-[#f3e5ab] font-bold shadow-glow-gold">
                      {hoveredPart}
                    </div>
                  )}

                  {/* 3D Action Controls */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-auto">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={togglePsuDrawer}
                        className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${
                          isPsuOpen 
                            ? 'bg-amber-500 text-black border-amber-400 shadow-glow-gold' 
                            : 'bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40'
                        }`}
                      >
                        <Zap className="w-3.5 h-3.5" />
                        <span>{isPsuOpen ? 'Recolher Fonte' : 'Subir Fonte'}</span>
                      </button>

                      <button
                        onClick={toggleBatteryDrawer}
                        className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${
                          isBatteryOpen 
                            ? 'bg-amber-500 text-black border-amber-400 shadow-glow-gold' 
                            : 'bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40'
                        }`}
                      >
                        <Battery className="w-3.5 h-3.5" />
                        <span>{isBatteryOpen ? 'Recolher Baterias' : 'Descer Baterias'}</span>
                      </button>
                    </div>

                    <button
                      onClick={resetCamera}
                      title="Resetar Câmera"
                      className="p-1.5 rounded-lg bg-black/80 hover:bg-black text-[#f3e5ab] border border-[#d4af37]/30 transition-all"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* 2. REAL INTERNAL PHOTOS */}
              {activeTab === 'interno' && (
                <img 
                  src="/assets/central-outfire-interno.jpg" 
                  alt="Placa e Relés Internos da Central Outfire" 
                  className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"
                />
              )}

              {/* 3. REAL KITCHEN INSTALLATION */}
              {activeTab === 'instalado' && (
                <img 
                  src="/assets/central-outfire-instalada.jpg" 
                  alt="Central Outfire Instalada em Cozinha Real" 
                  className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"
                />
              )}

              {/* Tag indicator */}
              <div className="absolute top-4 left-4 bg-[#08090b]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#f3e5ab] pointer-events-none">
                {activeTab === '3d' && 'Gabinete 3D Interativo (Gire 360° com o mouse/toque)'}
                {activeTab === 'interno' && 'Eletrônica Robusta, Relés de Potência & Bornes'}
                {activeTab === 'instalado' && 'Instalação Real em Cozinha Profissional'}
              </div>
            </div>

            {/* Photo & 3D Selector Pills */}
            <div className="flex items-center gap-2 mt-4 bg-[#12141a] p-1.5 rounded-2xl border border-[#d4af37]/25 shadow-md">
              <button
                onClick={() => setActiveTab('3d')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === '3d'
                    ? 'bg-[#d4af37] text-black shadow-glow-gold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Gabinete 3D Interativo</span>
              </button>
              <button
                onClick={() => setActiveTab('interno')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'interno'
                    ? 'bg-[#d4af37] text-black shadow-glow-gold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Eletrônica Interna
              </button>
              <button
                onClick={() => setActiveTab('instalado')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'instalado'
                    ? 'bg-[#d4af37] text-black shadow-glow-gold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Instalação Real
              </button>
            </div>
          </div>

          {/* Key Specs Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white font-sans">
                    Painel Central VTS 32S3
                  </h3>
                  <span className="text-xs text-[#e5c05d] font-mono font-bold">
                    AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <Shield className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Dupla Ação de Supressão:</strong> Saponificante na cocção + CO2 no duto e fechamento automático dos dampers.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Corte de Gás e Exaustor:</strong> Intertravamento elétrico instantâneo ao sinal de disparo.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Detecção Térmica Regulável:</strong> Calibração em 145°C na coifa e 300°C no duto.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Bateria de Backup Interna:</strong> Funcionamento ininterrupto mesmo com queda de rede.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Menu protegido por senha:</strong> Previne alterações indevidas por pessoas não autorizadas.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Opção de Anular Disparo:</strong> Sistema inteligente com botão de cancelamento na IHM para evitar disparos acidentais ou alarmes falsos.
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href="#calculadora"
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-center text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2"
                >
                  <span>Dimensionar Cozinha</span>
                  <ArrowRight className="w-4 h-4 fill-black" />
                </a>

                {/* Baixar Manual Técnico Oficial 2026 */}
                <a
                  href="/assets/Manual_Tecnico_OutFire_2026.pdf"
                  download="Manual_Tecnico_OutFire_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-[#14171e] hover:bg-[#1f2430] text-[#f3e5ab] font-bold text-center text-sm rounded-xl border border-[#d4af37]/30 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#d4af37]" />
                  <span>Baixar Manual Técnico</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-sans group-hover:text-[#f3e5ab] transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
