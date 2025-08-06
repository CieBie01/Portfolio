import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Rate() {
  const [nameFocus, setNameFocus] = useState(false);
  const [commentFocus, setCommentFocus] = useState(false);
  const [starHover, setStarHover] = useState(0);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");


  function handleHover(index) {
    setStarHover(index);
  }

  function handleMouseLeave() {
    setStarHover(rating);
  }

  function handleStarClick(index) {
    setRating(index);
  }

  return (
    <form className="min-h-screen flex items-center justify-center bg-gray-900 pt-24 ">
      <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 border-t-2 border-b-2 border-gray-600">
        {/* Rating Section */}
        <div className="w-full text-center mb-12">
          <h3 className="text-white text-2xl font-bold mb-3">
            Rate My Work
          </h3>
          <div className="h-1 bg-gray-500 w-20 mx-auto mb-6"></div>
          
          <div className="flex justify-center flex-wrap gap-2 py-4 mb-6">
            {[...Array(10)].map((_, index) => {
              index += 1;
              return (
                <FaStar
                  className={` cursor-pointer transition-all duration-150 ${
                    index <= (starHover || rating)
                      ? "text-yellow-500 scale-110"
                      : "text-gray-700"
                  }`}
                  key={index}
                  onClick={() => handleStarClick(index)}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleMouseLeave}
                 size={25}
                />
              
              );
            })}
            
          </div>
          <div className="text-xl font-medium text-yellow-400"><p>{starHover} out of 10</p></div>
        </div>

        {/* Feedback Section */}
        <div className="w-full">
          <h3 className="text-center text-white text-2xl font-bold mb-3">
            Leave Your Name And Comment
          </h3>
          <div className="h-1 bg-gray-500 w-40 mx-auto mb-8"></div>
          
          <div className="space-y-8 max-w-lg mx-auto">
            {/* Name Input */}
            <div className="relative">
              <input
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                className="w-full h-12 px-4 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 peer"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label
                className={`absolute left-4 font-medium transition-all duration-200 pointer-events-none ${
                  nameFocus|| name
                    ? "text-blue-400 transform -translate-y-6 text-sm px-2 bg-gray-800"
                    : "top-3 text-gray-400 text-base"
                }`}
              >
                Name
              </label>
            </div>

            {/* Comment Textarea */}
            <div className="relative">
              <textarea
                required
                className="w-full h-40 p-4 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onFocus={() => setCommentFocus(true)}
                onBlur={() => setCommentFocus(false)}
                value={comment }
                onChange={(e) => setComment(e.target.value)}
                name="comment"
              ></textarea>
              <label
                className={`absolute left-4 font-medium transition-all duration-200 pointer-events-none ${
                  commentFocus|| comment
                    ? "text-blue-400 transform -translate-y-6 text-sm px-2 bg-gray-800"
                    : "top-4 text-gray-400 text-base"
                }`}
              >
                Your Comment
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-12">
          <button
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all duration-300 font-medium shadow-lg"
            type="button"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </form>
  );
}

export default Rate;