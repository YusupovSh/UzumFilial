import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Img1 from '/images/banner/banner-1.png'
import Img2 from '/images/banner/banner-2.png'
import Img3 from '/images/banner/banner-3.png'

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

 function Banner() {
  return (
    <>
    <section className="banner">
      <Swiper
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
      </Swiper>
    </section>

    </>
  );
}
export default Banner
