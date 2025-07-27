import React from 'react';
import { 
  Zap, 
  Shield, 
  Globe, 
  Sparkles, 
  Clock, 
  Users,
  Code,
  BookOpen,
  Palette,
  Calculator,
  Star,
  Rocket,
  Brain
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Мгновенные ответы',
      description: 'Получайте ответы от ИИ за секунды благодаря оптимизированной архитектуре и прямому доступу к API',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Максимальная приватность',
      description: 'Ваши данные не сохраняются на наших серверах и не передаются третьим лицам. Полная конфиденциальность.',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: Globe,
      title: 'Глобальная доступность',
      description: 'Поддержка более 100 языков, работа в любой точке мира, адаптация под местные особенности',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Code,
      title: 'Программирование и код',
      description: 'Написание, отладка, рефакторинг и объяснение кода на 50+ языках программирования',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Образование и обучение',
      description: 'Объяснение сложных концепций, помощь с учёбой, создание учебных материалов',
      color: 'from-red-400 to-rose-500'
    },
    {
      icon: Palette,
      title: 'Творчество и контент',
      description: 'Генерация идей, написание статей, создание сценариев, поэзия и креативные проекты',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: Calculator,
      title: 'Анализ и исследования',
      description: 'Обработка больших данных, статистический анализ, исследования и аналитика',
      color: 'from-teal-400 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Круглосуточная работа',
      description: 'Доступ к ИИ 24/7 без выходных, технических перерывов и ограничений по времени',
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section className="py-32 px-0 relative overflow-hidden">
      {/* Premium background with stars */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/3 to-blue-500/3 rounded-full blur-3xl" />
        
        {/* Floating stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="w-full max-w-none px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium section header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="group flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-6 py-3 rounded-full border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500">
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">Премиум Возможности</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent mb-8 leading-[0.9]">
              Сверхспособности
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                будущего
              </span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed font-light">
              Откройте невероятные возможности искусственного интеллекта
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Каждая функция создана для того, чтобы превратить ваши идеи в реальность
              и дать вам суперсилы в цифровом мире.
            </p>
          </div>

        {/* Premium features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const gradients = [
              'from-purple-500/20 to-pink-500/20',
              'from-blue-500/20 to-cyan-500/20', 
              'from-green-500/20 to-emerald-500/20',
              'from-orange-500/20 to-red-500/20',
              'from-pink-500/20 to-purple-500/20',
              'from-cyan-500/20 to-blue-500/20',
              'from-emerald-500/20 to-green-500/20',
              'from-red-500/20 to-orange-500/20'
            ];
            const borders = [
              'border-purple-500/30',
              'border-blue-500/30',
              'border-green-500/30', 
              'border-orange-500/30',
              'border-pink-500/30',
              'border-cyan-500/30',
              'border-emerald-500/30',
              'border-red-500/30'
            ];
            
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${gradients[index]} backdrop-blur-sm border ${borders[index]} rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden`}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                {/* Icon with premium styling */}
                <div className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center border ${borders[index]} group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                  <IconComponent className={`h-10 w-10 text-white group-hover:scale-125 transition-transform duration-300`} />
                  
                  {/* Sparkle effects */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                </div>
                
                <div className="text-center relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Premium badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-2 py-1 rounded-full">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Статистика */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '1M+', label: 'Пользователей' },
            { number: '50M+', label: 'Запросов' },
            { number: '99.9%', label: 'Доступность' },
            { number: '4', label: 'ИИ Модели' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
