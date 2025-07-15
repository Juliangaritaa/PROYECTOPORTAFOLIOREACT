import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
    slideInVariants, 
    slideInFromRight, 
    staggerContainer, 
    staggerItem, 
    fadeIn,
    useScrollAnimation
} from '../animations/animations';

interface Education {
    degree: string;
    institution: string;
    year: string;
    description?: string; 
}

interface Certification {
    name: string;
    issuer: string;
    year: string;
}

const EducationCard: React.FC<{ education: Education; index: number }> = ({ education, index }) => (
    <motion.div 
        className="border-l-4 border-blue-500 pl-4 mb-4"
        variants={staggerItem}
        custom={index}
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
    >
        <h5 className="font-medium text-gray-800 dark:text-white">{education.degree}</h5>
        <p className="text-gray-600 dark:text-gray-300">{education.institution} • {education.year}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{education.description}</p>
    </motion.div>
);

const CertificationCard: React.FC<{ certification: Certification; index: number }> = ({ certification, index }) => (
    <motion.div 
        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 sm:p-4 mb-3 w-full max-w-full"
        variants={staggerItem}
        custom={index}
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ duration: 0.3 }}
    >
        <h4 className="font-medium text-gray-800 dark:text-white break-words text-sm sm:text-base leading-tight">{certification.name}</h4>
        <p className="text-gray-600 dark:text-gray-300 break-words text-xs sm:text-sm">{certification.issuer} • {certification.year}</p>
    </motion.div>
);

const AboutSection: React.FC = () => {
    const scrollAnimation = useScrollAnimation();
    
    return (
        <section id="about" className="py-20 dark:to-black overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                <motion.h2 
                    className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
                    {...scrollAnimation}
                    variants={fadeIn}
                >
                    About Me
                </motion.h2>
                
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <motion.div
                        {...scrollAnimation}
                        variants={slideInVariants}
                        className="w-full min-w-0"
                    >
                        <motion.h3 
                            className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4"
                            variants={fadeIn}
                        >
                            My Story
                        </motion.h3>
                        
                        <motion.p 
                            className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base"
                            variants={fadeIn}
                        >
                            I'm a passionate developer just starting out in the workforce. Although I'm new to the field, I've dedicated significant time to learning and practicing the best technologies and practices of modern development.
                        </motion.p>

                        <motion.p 
                            className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base"
                            variants={fadeIn}
                        >
                            My focus is on building web and mobile applications, optimizing data solutions with API implementation, and with my knowledge of agile methodologies, I'm effective at solving complex problems and turning ideas into functional code.
                        </motion.p>

                        <motion.div 
                            className="space-y-4 w-full"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.h4 
                                className="text-lg font-semibold text-gray-800 dark:text-white"
                                variants={staggerItem}
                            >
                                Education
                            </motion.h4>
                            <div className="w-full">
                                {portfolioData.education.map((edu, index) => (
                                    <EducationCard key={index} education={edu} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div
                        {...scrollAnimation}
                        variants={slideInFromRight}
                        className="w-full min-w-0"
                    >
                        <motion.h3 
                            className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4"
                            variants={fadeIn}
                        >
                            Certified In
                        </motion.h3>
                        
                        <motion.div 
                            className="space-y-3 w-full mb-8 min-w-0"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {portfolioData.certifications.map((cert, index) => (
                                <CertificationCard key={index} certification={cert} index={index} />
                            ))}
                        </motion.div>
                        
                        <motion.div 
                            className="w-full min-w-0"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.h3 
                                className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4"
                                variants={staggerItem}
                            >
                                What Motivates Me
                            </motion.h3>
                            <motion.ul 
                                className="space-y-2 text-gray-600 dark:text-gray-300 w-full min-w-0"
                                variants={staggerContainer}
                            >
                                {[
                                    "Constantly learning new technologies",
                                    "Creating solutions that positively impact users",
                                    "Collaborating on challenging projects",
                                    "Contributing to the growth of development teams"
                                ].map((item, index) => (
                                    <motion.li 
                                        key={index}
                                        variants={staggerItem}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-sm sm:text-base break-words leading-relaxed pr-2"
                                    >
                                        • {item}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;