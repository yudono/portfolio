import React, { useState } from "react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";

interface ProjectItem {
  title: string;
  category: string;
  description: string;
  skills: string[];
  role: string;
  liveUrl?: string;
  image?: string;
  period?: string;
  details?: string[];
  groupLabel?: string;
}

const IMG = "/images/placeholder-project.png";

const allProjects: ProjectItem[] = [
  // ── AI & SAAS ────────────────────────────────────────────
  {
    title: "Documind AI & LLM Projects",
    category: "AI & SAAS",
    description:
      "Built a SaaS platform for document management, AI-assisted document generation, and intelligent document workflows. Developed as part of the Meta Llama Hackathon 2025.",
    skills: [
      "Next.js",
      "TypeScript",
      "Python",
      "AI/LLM Integration",
      "RAG",
      "LangGraph",
      "Groq",
      "REST API",
    ],
    role: "Creator / Lead Architect",
    liveUrl: "https://documind.id",
    image: "/images/documind-ai.png",
    period: "Nov 2025",
    details: [
      "Built a SaaS platform for document management, AI-assisted document generation, and intelligent document workflows.",
      "Implemented Generative AI features using Large Language Models (LLMs) for document creation, editing, and research assistance.",
      "Developed as part of the Meta Llama Hackathon 2025 project.",
    ],
  },
  {
    title: "WhatsApp.online",
    category: "AI & SAAS",
    description:
      "CRM & WhatsApp Business SaaS Platform — Designed and developed a CRM platform focused on customer communication and WhatsApp-based business workflows.",
    skills: ["Node.js", "Express.js", "React.js", "WhatsApp API"],
    role: "Solo Creator",
    liveUrl: "https://whatsapp.online",
    image: "/images/whazapp.png",
    period: "2026",
    details: [
      "Designed and developed a CRM platform focused on customer communication and WhatsApp-based business workflows.",
      "Built WhatsApp Gateway integrations and automation features.",
    ],
  },

  // ── WEB APPS / ENTERPRISE ────────────────────────────────
  {
    title: "Guru Kreator Enterprise",
    category: "WEB APPS / ENTERPRISE",
    description:
      "Contributed to a large-scale SaaS learning management platform supporting educational institutions.",
    skills: [
      "React.js",
      "Vite",
      "Turbo",
      "Microfrontend",
      "TypeScript",
      "Redux",
      "REST API",
    ],
    role: "Core Contributor",
    image: IMG,
    period: "Sep 2022 – Present",
    details: [
      "Contributed to a large-scale SaaS learning management platform supporting educational institutions.",
      "Developed reporting systems, curriculum management modules, and AI-powered lesson plan generation.",
      "Implemented scalable frontend architecture and state management.",
    ],
  },
  {
    title: "FMS (MediaBerbagi.com)",
    category: "WEB APPS / ENTERPRISE",
    description:
      "Multi-Tenant Crowdfunding SaaS Platform — Developed a crowdfunding platform supporting multiple organizations and fundraising campaigns.",
    skills: ["Laravel", "MySQL", "Vue.js", "Payment Gateway", "VPS"],
    role: "Fullstack Developer",
    period: "Sep 2021 – Sep 2022",
    details: [
      "Developed a crowdfunding platform supporting multiple organizations and fundraising campaigns.",
      "Implemented multi-tenant architecture, payment workflows, campaign management, and administrative dashboards.",
    ],
  },
  {
    title: "Geospatial Information System",
    category: "WEB APPS / ENTERPRISE",
    description:
      "Developed interactive geospatial web applications using mapping technologies at PT Garuda Visi Nusantara.",
    skills: [
      "Laravel",
      "Vue",
      "JavaScript",
      "PHP",
      "Google Maps API",
      "OpenStreetMap",
      "Leaflet",
    ],
    role: "Fullstack Developer",
    period: "Jun 2020 – Sep 2021",
    details: [
      "Developed interactive geospatial web applications using mapping technologies.",
      "Integrated Google Maps API, OpenStreetMap, and Leaflet for location-based services.",
    ],
  },
  {
    title: "Tabe Kalteng (Gov MSME Platform)",
    category: "WEB APPS / FREELANCE",
    description:
      "Provincial Government Digital UMKM Platform — Developed frontend features for a government platform supporting MSMEs and digital business services.",
    skills: ["TypeScript", "JavaScript", "React.js", "Redux", "REST API"],
    role: "Frontend Developer",
    period: "2022",
    details: [
      "Developed frontend features for a government platform supporting MSMEs and digital business services.",
      "Implemented responsive interfaces and state management architecture.",
    ],
  },

  // ── MOBILE APPS ──────────────────────────────────────────
  {
    title: "Teguh Tangguh",
    category: "MOBILE APPS",
    description:
      "Disaster Risk Management Mobile Application — Developed a mobile application focused on disaster preparedness and risk management. Awarded 3rd Place in the Inarisk BNPB National Hackathon 2021.",
    skills: ["Flutter", "Unity", "C#", "Dart", "Mobile Development", "GIS"],
    role: "Developer",
    period: "Oct 2021",
    details: [
      "Developed a mobile application focused on disaster preparedness and risk management.",
      "Awarded 3rd Place in the Inarisk BNPB National Hackathon 2021.",
    ],
  },

  // ── Content & Community Platforms (grouped) ───────────────
  {
    title: "Banua.info",
    category: "CONTENT PLATFORMS",
    description: "News & article portal.",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript"],
    role: "Fullstack Developer",
    image: "/images/blog-forum.jpg",
    period: "2022",
    groupLabel: "Content & Community Platforms",
  },
  {
    title: "Occhiolism.net",
    category: "CONTENT PLATFORMS",
    description: "Articles & discussion forum.",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript"],
    role: "Fullstack Developer",
    image: "/images/blog-forum.jpg",
    period: "2023",
  },
  {
    title: "LantingLiterasi.com",
    category: "CONTENT PLATFORMS",
    description: "Articles & community platform.",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript"],
    role: "Fullstack Developer",
    image: "/images/blog-forum.jpg",
    period: "2023",
  },
  {
    title: "Huniannyaman.id",
    category: "CONTENT PLATFORMS",
    description: "Property content platform.",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript"],
    role: "Fullstack Developer",
    image: "/images/hunianyaman.jpg",
    period: "2023",
  },
  {
    title: "LuxmelDigital.com",
    category: "CONTENT PLATFORMS",
    description: "Business content platform.",
    skills: ["PHP", "Laravel", "Next.js", "MySQL"],
    role: "Fullstack Developer",
    image: "/images/figma-landing.jpg",
    period: "2023",
  },

  // ── Crowdfunding Platforms (grouped) ──────────────────────
  {
    title: "Baitulmaal Muamalat (BMM.or.id)",
    category: "CROWDFUNDING PLATFORMS",
    description: "Baitulmaal Muamalat fundraising platform.",
    skills: ["Laravel", "Vue.js", "PHP", "MySQL", "REST API"],
    role: "Fullstack Developer",
    image: "/images/baitulmaal.jpg",
    period: "2023 – 2024",
    groupLabel: "Crowdfunding Platforms",
  },
  {
    title: "MDIN Microsite Bank Muamalat",
    category: "CROWDFUNDING PLATFORMS",
    description: "MDIN.BMM.or.id — Bank Muamalat microsite.",
    skills: ["Laravel", "Vue.js", "PHP", "MySQL", "REST API"],
    role: "Fullstack Developer",
    image: "/images/baitulmaal.jpg",
    period: "2024",
  },
  {
    title: "Merawat Indonesia",
    category: "CROWDFUNDING PLATFORMS",
    description: "MerawatIndonesia.com — Nonprofit fundraising platform.",
    skills: ["Laravel", "Vue.js", "PHP", "MySQL"],
    role: "Fullstack Developer",
    image: IMG,
    period: "2020",
  },
  {
    title: "Berkah Berjamaah",
    category: "CROWDFUNDING PLATFORMS",
    description: "BerkahBerjamaah.com — Crowdfunding platform.",
    skills: ["Laravel", "Vue.js", "PHP", "MySQL"],
    role: "Fullstack Developer",
    image: IMG,
    period: "2023",
  },
  {
    title: "Itqan Peduli",
    category: "CROWDFUNDING PLATFORMS",
    description: "ItqanPeduli.com — Charity & donation platform.",
    skills: ["Laravel", "Vue.js", "PHP", "MySQL"],
    role: "Fullstack Developer",
    image: "/images/itqan-peduli.jpg",
    period: "2021",
  },
  {
    title: "Amazing Sedekah",
    category: "CROWDFUNDING PLATFORMS",
    description: "AmazingSedekah.com — Sedekah & donation platform.",
    skills: ["Laravel", "Vue.js", "PHP", "MySQL"],
    role: "Fullstack Developer",
    image: IMG,
    period: "2021",
  },
  {
    title: "BMBU Crowdfunding",
    category: "CROWDFUNDING PLATFORMS",
    description: "KebaikanKecil.com — BMBU crowdfunding platform.",
    skills: ["Laravel", "Vue.js", "PHP", "MySQL"],
    role: "Fullstack Developer",
    image: IMG,
    period: "2023",
  },
  {
    title: "LAZ DKD",
    category: "CROWDFUNDING PLATFORMS",
    description: "LAZ DKD fundraising & management platform.",
    skills: ["Laravel", "Vue.js", "PHP", "MySQL"],
    role: "Fullstack Developer",
    image: IMG,
    period: "2021",
  },
  {
    title: "Lazismu DKI Jakarta",
    category: "CROWDFUNDING PLATFORMS",
    description: "Lazismu DKI Jakarta donation platform.",
    skills: ["Laravel", "Vue.js", "PHP", "MySQL"],
    role: "Fullstack Developer",
    image: IMG,
    period: "2021",
  },
  {
    title: "Lazismu Jawa Barat",
    category: "CROWDFUNDING PLATFORMS",
    description: "Lazismu Jawa Barat donation platform.",
    skills: ["Laravel", "Vue.js", "PHP", "MySQL"],
    role: "Fullstack Developer",
    image: IMG,
    period: "2021",
  },
  {
    title: "LAZNAS Al-Irsyad",
    category: "CROWDFUNDING PLATFORMS",
    description: "LAZNAS Al-Irsyad fundraising platform.",
    skills: ["Laravel", "Vue.js", "PHP", "MySQL"],
    role: "Fullstack Developer",
    image: IMG,
    period: "2021",
  },

  // ── Additional Projects (grouped) ─────────────────────────
  {
    title: "Yukasir POS System",
    category: "ADDITIONAL PROJECTS",
    description: "Point-of-sale system for retail management.",
    skills: ["Laravel", "Vue.js", "JavaScript", "MySQL"],
    role: "Developer",
    image: "/images/yukasir.png",
    period: "2026",
    groupLabel: "Additional Projects",
  },
  {
    title: "Java Desktop POS Application",
    category: "ADDITIONAL PROJECTS",
    description: "Desktop POS application built with Java and NetBeans IDE.",
    skills: ["Java", "NetBeans"],
    role: "Developer",
    image: "/images/pos-system.jpg",
    period: "2025",
  },
  {
    title: "IDCloudKu Hosting Platform",
    category: "ADDITIONAL PROJECTS",
    description: "HTML/CSS frontend development for a cloud hosting platform.",
    skills: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Developer",
    image: IMG,
    period: "2025",
  },
  {
    title: "NeedYourHug",
    category: "ADDITIONAL PROJECTS",
    description: "Part of the Indonesia 1000 Startup Digital Program.",
    skills: ["Laravel", "Vue.js", "JavaScript"],
    role: "Developer",
    image: IMG,
    period: "2021",
  },
  {
    title: "KMS Kota Minyak",
    category: "ADDITIONAL PROJECTS",
    description: "Knowledge Management System for Kota Minyak.",
    skills: ["PHP", "Laravel", "MySQL"],
    role: "Developer",
    image: IMG,
    period: "2019",
  },
  {
    title: "Library Management System",
    category: "ADDITIONAL PROJECTS",
    description: "Library management and cataloging system.",
    skills: ["PHP", "CodeIgniter", "MySQL"],
    role: "Developer",
    image: IMG,
    period: "2019",
  },
];

const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="mb-16">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 hover:text-emerald-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>BACK_TO_HOME</span>
          </a>
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-950/20 border border-emerald-500/10 px-2 py-0.5 rounded">
            ALL PROJECTS
          </span>
          <h1 className="text-4xl sm:text-5xl font-sans font-bold text-white mt-4 mb-4">
            {t("project")}
          </h1>
          <p className="text-zinc-400 text-sm font-mono max-w-xl">
            Complete archive of all professional and personal projects,
            including freelance work, enterprise platforms, hackathon builds,
            and open-source contributions.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allProjects.map((proj, idx) => (
            <React.Fragment key={idx}>
              {/* Group Label Header - spans full width */}
              {proj.groupLabel && (
                <div className="col-span-full border-t border-zinc-800 pt-8 pb-2">
                  <span className="text-sm font-sans font-bold text-white">
                    {proj.groupLabel}
                  </span>
                </div>
              )}

              {/* Project Card */}
              <div
                onClick={() => setSelectedProject(proj)}
                className="border border-zinc-800 hover:border-emerald-500/40 rounded bg-zinc-950/40 backdrop-blur-md p-6 flex flex-col justify-between hover:bg-zinc-950/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer min-h-[280px]"
              >
                <div>
                  {/* Project image */}
                  <div className="w-full aspect-video rounded overflow-hidden border border-zinc-800 mb-4 bg-zinc-900">
                    <img
                      src={proj.image || IMG}
                      alt={proj.title}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-zinc-900 mb-4">
                    <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-950/30 border border-emerald-500/10 px-2 py-0.5 rounded">
                      {proj.category}
                    </span>
                    {proj.period && (
                      <span className="text-[10px] font-mono text-zinc-500">
                        {proj.period}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-sans font-bold text-white mb-2 tracking-tight">
                    {proj.title}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed mb-4 font-sans line-clamp-3">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[9px] font-mono bg-black border border-zinc-900 px-2 py-0.5 text-zinc-500 rounded-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-zinc-900 text-[10px] font-mono">
                  <span className="text-zinc-500">ROLE: {proj.role}</span>
                  {proj.liveUrl ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-bold uppercase transition-colors flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>LIVE_UPLINK</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-zinc-700">INTERNAL</span>
                  )}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </main>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <div
            className="relative bg-zinc-950 border border-zinc-800 rounded-lg w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-[0_0_60px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-600 rounded bg-zinc-950/80 transition-colors"
            >
              ✕
            </button>

            <div className="w-full aspect-video bg-zinc-900 border-b border-zinc-800 overflow-hidden">
              <img
                src={selectedProject.image || "/images/placeholder-project.png"}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <span className="inline-block text-[10px] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-950/10 px-2 py-0.5 mb-4 uppercase rounded">
                {selectedProject.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-2">
                {selectedProject.title}
              </h3>

              {selectedProject.period && (
                <p className="text-zinc-500 text-xs font-mono mb-4">
                  {selectedProject.period}
                </p>
              )}

              <p className="text-zinc-300 text-sm font-sans leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {selectedProject.details &&
                selectedProject.details.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {selectedProject.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-zinc-400 text-sm font-sans"
                      >
                        <span className="text-emerald-400 mt-1 shrink-0">
                          ›
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedProject.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-zinc-400 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-zinc-900 text-xs font-mono">
                <span className="text-zinc-500">
                  ROLE: {selectedProject.role}
                </span>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold uppercase transition-colors flex items-center gap-1"
                  >
                    <span>LIVE_UPLINK</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
