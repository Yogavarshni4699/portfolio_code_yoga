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
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">🤖</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-3">AI-Powered Website Generator</h1>
                <p className="text-xl text-gray-300">AI-Generated Model for multi-page website creation using natural language</p>
              </div>
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
                  <div className="flex gap-3">
                    <a href="https://www.notion.so/AI-Powered-Website-Generator-16a5280b487b80f9990beec63f60217e" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                      Notion
                    </a>
                    <a href="https://drive.google.com/drive/folders/1_UpChBGoxp6XY5m2t3WruSMBmpVQiQUT?dmr=1&ec=wgc-drive-globalnav-goto" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                      Demo
                    </a>
                    <a href="https://github.com/Yogavarshni4699/AI-Powered-Website-Generator" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/5 mb-8">
                <TabsTrigger value="overview">📋 Overview</TabsTrigger>
                <TabsTrigger value="methodology">🔬 Methodology</TabsTrigger>
                <TabsTrigger value="results">📊 Results</TabsTrigger>
                <TabsTrigger value="images">🖼️ Gallery</TabsTrigger>
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

                {/* Add other tabs content here - truncated for space */}
                <TabsContent value="methodology">
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">System Architecture</h3>
                    <p className="text-gray-300 leading-relaxed">
                      The system features a React frontend that collects key inputs from users—such as company name, industry domain, and desired website features. These inputs are sent to a FastAPI backend, which retrieves and matches pre-extracted HTML templates gathered from 500+ B2B SaaS websites. The backend then constructs structured prompts from these inputs and feeds them into fine-tuned Large Language Models (LLMs)—including Claude, Gemini, and GPT to generate tailored content and structure.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="results">
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Key Results</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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