import React from "react";
import "./Footer.css";
import Div from "../../assets/elements/div.png";
import { NavLink } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookSquare,
  FaMedium,
  FaTelegramPlane,
  FaYoutube,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="side-feat">&nbsp;</div>
        <div className="side-pur">&nbsp;</div>
        <div className="container">
          <div className="text-center div1">
            <img src={Div} alt="" className="foot-div" />
          </div>
          <div className="row justify-content-center align-items-center g-2">
            <div className="col-md-3 col-6">
              <div className="foot-1">
                <img
                  src="https://ik.imagekit.io/cforcrypto/afun/logo/afun-logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667825765874"
                  alt="foot-logos"
                  className="foots-logo"
                />

                <p className="connect">Connect With The Community</p>
                <div className="foot-social">
                  <a href="https://twitter.com/AFUN_Verse" target="_noor">
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100087203265007"
                    target="_noor"
                  >
                    <FaFacebookSquare />
                  </a>
                  <a href="https://afunverse.medium.com/" target="_noor">
                    <FaMedium />
                  </a>
                  <a href="https://t.me/afun_verse" target="_noor">
                    <FaTelegramPlane />
                  </a>
                  <a href="https://www.youtube.com/channel/UCIu9OotsCJPmge_1kpo3kgQ">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 text-center">
              <a href="/" className="foot-btn-1">
                <FaApple /> &nbsp; App Store
              </a>
              <br />
              <br />
              <a href="/" className="foot-btn-2">
                <FaGooglePlay /> &nbsp;Play Store
              </a>
            </div>
            <div className="col-md-3  col-6">
              <div className="foot-link">
                <a href="#about">
                  <p>About</p>
                </a>
                <a href="/">
                  <p>Careers</p>
                </a>

                <a href="/">
                  <p>Community</p>
                </a>

                <NavLink to="/terms" target="_terms">
                  <p>Terms</p>
                </NavLink>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="foot-link">
                <NavLink to="/privacy-policy" target="_privacy">
                  <p>Privacy</p>
                </NavLink>
                <NavLink to="/risk-warning" target="_risk">
                  <p>Risk Warning</p>
                </NavLink>
                <a href="/">
                  <p>Announcements</p>
                </a>

                <NavLink to="/privacy-policy" target="_privacy">
                  <p>Cookie Preferences</p>
                </NavLink>
              </div>
            </div>
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
