import React from "react";

const ProjectCard = ({ title, description, imgSrc, link, gradient, shadowColor, textColor }) => {
  return (
    <div
      className="project-card flex w-full flex-row"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="flex flex-col lg:mx-10 lg:w-full">
        <a
          draggable={false}
          className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2"
          href={link}
        >
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)",
            }}
          ></div>

          <div
            className={`group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl bg-linear-to-b from-black/40 to-transparent transition-all duration-300`}
             >
            <div
              className="absolute inset-0 -z-1"
              style={{
                background:
                  gradient ||
                  "linear-gradient(188.62deg, rgb(61, 26, 122) 49.9%, rgb(126, 34, 206) 81.7%, rgb(192, 132, 252) 93.88%, rgb(249, 215, 147) 113.5%)",
              }}
            ></div>

            <div
              className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)",
              }}
            ></div>

            <div
              className={`hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex ${
                textColor || "text-purple-300"
              } z-20`}
            >
              <h3 
                className="max-w-[90%] text-2xl font-bold"
                style={{ fontFamily: '"Outfit", sans-serif' }} 
              >
                {description}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right size-6"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>

            <img
              alt={description || title}
              loading="lazy"
              width={1203}
              height={702}
              className={`lg:group-hover:translate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 ${
                shadowColor || "shadow-[0_0_30px_#7E22CE]"
              }`}
              src={imgSrc}
              style={{ color: "transparent" }}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
