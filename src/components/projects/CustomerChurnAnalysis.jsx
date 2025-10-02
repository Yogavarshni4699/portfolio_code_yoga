import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const CustomerChurnAnalysis = () => {
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
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Customer Churn Analysis (Tableau)</h1>
            <p className="text-xl text-gray-300">Subscription Business Intelligence & Customer Retention Analytics</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="px-4 py-2 bg-green-500/20 text-green-400">Done</Badge>
            <Badge className="px-4 py-2 bg-blue-500/20 text-blue-400">January 4, 2024</Badge>
            <Badge className="px-4 py-2 bg-purple-500/20 text-purple-400">Data Visualization & BI</Badge>
          </div>

          <div className="flex gap-4 mb-8 flex-wrap">
            
            <a href="https://www.notion.so/Customer-Churn-Analysis-Tableau-f04283d5dcd848aa9ec482e83e0a2bb6" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              Notion
            </a>

            <a href="https://github.com/Yogavarshni4699/Customer-Churn---Tableau" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              GitHub
            </a>

            <a href="https://public.tableau.com/app/profile/yogavarshni.ramachandran/viz/CustomerChurnAnalysis_17061728390160/Dashboard2?publish=yes" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              Tableau Dashboard
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
                    The provided dashboard images offer a comprehensive analysis of customer churn data for a subscription-based business. Customer churn, the rate at which customers stop doing business with an entity, is a critical metric for businesses relying on recurring revenue streams. The data spans various dimensions, including geography, customer tier, churn reason, and industry, which can provide actionable insights for decision-makers.
                  </p>

                  <div className="mt-6 space-y-4">
                    <h3 className="text-xl font-bold text-white mb-4">Dashboard Previews</h3>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-300 mb-3">Dashboard 1: Churn Overview & Metrics</h4>
                      <img src="/assets/churn1.png" alt="Customer Churn Analysis Dashboard 1" className="w-full rounded-lg border border-gray-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-300 mb-3">Dashboard 2: Detailed Analytics & Insights</h4>
                      <img src="/assets/churn2.png" alt="Customer Churn Analysis Dashboard 2" className="w-full rounded-lg border border-gray-700" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Business Use Case</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <p>
                    Businesses with subscription models can utilize such data to identify patterns and root causes of customer churn. By analyzing churn by region, subscription plan, industry, and support ticket types, companies can develop targeted strategies to retain customers.
                  </p>
                  <p>
                    This data is precious for customer success teams, Go-To-Market Strategies, Marketing strategists, and Product Managers who aim to improve customer retention, optimize product offerings, and tailor communication strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Dataset Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start"><span className="text-blue-400 mr-3">1.</span>Current Active Customers</li>
                    <li className="flex items-start"><span className="text-blue-400 mr-3">2.</span>Churned Customers</li>
                    <li className="flex items-start"><span className="text-blue-400 mr-3">3.</span>Customer Support Ticket Data</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Tools Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Tableau", "Customer Analytics", "Churn Analysis", "Business Intelligence", "Statistical Analysis", "Data Visualization"].map((tool, index) => (
                      <Badge key={index} className="bg-blue-500/20 text-blue-400">{tool}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Analysis and Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">1. Customer Subscription Metrics</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• The business has 19,047 total customers and a Monthly Recurring Revenue (MRR) of $42,378,207</li>
                      <li>• Churn evenly distributed across different subscription plans with slight variations between regions</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">2. Churn Analysis</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• Total churn of 2,573,389 with higher incidence of cancellations (4,944) compared to downgrades (3,733)</li>
                      <li>• Churn by Tier and Industry shows significant variability, with NA region and Business Services experiencing highest churn</li>
                      <li>• Churn by Account Age indicates newer accounts have positive MRR change despite churn</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">3. Product Performance</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• ClientFlow CRM has the highest number of customers, while SalesPrime Classic has the fewest</li>
                      <li>• Varying churn rates across customer segments and products indicate potential issues with specific products</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">4. Churn Prediction and Support Ticket Analysis</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• Stable outlook with slight increase in churn expected in Q4</li>
                      <li>• Most churn accounts have tickets marked as 'Open' or 'In Progress', suggesting correlation between unresolved support tickets and churn</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">5. Geographic Churn Distribution</h3>
                    <ul className="text-gray-300 space-y-2 ml-4">
                      <li>• Russia, Canada, and United Kingdom as top three countries experiencing churn</li>
                      <li>• 'Business' reasons are the leading cause of churn</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Strategic Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">High-Risk Customer Identification</h3>
                    <p className="text-gray-300">Analysis reveals specific customer segments with elevated churn probability, enabling proactive retention campaigns targeting the most vulnerable accounts.</p>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Geographic Opportunity Mapping</h3>
                    <p className="text-gray-300">Regional churn analysis uncovers underperforming markets and successful retention models that can be replicated across similar geographic segments.</p>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Revenue Protection Strategy</h3>
                    <p className="text-gray-300">Tier-based churn analysis prioritizes retention efforts on high-value customers, maximizing the ROI of customer success initiatives.</p>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Root Cause Optimization</h3>
                    <p className="text-gray-300">Systematic categorization of churn reasons enables targeted product and service improvements, addressing fundamental issues driving customer dissatisfaction.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conclusion" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Strategic Recommendations</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4 leading-relaxed">
                  <p>
                    The comprehensive churn analysis reveals critical patterns across geographic, demographic, and behavioral dimensions that directly impact customer retention. The data-driven insights enable targeted interventions and strategic resource allocation for maximum retention effectiveness.
                  </p>
                  <p>
                    Key findings indicate that proactive engagement based on predictive indicators can significantly reduce churn rates, while geographic and tier-specific strategies maximize retention ROI.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Implementation Roadmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      Deploy predictive churn models based on identified risk factors and temporal patterns
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      Implement tier-specific retention campaigns targeting high-value customer segments
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      Establish geographic-specific customer success protocols for underperforming regions
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      Address root cause issues identified through systematic churn reason analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      Establish continuous monitoring dashboard for real-time churn prevention
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Business Impact</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  This analytical framework empowers subscription businesses to transform reactive customer support into proactive retention management. By leveraging data-driven insights across geographic, tier, and behavioral dimensions, organizations can optimize customer lifetime value and build sustainable competitive advantages through superior retention performance.
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default CustomerChurnAnalysis
