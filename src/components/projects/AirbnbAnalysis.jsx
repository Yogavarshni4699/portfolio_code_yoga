import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const AirbnbAnalysis = () => {
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
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Airbnb Booking Analysis (Tableau)</h1>
            <p className="text-xl text-gray-300">Business Intelligence & Data Visualization Dashboard</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="px-4 py-2 bg-green-500/20 text-green-400">Done</Badge>
            <Badge className="px-4 py-2 bg-blue-500/20 text-blue-400">December 28, 2023</Badge>
            <Badge className="px-4 py-2 bg-purple-500/20 text-purple-400">Data Visualization & BI</Badge>
          </div>

          <div className="flex gap-4 mb-8 flex-wrap">
            <a href="https://public.tableau.com/app/profile/yogavarshni.ramachandran/viz/AirbnbBookings2019/Dashboard1?publish=yes" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              📊 Tableau Dashboard
            </a>
            <a href="https://www.notion.so/Airbnb-Booking-Analysis-Tableau-0f117a7926864f94bdf2393e9f73c953" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              Notion
            </a>
            <a href="https://github.com/Yogavarshni4699/Airbnb-Booking-Analysis-Tableau-" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              GitHub
            </a>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap gap-4 bg-transparent mb-8 border-0 justify-start">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Overview</TabsTrigger>
              <TabsTrigger value="analysis" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Analysis</TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Key Insights</TabsTrigger>
              <TabsTrigger value="conclusion" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Conclusion</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Introduction</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    This report provides an analytical overview of Airbnb activity in New York City, leveraging a data visualization dashboard. The aim is to glean insights into the performance of Airbnb listings across five boroughs: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. The data encompasses a variety of metrics, including total bookings, average prices, and total reviews, segmented by neighborhood groups and room types.
                  </p>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-white mb-4">Dashboard Preview</h3>
                    <img src="/assets/airbnb-dashboard.png" alt="Airbnb NYC Dashboard" className="w-full rounded-lg border border-gray-700" />
                  </div>
                </CardContent>
              </Card>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="gradient-text">Business Use Case</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    The business use case for this data involves multiple stakeholders in the hospitality and tourism industry, including Airbnb hosts, real estate investors, market analysts, and city planners. Understanding the distribution of bookings and pricing can help hosts price their listings competitively and maximize occupancy rates.
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="gradient-text">Key Stakeholders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start"><span className="text-blue-400 mr-3">•</span>Airbnb hosts for competitive pricing</li>
                      <li className="flex items-start"><span className="text-blue-400 mr-3">•</span>Real estate investors for property investments</li>
                      <li className="flex items-start"><span className="text-blue-400 mr-3">•</span>Market analysts for trend forecasting</li>
                      <li className="flex items-start"><span className="text-blue-400 mr-3">•</span>City planners for housing impact analysis</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Tools Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Tableau", "Data Visualization", "Business Intelligence", "NYC Open Data", "Statistical Analysis"].map((tool, index) => (
                      <Badge key={index} className="bg-blue-500/20 text-blue-400">{tool}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Detailed Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">1. Total Bookings by Neighborhood Group and Room Type</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• <strong>Manhattan</strong> dominates the market with the highest number of bookings, particularly for entire homes and apartments</li>
                      <li>• <strong>Brooklyn</strong> follows with substantial bookings, indicating a popular choice for Airbnb users</li>
                      <li>• <strong>Queens, Bronx, and Staten Island</strong> show fewer bookings, with the Bronx and Staten Island notably lagging in shared room bookings</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">2. Average Price by Neighborhood Group and Room Type</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• <strong>Manhattan</strong> listings are the most expensive, especially for entire homes/apartments</li>
                      <li>• <strong>Bronx</strong> listings are the most affordable, which could correlate with lower demand in this area</li>
                      <li>• <strong>Staten Island</strong> shows a higher average price for private rooms compared to other boroughs</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">3. Total Reviews by Year</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• Growth trend in reviews from 2011 to 2019 suggests increasing Airbnb usage</li>
                      <li>• The abrupt decline in 2020 could be attributed to external factors such as the COVID-19 pandemic, affecting travel and accommodation patterns</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">4. Average Price in the Neighborhoods - Room Type: All</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• The map shows a concentration of higher-priced listings in <strong>Manhattan</strong></li>
                      <li>• Lower-priced listings are spread out, with some clustering in outer boroughs</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">5. Average Reviews per Month by Room Type</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• Entire homes/apartments across all boroughs receive the most reviews monthly, indicating higher occupancy or turnover</li>
                      <li>• <strong>Staten Island</strong> exhibits an unexpectedly high average for entire homes/apartments, suggesting a possible niche or an outlier in the data</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">6. Average Price by Neighborhood</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• <strong>Fort Wadsworth</strong> and areas like <strong>SoHo</strong> and <strong>Midtown</strong> command high average prices, indicating their desirability or premium offerings</li>
                      <li>• There is considerable variability within neighborhoods, highlighting the diverse range of offerings in the city</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">7. Total Reviews by Neighborhood</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• <strong>Manhattan</strong> garners the most reviews, indicative of its popularity and possibly higher visitor satisfaction</li>
                      <li>• Other boroughs hold smaller shares of the review count, correlating with fewer bookings</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">8. Total Bookings by Months and Neighborhood Groups</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• Seasonality affects bookings, with summer months seeing peak activity, reflecting tourist preferences and possibly better weather</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">9. Top 10 Hosts by Total Reviews</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• The hosts with the highest reviews are predominantly in <strong>Manhattan</strong> and <strong>Brooklyn</strong>, which may point to professional hosting or superior guest experiences</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Key Insights & Findings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="text-blue-400 mr-2">📊</span>
                      Market Leaders
                    </h3>
                    <p className="text-gray-300 leading-relaxed">Manhattan and Brooklyn are the most active markets for Airbnb in NYC, with the highest number of bookings, reviews, and overall revenue potential due to higher average prices. These two boroughs dominate the market and attract the majority of visitors.</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="text-purple-400 mr-2">📈</span>
                      Seasonal Patterns
                    </h3>
                    <p className="text-gray-300 leading-relaxed">Significant seasonal influence on bookings, with a peak in the summer months, suggesting the potential for dynamic pricing strategies to maximize revenue. Hosts can capitalize on higher demand during peak tourist seasons.</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="text-green-400 mr-2">🚀</span>
                      Growth Opportunities
                    </h3>
                    <p className="text-gray-300 leading-relaxed">Lower activity in the Bronx and Staten Island presents an opportunity for Airbnb to expand its market presence in these areas through targeted promotions and incentives for hosts. These underserved markets offer potential for growth.</p>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="text-yellow-400 mr-2">💰</span>
                      Price Variability
                    </h3>
                    <p className="text-gray-300 leading-relaxed">The disparity in average prices between neighborhoods indicates a diverse range of offerings, catering to different traveler budgets and preferences. Premium neighborhoods like SoHo and Midtown command significantly higher prices.</p>
                  </div>

                  <div className="bg-gradient-to-r from-red-900/30 to-red-800/20 border border-red-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="text-red-400 mr-2">⚠️</span>
                      External Impact Analysis
                    </h3>
                    <p className="text-gray-300 leading-relaxed">The decline in reviews in 2020 warrants further investigation to understand the long-term impacts of external factors (COVID-19 pandemic) on the short-term rental market. This analysis helps prepare for future disruptions.</p>
                  </div>

                  <div className="bg-gradient-to-r from-pink-900/30 to-pink-800/20 border border-pink-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="text-pink-400 mr-2">⭐</span>
                      Best Practices
                    </h3>
                    <p className="text-gray-300 leading-relaxed">Hosts with high review counts could be studied for best practices to enhance guest experiences across the board. Their success strategies in Manhattan and Brooklyn can be replicated by other hosts to improve performance.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conclusion" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Conclusion and Insights</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-6 leading-relaxed">
                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Market Overview</h3>
                    <p className="mb-4">
                      The data indicates that <strong>Manhattan and Brooklyn</strong> are the most active markets for Airbnb in NYC, with the highest number of bookings, reviews, and overall revenue potential due to higher average prices. There is a significant seasonal influence on bookings, with a peak in the summer months, suggesting the potential for dynamic pricing strategies to maximize revenue.
                    </p>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Growth Opportunities</h3>
                    <p className="mb-4">
                      The lower activity in the <strong>Bronx and Staten Island</strong> presents an opportunity for Airbnb to expand its market presence in these areas through targeted promotions and incentives for hosts. The disparity in average prices between neighborhoods indicates a diverse range of offerings, catering to different traveler budgets and preferences.
                    </p>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">External Factors Impact</h3>
                    <p className="mb-4">
                      The decline in reviews in 2020 warrants further investigation to understand the long-term impacts of external factors on the short-term rental market. Hosts with high review counts could be studied for best practices to enhance guest experiences across the board.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-blue-400 mr-2">📊</span>
                      Summary
                    </h3>
                    <p className="text-lg">
                      <strong>In summary,</strong> Airbnb hosts and stakeholders can leverage this data to make informed decisions regarding property investments, operational strategies, and market positioning to capitalize on the vibrant NYC short-term rental market.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Key Takeaways
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          Manhattan & Brooklyn dominate the market
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          Strong seasonal patterns favor summer months
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          Significant price variability across neighborhoods
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          Growth potential in underserved boroughs
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                        <span className="text-purple-400 mr-2">→</span>
                        Strategic Recommendations
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          Implement dynamic pricing for seasonal optimization
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          Target promotions in Bronx & Staten Island
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          Study top hosts for best practices
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          Monitor external factors affecting demand
                        </li>
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

export default AirbnbAnalysis
