// components/AnimatedBackground.tsx
"use client";

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated shapes */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-rose-400 to-indigo-500"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.25
            }}
            animate={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              rotate: Math.random() * 360
            }}
            transition={{ 
              duration: Math.random() * 20 + 20, 
              repeat: Infinity, 
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
            style={{ 
              width: `${Math.random() * 300 + 50}px`, 
              height: `${Math.random() * 300 + 50}px`,
              filter: 'blur(50px)'
            }}
          />
        ))}
      </div>
    </div>
  );
}