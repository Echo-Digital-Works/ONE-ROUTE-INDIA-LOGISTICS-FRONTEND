import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, User } from 'lucide-react';
import { useRef } from 'react';

export default function Contact() {
  const mailId = "contact@onerouteindia.com";
  const sectionRef = useRef(null);

  // Scroll-based 3D rotation logic
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // WhatsApp Integration Function
  const openWhatsApp = (num: string) => {
    const message = encodeURIComponent("Hello One Route India Logistics, I'm interested in your services.");
    window.open(`https://wa.me/${num}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-24 bg-black text-white relative overflow-hidden scroll-mt-20">
      {/* Background FX */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,179,8,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-4"
          >
            CONTACT <span className="text-yellow-500">US</span>
          </motion.h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* REGISTERED OFFICE GRID (With 3D Image) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 mb-10 sm:mb-16 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            
            {/* Left Column: 3D Image Animation */}
            <div className="relative perspective-1000 flex items-center justify-center py-10">
              {/* Glowing Aura behind image */}
              <div className="absolute w-64 h-64 bg-yellow-500/20 rounded-full blur-[80px]"></div>
              
              <motion.div
                style={{ rotateY, y: floatY }}
                whileHover={{ scale: 1.05, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative z-10 w-full max-w-sm aspect-square rounded-3xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(234,179,8,0.2)] bg-slate-800"
              >
                {/* Replace with your actual HQ Image path */}
                <img 
                  src="/images/lorry image 9.jpeg" 
                  alt="Headquarters" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay with Logo or Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <p className="text-yellow-500 font-black text-xs uppercase tracking-widest mb-1">Main Hub</p>
                    <h4 className="text-xl font-bold mb-1">OneRoute India Logistics</h4>
                    <p className="text-[8px] sm:text-[10px] text-slate-300 font-bold tracking-[0.15em] uppercase">Driven by Trust, Delivered with Care</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Registered Office Details */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs font-bold uppercase tracking-widest">
                Registered Office
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">Head Quarters</h3>
    
              <div className="flex gap-4 items-start">
                <MapPin className="text-yellow-500 shrink-0 mt-1" size={24} />
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  19, Muthuswamy Street,<br />
                  Nerungipettai (Post), Anthiyur (Taluk),<br />
                  Erode District - 638311
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 pt-4 border-t border-white/10">
                {/* Founder 1 */}
                <div className="space-y-1">
                   <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <User size={16} className="text-yellow-500" /> Founder
                   </div>
                   <div className="flex flex-wrap items-center gap-4">
                     <p className="font-bold">Prabu Mohan B.E</p>
                     <button onClick={() => openWhatsApp("919894273384")} className="flex items-center gap-2 text-yellow-500 hover:text-white transition-all hover:scale-110 active:scale-95 group text-sm">
                        <MessageSquare size={16} className="ml-1" />
                     </button>
                   </div>
                </div>

                {/* Founder 2 */}
                <div className="space-y-1">
                   <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <ShieldCheck size={16} className="text-yellow-500" /> Founder
                   </div>
                   <div className="flex flex-wrap items-center gap-4">
                     <p className="font-bold text-sm sm:text-base">Durairaj Subramani (BBA) Retired Army </p>
                     <button onClick={() => openWhatsApp("917708992365")} className="flex items-center gap-2 text-yellow-500 hover:text-white transition-all hover:scale-110 active:scale-95 group text-sm">
                        <MessageSquare size={16} className="ml-1" />
                     </button>
                   </div>
                </div>
              </div>

              <div className="bg-yellow-500/5 p-4 rounded-xl border border-yellow-500/20 inline-block">
                <p className="text-xs text-yellow-500 uppercase font-black tracking-widest mb-1">GST Number</p>
                <p className="text-white font-mono text-lg">33ABLFM9035H2Z2</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BRANCH OFFICES HEADER */}
        <div className="mb-8 text-left">
          <h3 className="text-3xl font-bold text-white mb-2">Branch Offices</h3>
          <p className="text-yellow-500 text-xs font-black uppercase tracking-[0.2em]">Strategic Logistics Hubs</p>
        </div>

        {/* BRANCH OFFICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8">
          {/* Branch 1: Chennai */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group bg-slate-900/50 backdrop-blur-xl border border-white/10 p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 sm:w-14 sm:h-14 bg-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-black shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <MapPin size={22} />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold">Chennai</h4>
            </div>
            
            <p className="text-slate-400 mb-4 sm:mb-8 leading-relaxed text-sm sm:text-base">
              12/10 Market Farm First Street,<br />
              New Washermenpet, Chennai - 600081
            </p>

            <div className="space-y-3 sm:space-y-4">
              <a href="tel:8124399499" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-yellow-500 hover:text-black transition-all group/btn text-sm sm:text-base">
                <Phone className="group-hover/btn:animate-bounce" />
                <span className="font-bold">+91 81243 99499</span>
              </a>
              <a href={`mailto:${mailId}`} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-yellow-500 hover:text-black transition-all group/btn text-sm sm:text-base">
                <Mail className="group-hover/btn:animate-pulse" />
                <span className="font-bold">{mailId}</span>
              </a>
            </div>
          </motion.div>

          {/* Branch 2: Coimbatore */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group bg-slate-900/50 backdrop-blur-xl border border-white/10 p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 sm:w-14 sm:h-14 bg-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-black shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <MapPin size={22} />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold">Coimbatore</h4>
            </div>
            
            <p className="text-slate-400 mb-4 sm:mb-8 leading-relaxed text-sm sm:text-base">
              437/3 Mariamman Kovil Thottam,<br />
              Sangothipalayam, Kaniyur,<br />
              Coimbatore - 641659
            </p>

            <div className="space-y-3 sm:space-y-4">
              <a href="tel:8489399499" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-yellow-500 hover:text-black transition-all group/btn text-sm sm:text-base">
                <Phone className="group-hover/btn:animate-bounce" />
                <span className="font-bold">+91 84893 99499</span>
              </a>
              <a href={`mailto:${mailId}`} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-yellow-500 hover:text-black transition-all group/btn text-sm sm:text-base">
                <Mail className="group-hover/btn:animate-pulse" />
                <span className="font-bold">{mailId}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* SUPPORT INDICATOR */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center text-slate-500 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold uppercase tracking-widest">Available 24/7 for support</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}