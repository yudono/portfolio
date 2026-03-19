import React from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  GraduationCap,
  Award,
  Briefcase,
  Download,
  Github,
  Linkedin,
  Mail,
  Calendar,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const AboutSection: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  } as const;

  const experiences = [
    {
      company: "Paideia Educational Solutions",
      role: t("seniorFrontendDev"),
      period: `Sep 2022 - ${t("present")}`,
      location: "Indonesia",
      skills: ["React.js", "Node.js", "Tailwind CSS", "TypeScript"],
      description: [t("roleDesc1"), t("roleDesc2"), t("roleDesc3")],
      logo: "/logos/paideia.jpeg",
    },
    {
      company: "PT Digital Agensi Nusantara",
      role: t("fullstackDev"),
      period: "Sep 2021 - Sep 2022",
      location: "Indonesia",
      skills: ["Node.js", "PHP", "MySQL"],
      description: [],
      logo: "/logos/digyta.webp",
    },
    {
      company: "PT. Garuda Visi Nusantara",
      role: t("fullstackDev"),
      period: "Jun 2020 - Sep 2021",
      location: "Tangerang Selatan, Banten",
      skills: ["Node.js", "PHP", "Leaflet", "Google Maps API"],
      description: [t("descGaruda")],
      logo: "/logos/gavin.png",
    },
    {
      company: "Pt Trinindya Utama",
      role: t("internship"),
      period: "Mar 2019 - Mei 2019",
      location: "Jakarta Utara",
      skills: ["PHP", "Laravel", "CodeIgniter"],
      description: [t("descTrinindya")],
      logo: "/logos/trinindya.jpeg",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20 dark:opacity-30">
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header with Language & Download */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-500 dark:from-white dark:via-indigo-400 dark:to-slate-500 mb-4 tracking-tighter">
              {t("about")}
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600/70 dark:text-indigo-400/70">
                Professional Journey
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex items-center p-1 bg-slate-100/50 dark:bg-slate-800/40 backdrop-blur-xl rounded-full border border-slate-200/50 dark:border-slate-700/50">
              <button
                onClick={() => setLanguage("id")}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-black transition-all duration-300",
                  language === "id"
                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xl"
                    : "text-slate-500 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300",
                )}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-black transition-all duration-300",
                  language === "en"
                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xl"
                    : "text-slate-500 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300",
                )}
              >
                EN
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-slate-900 dark:bg-indigo-600 text-white px-8 py-3 rounded-full font-bold text-sm shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">{t("downloadCV")}</span>
              <Download className="relative z-10 w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column: Experience & About */}
          <div className="lg:col-span-8 space-y-12">
            {/* Experience Section - TOP PRIORITY */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
                  <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  {t("experience")}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="p-8 bg-slate-50 dark:bg-slate-900/40 rounded-[2rem] border border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/30 transition-all duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-1.5 shadow-sm group-hover:scale-110 transition-transform duration-500">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                `https://ui-avatars.com/api/?name=${exp.company}&background=6366f1&color=fff`;
                            }}
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {exp.role}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400 font-bold mb-4">
                            {exp.company}
                          </p>

                          <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" /> {exp.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" /> {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {exp.description.length > 0 && (
                      <div className="mt-8 space-y-3 pl-[4.5rem]">
                        {exp.description.map((desc, idx) => (
                          <div key={idx} className="flex gap-3 items-start">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                              {desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-8 flex flex-wrap gap-2 pl-[4.5rem]">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 text-[10px] font-black text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 uppercase tracking-tighter"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* About Me Content */}
            <motion.div
              variants={itemVariants}
              className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-3xl rounded-[2.5rem] border border-slate-200/50 dark:border-slate-800/50 p-8 md:p-12 shadow-2xl shadow-slate-200/50 dark:shadow-none"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                  {t("about")}
                </h3>
                <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mb-8"></div>
                <div className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed space-y-4 font-medium italic relative">
                  <span className="absolute -left-4 top-0 text-6xl text-indigo-500/20 pointer-events-none">
                    "
                  </span>
                  {t("aboutMeContent")
                    .split("\n\n")
                    .map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Column: Education & Certs */}
          <div className="lg:col-span-4 space-y-12">
            {/* Education Card */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-900/60 backdrop-blur-md rounded-[2.5rem] p-10 border border-slate-200/50 dark:border-slate-800/50"
            >
              <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl w-fit mb-6">
                <GraduationCap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-2xl font-black mb-6 text-slate-900 dark:text-white uppercase tracking-tight">
                {t("education")}
              </h3>

              <div className="space-y-10">
                <div className="group relative pl-6 border-l-2 border-indigo-500/20 hover:border-indigo-500 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white dark:ring-slate-900" />
                  <p className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {t("bachelor")}
                  </p>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                    {t("university")}
                  </p>
                  <p className="text-xs font-black text-indigo-600 dark:text-indigo-400 mt-3 inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                    {t("stillStudying")}
                  </p>
                </div>

                <div className="group relative pl-6 border-l-2 border-slate-200 dark:border-slate-800">
                  <p className="font-bold text-slate-950 dark:text-slate-100">
                    {t("highSchool")}
                  </p>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-widest">
                    {t("school")} • 2018 - 2020
                  </p>
                </div>

                <div className="group relative pl-6 border-l-2 border-slate-200 dark:border-slate-800">
                  <p className="font-bold text-slate-950 dark:text-slate-100">
                    {t("middleSchool")}
                  </p>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-widest">
                    SMPN 1 Kota Tangerang • 2015 - 2017
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10">
                  <Award className="w-6 h-6 text-indigo-400" />
                  <h3 className="text-xl text-white uppercase tracking-widest">
                    {t("certifications")}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-5">
                  {[
                    {
                      name: "hackathon IMPHEN x kolosal.ai",
                      image: "/certificates/imphen.jpeg",
                      org: "IMPHEN",
                      year: "2025",
                    },
                    {
                      name: "AI Competition",
                      image: "/certificates/hacktiv8.webp",
                      org: "Hacktiv8 x meta llama",
                      year: "2025",
                    },
                    {
                      name: "Machine Learning Workshop",
                      image: "/certificates/machine-learning-workshop.jpg",
                      org: "Universitas Raharja",
                      year: "2024",
                    },
                    {
                      name: "EF SET English B2",
                      image: "/certificates/ef-set-english.jpg",
                      org: "Upper Intermediate",
                      year: "2023",
                    },
                    {
                      name: "InaRisk BNPB Hackathon",
                      image: "/certificates/inarisk-bnpb-hackathon.jpg",
                      org: "Mobile Apps",
                      year: "2021",
                    },
                    {
                      name: "Web Design LKS",
                      image: "/certificates/web-design-competition.jpg",
                      org: "SMK Regional",
                      year: "2020",
                    },
                  ].map((cert, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="group/cert relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-white/5 cursor-pointer"
                    >
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover opacity-40 group-hover/cert:opacity-100 transition-opacity duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            `https://via.placeholder.com/400x250?text=${cert.name}`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="font-bold text-[10px] text-indigo-300 uppercase tracking-tighter mb-0.5">
                          {cert.org}
                        </p>
                        <p className="font-bold text-xs text-white line-clamp-1">
                          {cert.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="p-1 rounded-[2rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
              <div className="bg-white dark:bg-slate-950 rounded-[1.8rem] p-8 flex flex-col items-center text-center">
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-6">
                  Let's Connect
                </h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Mail, href: "#" },
                  ].map((soc, i) => (
                    <motion.a
                      key={i}
                      href={soc.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <soc.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
