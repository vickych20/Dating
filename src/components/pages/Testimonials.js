import React from 'react'
import './down.css';
import { BsHeartFill } from 'react-icons/bs';
import ImageSlider, { Slide } from "react-auto-image-slider";
import ravi from "../images/w.jpg";
import img3 from "../images/wa.jpg";
import img2 from "../images/wb.jpg";
import img4 from '../images/rss.jpg';


const Testimonials = () => {
  return (
    <div
      className="relative overflow-x-hidden max-h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${img4})` }}
    >
      <div className="text-center  py-8">
        <h1 className="text-[50px] font-serif download-btn">Testimonials</h1>
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
      <ImageSlider effectDelay={500} autoPlayDelay={1000}>
        <Slide>
          <div className="w-full flex flex-col justify-center py-[80px]">
            <div className="w-[150px] h-[150px] m-auto">
              <img
                alt="ravi"
                src={ravi}
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="w-[70%] m-auto text-[#fff]">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem laboriosam aperiam eum numquam quo? Quas architecto,
                officia voluptates temporibus sed reprehenderit minus soluta?
              </p>
            </div>
          </div>
        </Slide>
        <Slide>
          <div className="w-full flex flex-col  justify-center py-[80px]">
            <div className="w-[150px] h-[150px] m-auto">
              <img
                alt="img3"
                src={img3}
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="w-[70%] m-auto text-[#fff] text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem laboriosam aperiam eum numquam quo? Quas architecto,
                officia voluptates temporibus sed reprehenderit minus soluta?
              </p>
            </div>
          </div>
        </Slide>
        <Slide>
          <div className="w-full flex flex-col py-[80px]">
            <div className="w-[150px] h-[150px] m-auto">
              <img
                alt="img2"
                src={img2}
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="w-[70%] m-auto text-[#fff]">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem laboriosam aperiam eum numquam quo? Quas architecto,
                officia voluptates temporibus sed reprehenderit minus soluta?
              </p>
            </div>
          </div>
        </Slide>
      </ImageSlider>
    </div>
  );
}

export default Testimonials