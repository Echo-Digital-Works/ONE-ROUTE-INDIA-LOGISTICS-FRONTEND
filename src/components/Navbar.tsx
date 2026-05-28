import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, MessageSquareText, Truck, Menu } from 'lucide-react';

const PARTICLE_COUNT = 20;
const COLORS = ['bg-yellow-500', 'bg-blue-500', 'bg-green-500', 'bg-red-500'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', query: '' });

  const confettiParticles = useMemo(() => {
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        id: i,
        initialX: (i * 20) - 200,
        targetX: (i * 30) - 300,
        duration: 2 + (i % 3),
        color: COLORS[i % COLORS.length]
      });
    }
    return particles;
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*OneRoute India Logistics - New Enquiry Notification*

*Name:* ${formData.name}
*Mobile:* ${formData.mobile}
*Email:* ${formData.email}
*Requirement:* ${formData.query}`;

    const whatsappUrl = `https://wa.me/917708992365?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({ name: '', mobile: '', email: '', query: '' });
    }, 7000);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Founder', href: '#founder' },
    { name: 'Services', href: '#services-page' },
    { name: 'Reviews', href: '#clients' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
        className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm shadow-md"
      >
        <div className="w-full mx-auto px-3 sm:px-6 lg:px-12 xl:px-24 relative">
          <div className="flex justify-between h-14 sm:h-20 items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex items-center gap-2 sm:gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {/* --- 3D NON-INVERTING ROTATING LOGO CONTAINER --- */}
              <div className="w-8 h-8 sm:w-12 sm:h-12 relative flex-shrink-0 [perspective:1000px]">
                <motion.div 
                  className="w-full h-full relative"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: [0, 360] }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  {/* FRONT SIDE OF LOGO */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 border-2 border-yellow-500 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
                  >
                    <img
                      src="/images/oneroute-logo.jpeg"
                      alt="OneRoute Logo"
                      className="w-full h-full object-contain p-0.5 rounded-full bg-white"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://ui-avatars.com/api/?name=O&background=eab308&color=0f172a";
                      }}
                    />
                  </div>

                  {/* BACK SIDE OF LOGO */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 border-2 border-yellow-500 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    <img
                      src="/images/oneroute-logo.jpeg"
                      alt="OneRoute Logo"
                      className="w-full h-full object-contain p-0.5 rounded-full bg-white"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://ui-avatars.com/api/?name=O&background=eab308&color=0f172a";
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-[14px] sm:text-xl md:text-2xl tracking-tight text-white whitespace-nowrap leading-tight">
                  OneRoute <span className="text-yellow-500 font-semibold">India Logistics</span>
                </span>
                <motion.div
                  className="text-[6.5px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase mt-0.5 sm:mt-0 flex"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.3 } }
                  }}
                >
                  {"Driven by Trust, Delivered with Care".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 5, filter: "blur(2px)", color: "#94a3b8" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)", color: "#cbd5e1" }
                      }}
                      whileHover={{ color: "#eab308", y: -2, transition: { duration: 0.1 } }}
                      className="inline-block cursor-default"
                      style={{ whiteSpace: 'pre' }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2, color: '#eab308' }}
                  className="text-slate-200 transition-colors font-medium cursor-pointer text-sm lg:text-base"
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.button
                whileHover={{ scale: 1.05, rotateX: 10, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="bg-yellow-500 text-slate-900 px-4 lg:px-6 py-2 rounded-full font-bold shadow-lg shadow-yellow-500/20 flex items-center gap-2 hover:bg-yellow-400 transition-all text-sm lg:text-base"
              >
                <MessageSquareText size={18} />
                Enquiry
              </motion.button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden items-center gap-2 ml-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="bg-yellow-500 text-slate-900 px-2.5 py-1 rounded-full font-bold shadow-lg shadow-yellow-500/20 flex items-center gap-1 text-[10px]"
              >
                <MessageSquareText size={12} />
                Enquiry
              </motion.button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-1.5 rounded-lg bg-white/10 border border-white/20 flex-shrink-0"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* --- STATIC STRIP --- */}
        <div className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-yellow-500/20 py-1.5 sm:py-2 shadow-lg relative select-none">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 grid grid-cols-2 text-center items-center divide-x divide-yellow-500/20">
            <div className="flex items-center justify-center gap-3 px-2">
              <span className="text-[10px] sm:text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 uppercase tracking-[0.2em] drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                Part of Magizhini Groups
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 px-2">
              <span className="text-[10px] sm:text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 uppercase tracking-[0.2em] drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                Sri Sitheshwaran Transport
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-slate-800 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-slate-200 hover:text-yellow-500 hover:bg-slate-800/50 rounded-xl transition-all font-medium text-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSubmitted && setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.3, rotateY: -45, z: -1000 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotateY: 45 }}
              transition={{ type: 'spring', damping: 15, stiffness: 80 }}
              className="relative w-full max-w-lg bg-slate-900 border border-slate-700 p-6 sm:p-8 rounded-[2rem] sm:rounded-[3rem] shadow-[0_0_50px_rgba(234,179,8,0.15)] perspective-1000 overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {!isSubmitted ? (
                <>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-white transition-colors z-30 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-600"
                  >
                    <X size={20} />
                  </button>

                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">Quick Enquiry</h3>
                    <p className="text-slate-400 mb-6 sm:mb-8 font-medium text-sm sm:text-base">Ready to ship? Fill the details below.</p>

                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.2em] pl-1">Full Name</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-800/40 border border-slate-700 rounded-xl sm:rounded-2xl px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:border-yellow-500 transition-all shadow-inner text-sm sm:text-base"
                          placeholder="Your Name"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.2em] pl-1">Mobile</label>
                          <input
                            required
                            type="tel"
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            className="w-full bg-slate-800/40 border border-slate-700 rounded-xl sm:rounded-2xl px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:border-yellow-500 transition-all shadow-inner text-sm sm:text-base"
                            placeholder="+91..."
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.2em] pl-1">Email</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-slate-800/40 border border-slate-700 rounded-xl sm:rounded-2xl px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:border-yellow-500 transition-all shadow-inner text-sm sm:text-base"
                            placeholder="mail@company.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.2em] pl-1">Your Requirement</label>
                        <textarea
                          required
                          rows={3}
                          value={formData.query}
                          onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                          className="w-full bg-slate-800/40 border border-slate-700 rounded-xl sm:rounded-2xl px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:border-yellow-500 transition-all shadow-inner resize-none text-sm sm:text-base"
                          placeholder="Cargo details or destination..."
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02, translateZ: 30, backgroundColor: '#fbbf24' }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-yellow-500 text-slate-900 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 mt-3 sm:mt-4 text-sm sm:text-base"
                      >
                        <Send size={20} />
                        Get Quote Now
                      </motion.button>
                    </form>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative text-center py-10 flex flex-col items-center justify-center overflow-hidden"
                >
                  {confettiParticles.map((p) => (
                    <motion.div
                      key={p.id}
                      initial={{ y: -50, x: p.initialX, rotate: 0, opacity: 1 }}
                      animate={{ y: 500, x: p.targetX, rotate: 720, opacity: 0 }}
                      transition={{ duration: p.duration, repeat: Infinity, ease: "easeOut" }}
                      className={`absolute w-3 h-3 rounded-sm z-0 ${p.color}`}
                    />
                  ))}

                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1.2, rotate: 0 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                    className="relative z-10 bg-green-500/20 p-6 rounded-full border border-green-500/30 mb-8 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                  >
                    <CheckCircle2 size={100} className="text-green-500 animate-pulse" />
                  </motion.div>

                  <div className="relative z-10 space-y-4">
                    <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter">
                      Connections Made!
                    </h3>
                    <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full" />
                    <p className="text-slate-300 text-lg sm:text-xl font-medium leading-relaxed px-4">
                      Thank you for connecting with us, <br />
                      <span className="text-yellow-500 font-black text-xl sm:text-2xl">{formData.name}!</span>
                    </p>
                  </div>

                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-0 right-10 text-slate-700/30 -z-10"
                  >
                    <Truck size={120} />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}