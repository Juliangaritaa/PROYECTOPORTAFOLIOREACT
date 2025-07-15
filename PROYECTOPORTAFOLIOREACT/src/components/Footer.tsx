import React from 'react';
import { Github, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => (
  <footer className="dark:to-black py-8">
    <div className="container mx-auto px-6 text-center">
      <p className="mb-4">© 2025 {portfolioData.name}. Diseñado y desarrollado con React y Tailwind CSS.</p>
      <div className="flex justify-center gap-4">
        <a href={portfolioData.github} className="hover:text-blue-400 transition-colors" aria-label="GitHub">
          <Github className="w-5 h-5" />
        </a>
        <a href={`mailto:${portfolioData.email}`} className="hover:text-blue-400 transition-colors" aria-label="Email">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;