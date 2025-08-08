import React, { useState, useRef, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { Link as ReactLink } from "react-router-dom";
function Navbar() {
  const [nav, setNav] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="container  mx-auto p-3 ">
      {/** Desktop View */}
      <div className="hidden  md:grid grid-cols-2 fixed top-0 left-0 right-0 bg-black/5  backdrop-blur-md rounded-lg p-5">
        <div className="flex justify-start items-center">
          <h2 className="text-fuchsia-950 lg:text-2xl text-lg font-bold hover:scale-105 cursor-pointer transition ease-in-out duration-300 ">
            Takudzwa <span className="text-gray-500">Brandon </span>Tanyanyiwa
          </h2>
        </div>

        <div className="flex justify-end ">
          <ul className="flex flex-row space-x-10 text-gray-500 text-xl font-medium">
            <li className="hover:hover:text-fuchsia-950 active:scale-105 cursor-pointer transition ease-in-out duration-300">
              <Link to="Home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="hover:hover:text-fuchsia-950 active:scale-105 cursor-pointer transition ease-in-out duration-300">
              <Link to="About" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="hover:hover:text-fuchsia-950 active:scale-105 cursor-pointer transition ease-in-out duration-300">
              <Link to="Skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className="hover:hover:text-fuchsia-950 active:scale-105 cursor-pointer transition ease-in-out duration-300">
              <ReactLink to="/Portfolio/rate" >
                Rate My Work
              </ReactLink>
            </li>
            <li className="hover:hover:text-fuchsia-950 active:scale-105 cursor-pointer transition ease-in-out duration-300">
              <ReactLink to="/Portfolio/contact" >
                Contact Me
              </ReactLink>
            </li>
          </ul>
        </div>
      </div>

      {/** Mobile View */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 bg-black/10 backdrop-blur-md rounded-lg p-5 w-full"
        ref={menuRef}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-fuchsia-950 lg:text-2xl text-lg font-bold hover:scale-105 cursor-pointer transition ease-in-out duration-300">
            Takudzwa <span className="text-gray-500">Brandon </span>Tanyanyiwa
          </h2>

          <button onClick={() => setNav(!nav)}>
            {nav ? (
              <GrClose className="text-3xl cursor-pointer text-fuchsia-900 active:scale-105 transition ease-in-out duration-300" />
            ) : (
              <AiOutlineMenu className="text-3xl cursor-pointer text-fuchsia-900 active:scale-105 transition ease-in-out duration-300" />
            )}
          </button>
        </div>

        {/** Mobile Menu with Smooth Transition */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden  ${
            nav ? "max-h-120 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-5 text-white text-sm font-medium pt-2 justify-center items-center">
            <li className="hover:text-fuchsia-950 active:scale-105 cursor-pointer transition ease-in-out duration-300 py-1 border-b border-slate-700">
              <Link
                onClick={() => setNav(false)}
                to="Home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="hover:text-fuchsia-950 active:scale-105 cursor-pointer transition ease-in-out duration-300 py-1 border-b border-slate-700">
              <Link
                onClick={() => setNav(false)}
                to="About"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="hover:text-fuchsia-950 active:scale-105 cursor-pointer transition ease-in-out duration-300 py-1 border-b border-slate-700">
              <Link
                onClick={() => setNav(false)}
                to="Skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="hover:text-fuchsia-950 active:scale-105 cursor-pointer transition ease-in-out duration-300 py-1 border-b border-slate-700">
              <ReactLink
                to="/Portfolio/rate"
                
                onClick={() => setNav(false)}
              >
                Rate My Work
              </ReactLink>
            </li>
            <li className="hover:text-fuchsia-950 active:scale-105 cursor-pointer transition ease-in-out duration-300 py-1 border-b border-slate-700">
              <ReactLink
                to="/Portfolio/contact"
               
                onClick={() => setNav(false)}
              >
                Contact Me
              </ReactLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
