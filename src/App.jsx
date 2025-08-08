import React from "react";
import Landing from "./Pages/Landing.jsx";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Contact from "./Pages/Contact.jsx";
import RatePage from "./Pages/RatePage.jsx";
import { Navigate } from "react-router-dom";
function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-950">
      <main className="pt-16">
        {" "}
        <Routes>
          <Route path="/Portfolio/" element={<Landing />} />
          <Route path="/Portfolio/rate" element={<RatePage />} />
          <Route path="/Portfolio/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/Portfolio/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
