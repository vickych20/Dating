import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsLifePreserver } from "react-icons/bs";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const First = () => {
  return (
    <div className="w-full flex justify-around items-center py-6 gap-8">
      <div className="flex gap-4 items-center">
        <HiOutlineMail />
        <p>support@website.com</p>
        <BsFillTelephonePlusFill className="text-[13px]" />
        <p>(007) 123 8765784</p>
      </div>
      <div className="flex gap-[50px] items-center">
        <div className="flex gap-4 items-center">
          <FaFacebookF />
          <AiOutlineTwitter />
          <AiOutlineInstagram />
          <BsLifePreserver />
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/login">Login</Link>

          <span className="h-[20px] w-[2px] bg-black"></span>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default First