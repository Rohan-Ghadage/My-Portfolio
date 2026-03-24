import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import ContactSection from "./pages/ContactSection";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import ProjectShowcase from "./pages/ProjectShowcase";
import TechStack from "./pages/TechStack";
import PopupModal from "./pages/PopupModal"; // make sure to import your popup!
import AboutPage from "./pages/AboutPage";

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    
      <div className="bg-black min-h-screen text-white">
        <Navbar setIsPopupOpen={setIsPopupOpen} />

        {/* Spacer div = equal to nav height */}
        <div className="h-[50px]"></div>

        <Routes>
          {/* Home route — show each section directly here */}
          <Route
            path="/"
            element={
              <>
                <Hero setIsPopupOpen={setIsPopupOpen} />
                <TechStack />
                <ProjectShowcase />
                
              </>
            }
          />

          {/* About route */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectShowcase />} />

        </Routes>

        {/* Contact and Footer outside Routes */}
        <ContactSection setIsPopupOpen={setIsPopupOpen} />
        <Footer setIsPopupOpen={setIsPopupOpen}/>

        {/* Popup modal */}
        {isPopupOpen && <PopupModal onClose={() => setIsPopupOpen(false)} />}
      </div>
      
  );
}
