import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
    fadeIn, 
    progressBar, 
    staggerContainer, 
    staggerItem,
    useScrollAnimation 
} from '../animations/animations';

const SkillBar: React.FC<{ skill: string; level: number; index: number }> = ({ skill, level, index }) => {
    return (
        <motion.div 
            className="mb-4"
            variants={staggerItem}
            custom={index}
        >
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                <motion.span 
                    className="text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                >
                    {level}%
                </motion.span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    variants={progressBar}
                    custom={level}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                />
            </div>
        </motion.div>
    );
};

const SkillsSection: React.FC = () => {
    const scrollAnimation = useScrollAnimation();
    
    return (
        <section id="skills" className="py-20 dark:to-black">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.h2 
                    className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
                    {...scrollAnimation}
                    variants={fadeIn}
                >
                    Technical Skills
                </motion.h2>
                
                <motion.div 
                    className="grid md:grid-cols-2 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {portfolioData.skills.map((skill, index) => (
                        <SkillBar 
                            key={index} 
                            skill={skill.name} 
                            level={skill.level} 
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;