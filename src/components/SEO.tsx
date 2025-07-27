import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "EFIR - Бесплатные нейросети GPT-4.1, Gemini, Claude | Искусственный интеллект",
  description = "EFIR - доступ к лучшим бесплатным нейросетям: GPT-4.1, Gemini, Claude и другие. Общайтесь с ИИ, решайте задачи, генерируйте тексты. Без ограничений и патентов.",
  keywords = "нейросеть, ИИ, искусственный интеллект, GPT-4.1, Gemini, Claude, бесплатно, чат с ИИ, генерация текста, нейронные сети, машинное обучение",
  canonicalUrl = "https://efir-ai.com"
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
    </Helmet>
  );
};

export default SEO;

