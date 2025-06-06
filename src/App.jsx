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
      <Hero />
      <TechStack />
      <ProjectShowcase />

    </div>
    
  )
}