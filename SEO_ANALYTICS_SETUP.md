# 🚀 Настройка SEO и Аналитики для EFIR

## 📊 Google Analytics 4 (GA4)

### Шаг 1: Создание аккаунта GA4
1. Перейдите на [Google Analytics](https://analytics.google.com/)
2. Создайте новый аккаунт или используйте существующий
3. Создайте новое свойство для вашего сайта
4. Получите **Measurement ID** (формат: G-XXXXXXXXXX)

### Шаг 2: Настройка в коде
1. Замените `GA_MEASUREMENT_ID` в файле `index.html` на ваш реальный Measurement ID
2. В файле `src/components/Analytics.tsx` замените `GA_MEASUREMENT_ID` на ваш ID

```html
<!-- В index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ВАШІ_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ВАШІ_ID');
</script>
```

## 📈 Яндекс.Метрика

### Шаг 1: Создание счетчика
1. Перейдите на [Яндекс.Метрика](https://metrica.yandex.ru/)
2. Создайте новый счетчик для вашего сайта
3. Получите **ID счетчика** (числовой ID)

### Шаг 2: Настройка в коде
1. Замените `YANDEX_COUNTER_ID` в файле `index.html` на ваш реальный ID счетчика
2. В файле `src/components/Analytics.tsx` замените `0` на ваш ID счетчика

```html
<!-- В index.html -->
<script type="text/javascript">
   ym(ВАШ_ID, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
```

## 🔍 SEO Оптимизация

### Что уже настроено:
- ✅ Мета-теги для поисковых систем
- ✅ Open Graph для социальных сетей
- ✅ Twitter Cards
- ✅ Структурированные данные (JSON-LD)
- ✅ FAQ схема
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Manifest.json для PWA

### Дополнительные настройки:

1. **Обновите домен**: Замените `https://efir-ai.com` на ваш реальный домен во всех файлах:
   - `index.html`
   - `public/sitemap.xml`
   - `public/robots.txt`
   - `src/components/SEO.tsx`

2. **Добавьте изображения**: Создайте и добавьте:
   - `og-image.jpg` (1200x630px) для Open Graph
   - Favicon разных размеров
   - Иконки для PWA

## 📊 Отслеживаемые события

Система автоматически отслеживает:
- 👆 Выбор нейросети (`model_selected`)
- 🔄 Смена вида страницы (`view_changed`)
- ⏱️ Время на сайте (`time_on_site`)
- 📄 Просмотры страниц (автоматически)

### Добавление собственных событий:

```typescript
import { trackEvent } from './components/Analytics';

// Пример отслеживания клика по кнопке
trackEvent('button_click', {
  button_name: 'start_chat',
  page: 'home'
});
```

## 🎯 Ключевые слова для SEO

Оптимизировано под запросы:
- "нейросеть бесплатно"
- "GPT-4 бесплатно"
- "чат с ИИ"
- "искусственный интеллект"
- "генерация текста"
- "Gemini бесплатно"
- "Claude AI"
- "нейронные сети"

## 🚀 Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build
```

## 📱 Мобильная оптимизация

- ✅ Responsive дизайн
- ✅ Touch-friendly интерфейс
- ✅ PWA поддержка
- ✅ Быстрая загрузка

## 🔧 Настройка поисковых консолей

### Google Search Console:
1. Добавьте сайт в [Google Search Console](https://search.google.com/search-console/)
2. Подтвердите владение сайтом
3. Отправьте sitemap.xml

### Яндекс.Вебмастер:
1. Добавьте сайт в [Яндекс.Вебмастер](https://webmaster.yandex.ru/)
2. Подтвердите владение сайтом
3. Отправьте sitemap.xml

---

**✨ Готово!** Ваш сайт теперь оптимизирован для поисковых систем и оснащен полной аналитикой.

