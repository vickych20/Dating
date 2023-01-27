import React from "react";
import { BsHeartFill } from "react-icons/bs";

const True = () => {
  return (
    <div className="py-4">
      <div className="text-center">
        <h1 className="text-[40px] font-serif download-btn">
         They found True Love
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
    </div>
  );
};

export default True;
