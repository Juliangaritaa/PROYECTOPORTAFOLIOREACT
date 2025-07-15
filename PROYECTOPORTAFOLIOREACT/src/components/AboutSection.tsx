import React from 'react';
import { portfolioData } from '../data/portfolioData';

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

const EducationCard: React.FC<{ education: Education }> = ({ education }) => (
    <div className="border-l-4 border-blue-500 pl-4 mb-4">
        <h5 className="font-medium text-gray-800 dark:text-white">{education.degree}</h5>
        <p className="text-gray-600 dark:text-gray-300">{education.institution} • {education.year}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{education.description}</p>
    </div>
);

const CertificationCard: React.FC<{ certification: Certification }> = ({ certification }) => (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-3">
        <h4 className="font-medium text-gray-800 dark:text-white">{certification.name}</h4>
        <p className="text-gray-600 dark:text-gray-300">{certification.issuer} • {certification.year}</p>
    </div>
);

const AboutSection: React.FC = () => (
    <section id="about" className="py-20 dark:to-black">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">My Story</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        I'm a passionate developer just starting out in the workforce. Although I'm new to the field, I've dedicated significant time to learning and practicing the best technologies and practices of modern development. 
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        My focus is on building web and mobile applications, optimizing data solutions with API implementation, and with my knowledge of agile methodologies, I'm effective at solving complex problems and turning ideas into functional code.
                    </p>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Education</h4>
                        {portfolioData.education.map((edu, index) => (
                            <EducationCard key={index} education={edu} />
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Certified In</h3>
                    <div className="space-y-3">
                        {portfolioData.certifications.map((cert, index) => (
                            <CertificationCard key={index} certification={cert} />
                        ))}
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">What Motivates Me</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>• Constantly learning new technologies</li>
                            <li>• Creating solutions that positively impact users</li>
                            <li>• Collaborating on challenging projects</li>
                            <li>• Contributing to the growth of development teams</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;