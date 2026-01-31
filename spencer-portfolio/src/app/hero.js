// src/app/hero.js
'use client';

import { useEffect } from 'react';
import './hero.css';

export default function Hero() {
  useEffect(() => {
    // Check if particles.js is already loaded
    if (window.particlesJS && document.getElementById('particles-js')) {
      // Initialize particles only if not already initialized
      if (!window.pJSDom || window.pJSDom.length === 0) {
        initializeParticles();
      }
      return;
    }

    // Only load the script if it hasn't been loaded yet
    if (!document.querySelector('script[src*="particles.min.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.async = true;
      
      script.onload = () => {
        if (window.particlesJS) {
          initializeParticles();
        }
      };

      document.head.appendChild(script);
    }

    function initializeParticles() {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#10b981'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            }
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#10b981',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });

      // Add particle limit control
      const maxParticles = 120; // Maximum allowed particles (reduced from 150)
      
      // Override the push mode to include particle limit
      if (window.pJSDom && window.pJSDom.length > 0) {
        const pJS = window.pJSDom[0].pJS;
        
        // Store original push function
        const originalPushParticles = pJS.fn.modes.pushParticles;
        
        // Override with limited version
        pJS.fn.modes.pushParticles = function(nb, pos) {
          // Check current particle count
          const currentCount = pJS.particles.array.length;
          
          if (currentCount >= maxParticles) {
            // Remove oldest particles (from the beginning of array)
            const particlesToRemove = nb;
            pJS.particles.array.splice(0, particlesToRemove);
          }
          
          // Add new particles
          originalPushParticles.call(this, nb, pos);
        };
      }
    }

    // Cleanup function to destroy particles instance
    return () => {
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom.forEach(instance => {
          if (instance.pJS) {
            instance.pJS.fn.vendors.destroypJS();
          }
        });
        window.pJSDom = [];
      }
    };
  }, []);

  // Cursor shine effect
  useEffect(() => {
    const nameParts = document.querySelectorAll('.hero-name-shine');
    
    const handleMouseMove = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      element.style.setProperty('--mouse-x', `${x}px`);
      element.style.setProperty('--mouse-y', `${y}px`);
    };

    nameParts.forEach(part => {
      const mouseMoveHandler = (e) => handleMouseMove(e, part);
      part.addEventListener('mousemove', mouseMoveHandler);
      part._mouseMoveHandler = mouseMoveHandler;
    });

    return () => {
      nameParts.forEach(part => {
        if (part._mouseMoveHandler) {
          part.removeEventListener('mousemove', part._mouseMoveHandler);
        }
      });
    };
  }, []);

  return (
    <section className="hero-section snap-start h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        id="particles-js" 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          top: 0, 
          left: 0, 
          zIndex: 50
        }}
      ></div>
      
      <div className="relative z-[100] w-full flex items-center justify-center px-8" style={{ pointerEvents: 'none' }}>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20" style={{ pointerEvents: 'auto' }}>
          <div className="flex-shrink-0 profile-image-wrapper">
            <div className="profile-glow"></div>
            <img
              src="/me.png"
              alt="Spencer Z. Nacario"
              className="profile-image profile-image-hover"
            />
          </div>

          <div className="text-left hero-content">
            <h1 className="hero-name">
              <span className="hero-name-shine" style={{ pointerEvents: 'auto' }}>Spencer Z.</span>
              <br />
              <span className="hero-name-shine" style={{ pointerEvents: 'auto' }}>Nacario</span>
            </h1>
            <p className="hero-role">
              Full-Stack Developer
            </p>
            <p className="hero-motto">
              Let's grow together, shall we?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 hero-buttons" style={{ pointerEvents: 'auto' }}>
              <button className="btn-primary">
                View My Works
              </button>
              <button className="btn-secondary">
                Get In Touch<span className="text-emerald-400">.</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}