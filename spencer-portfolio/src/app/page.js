import Hero from './hero';

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <section className="snap-start h-screen flex items-center justify-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-emerald-950 to-black opacity-80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-emerald-400/10 rounded-full blur-[80px] animate-pulse"></div>
        </div>
        <div className="relative z-10 text-center border-2 border-emerald-500/30 rounded-lg p-12 backdrop-blur-sm shadow-[0_0_50px_rgba(52,211,153,0.3)]">
          <h2 className="text-5xl font-bold text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">
            About Me
          </h2>
          <p className="text-emerald-300/70 mt-4">Content coming soon...</p>
        </div>
      </section>

      {/* My Works Section */}
      <section className="snap-start h-screen flex items-center justify-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-950 via-black to-emerald-950 opacity-80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/15 rounded-full blur-[120px] animate-pulse"></div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">
            My Works / Projects
          </h2>
          <p className="text-emerald-300/70 mt-4">Projects showcase coming soon...</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-32 h-32 border border-emerald-500/40 rounded-lg backdrop-blur-sm shadow-[0_0_30px_rgba(52,211,153,0.2)] hover:shadow-[0_0_50px_rgba(52,211,153,0.4)] transition-all"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="snap-start h-screen flex items-center justify-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-emerald-950 to-black opacity-80"></div>
        <div className="absolute inset-0">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px] animate-pulse"></div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">
            Certificates
          </h2>
          <p className="text-emerald-300/70 mt-4">Achievements coming soon...</p>
          <div className="mt-8 flex gap-6 justify-center">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="w-48 h-32 border border-emerald-500/40 rounded-lg backdrop-blur-sm shadow-[0_0_30px_rgba(52,211,153,0.2)]"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="snap-start h-screen flex items-center justify-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-black to-emerald-950 opacity-80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[150px] animate-pulse"></div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)] mb-4">
            Let's Talk
          </h2>
          <p className="text-emerald-300/70 mb-8">Get in touch with me</p>
          <div className="border border-emerald-500/40 rounded-lg p-8 backdrop-blur-sm shadow-[0_0_50px_rgba(52,211,153,0.3)]">
            <p className="text-emerald-300/60">Contact form coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}