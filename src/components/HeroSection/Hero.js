import React from "react";
import "./Hero.css";

import HomeLine from "../../assets/elements/home-line.png";


function Hero() {
  return (
    <section className="hero-main">
      <div className="overlay"></div>
      <video src="https://ik.imagekit.io/cforcrypto/afun/bg.webm?ik-sdk-version=javascript-1.4.3&updatedAt=1667503835809" autoPlay loop muted playsInline/>
      <div className="container justify-content-center align-items-center content">
        <div className="hero-content d-flex justify-content-center align-items-center">
          <div className="text-end side-img"></div>
          <div className="text-center">
            <h1 className="hero-h1">
              Next Generation Gaming experience in Metaverse.
            </h1>
            <p className="hero-p">Play-2-earn</p>
            <div className="hero-main-btn">
              <span className="btn-hero-1">
                <a href="/">Stake $afunc</a>
              </span>
              <span className="btn-hero-2">
                <a href="/">buy gcoin</a>
              </span>
            </div>
          </div>

          <div className="side-img text-start"></div>
        </div>
      </div>
      <div className="left-line">&nbsp;</div>
      <img src={HomeLine} alt="" className="home-line" />
    </section>
  );
}

export default Hero;
