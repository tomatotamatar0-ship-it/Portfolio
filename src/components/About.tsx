import React from 'react';
import { motion } from 'motion/react';
import { Download, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    year: '2023 - Present',
    role: 'Senior 3D Artist',
    company: 'Nova Games Studio',
    desc: 'Leading asset creation for high-fidelity mobile RPGs. Developing custom URP shaders and optimizing pipelines.',
  },
  {
    year: '2021 - 2023',
    role: 'Game Asset Designer',
    company: 'Pixel Forge Interactive',
    desc: 'Created stylized environment kits and hero props. Collaborated with technical artists on shader development.',
  },
  {
    year: '2019 - 2021',
    role: 'Junior 3D Modeler',
    company: 'Creative Labs',
    desc: 'Focused on low-poly modeling and PBR texturing for indie game projects.',
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
                src="https://picsum.photos/seed/artist/800/1000"
                alt="Artist Portrait"
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
                  <h4 className="font-bold">Aetheria Design</h4>
                  <p className="text-xs text-white/50">Est. 2018</p>
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
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              I'm a passionate 3D Artist and Game Asset Designer with over 5 years of experience in creating immersive digital experiences. My work blends technical precision with artistic flair, focusing on stylized aesthetics and real-time optimization.
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
