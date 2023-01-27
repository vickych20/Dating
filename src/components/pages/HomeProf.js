import React from 'react';
import img1 from '../images/hie.jpg';
import img2 from '../images/hk1.jpg';
import img3 from '../images/hy1.jpg';
import img4 from '../images/htr3.jpg';
import './ss.css';

const HomeProf = () => {
  return (
    <div
      className="flex-wrap flex items-center justify-center gap-4 m-8 max-md:flex-col max-md:items-start max-sm:items-center vicky max-2xl:justify-center max-2xl:items-center"
     
    >
      <div className="w-[300px] border-[1px] border-gray-100 shadow-md hover:shadow-2xl">
        <div>
          <img src={img1} alt="" className="hover:shadow-2xl" />
        </div>
        <div className="text-center pb-4">
          <h5 className="text-[#febe1c]">Jimmy Perez</h5>
          <span>25 Year old</span>
        </div>
      </div>
      <div className="w-[300px] border-[1px] border-gray-100 shadow-md hover:shadow-2xl">
        <div>
          <img src={img2} alt="" className="hover:shadow-2xl" />
        </div>
        <div className="text-center pb-4">
          <h5 className="text-[#febe1c]">Curtis Massey</h5>
          <span>35 Year old</span>
        </div>
      </div>
      <div className="w-[300px] border-[1px] border-gray-100 shadow-md hover:shadow-2xl">
        <div>
          <img src={img3} alt="" className="hover:shadow-2xl" />
        </div>
        <div className="text-center pb-4">
          <h5 className="text-[#febe1c]">Mike Carter</h5>
          <span>65 Year old</span>
        </div>
      </div>
      <div className="w-[300px] border-[1px] border-gray-100 shadow-md hover:shadow-2xl">
        <div>
          <img src={img4} alt="" className="hover:shadow-2xl" />
        </div>
        <div className="text-center pb-4">
          <h5 className="text-[#febe1c]">Cecelia Torres</h5>
          <span>45 Year old</span>
        </div>
      </div>
    </div>
  );
}

export default HomeProf