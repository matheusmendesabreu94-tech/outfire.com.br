import React, { useState, useMemo } from 'react';
import { 
  Calculator, Plus, Trash2, Shield, Droplets, Wind, 
  Flame, CheckCircle, ArrowRight, Share2, Phone, Sparkles, 
  HelpCircle, Settings, Layers, Box, Cpu 
} from 'lucide-react';
import { Appliance, CalculationResult, HoodConfig, KitchenProjectConfig } from '../types';

interface KitchenCalculatorProps {
  onAddToCart: (customKit: any) => void;
}

export const KitchenCalculator: React.FC<KitchenCalculatorProps> = ({ onAddToCart }) => {
  // Number of independent hoods (1 to 3)
  const [hoodCount, setHoodCount] = useState<number>(1);
  
  // Duct total length in meters
  const [ductLength, setDuctLength] = useState<number>(9);
  const [includeDamperNozzle, setIncludeDamperNozzle] = useState<boolean>(true);

  // Hoods state
  const [hoods, setHoods] = useState<HoodConfig[]>([
    {
      id: 1,
      name: 'Coifa Principal (Cocção Pesada)',
      lengthMeters: 2.5,
      appliances: [
        { id: '1', name: 'Fritadeira Industrial (2 cubas)', type: 'fritadeira', icon: '🍟', widthMeters: 0.6 },
        { id: '2', name: 'Fogão Industrial 6 Bocas', type: 'fogao', icon: '🍳', widthMeters: 1.1 },
        { id: '3', name: 'Chapa de Lanche / Bifeira', type: 'chapa', icon: '🥩', widthMeters: 0.8 }
      ]
    }
  ]);

  // Adjust hood count
  const handleSetHoodCount = (count: number) => {
    setHoodCount(count);
    if (count > hoods.length) {
      const newHoods = [...hoods];
      for (let i = hoods.length + 1; i <= count; i++) {
        newHoods.push({
          id: i,
          name: `Coifa Setor ${i}`,
          lengthMeters: 2.0,
          appliances: [
            { id: `${i}-1`, name: 'Fogão 4 Bocas', type: 'fogao', icon: '🍳', widthMeters: 0.9 },
            { id: `${i}-2`, name: 'Chapa Elétrica/Gás', type: 'chapa', icon: '🥩', widthMeters: 0.8 }
          ]
        });
      }
      setHoods(newHoods);
    } else if (count < hoods.length) {
      setHoods(hoods.slice(0, count));
    }
  };

  // Update hood length
  const updateHoodLength = (hoodIndex: number, newLength: number) => {
    const updated = [...hoods];
    updated[hoodIndex].lengthMeters = Math.max(1.0, Math.min(8.0, Number(newLength.toFixed(1))));
    setHoods(updated);
  };

  // Add appliance to hood
  const addAppliance = (hoodIndex: number, type: 'fritadeira' | 'fogao' | 'chapa' | 'charbroiler') => {
    const names = {
      fritadeira: 'Fritadeira Industrial',
      fogao: 'Fogão Industrial',
      chapa: 'Chapa Profissional',
      charbroiler: 'Charbroiler / Grelha'
    };
    const icons = {
      fritadeira: '🍟',
      fogao: '🍳',
      chapa: '🥩',
      charbroiler: '🔥'
    };
    const widths = {
      fritadeira: 0.5,
      fogao: 0.9,
      chapa: 0.8,
      charbroiler: 0.7
    };

    const updated = [...hoods];
    updated[hoodIndex].appliances.push({
      id: Math.random().toString(36).substring(7),
      name: names[type],
      type,
      icon: icons[type],
      widthMeters: widths[type]
    });
    setHoods(updated);
  };

  // Remove appliance
  const removeAppliance = (hoodIndex: number, appIndex: number) => {
    const updated = [...hoods];
    updated[hoodIndex].appliances.splice(appIndex, 1);
    setHoods(updated);
  };

  // --- AUTOMATED CALCULATION LOGIC BASED ON USER'S EXACT FORMULAS ---
  const result: CalculationResult = useMemo(() => {
    let totalApplianceNozzles = 0;
    let totalPlenumNozzles = 0;
    let totalDamperNozzles = 0;
    let totalHoodSensors = 0;

    hoods.forEach((h) => {
      // 1 bico de saponificante por equipamento
      totalApplianceNozzles += h.appliances.length;

      // Sempre 2 bicos de pleno por coifa
      totalPlenumNozzles += 2;

      // 1 bico no duto/damper se selecionado
      if (includeDamperNozzle) {
        totalDamperNozzles += 1;
      }

      // 1 sensor regulável (145°C) a cada 0.8m a 1m de coifa
      const sensorsInHood = Math.max(1, Math.round(h.lengthMeters / 0.9));
      totalHoodSensors += sensorsInHood;
    });

    const totalSaponificanteNozzles = totalApplianceNozzles + totalPlenumNozzles + totalDamperNozzles;
    
    // Cada bico calcula 2 litros de saponificante
    const rawSaponificanteLiters = totalSaponificanteNozzles * 2;
    // Mínimo de 9 Litros
    const saponificanteLiters = Math.max(9, rawSaponificanteLiters);

    // Dimensionamento do cilindro saponificante
    let recommendedSaponificanteCylinderLiters = 9;
    if (saponificanteLiters > 9 && saponificanteLiters <= 16) {
      recommendedSaponificanteCylinderLiters = 16;
    } else if (saponificanteLiters > 16 && saponificanteLiters <= 25) {
      recommendedSaponificanteCylinderLiters = 25;
    } else if (saponificanteLiters > 25) {
      recommendedSaponificanteCylinderLiters = Math.ceil(saponificanteLiters / 9) * 9;
    }

    // Duto de CO2: 1 bico de CO2 + 1 sensor (300°C) a cada 3 metros
    const co2NozzlesCount = Math.max(1, Math.ceil(ductLength / 3));
    const ductSensorsCount = co2NozzlesCount; // 1 sensor 300°C a cada 3m
    
    // Mínimo de 10kg de CO2, escala com comprimento do duto
    const co2Kg = Math.max(10, Math.ceil((ductLength / 3) * 5));
    const recommendedCo2CylinderKg = co2Kg <= 10 ? 10 : co2Kg <= 25 ? 25 : 45;

    // Central Outfire Model
    const centralModel = `Central Outfire VTS 32S3 (${hoodCount} Coifa${hoodCount > 1 ? 's' : ''} Independentes)`;

    // Estimativa de preço para referência comercial
    const baseCentral = hoodCount === 1 ? 8900 : hoodCount === 2 ? 14500 : 19800;
    const nozzlesCost = totalSaponificanteNozzles * 185 + co2NozzlesCount * 210;
    const sensorsCost = totalHoodSensors * 295 + ductSensorsCount * 320;
    const estimatedPriceBRL = baseCentral + nozzlesCost + sensorsCost + 1200; // includes gas valve & dampers

    return {
      applianceNozzlesCount: totalApplianceNozzles,
      plenumNozzlesCount: totalPlenumNozzles,
      damperNozzlesCount: totalDamperNozzles,
      totalSaponificanteNozzles,
      saponificanteLiters,
      recommendedSaponificanteCylinderLiters,
      hoodSensorsCount: totalHoodSensors,
      co2NozzlesCount,
      ductSensorsCount,
      co2Kg,
      recommendedCo2CylinderKg,
      centralModel,
      hoodsCount: hoodCount,
      dampersCount: hoodCount,
      gasValvesCount: 1,
      estimatedPriceBRL
    };
  }, [hoods, ductLength, includeDamperNozzle, hoodCount]);

  // Generate WhatsApp message
  const handleWhatsAppQuote = () => {
    let msg = `🔥 *ORÇAMENTO TÉCNICO - SISTEMA OUTFIRE VTS 32S3*\n\n`;
    msg += `Olá, equipe de Engenharia da Outfire! Realizei o dimensionamento da minha cozinha no site outfire.com.br e gostaria de uma proposta formal:\n\n`;
    msg += `🏢 *Configuração da Cozinha:*\n`;
    msg += `• Quantidade de Coifas: ${hoodCount} independente(s)\n`;
    msg += `• Comprimento do Duto de Exaustão: ${ductLength} metros\n\n`;

    hoods.forEach((h, idx) => {
      msg += `📍 *Coifa ${idx + 1} (${h.lengthMeters}m):*\n`;
      msg += `  Equipamentos sob a coifa: ${h.appliances.map(a => a.name).join(', ') || 'Nenhum'}\n`;
    });

    msg += `\n⚙️ *Memória de Cálculo de Supressão:*\n`;
    msg += `• Bicos de Saponificante (Classe K): ${result.totalSaponificanteNozzles} bicos (${result.applianceNozzlesCount} equipamentos + ${result.plenumNozzlesCount} pleno + ${result.damperNozzlesCount} colarinho)\n`;
    msg += `• Volume de Saponificante: ${result.saponificanteLiters} Litros (Cilindro recomendado: ${result.recommendedSaponificanteCylinderLiters}L)\n`;
    msg += `• Sensores Reguláveis na Coifa (145°C): ${result.hoodSensorsCount} unidades\n`;
    msg += `• Bicos de CO2 no Duto: ${result.co2NozzlesCount} unidades (1 a cada 3m)\n`;
    msg += `• Sensores Reguláveis no Duto (300°C): ${result.ductSensorsCount} unidades (1 a cada 3m)\n`;
    msg += `• Volume de CO2 no Duto: ${result.recommendedCo2CylinderKg} Kg (mínimo de 10kg)\n`;
    msg += `• Intertravamento: Válvula de corte de gás + Fechamento de Dampers e Exaustor\n`;
    msg += `• Modelo da Central: ${result.centralModel}\n\n`;
    msg += `Gostaria de agendar uma consulta técnica ou receber a proposta com laudo ART para AVCB. Aguardo retorno!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5515996576807?text=${encoded}`, '_blank');
  };

  // Add custom configured kit to store cart
  const handleAddCustomKitToCart = () => {
    const customKitProduct = {
      id: `custom-kit-${Date.now()}`,
      sku: `OUT-CUSTOM-${hoodCount}C`,
      name: `Kit Personalizado Outfire VTS (${hoodCount} Coifa${hoodCount > 1 ? 's' : ''} + Duto ${ductLength}m)`,
      category: 'kit' as const,
      priceBRL: result.estimatedPriceBRL,
      description: `Sistema customizado: ${result.totalSaponificanteNozzles} bicos saponificante (${result.recommendedSaponificanteCylinderLiters}L), ${result.co2NozzlesCount} bicos CO2 (${result.recommendedCo2CylinderKg}kg), ${result.hoodSensorsCount} sensores 145°C e ${result.ductSensorsCount} sensores 300°C.`,
      image: '/assets/central-outfire-fundo-removido.png',
      specs: [
        `${result.centralModel}`,
        `Cilindro Saponificante Classe K: ${result.recommendedSaponificanteCylinderLiters} Litros`,
        `Cilindro CO2 pressurizado: ${result.recommendedCo2CylinderKg} Kg`,
        `Bicos Saponificante em Inox: ${result.totalSaponificanteNozzles} unidades`,
        `Bicos CO2 em Duto: ${result.co2NozzlesCount} unidades`,
        `Sensores Reguláveis: ${result.hoodSensorsCount} (145°C) + ${result.ductSensorsCount} (300°C)`,
        `Válvula de corte rápido de gás com rearme manual`,
        `Dampers corta-fogo com atuador elétrico`
      ],
      inStock: true
    };

    onAddToCart(customKitProduct);
  };

  return (
    <section id="calculadora" className="py-24 bg-[#0a0b0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#d4af37]" />
            Engenharia sob Medida
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Calculadora de Supressão & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]">
              Diagrama Automatizado da sua Cozinha
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            Informe as medidas da sua coifa, duto e equipamentos. O sistema calcula a quantidade exata 
            de bicos de saponificante, CO2, sensores e gera o diagrama técnico em tempo real.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Step 1: Number of Hoods */}
            <div className="glass-panel-gold p-6 rounded-2xl border border-[#d4af37]/30">
              <label className="text-sm font-bold text-white block mb-3 flex items-center justify-between">
                <span>1. Quantidade de Coifas Independentes:</span>
                <span className="text-xs font-mono text-[#e5c05d]">Até 3 simultâneas</span>
              </label>

              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleSetHoodCount(num)}
                    className={`py-3 px-4 rounded-xl text-sm font-bold flex flex-col items-center gap-1 transition-all ${
                      hoodCount === num
                        ? 'bg-[#d4af37] text-black shadow-glow-gold border border-[#e5c05d]'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <span>{num} {num === 1 ? 'Coifa' : 'Coifas'}</span>
                    <span className="text-[10px] opacity-75 font-normal">
                      {num === 1 ? 'Individual' : 'Setorizada'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Duct Length */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <Wind className="w-4 h-4 text-cyan-400" />
                  <span>2. Comprimento do Duto de Exaustão:</span>
                </label>
                <span className="font-mono text-base font-black text-cyan-400">
                  {ductLength} metros
                </span>
              </div>

              <input 
                type="range"
                min="3"
                max="30"
                step="1"
                value={ductLength}
                onChange={(e) => setDuctLength(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              <div className="flex justify-between text-[11px] text-gray-400 mt-2 font-mono">
                <span>3 m (Curto)</span>
                <span>15 m (Médio)</span>
                <span>30 m (Longo)</span>
              </div>

              <div className="mt-4 p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl text-xs text-cyan-200 flex items-center justify-between">
                <span>Regra técnica: 1 bico de CO2 + 1 sensor (300°C) a cada 3m</span>
                <span className="font-mono font-bold text-cyan-400">
                  {result.co2NozzlesCount} bicos CO2
                </span>
              </div>
            </div>

            {/* Step 3: Configure Each Hood & Cooking Appliances */}
            {hoods.map((hood, hIndex) => (
              <div key={hood.id} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                
                {/* Hood Header & Length Slider */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold flex items-center justify-center">
                      {hIndex + 1}
                    </span>
                    <h4 className="font-bold text-white text-sm">
                      {hood.name}
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {hood.lengthMeters} m
                  </span>
                </div>

                {/* Length control */}
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                    <span>Comprimento da Coifa:</span>
                    <span>{hood.lengthMeters} metros lineares</span>
                  </div>
                  <input 
                    type="range"
                    min="1.0"
                    max="6.0"
                    step="0.5"
                    value={hood.lengthMeters}
                    onChange={(e) => updateHoodLength(hIndex, Number(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                {/* Appliances List */}
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-2">
                    Equipamentos sob a Coifa ({hood.appliances.length} protegidos):
                  </label>

                  <div className="space-y-2 mb-3">
                    {hood.appliances.map((app, aIndex) => (
                      <div 
                        key={app.id}
                        className="flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/5 text-xs"
                      >
                        <div className="flex items-center gap-2 text-gray-200">
                          <span className="text-base">{app.icon}</span>
                          <span className="font-medium">{app.name}</span>
                          <span className="text-[10px] bg-[#1a170e] text-[#e5c05d] px-2 py-0.5 rounded border border-[#d4af37]/40 font-mono font-bold">
                            1 bico Saponificante
                          </span>
                        </div>

                        <button
                          onClick={() => removeAppliance(hIndex, aIndex)}
                          className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                          title="Remover equipamento"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add Appliance Quick Buttons */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    <button
                      onClick={() => addAppliance(hIndex, 'fritadeira')}
                      className="p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all"
                    >
                      <Plus className="w-3 h-3 text-[#d4af37]" />
                      <span>+ Fritadeira</span>
                    </button>

                    <button
                      onClick={() => addAppliance(hIndex, 'fogao')}
                      className="p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all"
                    >
                      <Plus className="w-3 h-3 text-[#d4af37]" />
                      <span>+ Fogão</span>
                    </button>

                    <button
                      onClick={() => addAppliance(hIndex, 'chapa')}
                      className="p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all"
                    >
                      <Plus className="w-3 h-3 text-[#d4af37]" />
                      <span>+ Chapa</span>
                    </button>

                    <button
                      onClick={() => addAppliance(hIndex, 'charbroiler')}
                      className="p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all"
                    >
                      <Plus className="w-3 h-3 text-[#d4af37]" />
                      <span>+ Grelha</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}

          </div>

          {/* Right Column: AUTOMATED TECHNICAL DIAGRAM & BOM SUMMARY */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The Automated Kitchen Diagram (Visual Schematic) */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <h3 className="font-bold text-white text-base font-sans">
                    Diagrama Esquemático da sua Cozinha
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-1 rounded-lg border border-white/5">
                  RENDERIZADO EM TEMPO REAL
                </span>
              </div>

              {/* Dynamic SVG Technical Diagram */}
              <div className="relative w-full aspect-[16/9] bg-[#0d0f14] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
                
                {/* Technical Grid Background */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #4a5568 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* SVG Blueprint */}
                <svg className="w-full h-full" viewBox="0 0 600 340">
                  <defs>
                    <linearGradient id="ductGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4a5568" />
                      <stop offset="50%" stopColor="#718096" />
                      <stop offset="100%" stopColor="#4a5568" />
                    </linearGradient>
                    <linearGradient id="hoodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2d3748" />
                      <stop offset="100%" stopColor="#1a202c" />
                    </linearGradient>
                  </defs>

                  {/* DUCTWORK (Top Section) */}
                  {/* Vertical duct rising from hood */}
                  <rect x="250" y="40" width="100" height="70" fill="url(#ductGrad)" stroke="#a0aec0" strokeWidth="1.5" />
                  
                  {/* Horizontal duct extension */}
                  <rect x="250" y="30" width="300" height="40" fill="url(#ductGrad)" stroke="#a0aec0" strokeWidth="1.5" />
                  
                  {/* Damper box on duct */}
                  <rect x="360" y="24" width="45" height="52" fill="#9b2c2c" stroke="#feb2b2" strokeWidth="1.5" rx="3" />
                  <text x="382" y="54" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">DAMPER</text>

                  {/* CO2 Nozzles inside the duct (spaced every ~3m) */}
                  {Array.from({ length: result.co2NozzlesCount }).map((_, idx) => {
                    const nx = 270 + idx * (250 / Math.max(1, result.co2NozzlesCount));
                    return (
                      <g key={`co2-${idx}`}>
                        {/* CO2 Nozzle icon (Red circle) */}
                        <circle cx={nx} cy="50" r="6" fill="#e53e3e" stroke="#ffffff" strokeWidth="1.5" />
                        <text x={nx} y="68" fill="#fc8181" fontSize="8" fontWeight="bold" textAnchor="middle">CO2</text>
                        {/* 300C Sensor icon (Purple diamond) */}
                        <rect x={nx + 12} y="44" width="10" height="10" fill="#805ad5" stroke="#ffffff" strokeWidth="1" transform={`rotate(45, ${nx + 17}, 49)`} />
                      </g>
                    );
                  })}

                  {/* HOOD CANOPY (Middle Section) */}
                  <polygon 
                    points="60,150 120,110 480,110 540,150" 
                    fill="url(#hoodGrad)" 
                    stroke="#cbd5e0" 
                    strokeWidth="2" 
                  />
                  <rect x="60" y="150" width="480" height="25" fill="#2d3748" stroke="#cbd5e0" strokeWidth="1.5" />
                  <text x="300" y="167" fill="#cbd5e0" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="2">
                    COIFA INOX {hoods[0]?.lengthMeters}m ({hoodCount} ZONA{hoodCount > 1 ? 'S' : ''})
                  </text>

                  {/* 2 Plenum Nozzles (inside hood) */}
                  <circle cx="180" cy="130" r="6" fill="#d4af37" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="180" y="120" fill="#f6e05e" fontSize="8" fontWeight="bold" textAnchor="middle">PLENO 1</text>
                  
                  <circle cx="420" cy="130" r="6" fill="#d4af37" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="420" y="120" fill="#f6e05e" fontSize="8" fontWeight="bold" textAnchor="middle">PLENO 2</text>

                  {/* Hood Thermal Sensors (145°C) spaced along the hood */}
                  {Array.from({ length: result.hoodSensorsCount }).map((_, idx) => {
                    const sx = 100 + (idx + 1) * (400 / (result.hoodSensorsCount + 1));
                    return (
                      <g key={`sensor-${idx}`}>
                        <circle cx={sx} cy="142" r="5" fill="#dd6b20" stroke="#ffffff" strokeWidth="1.2" />
                        <text x={sx} y="158" fill="#fbd38d" fontSize="7" fontWeight="bold" textAnchor="middle">145°C</text>
                      </g>
                    );
                  })}

                  {/* COOKING LINE & APPLIANCES (Bottom Section) */}
                  <rect x="60" y="240" width="480" height="70" fill="#1a202c" stroke="#4a5568" strokeWidth="1.5" />
                  
                  {/* Distributed Appliances */}
                  {hoods[0]?.appliances.map((app, idx) => {
                    const totalApps = hoods[0].appliances.length;
                    const slotWidth = 440 / Math.max(1, totalApps);
                    const ax = 80 + idx * slotWidth;
                    const appW = slotWidth - 10;
                    
                    return (
                      <g key={app.id}>
                        {/* Equipment Box */}
                        <rect x={ax} y="220" width={appW} height="80" fill="#2d3748" stroke="#718096" strokeWidth="1.2" rx="4" />
                        <text x={ax + appW / 2} y="255" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                          {app.name.split(' ')[0]}
                        </text>
                        <text x={ax + appW / 2} y="275" fill="#a0aec0" fontSize="8" textAnchor="middle">
                          {app.type.toUpperCase()}
                        </text>

                        {/* Saponificante Nozzle aimed down at this equipment */}
                        <line x1={ax + appW / 2} y1="175" x2={ax + appW / 2} y2="200" stroke="#d4af37" strokeWidth="2" />
                        <polygon 
                          points={`${ax + appW / 2 - 5},200 ${ax + appW / 2 + 5},200 ${ax + appW / 2},210`} 
                          fill="#d4af37" 
                        />
                        <text x={ax + appW / 2} y="195" fill="#ecc94b" fontSize="7" fontWeight="bold" textAnchor="end">BICOK</text>
                      </g>
                    );
                  })}

                  {/* CENTRAL OUTFIRE VTS 32S3 (Mounted to the right wall) */}
                  <rect x="535" y="160" width="55" height="85" fill="#171923" stroke="#e53e3e" strokeWidth="2" rx="5" />
                  <rect x="542" y="170" width="40" height="30" fill="#3182ce" rx="2" />
                  <text x="562" y="188" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">VTS 32S3</text>
                  <circle cx="562" cy="225" r="7" fill="#e53e3e" />
                  <text x="562" y="240" fill="#e2e8f0" fontSize="6" fontWeight="bold" textAnchor="middle">OUTFIRE</text>

                  {/* Gas cutoff pipe at bottom */}
                  <line x1="60" y1="310" x2="540" y2="310" stroke="#ecc94b" strokeWidth="3" />
                  <rect x="180" y="303" width="20" height="14" fill="#e53e3e" stroke="#ffffff" strokeWidth="1" />
                  <text x="190" y="328" fill="#feb2b2" fontSize="7" fontWeight="bold" textAnchor="middle">VÁLVULA GÁS</text>
                </svg>

                {/* Diagram Legend */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2 border-t border-white/10 text-[10px] text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
                    <span>Bico Saponificante Classe K</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span>Bico CO2 Duto</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span>Sensor 145°C Coifa</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    <span>Sensor 300°C Duto</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-red-700" />
                    <span>Damper Corta-Fogo</span>
                  </div>
                </div>

              </div>

              {/* Bill of Materials (BOM) Table */}
              <div className="mt-6 space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Resumo do Dimensionamento Técnico (BOM)</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-gray-400 block">Bicos Saponificante</span>
                    <span className="text-lg font-black text-amber-400 font-mono">
                      {result.totalSaponificanteNozzles} un
                    </span>
                    <span className="text-[10px] text-gray-400 block mt-0.5">
                      ({result.saponificanteLiters}L calculados)
                    </span>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-gray-400 block">Cilindro Saponificante</span>
                    <span className="text-lg font-black text-amber-400 font-mono">
                      {result.recommendedSaponificanteCylinderLiters} L
                    </span>
                    <span className="text-[10px] text-gray-400 block mt-0.5">
                      Mínimo de 9L
                    </span>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-gray-400 block">Bicos de CO2 (Duto)</span>
                    <span className="text-lg font-black text-cyan-400 font-mono">
                      {result.co2NozzlesCount} un
                    </span>
                    <span className="text-[10px] text-gray-400 block mt-0.5">
                      (1 a cada 3m de duto)
                    </span>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-gray-400 block">Cilindro de CO2</span>
                    <span className="text-lg font-black text-cyan-400 font-mono">
                      {result.recommendedCo2CylinderKg} Kg
                    </span>
                    <span className="text-[10px] text-gray-400 block mt-0.5">
                      Mínimo de 10kg
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-gray-400 block">Sensores Coifa (145°C)</span>
                    <span className="text-base font-bold text-white font-mono">
                      {result.hoodSensorsCount} un (1/metro)
                    </span>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-gray-400 block">Sensores Duto (300°C)</span>
                    <span className="text-base font-bold text-white font-mono">
                      {result.ductSensorsCount} un (1 a cada 3m)
                    </span>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-gray-400 block">Intertravamento Total</span>
                    <span className="text-xs font-bold text-emerald-400 block">
                      Gás + Exaustão + Damper
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: WhatsApp Quote & Add to Cart */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppQuote}
                  className="flex-1 py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Enviar Orçamento para WhatsApp</span>
                </button>

                <button
                  onClick={handleAddCustomKitToCart}
                  className="py-4 px-6 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black rounded-2xl shadow-glow-gold transition-all flex items-center justify-center gap-2"
                >
                  <Box className="w-5 h-5 fill-black" />
                  <span>Comprar Kit na Loja</span>
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 mt-3">
                *O projeto inclui memória de cálculo e documentação pronta para laudo ART e vistoria do Corpo de Bombeiros.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
