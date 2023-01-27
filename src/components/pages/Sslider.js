import React from "react";
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

import './ss.css';
import image from '../pages/images';




const Sslider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

 
 

 

  return (
    <div>
      <div className="App flex justify-center items-center">
        <motion.div ref={carousel} className="carousel select-none" whileTap={{cursor:"grabbing"}}>
          <motion.div drag="x" dragConstraints={{right:0,left:-width}} className="inner-carousel flex">
            {image.map((items) => {
              return (
                <motion.div className="item h-[20rem] w-[20rem] p-[10px] pointer-events-none max-md:mt-[100px]" key={image}>
                  <img
                    src={items}
                    alt=""
                    className="w-full h-full rounded-lg"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis, .
                  </p>
                  <button className="bg-[#FFFF00]  w-[300px] p-[16px] text-[20px] text-[#3a3939] m-auto">ADAM & HEAVEN</button>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sslider;
