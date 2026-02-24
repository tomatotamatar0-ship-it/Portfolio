import React from 'react';
import { motion } from 'motion/react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'Character Modeling', level: 95, color: 'bg-purple-500' },
  { name: 'Environment Art', level: 90, color: 'bg-blue-500' },
  { name: 'Prop Modeling', level: 95, color: 'bg-cyan-500' },
  { name: 'UV Unwrapping', level: 85, color: 'bg-emerald-500' },
  { name: 'Texturing (PBR/Hand-painted)', level: 90, color: 'bg-orange-500' },
  { name: 'Rendering (Arnold/Cycles)', level: 85, color: 'bg-red-500' },
  { name: 'Unity Engine', level: 80, color: 'bg-white' },
  { name: 'Photoshop', level: 85, color: 'bg-blue-600' },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
            TECHNICAL <span className="text-purple-500">ARSENAL</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Mastering the industry-standard tools and techniques to deliver high-performance, visually stunning game assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {skills.map((skill, i) => (
            <div key={skill.name} className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-lg font-bold">{skill.name}</span>
                <span className="text-sm font-mono text-white/40">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`h-full ${skill.color} relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Software Icons Grid */}
        <div className="mt-24 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 opacity-30 hover:opacity-100 transition-opacity duration-500">
          {['Blender', 'Unity', 'Maya', 'Substance', 'Arnold', 'Photoshop'].map((software) => (
            <div key={software} className="flex flex-col items-center gap-4 grayscale hover:grayscale-0 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-[10px] font-black uppercase tracking-widest">{software}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
