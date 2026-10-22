import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3DScrollytelling } from './components/Hero3DScrollytelling';
import { SystemPresentation } from './components/SystemPresentation';
import { WhyOutfire } from './components/WhyOutfire';
import { NormsCompliance } from './components/NormsCompliance';
import { KitchenCalculator } from './components/KitchenCalculator';
import { StoreCatalog } from './components/StoreCatalog';
import { ManualsAndDocs } from './components/ManualsAndDocs';
import { GallerySection } from './components/GallerySection';
import { ContactFooter } from './components/ContactFooter';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CartItem, ProductItem } from './types';
import { WhatsAppModalProvider } from './context/WhatsAppModalContext';

function AppContent() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add item to cart
  const handleAddToCart = (product: ProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  // Remove single item
  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Clear all items
  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0a0c0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navbar */}
      <Navbar 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. 3D Scrollytelling Hero */}
        <Hero3DScrollytelling />

        {/* 2. Central Outfire VTS 32S3 Presentation */}
        <SystemPresentation />

        {/* 3. Why Outfire: The Danger of Water & Class K Chemistry */}
        <WhyOutfire />

        {/* 4. Technical Norms Compliance (NBR 14518, NFPA, Bombeiros AVCB) */}
        <NormsCompliance />

        {/* 5. Interactive Kitchen Calculator & Automated Blueprint Diagram */}
        <KitchenCalculator onAddToCart={handleAddToCart} />

        {/* 6. Online Store & Replacement Parts Catalog */}
        <StoreCatalog onAddToCart={handleAddToCart} />

        {/* 7. Installation Manuals & Technical Documentation */}
        <ManualsAndDocs />

        {/* 8. Gallery of Real Installations */}
        <GallerySection />
      </main>

      {/* Footer & Lead Form */}
      <ContactFooter />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Persistent WhatsApp Floating Button */}
      <FloatingWhatsApp />
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
