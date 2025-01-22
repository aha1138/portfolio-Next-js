"use client";

import Image from "next/image";
import pp from "../public/pp.jpg";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import image1 from "../public/1.png";


export default function Home() {
  const animationConfig = {
    duration: 0.8,
    ease: "easeOut"
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={animationConfig}
          className="flex items-center justify-between mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image src={pp} alt="Profile picture" className="cursor-pointer transition-all duration-300 hover:scale-110" />
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-10">

          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={animationConfig}
              className="space-y-1">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Hello, I&apos;m Ahad!
              </h1>
              <p className="text-gray-600 dark:text-gray-400">Software Developer</p>
              <p className="text-gray-600 dark:text-gray-400">Montreal, Quebec</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={animationConfig}
              className="space-y-3">
              <h2 className="text-lg font-semibold"> </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                <span className="text-black dark:text-white">AWS</span> and {` `}
                <span className="text-black dark:text-white">Azure</span>.
                I specialize in building web applications and cloud infrastructure in{" "}
                <span className="text-black dark:text-white">React, python</span>
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Développeur logiciel bilingue (anglais/français)
                et compétent, avec plus de deux ans d'expérience en codage, développement et mise en œuvre
                d'applications et d'outils logiciels. Basé à Montréal, QC, Canada, et ouvert à la relocalisation !
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={animationConfig}
              className="flex items-center gap-3">
              <Button className="rounded-full bg-gradient-to-r from-rose-600 via-indigo-600 to-sky-500 text-white transition-transform hover:scale-105">
                Resume
              </Button>

              <Link href="https://github.com/aha1138" className="text-gray-600 dark:text-gray-400 hover:scale-110 transition-transform">
                <FaGithub className="w-6 h-6" />
              </Link>

              <Link href="https://www.linkedin.com/in/ahad-gujar-97b714245" className="text-gray-600 dark:text-gray-400 hover:scale-110 transition-transform">
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </motion.div>
          </section>

          {/* Experience Section */}
          {/* 
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={animationConfig}
            className="space-y-8">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600
              via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Experience</h2>

            <div className="space-y-2">
              <div className="flex items-center justfiy-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">July, 2024-October, 2024</p>
                  <p className="font-medium">Backend Developement</p>
                  <p className="text-blue-600 dark:text-blue-400">Company x</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Worked on developing and maintaining backend services using Node.js and Express. Implemented RESTful APIs, optimized database queries, and ensured the scalability and reliability of the server-side applications.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justfiy-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">July, 2024-October, 2024</p>
                  <p className="font-medium">Backend Developement</p>
                  <p className="text-blue-600 dark:text-blue-400">Company x</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Worked on developing and maintaining backend services using Node.js and Express. Implemented RESTful APIs, optimized database queries, and ensured the scalability and reliability of the server-side applications.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justfiy-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">July, 2024-October, 2024</p>
                  <p className="font-medium">Backend Developement</p>
                  <p className="text-blue-600 dark:text-blue-400">Company x</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Worked on developing and maintaining backend services using Node.js and Express. Implemented RESTful APIs, optimized database queries, and ensured the scalability and reliability of the server-side applications.
              </p>
            </div>
          </motion.section>
          */}
          {/* Experience Section END */}

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={animationConfig}
            className="space-y-8">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600
              via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Education</h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  {/* date */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-sm"></p>
                  {/*  */}
                  <p className="font-medium">Computer Science</p>
                  <p className="text-blue-600 dark:text-blue-400">Class name</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Text that describes the class taken</p>
            </div>
          </motion.section>

          {/* PROJECTS */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={animationConfig}
            className="space-y-8">

            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600
              via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200
              dark:border-zinc-800 transition-transform duration-300 hover:scale-105
              cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image1} alt="Project 1" className="rounded-lg mb-4" />
                  <div className="flex items-center justify-between">

                    {/* Project Stack */}
                    <div>
                      <h3 className="font-medium"> Project 1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400"> Next.js, TypeScript</p>
                    </div>
                    <Button variant="ghost" size="icon"></Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200
              dark:border-zinc-800 transition-transform duration-300 hover:scale-105
              cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image1} alt="Project 1" className="rounded-lg mb-4" />
                  <div className="flex items-center justify-between">

                    {/* Project Stack */}
                    <div>
                      <h3 className="font-medium"> Project 1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400"> Next.js, TypeScript</p>
                    </div>
                    <Button variant="ghost" size="icon"></Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200
              dark:border-zinc-800 transition-transform duration-300 hover:scale-105
              cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image1} alt="Project 1" className="rounded-lg mb-4" />
                  <div className="flex items-center justify-between">

                    {/* Project Stack */}
                    <div>
                      <h3 className="font-medium"> Project 1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400"> Next.js, TypeScript</p>
                    </div>
                    <Button variant="ghost" size="icon"></Button>
                  </div>
                </CardContent>
              </Card>

            </div>
            <p className="text-gray-500"> @ 2025 Ahad Gujar</p>
          </motion.section>
        </main>
      </div>
    </div>
  )
}