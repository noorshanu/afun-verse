// import React, { useRef, useState } from "react";
import Way from "../../assets/elements/way.svg";
import Game from "../../assets/slider/game.png";
import Art from "../../assets/slider/art.png";
import Cars from "../../assets/slider/cars.png";
import Fashion from "../../assets/slider/fashion.png";
import Idols from "../../assets/slider/idols.png";
import Music from "../../assets/slider/music.png";
import Sports from '../../assets/slider/art.png'
import Rest from '../../assets/slider/resturants.png'
import Tam from '../../assets/slider/tam.png'
import Dollar from '../../assets/elements/dollar.svg'


import "./Play.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";

function Features() {
  return (
    <section className="text-center">
       <div className="feat-line">
        <div className="side-feat">&nbsp;</div>
        <div className="way-line">&nbsp;</div>
        <img src={Way} alt="way" className="way-lines" />
      </div>
      <div class="container justify-content-center text-center">
        <h1 className="header-h1">
          Featu<span className="head-span">res</span>
        </h1>
      </div>
<div className="side-pur">
  &nbsp;
</div>
      <div className="slider-main">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Game} alt="" />
            <div className="contents">
              <h1>
                Players can enjoy a variety of games at Game Arcade in AFUN
                verse. Most of the games are casual and easy to play. Users can
                have fun to play together with their friends or compete each
                other.
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Music} alt="" />
            <div className="contents">
              <h1>
                Music lovers can use Native token to buy a ticket to the music
                concert. At AFUN verse, world famous musicians will play
                concerts once a month and daily live music by emerging artists
                all around the world. Qualified $AFUC token holders have a free
                access to daily concerts and early access to purchase tickets of
                celebrity concerts.
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Art} alt="" />
            <div className="contents">
              <h1>
                Players can visit the art gallery and purchase NFT arts. They
                can also sell their own NFT arts. <br />
                NFT market place ensures artists the ownership of the art works
                by blockchain technologies.
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Fashion} alt="" />
            <div className="contents">
             <h1>Personalise your avatar!
              <br />
              Millions of NFT avatar items are available to purchase with GCOINs
              in AFUN verse. NFT items can also be won by the competions in AFUN
              Games, and also can be sold. Qualified $AFUNC token holders get
              free exclusive NFT avatar accessories occasionally.</h1> 
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cars} alt="" />
            <div className="contents">
             <h1>Players can purchase and drive NFT cars in AFUN verse with GCOINs.
There will be a racing circuit where racers can enter the competitions to spin their cars. Winners get a special reward.
NFT cars can be sold in the NFT market place.</h1> 
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Idols} alt="" />
            <div className="contents">
             <h1>Artists can self promote themselves. If they want to sell their talents, they can in AFUN verse. For example, if they are amatuer singers or models, they can sell their music videos or
               photos to their fans. Players own the rights of their media and they can also invest into opening their stores.</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Rest} alt="" />
            <div className="contents">
             <h1>There will be world famous restaurants in AFUN verse. Players can order the same dishes that you can try at the real restaurant. Players in AFUN verse get hungry and they need to be fed 3 times a day. A better food gives more energy to the players. Native Token will be used to order foods.
If players are not eating for some times, they will be starving and admitted to the hospital.
</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sports} alt="" />
            <div className="contents">
             <h1>In AFUN verse, live sports can be watched at the sports bar or stadium. Tickets can be bought with GCOINs. Players can get rewards by guessing which team wins.
There is also sports complex where players can play golf, tennis, etc. We host several competitions every month. Participants can win special awards.</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Tam} alt="" />
            <div className="contents">
             <h1>In AFUN verse, you and your partner can have babies or pets! Parents must feed the babies or pets to grow. They need
to purchase baby or pets foods with native tokens . </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="dollar-win">
          <div className="side-feat">
          &nbsp;
          </div>
        
          <img src={Dollar} alt="way" className="dollar-lines"/>
          <div className='dollar-line'>&nbsp;</div>
        </div>
    </section>
  );
}

export default Features;
