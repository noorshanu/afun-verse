import React from 'react'
import Toko1 from '../../assets/elements/toko-1.png'
import Toko2 from '../../assets/elements/toko-2.png'

function Benifit() {
  return (
    <div>
        <div className='container '>
            <div className='row'>
                <div className='col'>
                <h1>
                Benefits of $AFUNC
                </h1>

                <p>• Can create & vote on proposals to govern AFUN verse</p>
                <p>• Buy and sell lands</p>
                <p>• Special rate for GCOIN</p>
                <p>• VIP access to lounge etc</p>
                <p>
• Invitation to exclusive events (music concert etc)</p>
<p>• Early access to buy tickets, NFT items etc</p>
                </div>
      
            </div>


        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <img src={Toko1} alt=""/>
                </div>
                <div className='col-md-6'>
                    <div>
                        <h1>Token Supply</h1>
                        <p>
                        • Public Sale Date: December 2023
                        </p>
<p>• Total Supply: 1,000,000,000</p>
<p>• Token Price: $1</p>
<p>• Locked for 9-12 months</p>
<p>• Lock-up mechanism: montly %</p>
                    </div>

                </div>
                <div className='col-md-3'>
                <img src={Toko2} alt=""/>
                </div>

            </div>

        </div>
<div class="container">
<div className='head'>
    <h1>Allocation</h1>
</div>
token
</div>

    </div>
  )
}

export default Benifit