import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'thakurkavya855@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="border-t border-slate-800 bg-slate-950/80 py-16 px-6 mt-20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Let's Connect & Build</h2>
        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          Currently open to software engineering internships and collaborative full-stack projects. Feel free to reach out directly!
        </p>

        {/* Quick Email Action */}
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

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="https://github.com/kavya2704thakur"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/kavyanjali-thakur"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <p className="text-xs text-slate-600 pt-8">
          © 2026 Kavyanjali Thakur. Architected with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}