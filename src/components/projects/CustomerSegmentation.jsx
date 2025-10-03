import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const CustomerSegmentation = () => {
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
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Customer Segmentation Models in Python</h1>
            <p className="text-xl text-gray-300">Unsupervised machine learning using K-Means clustering to identify distinct customer segments based on RFM (Recency, Frequency, Monetary) analysis</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="px-4 py-2 bg-green-500/20 text-green-400">Done</Badge>
            <Badge className="px-4 py-2 bg-blue-500/20 text-blue-400">October 2, 2021</Badge>
            <Badge className="px-4 py-2 bg-purple-500/20 text-purple-400">Machine Learning</Badge>
          </div>

          <div className="flex gap-4 mb-8 flex-wrap">
            <a href="https://www.notion.so/Customer-Segmentation-Models-in-Python-b1424d7d27544e16b456245437bae1af" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
                Notion
              </a>
            <a href="https://github.com/Yogavarshni4699/Customer_Segmentation" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              GitHub
            </a>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap gap-4 bg-transparent mb-8 border-0 justify-start">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Overview</TabsTrigger>
              <TabsTrigger value="data" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Data & RFM</TabsTrigger>
              <TabsTrigger value="model" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Model Building</TabsTrigger>
              <TabsTrigger value="results" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Results</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Customer segmentation models are essential for dividing a company's clients into different user groups based on shared characteristics. This project leverages unsupervised machine learning algorithms such as K-Means clustering to identify patterns in customer behavior that often go unnoticed by the human eye.
                  </p>
                  <p>
                    Using an e-commerce dataset with transaction information from around 4,000 customers, this analysis creates distinct customer segments based on RFM (Recency, Frequency, Monetary) metrics to enable targeted marketing strategies and improve customer retention.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Business Use Case</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <p>
                    <strong>Example - H&M:</strong> After creating a customer segmentation model, companies can identify customers who always wait for special offers before making purchases, classifying them as "thrifty shoppers." Every time a new promotion is released, the marketing team sends curated advertisements highlighting product affordability to this segment.
                  </p>
                  <p>
                    This targeted approach increases conversion rates and sales by sending the right message to the right customer at the right time.
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
                      <strong>Source:</strong> E-Commerce Dataset from Kaggle
                    </p>
                    <p>
                      <strong>Size:</strong> ~4,000 customers with transaction data
                    </p>
                    <p>
                      <strong>Features:</strong> InvoiceNo, StockCode, Description, Quantity, InvoiceDate, UnitPrice, CustomerID, Country
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="gradient-text">Tools & Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "K-Means", "Excel", "Jupyter Notebook"].map((tool, index) => (
                        <Badge key={index} className="bg-blue-500/20 text-blue-400">{tool}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">RFM Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300">
                    RFM is commonly used in marketing to evaluate a client's value based on three key metrics:
                  </p>

                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-blue-400 mr-2">📅</span>
                      Recency
                    </h3>
                    <p className="text-gray-300 text-sm">
                      <strong>Definition:</strong> How recently has the customer made a purchase?
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      <strong>Calculation:</strong> Number of days since the customer's last purchase. Customers who bought recently receive higher recency scores.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-purple-400 mr-2">🔄</span>
                      Frequency
                    </h3>
                    <p className="text-gray-300 text-sm">
                      <strong>Definition:</strong> How often has the customer bought something?
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      <strong>Calculation:</strong> Total number of purchases made by each customer on the platform.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-green-400 mr-2">💰</span>
                      Monetary Value
                    </h3>
                    <p className="text-gray-300 text-sm">
                      <strong>Definition:</strong> How much money does the customer spend on average when making purchases?
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      <strong>Calculation:</strong> Total amount spent by each customer (Quantity × UnitPrice).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Data Preprocessing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>
                        <span className="text-white font-semibold">Feature Derivation</span>
                      </div>
                      <p className="text-sm text-gray-400">Calculate RFM metrics from raw transaction data</p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
                        <span className="text-white font-semibold">Outlier Detection</span>
                      </div>
                      <p className="text-sm text-gray-400">Remove outliers using Z-score method (threshold: 3)</p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
                        <span className="text-white font-semibold">Standardization</span>
                      </div>
                      <p className="text-sm text-gray-400">Scale values to follow normal distribution</p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">4</span>
                        <span className="text-white font-semibold">Deduplication</span>
                      </div>
                      <p className="text-sm text-gray-400">Remove duplicate customer entries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="model" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">K-Means Clustering Algorithm</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300">
                    K-Means clustering is an unsupervised machine learning algorithm that segments data into non-overlapping sub-groups that are distinct from each other. The goal is to identify patterns in customer behavior that can inform targeted marketing strategies.
                  </p>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Determining Optimal Clusters</h3>
                    <p className="text-gray-300 mb-4">
                      To find the optimal number of clusters, we use the <strong>Elbow Method</strong>. The algorithm is run for k=1 to k=10 clusters, and the Within-Cluster Sum of Squares (WCSS) is plotted. The "elbow" point indicates the optimal number of clusters.
                    </p>
                    <div className="mt-6">
                      <img src="/assets/ELBOW.png" alt="Elbow Method - Optimal Clusters" className="w-full rounded-lg border border-gray-700" />
                      <p className="text-sm text-gray-400 mt-2 text-center">The elbow occurs at k=4, indicating 4 optimal clusters</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Model Evaluation</h3>
                    <p className="text-gray-300 mb-2">
                      <strong>Silhouette Score:</strong> 0.44
                    </p>
                    <p className="text-gray-300 text-sm">
                      The silhouette coefficient ranges from -1 to +1. A score of 0.44 indicates reasonable cluster separation, meaning the model successfully identified distinct customer segments.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Customer Segments Identified</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300">
                    The K-Means algorithm successfully identified 4 distinct customer segments based on their RFM profiles:
                  </p>

                  <div className="space-y-6 mt-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-300 mb-3">Segment Analysis by RFM Metrics</h4>
                      <div className="space-y-4">
                        <div>
                          <img src="/assets/RES.png" alt="RFM Segment Analysis" className="w-full rounded-lg border border-gray-700" />
                        </div>
                        <div>
                          <img src="/assets/RES1.png" alt="RFM Segment Analysis - Recency, Frequency & Monetary" className="w-full rounded-lg border border-gray-700" />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                          <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">0</span>
                          Occasional Shoppers
                        </h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• <strong>Recency:</strong> Low (haven't purchased recently)</li>
                          <li>• <strong>Frequency:</strong> Low (infrequent purchases)</li>
                          <li>• <strong>Monetary:</strong> Low (small spending)</li>
                          <li className="mt-3 pt-3 border-t border-gray-700">
                            <strong>Strategy:</strong> Re-engagement campaigns, special discounts
                          </li>
                        </ul>
                      </div>

                      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                          <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>
                          At-Risk Customers
                        </h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• <strong>Recency:</strong> Medium (moderate time since last purchase)</li>
                          <li>• <strong>Frequency:</strong> Medium</li>
                          <li>• <strong>Monetary:</strong> Medium</li>
                          <li className="mt-3 pt-3 border-t border-gray-700">
                            <strong>Strategy:</strong> Retention campaigns, personalized offers
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                          <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
                          Loyal Customers
                        </h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• <strong>Recency:</strong> High (purchased recently)</li>
                          <li>• <strong>Frequency:</strong> High (frequent buyers)</li>
                          <li>• <strong>Monetary:</strong> Medium-High</li>
                          <li className="mt-3 pt-3 border-t border-gray-700">
                            <strong>Strategy:</strong> Loyalty rewards, exclusive access
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                          <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
                          VIP Champions
                        </h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• <strong>Recency:</strong> Very High (very recent purchases)</li>
                          <li>• <strong>Frequency:</strong> Very High (most frequent)</li>
                          <li>• <strong>Monetary:</strong> Very High (highest spenders)</li>
                          <li className="mt-3 pt-3 border-t border-gray-700">
                            <strong>Strategy:</strong> VIP treatment, early access, premium support
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Key Insights & Business Impact</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      <div>
                        <strong>Targeted Marketing:</strong> Each segment can receive customized messaging based on their purchasing behavior, increasing conversion rates
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      <div>
                        <strong>Resource Optimization:</strong> Focus marketing budget on high-value segments (VIP Champions and Loyal Customers) while implementing cost-effective re-engagement for occasional shoppers
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      <div>
                        <strong>Churn Prevention:</strong> Early identification of at-risk customers allows proactive retention strategies
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      <div>
                        <strong>Revenue Growth:</strong> Personalized promotions increase average order value and purchase frequency across all segments
                      </div>
                    </li>
                  </ul>

                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6 mt-6">
                    <h3 className="text-xl font-bold text-white mb-4">Conclusion</h3>
                    <p className="text-lg">
                      This customer segmentation model successfully leverages machine learning to transform raw transaction data into actionable business insights. By identifying four distinct customer segments with unique behavioral patterns, businesses can implement data-driven marketing strategies that improve customer retention, increase revenue, and optimize resource allocation.
                    </p>
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

export default CustomerSegmentation
