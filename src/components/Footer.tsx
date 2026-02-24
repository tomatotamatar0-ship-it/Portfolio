import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-xl font-display font-black tracking-tighter">
          AHMAD ALI<span className="text-purple-500">.</span>
        </div>
        
        <div className="flex gap-8 text-sm text-white/40 font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>

        <p className="text-xs text-white/20 font-mono">
          © 2025 AHMAD ALI. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
