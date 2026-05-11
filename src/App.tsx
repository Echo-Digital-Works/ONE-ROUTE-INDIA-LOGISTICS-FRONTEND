

import Home from './pages/home/home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      <Navbar/>
      <Home />
      <Footer/> 
      
    
    </div>
  );
}