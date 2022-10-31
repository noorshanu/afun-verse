import React, { useState } from "react";
import PlayWin from './components/Features/PlayWin'
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
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 4000);
  }
  return (
    !loading && (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <PlayWin/>
      <Tokenomic />
      <Benifit />
      <Roadmap/>
      <Team/>
      <Footer />
    </>
    )
  );
}

export default App;
