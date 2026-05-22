import { useState, type ReactNode } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, MapPin, PackageCheck, ArrowRight, X, Boxes, type LucideIcon } from 'lucide-react';

// --- TYPES ---
interface Service {
  id: string; 
  title: string;
  desc: string;
  details: string;
  icon: LucideIcon;
  scene: ReactNode;
}

// --- ANIMATION CONFIGURATIONS ---
const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' as const } }
};

const cardVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index === 0 ? -80 : index === 2 ? 80 : 0,
    y: index === 1 ? 80 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: 'spring' as const, bounce: 0.3, duration: 1 }
  }
};

// --- SERVICE SCENE COMPONENTS ---
const RoadFreightScene = () => (
  <div className="relative w-full h-32 bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center mb-6 border border-slate-200">
    <div className="absolute inset-x-0 bottom-10 h-1 bg-slate-300/50" />
    <motion.div 
      animate={{ x: [-200, 200] }} 
      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      className="relative z-10"
    >
      <Truck className="w-12 h-12 text-yellow-600 drop-shadow-sm" />
    </motion.div>
  </div>
);

const SupplyChainScene = () => (
  <div className="relative w-full h-32 bg-slate-50 rounded-2xl overflow-hidden mb-6 flex items-center justify-center border border-slate-100">
    <div className="relative w-[80%] h-10 flex items-center">
      <div className="absolute inset-x-0 h-[2px] border-t-2 border-dashed border-slate-300 top-1/2 -translate-y-1/2" />
      <div className="absolute left-0 z-20 bg-white rounded-full p-1 shadow-md -translate-x-1/2">
        <MapPin className="text-red-500 w-6 h-6" />
      </div>
      <motion.div
        initial={{ left: "0%" }}
        animate={{ left: "100%" }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute z-10 -translate-x-1/2"
      >
        <Truck className="w-8 h-8 text-yellow-600 drop-shadow-lg" />
      </motion.div>
      <div className="absolute right-0 z-20 bg-white rounded-full p-1 shadow-md translate-x-1/2">
        <MapPin className="text-blue-500 w-6 h-6" />
      </div>
    </div>
  </div>
);

const WarehousingScene = () => (
  <div className="relative w-full h-32 bg-slate-100 rounded-2xl overflow-hidden mb-6 flex items-center justify-center border border-slate-200">
    <div className="grid grid-cols-4 gap-4 opacity-10">
      {[...Array(8)].map((_, i) => <Boxes key={i} className="w-8 h-8" />)}
    </div>
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
      className="absolute bg-white p-4 rounded-2xl shadow-xl border border-yellow-500/10"
    >
      <PackageCheck className="w-12 h-12 text-yellow-600" />
    </motion.div>
  </div>
);

export default function Services() {
  const [selectedService, setSelectedService] = useState<null | Service>(null);

  const services: Service[] = [
    { 
      id: 'road-freight',
      title: 'Road Freight', 
      desc: 'Extensive fleet of modern trucks ensuring reliable overland transport across India.', 
      details: 'Our road freight solutions utilize GPS-enabled Taurus trucks and heavy-duty lorries to ensure 100% safe transit with real-time tracking.',
      icon: Truck,
      scene: <RoadFreightScene />
    },
    { 
      id: 'supply-chain',
      title: 'Supply Chain', 
      desc: 'End-to-end optimization of your logistics flow, reducing costs and transit times.', 
      details: 'We integrate advanced analytics to streamline your procurement and distribution, ensuring a seamless flow from origin to destination.',
      icon: MapPin,
      scene: <SupplyChainScene />
    },
    { 
      id: 'warehousing',
      title: 'Warehousing', 
      desc: 'State-of-the-art storage facilities with advanced inventory management systems.', 
      details: 'We’ve partnered with premium warehouse facilities to offer you a seamless, one-stop logistics experience. Whether you need short-term storage or complex distribution support, our new warehousing tie-ups ensure your cargo is handled with precision and care..', 
      icon: PackageCheck,
      scene: <WarehousingScene />
    }
  ];

  return (
    /* CRITICAL: The id="services-page" ensures this specific section is targetable. 
      The 'scroll-mt-24' handles the offset if you have a sticky navbar.
    */
    <section id="services-page" className="py-16 sm:py-24 md:py-32 bg-slate-50 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={headerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-600 mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-sm font-bold uppercase tracking-widest">Our Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 sm:mb-8">Comprehensive Logistics Solutions</h2>
          <div className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-500"></div>
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              The company operates in the transport office commission-based service sector.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={service.title} 
              id={service.id} 
              custom={i} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={cardVariants}
              onClick={() => setSelectedService(service)}
              className="group relative bg-white max-sm:bg-[#0f172a] sm:hover:bg-[#0f172a] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] shadow-xl cursor-pointer overflow-hidden h-full flex flex-col transition-all duration-300 sm:hover:-translate-y-2 max-sm:active:[transform:perspective(1000px)_rotateX(10deg)_rotateY(-5deg)_scale(1.02)] max-sm:active:shadow-[0_20px_40px_rgba(234,179,8,0.3)] max-sm:active:z-50 border border-slate-100 max-sm:border-white/10 sm:hover:border-white/10 scroll-mt-20"
            >
              <service.icon className="absolute -bottom-10 -right-10 w-40 h-40 text-white/[0.03] rotate-12 opacity-0 max-sm:opacity-100 sm:group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-100 max-sm:bg-yellow-500 sm:group-hover:bg-yellow-500 flex items-center justify-center mb-6 sm:mb-8 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-slate-900" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 max-sm:text-white sm:group-hover:text-white transition-colors duration-300">{service.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 max-sm:text-slate-400 sm:group-hover:text-slate-400 leading-relaxed mb-6 sm:mb-8 transition-colors duration-300">{service.desc}</p>
                <div className="flex items-center text-yellow-600 max-sm:text-yellow-500 sm:group-hover:text-yellow-500 font-bold transition-all duration-300 max-sm:gap-2 sm:group-hover:gap-2">
                  Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative bg-white w-full max-w-lg rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden"
            >
              <button onClick={() => setSelectedService(null)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-20">
                <X className="w-6 h-6 text-slate-400" />
              </button>

              {selectedService.scene}

              <h4 className="text-3xl font-bold text-slate-900 mb-2">{selectedService.title}</h4>
              <div className="h-1.5 w-16 bg-yellow-500 rounded-full mb-6" />

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {selectedService.details}
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedService(null)}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-lg"
              >
                Got it
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}