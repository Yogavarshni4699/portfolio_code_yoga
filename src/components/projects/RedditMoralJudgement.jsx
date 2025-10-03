import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigation } from '../Navigation'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

const RedditMoralJudgement = () => {
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
            <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500/30">NLP & Machine Learning</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 gradient-text">
            Moral Judgement Dilemmas of Reddit
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl">
            Leveraging natural language processing and Machine learning techniques to analyze the textual content of posts and deliver an immediate judgment of "Yes" or "No" to the poster, simulating a virtual community response.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="https://www.notion.so/Moral-Judgement-Dilemmas-of-Reddit-NLP-ML-1bb5280b487b80ecbaebde347191af63"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300 uppercase tracking-wide text-sm"
            >
              NOTION
            </a>
            <a
              href="https://github.com/Yogavarshni4699/Moral_Judgement_Dilemmas_of_Reddit_-NLP-ML-/tree/main"
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
            <TabsTrigger value="data">Data Pipeline</TabsTrigger>
            <TabsTrigger value="models">Models & Results</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Project Rationale & Problem Statement</h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">The Problem</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Context:</strong> Reddit's r/AmItheJerk community allows users to post personal dilemmas seeking moral judgments from commenters (YTJ or NTJ)</li>
                      <li><strong>Challenge:</strong> Human-driven judgments rely on reader availability, causing delays for posts requiring quick moral feedback</li>
                      <li><strong>Goal:</strong> Automate these judgments using ML and NLP to provide near-instant feedback reflecting community consensus</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Objectives</h3>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li><strong>Data Acquisition:</strong> Collect posts and comments from r/AmItheJerk focusing on top-level verdict comments</li>
                      <li><strong>Model Development:</strong> Build and compare multiple ML models (Random Forest, Logistic Regression, Decision Tree, SVC, XGBoost)</li>
                      <li><strong>Deployment:</strong> Provide a user-facing Streamlit web app for automated classification</li>
                    </ol>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Technical Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Python', 'NLP', 'Scikit-learn', 'XGBoost', 'TF-IDF', 'SMOTE', 'Streamlit', 'Pushshift.io'].map((tool, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-300">{tool}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Large-Scale Data Processing</h3>
                    <p className="text-sm text-gray-300">Processed 375GB+ of Reddit data from Dec 2023 - Apr 2024</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Multi-Model Comparison</h3>
                    <p className="text-sm text-gray-300">Evaluated 5 different ML algorithms with hyperparameter tuning</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-yellow-500/10 border border-green-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Advanced NLP Techniques</h3>
                    <p className="text-sm text-gray-300">TF-IDF vectorization, lemmatization, and stop word removal</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500/10 to-purple-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Real-time Classification</h3>
                    <p className="text-sm text-gray-300">Streamlit web app for instant moral judgment predictions</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Project Methodology</h2>
                <img
                  src="/assets/R1.png"
                  alt="Data Extraction and Flow"
                  className="w-full rounded-lg border border-gray-700"
                />
              </Card>
            </div>
          </TabsContent>

          {/* Data Pipeline Tab */}
          <TabsContent value="data">
            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Data Collection & Extraction</h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Source & Format</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Source:</strong> Pushshift.io monthly data dumps of Reddit submissions and comments</li>
                      <li><strong>Date Range:</strong> December 2023 – April 2024 for r/AmItheJerk subreddit</li>
                      <li><strong>Raw Size:</strong> ~125GB submissions + ~250GB comments</li>
                      <li><strong>Final Size:</strong> 235.2 MB (posts) + 4.5 GB (comments) after CSV conversion</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Extraction Pipeline</h3>
                    <div className="bg-black/30 border border-white/10 rounded-lg p-4 font-mono text-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-purple-400">1.</span>
                        <span>Raw Data → .zst Files (Downloaded from pushshift.io)</span>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-purple-400">2.</span>
                        <span>.zst Files → CSV (Decompressed and merged)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400">3.</span>
                        <span>Final CSVs for submissions and comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Data Preprocessing</h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Cleaning & Filtering</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">Comments Processing</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Retained: link_id, parent_id, body</li>
                          <li>• Filtered: [removed], [deleted], NaN</li>
                          <li>• Kept only top-level comments</li>
                        </ul>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">Posts Processing</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Retained: selftext, name (ID)</li>
                          <li>• Merged with comments on matching IDs</li>
                          <li>• Linked posts to top-level comments</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Data Labeling Strategy</h3>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li><strong>Tag Identification:</strong> Searched comment text for judgment tags (yta, nta, esh, etc.)</li>
                      <li><strong>Class Assignment:</strong>
                        <ul className="list-disc list-inside ml-8 mt-1">
                          <li>NTJ (Not The Jerk): "nta", "nah", "ywnbta", "yntah"</li>
                          <li>YTJ (You're The Jerk): "yta", "esh", "ywbta"</li>
                        </ul>
                      </li>
                      <li><strong>Majority Voting:</strong> Most frequent label across top-level comments becomes final label</li>
                    </ol>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Feature Engineering</h2>
                <div className="space-y-4 text-gray-300">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">Stop Word Removal</h3>
                      <p className="text-sm">Eliminates common words to reduce noise</p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">Lemmatization</h3>
                      <p className="text-sm">Normalizes words to base forms (run, running → run)</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">TF-IDF Vectorization</h3>
                      <p className="text-sm">Converts text to numerical features for ML models</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">System Design & Architecture</h2>
                <img
                  src="/assets/R2.png"
                  alt="System Architecture and Design"
                  className="w-full rounded-lg border border-gray-700"
                />
              </Card>
            </div>
          </TabsContent>

          {/* Models & Results Tab */}
          <TabsContent value="models">
            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Model Development</h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Data Splitting</h3>
                    <p>Stratified sampling to preserve YTJ/NTJ ratio:</p>
                    <div className="grid grid-cols-3 gap-4 mt-3">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-blue-400">70%</div>
                        <div className="text-sm">Training</div>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-purple-400">15%</div>
                        <div className="text-sm">Validation</div>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-green-400">15%</div>
                        <div className="text-sm">Test</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Algorithms Evaluated</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">1. Random Forest</h3>
                      <p className="text-sm text-gray-300 mb-2">Ensemble method using multiple decision trees</p>
                      <div className="text-xs text-gray-400">
                        <p>• Best for handling large feature spaces</p>
                        <p>• Accuracy: ~0.72 (Test & Validation)</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">2. Logistic Regression</h3>
                      <p className="text-sm text-gray-300 mb-2">Linear model effective for text classification</p>
                      <div className="text-xs text-gray-400">
                        <p>• Simple and computationally efficient</p>
                        <p>• Accuracy: ~0.72 (Test)</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-500/10 to-yellow-500/10 border border-green-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">3. Decision Tree</h3>
                      <p className="text-sm text-gray-300 mb-2">Simple and interpretable baseline model</p>
                      <div className="text-xs text-gray-400">
                        <p>• Good for interpretability checks</p>
                        <p>• Accuracy: ~0.53-0.60</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-500/10 to-red-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">4. Support Vector Classifier</h3>
                      <p className="text-sm text-gray-300 mb-2">Handles high-dimensional data effectively</p>
                      <div className="text-xs text-gray-400">
                        <p>• Kernel: RBF with C=1</p>
                        <p>• Accuracy: ~0.72-0.75 (Test)</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-500/10 to-purple-500/10 border border-red-500/20 rounded-lg p-4">
                      <h3 className="font-semibold text-white mb-2">5. XGBoost</h3>
                      <p className="text-sm text-gray-300 mb-2">Gradient boosting for high performance</p>
                      <div className="text-xs text-gray-400">
                        <p>• Learning rate: 0.1, max_depth: 3</p>
                        <p>• Accuracy: ~0.69-0.74</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Model Performance Insights</h2>
                <div className="space-y-4 text-gray-300">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Strengths</h3>
                    <ul className="text-sm space-y-1">
                      <li>• NTJ (class 0) predictions: High recall (~1.00), rarely misses "Not The Jerk" examples</li>
                      <li>• Overall accuracy: 69-75% across most models</li>
                      <li>• Strong baseline performance with minimal feature engineering</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Challenges</h3>
                    <ul className="text-sm space-y-1">
                      <li>• YTJ (class 1) predictions: Low recall (~0.02), struggles to detect "Yes, The Jerk" posts</li>
                      <li>• Class imbalance: NTJ examples significantly outnumber YTJ examples</li>
                      <li>• Subtle textual cues: Moral judgments require nuanced language understanding</li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Optimization Techniques</h3>
                    <ul className="text-sm space-y-1">
                      <li>• GridSearchCV with 3-fold cross-validation for hyperparameter tuning</li>
                      <li>• SMOTE (Synthetic Minority Oversampling) to address class imbalance</li>
                      <li>• TSVD (Truncated SVD) for dimensionality reduction</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Performance Metrics</h2>
                <img
                  src="/assets/R3.png"
                  alt="Model Performance Metrics and Comparison"
                  className="w-full rounded-lg border border-gray-700"
                />
              </Card>
            </div>
          </TabsContent>

          {/* Deployment Tab */}
          <TabsContent value="deployment">
            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Streamlit Web Application</h2>
                <div className="space-y-4 text-gray-300">
                  <p>Developed an interactive web application for real-time moral judgment classification using Streamlit.</p>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Deployment Architecture</h3>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li><strong>Model Serialization:</strong> Trained models saved via joblib (includes TF-IDF transformations and label encoders)</li>
                      <li><strong>Web Interface:</strong> Streamlit UI for text input and prediction display</li>
                      <li><strong>Real-time Processing:</strong> Text preprocessing pipeline matches training phase (TF-IDF, lemmatization)</li>
                      <li><strong>Multi-Model Predictions:</strong> Runs predictions across all trained models simultaneously</li>
                      <li><strong>Output Display:</strong> Shows YTJ/NTJ verdict with confidence scores/probabilities</li>
                    </ol>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">User Workflow</h3>
                    <div className="flex items-center gap-3 text-sm flex-wrap">
                      <span className="bg-purple-500/20 px-3 py-1 rounded-full">1. Paste Reddit post text</span>
                      <span className="text-purple-400">→</span>
                      <span className="bg-purple-500/20 px-3 py-1 rounded-full">2. Click Predict</span>
                      <span className="text-purple-400">→</span>
                      <span className="bg-purple-500/20 px-3 py-1 rounded-full">3. Instant YTJ/NTJ verdict</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Streamlit Deployment Interface</h2>
                <img
                  src="/assets/R4.png"
                  alt="Streamlit Web Application Interface"
                  className="w-full rounded-lg border border-gray-700"
                />
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Business Impact & Benefits</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Instant Feedback</h3>
                    <p className="text-sm text-gray-300">OPs receive immediate moral judgments without waiting for community responses</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Community Consensus</h3>
                    <p className="text-sm text-gray-300">Predictions reflect historical community voting patterns and sentiment</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Scalable Solution</h3>
                    <p className="text-sm text-gray-300">Can process unlimited posts without human intervention</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Content Moderation</h3>
                    <p className="text-sm text-gray-300">Assists moderators in identifying contentious posts early</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Future Enhancements</h2>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-white mb-1">1. Advanced NLP Models</h3>
                    <p className="text-sm text-gray-300">Incorporate BERT or GPT for better context understanding and nuanced language interpretation</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-white mb-1">2. Deep Learning Architectures</h3>
                    <p className="text-sm text-gray-300">Implement RNNs or Transformers to capture sequential patterns and subtle textual clues</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/10 to-yellow-500/10 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-white mb-1">3. Real-time Feedback Loop</h3>
                    <p className="text-sm text-gray-300">Deploy in live environment with continuous retraining based on user interactions</p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-500/10 to-red-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-white mb-1">4. Enhanced Class Imbalance Handling</h3>
                    <p className="text-sm text-gray-300">Refine SMOTE and explore other sampling/weighting strategies for better YTJ detection</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Key Learnings</h2>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <p className="text-sm"><strong>Large-scale data processing:</strong> Successfully handled and processed 375GB+ of Reddit data efficiently</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <p className="text-sm"><strong>Class imbalance challenges:</strong> Learned techniques to address highly imbalanced datasets in NLP tasks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <p className="text-sm"><strong>Model comparison:</strong> Evaluated multiple algorithms to identify best performers for text classification</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <p className="text-sm"><strong>Deployment pipeline:</strong> Built end-to-end ML pipeline from data collection to web deployment</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default RedditMoralJudgement