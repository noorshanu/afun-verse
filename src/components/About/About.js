import React from "react";
import Box from "../../assets/box.png";
import AboutLine from "../../assets/elements/about-line.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <img src={AboutLine} alt="" className="about-line" />
      <div class="container justify-content-center text-center">
        <h1 className="header-h1">
          About <span className="head-span">Us</span>
        </h1>
      </div>

      <div class="container">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-md-6">
            <p className="about-p">
              The AFUN verse is an ultimate virtual entertainment world in
              metaverse where players can meet their friends and play games,
              listen to music, watch sports, buy arts from gallery, buy fashion
              accessories, own and ride cars, sail away on a cruise and enjoy
              nice meals in a luxurious resort hotel. Players can also invest
              and own the room, hotel or land.{" "}
            </p>
          </div>
          <div class="col-md-6 text-center">
            <img src={Box} alt="" className="about-img" />
          </div>
        </div>
      </div>
      <div className="about-line2">&nbsp;</div>
    </section>
  );
}

export default About;
