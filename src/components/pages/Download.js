import React from 'react'
import img1 from '../images/ra1.png';
import img2 from '../images/r1.png';
import './down.css';
import { BsHeartFill } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';



const Download = () => {
  return (
    <div className="back max-md:flex-col max-md:items-start max-sm:items-center">
      <div className="text-center text-[#fff]">
        <div>
          <p className="text-[45px] pt-[6rem] download-btn">Download Our App</p>
          <div className="flex items-center justify-center gap-2 py-3 pt-8">
            <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
            <div>
              <BsHeartFill className="text-[#f5ca00]" />
            </div>
            <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-[130px] h-[3px] bg-[#ff8517]"></div>
          </div>
          <h1 className="pt-[4rem] text-[45px] download-btn">
            Want To Find Your Match..!! Get Our App Now.
          </h1>
          <div className="flex justify-center items-center gap-8 max-md:flex-col max-md:items-start max-sm:items-center">
            <button className="btn rounded-full flex items-center gap-2">
              <div>
                <BsApple className="text-[29px]" />
              </div>
              <div className="">
                <p className="text-[10px]">Available on The</p>
                <h1>App Store</h1>
              </div>
            </button>
            <button className="btna rounded-full flex items-center gap-3 bg-[#fff] text-[#000]">
              <div>
                <img src={img2} alt="" />
              </div>
              <div>
                <p className="text-[16px]">Get it on</p>
                <h1>Google play</h1>
              </div>
            </button>
          </div>
          <div className="flex justify-start items-center pt-[10vh] max-md:flex-col max-md:items-start max-sm:items-center">
            <div className="imgat"></div>
            <div className="px-8">
              <p className="text-[115px] mt-[30px] text-[#ffbc05]">1600</p>
              <h1 className="text-[40px] mt-[30px] py-8 font-500">download</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download