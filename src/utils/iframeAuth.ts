export interface AuthService {
  name: string;
  url: string;
  loginPath: string;
  redirectParam: string;
}

export const authServices: AuthService[] = [
  {
    name: 'bolt.new',
    url: 'https://bolt.new',
    loginPath: '/auth/login',
    redirectParam: 'redirect_uri'
  },
  {
    name: 'agentplace.io',
    url: 'https://agentplace.io',
    loginPath: '/auth/signin',
    redirectParam: 'redirect'
  },
  {
    name: 'teleporthq.io',
    url: 'https://teleporthq.io',
    loginPath: '/auth/login',
    redirectParam: 'returnTo'
  }
];

// Функция для генерации URL с редиректом обратно в iframe
export const generateAuthUrl = (service: AuthService): string => {
  const currentOrigin = window.location.origin;
  const redirectUrl = `${currentOrigin}/auth-callback`;
  
  return `${service.url}${service.loginPath}?${service.redirectParam}=${encodeURIComponent(redirectUrl)}`;
};

// Функция для обработки сообщений от iframe
export const setupIframeAuthListener = () => {
  window.addEventListener('message', (event) => {
    // Проверяем, что сообщение пришло от доверенных источников
    const trustedOrigins = [
      'https://bolt.new',
      'https://agentplace.io', 
      'https://teleporthq.io'
    ];
    
    if (!trustedOrigins.includes(event.origin)) {
      return;
    }
    
    // Обрабатываем сообщения об успешной аутентификации
    if (event.data && event.data.type === 'AUTH_SUCCESS') {
      console.log('Authentication successful:', event.data);
      
      // Сохраняем токен аутентификации в localStorage
      if (event.data.token) {
        localStorage.setItem(`auth_token_${event.origin}`, event.data.token);
      }
      
      // Уведомляем родительское окно об успешной аутентификации
      window.dispatchEvent(new CustomEvent('iframe-auth-success', {
        detail: {
          origin: event.origin,
          userData: event.data.user
        }
      }));
    }
    
    // Обрабатываем ошибки аутентификации
    if (event.data && event.data.type === 'AUTH_ERROR') {
      console.error('Authentication error:', event.data);
      
      window.dispatchEvent(new CustomEvent('iframe-auth-error', {
        detail: {
          origin: event.origin,
          error: event.data.error
        }
      }));
    }
  });
};

// Функция для отправки сообщения в iframe о необходимости аутентификации
export const triggerIframeAuth = (iframeRef: HTMLIFrameElement, service: string) => {
  if (iframeRef && iframeRef.contentWindow) {
    iframeRef.contentWindow.postMessage({
      type: 'REQUEST_AUTH',
      service: service,
      returnUrl: window.location.href
    }, '*');
  }
};

// Функция проверки статуса аутентификации
export const checkAuthStatus = (service: string): boolean => {
  const token = localStorage.getItem(`auth_token_${service}`);
  return !!token;
};

// Функция для очистки токенов аутентификации
export const clearAuthTokens = () => {
  authServices.forEach(service => {
    localStorage.removeItem(`auth_token_${service.url}`);
  });
};

// Функция для получения токена аутентификации
export const getAuthToken = (service: string): string | null => {
  return localStorage.getItem(`auth_token_${service}`);
};

