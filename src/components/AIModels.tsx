import React from 'react';
import { Bot, Cpu, Sparkles, Zap, Star, TrendingUp, Shield, Lightbulb } from 'lucide-react';

interface AIModelsProps {
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  setCurrentView: (view: 'home' | 'chat') => void;
}

const AIModels: React.FC<AIModelsProps> = ({ selectedModel, setSelectedModel, setCurrentView }) => {
  const models = [
    {
      id: 'gpt-4.1',
      name: 'GPT-4.1',
      description: 'Самая мощная модель от OpenAI с улучшенными возможностями рассуждения',
      icon: Bot,
      color: 'from-green-400 to-blue-500',
      features: ['Мультимодальность', 'Длинный контекст', 'Высокая точность']
    },
    {
      id: 'gemini-pro',
      name: 'Gemini Pro',
      description: 'Передовая модель Google с превосходными аналитическими способностями',
      icon: Sparkles,
      color: 'from-blue-400 to-purple-500',
      features: ['Быстрая обработка', 'Мультиязычность', 'Логические рассуждения']
    },
    {
      id: 'claude-3',
      name: 'Claude 3',
      description: 'Этичный ИИ от Anthropic с фокусом на безопасность и полезность',
      icon: Cpu,
      color: 'from-purple-400 to-pink-500',
      features: ['Безопасность', 'Длинные тексты', 'Точность в деталях']
    },
    {
      id: 'grok-2',
      name: 'Grok 2',
      description: 'Революционная модель с уникальным подходом к пониманию контекста',
      icon: Zap,
      color: 'from-orange-400 to-red-500',
      features: ['Креативность', 'Юмор', 'Нестандартные ответы']
    }
  ];

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId);
    setCurrentView('chat');
  };

  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Выберите свою
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Нейросеть
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Каждая модель имеет уникальные особенности. Выберите ту, которая лучше всего подходит для ваших задач.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model) => {
            const IconComponent = model.icon;
            const isSelected = selectedModel === model.id;
            
            return (
              <div
                key={model.id}
                onClick={() => handleModelSelect(model.id)}
                className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  isSelected ? 'scale-105' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${model.color} rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 ${
                  isSelected ? 'opacity-30' : ''
                }`}></div>
                
                <div className={`relative bg-gray-800/50 backdrop-blur-sm border ${
                  isSelected ? 'border-blue-500/50' : 'border-gray-700/50'
                } rounded-xl p-6 h-full hover:border-gray-600/50 transition-all duration-300`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${model.color} rounded-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    {isSelected && (
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{model.description}</p>
                  
                  <div className="space-y-2">
                    {model.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className={`w-1 h-1 bg-gradient-to-r ${model.color} rounded-full`}></div>
                        <span className="text-xs text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full mt-6 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                    isSelected 
                      ? `bg-gradient-to-r ${model.color} text-white shadow-lg`
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                  }`}>
                    {isSelected ? 'Выбрано' : 'Выбрать'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIModels;