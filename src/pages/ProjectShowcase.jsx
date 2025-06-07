import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectDetails from '../components/ProjectDetails';
import projects from '../components/projectsData';

const ProjectShowcase = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setActiveProjectIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      {/* Header */}
      <section className="bg-black text-white py-5 px-6 text-center relative">
        <h4 className="uppercase text-sm tracking-widest text-gray-400 mb-2">
          My
        </h4>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">
          <em className="animated-gradient-text font-[NyghtSerif]">Curated Work</em>
        </h2>
      </section>

      {/* Content */}
      <div className="relative mx-auto flex w-full flex-col lg:flex-row lg:max-w-[90%] lg:gap-x-12">
        
        {/* Left side - Project Cards */}
        <div className="lg:w-[65%] flex flex-col space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {projects.map((proj, index) => (
              <div
                key={index}
                data-index={index}
                ref={(el) => (projectRefs.current[index] = el)}
                className="flex flex-col"
              >
                <ProjectCard {...proj} />

                {/* Show ProjectDetails only on mobile & tablet */}
                <div className="block lg:hidden mt-4">
                  <ProjectDetails project={proj} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Project Details (Desktop only) */}
        <div className="hidden py-4 lg:sticky lg:block lg:w-[35%] top-20 h-fit">
          <ProjectDetails project={projects[activeProjectIndex]} />
        </div>
      </div>
    </>
  );
};

export default ProjectShowcase;
