import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CommandPalette from './components/CommandPalette';
import { Mail, Copy, Check } from 'lucide-react';

export default function App() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'thakurkavya855@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#070b14]/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
            <span className="text-sky-400">KT</span>
            <span className="text-slate-500">.</span>
            <span>dev</span>
          </a>

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-sky-400 text-sky-400 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero onOpenPalette={() => setIsPaletteOpen(true)} />
        <Projects />

        {/* Technical Proficiencies Section */}
        <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/60">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Technical Proficiencies</h2>
            <p className="text-slate-400 text-sm mt-2">
              Categorized skill breakdown across languages, frameworks, and engineering concepts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Languages */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
              <h3 className="text-sky-400 font-semibold text-sm mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'JavaScript (ES6+)', 'SQL', 'HTML5/CSS3'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
              <h3 className="text-sky-400 font-semibold text-sm mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Vite', 'Tailwind CSS', 'Responsive Design'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend & Systems */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
              <h3 className="text-sky-400 font-semibold text-sm mb-4">Backend & Systems</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'WebSockets', 'REST APIs', 'Yjs (CRDTs)'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database & Tools */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
              <h3 className="text-sky-400 font-semibold text-sm mb-4">Database & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'Git & GitHub', 'VS Code', 'Postman', 'Cloudflare Tunnels'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Core CS */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 md:col-span-2">
              <h3 className="text-sky-400 font-semibold text-sm mb-4">Core CS</h3>
              <div className="flex flex-wrap gap-2">
                {['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact Section */}
      <footer id="contact" className="border-t border-slate-800 bg-slate-950/80 py-16 px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-white">Let's Connect & Build</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Currently open to software engineering internships and collaborative full-stack projects. Feel free to reach out directly!
          </p>

          <div className="inline-flex items-center gap-2 p-1.5 px-3 rounded-xl border border-slate-800 bg-slate-900/70 text-slate-300 text-sm">
            <Mail size={16} className="text-sky-400" />
            <span>{email}</span>
            <button
              onClick={copyEmail}
              className="ml-2 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Copy Email"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          </div>

          <div className="flex justify-center gap-4 pt-2">
            {/* GitHub */}
            <a
              href="https://github.com/kavya2704thakur"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all inline-flex items-center justify-center"
              title="GitHub Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kavyanjali-thakur"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all inline-flex items-center justify-center"
              title="LinkedIn Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          <p className="text-xs text-slate-600 pt-6">
            © 2026 Kavyanjali Thakur. Architected with React & Tailwind CSS.
          </p>
        </div>
      </footer>

      {isPaletteOpen && <CommandPalette onClose={() => setIsPaletteOpen(false)} />}
    </div>
  );
}