import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import './index.css'
import projectsData from './projectsData.json'
import { Badge } from './components/ui/badge'

function App() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState('home')

  const handleProjectClick = (projectId) => {
    if (projectId === 1) {
      navigate('/project/ai-website-generator')
    } else if (projectId === 2) {
      navigate('/project/rag-llm')
    } else if (projectId === 3) {
      navigate('/project/airbnb-analysis')
    } else if (projectId === 4) {
      navigate('/project/bigfoot-analysis')
    } else if (projectId === 5) {
      navigate('/project/customer-churn')
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
        { name: 'Scikit-learn', icon: '/icons/scikit-lean.svg' },
        { name: 'SciPy', icon: null },
        { name: 'PyTorch', icon: '/icons/pytorch.svg' }
      ]
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: 'MySQL', icon: '/icons/mysql.svg' },
        { name: 'Oracle', icon: '/icons/oracle.svg' },
        { name: 'MongoDB', icon: '/icons/mongodb.svg' },
        { name: 'Snowflake', icon: null },
        { name: 'Airflow', icon: '/icons/apache.svg' },
        { name: 'dbt', icon: null },
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
        { name: 'Experimentation & A/B Testing', icon: null }
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
        '✓ Built fraud detection system with 85% precision on 10K+ transactions',
        '✓ Migrated analytics to Power BI analyzing 18+ MySQL tables with DAX queries'
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
        '✓ Built AI-driven interface reducing website build time by 80%',
        '✓ Implemented RAG pipeline fine-tuning GPT-4, Gemini & Claude - improved lighthouse 85% & SEO 90%'
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
        '✓ Web scraped competitor rates from 6+ banks using MySQL, Python & Airflow',
        '✓ Drove 0.85 bps rate increase → 12% CD balance uptick & $800K NII boost',
        '✓ Enhanced forecasting models with customer activity features → 5% accuracy boost'
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
        '✓ AI-Powered Website Generator - Capstone Project',
        '✓ Advanced ML, Deep Learning, NLP & Big Data Technologies',
        '✓ Research in AI-driven web development & natural language processing'
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
        '✓ Built GTM data pipeline integrating Customer Success, Sales, RevOps & Product data',
        '✓ Created automated KPI tracking for 50+ team members → influenced VP roadmap priorities',
        '✓ Delivered self-serve Tableau dashboard → 10% revenue increase via user engagement',
        '✓ Built predictive churn & revenue models (regression, ARIMA) → 90% accuracy on high-value accounts',
        '✓ Analyzed subscriber churn → identified $12.57M at-risk revenue with 15% recovery strategies',
        '✓ Refined dunning strategy via A/B testing → reduced customer calls by 20%'
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
        '✓ Designed ETL pipeline for AT&T → reduced data processing time by 50%',
        '✓ Optimized AWS data warehouse (S3, EC2, Redshift) → 40% query performance boost'
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
        '✓ Oncology & Data Visualization Research Project',
        '✓ 2 years biomedical research experience in cancer studies',
        '✓ Foundation in statistical analysis, probability & computational biology'
      ]
    }
  ]

  const certifications = [
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "Feb 2022",
      credentialId: "I143-8742",
      description: "Demonstrated foundational knowledge of cloud concepts, Azure services, workloads, security, privacy, pricing, and support.",
      skills: "Cloud Computing, Azure Services",
      exam: "AZ-900"
    },
    {
      name: "Lean Six Sigma Green Belt",
      issuer: "Linear Training and Consulting",
      date: "May 2023",
      credentialId: "1374/2013",
      description: "Comprehensive training in process improvement methodologies, statistical analysis, and project management for operational excellence.",
      skills: "Process Improvement, Statistical Analysis"
    },
    {
      name: "Product Analytics Certification",
      issuer: "Pendo.io",
      date: "Jun 2023",
      description: "Advanced certification in product analytics, user behavior analysis, and data-driven product decision making.",
      skills: "Product Analytics"
    },
    {
      name: "Data Modeling",
      issuer: "SQLBI",
      date: "May 2022",
      credentialId: "80427",
      description: "Expertise in advanced data modeling techniques, DAX formulas, and Power BI optimization for enterprise analytics.",
      skills: "Data Modeling, Power BI, DAX"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation onPageChange={setCurrentPage} currentPage={currentPage} />

      {/* HOME PAGE */}
      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center hero-bg py-20">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <div className="floating-animation">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 text-shadow">
              Yogavarshni Ramachandran
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 sm:mb-8"></div>
            <h2 className="text-lg sm:text-xl md:text-3xl text-gray-300 mb-4 font-light tracking-wide">
              DATA SCIENTIST • ML ENGINEER • AI ENGINEER
            </h2>

            {/* Open to Work Badge */}
            <div className="flex justify-center mt-8 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <p className="text-white text-sm font-semibold tracking-wide">Open to Work</p>
              </div>
            </div>

            {/* Two Column Layout - Photos & About Me */}
            <div className="mt-20 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-6xl mx-auto">
              {/* Left Column - Journey Photos and Stats */}
              <div className="fade-in order-2 lg:order-1">
                <div className="text-center mb-10">
                  {/* Journey Photos */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-300 mb-6">MY JOURNEY</h3>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      {/* BioEngineering */}
                      <div className="text-center">
                        <img
                          src="/assets/Labss.png"
                          alt="BioEngineering"
                          className="profile-image w-48 sm:w-72 h-64 sm:h-96 object-cover mx-auto mb-3"
                        />
                        <p className="text-xs text-gray-400 uppercase tracking-wide">BioEngineering</p>
                      </div>

                      {/* Arrow */}
                      <div className="text-2xl sm:text-3xl text-gray-400 transform rotate-90 sm:rotate-0">→</div>

                      {/* Data Science Photo */}
                      <div className="text-center">
                        <img
                          src="/assets/Mine.png"
                          alt="Data Scientist"
                          className="profile-image w-48 sm:w-72 h-64 sm:h-96 object-cover mx-auto mb-3"
                        />
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Data Scientist</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="glass-card p-6 sm:p-8 text-center">
                      <div className="text-5xl sm:text-6xl font-black mb-3 text-white">4+</div>
                      <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">Years Experience</div>
                    </div>
                    <div className="glass-card p-6 sm:p-8 text-center">
                      <div className="text-5xl sm:text-6xl font-black mb-3 text-white">10+</div>
                      <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Story and About */}
              <div className="fade-in order-1 lg:order-2">
                <h2 className="text-4xl font-black mb-8 gradient-text">ABOUT ME</h2>
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

                <p className="text-gray-300 mb-6 leading-relaxed font-light">
                  My journey has been driven by curiosity, exploring data science from pipelines to models to business insights. Outside of work, I enjoy painting and conversations that spark creativity.
                </p>

                <div className="flex justify-center items-center gap-4 mt-8">
                  {/* PDF Resume */}
                  <a
                    href="/Resume.pdf"
                    className="transform -rotate-12 hover:rotate-0 transition-all duration-300 hover:scale-110 glass-card p-6 hover:z-10 relative group"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Download Resume"
                  >
                    <div className="text-4xl text-red-400 group-hover:text-red-300">PDF</div>
                    <div className="text-xs text-gray-400 text-center mt-2 font-medium">RESUME</div>
                  </a>

                  {/* Notion Portfolio */}
                  <a
                    href="https://www.notion.so/your-notion-page"
                    className="transform rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-110 glass-card p-6 hover:z-10 relative group -ml-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Notion Portfolio"
                  >
                    <div className="text-4xl text-gray-300 group-hover:text-white">📓</div>
                    <div className="text-xs text-gray-400 text-center mt-2 font-medium">NOTION</div>
                  </a>

                  {/* GitHub Profile */}
                  <a
                    href="https://github.com/Yogavarshni4699"
                    className="transform -rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-110 glass-card p-6 hover:z-10 relative group -ml-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Profile"
                  >
                    <div className="text-4xl text-gray-300 group-hover:text-white">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div className="text-xs text-gray-400 text-center mt-2 font-medium">GITHUB</div>
                  </a>
                </div>

                {/* Explore Journey Button */}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary px-8 py-3 font-semibold text-sm"
                  >
                    Explore My Journey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 gradient-text">FEATURED PROJECTS</h3>
            <p className="text-gray-400 mb-8 text-base">Scroll horizontally to explore →</p>
          </div>

          <div className="horizontal-scroll-container">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card project-card-horizontal glass-card overflow-hidden cursor-pointer" onClick={() => handleProjectClick(project.id)}>
                <div className="notion-project-cover">
                  <div className="notion-cover-pattern"></div>
                  <div className="notion-cover-content">
                    <div className="notion-cover-icon">{project.icon || '🚀'}</div>
                    <div className="notion-cover-label">{project.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tools.slice(0, 4).map((tech, index) => (
                      <span key={index} className="notion-tech-badge">{tech}</span>
                    ))}
                    {project.tools.length > 4 && (
                      <span className="notion-tech-badge">+{project.tools.length - 4}</span>
                    )}
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{project.date}</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full">{project.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <div id="contact" className="mt-20 text-center py-12 border-t border-white/10">
        <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Connect & Collaborate
        </h3>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge
            variant="outline"
            className="px-6 py-3 cursor-pointer hover:bg-white/10 border-purple-400 text-purple-300 text-base"
          >
            📧 yogavarshni@gmail.com
          </Badge>
          <Badge
            variant="outline"
            className="px-6 py-3 cursor-pointer hover:bg-white/10 border-blue-400 text-blue-300 text-base"
          >
            💼 LinkedIn
          </Badge>
          <Badge
            variant="outline"
            className="px-6 py-3 cursor-pointer hover:bg-white/10 border-pink-400 text-pink-300 text-base"
          >
            🐙 GitHub
          </Badge>
        </div>
      </div>
        </>
      )}

      {/* EXPERIENCE PAGE */}
      {currentPage === 'experience' && (
        <section id="experience" className="min-h-screen section-padding pt-20">
          <div className="container mx-auto px-8">
            <h2 className="text-5xl font-black text-center mb-20 gradient-text">MY JOURNEY</h2>
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
                          <li key={i} className="text-gray-400 flex items-start font-light">
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

      {/* PROJECTS PAGE */}
      {currentPage === 'projects' && (
        <section id="projects" className="min-h-screen section-padding pt-20">
          <div className="container mx-auto px-8">
            <h2 className="text-5xl font-black text-center mb-12 gradient-text">FEATURED PROJECTS</h2>
            <p className="text-center text-gray-400 mb-8">Scroll horizontally to explore all projects →</p>
            <div className="horizontal-scroll-container">
              {projectsData.map((project) => (
                <div key={project.id} className="project-card project-card-horizontal glass-card overflow-hidden cursor-pointer" onClick={() => handleProjectClick(project.id)}>
                  <div className="notion-project-cover">
                    <div className="notion-cover-pattern"></div>
                    <div className="notion-cover-content">
                      <div className="notion-cover-icon">{project.icon || '🚀'}</div>
                      <div className="notion-cover-label">{project.category}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tools.slice(0, 4).map((tech, index) => (
                        <span key={index} className="notion-tech-badge">{tech}</span>
                      ))}
                      {project.tools.length > 4 && (
                        <span className="notion-tech-badge">+{project.tools.length - 4}</span>
                      )}
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500">
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

      {/* SKILLS PAGE */}
      {currentPage === 'skills' && (
        <section id="skills" className="min-h-screen section-padding pt-20">
          <div className="container mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-10 sm:mb-20 gradient-text">TECHNICAL EXPERTISE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {skillCategories.map((category, index) => (
                <div key={index} className="glass-card p-4 sm:p-6 fade-in hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="text-2xl sm:text-3xl mb-2">{category.icon}</div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{category.category}</h4>
                    <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent mt-3 opacity-30"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 group">
                        {skill.icon && (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-5 h-5 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                          />
                        )}
                        <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ACTIVITIES PAGE */}
      {currentPage === 'activities' && (
        <section id="activities" className="min-h-screen section-padding pt-20">
          <div className="container mx-auto px-8">
            <h2 className="text-5xl font-black text-center mb-20 gradient-text">ACTIVITIES</h2>

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
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {['pic1.png', 'pic2.png', 'pic3.png', 'pic4.png', 'pic5.png'].map((pic, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded-lg overflow-hidden hover:scale-110 transition-transform cursor-pointer"
                      style={{
                        animationDelay: `${idx * 100}ms`,
                        backgroundImage: `url(/assets/${pic})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '2px solid rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT PAGE */}
      {currentPage === 'contact' && (
        <section id="contact" className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center py-12">
            <h3 className="text-5xl font-black mb-12 gradient-text">
              Let's Connect & Collaborate
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge
                variant="outline"
                className="px-6 py-3 cursor-pointer hover:bg-white/10 border-purple-400 text-purple-300 text-base"
              >
                📧 yogavarshni@gmail.com
              </Badge>
              <Badge
                variant="outline"
                className="px-6 py-3 cursor-pointer hover:bg-white/10 border-blue-400 text-blue-300 text-base"
              >
                💼 LinkedIn
              </Badge>
              <Badge
                variant="outline"
                className="px-6 py-3 cursor-pointer hover:bg-white/10 border-pink-400 text-pink-300 text-base"
              >
                🐙 GitHub
              </Badge>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default App