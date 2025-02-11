"use client";

import Image from "next/image";
import pp from "../public/pp.jpg";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import gif from "../public/portfolio.gif";
import nlp from "../public/nlp.png";
import chalet from "../public/chalet.png";
import festify from "../public/festify.png";
import restalo from "../public/restalo.png"

export default function Home() {
  const animationConfig = {
    duration: 0.8,
    ease: "easeOut"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 via-white to-gray-400 dark:from-black dark:via-zinc-900 dark:to-zinc-800 text-black dark:text-white transition-all duration-500">
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
              <h2 className="text-lg font-semibold">Specialization and Stack</h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                I specialize in building web applications and software solutions using{" "}
                <span className="text-black dark:text-white">Java, Python, Javascript</span>.
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
              Bilingual (English/French) and skilled software developer with over two years of experience in coding, developing and implementing
              software applications and tools. Based in Montreal, QC, Canada, and open to relocation!
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                I have experience with a variety of technologies including <span className="text-black dark:text-white">Java, Python, React, Vue.js, Next.js</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={animationConfig}
              className="flex items-center gap-3">
              {/* <Button className="rounded-full bg-gradient-to-r from-rose-600 via-indigo-600 to-sky-500 text-white transition-transform hover:scale-105">
                Resume
              </Button> */}

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
                  <p className="text-sm text-gray-600 dark:text-gray-400">Expected Graduation: 2025</p>
                  <p className="font-medium">Bachelor of Applied Sciences, Computer Science</p>
                  <p className="text-blue-600 dark:text-blue-400">Laval University, Quebec, Canada</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Courses:</p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                <li>Software Quality and Metrics: In this class, learned solid principles, software architecture, TDD, etc.</li>
                <li>Software Engineering Process: In this class, learning Scrum, Agile, DevOps, Clean Code principles.</li>
                <li>Advanced Technique In Artificial Intelligence: In this class, learning AI concepts like reinforcement learning and much more.</li>
              </ul>
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

            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
            <CardContent className="p-4">
              <Image src={gif} alt="Project 1" className="rounded-lg mb-4" />
              <div className="space-y-1">
                <h3 className="font-medium">Portfolio Website</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Next.js, Typescript</p>
                <Button variant="ghost" size="icon">→</Button>
              </div>
            </CardContent>
          </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200
    dark:border-zinc-800 transition-transform duration-300 hover:scale-105
    cursor-pointer">
                <CardContent className="p-4">
                  <Image src={festify} alt="Project 1" className="rounded-lg mb-4" />
                  <div className="space-y-1">
                    <h3 className="font-medium">FestifyPro</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Java, SQLite</p>
                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200
    dark:border-zinc-800 transition-transform duration-300 hover:scale-105
    cursor-pointer">
                <CardContent className="p-4">
                  <Image src={nlp} alt="Project 1" className="rounded-lg mb-4" />
                  <div className="space-y-1">
                    <h3 className="font-medium">NLP Classification</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Jupyter Notebook</p>
                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200
    dark:border-zinc-800 transition-transform duration-300 hover:scale-105
    cursor-pointer">
                <CardContent className="p-4">
                  <Image src={restalo} alt="Project 1" className="rounded-lg mb-4" />
                  <div className="space-y-1">
                    <h3 className="font-medium">RESTALO</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Java, MongoDB</p>
                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200
    dark:border-zinc-800 transition-transform duration-300 hover:scale-105
    cursor-pointer">
                <CardContent className="p-4">
                  <Image src={chalet} alt="Project 1" className="rounded-lg mb-4" />
                  <div className="space-y-1">
                    <h3 className="font-medium">ChalCLT</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Java, Swing</p>
                    <Button variant="ghost" size="icon">→</Button>
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