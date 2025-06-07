import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative z-0 mt-40 flex w-full justify-center overflow-x-hidden bg-[url('/cta.avif')] bg-cover bg-center px-4 py-20"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-y-2 py-10 text-center lg:mx-0">
        {/* Rotating "OPEN TO WORK" badge */}
        <div
          draggable="false"
          tabIndex={0}
          className="absolute top-1/2 left-1/2 z-50 translate-x-[130px] -translate-y-1/2 cursor-grab overflow-hidden rounded-full md:-translate-y-[230px] lg:translate-x-[280px] lg:-translate-y-[70px]"
          style={{
            WebkitTouchCallout: "none",
            WebkitUserSelect: "none",
            userSelect: "none",
            touchAction: "none",
          }}
        >
          <div
            className="relative rounded-full bg-blue-700 p-1.5 leading-none font-medium animate-spin-slow"
          >

            <div className="relative size-[95px] rounded-full bg-black p-2">
              <div className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full">
                <svg
                  className="transform-origin-center-center"
                  viewBox="0 0 100 100"
                  fill="black"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    inset: 0,
                    transformOrigin: "center center",
                  }}
                >
                  <path
                    id="curve-wnxkz4"
                    d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
                    fill="transparent"
                  />
                  <text>
                    <textPath
                      href="#curve-wnxkz4"
                      startOffset="0"
                      dominantBaseline="hanging"
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        wordSpacing: 5,
                        letterSpacing: 2.1,
                        fill: "rgba(242, 242, 242, 0.9)",
                      }}
                    >
                      OPEN TO WORK · OPEN TO WORK ·
                    </textPath>
                  </text>
                </svg>
              </div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rotate-45 fill-white text-white opacity-80"
                aria-hidden="true"
              >
                <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
              </svg>
            </div>
          </div>
          <span className="sr-only">OPEN TO WORK · OPEN TO WORK ·</span>
        </div>


        <div className="relative">
          <img
            aria-hidden="true"
            draggable="false"
            width="160"
            height="30"
            src="bg.png"
            alt="wings"
            className="select-none"
          />
          <img
            alt="Rohan Logo"
            draggable="false"
            loading="lazy"
            width="100"
            height="100"
            decoding="async"
            className="absolute top-1/2 left-1/2 z-50 w-8 -translate-x-1/2 -translate-y-1/2 md:w-10"
            style={{ color: "transparent" }}
            src="logo.png"
          />
        </div>

        {/* Text content */}
        <span className="mt-4 text-2xl font-light tracking-wide text-white sm:text-4xl lg:text-5xl">
          <h3 className="whitespace-nowrap opacity-100 transform-none">
            FROM CONCEPT TO <span className="font-extrabold">CREATION</span>
          </h3>
          <h3 className="mt-3 whitespace-nowrap opacity-100 transform-none">
            LET&apos;s MAKE IT <span className="font-extrabold">HAPPEN!</span>
          </h3>
        </span>

        {/* Button */}
        <div className="group my-10">
          <button
            type="button"
            className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3
          group-hover:scale-125"
            onClick={() => {
              // Customize: scroll to contact form or open modal here
              alert("Get in touch clicked!");
            }}
          >
            <span className="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black">
              Get In Touch
            </span>
            <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span>
            <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Text below button */}
        <p className="tracking-wide text-base font-semibold lg:text-2xl text-white">
          I&apos;m available for full-time roles &amp; freelance projects.
        </p>
        <p className="my-2 text-sm font-extralight tracking-wide opacity-75 lg:text-xl text-white">
          I thrive on crafting dynamic web applications, and
          <br />
          delivering seamless user experiences.
        </p>
      </div>

      {/* Background overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black opacity-100"
      ></div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-b from-black to-transparent opacity-100"
      ></div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-black opacity-65"
      ></div>
    </section>
  );
};

export default ContactSection;
