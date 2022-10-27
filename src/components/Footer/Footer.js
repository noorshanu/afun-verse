import React from 'react'
import './Footer.css'
import Logo from '../../assets/foot-logo.png'
import {FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <>
    <footer className='footer'>
        <div class="container">
        <hr/>
            <div class="row justify-content-center align-items-center g-2">
                <div class="col-md-3">
                    <div className='foot-1'>
                        <img src={Logo} alt="foot-logo" className='foot-logo'/>

                        <p>Conect With The Community</p>
                        <a href="/"><FaTwitter/></a>
                    </div>
                </div>
                <div class="col-md-3">Column</div>
                <div class="col-md-3">Column</div>
                <div class="col-md-3">Column</div>
            </div>
            <div className='foot-bottom'>
                <hr/>
                <span>2022© AFUN Inc. | All Rights Reserved </span>
                
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer