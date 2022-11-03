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

import { EffectFade, Navigation, Pagination,Autoplay } from "swiper";

function Features() {
  return (
    <section className="text-center">
       <div className="feat-line">
        <div className="side-feat">&nbsp;</div>
        <div className="way-line">&nbsp;</div>
        <img src={Way} alt="way" className="way-lines" />
      </div>
      <div class="container justify-content-center text-center" data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1500">
        <h1 className="header-h1">
          Features
        </h1>
      </div>
<div className="side-pur">
  &nbsp;
</div>
      <div className="slider-main">
        <Swiper
          spaceBetween={50}
        
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination,Autoplay,]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Game} alt="" />
        
          </SwiperSlide>
          <SwiperSlide>
            <img src={Music} alt="" />
          
          </SwiperSlide>
          <SwiperSlide>
            <img src={Art} alt="" />
       
          </SwiperSlide>
          <SwiperSlide>
            <img src={Fashion} alt="" />
    
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cars} alt="" />
      
          </SwiperSlide>
          <SwiperSlide>
            <img src={Idols} alt="" />
          
          </SwiperSlide>
          <SwiperSlide>
            <img src={Rest} alt="" />
          
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sports} alt="" />
       
          </SwiperSlide>
          <SwiperSlide>
            <img src={Tam} alt="" />
         
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
