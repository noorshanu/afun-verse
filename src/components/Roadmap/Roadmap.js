import React from "react";
import "./Roadmap.css";

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
          RoadMap
        </h1>
      </div>

      <div className="container">
        <div className="side-road">&nbsp;</div>
        <div className="side-road2">&nbsp;</div>
        <div className="row margin-auto ">
        
<div className="wrapper">
 
  <div className="timeline">
    <dl className="timeline--entry">
      <dt className="timeline--entry__title">Title A</dt>
      <dd className="timeline--entry__detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</dd>
    </dl>
    <dl className="timeline--entry">
      <dt className="timeline--entry__title">Title B</dt>
      <dd className="timeline--entry__detail"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</dd>
    </dl>
    <dl className="timeline--entry">
      <dt className="timeline--entry__title">Title C</dt>
      <dd className="timeline--entry__detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</dd>
    </dl>
   
 
  </div>
</div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
