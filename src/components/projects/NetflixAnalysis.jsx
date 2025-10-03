import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const NetflixAnalysis = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-8 max-w-6xl pt-20 py-20">

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
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3">User Sentiment Analysis on Netflix Content</h1>
            <p className="text-xl text-gray-300">Comprehensive data analysis of Netflix's streaming content catalog with sentiment analysis and business insights</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="px-4 py-2 bg-green-500/20 text-green-400">Done</Badge>
            <Badge className="px-4 py-2 bg-blue-500/20 text-blue-400">May 30, 2022</Badge>
            <Badge className="px-4 py-2 bg-purple-500/20 text-purple-400">Data Analysis</Badge>
          </div>

          <div className="flex gap-4 mb-8 flex-wrap">
            <a href="https://www.notion.so/User-Sentiment-Analysis-on-Netflix-Content-df098ced7c6c4bf1bde10861f885deeb" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              Notion
            </a>
            <a href="https://github.com/Yogavarshni4699/Data_Analysis" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              GitHub
            </a>
            <a href="https://www.kaggle.com/datasets/shivamb/netflix-shows?resource=download" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              Dataset
            </a>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap gap-4 bg-transparent mb-8 border-0 justify-start">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Overview</TabsTrigger>
              <TabsTrigger value="analysis" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Analysis</TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Key Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Netflix is one of the largest providers of online streaming entertainment services with a massive subscriber base worldwide. This project analyzes Netflix's content catalog to understand patterns, trends, and user sentiment around the platform's offerings.
                  </p>
                  <p>
                    The analysis focuses on Netflix's strategic shift from on-demand DVD rental to producing original shows, leveraging data-driven insights to understand content distribution, ratings, successful creators, and overall sentiment.
                  </p>
                </CardContent>
              </Card>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="gradient-text">Dataset</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 space-y-4">
                    <p>
                      <strong>Source:</strong> Kaggle - Netflix Movies and TV Shows
                    </p>
                    <p>
                      <strong>Provided by:</strong> Flixable (third-party Netflix research engine)
                    </p>
                    <p>
                      <strong>Coverage:</strong> TV shows and movies streamed on Netflix as of 2019
                    </p>
                    <p>
                      <strong>Data Points:</strong> Content ratings, directors, actors, release years, descriptions
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="gradient-text">Tools & Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Pandas", "NumPy", "Plotly", "TextBlob", "Sentiment Analysis", "Jupyter Notebook", "Excel"].map((tool, index) => (
                        <Badge key={index} className="bg-blue-500/20 text-blue-400">{tool}</Badge>
                      ))}
                    </div>
                    <div className="mt-6 space-y-2 text-gray-300 text-sm">
                      <p><strong>Analysis:</strong> Pandas & NumPy for data manipulation</p>
                      <p><strong>Visualization:</strong> Plotly for interactive charts</p>
                      <p><strong>NLP:</strong> TextBlob for sentiment analysis</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Analysis Objectives</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold text-lg">Data Analysis Tasks</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start"><span className="text-blue-400 mr-3">1.</span>Understand content availability and distribution</li>
                        <li className="flex items-start"><span className="text-blue-400 mr-3">2.</span>Clean and prepare data for analysis</li>
                        <li className="flex items-start"><span className="text-blue-400 mr-3">3.</span>Analyze content ratings and categories</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold text-lg">Key Insights</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start"><span className="text-purple-400 mr-3">4.</span>Identify top successful actors and directors</li>
                        <li className="flex items-start"><span className="text-purple-400 mr-3">5.</span>Perform sentiment analysis on content descriptions</li>
                        <li className="flex items-start"><span className="text-purple-400 mr-3">6.</span>Track content production trends over time</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">1. Distribution of Content Ratings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300">
                    Analysis of how content is categorized across different rating systems on Netflix, revealing the target audience demographics.
                  </p>
                  <div className="mt-6">
                    <img src="/assets/N1.png" alt="Content Rating Distribution" className="w-full rounded-lg border border-gray-700" />
                    <p className="text-sm text-gray-400 mt-3 text-center">Distribution of content ratings across Netflix catalog</p>
                  </div>
                  <div className="bg-gradient-to-r from-red-900/30 to-red-800/20 border border-red-500/30 rounded-lg p-6 mt-6">
                    <h4 className="text-white font-semibold mb-3">Key Finding</h4>
                    <p className="text-gray-300">
                      The majority of content on Netflix is categorized as <strong>"TV-MA"</strong> (Mature Audiences), indicating that most content available on the platform is intended for viewing by mature and adult audiences.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">2. Top Successful Directors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300">
                    Identification of the most prolific directors on Netflix based on the number of content pieces they've created for the platform.
                  </p>
                  <div className="mt-6">
                    <img src="/assets/N2.png" alt="Top Directors on Netflix" className="w-full rounded-lg border border-gray-700" />
                    <p className="text-sm text-gray-400 mt-3 text-center">Most successful directors on Netflix by content volume</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6 mt-6">
                    <h4 className="text-white font-semibold mb-3">Top 5 Directors</h4>
                    <ol className="space-y-2 text-gray-300">
                      <li className="flex items-center"><span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>Jan Suter</li>
                      <li className="flex items-center"><span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>Raul Campos</li>
                      <li className="flex items-center"><span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>Marcus Raboy</li>
                      <li className="flex items-center"><span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">4</span>Jay Karas</li>
                      <li className="flex items-center"><span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">5</span>Cathy Garcia-Molina</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">3. Top Successful Actors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300">
                    Analysis of actors with the most appearances in Netflix content, highlighting the platform's casting preferences and regional content focus.
                  </p>
                  <div className="mt-6">
                    <img src="/assets/N5.png" alt="Top Actors on Netflix" className="w-full rounded-lg border border-gray-700" />
                    <p className="text-sm text-gray-400 mt-3 text-center">Most featured actors on Netflix platform</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6 mt-6">
                    <h4 className="text-white font-semibold mb-3">Top 5 Actors</h4>
                    <ol className="space-y-2 text-gray-300">
                      <li className="flex items-center"><span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>Anupam Kher</li>
                      <li className="flex items-center"><span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>Om Puri</li>
                      <li className="flex items-center"><span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>Boman Irani</li>
                      <li className="flex items-center"><span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">4</span>Shah Rukh Khan</li>
                      <li className="flex items-center"><span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">5</span>Paresh Rawal</li>
                    </ol>
                    <p className="text-gray-300 mt-4 text-sm italic">
                      The prominence of Bollywood actors indicates Netflix's significant investment in Indian regional content.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">4. Content Production Trends Over Time</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300">
                    Temporal analysis of Netflix's content production, tracking how the volume of movies and TV shows has changed over the years.
                  </p>
                  <div className="mt-6">
                    <img src="/assets/N3.png" alt="Content Production Over Years" className="w-full rounded-lg border border-gray-700" />
                    <p className="text-sm text-gray-400 mt-3 text-center">Trend of content production for movies and TV shows over time</p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-lg p-6 mt-6">
                    <h4 className="text-white font-semibold mb-3">Trend Insight</h4>
                    <p className="text-gray-300">
                      The line graph reveals a <strong>decline in content production</strong> for both movies and TV shows since 2018. This could indicate strategic shifts in Netflix's content strategy, focusing more on quality over quantity, or potential impacts from external factors affecting production schedules.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">5. Sentiment Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300">
                    Natural Language Processing analysis using TextBlob to classify the sentiment of content descriptions into positive, neutral, and negative categories.
                  </p>
                  <div className="mt-6">
                    <img src="/assets/N4.png" alt="Sentiment Analysis Results" className="w-full rounded-lg border border-gray-700" />
                    <p className="text-sm text-gray-400 mt-3 text-center">Sentiment distribution of Netflix content descriptions</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6 mt-6">
                    <h4 className="text-white font-semibold mb-3">Sentiment Finding</h4>
                    <p className="text-gray-300 mb-4">
                      The analysis shows that <strong>overall positive content is always greater than neutral and negative content combined</strong>, indicating that Netflix maintains a predominantly uplifting and engaging content library.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">Positive</div>
                        <p className="text-sm text-gray-300">Highest proportion</p>
                      </div>
                      <div className="bg-gray-800/30 border border-gray-500/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-gray-400 mb-1">Neutral</div>
                        <p className="text-sm text-gray-300">Moderate proportion</p>
                      </div>
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-red-400 mb-1">Negative</div>
                        <p className="text-sm text-gray-300">Lowest proportion</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Business Insights & Implications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="text-blue-400 mr-2">🎯</span>
                        Target Audience
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Predominance of TV-MA rated content indicates Netflix's strategic focus on adult audiences, aligning with subscription demographics and viewing patterns.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="text-purple-400 mr-2">🌍</span>
                        Global Content Strategy
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Strong presence of Bollywood actors demonstrates Netflix's commitment to international markets, particularly India, as part of global expansion strategy.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="text-green-400 mr-2">📈</span>
                        Content Sentiment
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Positive sentiment dominance suggests Netflix curates uplifting, engaging content that drives subscriber satisfaction and retention.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="text-yellow-400 mr-2">📉</span>
                        Production Trends
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Declining production since 2018 may indicate a strategic pivot toward quality over quantity, focusing on high-value original content.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Technical Learnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-800/30 rounded-lg p-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <span className="text-2xl mr-3">🐍</span>
                        Python Libraries
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Pandas for data manipulation</li>
                        <li>• NumPy for numerical operations</li>
                        <li>• Plotly for interactive visualizations</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/30 rounded-lg p-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <span className="text-2xl mr-3">💬</span>
                        NLP & Sentiment Analysis
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• TextBlob library implementation</li>
                        <li>• Polarity score calculation</li>
                        <li>• Text preprocessing techniques</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/30 rounded-lg p-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <span className="text-2xl mr-3">📊</span>
                        Data Visualization
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Bar charts for comparisons</li>
                        <li>• Line graphs for trends</li>
                        <li>• Distribution analysis</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Project Takeaways</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed space-y-4">
                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-green-400 mr-2">✅</span>
                      Key Learning
                    </h3>
                    <p className="text-lg mb-4">
                      This project provided hands-on experience with <strong>Python libraries</strong> for data analysis and introduced <strong>sentiment analysis</strong> using Natural Language Processing techniques.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Skills Developed</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Data cleaning and preprocessing</li>
                        <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Exploratory data analysis (EDA)</li>
                        <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Text analysis with TextBlob</li>
                        <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Sentiment classification</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Business Understanding</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Netflix content strategy analysis</li>
                        <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Market segmentation insights</li>
                        <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Production trend interpretation</li>
                        <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Data-driven storytelling</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default NetflixAnalysis