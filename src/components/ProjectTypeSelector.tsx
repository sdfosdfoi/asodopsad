import React, { useState } from 'react';
import { trackEvent } from './Analytics';

interface ProjectType {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
  comingSoon?: boolean;
}

interface ProjectTypeSelectorProps {
  onProjectTypeSelect: (type: string) => void;
  setCurrentView: (view: 'home' | 'chat' | 'bolt' | 'ai' | 'design') => void;
}

const ProjectTypeSelector: React.FC<ProjectTypeSelectorProps> = ({ 
  onProjectTypeSelect, 
  setCurrentView 
}) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const projectTypes: ProjectType[] = [
    {
      id: 'bolt',
      name: 'EFIR-WEB',
      description: 'Создавайте веб-приложения с помощью AI - полная интеграция bolt.new',
      icon: '⚡',
      gradient: 'from-blue-500 to-purple-600',
      features: [
        'AI генерация кода',
        'Live preview',
        'React/Vue/Angular',
        'Готовые компоненты',
        'Deploy в 1 клик'
      ]
    },
    {
      id: 'ai',
      name: 'EFIR.AI',
      description: 'Создавайте ИИ-агентов, чат-ботов и автоматизацию с AgentPlace',
      icon: '🤖',
      gradient: 'from-purple-500 to-pink-600',
      features: [
        'Создание чат-ботов',
        'AI агенты для бизнеса',
        'Автоматизация процессов',
        'Интеграция с API',
        'Но-код решения'
      ]
    },
    {
      id: 'design',
      name: 'EFIR-DESIGN',
      description: 'Создавайте дизайны сайтов с помощью нейросетей и TeleportHQ',
      icon: '🎨',
      gradient: 'from-pink-500 to-orange-500',
      features: [
        'Визуальный редактор',
        'AI-генерация дизайна',
        'Отзывчивые прототипы',
        'Преобразование в код',
        'Компонентные библиотеки'
      ]
    },
    {
      id: 'chat',
      name: 'AI Chat Assistant',
      description: 'Общайтесь с разными AI моделями',
      icon: '💬',
      gradient: 'from-green-500 to-teal-600',
      features: [
        '8+ AI моделей',
        'Умные ответы',
        'Контекстное общение',
        'Экспорт диалогов',
        'Персонализация'
      ]
    }
  ];

  const handleProjectSelect = (projectType: ProjectType) => {
    if (projectType.comingSoon) {
      alert('🚀 Эта функция скоро будет доступна! Следите за обновлениями.');
      return;
    }

    setSelectedType(projectType.id);
    
    // Трекинг выбора типа проекта
    trackEvent('project_type_selected', {
      project_type: projectType.id,
      project_name: projectType.name
    });

    // Переход к соответствующему инструменту
    switch (projectType.id) {
      case 'bolt':
        setCurrentView('bolt');
        break;
      case 'ai':
        setCurrentView('ai');
        break;
      case 'design':
        setCurrentView('design');
        break;
      case 'chat':
        setCurrentView('chat');
        break;
      default:
        onProjectTypeSelect(projectType.id);
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Что хотите создать?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Выберите инструмент для воплощения ваших идей. От веб-приложений до дизайн-систем — всё в одном месте.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectTypes.map((type) => (
            <div
              key={type.id}
              className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                selectedType === type.id ? 'scale-105' : ''
              }`}
              onClick={() => handleProjectSelect(type)}
            >
              {/* Coming Soon Badge */}
              {type.comingSoon && (
                <div className="absolute -top-2 -right-2 z-10 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                  СКОРО
                </div>
              )}

              {/* Card */}
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${type.gradient} p-6 h-full min-h-[320px] group-hover:shadow-2xl transition-all duration-300`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {type.name}
                  </h3>
                  <p className="text-white/90 text-sm mb-6 leading-relaxed">
                    {type.description}
                  </p>

                  {/* Features */}
                  <div className="flex-1">
                    <div className="space-y-2">
                      {type.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-80"></div>
                          {feature}
                        </div>
                      ))}
                      {type.features.length > 4 && (
                        <div className="text-white/60 text-xs">
                          +{type.features.length - 4} больше возможностей
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 text-center text-white font-medium group-hover:bg-white/30 transition-all duration-300">
                      {type.comingSoon ? '🔔 Уведомить' : '🚀 Начать создавать'}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              🎯 Все инструменты в одном месте
            </h3>
            <p className="text-gray-300 mb-6">
              Наша платформа объединяет лучшие AI-инструменты для создания любых цифровых продуктов. 
              От простых сайтов до сложных веб-приложений — выбирайте подходящий инструмент для своей задачи.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                ⚡ Быстрая разработка
              </span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                🤖 AI-ассистент
              </span>
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                🔧 Готовые шаблоны
              </span>
              <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full">
                🚀 Мгновенный деплой
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTypeSelector;

