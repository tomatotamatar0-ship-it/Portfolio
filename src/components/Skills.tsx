import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-accent-purple font-mono text-sm tracking-widest uppercase mb-2">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">TECHNICAL SKILLS</h3>
          <p className="text-white/60 text-lg mb-12 leading-relaxed">
            My workflow spans the entire game asset pipeline. From high-poly sculpting in ZBrush 
            to optimized low-poly modeling in Blender/Maya, and final integration in Unity.
          </p>
          
          <div className="space-y-8">
            {SKILLS.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-display font-medium">{skill.name}</span>
                  <span className="text-accent-purple font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-accent-purple to-accent-blue"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'High Poly', value: 'Sculpting' },
            { label: 'Low Poly', value: 'Optimization' },
            { label: 'PBR', value: 'Texturing' },
            { label: 'Real-time', value: 'Rendering' }
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square glass-panel flex flex-col items-center justify-center text-center p-6 hover:bg-white/10 transition-colors group"
            >
              <span className="text-accent-purple font-mono text-xs uppercase tracking-widest mb-2">{item.label}</span>
              <span className="text-xl font-display font-bold group-hover:scale-110 transition-transform">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
