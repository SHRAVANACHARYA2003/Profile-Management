import ProfileCard from '@/components/ProfileCard';

async function getProfiles() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/profiles`, { cache: 'no-store' });
  return res.json();
}

export default async function HomePage() {
  const profiles = await getProfiles();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      {/* LEFT CORNER LOGO */}
<div className="fixed top-4 left-0 z-50 flex items-center gap-3 pl-3">
  
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
    <span className="block text-slate-900 dark:text-white font-extrabold tracking-wide text-base">
      VISION
    </span>
    <span className="block text-[9px] text-blue-600/70 dark:text-blue-400/70 tracking-widest">
      Where Vision Turns Skills into Opportunity
    </span>
  </div>
</div>

      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">Portfolio Directory</h1>
          <p className="text-slate-600 dark:text-slate-400">Discover and connect with our world-class talent.</p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </main>
  );
}