import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Shield, GraduationCap } from 'lucide-react';
import { useRef } from 'react';

// --- TYPES ---
interface FounderData {
  name: string;
  degree: string;
  phone: string;
  bio: string;
  tag: string | null;
}

interface FounderCardProps {
  founder: FounderData;
  index: number;
}

const FounderCard = ({ founder, index }: FounderCardProps) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef(null);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center sticky top-0 overflow-hidden"
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-20%" }}
          transition={{ duration: 0.8, type: 'spring' }}
          className={`flex flex-col justify-center z-20 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <div className="relative inline-flex items-center mb-6 self-start">
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-500"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-500"></div>
            <div className="border border-slate-700 px-6 py-2 bg-slate-900/80 backdrop-blur-md">
              <span className="font-bold text-yellow-500 tracking-widest uppercase text-xs">Leadership</span>
            </div>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black mb-2 text-white tracking-tighter">
            {founder.name}
          </h2>
          
          <div className="flex items-center gap-4 mb-8 text-slate-400">
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-md">
              <GraduationCap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium">{founder.degree}</span>
            </div>
            {founder.tag && (
              <div className="flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
                <Shield className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-bold text-yellow-500 uppercase">{founder.tag}</span>
              </div>
            )}
          </div>

          <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-xl">
            {founder.bio}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a href={`tel:${founder.phone}`} className="inline-flex items-center gap-4 bg-white text-slate-950 font-bold px-6 py-3 rounded-full hover:bg-yellow-500 transition-all group">
              <Phone className="w-5 h-5" />
              {founder.phone}
            </a>
            
            {/* RESOLVED: 'Play' icon is now used here */}
            
          </div>
        </motion.div>

        {/* Right Content - 3D Visual */}
        <motion.div 
          style={{ rotateX }}
          className={`relative h-[500px] w-full flex items-center justify-center perspective-1000 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <div className={`absolute w-[80%] h-[80%] rounded-full blur-3xl opacity-20 ${isEven ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
          
          <div className="relative z-10 w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl bg-slate-900">
            <img 
              src="/images.png" 
              alt={founder.name}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default function Founder() {
  const founders: FounderData[] = [
    {
      name: "Prabu Mohan",
      degree: "B.E",
      phone: "+91 9894273384",
      bio: "Leading Oneroute's technical vision with engineering precision, focusing on supply chain efficiency.",
      tag: null
    },
    {
      name: "Durairaj Subramani",
      degree: "B.COM",
      phone: "+91 7708992365",
      bio: "Retired Army veteran bringing strategic discipline and military-grade reliability to Indian logistics.",
      tag: "Retired Army"
    }
  ];

  return (
    <section id="founder" className="relative bg-slate-950">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="relative">
        {founders.map((founder, index) => (
          <FounderCard key={founder.name} founder={founder} index={index} />
        ))}
      </div>
    </section>
  );
}