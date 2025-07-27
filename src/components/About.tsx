import React from 'react';
import { Brain, Zap, Globe, Users, Code, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="relative z-10 py-32 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                О проекте EFIR
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              EFIR — это революционная платформа, которая демократизирует доступ к искусственному интеллекту. 
              Мы объединили лучшие нейросети мира в одном месте, сделав их доступными каждому.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Наша миссия</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Сделать передовые технологии искусственного интеллекта доступными для каждого человека на планете. 
                  Мы верим, что ИИ должен служить всему человечеству, а не только избранным.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Беспатентная технология</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Мы используем открытые и беспатентные технологии, что позволяет нам предоставлять доступ к ИИ 
                  без ограничений и лицензионных сборов.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                      10M+
                    </div>
                    <div className="text-gray-400">Запросов обработано</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-2">
                      500K+
                    </div>
                    <div className="text-gray-400">Активных пользователей</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                      99.9%
                    </div>
                    <div className="text-gray-400">Время работы</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                      24/7
                    </div>
                    <div className="text-gray-400">Поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Глобальный доступ</h3>
              <p className="text-gray-400 leading-relaxed">
                Наша платформа доступна пользователям по всему миру, поддерживает множество языков и работает в любой точке планеты.
              </p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Открытый код</h3>
              <p className="text-gray-400 leading-relaxed">
                Мы поддерживаем философию открытого кода и прозрачности, делая наши технологии доступными для изучения и улучшения.
              </p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Сообщество</h3>
              <p className="text-gray-400 leading-relaxed">
                Присоединяйтесь к растущему сообществу разработчиков, исследователей и энтузиастов ИИ со всего мира.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;