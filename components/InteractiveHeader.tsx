"use client";

import React, { useState, useEffect, MouseEvent } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaCode } from "react-icons/fa";
import { useTheme } from "next-themes";

// Define a type for particles
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  color: string;
}

export default function InteractiveHeader() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [particles, setParticles] = useState<Particle[]>([]);

  // Theme toggle & component mounting
  useEffect(() => setMounted(true), []);

  const createParticles = (e: MouseEvent<HTMLElement>) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 10; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 10 + 5,
        speedX: (Math.random() - 0.5) * 10,
        speedY: (Math.random() - 0.5) * 10,
        opacity: 1,
        rotation: Math.random() * 360,
        color: ['#e11d48', '#6366f1', '#0ea5e9'][Math.floor(Math.random() * 3)]
      });
    }
    setParticles([...particles, ...newParticles]);
    
    // Remove particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1000);
  };

  return (
    <header 
      onClick={createParticles}
      className="fixed top-0 left-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm z-30"
    >
      <div className="container mx-auto px-4 py-3 flex justify-center items-center">
        {/* Centered theme toggle with animation */}
        {mounted && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation(); // Prevent particle effect when toggling theme
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            className="relative h-10 w-10 rounded-full bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 flex items-center justify-center text-white overflow-hidden"
          >
            <motion.div
              className="absolute inset-0.5 rounded-full bg-white dark:bg-zinc-900"
              initial={false}
              animate={{ 
                x: theme === "dark" ? "50%" : "0%",
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30
              }}
            />
            <div className="relative h-full w-full flex justify-between items-center px-1">
              <FaSun className="h-5 w-5 text-yellow-500" />
              <FaMoon className="h-5 w-5 text-indigo-300" />
            </div>
          </motion.button>
        )}

        {/* Particles */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute"
              initial={{
                x: particle.x,
                y: particle.y,
                opacity: 1,
                scale: 0.2,
                rotate: particle.rotation
              }}
              animate={{
                x: particle.x + particle.speedX * 20,
                y: particle.y + particle.speedY * 20,
                opacity: 0,
                scale: 0.8,
                rotate: particle.rotation + 180
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ color: particle.color }}
            >
              <FaCode />
            </motion.div>
          ))}
        </div>
      </div>
    </header>
  );
}