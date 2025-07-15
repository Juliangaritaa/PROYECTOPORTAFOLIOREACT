import React from 'react';
import { portfolioData } from '../data/portfolioData';

const SkillBar: React.FC<{ skill: string; level: number }> = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const SkillsSection: React.FC = () => (
  <section id="skills" className="py-20 dark:to-black">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.name} level={skill.level} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Other Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {["Responsive Design", "RESTful APIs", "Git Version Control", "Debugging", "Problem Solving", "Team Collaboration"].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;