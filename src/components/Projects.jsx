import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [activeArchModal, setActiveArchModal] = useState(null);

  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Featured Engineering Projects</h2>
        <p className="text-gray-400 mt-2 text-sm">Production-ready systems architected for performance, concurrency, and security.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col justify-between p-6 rounded-xl border border-gray-800/80 bg-gray-900/50 hover:border-sky-500/50 transition-all duration-300 group hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {project.subtitle}
                </span>
                <div className="flex items-center gap-3 text-gray-400">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition" aria-label="GitHub Code">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                  <a href={project.liveDemo} className="hover:text-sky-400 transition" aria-label="Live Demo">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-100 group-hover:text-sky-300 transition">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">{project.description}</p>

              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <CheckCircle size={14} /> {project.metrics}
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-0.5 rounded-md bg-gray-800 text-gray-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setActiveArchModal(project)}
              className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-gray-300 bg-gray-800/60 hover:bg-gray-800 border border-gray-700/60 rounded-lg transition cursor-pointer"
            >
              <Layers size={14} /> Inspect System Architecture
            </button>
          </div>
        ))}
      </div>

      {activeArchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 max-w-lg w-full space-y-4">
            <h4 className="text-lg font-bold text-white">{activeArchModal.title} — Architecture Flow</h4>
            <div className="p-4 bg-gray-950 border border-gray-800 rounded-lg font-mono text-xs text-sky-400 leading-relaxed">
              {activeArchModal.architecture}
            </div>
            <p className="text-xs text-gray-400">
              Designed with modular decoupling to isolate client rendering pipelines from backend process execution.
            </p>
            <button
              onClick={() => setActiveArchModal(null)}
              className="w-full py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-lg text-xs font-bold transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}