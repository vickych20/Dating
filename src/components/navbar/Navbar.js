// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";
 import img1 from "../images/logo_light.png";
// import { AiOutlineDown } from "react-icons/ai";
// import { RxCross2 } from "react-icons/rx";
// import { FiAlignRight } from "react-icons/fi";

// const Navbar = () => {
//   const [mobile, setMobile] = useState(false);
  
  
//   return (
//     <div className="w-full bg-[#352F2F]">
//       <div className="flex justify-center items-center  h-[75px]  overflow-x-hidden max-2xl:justify-center max-w-[1200px] m-auto">
//         <h3 className="text-[30px] text-[#fff]">
//           <img src={img1} alt="" className="w-[100px]" />
//         </h3>
//         <ul className="max-xl:text-[10px] menu flex justify-end list-none w-[75%] text-[16px] font-500	uppercase" {mobile ? "nav-link-mobile" :"nav-link"} onClick={()=>setMobile(false)}">
//           <Link
//             to="/"
//             className="text-[#fff] text-[15px] p-[1rem] cursor-pointer"
//           >
//             <li>
//               <div className="relative flex items-center gap-1">
//                 <p>Home</p>
//                 <AiOutlineDown className="text-[13px]" />
//                 <div className="absolute top-0 left-0 mt-[15px]"></div>
//               </div>
//             </li>
//           </Link>
//           <Link
//             to="/profiles"
//             className="text-[#fff] text-[15px] p-[1rem] cursor-pointer "
//           >
//             <li>
//               <div className="relative flex items-center gap-1">
//                 <p>profiles</p>
//                 <AiOutlineDown className="text-[13px]" />
//                 <div className="absolute top-0 left-0 mt-[15px]"></div>
//               </div>
//             </li>
//           </Link>
//           <Link
//             to="/stories"
//             className="text-[#fff] text-[15px] p-[1rem] cursor-pointer"
//           >
//             <li>
//               <div className="relative flex items-center gap-1">
//                 <p>stories</p>
//                 <AiOutlineDown className="text-[13px]" />
//                 <div className="absolute top-0 left-0 mt-[15px]"></div>
//               </div>
//             </li>
//           </Link>
//           <Link
//             to="/pages"
//             className="text-[#fff] text-[15px] p-[1rem] cursor-pointer"
//           >
//             <li>
//               <div className="relative flex items-center gap-1">
//                 <p>pages</p>
//                 <AiOutlineDown className="text-[13px]" />
//                 <div className="absolute top-0 left-0 mt-[15px]"></div>
//               </div>
//             </li>
//           </Link>
//           <Link
//             to="/blog"
//             className="text-[#fff] text-[15px] p-[1rem] cursor-pointer"
//           >
//             <li>
//               <div className="relative flex items-center gap-1">
//                 <p>blog</p>
//                 <AiOutlineDown className="text-[13px]" />
//                 <div className="absolute top-0 left-0 mt-[15px]"></div>
//               </div>
//             </li>
//           </Link>
//           <Link
//             to="/shortcode"
//             className="text-[#fff] text-[15px] p-[1rem] cursor-pointer"
//           >
//             <li>
//               <div className="relative flex items-center gap-1">
//                 <p>shortcode</p>
//                 <AiOutlineDown className="text-[13px]" />
//                 <div className="absolute top-0 left-0 mt-[15px]"></div>
//               </div>
//             </li>
//           </Link>
//           <Link
//             to="/contact"
//             className="text-[#fff] text-[15px] p-[1rem] cursor-pointer"
//           >
//             <li>
//               <div className="relative flex items-center gap-1">
//                 <p>contact</p>
//                 <AiOutlineDown className="text-[13px]" />
//                 <div className="absolute top-0 left-0 mt-[15px]"></div>
//               </div>
//             </li>
//           </Link>
//         </ul>
//         <button className="mobile-menu" onClick={() => setMobile(!mobile)}>
//           {mobile ? <RxCross2 /> : <FiAlignRight />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import {AiOutlineDown} from 'react-icons/ai'

import "./navbar.css";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [menu, setMenu] = useState({
    home: false,
    profile:true

  });
  return (
    <nav className="navbar">
      <h3 className="logo">
        {" "}
        <h3 className="text-[30px] text-[#fff]">
          <img src={img1} alt="" className="w-[100px]" />{" "}
        </h3>
      </h3>
      <ul
        className={mobile ? "nav-link-mobile" : "nav-link"}
        onClick={() => setMobile(false)}
      >
        <Link to="/" className="home  items-center">
          <li className="">
            <span
              className="cursor-pointer"
              onMouseLeave={() => setMenu({ ...menu, home: false })}
              onMouseEnter={() => setMenu({ ...menu, home: true })}
            >
              home
            </span>
            {menu.home && (
              <ul className="absolute mt-8 top-[] left-[100px] flex flex-col items-center bg-black text-white">
                <li className="py-2 w-full cursor-pointer px-6 hover:bg-blue-600 ">
                  product
                </li>
                <li className="py-2 w-full cursor-pointer px-6 hover:bg-blue-600 ">
                  golang
                </li>
                <li className="py-2 w-full cursor-pointer px-6 hover:bg-blue-600 ">
                  javascript
                </li>
                <li className="py-2 w-full cursor-pointer px-6 hover:bg-blue-600 ">
                  raect
                </li>
              </ul>
            )}
          </li>
         
        </Link>
        <Link to="/profiles" className="home">
          <li className="">
            <span
              className="cursor-pointer"
              onMouseLeave={() => setMenu({ ...menu, home: false })}
              onMouseEnter={() => setMenu({ ...menu, home: true })}
            >
              profile
            </span>
            {menu.home && (
              <ul className="absolute mt-8 top-[] left-[100px] flex flex-col items-center bg-black text-white">
                <li className="py-2 w-full cursor-pointer px-6 hover:bg-blue-600 ">
                  product
                </li>
                <li className="py-2 w-full cursor-pointer px-6 hover:bg-blue-600 ">
                  golang
                </li>
                <li className="py-2 w-full cursor-pointer px-6 hover:bg-blue-600 ">
                  javascript
                </li>
                <li className="py-2 w-full cursor-pointer px-6 hover:bg-blue-600 ">
                  raect
                </li>
              </ul>
            )}
          </li>
        </Link>
        <Link to="/stories" className="home">
          <li className="">
            <span
              className="cursor-pointer"
              onMouseLeave={() => setMenu({ ...menu, home: false })}
              onMouseEnter={() => setMenu({ ...menu, home: true })}
            >
              stories
            </span>
            {menu.home && (
              <ul className="absolute mt-8 top-[] left-[100px] flex flex-col items-center bg-black text-white">
                <li className="py-2 w-full cursor-pointer px-6 hover:bg-blue-600 ">
                  product
                </li>
                <li className="py-2 w-full cursor-pointer px-6 hover:bg-blue-600 ">
                  golang
                </li>
                <li className="py-2 w-full cursor-pointer px-6 hover:bg-blue-600 ">
                  javascript
                </li>
                <li className="py-2 w-full cursor-pointer px-6 hover:bg-blue-600 ">
                  raect
                </li>
              </ul>
            )}
          </li>
        </Link>
        <Link to="/pages" className="home">
          <li>pages</li>
        </Link>
        <Link to="/contact" className="home">
          <li>contact</li>
        </Link>
        <Link to="/blog" className="home">
          <li>Blog</li>
        </Link>
      </ul>
      <button className="mobile-menu" onClick={() => setMobile(!mobile)}>
        {mobile ? <RxCross2 /> : <FiAlignRight />}
      </button>
    </nav>
  );
};

export default Navbar;
