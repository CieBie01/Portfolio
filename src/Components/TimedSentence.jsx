import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function TimedSentence() {
  const sentences = ["I'm Takudzwa Brandon Tanyanyiwa, a passionate web developer."];
  const typingSpeed = 200;     // ms between letters
  const holdDelay = 6000;      // delay before switching to next sentence

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < sentences[currentSentenceIndex].length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + sentences[currentSentenceIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(typingTimeout);
    } else {
      const holdTimeout = setTimeout(() => {
        // Move to next sentence
        const nextIndex = (currentSentenceIndex + 1) % sentences.length;
        setCurrentSentenceIndex(nextIndex);
        setDisplayedText("");
        setCharIndex(0);
      }, holdDelay);
      return () => clearTimeout(holdTimeout);
    }
  }, [charIndex, currentSentenceIndex, ]);

  return (
    <motion.div
      className="container mx-auto text-center mt-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h3 className="text-2xl font-medium text-white">Hi,</h3>
      <h3 className="text-xl font-medium text-fuchsia-950 -mt-2">
       
        <span className="ml-2 text-gray-500 font-mono">
          {displayedText}
          <span className="animate-pulse inline-block">|</span>
        </span>
      </h3>
    </motion.div>
  );
}

export default TimedSentence;
