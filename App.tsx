
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import StudentProfiles from './components/StudentProfiles';
import Trainers from './components/Trainers';
import Resources from './components/Resources';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('Home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <Home setActiveSection={setActiveSection} />;
      case 'Students':
        return <StudentProfiles />;
      case 'Trainers':
        return <Trainers />;
      case 'Resources':
        return <Resources />;
      case 'Gallery':
        return <Gallery />;
      case 'Events':
        return <Events />;
      case 'Sponsors':
        return <Sponsors />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Header 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          onLoginClick={() => setIsLoginOpen(true)}
        />
        <main className="flex-grow">
          {renderSection()}
        </main>
        <Footer />
        {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
      </div>
    </AuthProvider>
  );
};

export default App;
