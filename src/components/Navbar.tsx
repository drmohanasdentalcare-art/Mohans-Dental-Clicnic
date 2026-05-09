import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Transformations' },
  { id: 'about', label: 'About' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 glass-panel' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setActiveTab('home')}
        >
          <div className="w-10 h-10 rounded-full border border-brand-accent/30 flex items-center justify-center group-hover:border-brand-accent/60 transition-colors">
            <span className="font-serif text-brand-accent text-xl italic">M</span>
          </div>
          <div>
            <h1 className="font-serif text-xl tracking-[0.3em] text-white">DR. MOHANA'S</h1>
            <p className="text-[10px] tracking-[0.4em] text-brand-accent/60 uppercase -mt-1">DENTAL CARE</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-[0.3em]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`transition-colors relative py-2 ${
                activeTab === item.id ? 'text-brand-accent' : 'text-white/40 hover:text-white'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-brand-accent"
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="tel:9003227250" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
            <Phone size={14} className="text-brand-accent" />
            <span className="text-[10px] tracking-[0.2em] uppercase">9003227250</span>
          </a>
          <button 
            onClick={() => setActiveTab('booking')}
            className="px-6 py-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-brand-accent text-[10px] uppercase tracking-[0.2em] hover:bg-brand-accent hover:text-brand-bg transition-all duration-500"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-panel border-t border-brand-accent/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`text-lg font-serif italic text-left ${
                    activeTab === item.id ? 'text-brand-accent' : 'text-white/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-6 border-t border-brand-accent/10 flex flex-col gap-4">
                <button 
                  onClick={() => {
                    setActiveTab('booking');
                    setIsOpen(false);
                  }}
                  className="w-full py-4 rounded-xl bg-brand-accent text-brand-bg font-medium uppercase tracking-widest text-sm"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
