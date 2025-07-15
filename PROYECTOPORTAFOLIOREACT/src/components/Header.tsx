import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { slideInFromTop, fadeIn, buttonHover } from '../animations/animations';

interface HeaderProps {
    isScrolled: boolean;
    scrollToSection: (sectionId: string) => void;
}

const Header : React.FC<HeaderProps> = ({ isScrolled, scrollToSection}) => {

    return (
    <motion.header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mb-5 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}
      initial="hidden"
      animate="visible"
      variants={slideInFromTop}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-gray-700 dark:text-gray-300"
            variants={fadeIn}
          >
            {portfolioData.name}
          </motion.div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  variants={buttonHover}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {section === 'hero' ? 'Inicio' :
                   section === 'about' ? 'About' :
                   section === 'skills' ? 'Skills' :
                   section === 'projects' ? 'Proyects' :
                   'Contact'}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
    );
};

export default Header;