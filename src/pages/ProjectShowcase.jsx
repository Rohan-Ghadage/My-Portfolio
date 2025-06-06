import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectShowcase = () => {
  const projects = [
    {
      title: 'Next Ventures',
      description: 'A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It’s built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.',
      link: '/projects/next-venture',
      imgSrc: 'rohan.png',
      gradient: 'linear-gradient(188.62deg, rgb(107, 13, 51) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 93.88%, rgb(249, 215, 147) 113.5%)',
      shadowColor: '#DB2777',
      textColor: 'text-blue-300',
      features: [
        'Leveraged Partial Prerendering and After for faster loading.',
        'Simplified idea submission with a clean, intuitive design.',
        'Enhanced browsing with seamless performance optimization.',
      ],
      techStack: [
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
        { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
        { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
      ],
    },
    {
      title: 'Project B',
      description: 'Another innovative platform solving real-world problems with modern tech.',
      link: '/projects/project-b',
      imgSrc: '/path/to/project-b-image.webp',
      gradient: 'linear-gradient(45deg, #1D976C, #93F9B9)',
      shadowColor: '#1D976C',
      textColor: 'text-green-100',
      features: [
        'Innovative feature A.',
        'Optimized for mobile-first design.',
        'Robust performance across devices.',
      ],
      techStack: [
        { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
        { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase' },
        { name: 'Redux', icon: 'https://cdn.simpleicons.org/redux' },
      ],
    },
    {
      title: 'Project c',
      description: 'Another innovative platform solving real-world problems with modern tech.',
      link: '/projects/project-b',
      imgSrc: 'image.png',
      gradient: 'linear-gradient(45deg, #1D376C, #93G9B9)',
      shadowColor: '#DB2777',
      textColor: 'text-blue-100',
      features: [
        'Innovative feature A.',
        'Optimized for mobile-first design.',
        'Robust performance across devices.',
      ],
      techStack: [
        { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
        { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase' },
        { name: 'Redux', icon: 'https://cdn.simpleicons.org/redux' },
      ],
    },
    // Add more projects here if needed
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 50% of card visible
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
    <div className="relative mx-auto flex w-full flex-col lg:flex-row lg:max-w-[90%] lg:gap-x-12">
      {/* Left side - Project Cards */}
      <div className="lg:w-[65%] space-y-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (projectRefs.current[index] = el)}
          >
            <ProjectCard {...proj} />
          </div>
        ))}
      </div>

      {/* Right side - Project Details */}
      <div className="hidden py-4 lg:sticky lg:block lg:w-[35%]">
        <div className="sticky top-40 transition-all duration-500">
          <div className="flex">
            <div aria-hidden="true" className="my-4 mr-4 h-1 min-w-6 rounded-full bg-pink-600"></div>
            <div className="flex flex-col items-start lg:h-[500px]">
              <div className="flex items-center gap-3">
                <h3 className="text-foreground text-2xl font-bold">{projects[activeProjectIndex].title}</h3>
              </div>
              <p className="text-muted-foreground my-2 text-base font-light">
                {projects[activeProjectIndex].description}
              </p>
              <ul className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base">
                {projects[activeProjectIndex].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 mr-2 size-5 shrink-0 rounded-full"
                      style={{
                        color: projects[activeProjectIndex].shadowColor,
                        backgroundColor: projects[activeProjectIndex].shadowColor + '33', // 33 = ~20% opacity
                      }}
                    >
                      <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3 text-sm">
                {projects[activeProjectIndex].techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
                    style={{ opacity: 1 }}
                  >
                    <img height="16" width="16" alt={tech.name} src={tech.icon} />
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
