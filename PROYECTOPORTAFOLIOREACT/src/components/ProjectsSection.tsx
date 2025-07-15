import React from 'react';
import { ChevronLeft, ChevronRight, Github, Star, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useState } from 'react'

interface ProjectImage {
    url: string;
    alt: string;
    caption: string;
}

interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string;
    features: string[];
    images?: ProjectImage[];
}

const ImageGallery: React.FC<{ images: ProjectImage[] }> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const openModal = (index: number) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (!images || images.length === 0) return null;

    return (
        <>
            <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Project screenshots:</h4>
                <div className="relative">
                    <div className="relative h-48 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                        <img
                            src={images[currentIndex].url}
                            alt={images[currentIndex].alt}
                            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={() => openModal(currentIndex)}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                            <p className="text-white text-sm font-medium">{images[currentIndex].caption}</p>
                        </div>
                    </div>
                    
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </>
                    )}
                </div>
                
                {images.length > 1 && (
                    <div className="flex justify-center mt-2 space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Modal para vista ampliada */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                  <div className="relative max-w-[90vw] max-h-[90vh]"> {/* Contenedor con límites */}
                      <button
                          onClick={closeModal}
                          className="absolute -top-10 right-0 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
                      >
                          <X className="w-5 h-5" />
                      </button>
                      
                      <div className="overflow-auto max-h-[80vh]"> {/* Contenedor scrollable */}
                          <img
                              src={images[currentIndex].url}
                              alt={images[currentIndex].alt}
                              className="mx-auto rounded-lg object-contain max-w-full" 
                              style={{ maxHeight: '70vh' }} // Altura máxima controlada
                          />
                      </div>
                      
                      <div className="sticky bottom-0 left-0 right-0 text-white p-3 rounded-b-lg">
                          <p className="font-medium text-center">{images[currentIndex].caption}</p>
                      </div>
                      
                      {images.length > 1 && (
                          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                              <button
                                  onClick={prevImage}
                                  className="pointer-events-auto ml-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                              >
                                  <ChevronLeft className="w-6 h-6" />
                              </button>
                              <button
                                  onClick={nextImage}
                                  className="pointer-events-auto mr-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                              >
                                  <ChevronRight className="w-6 h-6" />
                              </button>
                          </div>
                      )}
                  </div>
              </div>
          )}
        </>
    );
}

const ProjectCard: React.FC<{project: Project}> = ({ project }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300">
        <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            
            <ImageGallery images={project.images || []} />
            
            <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Main features:</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-500 mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="flex gap-3">
                <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                    <Github className="w-4 h-4" />
                    Code
                </a>
            </div>
        </div>
    </div>
);

const ProjectSection: React.FC = () => (
    <section id="projects" className="py-20 dark:to-black">
        <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">My Projects</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                Here's a selection of projects I've worked on. Each one demonstrates
                different aspects of my development skills and my growth as a programmer..
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {portfolioData.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <div className="text-center mt-12">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  These are some of my main projects. I'm constantly working on new challenges and improving my skills.                </p>
                <a
                    href={portfolioData.github}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                    <Github className="w-5 h-5" />
                    See more on GitHub
                </a>
            </div>
        </div>
    </section>
);

export default ProjectSection;