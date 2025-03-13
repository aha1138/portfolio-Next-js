"use client";
import pp from "../public/pp.jpg";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaCode, FaServer, FaDatabase, FaTools, FaArrowDown } from "react-icons/fa";
import AnimatedBackground from "@/components/AnimatedBackground";
import gif from "../public/portfolio.gif";
import nlp from "../public/nlp.png";
import chalet from "../public/chalet.png";
import festify from "../public/festify.png";
import restalo from "../public/restalo.png";
import InteractiveHeader from "@/components/InteractiveHeader";
import { StaticImageData } from "next/image";
import emailjs from '@emailjs/browser';
import { useState, FormEvent, useRef, useEffect } from 'react';

// Define the type for ProjectCard props
interface ProjectCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  technologies: string[];
}

export default function Home() {
  const animationConfig = {
    duration: 0.8,
    ease: "easeOut"
  };
  
  useEffect(() => {
    emailjs.init("A3dPbiyPTly8ovlbe");
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const result = await emailjs.sendForm(
        'service_wo7nwa7', 
        'template_1zprc5f',
        formRef.current!,
        'A3dPbiyPTly8ovlbe'
      );
      console.log('Success!', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Top header bar */}
      <InteractiveHeader />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-300 via-white to-gray-400 dark:from-black dark:via-zinc-900 dark:to-zinc-800 text-black dark:text-white transition-all duration-500 overflow-hidden">
        <AnimatedBackground />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Welcome banner - fills the top space */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ...animationConfig }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Welcome to my portfolio
            </span>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={animationConfig}
              className="flex-1 space-y-6"
            >
              <div className="space-y-4">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
                  Hello, I&apos;m Ahad!
                </h1>
                <h2 className="text-2xl font-medium">Software Developer</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Montreal, Quebec</p>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
                Bilingual (English/French) software developer with over two years of experience building web applications and software solutions.
              </p>
              
              <div className="flex items-center gap-4">
                {/* <Button className="rounded-full bg-gradient-to-r from-rose-600 via-indigo-600 to-sky-500 text-white transition-transform hover:scale-105">
                  Download Resume
                </Button> */}

                <Link href="https://github.com/aha1138" className="text-gray-600 dark:text-gray-400 hover:scale-110 transition-transform p-2">
                  <FaGithub className="w-8 h-8" />
                </Link>

                <Link href="https://www.linkedin.com/in/ahad-gujar-97b714245" className="text-gray-600 dark:text-gray-400 hover:scale-110 transition-transform p-2">
                  <FaLinkedin className="w-8 h-8" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={animationConfig}
              className="flex-1 flex justify-center"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
                <Image src={pp} alt="Profile picture" className="w-full h-full object-cover transition-all duration-300 hover:scale-110" />
              </div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rest of your sections remain unchanged */}
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={animationConfig}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Who I Am</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I`&apos;`m a passionate software developer based in Montreal, Quebec. I specialize in building robust web applications and software solutions using modern technologies.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  With a strong foundation in computer science and over two years of hands-on experience, I`&apos;`ve developed a keen eye for detail and a commitment to creating efficient, scalable, and user-friendly applications.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Education</h3>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="font-medium text-lg">Bachelor of Applied Sciences, Computer Science</p>
                    <p className="text-blue-600 dark:text-blue-400">Laval University, Quebec, Canada</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Expected Graduation: 2025</p>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Key Courses:</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Software Quality and Metrics (SOLID principles, software architecture, TDD)</li>
                    <li>Software Engineering Process (Scrum, Agile, DevOps, Clean Code principles)</li>
                    <li>Advanced Techniques In Artificial Intelligence (reinforcement learning and more)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={animationConfig}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <FaCode className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>HTML/CSS/JavaScript</li>
                  <li>React.js</li>
                  <li>Vue.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                    <FaServer className="w-6 h-6 text-green-600 dark:text-green-300" />
                  </div>
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Java</li>
                  <li>Python</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Spring Boot</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                    <FaDatabase className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <h3 className="text-xl font-semibold">Databases</h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>MongoDB</li>
                  <li>Oracle</li>
                  <li>PL/SQL</li>
                  <li>SQLite</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                    <FaTools className="w-6 h-6 text-orange-600 dark:text-orange-300" />
                  </div>
                  <h3 className="text-xl font-semibold">Tools & Methods</h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>Agile/Scrum</li>
                  <li>CI/CD</li>
                  <li>Testing (JUnit, Jest)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={animationConfig}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard 
                image={gif}
                title="Portfolio Website"
                description="A personal portfolio website built with Next.js and Tailwind CSS, featuring responsive design and dark/light modes."
                technologies={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
              />
              
              <ProjectCard 
                image={festify}
                title="FestifyPro"
                description="A festival management application built with Java and SQLite to manage events, attendees, and performances."
                technologies={["Java", "SQLite", "Swing"]}
              />
              
              <ProjectCard 
                image={nlp}
                title="NLP Classification"
                description="A natural language processing project for text classification using machine learning algorithms."
                technologies={["Python", "Jupyter Notebook", "NLP", "Machine Learning"]}
              />
              
              <ProjectCard 
                image={restalo}
                title="RESTALO"
                description="A restaurant management system with reservation capabilities and menu management."
                technologies={["Java", "MongoDB", "Spring Boot"]}
              />
              
              <ProjectCard 
                image={chalet}
                title="ChalCLT"
                description="A cabin rental management application with booking system and owner dashboard."
                technologies={["Java", "Swing", "JDBC"]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={animationConfig}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">Contact Me</h2>
            
            <div className="max-w-xl mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8">
              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. I`&apos;`ll get back to you as soon as possible.</p>
                  <Button 
                    onClick={() => setSubmitStatus(null)}
                    className="bg-gradient-to-r from-rose-600 via-indigo-600 to-sky-500 text-white"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-rose-600 via-indigo-600 to-sky-500 text-white transition-transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : "Send Message"}
                  </Button>
                  
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-center text-sm">
                      Sorry, there was a problem sending your message. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
            
            <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
              <p>© {new Date().getFullYear()} Ahad Gujar. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ image, title, description, technologies }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg transition-all"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          className="object-cover"
          fill
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-zinc-700 rounded-md text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}