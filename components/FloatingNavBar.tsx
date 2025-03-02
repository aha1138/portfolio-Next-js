// components/FloatingNavBar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function FloatingNavBar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome className="w-5 h-5" /> },
    { id: "about", label: "About", icon: <FaUser className="w-5 h-5" /> },
    { id: "skills", label: "Skills", icon: <FaCode className="w-5 h-5" /> },
    { id: "projects", label: "Projects", icon: <FaBriefcase className="w-5 h-5" /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope className="w-5 h-5" /> }
  ];

  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="flex gap-3 p-3 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-full shadow-lg">
        {navItems.map((item) => (
          <div key={item.id} className="relative group">
            <Link
              href={`#${item.id}`}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`flex items-center justify-center p-3 rounded-full transition-all ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 text-white"
                  : "bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-600"
              }`}
            >
              {item.icon}
            </Link>
            
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="px-3 py-1.5 bg-black/80 text-white text-xs font-medium rounded-md whitespace-nowrap">
                {item.label}
                {/* Arrow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-black/80 transform rotate-45"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}