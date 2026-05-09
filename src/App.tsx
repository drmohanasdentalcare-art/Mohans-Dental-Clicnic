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
          <span className="vertical-text rotate-180 text-[10px] uppercase tracking-[0.5em] opacity-40">Every Tooth Counts</span>
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

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-[60]">
        <motion.a 
          href="https://wa.me/917550089819?text=Hello%20Dr.%20Mohana%E2%80%99s%20Dental%20Care,%20I%20would%20like%20to%20book%20an%20appointment%20or%20schedule%20a%20meeting."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </motion.a>
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
                  Expert Care
                </motion.p>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight text-white tracking-widest">
                  Dr. Mohana’s<br />Dental Care
                </h2>
              </div>
            </div>
          </div>

          {/* Right: Metadata & Narrative (Design Pattern) */}
          <div className="w-full lg:w-80 flex flex-col justify-between py-4">
            <div className="space-y-12">
              <section>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-6 font-bold">Doctor Specs</h3>
                <div className="space-y-4">
                  {[
                    ['Specialist', 'Dr. D. Mohanalakshmi'],
                    ['Specialty', 'Prosthodontist'],
                    ['Experience', 'Complete Implantology']
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-[10px] uppercase tracking-widest opacity-40">{label}</span>
                      <span className="text-[10px] uppercase tracking-widest text-brand-accent">{val}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-4 font-bold">Vision</h3>
                <p className="text-sm leading-relaxed opacity-60 font-light italic">
                  Prosthodontist and Implantologist offering complete dental care for families and individuals in Adyar, Chennai. Dedicated to excellence in restorative and preventative care.
                </p>
              </section>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <button 
                onClick={() => setActiveTab('booking')}
                className="w-full py-5 bg-brand-accent text-brand-bg text-[10px] uppercase tracking-[0.4em] font-bold hover:shadow-[0_0_30px_rgba(197,164,126,0.3)] transition-all duration-500"
              >
                Book Appointment
              </button>
              <a 
                href="https://www.google.com/maps/place/Dr.Mohana's+Dental+Care/@13.0048895,80.2624255,17z/data=!4m6!3m5!1s0x3a52677dabb1886b:0x41b6bf12fd236233!8m2!3d13.0048895!4d80.2624255!16s%2Fg%2F11xytb2w3p?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 border border-brand-accent text-brand-accent text-[10px] uppercase tracking-[0.4em] text-center hover:bg-brand-accent hover:text-brand-bg transition-all duration-700"
              >
                Get Directions
              </a>
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
              Advanced <br /><span className="not-italic opacity-40">Prosthodontics.</span>
            </h3>
            <p className="text-brand-text/50 text-lg leading-relaxed max-w-xl font-light">
              Dr. Mohana’s Dental Care provides complete dental treatments with a patient-friendly approach, focused on quality care, comfort, and long-term oral health.
            </p>
          </div>

          <div className="md:col-span-4 space-y-8 flex flex-col">
            {[
              { title: 'Quality Care', icon: <ShieldCheck size={28} />, desc: 'Focused on long-term oral health through precise clinical diagnostics.' },
              { title: 'Patient Friendly', icon: <Star size={28} />, desc: 'Comfort-first approach to ensure a stress-free dental experience.' }
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
              Aesthetic <br />
              <span className="not-italic text-brand-accent uppercase tracking-widest text-4xl md:text-5xl opacity-40">Shifts.</span>
            </h2>
            <div className="space-y-8">
              <p className="text-brand-text/50 text-lg leading-relaxed max-w-md">
                Witness the power of precision-engineered restorative dentistry at Dr. Mohana’s Dental Care.
              </p>
              <div className="space-y-4">
                {[
                  "Digital Smile Design",
                  "Implant Realignment",
                  "Restorative Excellence"
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
                View Transformations
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
      title: "Root Canal Treatment",
      desc: "Advanced endodontic care to save natural teeth and relieve pain with precision.",
      icon: <Sparkles size={24} />,
      image: "https://images.unsplash.com/photo-1606811841660-1b5168c5c705?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Implantology",
      desc: "State-of-the-art dental implants providing terminal stability and natural resonance.",
      icon: <ShieldCheck size={24} />,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Orthodontic Braces",
      desc: "Traditional and modern alignment solutions for perfect structural harmony.",
      icon: <Star size={24} />,
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Crown and Bridge",
      desc: "Bespoke prosthetics designed to restore function and anatomical integrity.",
      icon: <ShieldCheck size={24} />,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Invisible Aligners",
      desc: "Clear aligner protocols for discreet orthodontic correction.",
      icon: <Sparkles size={24} />,
      image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Child Dentistry",
      desc: "Empathic pediatric care focused on early preventative foundations.",
      icon: <Star size={24} />,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-40 space-y-32 mb-40">
      <div className="text-center space-y-6 px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif text-white tracking-[0.2em] italic">The <span className="not-italic text-brand-accent">Procedures.</span></h2>
        <p className="text-brand-text/30 text-[10px] tracking-[0.5em] uppercase">Clinical Care • Expert Dental Solutions</p>
        <div className="w-px h-12 bg-brand-accent/20 mx-auto mt-8" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group relative h-[550px] overflow-hidden border border-white/10 flex flex-col justify-end p-10 space-y-6 bg-white/5"
          >
            <div className="absolute inset-x-0 bottom-0 top-1/4 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent z-10" />
            <img src={service.image} className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000" alt={service.title} />
            
            <div className="relative z-20 space-y-6">
              <div className="text-brand-accent text-[10px] uppercase tracking-[0.4em] opacity-60">Service 0{i + 1}</div>
              <h3 className="text-2xl font-serif text-white italic tracking-wide">{service.title}</h3>
              <p className="text-brand-text/50 text-[11px] leading-relaxed uppercase tracking-wider">{service.desc}</p>
              <button 
                onClick={() => setActiveTab('booking')}
                className="pt-4 flex items-center gap-4 text-brand-accent text-[10px] uppercase tracking-[0.3em] font-bold group-hover:gap-6 transition-all"
              >
                Book Appointment <ArrowRight size={14} />
              </button>
            </div>
            
            {/* Corner Decorative */}
            <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-brand-accent/20 group-hover:border-brand-accent transition-colors" />
          </motion.div>
        ))}
      </div>

      {/* Additional Services List */}
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <p className="text-brand-text/40 text-[10px] uppercase tracking-[0.3em]">And all other General Dental Procedures including</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Wisdom Tooth Extraction",
                "Fixed Dentures",
                "Cosmetic Dentistry",
                "Removable Dentures"
              ].map((item, i) => (
                <div key={i} className="text-[10px] uppercase tracking-[0.2em] text-white/60 border border-white/5 py-4 px-2">
                    {item}
                </div>
              ))}
          </div>
      </div>
    </div>
  );
};

const TransformationsView: React.FC = () => {
  const cases = [
    {
      id: "STUDY 0492",
      title: "Full Arch Reconstruction",
      author: "Alexander M.",
      quote: "The structural baseline I encountered here is unparalleled. It wasn't just about the aesthetics; it was about the restoration of my smile through clinical mastery.",
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
      author: "Eleanor S.",
      quote: "I wanted a change that felt like it had always been there. Dr. Mohanalakshmi achieved a natural resonance that most practitioners simply cannot see.",
      desc: "Minimal-prep ceramic interfaces designed to match existing gingival architecture.",
      before: "https://images.unsplash.com/photo-1606811841660-1b5168c5c705?q=80&w=2070&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1593059025398-4f144a170a55?q=80&w=2070&auto=format&fit=crop",
      specs: [
        ["Procedure", "Aesthetic Veneers"],
        ["Timeline", "4 Weeks"],
        ["Outcome", "Natural Resonance"]
      ]
    },
    {
      id: "STUDY 0884",
      title: "Digital Smile Design",
      author: "Marcus B.",
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
        <h2 className="text-5xl md:text-7xl font-serif text-white tracking-[0.1em] uppercase">The <span className="italic font-normal text-brand-accent">Specialist.</span></h2>
        <div className="space-y-4">
          <p className="text-white text-2xl md:text-4xl tracking-[0.25em] font-medium uppercase font-serif">Dr. D. Mohanalakshmi M.D.S</p>
          <p className="text-brand-accent/70 text-[11px] md:text-sm tracking-[0.3em] uppercase font-light">Founder & Chief Dental Specialist · Prosthodontist & Implantologist</p>
        </div>
        <div className="w-px h-12 bg-brand-accent/20 mx-auto mt-8" />
      </div>

      {/* Doctor Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group overflow-hidden border border-white/10 p-1 aspect-[4/5] bg-white/5">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
              alt="Dr. D. Mohanalakshmi"
            />
            <div className="absolute inset-0 bg-brand-bg/20 backdrop-blur-[1px]" />
            <div className="absolute bottom-8 right-8 vertical-text text-[10px] uppercase tracking-[0.5em] text-brand-accent opacity-40">Prosthodontist & Implantologist</div>
          </div>

          <div className="space-y-12">
            <div className="w-16 h-px bg-brand-accent/40" />
            <h3 className="text-5xl font-serif text-white italic tracking-wide leading-tight">
              A Dedication <br /><span className="not-italic opacity-40">to Restorative Care.</span>
            </h3>
            <p className="text-brand-text/50 text-lg leading-relaxed font-light">
              Dr. D. Mohanalakshmi M.D.S is the Founder and Chief Dental Specialist at Dr. Mohana's Dental Care, Adyar — a practice she built to bring compassionate, high-quality dentistry to Chennai. A specialist in Prosthodontics and Implantology, she personally oversees and performs every treatment at the clinic, supported by a team of experienced associate consultants. With a philosophy that every tooth counts, Dr. Mohanalakshmi ensures each patient receives precise, comfortable, and lasting dental care. Step into her clinic and discover dentistry that truly puts your smile first.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-brand-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4">The Vision</h4>
                <p className="text-brand-text/40 text-xs leading-relaxed uppercase tracking-widest italic font-light">Every tooth counts. To provide high-quality dental care that enhances the lives of our patients in Chennai.</p>
              </div>
              <div>
                <h4 className="text-brand-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4">The Mission</h4>
                <p className="text-brand-text/40 text-xs leading-relaxed uppercase tracking-widest italic font-light">Delivering expert clinical solutions with empathy, focusing on long-term sustainability and anatomical perfection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white/5 py-40 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="text-center space-y-4">
            <h4 className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold">The Care Standard</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white italic">Our Foundations.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: "01", title: "Patient First", desc: "A friendly approach ensuring comfort is at the center of every procedure." },
              { phase: "02", title: "Expertise", desc: "Specialized care in Prosthodontics and Implantology by M.D.S qualified doctors." },
              { phase: "03", title: "Hygiene", desc: "Rigorous clinical sterilization protocols protecting the safety of our patients." },
              { phase: "04", title: "Innovation", desc: "Utilizing modern dental protocols and bio-compatible materials." }
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
             <h4 className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold">Clinical Profile</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                  <h5 className="text-white text-xs uppercase tracking-[0.3em] font-bold border-b border-white/10 pb-4">Specialization</h5>
                  <ul className="space-y-4">
                      <li className="flex justify-between items-end">
                          <span className="text-[10px] uppercase tracking-widest opacity-40 text-left">Primary</span>
                          <span className="text-[10px] uppercase tracking-widest text-brand-accent text-right">Prosthodontist</span>
                      </li>
                      <li className="flex justify-between items-end">
                          <span className="text-[10px] uppercase tracking-widest opacity-40 text-left">Advanced</span>
                          <span className="text-[10px] uppercase tracking-widest text-brand-accent text-right">Implantologist</span>
                      </li>
                  </ul>
              </div>
              <div className="space-y-6">
                  <h5 className="text-white text-xs uppercase tracking-[0.3em] font-bold border-b border-white/10 pb-4">Qualifications</h5>
                  <ul className="space-y-4">
                      <li className="flex justify-between items-end">
                          <span className="text-[10px] uppercase tracking-widest opacity-40 text-left">Specialist</span>
                          <span className="text-[10px] uppercase tracking-widest text-brand-accent text-right">Dr. D. Mohanalakshmi M.D.S</span>
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
        <h2 className="text-5xl md:text-7xl font-serif text-white tracking-[0.1em] uppercase">Connect <span className="italic font-normal text-brand-accent">with us.</span></h2>
        <p className="text-brand-text/30 text-[10px] tracking-[0.6em] uppercase">Consulting Hours: 10AM - 1PM | 5:30PM - 8:30PM</p>
        <div className="w-16 h-px bg-brand-accent/30 mx-auto mt-8" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="glass-panel p-10 space-y-6 border-white/10">
              <h4 className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold">Contact Details</h4>
              <div className="space-y-4 text-white/80 text-sm tracking-widest">
                  <p className="flex items-center gap-4">
                      <span className="opacity-40">Phone:</span>
                      <a href="tel:9003227250" className="hover:text-brand-accent">9003227250</a>
                  </p>
                  <p className="flex items-center gap-4">
                      <span className="opacity-40">WhatsApp:</span>
                      <a href="tel:7550089819" className="hover:text-brand-accent">7550089819</a>
                  </p>
                  <p className="flex items-center gap-4">
                      <span className="opacity-40">Email:</span>
                      <a href="mailto:drmohanasdentalcare@gmail.com" className="hover:text-brand-accent lowercase transition-colors">drmohanasdentalcare@gmail.com</a>
                  </p>
                  <p className="flex items-center gap-4">
                      <span className="opacity-40">Instagram:</span>
                      <span className="hover:text-brand-accent">dr.mohanadentalcare</span>
                  </p>
              </div>
          </div>
          <div className="glass-panel p-10 space-y-6 border-white/10">
              <h4 className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold">Clinic Address</h4>
              <div className="text-white/80 text-sm tracking-widest leading-relaxed">
                  <p>No: 41/5, Karpagam Gardens,</p>
                  <p>1st Main Road, Adyar,</p>
                  <p>Chennai - 20</p>
              </div>
              <a 
                href="https://www.google.com/maps/place/Dr.Mohana's+Dental+Care/@13.0048895,80.2624255,17z/data=!4m6!3m5!1s0x3a52677dabb1886b:0x41b6bf12fd236233!8m2!3d13.0048895!4d80.2624255!16s%2Fg%2F11xytb2w3p?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-brand-accent text-[10px] uppercase tracking-[0.3em] font-bold pt-4 hover:gap-6 transition-all"
              >
                Open Google Maps <ArrowRight size={14} />
              </a>
          </div>
      </div>

      <form className="p-8 md:p-16 space-y-12 border border-white/10 bg-white/5 relative group">
        <div className="absolute -inset-4 border border-brand-accent/5 pointer-events-none group-focus-within:border-brand-accent/20 transition-all font-bold" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.4em] text-brand-accent/60 pl-1 font-bold">Identifier</label>
            <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors px-1 text-sm tracking-widest" placeholder="YOUR NAME" />
          </div>
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.4em] text-brand-accent/60 pl-1 font-bold">Liaison</label>
            <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors px-1 text-sm tracking-widest" placeholder="EMAIL ADDRESS" />
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.4em] text-brand-accent/60 pl-1 font-bold">Required Procedure</label>
          <select className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors appearance-none px-1 text-sm tracking-widest cursor-pointer">
            <option>ROOT CANAL TREATMENT</option>
            <option>DENTAL IMPLANTS</option>
            <option>ORTHODONTIC BRACES</option>
            <option>CROWN AND BRIDGE</option>
            <option>INVISIBLE ALIGNERS</option>
            <option>COSMETIC DENTISTRY</option>
          </select>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.4em] text-brand-accent/60 pl-1 font-bold">Context</label>
          <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors px-1 resize-none text-sm tracking-widest" placeholder="BRIEF DESCRIPTION OF YOUR NEEDS..."></textarea>
        </div>

        <button className="w-full py-6 border border-brand-accent text-brand-accent font-bold uppercase tracking-[0.6em] text-[10px] hover:bg-brand-accent hover:text-brand-bg transition-all duration-700 shadow-[0_0_40px_rgba(197,164,126,0.1)]">
          Submit Appointment Request
        </button>
      </form>
    </div>
  );
};

export default App;
