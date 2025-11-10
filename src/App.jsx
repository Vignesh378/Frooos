import React, { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import frooosLogo from "./assets/frooos-logo.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ShowcaseSection from "./components/ShowcaseSection";
import BestSellersSection from "./components/BestSellersSection";
import HighlightsSection from "./components/HighlightsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SpotlightTestimonial from "./components/SpotlightTestimonial";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import LoginModal from "./components/LoginModal";
import FloatingCartButton from "./components/FloatingCartButton";
import {
  brandHighlights,
  bestSellerProducts,
  fruitEmojis,
  heroContent,
  navLinks,
  partnerLogos,
  remixSignatureProducts,
  showcaseHighlights,
  showcaseProducts,
  spotlightTestimonial,
  testimonials,
  tropicalPartyProducts,
} from "./data/siteContent";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [flyingIcons, setFlyingIcons] = useState([]);

  const floatingCartRef = useRef(null);
  const navCartRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, -140]);

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const toggleCart = () => setCartOpen((open) => !open);
  const toggleLogin = () => setLoginOpen((open) => !open);

  const createFlight = (event, iconChar) => {
    const buttonRect = event.currentTarget.getBoundingClientRect();
    const targetRect =
      floatingCartRef.current?.getBoundingClientRect() ??
      navCartRef.current?.getBoundingClientRect();

    if (!targetRect) return;

    const startX = buttonRect.left + buttonRect.width / 2;
    const startY = buttonRect.top + buttonRect.height / 2;
    const endX = targetRect.left + targetRect.width / 2;
    const endY = targetRect.top + targetRect.height / 2;
    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`;

    setFlyingIcons((prev) => [...prev, { id, startX, startY, endX, endY, iconChar }]);

    setTimeout(() => {
      setFlyingIcons((prev) => prev.filter((item) => item.id !== id));
    }, 900);
  };

  const handleAddToCart = (product, event) => {
    event.preventDefault();
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    const iconChar =
      product.icon ?? fruitEmojis[Math.floor(Math.random() * fruitEmojis.length)];
    createFlight(event, iconChar);
  };

  const updateQuantity = (name, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.name !== name) return item;
          const nextQuantity = item.quantity + delta;
          return { ...item, quantity: nextQuantity };
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  const handleAuthInteraction = (id) => {
    if (id === "login") {
      if (!isLoggedIn) {
        toggleLogin();
      }
      return;
    }

    if (id === "logout") {
      if (isLoggedIn) {
        setIsLoggedIn(false);
      } else {
        toggleLogin();
      }
      return;
    }

    if (id === "cart") {
      toggleCart();
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-white via-slate-50 to-rose-50 text-slate-900">
      <Header
        logoSrc={frooosLogo}
        navLinks={navLinks}
        cartCount={cartItems.length}
        isLoggedIn={isLoggedIn}
        onLinkClick={handleAuthInteraction}
        onToggleCart={toggleCart}
        navCartRef={navCartRef}
      />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-32">
        <Hero heroParallax={heroParallax} heroContent={heroContent} />

        <ShowcaseSection
          products={showcaseProducts}
          highlights={showcaseHighlights}
          partnerLogos={partnerLogos}
          onAddToCart={handleAddToCart}
        />

        <BestSellersSection
          products={bestSellerProducts}
          onAddToCart={handleAddToCart}
          heading="Out Best selling product on worldwide"
          description="Perfect for a summer day when the sun is shining, don’t forget your mint leaves! Add your choice of spirit and enjoy!"
          accentTone="amber"
        />

        <BestSellersSection
          products={remixSignatureProducts}
          onAddToCart={handleAddToCart}
          heading="Live your best life the bruvana way"
          description="Beat the heat with Bruvana approved Remix and Sports+ signatures. Shake, pour, and party all day."
          accentTone="rose"
        />

        <BestSellersSection
          products={tropicalPartyProducts}
          onAddToCart={handleAddToCart}
          heading="Party mixes crafted for sunshine rituals"
          description="Serving tropical layers and spirited blends designed for your all-day celebrations."
          accentTone="violet"
        />

        <HighlightsSection content={brandHighlights} />

        <TestimonialsSection testimonials={testimonials} />

        <SpotlightTestimonial testimonial={spotlightTestimonial} />

        <ContactSection />
      </main>

      <Footer logoSrc={frooosLogo} />

      <FloatingCartButton
        ref={floatingCartRef}
        count={cartItems.length}
        onClick={toggleCart}
      />

      <AnimatePresence>
        {flyingIcons.map((icon) => (
          <motion.span
            key={icon.id}
            initial={{ x: icon.startX, y: icon.startY, scale: 0.6, opacity: 1 }}
            animate={{ x: icon.endX, y: icon.endY, scale: 0.2, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="pointer-events-none fixed z-[80]"
            style={{ left: 0, top: 0 }}
          >
            <span className="text-2xl">{icon.iconChar}</span>
          </motion.span>
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {cartOpen && (
          <CartDrawer
            items={cartItems}
            subtotal={subtotal}
            onClose={() => setCartOpen(false)}
            onUpdateQuantity={updateQuantity}
            onRemove={removeItem}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loginOpen && (
          <LoginModal
            onClose={() => setLoginOpen(false)}
            onSubmit={() => {
              setIsLoggedIn(true);
              setLoginOpen(false);
            }}
            isLoggedIn={isLoggedIn}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
