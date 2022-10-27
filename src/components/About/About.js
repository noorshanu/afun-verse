import React from 'react'
import Box from '../../assets/box.png'
// import Line from '../../assets/line-about.png'
import './About.css'

function About() {
  return (
    <section className='about'>
        <div class="container justify-content-center text-center">
            <h1 className='header-h1'>About <span className='head-span'>Us</span> </h1>
        </div>

        <div class="container">
            <div class="row justify-content-center align-items-center g-2">
                <div class="col-md-6">
                    <p className='about-p'>The core team of AFUN is developing an ecosystem in metaverse
                         where  you and your friends can have fun ther by meeting, playing,
                          listeninig music or buying fahionable accesories. </p>
                </div>
                <div class="col-md-6 text-center">
                    <img src={Box} alt="" className='about-img'/>
                    
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default About