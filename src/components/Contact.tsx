import React from 'react';
import { motion } from 'motion/react';
import { Send, Linkedin, Github, Mail, Globe, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-accent-purple font-mono text-sm tracking-widest uppercase mb-2">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">LET'S CREATE SOMETHING AMAZING</h3>
          <p className="text-white/60 text-lg mb-12 leading-relaxed">
            I'm always open to new opportunities, collaborations, or just a friendly chat about 3D art and game development.
          </p>

          <div className="space-y-6">
            <a href="mailto:ahmadali@example.com" className="flex items-center gap-4 p-4 glass-panel hover:bg-white/10 transition-colors group">
              <div className="p-3 bg-accent-purple/10 rounded-xl text-accent-purple group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-mono uppercase">Email</p>
                <p className="text-lg font-display font-medium">ahmadali@example.com</p>
              </div>
            </a>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, label: 'LinkedIn', url: '#' },
                { icon: Globe, label: 'ArtStation', url: 'https://ahmadali01.artstation.com' },
                { icon: MessageSquare, label: 'Sketchfab', url: '#' }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex flex-col items-center justify-center p-6 glass-panel hover:bg-white/10 transition-colors group"
                >
                  <social.icon className="w-6 h-6 mb-2 text-white/40 group-hover:text-accent-purple transition-colors" />
                  <span className="text-xs font-mono uppercase tracking-widest text-white/40">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[100px] -mr-32 -mt-32" />
          
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/40">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/40">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-white/40">Subject</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-white/40">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-accent-purple text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-accent-purple/20"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
      
      <footer className="mt-24 pt-8 border-t border-white/5 text-center text-white/20 text-xs font-mono uppercase tracking-[0.2em]">
        © 2026 AHMAD ALI • BUILT WITH PASSION FOR GAMES
      </footer>
    </section>
  );
};
