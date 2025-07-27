import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Алексей Петров',
      role: 'Разработчик ПО',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'EFIR изменил мой подход к работе. Теперь я могу использовать несколько ИИ-моделей одновременно и выбирать лучшую для каждой задачи.',
      rating: 5
    },
    {
      name: 'Мария Сидорова',
      role: 'Студентка МГУ',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Благодаря EFIR я могу получить помощь с учёбой от лучших нейросетей мира. Это невероятно удобно и совершенно бесплатно!',
      rating: 5
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Предприниматель',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Использую EFIR для генерации идей и анализа рынка. Качество ответов поражает, а возможность выбора модели — это просто фантастика.',
      rating: 5
    },
    {
      name: 'Елена Волкова',
      role: 'Копирайтер',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'EFIR стал моим незаменимым помощником в создании контента. Разные модели дают разные подходы к решению творческих задач.',
      rating: 5
    },
    {
      name: 'Игорь Смирнов',
      role: 'Data Scientist',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Как специалист по данным, я ценю возможность сравнивать результаты разных моделей. EFIR предоставляет уникальную возможность для исследований.',
      rating: 5
    },
    {
      name: 'Анна Кузнецова',
      role: 'Учитель',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Использую EFIR для подготовки уроков и объяснения сложных тем ученикам. ИИ помогает найти новые подходы к обучению.',
      rating: 5
    }
  ];

  return (
    <section className="relative z-10 py-32">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Отзывы пользователей
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Тысячи пользователей уже оценили возможности EFIR. Присоединяйтесь к нашему сообществу!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="h-8 w-8 text-purple-400 opacity-50" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-8 py-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5 средняя оценка</span>
              <span className="text-gray-400">из 10,000+ отзывов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;