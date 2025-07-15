import React from 'react';
import { Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ContactCard: React.FC =() => (
    <div className="bg-black rounded-lg shadow-lg p-8 max-w-2xl mx-auto min-h-screen flex items-center justify-center">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">¿Por qué contratarme?</h3>
        <ul className="text-left space-y-3 text-gray-600 dark:text-gray-300">
        <li>• <strong>Motivación:</strong> Tengo mucha energía y ganas de aprender</li>
        <li>• <strong>Fundamentos sólidos:</strong> Buena base técnica en tecnologías modernas</li>
        <li>• <strong>Adaptabilidad:</strong> Rápido para aprender nuevas herramientas</li>
        <li>• <strong>Compromiso:</strong> Dedicado a escribir código limpio y mantenible</li>
        <li>• <strong>Colaboración:</strong> Excelente para trabajar en equipo</li>
        </ul>
  </div>
);

const ContactSection: React.FC = () => (
  <section id="contact" className="py-20 dark:to-black">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">¡Trabajemos Juntos!</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Estoy buscando oportunidades para comenzar mi carrera profesional y contribuir
        a proyectos emocionantes. ¿Tienes una oportunidad que podría ser perfecta para mí?
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <a
          href={`mailto:${portfolioData.email}`}
          className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Mail className="w-5 h-5" />
          Enviar Email
        </a>
      </div>
      <ContactCard />
    </div>
  </section>
);

export default ContactSection;