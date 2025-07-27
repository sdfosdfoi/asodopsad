import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import AIModels from './components/AIModels';
import Chat from './components/Chat';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import CodeBackground from './components/CodeBackground';
import SEO from './components/SEO';
import Analytics, { trackEvent } from './components/Analytics';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'chat'>('home');
  const [selectedModel, setSelectedModel] = useState('gpt-4.1');

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
    // Отслеживание выбора модели
    trackEvent('model_selected', {
      model_name: model,
      page: 'home'
    });
  };

  const handleViewChange = (view: 'home' | 'chat') => {
    setCurrentView(view);
    // Отслеживание смены вида
    trackEvent('view_changed', {
      from_view: currentView,
      to_view: view
    });
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-black text-white relative">
        <SEO />
        <Analytics />
        <CodeBackground />
        
        <div className="relative z-10">
          <Header 
            currentView={currentView} 
            setCurrentView={handleViewChange}
          />
          
          {currentView === 'home' ? (
            <>
              <Hero setCurrentView={handleViewChange} />
              <AIModels 
                selectedModel={selectedModel}
                setSelectedModel={handleModelSelect}
                setCurrentView={handleViewChange}
              />
              <Features />
              <Gallery />
              <About />
              <Testimonials />
              <Pricing />
            </>
          ) : (
            <Chat 
              selectedModel={selectedModel}
              setSelectedModel={handleModelSelect}
              setCurrentView={handleViewChange}
            />
          )}
          
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;