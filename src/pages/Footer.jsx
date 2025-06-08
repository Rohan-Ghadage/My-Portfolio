import React from "react";

const Footer = ({setIsPopupOpen}) => {
  return (
    <footer className="relative mx-auto mb-8 max-w-6xl">
      <div className="px-4 lg:mx-auto lg:flex lg:px-4 xl:px-0">
        {/* Left section: logo + text */}
        <div className="flex w-full py-6 text-sm">
          <div>
            <div className="flex flex-col gap-y-6">
              <a href="/" className="inline-block">
                <div className="text-white font-bold text-2xl">
                    <span className="text-white">R</span>
                    <span className="text-yellow-500">G</span>
                </div>
              </a>
              <p className="w-60 leading-5 text-gray-300">
                I'm Rohan - a Full-Stack Developer, Freelancer & Problem Solver. Thanks for checking out my site!
              </p>
            </div>
            <p className="mt-6 text-gray-300">&copy; 2025 Rohan Ghadage</p>
          </div>

          {/* Social icons */}
          <div className="flex w-full items-end justify-end gap-3 md:pe-16">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rohan-ghadage-817a01286/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 transition-colors hover:text-neutral-100"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="stroke-1"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="20"
                width="20"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Rohan-Ghadage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 transition-colors hover:text-neutral-100"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="stroke-1"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="20"
                width="20"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/RohanGhadage12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 transition-colors hover:text-neutral-100"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="stroke-1"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="20"
                width="20"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rohang_1809/profilecard/?igsh=M3UydjJvYjEyMDMy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 transition-colors hover:text-neutral-100"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="stroke-1"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="20"
                width="20"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <circle cx="12" cy="12" r="3.5"></circle>
                <circle cx="18" cy="6" r="1.5"></circle>
              </svg>
            </a>

          </div>
        </div>

        {/* Right section: Links */}
        <div className="flex w-full flex-col items-end py-6 text-xs lg:pl-16">
          <div className="flex w-full justify-between md:justify-start md:gap-x-36 lg:justify-between lg:gap-x-0">
            {/* General */}
            <div>
              <span className="text-text-primary mb-4 inline-block text-base font-medium">General</span>
              <ul className="flex flex-col gap-y-2 text-sm text-gray-300">
                <li className="hover:text-text-primary">
                  <a href="/" className="footer-link">Home</a>
                </li>
                <li className="hover:text-text-primary">
                  <a href="/about" className="footer-link">About</a>
                </li>
                <li className="hover:text-text-primary">
                  <a href="/projects" className="footer-link">Projects</a>
                </li>
                <li className="hover:text-text-primary">
                  <a href="/blog" className="footer-link">Blog</a>
                </li>
              </ul>
            </div>

            {/* Specifics */}
            <div>
              <span className="text-text-primary mb-4 inline-block text-base font-medium">Specifics</span>
              <ul className="flex flex-col gap-y-2 text-sm text-gray-300">
                <li className="hover:text-text-primary pointer-events-none opacity-50">
                  <a href="/#" className="footer-link">Guest Book</a>
                </li>
                <li className="hover:text-text-primary pointer-events-none opacity-50">
                  <a href="/bucket-list" className="footer-link">Bucket List</a>
                </li>
                <li className="hover:text-text-primary pointer-events-none opacity-50">
                  <a href="/attribution" className="footer-link">Attribution</a>
                </li>
                <li className="hover:text-text-primary pointer-events-none opacity-50">
                  <a href="/toolbox" className="footer-link">Toolbox</a>
                </li>
              </ul>
            </div>

            {/* More */}
            <div>
              <span className="text-text-primary mb-4 inline-block text-base font-medium">More</span>
              <ul className="flex flex-col gap-y-2 text-sm text-gray-300">
                <li className="hover:text-text-primary">
                  <a 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();  // prevent scroll to top
                      setIsPopupOpen(true);
                    }}
                    className="footer-link"
                  >
                    Contact
                  </a>
                </li>
                <li className="hover:text-text-primary">
                  <a href="/more" className="footer-link">Links</a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
