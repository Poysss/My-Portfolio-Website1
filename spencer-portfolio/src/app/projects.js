'use client';

import { useState } from 'react';
import './projects.css';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/800x500/0a0a0a/34D399?text=E-Commerce+Platform"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      image: "https://via.placeholder.com/800x500/0a0a0a/34D399?text=Task+Management+App"
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot powered by machine learning, capable of natural language processing and contextual conversations.",
      tags: ["Python", "TensorFlow", "React", "FastAPI"],
      image: "https://via.placeholder.com/800x500/0a0a0a/34D399?text=AI+Chat+Assistant"
    },
    {
      id: 4,
      title: "Portfolio Analytics",
      description: "Real-time analytics dashboard for tracking portfolio performance with interactive charts and data visualization.",
      tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      image: "https://via.placeholder.com/800x500/0a0a0a/34D399?text=Portfolio+Analytics"
    },
    {
      id: 5,
      title: "Social Media Hub",
      description: "Unified social media management platform for scheduling posts, analytics tracking, and audience engagement.",
      tags: ["Django", "React", "Redis", "Celery"],
      image: "https://via.placeholder.com/800x500/0a0a0a/34D399?text=Social+Media+Hub"
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
      {/* Background Effects */}
      <div className="projects-bg-gradient"></div>
      <div className="projects-bg-orbs">
        <div className="projects-orb-1"></div>
        <div className="projects-orb-2"></div>
      </div>

      {/* Content */}
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <p className="projects-subtitle">MY WORK</p>
          <h2 className="projects-title">Featured Projects</h2>
        </div>

        {/* Carousel Container */}
        <div className="carousel-wrapper">
          {/* Navigation Buttons */}
          <button 
            onClick={prevProject} 
            className="carousel-nav carousel-nav-left"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextProject} 
            className="carousel-nav carousel-nav-right"
            aria-label="Next project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

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
                        <button className="btn-project-primary">
                          View Project
                        </button>
                        <button className="btn-project-secondary">
                          View Code
                        </button>
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