
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Map } from 'lucide-react';

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' as const, stiffness: 100, damping: 20 } }
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { 
      duration: 5, 
      repeat: Infinity, 
      ease: "easeInOut" as const
    }
  }
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-16 sm:pt-24 sm:pb-24 md:pt-24 md:pb-32 min-h-screen flex items-center bg-slate-950 text-white overflow-hidden font-sans">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"
      ></motion.div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-yellow-500/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-slate-500/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>



      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
          
          {/* --- LEFT COLUMN: TYPOGRAPHY & CTA --- */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden" 
            animate="visible"
            className="max-w-3xl pt-4 lg:pt-0"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 leading-[1.1]">
              Connecting Every <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Corner of India.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 md:mb-10 max-w-lg leading-relaxed">
              Oneroute is India's premier logistics network. From the Himalayas to Kanyakumari, we bridge the gap between your business and your customers with unparalleled reliability.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#services-page" className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] flex items-center justify-center gap-2 group">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-transparent border border-slate-700 text-white font-bold rounded-xl hover:border-yellow-500 hover:text-yellow-500 transition-all flex items-center justify-center gap-2">
                <Map className="w-5 h-5" />
                View Contact
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 md:mt-12 flex flex-wrap items-center gap-6 md:gap-8 border-t border-slate-800 pt-6 md:pt-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-yellow-500" strokeWidth={1.5} />
                <div>
                  <p className="text-white font-bold text-base md:text-lg leading-none">100%</p>
                  <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">Safe Transit</p>
                </div>
              </div>
              <div className="w-px h-8 md:h-10 bg-slate-800 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <Truck className="w-7 h-7 md:w-8 md:h-8 text-yellow-500" strokeWidth={1.5} />
                <div>
                  <p className="text-white font-bold text-base md:text-lg leading-none">2,500+</p>
                  <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">Active Fleet</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT COLUMN: PAN-INDIA INTERACTIVE MAP --- */}
          {/* Removed 'hidden' so it displays on all screens. Adjusted height for mobile. */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] flex items-center justify-center w-full mt-8 lg:mt-0">
            
            <motion.div 
              variants={floatingAnimation}
              animate="animate"
              className="relative z-20 w-full h-full max-w-lg lg:max-w-none bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-3xl lg:rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] flex flex-col p-4 md:p-6 overflow-visible lg:overflow-hidden"
            >
              {/* Header Box */}
              <div className="flex justify-between items-center z-30 mb-4 md:mb-6 bg-slate-950/80 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-800/80 shadow-lg">
                <div>
                  <h4 className="text-yellow-500 font-bold text-[9px] md:text-[10px] tracking-widest uppercase mb-1">Live Control Center</h4>
                  <p className="text-white font-bold text-sm md:text-lg leading-none">Pan-India Network</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-1.5 w-1.5 md:h-2 md:w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-green-500"></span>
                  </span>
                  <span className="text-slate-400 text-[10px] md:text-xs font-mono">SYNCED</span>
                </div>
              </div>

              {/* Map SVG Container */}
              <div className="relative flex-grow w-full flex items-center justify-center overflow-hidden rounded-xl md:rounded-2xl border border-slate-800/30">
                <div className="relative w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] aspect-[4/5]">
                  <svg
                    viewBox="0 0 241 260"
                    className="w-full h-full"
                  >
                    {/* Base Map */}
                    <polygon
                      points="227.822,63.335 215.884,64.816 195.815,80.809 197.159,87.984 179.343,90.9 171.988,87.529 170.643,79.845 
                      163.422,80.02 165.128,93.27 146.79,93.703 121.821,86.002 100.271,74.179 106.398,62.15 90.884,51.603 89.61,41.434 93.782,43.975 
                      98.261,41.155 93.118,31.532 102.741,22.739 104.772,15.626 97.113,12.953 82.998,15.439 68.397,2 52.291,3.126 47.145,9.69 
                      58.727,18.336 55.858,21.297 52.997,21.914 52.814,35.434 63.024,41.67 34.41,80.535 22.268,79.373 14.591,89.807 
                      26.46,109.512 17.324,113.75 7.186,112.018 2.289,116.552 10.581,125.209 9.784,132.863 23.954,145.028 
                      24.25,144.8 37.85,140.7 39.582,147.898 39.855,169.221 58.216,223.805 62.682,232.394 68.741,252.441 
                      73.594,258 82.205,257.339 83.845,251.986 98.311,235.424 98.311,233.897 98.015,226.243 
                      98.357,225.15 102.366,211.822 101.957,211.572 102.116,211.185 
                      102.366,211.822 102.207,211.048 100.157,197.766 
                      101.957,191.866 134.397,168.287 140.16,160.633 143.737,154.984 
                      153.578,152.455 162.076,137.579 167.497,134.252 
                      175.448,136.394 168.5,105.412 168.181,93.908 
                      177.999,95.798 179.594,102.428 184.265,104.774 
                      200.826,105.002 199.186,109.284 200.621,116.712 
                      204.198,130.198 210.167,121.153 208.959,113.112 
                      214.745,113.727 218.96,99.625 222.879,88.44 
                      234.451,81.128 238.711,74.794"
                      fill="#475569"
                    />

                    {/* Animated Golden Outline */}
                    <motion.polygon
                      points="227.822,63.335 215.884,64.816 195.815,80.809 197.159,87.984 179.343,90.9 171.988,87.529 170.643,79.845 
                      163.422,80.02 165.128,93.27 146.79,93.703 121.821,86.002 100.271,74.179 106.398,62.15 90.884,51.603 89.61,41.434 93.782,43.975 
                      98.261,41.155 93.118,31.532 102.741,22.739 104.772,15.626 97.113,12.953 82.998,15.439 68.397,2 52.291,3.126 47.145,9.69 
                      58.727,18.336 55.858,21.297 52.997,21.914 52.814,35.434 63.024,41.67 34.41,80.535 22.268,79.373 14.591,89.807 
                      26.46,109.512 17.324,113.75 7.186,112.018 2.289,116.552 10.581,125.209 9.784,132.863 23.954,145.028 
                      24.25,144.8 37.85,140.7 39.582,147.898 39.855,169.221 58.216,223.805 62.682,232.394 68.741,252.441 
                      73.594,258 82.205,257.339 83.845,251.986 98.311,235.424 98.311,233.897 98.015,226.243 
                      98.357,225.15 102.366,211.822 101.957,211.572 102.116,211.185 
                      102.366,211.822 102.207,211.048 100.157,197.766 
                      101.957,191.866 134.397,168.287 140.16,160.633 143.737,154.984 
                      153.578,152.455 162.076,137.579 167.497,134.252 
                      175.448,136.394 168.5,105.412 168.181,93.908 
                      177.999,95.798 179.594,102.428 184.265,104.774 
                      200.826,105.002 199.186,109.284 200.621,116.712 
                      204.198,130.198 210.167,121.153 208.959,113.112 
                      214.745,113.727 218.96,99.625 222.879,88.44 
                      234.451,81.128 238.711,74.794"
                      fill="none"
                      stroke="#EAB308"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 6, ease: "easeInOut" as const,  repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
                      style={{ filter: "drop-shadow(0 0 12px #EAB308)" }}
                    />
                  </svg>
                </div>
              </div>

              {/* Floating Operations Badge - Adjusted for mobile centering */}
              <motion.div
                initial={{ opacity: 0, x: 0, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.6, type: 'spring' }}
                className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-left-10 -bottom-5 lg:bottom-16 z-30 bg-slate-800/95 backdrop-blur-xl border border-slate-600 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl flex items-center gap-3 md:gap-4 w-11/12 sm:w-auto"
              >
              
                
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}