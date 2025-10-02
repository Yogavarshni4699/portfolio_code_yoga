import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const SalesInsights = () => {
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
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Sales Insights (SQL & PowerBI)</h1>
            <p className="text-xl text-gray-300">Interactive Dashboards for Hardware Sales Analytics & Performance Tracking</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="px-4 py-2 bg-green-500/20 text-green-400">Done</Badge>
            <Badge className="px-4 py-2 bg-blue-500/20 text-blue-400">December 14, 2021</Badge>
            <Badge className="px-4 py-2 bg-purple-500/20 text-purple-400">Data Visualization & BI</Badge>
          </div>

          <div className="flex gap-4 mb-8 flex-wrap">
            <a href="https://www.notion.so/Sales-Insights-SQL-PowerBi-29a9f6d6f0cd4a13b518caf721a8b403" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              Notion
            </a>
            
            <a href="https://github.com/Yogavarshni4699/Data-visualization" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              GitHub
            </a>

            <a href="https://app.powerbi.com/groups/me/reports/8797f05a-6016-4aaf-a56e-532305979789/ReportSectionaf7031103000119047e0?experience=power-bi" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              PowerBI Dashboard
            </a>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap gap-4 bg-transparent mb-8 border-0 justify-start">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Overview</TabsTrigger>
              <TabsTrigger value="problem" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Problem & Solution</TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Key Insights</TabsTrigger>
              <TabsTrigger value="conclusion" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Impact & Conclusion</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Built interactive dashboards to track revenue numbers, sales quantity, profit margin, revenue contribution, top customers, and top products for a hardware company located all over India. The dashboards are published on both web and mobile applications, enabling stakeholders to make data-driven decisions in real-time.
                  </p>
                  <p>
                    The visualization consists of Profit Analysis, Key Insights, and Performance Insights, designed to unlock sales insights that were previously not visible to the sales team for decision support and to automate the data gathering process.
                  </p>

                  <div className="mt-6 space-y-4">
                    <h3 className="text-xl font-bold text-white mb-4">Dashboard Previews</h3>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-300 mb-3">Key Insights Dashboard</h4>
                      <img src="/assets/s1.png" alt="Sales Insights Key Metrics" className="w-full rounded-lg border border-gray-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-300 mb-3">Profit Analysis Dashboard</h4>
                      <img src="/assets/s2.png" alt="Sales Profit Analysis" className="w-full rounded-lg border border-gray-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-300 mb-3">Performance Insights Dashboard</h4>
                      <img src="/assets/s3.png" alt="Sales Performance Insights" className="w-full rounded-lg border border-gray-700" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="gradient-text">Business Use Case</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 space-y-4">
                    <p>
                      <strong>Purpose:</strong> To unlock sales insights that are not visible before for the sales team for decision support & automate them to reduce manual time spent in data gathering.
                    </p>
                    <p>
                      <strong>End Results:</strong> An automated dashboard providing quick & latest sales insights in order to support data-driven decision-making.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="gradient-text">Stakeholders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start"><span className="text-blue-400 mr-3">•</span>Sales Director</li>
                      <li className="flex items-start"><span className="text-blue-400 mr-3">•</span>Marketing Team</li>
                      <li className="flex items-start"><span className="text-blue-400 mr-3">•</span>Customer Service Team</li>
                      <li className="flex items-start"><span className="text-blue-400 mr-3">•</span>Data & Analytics Team</li>
                      <li className="flex items-start"><span className="text-blue-400 mr-3">•</span>IT</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Success Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      Dashboard uncovering sales order insights with the latest data available
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      Sales team able to make better decisions & prove 10% cost savings of total spend
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      Sales Analysts stop data gathering manually to save 20% of business time and reinvest it in value-added activities
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Tools & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["PowerBI", "SQL", "Excel", "Data Modeling", "Star Schema", "ETL", "Data Visualization", "Business Intelligence"].map((tool, index) => (
                      <Badge key={index} className="bg-blue-500/20 text-blue-400">{tool}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Steps Followed for Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>
                        <span className="text-white font-semibold">Data Discovery</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
                        <span className="text-white font-semibold">Data Extraction</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
                        <span className="text-white font-semibold">Data Modeling (Star Schema)</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">4</span>
                        <span className="text-white font-semibold">Data Merging/Munging (SQL)</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">5</span>
                        <span className="text-white font-semibold">Data Cleaning & ETL</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">6</span>
                        <span className="text-white font-semibold">Building Dashboards</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="problem" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Problem Statement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Business Challenge</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      "Atliq" is a hardware company located all over India. Sales have been declining for the past few months. The company wants insights into the issues regarding business. Tracking all the records in a dynamically growing market is challenging. Reviewing large Excel files is tedious. It would be better to provide dashboards for stakeholders.
                    </p>
                    <div className="space-y-3 mt-4">
                      <div className="flex items-start">
                        <span className="text-red-400 mr-3 mt-1">→</span>
                        <div className="text-gray-300">Limited visibility into sales performance, profitability, and growth over time</div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-400 mr-3 mt-1">→</span>
                        <div className="text-gray-300">Difficulty in identifying areas for improvement in the sales process</div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-400 mr-3 mt-1">→</span>
                        <div className="text-gray-300">Need to increase revenue and optimize sales and marketing strategies</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Database Integration</h3>
                    <p className="text-gray-300 leading-relaxed">
                      The database contains all sales transactions, customers, products, and market information. After analyzing this database, it was integrated with Power BI. In PowerBI, ETL and data cleaning operations were performed to make it ready for building the dashboard.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Solution Approach</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Implemented Solution</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Sales Insights Dashboard:</strong> Created using Power BI to provide actionable insights into increasing revenue and sales performance
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Comprehensive Measures:</strong> Utilized Revenue, Profit Margin, Profit Contribution by Market, Sales by Market, Revenue Trend, Customer Type, and Sales Growth
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Customer Analysis:</strong> Analyzed customer data to identify trends, patterns, and areas for improvement in sales and profitability
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Strategic Optimization:</strong> Provided valuable insights to optimize sales and marketing strategies, increase revenue, and drive business success
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Key Skills Demonstrated</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Technical Skills</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• Data Analysis with measures</li>
                          <li>• Trend Identification</li>
                          <li>• Profit Analysis</li>
                          <li>• Data Visualization</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Business Skills</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• Stakeholder Communication</li>
                          <li>• Strategic Insights</li>
                          <li>• Performance Analysis</li>
                          <li>• Business Intelligence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Key Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-blue-400 mr-2">📊</span>
                      Revenue & Market Analysis
                    </h3>
                    <div className="space-y-3 text-gray-300">
                      <p>
                        <strong>Total Revenue:</strong> AtliQ has generated total revenue of <strong>985 million Rupees</strong>
                      </p>
                      <p>
                        <strong>Customer Base:</strong> Primary customer base stems from the <strong>E-commerce sector</strong>
                      </p>
                      <p>
                        <strong>Top Market:</strong> The Delhi region has demonstrated impressive growth in both revenue and market sales between 2017 and 2020
                      </p>
                      <p>
                        <strong>Revenue Decline:</strong> Gradual decline in revenue during Q3, with figures dropping below 200 million Rupees. Further investigation is warranted, particularly focusing on the transition from Q2 to Q3
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-purple-400 mr-2">💰</span>
                      Profit Analysis
                    </h3>
                    <div className="space-y-3 text-gray-300">
                      <p>
                        <strong>Highest Profit Margin:</strong> Delhi boasts the most substantial profit margin from revenue, standing at <strong>52.8%</strong>
                      </p>
                      <p>
                        <strong>Customer Rankings:</strong> Customers are ranked in descending order based on revenue, accompanied by their respective revenue contribution percentages
                      </p>
                      <p>
                        This analysis enables stakeholders to identify high-value customers and focus retention efforts accordingly
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-green-400 mr-2">📈</span>
                      Performance Insights
                    </h3>
                    <div className="space-y-3 text-gray-300">
                      <p>
                        <strong>Top Performer:</strong> Bhubaneswar exhibited the most noteworthy profitability with a <strong>10.5% profit margin</strong> in 2020
                      </p>
                      <p>
                        <strong>Revenue Pattern:</strong> Shows a peak in January, a dip in April, and a gradual return to average level from May to June
                      </p>
                      <p>
                        <strong>Recommendation:</strong> Conduct a thorough assessment of the revenue in April 2020 to provide insights for enhancing business strategies
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-yellow-400 mr-2">🎯</span>
                      Strategic Opportunities
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">→</span>
                        Focus on E-commerce sector for maximum revenue growth
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">→</span>
                        Replicate Delhi's success model in other regions
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">→</span>
                        Investigate Q3 revenue decline to prevent future drops
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">→</span>
                        Study April 2020 performance anomaly for insights
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conclusion" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Impact and Results</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-6 leading-relaxed">
                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Business Impact</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Improved Visibility:</strong> Enhanced visibility into sales performance, profitability, and growth over time
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Actionable Insights:</strong> Identified actionable insights to optimize sales and marketing strategies and increase revenue
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Data-Driven Decisions:</strong> Enabled data-driven decision-making and enhanced business performance
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Time Savings:</strong> Automated data gathering saving 20% of business time for sales analysts
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Cost Reduction:</strong> 10% cost savings of total spend through better decision-making
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-blue-400 mr-2">📊</span>
                      Conclusion
                    </h3>
                    <p className="text-lg leading-relaxed mb-4">
                      The Sales Insights Dashboard project successfully addressed the company's business needs by providing valuable insights into customer behavior, sales performance, and profitability. By utilizing data analysis and visualization skills, this project enabled informed decision-making, optimization of sales and marketing strategies, and ultimately drove business success.
                    </p>
                    <p className="leading-relaxed">
                      The dashboard created as part of this project is a powerful tool to increase revenue, improve profitability, and gain a competitive edge in the market.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Automated sales insights dashboard</li>
                        <li>• 10% cost savings achieved</li>
                        <li>• 20% time savings for analysts</li>
                        <li>• Real-time data-driven insights</li>
                      </ul>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                        <span className="text-purple-400 mr-2">💡</span>
                        Key Takeaways
                      </h4>
                      <p className="text-sm text-gray-300">
                        The project helped me learn more about creating interactive and visually appealing dashboards, communicating insights effectively to stakeholders, and empathizing with users to build better analytical solutions.
                      </p>
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

export default SalesInsights