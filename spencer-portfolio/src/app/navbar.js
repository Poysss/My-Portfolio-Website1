// src/app/navbar.js
'use client';

import { useState, useEffect } from 'react';

export default function ModernNavbar({ currentSection, scrollToSection }) {
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { name: 'Intro', index: 0 },
    { name: 'About', index: 1 },
    { name: 'Works', index: 2 },
    { name: 'Certificates', index: 3 }
  ];

  return (
    <>
      {/* Hover indicator - thin line at top */}
      <div 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent z-[299] rounded-full"
        onMouseEnter={() => setIsVisible(true)}
      ></div>

      {/* Main navbar */}
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-[300] transition-all duration-500 ease-out ${
          isVisible ? 'top-4 opacity-100' : '-top-20 opacity-0'
        }`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
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
                onClick={() => scrollToSection(4)}
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