import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const WebAppSalesAnalysis = () => {
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
            <p className="text-xl text-gray-300">End-to-end system with operational and analytical modules for real-time order tracking and sales insights</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="px-4 py-2 bg-green-500/20 text-green-400">Done</Badge>
            <Badge className="px-4 py-2 bg-purple-500/20 text-purple-400">Database Design & Analytics</Badge>
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
              <TabsTrigger value="architecture" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Database Architecture</TabsTrigger>
              <TabsTrigger value="modules" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">System Modules</TabsTrigger>
              <TabsTrigger value="technical" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Technical Aspects</TabsTrigger>
              <TabsTrigger value="conclusion" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Conclusion</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    The project is an end-to-end application designed to transform the way sales and shipping data are managed and analyzed. It provides a complete solution that caters to both customer-facing operations and back-end business analytics. By integrating robust database design, data transformation (ETL), and interactive user interfaces, the system improves order tracking, feedback collection, and strategic decision-making.
                  </p>
                  <p>
                    This end-to-end system integrates a customer/staff operational module for real-time order tracking and feedback with an analytical module providing dynamic sales and shipment insights. It leverages a robust database design and interactive dashboards to enhance operational efficiency and support strategic decision-making.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Motivation & Data Sources</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <p>
                    Recognizing the critical role of customer feedback and the need for operational transparency in e-commerce, the project was initiated to empower businesses—especially those without their own shipment service. The data is primarily sourced from an e-commerce sales dataset on Kaggle, supplemented by additional synthetic data from Mockaroo (for names, addresses, etc.) and cross-checked using ChatGPT.
                  </p>
                  <p>
                    This mix of sources ensures that both real and simulated data contribute to a robust, practical solution.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Application Design and Technologies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">The application is built using a mix of modern tools and technologies:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Core Technologies</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• <strong>Python:</strong> Core programming language</li>
                        <li>• <strong>MySQL Workbench:</strong> Database design & ERD modeling</li>
                        <li>• <strong>PyQt Designer:</strong> Interactive UI creation</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Libraries & Frameworks</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• <strong>Pandas:</strong> Data manipulation</li>
                        <li>• <strong>Sklearn:</strong> Machine learning</li>
                        <li>• <strong>PyQt5:</strong> UI framework</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4">This technology stack ensures that the system is both scalable and user-friendly.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Tools Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "SQL Workbench", "PyQt", "MySQL", "Pandas", "Sklearn", "ETL", "Database Design", "Data Analytics", "PyQt5"].map((tool, index) => (
                      <Badge key={index} className="bg-blue-500/20 text-blue-400">{tool}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="architecture" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Database Architecture & ETL Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    The project employs a dual-database strategy to handle both real-time operations and historical analytics efficiently.
                  </p>

                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-blue-400 mr-2">⚡</span>
                      Operational Database
                    </h3>
                    <div className="space-y-3 text-gray-300">
                      <p>
                        This relational database is designed to handle day-to-day transactions and store the latest 30 days of data. It follows a normalized schema that captures details such as order information, customer data, product details, staff interactions, and shipping updates.
                      </p>
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-white mb-3">Relational Schema</h4>
                        <img src="/assets/RS.png" alt="Relational Schema" className="w-full rounded-lg border border-gray-700" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-purple-400 mr-2">📊</span>
                      Analytical Database
                    </h3>
                    <div className="space-y-3 text-gray-300">
                      <p>
                        For historical analysis, data is archived for the past three months in a star schema format. The central fact table (sales_fact_table) connects with various dimension tables (product_dimension, date_dimension, location_dimension, and fulfilment_dimension), enabling efficient slicing, dicing, and drill-down operations for in-depth analysis.
                      </p>
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-white mb-3">Star Schema</h4>
                        <img src="/assets/Star.png" alt="Star Schema" className="w-full rounded-lg border border-gray-700" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">ETL Process</h3>
                    <p className="text-gray-300 leading-relaxed">
                      The ETL process is implemented using Python and SQL. Data is extracted from the operational database, transformed to ensure quality and consistency, and then loaded into the analytical database. This ensures that the analytics module always has access to clean, up-to-date historical data for strategic insights.
                    </p>
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
                  <p className="text-gray-300">This module is focused on enhancing the customer and staff experience in real-time:</p>

                  <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-green-400 mr-2">👤</span>
                      Customer Interface
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>User Authentication:</strong> Customers can create new accounts or log in using existing credentials. Passwords are securely hashed (using the argon2 hasher) for enhanced security.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Order Tracking:</strong> Customers can view real-time updates on their order status, from processing to delivery.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Feedback System:</strong> Customers have the ability to rate and provide feedback on their order and shipping experience.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Personalized Recommendations:</strong> Based on past purchases and browsing behavior, the system offers product recommendations to encourage repeat business.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-blue-400 mr-2">👨‍💼</span>
                      Staff Interface
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Order Status Updates:</strong> Staff can log in via a dedicated portal to update the status of orders (e.g., shipped, pending, canceled).
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Communication with Customers:</strong> Updates made by staff are communicated back to customers in real time, ensuring transparency and timely notifications.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-300 italic">
                    These features streamline daily operations and improve customer satisfaction by ensuring clear communication and efficient order management.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Analytical Module</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300">The analytical module is designed to provide strategic insights through interactive dashboards and visualizations:</p>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Dashboards and Reports</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-3 mt-1">→</span>
                        <div>
                          <strong>Trend Analysis:</strong> Line charts display order and SKU counts over time, helping to identify sales trends and the impact of marketing efforts.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-3 mt-1">→</span>
                        <div>
                          <strong>Order Status Monitoring:</strong> Pie charts and bar charts reveal the distribution of order statuses, aiding in the assessment of fulfillment efficiency.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-3 mt-1">→</span>
                        <div>
                          <strong>Product and Geographic Insights:</strong> Visualizations such as bar charts and word clouds offer insights into product performance and geographic sales distribution.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-3 mt-1">→</span>
                        <div>
                          <strong>Drill-Down Capabilities:</strong> Users can interact with the dashboard (using combo boxes and interactive hover options) to filter data and drill down into specific aspects such as individual product performance or city-wise sales.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Interactivity and Export Options</h3>
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
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        The operational module is launched using a main Python file (e.g., <code className="bg-gray-700 px-2 py-1 rounded">main.py</code>), which orchestrates all customer and staff interactions.
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        The analytical module is run via a Jupyter Notebook (<code className="bg-gray-700 px-2 py-1 rounded">GUIApp.ipynb</code>) that builds and displays the interactive dashboards.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">ETL and Data Integration</h3>
                    <p className="text-gray-300">
                      An ETL pipeline is used to seamlessly transfer data from operational tables to analytical fact and dimension tables. This ensures that the analytical views are always updated with the latest operational data.
                    </p>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Security and Data Governance</h3>
                    <p className="text-gray-300">
                      Throughout the project, careful attention is paid to data security (e.g., password hashing using argon2) and maintaining data integrity through normalized schemas and robust ETL processes.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-yellow-400 mr-2">🚀</span>
                      Future Scope
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">→</span>
                        <strong>Real-Time Data Processing:</strong> Integrating live data streams for up-to-the-minute order and shipment updates
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">→</span>
                        <strong>Predictive Analytics:</strong> Implementing machine learning models to forecast trends and optimize inventory management
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">→</span>
                        <strong>Mobile Access:</strong> Developing mobile applications to provide remote access to both operational and analytical modules
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">→</span>
                        <strong>Enhanced UX and Security:</strong> Continuously refining the user interface and implementing advanced security measures
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">→</span>
                        <strong>Cloud Migration:</strong> Moving the application to a cloud-based infrastructure for improved scalability and cost efficiency
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conclusion" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Conclusion</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-6 leading-relaxed">
                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                    <p className="text-lg leading-relaxed">
                      From data extraction and transformation through a well-architected database design to interactive operational and analytical modules, the Sales-Shipment Analysis project represents a full-cycle solution. It improves both the customer experience by enabling real-time order tracking and feedback, and the strategic operations of the business by providing deep analytical insights through dynamic dashboards.
                    </p>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Project Impact</h3>
                    <p className="text-gray-300 leading-relaxed">
                      This comprehensive approach not only streamlines e-commerce operations but also empowers businesses with data-driven decision-making capabilities, setting a benchmark for future developments in sales and shipping analytics.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• End-to-end operational system</li>
                        <li>• Dual-database architecture (operational + analytical)</li>
                        <li>• Real-time order tracking & feedback</li>
                        <li>• Interactive analytical dashboards</li>
                        <li>• Secure authentication system</li>
                        <li>• ETL pipeline for data integration</li>
                      </ul>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                        <span className="text-purple-400 mr-2">📈</span>
                        Business Value
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Enhanced customer satisfaction</li>
                        <li>• Improved operational efficiency</li>
                        <li>• Data-driven strategic insights</li>
                        <li>• Streamlined order management</li>
                        <li>• Better resource allocation</li>
                        <li>• Scalable system architecture</li>
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

export default WebAppSalesAnalysis