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
                <svg className="w-full h-auto" viewBox="0 0 940 430">
                  <defs>
                    {/* Polished Chrome Gradient (Cilindro Saponificante Inox) */}
                    <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#475569" />
                      <stop offset="25%" stopColor="#cbd5e1" />
                      <stop offset="50%" stopColor="#ffffff" />
                      <stop offset="75%" stopColor="#e2e8f0" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>

                    {/* Industrial Red Gradient (Cilindro CO2 Alta Pressão) */}
                    <linearGradient id="co2Grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7f1d1d" />
                      <stop offset="25%" stopColor="#dc2626" />
                      <stop offset="50%" stopColor="#ef4444" />
                      <stop offset="80%" stopColor="#b91c1c" />
                      <stop offset="100%" stopColor="#7f1d1d" />
                    </linearGradient>

                    {/* Ductwork Galvanized / Stainless Steel */}
                    <linearGradient id="ductGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#334155" />
                      <stop offset="50%" stopColor="#64748b" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>

                    {/* Hood Canopy Stainless Gradient */}
                    <linearGradient id="hoodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#334155" />
                      <stop offset="50%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>

                    {/* Damper Red Heat-Shield Gradient */}
                    <linearGradient id="damperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#991b1b" />
                      <stop offset="50%" stopColor="#dc2626" />
                      <stop offset="100%" stopColor="#7f1d1d" />
                    </linearGradient>

                    {/* Central Outfire Matte Black / Gold Steel */}
                    <linearGradient id="centralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#181a20" />
                      <stop offset="50%" stopColor="#111317" />
                      <stop offset="100%" stopColor="#0a0c0f" />
                    </linearGradient>

                    {/* Outfire Gold Accent Gradient */}
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#b45309" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>

                  {/* 1. TOP HORIZONTAL EXHAUST COLLECTOR DUCT */}
                  {/* Main exhaust collector running from above the hoods to exhaust fan */}
                  <rect x="140" y="24" width="600" height="34" fill="url(#ductGrad)" stroke="#94a3b8" strokeWidth="1.5" />
                  
                  {/* Air flow indicator arrows */}
                  <g fill="#94a3b8" opacity="0.6">
                    <text x="240" y="44" fontSize="10" fontWeight="bold" letterSpacing="3">» » »</text>
                    <text x="440" y="44" fontSize="10" fontWeight="bold" letterSpacing="3">» » FLUXO DE EXAUSTÃO » »</text>
                    <text x="640" y="44" fontSize="10" fontWeight="bold" letterSpacing="3">» » »</text>
                  </g>

                  {/* CO2 Nozzles inside the horizontal duct (spaced along the duct) */}
                  {Array.from({ length: result.co2NozzlesCount }).map((_, idx) => {
                    const nx = 180 + idx * (500 / Math.max(1, result.co2NozzlesCount));
                    return (
                      <g key={`co2-duct-${idx}`}>
                        {/* Red CO2 pipe branch */}
                        <line x1={nx} y1="24" x2={nx} y2="38" stroke="#ef4444" strokeWidth="2" />
                        {/* CO2 Nozzle icon */}
                        <circle cx={nx} cy="38" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.2" />
                        {/* Spray cone */}
                        <polygon points={`${nx-4},43 ${nx+4},43 ${nx},49`} fill="#ef4444" opacity="0.8" />
                        <text x={nx} y="19" fill="#fca5a5" fontSize="7" fontWeight="bold" textAnchor="middle">CO2</text>
                        {/* 300°C Thermal Sensor (Purple diamond) */}
                        <rect x={nx + 14} y="33" width="9" height="9" fill="#a855f7" stroke="#ffffff" strokeWidth="1" transform={`rotate(45, ${nx + 18.5}, 37.5)`} />
                        <text x={nx + 18.5} y="19" fill="#d8b4fe" fontSize="6.5" fontWeight="bold" textAnchor="middle">300°C</text>
                      </g>
                    );
                  })}

                  {/* Exhaust Fan / Motor Housing at right end of duct */}
                  <rect x="735" y="16" width="22" height="50" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" rx="3" />
                  <circle cx="746" cy="41" r="9" fill="#0f172a" stroke="#94a3b8" strokeWidth="1" />
                  <path d="M 746 34 L 746 48 M 739 41 L 753 41" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="746" y="11" fill="#94a3b8" fontSize="7" fontWeight="bold" textAnchor="middle">EXAUSTOR</text>

                  {/* 2. CILINDRO DE CO2 VERMELHO (AO LADO DO FINAL DO DUTO) */}
                  <g id="cilindro-co2">
                    {/* High-pressure discharge line to duct */}
                    <path d="M 780 40 L 780 20 L 740 20 L 740 24" fill="none" stroke="#ef4444" strokeWidth="2.5" />
                    
                    {/* Solenoid electric trigger */}
                    <rect x="774" y="30" width="12" height="12" fill="#1e293b" stroke="#ef4444" strokeWidth="1" />
                    
                    {/* Brass high-pressure valve head */}
                    <rect x="776" y="42" width="8" height="10" fill="#d97706" stroke="#f59e0b" strokeWidth="0.8" />
                    <circle cx="780" cy="40" r="4" fill="#f59e0b" />
                    
                    {/* Cylinder body (Red Industrial Alta Pressão) */}
                    {/* Neck dome */}
                    <path d="M 768 62 C 768 48, 792 48, 792 62 Z" fill="url(#co2Grad)" stroke="#fca5a5" strokeWidth="1" />
                    {/* Main cylinder */}
                    <rect x="768" y="60" width="24" height="85" rx="3" fill="url(#co2Grad)" stroke="#fca5a5" strokeWidth="1.2" />
                    {/* Bottom base ring */}
                    <rect x="767" y="145" width="26" height="5" rx="2" fill="#1e293b" stroke="#7f1d1d" strokeWidth="1" />
                    
                    {/* Cylinder Label */}
                    <rect x="770" y="80" width="20" height="36" fill="#1e293b" rx="2" opacity="0.9" />
                    <text x="780" y="92" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">CO2</text>
                    <text x="780" y="102" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">{result.recommendedCo2CylinderKg}kg</text>
                    <text x="780" y="111" fill="#94a3b8" fontSize="4.5" textAnchor="middle">NBR 14518</text>
                    <text x="780" y="162" fill="#fca5a5" fontSize="7.5" fontWeight="bold" textAnchor="middle">CILINDRO CO2</text>
                    <text x="780" y="171" fill="#94a3b8" fontSize="6.5" textAnchor="middle">(DUTO / EXAUSTÃO)</text>
                  </g>

                  {/* 3. CILINDRO DE SAPONIFICANTE CROMADO (AO LADO DA COIFA) */}
                  <g id="cilindro-saponificante">
                    {/* Valve discharge line in yellow/inox rising and entering the hoods */}
                    <path d="M 46 160 L 46 122 L 95 122" fill="none" stroke="#d4af37" strokeWidth="3" />
                    
                    {/* Brass discharge valve & rapid actuator */}
                    <rect x="42" y="160" width="8" height="12" fill="#d97706" stroke="#f59e0b" strokeWidth="1" />
                    <circle cx="46" cy="158" r="4.5" fill="#f59e0b" />
                    
                    {/* Pressure Gauge (Manômetro Inox) */}
                    <circle cx="36" cy="166" r="6.5" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
                    <path d="M 33 166 A 3.5 3.5 0 0 1 39 166" fill="none" stroke="#22c55e" strokeWidth="1.5" />
                    <line x1="36" y1="166" x2="38" y2="163" stroke="#dc2626" strokeWidth="1" />
                    
                    {/* Chrome/Stainless Cylinder Body */}
                    {/* Top dome */}
                    <path d="M 28 184 C 28 168, 64 168, 64 184 Z" fill="url(#chromeGrad)" stroke="#cbd5e1" strokeWidth="1.2" />
                    {/* Main cylinder */}
                    <rect x="28" y="182" width="36" height="135" rx="3" fill="url(#chromeGrad)" stroke="#cbd5e1" strokeWidth="1.5" />
                    {/* Bottom stand ring */}
                    <rect x="26" y="317" width="40" height="7" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1" />

                    {/* Cylinder Front Label Badge */}
                    <rect x="31" y="215" width="30" height="52" fill="#0f172a" rx="3" stroke="#d4af37" strokeWidth="0.8" opacity="0.95" />
                    <text x="46" y="228" fill="#d4af37" fontSize="6" fontWeight="bold" textAnchor="middle">OUTFIRE</text>
                    <text x="46" y="238" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">CLASSE K</text>
                    <text x="46" y="250" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">{result.recommendedSaponificanteCylinderLiters}L</text>
                    <text x="46" y="260" fill="#94a3b8" fontSize="5" textAnchor="middle">INOX 304</text>
                    
                    <text x="46" y="337" fill="#fef08a" fontSize="7.5" fontWeight="bold" textAnchor="middle">SAPONIFICANTE</text>
                    <text x="46" y="347" fill="#cbd5e1" fontSize="6.5" textAnchor="middle">(CROMADO / INOX)</text>
                  </g>

                  {/* 4. HOODS & VERTICAL DUCTS WITH DAMPERS RIGHT ABOVE THE HOOD (1, 2 OU 3 COIFAS) */}
                  {hoods.slice(0, hoodCount).map((h, hIdx) => {
                    // Compute responsive layout for 1, 2 or 3 hoods
                    const totalH = hoodCount;
                    const availW = 635;
                    const hGap = totalH === 1 ? 0 : totalH === 2 ? 30 : 18;
                    const hW = (availW - (totalH - 1) * hGap) / totalH;
                    const hX = 95 + hIdx * (hW + hGap);
                    
                    // Vertical duct collar centered on this hood
                    const cW = totalH === 1 ? 84 : totalH === 2 ? 65 : 52;
                    const cX = hX + (hW - cW) / 2;
                    
                    // Damper position: RIGHT ABOVE THE HOOD (colarinho de saída da coifa)
                    const dW = cW + 16;
                    const dX = cX - 8;
                    const dY = 66; // between horizontal duct (y=58) and hood canopy (y=118)
                    const dH = 38;

                    // Appliances under this hood
                    const appList = h.appliances.length > 0 
                      ? h.appliances 
                      : [{ id: `app-${hIdx}`, name: 'Fogão/Cocção', type: 'fogao', icon: '🍳', widthMeters: 0.9 }];

                    return (
                      <g key={`hood-block-${h.id || hIdx}`}>
                        {/* A. Vertical Duct from Hood to Collector */}
                        <rect x={cX} y="58" width={cW} height="60" fill="url(#ductGrad)" stroke="#94a3b8" strokeWidth="1.5" />
                        
                        {/* B. DAMPER CORTA-FOGO (BEM ACIMA DA COIFA - 1ª PARTE DO DUTO) */}
                        <g id={`damper-${hIdx}`}>
                          {/* Top & Bottom Mounting Flanges */}
                          <rect x={dX - 2} y={dY} width={dW + 4} height="4" fill="#475569" stroke="#94a3b8" strokeWidth="0.8" />
                          <rect x={dX - 2} y={dY + dH - 4} width={dW + 4} height="4" fill="#475569" stroke="#94a3b8" strokeWidth="0.8" />
                          
                          {/* Damper Main Body (Fire-Red) */}
                          <rect x={dX} y={dY + 3} width={dW} height={dH - 6} fill="url(#damperGrad)" stroke="#fecaca" strokeWidth="1.2" rx="3" />
                          
                          {/* Thermal/Motorized Actuator Box on the side */}
                          <rect x={dX + dW - 2} y={dY + 7} width="12" height="18" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1" rx="2" />
                          <circle cx={dX + dW + 4} cy={dY + 16} r="2.5" fill="#eab308" />
                          
                          {/* Damper Text */}
                          <text x={dX + dW / 2} y={dY + 18} fill="#ffffff" fontSize={totalH === 3 ? "7" : "8"} fontWeight="bold" textAnchor="middle">
                            DAMPER {totalH > 1 ? `#${hIdx + 1}` : ''}
                          </text>
                          <text x={dX + dW / 2} y={dY + 27} fill="#fca5a5" fontSize={totalH === 3 ? "5.5" : "6.5"} fontWeight="bold" textAnchor="middle">
                            CORTA-FOGO
                          </text>
                        </g>

                        {/* C. Saponificante yellow piping branching into hood plenum */}
                        <line x1={hIdx === 0 ? 95 : hX - hGap} y1="122" x2={hX + hW - 10} y2="122" stroke="#d4af37" strokeWidth="2.5" />

                        {/* D. Hood Canopy (Inox Trapezoid) */}
                        <polygon 
                          points={`${hX},158 ${hX + hW * 0.12},118 ${hX + hW * 0.88},118 ${hX + hW},158`} 
                          fill="url(#hoodGrad)" 
                          stroke="#cbd5e1" 
                          strokeWidth="1.8" 
                        />
                        <rect x={hX} y="158" width={hW} height="20" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.2" />
                        
                        {/* Hood Title */}
                        <text x={hX + hW / 2} y="172" fill="#f8fafc" fontSize={totalH === 3 ? "8" : "9.5"} fontWeight="bold" textAnchor="middle" letterSpacing="1">
                          COIFA {totalH > 1 ? `${hIdx + 1}` : 'INOX'} ({h.lengthMeters}m - SETOR {hIdx + 1})
                        </text>

                        {/* E. 2 Plenum Saponificante Nozzles (inside hood) */}
                        <g>
                          <circle cx={hX + hW * 0.25} cy="138" r="5" fill="#d4af37" stroke="#ffffff" strokeWidth="1.2" />
                          <text x={hX + hW * 0.25} y="132" fill="#fef08a" fontSize="6.5" fontWeight="bold" textAnchor="middle">PLENO 1</text>
                          
                          <circle cx={hX + hW * 0.75} cy="138" r="5" fill="#d4af37" stroke="#ffffff" strokeWidth="1.2" />
                          <text x={hX + hW * 0.75} y="132" fill="#fef08a" fontSize="6.5" fontWeight="bold" textAnchor="middle">PLENO 2</text>
                        </g>

                        {/* F. Hood Thermal Sensors (145°C) along the hood */}
                        {Array.from({ length: Math.max(1, Math.round(h.lengthMeters / 0.9)) }).map((_, sIdx, arr) => {
                          const sx = hX + 25 + sIdx * ((hW - 50) / Math.max(1, arr.length - 1 || 1));
                          return (
                            <g key={`sensor-h-${hIdx}-${sIdx}`}>
                              <circle cx={sx} cy="150" r="4" fill="#ea580c" stroke="#ffffff" strokeWidth="1" />
                              <text x={sx} y="164" fill="#fdba74" fontSize="6" fontWeight="bold" textAnchor="middle">145°</text>
                            </g>
                          );
                        })}

                        {/* G. Cooking Line & Equipment under this Hood */}
                        <rect x={hX} y="240" width={hW} height="85" fill="#0f172a" stroke="#334155" strokeWidth="1.2" rx="3" />
                        
                        {appList.map((app, aIdx) => {
                          const totalA = appList.length;
                          const slotW = (hW - 12) / totalA;
                          const ax = hX + 6 + aIdx * slotW;
                          const appBoxW = slotW - 6;

                          return (
                            <g key={app.id || `app-${hIdx}-${aIdx}`}>
                              {/* Equipment Box */}
                              <rect x={ax} y="245" width={appBoxW} height="75" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="3" />
                              
                              <text x={ax + appBoxW / 2} y="272" fill="#ffffff" fontSize={totalH === 3 ? "7" : "8.5"} fontWeight="bold" textAnchor="middle">
                                {app.name.split(' ')[0]}
                              </text>
                              <text x={ax + appBoxW / 2} y="286" fill="#94a3b8" fontSize={totalH === 3 ? "5.5" : "6.5"} textAnchor="middle">
                                {app.type.toUpperCase()}
                              </text>

                              {/* Saponificante Discharge Nozzle aimed at this appliance */}
                              <line x1={ax + appBoxW / 2} y1="178" x2={ax + appBoxW / 2} y2="225" stroke="#d4af37" strokeWidth="2" />
                              <polygon 
                                points={`${ax + appBoxW / 2 - 4},225 ${ax + appBoxW / 2 + 4},225 ${ax + appBoxW / 2},233`} 
                                fill="#d4af37" 
                              />
                              <text x={ax + appBoxW / 2} y="220" fill="#fef08a" fontSize="6" fontWeight="bold" textAnchor="middle">BICOK</text>
                            </g>
                          );
                        })}
                      </g>
                    );
                  })}

                  {/* 5. CENTRAL OUTFIRE VTS 32S3 (DESENHO DA NOSSA CENTRAL NO DIAGRAMA) */}
                  <g id="central-outfire-diagrama">
                    {/* Signal conduits from Central to components */}
                    {/* Blue line to Dampers */}
                    <path d="M 770 200 L 710 200 L 710 85 L 680 85" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                    {/* Yellow line to Gas Valve */}
                    <path d="M 770 330 L 740 330 L 740 375 L 300 375" fill="none" stroke="#eab308" strokeWidth="1.5" strokeDasharray="3 3" />
                    {/* Red line to Solenoids */}
                    <path d="M 780 185 L 780 160" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
                    
                    {/* Central Cabinet Main Casing (Aço Preto / Grafite) */}
                    <rect x="765" y="188" width="155" height="152" rx="6" fill="url(#centralGrad)" stroke="#d4af37" strokeWidth="1.8" />
                    
                    {/* Top PSU Cover Plate with 4 Bolts */}
                    <rect x="780" y="184" width="125" height="6" rx="1.5" fill="#1f232b" stroke="#94a3b8" strokeWidth="0.8" />
                    <circle cx="788" cy="187" r="1.5" fill="#cbd5e1" />
                    <circle cx="805" cy="187" r="1.5" fill="#cbd5e1" />
                    <circle cx="880" cy="187" r="1.5" fill="#cbd5e1" />
                    <circle cx="897" cy="187" r="1.5" fill="#cbd5e1" />

                    {/* Bottom Battery Cover Plate with 4 Bolts */}
                    <rect x="790" y="338" width="105" height="6" rx="1.5" fill="#1f232b" stroke="#94a3b8" strokeWidth="0.8" />
                    <circle cx="798" cy="341" r="1.5" fill="#cbd5e1" />
                    <circle cx="815" cy="341" r="1.5" fill="#cbd5e1" />
                    <circle cx="870" cy="341" r="1.5" fill="#cbd5e1" />
                    <circle cx="887" cy="341" r="1.5" fill="#cbd5e1" />

                    {/* Outfire Logo Header */}
                    <text x="842" y="206" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="1.5">
                      OUTFIRE
                    </text>
                    <polygon points="842,192 846,197 842,201 838,197" fill="#f59e0b" />

                    {/* Gold QR Code */}
                    <g transform="translate(772, 218)">
                      <rect x="0" y="0" width="22" height="22" fill="#0f172a" stroke="#d4af37" strokeWidth="0.8" />
                      <rect x="3" y="3" width="5" height="5" fill="#d4af37" />
                      <rect x="14" y="3" width="5" height="5" fill="#d4af37" />
                      <rect x="3" y="14" width="5" height="5" fill="#d4af37" />
                      <rect x="10" y="10" width="3" height="3" fill="#d4af37" />
                    </g>

                    {/* TFT Touchscreen IHM Display in Center (320x240 replica) */}
                    <rect x="798" y="215" width="114" height="74" rx="3" fill="#061317" stroke="#38bdf8" strokeWidth="1" />
                    
                    {/* TFT Header Bar (#03A9F4) with RTC & LED */}
                    <rect x="798" y="215" width="114" height="12" fill="#0284c7" />
                    <text x="803" y="224" fill="#ffffff" fontSize="6" fontWeight="bold">10/05 15:42</text>
                    <circle cx="906" cy="221" r="2.5" fill="#22c55e" stroke="#ffffff" strokeWidth="0.5" />
                    
                    {/* 4 Green Status Boxes */}
                    <rect x="801" y="229" width="25" height="11" fill="#15803d" rx="1" />
                    <text x="813.5" y="237" fill="#ffffff" fontSize="4.5" fontWeight="bold" textAnchor="middle">EXAUST OK</text>
                    
                    <rect x="828" y="229" width="25" height="11" fill="#15803d" rx="1" />
                    <text x="840.5" y="237" fill="#ffffff" fontSize="4.5" fontWeight="bold" textAnchor="middle">ENERG OK</text>

                    <rect x="855" y="229" width="25" height="11" fill="#15803d" rx="1" />
                    <text x="867.5" y="237" fill="#ffffff" fontSize="4.5" fontWeight="bold" textAnchor="middle">GÁS OK</text>

                    <rect x="882" y="229" width="25" height="11" fill="#15803d" rx="1" />
                    <text x="894.5" y="237" fill="#ffffff" fontSize="4.5" fontWeight="bold" textAnchor="middle">DAMP OK</text>

                    {/* Blue Buttons (SETORES / REARMAR) */}
                    <rect x="803" y="243" width="50" height="14" fill="#1d4ed8" rx="2" />
                    <text x="828" y="253" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">SETORES</text>

                    <rect x="857" y="243" width="50" height="14" fill="#1d4ed8" rx="2" />
                    <text x="882" y="253" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">CONTROLE GÁS</text>

                    <rect x="803" y="260" width="50" height="14" fill="#1d4ed8" rx="2" />
                    <text x="828" y="270" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">REARMAR</text>

                    <rect x="857" y="260" width="50" height="14" fill="#1d4ed8" rx="2" />
                    <text x="882" y="270" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">CONFIG</text>

                    {/* Bottom Bar: SISTEMA OPERANTE */}
                    <rect x="798" y="277" width="114" height="12" fill="#0284c7" />
                    <text x="855" y="286" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">SISTEMA OPERANTE</text>

                    {/* Red Emergency Warning Banner */}
                    <rect x="769" y="300" width="147" height="24" fill="#b91c1c" rx="2" />
                    <text x="842" y="311" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">
                      EM CASO DE INCÊNDIO EVACUAR O LOCAL
                    </text>
                    <text x="842" y="319" fill="#fef08a" fontSize="5" fontWeight="bold" textAnchor="middle">
                      SUPORTE: (15) 98157-7847 / OUTFIRE.COM.BR
                    </text>

                    {/* Central Title */}
                    <text x="842" y="360" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">
                      CENTRAL VTS 32S3
                    </text>
                    <text x="842" y="370" fill="#94a3b8" fontSize="6.5" textAnchor="middle">
                      ({hoodCount} Coifa{hoodCount > 1 ? 's' : ''} Independentes)
                    </text>
                  </g>

                  {/* 6. GAS CUTOFF LINE & AUTOMATIC SOLENOID VALVE AT BOTTOM */}
                  <line x1="90" y1="385" x2="740" y2="385" stroke="#eab308" strokeWidth="3" />
                  
                  {/* Gas Solenoid Valve */}
                  <rect x="260" y="374" width="45" height="22" fill="#b91c1c" stroke="#fecaca" strokeWidth="1" rx="2" />
                  <rect x="277" y="366" width="11" height="9" fill="#1e293b" stroke="#eab308" strokeWidth="0.8" />
                  <text x="282.5" y="388" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">VÁLVULA GÁS</text>
                  <text x="282.5" y="405" fill="#fef08a" fontSize="6.5" fontWeight="bold" textAnchor="middle">CORTE INSTANTÂNEO</text>
                </svg>

                {/* Diagram Legend */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-3 border-t border-white/10 text-[10.5px] text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
                    <span>Bico Saponificante (Classe K)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-4 rounded-sm bg-gradient-to-b from-gray-200 to-gray-400 border border-white/50" />
                    <span>Cilindro Saponificante (Inox)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span>Bico CO2 Duto</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-4 rounded-sm bg-red-600 border border-red-300" />
                    <span>Cilindro CO2 (Vermelho)</span>
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
                    <span className="w-3 h-2.5 rounded-sm bg-red-700 border border-red-300" />
                    <span>Damper Corta-Fogo (Acima da Coifa)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm bg-black border border-amber-400" />
                    <span>Central Outfire VTS 32S3</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-2 rounded-sm bg-red-600 border border-amber-300" />
                    <span>Válvula de Gás (Corte Automático)</span>
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
