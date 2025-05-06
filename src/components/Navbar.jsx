import React, { useState } from 'react';

const Navbar = () => {
  const navItems = ['Home', 'Work', 'About', 'Blog', 'More'];
  const [active, setActive] = useState('Home');

  return (
    <header className="fixed top-6 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <span className="text-white">R</span>
          <span className="text-purple-400">G</span>
        </div>

        {/* Nav Items */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="flex gap-4 px-4 py-2 rounded-full border border-gray-300/40 bg-white/5 backdrop-blur-md">

            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`
                  px-4 py-1.5 text-sm rounded-full transition-all duration-200 
                  ${active === item
                    ? 'bg-white text-black font-medium'
                    : 'text-white hover:bg-white/10 hover:text-gray-200'}
                `}
              >
                {item}
              </button>
            ))}

            {/* Book a Call */}
            <a
              href="#contact"
              className="text-black bg-white px-4 py-1.5 text-sm rounded-full font-medium transition-all hover:bg-gray-200"
            >
              Book a Call
            </a>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
