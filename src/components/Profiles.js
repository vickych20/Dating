import React from 'react'
import './profile.css';
import { BsHeartFill } from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import { AiOutlineDoubleRight } from "react-icons/ai";
import img1 from './images/s.jpg'
import img2 from './images/s6.jpg'
import img3 from './images/s3.jpg'
import img4 from './images/s4.jpg'
import img5 from './images/s5.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import img6 from "./images/s.jpg";
import img7 from "./images/s1.jpg";
import img8 from "./images/s3.jpg";
import img9 from "./images/s4.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";
import img10 from "./images/logo_light.png";
import { ImPinterest2 } from "react-icons/im";
import { FiLinkedin } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

//import img6 from './images/s6.jpg'


const Profiles = () => {
    return (
      <div>
        <div className="profile pb-[100px]">
          <h1 className="flex justify-center items-center mb-8 text-[60px] text-[#fff] download-btn">
            profile 2
          </h1>
          <div className="flex items-center justify-center gap-2 py-2">
            <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
            <div>
              <BsHeartFill className="text-[#f5ca00]" />
            </div>
            <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
          </div>
          <ul className="flex justify-center items-center gap-8 bgr">
            <li className="flex items-center gap-2 text-[#ff8517]">
              <AiFillHome />
              <a href="index-default.html" className="text-[#ff8517]">
                Home
              </a>
            </li>
            <li className="flex items-center gap-2 text-[#fff]">
              <AiOutlineDoubleRight />
              <a href="profile-2.html">Profile</a>
            </li>
            <li className="flex items-center gap-2 text-[#ff8517]">
              <AiOutlineDoubleRight className="text-[#fff]" />
              <span className="text-[#ff8517]">profile 2</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-around items-center gap-8 text-[20px] text-[#ffbe4b] pt-[80px] py-4 border-b-[1px] border-gray-400 font-bold uppercase max-md:flex-col max-sm:items-center">
          <div>
            <p>user</p>
          </div>
          <div>
            <p>gender</p>
          </div>
          <div>
            <p>marital</p>
          </div>
          <div>
            <p>age</p>
          </div>
        </div>
        <div className="flex justify-around items-center gap-8 text-[15px] text-[#] pt-[30px] py-2 border-b-[1px] border-gray-400">
          <div className="flex gap-4">
            <img src={img1} alt="" className="w-[50px]" />
            <p className="hover:text-[#ffbe4b]">Jimmy Perez</p>
          </div>
          <div>
            <p>Male</p>
          </div>
          <div>
            <p>Single</p>
          </div>
          <div>
            <p>23 Years Old</p>
          </div>
        </div>
        <div className="flex justify-around items-center gap-8 text-[15px] text-[#] pt-[30px] py-2 border-b-[1px] border-gray-400">
          <div className="flex gap-4">
            <img src={img2} alt="" className="w-[50px]" />
            <p className="hover:text-[#ffbe4b]">Curtis Massey</p>
          </div>
          <div>
            <p>Male</p>
          </div>
          <div>
            <p>Single</p>
          </div>
          <div>
            <p>23 Years Old</p>
          </div>
        </div>
        <div className="flex justify-around items-center gap-8 text-[15px] text-[#] pt-[30px] py-2 border-b-[1px] border-gray-400">
          <div className="flex gap-4">
            <img src={img3} alt="" className="w-[50px]" />
            <p className="hover:text-[#ffbe4b]">Mike Carter</p>
          </div>
          <div>
            <p>Male</p>
          </div>
          <div>
            <p>Single</p>
          </div>
          <div>
            <p>23 Years Old</p>
          </div>
        </div>
        <div className="flex justify-around items-center gap-8 text-[15px] text-[#] pt-[30px] py-2 border-b-[1px] border-gray-400">
          <div className="flex gap-4">
            <img src={img4} alt="" className="w-[50px]" />
            <p className="hover:text-[#ffbe4b]">Cecelia Torres</p>
          </div>
          <div>
            <p>Male</p>
          </div>
          <div>
            <p>Single</p>
          </div>
          <div>
            <p>23 Years Old</p>
          </div>
        </div>
        <div className="flex justify-around items-center gap-8 text-[15px] text-[#] pt-[30px] py-2 border-b-[1px] border-gray-400">
          <div className="flex gap-4">
            <img src={img5} alt="" className="w-[50px]" />
            <p className="hover:text-[#ffbe4b]">Jane Garza</p>
          </div>
          <div>
            <p>Male</p>
          </div>
          <div>
            <p>Single</p>
          </div>
          <div>
            <p>23 Years Old</p>
          </div>
        </div>
        <div className="py-8">
          <div className="text-center">
            <h1 className="text-[40px] font-serif download-btn">
              Recent Added Profiles
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 py-2">
            <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={img6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} alt="" />
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
        <div className="hyt">
          <div>
            <h1 className="flex justify-center items-center font-sans text-[66px] text-[#fff] download-btn">
              Contact us
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
              <div>
                <BsHeartFill className="text-[#f5ca00]" />
              </div>
              <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
            </div>
            <div>
              <h1 className="text-center font-sans text-[16px] text-[#fff] w-[70%] m-auto">
                Eum cu tantas legere complectitur, hinc utamur ea eam. Eum
                patrioque mnesarchum eu, diam erant convenire et vis. Et essent
                evertitur sea, vis cu ubique referrentur, sed eu dicant
                expetendis. Eum cu
              </h1>
            </div>
            <div className="flex justify-center items-center text-[#fff] gap-8 py-8 max-md:flex-col max-md:items-center max-sm:items-center text-center">
              <div>
                <MdMarkEmailUnread className="text text-[30px] text-[#ff8517] mb-4" />
                <p>kumarvicky2617@gmail.com</p>
              </div>
              <div>
                <AiFillHome className="text-[30px] text-[#ff8517] mb-4" />
                <p>T317 Timber Oak Drive Sundown, TX 79372</p>
              </div>
              <div>
                <FiPhoneCall className="text-[30px] text-[#ff8517] mb-4" />
                <p>+000- 654-342- 87654</p>
              </div>
            </div>
          </div>
          <div className="bg-[#000] py-8">
            <div className="py-4">
              <img src={img10} alt="" />
            </div>
            <div className="flex justify-center items-center gap-4 text-[#fff] py-8 text-[20px]">
              <FaFacebookF />
              <AiOutlineInstagram />
              <ImPinterest2 />
              <FiLinkedin />
              <FaTelegramPlane />
            </div>
            <div>
              <p className="text-[#fff] flex justify-center items-center">
                © 2022 - Cupid Love All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profiles
