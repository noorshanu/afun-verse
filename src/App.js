import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Navbar/Topbar";
import Roadmap from "./components/Roadmap/Roadmap";
import Team from "./components/Team/Team";
import Benifit from "./components/tokenomic/Benifit";
import Tokenomic from "./components/tokenomic/Tokenomic";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Tokenomic />
      <Benifit />
      <Roadmap/>
      <Team/>
      <Footer />
    </>
  );
}

export default App;
