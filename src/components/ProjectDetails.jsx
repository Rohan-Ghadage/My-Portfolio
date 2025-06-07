
import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div className="sticky top-40 transition-all duration-500">
      <div className="flex">
        <div
          aria-hidden="true"
          className="my-4 mr-4 h-1 min-w-6 rounded-full"
          style={{ backgroundColor: project.shadowColor }}
        ></div>

        <div className="flex flex-col items-start lg:h-[500px]">
          <div className="flex items-center gap-3">
            <h3 className="text-foreground text-2xl font-bold">{project.title}</h3>
          </div>

          <p className="text-muted-foreground my-2 text-base font-light">
            {project.description}
          </p>

          <ul className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 mr-2 size-5 shrink-0 rounded-full"
                  style={{
                    color: project.shadowColor,
                    backgroundColor: project.shadowColor + '80',
                  }}
                >
                  <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            {project.techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
              >
                <img height="16" width="16" alt={tech.name} src={tech.icon} />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
