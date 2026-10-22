export interface Appliance {
  id: string;
  name: string;
  type: 'fogao' | 'fritadeira' | 'chapa' | 'charbroiler' | 'outros';
  icon: string;
  widthMeters: number;
}

export interface HoodConfig {
  id: number;
  name: string;
  lengthMeters: number;
  appliances: Appliance[];
}

export interface KitchenProjectConfig {
  hoods: HoodConfig[];
  ductLengthMeters: number;
  hasDuctDamperNozzle: boolean;
  clientName?: string;
  restaurantName?: string;
  phone?: string;
}

export interface CalculationResult {
  // Saponificante
  applianceNozzlesCount: number;
  plenumNozzlesCount: number;
  damperNozzlesCount: number;
  totalSaponificanteNozzles: number;
  saponificanteLiters: number;
  recommendedSaponificanteCylinderLiters: number;
  
  // Sensores Coifa
  hoodSensorsCount: number; // 1 a cada 0.8m a 1m
  
  // CO2 e Duto
  co2NozzlesCount: number; // 1 a cada 3m
  ductSensorsCount: number; // 1 a cada 3m (300°C)
  co2Kg: number; // Mínimo 10kg
  recommendedCo2CylinderKg: number;
  
  // Central Outfire
  centralModel: string;
  hoodsCount: number;
  dampersCount: number;
  gasValvesCount: number;
  
  // Detalhes estimados
  estimatedPriceBRL: number;
}

export interface ProductItem {
  id: string;
  sku: string;
  name: string;
  category: 'kit' | 'central' | 'cilindro' | 'bicos' | 'sensores' | 'valvulas' | 'acessorios';
  priceBRL: number;
  description: string;
  image: string;
  specs: string[];
  featured?: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

export interface LeadItem {
  id: string;
  timestamp: string;
  nome: string;
  telefone: string;
  email: string;
  empresa: string; // Loja / Restaurante / Empresa que representa
  cidade?: string;
  origem: string;
  detalhes?: string;
  totalPedido?: number;
}

export interface LeadModalOptions {
  title?: string;
  subtitle?: string;
  defaultMessage?: string;
  origem?: string;
  detalhes?: string;
  totalPedido?: number;
  cartItems?: CartItem[];
  onSuccess?: () => void;
}
