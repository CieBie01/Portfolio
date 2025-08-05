import React, { useState } from "react";

function Contact() {
  const [isFocused, setIsFocused] = useState(false);
  const [secIsFocused, setSecIsFocused] = useState(false);
  const [textareaIsFocused, setTextareaIsFocused] = useState(false);

  return (
    <div className="continer min-h-screen flex items-center justify-center bg-gray-900 py-16 mt-20">
      <div className="container  flex flex-col justify-center items-center   bg-gray-800 rounded-lg shadow-xl p-6 max-w-6xl mx-auto ">
        <div>
          <h3 className="text-center text-white text-2xl font-bold mb-2">
            Contact Me
          </h3>
          <div className="h-1 bg-gray-500 w-10 mx-auto mb-8"></div>
          <div>
            <div className="flex lg:flex-row flex-col lg:space-x-80 space-y-10 p-3">
              <div className="container flex flex-col space-y-4">
                <div className=" relative mt-6 mx-auto ">
                  <input
                    className="w-80  h-12 p-4  text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white peer"
                    type="text"
                    name="number"
                    required
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)} // Fixed: Set to false
                  />
                  <label
                    className={`absolute left-4 text-white font-medium transition-all duration-200 pointer-events-none ${
                      isFocused
                        ? "transform -translate-y-6 text-sm  px-2"
                        : "top-3 text-gray-400 text-lg"
                    }`}
                  >
                    Whatsapp Number
                  </label>
                </div>

                <div className="relative mt-6 mx-auto">
                  <input
                    className="w-80  h-12 p-4 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white peer"
                    type="email"
                    name="email"
                    required
                    onFocus={() => setSecIsFocused(true)}
                    onBlur={() => setSecIsFocused(false)} // Fixed: Set to false
                  />
                  <label
                    className={`absolute left-4 text-white font-medium transition-all duration-200 pointer-events-none ${
                      secIsFocused
                        ? "transform -translate-y-6 text-sm  px-2"
                        : "top-3 text-gray-400 text-lg"
                    }`}
                  >
                    Email
                  </label>
                </div>
              </div>
              <div>
                <div className="relative mx-auto">
                  <textarea
                    required
                    className={`text-white bg-gray-900 lg:w-100 w-80 h-40 p-2 py-9 focus:right-1 focus:ring-white rounded-lg 
                  `}
                    onFocus={() => setTextareaIsFocused(true)}
                    onChange={() => setTextareaIsFocused(true)}
                    onBlur={() => setTextareaIsFocused(false)}
                  ></textarea>
                  <label
                    className={`absolute left-4 text-white font-medium transition-all duration-200 pointer-events-none 
                       ${
                         textareaIsFocused
                           ? "transform -translate-y-0.5 text-sm  px-2"
                           : "top-3 text-gray-400 text-lg"
                       }`}
                  >
                    Your Message
                  </label>
                </div>
                <div>
                  <button
                    className="bg-indigo-600   text-white w-30 h-10 rounded-md hover:scale-105 hover:ring-green-200 active:scale-110 duration-300 ease-in-out transition cursor-pointer"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
