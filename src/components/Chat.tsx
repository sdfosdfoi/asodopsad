import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader, RotateCcw, Settings } from 'lucide-react';
import { aiService } from '../services/aiService';

interface ChatProps {
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  setCurrentView: (view: 'home' | 'chat') => void;
}

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const Chat: React.FC<ChatProps> = ({ selectedModel, setSelectedModel }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Привет! Я готов помочь вам с любыми вопросами. Что вас интересует?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Прокрутка вверх при монтировании
  useEffect(() => {
    const container = messagesEndRef.current?.parentElement;
    if (container) container.scrollTop = 0;
  }, []);

  const modelNames: { [key: string]: string } = {
    'gpt-4.1': 'GPT-4.1',
    'gemini-pro': 'Gemini Pro',
    'claude-3': 'Claude 3',
    'grok-2': 'Grok 2'
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const response = await aiService.sendMessage(currentInput, selectedModel);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: response.content,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'Извините, произошла ошибка при обработке вашего запроса. Попробуйте ещё раз.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{
      id: '1',
      type: 'ai',
      content: 'Чат очищен! Как дела? Чем могу помочь?',
      timestamp: new Date()
    }]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced starry background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-cyan-900/10" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/5 via-transparent to-blue-500/5" />

        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/6 to-teal-500/6 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/6 to-purple-500/6 rounded-full blur-3xl animate-pulse delay-500" />

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

      <div className="w-full px-50 relative z-50 flex flex-col flex-1">
        {/* Header */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-t-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30">
                <Bot className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{modelNames[selectedModel]}</h2>
                <p className="text-sm text-gray-400">Премиум ИИ-Ассистент</p>
              </div>

              <div className="ml-4">
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 cursor-pointer"
                >
                  <option value="gpt-4.1">🧠 GPT-4.1</option>
                  <option value="gemini-pro">💎 Gemini Pro</option>
                  <option value="claude-3">🎭 Claude 3</option>
                  <option value="grok-2">🚀 Grok 2</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={clearChat}
                className="p-2 text-gray-400 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all duration-300 border border-transparent hover:border-purple-500/30"
                title="Очистить чат"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white hover:bg-blue-500/20 rounded-lg transition-all duration-300 border border-transparent hover:border-blue-500/30">
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Chat messages - now takes full height */}
        <div className="bg-gray-900/50 backdrop-blur-sm border-x border-gray-700/50 flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 ${
                message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                message.type === 'user' 
                  ? 'bg-blue-500/20' 
                  : 'bg-purple-500/20'
              }`}>
                {message.type === 'user' ? (
                  <User className="h-4 w-4 text-blue-400" />
                ) : (
                  <Bot className="h-4 w-4 text-purple-400" />
                )}
              </div>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-500/20 text-blue-100 ml-auto'
                  : 'bg-gray-700/50 text-gray-100'
              }`}>
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {message.timestamp.toLocaleTimeString('ru-RU', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start space-x-3">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-500/20 rounded-full">
                <Bot className="h-4 w-4 text-purple-400" />
              </div>
              <div className="bg-gray-700/50 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Loader className="h-4 w-4 text-gray-400 animate-spin" />
                  <span className="text-sm text-gray-400">Думаю...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input field */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-b-xl p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Напишите ваш вопрос..."
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                disabled={isLoading}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Send className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Quick questions */}
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              'Расскажи о себе',
              'Помоги с кодом',
              'Объясни сложную тему',
              'Создай план проекта'
            ].map((quickQuestion) => (
              <button
                key={quickQuestion}
                onClick={() => setInput(quickQuestion)}
                className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full hover:bg-gray-600/50 hover:text-white transition-all duration-300"
              >
                {quickQuestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
