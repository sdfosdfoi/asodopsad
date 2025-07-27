import React from 'react';
import { Sparkles, Zap, Shield, ArrowRight, Star, Globe, Brain, Rocket } from 'lucide-react';

interface HeroProps {
  setCurrentView: (view: 'home' | 'chat') => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentView }) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-0 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="w-full max-w-none px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Premium badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="group flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-6 py-3 rounded-full border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-purple-300 text-sm font-medium">Премиум ИИ-Платформа</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
          
          {/* Main heading with premium styling */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9]">
            <span className="block bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Революция в
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              мире ИИ
            </span>
          </h1>
          
          {/* Premium subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed font-light">
            Погрузитесь в будущее искусственного интеллекта
          </p>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Объединяем самые мощные ИИ-модели в одной элегантной платформе для безграничных возможностей
          </p>
          
          {/* Premium CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button 
              onClick={() => setCurrentView('chat')}
              className="group relative bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 hover:from-purple-700 hover:via-blue-700 hover:to-purple-700 px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 flex items-center space-x-3 shadow-2xl hover:shadow-purple-500/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Начать путешествие</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button className="group px-12 py-5 border-2 border-gray-600 hover:border-purple-500 rounded-2xl font-bold text-lg transition-all duration-500 hover:bg-purple-500/10 backdrop-blur-sm flex items-center space-x-3">
              <Globe className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
              <span>Исследовать возможности</span>
            </button>
          </div>
          
          {/* Premium feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <div className="group text-center p-8 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl border border-purple-500/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30 group-hover:rotate-6 transition-transform duration-300">
                <Zap className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Мгновенные ответы</h3>
              <p className="text-gray-400 leading-relaxed">Получайте ответы со скоростью света благодаря передовым алгоритмам</p>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl border border-blue-500/10 hover:border-blue-500/30 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover:rotate-6 transition-transform duration-300">
                <Brain className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Умное обучение</h3>
              <p className="text-gray-400 leading-relaxed">ИИ изучает ваши предпочтения и становится персональным помощником</p>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-cyan-500/5 to-green-500/5 rounded-3xl border border-cyan-500/10 hover:border-cyan-500/30 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30 group-hover:rotate-6 transition-transform duration-300">
                <Shield className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Максимальная защита</h3>
              <p className="text-gray-400 leading-relaxed">Ваши данные под надежной защитой военного уровня</p>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-green-500/5 to-purple-500/5 rounded-3xl border border-green-500/10 hover:border-green-500/30 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-green-500/30 group-hover:rotate-6 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Безграничные идеи</h3>
              <p className="text-gray-400 leading-relaxed">Раскройте творческий потенциал с помощью ИИ нового поколения</p>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-24 pt-12 border-t border-gray-800/50">
            <p className="text-gray-500 text-sm mb-8">Нам доверяют ведущие компании мира</p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 hover:opacity-60 transition-opacity duration-500">
              {['Microsoft', 'Google', 'OpenAI', 'Meta', 'Apple', 'Tesla'].map((company) => (
                <div key={company} className="text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors duration-300">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
