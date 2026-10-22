import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LeadModalOptions } from '../types';
import { WhatsAppLeadModal } from '../components/WhatsAppLeadModal';

interface WhatsAppModalContextType {
  openLeadModal: (options?: LeadModalOptions) => void;
  closeLeadModal: () => void;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextType | undefined>(undefined);

export const WhatsAppModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<LeadModalOptions>({});

  const openLeadModal = (newOptions?: LeadModalOptions) => {
    setOptions(newOptions || {});
    setIsOpen(true);
  };

  const closeLeadModal = () => {
    setIsOpen(false);
  };

  return (
    <WhatsAppModalContext.Provider value={{ openLeadModal, closeLeadModal }}>
      {children}
      <WhatsAppLeadModal
        isOpen={isOpen}
        onClose={closeLeadModal}
        options={options}
      />
    </WhatsAppModalContext.Provider>
  );
};

export const useWhatsAppModal = (): WhatsAppModalContextType => {
  const context = useContext(WhatsAppModalContext);
  if (!context) {
    throw new Error('useWhatsAppModal must be used within a WhatsAppModalProvider');
  }
  return context;
};
