import React, { useEffect, useState } from 'react';
import { Search, FolderGit2, FileText, Send, X } from 'lucide-react';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose((prev) => !prev);
      }
      if (e.key === 'Escape') onClose(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: "Go to CodeCollab Project", href: "#projects", icon: <FolderGit2 size={16} /> },
    { label: "Go to PaySphere System", href: "#projects", icon: <FolderGit2 size={16} /> },
    { label: "Open GitHub Profile", href: "https://github.com/kavya2704thakur", icon: <FileText size={16} />, external: true },
    { label: "Send an Email / Contact", href: "mailto:thakurkavya855@gmail.com", icon: <Send size={16} /> },
  ];

  const filtered = actions.filter(a => a.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-gray-900 border border-gray-700 w-full max-w-md rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center px-4 border-b border-gray-800">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Type a command or jump to..."
            className="w-full bg-transparent py-3 text-sm text-gray-200 outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={() => onClose(false)} className="text-gray-500 hover:text-white cursor-pointer">
            <X size={16} />
          </button>
        </div>

        <div className="p-2 space-y-1">
          {filtered.map((action, idx) => (
            <a
              key={idx}
              href={action.href}
              target={action.external ? "_blank" : "_self"}
              rel="noreferrer"
              onClick={() => onClose(false)}
              className="flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-sky-400 rounded-lg transition"
            >
              {action.icon}
              {action.label}
            </a>
          ))}
          {filtered.length === 0 && (
            <p className="text-xs text-gray-500 text-center py-4">No matching commands found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
