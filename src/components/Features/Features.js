import React, { useRef, useState } from "react";
import Way from '../../assets/elements/way.svg'
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
    <section className='text-center'>
<div class="container justify-content-center text-center">
            <h1 className='header-h1'>Featu<span className='head-span'>res</span> </h1>
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
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
        </div>

        <div>
        <div className='left-line'>&nbsp;</div>
          <img src={Way} alt="way" className="way-line"/>
        </div>
    </section>
  )
}

export default Features