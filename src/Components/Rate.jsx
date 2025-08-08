import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

function Rate() {
  const [nameFocus, setNameFocus] = useState(false);
  const [commentFocus, setCommentFocus] = useState(false);
  const [starHover, setStarHover] = useState(0);
  const [rate, setRate] = useState(0);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !feedback.trim() || rate === 0) {
      setToast({
        show: true,
        message: "Please fill in all fields and provide a rating",
        type: "error"
      });
      return;
    }
  
    try {
      const data = {
        rate: rate,
        name: name,
        feedback: feedback.trim()
      };
      
      const response = await fetch(
        "https://portfolio-backend-fawn-one.vercel.app/api/rate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (!result) {
       
        setToast({
          show: true,
          message: result.error || "Something went wrong, please try again later",
          type: "error"
        });
        return
      } else {
         setName("");
        setFeedback("");
        setRate(0);
        setStarHover(0);
        setToast({
          show: true,
          message: result.message,
          type: "success"
        });
        return
      }
    } catch (error) {
      setToast({
        show: true,
        message: "An error occurred while submitting your feedback. Please try again later",
        type: "error"
      });
      console.error("Submission error:", error);
      return
    }
  };

  function handleHover(index) {
    setStarHover(index);
  }

  function handleMouseLeave() {
    setStarHover(rate);
  }

  function handleStarClick(index) {
    setRate(index);
  }

  return (
    <form onSubmit={handleSubmit} className="min-h-screen flex items-center justify-center bg-gray-900 pt-24 relative">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg font-medium text-lg shadow-lg transition-all duration-300 ${
          toast.type === "success"
            ? "bg-green-500/20 text-green-500 border border-green-500/50 backdrop-blur-md"
            : "bg-red-500/20 text-red-500 border border-red-500/50 backdrop-blur-md"
        }`}>
          {toast.message}
        </div>
      )}

      <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 border-t-2 border-b-2 border-gray-600">
        {/* Rating Section */}
        <div className="w-full text-center mb-12">
          <h3 className="text-white text-2xl font-bold mb-3">Rate My Work</h3>
          <div className="h-1 bg-gray-500 w-20 mx-auto mb-6"></div>

          <div className="flex justify-center flex-wrap gap-2 py-4 mb-6">
            {[...Array(10)].map((_, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className="focus:outline-none"
                  onClick={() => handleStarClick(index)}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleMouseLeave}
                  aria-label={`Rate ${index} out of 10`}
                >
                  <FaStar
                    className={`transition-all duration-150 ${
                      index <= (starHover || rate)
                        ? "text-yellow-500 scale-110"
                        : "text-gray-700"
                    }`}
                    size={25}
                  />
                </button>
              );
            })}
          </div>
          <div className="text-xl font-medium text-yellow-400">
            <p>{starHover || rate} out of 10</p>
          </div>
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
                  nameFocus || name
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
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                name="feedback"
              ></textarea>
              <label
                className={`absolute left-4 font-medium transition-all duration-200 pointer-events-none ${
                  commentFocus || feedback
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
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all duration-300 font-medium shadow-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            type="submit"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </form>
  );
}

export default Rate;