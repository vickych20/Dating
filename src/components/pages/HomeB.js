import React from 'react';
import { MdOutlineFamilyRestroom } from 'react-icons/md';


const HomeB = () => {
  return (
    <div className="py-8 flex justify-center items-center gap-8 m-6 overflow-x-hidden max-md:flex-col max-md:items-start">
      <div className="flex justify-between items-center gap-4">
        <div>
          <MdOutlineFamilyRestroom className="text-[65px] text-[#f5ca00]" />
        </div>
        <div className="text-[30px] text-[#3d3d3d]">
          <p className="text-[40px]">1600</p>
          <p className="text-[18px]">Total member</p>
        </div>
      </div>
      <div className="py-8 flex justify-center items-center gap-8">
        <div className="flex justify-between items-center gap-4">
          <MdOutlineFamilyRestroom className="text-[65px] text-[#f5ca00]" />
        </div>
        <div className="text-[30px] text-[#3d3d3d]">
          <p className="text-[40px]">750</p>
          <p className="text-[18px]">Online Members</p>
        </div>
      </div>
      <div className="py-8 flex justify-between items-center gap-8">
        <div className="flex justify-between items-center gap-4">
          <MdOutlineFamilyRestroom className="text-[65px] text-[#f5ca00]" />
        </div>
        <div className="text-[30px] text-[#3d3d3d]">
          <p className="text-[40px]">750</p>
          <p className="text-[18px]">Men Online</p>
        </div>
      </div>
      <div className="py-8 flex justify-between items-center gap-8">
        <div className="flex justify-between items-center gap-4">
          <MdOutlineFamilyRestroom className="text-[65px] text-[#f5ca00]" />
        </div>
        <div className="text-[30px] text-[#3d3d3d]">
          <p className="text-[40px]">750</p>
          <p className="text-[18px]">Women Online</p>
        </div>
      </div>
    </div>
  );
}

export default HomeB