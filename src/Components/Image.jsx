import React from "react";
import image from "../assets/IMG-20241215-WA0025-removebg-preview.png";
import TimedSentence from "./TimedSentence.jsx";
import { motion } from "framer-motion";

function Image() {
  return (
    <motion.div className="container flex flex-col items-center justify-center mt-10 w-full h-full">
      <motion.img
        src={image}
        alt="Takudzwa Brandon Tanyanyiwa"
        className="lg:w-1/2 w-3/5 h-auto mx-auto rounded-lg shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      />
      <TimedSentence />
    </motion.div>
  );
}

export default Image;
