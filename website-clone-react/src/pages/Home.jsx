import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    document.title = 'Project Dashboard - Website Clones';
  }, []);

  const clones = [
    { title: 'Amway Clone', path: '/amway', color: 'from-green-500/20 to-blue-500/20' },
    { title: 'Nexa Clone', path: '/nexa', color: 'from-gray-500/20 to-black/40' },
    { title: 'Bittorrent Clone', path: '/bittorrent', color: 'from-purple-500/20 to-blue-600/20' },
    { title: 'Hotstar Clone', path: '/hotstar', color: 'from-blue-600/20 to-cyan-400/20' },
    { title: 'Ola Clone', path: '/ola', color: 'from-yellow-400/20 to-green-400/20' },
    { title: 'Netflix Clone', path: '/netflix', color: 'from-red-600/20 to-black/40' },
  ];

  return (
    <div className="bg-[#0b0e14] text-white min-h-screen font-sans flex flex-col items-center justify-center p-6 md:p-12">
      <div className="max-w-6xl w-full">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Website Clone Collection
          </h1>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clones.map((clone, index) => (
            <Link
              key={index}
              to={clone.path}
              className={`group relative overflow-hidden bg-gradient-to-br ${clone.color} p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center`}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h2 className="text-2xl font-bold mb-2 group-hover:scale-110 transition-transform">
                {clone.title}
              </h2>
              <div className="mt-4 flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300">
                Explore Clone <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}
