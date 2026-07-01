import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const FloatingShapes: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <motion.div
        animate={{ 
          y: [0, -50, 0],
          x: [0, 30, 0],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-blue-300/10 dark:bg-blue-800/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 40, 0],
          x: [0, -40, 0],
          rotate: [0, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-300/10 dark:bg-cyan-900/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300/10 dark:bg-purple-900/20 rounded-full blur-[100px]"
      />
    </div>
  );
};
