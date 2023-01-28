import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsApple } from "react-icons/bs";
import Footer from "./pages/Footer";
import img1 from "./images/blog1.jpg";
import img2 from "./images/blog2.jpg";
import imgg from "./images/vk2.jpg";
import imgg1 from "./images/vkk2.jpg";
import './blog.css';
//import img3 from "./images/blog3.jpg";
import img4 from "./images/s1.jpg";
import img5 from "./images/s3.jpg";
import img6 from "./images/s4.jpg";
import img7 from "./images/s5.jpg";
import { ImPointRight } from "react-icons/im";
import vicky from './images/blog1.jpg';
import { SlCalender } from "react-icons/sl";

const Blog = () => {
  return (
    <div className="ion">
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
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo provident, cum ratione harum dolor sunt quaerat quam error possimus enim consequuntur atque adipisci eligendi laudantium tempora nulla laborum labore unde praesentium, deleniti doloremque a. Repudiandae mollitia tenetur quos error consectetur deserunt a nihil nam aspernatur. */}
      <div>
        <h1 className="flex justify-center items-center font-sans text-[66px] text-[#] download-btn">
          From The Blog
        </h1>
        <div className="flex items-center justify-center gap-2">
          <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
          <div>
            <BsHeartFill className="text-[#f5ca00]" />
          </div>
          <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
        </div>
        <div>
          <h1 className="text-center font-sans text-[16px] text-[#] w-[70%] m-auto">
            Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque
            mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea,
            vis cu ubique referrentur, sed eu dicant expetendis. Eum cu
          </h1>
        </div>
        <div className="flex justify-center items-start max-xl:flex-col max-2xl:items-center">
          <div className="mx-8 text-[#3d3d3d] flex-1">
            <p className="text-[30px] font-600">SEARCH HERE</p>
            <div className="h-[2px] w-[40px] bg-[#ffd000] m-2"></div>
            <input
              type="Search"
              placeholder="Search"
              className="border-[1px] border-gray-400 outline-none p-2 rounded-full px-[80px] items-start"
            />
            <p className="text-[30px] font-600">ABOUT BLOG</p>
            <div className="h-[2px] w-[40px] bg-[#ffd000] m-2"></div>
            <p className="p-4 max-md:w-full">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              expedita natus impedit ut id
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              omnis a deserunt non quam dolores suscipit nostrum nihil
            </p>
            <p className="text-[30px] font-600">CATEGORIES</p>
            <div className="h-[2px] w-[40px] bg-[#ffd000] m-2"></div>
            <div>
              <li className="flex items-center gap-4">
                <ImPointRight className="text-[#ffd765]" />
                <a href="#">Cras ultricies ligula</a>
              </li>
              <li className="flex items-center gap-4">
                <ImPointRight className="text-[#ffd765]" />
                <a href="#" className="hover:text-[#ffd765]">
                  ligula sed magna
                </a>
              </li>
              <li className="flex items-center gap-4">
                <ImPointRight className="text-[#ffd765]" />
                <a href="#">Quisque velit nisi</a>
              </li>
              <li className="flex items-center gap-4">
                <ImPointRight className="text-[#ffd765]" />
                <a href="#">pretium ut lacinia</a>
              </li>
              <li className="flex items-center gap-4">
                <ImPointRight className="text-[#ffd765]" />
                <a href="#">magna dictum porta</a>
              </li>
              <p className="text-[30px] font-600">RECENT POSTS</p>
              <div className="h-[2px] w-[40px] bg-[#ffd000] m-2"></div>
              <li className="flex">
                <a href="#">
                  <img src={img1} alt="" className="w-[90px]" />
                </a>
                <p className=" px-4 hover:text-[#ffd765] text-[15px] font-bold">
                  {" "}
                  Intentions That Energize You
                  <span className="flex items-center gap-4">
                    <SlCalender className="text-[#ffd765]" />
                    MARCH,30,2023
                  </span>
                </p>
              </li>
              <li className="flex mt-4">
                <a href="#">
                  <img src={img2} alt="" className="w-[90px]" />
                </a>
                <p className=" px-4 hover:text-[#ffd765] text-[15px] font-bold">
                  {" "}
                  Intentions That Energize You
                  <span className="flex items-center gap-4">
                    <SlCalender className="text-[#ffd765]" />
                    MARCH,30,2023
                  </span>
                </p>
              </li>

              <li className="flex mt-4">
                <a href="#">
                  <img src={img4} alt="" className="w-[90px]" />
                </a>
                <p className=" px-4 hover:text-[#ffd765] text-[15px] font-bold">
                  {" "}
                  A Brief History Of Creation
                  <span className="flex items-center gap-4">
                    <SlCalender className="text-[#ffd765]" />
                    MARCH,30,2023
                  </span>
                </p>
              </li>
              <li className="flex mt-4">
                <a href="#">
                  <img src={img1} alt="" className="w-[90px]" />
                </a>
                <p className=" px-4 hover:text-[#ffd765] text-[15px] font-bold">
                  {" "}
                  A Time Travel Postcard
                  <span className="flex items-center gap-4">
                    <SlCalender className="text-[#ffd765]" />
                    MARCH,30,2023
                  </span>
                </p>
              </li>
              <li className="flex mt-4">
                <a href="#">
                  <img src={img6} alt="" className="w-[90px]" />
                </a>
                <p className=" px-4 hover:text-[#ffd765] text-[15px] font-bold">
                  Major Motives Of Our Lives
                  <span className="flex items-center gap-4">
                    <SlCalender className="text-[#ffd765]" />
                    MARCH,30,2023
                  </span>
                </p>
              </li>
            </div>
            <p className="text-[30px] font-600">ARCHIVES</p>
            <div className="h-[2px] w-[40px] bg-[#ffd000] m-2"></div>
            <div className="flex justify-between items-center date">
              <div>
                <li className="flex items-center gap-4">
                  <ImPointRight className="text-[#ffd765]" />
                  <a href="#">June</a>
                </li>
                <li className="flex items-center gap-4">
                  <ImPointRight className="text-[#ffd765]" />
                  <a href="#" className="hover:text-[#ffd765]">
                    January
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <ImPointRight className="text-[#ffd765]" />
                  <a href="#">March</a>
                </li>
                <li className="flex items-center gap-4">
                  <ImPointRight className="text-[#ffd765]" />
                  <a href="#">November</a>
                </li>
                <li className="flex items-center gap-4">
                  <ImPointRight className="text-[#ffd765]" />
                  <a href="#">Desember</a>
                </li>
              </div>
              <div className="block gap-4 p-4">
                <p className="border-[1px] border-gray-300 px-4 bg-[#ffd765]">
                  12
                </p>
                <p className="border-[1px] border-gray-300 px-4 bg-[#ffd765]">
                  28
                </p>
                <p className="border-[1px] border-gray-300 px-4 bg-[#ffd765]">
                  08
                </p>
                <p className="border-[1px] border-gray-300 px-4 bg-[#ffd765]">
                  04
                </p>
                <p className="border-[1px] border-gray-300 px-4 bg-[#ffd765]">
                  13
                </p>
              </div>
            </div>
            <div>
              <p className="text-[30px] font-600">TAGS</p>
              <div className="h-[2px] w-[40px] bg-[#ffd000] m-2"></div>
              <p className="border-[1px] border-gray-300 inline-grid m-4 bg-[#ffd765]">
                Bootstrap
              </p>
              <p className="border-[1px] border-gray-300 inline-grid m-4 bg-[#ffd765]">
                HTMLS
              </p>
              <p className="border-[1px] border-gray-300 inline-grid m-4 bg-[#ffd765]">
                wordpress
              </p>
              <p className="border-[1px] border-gray-300 inline-grid m-4 bg-[#ffd765]">
                css3
              </p>
              <p className="border-[1px] border-gray-300 inline-grid m-4 bg-[#ffd765]">
                creative
              </p>
              <p className="border-[1px] border-gray-300 inline-grid m-4 bg-[#ffd765]">
                multipurpose
              </p>
              <p className="border-[1px] border-gray-300 inline-grid m-4 bg-[#ffd765]">
                Bootstrap
              </p>
            </div>
          </div>
          <div className="text-[#3d3d3d] flex-4 max-md:items-center">
            <img src={vicky} alt="" className="h-[75vh] px-[50px]" />
            <div className="px-[120px]">
              <p className="text-[20px] hover:text-[#ffd765] py-4">
                INTENTIONS THAT ENERGIZE YOU
              </p>
              <p>
                March, 2022 by <span className="text-[#ffd765]">John Doe</span>
              </p>
              <p className="text-[13px] py-4 max-md:flex flex-wrap">
                Cras ultricies ligula sed magna dictum porta. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim. Pellentesque in
                ipsum id orci porta dapibus. Curabitur aliquet quam.Cras
                ultricies ligula sed magna dictum porta. Quisque velit nisi,
                pretium ut lacinia in, elementum id enim. Pellentesque in ipsum
                id orci.
              </p>
              <p className="flex justify-end pb-4">Read More...</p>
            </div>
            <img src={imgg1} alt="" className="h-[75vh] px-[50px]" />
            <div className="px-[120px]">
              <p className="text-[20px] hover:text-[#ffd765] py-4">
                INTENTIONS THAT ENERGIZE YOU
              </p>
              <p>
                March, 2022 by <span className="text-[#ffd765]">John Doe</span>
              </p>
              <p className="text-[13px] py-4">
                Cras ultricies ligula sed magna dictum porta. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim. Pellentesque in
                ipsum id orci porta dapibus. Curabitur aliquet quam.Cras
                ultricies ligula sed magna dictum porta. Quisque velit nisi,
                pretium ut lacinia in, elementum id enim. Pellentesque in ipsum
                id orci.
              </p>
              <p className="flex justify-end pb-4">Read More...</p>
            </div>
            <img src={imgg} alt="" className="h-[75vh] px-[50px]" />
            <div className="px-[120px]">
              <p className="text-[20px] hover:text-[#ffd765] py-4">
                INTENTIONS THAT ENERGIZE YOU
              </p>
              <p>
                March, 2022 by <span className="text-[#ffd765]">John Doe</span>
              </p>
              <p className="text-[13px] py-4">
                Cras ultricies ligula sed magna dictum porta. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim. Pellentesque in
                ipsum id orci porta dapibus. Curabitur aliquet quam.Cras
                ultricies ligula sed magna dictum porta. Quisque velit nisi,
                pretium ut lacinia in, elementum id enim. Pellentesque in ipsum
                id orci.
              </p>
              <p className="flex justify-end pb-4">Read More...</p>
            </div>
            <img src={img7} alt="" className="h-[75vh] px-[50px]" />
            <div className="px-[120px]">
              <p className="text-[20px] hover:text-[#ffd765] py-4">
                INTENTIONS THAT ENERGIZE YOU
              </p>
              <p>
                March, 2022 by <span className="text-[#ffd765]">John Doe</span>
              </p>
              <p className="text-[13px] py-4">
                Cras ultricies ligula sed magna dictum porta. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim. Pellentesque in
                ipsum id orci porta dapibus. Curabitur aliquet quam.Cras
                ultricies ligula sed magna dictum porta. Quisque velit nisi,
                pretium ut lacinia in, elementum id enim. Pellentesque in ipsum
                id orci.
              </p>
              <p className="flex justify-end pb-4">Read More...</p>
            </div>
            <img src={img2} alt="" className="h-[75vh] px-[50px]" />
            <div className="px-[120px]">
              <p className="text-[20px] hover:text-[#ffd765] py-4">
                INTENTIONS THAT ENERGIZE YOU
              </p>
              <p>
                March, 2022 by <span className="text-[#ffd765]">John Doe</span>
              </p>
              <p className="text-[13px] py-4">
                Cras ultricies ligula sed magna dictum porta. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim. Pellentesque in
                ipsum id orci porta dapibus. Curabitur aliquet quam.Cras
                ultricies ligula sed magna dictum porta. Quisque velit nisi,
                pretium ut lacinia in, elementum id enim. Pellentesque in ipsum
                id orci.
              </p>
              <p className="flex justify-end pb-4">Read More...</p>
            </div>
          </div>
        </div>
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

export default Blog;
