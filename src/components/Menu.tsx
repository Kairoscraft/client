import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Menu({ isOpen, onClose, isDarkMode, onToggleDarkMode }: MenuProps) {
  return (
    <div className={`${!isOpen && 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`
          fixed inset-0 bg-black transition-opacity duration-300 ease-in-out
          ${isOpen ? 'opacity-50' : 'opacity-0'}
        `}
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div 
        className={`
          fixed right-0 top-0 h-full w-64
          ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          shadow-lg
        `}
        style={{ zIndex: 1000 }}
      >
        <div className="p-4">
          <button
            onClick={onToggleDarkMode}
            className={`
              w-full flex items-center justify-between p-3 rounded-lg
              ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}
              transition-all duration-200 hover:scale-[1.02]
            `}
          >
            <span className="flex items-center gap-3">
              {isDarkMode ? (
                <Sun size={20} className="transition-transform duration-200 hover:rotate-90" />
              ) : (
                <Moon size={20} className="transition-transform duration-200 hover:-rotate-12" />
              )}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </span>
          </button>
          {/* Future menu items can be added here */}
        </div>
      </div>
    </div>
  );
}