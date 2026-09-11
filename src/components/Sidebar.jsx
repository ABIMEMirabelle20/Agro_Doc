import React from 'react';
import { X, History, ShieldAlert, BookOpen, Settings, HelpCircle } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { icon: History, label: 'Historique des analyses', active: true },
    { icon: ShieldAlert, label: 'Maladies courantes', active: false },
    { icon: BookOpen, label: 'Guide des cultures', active: false },
    { icon: Settings, label: 'Paramètres', active: false },
    { icon: HelpCircle, label: 'Aide & Support', active: false },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        />
      )}

      {/* Sidebar Drawer */}
      <aside className={`
        fixed top-0 left-0 bottom-0 w-72 bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header */}
        <div className="p-4 bg-emerald-800 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">Menu AgroDoctor</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Profile summary */}
        <div className="p-4 border-b bg-emerald-50 flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
            A
          </div>
          <div>
            <p className="font-semibold text-gray-800">Agriculteur Pro</p>
            <p className="text-xs text-gray-500">Zone : Maïs & Cassave</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  item.active 
                    ? 'bg-emerald-100 text-emerald-800 shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${item.active ? 'text-emerald-600' : 'text-gray-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t text-xs text-center text-gray-400">
          AgroDoctor v1.0 • Prototypage Hackathon
        </div>
      </aside>
    </>
  );
}