import React from 'react'
import {FaTwitter,
    FaDiscord,
    FaInstagram,
    FaTelegramPlane,
    FaGithub} from 'react-icons/fa'

function Topbar() {
  return (
    <section className='top-nav'>
    <div className='container'>
        <div className='top-bar'>
        <div>
           <p>Announcements :</p>
        </div>
        <div className='ticker-wrap'> 
        <div className='ticker'>
            <div className='ticker__item'>
            <p>Join the Telegram Channel for latest updates. | New NFTs launch, check out our marketplace. |
                 We were featured on “The morinign Brew”. </p>
            </div>
            
        </div>
          
        </div>
        <div className='top-social'>
        <a href="/"><FaTwitter/></a>
                        <a href="/"><FaDiscord/></a>
                        <a href="/"><FaInstagram/></a>
                        <a href="/"><FaTelegramPlane/></a>
                        <a href="/"><FaGithub/></a>

        </div>
            
        </div>
    </div>
    </section>
  )
}

export default Topbar