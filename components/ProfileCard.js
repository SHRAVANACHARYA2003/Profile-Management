import Link from 'next/link';

export default function ProfileCard({ profile }) {
  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 p-8 flex flex-col items-center text-center overflow-hidden">
      
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 opacity-50"></div>
      
      {/* Profile Image Section */}
      <div className="relative mb-6 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-110"></div>
        <div className="relative">
          <img 
            src={profile.avatar} 
            alt={`${profile.name} - Profile Picture`}
            className="relative w-28 h-28 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl ring-2 ring-slate-100 dark:ring-slate-700"
          />
        </div>
      </div>

      {/* Name and Role */}
      <div className="relative z-10 mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
          {profile.name}
        </h3>
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          {profile.role}
        </p>
      </div>

      {/* Action Button */}
      <Link 
        href={`/profile/${profile.id}`}
        className="relative z-10 mt-auto w-full px-8 py-3 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-100 dark:to-white dark:text-slate-900 text-white rounded-xl text-sm font-bold uppercase tracking-wider hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-600"
      >
        View Profile
      </Link>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
    </div>
  );
}