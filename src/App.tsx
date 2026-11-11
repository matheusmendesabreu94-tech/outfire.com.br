import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3DScrollytelling } from './components/Hero3DScrollytelling';
import { SystemPresentation } from './components/SystemPresentation';
import { WhyOutfire } from './components/WhyOutfire';
import { NormsCompliance } from './components/NormsCompliance';
import { KitchenCalculator } from './components/KitchenCalculator';
import { SolutionsShowcase } from './components/SolutionsShowcase';
import { CommercialPresentation } from './components/CommercialPresentation';
import { ManualsAndDocs } from './components/ManualsAndDocs';
import { GallerySection } from './components/GallerySection';
import { ContactFooter } from './components/ContactFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhatsAppModalProvider } from './context/WhatsAppModalContext';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { ClientPortalModal } from './components/portal/ClientPortalModal';
import { OutfireOpsPortal } from './components/ops/OutfireOpsPortal';

function AppContent() {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  // Rota secreta exclusiva para a Engenharia e Técnicos Outfire (aceita /outfire-ops, /ops, /admin, #ops, #admin, etc.)
  const checkIsOpsRoute = () => {
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    return (
      path.startsWith('/outfire-ops') ||
      path.startsWith('/ops') ||
      path.startsWith('/admin') ||
      path.startsWith('/tecnico') ||
      hash.startsWith('#ops') ||
      hash.startsWith('#outfire-ops') ||
      hash.startsWith('#admin') ||
      hash.startsWith('#tecnico')
    );
  };

  const [isOpsRoute, setIsOpsRoute] = useState(checkIsOpsRoute);

  React.useEffect(() => {
    const handleRouteChange = () => {
      setIsOpsRoute(checkIsOpsRoute());
    };
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const handleOpenPortal = () => {
    setIsPortalOpen(true);
  };

  // Se o usuário acessou a rota secreta /outfire-ops ou #ops, exibe o portal interno
  if (isOpsRoute) {
    return <OutfireOpsPortal />;
  }

  return (
    <div className="min-h-screen bg-[#0a0c0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navbar */}
      <Navbar 
        onOpenPortal={handleOpenPortal}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. 3D Scrollytelling Hero */}
        <Hero3DScrollytelling onOpenPortal={handleOpenPortal} />

        {/* 2. Central Outfire VTS 32S3 Presentation */}
        <SystemPresentation />

        {/* 3. Why Outfire: The Danger of Water & Class K Chemistry */}
        <WhyOutfire />

        {/* 4. Commercial Presentation: Video Tour & Engineering Slides */}
        <CommercialPresentation />

        {/* 5. Technical Norms Compliance (NBR 14518, NFPA, Bombeiros AVCB) */}
        <NormsCompliance />

        {/* 6. Interactive Kitchen Calculator & Automated Blueprint Diagram */}
        <KitchenCalculator />

        {/* 7. Kits Completos, Instalação Nacional & Manutenção de Sistemas */}
        <SolutionsShowcase />

        {/* 8. Installation Manuals & Technical Documentation */}
        <ManualsAndDocs />

        {/* 9. Gallery of Real Installations */}
        <GallerySection />
      </main>

      {/* Footer & Lead Form */}
      <ContactFooter onOpenPortal={handleOpenPortal} />

      {/* Persistent WhatsApp Floating Button */}
      <FloatingWhatsApp />

      {/* Client Portal Modal (Portal do Cliente & Obras - Exclusivo Restaurante) */}
      <ClientPortalModal 
        isOpen={isPortalOpen} 
        onClose={() => setIsPortalOpen(false)} 
      />

      {/* LGPD Cookie Consent Banner */}
      <CookieConsentBanner />
    </div>
  );
}

export function App() {
  return (
    <WhatsAppModalProvider>
      <AppContent />
    </WhatsAppModalProvider>
  );
}
export default App;
