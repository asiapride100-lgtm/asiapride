import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Guide from './components/Guide/Guide';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <div className="bg-blue">
      <Navbar/>
      <Hero/>
      <Features />
      <Guide />
      <Footer />
    </div>
    </>
  );
}

export default App;
