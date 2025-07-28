import React, { useRef, useEffect, useState } from 'react';
import { LogIn, RefreshCw, ExternalLink } from 'lucide-react';

interface NonRedirectIframeProps {
  src: string;
  title: string;
  serviceName: string;
  className?: string;
  style?: React.CSSProperties;
}

const NonRedirectIframe: React.FC<NonRedirectIframeProps> = ({
  src,
  title,
  serviceName,
  className = '',
  style
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoginHelper, setShowLoginHelper] = useState(false);

  useEffect(() => {
    // Блокируем переходы в новые вкладки из iframe
    const blockNewTabs = () => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        try {
          // Переопределяем window.open в iframe чтобы блокировать новые вкладки
          const script = iframeRef.current.contentDocument?.createElement('script');
          if (script) {
            script.innerHTML = `
              (function() {
                const originalOpen = window.open;
                window.open = function(url, target, features) {
                  // Если пытаются открыть в новой вкладке - открываем в том же окне
                  if (target === '_blank' || !target) {
                    window.location.href = url;
                    return null;
                  }
                  return originalOpen.call(this, url, target, features);
                };
                
                // Блокируем target="_blank" в ссылках
                document.addEventListener('click', function(e) {
                  if (e.target.tagName === 'A' && e.target.target === '_blank') {
                    e.preventDefault();
                    window.location.href = e.target.href;
                  }
                });
              })();
            `;
            iframeRef.current.contentDocument?.head?.appendChild(script);
          }
        } catch (e) {
          // Игнорируем CORS ошибки
          console.log('Cannot modify iframe content due to CORS policy');
        }
      }
    };

    // Показываем helper через 3 секунды если пользователь еще не вошел
    const helperTimer = setTimeout(() => {
      setShowLoginHelper(true);
    }, 3000);

    return () => {
      clearTimeout(helperTimer);
    };
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
    // Пробуем заблокировать новые вкладки после загрузки
    setTimeout(() => {
      if (iframeRef.current) {
        try {
          // Пробуем добавить обработчики событий для блокировки переходов
          const iframeDoc = iframeRef.current.contentDocument;
          if (iframeDoc) {
            // Блокируем все ссылки с target="_blank"
            const links = iframeDoc.querySelectorAll('a[target="_blank"]');
            links.forEach(link => {
              link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = (link as HTMLAnchorElement).href;
              });
            });
          }
        } catch (e) {
          // Игнорируем CORS ошибки
        }
      }
    }, 1000);
  };

  const handleRefresh = () => {
    if (iframeRef.current) {
      setIsLoading(true);
      setShowLoginHelper(false);
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const handleOpenInNewTab = () => {
    window.open(src, '_blank');
  };

  return (
    <div className="relative w-full h-full">
      {/* Индикатор загрузки */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm z-10 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent mx-auto mb-4"></div>
            <p className="text-white">Загрузка {serviceName}...</p>
          </div>
        </div>
      )}

      {/* Helper для входа */}
      {showLoginHelper && (
        <div className="absolute top-4 right-4 z-20 bg-gray-900/95 border border-pink-500 rounded-lg p-4 max-w-sm">
          <div className="flex items-start space-x-3">
            <LogIn className="h-5 w-5 text-pink-400 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">Нужен вход?</h4>
              <p className="text-xs text-gray-300 mb-3">
                Если нужно войти в {serviceName}, используйте кнопки внутри сервиса. 
                После входа вы останетесь здесь!
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={handleRefresh}
                  className="bg-pink-600 hover:bg-pink-700 text-white text-xs px-2 py-1 rounded transition-colors flex items-center space-x-1"
                >
                  <RefreshCw className="h-3 w-3" />
                  <span>Обновить</span>
                </button>
                <button
                  onClick={handleOpenInNewTab}
                  className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1 rounded transition-colors flex items-center space-x-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>Новая вкладка</span>
                </button>
                <button
                  onClick={() => setShowLoginHelper(false)}
                  className="text-gray-400 hover:text-white text-xs px-2 py-1 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Основной iframe */}
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        className={`w-full h-full border-0 ${className}`}
        style={style}
        onLoad={handleIframeLoad}
        allow="clipboard-read; clipboard-write; camera; microphone; geolocation"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      />
    </div>
  );
};

export default NonRedirectIframe;

