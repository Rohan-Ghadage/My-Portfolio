import { useEffect, useRef } from "react";
import TechIcon from "./TechIcon";
import {
  FaJava, FaJs, FaReact, FaGitAlt, FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiPython, SiTailwindcss, SiRedux, SiShadcnui, SiSpringboot, SiSpringsecurity,
  SiJsonwebtokens, SiMysql, SiMongodb, SiDocker, SiPostman,
  SiVercel,
  SiAxios,
  SiExpress
} from "react-icons/si";

const TechStack = () => {
  const flowerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (flowerRef.current) {
        // Rotate slower now (divided by 15 instead of 5)
        flowerRef.current.style.transform = `rotate(${scrollPosition / 15}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-black text-white py-20 px-6 text-center relative overflow-hidden">
      
      {/* Rotating steel flower image in background */}
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none z-0">
        <div
          ref={flowerRef}
          className="size-[300px] md:size-[400px] opacity-25 mt-[-50px] md:mt-[-80px] transition-transform duration-200 ease-out"
          style={{
            maskImage: "linear-gradient(to top, transparent, black 50%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to top, transparent, black 50%, black 90%, transparent)",
          }}
        >
          <img
            src="/steel-flower.webp"
            alt="skills cover rotating image"
            draggable="false"
            className="w-full h-full object-contain select-none"
          />
        </div>
      </div>

      {/* Content above */}
      <div className="relative z-10">
        <h4 className="uppercase text-sm tracking-widest text-gray-400 mb-2">
          I constantly try to improve
        </h4>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">
          <em className="animated-gradient-text font-[NyghtSerif]">My Tech Stack</em>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
          {/* Frontend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              <TechIcon icon={<FaReact />} label="ReactJS" color="#61DAFB" />
              <TechIcon icon={<FaJs />} label="JavaScript" color="#F7DF1E" />
              <TechIcon icon={<SiTailwindcss />} label="Tailwind CSS" color="#38BDF8" />
              <TechIcon icon={<SiRedux />} label="Redux" color="#764ABC" />
              <TechIcon icon={<SiAxios />} label="Axios" color="#5A29E4" />
              <TechIcon icon={<SiShadcnui />} label="Shadcn UI" color="#ffffff" />
            </div>
          </div>

          {/* Backend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Backend</h3>
            <div className="flex flex-wrap gap-3">
              <TechIcon icon={<FaJava />} label="Java" color="#ED8B00" />
              <TechIcon icon={<SiSpringboot />} label="Spring Boot" color="#6DB33F" />
              <TechIcon icon={<SiSpringsecurity />} label="Spring Security" color="#4DB33D" />
              <TechIcon icon={<SiJsonwebtokens />} label="JWT" color="#000000" />
              <TechIcon icon={<SiMysql />} label="MySQL" color="#00758F" />
              <TechIcon icon={<SiMongodb />} label="MongoDB" color="#47A248" />
              <TechIcon icon={<SiExpress />} label="Express.js" color="#000000" />
              <TechIcon icon={<FaNodeJs />} label="Node.js" color="#339933" />
              <TechIcon icon={<SiPython />} label="Python" color="#3776AB" />
            </div>
          </div>

          {/* Tools / Others */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              <TechIcon icon={<FaGitAlt />} label="Git" color="#F05032" />
              <TechIcon icon={<FaGithub />} label="GitHub" color="#ffffff" />
              <TechIcon icon={<SiDocker />} label="Docker" color="#2496ED" />
              <TechIcon icon={<SiPostman />} label="Postman" color="#FF6C37" />
              <TechIcon icon={<SiVercel />} label="Vercel" color="#FFFFFF" />
              <TechIcon
                icon={
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                    alt="AWS Logo"
                    className="w-6 h-6 object-contain"
                  />
                }
                label="AWS"
                color="#FF9900"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
