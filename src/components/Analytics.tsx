import { useEffect } from 'react';

// Google Analytics функции
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    ym: (counterId: number, method: string, params?: any) => void;
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
  
  // Яндекс.Метрика
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(0, 'reachGoal', eventName, parameters); // Замените 0 на ваш ID счетчика
  }
};

export const trackPageView = (page: string) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-P47GBBVBE9', {
      page_path: page,
    });
  }
  
  // Яндекс.Метрика
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(0, 'hit', page); // Замените 0 на ваш ID счетчика
  }
};

// Компонент для отслеживания посещений
const Analytics = () => {
  useEffect(() => {
    // Отслеживание загрузки страницы
    trackPageView(window.location.pathname);
    
    // Отслеживание времени на сайте
    const startTime = Date.now();
    
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_site', {
        time_spent: timeSpent,
        page: window.location.pathname
      });
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  return (
    <>
      {/* Noscript тег для Яндекс.Метрики */}
      <noscript>
        <div>
          <img 
            src="https://mc.yandex.ru/watch/12345678" 
            style={{position: 'absolute', left: '-9999px'}} 
            alt="" 
          />
        </div>
      </noscript>
    </>
  );
};

export default Analytics;

