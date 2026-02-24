import React from 'react';
import { motion } from 'motion/react';
import { Wind, Droplets, Sun, Snowflake, Sparkles } from 'lucide-react';

export const Shaders: React.FC = () => {
  return (
    <section id="shaders" className="py-24 px-6 relative overflow-hidden bg-[#050505]">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, #a855f7 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, #3b82f6 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, #06b6d4 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, #a855f7 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8">
              REAL-TIME <br />
              <span className="text-gradient">SHADER MAGIC</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Pushing the boundaries of real-time rendering in Unity URP. From procedural foliage movement to complex water simulations, I create shaders that bring game worlds to life.
            </p>

            <div className="space-y-6">
              {[
                { icon: Wind, title: 'Wind Foliage System', desc: 'GPU-instanced wind movement for large-scale forests.' },
                { icon: Droplets, title: 'Stylized Water Shader', desc: 'Dynamic foam, depth-based transparency, and vertex waves.' },
                { icon: Sun, title: 'Seasonal Transition', desc: 'Global shader system for smooth transitions between seasons.' },
                { icon: Sparkles, title: 'VFX & Particles', desc: 'Custom particle shaders for magical and environmental effects.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group"
          >
            <img
              src="https://picsum.photos/seed/shader-demo/1000/1000"
              alt="Shader Demo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-500 text-[10px] font-black uppercase tracking-widest">Live Preview</span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-white/50 font-bold uppercase">Unity URP</span>
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Interactive Foliage Demo</h3>
              <p className="text-white/60 text-sm">Move your mouse to interact with the wind simulation.</p>
            </div>

            {/* Interactive Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
              <button className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2">
                Launch WebGL Demo
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
