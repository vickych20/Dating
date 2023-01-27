import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsApple } from "react-icons/bs";
import Footer from './pages/Footer'

const Contact = () => {
  return (
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
      <div>
        <div className="hyt">
          <div>
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
            <div>
              <h1 className="text-center font-sans text-[16px] text-[#fff] w-[70%] m-auto">
                Eum cu tantas legere complectitur, hinc utamur ea eam. Eum
                patrioque mnesarchum eu, diam erant convenire et vis. Et essent
                evertitur sea, vis cu ubique referrentur, sed eu dicant
                expetendis. Eum cu
              </h1>
            </div>
            <div className="flex justify-center items-center text-[#fff] gap-8 py-8 max-md:flex-col max-md:items-center max-sm:items-center text-center">
              <div>
                <MdMarkEmailUnread className="text text-[30px] text-[#ff8517] mb-4" />
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
            <div>
              <h1 className="flex py-[20px] justify-center items-center font-sans text-[36px] text-[#fff] download-btn">
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
                <div className="flex justify-center items-center absolute]">
                  <textarea
                    name=""
                    id=""
                    placeholder="Your message here"
                    className="bg-transparent border-none outline-none relative left-[16vh] top-[10vh]"
                  ></textarea>
                </div>
                <div className="flex justify-center items-center py-8">
                  <button className="btn rounded-full flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <div className="p-[10px]">
                      <h1>submit Now</h1>
                    </div>
                    <div>
                      <BsApple className="text-[29px]" />
                    </div>
                  </button>
                </div>
              </form>
                    <div>
                      <Footer />
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
