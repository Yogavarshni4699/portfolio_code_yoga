import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const SalesAnalysis = () => {
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
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Web Application (+Database Design) - Sales Analysis</h1>
            <p className="text-xl text-gray-300">End-to-end system integrating customer/staff operations with analytical dashboards for real-time order tracking and strategic insights</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="px-4 py-2 bg-green-500/20 text-green-400">Done</Badge>
            <Badge className="px-4 py-2 bg-blue-500/20 text-blue-400">Database & Application Design</Badge>
          </div>

          <div className="flex gap-4 mb-8 flex-wrap">
            <a href="https://www.notion.so/Web-Application-Database-Design-Sales-Analysis-1bb5280b487b8043b257cf0cfb75b85e" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              Notion
            </a>

            <a href="https://github.com/Yogavarshni4699/Database_Design_and_Analytics" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              GitHub
            </a>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap gap-4 bg-transparent mb-8 border-0 justify-start">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Overview</TabsTrigger>
              <TabsTrigger value="architecture" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Architecture & Design</TabsTrigger>
              <TabsTrigger value="modules" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Modules</TabsTrigger>
              <TabsTrigger value="technical" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Technical Details</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    An end-to-end application designed to transform how sales and shipping data are managed and analyzed. This comprehensive solution integrates customer-facing operations with back-end business analytics, providing robust database design, ETL processes, and interactive user interfaces that improve order tracking, feedback collection, and strategic decision-making.
                  </p>
                  <p>
                    The system leverages a dual-database strategy with operational and analytical databases, enabling real-time order tracking for customers while providing historical insights for business intelligence.
                  </p>
                </CardContent>
              </Card>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="gradient-text">Motivation & Data Sources</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 space-y-4">
                    <p>
                      Recognizing the critical role of customer feedback and operational transparency in e-commerce, this project was initiated to empower businesses—especially those without their own shipment service.
                    </p>
                    <p>
                      <strong>Data Sources:</strong>
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start"><span className="text-blue-400 mr-3">•</span>E-commerce sales dataset from Kaggle</li>
                      <li className="flex items-start"><span className="text-blue-400 mr-3">•</span>Synthetic data from Mockaroo (names, addresses)</li>
                      <li className="flex items-start"><span className="text-blue-400 mr-3">•</span>Cross-validation using ChatGPT</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="gradient-text">Tools & Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "MySQL Workbench", "PyQt Designer", "Pandas", "Scikit-learn", "PyQt5", "ETL", "Database Design", "Star Schema"].map((tool, index) => (
                        <Badge key={index} className="bg-blue-500/20 text-blue-400">{tool}</Badge>
                      ))}
                    </div>
                    <div className="mt-6 space-y-2 text-gray-300 text-sm">
                      <p><strong>Python:</strong> Core programming language</p>
                      <p><strong>MySQL Workbench:</strong> Database design and ERD modeling</p>
                      <p><strong>PyQt Designer:</strong> Interactive UI development</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-white font-semibold text-lg">Operational Module</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start"><span className="text-green-400 mr-3">✓</span>User authentication with secure password hashing (argon2)</li>
                        <li className="flex items-start"><span className="text-green-400 mr-3">✓</span>Real-time order tracking</li>
                        <li className="flex items-start"><span className="text-green-400 mr-3">✓</span>Customer feedback system</li>
                        <li className="flex items-start"><span className="text-green-400 mr-3">✓</span>Personalized product recommendations</li>
                        <li className="flex items-start"><span className="text-green-400 mr-3">✓</span>Staff portal for order updates</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-white font-semibold text-lg">Analytical Module</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start"><span className="text-purple-400 mr-3">✓</span>Interactive dashboards with trend analysis</li>
                        <li className="flex items-start"><span className="text-purple-400 mr-3">✓</span>Order status monitoring (pie & bar charts)</li>
                        <li className="flex items-start"><span className="text-purple-400 mr-3">✓</span>Product & geographic insights</li>
                        <li className="flex items-start"><span className="text-purple-400 mr-3">✓</span>Drill-down capabilities</li>
                        <li className="flex items-start"><span className="text-purple-400 mr-3">✓</span>CSV export functionality</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="architecture" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Database Architecture</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-blue-400 mr-2">🗄️</span>
                      Dual-Database Strategy
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Operational Database (Latest 30 Days)</h4>
                        <p className="text-gray-300 text-sm mb-2">Relational database for day-to-day transactions with normalized schema capturing:</p>
                        <ul className="space-y-1 text-gray-300 text-sm ml-6">
                          <li>• Order information</li>
                          <li>• Customer data</li>
                          <li>• Product details</li>
                          <li>• Staff interactions</li>
                          <li>• Shipping updates</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Analytical Database (Past 3 Months)</h4>
                        <p className="text-gray-300 text-sm mb-2">Star schema for historical analysis with:</p>
                        <ul className="space-y-1 text-gray-300 text-sm ml-6">
                          <li>• <strong>Fact Table:</strong> sales_fact_table (central)</li>
                          <li>• <strong>Dimensions:</strong> product, date, location, fulfilment</li>
                          <li>• Efficient slicing, dicing, and drill-down operations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-purple-400 mr-2">🔄</span>
                      ETL Process
                    </h3>
                    <div className="space-y-3 text-gray-300">
                      <p>
                        <strong>Implementation:</strong> Python and SQL for data extraction, transformation, and loading
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">E</span>
                            <span className="text-white font-semibold">Extract</span>
                          </div>
                          <p className="text-sm text-gray-400">From operational database</p>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">T</span>
                            <span className="text-white font-semibold">Transform</span>
                          </div>
                          <p className="text-sm text-gray-400">Quality & consistency</p>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">L</span>
                            <span className="text-white font-semibold">Load</span>
                          </div>
                          <p className="text-sm text-gray-400">Into analytical database</p>
                        </div>
                      </div>
                      <p className="mt-4">
                        Ensures the analytics module always has access to clean, up-to-date historical data for strategic insights.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="modules" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Operational Module</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-green-400 mr-2">👥</span>
                      Customer Interface
                    </h3>
                    <div className="space-y-3 text-gray-300">
                      <div>
                        <h4 className="text-white font-semibold mb-2">User Authentication</h4>
                        <p className="text-sm">Customers can create new accounts or log in using existing credentials. Passwords are securely hashed using argon2 hasher for enhanced security.</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Order Tracking</h4>
                        <p className="text-sm">Real-time updates on order status, from processing to delivery.</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Feedback System</h4>
                        <p className="text-sm">Customers can rate and provide feedback on their order and shipping experience.</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Personalized Recommendations</h4>
                        <p className="text-sm">Based on past purchases and browsing behavior, the system offers product recommendations.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-blue-400 mr-2">💼</span>
                      Staff Interface
                    </h3>
                    <div className="space-y-3 text-gray-300">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Order Status Updates</h4>
                        <p className="text-sm">Staff can log in via a dedicated portal to update the status of orders (e.g., shipped, pending, canceled).</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Communication with Customers</h4>
                        <p className="text-sm">Updates made by staff are communicated back to customers in real time, ensuring transparency and timely notifications.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Analytical Module</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-purple-400 mr-2">📊</span>
                      Dashboards and Reports
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Trend Analysis</h4>
                        <p className="text-gray-300 text-sm">Line charts display order and SKU counts over time, helping to identify sales trends and the impact of marketing efforts.</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Order Status Monitoring</h4>
                        <p className="text-gray-300 text-sm">Pie charts and bar charts reveal the distribution of order statuses, aiding in the assessment of fulfillment efficiency.</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Product and Geographic Insights</h4>
                        <p className="text-gray-300 text-sm">Visualizations such as bar charts and word clouds offer insights into product performance and geographic sales distribution.</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Drill-Down Capabilities</h4>
                        <p className="text-gray-300 text-sm">Users can interact with the dashboard using combo boxes and interactive hover options to filter data and drill down into specific aspects such as individual product performance or city-wise sales.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-yellow-400 mr-2">🔄</span>
                      Interactivity and Export Options
                    </h3>
                    <p className="text-gray-300">
                      The dashboards allow users to apply filters dynamically, sort data in detailed tables, and export information to CSV for further analysis. This enhances both operational reporting and strategic decision-making.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technical" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Technical Aspects and Workflow</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Execution</h3>
                    <div className="space-y-3 text-gray-300">
                      <p>
                        <strong>Operational Module:</strong> Launched using a main Python file (e.g., main.py), which orchestrates all customer and staff interactions.
                      </p>
                      <p>
                        <strong>Analytical Module:</strong> Run via a Jupyter Notebook (GUIApp.ipynb) that builds and displays the interactive dashboards.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-blue-400 mr-2">🔄</span>
                      ETL and Data Integration
                    </h3>
                    <p className="text-gray-300">
                      An ETL pipeline is used to seamlessly transfer data from operational tables to analytical fact and dimension tables. This ensures that the analytical views are always updated with the latest operational data.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-green-400 mr-2">🔒</span>
                      Security and Data Governance
                    </h3>
                    <p className="text-gray-300">
                      Throughout the project, careful attention is paid to data security (e.g., password hashing) and maintaining data integrity through normalized schemas and robust ETL processes.
                    </p>
                  </div>

                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardHeader>
                      <CardTitle className="gradient-text">Future Scope</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">→</span>
                          <div>
                            <strong>Real-Time Data Processing:</strong> Integrating live data streams for up-to-the-minute order and shipment updates
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">→</span>
                          <div>
                            <strong>Predictive Analytics:</strong> Implementing machine learning models to forecast trends and optimize inventory management
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">→</span>
                          <div>
                            <strong>Mobile Access:</strong> Developing mobile applications to provide remote access to both operational and analytical modules
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">→</span>
                          <div>
                            <strong>Enhanced UX and Security:</strong> Continuously refining the user interface and implementing advanced security measures
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">→</span>
                          <div>
                            <strong>Cloud Migration:</strong> Moving the application to a cloud-based infrastructure for improved scalability and cost efficiency
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Conclusion</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed space-y-4">
                  <p className="text-lg">
                    From data extraction and transformation through a well-architected database design to interactive operational and analytical modules, the Sales-Shipment Analysis project represents a full-cycle solution. It improves both the customer experience by enabling real-time order tracking and feedback, and the strategic operations of the business by providing deep analytical insights through dynamic dashboards.
                  </p>
                  <p>
                    This comprehensive approach not only streamlines e-commerce operations but also empowers businesses with data-driven decision-making capabilities, setting a benchmark for future developments in sales and shipping analytics.
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

export default SalesAnalysis