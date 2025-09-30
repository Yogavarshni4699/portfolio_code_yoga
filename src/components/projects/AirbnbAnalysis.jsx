import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const AirbnbAnalysis = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-8 max-w-6xl pt-20 py-20">

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
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">1. Total Bookings by Neighborhood Group and Room Type</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• Manhattan dominates the market with the highest number of bookings, particularly for entire homes and apartments</li>
                      <li>• Brooklyn follows with substantial bookings, indicating a popular choice for Airbnb users</li>
                      <li>• Queens, Bronx, and Staten Island show fewer bookings</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">2. Average Price by Neighborhood Group and Room Type</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• Manhattan listings are the most expensive, especially for entire homes/apartments</li>
                      <li>• Bronx listings are the most affordable, which could correlate with lower demand</li>
                      <li>• Staten Island shows a higher average price for private rooms compared to other boroughs</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">3. Total Reviews by Year</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• Growth trend in reviews from 2011 to 2019 suggests increasing Airbnb usage</li>
                      <li>• Abrupt decline in 2020 attributed to COVID-19 pandemic</li>
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
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">Market Leaders</h3>
                    <p className="text-gray-300">Manhattan and Brooklyn are the most active markets for Airbnb in NYC, with the highest number of bookings, reviews, and overall revenue potential due to higher average prices.</p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">Seasonal Patterns</h3>
                    <p className="text-gray-300">Significant seasonal influence on bookings, with a peak in the summer months, suggesting potential for dynamic pricing strategies.</p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">Growth Opportunities</h3>
                    <p className="text-gray-300">Lower activity in the Bronx and Staten Island presents expansion opportunities through targeted promotions.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conclusion" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Conclusion</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4 leading-relaxed">
                  <p>
                    The data indicates that Manhattan and Brooklyn are the most active markets for Airbnb in NYC, with the highest number of bookings, reviews, and overall revenue potential due to higher average prices. There is a significant seasonal influence on bookings, with a peak in the summer months, suggesting the potential for dynamic pricing strategies to maximize revenue.
                  </p>
                  <p>
                    The lower activity in the Bronx and Staten Island presents an opportunity for Airbnb to expand its market presence in these areas through targeted promotions and incentives for hosts.
                  </p>
                  <p>
                    In summary, Airbnb hosts and stakeholders can leverage this data to make informed decisions regarding property investments, operational strategies, and market positioning to capitalize on the vibrant NYC short-term rental market.
                  </p>
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
