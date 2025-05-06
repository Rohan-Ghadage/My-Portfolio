import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />
      <Hero />
      <TechStack />

    </div>
    
  )
}