import React from 'react'
import img1 from '../images/v1.png';
import img2 from '../images/v2.png';
import img3 from '../images/v3.png';

const Create = () => {
  return (
    <div className="flex  justify-center items-center text-[#3d3d3d] mb-8 max-md:flex-col max-md:items-start max-sm:items-center">
      <div className="w-[300px] flex flex-col justify-center items-center">
        <img src={img1} alt="" />
        <p className="py-2 text-[23px] font-600 text-[#111111]">
          CREATE PROFILE
        </p>
        <div className="w-[100px] h-[3px] bg-[#ff8517]  bg-gradient-to-r from-[#D2691E	]-500 to-[#ff8517]-500"></div>
        <p className="py-2 text-center text-[13px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat
          aut voluptatem magnam nesciunt deserunt. Nobis itaque aut repellendus,
          facere ab nihil, praesentius delectus!
        </p>
      </div>
      <div className="w-[300px] flex flex-col justify-center items-center">
        <img src={img1} alt="" />
        <p className="py-2 text-[23px] font-600 text-[#111111]">FIND MATCH</p>
        <div className="w-[100px] h-[3px] bg-[#ff8517]  bg-gradient-to-r from-[#D2691E	]-500 to-[#ff8517]-500"></div>
        <p className="py-2 text-center text-[13px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat
          aut voluptatem magnam nesciunt deserunt. Nobis itaque aut repellendus,
          facere ab nihil, praesentius delectus!
        </p>
      </div>
      <div className="w-[300px] flex flex-col justify-center items-center">
        <img src={img1} alt="" />
        <p className="py-2 text-[23px] font-600 text-[#111111]">START DATING</p>
        <div className="w-[100px] h-[3px] bg-[#ff8517]  bg-gradient-to-r from-[#D2691E	]-500 to-[#ff8517]-500"></div>
        <p className="py-2 text-center text-[13px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat
          aut voluptatem magnam nesciunt deserunt. Nobis itaque aut repellendus,
          facere ab nihil, praesentius delectus!
        </p>
      </div>

      {/* <div>
        <div>
         
        </div>
        <div>
          <img src={img2} alt="" />
          <p>FIND MATCH</p>
        </div>
        <div>
          <img src={img3} alt="" />
          <p>START DATING</p>
        </div>
      </div> */}
    </div>
  );
}

export default Create