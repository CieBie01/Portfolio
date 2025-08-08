import React, { useState,useEffect } from "react";
import Home from "../Components/Home";

function Contact() {
  const [isFocused, setIsFocused] = useState(false);
  const [secIsFocused, setSecIsFocused] = useState(false);
  const [textareaIsFocused, setTextareaIsFocused] = useState(false);
  const [message, setMessage] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");
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
    
    if (!whatsappNumber || !email.trim() || !message.trim()) {
      setToast({
        show: true,
        message: "Please fill in all fields and provide a rating",
        type: "error"
      });
      return;
    }
    if(whatsappNumber.length !==10){
        setToast({
        show: true,
        message: "Whatsapp number should be 10 digits",
        type: "error"
      });
    }
    if(!whatsappNumber.startsWith("077")&&!whatsappNumber.startsWith("078")&&!whatsappNumber.startsWith("071")){
      setToast({
        show: true,
        message: "Whatsapp number should start with 077, 078 or 071",   
        type: "error"
      });
      return; 
    }
  
    try {
      const data = {
        whatsAppNumber: whatsappNumber.trim(),
       email: email.trim(),
        message: message.trim()
      };
      
      const response = await fetch(
        "https://portfolio-backend-fawn-one.vercel.app/api/contact",
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
         setWhatsappNumber("");
        setEmail("");
        setMessage("")
        setToast({show:true, message:result.message + ", Takudzwa will get back to you via WhatsApp/ Email", type:"success"})
        return
      }
    } catch (error) {
      setToast({
        show: true,
        message: "An error occurred while submitting your feedback. Please try again later" + error,
        type: "error"
      });

      return
    }
  };
  return (
    <form onSubmit={handleSubmit} className="min-h-screen bg-gray-900 py-16">
      {toast.show && (
        <div className={`fixed top-4 left-1/2 w-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg font-medium text-lg shadow-lg transition-all duration-300 ${
          toast.type === "success"
            ? "bg-green-500/20 text-green-500 border border-green-500/50 backdrop-blur-md"
            : "bg-red-500/20 text-red-500 border border-red-500/50 backdrop-blur-md"
        }`}>
          {toast.message}
        </div>
      )}
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
                  type="tel"
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
    </form>
  );
}

export default Contact;