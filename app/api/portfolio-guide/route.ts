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
      title: 'Web Security Analysis with DVWA',
      period: 'March 2025',
      description: 'Project focused on penetration testing to identify and exploit vulnerabilities in DVWA, demonstrating cybersecurity skills',
      technologies: ['Docker', 'OWASP ZAP', 'sqlmap', 'OWASP Top 10'],
      industry: ['cybersecurity', 'penetration testing', 'security analysis'],
      highlights: [
        'Deployed DVWA via Docker for an isolated, secure test environment',
        'Used OWASP ZAP to detect critical vulnerabilities including SQL injection and XSS',
        'Exploited SQL injection vulnerabilities with sqlmap to extract database information',
        'Created a professional security report with recommendations including parameterized queries',
        'Documented testing process with screenshots of alerts and exploitation outputs'
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
      title: 'Soccer Match Prediction Analysis',
      period: 'August 2025',
      description: 'A machine learning project analyzing soccer match data to predict outcomes using feature engineering and Random Forest classification',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter Notebooks', 'Matplotlib', 'Seaborn', 'Random Forest'],
      industry: ['sports analytics', 'machine learning', 'predictive modeling', 'data science'],
      highlights: [
        'Engineered temporal features using rolling averages for key performance metrics (goals, shots, distance covered)',
        'Implemented a Random Forest Classifier achieving 60-65% prediction accuracy for match outcomes',
        'Created comprehensive visualizations to interpret feature importance and model performance',
        'Developed a complete data science pipeline from data loading to model evaluation',
        'Identified key performance indicators that most strongly influence match results'
      ]
    },
    {
      title: 'Reddit Personality Traits Prediction',
      period: 'January-April 2025',
      description: 'A large-scale data processing project analyzing Reddit user data to predict personality traits (OCEAN model) from social media behavior',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Natural Language Processing', 'HuggingFace', 'Big Data', 'Machine Learning'],
      industry: ['data science', 'computational psychology', 'social media analysis', 'predictive modeling'],
      highlights: [
        'Processed and analyzed massive Reddit datasets (posts from 2015-2019) with efficient data handling techniques',
        'Implemented machine learning models to predict personality traits (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism)',
        'Developed feature extraction pipelines for text content, temporal patterns, and social interaction behaviors',
        'Applied NLP techniques to derive psychological indicators from user-generated content',
        'Created comprehensive testing and validation framework for evaluating prediction accuracy'
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
      title: 'Blockchain Technologies: IFTCoin and Lamport Signatures',
      period: 'Winter 2024',
      description: 'Development of blockchain technologies including a functional cryptocurrency node (IFTCoin) and a hash-based digital signature system (Lamport signatures)',
      technologies: ['Python', 'Blockchain', 'Cryptography', 'Hash Functions', 'Data Structures', 'Networking', 'Security Protocols'],
      industry: ['blockchain', 'cryptocurrency', 'distributed systems', 'fintech', 'cryptography', 'cybersecurity', 'digital signatures'],
      highlights: [
        'Implemented a complete blockchain system with Block, Transaction, and BlockHandler classes for transaction management',
        'Developed key generation, signing, and verification functions for Lamport one-time signature schemes',
        'Designed secure transaction input/output management with cryptographic validation mechanisms',
        'Created robust testing infrastructure ensuring data integrity throughout transaction and signature lifecycles',
        'Optimized cryptographic implementations for practical blockchain verification use cases'
      ]
    },
    {
      title: 'Portfolio Website',
      period: 'Current',
      description: 'A modern, responsive portfolio website built with Next.js, showcasing my projects and skills with interactive features',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'EmailJS', 'Google Gemini API'],
      industry: ['web development', 'frontend', 'interactive design', 'personal branding'],
      highlights: [
        'Designed and implemented a responsive UI with dark/light mode using Tailwind CSS and Next.js',
        'Created interactive UI elements and animations with Framer Motion for enhanced user experience',
        'Integrated EmailJS for a functional contact form with form validation and submission feedback',
        'Built an AI-powered portfolio guide using Google Gemini API to help visitors navigate projects based on their interests'
      ]
    },
    {
      title: 'UFood Restaurant Application',
      period: 'Spring 2024',
      description: 'A responsive restaurant discovery platform with search, reviews, and interactive maps',
      technologies: ['Vue.js 3', 'Vuetify', 'Tailwind CSS', 'JWT', 'Google Maps API', 'Jest', 'RESTful API'],
      industry: ['web development', 'food service', 'location-based services', 'social platform'],
      highlights: [
        'Developed a responsive restaurant discovery platform using Vue.js 3, Vuetify, and Tailwind CSS with component-based architecture',
        'Implemented secure JWT authentication and user profile system with following, visited, and favorite restaurant features',
        'Integrated Google Maps API to display restaurant locations with custom markers and information windows',
        'Created a dynamic restaurant filtering system allowing users to search by name, genre, and price range',
        'Built a comprehensive review system with rating and commenting capabilities and proper form validation'
      ]
    },
    {
      title: 'Compiler Project',
      period: 'Fall 2024',
      description: 'Implemented a compiler consisting of a Lexical Analyzer and a Semantic Analyzer in C#.',
      technologies: ['C#', 'Regular Expressions', 'Finite Automata', 'NFAs', 'DFAs', 'Parsing', 'LL Parsing', 'Semantic Analysis', 'Intermediate Code Generation'],
      industry: ['compiler design', 'software development', 'language processing'],
      highlights: [
        'Implemented a complete lexical analyzer that can tokenize source code based on regular expression rules.',
        'Implemented a semantic analyzer that can parse a token stream, perform semantic checks, and generate intermediate code.',
        'Designed and implemented a syntax-directed translation scheme for defining the semantics of the language.',
        'Implemented a backpatching mechanism for generating control flow instructions.',
        'Developed a comprehensive suite of unit tests to ensure the correctness of the implementation.'
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
    You are a concise assistant for my portfolio website.
    
    Here's my portfolio data:
    ${JSON.stringify(portfolioData)}
    
    For the query: "${query}"
    Create a brief response with:
    1. A single greeting sentence
    2. 3-5 bullet points highlighting relevant projects and skills that match their interests
    3. A brief closing sentence suggesting next steps
    
    Use this exact formatting with proper line breaks:
    [Greeting sentence]

    • [First bullet point]
    • [Second bullet point]
    • [Third bullet point]
    (and so on if needed)

    [Closing sentence]
    
    Ensure you include empty lines before and after the bullet points.
    Keep total response under 150 words. If query is unrelated to my portfolio, politely redirect to ask about my relevant work.
  `;

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