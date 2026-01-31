// src/app/page.js
'use client';

import { useState, useEffect } from 'react';
import Hero from './hero';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Certificates from './certificates';
import Contact from './contact';
import ModernNavbar from './navbar';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['hero', 'about', 'skills', 'projects', 'certificates', 'contact'];

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(currentSection - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection, sections.length]);

  const scrollToSection = (index) => {
    setCurrentSection(index);
  };

  return (
    <>
      {/* Modern Navbar */}
      <ModernNavbar currentSection={currentSection} scrollToSection={scrollToSection} />
      
      {/* Scroll Down Indicator (only shows on hero section) */}
      {currentSection === 0 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] flex flex-col items-center">
          {/* Minimal animated arrow */}
          <div className="animate-[bounce_2s_ease-in-out_infinite]">
            <svg 
              className="w-8 h-8 text-emerald-400/60" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-emerald-400/10 blur-lg rounded-full"></div>
        </div>
      )}

      <div className="relative h-screen overflow-hidden">
        {/* Sections Container */}
        <div 
          className="transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(-${currentSection * 100}vh)` }}
        >
          {/* Hero Section */}
          <div className="h-screen">
            <Hero />
          </div>

          {/* About Me Section */}
          <div className="h-screen">
            <About />
          </div>

          {/* Skills Section */}
          <div className="h-screen">
            <Skills />
          </div>

          {/* Projects Section */}
          <div className="h-screen">
            <Projects />
          </div>

          {/* Certificates Section */}
          <div className="h-screen">
            <Certificates />
          </div>

          {/* Let's Talk Section */}
          <div className="h-screen">
            <Contact />
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[200] flex flex-col gap-4">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => scrollToSection(index)}
              className="group relative"
              aria-label={`Go to ${section} section`}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  currentSection === index
                    ? 'bg-emerald-400 border-emerald-400 scale-125'
                    : 'bg-transparent border-emerald-400/50 hover:border-emerald-400 hover:scale-110'
                }`}
              ></div>
              {/* Tooltip */}
              <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-emerald-400/90 text-black px-3 py-1 rounded text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none capitalize">
                {section}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}