'use client';

import './about.css';

export default function About() {
  const interests = [
    'Game Development',
    'Mobile Development', 
    'Web Development',
    'UI/UX Design'
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
          <p className="about-subtitle">GET TO KNOW ME</p>
          <h2 className="about-title">About Me</h2>
        </div>

        {/* Main Content Grid */}
        <div className="about-main-grid">
          {/* Left Card - Profile */}
          <div className="about-profile-card">
            <div className="profile-card-content">
              <div className="profile-text-section">
                <h3 className="profile-name">Spencer Z. Nacario</h3>
                <p className="profile-description-text">
                  Full-stack developer focused on building clean, scalable, and user-friendly web applications. 
                  Currently broadening skills in backend and frontend design.
                </p>
              </div>
              
              <div className="profile-image-container">
                <div className="profile-image-glow"></div>
                <img
                  src="/logo-spencer.png"
                  alt="Spencer Z. Nacario"
                  className="profile-image-about"
                />
              </div>
            </div>

            {/* Interests */}
            <div className="interests-section">
              <h4 className="interests-title">INTERESTS</h4>
              <div className="interests-tags">
                {interests.map((interest, index) => (
                  <span key={index} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Info Cards */}
          <div className="about-info-cards">
            {/* Who I Am */}
            <div className="info-card">
              <h3 className="info-card-title">Who I Am</h3>
              <p className="info-card-text">
                I'm a full-stack developer focused on building clean, scalable, and user-friendly web applications.
              </p>
            </div>

            {/* What I Do */}
            <div className="info-card">
              <h3 className="info-card-title">What I Do</h3>
              <p className="info-card-text">
                I work with technologies like <span className="about-tech">React</span>, <span className="about-tech">Next.js</span>, and <span className="about-tech">Django</span>, and I enjoy turning ideas into functional digital experiences through collaboration, continuous learning, and thoughtful execution.
              </p>
            </div>

            {/* Beyond Code */}
            <div className="info-card">
              <h3 className="info-card-title">Beyond Code</h3>
              <p className="info-card-text">
                When I'm not coding, I enjoy reading books, playing video games, and exploring creative projects that help me grow both personally and professionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}