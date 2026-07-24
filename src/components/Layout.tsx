import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-blue-600/30 selection:text-blue-200 relative">
      {/* HUD Scanner Line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-blue-500/10 shadow-[0_0_10px_rgba(59,130,246,0.3)] z-50 pointer-events-none"></div>

      <Navbar />

      <main className="relative z-10 pt-16">
        {children}
      </main>

      <footer className="py-12 border-t border-zinc-900 text-center font-mono text-[10px] text-slate-500 bg-black relative z-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 gap-4">
          <div>© {new Date().getFullYear()} YUDONO_PORTFOLIO // READY_STATE</div>
          <div className="flex gap-4">
            <span>PING: 14MS</span>
            <span>SECURE_UPLINK: ACTIVE</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;