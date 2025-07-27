// Сервис для работы с различными AI API

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface AIResponse {
  content: string;
  model: string;
}

class AIService {
  private openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
  private geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
  private grockApiKey = import.meta.env.VITE_GROCK_API_KEY || '';
  private claudeApiKey = import.meta.env.VITE_CLAUDE_API_KEY || '';
  
  // Режим демонстрации (когда нет API ключей)
  private isDemoMode = !this.openaiApiKey && !this.geminiApiKey && !this.claudeApiKey && !this.grockApiKey;

  async sendMessage(message: string, model: string): Promise<AIResponse> {
    try {
      switch (model) {
        case 'gpt-4.1':
          return await this.callOpenAI(message);
        case 'gemini-pro':
          return await this.callGemini(message);
        case 'claude-3':
          return await this.callClaude(message);
        case 'grok-2':
          return await this.callGrok(message);
        case 'cohere-command':
          return await this.callCohere(message);
        case 'huggingface-chat':
          return await this.callHuggingFace(message);
        case 'mistral-7b':
          return await this.callMistral(message);
        case 'llama-2':
          return await this.callLlama(message);
        default:
          throw new Error('Неподдерживаемая модель');
      }
    } catch (error) {
      console.error('Ошибка при обращении к AI:', error);
      throw error;
    }
  }

  private async callOpenAI(message: string): Promise<AIResponse> {
    try {
      if (!this.openaiApiKey) {
        // Если нет ключа OpenAI, используем демо-ответы
        await new Promise(resolve => setTimeout(resolve, 1200 + Math.random() * 500));
        return this.generateDemoResponse(message, 'GPT-4.1', 'gpt');
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.openaiApiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'Ты полезный ИИ-ассистент. Отвечай на русском языке, будь дружелюбным и информативным.'
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 2000,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      return {
        content: data.choices[0].message.content,
        model: 'GPT-4.1'
      };
    } catch (error) {
      console.error('OpenAI API error:', error);
      // Fallback на демо-ответ при ошибке
      return this.generateDemoResponse(message, 'GPT-4.1', 'gpt');
    }
  }

  private async callGemini(message: string): Promise<AIResponse> {
    try {
      if (!this.geminiApiKey) {
        console.log('Gemini: нет API ключа, используем демо-режим');
        await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
        return this.generateSmartGeminiResponse(message);
      }

      console.log('Gemini: пытаемся подключиться к API...');
      
      // Попытка 1: Обычный endpoint
      const endpoints = [
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
        'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'
      ];

      for (let i = 0; i < endpoints.length; i++) {
        try {
          console.log(`Gemini: попытка ${i + 1} с endpoint: ${endpoints[i]}`);
          
          const response = await fetch(endpoints[i], {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-goog-api-key': this.geminiApiKey,
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            },
            body: JSON.stringify({
              contents: [{
                parts: [{
                  text: `Отвечай на русском языке. Вопрос: ${message}`
                }]
              }],
              generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 2048,
              },
              safetySettings: [
                {
                  category: "HARM_CATEGORY_HARASSMENT",
                  threshold: "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                  category: "HARM_CATEGORY_HATE_SPEECH",
                  threshold: "BLOCK_MEDIUM_AND_ABOVE"
                }
              ]
            })
          });

          if (response.ok) {
            const data = await response.json();
            console.log('Gemini: успешно получен ответ');
            
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
              return {
                content: data.candidates[0].content.parts[0].text,
                model: 'Gemini Pro'
              };
            } else {
              throw new Error('нет кандидатов в ответе');
            }
          } else {
            const errorText = await response.text();
            console.log(`Gemini endpoint ${i + 1} ошибка ${response.status}:`, errorText);
            
            if (i === endpoints.length - 1) {
              throw new Error(`все endpoints вернули ошибку`);
            }
          }
        } catch (endpointError) {
          console.log(`Gemini endpoint ${i + 1} ошибка:`, endpointError);
          if (i === endpoints.length - 1) {
            throw endpointError;
          }
        }
      }
    } catch (error) {
      console.log('Gemini API недоступен, переключаемся на демо-режим:', error);
      await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
      return this.generateSmartGeminiResponse(message);
    }
  }

  private generateSmartGeminiResponse(message: string): AIResponse {
    const lowerMessage = message.toLowerCase();
    
    // Определяем тип вопроса и даем соответствующий ответ
    if (lowerMessage.includes('как') || lowerMessage.includes('что такое') || lowerMessage.includes('объясни')) {
      return {
        content: `Привет! Я Gemini Pro от Google. Отвечаю на ваш вопрос "${message}". \n\nКак передовая мультимодальная AI модель, я могу помочь с объяснениями сложных концепций, анализом данных и решением различных задач. Моя архитектура позволяет понимать контекст и нюансы вопросов.\n\nЕсли у вас есть дополнительные вопросы по этой теме, буду рад помочь!`,
        model: 'Gemini Pro (Demo)'
      };
    }
    
    if (lowerMessage.includes('программирование') || lowerMessage.includes('код') || lowerMessage.includes('разработка')) {
      return {
        content: `Отлично! Вы спросили про "${message}". Как Gemini Pro, я специализируюсь на помощи с программированием.\n\n🔧 Я могу помочь с:\n• Написанием и отладкой кода\n• Объяснением алгоритмов\n• Архитектурными решениями\n• Code review\n\nМоя мультимодальная природа позволяет анализировать код на разных языках программирования и предлагать оптимизации.`,
        model: 'Gemini Pro (Demo)'
      };
    }
    
    if (lowerMessage.includes('привет') || lowerMessage.includes('hello') || lowerMessage.includes('здравствуй')) {
      return {
        content: `Привет! 👋 Я Gemini Pro от Google - передовая AI модель следующего поколения.\n\n✨ Мои возможности:\n• Понимание контекста и нюансов\n• Мультимодальная обработка данных\n• Генерация креативного контента\n• Помощь в обучении и исследованиях\n\nЧем могу помочь? Задавайте любые вопросы!`,
        model: 'Gemini Pro (Demo)'
      };
    }
    
    // Общий ответ для других вопросов
    return {
      content: `Спасибо за вопрос "${message}"! \n\nКак Gemini Pro, я использую передовые технологии машинного обучения для понимания и генерации ответов. Моя модель обучена на огромном количестве данных и может помочь с широким спектром задач.\n\n🚀 Основные преимущества:\n• Высокая точность ответов\n• Понимание контекста\n• Мультиязычная поддержка\n• Быстрая обработка запросов\n\nЕсли нужны дополнительные детали или у вас есть другие вопросы - обращайтесь!`,
      model: 'Gemini Pro (Demo)'
    };
  }

  private async callClaude(message: string): Promise<AIResponse> {
    // Для демонстрации используем симуляцию Claude API
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      return {
        content: `Ответ от Claude 3: Благодарю за ваш вопрос "${message}". Как Claude 3 от Anthropic, я стремлюсь предоставлять безопасные, полезные и честные ответы. Моя архитектура оптимизирована для понимания нюансов и контекста. Что ещё вас интересует?`,
        model: 'Claude 3'
      };
    } catch (error) {
      return {
        content: 'Извините, Claude 3 временно недоступен. Попробуйте другую модель.',
        model: 'Claude 3'
      };
    }
  }

  private async callGrok(message: string): Promise<AIResponse> {
    // Для демонстрации используем симуляцию Grok API
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      return {
        content: `Ответ от Grok 2: Привет! Ты спросил "${message}". Как Grok 2, я отличаюсь своим уникальным подходом к общению - я могу быть более неформальным и креативным в ответах. Я создан для того, чтобы понимать юмор и контекст. Есть ещё вопросы?`,
        model: 'Grok 2'
      };
    } catch (error) {
      return {
        content: 'Извините, Grok 2 временно недоступен. Попробуйте другую модель.',
        model: 'Grok 2'
      };
    }
  }

  // Демо ответы для разных моделей
  private generateDemoResponse(message: string, modelName: string, modelType: string): AIResponse {
    const demoResponses = {
      gemini: [
        `Привет! Я Gemini Pro от Google. Ваш вопрос "${message}" очень интересный. Как мультимодальная модель, я могу обрабатывать текст, изображения и код. Что ещё хотите узнать?`,
        `Отличный вопрос! Как Gemini Pro, я использую передовые алгоритмы машинного обучения для понимания контекста. По поводу "${message}" могу сказать следующее...`,
        `Благодарю за вопрос "${message}". Gemini Pro создан для помощи в самых разных задачах - от программирования до творчества. Чем ещё могу помочь?`
      ],
      gpt: [
        `Как GPT-4.1, я рад помочь с вашим вопросом "${message}". Моя архитектура позволяет глубоко понимать контекст и генерировать качественные ответы.`,
        `Интересный запрос! GPT-4.1 обучен на огромном количестве данных, что позволяет мне отвечать на разнообразные вопросы. Касательно "${message}"...`,
        `Спасибо за вопрос "${message}". Как последняя версия GPT, я стремлюсь предоставить максимально полезную и точную информацию.`
      ],
      claude: [
        `Здравствуйте! Claude 3 здесь. Ваш вопрос "${message}" требует вдумчивого подхода. Я создан Anthropic с акcentом на безопасность и полезность.`,
        `Благодарю за обращение! Как Claude 3, я фокусируюсь на предоставлении этичных и взвешенных ответов. По поводу "${message}"...`,
        `Отличный вопрос! Claude 3 разработан для понимания нюансов и контекста. Что касается "${message}", позвольте объяснить...`
      ]
    };

    const responses = demoResponses[modelType as keyof typeof demoResponses] || demoResponses.gemini;
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    return {
      content: randomResponse,
      model: modelName
    };
  }

  // Заглушки для дополнительных методов
  private async callCohere(message: string): Promise<AIResponse> {
    await new Promise(resolve => setTimeout(resolve, 900));
    return {
      content: `Ответ от Cohere: Обрабатываю ваш запрос "${message}". Cohere специализируется на понимании естественного языка и генерации текста.`,
      model: 'Cohere'
    };
  }

  private async callHuggingFace(message: string): Promise<AIResponse> {
    await new Promise(resolve => setTimeout(resolve, 1100));
    return {
      content: `Ответ от HuggingFace: Ваш вопрос "${message}" обрабатывается через открытые модели. HuggingFace предоставляет доступ к множеству AI моделей.`,
      model: 'HuggingFace'
    };
  }

  private async callMistral(message: string): Promise<AIResponse> {
    await new Promise(resolve => setTimeout(resolve, 850));
    return {
      content: `Ответ от Mistral 7B: Привет! Обрабатываю "${message}". Mistral - это эффективная открытая языковая модель с отличным качеством.`,
      model: 'Mistral 7B'
    };
  }

  private async callLlama(message: string): Promise<AIResponse> {
    await new Promise(resolve => setTimeout(resolve, 950));
    return {
      content: `Ответ от Llama 2: Анализирую ваш запрос "${message}". Llama 2 от Meta - это мощная открытая модель для различных NLP задач.`,
      model: 'Llama 2'
    };
  }
}

export const aiService = new AIService();
