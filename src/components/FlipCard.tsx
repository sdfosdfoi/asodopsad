import React from 'react';
import { Code, Zap, Globe, Brain } from 'lucide-react';

interface FlipCardProps {
  imageSrc: string;
  title: string;
  description: string;
  features: string[];
}

const FlipCard: React.FC<FlipCardProps> = ({ imageSrc, title, description, features }) => {
  return (
    <div className="w-full max-w-xl mx-auto perspective-1000 relative">
      {/* Enhanced starry background effect with gradient */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30 rounded-3xl" />
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-blue-500/10 rounded-3xl" />
        
        {/* Enhanced floating stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: `hsl(${Math.random() * 60 + 200}, 70%, 80%)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, 0.3)`
            }}
          />
        ))}
        
        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `shooting-star ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative w-full h-[500px] transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180 flip-card">
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500">
          <div className="relative w-full h-full">
            {/* Premium gradient lighting border */}
            <div className="absolute inset-0 p-1 bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-cyan-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                <img 
                  src={imageSrc} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Regular image */}
            <img 
              src={imageSrc} 
              alt={title}
              className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
            />
            
            {/* Multiple gradient overlays for premium effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/15 via-transparent to-pink-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Animated light rays */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-px w-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
            
            {/* Sparkle effects */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
            <div className="absolute bottom-8 left-8 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
            <div className="absolute top-1/3 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-700" />
            
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-xl font-bold mb-2 drop-shadow-2xl">{title}</h3>
              <p className="text-gray-200 text-sm opacity-90 drop-shadow-lg">Наведите курсор для подробностей</p>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-indigo-900/90 backdrop-blur-sm">
          <div className="p-6 h-full flex flex-col justify-center">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
            </div>
            
            <div className="space-y-3">
              {features.map((feature, index) => {
                const icons = [Code, Zap, Globe, Brain];
                const IconComponent = icons[index % icons.length];
                return (
                  <div key={index} className="flex items-center space-x-3 text-white/90">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-purple-300" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

