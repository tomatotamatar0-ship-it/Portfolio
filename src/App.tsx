/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Shaders } from './components/Shaders';
import { Skills } from './components/Skills';
import { Showreel } from './components/Showreel';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  useEffect(() => {
    // Smooth scroll implementation could go here if needed
    // For now, we rely on CSS scroll-behavior: smooth
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-purple-500/30">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Portfolio />
        <Shaders />
        <Skills />
        <Showreel />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0a0a0a]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
