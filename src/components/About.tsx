import React from 'react';
import { motion } from 'motion/react';
import { Download, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    year: 'Feb 2025 - Present',
    role: '3D Environment Artist',
    company: 'Markhor Games',
    desc: 'Creating high-quality environment assets and immersive worlds for upcoming titles. Focused on stylized art direction and real-time optimization.',
  },
  {
    year: 'Mar 2024 - Present',
    role: '3D Environment Artist',
    company: 'BRIC Games',
    desc: 'Designing modular environment kits, lighting, and rendering. Contributing to the visual identity of multiple game projects.',
  },
  {
    year: '2022 - 2024',
    role: 'Senior 3D Artist',
    company: 'Artrei Technologies',
    desc: 'Led the creation of AR/VR assets and high-quality CGI. Managed asset pipelines and ensured technical performance.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10">
              <img
                src="https://picsum.photos/seed/ahmad-artist/800/1000"
                alt="Ahmad Ali"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
            
            <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center font-black text-xl">A</div>
                <div>
                  <h4 className="font-bold">Ahmad Ali</h4>
                  <p className="text-xs text-white/50">3D Artist</p>
                </div>
              </div>
              <p className="text-sm text-white/70 italic">"Bringing imagination to life through pixels and polygons."</p>
            </div>
          </motion.div>

          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8">
              THE ARTIST <br />
              <span className="text-gradient">BEHIND THE MESH</span>
            </h2>
            <p className="text-white/60 text-lg mb-6 leading-relaxed">
              I am a <span className="text-white font-medium">Senior 3D Environment Artist</span> currently working at <span className="text-purple-400 font-medium">Markhor Games</span>. With over 6 years of experience in the industry, I specialize in creating immersive, stylized worlds that blend artistic vision with technical precision.
            </p>
            
            <div className="mb-8 space-y-4">
              <h4 className="text-purple-400 font-bold uppercase tracking-widest text-xs">My Expertise</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/60 text-sm">
                <li className="flex gap-2"><span className="text-purple-500">▹</span> <span><strong>Character Modeling:</strong> Realistic & stylized characters with clean topology.</span></li>
                <li className="flex gap-2"><span className="text-purple-500">▹</span> <span><strong>Environment Art:</strong> Modular & optimized game-ready environments.</span></li>
                <li className="flex gap-2"><span className="text-purple-500">▹</span> <span><strong>Prop Modeling:</strong> High-quality assets from weapons to interactives.</span></li>
                <li className="flex gap-2"><span className="text-purple-500">▹</span> <span><strong>UV Unwrapping:</strong> Clean & efficient UVs for minimal distortion.</span></li>
                <li className="flex gap-2"><span className="text-purple-500">▹</span> <span><strong>Texturing:</strong> Hand-painted & PBR textures (Substance, Photoshop).</span></li>
                <li className="flex gap-2"><span className="text-purple-500">▹</span> <span><strong>Rendering:</strong> Presentation using Arnold, Cycles, and Unity.</span></li>
              </ul>
            </div>

            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              My journey has taken me through studios like <span className="text-white">BRIC Games</span> and <span className="text-white">Artrei Technologies</span>, where I've honed my skills in high-poly sculpting, modular environment design, and real-time optimization. I believe that 3D art is the ultimate medium for bending the rules of nature to create magical experiences.
            </p>

            <div className="space-y-10 mb-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-10 border-l border-white/10"
                >
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-purple-500" />
                  <span className="text-xs font-mono text-purple-400 mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                  <p className="text-sm text-white/40 mb-3">{item.company}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold flex items-center gap-3 hover:bg-white/10 transition-all"
            >
              <Download className="w-5 h-5" />
              Download My CV
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
