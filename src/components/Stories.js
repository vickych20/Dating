import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./images/s.jpg";
import img2 from "./images/s1.jpg";
import img3 from "./images/s3.jpg";
import img4 from "./images/s4.jpg";
import 'swiper/css';
const Stories = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Stories;
