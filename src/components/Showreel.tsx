import React from 'react';
import { motion } from 'motion/react';
import { Play, Volume2 } from 'lucide-react';

export const Showreel: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
          {/* Placeholder for Video */}
          <img
            src="https://picsum.photos/seed/showreel/1920/1080"
            alt="Showreel Thumbnail"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[5s]"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center shadow-2xl shadow-white/20 mb-8"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-display font-black text-center mb-4">
              2025 <span className="text-gradient">SHOWREEL</span>
            </h2>
            <p className="text-white/70 font-medium tracking-widest uppercase text-sm">
              Cinematic Journey Through My Work
            </p>
          </div>

          <div className="absolute bottom-10 right-10 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
              <Volume2 className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Hover for sound</span>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 10, repeat: Infinity }}
              className="h-full bg-purple-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
