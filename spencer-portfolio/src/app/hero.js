// src/app/hero.js
'use client';

import { useEffect } from 'react';
import './hero.css';

export default function Hero() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    
    script.onload = () => {
      if (window.particlesJS) {
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
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="hero-section snap-start h-screen flex items-center justify-center relative overflow-hidden bg-[#0a1f1a]">
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
      
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-black/50 to-black/50 z-[2] pointer-events-none"></div>
      <div className="absolute inset-0 z-[3] pointer-events-none">
        <div className="glow-orb-1"></div>
        <div className="glow-orb-2"></div>
      </div>
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

          <div className="text-left hero-content" style={{ pointerEvents: 'none' }}>
            <h1 className="hero-name">
              <span className="name-part">Spencer Z.</span>
              <br />
              <span className="name-part">Nacario</span>
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