import React from 'react';
import img1 from '../images/01.jpg';
import './ss.css'

const Homea = () => {
  return (
    <div className="flex justify-center items-center gap-4 my-8 max-md:flex-col max-w-[1170px] mx-auto">
      <div className="w-[50%] max-md:justify-center" data-aos="fade-up-right">
        <img src={img1} alt="" />
      </div>
      <div className="w-[50%] max-md:w-full" data-aos="fade-up-left">
        <h1 className="text-[40px] font-400 text-[#3d3d3d] max-md:text-[20px]">
          Founded In 1990
        </h1>
        <h2 className="text-[#f5ca00] text-[25px]">
          A World Of Infinite Opportunities
        </h2>
        <p className="text-[#808080] font-extralight max-md:p-[10px] max-md:text-[14px]">
          I want to talk about to things that are quite important to me. There
          are love and one my personal inadequacies. The thing is that I’m quite
          fond of love, I think that it’s a pretty all right deal. However, I’m
          going to have to admit that my emotional baggage has built up walls
          that not even a shock and awe campaign could bring down. But I do
          love. And in fact I even love unconditionally.
        </p>
        <p
          className="py-4 text-[#808080] max-md:p-[10px] max-md:text-[14px]"
         
        >
          I have a truck. It’s kind of a small truck, but I’m comfortable with
          myself so that’s okay. I think that I love it. I had a friend about a
          year ago ask me if I could have any car in the world what would I
          have. And aside from pointing out that my friend and I have clearly
          ran out of things to discuss and should probably go our separate ways,
          my answer told me that I love my truck (obviously I said I would keep
          my truck).
        </p>
      </div>
    </div>
  );
}

export default Homea