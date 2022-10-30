import React from 'react'
import './Team.css'
import Team1 from '../../assets/team/team-1.png'
import Team2 from '../../assets/team/team-2.png'
import Team3 from '../../assets/team/team-3.png'
import Team4 from '../../assets/team/team-4.png'
import Dollar from '../../assets/elements/team2.png'

function Team() {
  return (
    <section className='team'>
        <div className="dollar-win">
        
        <div className='team-line'>&nbsp;</div>
        <img src={Dollar} alt="way" className="team-lines"/>
       
      </div>
       <div class="container justify-content-center text-center">
        <h1 className="header-h1">
          TE<span className="head-span">AM</span>
        </h1>
      </div>
      <div class="container justify-content-center text-center margin-auto">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-3">
            <div className='team-box'>
              <div className='team-mg-box'>
                
              <img src={Team1} alt="team"/>
              </div>
              <div className='team-text'>
                <h2>Matthew Doe</h2>
                <p>CEO</p>

              </div>

            </div>
          </div>
          <div class="col-3">
          <div className='team-box'>
              <div className='team-img-box'>
                
              <img src={Team2} alt="team"/>
              </div>
              <div className='team-text'>
                <h2>Nathan Paul</h2>
                <p>CTO</p>

              </div>

            </div>
          </div>
          <div class="col-3">
          <div className='team-box'>
              <div className='team-img-box'>
                
              <img src={Team3} alt="team"/>
              </div>
              <div className='team-text'>
                <h2>Denise Levi</h2>
                <p>Head Of Marketing</p>

              </div>

            </div>
          </div>
          <div class="col-3">
          <div className='team-box'>
              <div className='team-img-box'>
                
              <img src={Team4} alt="team"/>
              </div>
              <div className='team-text'>
                <h2>Pete Dinkins</h2>
                <p>Lead Designer</p>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team