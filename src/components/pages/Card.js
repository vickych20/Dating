import React from "react";
import img1 from "../images/02.jpg";
import img2 from "../images/vki.jpg";
import img3 from "../images/vk2.jpg";
import {RiAdminLine} from 'react-icons/ri'
import { FcLike } from "react-icons/fc";
import { FaComments } from "react-icons/fa";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center items-center max-md:flex-col max-md:items-start max-sm:items-center">
      <div className="w-[300px] m-4 shadow-lg">
        <div>
          <img src={img3} alt="" className="" />
        </div>
        <div className="flex items-center gap-8 mt-5 m-4">
          <div className="text-[#ffbc05] text-[22px]">
            <span>27</span>
            <p>MAR</p>
          </div>
          <div className="w-[2px] h-[40px] bg-[#ffbc05]"></div>
          <div>
            <p className="hover:text-[#ffbc05] text-[#3d3d3d]">
              INTENTIONS THAT ENERGIZE YOU
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-4 m-4">
          <div>
            <RiAdminLine className="text-[#ffbc05]" />
            <p className="text-[12px]">Admin</p>
          </div>
          <div>
            <FcLike className="text-[#ffbc05]" />
            <p className="text-[12px]">98 Like</p>
          </div>
          <div>
            <FaComments className="text-[#ffbc05]" />
            <p className="text-[12px]">comments</p>
          </div>
        </div>
        <div>
          <p className="mt-4 m-4 text-[15px] text-[#3d3d3d]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, placeat et! Libero ipsam vero quo consequuntur beatae,
            voluptate re assumenda architecto.{" "}
          </p>
        </div>
        <div>
          <p className="text-[#3d3d3d] flex justify-end pb-4">Read More...</p>
        </div>
      </div>
      <div className="w-[300px]  m-4">
        <div>
          <img src={img2} alt="" className="" />
        </div>
        <div className="flex items-center gap-8 mt-5 m-4">
          <div className="text-[#ffbc05] text-[22px]">
            <span>27</span>
            <p>MAR</p>
          </div>
          <div className="w-[2px] h-[40px] bg-[#ffbc05]"></div>
          <div>
            <p className="hover:text-[#ffbc05] text-[#3d3d3d]">
              INTENTIONS THAT ENERGIZE YOU
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-4 m-4">
          <div>
            <RiAdminLine className="text-[#ffbc05]" />
            <p className="text-[12px]">Admin</p>
          </div>
          <div>
            <FcLike className="text-[#ffbc05]" />
            <p className="text-[12px]">98 Like</p>
          </div>
          <div>
            <FaComments className="text-[#ffbc05]" />
            <p className="text-[12px]">comments</p>
          </div>
        </div>
        <div>
          <p className="mt-4 m-4 text-[15px] text-[#3d3d3d]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, placeat et! Libero ipsam vero quo consequuntur beatae,
            voluptate re assumenda architecto.{" "}
          </p>
        </div>
        <div>
          <p className="text-[#3d3d3d] flex justify-end pb-4">Read More...</p>
        </div>
      </div>
      <div className="w-[300px]  m-4">
        <div>
          <img src={img1} alt="" className="" />
        </div>
        <div className="flex items-center gap-8 mt-5 m-4">
          <div className="text-[#ffbc05] text-[22px]">
            <span>27</span>
            <p>MAR</p>
          </div>
          <div className="w-[2px] h-[40px] bg-[#ffbc05]"></div>
          <div>
            <p className="hover:text-[#ffbc05] text-[#3d3d3d]">
              INTENTIONS THAT ENERGIZE YOU
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-4 m-4">
          <div>
            <RiAdminLine className="text-[#ffbc05]" />
            <p className="text-[12px]">Admin</p>
          </div>
          <div>
            <FcLike className="text-[#ffbc05]" />
            <p className="text-[12px]">98 Like</p>
          </div>
          <div>
            <FaComments className="text-[#ffbc05]" />
            <p className="text-[12px]">comments</p>
          </div>
        </div>
        <div>
          <p className="mt-4 m-4 text-[15px] text-[#3d3d3d]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, placeat et! Libero ipsam vero quo consequuntur beatae,
            voluptate re assumenda architecto.{" "}
          </p>
        </div>
        <div>
          <p className="text-[#3d3d3d] flex justify-end pb-4">Read More...</p>
        </div>
      </div>
    </div>
  );
};

export default Card;










//     {/* <div className="flex justify-between items-center">
                  
        // <span>27</span>
        // <p>MAR</p>
        //
        // <div className="w-[3px] h-[200px] text-[#736523]"></div>
        //       </div> */}