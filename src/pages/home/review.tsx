import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Removed 'Map' as it was causing the unused-variable error
import { Star, Quote, ArrowRight, ArrowLeft, ClipboardList } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    { 
      id: 1,
      name: "TechCorp India", 
      text: "Oneroute revolutionized our supply chain. Their on-time delivery rate is unmatched and the service is incredible. They are our permanent logistics partner.", 
      rating: 5,
      area: "Across India",
      service: "Main City Delivery"
    },
    { 
      id: 2,
      name: "Global Exports", 
      text: "Safe, secure, and very reliable. We move our goods across the state easily. Oneroute makes long-distance transport completely worry-free for our business.", 
      rating: 5,
      area: "Within Tamil Nadu",
      service: "Express Transport"
    },
    { 
      id: 3,
      name: "Retail Solutions", 
      text: "The best storage and road transport combo we've experienced. Highly recommended for any business looking to move products to different states.", 
      rating: 4,
      area: "All South Indian States",
      service: "Safe Warehousing"
    },
    { 
      id: 4,
      name: "AutoMotive Spares", 
      text: "We deal with large machinery and strict timelines. Oneroute's vehicle management is flawless. They deliver exactly when they promise, every single time.", 
      rating: 5,
      area: "State-wide Coverage",
      service: "Large Load Transport"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const intervalId = setInterval(() => {
      nextReview();
    }, 2500);
    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <section id="reviews" className="py-24 bg-slate-50 relative overflow-hidden flex items-center min-h-[80vh]">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-slate-200 rounded-full blur-[120px] opacity-60"></div>
        <Quote className="absolute -top-10 -left-10 w-96 h-96 text-slate-900/[0.03] rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side - Typography & Controls */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 mb-6">
                <span className="text-sm font-bold tracking-widest uppercase">Client Success</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                Trusted by <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
                  Industry Leaders.
                </span>
              </h3>
              
              <p className="text-slate-600 text-lg mb-10 max-w-md">
                Don't just take our word for it. See how we've helped businesses simplify their transport and achieve perfect delivery records.
              </p>

              {/* Custom Navigation Buttons */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={prevReview}
                  className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-yellow-500 hover:text-yellow-600 hover:bg-yellow-50 transition-all active:scale-95 z-20"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextReview}
                  className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-slate-900 transition-all shadow-xl shadow-slate-900/20 active:scale-95 z-20"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - The Interactive Stack */}
          <div 
            className="lg:col-span-7 h-[450px] relative perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="popLayout">
              {reviews.map((review, index) => {
                const relativeIndex = (index - currentIndex + reviews.length) % reviews.length;
                if (relativeIndex > 2) return null;

                return (
                  <motion.div
                    key={review.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 100 }}
                    animate={{ 
                      opacity: 1 - relativeIndex * 0.2, 
                      scale: 1 - relativeIndex * 0.05, 
                      y: relativeIndex * 30, 
                      x: relativeIndex * 20, 
                      zIndex: reviews.length - relativeIndex 
                    }}
                    exit={{ opacity: 0, scale: 1.1, x: -100, transition: { duration: 0.3 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute top-0 left-0 w-full max-w-lg origin-top"
                  >
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden group">
                      
                      <div className="absolute top-8 right-8 w-24 h-24 border-4 border-green-500/20 rounded-full flex items-center justify-center rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <span className="text-green-500/30 font-bold tracking-widest text-sm -rotate-12">VERIFIED</span>
                      </div>

                      <div className="flex justify-between items-start mb-8 pb-6 border-b border-slate-100 border-dashed">
                        <div>
                          <div className="flex gap-1 mb-2">
                            {[...Array(5)].map((_, idx) => (
                              <Star key={idx} className={`w-4 h-4 ${idx < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-slate-200'}`} />
                            ))}
                          </div>
                          <h5 className="font-bold text-slate-900 text-xl">{review.name}</h5>
                        </div>
                        <Quote className="w-10 h-10 text-slate-100" />
                      </div>

                      <p className="text-slate-600 text-lg leading-relaxed mb-10 italic">
                        "{review.text}"
                      </p>

                      <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-between border border-slate-100">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase mb-1">Coverage Area</span>
                          <span className="text-sm font-semibold text-slate-700">{review.area}</span>
                        </div>
                        <div className="h-8 w-px bg-slate-200"></div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase mb-1">Service Type</span>
                          <span className="text-sm font-medium text-slate-700">{review.service}</span>
                        </div>
                        <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
                        
                        <div className="hidden sm:flex flex-col items-end">
                          <ClipboardList className="w-6 h-6 text-slate-400 mb-1" />
                          <span className="text-[8px] font-mono text-slate-400">SRV-00{review.id}</span>
                        </div>
                      </div>
                      
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}