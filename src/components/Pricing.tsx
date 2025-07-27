import React from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Базовый',
      price: 'Бесплатно',
      description: 'Идеально для начинающих',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Доступ к GPT-4.1',
        'Доступ к Gemini Pro',
        '100 запросов в день',
        'Базовая поддержка',
        'Веб-интерфейс'
      ],
      popular: false
    },
    {
      name: 'Продвинутый',
      price: 'Бесплатно',
      description: 'Для активных пользователей',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Все модели ИИ',
        'Неограниченные запросы',
        'Приоритетная поддержка',
        'API доступ',
        'Расширенные настройки',
        'Экспорт истории чатов'
      ],
      popular: true
    },
    {
      name: 'Корпоративный',
      price: 'Бесплатно',
      description: 'Для команд и бизнеса',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      features: [
        'Все возможности Продвинутого',
        'Командная работа',
        'Аналитика использования',
        'Персональный менеджер',
        'SLA гарантии',
        'Кастомизация интерфейса'
      ],
      popular: false
    }
  ];

  return (
    <section className="relative z-10 py-32 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Тарифные планы
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Все наши тарифы абсолютно бесплатны! Мы верим, что доступ к ИИ должен быть правом каждого человека.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              
              return (
                <div
                  key={index}
                  className={`relative group ${
                    plan.popular ? 'transform scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Рекомендуем
                      </div>
                    </div>
                  )}

                  <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  <div className={`relative bg-gray-800/50 backdrop-blur-sm border ${
                    plan.popular ? 'border-purple-500/50' : 'border-gray-700/50'
                  } rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300`}>
                    
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl mb-4`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      
                      <div className="mb-2">
                        <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                          {plan.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">навсегда</p>
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`flex items-center justify-center w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full`}>
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.color} text-white hover:scale-105 shadow-lg`
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
                    }`}>
                      Начать использовать
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Почему всё бесплатно?
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Мы используем беспатентные технологии и открытые модели ИИ, что позволяет нам предоставлять 
                доступ к передовым нейросетям без взимания платы. Наша цель — демократизировать доступ к ИИ 
                и сделать его доступным каждому человеку на планете.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;