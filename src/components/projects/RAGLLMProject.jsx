import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const RAGLLMProject = () => {
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
              <h1 className="text-4xl md:text-5xl font-black text-white mb-3">RAG LLM with Langchain</h1>
              <p className="text-xl text-gray-300">Retrieval-Augmented Generation system for PDF document querying using local LLMs</p>
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
              <TabsList className="flex flex-wrap gap-4 bg-transparent mb-8 border-0 justify-start">
                <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Overview</TabsTrigger>
                <TabsTrigger value="architecture" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Architecture</TabsTrigger>
                <TabsTrigger value="methodology" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Design Process</TabsTrigger>
                <TabsTrigger value="experiments" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Experiments</TabsTrigger>
                <TabsTrigger value="evaluation" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Evaluation</TabsTrigger>
                <TabsTrigger value="challenges" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Conclusion</TabsTrigger>
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
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      The designing of the Retrieval-Augmented Generation (RAG) system was initiated in a hierarchical manner to ensure that individual units of the design were effectively integrated. Following is a brief elaboration of the design process which covers each part of the system.
                    </p>
                    <div className="space-y-6">
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                          <div className="text-xl font-bold text-white">Data Ingestion</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          The first step was to get the text out from the PDFs using the PyMuPDFLoader of LangChain which fastly converts the content into a form that a computer can process. This step was important to guarantee that the raw text was correctly uploaded and ready for more treatments. This extracted data was defined as a set of documents in the LangChain format to preserve the necessary context and formalization from the PDF.
                        </div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                          <div className="text-xl font-bold text-white">Text Splitting</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          To make further analyses feasible, the extracted text was further preprocessed with LangChain's RecursiveCharacterTextSplitter, which segmented it into parts that each comprised 1000 characters with an overlap of 200 characters. This overlap made sure the context didn't get lost across boundaries and ensured nothing was lost to the next stages. The splitting process was important in order to be able to deal with large documents and make the text appropriate for the generation of the embeddings.
                        </div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                          <div className="text-xl font-bold text-white">Embedding Generation</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          Every piece of text was vectorized to higher-dimensional representations. First, I tried to use OpenAI's text-embedding-ada-002 and local embeddings with the help of the transformers library inside the notebook, but the results were barely satisfactory. The last setup used the nomic-embed-text model of Ollama, which yielded precise and fast compatible embeddings that fit the RAG pipeline. These embeddings allowed for the use of search to obtain the desired results.
                        </div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                          <div className="text-xl font-bold text-white">Vector Database and Retrieval</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          The embeddings were saved in ChromaDB, a vector database designed for high performance for similarity-based search. With the help of MultiQueryRetriever of LangChain, the variations of the user's query were produced to obtain the most suitable chunks from the database. This retrieval mechanism enabled passage relevant information to be passed to the language model for answering questions.
                        </div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">5</div>
                          <div className="text-xl font-bold text-white">Language Model (LLM)</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          The text chunks which were retrieved were then processed using the llama3.2 model, a local language model that was incorporated into the LangChain using the ChatOllama. The LLM played the role of providing accurate answers to the users based on the context their queries were made. Local dependencies such as the one provided by the llama3.2 model provided consistency, mitigated callback needed for APIs, and enhanced system performance, particularly where privacy was of concern.
                        </div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">6</div>
                          <div className="text-xl font-bold text-white">Prompt Engineering</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          To help LLM create accurate and concise responses, specific templates of prompts were developed for each type of answer. Such templates included outlining the manner in which to address numerical reasoning and making sure that the answers were solely rooted in the content. Additional modifications to the prompts made the language model more effective for the task, by negating the two extremes of wordiness and obscurity.
                        </div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">7</div>
                          <div className="text-xl font-bold text-white">Evaluation</div>
                        </div>
                        <div className="text-gray-300 ml-12">
                          The validity of the system responses was thus evaluated using recall-orientation-understanding-generation measures for word level (ROUGE-1), phrase level (ROUGE-2), and structure level (ROUGE-L) respectively. Through the formal evaluation of the pipeline, strengths and areas that need improvement were identified to have enhanced the successive improvements to the pipeline. This step allowed that for a wide range of questions entered by users, the system provides correct and highly qualified answers.
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Experiments Tab */}
                <TabsContent value="experiments">
                  <div>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experimental Approaches</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        Two different experimental configurations were tested to optimize the RAG pipeline performance and identify the most effective combination of embeddings and language models.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">1</div>
                          <h4 className="text-xl font-bold text-white">Experiment 1</h4>
                        </div>
                        <div className="mb-4">
                          <div className="text-purple-300 font-semibold mb-2">OpenAI with Local Embeddings</div>
                          <div className="text-gray-300 text-sm space-y-2">
                            <p>• <span className="font-semibold">LLM:</span> OpenAI GPT models</p>
                            <p>• <span className="font-semibold">Embeddings:</span> Local embeddings using transformers library</p>
                            <p>• <span className="font-semibold">Result:</span> Barely satisfactory results, performance limitations identified</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">2</div>
                          <h4 className="text-xl font-bold text-white">Experiment 2</h4>
                        </div>
                        <div className="mb-4">
                          <div className="text-blue-300 font-semibold mb-2">Ollama with Local Embeddings ✓</div>
                          <div className="text-gray-300 text-sm space-y-2">
                            <p>• <span className="font-semibold">LLM:</span> llama3.2 via Ollama</p>
                            <p>• <span className="font-semibold">Embeddings:</span> nomic-embed-text by Ollama</p>
                            <p>• <span className="font-semibold">Result:</span> Optimal performance with precise and fast embeddings</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Final Configuration
                      </h4>
                      <div className="text-gray-300 leading-relaxed">
                        <p className="mb-4">
                          After extensive testing, <strong>Experiment 2 (Ollama with Local Embeddings)</strong> was selected as the final implementation due to:
                        </p>
                        <ul className="space-y-2 ml-6">
                          <li>• Superior embedding quality with nomic-embed-text model</li>
                          <li>• Better integration with LangChain framework</li>
                          <li>• Privacy-focused local processing</li>
                          <li>• Consistent performance across diverse query types</li>
                          <li>• Reduced API dependency and latency</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Neural Network Overview</h4>
                      <div className="bg-gray-800/30 rounded-lg p-6">
                        <div className="mb-4">
                          <div className="text-lg font-bold text-white mb-2">LLM: llama3.2</div>
                          <div className="text-gray-300 leading-relaxed">
                            A lightweight, local language model optimized for contextual understanding and text generation. Successfully integrated with LangChain for prompt-based response generation, providing accurate answers while maintaining privacy through local processing.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Evaluation Tab */}
                <TabsContent value="evaluation">
                  <div>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Performance Evaluation</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        The system was evaluated using ROUGE (Recall-Oriented Understudy for Gisting Evaluation) metrics to measure the quality of generated responses against reference answers.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6 text-center">
                        <div className="text-3xl font-black text-blue-400 mb-2">ROUGE-1</div>
                        <div className="text-sm text-gray-300 mb-2">Word-Level Overlap</div>
                        <div className="text-xs text-gray-400">Measures individual word matches between generated and reference responses</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6 text-center">
                        <div className="text-3xl font-black text-purple-400 mb-2">ROUGE-2</div>
                        <div className="text-sm text-gray-300 mb-2">Phrase-Level Overlap</div>
                        <div className="text-xs text-gray-400">Evaluates bigram (two-word sequence) matches for phrase coherence</div>
                      </div>
                      <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border border-pink-500/30 rounded-lg p-6 text-center">
                        <div className="text-3xl font-black text-pink-400 mb-2">ROUGE-L</div>
                        <div className="text-sm text-gray-300 mb-2">Structure-Level Overlap</div>
                        <div className="text-xs text-gray-400">Measures longest common subsequence for structural similarity</div>
                      </div>
                    </div>

                    <div className="bg-gray-800/30 rounded-lg p-6 mb-8">
                      <h4 className="text-lg font-bold text-white mb-4">Evaluation Results</h4>
                      <div className="text-gray-300 leading-relaxed space-y-3">
                        <p>
                          <span className="text-green-400 font-semibold">✓ Strong Performance:</span> The pipeline achieved significantly higher scores on quantitative and factual-reasoning questions across 12 test questions.
                        </p>
                        <p>
                          <span className="text-blue-400 font-semibold">✓ Accuracy:</span> System demonstrated high precision in retrieving relevant context and generating accurate responses based on PDF content.
                        </p>
                        <p>
                          <span className="text-purple-400 font-semibold">✓ Consistency:</span> Maintained consistent performance across diverse query types with strong ROUGE scores.
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-4">Areas for Improvement</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="text-yellow-400 mr-3 mt-1">→</span>
                          <div>
                            <div className="text-white font-semibold">Fluency Fine-Tuning</div>
                            <div className="text-gray-300 text-sm">While phrasings are correct, further enhancing the LLM to produce more stylistically consistent responses may slightly increase ROUGE-2 results.</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-yellow-400 mr-3 mt-1">→</span>
                          <div>
                            <div className="text-white font-semibold">Prompt Optimization</div>
                            <div className="text-gray-300 text-sm">Additional changes to the prompt templates can bring the results closer to the structure of reference answers and improve overall coherence.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Conclusion Tab */}
                <TabsContent value="challenges">
                  <div>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Conclusion</h3>
                      <div className="bg-gray-800/30 rounded-lg p-6 mb-8">
                        <p className="text-gray-300 leading-relaxed mb-4">
                          In this assignment, the Retrieval-Augmented Generation (RAG) pipeline was applied to retrieve and generate coherent responses from a PDF dataset effectively. The goal was to create a system that would maximize the use of LangChain, ChromaDB, and Ollama's local LLMs to answer a query with high precision and relevancy to the user.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          Across 12 questions, the pipeline for neural IR ranked significantly higher than the previous model, promoting the quantitative and more factual-reasoning questions while showing potential for enhancement in other areas.
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technical Challenges</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/30 rounded-lg p-6">
                          <div className="text-lg font-bold text-white mb-3">Embedding Quality</div>
                          <div className="text-gray-300">Initial attempts with OpenAI embeddings (text-embedding-ada-002) and transformers library yielded unsatisfactory results. Solved by switching to nomic-embed-text by Ollama.</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-6">
                          <div className="text-lg font-bold text-white mb-3">Context Preservation</div>
                          <div className="text-gray-300">Ensuring context isn't lost across text chunk boundaries during splitting process. Addressed through 200-character overlap in RecursiveCharacterTextSplitter.</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-6">
                          <div className="text-lg font-bold text-white mb-3">Response Fluency</div>
                          <div className="text-gray-300">Balancing factual accuracy with natural language generation quality. Improved through careful prompt engineering and template design.</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-6">
                          <div className="text-lg font-bold text-white mb-3">Query Variations</div>
                          <div className="text-gray-300">Generating effective query variations to retrieve the most relevant document chunks. Implemented using MultiQueryRetriever from LangChain.</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Key Achievements</h3>
                      <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                        <ul className="space-y-3">
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1 text-xl">✓</span>
                            <div>
                              <div className="font-semibold text-white mb-1">Effective Use of LLMs</div>
                              <div className="text-sm">Successfully combined LangChain, ChromaDB, and Ollama's local LLMs (llama3.2) for optimal performance with privacy-focused local processing</div>
                            </div>
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1 text-xl">✓</span>
                            <div>
                              <div className="font-semibold text-white mb-1">High Accuracy Results</div>
                              <div className="text-sm">Achieved strong performance on quantitative and factual-reasoning questions across 12 test questions with excellent ROUGE scores</div>
                            </div>
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1 text-xl">✓</span>
                            <div>
                              <div className="font-semibold text-white mb-1">System Efficiency</div>
                              <div className="text-sm">Built efficient RAG pipeline combining semantic search, vector embeddings, and context-aware response generation for PDF document querying</div>
                            </div>
                          </li>
                          <li className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1 text-xl">✓</span>
                            <div>
                              <div className="font-semibold text-white mb-1">Privacy & Performance</div>
                              <div className="text-sm">Implemented privacy-focused solution using local embeddings and language models, eliminating API dependencies while maintaining high performance</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Impact & Future Work</h3>
                      <div className="text-gray-300 leading-relaxed space-y-3">
                        <p>
                          This project demonstrates the viability of building powerful, privacy-preserving RAG systems using open-source tools and local language models. The successful integration of LangChain, ChromaDB, and Ollama creates a robust foundation for document-based question answering applications.
                        </p>
                        <p>
                          Future enhancements could include multi-document retrieval, advanced prompt optimization for improved ROUGE-2 scores, and expansion to support additional document formats beyond PDFs.
                        </p>
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

export default RAGLLMProject