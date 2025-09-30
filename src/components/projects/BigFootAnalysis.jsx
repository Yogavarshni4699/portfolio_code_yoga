import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const BigFootAnalysis = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-8 max-w-6xl pt-20 py-20">

        {/* Header */}
        <div className="mb-12">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3">BigFoot Sighting Analysis (PowerBI)</h1>
            <p className="text-xl text-gray-300">At what weather conditions do most BigFoot sightings occur? Made for DataDNA Dataset Challenge</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="px-4 py-2 bg-green-500/20 text-green-400">Done</Badge>
            <Badge className="px-4 py-2 bg-blue-500/20 text-blue-400">February 15, 2023</Badge>
            <Badge className="px-4 py-2 bg-purple-500/20 text-purple-400">Data Visualization & BI</Badge>
          </div>

          <div className="flex gap-4 mb-8 flex-wrap">
            <a href="https://app.powerbi.com/groups/me/reports/3145d23b-1080-45a8-892b-64c3575766e5/ReportSection" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              📊 PowerBI Dashboard
            </a>
            <a href="https://www.notion.so/BigFoot-Sighting-Analysis-PowerBi-75c9ddadeae84e3687c34d97e7db5c7d" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              Notion
            </a>
            <a href="https://github.com/Yogavarshni4699/PowerBi_Visualization" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
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
                    BigFoot Sighting Analysis Using PowerBI - Fun project created for the DataDNA Dataset Challenge competition. This comprehensive analysis explores weather conditions, geographic patterns, and temporal trends of BigFoot sightings across the United States from 1921 to 2021.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Objective</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed">
                  At what weather conditions do most BigFoot sightings occur?
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">About the Data</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    The Bigfoot Field Researchers Organization (BFRO) – <a href="https://www.bfro.net" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">www.bfro.net</a> – is an organization dedicated to investigating the bigfoot/sasquatch mystery. This dataset contains sighting data publicly available on the BFRO website in a more digestible form.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="text-center glass-card p-4">
                      <div className="text-3xl font-black text-white mb-2">5,021</div>
                      <div className="text-xs text-gray-400 uppercase">Total Sightings</div>
                    </div>
                    <div className="text-center glass-card p-4">
                      <div className="text-3xl font-black text-white mb-2">1,036</div>
                      <div className="text-xs text-gray-400 uppercase">Counties</div>
                    </div>
                    <div className="text-center glass-card p-4">
                      <div className="text-3xl font-black text-white mb-2">100</div>
                      <div className="text-xs text-gray-400 uppercase">Years (1921-2021)</div>
                    </div>
                    <div className="text-center glass-card p-4">
                      <div className="text-3xl font-black text-white mb-2">49</div>
                      <div className="text-xs text-gray-400 uppercase">US States</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Competition Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 space-y-2">
                    <li><strong>Competition:</strong> DataDNA Dataset Challenge</li>
                    <li><strong>Organizer:</strong> Pomerol Partners</li>
                    <li><strong>Date:</strong> February 2023</li>
                    <li><strong>Prize:</strong> $400 Amazon Voucher from sponsors Pomerol, Qlik, Astrato, & NovyPro</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Dataset Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2">
                    <li>BigFoot sighting records from BFRO (1921-2021)</li>
                    <li>Weather condition data (temperature, humidity, visibility, pressure, wind speed, cloud cover)</li>
                    <li>Geographic data (state, county)</li>
                    <li>Temporal data (year, month, season)</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["PowerBI", "Excel", "Data Cleaning", "Data Visualization", "Statistical Analysis", "Weather Analytics", "Geographic Analysis"].map((tool, index) => (
                      <Badge key={index} className="bg-blue-500/20 text-blue-400">{tool}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Dashboard Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">📊 Main Dashboard Overview</h3>
                    <img src="/assets/bf0.png" alt="BigFoot Analysis Dashboard" className="w-full rounded-lg border border-gray-700 mb-4" />
                    <img src="/assets/bf1.png" alt="BigFoot Analysis Main Dashboard" className="w-full rounded-lg border border-gray-700" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">🌤️ Weather Conditions Analysis</h3>
                    <img src="/assets/bf2.png" alt="Weather Conditions Analysis" className="w-full rounded-lg border border-gray-700" />
                    <p className="text-gray-400 mt-4">
                      Detailed breakdown of weather patterns during BigFoot sightings, analyzing visibility, humidity, cloud cover, atmospheric pressure, dew point, and wind speed.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">🗺️ Geographic & Seasonal Patterns</h3>
                    <img src="/assets/bf3.png" alt="Geographic and Seasonal Analysis" className="w-full rounded-lg border border-gray-700" />
                    <p className="text-gray-400 mt-4">
                      State-wise sighting distribution and seasonal analysis. Summer and Fall emerge as peak seasons, with August being the month with highest sightings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">📈 Statistical Summary & Optimal Conditions</h3>
                    <img src="/assets/bf4.png" alt="Statistical Summary Dashboard" className="w-full rounded-lg border border-gray-700" />
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
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">📍 Geographic Patterns</h3>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <p className="text-white font-semibold mb-2">🥇 Top State: Washington</p>
                      <p className="text-gray-300 text-sm">Washington leads with 601 sightings, followed by California (417), Oregon (303), Florida (345), and Ohio (302)</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">📅 Temporal Patterns</h3>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <p className="text-white font-semibold mb-2">📆 Peak Period: 2004-2020</p>
                      <p className="text-gray-300 text-sm">Highest concentration of sightings with peak year in 2004 showing dramatic increase</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <p className="text-white font-semibold mb-2">🍂 Seasonal Trend</p>
                      <p className="text-gray-300 text-sm">Summer (32%) and Fall (33%) account for 65% of all sightings</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">🌡️ Optimal Weather Conditions</h3>
                    <div className="space-y-2">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                        <p className="text-white font-semibold">☀️ Visibility: High (10/10) - Clear skies preferred</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                        <p className="text-white font-semibold">💧 Humidity: 57.84% (Medium to High)</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                        <p className="text-white font-semibold">🌡️ Temperature: Avg High 67.12°F | Avg Low 48.64°F</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                        <p className="text-white font-semibold">☁️ Cloud Cover: Low - Clear weather conditions preferred</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conclusion" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Summary</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4 leading-relaxed">
                  <p>
                    Based on comprehensive analysis of data from 1921 to 2021 covering <strong>5,021 sightings</strong> across <strong>1,036 counties</strong>, several clear patterns emerge:
                  </p>

                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">🗺️ Geographic Pattern</p>
                    <p className="text-gray-300">Washington state leads significantly in BigFoot sightings, followed by the Pacific Northwest region, suggesting either habitat preference or regional reporting tendencies.</p>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">📅 Temporal Pattern</p>
                    <p className="text-gray-300">Sightings predominantly occur during Summer (32%) and Fall (33%) seasons, with August showing the highest monthly frequency.</p>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">🌤️ Weather Correlation</p>
                    <p className="text-gray-300">The most conducive conditions include high visibility (clear skies), medium to high humidity (57.84% average), low cloud cover, medium atmospheric pressure (1010-1025), and low to medium wind speeds.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">🏆 Competition Achievement</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  This project was created for the <strong>DataDNA Dataset Challenge</strong> by Pomerol Partners (February 2023), demonstrating advanced PowerBI visualization skills, statistical analysis capabilities, and creative problem-solving in a competitive environment.
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default BigFootAnalysis
