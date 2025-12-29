import './hero.css';

export default function Hero() {
  return (
    <section className="hero-section snap-start h-screen flex items-center justify-center relative overflow-hidden bg-[#0a1f1a]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-black to-black opacity-80"></div>
      <div className="absolute inset-0">
        <div className="glow-orb-1"></div>
        <div className="glow-orb-2"></div>
      </div>
      <div className="relative z-10 w-full flex items-center justify-center px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
          {/* Profile Image - Left */}
          <div className="flex-shrink-0 profile-image-wrapper">
            <div className="profile-glow"></div>
            <img
              src="/me.png"
              alt="Spencer Z. Nacario"
              className="profile-image"
            />
          </div>

          {/* Text Content - Right */}
          <div className="text-left hero-content">
            <h1 className="hero-name">
              <span className="name-part">Spencer Z.</span>
              <br />
              <span className="name-part">Nacario</span>
            </h1>
            <p className="hero-role">
              Full-Stack Developer
            </p>
            <p className="hero-motto">
              Let's build together, shall we?
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 hero-buttons">
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