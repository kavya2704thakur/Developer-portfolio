export const projectsData = [
  {
    id: "code-collab",
    title: "CodeCollab",
    subtitle: "Real-Time Collaborative Code Editor",
    description: "A low-latency web IDE supporting concurrent multi-user editing with CRDTs and sandboxed code execution.",
    tags: ["React", "Node.js", "WebSockets", "Yjs", "Monaco Editor"],
    github: "https://github.com/kavya2704thakur",
    liveDemo: "#",
    metrics: "<100ms sync latency, zero conflicts",
    architecture: "React + Monaco -> WebSockets -> Node.js Sandbox -> Yjs CRDT Sync"
  },
  {
    id: "offline-payment-system",
    title: "Offline Digital Payment System",
    subtitle: "Secure Offline Digital Platform",
    description: "A cryptographic transaction system enabling secure offline peer-to-peer payments and tamper-proof ledger sync.",
    tags: ["Java", "React", "Node.js", "MySQL", "Cryptography"],
    github: "https://github.com/kavya2704thakur",
    liveDemo: "#",
    metrics: "Double-spending prevention with digital signatures",
    architecture: "Client Signatures -> Secure Offline Ledger -> Central MySQL Sync"
  }
];

export const skillsData = {
  "Languages": ["Java", "JavaScript (ES6+)", "SQL", "HTML5/CSS3"],
  "Frontend": ["React.js", "Vite", "Tailwind CSS", "Responsive Design"],
  "Backend & Systems": ["Node.js", "Express.js", "WebSockets", "REST APIs", "Yjs (CRDTs)"],
  "Database & Tools": ["MySQL", "Git & GitHub", "VS Code", "Postman", "Cloudflare Tunnels"],
  "Core CS": ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"]
};