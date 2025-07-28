import React, { useState, useRef, useEffect } from 'react';
import { aiService } from '../services/aiService';
import { Send, Sparkles, Code, Eye, Download, Share, ExternalLink, Zap } from 'lucide-react';

interface GeneratedApp {
  html: string;
  css: string;
  js: string;
  description: string;
}

const BoltBuilder: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-4.1');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedApp, setGeneratedApp] = useState<GeneratedApp | null>(null);
  const [codeViewMode, setCodeViewMode] = useState<'preview' | 'code'>('preview');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Примеры промптов для вдохновления
  const examplePrompts = [
    "Создай красивый landing page для стартапа с анимациями",
    "Сделай калькулятор с современным дизайном",
    "Создай игру крестики-нолики с AI",
    "Построй интерактивную галерею изображений",
    "Сделай простой чат-интерфейс",
    "Создай дашборд с графиками и метриками"
  ];

  // Генерация приложения с помощью AI
  const generateApp = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    try {
      const aiPrompt = `Создай полное веб-приложение по запросу: "${prompt}"

Требования:
- Создай полный HTML документ с DOCTYPE
- Добавь красивые CSS стили с современным дизайном
- Включи интерактивный JavaScript если нужно
- Используй градиенты, анимации, современную типографику
- Сделай адаптивный дизайн
- Код должен быть готов к использованию

Формат ответа:
<!-- HTML -->
[весь HTML код здесь]

/* CSS */
[весь CSS код здесь]

// JavaScript
[весь JavaScript код здесь]

--- ОПИСАНИЕ ---
[краткое описание созданного приложения]`;
      
      const response = await aiService.sendMessage(aiPrompt, selectedModel);
      
      // Парсинг ответа AI
      const content = response.content;
      
      // Извлекаем HTML
      const htmlMatch = content.match(/<!-- HTML -->([\s\S]*?)(?:\/\* CSS \*\/|$)/i);
      const html = htmlMatch ? htmlMatch[1].trim() : '';
      
      // Извлекаем CSS
      const cssMatch = content.match(/\/\* CSS \*\/([\s\S]*?)(?:\/\/ JavaScript|$)/i);
      const css = cssMatch ? cssMatch[1].trim() : '';
      
      // Извлекаем JavaScript
      const jsMatch = content.match(/\/\/ JavaScript([\s\S]*?)(?:--- ОПИСАНИЕ ---|$)/i);
      const js = jsMatch ? jsMatch[1].trim() : '';
      
      // Извлекаем описание
      const descMatch = content.match(/--- ОПИСАНИЕ ---([\s\S]*?)$/i);
      const description = descMatch ? descMatch[1].trim() : 'Создано с помощью AI';
      
      // Если не удалось распарсить, используем весь контент как HTML
      const finalHtml = html || content;
      
      setGeneratedApp({
        html: finalHtml,
        css: css,
        js: js,
        description: description
      });
      
      setPrompt('');
    } catch (error) {
      console.error('Ошибка генерации приложения:', error);
      alert('Ошибка при генерации приложения. Попробуйте еще раз.');
    }
    
    setIsGenerating(false);
  };

  // Обновление превью
  useEffect(() => {
    if (generatedApp && iframeRef.current) {
      const { html, css, js } = generatedApp;
      
      // Создаем полный HTML документ
      const fullHtml = html.includes('<!DOCTYPE') ? 
        html.replace('</head>', `<style>${css}</style></head>`).replace('</body>', `<script>${js}</script></body>`) :
        `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated App</title>
  <style>${css}</style>
</head>
<body>
  ${html}
  <script>${js}</script>
</body>
</html>`;
      
      const blob = new Blob([fullHtml], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      iframeRef.current.src = url;
    }
  }, [generatedApp]);

  // Скачивание приложения
  const downloadApp = () => {
    if (!generatedApp) return;
    
    const { html, css, js } = generatedApp;
    const fullHtml = html.includes('<!DOCTYPE') ? 
      html.replace('</head>', `<style>${css}</style></head>`).replace('</body>', `<script>${js}</script></body>`) :
      `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated App</title>
  <style>${css}</style>
</head>
<body>
  ${html}
  <script>${js}</script>
</body>
</html>`;
    
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-app.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Главный интерфейс */}
      {!generatedApp ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
          <div className="max-w-4xl w-full">
            {/* Заголовок */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ⚡ Что хотите создать?
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Опишите свою идею, и AI создаст для вас полное веб-приложение за секунды
              </p>
            </div>

            {/* Поле ввода */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-sm"
                >
                  <option value="gpt-4.1">GPT-4.1</option>
                  <option value="gemini-pro">Gemini Pro</option>
                  <option value="claude-3">Claude 3</option>
                  <option value="grok-2">Grok 2</option>
                </select>
                <Sparkles className="h-5 w-5 text-purple-400" />
              </div>
              
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && e.shiftKey === false && (e.preventDefault(), generateApp())}
                  placeholder="Например: Создай красивый landing page для фитнес-приложения с анимациями, формой подписки и отзывами клиентов..."
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl p-4 text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
                  disabled={isGenerating}
                />
                
                <button
                  onClick={generateApp}
                  disabled={isGenerating || !prompt.trim()}
                  className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 p-3 rounded-lg transition-colors"
                >
                  {isGenerating ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Примеры промптов */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {examplePrompts.map((example, idx) => (
                <button
                  key={idx}
                  onClick={() => setPrompt(example)}
                  className="bg-gray-800/30 hover:bg-gray-700/50 border border-gray-700 rounded-xl p-4 text-left transition-colors group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500/20 p-2 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                      <Sparkles className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {example}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Интерфейс с результатом */
        <div className="h-screen flex flex-col">
          {/* Панель управления */}
          <div className="bg-gray-800 border-b border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h2 className="text-lg font-semibold text-green-400">✅ Приложение создано!</h2>
                <span className="text-sm text-gray-400">{generatedApp.description}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex bg-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('preview')}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      viewMode === 'preview' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Eye className="h-4 w-4 inline mr-1" />
                    Превью
                  </button>
                  <button
                    onClick={() => setViewMode('code')}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      viewMode === 'code' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Code className="h-4 w-4 inline mr-1" />
                    Код
                  </button>
                </div>
                
                <button
                  onClick={downloadApp}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Download className="h-4 w-4 inline mr-1" />
                  Скачать
                </button>
                
                <button
                  onClick={() => setGeneratedApp(null)}
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Sparkles className="h-4 w-4 inline mr-1" />
                  Создать еще
                </button>
              </div>
            </div>
          </div>

          {/* Контент */}
          <div className="flex-1">
            {viewMode === 'preview' ? (
              <iframe
                ref={iframeRef}
                className="w-full h-full border-0"
                title="Generated App Preview"
                sandbox="allow-scripts allow-same-origin"
              />
            ) : (
              <div className="h-full overflow-auto p-6 bg-gray-900">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">HTML</h3>
                    <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                      <code className="text-gray-300">{generatedApp.html}</code>
                    </pre>
                  </div>
                  
                  {generatedApp.css && (
                    <div>
                      <h3 className="text-lg font-semibold text-green-400 mb-2">CSS</h3>
                      <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code className="text-gray-300">{generatedApp.css}</code>
                      </pre>
                    </div>
                  )}
                  
                  {generatedApp.js && (
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-400 mb-2">JavaScript</h3>
                      <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code className="text-gray-300">{generatedApp.js}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BoltBuilder;

