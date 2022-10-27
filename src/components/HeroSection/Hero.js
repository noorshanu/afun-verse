import React from 'react'
import './Hero.css'
import Side1 from '../../assets/hero/1.png'
import Side2 from '../../assets/hero/2.png'
import Side3 from '../../assets/hero/3.png'
import Side4 from '../../assets/hero/4.png'
import Side5 from '../../assets/hero/5.png'
import Side6 from '../../assets/hero/6.png'


function Hero() {
  return (
    <section className='hero-main'>
        <div className='container justify-content-center align-items-center'>
            <div className='hero-content d-flex justify-content-center align-items-center'>
                <div className='text-end side-img'>
                    <img src={Side1} alt="1" className='img1'/>
                    <img src={Side2} alt="2" className='img2'/>
                    <img src={Side3} alt="3" className='img3'/>
                </div>
                <div className='text-center'>
                <h1 className='hero-h1'>Have <span className='hero-span'>AFUN</span> To All</h1>
                <p className='hero-p'>Play-2-earn</p>
                <div className='hero-main-btn'>
                <span className='btn-hero-1'><a href="/">Stake $afunc</a></span>
                <span className='btn-hero-2'><a href="/">buy gcoin</a></span>
                </div>
               
                </div>
             
                <div className='side-img text-start'>
                    <img src={Side4} alt="4" className='img4'/>
                    <img src={Side5} alt="5" className='img5'/>
                    <img src={Side6} alt="6" className='img6'/>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Hero