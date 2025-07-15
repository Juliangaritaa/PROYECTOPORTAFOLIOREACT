import React from 'react';
import { portfolioData } from '../data/portfolioData';

const SkillBar: React.FC<{ skill: string; level: number }> = ({ skill, level }) => {
  // Eliminamos la animación compleja y usamos el nivel directamente
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => (
  <section id="skills" className="py-20 dark:to-black">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;