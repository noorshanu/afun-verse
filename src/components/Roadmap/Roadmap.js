import React from "react";
import "./Roadmap.css";
import Ps1 from "../../assets/p1.png";
import Ps2 from "../../assets/p2.png";
import Ps3 from "../../assets/p3.png";

function Roadmap() {
  return (
    <section className="roadmap">
      <div
        class="container justify-content-center text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1500"
      >
        <h1 className="header-h1">RoadMap</h1>
      </div>

      <div className="container">
        <div className="side-road">&nbsp;</div>
        <div className="side-road2">&nbsp;</div>
        <div className="row margin-auto ">
          <div className="wrapper">
            <div className="timeline">
              <dl className="timeline--entry">
                <dt className="timeline--entry__title">
                  <img src={Ps1} alt="" className="team-box-1" />
                  <div className="d-flex gap-4">
                    <h2>Q4 <span>2022</span></h2>
                  </div>
                </dt>
                <dd className="timeline--entry__detail">
                  <p>Core business plan established</p>
                  <p>$Afun SEED SALE </p>
                  <p>Gameplay teasers</p>
                  <p>Game alpha version launched</p>
                </dd>
              </dl>
              <dl className="timeline--entry">
                <dt className="timeline--entry__title">
                  <img src={Ps2} alt="" className="team-box-1" />
                  <div className="d-flex gap-4">
                    <h2>Q1 <span>2023</span></h2>
                  </div>
                </dt>
                <dd className="timeline--entry__detail">
                  <p>PreSale Afun Token </p>
                  <p>NFT launch </p>
                  <p>Listing on CMC & CG </p>
                  <p>  Conceptualization staking <br/> platform and token</p>
                  <p>
                   Wallet + smart
                    contract <br/>implementation in game
                  </p>
                  <p>Game(Demo version) release</p>
                  <p>Creating market place Afun</p>
                </dd>
              </dl>
              <dl className="timeline--entry">
                <dt className="timeline--entry__title">
                  <img src={Ps3} alt="" className="team-box-1" />
                  <div className="d-flex gap-4">
                    <h2>Q2 <span>2023</span></h2>
                  </div>
                </dt>
                <dd className="timeline--entry__detail">
               <p>Launch of Staking Platform </p>
               <p>Cross-chain development</p>
               <p>Game mode enhancement</p>
               <p>Listing on Dex and exchanges</p>
               
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
