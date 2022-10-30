import React from "react";
import "./Footer.css";
import Div from "../../assets/elements/div.png"
import Logo from "../../assets/foot-logo.png";
import {
  FaTwitter,
  FaDiscord,
  FaInstagram,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div class="container">
          <div className="text-center div1">
            <img src={Div} alt="" className="foot-div"/>
          </div>
          <div class="row justify-content-center align-items-center g-2">
            <div class="col-md-3">
              <div className="foot-1">
                <img src={Logo} alt="foot-logos" className="foots-logo" />

                <p className="connect">Connect With The Community</p>
                <div className="foot-social">
                  <a href="/">
                    <FaTwitter />
                  </a>
                  <a href="/">
                    <FaDiscord />
                  </a>
                  <a href="/">
                    <FaInstagram />
                  </a>
                  <a href="/">
                    <FaTelegramPlane />
                  </a>
                  <a href="/">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 ">
              <div className="foot-link">
              <p>About</p>
              <p>Careers</p>
              <p>Business Contacts</p>
              <p>Community</p>
              <p>Binance Blog</p>
              <p>Term</p>
              </div>
            
            </div>
            <div class="col-md-3">
            <div className="foot-link">
              <p>Privacy</p>
              <p>Risk Warning</p>
              <p>Announcements</p>
              <p>News</p>
              <p>Notices</p>
              <p>Cookie Preferences</p>
              </div>
            </div>
            <div class="col-md-3">Column</div>
          </div>
          <div className="foot-bottom">
            <hr />
            <span>2022© AFUN Inc. | All Rights Reserved </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
