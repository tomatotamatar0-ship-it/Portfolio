import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export const Showreel: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative aspect-video rounded-3xl overflow-hidden glass-panel group">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
        
        {/* Placeholder for video */}
        <img 
          src="https://picsum.photos/seed/showreel/1920/1080" 
          alt="Showreel Thumbnail"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-white/20"
          >
            <Play className="w-8 h-8 fill-current ml-1" />
          </motion.button>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">2025 SHOWREEL</h2>
          <p className="text-white/60 font-mono text-sm tracking-widest uppercase">Cinematic Environment & Asset Design</p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-8 left-8 z-20 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-tighter">REC</span>
        </div>
        <div className="absolute bottom-8 right-8 z-20 text-xs font-mono opacity-40">
          00:02:45:12
        </div>
      </div>
    </section>
  );
};
