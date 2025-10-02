import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import './index.css'
import projectsData from './projectsData.json'
import { Badge } from './components/ui/badge'
import ArtworkCard from './components/ArtworkCard'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState('home')
  const [feedback, setFeedback] = useState('')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')

  // Set current page based on route
  useEffect(() => {
    if (location.pathname === '/projects') {
      setCurrentPage('projects')
    } else {
      setCurrentPage('home')
    }
  }, [location.pathname])

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [currentPage])

  const handleProjectClick = (projectId) => {
    if (projectId === 1) {
      navigate('/project/ai-website-generator')
    } else if (projectId === 2) {
      navigate('/project/rag-llm')
    } else if (projectId === 3) {
      navigate('/project/bigfoot-analysis')
    } else if (projectId === 4) {
      navigate('/project/airbnb-analysis')
    } else if (projectId === 5) {
      navigate('/project/customer-churn')
    } else if (projectId === 6) {
      navigate('/project/sales-insights')
    }
  }

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault()

    if (!feedback.trim() || !name.trim() || !contact.trim()) return

    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzdBcYQkv3HVaQbBZOqpb9hocWn9Ti4bV-Rhtg9a2ut9rSIRYb9ln-tMFYy2FLvH2-c/exec'

      const formData = new FormData()
      formData.append('name', name)
      formData.append('contact', contact)
      formData.append('feedback', feedback)
      formData.append('timestamp', new Date().toISOString())
      formData.append('source', 'Portfolio Website')

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })

      alert('Thank you for your feedback! I\'ll review it soon.')
      setFeedback('')
      setName('')
      setContact('')

    } catch (error) {
      console.error('Error submitting feedback:', error)
      alert('There was an issue submitting your feedback. Please try again or contact me directly.')
    }
  }

  const skillCategories = [
    {
      category: "Programming & Frameworks",
      skills: [
        { name: 'Python', icon: '/icons/python.svg' },
        { name: 'SQL', icon: '/icons/mysql.svg' },
        { name: 'PySpark', icon: '/icons/apache.svg' },
        { name: 'SAS', icon: '/icons/SAS.svg' },
        { name: 'Java', icon: '/icons/java.svg' },
        { name: 'Pandas', icon: '/icons/pandas.svg' },
        { name: 'NumPy', icon: '/icons/numpy.svg' },
        { name: 'Scikit-learn', icon: '/icons/scikitlearn.svg' },
        { name: 'SciPy', icon: '/icons/SciPy.svg' },
        { name: 'PyTorch', icon: '/icons/pytorch.svg' }
      ]
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: 'MySQL', icon: '/icons/mysql.svg' },
        { name: 'Oracle', icon: '/icons/oracle.svg' },
        { name: 'MongoDB', icon: '/icons/mongodb.svg' },
        { name: 'Snowflake', icon: '/icons/snowflake.svg' },
        { name: 'Airflow', icon: '/icons/apache.svg' },
        { name: 'dbt', icon: '/icons/dbt.svg' },
        { name: 'Salesforce', icon: '/icons/salesforce.svg' }
      ]
    },
    {
      category: "Big Data",
      skills: [
        { name: 'Hadoop', icon: '/icons/apache.svg' },
        { name: 'Hive', icon: '/icons/apache.svg' },
        { name: 'Spark', icon: '/icons/apache.svg' },
        { name: 'Kafka', icon: '/icons/kafka.svg' },
        { name: 'Cassandra', icon: '/icons/cassandradb.svg' }
      ]
    },
    {
      category: "BI & Visualization",
      skills: [
        { name: 'Tableau', icon: '/icons/tableau.svg' },
        { name: 'Power BI', icon: '/icons/powerbi.svg' },
        { name: 'Looker', icon: '/icons/looker.svg' },
        { name: 'QlikView', icon: '/icons/qlikview.svg' },
        { name: 'Seaborn', icon: '/icons/seaborn.svg' },
        { name: 'Microsoft Excel', icon: '/icons/microsoft.svg' },
        { name: 'Google Sheets', icon: '/icons/google.svg' }
      ]
    },
    {
      category: "Cloud",
      skills: [
        { name: 'Azure (Certified)', icon: '/icons/azure.svg' },
        { name: 'AWS (S3, EC2, Redshift, Glue)', icon: '/icons/aws.svg' },
        { name: 'Google Cloud (GCP)', icon: '/icons/google-cloud.svg' }
      ]
    },
    {
      category: "AI / ML",
      skills: [
        { name: 'Machine Learning', icon: '/icons/pytorch.svg' },
        { name: 'Deep Learning', icon: '/icons/tensorflow.svg' },
        { name: 'NLP', icon: '/icons/hugging-face.svg' },
        { name: 'Prompting & GenAI', icon: '/icons/openai.svg' },
        { name: 'Experimentation & A/B Testing', icon: '/icons/ab.svg' }
      ]
    }
  ]

  const timelineData = [
    {
      type: 'work',
      title: 'Data Scientist',
      organization: 'Saayam',
      period: 'June 2025 - Present',
      year: '2025',
      description: 'Machine Learning, Business Intelligence, Fraud Analytics, Feature Engineering, Root Cause Analysis',
      achievements: [
        'Built fraud detection system with 85% precision on 10K+ transactions',
        'Migrated analytics to Power BI analyzing 18+ MySQL tables with DAX queries'
      ]
    },
    {
      type: 'work',
      title: 'Data Scientist, Research',
      organization: 'San Jose State University',
      period: 'September 2024 - June 2025',
      year: '2024-25',
      description: 'Data Analysis, B2B SaaS, GenAI, GTM, Product Management, Product Launch',
      achievements: [
        'Built AI-driven interface reducing website build time by 80%',
        'Implemented RAG pipeline fine-tuning GPT-4, Gemini & Claude - improved lighthouse 85% & SEO 90%'
      ]
    },
    {
      type: 'work',
      title: 'Data Scientist Intern',
      organization: 'Discover Financial Services',
      period: 'June 2024 - August 2024',
      year: '2024',
      description: 'Product Pricing & Marketing, Banking, Data Quality, Risk Analysis',
      achievements: [
        'Web scraped competitor rates from 6+ banks using MySQL, Python & Airflow',
        'Drove 0.85 bps rate increase → 12% CD balance uptick & $800K NII boost',
        'Enhanced forecasting models with customer activity features → 5% accuracy boost'
      ]
    },
    {
      type: 'education',
      title: 'Master of Science in Data Science',
      organization: 'San Jose State University',
      period: 'August 2023 - May 2025',
      year: '2023-25',
      description: 'ML, Big Data, Deep Learning, NLP, Data Mining, Visualization, Database Design',
      achievements: [
        'AI-Powered Website Generator - Capstone Project',
        'Advanced ML, Deep Learning, NLP & Big Data Technologies',
        'Research in AI-driven web development & natural language processing'
      ]
    },
    {
      type: 'work',
      title: 'Data Analyst, CS & Sales',
      organization: 'Freshworks',
      period: 'March 2022 - August 2023',
      year: '2022-23',
      description: 'SaaS, B2B, Go-To-Market Strategy, Product Analytics, Funnel Analysis, Customer Experience',
      achievements: [
        'Built GTM data pipeline integrating Customer Success, Sales, RevOps & Product data',
        'Created automated KPI tracking for 50+ team members → influenced VP roadmap priorities',
        'Delivered self-serve Tableau dashboard → 10% revenue increase via user engagement',
        'Built predictive churn & revenue models (regression, ARIMA) → 90% accuracy on high-value accounts',
        'Analyzed subscriber churn → identified $12.57M at-risk revenue with 15% recovery strategies',
        'Refined dunning strategy via A/B testing → reduced customer calls by 20%'
      ]
    },
    {
      type: 'work',
      title: 'Data Engineer',
      organization: 'Infosys',
      period: 'August 2020 - March 2022',
      year: '2020-22',
      description: 'Oracle SQL, NoSQL, Data Governance, Data Architecture, Data Mining, Agile, Consulting',
      achievements: [
        'Designed ETL pipeline for AT&T → reduced data processing time by 50%',
        'Optimized AWS data warehouse (S3, EC2, Redshift) → 40% query performance boost'
      ]
    },
    {
      type: 'education',
      title: 'Bachelors in Bio-Engineering',
      organization: 'SASTRA Deemed University',
      period: 'May 2016 - May 2020',
      year: '2020',
      description: 'Statistics, Probability, Cancer Research, Bioinformatics, Computational Biology',
      achievements: [
        'Oncology & Data Visualization Research Project',
        '2 years biomedical research experience in cancer studies',
        'Foundation in statistical analysis, probability & computational biology'
      ]
    }
  ]

  const certifications = [
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "Issued Feb 2022",
      credentialId: "I143-8742",
      description: "Demonstrated foundational knowledge of cloud concepts, Azure services, workloads, security, privacy, pricing, and support.",
      skills: "Cloud Computing, Azure Services",
      exam: "AZ-900",
      image: "/assets/azure.png"
    },
    {
      name: "Lean Six Sigma Green Belt",
      issuer: "Linear Training and Consulting",
      date: "Issued May 2023",
      credentialId: "1374/2013",
      description: "Comprehensive training in process improvement methodologies, statistical analysis, and project management for operational excellence.",
      skills: "Process Improvement, Statistical Analysis",
      image: "/assets/sixsigma.png"
    },
    {
      name: "Product Analytics Certification",
      issuer: "Pendo.io",
      date: "Issued Jun 2023",
      credentialId: "ccb5ee99-0978-42c3-8785-c78226030d06",
      credentialUrl: "https://www.credly.com/badges/ccb5ee99-0978-42c3-8785-c78226030d06/linked_in_profile",
      description: "Advanced certification in product analytics, user behavior analysis, and data-driven product decision making.",
      skills: "Product Analytics",
      image: "/assets/pendo-badge.png"
    },
    {
      name: "Data Modeling",
      issuer: "SQLBI",
      date: "Issued May 2022",
      credentialId: "80427",
      description: "Expertise in advanced data modeling techniques, DAX formulas, and Power BI optimization for enterprise analytics.",
      skills: "Data Modeling, Power BI, DAX",
      image: "/assets/sql.png"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation onPageChange={setCurrentPage} currentPage={currentPage} />

      {/* HOME PAGE */}
      {currentPage === 'home' && (
        <>
          {/* Landing Section */}
          <section className="flex items-center justify-center hero-bg py-16 sm:py-20 pt-24 sm:pt-28">
            <div className="container mx-auto px-4 sm:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                {/* Left Column - Text Content */}
                <div className="fade-in text-left">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-shadow floating-animation">
                    Yogavarshni Ramachandran
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-white via-white to-transparent mb-6 sm:mb-8"></div>
                  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 font-light tracking-wide whitespace-nowrap floating-animation">
                    DATA SCIENTIST • ML ENGINEER • AI ENGINEER
                  </h2>

                  {/* Open to Work Badge */}
                  <div className="flex justify-start mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                      <div className="relative">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <p className="text-white text-sm font-semibold tracking-wide">Open to Work</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mb-8">
                    <div
                      className="glass-card p-6 sm:p-8 text-center cursor-pointer hover:scale-105 transition-all duration-300"
                      onClick={() => setCurrentPage('experience')}
                    >
                      <div className="text-4xl sm:text-5xl font-black mb-2 text-white">4+</div>
                      <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">Years Experience</div>
                    </div>
                    <div
                      className="glass-card p-6 sm:p-8 text-center cursor-pointer hover:scale-105 transition-all duration-300"
                      onClick={() => setCurrentPage('projects')}
                    >
                      <div className="text-4xl sm:text-5xl font-black mb-2 text-white">10+</div>
                      <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">Projects Completed</div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Photo & Buttons */}
                <div className="fade-in flex flex-col items-center justify-center">
                  {/* Photo */}
                  <div className="mb-6">
                    <img
                      src="/assets/MYPIC.png"
                      alt="Yogavarshni Ramachandran"
                      className="profile-image w-56 sm:w-72 md:w-80 lg:w-[350px] h-56 sm:h-72 md:h-80 lg:h-[350px] object-cover mx-auto rounded-lg shadow-2xl"
                    />
                  </div>

                  {/* Buttons/Links */}
                  <div className="flex justify-center items-center gap-4 flex-wrap">
                    {/* PDF Resume */}
                    <a
                      href="/assets/Resume.pdf"
                      className="transform -rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-110 glass-card p-6 hover:z-10 relative group"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Download Resume"
                    >
                      <div className="text-3xl text-red-400 group-hover:text-red-300">PDF</div>
                      <div className="text-xs text-gray-400 text-center mt-2 font-medium">RESUME</div>
                    </a>

                    {/* Notion Portfolio */}
                    <a
                      href="https://www.notion.so/Yogavarshni-Ramachandran-96849f65bd904e6cabea14213bbc5b4d"
                      className="transform rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-110 glass-card p-6 hover:z-10 relative group"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Notion Portfolio"
                    >
                      <div className="text-3xl text-gray-300 group-hover:text-white">
                        <img src="/icons/notion.svg" alt="Notion" className="w-8 h-8 mx-auto" />
                      </div>
                      <div className="text-xs text-gray-400 text-center mt-2 font-medium">NOTION</div>
                    </a>

                    {/* GitHub Profile */}
                    <a
                      href="https://github.com/Yogavarshni4699"
                      className="transform -rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-110 glass-card p-6 hover:z-10 relative group"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Profile"
                    >
                      <div className="text-3xl text-gray-300 group-hover:text-white">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <div className="text-xs text-gray-400 text-center mt-2 font-medium">GITHUB</div>
                    </a>

                    {/* LinkedIn Profile */}
                    <a
                      href="https://www.linkedin.com/in/yogavarshniramachandran/"
                      className="transform rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-110 glass-card p-6 hover:z-10 relative group"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn Profile"
                    >
                      <div className="text-3xl text-gray-300 group-hover:text-white">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div className="text-xs text-gray-400 text-center mt-2 font-medium">LINKEDIN</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Journey Section */}
          <section className="min-h-screen flex items-center justify-center py-10 bg-black">
            <div className="container mx-auto px-4 sm:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
                {/* Left Column - Journey Photos */}
                <div className="fade-in">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">MY JOURNEY</h3>
                  <div className="flex flex-col sm:flex-row justify-start items-center space-y-6 sm:space-y-0 sm:space-x-8">
                    {/* BioEngineering */}
                    <div className="text-center">
                      <img
                        src="/assets/Labss.png"
                        alt="BioEngineering"
                        className="profile-image w-48 sm:w-64 h-64 sm:h-80 object-cover mx-auto mb-3 rounded-lg"
                      />
                      <p className="text-sm text-gray-400 uppercase tracking-wide">BioEngineering</p>
                    </div>

                    {/* Arrow */}
                    <div className="text-3xl sm:text-4xl text-gray-400 transform rotate-90 sm:rotate-0">→</div>

                    {/* Data Science Photo */}
                    <div className="text-center">
                      <img
                        src="/assets/Mine.png"
                        alt="Data Scientist"
                        className="profile-image w-48 sm:w-64 h-64 sm:h-80 object-cover mx-auto mb-3 rounded-lg"
                      />
                      <p className="text-sm text-gray-400 uppercase tracking-wide">Data Scientist</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Story */}
                <div className="fade-in">
                  <h2 className="text-3xl sm:text-4xl font-black mb-8 gradient-text">ABOUT ME</h2>
                  <div className="h-1 w-16 bg-white mb-8"></div>

                  <p className="text-gray-300 mb-6 leading-relaxed font-light">
                    My journey into data science started in biomedical research, where I spent two years working on cancer studies. During that time, I realized how important computational biology was in making new discoveries. That experience made me curious about machine learning, and soon I found myself wanting to learn more about data and how it can be used to solve real problems.
                  </p>

                  <p className="text-gray-300 mb-6 leading-relaxed font-light">
                    After graduation, I joined Infosys and worked with AT&T, where I built my coding and development skills. While I enjoyed the technical side, I wanted to work closer to people and business decisions. That's when I moved to Freshworks, a B2B SaaS company, where I focused on customer success and sales analytics. There, I used data to help improve customer retention and drive business growth.
                  </p>

                  <p className="text-gray-300 mb-6 leading-relaxed font-light">
                    To strengthen my foundation, I pursued a Master's in Data Science. Alongside my studies, I worked as a Pricing Analyst intern at Discover Financial Services, applying data science to real-world problems in the financial industry.
                  </p>

                  <p className="text-gray-300 mb-8 leading-relaxed font-light">
                    My journey has been driven by curiosity, exploring data science from pipelines to models to business insights. Outside of work, I enjoy painting and conversations that spark creativity.
                  </p>

                  {/* Explore Journey Button */}
                  <div className="flex justify-start">
                    <button
                      onClick={() => setCurrentPage('experience')}
                      className="btn-primary px-8 py-3 font-semibold text-sm"
                    >
                      Explore My Journey
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </>
      )}

      {/* PROJECTS PAGE */}
      {currentPage === 'projects' && (
        <section id="projects" className="min-h-screen section-padding pt-20">
          <div className="container mx-auto px-4 sm:px-8">
            <h2 className="text-5xl font-black text-center mb-20 gradient-text">PERSONAL PROJECTS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {projectsData.map((project) => (
                <div key={project.id} className="glass-card overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col" onClick={() => handleProjectClick(project.id)}>
                  <div className="notion-project-cover relative">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="notion-cover-pattern"></div>
                        <div className="notion-cover-content">
                          <div className="notion-cover-icon">{project.icon || '🚀'}</div>
                          <div className="notion-cover-label">{project.category}</div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-1 mb-4 min-h-[60px] content-start">
                      {project.tools.slice(0, 4).map((tech, index) => (
                        <span key={index} className="notion-tech-badge">{tech}</span>
                      ))}
                      {project.tools.length > 4 && (
                        <span
                          className="notion-tech-badge relative group cursor-help"
                          title={project.tools.slice(4).join(', ')}
                        >
                          +{project.tools.length - 4}
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-gray-700">
                            {project.tools.slice(4).join(', ')}
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500 mt-auto">
                      <span>{project.date}</span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full">{project.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EXPERIENCE PAGE */}
      {currentPage === 'experience' && (
        <section id="experience" className="min-h-screen section-padding pt-20">
          <div className="container mx-auto px-8">
            <h2 className="text-5xl font-black text-center mb-4 gradient-text">MY JOURNEY</h2>
            <p className="text-center text-gray-400 text-lg mb-20 max-w-4xl mx-auto">
              From biomedical research to data science - latest first timeline of my educational and professional evolution
            </p>
            <div className="unified-timeline max-w-6xl mx-auto">
              {timelineData.map((item, index) => (
                <div key={index} className="timeline-entry fade-in">
                  <div className="timeline-content">
                    <div className="glass-card p-8">
                      <div className={`timeline-type-badge ${item.type}`}>
                        {item.type === 'education' ? '🎓 Education' : '💼 Work'}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <h4 className="text-lg text-gray-300 font-light mb-4">{item.organization}</h4>
                      <p className="text-gray-300 mb-6 leading-relaxed font-light">{item.description}</p>
                      <ul className="space-y-3">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-white flex items-start font-light">
                            <span className="text-white mr-3 font-bold">→</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`timeline-marker ${item.type}`}></div>
                  <div className="timeline-year">{item.year}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SKILLS PAGE */}
      {currentPage === 'skills' && (
        <section id="skills" className="min-h-screen section-padding pt-20">
          <div className="container mx-auto px-4 sm:px-8">
            {/* Domain Knowledge Section */}
            <div className="mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-10 sm:mb-12 gradient-text">DOMAIN KNOWLEDGE</h2>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
                <span className="relative overflow-hidden rounded-full border border-white/20 px-6 py-3 text-xs sm:text-sm text-gray-300 hover:text-white hover:border-white/40 transition-all duration-500 group cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:via-white/20 before:to-white/5 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000">
                  <span className="relative z-10">SaaS & GTM Analytics</span>
                </span>
                <span className="relative overflow-hidden rounded-full border border-white/20 px-6 py-3 text-xs sm:text-sm text-gray-300 hover:text-white hover:border-white/40 transition-all duration-500 group cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:via-white/20 before:to-white/5 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000">
                  <span className="relative z-10">Customer Success & Sales</span>
                </span>
                <span className="relative overflow-hidden rounded-full border border-white/20 px-6 py-3 text-xs sm:text-sm text-gray-300 hover:text-white hover:border-white/40 transition-all duration-500 group cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:via-white/20 before:to-white/5 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000">
                  <span className="relative z-10">Churn Modeling</span>
                </span>
                <span className="relative overflow-hidden rounded-full border border-white/20 px-6 py-3 text-xs sm:text-sm text-gray-300 hover:text-white hover:border-white/40 transition-all duration-500 group cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:via-white/20 before:to-white/5 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000">
                  <span className="relative z-10">Finance & Pricing Analytics</span>
                </span>
                <span className="relative overflow-hidden rounded-full border border-white/20 px-6 py-3 text-xs sm:text-sm text-gray-300 hover:text-white hover:border-white/40 transition-all duration-500 group cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:via-white/20 before:to-white/5 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000">
                  <span className="relative z-10">Fraud Analytics</span>
                </span>
                <span className="relative overflow-hidden rounded-full border border-white/20 px-6 py-3 text-xs sm:text-sm text-gray-300 hover:text-white hover:border-white/40 transition-all duration-500 group cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:via-white/20 before:to-white/5 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000">
                  <span className="relative z-10">AI & Machine Learning</span>
                </span>
                <span className="relative overflow-hidden rounded-full border border-white/20 px-6 py-3 text-xs sm:text-sm text-gray-300 hover:text-white hover:border-white/40 transition-all duration-500 group cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:via-white/20 before:to-white/5 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000">
                  <span className="relative z-10">Data Engineering & Cloud</span>
                </span>
                <span className="relative overflow-hidden rounded-full border border-white/20 px-6 py-3 text-xs sm:text-sm text-gray-300 hover:text-white hover:border-white/40 transition-all duration-500 group cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:via-white/20 before:to-white/5 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000">
                  <span className="relative z-10">BI & Visualization</span>
                </span>
                <span className="relative overflow-hidden rounded-full border border-white/20 px-6 py-3 text-xs sm:text-sm text-gray-300 hover:text-white hover:border-white/40 transition-all duration-500 group cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:via-white/20 before:to-white/5 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000">
                  <span className="relative z-10">Research & BioEngineering</span>
                </span>
              </div>
            </div>

            {/* Section Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent mb-20 opacity-20"></div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-10 sm:mb-20 gradient-text">TECHNICAL EXPERTISE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {skillCategories.map((category, index) => (
                <div key={index} className="glass-card p-4 sm:p-6 fade-in hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="text-2xl sm:text-3xl mb-2">{category.icon}</div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{category.category}</h4>
                    <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent mt-3 opacity-30"></div>
                  </div>
                  <div className="flex flex-col items-center sm:grid sm:grid-cols-2 gap-2 sm:gap-3">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="flex items-center justify-center sm:justify-start space-x-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 group w-full sm:w-auto">
                        {skill.icon && (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className={`w-5 h-5 transition-all duration-300 ${['Tableau', 'Scikit-learn', 'Prompting & GenAI', 'dbt', 'Kafka', 'Experimentation & A/B Testing'].includes(skill.name) ? 'brightness-0 invert' : ''}`}
                          />
                        )}
                        <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Section */}
            <div className="mt-20">
              <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent mb-20 opacity-20"></div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-10 sm:mb-20 gradient-text">CERTIFICATIONS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass-card p-6 sm:p-8 fade-in hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-6 mb-4">
                      {cert.image && (
                        <div className="w-16 h-16 flex-shrink-0">
                          <img
                            src={cert.image}
                            alt={cert.name}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg sm:text-xl font-bold text-white">{cert.name}</h3>
                          {cert.exam && (
                            <div className="bg-white/10 px-3 py-1 rounded-full ml-2">
                              <span className="text-xs font-semibold text-white">{cert.exam}</span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-300 mb-1">{cert.issuer}</p>
                        <p className="text-xs text-gray-400 mb-1">{cert.date}</p>
                        {cert.credentialId && (
                          <div className="mb-3">
                            {cert.credentialUrl ? (
                              <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-white/15 to-white/10 hover:from-white/25 hover:to-white/20 text-white px-4 py-2 rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/20"
                              >
                                <span>Show Credential</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  <polyline points="15 3 21 3 21 9"></polyline>
                                  <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                              </a>
                            ) : (
                              <span className="text-xs text-gray-400">Credential ID: {cert.credentialId}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">{cert.description}</p>
                    <div>
                      <p className="text-xs text-gray-400 mb-2 font-semibold">Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.split(', ').map((skill, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ACTIVITIES PAGE */}
      {currentPage === 'activities' && (
        <section id="activities" className="min-h-screen section-padding pt-20">
          <div className="container mx-auto px-8">
            {/* Conferences & Learning */}
            <div className="max-w-6xl mx-auto mb-20">
              <h3 className="text-3xl font-bold text-center mb-12 gradient-text">CONFERENCES & LEARNING</h3>
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Conferences - Left Side */}
                <div>
                  <h4 className="text-2xl font-bold text-white mb-8 text-center">Conferences Attended</h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <span className="text-white font-bold text-lg mt-1">1.</span>
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-1">Product-Led Alliance Summit '23</h5>
                        <p className="text-gray-400 text-sm mb-2">Oakland, CA • 2023</p>
                        <p className="text-gray-300 text-sm">Product-led growth strategies and data-driven approaches to product development</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-white font-bold text-lg mt-1">2.</span>
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-1">Growth Data Science X B2B SaaS</h5>
                        <p className="text-gray-400 text-sm mb-2">Notion HQ, SF, CA • 2023</p>
                        <p className="text-gray-300 text-sm">Explored the work of Growth Data Scientists at B2B SaaS companies and challenges compared to B2C companies</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-white font-bold text-lg mt-1">3.</span>
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-1">ODSC AI West 2024</h5>
                        <p className="text-gray-400 text-sm mb-2">California • 2024</p>
                        <p className="text-gray-300 text-sm">Open Data Science Conference focusing on AI advancements and practical applications</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Lessons - Right Side */}
                <div>
                  <h4 className="text-2xl font-bold text-white mb-8 text-center">Key Lessons Learned</h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <span className="text-green-400 font-bold text-lg mt-1">•</span>
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-2">Breaking Data Silos in B2B SaaS</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">Understood data silos among teams in B2B SaaS space and how to break them by collaborating with teams through cross-functional communication and shared analytics frameworks</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-green-400 font-bold text-lg mt-1">•</span>
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-2">Growth Data Science Role in B2B SaaS</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">What is growth and what is the role of growth data scientist in B2B SaaS - learned how growth DS differs from traditional DS in focusing on user acquisition, activation, and retention metrics</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-green-400 font-bold text-lg mt-1">•</span>
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-2">Advanced A/B Testing & Hypothesis Testing</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">Understood how A/B testing works from a Statsig head of data speech - learned various types of hypothesis testing for different purposes and statistical significance in growth experiments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Divider */}
            <div className="section-divider"></div>

            {/* Hobbies */}
            <div className="max-w-6xl mx-auto mt-20">
              <h3 className="text-3xl font-bold text-center mb-12 gradient-text">BEYOND DATA SCIENCE</h3>

              {/* Hobbies */}
              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-24">
                <div className="glass-card p-8 text-center fade-in">
                  <div className="text-5xl mb-6">👥</div>
                  <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide">Connecting with People</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">Meeting new people & collaborating with teams</p>
                </div>
                <div className="glass-card p-8 text-center fade-in">
                  <div className="text-5xl mb-6">🎨</div>
                  <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide">Painting</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">Colors, creativity & artistic expression</p>
                </div>
              </div>

              {/* Art Gallery */}
              <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold text-center mb-12 gradient-text">MY ARTWORK</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {[
                    { image: '/assets/pic1.png', title: 'Artwork 1' },
                    { image: '/assets/pic2.png', title: 'Artwork 2' },
                    { image: '/assets/pic3.png', title: 'Artwork 3' },
                    { image: '/assets/pic4.png', title: 'Artwork 4' },
                    { image: '/assets/pic5.png', title: 'Artwork 5' }
                  ].map((artwork, idx) => (
                    <div
                      key={idx}
                      className="fade-in"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <ArtworkCard
                        image={artwork.image}
                        title={artwork.title}
                        index={idx}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT PAGE */}
      {currentPage === 'contact' && (
        <section id="contact" className="min-h-screen section-padding pt-20">
          <div className="container mx-auto px-8 text-center">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">
              LET'S CONNECT
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
              Interested in collaborating, chatting about AI/ML, or just saying hi? Reach out anytime!
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center items-center gap-6 mb-12 flex-wrap">
              <a
                href="mailto:yogavarshni@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-8 hover:scale-110 transition-all duration-300 w-32 h-32 flex flex-col items-center justify-center group"
                title="Email"
              >
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="text-xs font-semibold text-gray-400 group-hover:text-white uppercase tracking-wide">Email</div>
              </a>

              <a
                href="https://www.linkedin.com/in/yogavarshniramachandran/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-8 hover:scale-110 transition-all duration-300 w-32 h-32 flex flex-col items-center justify-center group"
                title="LinkedIn"
              >
                <div className="mb-2 group-hover:scale-125 transition-transform duration-300">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
                </div>
                <div className="text-xs font-semibold text-gray-400 group-hover:text-white uppercase tracking-wide">LinkedIn</div>
              </a>

              <a
                href="https://github.com/Yogavarshni4699"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-8 hover:scale-110 transition-all duration-300 w-32 h-32 flex flex-col items-center justify-center group"
                title="GitHub"
              >
                <div className="mb-2 group-hover:scale-125 transition-transform duration-300">
                  <img src="/icons/github-light.svg" alt="GitHub" className="w-8 h-8" />
                </div>
                <div className="text-xs font-semibold text-gray-400 group-hover:text-white uppercase tracking-wide">GitHub</div>
              </a>
            </div>

            {/* Location */}
            <div className="flex justify-center items-center gap-2 mb-16">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-400 text-sm">San Jose, Bay Area</span>
            </div>

            {/* Feedback Section */}
            <div className="max-w-2xl mx-auto">
              <div className="glass-card p-8 mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                  💬 Recommendations or Comments?
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Have feedback, suggestions, or want to recommend a project for me? Drop a note below!
                </p>

                <form onSubmit={handleFeedbackSubmit}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full mb-4 bg-black/50 border border-white/20 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Email or Phone Number"
                    className="w-full mb-4 bg-black/50 border border-white/20 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent"
                    required
                  />
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Type your feedback, suggestions, or project ideas here..."
                    className="w-full h-32 bg-black/50 border border-white/20 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent resize-none"
                    required
                  />
                  <button
                    type="submit"
                    className="mt-4 px-8 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105"
                  >
                    SEND FEEDBACK
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER - Appears on all pages */}
      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Yogavarshni — Fueled by coffee and curiosity ☕
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App