import React from 'react';
import img1 from "../images/logo_light.png";
import { ImPinterest2 } from 'react-icons/im';
import { FiLinkedin } from 'react-icons/fi'
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
    return (
      <div className="bg-[#000] py-8">
        <div className="py-4">
          <img src={img1} alt="" />
        </div>
        <div className="flex justify-center items-center gap-4 text-[#fff] py-8 text-[25px]">
          <FaFacebookF />
          <AiOutlineInstagram />
          <ImPinterest2 />
          <FiLinkedin />
          <FaTelegramPlane />
        </div>
        <div>
          <p className='text-[#fff] flex justify-center items-center'>© 2022 - Cupid Love All Right Reserved</p>
        </div>
      </div>
    );
}

export default Footer
