import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, ChevronDown, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { 
    fadeIn, 
    scaleIn, 
    slideInFromBottom, 
    staggerContainer, 
    staggerItem, 
    buttonHover 
} from '../animations/animations';

interface HeroProps {
    scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black">
            <motion.div 
                className="text-center max-w-4xl mx-auto px-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="mb-8" variants={staggerItem}>
                    <motion.div 
                        className="w-36 h-36 sm:w-44 sm:h-44 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center"
                        variants={scaleIn}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                    <img 
                        src="/images/foto-con-traje-pagina.jpg" 
                        alt="Foto de perfil" 
                        className="w-[92%] h-[92%] object-cover rounded-full"
                    />

                    </motion.div>
                    
                    <motion.h1 
                        className="text-5xl font-bold text-gray-800 dark:text-white mb-4"
                        variants={fadeIn}
                    >
                        {portfolioData.name}
                    </motion.h1>
                    
                    <motion.h2 
                        className="text-2xl text-gray-600 dark:text-gray-300 mb-4"
                        variants={fadeIn}
                    >
                        {portfolioData.title}
                    </motion.h2>
                    
                    <motion.div 
                        className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mb-6"
                        variants={fadeIn}
                    >
                        <MapPin className="w-4 h-4" />
                        <span>{portfolioData.location}</span>
                    </motion.div>
                    
                    <motion.p 
                        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
                        variants={slideInFromBottom}
                    >
                        {portfolioData.bio}
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="flex justify-center gap-4 mb-12"
                    variants={staggerItem}
                >
                    <motion.a 
                        href={portfolioData.github} 
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                        variants={buttonHover}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <Github className="w-5 h-5" />
                        GitHub
                    </motion.a>
                    
                    <motion.a 
                        href={`mailto:${portfolioData.email}`} 
                        className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        variants={buttonHover}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <Mail className="w-5 h-5" />
                        Contact
                    </motion.a>
                </motion.div>

                <motion.button 
                    onClick={() => scrollToSection('about')} 
                    className="animate-bounce"
                    variants={staggerItem}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;