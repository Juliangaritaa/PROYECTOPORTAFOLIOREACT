import React from 'react';
import { Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ContactCard: React.FC =() => (
    <div className="bg-black rounded-lg shadow-lg p-8 max-w-2xl mx-auto min-h-screen flex items-center justify-center">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Why hire me?</h3>
        <ul className="text-left space-y-3 text-gray-600 dark:text-gray-300">
        <li>• <strong>Motivation:</strong> I have a lot of energy and desire to learn</li>
        <li>• <strong>Solid foundations:</strong> Good technical base in modern technologies</li>
        <li>• <strong>Adaptability:</strong> Quick to learn new tools</li>
        <li>• <strong>Commitment:</strong> Dedicated to writing clean and maintainable code</li>
        <li>• <strong>Collaboration:</strong> Excellent for teamwork</li>
        </ul>
  </div>
);

const ContactSection: React.FC = () => (
  <section id="contact" className="py-20 dark:to-black">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">¡Work Together!</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        I'm looking for opportunities to kick-start my career and contribute to exciting projects. Do you have an opportunity that could be perfect for me?
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <a
          href={`mailto:${portfolioData.email}`}
          className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Mail className="w-5 h-5" />
          Send Email
        </a>
      </div>
      <ContactCard />
    </div>
  </section>
);

export default ContactSection;