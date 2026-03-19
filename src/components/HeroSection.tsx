import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Background Beams / Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Grid / Beams effect placeholder */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, gray 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800"
          >
            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
              Available for New Projects
            </span>
          </motion.div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            <span className="block text-slate-900 dark:text-white mb-2">Hi, I'm</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-900 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-200">
              Yudono.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl leading-relaxed text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto md:mx-0 font-medium">
            Senior Frontend Developer specializing in building 
            <span className="text-slate-900 dark:text-white px-2">premium web experiences</span> 
            and scalable digital solutions.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-bold shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl font-bold border border-slate-200 dark:border-slate-800 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to About section" className="group flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 group-hover:text-indigo-500 transition-colors">Scroll</span>
          <ArrowDown size={20} className="text-slate-400 group-hover:text-indigo-500 transition-all animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
