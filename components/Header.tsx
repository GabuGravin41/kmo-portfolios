import React, { useState } from 'react';
import { Section } from '../types';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  onLoginClick: () => void;
}

const NavLink: React.FC<{
  sectionName: Section;
  activeSection: Section;
  onClick: (section: Section) => void;
  children: React.ReactNode;
}> = ({ sectionName, activeSection, onClick, children }) => {
  const isActive = activeSection === sectionName;
  return (
    <button
      onClick={() => onClick(sectionName)}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'bg-green-600 text-white'
          : 'text-slate-700 hover:bg-green-100 hover:text-green-800'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navItems: Section[] = ['Home', 'Students', 'Trainers', 'Resources', 'Gallery', 'Events', 'Sponsors'];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" onClick={() => setActiveSection('Home')} className="text-2xl font-bold text-green-700">
              KMO
            </a>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink key={item} sectionName={item} activeSection={activeSection} onClick={setActiveSection}>
                  {item}
                </NavLink>
              ))}
            </div>
             <div className="ml-6 flex items-center">
                {user ? (
                    <>
                        <span className="text-sm text-slate-600 mr-4">{user.email}</span>
                        <button
                            onClick={logout}
                            className="px-4 py-2 rounded-md text-sm font-medium text-red-700 bg-red-100 hover:bg-red-200 transition-colors duration-200"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <button
                        onClick={onLoginClick}
                        className="px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                    >
                        Login
                    </button>
                )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-green-100 inline-flex items-center justify-center p-2 rounded-md text-green-700 hover:text-green-800 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
               <button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item
                    ? 'bg-green-600 text-white'
                    : 'text-slate-700 hover:bg-green-100 hover:text-green-800'
                }`}
              >
                {item}
              </button>
            ))}
             <div className="border-t border-slate-200 mt-4 pt-4 px-2">
                {user ? (
                    <>
                        <p className="text-sm text-slate-600 mb-2">{user.email}</p>
                        <button
                            onClick={() => {
                                logout();
                                setIsMenuOpen(false);
                            }}
                            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-700 bg-red-100 hover:bg-red-200"
                        >
                            Logout
                        </button>
                    </>
                 ) : (
                    <button
                        onClick={() => {
                            onLoginClick();
                            setIsMenuOpen(false);
                        }}
                         className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700"
                    >
                        Login
                    </button>
                 )}
             </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;