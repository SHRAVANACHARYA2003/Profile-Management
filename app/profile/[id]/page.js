import Link from 'next/link';

async function getProfile(id) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/profiles/${id}`, { cache: 'no-store' });
  return res.ok ? res.json() : null;
}

export default async function ProfileDetail({ params }) {
  const { id } = await params;
  const profile = await getProfile(id);

  if (!profile) return (
    <div className="h-screen flex items-center justify-center bg-slate-900">
      <h1 className="text-xl font-bold uppercase tracking-widest text-slate-400">Profile not found</h1>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* STICKY HEADER */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3">
  {/* Logo Icon */}
  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg ring-1 ring-white/10">
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  </div>

  {/* Brand Text */}
  <div className="leading-tight">
    <span className="block text-white font-extrabold tracking-wide text-sm md:text-base">
      VISION
    </span>
    <span className="block text-[9px] md:text-[10px] text-slate-500 font-medium tracking-wider">
      Where Vision Turns Skills into Opportunity
    </span>
  </div>
</div>

          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
              Back to Profiles
            </Link>

            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/25">
              Download Resume
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION WITH PROFESSIONAL GRADIENT */}
      <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-indigo-500/30 rounded-full blur-2xl scale-110" />
            <img 
              src={profile.avatar} 
              className="relative w-48 h-48 rounded-full border-4 border-slate-700 shadow-2xl object-cover mx-auto ring-4 ring-blue-500/20"
              alt={profile.name}
            />
          </div>

          {/* Name & Role */}
          <h1 className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tight">
            {profile.name}
          </h1>
          <p className="text-slate-300 text-xl md:text-2xl font-medium mb-6">
            {profile.role}
          </p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm font-medium mb-8">
            <span className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              {profile.location}
            </span>
            <span className="bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700">
  {profile.gender} | {profile.age} | {profile.pronouns}
</span>

          </div>

          {/* CTA Button */}
          
<Link
  href="#visual-resume"
  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all text-sm uppercase tracking-wider"
>
  {/* Modern Video Icon */}
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
  Watch Visual Resume
</Link>

        </div>
      </header>
      

      {/* IMPACT STATS */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-black bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">{profile.stats.scalability}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                System Scalability
              </div>
              <p className="text-sm text-slate-600">Improved through optimization</p>
            </div>
            <div className="space-y-2 md:border-x border-slate-200">
              <div className="text-5xl font-black bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">{profile.stats.efficiency}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                Backend Efficiency
              </div>
              <p className="text-sm text-slate-600">Performance boost achieved</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">{profile.stats.donations}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                Revenue Growth
              </div>
              <p className="text-sm text-slate-600">Delivered for clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
          {profile.bio}
        </p>
      </section>

      {/* SKILLS BADGES */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
  <div className="flex gap-4 flex-wrap justify-center">
  {profile.skills.map((skill, i) => (
    <img
      key={i}
      src={skill.logo}
      alt="skill"
      className="w-10 h-10 hover:scale-110 transition"
    />
  ))}
</div>


      </section>

    {/* CASE STUDIES SECTION */}
<section id="projects" className="bg-white py-20 border-y border-slate-200">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-end justify-between mb-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
          Case Insights &
        </h2>
        <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Key Projects
        </h3>
      </div>
      <div className="hidden md:flex gap-6">
        <Link
          href="#projects"
          className="px-6 py-2 border-b-2 border-blue-600 text-sm font-bold text-slate-900"
        >
          Case Studies
        </Link>
        <Link
          href="#projects"
          className="px-6 py-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors"
        >
          Projects
        </Link>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {profile.projects?.map((project, index) => (
        <div
          key={index}
          className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-xl transition-all"
        >
          {/* Image */}
          <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
            <img
              src={project.image}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt={project.title}
            />
          </div>

          {/* Title */}
          <h4 className="font-bold text-lg text-slate-900 mb-1">
            {project.title}
          </h4>
          <p className="text-sm text-blue-600 font-semibold mb-3">
            {project.subtitle}
          </p>

          {/* CASE STUDY DETAILS */}
          {project.caseStudy && (
            <div className="text-sm text-slate-600 space-y-3">
              <p>
                <span className="font-semibold text-slate-800">Overview:</span>{" "}
                {project.caseStudy.overview}
              </p>

              <p>
                <span className="font-semibold text-slate-800">Problem:</span>{" "}
                {project.caseStudy.problem}
              </p>

              <p>
                <span className="font-semibold text-slate-800">Solution:</span>{" "}
                {project.caseStudy.solution}
              </p>

              {/* Tech Stack */}
              <div>
                <p className="font-semibold text-slate-800 mb-1">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-200 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div>
                <p className="font-semibold text-slate-800 mb-1">Impact:</p>
                <ul className="list-disc list-inside space-y-1">
                  {project.caseStudy.impact?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

   {/* VISUAL RESUME SECTION */}
<section id="visual-resume" className="max-w-5xl mx-auto px-6 py-20 bg-slate-50">
  <h3 className="text-3xl font-black text-slate-900 text-center mb-12">Visual Resume</h3>
  <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border border-slate-300">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/6iBmuKaIE_k"
      title="Visual Resume"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>


  {/* CONTACT CTA */}
<section className="max-w-4xl mx-auto px-6 py-20">
  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden border border-slate-700">
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl" />
    <h3 className="text-3xl md:text-4xl font-black mb-4 relative z-10">
      Connect with {profile.name.split(' ')[0]}
    </h3>
    <p className="text-slate-300 mb-8 text-lg relative z-10">
      Let's discuss how we can work together
    </p>
    
    {/* Social Links Table */}
    <div className="flex justify-center gap-6 mb-8 relative z-10">
      <a 
        href={profile.github || '#'} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-6 py-3 rounded-full hover:bg-slate-700/50 hover:border-slate-600 transition-all group"
      >
        <svg className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">GitHub</span>
      </a>
      
      <a 
        href={profile.linkedin || '#'} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-6 py-3 rounded-full hover:bg-slate-700/50 hover:border-slate-600 transition-all group"
      >
        <svg className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">LinkedIn</span>
      </a>
    </div>
    
    <div className="flex justify-center relative z-10">
      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105">
        Download Resume
      </button>
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-400">
            © 2025 {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}