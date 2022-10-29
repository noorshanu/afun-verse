// import React, { useRef, useState } from "react";
import Way from "../../assets/elements/way.svg";
import Game from '../../assets/slider/game.png'
import Art from '../../assets/slider/art.png'
import Cars from '../../assets/slider/cars.png'
import Fashion from '../../assets/slider/fashion.png'
import Idols from '../../assets/slider/idols.png'
import Music from '../../assets/slider/music.png'
// import Art from '../../assets/slider/art.png'
// import Art from '../../assets/slider/art.png'
// import Art from '../../assets/slider/art.png'
// import Art from '../../assets/slider/art.png'

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
      <div class="container justify-content-center text-center">
        <h1 className="header-h1">
          Featu<span className="head-span">res</span>
        </h1>
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
            <h1>Players can enjoy a variety of games at Game Arcade in AFUN verse. Most of the games are casual and easy to play.
Users can have fun to play together with their friends or compete each other.</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Music} alt="" />
            <div className="contents">
            <h1>Music lovers can use Native token to buy a ticket to the music concert.
At AFUN verse, world famous musicians will play concerts once a month and daily live music by emerging artists all around the world.
Qualified $AFUC token holders have a free access to daily concerts and early access to purchase tickets of celebrity concerts.</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Art} alt="" />
            <div className="contents">
            <h1>Players can visit the art gallery and purchase NFT arts. They can also sell their own NFT arts. <br/>
NFT market place ensures artists the ownership of the art works by blockchain technologies.</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Fashion} alt="" />
            <div className="contents">
            Personalise your avatar!<br/>
Millions of NFT avatar items are available to purchase with GCOINs in AFUN verse.
NFT items can also be won by the competions in AFUN Games, and also can be sold.
Qualified $AFUNC token holders get free exclusive NFT avatar accessories occasionally.
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="feat-line">
        <div className="side-feat">&nbsp;</div>
        <div className="way-line">&nbsp;</div>
        <img src={Way} alt="way" className="way-lines" />
      </div>
    </section>
  );
}

export default Features;
