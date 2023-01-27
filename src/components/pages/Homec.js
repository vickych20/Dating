import React from 'react'
import bg7 from './../images/bg-7.jpg';
import './home.css';
import { BsHeartFill } from 'react-icons/bs';
import {AiFillPlayCircle} from 'react-icons/ai'

const Homec = () => {
  return (
    <div className="relative overflow-x-hidden h-[300px] bg-cover bg-center" style={{backgroundImage: `url(${bg7})`}}>
      {/* <div>
        <img src={bg7} alt="" className="w-full h-[300px]" />
      </div> */}
      <div className="flex flex-col items-center justify-center text-[#fff]">
        <div className="text-center relative]">
          <h1 className="text-[40px] font-mono download-btn">
            nothing Say Better, Then a Video
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2 py-2">
          <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
          <div>
            <BsHeartFill className="text-[#f5ca00]" />
          </div>
          <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[130px] h-[3px] bg-[#ff8517]"></div>
        </div>
        <div className="flex items-center justify-center max-w-[700px] m-auto py-4">
          <p className="text-center text-[#]">
            The overall planning, coordination, and control of a project from
            beginning to completion. CPM is aimed at meeting a client's
            Construction Project Management.
          </p>
        </div>
        <div className="flex items-center justify-center w-[75%] m-auto py-4">
          <p className="text-center text-[#]">See video</p>
        </div>
        <div className="w-[40px] m-auto">
          <AiFillPlayCircle className="text-[50px] bg-[#ff8517] rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Homec