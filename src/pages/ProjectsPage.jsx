import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import projectsData from '../projectsData.json'

const ProjectsPage = () => {
  const navigate = useNavigate()

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
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* PROJECTS PAGE */}
      <section id="projects" className="min-h-screen section-padding pt-20">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-5xl font-black text-center mb-20 gradient-text">PERSONAL PROJECTS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projectsData.map((project) => (
              <div key={project.id} className="glass-card overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col" onClick={() => handleProjectClick(project.id)}>
                <div className="notion-project-cover">
                  <div className="notion-cover-pattern"></div>
                  <div className="notion-cover-content">
                    <div className="notion-cover-icon">{project.icon || '🚀'}</div>
                    <div className="notion-cover-label">{project.category}</div>
                  </div>
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
    </div>
  )
}

export default ProjectsPage
