import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative pb-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Hi, I'm{" "}
          <span className="text-indigo-600 dark:text-indigo-400">Yudono</span>
        </h1>

        <p className="text-xl sm:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
          Frontend Developer at Paideia Educational Solutions, passionate about
          creating innovative web solutions and user experiences.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors duration-300 shadow-sm hover:shadow flex items-center justify-center font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown size={24} className="text-gray-500 dark:text-gray-400" />
        </a>
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20 -z-10"></div>
    </section>
  );
};

export default HeroSection;
