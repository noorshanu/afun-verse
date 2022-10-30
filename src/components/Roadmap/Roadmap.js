import React from "react";
import "./Roadmap.css";
import Pas1 from "../../assets/p1.png";

function Roadmap() {
  return (
    <section className="roadmap">
      <div
        class="container justify-content-center text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1500"
      >
        <h1 className="header-h1">
          Road<span className="head-span">Map</span>
        </h1>
      </div>

      <div className="container">
        <div className="side-road">&nbsp;</div>
        <div className="side-road2">&nbsp;</div>
        <div className="row margin-auto ">
          <div className="col-md-6">
            <div className="team-box-1">
              <div>
                <div>
                  <img src={Pas1} alt="" />
                  <div className="d-flex align-items-center gap-2">
                    <h2>Q1 </h2>
                    <span>2023</span>
                  </div>
                  <p>presale Afun Token </p>
                  <p> NFT launch </p>
                  <p>Listing on CMC & CG </p>
                  <p>
                    Conceptualization staking <br /> platform and token
                  </p>
                  <p>
                    Wallet + smart contract <br /> implementation in game
                  </p>
                  <p>Game(Demo version) release</p>
                  <p>Creating market place Afun</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="team-box-1">
              <img src={Pas1} alt="" />
              <div className="d-flex align-items-center gap-2">
                <h2>Q4 </h2>
                <span>2022</span>
              </div>

              <p>Core business plan established</p>
              <p>$Afun SEED SALE </p>
              <p>Gameplay teasers</p>
              <p>Game alpha version launched</p>
            </div>
            <div className="team-box-1">
              <img src={Pas1} alt="" />
              <div className="d-flex align-items-center gap-2">
                <h2>Q2 </h2>
                <span>2023</span>
              </div>
              <p>
              Launch of Staking Platform </p>
<p>Cross-chain development</p>
<p>Game mode enhancement</p>
<p>Listing on Dex and exchanges</p>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
