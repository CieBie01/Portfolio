import React, { useState } from "react";
import Home from "../Components/Home";

function Contact() {
  const [isFocused, setIsFocused] = useState(false);
  const [secIsFocused, setSecIsFocused] = useState(false);
  const [textareaIsFocused, setTextareaIsFocused] = useState(false);
  const [message, setMessage] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="mb-10"><Home/></div>
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-white text-2xl font-bold mb-2">Contact Me</h3>
            <div className="h-1 bg-gray-500 w-10 mx-auto"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Input Fields */}
            <div className="flex-1 space-y-6">
              <div className="relative">
                <input
                  className="w-full h-12 p-4 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  name="number"
                  required
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <label
                  className={`absolute left-4 text-white font-medium transition-all duration-200 pointer-events-none ${
                    isFocused || whatsappNumber
                      ? "transform -translate-y-6 text-sm px-2 bg-gray-800"
                      : "top-3 text-gray-400 text-lg"
                  }`}
                >
                  Whatsapp Number
                </label>
              </div>

              <div className="relative">
                <input
                  className="w-full h-12 p-4 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  required
                  onFocus={() => setSecIsFocused(true)}
                  onBlur={() => setSecIsFocused(false)}
                />
                <label
                  className={`absolute left-4 text-white font-medium transition-all duration-200 pointer-events-none ${
                    secIsFocused || email
                      ? "transform -translate-y-6 text-sm px-2 bg-gray-800"
                      : "top-3 text-gray-400 text-lg"
                  }`}
                >
                  Email
                </label>
              </div>
            </div>

            {/* Right Column - Message */}
            <div className="flex-1">
              <div className="relative h-full">
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-40 p-4 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onFocus={() => setTextareaIsFocused(true)}
                  onBlur={() => setTextareaIsFocused(false)}
                />
                <label
                  className={`absolute left-4 top-4 text-white font-medium transition-all duration-200 pointer-events-none ${
                    textareaIsFocused || message
                      ? "transform -translate-y-6 text-sm px-2 bg-gray-800"
                      : "text-gray-400 text-lg"
                  }`}
                >
                  Your Message
                </label>
              </div>
              <div className="mt-4 text-right">
                <button
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:scale-105 hover:ring-green-200 active:scale-110 duration-300 ease-in-out transition cursor-pointer"
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
  );
}

export default Contact;