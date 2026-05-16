import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Play } from 'lucide-react';

export default function Footer() {
  // Define Social Media Links
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/onerouteindia', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/onerouteindia', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/oneroute-india', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/onerouteindia', label: 'Instagram' },
  ];

  // Updated Navigation: Added the page path '/services' before the section ID
  const serviceItems = [
    { name: 'Road Freight', path: '/services#road-freight' },
    { name: 'Supply Chain', path: '/services#supply-chain' },
    { name: 'Warehousing', path: '/services#warehousing' }
  ];

  return (
    <footer className="bg-white pt-20 border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          
          {/* Column 1: Brand & About */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                OneRoute India Logistics
              </h2>
              <p className="text-yellow-500 font-bold text-sm tracking-wide">
                Driven by Trust, Delivered with Care
              </p>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-4">About Us</h3>
            <p className="text-slate-500 text-sm leading-relaxed pr-4">
              Oneroute is India's premier logistics network. We bridge the gap between your business and your customers with unparalleled reliability.
            </p>
          </motion.div>

          {/* Column 2: Services - LINKED TO SERVICES PAGE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceItems.map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.path} 
                    className="flex items-center text-sm text-slate-600 hover:text-yellow-600 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"></span>
                    {item.name}
                  </a>
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
              {[
                { name: 'Who We Are', link: '#about' },
                { name: 'Our Services', link: '/services' }, // Direct link to services page
                { name: 'Our Clients', link: '#clients' },
                { name: 'Contact Us', link: '#contact' }
              ].map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.link} 
                    className="flex items-center text-sm text-slate-600 hover:text-yellow-600 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact & Socials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Contact us</h3>
                <div className="mb-4">
                  <p className="text-sm font-bold text-slate-900">Call :</p>
                  <a href="tel:+919876543210" className="text-sm text-slate-600 hover:text-yellow-500">+91 98765 43210</a>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Email:</p>
                  <a href="mailto:contact@oneroute.in" className="text-sm text-slate-600 hover:text-yellow-500">contact@oneroute.in</a>
                </div>
                <div className="w-8 h-1 bg-yellow-500 mt-4"></div>
              </div>
              
              <div className="flex flex-col justify-between">
                <div className="flex items-center mt-12 mb-6">
                  <input 
                    type="email" 
                    placeholder="Write Email" 
                    className="w-full bg-slate-100 text-xs px-3 py-2.5 outline-none text-slate-600 focus:ring-1 focus:ring-yellow-500"
                  />
                  <button className="bg-yellow-500 p-2.5 hover:bg-slate-900 transition-colors">
                    <Play className="w-3.5 h-3.5 text-white fill-white" />
                  </button>
                </div>

                <div className="flex justify-end gap-2 mb-2">
                  {socialLinks.map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
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

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-2 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4 text-slate-300 mb-2 sm:mb-0">
            <a href="#privacy" className="hover:text-yellow-500">Privacy Policy</a>
            <span className="text-slate-600">|</span>
            <a href="#history" className="hover:text-yellow-500">Our History</a>
          </div>
          <div className="text-slate-400">
            &copy; {new Date().getFullYear()} Oneroute India. All rights reserved.
          </div>
          <div className="text-slate-400">
            &copy;  developed by echo digital works
          </div>
        </div>
      </div>
    </footer>
  );
}