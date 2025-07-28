import React, { useRef, useEffect, useState } from 'react';
import { LogIn, ExternalLink, RefreshCw } from 'lucide-react';
import { setupIframeAuthListener, triggerIframeAuth, checkAuthStatus, getAuthToken } from '../utils/iframeAuth';

interface AuthenticatedIframeProps {
  src: string;
  title: string;
  serviceName: string;
  className?: string;
  style?: React.CSSProperties;
  onAuthSuccess?: (userData: any) => void;
}

const AuthenticatedIframe: React.FC<AuthenticatedIframeProps> = ({
  src,
  title,
  serviceName,
  className = '',
  style,
  onAuthSuccess
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    // Настраиваем слушатель для сообщений от iframe
    setupIframeAuthListener();

    // Проверяем, авторизован ли пользователь
    const authStatus = checkAuthStatus(src);
    setIsAuthenticated(authStatus);

    // Обработчик успешной аутентификации
    const handleAuthSuccess = (event: CustomEvent) => {
      if (event.detail.origin === new URL(src).origin) {
        setIsAuthenticated(true);
        setAuthError(null);
        if (onAuthSuccess) {
          onAuthSuccess(event.detail.userData);
        }
      }
    };

    // Обработчик ошибок аутентификации
    const handleAuthError = (event: CustomEvent) => {
      if (event.detail.origin === new URL(src).origin) {
        setAuthError(event.detail.error);
      }
    };

    window.addEventListener('iframe-auth-success', handleAuthSuccess as EventListener);
    window.addEventListener('iframe-auth-error', handleAuthError as EventListener);

    return () => {
      window.removeEventListener('iframe-auth-success', handleAuthSuccess as EventListener);
      window.removeEventListener('iframe-auth-error', handleAuthError as EventListener);
    };
  }, [src, onAuthSuccess]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    
    // Проверяем, нужна ли аутентификация
    if (!isAuthenticated && iframeRef.current) {
      // Отправляем сообщение в iframe о необходимости аутентификации
      setTimeout(() => {
        if (iframeRef.current) {
          triggerIframeAuth(iframeRef.current, serviceName);
        }
      }, 1000);
    }
  };

  const handleManualAuth = () => {
    let authUrl = '';
    
    // Определяем правильный URL страницы входа для каждого сервиса
    if (src.includes('bolt.new')) {
      // Для bolt.new используем страницу входа StackBlitz
      authUrl = 'https://stackblitz.com/login';
    } else if (src.includes('agentplace.io')) {
      // Для agentplace.io пробуем разные варианты
      authUrl = 'https://agentplace.io/auth/signin'; // или /login, /signin, /auth
    } else if (src.includes('teleporthq.io')) {
      // Для teleporthq.io - пробуем разные варианты
      authUrl = 'https://teleporthq.io/login'; // или /auth/login, /signin
    } else {
      // Fallback - пытаемся добавить /login к базовому URL
      const baseUrl = new URL(src).origin;
      authUrl = `${baseUrl}/login`;
    }

    // Открываем окно аутентификации
    const authWindow = window.open(
      authUrl,
      'efir_auth',
      'width=500,height=700,scrollbars=yes,resizable=yes,location=yes'
    );

    if (!authWindow) {
      setAuthError('Не удалось открыть окно аутентификации. Пожалуйста, разрешите всплывающие окна.');
      return;
    }

    // Отслеживаем закрытие окна аутентификации
    const checkClosed = setInterval(() => {
      if (authWindow?.closed) {
        clearInterval(checkClosed);
        
        // Помечаем как аутентифицированного (предполагаем, что вход был успешным)
        setIsAuthenticated(true);
        localStorage.setItem(`auth_token_${new URL(src).origin}`, 'authenticated');
        
        // Перезагружаем iframe
        if (iframeRef.current) {
          iframeRef.current.src = iframeRef.current.src;
        }
        
        if (onAuthSuccess) {
          onAuthSuccess({ service: serviceName, timestamp: Date.now() });
        }
      }
    }, 1000);

    // Таймаут на случай если окно не закроется
    setTimeout(() => {
      if (!authWindow.closed) {
        clearInterval(checkClosed);
        setAuthError('Время ожидания аутентификации истекло. Попробуйте снова.');
      }
    }, 300000); // 5 минут
  };

  const handleRefresh = () => {
    if (iframeRef.current) {
      setIsLoading(true);
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Оверлей для неавторизованных пользователей */}
      {!isAuthenticated && !isLoading && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-8">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-md text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogIn className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">
              Требуется вход
            </h3>
            
            <p className="text-gray-400 mb-6">
              Для использования {serviceName} необходимо войти в систему.
              После входа вы вернетесь сюда.
            </p>
            
            {authError && (
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 mb-4 text-red-300 text-sm">
                {authError}
              </div>
            )}
            
            <div className="space-y-3">
              <button
                onClick={handleManualAuth}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <LogIn className="h-4 w-4" />
                <span>Войти в {serviceName}</span>
              </button>
              
              <button
                onClick={handleRefresh}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Обновить</span>
              </button>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-500">
                После входа вы останетесь залогиненным в этом окне
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Индикатор загрузки */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm z-5 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
            <p className="text-white">Загрузка {serviceName}...</p>
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

export default AuthenticatedIframe;

