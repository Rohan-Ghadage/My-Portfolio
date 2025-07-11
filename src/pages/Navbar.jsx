import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import PopupModal from './PopupModal'; // 👈 EDITED (import popup modal component)

const Navbar = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/projects'},
    { label: 'About', path: '/about' },
    { label: 'Resume', external: true, url: 'https://drive.google.com/drive/folders/1Tegz32KaeYLoaULvqj5AGcbqPp3AKmvj?usp=drive_link'},
    { label: 'Blog', path: '/blog' },
    { label: 'More', path: '/more' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // for popup

  const location = useLocation();
  const activePath = location.pathname;

  return (
    <header className="fixed top-6 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Glass Effect Bar */}
        <div className="flex items-center justify-between px-4 py-2 rounded-full border border-gray-300/40 bg-white/5 backdrop-blur-md">

          {/* Left: Logo */}
          <div className="text-white font-bold text-2xl">
            <span className="text-white">R</span>
            <span className="text-yellow-500">G</span>
          </div>

          {/* Center: Nav Items (Desktop) */}
          <div className="hidden md:flex gap-4">
            {navItems.map((item) => (
              item.external ?
              (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200 
                    ${activePath === item.path
                      ? `bg-white text-black font-medium`
                      : `text-white hover:bg-white/10 hover:text-gray-200`}`}

                >
                  {item.label}
                </a>
              ) : (
                <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200 
                  ${activePath === item.path
                    ? 'bg-white text-black font-medium'
                    : 'text-white hover:bg-white/10 hover:text-gray-200'}
                `}
              >
                {item.label}
              </Link>)
            ))}

            {/* Book a Call Button */}
            <button
              onClick={() => setIsPopupOpen(true)} // 👈 EDITED — open popup
              className="text-black bg-white px-4 py-1.5 text-sm rounded-full font-medium transition-all hover:bg-gray-200"
            >
              Book a Call
            </button>
          </div>

          {/* Right: Menu Icon (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full max-w-sm relative">
            {/* Close Icon */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-3 right-3 text-white hover:text-red-400 transition"
            >
              <X size={22} />
            </button>

            {/* Navigation Items */}
            <nav className="flex flex-col items-center gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full text-center px-4 py-2 rounded-full text-sm transition-all duration-200
                    ${activePath === item.path
                      ? 'bg-white text-black font-semibold'
                      : 'text-white hover:bg-white/10 hover:text-gray-200'}
                  `}
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA */}
              <button
                onClick={() => {
                  setIsMenuOpen(false); // close menu
                  setIsPopupOpen(true); // 👈 EDITED — open popup
                }}
                className="w-full bg-white text-black text-center py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition"
              >
                Book a Call
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Popup Modal */}
      {isPopupOpen && <PopupModal onClose={() => setIsPopupOpen(false)} />} {/* 👈 ADDED */}

    </header>
  );
};

export default Navbar;
