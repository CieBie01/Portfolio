import React from "react";
import Landing from "./Pages/Landing.jsx";
import { Routes, Route } from "react-router-dom";
import RatePage from "./Pages/RatePage.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
  return (
    <div className=" relative min-h-screen w-full overflow-x-hidden bg-slate-950">
      <Routes>
        <Route path="/Portfolio" element={<Landing />} />
        <Route path="/Rating" element={<RatePage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
