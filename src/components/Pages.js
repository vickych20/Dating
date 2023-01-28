import React from 'react'
import Footer from './pages/Footer';
import Testimonials from "./pages/Testimonials";
import HomeProf from './pages/HomeProf';
import { BsHeartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsApple } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { AiOutlineDoubleRight } from "react-icons/ai";
import img1 from "./images/01.jpg";
import img11 from "./images/v1.png";
import img22 from './images/v2.png';
import img33 from "./images/v3.png";
import Card from './pages/Card';




const Pages = () => {
    return (
      <div className='overflow-x-hidden'>
        <div>
          <div className="profile pb-[150px]">
            <h1 className="flex justify-center items-center mb-8 text-[60px] text-[#fff] download-btn">
              profile 2
            </h1>
            <div className="flex items-center justify-center gap-2 py-2">
              <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
              <div>
                <BsHeartFill className="text-[#f5ca00]" />
              </div>
              <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
            </div>
            <ul className="flex justify-center items-center gap-8 bgr">
              <li className="flex items-center gap-2 text-[#ff8517]">
                <AiFillHome />
                <a href="index-default.html" className="text-[#ff8517]">
                  Home
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#fff]">
                <AiOutlineDoubleRight />
                <a href="profile-2.html">Profile</a>
              </li>
              <li className="flex items-center gap-2 text-[#ff8517]">
                <AiOutlineDoubleRight className="text-[#fff]" />
                <span className="text-[#ff8517]">profile 2</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4">
          <div className="text-center">
            <h1 className="text-[40px] font-serif download-btn">About Us</h1>
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
              Construction Project Management. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus perspiciatis dignissimos
              provident architecto cum?
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center gap-4 my-8 max-md:flex-col max-w-[1170px] mx-auto">
            <div className="w-[50%] max-md:justify-center">
              <img src={img1} alt="" />
            </div>
            <div className="w-[50%] max-md:w-full">
              <h1 className="text-[40px] font-400 text-[#3d3d3d] max-md:text-[20px]">
                Founded In 1990
              </h1>
              <h2 className="text-[#f5ca00] text-[25px]">
                A World Of Infinite Opportunities
              </h2>
              <p className="text-[#808080] font-extralight max-md:p-[10px] max-md:text-[14px]">
                I want to talk about to things that are quite important to me.
                There are love and one my personal inadequacies. The thing is
                that I’m quite fond of love, I think that it’s a pretty all
                right deal. However, I’m going to have to admit that my
                emotional baggage has built up walls that not even a shock and
                awe campaign could bring down. But I do love. And in fact I even
                love unconditionally.
              </p>
              <p className="py-4 text-[#808080] max-md:p-[10px] max-md:text-[14px]">
                I have a truck. It’s kind of a small truck, but I’m comfortable
                with myself so that’s okay. I think that I love it. I had a
                friend about a year ago ask me if I could have any car in the
                world what would I have. And aside from pointing out that my
                friend and I have clearly ran out of things to discuss and
                should probably go our separate ways, my answer told me that I
                love my truck (obviously I said I would keep my truck).
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex  justify-center items-center text-[#3d3d3d] mb-8 max-md:flex-col max-md:items-start max-sm:items-center">
            <div className="w-[300px] flex flex-col justify-center items-center">
              <img src={img11} alt="" />
              <p className="py-2 text-[23px] font-600 text-[#111111]">
                CREATE PROFILE
              </p>
              <div className="w-[100px] h-[3px] bg-[#ff8517]  bg-gradient-to-r from-[#D2691E	]-500 to-[#ff8517]-500"></div>
              <p className="py-2 text-center text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                quaerat aut voluptatem magnam nesciunt deserunt. Nobis itaque
                aut repellendus, facere ab nihil, praesentius delectus!
              </p>
            </div>
            <div className="w-[300px] flex flex-col justify-center items-center">
              <img src={img22} alt="" />
              <p className="py-2 text-[23px] font-600 text-[#111111]">
                FIND MATCH
              </p>
              <div className="w-[100px] h-[3px] bg-[#ff8517]  bg-gradient-to-r from-[#D2691E	]-500 to-[#ff8517]-500"></div>
              <p className="py-2 text-center text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                quaerat aut voluptatem magnam nesciunt deserunt. Nobis itaque
                aut repellendus, facere ab nihil, praesentius delectus!
              </p>
            </div>
            <div className="w-[300px] flex flex-col justify-center items-center">
              <img src={img33} alt="" />
              <p className="py-2 text-[23px] font-600 text-[#111111]">
                START DATING
              </p>
              <div className="w-[100px] h-[3px] bg-[#ff8517]  bg-gradient-to-r from-[#D2691E	]-500 to-[#ff8517]-500"></div>
              <p className="py-2 text-center text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                quaerat aut voluptatem magnam nesciunt deserunt. Nobis itaque
                aut repellendus, facere ab nihil, praesentius delectus!
              </p>
            </div>
          </div>
        </div>
        <Card />
        <HomeProf />
        <Testimonials />
        <div className="flex justify-around items-center">
          <div className="w-1/2">
            <p>WHY US</p>
            <p className="border-[1px] border-gray-400 py-3 m-3 shadow-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
              deleniti!
            </p>
            <p className="border-[1px] border-gray-400 py-3 m-3 shadow-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
              deleniti!
            </p>
            <p className="border-[1px] border-gray-400 py-3 m-3 shadow-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
              deleniti!
            </p>
            <p className="border-[1px] border-gray-400 py-3 m-3 shadow-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
              deleniti!
            </p>
          </div>
          <div>
                    <p>SKILL</p>
                
                  
          </div>
        </div>

        <div>
          <div className="contact max-md:flex-col max-md:items-center">
            <div className="contact">
              <h1 className="flex justify-center items-center font-sans text-[66px] text-[#fff] download-btn">
                Contact us
              </h1>
              <div className="flex items-center justify-center gap-2">
                <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
                <div>
                  <BsHeartFill className="text-[#f5ca00]" />
                </div>
                <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
              </div>
              <div className="w-[80%] m-auto text-[18px] font-sans text-[#fff] text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti quod nostrum, illo doloremque quis quas atque
                  voluptas dignissimos saepe ipsa voluptatum nulla debitis.
                </p>
              </div>
              <div className="flex justify-center items-center text-[#fff] gap-8 py-8 max-md:flex-col max-md:items-start max-sm:items-center ">
                <div>
                  <MdMarkEmailUnread className="text-[30px] text-[#ff8517] mb-4" />
                  <p>kumarvicky2617@gmail.com</p>
                </div>
                <div>
                  <AiFillHome className="text-[30px] text-[#ff8517] mb-4" />
                  <p>T317 Timber Oak Drive Sundown, TX 79372</p>
                </div>
                <div>
                  <FiPhoneCall className="text-[30px] text-[#ff8517] mb-4" />
                  <p>+000- 654-342- 87654</p>
                </div>
              </div>
              <h1 className="flex py-[] justify-center items-center font-sans text-[36px] text-[#fff] download-btn">
                WE LOVE TALKING
              </h1>
              <div className="flex items-center justify-center gap-2">
                <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
              </div>
              <form
                action=""
                className="max-md:flex-col max-md:items-start max-sm:items-center"
              >
                <div className="flex justify-center items-center py-8">
                  <div className="border-b-2 border-yellow-600 py-4 w-[300px]">
                    <input
                      type="text"
                      placeholder="Your name here"
                      className="bg-transparent border-none outline-none"
                    />
                  </div>
                  <div className="border-b-2 border-white-600 py-4 w-[300px]">
                    <input
                      type="email"
                      placeholder="Your email here"
                      className="bg-transparent border-none outline-none"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center absolute] ">
                  <textarea
                    name=""
                    id=""
                    placeholder="Your message here"
                    className="bg-transparent mb-2 outline-none relative left-[16vh] top-[10vh] border-b-2 border-white-600"
                  ></textarea>
                </div>
                <div className="flex justify-center items-center py-8">
                  <button className="btn rounded-full flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <div className="p-[]">
                      <h1>submit Now</h1>
                    </div>
                    <div>
                      <BsApple className="text-[29px]" />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Pages
