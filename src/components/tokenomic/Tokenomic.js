import React from "react";
import "./Tokenomic.css";
import Box from "../../assets/coin.png";

function Tokenomic() {
  return (
    <section className="token">
      <div className="container text-center justify-content-center" data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1500">
        <h1 className="header-h1">
          Token<span className="head-span">omics</span>{" "}
        </h1>
      </div>
      <div class="container">
        <div class="row justify-content-center align-items-center g-2 afun-toko">
          <div class="col-md-6">
            <div className="text-center">
              <img src={Box} alt="" className="img-toko" />
            </div>
          </div>
          <div class="col-md-6">
            <div>
              <h2 className="toko-h2">
                $A<span className="head-span">fun</span>
              </h2>
              <p className="toko-p">
                <span className="span-toko">AFUNC</span> token is native token
                for Metaverse entertainment Ecosystem. Its long term project
                which will include 5 main staged of development:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomic;
