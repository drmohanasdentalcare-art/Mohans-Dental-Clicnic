import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { Star, ShieldCheck, Sparkles, ArrowRight, Quote } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={setActiveTab} />;
      case 'services':
        return <ServicesView setActiveTab={setActiveTab} />;
      case 'testimonials':
        return <TransformationsView />;
      case 'about':
        return <AboutView />;
      case 'booking':
        return <BookingView />;
      default:
        return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-bg relative overflow-x-hidden">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Sidebar Indicator Wrapper */}
      <div className="flex">
        <aside className="hidden lg:flex w-24 border-r border-white/10 flex-col items-center justify-between py-32 fixed left-0 h-screen z-40 bg-brand-bg">
          <span className="vertical-text rotate-180 text-[10px] uppercase tracking-[0.5em] opacity-40">Clinical Archive 08</span>
          <div className="w-px h-24 bg-brand-accent/30" />
          <span className="text-brand-accent font-serif italic text-lg">{activeTab === 'home' ? '01' : activeTab === 'services' ? '02' : '03'}</span>
        </aside>

        <main className="flex-1 lg:pl-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <Footer />
    </div>
  );
};

const HomeView: React.FC<{ setActiveTab: (tab: string) => void }> = ({ setActiveTab }) => {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 px-6">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left: Monolithic Hero Frame */}
          <div className="flex-1 relative group aspect-[16/10] lg:aspect-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1c20] to-brand-bg border border-white/10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000"
                alt="Studio interior"
              />
              <div className="absolute inset-0 bg-brand-bg/40 backdrop-blur-[2px]" />
              
              {/* Decorative Geometric */}
              <div className="absolute w-[150%] h-32 bg-white/5 -rotate-45 translate-y-40" />
              <div className="absolute w-px h-[80%] bg-brand-accent/20 left-1/4 top-1/2 -translate-y-1/2" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
                <motion.p 
                  initial={{ opacity: 0, letterSpacing: '0.4em' }}
                  animate={{ opacity: 0.6, letterSpacing: '1em' }}
                  className="text-[10px] uppercase tracking-[1em] mb-8"
                >
                  Clinical Study
                </motion.p>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight text-white tracking-widest">
                  The <span className="italic">Obsidian</span><br />Archetype
                </h2>
              </div>
            </div>
          </div>

          {/* Right: Metadata & Narrative (Design Pattern) */}
          <div className="w-full lg:w-80 flex flex-col justify-between py-4">
            <div className="space-y-12">
              <section>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-6 font-bold">Studio Specs</h3>
                <div className="space-y-4">
                  {[
                    ['Clinical Tier', 'Ultra-Aesthetic'],
                    ['Protocol', 'Digital Archive'],
                    ['Materials', 'Bio-Resonance']
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-[10px] uppercase tracking-widest opacity-40">{label}</span>
                      <span className="text-[10px] uppercase tracking-widest text-brand-accent">{val}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-4 font-bold">Narrative</h3>
                <p className="text-sm leading-relaxed opacity-60 font-light italic">
                  An exploration of structural perfection and organic light within the clinical landscape. Designed to vanish the anxiety of procedure while maintaining a monolithic excellence.
                </p>
              </section>
            </div>

            <div className="mt-auto pt-12">
              <button 
                onClick={() => setActiveTab('booking')}
                className="w-full py-5 border border-brand-accent text-brand-accent text-[10px] uppercase tracking-[0.4em] hover:bg-brand-accent hover:text-brand-bg transition-all duration-700"
              >
                Inquire Entry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Bento Grid Refined */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto">
          <div className="md:col-span-8 glass-panel p-12 flex flex-col justify-end space-y-12 min-h-[500px] border-white/10">
            <div className="w-16 h-px bg-brand-accent/50" />
            <h3 className="text-5xl font-serif text-white tracking-[0.1em] leading-tight italic">
              A Monolithic <br /><span className="not-italic opacity-40">Intersection.</span>
            </h3>
            <p className="text-brand-text/50 text-lg leading-relaxed max-w-xl font-light">
              We believe architectural precision is the soul of health. Our studio utilizes deep-field imaging to ensure your transformation is as structural as it is aesthetic.
            </p>
          </div>

          <div className="md:col-span-4 space-y-8 flex flex-col">
            {[
              { title: 'Clinical Rigor', icon: <ShieldCheck size={28} />, desc: 'Verification of clinical integrity through high-resonance diagnostics.' },
              { title: 'Elite Comfort', icon: <Star size={28} />, desc: 'Personalized acoustic isolation for an unparalleled meditative baseline.' }
            ].map((item, i) => (
              <div key={i} className="flex-1 glass-panel p-10 space-y-6 border-white/10 group hover:border-brand-accent/30 transition-colors">
                <div className="text-brand-accent opacity-50 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                <h4 className="text-white text-xs uppercase tracking-[0.3em] font-bold">{item.title}</h4>
                <p className="text-brand-text/40 text-xs leading-relaxed uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="bg-brand-bg py-40 border-y border-white/5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight italic">
              Structural <br />
              <span className="not-italic text-brand-accent uppercase tracking-widest text-4xl md:text-5xl opacity-40">Reveal.</span>
            </h2>
            <div className="space-y-8">
              <p className="text-brand-text/50 text-lg leading-relaxed max-w-md">
                Observe the precision of our structural shifts. Transition between clinical reality and architectural finale.
              </p>
              <div className="space-y-4">
                {[
                  "Spectral Reconstruction",
                  "Obsidian-Tonne Shades",
                  "Gingival Silhouette"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-brand-text/80">
                    <div className="w-8 h-px bg-brand-accent/40" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setActiveTab('testimonials')}
                className="group flex items-center gap-6 text-brand-accent text-[10px] uppercase tracking-[0.5em] pt-8 border-b border-brand-accent/20 pb-2 hover:border-brand-accent transition-all"
              >
                Archive Library 02
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative group p-1 border border-white/10 bg-white/5">
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop" 
              afterImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
            />
            {/* Decorative Grid Line */}
            <div className="absolute -inset-8 border border-brand-accent/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        
        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full accent-glow opacity-30 pointer-events-none" />
      </section>

      {/* Testimonial Quote */}
      <section className="max-w-5xl mx-auto px-6 py-40 text-center space-y-16">
        <div className="w-px h-24 bg-brand-accent/20 mx-auto" />
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-white leading-tight font-light opacity-80">
          "A structural baseline I've never <br />encountered in the clinical sphere. <br />The archive of perfection."
        </h3>
        <div className="space-y-4">
          <p className="text-brand-accent uppercase tracking-[0.6em] text-[10px] font-bold">Alexander V. Moretti</p>
          <p className="text-brand-text/30 text-[8px] uppercase tracking-[0.4em]">Master Craftsman • Study 0492</p>
        </div>
      </section>
    </div>
  );
};

const ServicesView: React.FC<{ setActiveTab: (tab: string) => void }> = ({ setActiveTab }) => {
  const services = [
    {
      title: "Cosmetic Artistry",
      desc: "Veneers, Bonding, and Sculpting designed to disappear into your natural beauty.",
      icon: <Sparkles size={24} />,
      image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Restorative Masters",
      desc: "Implants and crowns that restore not just function, but the soul of your smile.",
      icon: <ShieldCheck size={24} />,
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Preventative Suite",
      desc: "Advanced clinical diagnostics ensuring longevity and impeccable oral health.",
      icon: <Star size={24} />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-40 space-y-32 mb-40">
      <div className="text-center space-y-6 px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif text-white tracking-[0.2em] italic">The <span className="not-italic text-brand-accent">Exhibitions.</span></h2>
        <p className="text-brand-text/30 text-[10px] tracking-[0.5em] uppercase">Structural Procedures • Clinical Archive</p>
        <div className="w-px h-12 bg-brand-accent/20 mx-auto mt-8" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group relative h-[650px] overflow-hidden border border-white/10 flex flex-col justify-end p-10 space-y-6 bg-white/5"
          >
            <div className="absolute inset-x-0 bottom-0 top-1/4 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent z-10" />
            <img src={service.image} className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000" alt={service.title} />
            
            <div className="relative z-20 space-y-6">
              <div className="text-brand-accent text-[10px] uppercase tracking-[0.4em] opacity-60">Phase 0{i + 1}</div>
              <h3 className="text-3xl font-serif text-white italic tracking-wide">{service.title}</h3>
              <p className="text-brand-text/50 text-[11px] leading-relaxed uppercase tracking-wider">{service.desc}</p>
              <button 
                onClick={() => setActiveTab('booking')}
                className="pt-4 flex items-center gap-4 text-brand-accent text-[10px] uppercase tracking-[0.3em] font-bold group-hover:gap-6 transition-all"
              >
                Inquire Study <ArrowRight size={14} />
              </button>
            </div>
            
            {/* Corner Decorative */}
            <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-brand-accent/20 group-hover:border-brand-accent transition-colors" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const TransformationsView: React.FC = () => {
  const cases = [
    {
      id: "STUDY 0492",
      title: "Full Arch Reconstruction",
      author: "Alexander V. Moretti",
      quote: "The structural baseline I encountered here is unparalleled. It wasn't just about the aesthetics; it was about the restoration of my character through clinical mastery.",
      desc: "Complete structural realignment using bio-compatible zirconia and anatomical porcelain layering.",
      before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1544605934-802c31cc2054?q=80&w=2070&auto=format&fit=crop",
      specs: [
        ["Procedure", "Prosthetic Integration"],
        ["Timeline", "12 Weeks"],
        ["Outcome", "Optimized Aesthetic"]
      ]
    },
    {
      id: "STUDY 0215",
      title: "Veneer Silhouette",
      author: "Eleanor St. James",
      quote: "I wanted a change that felt like it had always been there. Dr. Thorne achieved a natural resonance that most practitioners simply cannot see.",
      desc: "Minimal-prep ceramic interfaces designed to match existing gingival architecture.",
      before: "https://images.unsplash.com/photo-1606811841660-1b5168c5c705?q=80&w=2070&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1593059025398-4f144a170a55?q=80&w=2070&auto=format&fit=crop",
      specs: [
        ["Procedure", "Lumina-Edge Veneers"],
        ["Timeline", "4 Weeks"],
        ["Outcome", "Natural Resonance"]
      ]
    },
    {
      id: "STUDY 0884",
      title: "Digital Smile Design",
      author: "Marcus Thorne-Blackwood",
      quote: "The digital blueprinting phase gave me total confidence in the structural stability of the end result. A masterpiece of engineering.",
      desc: "Comprehensive virtual mapping translated into physical ceramic reality.",
      before: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2070&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1629618189866-14d603a1188d?q=80&w=2070&auto=format&fit=crop",
      specs: [
        ["Procedure", "Arch Alignment"],
        ["Timeline", "16 Weeks"],
        ["Outcome", "Structural Stability"]
      ]
    }
  ];

  return (
    <div className="pt-40 space-y-48 mb-40">
      <div className="text-center space-y-6 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-[0.2em] italic uppercase">The <span className="not-italic text-brand-accent">Archive.</span></h2>
          <p className="text-brand-text/30 text-[10px] tracking-[0.5em] uppercase mt-4">Clinical Transformation Gallery • Volume VIII</p>
          <div className="w-px h-16 bg-brand-accent/20 mx-auto mt-12" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-64">
        {cases.map((project, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
          >
            {/* Left: Interactive Slider Wrapper */}
            <div className="lg:col-span-12 xl:col-span-8 flex flex-col gap-8">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5 }}
                className="group relative border border-white/10 p-1 bg-white/5"
              >
                <BeforeAfterSlider beforeImage={project.before} afterImage={project.after} />
                <div className="absolute -inset-4 border border-brand-accent/5 pointer-events-none group-hover:border-brand-accent/20 transition-all duration-700" />
                
                {/* Floating Meta ID */}
                <div className="absolute top-8 right-8 mix-blend-difference">
                   <span className="text-[8px] uppercase tracking-[0.8em] text-white opacity-40">{project.id}</span>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.specs.map(([label, val], idx) => (
                  <motion.div 
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="glass-panel p-6 border-white/5"
                  >
                    <span className="text-[8px] uppercase tracking-widest opacity-30 block mb-2">{label}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold">{val}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Testimonial & Context */}
            <div className="lg:col-span-12 xl:col-span-4 space-y-12 relative">
              {/* Decorative Pop-up Slide Graphic */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-8 top-0 w-1 h-full bg-brand-accent/20 origin-left hidden xl:block"
              />

              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8 relative z-10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-brand-accent/40" />
                  <span className="text-brand-accent text-[10px] uppercase tracking-[0.4em] font-bold">Patient Narrative</span>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-6 -left-6 text-brand-accent opacity-10" size={48} />
                  <p className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed">
                    "{project.quote}"
                  </p>
                </div>
                
                <div className="space-y-1 pt-4">
                   <p className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold">{project.author}</p>
                   <p className="text-brand-text/30 text-[8px] uppercase tracking-[0.3em]">Associate Study • Archive 08</p>
                </div>

                <div className="pt-12 border-t border-white/5">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-4">Technical Objective</h4>
                  <p className="text-brand-text/50 text-xs leading-relaxed font-light uppercase tracking-widest">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Visual Break / Call to Action */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-6 py-40 text-center border-t border-white/5"
      >
        <div className="w-px h-24 bg-brand-accent/20 mx-auto mb-12" />
        <h3 className="text-4xl font-serif italic text-white mb-12">Resonate with a higher clinical standard.</h3>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-brand-accent text-[10px] uppercase tracking-[0.8em] hover:tracking-[1em] transition-all duration-700"
        >
          Return to Vault
        </button>
      </motion.div>
    </div>
  );
};

const AboutView: React.FC = () => {
  return (
    <div className="pt-40 space-y-32 mb-40">
      <div className="text-center space-y-6 px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif text-white tracking-[0.1em] uppercase">The <span className="italic font-normal text-brand-accent">Artisan.</span></h2>
        <p className="text-brand-text/30 text-[10px] tracking-[0.6em] uppercase">Lead Clinician • Artistic Visionary</p>
        <div className="w-px h-12 bg-brand-accent/20 mx-auto mt-8" />
      </div>

      {/* Doctor Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group overflow-hidden border border-white/10 p-1 aspect-[4/5] bg-white/5">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
              alt="Dr. Julian Thorne"
            />
            <div className="absolute inset-0 bg-brand-bg/20 backdrop-blur-[1px]" />
            <div className="absolute bottom-8 right-8 vertical-text text-[10px] uppercase tracking-[0.5em] text-brand-accent opacity-40">Dr. Julian Thorne, PhD</div>
          </div>

          <div className="space-y-12">
            <div className="w-16 h-px bg-brand-accent/40" />
            <h3 className="text-5xl font-serif text-white italic tracking-wide leading-tight">
              A Life Dedicated <br /><span className="not-italic opacity-40">to Clinical Mastery.</span>
            </h3>
            <p className="text-brand-text/50 text-lg leading-relaxed font-light">
              Dr. Julian Thorne established Lumina Archive with a singular purpose: to bridge the chasm between clinical medicine and high art. With over two decades of experience in complex restorative cases, his approach is defined by a relentless pursuit of anatomical truth and visual harmony.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-brand-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4">The Vision</h4>
                <p className="text-brand-text/40 text-xs leading-relaxed uppercase tracking-widest italic">To redefine the clinical encounter as a sanctuary of transformation and quiet excellence.</p>
              </div>
              <div>
                <h4 className="text-brand-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4">The Mission</h4>
                <p className="text-brand-text/40 text-xs leading-relaxed uppercase tracking-widest italic">Restoring dignity and character through precision-engineered smiles and empathetic care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white/5 py-40 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="text-center space-y-4">
            <h4 className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold">The Foundation</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white italic">Our Core Values.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: "01", title: "Radical Integrity", desc: "Absolute transparency in clinical diagnostics and outcome expectations." },
              { phase: "02", title: "Master Craft", desc: "Hand-finished porcelain work that rivals the complexity of natural enamel." },
              { phase: "03", title: "Patient Evolution", desc: "Treatments designed to age with the individual, ensuring lifelong stability." },
              { phase: "04", title: "Avant-Garde Tech", desc: "The integration of cutting-edge AI diagnostics to eliminate human margin." }
            ].map((value, i) => (
              <div key={i} className="glass-panel p-8 space-y-6 border-white/5 relative group hover:border-brand-accent/20 transition-all">
                <div className="absolute top-0 right-0 p-4 font-serif italic text-3xl opacity-10 text-brand-accent group-hover:opacity-30 transition-opacity">{value.phase}</div>
                <h5 className="text-white text-xs uppercase tracking-[0.3em] font-bold">{value.title}</h5>
                <div className="w-8 h-px bg-brand-accent/30" />
                <p className="text-brand-text/40 text-xs leading-relaxed uppercase tracking-widest font-light">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bio Information Section */}
      <section className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
             <h4 className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold">Primary Credentials</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                  <h5 className="text-white text-xs uppercase tracking-[0.3em] font-bold border-b border-white/10 pb-4">Education</h5>
                  <ul className="space-y-4">
                      <li className="flex justify-between items-end">
                          <span className="text-[10px] uppercase tracking-widest opacity-40">Doctorate</span>
                          <span className="text-[10px] uppercase tracking-widest text-brand-accent">Harvard School of Med</span>
                      </li>
                      <li className="flex justify-between items-end">
                          <span className="text-[10px] uppercase tracking-widest opacity-40">Mastery</span>
                          <span className="text-[10px] uppercase tracking-widest text-brand-accent">European Aesthetic Acad</span>
                      </li>
                  </ul>
              </div>
              <div className="space-y-6">
                  <h5 className="text-white text-xs uppercase tracking-[0.3em] font-bold border-b border-white/10 pb-4">Awards</h5>
                  <ul className="space-y-4">
                      <li className="flex justify-between items-end">
                          <span className="text-[10px] uppercase tracking-widest opacity-40">2023</span>
                          <span className="text-[10px] uppercase tracking-widest text-brand-accent">Clinical Excellence Gold</span>
                      </li>
                      <li className="flex justify-between items-end">
                          <span className="text-[10px] uppercase tracking-widest opacity-40">2021</span>
                          <span className="text-[10px] uppercase tracking-widest text-brand-accent">Innovation in Prosthetics</span>
                      </li>
                  </ul>
              </div>
          </div>
      </section>
    </div>
  );
};

const BookingView: React.FC = () => {
  return (
    <div className="pt-40 pb-40 max-w-4xl mx-auto px-6 space-y-24">
      <div className="text-center space-y-6">
        <h2 className="text-5xl md:text-7xl font-serif text-white tracking-[0.1em] uppercase">Entry <span className="italic font-normal text-brand-accent">Inquiry.</span></h2>
        <p className="text-brand-text/30 text-[10px] tracking-[0.6em] uppercase">Volume VIII • Limited Clinical Selection</p>
        <div className="w-16 h-px bg-brand-accent/30 mx-auto mt-8" />
      </div>

      <form className="p-8 md:p-16 space-y-12 border border-white/10 bg-white/5 relative group">
        <div className="absolute -inset-4 border border-brand-accent/5 pointer-events-none group-focus-within:border-brand-accent/20 transition-all" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.4em] text-brand-accent/60 pl-1 font-bold">Identifer</label>
            <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors px-1 text-sm tracking-widest" placeholder="NAME / ORIGIN" />
          </div>
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.4em] text-brand-accent/60 pl-1 font-bold">Liaison</label>
            <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors px-1 text-sm tracking-widest" placeholder="EMAIL@PROTOCOL.COM" />
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.4em] text-brand-accent/60 pl-1 font-bold">Inquiry Depth</label>
          <select className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors appearance-none px-1 text-sm tracking-widest cursor-pointer">
            <option>STRUCTURAL RECONSTRUCTION</option>
            <option>MAINTENANCE PROTOCOL</option>
            <option>PREVENTATIVE ARCHIVE</option>
          </select>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.4em] text-brand-accent/60 pl-1 font-bold">Personal Narrative</label>
          <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors px-1 resize-none text-sm tracking-widest" placeholder="DEFINE EXPECTATION..."></textarea>
        </div>

        <button className="w-full py-6 border border-brand-accent text-brand-accent font-bold uppercase tracking-[0.6em] text-[10px] hover:bg-brand-accent hover:text-brand-bg transition-all duration-700 shadow-[0_0_40px_rgba(197,164,126,0.1)]">
          Submit for Review
        </button>
      </form>
    </div>
  );
};

export default App;
