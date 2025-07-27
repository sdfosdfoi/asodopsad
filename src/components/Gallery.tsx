import React from 'react';
import FlipCard from './FlipCard';
import { Sparkles, Cpu, Network, Rocket } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section className="py-32 px-0 relative overflow-hidden">
      {/* Enhanced starry background matching site design */}
      <div className="absolute inset-0">
        {/* Gradient background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-cyan-900/10" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/5 via-transparent to-blue-500/5" />
        
        {/* Large animated orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/6 to-teal-500/6 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/6 to-purple-500/6 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Floating stars */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: `hsl(${Math.random() * 60 + 200}, 70%, 80%)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              boxShadow: `0 0 ${Math.random() * 8 + 4}px rgba(255, 255, 255, 0.3)`
            }}
          />
        ))}
        
        {/* Shooting stars */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `shooting-star ${4 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-purple-500/30">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Галерея технологий</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Инновационные решения
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Откройте для себя мощь современного искусственного интеллекта через интерактивную галерею. 
            Наведите курсор на карточку, чтобы узнать больше о технологиях.
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FlipCard
            imageSrc="/Gemini_Generated_Image_xltgn8xltgn8xltg.png"
            title="AI Технологии"
            description="Передовые алгоритмы машинного обучения и нейронные сети для решения сложных задач в реальном времени."
            features={[
              "Глубокое обучение",
              "Обработка естественного языка",
              "Компьютерное зрение",
              "Предиктивная аналитика"
            ]}
          />
          
          <div className="flex flex-col justify-center items-center space-y-8">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Мощная обработка</h3>
                <p className="text-gray-300 text-sm">Высокопроизводительные вычисления для сложных задач ИИ</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Интеграция</h3>
                <p className="text-gray-300 text-sm">Легкая интеграция с существующими системами и API</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center items-center">
            <div className="bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30 p-12 rounded-3xl border border-purple-500/30 backdrop-blur-sm relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-2xl" />
              
              <div className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Будущее здесь</h3>
                <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                  Присоединяйтесь к революции искусственного интеллекта
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-yellow-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="text-sm">Инновационные решения</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-blue-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
                    <span className="text-sm">Надежные технологии</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-purple-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700" />
                    <span className="text-sm">Безграничные возможности</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

