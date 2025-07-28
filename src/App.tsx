import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import AIModels from './components/AIModels';
import Chat from './components/Chat';
import Features from './components/Features';
import ProjectTypeSelector from './components/ProjectTypeSelector';
import About from './components/About';
import BoltBuilder from './components/BoltBuilder';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import CodeBackground from './components/CodeBackground';
import SEO from './components/SEO';
import Analytics, { trackEvent } from './components/Analytics';
import AuthenticatedIframe from './components/AuthenticatedIframe';
import NonRedirectIframe from './components/NonRedirectIframe';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'chat' | 'bolt' | 'ai' | 'design'>('home');
  const [selectedModel, setSelectedModel] = useState('gpt-4.1');
  const [viewMode, setViewMode] = useState<'efir' | 'original'>('efir');

  const handleProjectTypeSelect = (type: string) => {
    console.log(`Project type selected: ${type}`);
    // Add logic to navigate to the specific project editor
  };

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
    // Отслеживание выбора модели
    trackEvent('model_selected', {
      model_name: model,
      page: 'home'
    });
  };

  const handleViewChange = (view: 'home' | 'chat' | 'bolt' | 'ai' | 'design') => {
    setCurrentView(view as any);
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
          
          {/* VPN Notification - Side Panel */}
          <div className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-red-600/90 backdrop-blur-sm text-white p-3 rounded-lg z-40 cursor-pointer hover:bg-red-700/90 transition-all duration-300 shadow-lg max-w-xs"
               onClick={() => window.open('https://chromewebstore.google.com/detail/%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-vpn-proxy-vpnl/lneaocagcijjdpkcabeanfpdbmapcjjg?pli=1', '_blank')}
          >
            <div className="text-sm font-semibold mb-1">🔐 VPN</div>
            <div className="text-xs opacity-90">Используйте любой VPN для стабильной работы</div>
            <div className="text-xs text-center mt-1 opacity-75">👆 НАЖАТЬ</div>
          </div>
          
          
          {currentView === 'home' ? (
            <>
              <Hero setCurrentView={handleViewChange} />
              <ProjectTypeSelector 
                onProjectTypeSelect={handleProjectTypeSelect}
                setCurrentView={setCurrentView}
              />
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
          ) : currentView === 'chat' ? (
            <Chat 
              selectedModel={selectedModel}
              setSelectedModel={handleModelSelect}
              setCurrentView={handleViewChange}
            />
          ) : currentView === 'bolt' ? (
            <div className="min-h-screen pt-16">
              <div className="bg-gray-900 border-b border-gray-700 p-3">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                  <div className="flex items-center space-x-3">
                    <h1 className="text-xl font-bold text-blue-400">⚡ EFIR-WEB</h1>
                    <span className="text-xs text-gray-400">AI-powered web development</span>
                    <button
                      onClick={() => window.open('mailto:jojez10c@gmail.com?subject=Покупка%20EFIR-WEB&body=Здравствуйте!%20Хочу%20приобрести%20доступ%20к%20EFIR-WEB.', '_blank')}
                      className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-xs text-white transition-colors"
                    >
                      📧 Для покупки в РФ писать на почту jojez10c@gmail.com
                    </button>
                  </div>
                 
                  <button 
                    onClick={() => setCurrentView('home')}
                    className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded-lg font-medium transition-colors text-sm"
                  >
                    ← Домой
                  </button>
                </div>
              </div>
              
              
              <div className="h-[calc(100vh-80px)] relative">
                {/* Overlay для скрытия названия bolt.new */}
                <div className="absolute top-0 left-0 right-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-3">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">⚡</span>
                      </div>
                      <h1 className="text-xl font-bold text-white">EFIR-WEB</h1>
                      <span className="text-xs bg-green-500 text-black px-2 py-1 rounded-full font-semibold">LIVE</span>
                      <button 
                        onClick={() => setCurrentView('home')}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg font-medium transition-colors text-sm text-white flex items-center space-x-1 ml-4"
                      >
                        <span>🏠</span>
                        <span>Домой</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                
              <iframe 
                src="https://bolt.new?ref=efir"
                className="w-full h-full border-0" 
                title="EFIR-WEB - AI Development Platform"
                allow="clipboard-read; clipboard-write; camera; microphone; geolocation"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                style={{ marginTop: '50px', height: 'calc(100% - 50px)' }}
              />
              </div>
            </div>
          ) : currentView === 'ai' ? (
            <div className="min-h-screen pt-16">
              <div className="bg-gray-900 border-b border-gray-700 p-4">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                  <div className="flex items-center space-x-4">
                    <h1 className="text-2xl font-bold text-purple-400">🤖 EFIR.AI</h1>
                    <span className="text-sm text-gray-400">AI Agent Builder Platform</span>
                  </div>
                 
                  <button 
                    onClick={() => setCurrentView('home')}
                    className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                  >
                    ← Домой
                  </button>
                </div>
              </div>
              
              <div className="h-[calc(100vh-80px)] relative">
                {/* Overlay для скрытия названия agentplace.io */}
                <div className="absolute top-0 left-0 right-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-3">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">🤖</span>
                      </div>
                      <h1 className="text-xl font-bold text-white">EFIR.AI</h1>
                      <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full font-semibold">BETA</span>
                      <button 
                        onClick={() => setCurrentView('home')}
                        className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded-lg font-medium transition-colors text-sm text-white flex items-center space-x-1 ml-4"
                      >
                        <span>🏠</span>
                        <span>Домой</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <AuthenticatedIframe
                  src="https://agentplace.io"
                  title="EFIR.AI - AI Agent Builder Platform"
                  serviceName="EFIR.AI"
                  style={{ marginTop: '50px', height: 'calc(100% - 50px)' }}
                  onAuthSuccess={(userData) => {
                    console.log('EFIR.AI user authenticated:', userData);
                    trackEvent('service_auth_success', {
                      service: 'agentplace.io',
                      user: userData?.email || 'unknown'
                    });
                  }}
                />
              </div>
            </div>
          ) : currentView === 'design' ? (
            <div className="min-h-screen pt-16">
              <div className="bg-gray-900 border-b border-gray-700 p-3">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                  <div className="flex items-center space-x-3">
                    <h1 className="text-xl font-bold text-pink-400">🎨 EFIR-DESIGN</h1>
                    <span className="text-xs text-gray-400">AI-powered visual website builder</span>
                    <button
                      onClick={() => window.open('mailto:jojez10c@gmail.com?subject=Покупка%20EFIR-DESIGN&body=Здравствуйте!%20Хочу%20приобрести%20доступ%20к%20EFIR-DESIGN.', '_blank')}
                      className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-xs text-white transition-colors"
                    >
                      📧 Для покупки в РФ писать на почту jojez10c@gmail.com
                    </button>
                  </div>
                 
                  <button 
                    onClick={() => setCurrentView('home')}
                    className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded-lg font-medium transition-colors text-sm"
                  >
                    ← Домой
                  </button>
                </div>
              </div>
              
              <div className="h-[calc(100vh-80px)] relative">
                {/* Overlay для скрытия названия teleporthq.io */}
                <div className="absolute top-0 left-0 right-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-3">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">🎨</span>
                      </div>
                      <h1 className="text-xl font-bold text-white">EFIR-DESIGN</h1>
                      <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded-full font-semibold">VISUAL</span>
                      <button 
                        onClick={() => setCurrentView('home')}
                        className="bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded-lg font-medium transition-colors text-sm text-white flex items-center space-x-1 ml-4"
                      >
                        <span>🏠</span>
                        <span>Домой</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <iframe 
                  src="https://teleporthq.io"
                  className="w-full h-full border-0" 
                  title="EFIR-DESIGN - Visual Website Builder"
                  allow="clipboard-read; clipboard-write; camera; microphone; geolocation"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                  style={{ marginTop: '50px', height: 'calc(100% - 50px)' }}
                />
              </div>
            </div>
          ) : null}
          
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;