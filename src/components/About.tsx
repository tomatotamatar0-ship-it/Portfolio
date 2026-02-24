import React from 'react';
import { motion } from 'motion/react';
import { Download, MapPin, Calendar, Briefcase } from 'lucide-react';
import { EXPERIENCES } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-accent-purple font-mono text-sm tracking-widest uppercase mb-2">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">AHMAD ALI</h3>
            <div className="flex flex-wrap gap-4 text-white/40 text-sm font-mono mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>3D Environment Artist</span>
              </div>
            </div>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              I am a passionate and detail-oriented 3D Artist with hands-on experience in the game development pipeline, 
              from high-poly sculpting to real-time optimization. I specialize in creating immersive 3D characters, 
              game environments, and props that align with both artistic vision and technical performance.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Whether it’s bringing a character to life, setting the mood with an environment, or building props 
              that players interact with, I ensure that every asset is visually compelling and game-ready.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-medium transition-all"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.button>
        </div>

        <div className="space-y-12">
          <h4 className="text-xl font-display font-bold flex items-center gap-3">
            <Calendar className="text-accent-purple w-6 h-6" />
            Experience Timeline
          </h4>

          <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-2 w-6 h-6 bg-[#050505] border-2 border-accent-purple rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent-purple rounded-full" />
                </div>
                
                <div className="glass-panel p-6">
                  <span className="text-accent-purple font-mono text-xs uppercase tracking-widest">{exp.period}</span>
                  <h5 className="text-xl font-display font-bold mt-1">{exp.role}</h5>
                  <p className="text-white/40 text-sm mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-accent-purple/40 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
