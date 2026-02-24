import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ExternalLink, Download } from 'lucide-react';

export const Overlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 flex flex-col justify-between p-8 md:p-12">
      {/* Top Navigation / Logo */}
      <div className="flex justify-between items-start pointer-events-auto">
        <div className="flex flex-col">
          <h2 className="text-2xl font-display font-bold tracking-tighter">AHMAD ALI</h2>
          <p className="text-[10px] tracking-[0.5em] text-white/40 uppercase">3D Environment Artist</p>
        </div>
        
        <nav className="hidden md:flex gap-8">
          {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
            <button
              key={item}
              className="text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom UI */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-4 pointer-events-auto">
          <div className="flex gap-6">
            <SocialIcon icon={<Linkedin size={18} />} href="#" />
            <SocialIcon icon={<Twitter size={18} />} href="#" />
            <SocialIcon icon={<Github size={18} />} href="#" />
            <SocialIcon icon={<Mail size={18} />} href="#" />
          </div>
          <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase">
            © 2026 Ahmad Ali. Built for the Metaverse.
          </p>
        </div>

        <div className="flex flex-col items-end gap-4 pointer-events-auto">
          <button className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group">
            <span className="text-[10px] uppercase tracking-[0.2em]">Download CV</span>
            <Download size={14} className="group-hover:translate-y-1 transition-transform" />
          </button>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-white/20" />
            <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase">Lahore, Pakistan</span>
          </div>
        </div>
      </div>

      {/* Cinematic HUD Elements */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 flex flex-col gap-2 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-white rounded-full" />
        ))}
      </div>
      <div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col gap-2 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-white rounded-full" />
        ))}
      </div>
    </div>
  );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/40 hover:text-white transition-colors"
  >
    {icon}
  </a>
);
