import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const BedtimeStoryProject = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Back Button */}
          <button
            onClick={() => navigate('/projects')}
            className="mb-8 inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300 group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform duration-300">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span className="text-lg font-semibold">Back to Projects</span>
          </button>

          {/* Header */}
          <div className="mb-12">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-3">AI Bedtime Story Generator</h1>
              <p className="text-xl text-gray-300">An intelligent storytelling application that generates, evaluates, and refines bedtime stories for children aged 5-10 using AI agents</p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-400">Done</span>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400">October 15, 2025</span>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400">AI & Agents</span>
            </div>

            <div className="flex gap-4 mb-8">
              <a href="https://bedtime-story-frontend-6ebk.onrender.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-colors">
                Use the App
              </a>
              <a href="https://github.com/Yogavarshni4699/Bed_Time_Story_Generator" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                GitHub
              </a>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="flex flex-wrap gap-4 bg-transparent mb-8 border-0 justify-start">
                <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Overview</TabsTrigger>
                <TabsTrigger value="architecture" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Architecture</TabsTrigger>
                <TabsTrigger value="workflow" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">How It Works</TabsTrigger>
                <TabsTrigger value="features" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Features</TabsTrigger>
                <TabsTrigger value="evaluation" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Evaluation Metrics</TabsTrigger>
              </TabsList>

              {/* Tab Content */}
              <div className="min-h-96">
                {/* Overview Tab */}
                <TabsContent value="overview">
                  <div>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Introduction</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        The AI Bedtime Story Generator is an intelligent storytelling application designed to create engaging, age-appropriate bedtime stories for children aged 5-10. The system implements a sophisticated multi-agent AI architecture where a storyteller agent creates narratives and a judge agent evaluates quality, enabling automatic improvement cycles to ensure each story meets high standards of creativity, safety, and educational value.
                      </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Project Goals</h3>
                        <p className="text-gray-300 mb-4">Build an intelligent multi-agent system that automatically generates, evaluates, and refines high-quality bedtime stories with minimal user intervention while ensuring age-appropriateness, safety, and educational value.</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Key Features</h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">✓</span>
                            Multi-agent AI collaboration (Storyteller + Judge)
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">✓</span>
                            Automatic story refinement based on evaluation
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">✓</span>
                            User feedback integration for revisions
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">✓</span>
                            Interactive chat interface with real-time metrics
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "React", "Next.js", "Flask", "OpenAI", "Prompt Engineering", "Multi-Agent Systems"].map((tool, index) => (
                          <Badge key={index} className="bg-blue-500/20 text-blue-300 border-blue-500/30">{tool}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Architecture Tab */}
                <TabsContent value="architecture">
                  <div>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">System Architecture</h3>
                      <div className="space-y-6">
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <div className="text-lg font-bold text-white mb-2">Backend (Python/Flask)</div>
                          <div className="text-gray-300">
                            <p className="mb-2">RESTful API server built with Flask framework handling story generation, evaluation, and revision workflows:</p>
                            <ul className="ml-6 space-y-1">
                              <li>• Storyteller Agent: Generates age-appropriate narratives with controllable quality modes</li>
                              <li>• Judge Agent: Evaluates stories on 5 binary metrics</li>
                              <li>• API Endpoints: For generation, evaluation, and revision</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <div className="text-lg font-bold text-white mb-2">Frontend (Next.js/React)</div>
                          <div className="text-gray-300">
                            <p className="mb-2">Interactive user interface with modern React components:</p>
                            <ul className="ml-6 space-y-1">
                              <li>• Chat-style conversation interface</li>
                              <li>• Real-time evaluation metrics display</li>
                              <li>• Workflow visualization</li>
                              <li>• Responsive design for all devices</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <div className="text-lg font-bold text-white mb-2">AI Model</div>
                          <div className="text-gray-300">OpenAI GPT-3.5-turbo powering both the Storyteller and Judge agents with specialized prompt engineering for each role</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <div className="text-lg font-bold text-white mb-2">Deployment</div>
                          <div className="text-gray-300">Deployed on Render platform with GitHub Actions CI/CD pipeline for automated deployment and continuous integration</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">System Diagram</h3>
                      <div className="bg-white rounded-lg p-4">
                        <img
                          src="/assets/storyarch.png"
                          alt="Story Generation Workflow Diagram"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Workflow Tab */}
                <TabsContent value="workflow">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Story Generation Workflow</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      The system follows an iterative workflow that ensures high-quality story generation through automatic evaluation and refinement cycles.
                    </p>
                    <div className="space-y-6">
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                          <div className="text-xl font-bold text-white">User Prompt</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          User enters a story prompt through the interactive chat interface (e.g., "A friendly rabbit who learns to share toys with friends")
                        </div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                          <div className="text-xl font-bold text-white">Storyteller Generates Story V1</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          The Storyteller Agent creates an initial story (Story V1) based on the user prompt using GPT-3.5-turbo with specialized prompts for age-appropriate content
                        </div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                          <div className="text-xl font-bold text-white">Judge Evaluates Story V1</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          Judge Agent evaluates Story V1 on 5 binary metrics (age suitability, prompt relevance, moral coherence, creativity, safety) and provides detailed feedback with improvement suggestions
                        </div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                          <div className="text-xl font-bold text-white">Automatic Refinement (Story V2)</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          Based on Judge feedback, the Storyteller automatically creates Story V2 (auto-refined version) addressing all identified issues
                        </div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">5</div>
                          <div className="text-xl font-bold text-white">Display to User</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          Story V2 is displayed to the user along with evaluation metrics and judge decision (✅ Approved or ⚠️ Needs revision)
                        </div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">6</div>
                          <div className="text-xl font-bold text-white">Optional User Feedback</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          Users can optionally provide additional feedback for further customization (e.g., "Make it more exciting" or "Add a dragon character")
                        </div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">7</div>
                          <div className="text-xl font-bold text-white">User-Revised Story (Story V3)</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          If user feedback is provided, Storyteller creates Story V3 incorporating the user's suggestions while maintaining quality standards
                        </div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">8</div>
                          <div className="text-xl font-bold text-white">Final Story Delivered</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          Judge performs final re-evaluation, and the approved story is delivered with complete evaluation results and metrics
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Features Tab */}
                <TabsContent value="features">
                  <div>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Key Features</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                        <div className="text-xl font-bold text-white mb-3">🤖 AI Storyteller Agent</div>
                        <div className="text-gray-300">
                          Creates engaging, age-appropriate bedtime stories using GPT-3.5-turbo with specialized prompt engineering. Supports controllable quality modes for testing and development.
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                        <div className="text-xl font-bold text-white mb-3">⚖️ AI Judge Agent</div>
                        <div className="text-gray-300">
                          Evaluates stories on multiple metrics with specific improvement suggestions. Provides binary decisions on 5 key quality dimensions with detailed feedback.
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                        <div className="text-xl font-bold text-white mb-3">🔄 Automatic Refinement</div>
                        <div className="text-gray-300">
                          Stories are automatically improved based on judge feedback without user intervention, ensuring high quality through iterative improvement cycles.
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border border-pink-500/30 rounded-lg p-6">
                        <div className="text-xl font-bold text-white mb-3">💬 User Feedback Loop</div>
                        <div className="text-gray-300">
                          Users can provide additional feedback for further revisions, allowing for personalized story customization beyond automated refinement.
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-lg p-6">
                        <div className="text-xl font-bold text-white mb-3">🎭 Multi-Agent System</div>
                        <div className="text-gray-300">
                          Storyteller and Judge agents work together in a collaborative workflow to create perfect stories, demonstrating advanced multi-agent coordination.
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-lg p-6">
                        <div className="text-xl font-bold text-white mb-3">💻 Interactive Interface</div>
                        <div className="text-gray-300">
                          User-friendly chat-style interaction with real-time feedback display, workflow visualization, and responsive design for all devices.
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800/30 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-white mb-4">Technical Capabilities</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <span className="text-green-400 mr-3 mt-1">✓</span>
                          <div className="text-gray-300">RESTful API for generation, evaluation, and revision</div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-400 mr-3 mt-1">✓</span>
                          <div className="text-gray-300">Specialized prompt engineering for both agents</div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-400 mr-3 mt-1">✓</span>
                          <div className="text-gray-300">Real-time evaluation metrics visualization</div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-400 mr-3 mt-1">✓</span>
                          <div className="text-gray-300">Automated deployment with GitHub Actions CI/CD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Evaluation Metrics Tab */}
                <TabsContent value="evaluation">
                  <div>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Judge Evaluation Metrics</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        Stories are evaluated on 5 binary metrics to ensure comprehensive quality assessment. Each metric must pass for the story to be approved.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                        <div className="text-2xl mb-3">✅</div>
                        <div className="text-xl font-bold text-white mb-2">Age Suitability</div>
                        <div className="text-gray-300 text-sm">
                          Evaluates if the story uses simple words, gentle tone, and age-appropriate concepts suitable for children aged 5-10
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                        <div className="text-2xl mb-3">✅</div>
                        <div className="text-xl font-bold text-white mb-2">Relevance to Prompt</div>
                        <div className="text-gray-300 text-sm">
                          Checks if the generated story accurately matches the user's request and includes requested elements
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border border-pink-500/30 rounded-lg p-6">
                        <div className="text-2xl mb-3">✅</div>
                        <div className="text-xl font-bold text-white mb-2">Moral Coherence</div>
                        <div className="text-gray-300 text-sm">
                          Ensures the story has a clear, positive moral lesson that's appropriate and educational for children
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                        <div className="text-2xl mb-3">✅</div>
                        <div className="text-xl font-bold text-white mb-2">Creativity</div>
                        <div className="text-gray-300 text-sm">
                          Assesses whether the story is imaginative, engaging, and captures children's interest with creative elements
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-lg p-6">
                        <div className="text-2xl mb-3">✅</div>
                        <div className="text-xl font-bold text-white mb-2">Safety</div>
                        <div className="text-gray-300 text-sm">
                          Verifies that the story contains no inappropriate content, violence, or scary elements unsuitable for bedtime
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-lg p-6">
                        <div className="text-2xl mb-3">⚖️</div>
                        <div className="text-xl font-bold text-white mb-2">Final Decision</div>
                        <div className="text-gray-300 text-sm">
                          ✅ Approved (all metrics pass) or ⚠️ Needs revision (any metric fails with specific feedback)
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800/30 rounded-lg p-6 mb-8">
                      <h4 className="text-lg font-bold text-white mb-4">Evaluation Process</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">→</span>
                          <div>
                            <div className="text-white font-semibold">Binary Assessment</div>
                            <div className="text-gray-300 text-sm">Each metric receives a binary score (pass/fail) ensuring clear quality thresholds</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">→</span>
                          <div>
                            <div className="text-white font-semibold">Detailed Feedback</div>
                            <div className="text-gray-300 text-sm">Judge provides specific improvement suggestions for any failing metrics</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">→</span>
                          <div>
                            <div className="text-white font-semibold">Iterative Improvement</div>
                            <div className="text-gray-300 text-sm">Feedback is automatically incorporated into the next story version</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-4">Example Test Cases</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="text-green-400 font-semibold mb-1">✓ Good Story Prompt</div>
                          <div className="text-gray-300 text-sm">"A friendly rabbit who learns to share toys with friends" - Expected to pass all metrics</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold mb-1">✓ Creative Prompt</div>
                          <div className="text-gray-300 text-sm">"A magical dragon who becomes friends with a brave little girl" - Tests creativity and engagement</div>
                        </div>
                        <div>
                          <div className="text-yellow-400 font-semibold mb-1">⚠️ Vague Prompt</div>
                          <div className="text-gray-300 text-sm">"Tell me something nice" - May fail relevance metric due to lack of specific direction</div>
                        </div>
                        <div>
                          <div className="text-red-400 font-semibold mb-1">✗ Too Complex</div>
                          <div className="text-gray-300 text-sm">"A philosophical exploration of quantum mechanics" - Expected to fail age suitability metric</div>
                        </div>
                      </div>
                    </div>
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

export default BedtimeStoryProject
