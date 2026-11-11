import { useState, useEffect } from 'react';

const ADMIN_PIN_DEFAULT = '864173';
const TECH_PIN_DEFAULT = '2468';

const OPS_ADMIN_PIN_KEY = 'outfire_ops_admin_pin_v2';
const OPS_TECH_PIN_KEY = 'outfire_ops_tech_pin_v2';
const OPS_PIN_CHANGED_EVENT = 'outfire_ops_pin_changed';

/**
 * Obtém a senha mestra do Administrador (Engenharia Chefe)
 * Padrão oficial: 864173
 */
export function getAdminPin(): string {
  if (typeof window === 'undefined') return ADMIN_PIN_DEFAULT;
  try {
    const saved = localStorage.getItem(OPS_ADMIN_PIN_KEY);
    return saved && saved.trim() ? saved.trim() : ADMIN_PIN_DEFAULT;
  } catch {
    return ADMIN_PIN_DEFAULT;
  }
}

/**
 * Atualiza a senha mestra do Administrador
 */
export function setAdminPin(newPin: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const cleaned = newPin.trim();
    if (!cleaned || cleaned.length < 4) return false;
    localStorage.setItem(OPS_ADMIN_PIN_KEY, cleaned);
    window.dispatchEvent(new CustomEvent(OPS_PIN_CHANGED_EVENT));
    return true;
  } catch {
    return false;
  }
}

/**
 * Obtém a senha de acesso dos Técnicos de Campo
 * Definida pelo Administrador no portal
 */
export function getTechnicianPin(): string {
  if (typeof window === 'undefined') return TECH_PIN_DEFAULT;
  try {
    const saved = localStorage.getItem(OPS_TECH_PIN_KEY);
    return saved && saved.trim() ? saved.trim() : TECH_PIN_DEFAULT;
  } catch {
    return TECH_PIN_DEFAULT;
  }
}

/**
 * Define ou altera a senha de acesso dos Técnicos de Campo (pelo Admin)
 */
export function setTechnicianPin(newPin: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const cleaned = newPin.trim();
    if (!cleaned || cleaned.length < 4) return false;
    localStorage.setItem(OPS_TECH_PIN_KEY, cleaned);
    window.dispatchEvent(new CustomEvent(OPS_PIN_CHANGED_EVENT));
    return true;
  } catch {
    return false;
  }
}

/**
 * Hook para monitorar as senhas em tempo real
 */
export function useOpsAuthPins() {
  const [adminPin, setAdminPinState] = useState<string>(getAdminPin);
  const [techPin, setTechPinState] = useState<string>(getTechnicianPin);

  useEffect(() => {
    const handleUpdate = () => {
      setAdminPinState(getAdminPin());
      setTechPinState(getTechnicianPin());
    };

    window.addEventListener(OPS_PIN_CHANGED_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener(OPS_PIN_CHANGED_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  return { adminPin, techPin, setAdminPin, setTechnicianPin };
}
