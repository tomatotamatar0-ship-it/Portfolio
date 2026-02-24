import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center">
      <h2 className="text-accent-purple font-mono text-sm tracking-widest uppercase mb-2">Kind Words</h2>
      <h3 className="text-4xl md:text-5xl font-display font-bold mb-16">TESTIMONIALS</h3>

      <div className="relative">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-accent-purple/10">
          <Quote className="w-24 h-24 rotate-180" />
        </div>

        <div className="min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 md:p-12 relative z-10"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-purple text-accent-purple" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-white/80 italic leading-relaxed mb-8">
                "{TESTIMONIALS[currentIndex].content}"
              </p>
              
              <div>
                <h5 className="text-lg font-display font-bold">{TESTIMONIALS[currentIndex].name}</h5>
                <p className="text-white/40 text-sm font-mono uppercase tracking-widest mt-1">
                  {TESTIMONIALS[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button 
            onClick={prev}
            className="p-4 glass-panel hover:bg-white/10 transition-colors rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next}
            className="p-4 glass-panel hover:bg-white/10 transition-colors rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
