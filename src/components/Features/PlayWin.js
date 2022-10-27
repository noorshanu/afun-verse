import React from 'react'
import './Play.css'
import Box from '../../assets/box2.png'

function PlayWin() {
  return (
    <section className='Play-win'>
        <div class="container">
        <h1 className='header-h1'>Play - 2 - <span className='head-span'>Earn</span> </h1>
        </div>
        <div class="container">
            <div class="row justify-content-center align-items-center g-2">
                <div class="col-md-6 text-center">
                    <img src={Box} alt="" className='about-img'/>
                </div>
                <div class="col-md-6">
                    <div className='play-p'>
                    <p>Jobs may be found in AFUN poem. Finding metals or other building items is one of the players task.</p>
                    <p>Players can explore the AFUNverse to locate and bring back goods. They could come into the hidden chests of gold.
                     If the players are strong enough they can open the box and can get the prize.</p>
                    </div>
                  
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default PlayWin