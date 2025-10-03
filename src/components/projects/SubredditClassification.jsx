import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigation } from '../Navigation'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

const SubredditClassification = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation onPageChange={() => {}} currentPage="" />

      <div className="container mx-auto px-4 sm:px-8 pt-24 pb-16">
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Projects
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-orange-500/20 text-orange-400 border border-orange-500/30">Big Data & ML</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 gradient-text">
            Classification of Subreddit Posts (PySpark)
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl">
            Automatically classifying Reddit posts into their correct subreddits using big data and machine learning techniques. Leveraging both scikit-learn and PySpark pipelines to handle large-scale text data for efficient content organization.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="https://www.notion.so/Classification-of-Subreddit-Posts-Pyspark-1bb5280b487b8000a4d0eb383f9fc44a"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300 uppercase tracking-wide text-sm"
            >
              NOTION
            </a>
            <a
              href="https://github.com/Yogavarshni4699/Reddit_Classification_Pyspark"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300 uppercase tracking-wide text-sm"
            >
              GITHUB
            </a>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="glass-card p-1 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pipeline">Data Pipeline</TabsTrigger>
            <TabsTrigger value="models">Models & Results</TabsTrigger>
            <TabsTrigger value="insights">Key Insights</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Project Goal</h2>
                <p className="text-gray-300 mb-4">
                  Classify Reddit posts into their respective subreddits using both traditional machine learning (scikit-learn) and distributed computing (PySpark) to manage vast amounts of content and automatically categorize posts, improving content discoverability and user engagement.
                </p>
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Target Subreddits</h3>
                  <div className="flex flex-wrap gap-2">
                    {['personalfinance', 'travel', 'cooking', 'plants', 'programming'].map((sub, idx) => (
                      <span key={idx} className="bg-orange-500/20 px-3 py-1 rounded-full text-sm text-orange-300">
                        r/{sub}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Technical Architecture</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">scikit-learn Pipeline</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-green-400">✓</span>
                        <span>Single-node processing</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-green-400">✓</span>
                        <span>NLTK stopword removal</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-green-400">✓</span>
                        <span>TF-IDF vectorization</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-green-400">✓</span>
                        <span>StandardScaler normalization</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-green-400">✓</span>
                        <span>GridSearchCV tuning</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">PySpark Pipeline</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-blue-400">✓</span>
                        <span>Distributed cluster processing</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-blue-400">✓</span>
                        <span>RegexTokenizer + StopWordsRemover</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-blue-400">✓</span>
                        <span>HashingTF + IDF</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-blue-400">✓</span>
                        <span>VectorAssembler + StandardScaler</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-blue-400">✓</span>
                        <span>MLlib model optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Key Technologies</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['PySpark', 'Scikit-learn', 'Python', 'Jupyter', 'NLTK', 'Pandas', 'Pushshift.io', 'MLlib'].map((tool, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-300">{tool}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Project Highlights</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Scalability</h3>
                    <p className="text-sm text-gray-300">Distributed processing with PySpark for handling large-scale Reddit data</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">High Accuracy</h3>
                    <p className="text-sm text-gray-300">Achieved 99% accuracy with Decision Tree, 89% with Random Forest</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Comprehensive EDA</h3>
                    <p className="text-sm text-gray-300">In-depth analysis of text features, bigrams, and trigrams</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Project Methodology</h2>
                <img
                  src="/assets/spa1.png"
                  alt="Project Methodology and Workflow"
                  className="w-full rounded-lg border border-gray-700"
                />
              </Card>
            </div>
          </TabsContent>

          {/* Pipeline Tab */}
          <TabsContent value="pipeline">
            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Data Extraction & Preparation</h2>
                <div className="space-y-4 text-gray-300">
                  <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Data Source Pipeline</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-orange-400 font-bold">1.</span>
                        <div>
                          <p className="font-semibold text-white">Data Download</p>
                          <p className="text-sm">Retrieved Reddit data from Pushshift.io for 5 subreddits</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-orange-400 font-bold">2.</span>
                        <div>
                          <p className="font-semibold text-white">Format Conversion</p>
                          <p className="text-sm">Converted .zst_blocks → .zst_files → CSV format</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-orange-400 font-bold">3.</span>
                        <div>
                          <p className="font-semibold text-white">Data Ingestion</p>
                          <p className="text-sm">Loaded into pandas DataFrames and Spark DataFrames</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Data Cleaning Process</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">Removed Elements</h3>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Irrelevant columns (URLs, permalinks)</li>
                        <li>• Deleted/removed text entries</li>
                        <li>• NaN and missing values</li>
                        <li>• Programming subreddit (only 147 rows)</li>
                      </ul>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">Retained Features</h3>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Title and selftext (main text features)</li>
                        <li>• Numeric: score, num_comments</li>
                        <li>• Categorical: link_flair_text</li>
                        <li>• Target: subreddit label</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Feature Engineering</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">scikit-learn Transformations</h3>
                  <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                      <li><strong>Text Processing:</strong> NLTK stopword removal + lemmatization</li>
                      <li><strong>Label Encoding:</strong> LabelEncoder for target subreddit</li>
                      <li><strong>Categorical Encoding:</strong> OrdinalEncoder for link_flair_text</li>
                      <li><strong>Vectorization:</strong> TF-IDF transformation for title + selftext</li>
                      <li><strong>Scaling:</strong> StandardScaler for numeric columns</li>
                    </ol>
                  </div>

                  <h3 className="text-lg font-semibold text-white mt-6">PySpark Transformations</h3>
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4">
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                      <li><strong>Target Encoding:</strong> StringIndexer for subreddit labels</li>
                      <li><strong>Text Tokenization:</strong> RegexTokenizer for word extraction</li>
                      <li><strong>Stopword Removal:</strong> StopWordsRemover transformer</li>
                      <li><strong>Term Frequency:</strong> HashingTF for token hashing</li>
                      <li><strong>IDF Weighting:</strong> IDF to weight term importance</li>
                      <li><strong>Feature Assembly:</strong> VectorAssembler to combine all features</li>
                      <li><strong>Scaling:</strong> StandardScaler for normalization</li>
                    </ol>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Data Transformation Pipeline</h2>
                <img
                  src="/assets/spa2.png"
                  alt="Data Transformation and Feature Engineering"
                  className="w-full rounded-lg border border-gray-700"
                />
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Exploratory Data Analysis</h2>
                <div className="space-y-4 text-gray-300">
                  <p>Performed comprehensive EDA including:</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                      <h4 className="font-semibold text-white mb-1 text-sm">Numeric Analysis</h4>
                      <p className="text-xs">Distribution of num_comments, score</p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <h4 className="font-semibold text-white mb-1 text-sm">Categorical Analysis</h4>
                      <p className="text-xs">Post counts per subreddit</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                      <h4 className="font-semibold text-white mb-1 text-sm">Text Analysis</h4>
                      <p className="text-xs">Common words, bigrams, trigrams</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Models Tab */}
          <TabsContent value="models">
            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Model Evaluation Metrics</h2>
                <img
                  src="/assets/spa3.png"
                  alt="Model Evaluation and Performance Metrics"
                  className="w-full rounded-lg border border-gray-700"
                />
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">PySpark Model Results</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4">
                      <h3 className="text-lg font-bold text-white mb-3">Decision Tree</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Validation Accuracy:</span>
                          <span className="text-green-400 font-bold">0.99</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Test Accuracy:</span>
                          <span className="text-green-400 font-bold">0.99</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">F1 Score:</span>
                          <span className="text-green-400 font-bold">0.9932</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-green-500/20">
                        <p className="text-xs text-gray-300">Best overall performer</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h3 className="text-lg font-bold text-white mb-3">Random Forest</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Validation Accuracy:</span>
                          <span className="text-blue-400 font-bold">0.89</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Test Accuracy:</span>
                          <span className="text-blue-400 font-bold">0.89</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">F1 Score:</span>
                          <span className="text-blue-400 font-bold">0.8782</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-blue-500/20">
                        <p className="text-xs text-gray-300">Strong robust metrics</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-4">
                      <h3 className="text-lg font-bold text-white mb-3">Logistic Regression</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Validation Accuracy:</span>
                          <span className="text-orange-400 font-bold">0.68</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Test Accuracy:</span>
                          <span className="text-orange-400 font-bold">0.67</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">F1 Score:</span>
                          <span className="text-orange-400 font-bold">0.6306</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-orange-500/20">
                        <p className="text-xs text-gray-300">Baseline comparison</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Model Hyperparameters</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-3">Random Forest Configuration</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div>
                        <span className="text-gray-400">numTrees:</span>
                        <span className="text-white font-mono ml-2">400</span>
                      </div>
                      <div>
                        <span className="text-gray-400">maxBins:</span>
                        <span className="text-white font-mono ml-2">40</span>
                      </div>
                      <div>
                        <span className="text-gray-400">maxDepth:</span>
                        <span className="text-white font-mono ml-2">Tuned</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Tuning:</span>
                        <span className="text-white font-mono ml-2">GridSearchCV</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Model Comparison Analysis</h2>
                <img
                  src="/assets/spa4.png"
                  alt="scikit-learn vs PySpark Model Comparison"
                  className="w-full rounded-lg border border-gray-700"
                />
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">scikit-learn vs PySpark</h2>
                <div className="space-y-4 text-gray-300">
                  <p>Key differences observed between implementations:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">Performance Factors</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Different algorithmic optimizations</li>
                        <li>• Distributed vs single-node processing</li>
                        <li>• Variation in default parameters</li>
                        <li>• Different random seed handling</li>
                      </ul>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">Consistency Findings</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Random Forest: Top performer in both</li>
                        <li>• Decision Tree: Exceptional accuracy</li>
                        <li>• Similar ranking across platforms</li>
                        <li>• Preprocessing impacts results</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights">
            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Key Observations</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-white mb-2">1. Data Imbalance Handling</h3>
                    <p className="text-sm text-gray-300">
                      Subreddits like personalfinance and travel had significantly more posts than others. Used stratified splits to ensure representative training/test sets and prevent skewed classifier performance.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-white mb-2">2. Small Dataset Removal</h3>
                    <p className="text-sm text-gray-300">
                      The 'programming' subreddit had only ~147 rows, making it too small for robust modeling. Removing it prevented skewed results and improved overall model reliability.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-white mb-2">3. Feature Combination Impact</h3>
                    <p className="text-sm text-gray-300">
                      Experimented with text-only features (title + selftext) versus combined features including numeric/categorical metadata. Combined features consistently improved model accuracy by 5-10%.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-white mb-2">4. Scalability Advantage</h3>
                    <p className="text-sm text-gray-300">
                      PySpark demonstrated superior scalability for larger datasets, while scikit-learn provided simpler implementation for moderately sized data. Both approaches achieved comparable accuracy.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Business Impact</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Content Organization</h3>
                    <p className="text-sm text-gray-300">Automated classification improves content discoverability and reduces manual moderation effort</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">User Experience</h3>
                    <p className="text-sm text-gray-300">Real-time post classification enables better content recommendations and engagement</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Scalable Solution</h3>
                    <p className="text-sm text-gray-300">PySpark enables processing of millions of posts across hundreds of subreddits</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Moderation Support</h3>
                    <p className="text-sm text-gray-300">Assists moderators in identifying misplaced posts and maintaining subreddit quality</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Future Enhancements</h2>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-white mb-1">1. Real-Time Classification</h3>
                    <p className="text-sm text-gray-300">Implement Spark Structured Streaming for real-time post classification as content is created</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-white mb-1">2. Advanced NLP</h3>
                    <p className="text-sm text-gray-300">Incorporate Word2Vec or BERT embeddings to capture deeper semantic context and improve accuracy</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-white mb-1">3. Multi-Label Classification</h3>
                    <p className="text-sm text-gray-300">Extend to detect posts that span multiple subreddit themes for cross-posting recommendations</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-l-4 border-orange-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-white mb-1">4. Expanded Coverage</h3>
                    <p className="text-sm text-gray-300">Scale to hundreds of subreddits with hierarchical classification for fine-grained categorization</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Technical Learnings</h2>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <p className="text-sm"><strong>Big Data Processing:</strong> Successfully implemented distributed computing with PySpark for large-scale text classification</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <p className="text-sm"><strong>Pipeline Development:</strong> Built end-to-end ML pipelines in both scikit-learn and PySpark with comparable performance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <p className="text-sm"><strong>NLP Techniques:</strong> Applied advanced text preprocessing including tokenization, TF-IDF, and HashingTF/IDF</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <p className="text-sm"><strong>Model Optimization:</strong> Leveraged GridSearchCV and hyperparameter tuning to achieve 99% accuracy with Decision Trees</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <p className="text-sm"><strong>Data Engineering:</strong> Managed data extraction, transformation, and loading (ETL) from raw Reddit dumps to production-ready datasets</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                <p className="text-gray-300 leading-relaxed">
                  This project successfully demonstrated end-to-end application of data science and big data engineering to a real-world classification problem. By extracting and cleaning large Reddit datasets, performing comprehensive EDA, and building multi-step pipelines in both scikit-learn and PySpark, we achieved exceptional classification accuracy (up to 99%). The work illustrates how big data technologies like Apache Spark can meaningfully improve the efficiency and scalability of machine learning workflows, especially when dealing with large-scale text data such as Reddit posts.
                </p>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default SubredditClassification