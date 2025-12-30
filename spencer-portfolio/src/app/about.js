'use client';

import './about.css';

export default function About() {
  const epicPrinciples = [
    {
      letter: 'E',
      title: 'Execute',
      subtitle: 'with purpose',
      description: 'Every line of code serves a purpose, every feature solves a problem.'
    },
    {
      letter: 'P',
      title: 'Progress',
      subtitle: 'over perfection',
      description: 'Ship fast, iterate faster. Real progress beats perfect plans.'
    },
    {
      letter: 'I',
      title: 'Iterate',
      subtitle: 'through learning',
      description: 'Every project teaches something new. Growth happens in the doing.'
    },
    {
      letter: 'C',
      title: 'Create',
      subtitle: 'with impact',
      description: 'Build solutions that matter. Code that makes a real difference.'
    }
  ];

  return (
    <section className="about-section">
      {/* Background Effects */}
      <div className="about-bg-gradient"></div>
      <div className="about-bg-orbs">
        <div className="about-orb-1"></div>
        <div className="about-orb-2"></div>
      </div>

      {/* Content */}
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="about-divider"></div>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Side - Introduction */}
          <div className="about-intro">
            <div className="about-card">
              <p className="about-intro-text">
                I'm a full-stack developer with an <span className="about-highlight">EPIC</span> approach to building the web.
              </p>
            </div>

            <div className="about-card">
              <p className="about-description">
                I specialize in building scalable and reliable user-friendly applications from front to back, with hands-on experience in <span className="about-tech">React</span>, <span className="about-tech">Next.js</span>, and <span className="about-tech">Django</span>.
              </p>
              <p className="about-description">
                I enjoy turning ideas into functional digital experiences—sometimes through careful planning, sometimes through trial and error, but always with intention. Curious by nature and detail-driven by habit, I thrive on collaborating with teams, learning fast, and delivering work that actually makes a difference.
              </p>
            </div>
          </div>

          {/* Right Side - EPIC Principles */}
          <div className="about-principles">
            {epicPrinciples.map((principle, index) => (
              <div
                key={principle.letter}
                className="principle-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="principle-content">
                  <div className="principle-icon-wrapper">
                    <div className="principle-icon">
                      <span className="principle-letter">{principle.letter}</span>
                    </div>
                  </div>
                  <div className="principle-text">
                    <h3 className="principle-title">
                      {principle.title}
                      <span className="principle-subtitle">{principle.subtitle}</span>
                    </h3>
                    <p className="principle-description">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}