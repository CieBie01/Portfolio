import React from "react";
import { motion } from "framer-motion";
function Developer() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="mt-15 bg-gray-800 w-full h-100 p-4 md:p-6  rounded-xl shadow-md   transform transition-all hover:shadow-lg"
    >
      <motion.p className="text-gray-400 font-medium white text-lg md:text-xl leading-relaxed tracking-normal  py-20 mx-auto">
        <span className="font-bold text-white">Full-stack engineer</span>{" "}
        with expertise across the
        <span className="font-medium text-white">
          {" "}
          JavaScript ecosystem{" "}
        </span>
        (React, Node.js, Express) and database architecture (MongoDB,
        PostgreSQL). I build responsive, accessible interfaces paired with
        robust backend systems, implementing{" "}
        <span className="font-medium text-teal-600">CI/CD pipelines</span> and
        <span className="font-medium text-blue-600"> cloud solutions</span> for
        scalable applications.
      </motion.p>
    </motion.div>
  );
}

export default Developer;
