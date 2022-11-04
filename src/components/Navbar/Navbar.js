import React, { useState } from "react";
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className='container main-nav'>
    <div className='logo'>   <div className='d-flex foot-logo'>
            <img src='https://ik.imagekit.io/cforcrypto/afun/logo/Logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667503107957' alt="" className=''/>
           
            </div></div>
    <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
    <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#feature">Features</a></li>
        <li><a href="#game">Gameplay</a></li>
        <li><a href="#toko">Tokenomics</a></li>
        {/* <li><a href="#nft">NFTs</a></li> */}
        <li><a href="#road">Roadmap</a></li>
        <li><a href="#team">team</a></li>
    </ul>

    </div>
      {/* hamburget menu start  */}
      <div className="hamburger-menu">
            <a href="#home" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
    </nav>
  )
}

export default Navbar