import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Phone, MapPinned, Truck, Route, Brain, Quote } from 'lucide-react';
import { useRef, useState } from 'react';

const expertiseItems = [
  {
    icon: MapPinned,
    title: 'Pan-India Expertise',
    desc: 'Personally traversed every major route from Jammu to Kanyakumari and Bengal to Dwarka.',
    color: 'from-yellow-500/20 to-yellow-600/5',
    border: 'border-yellow-500/30',
    iconColor: 'text-yellow-500',
  },
  {
    icon: Route,
    title: 'Operational Mastery',
    desc: 'Deep, practical knowledge of national highways, terrain conditions, and interstate regulations.',
    color: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: Truck,
    title: 'Fleet Evolution',
    desc: 'Successfully transitioned from driving to managing a robust fleet of 10 to 14-wheel multi-axle vehicles.',
    color: 'from-emerald-500/20 to-emerald-600/5',
    border: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Brain,
    title: 'Strategic Leadership',
    desc: 'Expert in route optimization and fleet coordination, ensuring maximum operational efficiency across India.',
    color: 'from-purple-500/20 to-purple-600/5',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, rotateX: 25 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, type: 'spring' as const } },
};

/* ─── SECTION 1: Founder Hero ─── */
function FounderHero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const imgRotateY = useTransform(springScroll, [0, 0.5, 1], [-35, 0, 35]);
  const imgRotateX = useTransform(springScroll, [0, 0.5, 1], [15, 0, -15]);
  const imgZ = useTransform(springScroll, [0, 0.5, 1], [-150, 0, -150]);
  const imgScale = useTransform(springScroll, [0, 0.5, 1], [0.85, 1.05, 0.85]);
  const sectionOpacity = useTransform(springScroll, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={heroRef} style={{ opacity: sectionOpacity }} className="relative flex items-center pt-8 pb-4 sm:py-20 lg:min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-yellow-500/8 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-slate-500/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full perspective-1000">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center">

          {/* Left: 3D Founder Image */}
          <motion.div
            style={{ rotateY: imgRotateY, rotateX: imgRotateX, z: imgZ, scale: imgScale }}
            className="relative flex items-center justify-center transform-style-3d mt-4 sm:mt-0"
          >
            {/* Rotating ring glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] rounded-full border border-yellow-500/10 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full border border-dashed border-slate-700/30 pointer-events-none"
            />

            {/* Glow backdrop */}
            <div className="absolute w-[60%] h-[60%] bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-[240px] sm:max-w-sm mx-auto aspect-[3/4] rounded-3xl overflow-hidden border-2 border-slate-700/50 shadow-[0_30px_80px_-20px_rgba(234,179,8,0.25)] bg-slate-900 group">
              {/* Dummy Founder Photo - Replace src with actual founder photo when available */}
              <div className="w-full h-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop"
                  alt="Founder S. Mohan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback to UI avatar if Unsplash image fails to load
                    target.onerror = null; // Prevent infinite loop
                    target.src = "https://ui-avatars.com/api/?name=S+Mohan&background=eab308&color=0f172a&size=512";
                  }}
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              {/* Name on Image */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-yellow-500 text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase mb-1">Founder & Veteran</p>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">S. MOHAN</h2>
                  <div className="h-1 w-12 bg-yellow-500 rounded-full mt-2"></div>
                </motion.div>
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute top-4 right-4 bg-yellow-500 text-slate-900 px-3 py-1.5 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-wider shadow-lg"
              >
                35+ Years
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Bio & Details */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col justify-center perspective-1000"
          >
            <motion.div variants={fadeUp} className="mb-3 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-3 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></span>
                <span className="text-yellow-500 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Leadership</span>
              </div>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1.5">
                S. Mohan
              </h3>
              <p className="text-yellow-500 font-bold text-xs sm:text-base uppercase tracking-wider">
                Founder & Logistics Veteran
              </p>
            </motion.div>

            <motion.p variants={fadeUp} className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-8 max-w-xl">
              With over <span className="text-white font-bold">35 years</span> of on-ground experience, S. Mohan embodies the heart of Indian logistics. His journey is one of true grit—rising from a <span className="text-yellow-500 font-semibold">truck cleaner</span> to a <span className="text-yellow-500 font-semibold">fleet owner</span>.
            </motion.p>

            {/* Stats Row */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-2 sm:gap-4 mb-5 sm:mb-8">
              {[
                { value: '35+', label: 'Years' },
                { value: 'Pan', label: 'India' },
                { value: '14W', label: 'Fleet' },
              ].map((stat) => (
                <motion.div 
                  key={stat.label} 
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-slate-900/80 border border-slate-800 rounded-xl sm:rounded-2xl p-2 sm:p-4 text-center group hover:border-yellow-500/50 hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.2)] transition-all"
                >
                  <p className="text-lg sm:text-2xl md:text-3xl font-black text-yellow-500">{stat.value}</p>
                  <p className="text-[9px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <a
                href="tel:+919443363384"
                className="inline-flex items-center gap-2 sm:gap-3 bg-white text-slate-950 font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-yellow-500 transition-all group shadow-xl hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.4)] text-xs sm:text-base transform hover:-translate-y-1"
              >
                <Phone className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                +91 94433 63384
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── SECTION 2: Expertise with 3D Slide-In ─── */
function FounderExpertise() {
  const expertRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: expertRef,
    offset: ['start end', 'center center'],
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const slideY = useTransform(springScroll, [0, 1], [80, 0]); // Reduced gap significantly
  const slideRotateX = useTransform(springScroll, [0, 1], [40, 0]); // Enhanced 3D rotation
  const slideOpacity = useTransform(springScroll, [0, 0.4, 1], [0, 0.5, 1]);
  const slideScale = useTransform(springScroll, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={expertRef}
      style={{ y: slideY, rotateX: slideRotateX, opacity: slideOpacity, scale: slideScale }}
      className="relative pb-12 pt-4 sm:py-24 perspective-1000 transform-style-3d"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[150px] sm:h-[300px] bg-yellow-500/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="max-w-3xl mx-auto mb-10 sm:mb-16 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-transform duration-500"
        >
          <Quote className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 text-yellow-500/10" />
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed italic relative z-10 font-medium">
            "From cleaning trucks on the highways of Tamil Nadu to orchestrating a pan-India logistics network — every mile taught me something no textbook ever could."
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-slate-900 font-black text-xs sm:text-sm shadow-lg">SM</div>
            <div>
              <p className="text-white font-bold text-sm sm:text-base">S. Mohan</p>
              <p className="text-yellow-500/80 text-[10px] sm:text-xs uppercase tracking-widest font-bold">Founder</p>
            </div>
          </div>
        </motion.div>

        {/* Expertise Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Core <span className="text-yellow-500">Expertise</span>
          </h4>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 font-medium">Decades of real-world logistics mastery</p>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {expertiseItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60, rotateX: 25, rotateY: idx % 2 === 0 ? 15 : -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.8, type: 'spring' }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative group bg-gradient-to-br ${item.color} backdrop-blur-md border ${item.border} rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 cursor-default overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.15)]`}
              style={{
                transform: hoveredCard === idx ? 'perspective(1000px) rotateX(4deg) rotateY(-4deg) translateY(-8px)' : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              }}
            >
              {/* Background Icon */}
              <item.icon className="absolute -bottom-4 -right-4 w-28 h-28 sm:w-36 sm:h-36 text-white/[0.04] rotate-12 pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-all duration-700" />

              <div className="relative z-10 flex gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-900/80 border border-slate-700/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-inner">
                  <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.iconColor}`} />
                </div>
                <div>
                  <h5 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1.5">{item.title}</h5>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── MAIN EXPORT ─── */
export default function Founder() {
  return (
    <section id="founder" className="relative bg-slate-950 overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px]"></div>

      {/* Section 1: Founder Hero */}
      <FounderHero />

      {/* Section 2: Expertise (3D slide-in on scroll) */}
      <FounderExpertise />
    </section>
  );
}