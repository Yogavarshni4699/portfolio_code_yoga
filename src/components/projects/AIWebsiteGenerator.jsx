import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const AIWebsiteGenerator = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const mediaAssets = [
    {
      src: "/assets/P1.png",
      title: "ETL Pipeline",
      description: "Data extraction, transformation, and loading process for website templates",
      type: "ETL"
    },
    {
      src: "/assets/P2.png",
      title: "System Flow",
      description: "End-to-end system workflow from user prompt to generated website",
      type: "System Flow"
    },
    {
      src: "/assets/P3.png",
      title: "Prompt Engineering",
      description: "LLM prompt optimization and implementation approach",
      type: "Prompt"
    },
    {
      src: "/assets/P4.png",
      title: "Generated Website",
      description: "AI-generated SaaS landing page showcasing platform capabilities",
      type: "Generated Website"
    },
    {
      src: "/assets/P5.png",
      title: "Perplexity Score Analysis",
      description: "Model confidence comparison across GPT-4, Claude, and Gemini",
      type: "Analysis Metrics"
    },
    {
      src: "/assets/P6.png",
      title: "Token Usage Analysis",
      description: "Token efficiency and cost comparison between LLM models",
      type: "Analysis Metrics"
    },
    {
      src: "/assets/P7.png",
      title: "Human Feedback Results",
      description: "User preference evaluation and quality assessment metrics",
      type: "Analysis Metrics"
    },
    {
      src: "/assets/P8.png",
      title: "Poster Board",
      description: "Academic research poster presentation summarizing key findings",
      type: "Poster Board"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-3">AI-Powered Website Generator</h1>
              <p className="text-xl text-gray-300">AI-Generated Model for multi-page website creation using natural language</p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-yellow-500/20 text-yellow-400">In Progress</span>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400">May 11, 2025</span>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400">AI & Machine Learning</span>
            </div>

            <Card className="bg-white/5 border-white/10 mb-8">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-lg font-bold text-white mb-2">Applied Data Science Department</div>
                    <div className="text-gray-400">Project Advisor: <span className="text-white">Dr. Simon Shim</span></div>
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    <a href="https://www.notion.so/AI-Powered-Website-Generator-16a5280b487b80f9990beec63f60217e" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
                      Notion
                    </a>
                    <a href="https://drive.google.com/drive/folders/1_UpChBGoxp6XY5m2t3WruSMBmpVQiQUT?dmr=1&ec=wgc-drive-globalnav-goto" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
                      Demo
                    </a>
                    <a href="https://github.com/Yogavarshni4699/AI-Powered-Website-Generator" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
                      GitHub
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="flex flex-wrap gap-4 bg-transparent mb-8 border-0 justify-start">
                <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Project Overview</TabsTrigger>
                <TabsTrigger value="methodology" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Methodology</TabsTrigger>
                <TabsTrigger value="results" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Analysis Metrics</TabsTrigger>
                <TabsTrigger value="images" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">ETL, System Flow, Prompt, Website (8)</TabsTrigger>
              </TabsList>

              {/* Tab Content */}
              <div className="min-h-96">
                {/* Overview Tab */}
                <TabsContent value="overview">
                  <div>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Introduction</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Creating modern, responsive websites is a recurring challenge for early-stage B2B SaaS startups due to limited resources and time constraints. Traditional web development requires manual effort in design, content creation, and coding - often delaying MVP launches. This project introduces an AI-powered website generator that leverages Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) to automate website creation from a single user prompt. The solution delivers tailored, industry-relevant SaaS landing pages in under 30 seconds.
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Data Pipeline Process</h3>
                      <p className="text-gray-300 mb-4">As part of the data pipeline:</p>
                      <ul className="space-y-2">
                        <li className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          Scraped 500+ B2B SaaS websites using JavaScript-based automation tools
                        </li>
                        <li className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          Raw HTML/CSS data was stored in Google Drive
                        </li>
                        <li className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          ETL pipeline was built using AWS to extract, transform, and load structured HTML/CSS components
                        </li>
                        <li className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          Cleaned and reusable templates were pushed back to Google Drive, organized by industry and layout type
                        </li>
                      </ul>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Problem Statement</h3>
                        <p className="text-gray-300 mb-4">High cost of traditional web development services and technical barriers for freelancers, startups, and small-scale businesses.</p>
                        <h4 className="text-lg font-bold text-white mb-3">Current Market Challenges:</h4>
                        <ul className="space-y-2">
                          <li className="text-gray-300 flex items-start">
                            <span className="text-red-400 mr-3 mt-1">⚠</span>
                            Web development costs hinder small companies
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-red-400 mr-3 mt-1">⚠</span>
                            Difficulty in creating multi-page websites without developer expertise
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-red-400 mr-3 mt-1">⚠</span>
                            The increasing importance of online presence for business growth and customer engagement
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-red-400 mr-3 mt-1">⚠</span>
                            Growing need for efficient, low-resource solutions for establishing a web presence
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solution Overview</h3>
                        <p className="text-gray-300 mb-4">AI-generated model for multi-page website creation using GPT-4, LLaMA 2, PaLM, and Gemini to automate web development without requiring developers.</p>
                        <h4 className="text-lg font-bold text-white mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">✓</span>
                            Generates fully customizable websites
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">✓</span>
                            Industry-specific template matching
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">✓</span>
                            Multi-page website support
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">✓</span>
                            Automated content generation
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {["B2B", "SaaS", "Python", "React", "FastAPI", "MongoDB", "AWS", "GPT-4", "Claude", "Gemini"].map((tool, index) => (
                          <Badge key={index} className="bg-blue-500/20 text-blue-300 border-blue-500/30">{tool}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="methodology">
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Project Requirements</h3>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Functional Requirements</h4>
                        <ul className="space-y-2 mb-6">
                          <li className="text-gray-300 flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            User Input Interface
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            Content Update System
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            Template and Theme Customization
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            Performance Measurement
                          </li>
                        </ul>

                        <h4 className="text-lg font-bold text-white mb-3">Data Requirements</h4>
                        <ul className="space-y-2">
                          <li className="text-gray-300 flex items-start">
                            <span className="text-purple-400 mr-3 mt-1">•</span>
                            Website data for training and templates
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-purple-400 mr-3 mt-1">•</span>
                            User input data for personalization
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">AI-Powered Requirements</h4>
                        <ul className="space-y-2">
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">•</span>
                            AI-Based Content Generation using GPT-4
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">•</span>
                            AI for Code and Structure Generation using Claude and Gemini (clean HTML, CSS, and JavaScript)
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">•</span>
                            AI for Personalization - layouts and user experience enhancements
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">•</span>
                            AI for Performance Optimization - Lighthouse score improvement
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">•</span>
                            AI for Dynamic Updates
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">System Architecture</h3>
                      <p className="text-gray-300 mb-4">
                        The system features a React frontend that collects key inputs from users—such as company name, industry domain, and desired website features. These inputs are sent to a FastAPI backend, which retrieves and matches pre-extracted HTML templates gathered from 500+ B2B SaaS websites. The backend then constructs structured prompts from these inputs and feeds them into fine-tuned Large Language Models (LLMs)—including Claude, Gemini, and GPT to generate tailored content and structure. The generated websites are dynamically rendered by injecting this content into relevant templates. The finalized templates are then stored in MongoDB for version control, user history, and future reuse. This workflow ensures that users receive instantly deployable, industry-ready websites without writing any code.
                      </p>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Key Challenges</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/30 rounded-lg p-6">
                          <div className="text-lg font-bold text-white mb-3">Data Accuracy & JSON Consistency</div>
                          <div className="text-gray-300">Ensuring the scraped data is accurate and that all JSON elements are correctly structured for consistent processing</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-6">
                          <div className="text-lg font-bold text-white mb-3">Placeholder Misalignment</div>
                          <div className="text-gray-300">LLMs may miss or incorrectly fill placeholders, leading to broken layouts or empty sections</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-6">
                          <div className="text-lg font-bold text-white mb-3">Layout-Content Mismatch</div>
                          <div className="text-gray-300">Generated content may not align with the design — either too verbose or too sparse — impacting visual balance and readability</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-6">
                          <div className="text-lg font-bold text-white mb-3">Content Repetition</div>
                          <div className="text-gray-300">LLMs might generate repetitive or generic copy across sections or websites, reducing uniqueness and SEO value</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-6">
                          <div className="text-lg font-bold text-white mb-3">Performance & Cost Overhead</div>
                          <div className="text-gray-300">Large HTML generations with context-rich prompts increase token consumption, latency, and OpenAI API costs</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-6">
                          <div className="text-lg font-bold text-white mb-3">Image Generation Limitations</div>
                          <div className="text-gray-300">Current models lack precision in generating specific, brand-aligned images — requiring better integration or fallback assets</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="results">
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Perplexity Score Analysis</h3>
                    <p className="text-gray-300 mb-4">Perplexity is a metric used to measure how well a language model predicts a sample of text. It reflects the model's confidence in its predictions.</p>
                    <h4 className="text-lg font-bold text-white mb-3">Key Findings:</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        Lower Perplexity = Better performance (more confident predictions)
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        Higher Perplexity = Worse performance (less confident, more 'surprised' by the data)
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        Claude Sonnet achieved the lowest perplexity score, indicating the most confident predictions and highest language understanding
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        Gemini followed with solid performance, outperforming Claude Haiku and OpenAI GPT
                      </li>
                    </ul>

                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Human Feedback Results</h3>
                      <p className="text-gray-300 mb-4">Human evaluators assessed which model generated the most natural, relevant, and high-quality content for websites:</p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                          <div className="text-white font-bold mb-2">Claude 3 Haiku</div>
                          <div className="text-2xl font-black text-green-400">36.8%</div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                          <div className="text-white font-bold mb-2">Gemini</div>
                          <div className="text-2xl font-black text-green-400">26.3%</div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                          <div className="text-white font-bold mb-2">Claude Sonnet</div>
                          <div className="text-2xl font-black text-green-400">21.1%</div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                          <div className="text-white font-bold mb-2">OpenAI</div>
                          <div className="text-2xl font-black text-green-400">15.8%</div>
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-3">Key Insights:</h4>
                      <ul className="space-y-2">
                        <li className="text-gray-300 flex items-start">
                          <span className="text-yellow-400 mr-3 mt-1">•</span>
                          Claude 3 Haiku stood out as the top choice, preferred by over one-third of participants
                        </li>
                        <li className="text-gray-300 flex items-start">
                          <span className="text-yellow-400 mr-3 mt-1">•</span>
                          Gemini followed closely, indicating solid performance in generating natural, relevant content
                        </li>
                        <li className="text-gray-300 flex items-start">
                          <span className="text-yellow-400 mr-3 mt-1">•</span>
                          Claude Sonnet, despite strong technical metrics, ranked lower in visual appeal
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Conclusion & Impact</h3>
                      <p className="text-gray-300 mb-6 text-lg">The AI-powered website generator successfully enables non-developers to create industry-specific, multi-page websites using simple natural language input.</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            <li className="text-gray-300 flex items-start">
                              <span className="text-green-400 mr-3 mt-1">✓</span>
                              Effective Use of LLMs: Leveraged GPT-4, Claude Sonnet, Claude, and Gemini for high-quality, context-aware content generation
                            </li>
                            <li className="text-gray-300 flex items-start">
                              <span className="text-green-400 mr-3 mt-1">✓</span>
                              System Efficiency: Combined structured templates and real-time API pipelines to streamline web development
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3">Future Scope</h4>
                          <ul className="space-y-2">
                            <li className="text-gray-300 flex items-start">
                              <span className="text-blue-400 mr-3 mt-1">→</span>
                              Introduce user feedback loops and editable design previews to refine generated websites dynamically
                            </li>
                            <li className="text-gray-300 flex items-start">
                              <span className="text-blue-400 mr-3 mt-1">→</span>
                              Expand to multilingual generation, multi-page, accessible design, and broader industry templates
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="images">
                  <div className="grid md:grid-cols-2 gap-6">
                    {mediaAssets.map((image, index) => (
                      <Card key={index} className="bg-white/5 border-white/10 overflow-hidden">
                        <CardContent className="p-0">
                          <div className="w-full h-80 bg-gray-900 flex items-center justify-center overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <div className="text-lg font-bold text-white mb-2">{image.title}</div>
                            <div className="text-gray-300 text-sm mb-3">{image.description}</div>
                            <Badge className="bg-blue-500/20 text-blue-400 text-xs">{image.type}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIWebsiteGenerator