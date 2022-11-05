import React from "react";
import "./Team.css";



function Team() {
  return (
    <section className="team" id="team">
      <div className="dollar-wins">
      <div className="side-feat">&nbsp;</div>
        <div className="team-line">&nbsp;</div>
        <img src='https://ik.imagekit.io/cforcrypto/afun/elements/team2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667504468609'alt="way" className="team-lines" />
        <div className="side-pur">
  &nbsp;
</div>
      </div>
      <div
        className="container justify-content-center text-center"
      
      >
        <h1 className="header-h1">
          TEAM
        </h1>
      </div>
      <div
        className="container justify-content-center text-center margin-auto"
        
      >
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-md-3 col-6">
            <div className="team-box">
              <div className="team-mg-box">
                <img src='https://ik.imagekit.io/cforcrypto/afun/team/team-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667505989009' alt="team" />
              </div>
              <div className="team-text">
                <h2>Matthew Doe</h2>
                <p>CEO</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="team-box">
              <div className="team-img-box">
                <img src='https://ik.imagekit.io/cforcrypto/afun/team/team-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667505988896' alt="team" />
              </div>
              <div className="team-text">
                <h2>Nathan Paul</h2>
                <p>CTO</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="team-box">
              <div className="team-img-box">
                <img src='https://ik.imagekit.io/cforcrypto/afun/team/team-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667505989021' alt="team" />
              </div>
              <div className="team-text">
                <h2>Denise Levi</h2>
                <p>Head Of Marketing</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="team-box">
              <div className="team-img-box">
                <img src='https://ik.imagekit.io/cforcrypto/afun/team/team-4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667505988823' alt="team" />
              </div>
              <div className="team-text">
                <h2>Pete Dinkins</h2>
                <p>Lead Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
