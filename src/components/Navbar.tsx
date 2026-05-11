import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, MessageSquareText, Truck, Package } from 'lucide-react';

// FIX: Generate static data OUTSIDE the component or use a fixed seed
// This ensures the function is pure because it doesn't calculate randoms during render.
const PARTICLE_COUNT = 20;
const COLORS = ['bg-yellow-500', 'bg-blue-500', 'bg-green-500', 'bg-red-500'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', query: '' });

  // FIXED: We generate the random values once and keep them stable.
  // To satisfy strict "purity" rules, we use a dependency-free useMemo.
  const confettiParticles = useMemo(() => {
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        id: i,
        // We use a pseudo-random distribution based on index to keep it "pure"
        // but still looking random.
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
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({ name: '', mobile: '', email: '', query: '' });
    }, 7000);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
        className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl shadow-lg shadow-yellow-500/30">
                R
              </div>
              <span className="font-bold text-2xl tracking-wider text-white">
                OneRoute <span className="text-yellow-500">India Logistics</span>
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-6">
              {['Home', 'About', 'Founder', 'Services', 'Reviews', 'Contact'].map((item) => (
                <motion.a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  whileHover={{ y: -2, color: '#eab308' }}
                  className="text-slate-200 transition-colors font-medium"
                >
                  {item}
                </motion.a>
              ))}

              <motion.button
                whileHover={{ scale: 1.05, rotateX: 10, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="bg-yellow-500 text-slate-900 px-6 py-2 rounded-full font-bold shadow-lg shadow-yellow-500/20 flex items-center gap-2 hover:bg-yellow-400 transition-all"
              >
                <MessageSquareText size={18} />
                Enquiry
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

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
              className="relative w-full max-w-lg bg-slate-900 border border-slate-700 p-8 rounded-[3rem] shadow-[0_0_50px_rgba(234,179,8,0.15)] perspective-1000 overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {!isSubmitted ? (
                <>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors z-10"
                  >
                    <X size={24} />
                  </button>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Quick Enquiry</h3>
                    <p className="text-slate-400 mb-8 font-medium">Ready to ship? Fill the details below.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.2em] pl-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-slate-800/40 border border-slate-700 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-all shadow-inner"
                          placeholder="Your Name"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.2em] pl-1">Mobile</label>
                          <input 
                            required
                            type="tel" 
                            value={formData.mobile}
                            onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                            className="w-full bg-slate-800/40 border border-slate-700 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-all shadow-inner"
                            placeholder="+91..."
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.2em] pl-1">Email</label>
                          <input 
                            required
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-slate-800/40 border border-slate-700 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-all shadow-inner"
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
                          onChange={(e) => setFormData({...formData, query: e.target.value})}
                          className="w-full bg-slate-800/40 border border-slate-700 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-all shadow-inner resize-none"
                          placeholder="Cargo details or destination..."
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02, translateZ: 30, backgroundColor: '#fbbf24' }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-yellow-500 text-slate-900 py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 mt-4"
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
                      initial={{ 
                        y: -50, 
                        x: p.initialX, 
                        rotate: 0, 
                        opacity: 1 
                      }}
                      animate={{ 
                        y: 500, 
                        x: p.targetX, 
                        rotate: 720, 
                        opacity: 0 
                      }}
                      transition={{ 
                        duration: p.duration, 
                        repeat: Infinity, 
                        ease: "easeOut" 
                      }}
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
                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter">
                      Connections Made!
                    </h3>
                    <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full" />
                    <p className="text-slate-300 text-xl font-medium leading-relaxed px-4">
                      Thank you for connecting with us, <br />
                      <span className="text-yellow-500 font-black text-2xl">{formData.name}!</span>
                    </p>
                    <p className="text-slate-400 text-sm italic pt-4">
                      OneRoute India control team will reach you shortly.
                    </p>
                  </div>

                  <motion.div 
                    animate={{ y: [0, -20, 0] }} 
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-0 right-10 text-slate-700/30 -z-10"
                  >
                    <Truck size={120} />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 20, 0] }} 
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-0 left-0 text-slate-700/20 -z-10"
                  >
                    <Package size={150} />
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