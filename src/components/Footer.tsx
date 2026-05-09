import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/5 py-24 px-12 lg:ml-24 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-white tracking-widest uppercase">Dr. Mohana’s Dental Care</h3>
            <p className="text-brand-accent text-[10px] uppercase tracking-[0.4em]">Every Tooth Counts</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">Contact</h4>
            <div className="text-brand-text/40 text-[10px] uppercase tracking-[0.2em] space-y-2">
              <p>9003227250</p>
              <p>drmohanasdentalcare@gmail.com</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">Location</h4>
            <div className="text-brand-text/40 text-[10px] uppercase tracking-[0.2em] space-y-2">
              <p>No: 41/5, Karpagam Gardens,</p>
              <p>1st Main Road, Adyar,</p>
              <p>Chennai - 20</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">Hours</h4>
            <div className="text-brand-text/40 text-[10px] uppercase tracking-[0.2em] space-y-2">
              <p>Morning: 10 AM to 1 PM</p>
              <p>Evening: 5:30 PM to 8:30 PM</p>
              <p>Sunday Holiday</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.4em] text-brand-text/30">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <span>© 2026 Dr. Mohana’s Dental Care</span>
            <div className="flex gap-8">
              <a href="https://instagram.com/dr.mohanadentalcare" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-accent transition-colors">About</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="flex gap-12">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Subtle corner decorative piece */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-accent/5 blur-[80px]" />
    </footer>
  );
};
