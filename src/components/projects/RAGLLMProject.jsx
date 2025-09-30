import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const RAGLLMProject = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">📚</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-3">RAG LLM with Langchain</h1>
                <p className="text-xl text-gray-300">Retrieval-Augmented Generation system for PDF document querying</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-400">Done</span>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400">December 5, 2024</span>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400">AI & Machine Learning</span>
            </div>

            <div className="flex gap-4 mb-8">
              <a href="https://www.notion.so/RAG-LLM-with-Langchain-24c658ee4bf0434892de704c59e0f2d3" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                Notion
              </a>
              <a href="https://github.com/Yogavarshni4699/RAG-LLM/tree/main" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                GitHub
              </a>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/5 mb-8">
                <TabsTrigger value="overview">📋 Overview</TabsTrigger>
                <TabsTrigger value="architecture">🏢 Architecture</TabsTrigger>
                <TabsTrigger value="methodology">🔬 Design Process</TabsTrigger>
                <TabsTrigger value="challenges">⚠️ Challenges</TabsTrigger>
              </TabsList>

              {/* Tab Content */}
              <div className="min-h-96">
                {/* Overview Tab */}
                <TabsContent value="overview">
                  <div>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Introduction</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        This project implements a Retrieval-Augmented Generation (RAG) system using LangChain, ChromaDB, and Ollama's local LLMs to answer user queries with high precision and relevancy. The system consumes PDF documents and allows users to ask questions based on the uploaded content, combining the power of document retrieval with large language models for accurate, context-aware responses.
                      </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Project Goals</h3>
                        <p className="text-gray-300 mb-4">Build a robust RAG system for PDF document querying with high accuracy and privacy-focused local processing.</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Key Features</h3>
                        <ul className="space-y-2">
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">✓</span>
                            PDF document ingestion and processing
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">✓</span>
                            Semantic search with vector embeddings
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">✓</span>
                            Context-aware question answering
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">✓</span>
                            Local LLM processing for privacy
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "LangChain", "ChromaDB", "Ollama", "llama3.2", "PyMuPDF", "ROUGE", "Jupyter"].map((tool, index) => (
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
                          <div className="text-lg font-bold text-white mb-2">LLM</div>
                          <div className="text-gray-300">llama3.2 - A lightweight, local language model optimized for contextual understanding and text generation</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <div className="text-lg font-bold text-white mb-2">Vector Database</div>
                          <div className="text-gray-300">ChromaDB - Vector database designed for high-performance similarity-based search</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <div className="text-lg font-bold text-white mb-2">Embeddings</div>
                          <div className="text-gray-300">nomic-embed-text by Ollama - Precise and fast compatible embeddings for the RAG pipeline</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <div className="text-lg font-bold text-white mb-2">PDF Loader</div>
                          <div className="text-gray-300">PyMuPDFLoader - Fast PDF content extraction and processing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Methodology Tab */}
                <TabsContent value="methodology">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Design Process</h3>
                    <div className="space-y-6">
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                          <div className="text-xl font-bold text-white">Data Ingestion</div>
                        </div>
                        <div className="text-gray-300 ml-12">Extract text from PDFs using PyMuPDFLoader, converting content into processable format while preserving context and formatting</div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                          <div className="text-xl font-bold text-white">Text Splitting</div>
                        </div>
                        <div className="text-gray-300 ml-12">Preprocess extracted text with RecursiveCharacterTextSplitter into 1000-character chunks with 200-character overlap to maintain context</div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                          <div className="text-xl font-bold text-white">Embedding Generation</div>
                        </div>
                        <div className="text-gray-300 ml-12">Vectorize text chunks using nomic-embed-text model from Ollama for precise and fast embeddings compatible with the RAG pipeline</div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                          <div className="text-xl font-bold text-white">Vector Database and Retrieval</div>
                        </div>
                        <div className="text-gray-300 ml-12">Store embeddings in ChromaDB and use MultiQueryRetriever to generate query variations for optimal chunk retrieval</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Challenges Tab */}
                <TabsContent value="challenges">
                  <div>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technical Challenges</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/30 rounded-lg p-6">
                          <div className="text-lg font-bold text-white mb-3">Embedding Quality</div>
                          <div className="text-gray-300">Initial attempts with OpenAI embeddings and transformers library yielded unsatisfactory results</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-6">
                          <div className="text-lg font-bold text-white mb-3">Context Preservation</div>
                          <div className="text-gray-300">Ensuring context isn't lost across text chunk boundaries during splitting process</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-6">
                          <div className="text-lg font-bold text-white mb-3">Response Fluency</div>
                          <div className="text-gray-300">Balancing factual accuracy with natural language generation quality</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-6">
                          <div className="text-lg font-bold text-white mb-3">Query Variations</div>
                          <div className="text-gray-300">Generating effective query variations to retrieve the most relevant document chunks</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Key Achievements</h3>
                      <ul className="space-y-2">
                        <li className="text-gray-300 flex items-start">
                          <span className="text-green-400 mr-3 mt-1">✓</span>
                          Successfully combined LangChain, ChromaDB, and Ollama's local LLMs for optimal performance
                        </li>
                        <li className="text-gray-300 flex items-start">
                          <span className="text-green-400 mr-3 mt-1">✓</span>
                          Achieved strong performance on quantitative and factual-reasoning questions across 12 test questions
                        </li>
                        <li className="text-gray-300 flex items-start">
                          <span className="text-green-400 mr-3 mt-1">✓</span>
                          Implemented privacy-focused solution using local embeddings and language models
                        </li>
                      </ul>
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

export default RAGLLMProject