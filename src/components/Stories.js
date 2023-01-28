import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./images/s.jpg";
import img2 from "./images/s1.jpg";
import img3 from "./images/s3.jpg";
import img4 from "./images/s4.jpg";
import img112 from "./images/02.jpg";
import img22 from "./images/vki.jpg";
import img33 from "./images/vk2.jpg";
import { RiAdminLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { FaComments } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";
import img111 from "./images/logo_light.png";
import { ImPinterest2 } from "react-icons/im";
import { FiLinkedin } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import 'swiper/css';
const Stories = () => {
  return (
    <div className="ion">
      <div className="profile pb-[150px]">
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
      <div>
        <div className="flex flex-wrap justify-center items-center max-md:flex-col max-md:items-start max-sm:items-center">
          <div className="w-[300px] m-4 shadow-lg">
            <div>
              <img src={img33} alt="" className="" />
            </div>
            <div>
              <p className="flex items-center justify-center py-4">
                QUINNEL & JONET
              </p>
            </div>
            <div className="m-auto h-[2px] w-[80px] bg-gradient-to-b from-purple-600 to-blue-600"></div>

            <div>
              <p className="mt-4 m-4 text-[15px] text-[#3d3d3d]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, placeat etrchitecto.{" "}
              </p>
            </div>
          </div>
          <div className="w-[300px]  m-4">
            <div>
              <img src={img22} alt="" className="" />
            </div>
            <div>
              <p className="flex items-center justify-center py-4">
                QUINNEL & JONET
              </p>
            </div>
            <div className="m-auto h-[2px] w-[80px] bg-gradient-to-b from-purple-600 to-blue-600"></div>

            <div>
              <p className="mt-4 m-4 text-[15px] text-[#3d3d3d]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, placeat etrchitecto.{" "}
              </p>
            </div>
          </div>
          <div className="w-[300px]  m-4">
            <div>
              <img src={img112} alt="" className="" />
            </div>
            <div>
              <p className="flex items-center justify-center py-4">
                QUINNEL & JONET
              </p>
            </div>
            <div className="m-auto h-[2px] w-[80px] bg-gradient-to-b from-purple-600 to-blue-600"></div>

            <div>
              <p className="mt-4 m-4 text-[15px] text-[#3d3d3d]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, placeat etrchitecto.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center items-center max-md:flex-col max-md:items-start max-sm:items-center">
          <div className="w-[300px] m-4 shadow-lg">
            <div>
              <img src={img33} alt="" className="" />
            </div>
            <div>
              <p className="flex items-center justify-center py-4">
                QUINNEL & JONET
              </p>
            </div>
            <div className="m-auto h-[2px] w-[80px] bg-gradient-to-b from-purple-600 to-blue-600"></div>

            <div>
              <p className="mt-4 m-4 text-[15px] text-[#3d3d3d]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, placeat etrchitecto.{" "}
              </p>
            </div>
          </div>
          <div className="w-[300px]  m-4">
            <div>
              <img src={img22} alt="" className="" />
            </div>
            <div>
              <p className="flex items-center justify-center py-4">
                QUINNEL & JONET
              </p>
            </div>
            <div className="m-auto h-[2px] w-[80px] bg-gradient-to-b from-purple-600 to-blue-600"></div>

            <div>
              <p className="mt-4 m-4 text-[15px] text-[#3d3d3d]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, placeat etrchitecto.{" "}
              </p>
            </div>
          </div>
          <div className="w-[300px]  m-4">
            <div>
              <img src={img112} alt="" className="" />
            </div>
            <div>
              <p className="flex items-center justify-center py-4">
                QUINNEL & JONET
              </p>
            </div>
            <div className="m-auto h-[2px] w-[80px] bg-gradient-to-b from-purple-600 to-blue-600"></div>

            <div>
              <p className="mt-4 m-4 text-[15px] text-[#3d3d3d]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, placeat etrchitecto.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center items-center max-md:flex-col max-md:items-start max-sm:items-center">
          <div className="w-[300px] m-4 shadow-lg">
            <div>
              <img src={img33} alt="" className="" />
            </div>
            <div>
              <p className="flex items-center justify-center py-4">
                QUINNEL & JONET
              </p>
            </div>
            <div className="m-auto h-[2px] w-[80px] bg-gradient-to-b from-purple-600 to-blue-600"></div>

            <div>
              <p className="mt-4 m-4 text-[15px] text-[#3d3d3d]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, placeat etrchitecto.{" "}
              </p>
            </div>
          </div>
          <div className="w-[300px]  m-4">
            <div>
              <img src={img22} alt="" className="" />
            </div>
            <div>
              <p className="flex items-center justify-center py-4">
                QUINNEL & JONET
              </p>
            </div>
            <div className="m-auto h-[2px] w-[80px] bg-gradient-to-b from-purple-600 to-blue-600"></div>

            <div>
              <p className="mt-4 m-4 text-[15px] text-[#3d3d3d]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, placeat etrchitecto.{" "}
              </p>
            </div>
          </div>
          <div className="w-[300px]  m-4">
            <div>
              <img src={img112} alt="" className="" />
            </div>
            <div>
              <p className="flex items-center justify-center py-4">
                QUINNEL & JONET
              </p>
            </div>
            <div className="m-auto h-[2px] w-[80px] bg-gradient-to-b from-purple-600 to-blue-600"></div>

            <div>
              <p className="mt-4 m-4 text-[15px] text-[#3d3d3d]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, placeat etrchitecto.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="contact max-md:flex-col max-md:items-center">
          <div className="contact">
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
            <div className="w-[80%] m-auto text-[18px] font-sans text-[#fff] text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti quod nostrum, illo doloremque quis quas atque voluptas
                dignissimos saepe ipsa voluptatum nulla debitis.
              </p>
            </div>
            <div className="flex justify-center items-center text-[#fff] gap-8 py-8 max-md:flex-col max-md:items-start max-sm:items-center ">
              <div>
                <MdMarkEmailUnread className="text-[30px] text-[#ff8517] mb-4" />
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
        </div>
      </div>
      <div className="bg-[#000] py-8">
        <div className="py-4">
          <img src={img111} alt="" />
        </div>
        <div className="flex justify-center items-center gap-4 text-[#fff] py-8 text-[25px]">
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
  );
};

export default Stories;
