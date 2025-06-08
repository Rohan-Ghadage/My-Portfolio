import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AboutPage from "./pages/AboutPage";
import ContactSection from "./pages/ContactSection";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import ProjectShowcase from "./pages/ProjectShowcase";
import TechStack from "./pages/TechStack";

export default function App() {
  return (
    
      <div className="bg-black min-h-screen text-white">
        <Navbar />

        {/* Spacer div = equal to nav height */}
        <div className="h-[70px]"></div>

        <Routes>
            {/* Home route — show each section directly here */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <TechStack />
                  <ProjectShowcase />
                  <ContactSection />
                </>
              }
            />

            {/* About route */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
            <Route path="/projects" element={<ProjectShowcase/>} />
            <Route path="/blog" element={<div className="p-10 text-center text-3xl">Blog Page Coming Soon</div>} />
            <Route path="/more" element={<div className="p-10 text-center text-3xl">More Page Coming Soon</div>} />
          
          </Routes>

        <ContactSection/>
        <Footer />
      </div>
      
  );
}
