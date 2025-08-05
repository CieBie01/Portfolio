import React from "react";
import { motion } from "framer-motion";
import javascript from '../assets/1269842_development_install_javascript_js_node_icon.png'
import reactImg from '../assets/1174949_js_react js_logo_react_react native_icon.png'
import tailwind from '../assets/9055799_bxl_tailwind_css_icon.png'
import git from '../assets/2993773_git_social media_icon.png'
import nodejs from '../assets/8546986_node_icon.png'
import mongodb from '../assets/1012822_code_development_logo_mongodb_programming_icon.png'
import html from '../assets/4202020_css3_html_logo_social_social media_icon.png'
function Skills() {
  const skills = [
    {
      name: "JavaScript",
      icon: javascript
    },
    {
      name: "React",
      icon: reactImg
    },
    {
      name: "Tailwind CSS",
      icon: tailwind
    },
    { name: "Git", icon: git  },
    { name: "Node.js", icon: nodejs },
    { name: "MongoDB", icon:  mongodb },
    { name: "HTML5", icon:  html },
   
  ];
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-16 mt-20">
      <div className="container  flex flex-col justify-center items-center   bg-gray-800 rounded-lg shadow-xl p-6 max-w-6xl mx-auto ">
         <motion.h2 
              className="text-center text-white text-2xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
            Skills
            </motion.h2>
            <div className="h-1 bg-gray-500 w-10 mx-auto mb-8"></div>
        <div className="grid lg:grid-cols-4 grid-cols-2 space-x-30 space-y-30 mx-auto">
          {skills.map((skill, index) => {
            return (
              <div className="container flex flex-col items-center space-y-2"   key={index}>
                <p className="text-xl text-gray-400 font-medium">{skill.name}</p>
                <motion.img
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}  
                className="w-30 h-30" src={skill.icon} alt={skill.name}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
