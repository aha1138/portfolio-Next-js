import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Portfolio data that will be used for context
const portfolioData = {
  skills: {
    frontend: ['React', 'Vue.js', 'JavaScript', 'HTML', 'CSS'],
    backend: ['Java', 'Python', 'C++', 'MongoDB', 'SQL Oracle'],
    devtools: ['Docker', 'Git', 'Postman', 'Sentry', 'Agile', 'TDD', 'SOLID'],
    languages: ['English (Fluent)', 'French (Fluent)']
  },
  projects: [
    {
      title: 'URL to Video AI Converter',
      period: 'January-March 2025',
      description: 'A full-stack web application that converts article URLs into AI-generated vertical videos suitable for social media platforms',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'ffmpeg', 'GPTScript', 'Vite'],
      industry: ['artificial intelligence', 'content creation', 'video processing', 'social media'],
      highlights: [
        'Built a React/TypeScript frontend with Tailwind CSS for URL input and video preview',
        'Developed a Node.js/Express backend orchestrating multiple AI services through GPTScript',
        'Implemented a microservices architecture connecting AI tools for content summarization and media generation',
        'Created an automated pipeline for generating custom imagery, voiceovers, and synchronized captions'
      ]
    },
    {
      title: 'Comparative Study of Small LLMs',
      period: 'Fall 2024',
      description: 'Research project comparing small language models (LLMs) with less than 4 billion parameters on various NLP tasks',
      technologies: ['Python', 'PyTorch', 'HuggingFace', 'BERT', 'LLMs', 'NLP'],
      industry: ['natural language processing', 'machine learning', 'academic research', 'data analysis'],
      highlights: [
        'Evaluated models on text summarization, document classification, and personal information extraction tasks',
        'Utilized the Enron Fraud Email dataset for real-world testing and benchmarking',
        'Implemented evaluation metrics including BLEU, ROUGE, BERTScore, and F1-score',
        'Analyzed performance correlations between model size, text length, and task complexity'
      ]
    },
    {
      title: 'FestifyPro',
      period: 'September-December 2024',
      description: 'Backend development for festival management with RESTful APIs',
      technologies: ['Java', 'SQLite', 'JUnit', 'Maven', 'GitHub Actions', 'CI/CD'],
      industry: ['event management', 'backend', 'api development'],
      highlights: [
        'Designed and maintained CI/CD pipelines using GitHub Actions with 90% deployment success rate',
        'Developed scalable RESTful APIs for festival management',
        'Applied Clean Architecture principles and SOLID patterns'
      ]
    },
    {
      title: 'Ethereum Lottery dApp',
      period: 'Winter 2024',
      description: 'A decentralized lottery application built on Ethereum with upgradeable smart contracts',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'OpenZeppelin', 'Truffle', 'JavaScript', 'MetaMask'],
      industry: ['blockchain', 'smart contracts', 'decentralized applications', 'fintech'],
      highlights: [
        'Implemented upgradeable smart contracts using OpenZeppelin proxy patterns',
        'Designed secure random winner selection and ticket purchasing mechanisms',
        'Built responsive front-end interface with Web3.js for blockchain interaction',
        'Created comprehensive testing infrastructure for smart contract validation'
      ]
    },
    {
      title: 'Introduction to NLP with Transformers',
      period: 'Summer 2024',
      description: 'Applied project using pre-trained transformer models from HuggingFace for various NLP tasks',
      technologies: ['Python', 'HuggingFace', 'Transformers', 'PyTorch', 'TensorFlow', 'NLP'],
      industry: ['natural language processing', 'machine learning', 'text analysis', 'construction safety'],
      highlights: [
        'Fine-tuned transformer models for classification of construction site incident descriptions',
        'Implemented extractive question-answering models for automated information extraction',
        'Developed text correction systems using POS tagging and contextual replacement techniques',
        'Conducted comparative analysis between different classification and question-answering models'
      ]
    },
    {
      title: 'Regular Expressions, N-gram Models and Text Classification',
      period: 'Spring 2024',
      description: 'Implementation of traditional NLP techniques for text processing and classification',
      technologies: ['Python', 'Regex', 'N-gram Models', 'Scikit-learn', 'NLTK', 'Jupyter Notebooks'],
      industry: ['natural language processing', 'text analysis', 'pattern recognition'],
      highlights: [
        'Extracted structured information from unstructured text using advanced regular expressions',
        'Built and trained language models based on N-grams for text processing tasks',
        'Implemented text correction systems leveraging statistical language modeling',
        'Developed classical machine learning approaches for short text classification'
      ]
    },
    {
      title: 'RESTALO',
      period: 'December-May 2024',
      description: 'Backend development for reservation and menu services',
      technologies: ['Java 21', 'Maven', 'JUnit', 'MongoDB', 'GitHub Actions'],
      industry: ['food service', 'reservation systems', 'backend'],
      highlights: [
        'Built CI/CD pipelines with GitHub Actions, 90% success rate',
        'Improved query performance by 30%, reducing response times from 200ms to 140ms',
        'Implemented Clean Code practices and enhanced exception handling'
      ]
    },
    {
      title: 'ChalCLT',
      period: 'September-December 2023',
      description: 'Java-based desktop application with 3D visualization',
      technologies: ['Java', 'Swing', 'Maven', 'MVC pattern', '3D Viewer'],
      industry: ['desktop applications', 'visualization', 'construction'],
      highlights: [
        'Developed desktop application following MVC pattern',
        'Designed modular GUI in Java Swing',
        'Optimized data processing using DTOs, reducing handling time by 20%',
        'Integrated 3D viewer to display cottage parts in STL format'
      ]
    },
    {
      title: 'SemanticAnalysis',
      period: 'Spring 2024',
      description: 'Implementation of a semantic analyzer for a compiler with syntax-directed translation',
      technologies: ['C#', 'Visual Studio', 'xUnit', 'MSTest'],
      industry: ['compiler design', 'software development', 'programming languages'],
      highlights: [
        'Implemented a LL(1) top-down parser for syntactic analysis',
        'Developed a semantic analyzer based on syntax-directed translation',
        'Created an intermediate code representation system with instructions like Assignment, Jump, and Label',
        'Built comprehensive unit tests using xUnit and MSTest frameworks'
      ]
    },
    {
      title: 'IFTCoin Blockchain Implementation',
      period: 'Winter 2024',
      description: 'Development of a functional blockchain node with transaction management and block validation',
      technologies: ['Python', 'Blockchain', 'Cryptography', 'Data Structures', 'Networking'],
      industry: ['blockchain', 'cryptocurrency', 'distributed systems', 'fintech'],
      highlights: [
        'Implemented Block, Transaction, and BlockHandler classes for complete blockchain functionality',
        'Designed transaction input/output management with cryptographic validation',
        'Created mechanisms for maintaining and updating the blockchain in real-time',
        'Developed comprehensive test cases ensuring data integrity throughout the transaction lifecycle'
      ]
    },
    {
      title: 'Lamport Signature Implementation',
      period: 'Winter 2024',
      description: 'Implementation of a hash-based digital signature system using Lamport signatures',
      technologies: ['Python', 'Cryptography', 'Hash Functions', 'Security Protocols'],
      industry: ['cryptography', 'cybersecurity', 'blockchain', 'digital signatures'],
      highlights: [
        'Developed key generation, signing, and verification functions for Lamport signatures',
        'Implemented secure cryptographic primitives for one-time signature schemes',
        'Created robust testing infrastructure to validate signature integrity',
        'Optimized implementation for practical use cases in blockchain verification'
      ]
    }
  ],
  education: [
    {
      institution: 'Laval University',
      degree: 'Bachelor of Applied Sciences, Computer Science',
      location: 'Quebec, Canada',
      graduation: '2025 (Expected)',
      courses: [
        'Software Quality and Metrics', 'Software Engineering Process', 
        'Advanced Technique In Artificial Intelligence', 'Natural Language Processing', 
        'Statistics', 'Algorithm Design', 'Object-Oriented Systems', 
        'Database Models', 'Blockchain', 'Advanced C++ Programming', 
        'Cybersecurity', 'Web Development', 'Mobile Development', 
        'Data Structures', 'Operating Systems', 'Computer Networks', 
        'Computer Architecture', 'Discrete Mathematics', 'Linear Algebra', 'Calculus'
      ]
    }
  ],
  experience: [
    {
      role: 'Salesperson and Repair Technician',
      company: 'APM AUTO',
      period: '2020-2024',
      location: 'Laval, Canada',
      description: 'Sales and vehicle repair services',
      relevantIndustries: ['automotive', 'sales', 'technical repair'],
      responsibilities: [
        'Sold and negotiated car deals, providing estimates and solutions',
        'Diagnosed and repaired vehicles, ensuring quality work',
        'Collaborated with a team of technicians to manage customer projects'
      ]
    }
  ],
  certifications: [
    {
      title: 'Exploring Adversarial Machine Learning',
      issuer: 'NVIDIA',
      date: 'January 2025',
      credentialId: 'jUodpjl8RCuEEd88fShWnw'
    }
  ]
};

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `
      You are a helpful assistant for my portfolio website. 
      Help guide visitors through my portfolio based on their interests or industry.
      
      Here's information about my skills, projects, and experience:
      ${JSON.stringify(portfolioData)}
      
      Based on this visitor's query: "${query}"
      Provide a personalized response that highlights relevant projects, skills, and experience.
      Focus on matching their industry interests with my relevant work.
      Keep responses professional, brief (max 200 words), and directly relevant.
      If their query is unrelated to portfolio guidance, politely redirect them to ask about my work, skills, or projects.
      
      Response format: Conversational but concise text with 1-3 specific recommendations.
    `;

    // Generate content with proper error handling
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return NextResponse.json({ response: text });
  } catch (error) {
    console.error('Error details:', error);
    return NextResponse.json(
      { 
        error: 'Failed to get portfolio guidance', 
        details: error instanceof Error ? error.message : String(error) 
      },
      { status: 500 }
    );
  }
}