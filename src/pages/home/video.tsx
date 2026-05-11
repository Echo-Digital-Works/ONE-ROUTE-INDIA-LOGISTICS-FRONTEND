import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { X, Image as ImageIcon, Maximize2, History } from 'lucide-react';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring' } }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Verified Lorry/Truck Image URLs
  const mainShowcase: Array<{ id: number; img: string; title?: string; desc?: string; tag?: string }> = [
    { 
      id: 1, 
      img: '/images/download (2).jpg' 
    },
    { 
      id: 2, 
      img: '/images/download (3).jpg' 
    },
    { 
      id: 3, 
      img: '/images/download (4).jpg' 
    }
  ];

  const collageFleet = useMemo(() => [
    { url: '/images/download (2).jpg', span: 'md:col-span-2 md:row-span-2' },
    { url: '/images/download (3).jpg', span: 'md:col-span-1 md:row-span-1' },
    { url: '/images/download (4).jpg', span: 'md:col-span-1 md:row-span-2' },
    { url: '/images/download (5).jpg', span: 'md:col-span-1 md:row-span-1' },
    { url: '/images/download (6).jpg', span: 'md:col-span-2 md:row-span-1' },
    { url: '/images/images (2).jpg', span: 'md:col-span-1 md:row-span-1' },
    { url: '/images/download (3).jpg', span: 'md:col-span-1 md:row-span-2' },
    { url: '/images/download (5).jpg', span: 'md:col-span-2 md:row-span-2' },
  ], []);

  return (
    <>
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Background Ambient Light */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-sm font-bold text-yellow-500 tracking-widest uppercase mb-2">
              Our Legacy & Fleet
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Tracing the <span className="text-yellow-500">Route</span> of History.
            </motion.h3>
          </motion.div>

          {/* Main Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12"
          >
            {/* Big Feature Lorry */}
            <motion.div 
              variants={scaleIn} 
              onClick={() => setActiveImage(mainShowcase[0].img)}
              className="lg:col-span-7 group relative rounded-3xl overflow-hidden h-[450px] lg:h-[600px] cursor-pointer border border-slate-800 bg-slate-900"
            >
              {/* Loading Spinner/Pulse */}
              <div className="absolute inset-0 bg-slate-800 animate-pulse group-hover:hidden" />
              <img 
                src={mainShowcase[0].img} 
                alt="Heritage Lorry" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                onLoad={(e) => (e.currentTarget.previousElementSibling as HTMLElement).style.display = 'none'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 z-10">
                {mainShowcase[0].tag && <span className="px-3 py-1 bg-yellow-500 text-slate-900 text-[10px] font-bold rounded-full uppercase mb-4 inline-block">{mainShowcase[0].tag}</span>}
                {mainShowcase[0].title && <h4 className="text-3xl font-bold text-white mb-2">{mainShowcase[0].title}</h4>}
                {mainShowcase[0].desc && <p className="text-slate-300 max-w-md">{mainShowcase[0].desc}</p>}
              </div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={20} />
              </div>
            </motion.div>

            {/* Side Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {mainShowcase.slice(1).map((item) => (
                <motion.div 
                  key={item.id}
                  variants={scaleIn}
                  onClick={() => setActiveImage(item.img)}
                  className="relative group rounded-3xl overflow-hidden h-[287px] cursor-pointer border border-slate-800 bg-slate-900"
                >
                  <div className="absolute inset-0 bg-slate-800 animate-pulse" />
                  <img 
                    src={item.img} 
                    alt="Fleet Lorry" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    onLoad={(e) => (e.currentTarget.previousElementSibling as HTMLElement).style.display = 'none'}
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-slate-950/90 to-transparent z-10">
                    {item.tag && <span className="text-yellow-500 text-[10px] font-bold tracking-widest uppercase mb-1">{item.tag}</span>}
                    {item.title && <h4 className="text-xl font-bold text-white">{item.title}</h4>}
                    {item.desc && <p className="text-sm text-slate-300 mt-1 line-clamp-2">{item.desc}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section Gallery Button */}
          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsGalleryOpen(true)}
              className="bg-yellow-500 text-slate-900 px-6 py-4 rounded-2xl shadow-[0_10px_30px_rgba(234,179,8,0.3)] flex items-center gap-3 font-bold group"
            >
              <ImageIcon className="group-hover:rotate-12 transition-transform" />
              <span>Explore Gallery</span>
              <div className="w-6 h-6 bg-slate-900/10 rounded-full flex items-center justify-center text-xs">
                {mainShowcase.length + collageFleet.length}
              </div>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Full Screen Collage Gallery */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-slate-950 flex flex-col overflow-y-auto"
          >
            <div className="sticky top-0 z-20 bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-6 px-6">
              <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <History className="text-yellow-500" /> Logistics Heritage
                  </h2>
                </div>
                <button 
                  onClick={() => setIsGalleryOpen(false)}
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6 md:p-12 max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
                {collageFleet.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setActiveImage(item.url)}
                    className={`${item.span} relative rounded-2xl overflow-hidden cursor-zoom-in group border border-white/5 bg-slate-900`}
                  >
                    <div className="absolute inset-0 bg-slate-800 animate-pulse" />
                    <img 
                      src={item.url} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      alt="Lorry collage"
                      onLoad={(e) => (e.currentTarget.previousElementSibling as HTMLElement).style.display = 'none'}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoom Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={activeImage} 
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
            />
            <div className="absolute top-10 right-10 text-white/50 cursor-pointer hover:text-white">
              <X size={40} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}