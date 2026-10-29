import React from 'react';
import { ArrowRight, FileText, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import profileImg from '../assets/profile.jpeg';

export default function Hero({ onOpenPalette }) {
  const triggerConfetti = () => {
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.8 } });
  };

  return (
    <section className="relative pt-10 pb-16 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      {/* Left Details */}
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Available for Internships & Software Roles
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
            Kavyanjali Thakur
          </span>
        </h1>

        {/* Professional Career Objective */}
        <div className="p-4 rounded-xl border border-sky-500/20 bg-sky-950/20 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1.5">
            <Sparkles size={14} /> Career Objective
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Aspiring Software Development Engineer with a strong foundation in Java, Data Structures, real-time web applications, and database management. Dedicated to engineering scalable software architectures, building secure distributed systems, and delivering business value through rigorous technical problem-solving.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition-all shadow-lg shadow-sky-500/25"
          >
            Explore Projects <ArrowRight size={18} />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={triggerConfetti}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-medium transition-all"
          >
            <FileText size={18} /> View Resume
          </a>

          <button
            onClick={onOpenPalette}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-3 rounded-lg border border-slate-800 bg-slate-900/40 text-slate-400 text-xs hover:text-slate-200 transition-colors"
          >
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">Ctrl + K</kbd>
          </button>
        </div>
      </div>

      {/* Right Visual / Avatar & Code Card */}
      <div className="flex-1 flex flex-col items-center gap-8 w-full max-w-md">
        {/* Profile Image with Glow Frame */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 blur-2xl opacity-40"></div>
          <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-sky-500 to-purple-500 shadow-2xl shadow-cyan-500/20">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-800">
              <img
                src={profileImg}
                alt="Kavyanjali Thakur"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Developer Config Card */}
        <div className="w-full rounded-xl border border-slate-800 bg-slate-950/70 p-4 font-mono text-xs shadow-xl backdrop-blur-sm">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <span>developer.config.json</span>
          </div>
          <pre className="text-slate-300 leading-relaxed overflow-x-auto">
{`{
  "name": "Kavyanjali Thakur",
  "role": "Software Development Engineer",
  "core_stack": ["Java", "React", "Node.js", "WebSockets"],
  "stats": {
    "problems_solved": "1000+",
    "contests": "100+",
    "status": "Ready to Ship"
  },
  "current_focus": "Distributed State & Offline Systems"
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}