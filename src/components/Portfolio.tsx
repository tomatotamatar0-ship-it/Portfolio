import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Box, Layers, Image as ImageIcon } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-accent-purple font-mono text-sm tracking-widest uppercase mb-2">Featured Work</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold">3D ART & GAME ASSETS</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative glass-panel overflow-hidden cursor-pointer glow-border"
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <span className="text-accent-purple text-xs font-mono uppercase tracking-wider">{project.category}</span>
              <h4 className="text-xl font-display font-semibold mt-2">{project.title}</h4>
              <p className="text-white/60 text-sm mt-2 line-clamp-2">{project.description}</p>
            </div>
            
            <div className="absolute inset-0 bg-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-6 py-2 bg-white text-black rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform">
                View Details
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8"
          >
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-[90vh] glass-panel overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="aspect-video rounded-xl overflow-hidden bg-white/5">
                    <img 
                      src={selectedProject.renders[0]} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.renders.slice(1).map((render, i) => (
                      <div key={i} className="aspect-video rounded-xl overflow-hidden bg-white/5">
                        <img 
                          src={render} 
                          alt={`${selectedProject.title} render ${i + 2}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <span className="text-accent-purple text-xs font-mono uppercase tracking-wider">{selectedProject.category}</span>
                    <h3 className="text-3xl font-display font-bold mt-2">{selectedProject.title}</h3>
                    <p className="text-white/70 mt-4 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white/40 text-xs font-mono uppercase">
                        <Box className="w-4 h-4" />
                        <span>Software</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.software.map(s => (
                          <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs">{s}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white/40 text-xs font-mono uppercase">
                        <Layers className="w-4 h-4" />
                        <span>Work Type</span>
                      </div>
                      <p className="text-sm">Game Ready Asset</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {selectedProject.artstationUrl && (
                      <a 
                        href={selectedProject.artstationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-accent-purple text-white rounded-full font-medium hover:bg-accent-purple/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View on ArtStation
                      </a>
                    )}
                    <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-medium transition-colors">
                      <ImageIcon className="w-4 h-4" />
                      View Wireframe
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
