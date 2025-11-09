import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ReactiveDomains from './components/ReactiveDomains.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <ReactiveDomains />
      <Contact />
    </div>
  );
}
