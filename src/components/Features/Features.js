import "./Play.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

function Features() {
  return (
    <section className="text-center" id="feature">
      <div className="feat-lines">
        <div className="side-feat">&nbsp;</div>
        <div className="way-line">&nbsp;</div>
        <img
          src="https://ik.imagekit.io/cforcrypto/afun/elements/way.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667504469602"
          alt="way"
          className="way-lines"
        />
      </div>
      <div
        class="container justify-content-center text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1500"
      >
        <h1 className="header-h1">Features</h1>
      </div>
      <div className="side-pur">&nbsp;</div>
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
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://ik.imagekit.io/cforcrypto/afun/slider/gaming.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667660706618"
              alt="game"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://ik.imagekit.io/cforcrypto/afun/slider/music.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667660706416"
              alt="music"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://ik.imagekit.io/cforcrypto/afun/slider/art_gallery.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667660706389"
              alt="art"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://ik.imagekit.io/cforcrypto/afun/slider/fashion.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667660706702"
              alt="fashion"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://ik.imagekit.io/cforcrypto/afun/slider/cars.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667660706031"
              alt="car"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://ik.imagekit.io/cforcrypto/afun/slider/Idols.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667660706696"
              alt="idols"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://ik.imagekit.io/cforcrypto/afun/slider/resturants.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667660706352"
              alt="resturant"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://ik.imagekit.io/cforcrypto/afun/slider/Sports.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667660706522"
              alt="sports"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://ik.imagekit.io/cforcrypto/afun/slider/virtual_babies.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667660706531"
              alt="tam"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="dollar-win">
        <div className="side-feat">&nbsp;</div>

        <img
          src="https://ik.imagekit.io/cforcrypto/afun/elements/dollar.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1667504467000"
          alt="way"
          className="dollar-lines"
        />
        <div className="dollar-line">&nbsp;</div>
      </div>
    </section>
  );
}

export default Features;
