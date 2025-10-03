import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import AIWebsiteGenerator from './components/projects/AIWebsiteGenerator'
import RAGLLMProject from './components/projects/RAGLLMProject'
import AirbnbAnalysis from './components/projects/AirbnbAnalysis'
import BigFootAnalysis from './components/projects/BigFootAnalysis'
import CustomerChurnAnalysis from './components/projects/CustomerChurnAnalysis'
import SalesInsights from './components/projects/SalesInsights'
import SalesAnalysis from './components/projects/SalesAnalysis'
import CustomerSegmentation from './components/projects/CustomerSegmentation'
import ImageClassification from './components/projects/ImageClassification'
import NBAAnalysis from './components/projects/NBAAnalysis'
import NetflixAnalysis from './components/projects/NetflixAnalysis'
import RedditMoralJudgement from './components/projects/RedditMoralJudgement'
import SubredditClassification from './components/projects/SubredditClassification'
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
        <Route path="/project/sales-insights" element={<SalesInsights />} />
        <Route path="/project/sales-analysis" element={<SalesAnalysis />} />
        <Route path="/project/customer-segmentation" element={<CustomerSegmentation />} />
        <Route path="/project/image-classification" element={<ImageClassification />} />
        <Route path="/project/nba-analysis" element={<NBAAnalysis />} />
        <Route path="/project/netflix-analysis" element={<NetflixAnalysis />} />
        <Route path="/project/reddit-moral-judgement" element={<RedditMoralJudgement />} />
        <Route path="/project/subreddit-classification" element={<SubredditClassification />} />
      </Routes>
    </Router>
  )
}

export default AppRouter