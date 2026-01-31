'use client';

import { useState } from 'react';
import './projects.css';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Wildlitz",
      description: "Grade 3 learning platform with interactive educational activities. Full-stack development for assigned modules to enhance student engagement.",
      tags: ["React", "CSS", "Django"],
      image: "/projects/wildlitz.png",
      projectLink: "https://wildlitz-capstone-raeg.onrender.com/",
      codeLink: "https://github.com/Nokitaki/WildLitz-Capstone"
    },
    {
      id: 2,
      title: "Chipin",
      description: "Collaborative expense tracking platform with expense input system, participant management, and automated cost-splitting calculations. Clean, user-friendly interface for group events.",
      tags: ["React", "CSS", "Java", "Kotlin"],
      image: "/projects/chipin.jpg",
      projectLink: "https://chip-in-phi.vercel.app/",
      codeLink: "https://github.com/Jeskunnn/ChipIn"
    },
    {
      id: 3,
      title: "Identity: Fragments of Me",
      description: "Turn-based 2D game developed for GDAP gamified event. Created visual assets and contributed to main concept using Godot IDE.",
      tags: ["GDScript"],
      image: "/projects/identity.jpg",
      codeLink: "https://github.com/danrave1234/Godot-Project"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="projects-section">
      {/* Content */}
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <p className="projects-subtitle">MY WORK</p>
          <h2 className="projects-title">Featured Projects</h2>
        </div>

        {/* Carousel Container */}
        <div className="carousel-wrapper">
          {/* Projects Slider */}
          <div className="projects-slider">
            {projects.map((project, index) => {
              let position = 'hidden';
              if (index === currentIndex) position = 'active';
              else if (index === (currentIndex - 1 + projects.length) % projects.length) position = 'prev';
              else if (index === (currentIndex + 1) % projects.length) position = 'next';

              return (
                <div
                  key={project.id}
                  className={`project-card ${position}`}
                  onClick={() => {
                    if (position === 'prev') prevProject();
                    if (position === 'next') nextProject();
                  }}
                >
                  <div className="project-content">
                    {/* Project Image */}
                    <div className="project-image-wrapper">
                      <div className="project-image-glow"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      
                      {/* Tags */}
                      <div className="project-tags">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="project-actions">
                        {project.projectLink && (
                          <a 
                            href={project.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-project-primary"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Project
                          </a>
                        )}
                        {project.codeLink && (
                          <a 
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-project-secondary"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Navigation */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}