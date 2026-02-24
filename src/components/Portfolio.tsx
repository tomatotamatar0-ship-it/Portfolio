import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, Box, Layers, Palette, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  software: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Stylized Game Coins',
    category: 'Game Assets',
    image: 'https://picsum.photos/seed/coins/800/600',
    description: 'A set of high-quality stylized coins for mobile and PC games. Optimized for performance with custom shaders.',
    software: ['Blender', 'Substance Painter', 'Unity'],
    tags: ['Stylized', 'Low Poly', 'PBR'],
  },
  {
    id: 2,
    title: 'Treasure Chest',
    category: 'Environment Prop',
    image: 'https://picsum.photos/seed/chest/800/600',
    description: 'Interactive treasure chest with opening animations and particle effects. Designed for a fantasy RPG.',
    software: ['Maya', 'ZBrush', 'Substance Painter'],
    tags: ['Fantasy', 'Animated', 'Hero Prop'],
  },
  {
    id: 3,
    title: 'Wind Foliage System',
    category: 'Shaders',
    image: 'https://picsum.photos/seed/foliage/800/600',
    description: 'Custom URP shader for realistic wind movement in foliage. Supports seasonal color changes.',
    software: ['Unity', 'HLSL', 'Shader Graph'],
    tags: ['Real-time', 'Optimization', 'VFX'],
  },
  {
    id: 4,
    title: 'Cyberpunk Alley',
    category: 'Environment',
    image: 'https://picsum.photos/seed/cyber/800/600',
    description: 'A fully realized cyberpunk environment scene with neon lighting and volumetric fog.',
    software: ['Blender', 'Unreal Engine 5', 'Substance'],
    tags: ['Sci-Fi', 'Environment', 'Lighting'],
  },
  {
    id: 5,
    title: 'Guardian Character',
    category: 'Character Art',
    image: 'https://picsum.photos/seed/char/800/600',
    description: 'Stylized character model with full rigging and basic animations. Optimized for mobile games.',
    software: ['ZBrush', 'Blender', 'Marvelous Designer'],
    tags: ['Character', 'Rigged', 'Stylized'],
  },
  {
    id: 6,
    title: 'Ancient Ruins',
    category: 'Environment',
    image: 'https://picsum.photos/seed/ruins/800/600',
    description: 'Modular environment kit for creating ancient temple ruins. Includes stone, moss, and vine assets.',
    software: ['Blender', 'Unity', 'Substance Designer'],
    tags: ['Modular', 'Environment', 'Historical'],
  },
];

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
              FEATURED <span className="text-purple-500">WORK</span>
            </h2>
            <p className="text-white/50 max-w-xl">
              A collection of game assets, environments, and real-time shaders crafted with precision and artistic vision.
            </p>
          </div>
          <div className="flex gap-2">
            {['All', 'Assets', 'Shaders', 'Environments'].map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold hover:bg-white/5 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-white/5 border border-white/10"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/10 text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ExternalLink className="w-4 h-4" />
              </div>
              
              {/* Glow border effect */}
              <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/50 transition-colors duration-500 pointer-events-none rounded-3xl" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl bg-[#0f0f0f] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-3/5 h-[300px] md:h-auto bg-black relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold flex items-center gap-2">
                    <Box className="w-3.5 h-3.5 text-purple-400" />
                    3D View
                  </div>
                  <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    Wireframe
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-black mb-6">
                  {selectedProject.title}
                </h3>
                
                <p className="text-white/60 mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3 flex items-center gap-2">
                      <Palette className="w-3.5 h-3.5" />
                      Software Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.software.map(s => (
                        <span key={s} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3 flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(t => (
                        <span key={t} className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <button className="w-full py-4 bg-white text-black rounded-2xl font-bold hover:bg-purple-500 hover:text-white transition-all">
                    View Project on ArtStation
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
