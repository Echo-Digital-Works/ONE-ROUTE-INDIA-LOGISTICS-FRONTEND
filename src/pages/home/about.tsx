import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, MapPin, Clock, ShieldCheck, History, Handshake, TrendingUp } from 'lucide-react';

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const aboutImages = [
    '/images/lorry image 9.jpeg',
    '/images/lorry image 1.jpeg',
    '/images/lorry image 2.jpeg',
    '/images/lorry image 3.jpeg',
    '/images/lorry image 6.jpeg',
    '/images/lorry image 7.jpeg',
    '/images/lorry image 8.jpeg',
    '/images/lorry image 10.jpeg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const milestones = [
    { 
      year: "2008", 
      title: "The Beginning", 
      icon: Truck,
      detail: "Launched transport operations with a specialized fleet of 10-wheel Taurus trucks." 
    },
    { 
      year: "2014", 
      title: "Fleet Expansion", 
      icon: Truck,
      detail: "Scaled operations by introducing 12-wheel lorries and 14-wheel heavy-duty lorries in the same year." 
    },
    { 
      year: "2015 - 2022", 
      title: "Operational Excellence", 
      icon: ShieldCheck,
      detail: "Maintained a consistent and reliable heavy-vehicle transport system across key routes." 
    },
    { 
      year: "2022 - 2026", 
      title: "Strategic Transformation", 
      icon: Handshake,
      detail: "Pivoted to a high-growth Commission-Based Model, achieving Pan-India coverage by 2026." 
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* Left Side: Lorry Image Carousel */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-2xl bg-black overflow-hidden shadow-2xl group"
        >
          <AnimatePresence>
            <motion.img 
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              src={aboutImages[currentImageIndex]} 
              alt="One Route Lorry" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
        </motion.div>
        
        {/* Right Side: Integrated Business Journey */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold text-yellow-500 tracking-widest uppercase mb-2">Our Story</h2>
          <div className="mb-4 sm:mb-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">History of OneRoute India Logistics</h3>
            <p className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-[0.15em]">Driven by Trust, Delivered with Care</p>
          </div>
          
          <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
            From a single-route transport provider to a nationwide logistics powerhouse, Oneroute India has evolved alongside the infrastructure of the country.
          </p>

          {/* Integrated Timeline */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-8 text-slate-900">
              <History className="w-5 h-5 text-yellow-500" />
              <span className="font-bold uppercase tracking-tight text-sm">The Oneroute Journey</span>
            </div>
            
            <div className="space-y-0 border-l-2 border-slate-200 ml-4">
              {milestones.map((item, index) => {
                const isLast = index === milestones.length - 1;
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative pl-10 pb-10 last:pb-0 ${isLast ? 'bg-yellow-50/40 rounded-r-2xl py-4 -my-2' : ''}`}
                  >
                    {/* Timeline Node - Unified Color for History, Yellow for Current */}
                    <div className={`absolute w-5 h-5 rounded-full -left-[11px] top-1.5 border-4 border-white shadow-md transition-all duration-300 ${isLast ? 'bg-yellow-500 scale-125 ring-4 ring-yellow-100' : 'bg-slate-800'}`} />
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        {/* Year Badge - Now Highlighted for ALL milestones */}
                        <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm border ${
                          isLast 
                            ? 'bg-yellow-500 text-white border-yellow-400' 
                            : 'bg-slate-800 text-white border-slate-700'
                        }`}>
                          {item.year}
                        </span>
                        <item.icon size={16} className={isLast ? 'text-yellow-600' : 'text-slate-400'} />
                      </div>

                      <h4 className={`font-bold mb-1 ${isLast ? 'text-slate-900 text-lg' : 'text-slate-800 text-md'}`}>
                        {item.title}
                        {isLast && <span className="ml-2 text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full align-middle font-bold">ACTIVE</span>}
                      </h4>

                      <p className={`${isLast ? 'text-slate-800 font-medium' : 'text-slate-600'} text-sm leading-relaxed max-w-md`}>
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Transformation Quote */}
          <div className="bg-slate-900 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-800 flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8 shadow-xl">
            <div className="bg-yellow-500 p-2 rounded-lg flex-shrink-0">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
              "We leverage decades of ground-level fleet experience to manage a vast partner network, delivering excellence across every state in India."
            </p>
          </div>
          
          {/* Bottom Trust Icons */}
          <ul className="grid grid-cols-3 gap-3 sm:gap-4 border-t border-slate-100 pt-4 sm:pt-6">
            {[
              { icon: MapPin, text: "Pan-India" }, 
              { icon: ShieldCheck, text: "100% Safe" },
              { icon: Clock, text: "On-Time" }
            ].map((item, i) => (
              <li key={i} className="flex items-center text-slate-700 font-bold text-[10px] sm:text-xs uppercase tracking-tight">
                <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 mr-1.5 sm:mr-2 flex-shrink-0" /> {item.text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}