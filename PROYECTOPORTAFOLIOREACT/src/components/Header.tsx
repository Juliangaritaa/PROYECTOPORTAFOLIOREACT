import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface HeaderProps {
    isScrolled: boolean;
    scrollToSection: (sectionId: string) => void;
}

const Header : React.FC<HeaderProps> = ({ isScrolled, scrollToSection}) => {

    return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-700 dark:text-gray-300">
            {portfolioData.name}
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {section === 'hero' ? 'Inicio' :
                   section === 'about' ? 'About' :
                   section === 'skills' ? 'Skills' :
                   section === 'projects' ? 'Proyects' :
                   'Contact'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
    );
};

export default Header;