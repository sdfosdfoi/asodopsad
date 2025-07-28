import React from 'react';
import { Brain, Home, MessageSquare, Code, Palette } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'chat' | 'bolt' | 'ai' | 'design';
  setCurrentView: (view: 'home' | 'chat' | 'bolt' | 'ai' | 'design') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  return (
    <header className="relative z-20 border-b border-gray-800/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setCurrentView('home')}
          >
            <div className="relative">
              <Brain className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <div className="absolute inset-0 bg-blue-400 blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              EFIR
            </span>
            <span className="text-xs bg-gradient-to-r from-green-400 to-blue-500 px-2 py-1 rounded-full text-black font-semibold">
              AI
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentView('home')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                currentView === 'home'
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Главная</span>
            </button>
            
            <button
              onClick={() => setCurrentView('chat')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                currentView === 'chat'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              <span>Чат</span>
            </button>
            
            <button
              onClick={() => setCurrentView('bolt')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                currentView === 'bolt'
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <Code className="h-4 w-4" />
              <span>⚡ EFIR-WEB</span>
            </button>
            
            <button
              onClick={() => setCurrentView('ai')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                currentView === 'ai'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <span className="h-4 w-4">🤖</span>
              <span>EFIR.AI</span>
            </button>
            
            <button
              onClick={() => setCurrentView('design')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                currentView === 'design'
                  ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <span className="h-4 w-4">🎨</span>
              <span>EFIR-DESIGN</span>
            </button>
            
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;