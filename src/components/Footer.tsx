import React from 'react';
import { Brain, Github, Twitter, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-gray-800/50 bg-gray-900/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Brain className="h-8 w-8 text-blue-400" />
                <div className="absolute inset-0 bg-blue-400 blur-xl opacity-20"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                EFIR
              </span>
              <span className="text-xs bg-gradient-to-r from-green-400 to-blue-500 px-2 py-1 rounded-full text-black font-semibold">
                AI
              </span>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              EFIR — это революционная платформа для доступа к самым мощным нейросетям. 
              Мы делаем искусственный интеллект доступным для каждого.
            </p>

            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-gray-800/50 hover:bg-blue-500/20 border border-gray-700/50 hover:border-blue-500/30 rounded-lg transition-all duration-300"
              >
                <Github className="h-5 w-5 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-gray-800/50 hover:bg-blue-500/20 border border-gray-700/50 hover:border-blue-500/30 rounded-lg transition-all duration-300"
              >
                <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-gray-800/50 hover:bg-blue-500/20 border border-gray-700/50 hover:border-blue-500/30 rounded-lg transition-all duration-300"
              >
                <Mail className="h-5 w-5 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2">
              {[
                'Возможности',
                'Модели ИИ',
                'API',
                'Документация',
                'Обновления'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-1"
                  >
                    <span>{item}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              {[
                'Центр помощи',
                'Связаться с нами',
                'Сообщить об ошибке',
                'Статус системы',
                'Сообщество'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 EFIR. Все права защищены. Беспатентная технология ИИ.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Условия использования
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Файлы cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;