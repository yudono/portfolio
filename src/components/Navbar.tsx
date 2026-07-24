import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const { t } = useLanguage();
  const isProjectsPage = window.location.pathname === "/projects";

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setTime(date.toTimeString().split(" ")[0]);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: "HOME", href: isProjectsPage ? "/#home" : "#home", code: "00" },
    { name: "ABOUT", href: isProjectsPage ? "/#about" : "#about", code: "01" },
    { name: "WORKS", href: isProjectsPage ? "/#works" : "#works", code: "02" },
    { name: "PROJECTS", href: "/projects", code: "03" },
    { name: "TIMELINE", href: isProjectsPage ? "/#timeline" : "#timeline", code: "04" },
    { name: "TECH STACK", href: isProjectsPage ? "/#tech-stack" : "#tech-stack", code: "05" },
    { name: "CONTACT", href: isProjectsPage ? "/#contact" : "#contact", code: "06" },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 border-b bg-black/95 border-zinc-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 font-mono">
          {/* Logo with Sci-fi node styling */}
          <div className="flex items-center gap-2">
            {/* <div className="w-8 h-8 rounded border border-emerald-500/30 flex items-center justify-center bg-emerald-950/20 text-emerald-400">
              <Cpu className="w-4 h-4" />
            </div> */}
            <a
              href="#home"
              className="text-sm font-bold tracking-widest text-slate-100 flex flex-col leading-none"
            >
              <span>YUDONO</span>
              <span className="text-[9px] text-emerald-500 font-normal">
                PORTFOLIO
              </span>
            </a>
          </div>

          {/* Desktop futuristic links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-slate-400 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-1 group font-sans font-medium"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center gap-4 text-xs">
            <span className="font-bold text-zinc-500 mr-2">{time}</span>
            <a
              href="/resume.pdf"
              download="Yudono_Putro_Utomo_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-sans font-bold transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t("downloadCV")}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-blue-400 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile futuristic dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out border-b border-zinc-900 ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-black font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-xs text-slate-400 hover:text-blue-400 border-b border-zinc-900 last:border-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-blue-500 mr-2">{link.code}</span>
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Yudono_Putro_Utomo_Resume.pdf"
            className="flex items-center justify-center gap-1.5 w-full py-2.5 mt-2 rounded border border-blue-500/30 bg-blue-950/20 text-blue-400 hover:text-white transition-all text-xs"
            onClick={() => setIsMenuOpen(false)}
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t("downloadCV")}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
