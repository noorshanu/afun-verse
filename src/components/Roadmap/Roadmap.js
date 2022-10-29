import React from "react";
import "./Roadmap.css";
import RoadLine from "../../assets/elements/road-line.svg";
import Cir from '../../assets/circle.png'

function Roadmap() {
  return (
    <section className="roadmap">
      <div class="container justify-content-center text-center">
        <h1 className="header-h1">
          Road<span className="head-span">Map</span>
        </h1>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-md-6">
            <div className="road-box">
              <div className="road-img-line">
                <img src={RoadLine} alt="" />
              </div>
              <div className="road-content">
                <div className="road-sub-head">
                  <h1 className="header-road-h1">
                    Phase <span className="header-road-span"> 1</span>
                  </h1>
                  <p>November 22’</p>
                  </div>
                  <div className="road-p">
                    <p>Private Sale</p>
                    <p>Development</p>
                    <p>Discount: 80%</p>
                  </div>
              
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="road-img-2">
              <img src={Cir} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
