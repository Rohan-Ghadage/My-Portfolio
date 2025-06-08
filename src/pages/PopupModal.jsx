import React, { useEffect } from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const PopupModal = ({ onClose }) => {

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target.id === 'popup-backdrop') {
      onClose();
    }
  };

  return (
    <div
      id="popup-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="bg-[#0e0e0e] text-white rounded-xl p-8 max-w-3xl w-full relative flex flex-col gap-6">
        
        {/* Removed Close Button since you asked */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Email Box */}
          <a
            href="mailto:hello@yourdomain.com"
            className="flex flex-col items-start bg-gradient-to-r from-[#151515] to-[#1f1f1f] border border-gray-600 rounded-lg p-6 w-full md:w-[48%] cursor-pointer hover:scale-105 transition"
          >
            <div className="flex items-center gap-2 mb-4 text-blue-400 font-semibold text-lg">
              <Mail size={20} />
              Email
            </div>
            <div className="text-white font-bold text-lg mb-1">
              connect.rohanghadage@gmail.com
            </div>
            <div className="text-gray-400 text-sm">
              Send me an email directly
            </div>
          </a>

          {/* Right Side: Social Icons */}
          <div className="flex flex-col gap-4 items-center w-full md:w-[48%]">
            <a href="https://www.linkedin.com/in/rohan-ghadage-817a01286/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-110 transition">
              <Linkedin size={32} />
            </a>
            <a href="https://github.com/Rohan-Ghadage" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:scale-110 transition">
              <Github size={32} />
            </a>
            <a href="https://x.com/RohanGhadage12" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:scale-110 transition">
              <Twitter size={32} />
            </a>
          </div>

        </div>

        {/* Bottom: Availability Status */}
        <div className="flex items-center justify-center mt-4 border border-green-600 rounded-md px-4 py-2 text-green-400 text-sm font-medium animate-pulse">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-ping"></span>
            Currently available for new opportunities
          </div>
        </div>

      </div>
    </div>
  );
};

export default PopupModal;
