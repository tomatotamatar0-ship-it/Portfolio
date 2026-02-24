import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MousePointer2, Linkedin, ExternalLink, Phone, Mail, X } from 'lucide-react';
import { Hero3D } from './Hero3D';
import { cn } from '../lib/utils';

export const Hero: React.FC = () => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const profileLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/ahmad-ali-8a46392a4', color: 'text-blue-400' },
    { name: 'ArtStation', icon: ExternalLink, href: 'https://ahmadali01.artstation.com', color: 'text-orange-400' },
  ];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <Hero3D />
      
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-sm text-purple-400">
            Available for new projects
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter mb-6 leading-[0.9]">
            <span className="text-3xl md:text-5xl block mb-4 text-white/40 tracking-normal font-light">AHMAD ALI</span>
            CREATING <br />
            <span className="text-gradient">DIGITAL WORLDS</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-light mb-10">
            3D Artist | Character & Environment Designer | Prop Specialist. Creating immersive game assets from high-poly sculpting to real-time optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowProfileOptions(!showProfileOptions)}
                className="group px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 transition-all hover:bg-purple-500 hover:text-white"
              >
                View Profile
                <ArrowRight className={cn("w-5 h-5 transition-transform", showProfileOptions ? "rotate-90" : "group-hover:translate-x-1")} />
              </motion.button>

              <AnimatePresence>
                {showProfileOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-4 w-56 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl z-50"
                  >
                    {profileLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors group"
                      >
                        <link.icon className={cn("w-5 h-5", link.color)} />
                        <span className="text-sm font-bold">{link.name}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactInfo(!showContactInfo)}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold backdrop-blur-md hover:bg-white/10 transition-all"
              >
                Contact Me
              </motion.button>

              <AnimatePresence>
                {showContactInfo && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 sm:left-0 mt-4 w-72 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl z-50 text-left"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10">
                          <img 
                            src="https://picsum.photos/seed/ahmad/200/200" 
                            alt="Ahmad Ali" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-black uppercase tracking-widest text-purple-400">Ahmad Ali</h4>
                          <p className="text-[10px] text-white/30 font-bold">3D Environment Artist</p>
                        </div>
                      </div>
                      <button onClick={() => setShowContactInfo(false)} className="text-white/30 hover:text-white">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                          <Mail className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/30 uppercase font-bold">Email</p>
                          <p className="text-sm font-medium">tomatotamatar0@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                          <Phone className="w-4 h-4 text-green-400" />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/30 uppercase font-bold">Phone</p>
                          <p className="text-sm font-medium">+92 323 4909029</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent" />
      </motion.div>

      {/* Floating Particles Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05)_0%,transparent_50%)]" />
    </section>
  );
};
