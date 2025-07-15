import type { Variants } from 'framer-motion';

export const slideInVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
     }
};

export const slideInFromRight: Variants = {
    hidden: { opacity:0, x:60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
};

export const slideInFromTop: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Animación para elementos dentro de un contenedor stagger
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

// Animación para cards con hover
export const cardHover: Variants = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.05, 
    y: -5,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
};

// Animación para botones
export const buttonHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  },
  tap: { scale: 0.95 }
};

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

// Animación para texto que se revela letra por letra
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

// Animación para progress bars
export const progressBar: Variants = {
  hidden: { width: 0 },
  visible: (width: number) => ({
    width: `${width}%`,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
      delay: 0.5
    }
  })
};

// Animación para elementos que rotan
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -90 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

// Animación para modal/overlay
export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

export const modalContent: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.75,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    scale: 0.75,
    y: 50,
    transition: {
      duration: 0.3
    }
  }
};

// Configuraciones de transición reutilizables
export const springTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 15
};

export const smoothTransition = {
  duration: 0.6,
  ease: 'easeOut'
};

// Hook personalizado para animaciones en scroll
export const useScrollAnimation = () => {
  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.3 }
  };
};