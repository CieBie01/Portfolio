import React from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setDialogOpen(false);
    navigate("/");
  };

  const closeDialog = () => setDialogOpen(false);

  // Prevent dialog from closing when clicking inside it
  const handleDialogClick = (e) => e.stopPropagation();

  return (
    <>
      <div
        onClick={() => setDialogOpen(true)}
        className="flex ml-5 hover:ring-2 hover:ring-blue-400 w-15 h-15 rounded-md justify-center items-center cursor-pointer mb-2"
      >
        <div className="flex items-center gap-1 p-2 text-white">
          <FaHome className="text-3xl hover:scale-105" />
          <span className="hidden sm:block">Home</span>
        </div>
      </div>

      {dialogOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-50"
          onClick={closeDialog}
        >
          <div 
            className="bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl border border-gray-700"
            onClick={handleDialogClick}
          >
            <h2 className="text-xl font-bold text-white mb-6 text-center">
              Return to Homepage?
            </h2>
            
            <p className="text-gray-300 text-center mb-8">
              Are you sure you want to return to the homepage?<br />
              Your current progress will not be saved.
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={closeDialog}
                className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleHomeClick}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomeButton;