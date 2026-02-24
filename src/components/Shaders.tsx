import React from 'react';
import { motion } from 'motion/react';
import { Wind, Droplets, Sun, Smartphone } from 'lucide-react';

const ShaderCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="flex items-start gap-4 p-6 glass-panel glow-border"
  >
    <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="text-lg font-display font-semibold mb-1">{title}</h4>
      <p className="text-white/60 text-sm">{description}</p>
    </div>
  </motion.div>
);

export const Shaders: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-accent-blue font-mono text-sm tracking-widest uppercase mb-2">Technical Art</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">REAL-TIME SHADERS & UNITY WORK</h3>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Beyond modeling, I specialize in creating performant real-time shaders for Unity URP. 
              My focus is on bringing life to environments through dynamic foliage, water systems, 
              and seasonal variations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ShaderCard 
                icon={Droplets} 
                title="Water Shader" 
                description="Optimized stylized water with depth-based coloring and foam."
                delay={0.1}
              />
              <ShaderCard 
                icon={Wind} 
                title="Wind Foliage" 
                description="GPU-based vertex animation for realistic grass and tree movement."
                delay={0.2}
              />
              <ShaderCard 
                icon={Sun} 
                title="Seasonal System" 
                description="Dynamic material swapping and tinting based on game seasons."
                delay={0.3}
              />
              <Smartphone 
                className="hidden" // Just to keep the icon import used if needed
              />
              <ShaderCard 
                icon={Smartphone} 
                title="Mobile Assets" 
                description="Highly optimized assets specifically for mobile performance."
                delay={0.4}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square glass-panel overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent" />
            <img 
              src="https://picsum.photos/seed/shader/1000/1000" 
              alt="Shader Preview"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-6 py-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-sm font-mono">
                LIVE PREVIEW: WIND FOLIAGE
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
