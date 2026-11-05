import { useState, useEffect } from 'react';
import { ProductItem } from '../types';
import { PRODUCTS } from '../data/products';

const CATALOG_STORAGE_KEY = 'outfire_catalog_products';
const CATALOG_UPDATE_EVENT = 'outfire_catalog_updated';

// Fotos oficiais da Outfire disponíveis no repositório para escolha rápida
export const OUTFIRE_ASSET_GALLERY = [
  { label: 'Kit Instalação Loja Pequena (Completo)', url: '/assets/presentation/kit_instalacao_loja_pequena.jpg' },
  { label: 'Central VTS (Fundo Transparente)', url: '/assets/central-outfire-fundo-removido.png' },
  { label: 'Central VTS (Vista Frontal)', url: '/assets/central-outfire-front.png' },
  { label: 'Central VTS (IHM Touch Acesa)', url: '/assets/central-outfire-ihm.jpg' },
  { label: 'Central Instalada na Cozinha', url: '/assets/central-outfire-instalada.jpg' },
  { label: 'Central Vista Interna / Bornes', url: '/assets/central-outfire-interno.jpg' },
  { label: 'Tampa Central Metálica Moderna', url: '/assets/tampa-central-moderna.png' },
  { label: 'Acionador Manual Pull Station', url: '/assets/acionador-manual.png' },
  { label: 'Detector de Fumaça & Calor', url: '/assets/detector-fumaca.png' },
  { label: 'Sensor Térmico Blindado Inox', url: '/assets/sensor-blindado.jpg' },
  { label: 'Cilindro CO2 Duto de Exaustão', url: '/assets/presentation/protecao_duto_co2.jpg' },
  { label: 'Cilindro Saponificante Classe K', url: '/assets/presentation/solucao_outfire.jpg' },
  { label: 'Tela Touchscreen Colorida IHM', url: '/assets/tela inicial ihm outfire.JPG' },
  { label: 'Tela de Alarme / Disparo IHM', url: '/assets/tela-ihm-alarme.jpg' },
  { label: 'Logo Outfire Gold', url: '/assets/logo-outfire-gold.png' }
];

/**
 * Obtém todos os produtos cadastrados do localStorage ou inicializa com a lista padrão
 */
export function getCatalogProducts(): ProductItem[] {
  if (typeof window === 'undefined') {
    return PRODUCTS;
  }

  try {
    const stored = localStorage.getItem(CATALOG_STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(PRODUCTS));
      return PRODUCTS;
    }
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed) && parsed.length > 0) {
      // Incorpora novos produtos padrão caso ainda não estejam no localStorage
      const existingIds = new Set(parsed.map((p: ProductItem) => p.id));
      const missingDefaults = PRODUCTS.filter(p => !existingIds.has(p.id));
      if (missingDefaults.length > 0) {
        const merged = [...missingDefaults, ...parsed];
        localStorage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(merged));
        return merged;
      }
      return parsed;
    }
  } catch (error) {
    console.error('Erro ao ler catálogo do localStorage:', error);
  }

  return PRODUCTS;
}

/**
 * Salva ou atualiza um produto no catálogo
 */
export function saveCatalogProduct(product: ProductItem): void {
  const current = getCatalogProducts();
  const index = current.findIndex(p => p.id === product.id);

  let updated: ProductItem[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = product;
  } else {
    updated = [product, ...current];
  }

  try {
    localStorage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(CATALOG_UPDATE_EVENT, { detail: updated }));
  } catch (error) {
    console.error('Erro ao salvar produto no catálogo:', error);
  }
}

/**
 * Remove um produto do catálogo pelo ID
 */
export function deleteCatalogProduct(productId: string): void {
  const current = getCatalogProducts();
  const updated = current.filter(p => p.id !== productId);

  try {
    localStorage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(CATALOG_UPDATE_EVENT, { detail: updated }));
  } catch (error) {
    console.error('Erro ao excluir produto do catálogo:', error);
  }
}

/**
 * Restaura o catálogo para os produtos padrão de fábrica
 */
export function resetCatalogToDefault(): void {
  try {
    localStorage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(PRODUCTS));
    window.dispatchEvent(new CustomEvent(CATALOG_UPDATE_EVENT, { detail: PRODUCTS }));
  } catch (error) {
    console.error('Erro ao restaurar catálogo:', error);
  }
}

/**
 * Hook do React para sincronização automática e reativa do catálogo da loja
 */
export function useStoreCatalog(): ProductItem[] {
  const [products, setProducts] = useState<ProductItem[]>(() => getCatalogProducts());

  useEffect(() => {
    const handleUpdate = () => {
      setProducts(getCatalogProducts());
    };

    window.addEventListener(CATALOG_UPDATE_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(CATALOG_UPDATE_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  return products;
}

