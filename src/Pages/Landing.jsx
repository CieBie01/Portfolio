import React from "react";
import Navbar from "../Components/Navbar";
import Image from "../Components/Image";
import TimedSentence from "../Components/TimedSentence";
import Developer from "../Components/Developer";

import { Element } from "react-scroll";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import RatePage from "./RatePage.jsx";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div>
      {/**Navbar Component */}
      <div>
        <Navbar  />
      </div>
      {/**Image Component */}
      <Element name="Home">
        <div className="container  bg-gray-900 flex lg:flex-row flex-col justify-between items-center p-4 mx-auto ">
          <Image />
          <Developer />
        </div>
        <div className="container   flex flex-row space-x-5 justify-center mx-auto p-3  items-center mt-10 mb-20">
          <button className="bg-teal-600  text-white w-30 h-10 rounded-md hover:scale-105 hover:ring-yellow-900 active:scale-110 duration-300 ease-in-out transition cursor-pointer">
            Hire Me
          </button>
          <button className="bg-indigo-600   text-white w-30 h-10 rounded-md hover:scale-105 hover:ring-green-200 active:scale-110 duration-300 ease-in-out transition cursor-pointer">
            My Work
          </button>
          <button className="bg-green-900 items-center  text-white w-30 h-10 rounded-md hover:scale-105 hover:ring-green-200 active:scale-110 duration-300 ease-in-out transition cursor-pointer">
            <Link to="/Rating">
              Rate My Work
            </Link>
          </button>
        </div>
      </Element>

      <Element name="About">
        <div>
          <About />
        </div>
      </Element>

      <Element name="Skills">
        <div>
          <Skills />
        </div>
      </Element>

      <Element name="Contact">
        <div>
          <Contact />
        </div>
      </Element>

      <Element name="Rating">
        <div>
          <RatePage />
        </div>
      </Element>
    </div>
  );
};
export default Landing;
