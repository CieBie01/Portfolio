import React from "react";
import image from "../assets/Taku.png";
import { motion } from "framer-motion";
import tailwind from '../assets/9055799_bxl_tailwind_css_icon.png';
import reactImg from '../assets/1174949_js_react js_logo_react_react native_icon.png';
import javascript from '../assets/1269842_development_install_javascript_js_node_icon.png';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-10 items-center bg-gray-800 rounded-lg shadow-xl p-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image Section */}
          <div className="flex justify-center">
            <motion.img
              src={image}
              alt="Takudzwa Brandon Tanyanyiwa"
              className="w-60 lg:w-80 h-auto rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            />
          </div>

          {/* Text Section */}
          <div>
            <motion.h2 
              className="text-center text-white text-2xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              About Me
            </motion.h2>
            <div className="h-1 bg-gray-500 w-10 mx-auto mb-8"></div>

            <motion.div 
              className="text-white space-y-4 text-lg leading-relaxed px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-indigo-400 font-semibold">
                I'm a web developer
              </p>
              <p className="text-gray-400">
                I have experience in frontend development and a passion for creating
                efficient and scalable web applications. I enjoy turning complex problems
                into simple, beautiful, and intuitive designs.
              </p>
            </motion.div>

            {/* Skills Icons */}
            <motion.div 
              className="flex justify-center gap-8 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.img
                src={javascript}
                alt="JavaScript"
                className="w-10 h-10"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              <motion.img
                src={reactImg}
                alt="React"
                className="w-10 h-10"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              <motion.img
                src={tailwind}
                alt="Tailwind CSS"
                className="w-10 h-10"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;