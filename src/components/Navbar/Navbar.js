import React, { useState } from "react";
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../../assets/Logo.png'

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className='container main-nav'>
    <div className='logo'>   <div className='d-flex foot-logo'>
            <img src={Logo} alt="" className=''/>
           
            </div></div>
    <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
    <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#feature">Features</a></li>
        <li><a href="/">Gameplay</a></li>
        <li><a href="#toko">Tokenomics</a></li>
        <li><a href="#nft">NFTs</a></li>
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