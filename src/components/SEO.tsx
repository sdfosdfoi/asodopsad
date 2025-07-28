import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "EFIR - Все нейросети и AI-платформы в одном месте | GPT-4.1, Gemini, Claude",
  description = "Все нейросети и AI-платформы в одном месте: нейросети для Figma, генерация дизайна, UX/UI дизайн, создание чат-ботов, генерация сайтов, сайты на нейросетях, боты для Telegram и WhatsApp, дизайн интерфейсов, логотипов и презентаций, генерация текста, озвучка, создание видео и изображений, копирайтинг, перевод, генерация музыки, автоматизация задач, программирование с AI, креативные нейросети, генераторы кода, нейросети для маркетинга, соцсетей, 3D-графика, NFT, обучение и продвинутые AI-инструменты — всё для дизайнеров, разработчиков, маркетологов, предпринимателей и креаторов.",
  keywords = "нейросети, AI, GPT-4, GPT-4.1, Gemini, Claude, ChatGPT, искусственный интеллект, нейросети для Figma, генерация дизайна, UX UI дизайн, создание чат-ботов, генерация сайтов, сайты на нейросетях, боты Telegram, боты WhatsApp, дизайн интерфейсов, логотипы, презентации, генерация текста, озвучка, создание видео, изображения, копирайтинг, перевод, генерация музыки, автоматизация задач, программирование AI, креативные нейросети, генераторы кода, нейросети маркетинг, соцсети, 3D графика, NFT, обучение AI, машинное обучение, deep learning, нейронные сети, компьютерное зрение, обработка естественного языка, NLP, computer vision, stable diffusion, midjourney, dall-e, runway, synthesia, mubert, elevenlabs, voice cloning, text to speech, speech to text, code generation, автокод, github copilot, chatbot, voicebot, AI assistant, виртуальный помощник, автоматизация бизнеса, робот процессы, RPA, no-code, low-code, веб-дизайн, мобильный дизайн, брендинг, иллюстрации, анимация, motion design, видеомонтаж, звукозапись, подкасты, аудиокниги, субтитры, транскрибация, SEO контент, SMM, контент-маркетинг, email-маркетинг, лендинги, интернет-магазины, CRM, аналитика, большие данные, персонализация, рекомендательные системы, предиктивная аналитика, финтех, edtech, healthtech, proptech, agritech, retail tech, hr tech, legal tech, регулярные выражения, API интеграции, microservices, облачные технологии, DevOps, CI CD, тестирование, QA, мобильная разработка, веб-разработка, фронтенд, бэкенд, fullstack, React, Vue, Angular, Node.js, Python, JavaScript, TypeScript, PHP, Java, C#, Go, Rust, Swift, Kotlin, Flutter, React Native, WordPress, Shopify, Webflow, Figma плагины, Sketch, Adobe XD, Photoshop, Illustrator, InDesign, After Effects, Premiere Pro, Blender, Cinema 4D, Unity, Unreal Engine, виртуальная реальность, VR, дополненная реальность, AR, метавселенная, блокчейн, криптовалюты, смарт-контракты, DeFi, GameFi, Play-to-Earn, токеномика, ICO, IDO, аирдропы, стейкинг, майнинг, NFT маркетплейсы, OpenSea, Rarible, Foundation, SuperRare, async art, коллекционные карточки, игровые активы, виртуальная недвижимость, цифровое искусство, генеративное искусство, алгоритмическое искусство, процедурная генерация, фрактальная графика, интерактивные инсталляции, мультимедиа проекты, cross-platform, омниканальность, персонализированный опыт, клиентский путь, конверсионная воронка, A B тестирование, юзабилити тестирование, интерфейс пользователя, пользовательский опыт, accessibility, инклюзивный дизайн, адаптивная верстка, прогрессивные веб-приложения, PWA, одностраничные приложения, SPA, серверный рендеринг, SSR, статическая генерация, SSG, джамстек, headless CMS, безголовая архитектура, микрофронтенды, компонентно-ориентированная разработка, дизайн-системы, UI киты, паттерн библиотеки, атомарный дизайн, методология БЭМ, препроцессоры CSS, постпроцессоры, сборщики модулей, webpack, vite, парcel, rollup, babel, eslint, prettier, git, github, gitlab, bitbucket, agile, scrum, kanban, jira, confluence, slack, discord, notion, miro, figma, invision, principle, protopie, framer, origami studio, flinto, marvel app, adobe animate, lottie анимации, microinteractions, прототипирование, wireframing, мокапы, стайлгайды, brandbook, корпоративная идентичность, нейминг, слоганы, тизеры, рекламные креативы, outdoor реклама, indoor реклама, digital signage, интерактивные киоски, мультитач столы, голографические дисплеи, LED экраны, проекционный мэппинг, иммерсивные технологии, spatial computing, машинное зрение, распознавание лиц, эмоций, жестов, голосовое управление, умный дом, IoT, интернет вещей, индустрия 4.0, цифровизация, цифровая трансформация, инновации, стартапы, венчурные инвестиции, краудфандинг, бизнес-модели, монетизация, фрилансинг, удаленная работа, коворкинги, нетворкинг, менторство, акселераторы, инкубаторы, хакатоны, питчинг, инвестиционные презентации, бизнес-планы, финансовое моделирование, юнит-экономика, метрики продукта, growth hacking, вирусный маркетинг, influence маркетинг, партнерский маркетинг, реферальные программы, программы лояльности, геймификация, поведенческая экономика, психология пользователей, когнитивные искажения, социальные доказательства, FOMO, urgency, scarcity, персонализация, сегментация, таргетинг, ретаргетинг, лукалайк аудитории, custom audiences, воронки продаж, email последовательности, чат-боты продаж, lead generation, lead nurturing, customer journey mapping, омниканальный маркетинг, attribution modeling, маркетинг микс, 4P маркетинга, позиционирование, дифференциация, конкурентный анализ, SWOT анализ, blue ocean strategy, lean startup, design thinking, agile маркетинг, data-driven маркетинг, маркетинговая автоматизация, CRM системы, ERP системы, BI платформы, дашборды, визуализация данных, инфографика, интерактивные отчеты, real-time аналитика, предиктивная аналитика, machine learning модели, deep learning, нейронные сети, обучение с подкреплением, transfer learning, few-shot learning, zero-shot learning, prompt engineering, fine-tuning моделей, MLOps, AI Ethics, ответственный AI, объяснимый AI, федеративное обучение, edge computing, квантовые вычисления, блокчейн AI, децентрализованный AI, Web3, DAO, tokenomics, governance токены",
  canonicalUrl = "https://www.gptchatpro.online"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="EFIR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Дополнительные мета-теги для поисковых систем */}
      <meta name="theme-color" content="#1a1a1a" />
      <meta name="application-name" content="EFIR" />
      <meta name="apple-mobile-web-app-title" content="EFIR" />
      <meta name="msapplication-TileColor" content="#1a1a1a" />
      
      {/* Дополнительные SEO мета-теги */}
      <meta name="author" content="EFIR Team" />
      <meta name="language" content="ru" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      
      {/* JSON-LD структурированные данные - Организация */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EFIR",
          "url": canonicalUrl,
          "logo": `${canonicalUrl}/logo.png`,
          "description": description,
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "jojez10c@gmail.com",
            "contactType": "customer service",
            "availableLanguage": ["Russian", "English"]
          },
          "sameAs": [canonicalUrl]
        })}
      </script>
      
      {/* JSON-LD структурированные данные - Веб-приложение */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "EFIR",
          "description": description,
          "url": canonicalUrl,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "browserRequirements": "Requires JavaScript. Requires HTML5.",
          "softwareVersion": "1.0",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250",
            "bestRating": "5",
            "worstRating": "1"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Бесплатный доступ к нейросетям",
            "availability": "https://schema.org/InStock",
            "validFrom": "2025-01-01"
          },
          "featureList": [
            "Генерация кода с помощью AI (GPT-4, Claude, Gemini)",
            "Создание сайтов и веб-приложений на нейросетях",
            "UX/UI дизайн и прототипирование с помощью AI",
            "Создание чат-ботов для Telegram, WhatsApp и веб-сайтов",
            "Генерация изображений, видео и анимаций",
            "Копирайтинг, переводы и контент-маркетинг",
            "Генерация музыки, озвучка и создание подкастов",
            "3D-графика, анимация и создание NFT",
            "Маркетинговая автоматизация и аналитика",
            "Интеграция с Figma и другими дизайн-инструментами"
          ],
          "author": {
            "@type": "Organization",
            "name": "EFIR",
            "url": canonicalUrl
          },
          "provider": {
            "@type": "Organization",
            "name": "EFIR",
            "url": canonicalUrl
          }
        })}
      </script>
      
      {/* JSON-LD структурированные данные - FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Как создать сайт с помощью нейросети?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "EFIR предоставляет доступ к EFIR-WEB - платформе для создания сайтов с помощью AI. Просто опишите свою идею, и нейросеть создаст полноценный веб-сайт с кодом, дизайном и функционалом."
              }
            },
            {
              "@type": "Question",
              "name": "Какие нейросети доступны на EFIR?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "На EFIR доступны лучшие нейросети: GPT-4.1, Gemini, Claude, а также специализированные инструменты для генерации кода, дизайна, изображений, видео, музыки и многого другого."
              }
            },
            {
              "@type": "Question",
              "name": "Можно ли создать чат-бота для Telegram?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Да! EFIR предоставляет инструменты для создания чат-ботов для Telegram, WhatsApp и других платформ. Используйте EFIR.AI для создания умных агентов."
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;

