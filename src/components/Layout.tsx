import React from 'react';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import { Moon, Sun } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300`}>
      <Navbar />
      <div className="absolute top-6 right-6 z-50">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      <main className="container mx-auto px-4 py-8 pt-24 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Yudono. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;