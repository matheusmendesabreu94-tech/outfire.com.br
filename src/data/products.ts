import { ProductItem } from '../types';

export const PRODUCTS: ProductItem[] = [
  {
    id: 'central-outfire-vts-1',
    sku: 'OUT-VTS-1C',
    name: 'Central Outfire VTS 32S3 - 1 Coifa (Kit Completo)',
    category: 'kit',
    priceBRL: 8900,
    description: 'Sistema completo integrado de CO2 e Saponificante Classe K para 1 coifa industrial. Acompanha IHM touchscreen colorida, cilindro saponificante 9L, cilindro CO2 10kg, bicos de inox, sensores térmicos reguláveis e intertravamento de gás.',
    image: '/assets/central-outfire-fundo-removido.png',
    specs: [
      'Controle autônomo para 1 coifa',
      'IHM Touchscreen colorida com avisos de voz',
      '1x Cilindro Saponificante 9 Litros Classe K',
      '1x Cilindro CO2 10 Kg com cabeçote solenoide',
      'Intertravamento de Gás e Exaustor',
      'Certificação em conformidade com NBR 14518'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'central-outfire-vts-2',
    sku: 'OUT-VTS-2C',
    name: 'Central Outfire VTS 32S3 - 2 Coifas (Atuação Independente)',
    category: 'kit',
    priceBRL: 14500,
    description: 'Sistema de supressão inteligente para cozinhas de médio/grande porte com 2 coifas independentes. Se disparar a Coifa 1, a Coifa 2 continua operando com segurança.',
    image: '/assets/central-outfire-instalada.jpg',
    specs: [
      'Controle independente para até 2 coifas',
      'IHM Touchscreen com monitoramento individual por setor',
      '2x Cilindros Saponificante (dimensionados sob medida)',
      'Cilindros de CO2 dedicados para cada duto',
      'Contagem regressiva de segurança anti-disparo acidental',
      'Agenda semanal para abertura e corte automático de gás'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'central-outfire-vts-3',
    sku: 'OUT-VTS-3C',
    name: 'Central Outfire VTS 32S3 - 3 Coifas (Linha Master Industrial)',
    category: 'kit',
    priceBRL: 19800,
    description: 'A mais avançada central de combate a incêndio em cozinhas profissionais do Brasil. Monitora e protege até 3 coifas simultâneas de forma 100% autônoma e setorizada.',
    image: '/assets/central-outfire-ihm.jpg',
    specs: [
      'Controle simultâneo e independente de 3 coifas',
      'Acionamento individual de dampers e CO2 por duto',
      'Alertas de voz falada de alta potência',
      'Histórico completo de eventos e diagnósticos de vazamento',
      'Interface para integração com Alarme Predial de Shoppings',
      'Atende plenamente ABNT NBR 14518, NFPA 96 e NFPA 17A'
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'bico-saponificante-inox',
    sku: 'OUT-BIC-SAP',
    name: 'Bico Aspersor de Inox para Saponificante (Classe K)',
    category: 'bicos',
    priceBRL: 185,
    description: 'Bico difusor de alta vazão em aço inoxidável 304 com rosca NPT. Acompanha capa protetora de borracha/silicone de alta temperatura contra acúmulo de gordura.',
    image: '/assets/central-outfire-interno.jpg',
    specs: [
      'Material: Aço Inoxidável 304 polido',
      'Rosca: 3/8" ou 1/2" NPT',
      'Ângulo de abertura especial para cubas e filtros',
      'Capa protetora com cordão de retenção inclusa'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'bico-co2-duto',
    sku: 'OUT-BIC-CO2',
    name: 'Bico Difusor de CO2 para Dutos de Exaustão',
    category: 'bicos',
    priceBRL: 210,
    description: 'Bico de alta pressão calibrado para inundação total de CO2 dentro da linha de dutos, eliminando o oxigênio rapidamente.',
    image: '/assets/central-outfire-interno.jpg',
    specs: [
      'Inundação rápida em alta pressão',
      'Rosca NPT padronizada',
      'Resistente a calor contínuo de até 400°C'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'sensor-coifa-145c',
    sku: 'OUT-SNS-145',
    name: 'Sensor Térmico Regulável para Coifa (Calibrado 145°C)',
    category: 'sensores',
    priceBRL: 295,
    description: 'Sensor eletromecânico e termostático de precisão em aço inox para monitoramento de temperatura na zona de cocção.',
    image: '/assets/central-outfire-interno.jpg',
    specs: [
      'Faixa de regulagem: 50°C a 200°C (ajustado em 145°C)',
      'Haste blindada em inox resistente a vapores e gordura',
      'Contato seco normalmente aberto/fechado',
      'Cabo de alta temperatura blindado em malha metálica'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'sensor-duto-300c',
    sku: 'OUT-SNS-300',
    name: 'Sensor Térmico Regulável para Duto (Calibrado 300°C)',
    category: 'sensores',
    priceBRL: 320,
    description: 'Sensor de alta temperatura para detecção de fogo na linha de duto de exaustão e acionamento instantâneo de CO2 e dampers.',
    image: '/assets/central-outfire-interno.jpg',
    specs: [
      'Faixa de operação: até 350°C (ajustado em 300°C)',
      'Instalação externa com sonda inserida no duto',
      'Conexão estanque anti-vazamento de óleo'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'recarga-saponificante-9l',
    sku: 'OUT-AG-SAP9',
    name: 'Galão Agente Saponificante Classe K Outfire (9 Litros)',
    category: 'cilindro',
    priceBRL: 680,
    description: 'Composto líquido à base de sais orgânicos e acetato de potássio formulado especificamente para saponificação imediata de óleos vegetais e gorduras animais.',
    image: '/assets/central-outfire-fundo-removido.png',
    specs: [
      'Volume: 9 Litros líquidos',
      'Ação de saponificação com espuma refrigerante espessa',
      'Não tóxico e biodegradável',
      'Laudo técnico de conformidade para bombeiros'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'valvula-gas-solenoide-1pol',
    sku: 'OUT-VLV-GAS1',
    name: 'Válvula Solenoide de Corte Rápido de Gás 1" (Bivolt)',
    category: 'valvulas',
    priceBRL: 840,
    description: 'Válvula de corte de segurança para linha de GLP / Gás Natural. Fecha instantaneamente ao menor sinal de disparo ou vazamento de gás.',
    image: '/assets/central-outfire-interno.jpg',
    specs: [
      'Diâmetro: 1 polegada BSP/NPT',
      'Rearme manual para segurança obrigatória',
      'Corpo em latão forjado de alta resistência',
      'Compatível com GLP e Gás Natural encanado'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'damper-corta-fogo-motorizado',
    sku: 'OUT-DMP-CF',
    name: 'Damper Corta-Fogo Motorizado com Mola de Retorno',
    category: 'acessorios',
    priceBRL: 1250,
    description: 'Damper para isolamento mecânico de dutos de coifa. Fecha automaticamente no disparo de CO2 para aprisionar o gás e sufocar o incêndio.',
    image: '/assets/central-outfire-interno.jpg',
    specs: [
      'Lâminas corta-fogo com vedação hermética',
      'Atuador 24V com retorno por mola mecânica',
      'Resistência ao fogo: 120 minutos (TRRF 120)',
      'Microswitch de confirmação de fechamento'
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'acionador-manual-pull',
    sku: 'OUT-ACT-MAN',
    name: 'Estação de Disparo Manual de Emergência (Tipo Puxador)',
    category: 'acessorios',
    priceBRL: 310,
    description: 'Acionador de emergência de dupla ação em caixa metálica amarela/vermelha com lacre e trava de segurança.',
    image: '/assets/central-outfire-fundo-removido.png',
    specs: [
      'Acionamento mecânico e elétrico simultâneo',
      'Pintura eletrostática de alta visibilidade',
      'Trava de segurança para impedir toque acidental'
    ],
    featured: false,
    inStock: true
  }
];
