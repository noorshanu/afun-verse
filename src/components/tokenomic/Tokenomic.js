import React from "react";
import "./Tokenomic.css";


function Tokenomic() {
  return (
    <section className="token" id="toko">
      <div className="container text-center justify-content-center" data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1500">
        <h1 className="header-h1">
          Tokenomics
        </h1>
      </div>
      <div className="side-pur">
  &nbsp;
</div>
      <div class="container">
        <div class="row justify-content-center align-items-center g-2 afun-toko">
          <div class="col-md-6">
            <div className="text-center">
              <img src='https://ik.imagekit.io/cforcrypto/afun/coin.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667503840738' alt="" className="img-toko" />
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
