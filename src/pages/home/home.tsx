

import Hero from './hero';
import About from './about';
import Founder from './founer';
import Services from './services';
import VideoSection from './video';
import Reviews from './review';
import Contact from './contact';


export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      
      <Hero />
      <About />
      <Founder />
      <Services />
      <VideoSection />
      <Reviews />
      <Contact />
    
    </div>
  );
}