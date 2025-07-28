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

  // Прокрутка к последнему сообщению
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-900/20" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/10 via-transparent to-blue-500/10" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />

        {/* Stars */}
        {[...Array(80)].map((_, i) => (
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

        {/* Shooting stars */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `shooting-star ${4 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 relative z-50 flex flex-col flex-1 py-6">
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 mb-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl border border-purple-600/40 shadow-lg">
                  <Bot className="h-7 w-7 text-purple-400" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  {modelNames[selectedModel]}
                </h2>
                <p className="text-sm text-gray-400 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Премиум ИИ-Ассистент • Онлайн</span>
                </p>
              </div>

              <div className="ml-6 relative">
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="bg-gradient-to-r from-gray-700/80 to-gray-800/80 border border-gray-600/50 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 cursor-pointer backdrop-blur-sm shadow-lg hover:shadow-xl"
                >
                  <option value="gpt-4.1">🧠 GPT-4.1</option>
                  <option value="gemini-pro">💎 Gemini Pro</option>
                  <option value="claude-3">🎭 Claude 3</option>
                  <option value="grok-2">🚀 Grok 2</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={clearChat}
                className="p-3 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 rounded-xl transition-all duration-300 border border-transparent hover:border-purple-600/30 shadow-lg hover:shadow-xl"
                title="Очистить чат"
              >
                <RotateCcw className="h-5 w-5" />
              </button>
              <button className="p-3 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-cyan-600/20 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-600/30 shadow-lg hover:shadow-xl">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Chat messages container */}
        <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl flex-1 overflow-y-auto p-6 space-y-6 shadow-2xl custom-scrollbar">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-4 ${
                message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg ${
                message.type === 'user' 
                  ? 'bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-500/40' 
                  : 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/40'
              }`}>
                {message.type === 'user' ? (
                  <User className="h-5 w-5 text-blue-400" />
                ) : (
                  <Bot className="h-5 w-5 text-purple-400" />
                )}
              </div>
              <div className={`max-w-xl px-6 py-4 rounded-2xl shadow-xl backdrop-blur-sm ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-100 border border-blue-500/30 ml-auto'
                  : 'bg-gradient-to-r from-gray-700/60 to-gray-800/60 text-gray-100 border border-gray-600/30'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                <p className="text-xs text-gray-400 mt-2 flex items-center justify-between">
                  <span>
                    {message.timestamp.toLocaleTimeString('ru-RU', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                  {message.type === 'ai' && (
                    <span className="text-xs px-2 py-1 bg-purple-500/20 rounded-full text-purple-300">
                      {modelNames[selectedModel]}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/40 rounded-2xl shadow-lg">
                <Bot className="h-5 w-5 text-purple-400" />
              </div>
              <div className="bg-gradient-to-r from-gray-700/60 to-gray-800/60 border border-gray-600/30 px-6 py-4 rounded-2xl shadow-xl backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <Loader className="h-5 w-5 text-purple-400 animate-spin" />
                  <span className="text-sm text-gray-300">Думаю...</span>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
                    <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-100" />
                    <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-200" />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Enhanced Input field */}
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 mt-4 shadow-2xl">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Напишите ваш вопрос..."
                className="w-full bg-gradient-to-r from-gray-700/60 to-gray-800/60 border border-gray-600/50 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm shadow-inner"
                disabled={isLoading}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs">
                Enter
              </div>
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl"
            >
              <Send className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Enhanced Quick questions */}
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              'Расскажи о себе',
              'Помоги с кодом',
              'Объясни сложную тему',
              'Создай план проекта',
              'Переведи текст',
              'Придумай идею'
            ].map((quickQuestion) => (
              <button
                key={quickQuestion}
                onClick={() => setInput(quickQuestion)}
                className="px-4 py-2 text-xs bg-gradient-to-r from-gray-700/60 to-gray-800/60 text-gray-300 rounded-full hover:from-gray-600/60 hover:to-gray-700/60 hover:text-white transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                {quickQuestion}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, rgba(147, 51, 234, 0.6), rgba(59, 130, 246, 0.6));
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, rgba(147, 51, 234, 0.8), rgba(59, 130, 246, 0.8));
        }
        @keyframes shooting-star {
          0% {
            transform: translateX(-100px) translateY(0px) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(800px) translateY(-400px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Chat;

