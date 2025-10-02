import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import AIWebsiteGenerator from './components/projects/AIWebsiteGenerator'
import RAGLLMProject from './components/projects/RAGLLMProject'
import AirbnbAnalysis from './components/projects/AirbnbAnalysis'
import BigFootAnalysis from './components/projects/BigFootAnalysis'
import CustomerChurnAnalysis from './components/projects/CustomerChurnAnalysis'
import ScrollToTop from './components/ScrollToTop'

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<App />} />
        <Route path="/project/ai-website-generator" element={<AIWebsiteGenerator />} />
        <Route path="/project/rag-llm" element={<RAGLLMProject />} />
        <Route path="/project/airbnb-analysis" element={<AirbnbAnalysis />} />
        <Route path="/project/bigfoot-analysis" element={<BigFootAnalysis />} />
        <Route path="/project/customer-churn" element={<CustomerChurnAnalysis />} />
      </Routes>
    </Router>
  )
}

export default AppRouter