import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import DashboardLayout from './components/DashboardLayout';
import PlatformSelection from './components/PlatformSelection';
import AddSite from './components/AddSite';
import SitesList from './components/SitesList';
import IntegrationGuide from './components/IntegrationGuide';
import ToolsGrid from './components/ToolsGrid';
import LinkAnalyzerDashboard from './components/LinkAnalyzerDashboard';
import { generateApiKey } from './utils/apiKeyGenerator';

type AppState = 'landing' | 'register' | 'login' | 'platform-selection' | 'dashboard' | 'tools' | 'add-site' | 'integration' | 'link-analyzer';

interface User {
  name: string;
  email: string;
}

interface Site {
  id: string;
  name: string;
  url: string;
  status: 'active' | 'pending';
  needsConfiguration?: boolean;
}

function App() {
  const [currentState, setCurrentState] = useState<AppState>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [sites, setSites] = useState<Site[]>([]);
  const [selectedSite, setSelectedSite] = useState<Site | null>(null);

  const handleRegister = (userData: { name: string; email: string; password: string }) => {
    // Generate unique API key for the user
    const apiKey = generateApiKey();
    setUser({ name: userData.name, email: userData.email });
    setCurrentState('platform-selection');
  };

  const handleLogin = (credentials: { email: string; password: string }) => {
    // In a real app, you'd validate credentials
    setUser({ name: 'John Doe', email: credentials.email });
    setCurrentState('dashboard');
  };

  const handlePlatformSelect = (platform: string) => {
    setCurrentState('add-site');
  };

  const handleSiteAdd = (siteData: { url: string; language: string; platform: string }) => {
    const newSite: Site = {
      id: Date.now().toString(),
      name: siteData.url.replace(/https?:\/\//, '').replace(/\/$/, ''),
      url: siteData.url,
      status: 'pending',
      needsConfiguration: true
    };
    setSites([...sites, newSite]);
    setCurrentState('dashboard');
  };

  const handleConfigureSite = (siteId: string) => {
    const site = sites.find(s => s.id === siteId);
    if (site) {
      setSelectedSite(site);
      setCurrentState('integration');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setSites([]);
    setSelectedSite(null);
    setCurrentState('landing');
  };

  const handleTryFree = () => {
    setCurrentState('register');
  };

  if (currentState === 'register') {
    return (
      <Register 
        onRegister={handleRegister}
        onSwitchToLogin={() => setCurrentState('login')}
      />
    );
  }

  if (currentState === 'login') {
    return (
      <Login 
        onLogin={handleLogin}
        onSwitchToRegister={() => setCurrentState('register')}
      />
    );
  }

  if (currentState === 'platform-selection') {
    return <PlatformSelection onPlatformSelect={handlePlatformSelect} />;
  }

  if (currentState === 'dashboard' || currentState === 'tools' || currentState === 'add-site' || currentState === 'integration') {
    if (!user) return null;

    return (
      <DashboardLayout 
        user={user} 
        onLogout={handleLogout}
        onNavigate={(page) => {
          if (page === 'dashboard') setCurrentState('dashboard');
          else if (page === 'tools') setCurrentState('tools');
          else if (page === 'add-site') setCurrentState('add-site');
          else if (page === 'link-analyzer') setCurrentState('link-analyzer');
        }}
      >
        {currentState === 'dashboard' && (
          <SitesList 
            sites={sites}
            onAddSite={() => setCurrentState('add-site')}
            onConfigureSite={handleConfigureSite}
          />
        )}
        {currentState === 'tools' && <ToolsGrid />}
        {currentState === 'tools' && <ToolsGrid onNavigate={(page) => setCurrentState(page as AppState)} />}
        {currentState === 'add-site' && (
          <AddSite onSiteAdd={handleSiteAdd} />
        )}
        {currentState === 'link-analyzer' && <LinkAnalyzerDashboard />}
        {currentState === 'integration' && selectedSite && (
          <IntegrationGuide 
            siteUrl={selectedSite.url}
            apiKey={generateApiKey()}
          />
        )}
      </DashboardLayout>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onTryFree={handleTryFree} />
      <Hero onTryFree={handleTryFree} />
      <Features />
      <Dashboard />
      <FAQ />
      <Guarantee />
      <Footer />
    </div>
  );
}

export default App;