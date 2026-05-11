
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Play } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & About */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                ONEROUTE INDIA
              </h2>
              {/* Slogan matching the red text in the image, but using brand yellow */}
              <p className="text-yellow-500 font-bold text-sm tracking-wide">
                Driven by Trust, Delivered with Care
              </p>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-4">About Us</h3>
            <p className="text-slate-500 text-sm leading-relaxed pr-4">
              Oneroute is India's premier logistics network. We bridge the gap between your business and your customers with unparalleled reliability, offering complete supply chain transparency and on-time deliveries across the nation.
            </p>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6">Services</h3>
            <ul className="space-y-3">
              {['Road Freight', 'Air Freight', 'Warehousing', 'Supply Chain', 'Fleet Management'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-slate-600 hover:text-yellow-600 cursor-pointer transition-colors">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Company */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6">Company</h3>
            <ul className="space-y-3">
              {['Who We Are', 'Our Services', 'Our Clients', 'Pricing', 'Contact Us'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-slate-600 hover:text-yellow-600 cursor-pointer transition-colors">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact & Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Contact us</h3>
                <div className="mb-4">
                  <p className="text-sm font-bold text-slate-900">Call :</p>
                  <p className="text-sm text-slate-600">+91 98765 43210</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Email:</p>
                  <p className="text-sm text-slate-600">contact@oneroute.in</p>
                </div>
                {/* Decorative short bar matching the image */}
                <div className="w-8 h-1 bg-yellow-500 mt-4"></div>
              </div>
              
              {/* Newsletter & Socials */}
              <div className="flex flex-col justify-between">
                {/* Email Input Field */}
                <div className="flex items-center mt-12 mb-6">
                  <input 
                    type="email" 
                    placeholder="Write Email" 
                    className="w-full bg-slate-100 text-xs px-3 py-2.5 outline-none text-slate-600 focus:ring-1 focus:ring-yellow-500"
                  />
                  <button className="bg-yellow-500 flex items-center justify-center p-2.5 hover:bg-slate-900 transition-colors group">
                    <Play className="w-3.5 h-3.5 text-white fill-white group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Social Icons (Mapped to look like the circles in the image) */}
                <div className="flex justify-end gap-2 mb-2">
                  {[
                    { icon: Facebook, label: 'F' },
                    { icon: Twitter, label: 'T' },
                    { icon: Linkedin, label: 'L' },
                    { icon: Instagram, label: 'I' },
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={`#${social.label}`}
                      className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:border-yellow-500 hover:text-yellow-500 transition-all"
                    >
                      <social.icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-900 text-right">Follow Us</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Dark Bar */}
      <div className="bg-slate-950 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs">
          
          {/* Left Side Links */}
          <div className="flex items-center flex-wrap justify-center gap-4 text-slate-300 mb-4 md:mb-0">
            <a href="#privacy" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
            <span className="text-slate-600">|</span>
            <a href="#history" className="hover:text-yellow-500 transition-colors">Our History</a>
            <span className="text-slate-600">|</span>
            <a href="#whatwedo" className="hover:text-yellow-500 transition-colors">What We Do</a>
          </div>

          {/* Right Side Copyright */}
          <div className="text-slate-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} Oneroute India. All images are for demo purposes only.
          </div>
          
        </div>
      </div>
    </footer>
  );
}