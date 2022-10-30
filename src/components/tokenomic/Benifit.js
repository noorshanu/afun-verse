import React from "react";
import Toko1 from "../../assets/elements/toko-1.png";
import Toko2 from "../../assets/elements/toko-2.png";
import Div from "../../assets/elements/div.png";
import Pie from "../../assets/pie.svg";
import "./Tokenomic.css";
import Dollar from '../../assets/elements/alloc.png'

function Benifit() {
  return (
    <div>
      <div className="container supply">
        <div className="row">
          <div className="col-md-3  text-end">
            <img src={Toko1} alt="" className="toko-side-1" />
          </div>
          <div className="col-md-6 ">
            <div className="container text-center justify-content-center" data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1500">
              <h1 className="header-ben-h1">
                Token <span className="header-ben-span">Supply</span>
              </h1>
            </div>
            <div className="ben-p">
            <p>• Token Name: Afun-verses</p>
            <p>• Token Ticker: $Afun</p>
            <p>• Token Standard: ERC20</p>
            <p>• Total Supply: 1,000,000,000</p>
              <p>• Public Sale Date: December 2023</p>
            
            </div>
          </div>
          <div className="col-md-3 text-start ">
            <img src={Toko2} alt="" className="toko-side-1" />
          </div>
        </div>
      </div>
      <div className="dollar-win">
        
        
          <img src={Dollar} alt="way" className="dollar-lines"/>
          <div className='dollar-line'>&nbsp;</div>
        </div>
      <div class="container">
        <div className="head text-center" data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1500">
          <h1 className="header-ben-h2">
            Allocat <span className="header-ben-span">ion</span>
          </h1>
          <img src={Div} alt="" className="divider" />
        </div>
        <div className="allo-img">
          <img src={Pie} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Benifit;
