import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Shaders } from './components/Shaders';
import { Skills } from './components/Skills';
import { Showreel } from './components/Showreel';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Portfolio />
      <Shaders />
      <Skills />
      <Showreel />
      <About />
      <Testimonials />
      <Contact />
    </Layout>
  );
}
