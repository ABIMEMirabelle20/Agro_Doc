import React from 'react';
import { Menu, Sprout, Bell } from 'lucide-react';

export default function Navbar({ onToggleSidebar }) {
  return (
    <header className="bg-emerald-700 text-white shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Burger & Logo */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-emerald-600 transition-colors duration-200 focus:outline-none"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="bg-white p-1.5 rounded-full text-emerald-700">
              <Sprout className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-wide hidden sm:inline">AgroDoctor</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="hidden md:flex items-center space-x-2 bg-emerald-800/60 px-3 py-1 rounded-full text-sm border border-emerald-500/30">
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
          <span>IA Diagnostic Prête</span>
        </div>

        {/* Profile / Notification */}
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-emerald-600 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-amber-400 rounded-full"></span>
          </button>
          <div className="w-9 h-9 rounded-full bg-emerald-800 flex items-center justify-center border-2 border-emerald-400 font-semibold text-sm">
            AG
          </div>
        </div>
      </div>
    </header>
  );
}