import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

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
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12">
          
          {/* Column 1: Brand & About */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
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
              OneRoute is India's premier logistics network. We bridge the gap between your business and your customers with unparalleled reliability.
            </p>
          </motion.div>

          {/* Column 2: Services - LINKED TO SERVICES PAGE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
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
            className="lg:col-span-2"
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
            className="lg:col-span-4"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6">Contact us</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm font-bold text-slate-900">Call :</p>
                <a href="tel:+919876543210" className="text-sm text-slate-600 hover:text-yellow-500">+91 98765 43210</a>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Email:</p>
                <a href="mailto:contact@oneroute.in" className="text-sm text-slate-600 hover:text-yellow-500">contact@onerouteindia.com</a>
              </div>
            </div>

            <div className="w-8 h-1 bg-yellow-500 mb-6"></div>

            <div>
              <p className="text-sm font-bold text-slate-900 mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:border-yellow-500 hover:text-yellow-500 transition-all shadow-sm hover:shadow-md"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-5">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 flex flex-col sm:flex-row items-center justify-between text-xs gap-2 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4 text-slate-300 mb-2 sm:mb-0">
            <a href="#privacy" className="hover:text-yellow-500">Privacy Policy</a>
            <span className="text-slate-600">|</span>
            <a href="#history" className="hover:text-yellow-500">Our History</a>
          </div>
          <div className="text-slate-400">
            &copy; {new Date().getFullYear()} Oneroute India. All rights reserved.
          </div>
          <div className="text-slate-400">
            developed by echo digital works
          </div>
        </div>
      </div>
    </footer>
  );
}