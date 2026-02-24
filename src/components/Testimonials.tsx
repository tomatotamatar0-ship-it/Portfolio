import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmad Ali',
    role: '3D Artist & CGI Specialist',
    text: 'My passion lies in creating digital worlds that feel alive. I strive for the perfect balance between artistic vision and technical performance in every asset I build.',
    rating: 5,
  },
  {
    name: 'Sarah Jenkins',
    role: 'Art Director',
    text: 'Ahmad has a rare talent for translating vision into optimized, beautiful game assets. His attention to detail in topology and texturing is exceptional.',
    rating: 5,
  },
  {
    name: 'Marcus Thorne',
    role: 'Lead Developer',
    text: 'Working with Ahmad was a breeze. He understands the technical constraints of game engines while never compromising on visual quality.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
            CLIENT <span className="text-purple-500">VOICES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-dark rounded-[2rem] relative group hover:border-purple-500/30 transition-all"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5 group-hover:text-purple-500/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-purple-500 text-purple-500" />
                ))}
              </div>

              <p className="text-white/70 mb-8 leading-relaxed italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
