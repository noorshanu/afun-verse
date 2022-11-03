import React from 'react'
import {
  FaTwitter,
  FaFacebookSquare,
  FaMedium,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

function Topbar() {
  return (
    <section className='top-nav'>
    <div className='container'>
        <div className='top-bar'>
        <div className='anno'>
           <p>Announcements:</p>
        </div>
        <div className='ticker-wrap'> 
        <div className='ticker'>
            <div className='ticker__item'>
            <p>Join the Telegram Channel for latest updates. | New NFTs launch, check out our marketplace. |
                 We were featured on “The morinign Brew”. </p>
            </div>
            <div className='ticker__item'>
            <p>Join the Telegram Channel for latest updates. | New NFTs launch, check out our marketplace. |
                 We were featured on “The morinign Brew”. </p>
            </div>
            <div className='ticker__item'>
            <p>Join the Telegram Channel for latest updates. | New NFTs launch, check out our marketplace. |
                 We were featured on “The morinign Brew”. </p>
            </div>
            
        </div>
          
        </div>
        <div className='top-social'>
        <a href="https://twitter.com/AFUN_Verse" target="_noor">
                    <FaTwitter />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100087203265007" target='_noor'>
                    <FaFacebookSquare/>
                  </a>
                  <a href="https://afunverse.medium.com/" target='_noor'>
                    <FaMedium />
                  </a>
                  <a href="https://t.me/afun_verse" target='_noor'>
                    <FaTelegramPlane />
                  </a>
                  <a href="https://www.youtube.com/channel/UCIu9OotsCJPmge_1kpo3kgQ">
                    <FaYoutube />
                  </a>

        </div>
            
        </div>
    </div>
    </section>
  )
}

export default Topbar