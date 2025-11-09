import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Thesis from './components/Thesis';
import Dimensions from './components/Dimensions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Thesis />
      <Dimensions />
      <Footer />
    </div>
  );
}

export default App;
