import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Cpu,
  Layers,
  Terminal,
  Code,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Briefcase,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Squares from "./Squares";
import PixelBlast from "./PixelBlast";

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
}

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  // Modal state for project detail
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const sendToTelegram = async (data: typeof formData) => {
    const token = import.meta.env.VITE_BOT_API;
    const chatId = import.meta.env.VITE_CHAT_ID;

    if (!token || !chatId) {
      console.error("Telegram credentials missing in .env");
      return false;
    }

    const text = `
📬 *New Contact Form Message*
*Name:* ${data.name}
*Email:* ${data.email}
*Message:* ${data.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: "Markdown",
          }),
        },
      );
      return response.ok;
    } catch (error) {
      console.error("Telegram error:", error);
      return false;
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    const success = await sendToTelegram(formData);
    if (success) {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    } else {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const projects: ProjectItem[] = [
    {
      title: "Documind AI & LLM Projects",
      category: "AI & SaaS",
      description:
        "AI-Powered Document Management & Generation Platform developed for Meta Llama Hackathon 2025. Built a SaaS platform for document management, AI-assisted document generation, and intelligent document workflows.",
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
    },
    {
      title: "Guru Kreator Enterprise",
      category: "Web Apps / Enterprise",
      description:
        "Contributed to a large-scale SaaS learning management platform supporting educational institutions. Developed reporting systems, curriculum management modules, and AI-powered lesson plan generation.",
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
      liveUrl: "https://gurukreator.id",
    },
    {
      title: "WhatsApp.online",
      category: "AI & SaaS",
      description:
        "Designed and developed a CRM platform focused on customer communication and WhatsApp-based business workflows. Built WhatsApp Gateway integrations and automation features.",
      skills: ["Node.js", "Express.js", "React.js", "WhatsApp API"],
      role: "Solo Creator",
      liveUrl: "https://whazapp.online",
    },
    {
      title: "Teguh Tangguh",
      category: "Mobile & GIS",
      description:
        "Developed a mobile application focused on disaster preparedness and risk management. Awarded 3rd Place in the Inarisk BNPB National Hackathon 2021.",
      skills: [
        "Flutter",
        "Unity",
        "C#",
        "Dart",
        "Mobile Development",
        "GIS Integration",
      ],
      role: "Lead Developer",
    },
  ];

  // Carousel Horizontal Scroll Ref
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.firstElementChild?.clientWidth || 350;
      carouselRef.current.scrollBy({
        left: -(cardWidth + 24),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.firstElementChild?.clientWidth || 350;
      carouselRef.current.scrollBy({
        left: cardWidth + 24,
        behavior: "smooth",
      });
    }
  };
  const experiences = [
    {
      company: "Paideia Educational Solutions",
      role: t("seniorFrontendDev"),
      period: `Sep 2022 - ${t("present")}`,
      skills: [
        "Python",
        "FastAPI",
        "Falcon",
        "PonyORM",
        "RabbitMQ",
        "React.js",
        "Next.js",
        "TypeScript",
        "REST APIs",
        "Shadcn UI",
        "Git",
      ],
      description: [t("roleDesc1"), t("roleDesc2"), t("roleDesc3")],
    },
    {
      company: "PT Digital Agensi Nusantara",
      role: t("fullstackDev"),
      period: "Sep 2021 - Sep 2022",
      skills: [
        "PHP",
        "Laravel",
        "Node.js",
        "Express",
        "JavaScript",
        "TypeScript",
        "MySQL",
        "Linux",
        "VPS",
        "Git",
      ],
      description: [
        "Independently managed the complete software development lifecycle, from requirements gathering and system design to deployment and maintenance.",
        "Built and maintained web applications for various business sectors, focusing on scalability, performance, and reliability.",
        "Designed and deployed cloud-based infrastructures and VPS environments for client applications.",
        "Developed frontend interfaces, backend APIs, database integrations, and deployment pipelines for multiple projects.",
        "Worked directly with stakeholders to transform business requirements into technical solutions.",
      ],
    },
    {
      company: "PT Garuda Visi Nusantara",
      role: t("fullstackDev"),
      period: "Jun 2020 - Sep 2021",
      skills: [
        "PHP",
        "Laravel",
        "CodeIgniter",
        "Node.js",
        "JavaScript",
        "Google Maps API",
        "OpenStreetMap",
        "Leaflet",
        "GitHub",
      ],
      description: [t("descGaruda")],
    },
    {
      company: "PT Trinindya",
      role: t("internship"),
      period: "Mar 2019 - May 2019",
      skills: ["PHP", "Laravel", "CodeIgniter", "MySQL", "Excel"],
      description: [t("descTrinindya")],
    },
  ];

  // Skills lists with local brand logos
  const skillsRow1 = [
    { name: "React.js", logo: "/assets/logos/reactjs.png" },
    { name: "Next.js", logo: "/assets/logos/nextjs.png" },
    { name: "TypeScript", logo: "/assets/logos/typescript.png" },
    { name: "Tailwind CSS", logo: "/assets/logos/tailwindcss.png" },
    { name: "Shadcn UI", logo: "/assets/logos/shadcnui.png" },
    { name: "Vue.js", logo: "/assets/logos/vuejs.png" },
    { name: "Redux", logo: "/assets/logos/redux.png" },
    { name: "Vite", logo: "/assets/logos/vite.png" },
    { name: "Python", logo: "/assets/logos/python.png" },
    { name: "Java", logo: "/assets/logos/java.png" },
  ];

  const skillsRow2 = [
    { name: "FastAPI", logo: "/assets/logos/fastapi.png" },
    { name: "Express.js", logo: "/assets/logos/expressjs.png" },
    { name: "Laravel", logo: "/assets/logos/laravel.png" },
    { name: "Falcon", logo: "/assets/logos/falcon.png" },
    { name: "Git", logo: "/assets/logos/git.png" },
    { name: "PostgreSQL", logo: "/assets/logos/postgresql.png" },
    { name: "MySQL", logo: "/assets/logos/mysql.png" },
    { name: "MongoDB", logo: "/assets/logos/mongodb.png" },
    { name: "Docker", logo: "/assets/logos/docker.png" },
    { name: "Linux", logo: "/assets/logos/linux.png" },
  ];

  return (
    <div className="bg-black text-white relative">
      {/* ReactBits PixelBlast Animated Hero Background */}
      <div className="absolute inset-x-0 top-0 w-full h-[650px] pointer-events-none z-0">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#10b981"
          patternScale={2}
          patternDensity={1.2}
          pixelSizeJitter={0.1}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.4}
          edgeFade={0.4}
          transparent
        />
      </div>

      {/* Trae-style Ambient Accent Rings */}
      <div className="absolute top-[5%] left-[25%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* 1. HERO + ABOUT SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center px-4 relative z-10 pt-20"
      >
        {/* Top hero text */}
        <div className="max-w-6xl mx-auto w-full text-center py-12">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-sans font-bold tracking-tight mb-8 leading-[1.08] text-white">
            Ship Scalable Software <br className="hidden sm:inline" />
            with <span className="text-emerald-400">Yudono</span>
          </h1>

          <p className="text-zinc-200 text-sm sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-mono font-medium">
            Fullstack Developer crafting robust web architectures, advanced
            geospatial systems, and seamless Generative AI integrations.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="/resume.pdf"
              download="Yudono_Putro_Utomo_Resume.pdf"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-sans font-bold transition-all rounded duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
            >
              <span>Download Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#works"
              className="px-6 py-3 bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-sans font-medium transition-all rounded duration-200"
            >
              Explore Profile
            </a>
          </div>
        </div>

        {/* About Me + Photo side by side */}
        <div
          id="about"
          className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group overflow-hidden">
                <img
                  src="/my-photos/profile.jpeg"
                  alt="Yudono Putro Utomo"
                  className="w-56 h-64 object-cover rounded-lg border border-zinc-800 opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
              </div>
            </div>

            {/* About Me Card */}
            <div className="cyber-panel p-8 sm:p-10 rounded bg-zinc-950/40 border border-zinc-900">
              <div className="flex items-center gap-2 pb-4 border-b border-zinc-900 mb-6">
                <Terminal className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="font-mono font-bold text-emerald-400 uppercase text-xs tracking-widest">
                  // TELEMETRY_PROFILE_handshake.exe
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-sans font-bold mb-6 text-white">
                {t("about")}
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base font-sans leading-relaxed whitespace-pre-line">
                {t("aboutMeContent")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC WORK/AGENT SECTION (New TRAE Work Style Layout) */}
      <section
        id="works"
        className="py-24 border-t border-zinc-900 px-4 relative z-10 w-full"
      >
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-sans font-bold mb-4 text-white">
              New <span className="text-emerald-400">Yudono</span> Work
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-mono uppercase tracking-widest">
              Selected production-grade client platforms and systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
            {/* Left side text detail */}
            <div>
              <div className="inline-block text-[10px] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-950/10 px-2 py-0.5 mb-4 uppercase rounded">
                Featured Project
              </div>
              <h3 className="text-2xl sm:text-4xl font-sans font-bold mb-4 text-white">
                Documind AI & LLMs
              </h3>
              <p className="text-zinc-400 text-sm font-sans mb-6 leading-relaxed">
                An advanced AI-powered document generation and cognitive RAG
                architecture built for the Meta Llama Hackathon 2025. Harnesses
                agentic workflows powered by LangGraph, Python backend
                pipelines, and high-performance React frontends.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Next.js",
                  "TypeScript",
                  "Python",
                  "RAG",
                  "LangGraph",
                  "Groq",
                  "Meta Llama SDK",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono bg-zinc-950 border border-zinc-900 px-2 py-0.5 text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://documind.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-sans font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Run Live Instance</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right side project image */}
            <div className="relative group overflow-hidden mx-auto aspect-[4/3] rounded-lg border border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <img
                src="/images/documind-ai.png"
                alt="Documind AI & LLMs"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Carousel sub-section for Secondary Projects - FULL WIDTH outside container */}
        <div className="relative w-full border-t border-zinc-900 bg-zinc-950/20 py-16 mt-12 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-10">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-950/20 border border-emerald-500/10 px-2 py-0.5 rounded">
                  PROJECT REPOSITORY
                </span>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mt-2">
                  Best Project
                </h3>
              </div>

              <div className="flex items-center gap-3">
                {/* Load More button */}
                <a
                  href="/projects"
                  className="text-[10px] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-950/20 px-4 py-2 rounded hover:bg-emerald-950/40 hover:border-emerald-500/40 transition-all uppercase tracking-wider flex items-center gap-1.5"
                >
                  <span>Load More</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                {/* Slider Controls */}
                <div className="flex gap-2">
                  <button
                    onClick={scrollLeft}
                    className="w-10 h-10 border border-zinc-800 hover:border-zinc-755 rounded bg-zinc-950/50 flex items-center justify-center text-zinc-400 hover:text-emerald-400 transition-colors"
                    aria-label="Previous Project"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="w-10 h-10 border border-zinc-800 hover:border-zinc-755 rounded bg-zinc-950/50 flex items-center justify-center text-zinc-400 hover:text-emerald-400 transition-colors"
                    aria-label="Next Project"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width scroll list with padding to align with container */}
          <div className="w-full relative px-4 sm:px-6 lg:px-8">
            <div
              ref={carouselRef}
              className="max-w-6xl mx-auto flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedProject(proj)}
                  className="flex-shrink-0 w-full sm:w-[360px] border border-zinc-800 hover:border-emerald-500/40 rounded bg-zinc-950/40 backdrop-blur-md p-6 min-h-[300px] flex flex-col justify-between hover:bg-zinc-950/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-900 mb-4">
                      <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-950/30 border border-emerald-500/10 px-2 py-0.5 rounded">
                        {proj.category}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {(idx + 1).toString().padStart(2, "0")} /{"  "}
                        {projects.length.toString().padStart(2, "0")}
                      </span>
                    </div>

                    <h4 className="text-base font-sans font-bold text-white mb-2 tracking-tight group-hover:text-emerald-400">
                      {proj.title}
                    </h4>

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
                      >
                        <span>LIVE_UPLINK</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-zinc-700">INTERNAL</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE TIMELINE (TRAE Changelog Style) */}
      <section
        id="timeline"
        className="py-24 border-t border-zinc-900 px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-950/20 border border-emerald-500/10 px-2.5 py-1 rounded">
              CHANGELOG
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold mt-4 mb-3 text-white">
              What's <span className="text-emerald-400">NEW</span> in Yudono
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-sans">
              Updates, milestones, and deployment history.
            </p>
          </div>

          {/* Timeline Node Chain - TRAE Changelog Style */}
          <div className="relative border-l border-zinc-800 ml-4 sm:ml-40 space-y-16 mb-20">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[4px] top-1.5 w-2 h-2 bg-white group-hover:bg-emerald-400 transition-colors duration-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>

                {/* Left Side Metadata (Absolute layout on sm screens and larger) */}
                <div className="sm:absolute sm:right-[100%] sm:mr-8 sm:top-0 sm:text-right mb-4 sm:mb-0 w-32 flex-shrink-0">
                  <div className="text-emerald-400 font-bold font-mono text-sm tracking-wide">
                    {exp.period.split(" - ")[0]}
                  </div>
                  <div className="mt-1 flex sm:justify-end gap-1.5 text-[9px] font-mono">
                    <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 text-zinc-400 rounded-sm">
                      {idx === 0
                        ? "CURRENT"
                        : `v${(experiences.length - idx).toFixed(1)}`}
                    </span>
                    <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 text-zinc-400 rounded-sm uppercase">
                      {exp.company.split(" ")[0]}
                    </span>
                  </div>
                </div>

                {/* Right Side Content (Bullet Points) */}
                <div className="font-sans">
                  <h4 className="text-base font-bold text-white mb-1">
                    {exp.role}{" "}
                    <span className="text-zinc-500 font-normal">at</span>{" "}
                    <span className="text-emerald-400 font-semibold">
                      {exp.company}
                    </span>
                  </h4>
                  <ul className="space-y-3 mt-4 text-xs text-zinc-400 list-disc list-outside pl-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags embedded beneath bullet points */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-zinc-900/50">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 bg-zinc-950 border border-zinc-900 text-[9px] font-mono text-zinc-500 uppercase rounded-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Sub-section (TRAE Table Style) */}
          <div className="pt-16 border-t border-zinc-900">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-12">
                {t("education")}
              </h3>

              {/* Education Rows (TRAE Table style) */}
              <div className="space-y-12">
                {/* Row 1: Raharja */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pb-10 border-b border-zinc-900 last:border-none">
                  {/* Left Column: School Title & Metadata */}
                  <div className="md:col-span-1">
                    <h4 className="text-lg font-sans font-bold text-white leading-tight">
                      Universitas Raharja
                    </h4>
                    <span className="inline-block mt-2 text-[9px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-sm uppercase">
                      2023 - 2027
                    </span>
                    <div className="mt-1 text-[10px] font-mono text-emerald-400">
                      STUDYING
                    </div>
                  </div>

                  {/* Right Column: Major & Details */}
                  <div className="md:col-span-2 space-y-3 font-sans">
                    <h5 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {t("bachelor")}
                    </h5>
                    <p className="text-xs text-zinc-400 leading-relaxed pl-3.5">
                      {t("stillStudying").replace("2023 – 2027 • ", "")}
                    </p>
                  </div>
                </div>

                {/* Row 2: SMKN 5 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pb-10 border-b border-zinc-900 last:border-none">
                  {/* Left Column: School Title & Metadata */}
                  <div className="md:col-span-1">
                    <h4 className="text-lg font-sans font-bold text-white leading-tight">
                      SMKN 5 Kota Tangerang
                    </h4>
                    <span className="inline-block mt-2 text-[9px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-sm uppercase">
                      2018 - 2020
                    </span>
                    <div className="mt-1 text-[10px] font-mono text-zinc-500">
                      GRADUATED
                    </div>
                  </div>

                  {/* Right Column: Major & Details */}
                  <div className="md:col-span-2 space-y-3 font-sans">
                    <h5 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {t("highSchool")}
                    </h5>
                    <p className="text-xs text-zinc-400 leading-relaxed pl-3.5">
                      {t("highSchoolDesc").replace("2018 – 2020 • ", "")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS & CAPABILITIES (TRAE Infinite Marquee style) */}
      <section
        id="tech-stack"
        className="py-24 border-t border-zinc-900 relative z-10 overflow-hidden w-full"
      >
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-3xl sm:text-5xl font-sans font-bold mb-4 text-white">
            What Yudono Brings
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-sans">
            Core frameworks, systems mapping & tool configurations.
          </p>
        </div>

        {/* Marquee Content Section */}
        <div className="space-y-6 w-full relative pause-marquee mb-24">
          {/* Row 1: Left to Right */}
          <div className="relative w-full flex overflow-hidden border-y border-zinc-900/60 bg-zinc-950/20 py-4">
            <div className="flex gap-6 animate-marquee-ltr shrink-0 whitespace-nowrap min-w-full">
              {/* Render items twice for seamless loop */}
              {[...skillsRow1, ...skillsRow1, ...skillsRow1].map(
                (skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 border border-zinc-800 bg-zinc-950/60 backdrop-blur-md px-6 py-3.5 rounded shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:border-emerald-500/30 transition-all duration-300 min-w-[170px]"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      width={24}
                      height={24}
                      className="rounded"
                      loading="lazy"
                    />
                    <span className="font-mono text-xs text-zinc-200 tracking-tight">
                      {skill.name}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="relative w-full flex overflow-hidden border-y border-zinc-900/60 bg-zinc-950/20 py-4">
            <div
              className="flex gap-6 animate-marquee-rtl shrink-0 whitespace-nowrap min-w-full"
              style={{ "--speed": "40s" } as React.CSSProperties}
            >
              {[...skillsRow2, ...skillsRow2, ...skillsRow2].map(
                (skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 border border-zinc-800 bg-zinc-950/60 backdrop-blur-md px-6 py-3.5 rounded shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:border-emerald-500/30 transition-all duration-300 min-w-[170px]"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      width={24}
                      height={24}
                      className="rounded"
                      loading="lazy"
                    />
                    <span className="font-mono text-xs text-zinc-200 tracking-tight">
                      {skill.name}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {/* Certifications Sub-section */}
          <div className="pt-16 border-t border-zinc-900">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-sans font-bold mb-3 text-white">
                {t("certifications")}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title:
                    "Meta Llama Hackathon 2025 — Top 50 Finalist (Rank #12)",
                  org: "Hacktiv8 x Meta Llama | Indonesia",
                  date: "Nov 2025",
                  desc: "Ranked 12th nationally. Developed AI-powered solutions utilizing Meta Llama LLMs.",
                  cred: "51c7a339-a471-496f-a9aa-43fce73bfa9a",
                },
                {
                  title: "Hackathon IMPHEN 2025 — Participant Recognition",
                  org: "IMPHEN | Indonesia",
                  date: "Dec 2025",
                  desc: "Developed innovative AI solutions focused on LLMs and Generative AI technologies.",
                },
                {
                  title: "Machine Learning Workshop Certificate",
                  org: "Universitas Raharja | Indonesia",
                  date: "Apr 2025",
                  desc: "Covered Machine Learning fundamentals, predictive modeling, and AI applications.",
                },
                {
                  title: "EF SET English Certificate (B2 Upper Intermediate)",
                  org: "EF Standard English Test (EF SET) | International",
                  date: "Jul 2024",
                  desc: "Achieved a score of 53/100. Certified English proficiency at B2 Upper Intermediate level.",
                },
                {
                  title: "TOEFL Certificate (RCEP 184)",
                  org: "Universitas Raharja | Indonesia",
                  date: "Apr 2026",
                  desc: "RCEP 184 TOEFL assessment.",
                  cred: "7416/RCEP/RU/IV/2026 (Valid through Dec 2036)",
                },
                {
                  title: "Hackathon Inarisk BNPB 2021 — 3rd Place Winner",
                  org: "National Disaster Management Agency (BNPB) | Indonesia",
                  date: "Oct 2021",
                  desc: "Developed a mobile application focused on disaster risk management.",
                  cred: "461/BNPB/D-I/SS.03.01/10/2021",
                },
                {
                  title: "Tangerang City Skills Competition (LKS) — 2nd Place",
                  org: "Web Design & Development Category | Indonesia",
                  date: "Jan 2020",
                  desc: "City-level vocational skills competition. Demonstrated proficiency in web design and frontend technologies.",
                },
              ].map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="cyber-panel p-5 rounded bg-zinc-950/20 border border-zinc-900 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h4 className="text-sm font-sans font-bold text-white leading-snug">
                        {cert.title}
                      </h4>
                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/15 border border-emerald-500/10 px-2 py-0.5 rounded shrink-0">
                        {cert.date}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 block mb-2">
                      {cert.org}
                    </span>
                    <p className="text-zinc-400 text-xs font-sans leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                  {cert.cred && (
                    <div className="mt-3 pt-3 border-t border-zinc-900 text-[9px] font-mono text-zinc-650">
                      CREDENTIAL_ID: {cert.cred}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT TRANSMISSION (CONTACT terminal style) */}
      <section
        id="contact"
        className="py-24 border-t border-zinc-900 px-4 relative z-10"
      >
        <div className="max-w-2xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-sans font-bold mb-4 text-white">
              Secure Contact
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-mono uppercase tracking-widest">
              Direct telemetry handshake transmission
            </p>
          </div>

          <div className="cyber-panel p-6 sm:p-8 rounded bg-zinc-950/30 border border-zinc-900">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-900 mb-6 font-mono text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-white uppercase text-[10px]">
                  CONTACT_MESSAGE_CLIENT.EXE
                </span>
              </div>
              <span>SSL_CONNECTED</span>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="space-y-5 font-mono text-xs"
            >
              <div>
                <label className="block text-[10px] text-emerald-400 uppercase mb-1.5">
                  [01] Sender Identity (Name)
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-black border border-zinc-900 rounded text-xs text-slate-200 outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="Identify..."
                />
              </div>

              <div>
                <label className="block text-[10px] text-emerald-400 uppercase mb-1.5">
                  [02] Return Node Address (Email)
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-black border border-zinc-900 rounded text-xs text-slate-200 outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="Contact address..."
                />
              </div>

              <div>
                <label className="block text-[10px] text-emerald-400 uppercase mb-1.5">
                  [03] Transmission Payload (Message)
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-black border border-zinc-900 rounded text-xs text-slate-200 outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  placeholder="Write message details..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className={`w-full py-3 rounded text-[10px] font-sans font-bold tracking-widest uppercase flex items-center justify-center transition-all ${
                  formStatus === "submitting" || formStatus === "success"
                    ? "bg-green-700 border border-green-600 text-white"
                    : "bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                }`}
              >
                {formStatus === "submitting" ? (
                  <span>TRANSMITTING...</span>
                ) : formStatus === "success" ? (
                  <span>TRANSMITTED_OK</span>
                ) : (
                  <span>INITIATE_TRANSMISSION</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM ACTION CALLOUT (Get Started with TRAE IDE style) */}
      <section className="py-20 border-t border-zinc-900 bg-zinc-950/20 px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto w-full">
          <h3 className="text-3xl sm:text-5xl font-sans font-bold mb-4 text-white">
            Build with Yudono
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm font-mono uppercase tracking-widest mb-8">
            Deploy production environments in Banten, Indonesia // UTC+7
          </p>

          <a
            href="/resume.pdf"
            download="Yudono_Putro_Utomo_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-sans font-bold transition-all rounded shadow-[0_0_20px_rgba(16,185,129,0.25)]"
          >
            <span>Download Resume (PDF)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative bg-zinc-950 border border-zinc-800 rounded-lg w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-[0_0_60px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-600 rounded bg-zinc-950/80 transition-colors"
            >
              ✕
            </button>

            {/* Project Image */}
            <div className="w-full aspect-video bg-zinc-900 border-b border-zinc-800 overflow-hidden">
              <img
                src={selectedProject.image || "/images/placeholder-project.png"}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Category badge */}
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

              {/* Details list */}
              {selectedProject.details && selectedProject.details.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {selectedProject.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm font-sans">
                      <span className="text-emerald-400 mt-1 shrink-0">›</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech stack */}
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

              {/* Footer */}
              <div className="flex justify-between items-center pt-4 border-t border-zinc-900 text-xs font-mono">
                <span className="text-zinc-500">ROLE: {selectedProject.role}</span>
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

export default HeroSection;
