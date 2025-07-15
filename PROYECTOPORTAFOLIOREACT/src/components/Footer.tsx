import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import {
  fadeIn,
  staggerContainer,
  staggerItem,
  useScrollAnimation
} from '../animations/animations';

const Footer: React.FC = () => {
  const scrollAnim = useScrollAnimation();

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-black dark:to-gray-900 py-8">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="mb-4"
          variants={fadeIn}
          {...scrollAnim}
        >
          © 2025 {portfolioData.name}. Designed and developed with React and Tailwind CSS.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.a
            href={portfolioData.github}
            className="hover:text-blue-400 transition-colors"
            aria-label="GitHub"
            variants={staggerItem}
          >
            <Github className="w-5 h-5" />
          </motion.a>

          <motion.a
            href={`mailto:${portfolioData.email}`}
            className="hover:text-blue-400 transition-colors"
            aria-label="Email"
            variants={staggerItem}
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
