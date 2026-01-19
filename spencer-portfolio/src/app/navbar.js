// src/app/navbar.js
'use client';

import { useState } from 'react';

export default function ModernNavbar({ currentSection, scrollToSection }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const navItems = [
    { name: 'Intro', index: 0 },
    { name: 'About', index: 1 },
    { name: 'Skills', index: 2 },
    { name: 'Works', index: 3 },
    { name: 'Certificates', index: 4 }
  ];

  const toggleLock = () => {
    setIsLocked(!isLocked);
    if (!isLocked) {
      setIsVisible(true);
    }
  };

  const handleMouseEnter = () => {
    if (!isLocked) {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isLocked) {
      setIsVisible(false);
    }
  };

  return (
    <>
      {/* Minimal indicator - closer dots, line grows from center */}
      <div 
        className="fixed top-1.5 left-1/2 -translate-x-1/2 z-[299]"
        onMouseEnter={handleMouseEnter}
      >
        {/* Clickable indicator */}
        <button
          onClick={toggleLock}
          className="group relative p-1.5"
          aria-label="Toggle navigation"
        >
          <div className="relative w-5 h-1 flex items-center justify-center">
            {/* Left dot */}
            <span className={`absolute block bg-emerald-400 rounded-full shadow-[0_0_6px_rgba(52,211,153,0.6)] group-hover:bg-emerald-300 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all duration-500 ease-in-out -left-2 ${
              isLocked ? 'opacity-0 scale-0' : 'w-1 h-1 opacity-100'
            }`}></span>
            
            {/* Center connecting line - grows from center */}
            <span className={`absolute block bg-emerald-400 rounded-full shadow-[0_0_6px_rgba(52,211,153,0.6)] group-hover:bg-emerald-300 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 ${
              isLocked 
                ? 'w-5 h-0.5' 
                : 'w-1 h-1'
            }`}></span>
            
            {/* Right dot */}
            <span className={`absolute block bg-emerald-400 rounded-full shadow-[0_0_6px_rgba(52,211,153,0.6)] group-hover:bg-emerald-300 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all duration-500 ease-in-out -right-2 ${
              isLocked ? 'opacity-0 scale-0' : 'w-1 h-1 opacity-100'
            }`}></span>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-emerald-400/20 blur-md rounded-full scale-150 group-hover:bg-emerald-400/30 transition-all"></div>
        </button>
      </div>

      {/* Main navbar */}
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-[300] transition-all duration-500 ease-out ${
          isVisible || isLocked ? 'top-10 opacity-100' : '-top-20 opacity-0'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main navbar container */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl"></div>
          
          {/* Navbar - Slimmer version */}
          <div className="relative bg-black/40 backdrop-blur-md border border-emerald-500/30 rounded-full px-6 py-2.5 shadow-[0_0_40px_rgba(52,211,153,0.3)]">
            <div className="flex items-center gap-3">
              {/* Navigation Links */}
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.index)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentSection === item.index
                      ? 'bg-emerald-500/30 text-white shadow-[0_0_20px_rgba(52,211,153,0.4)]'
                      : 'text-emerald-100/80 hover:text-white hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Separator */}
              <div className="w-px h-6 bg-emerald-500/30 mx-1"></div>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection(5)}
                className="px-5 py-1.5 rounded-full bg-emerald-400 text-black font-bold text-sm hover:bg-emerald-300 transition-all duration-300 shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)] hover:scale-105"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}