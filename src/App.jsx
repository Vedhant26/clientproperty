import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useTranslation } from './context/LanguageContext';
import LanguageSelector from './components/LanguageSelector';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HowItWorksPage from './pages/HowItWorksPage';
import CategoriesPage from './pages/CategoriesPage';
import Chatbot from './components/Chatbot';
import MobileBottomNav from './components/MobileBottomNav';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const { language } = useTranslation();

  // Initialize Lenis for smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Loading animation — Apple-style cinematic reveal
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
        window.scrollTo(0, 0);
      }
    });

    // Phase 1: Letter-by-letter reveal of brand name
    tl.set('.loader', { opacity: 1 })
      .from('.loader__letter', {
        opacity: 0,
        y: 30,
        filter: 'blur(8px)',
        duration: 0.6,
        stagger: 0.06,
        ease: 'power3.out',
      })
      // Phase 2: Shine sweep across letters
      .to('.loader__brand', {
        '--shine-pos': '200%',
        duration: 1.2,
        ease: 'power2.inOut',
      }, '-=0.1')
      // Phase 3: Tagline fades in
      .from('.loader__tagline', {
        opacity: 0,
        y: 10,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.8')
      // Phase 4: Hold for a moment
      .to({}, { duration: 0.5 })
      // Phase 5: Cinematic curtain lift
      .to('.loader__content', {
        opacity: 0,
        y: -30,
        filter: 'blur(4px)',
        duration: 0.5,
        ease: 'power2.in',
      })
      .to('.loader', {
        yPercent: -100,
        duration: 0.7,
        ease: 'power3.inOut',
      }, '-=0.2');

    return () => tl.kill();
  }, []);

  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader__content">
          <div className="loader__icon">
            <span>🔱</span>
          </div>
          <div className="loader__brand">
            {'MAHAKAL'.split('').map((char, i) => (
              <span key={i} className="loader__letter">{char}</span>
            ))}
          </div>
          <div className="loader__tagline">PROPERTY DEALER</div>
          <div className="loader__line">
            <div className="loader__line-inner"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!language) {
    return <LanguageSelector />;
  }

  return (
    <>
      <Navbar />
      
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/property/:id" element={<PropertyDetailsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Chatbot />
      <MobileBottomNav />
      <Footer />
    </>
  );
}

export default App;
