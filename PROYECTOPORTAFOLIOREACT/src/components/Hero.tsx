import React from 'react';
import { Github, Mail, ChevronDown, MapPin, User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
    scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
    return (
<section id="hero" className="min-h-screen flex items-center justify-center bg-black">
            <div className="text-center max-w-4xl mx-auto px-6">
            <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">{portfolioData.name}</h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-4">{portfolioData.title}</h2>
            <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mb-6">
                <MapPin className="w-4 h-4" />
                <span>{portfolioData.location}</span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                {portfolioData.bio}
            </p>
            </div>

            <div className="flex justify-center gap-4 mb-12">
            <a href={portfolioData.github} className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
                <Github className="w-5 h-5" />
                GitHub
            </a>
            <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <Mail className="w-5 h-5" />
                Contact
            </a>
            </div>

            <button onClick={() => scrollToSection('about')} className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
            </button>
        </div>
        </section>
    );
};

export default Hero;