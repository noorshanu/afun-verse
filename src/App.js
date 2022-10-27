import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Features from './components/Features/Features';
import PlayWin from './components/Features/PlayWin';
import Hero from './components/HeroSection/Hero';
import Navbar from './components/Navbar/Navbar';
import Tokenomic from './components/tokenomic/Tokenomic';


function App() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <About/>
  <Features/>
  <PlayWin/>
  <Tokenomic/>
  </>
  );
}

export default App;
