import React from "react";
import { BsHeartFill } from "react-icons/bs";

const Our = () => {
  return (
    <div className="py-4">
      <div className="text-center">
        <h1 className="text-[40px] font-serif download-btn">Our Recent Blogs</h1>
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
      <div className="flex items-center justify-center w-[75%] m-auto py-4">
        <p className="text-center text-[#808080]">
          The overall planning, coordination, and control of a project from
          beginning to completion. CPM is aimed at meeting a client's
          Construction Project Management. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis dignissimos provident architecto cum?
        </p>
      </div>
    </div>
  );
};

export default Our;
