import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/5 py-12 px-12 lg:ml-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] uppercase tracking-[0.4em] text-brand-text/30">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <span>© 2024 Lumina Archive</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Archive</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="flex gap-12">
          <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Terms of Entry</a>
        </div>
      </div>
      
      {/* Subtle corner decorative piece */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-accent/5 blur-[80px]" />
    </footer>
  );
};
