import React from "react";
import Landing from "./Pages/Landing.jsx";
import { Routes, Route } from "react-router-dom";
import RatePage from "./Pages/RatePage.jsx";
import Contact from "./Pages/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
function App() {
  return (
    <div className=" relative min-h-screen w-full overflow-x-hidden bg-slate-950">
        {/**Navbar Component */}
            <div>
              <Navbar  />
            </div>
            {/**Image Component */}
      <Routes>
        <Route path="/Portfolio" element={<Landing />} />
        <Route path="/rate_my_work" element={<RatePage />} />
       
      </Routes>
    </div>
  );
}

export default App;
