import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const NBAAnalysis = () => {
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
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Exploratory Data Analysis on NBA Player Stats</h1>
            <p className="text-xl text-gray-300">Web-scraped NBA player statistics analysis using Python, Pandas, and comparative visualization with Matplotlib vs Seaborn</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="px-4 py-2 bg-green-500/20 text-green-400">Done</Badge>
            <Badge className="px-4 py-2 bg-blue-500/20 text-blue-400">May 26, 2022</Badge>
            <Badge className="px-4 py-2 bg-purple-500/20 text-purple-400">Data Analysis</Badge>
          </div>

          <div className="flex gap-4 mb-8 flex-wrap">
            <a href="https://www.notion.so/Exploratory-Data-Analysis-on-NBA-Player-Stats-6fc25066046343aeb091ac11c00674f0" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              Notion
            </a>
            <a href="https://github.com/Yogavarshni4699/EDA" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              GitHub
            </a>
            <a href="https://www.basketball-reference.com/leagues/NBA_2021_per_game.html" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              Data Source
            </a>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap gap-4 bg-transparent mb-8 border-0 justify-start">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Overview</TabsTrigger>
              <TabsTrigger value="analysis" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Analysis Questions</TabsTrigger>
              <TabsTrigger value="visualization" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Visualizations</TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Key Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    This project performs comprehensive exploratory data analysis on NBA player statistics from the 2020-21 season. Using Python's Pandas library, data was web-scraped directly from Basketball-Reference.com and analyzed to answer 8 key questions about player performance.
                  </p>
                  <p>
                    A unique aspect of this analysis is the comparison between Pandas' built-in visualization capabilities and Seaborn's specialized statistical visualizations, demonstrating the advantages of each approach for different analytical needs.
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
                      <strong>Source:</strong> Basketball-Reference.com
                    </p>
                    <p>
                      <strong>Season:</strong> 2020-21 NBA Season
                    </p>
                    <p>
                      <strong>Method:</strong> Web scraping using Pandas
                    </p>
                    <p>
                      <strong>Key Metrics:</strong> Points (PTS), Assists (AST), 3-Point Field Goals (3P), Games Played (G), Player Position (Pos), Team (Tm)
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="gradient-text">Tools & Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter Notebook", "Web Scraping", "Excel"].map((tool, index) => (
                        <Badge key={index} className="bg-blue-500/20 text-blue-400">{tool}</Badge>
                      ))}
                    </div>
                    <div className="mt-6 space-y-2 text-gray-300 text-sm">
                      <p><strong>Analysis:</strong> Pandas for data manipulation</p>
                      <p><strong>Visualization:</strong> Matplotlib & Seaborn comparison</p>
                      <p><strong>Data Source:</strong> Basketball-Reference.com</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Workflow Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                      <div className="flex items-center mb-3">
                        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>
                        <h4 className="text-white font-semibold">Web Scraping</h4>
                      </div>
                      <p className="text-gray-300 text-sm">Used Pandas to scrape NBA player statistics directly from Basketball-Reference.com</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                      <div className="flex items-center mb-3">
                        <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
                        <h4 className="text-white font-semibold">Data Cleaning</h4>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Check data frame contents</li>
                        <li>• Handle missing values (replace with 0)</li>
                        <li>• Remove unwanted columns</li>
                        <li>• Export to CSV file</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                      <div className="flex items-center mb-3">
                        <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
                        <h4 className="text-white font-semibold">Exploratory Analysis</h4>
                      </div>
                      <p className="text-gray-300 text-sm">Answer 8 key questions about player performance using data frame operations</p>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-lg p-6">
                      <div className="flex items-center mb-3">
                        <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-3">4</span>
                        <h4 className="text-white font-semibold">Visualization</h4>
                      </div>
                      <p className="text-gray-300 text-sm">Compare Pandas vs Seaborn visualizations for better graph quality</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">8 Key Analysis Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300">
                    The analysis focused on answering the following questions about NBA player performance during the 2020-21 season:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-gray-800/30 rounded-lg p-6 border-l-4 border-blue-500">
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <span className="text-blue-400 mr-3">Q1.</span>
                        Which player scored the most Points (PTS) Per Game?
                      </h4>
                      <p className="text-gray-300 text-sm ml-9">Identified the top scorer in the league by analyzing PTS column</p>
                    </div>

                    <div className="bg-gray-800/30 rounded-lg p-6 border-l-4 border-purple-500">
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <span className="text-purple-400 mr-3">Q2.</span>
                        What team is the top scorer from?
                      </h4>
                      <p className="text-gray-300 text-sm ml-9">Follow-up analysis to identify team affiliation of highest scorer</p>
                    </div>

                    <div className="bg-gray-800/30 rounded-lg p-6 border-l-4 border-green-500">
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <span className="text-green-400 mr-3">Q3.</span>
                        Which position is the player playing in?
                      </h4>
                      <p className="text-gray-300 text-sm ml-9">Analyzed position data to understand role of top performers</p>
                    </div>

                    <div className="bg-gray-800/30 rounded-lg p-6 border-l-4 border-yellow-500">
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <span className="text-yellow-400 mr-3">Q4.</span>
                        How many games did the player play in the season?
                      </h4>
                      <p className="text-gray-300 text-sm ml-9">Examined games played (G) to understand consistency and availability</p>
                    </div>

                    <div className="bg-gray-800/30 rounded-lg p-6 border-l-4 border-red-500">
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <span className="text-red-400 mr-3">Q5.</span>
                        Which players scored more than 20 Points (PTS) Per Game?
                      </h4>
                      <p className="text-gray-300 text-sm ml-9">Filtered data to identify elite scorers exceeding 20 PPG threshold</p>
                    </div>

                    <div className="bg-gray-800/30 rounded-lg p-6 border-l-4 border-indigo-500">
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <span className="text-indigo-400 mr-3">Q6.</span>
                        Which player had the highest 3-Point Field Goals Per Game (3P)?
                      </h4>
                      <p className="text-gray-300 text-sm ml-9">Analyzed 3P column to find best outside shooter in the league</p>
                    </div>

                    <div className="bg-gray-800/30 rounded-lg p-6 border-l-4 border-pink-500">
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <span className="text-pink-400 mr-3">Q7.</span>
                        Which player had the highest Assists Per Game (AST)?
                      </h4>
                      <p className="text-gray-300 text-sm ml-9">Identified top playmaker by analyzing assists distribution</p>
                    </div>

                    <div className="bg-gray-800/30 rounded-lg p-6 border-l-4 border-orange-500">
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <span className="text-orange-400 mr-3">Q8.</span>
                        Which player scored the highest (PTS) in the Los Angeles Lakers?
                      </h4>
                      <p className="text-gray-300 text-sm ml-9">Team-specific analysis filtering by Lakers roster to find top scorer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="visualization" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Visualization Comparison: Pandas vs Seaborn</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                    <p className="text-gray-300 text-lg mb-4">
                      📊 <strong>For visualizations, please check my <a href="https://github.com/Yogavarshni4699/EDA" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">GitHub</a> or <a href="https://www.notion.so/Exploratory-Data-Analysis-on-NBA-Player-Stats-6fc25066046343aeb091ac11c00674f0" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Notion page</a></strong>
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4">1. Histograms</h3>
                      <p className="text-gray-300 mb-3"><strong>Visualization:</strong> Positions by Points</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-2 text-sm">Pandas Built-in</h4>
                          <p className="text-gray-400 text-sm">Basic histogram showing distribution</p>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-2 text-sm">Seaborn Built-in</h4>
                          <p className="text-gray-400 text-sm">Enhanced aesthetics with better color schemes</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4">2. Box Plots</h3>
                      <p className="text-gray-300 mb-3"><strong>Visualization:</strong> Grouped by Positions</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-2 text-sm">Pandas Built-in</h4>
                          <p className="text-gray-400 text-sm">Standard box plot visualization</p>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-2 text-sm">Seaborn Built-in</h4>
                          <p className="text-gray-400 text-sm">Modern styling with better clarity</p>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-2 text-sm">Seaborn Stripplot</h4>
                          <p className="text-gray-400 text-sm">Individual data point visualization</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4">3. Heat Maps (Seaborn)</h3>
                      <p className="text-gray-300 mb-3"><strong>Visualization:</strong> Correlation Matrix Analysis</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-2 text-sm">Full Correlation Matrix</h4>
                          <p className="text-gray-400 text-sm">Complete correlation visualization across all metrics</p>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-2 text-sm">Masked Upper Triangle</h4>
                          <p className="text-gray-400 text-sm">Clean visualization removing redundant information</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4">4. Scatter Plot Grids (Seaborn)</h3>
                      <p className="text-gray-300 mb-3"><strong>Visualization:</strong> Multi-variable Relationships</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-2 text-sm">6-Column Analysis</h4>
                          <p className="text-gray-400 text-sm">Focused scatter plot grid for key metrics</p>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-2 text-sm">All Columns</h4>
                          <p className="text-gray-400 text-sm">Comprehensive pairwise relationship visualization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Matplotlib vs Seaborn: Key Differences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="text-orange-400 mr-2">📊</span>
                        Python Built-in (Matplotlib)
                      </h3>
                      <ul className="space-y-3 text-gray-300 text-sm">
                        <li className="flex items-start">
                          <span className="text-orange-400 mr-2">•</span>
                          <span>Substantial flexibility but often requires verbose code</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-400 mr-2">•</span>
                          <span>More lines of code needed for complex visualizations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-400 mr-2">•</span>
                          <span>Unparalleled customization options</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-400 mr-2">•</span>
                          <span>Basic default styling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-400 mr-2">•</span>
                          <span>Manual configuration for aesthetics</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="text-green-400 mr-2">✨</span>
                        Seaborn
                      </h3>
                      <ul className="space-y-3 text-gray-300 text-sm">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          <span>Higher-level library built on top of Matplotlib</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          <span>Complex visualizations with fewer lines of code</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          <span>Built-in themes and modern color palettes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          <span>Visually pleasing default styles</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          <span>Seamless Pandas DataFrame integration</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Seaborn Advantages</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 text-sm">Aesthetics</h4>
                        <p className="text-gray-300 text-sm">Modern, professional-looking visualizations by default</p>
                      </div>
                      <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 text-sm">Ease of Use</h4>
                        <p className="text-gray-300 text-sm">Simplified syntax for complex statistical plots</p>
                      </div>
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 text-sm">Statistical Viz</h4>
                        <p className="text-gray-300 text-sm">Built-in functions for statistical relationships</p>
                      </div>
                      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 text-sm">Default Styles</h4>
                        <p className="text-gray-300 text-sm">More visually appealing than Matplotlib defaults</p>
                      </div>
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 text-sm">Complex Plots</h4>
                        <p className="text-gray-300 text-sm">Heat maps and clustered plots made simple</p>
                      </div>
                      <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 text-sm">Integration</h4>
                        <p className="text-gray-300 text-sm">Works directly with Pandas DataFrames</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Conclusion & Key Takeaways</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed space-y-4">
                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Final Verdict</h3>
                    <p className="text-lg">
                      While Python's built-in visualization with Matplotlib offers unparalleled customization, <strong>Seaborn's strengths lie in its user-friendly approach, aesthetics, and specialized statistical visualizations</strong>, which can significantly reduce the code complexity needed to create informative graphs.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-green-400 mr-2">✅</span>
                      Project Takeaways
                    </h3>
                    <p className="text-gray-300 mb-4">
                      The project helped me learn more about the process of Exploratory Data Analysis to understand the underlying patterns, relationships, and anomalies in the data.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold text-sm">EDA Skills Developed:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Data Distribution Analysis</li>
                          <li>• Correlation Discovery</li>
                          <li>• Missing Value Handling</li>
                          <li>• Outlier Detection</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold text-sm">Technical Skills:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Cluster Analysis</li>
                          <li>• Data Quality Assessment</li>
                          <li>• Statistical Visualization</li>
                          <li>• Web Scraping with Pandas</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-gray-300 mt-4 italic">
                      "I learned to understand the data's story, its quirks, and nuances."
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Web Scraping</h4>
                      <p className="text-gray-300 text-sm">Learned efficient data collection using Pandas</p>
                    </div>
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Data Cleaning</h4>
                      <p className="text-gray-300 text-sm">Mastered handling missing values and data preparation</p>
                    </div>
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Visualization</h4>
                      <p className="text-gray-300 text-sm">Compared tools to choose best approach for each scenario</p>
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

export default NBAAnalysis