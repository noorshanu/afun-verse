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
          <div className="col-md-3 text-center">
            <img src={Toko1} alt="" className="toko-side-1" />
          </div>
          <div className="col-md-6">
            <div className="container text-center justify-content-center">
              <h1 className="header-ben-h1">
                Token <span className="header-ben-span">Supply</span>
              </h1>
            </div>
            <div className="ben-p">
              <p>• Public Sale Date: December 2023</p>
              <p>• Total Supply: 1,000,000,000</p>
              <p>• Token Price: $1</p>
              <p>• Locked for 9-12 months</p>
              <p>• Lock-up mechanism: montly %</p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <img src={Toko2} alt="" className="toko-side-1" />
          </div>
        </div>
      </div>
      <div className="dollar-win">
        
        
          <img src={Dollar} alt="way" className="dollar-lines"/>
          <div className='dollar-line'>&nbsp;</div>
        </div>
      <div class="container">
        <div className="head text-center">
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
