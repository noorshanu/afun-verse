import React from 'react'
import './Tokenomic.css'
import Box from '../../assets/box.png'

function Tokenomic() {
  return (
    <section className='token'>
    <div className='container text-center justify-content-center'>
        <h1 className='header-h1'>Token<span className='head-span'>omics</span> </h1>
        
    </div>
    <div class="container">
        <div class="row justify-content-center align-items-center g-2 afun-toko">
            <div class="col-md-6">
                <div>
                    <img src={Box} alt="" className='img-toko'/>
                </div>
            </div>
            <div class="col-md-6">
                <div>
                    <h2 className='toko-h2'>$Ac<span className='head-span'>fun</span>c</h2>
                    <p className='toko-p'><span className='span-toko'>AFUNC</span> token is native token for Metaverse entertainment Ecosystem. Its long term project which 
                        will include 5 main staged of development:</p>                    
                </div>
            </div>
            
        </div>


        
            <div class="row justify-content-center align-items-center g-2">
                <div class="col-md-6">
                    <div>
                    <img src={Box} alt="" className='img-toko'/>
                       
                    </div>
                </div>
                <div class="col-md-6">
                   <div>
                   <h1>Properties of $AFUNC</h1>
                        <div>
                            <p>- Project MVP</p>
<p>- Project launch with GCOIN (Game coins)</p>
<p>- Listing on CEX (first exit for early investors)</p>
<p>- Staking for rewards</p>
<p>- DAO system
</p>
                        </div>
                   </div>
                </div>
                
            </div>
        
    </div>
    
    </section>
  )
}

export default Tokenomic