import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Navigation } from '../Navigation'

const ImageClassification = () => {
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
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Image Classification using Deep Learning</h1>
            <p className="text-xl text-gray-300">Sports Image Classification using custom deep neural network models with extensive experimentation across 11 different architectures</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="px-4 py-2 bg-green-500/20 text-green-400">Done</Badge>
            <Badge className="px-4 py-2 bg-blue-500/20 text-blue-400">November 20, 2024</Badge>
            <Badge className="px-4 py-2 bg-purple-500/20 text-purple-400">Deep Learning</Badge>
          </div>

          <div className="flex gap-4 mb-8 flex-wrap">
            <a href="https://www.notion.so/Image-Classification-using-Deep-Learning-16a5280b487b805882a0d9be289b19ad" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              Notion
            </a>
            <a href="https://github.com/Yogavarshni4699/Image-Classification-using-Deep-Learning" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              GitHub
            </a>
            <a href="https://www.kaggle.com/datasets/sidharkal/sports-image-classification/data" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
              Dataset
            </a>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap gap-4 bg-transparent mb-8 border-0 justify-start">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Overview</TabsTrigger>
              <TabsTrigger value="experiments" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Experiments</TabsTrigger>
              <TabsTrigger value="results" className="data-[state=active]:bg-white data-[state=active]:text-black bg-black border-2 border-white text-white rounded-full px-8 py-3 text-base font-medium">Results</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    This project explores sports image classification using custom deep neural network architectures built with PyTorch. The goal was to develop a robust model capable of accurately classifying images across 7 different sports categories through systematic experimentation with various deep learning techniques.
                  </p>
                  <p>
                    Through 11 comprehensive experiments, I explored different combinations of network architectures, activation functions, optimizers, regularization techniques, and loss functions to identify the optimal configuration for both accuracy and efficiency.
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
                      <strong>Source:</strong> Kaggle - Sports Image Classification Dataset
                    </p>
                    <p>
                      <strong>Classes (7):</strong>
                    </p>
                    <ul className="space-y-1 ml-6">
                      <li>• Cricket</li>
                      <li>• Wrestling</li>
                      <li>• Tennis</li>
                      <li>• Badminton</li>
                      <li>• Soccer</li>
                      <li>• Swimming</li>
                      <li>• Karate</li>
                    </ul>
                    <div className="mt-6">
                      <img src="/assets/IMAGE.png" alt="Dataset Sample with Labels" className="w-full rounded-lg border border-gray-700" />
                      <p className="text-sm text-gray-400 mt-2 text-center">Sample images from the dataset with class labels</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="gradient-text">Tools & Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "PyTorch", "Deep Learning", "CNN", "Neural Networks", "Adam", "SGD", "RMSprop"].map((tool, index) => (
                        <Badge key={index} className="bg-blue-500/20 text-blue-400">{tool}</Badge>
                      ))}
                    </div>
                    <div className="mt-6 space-y-2 text-gray-300 text-sm">
                      <p><strong>Framework:</strong> PyTorch for building custom neural networks</p>
                      <p><strong>Optimization:</strong> Adam, SGD, RMSprop algorithms</p>
                      <p><strong>Regularization:</strong> Dropout, L2, Batch Normalization</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="gradient-text">Experimental Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Architecture Variations</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Different layer depths (2-4 layers)</li>
                        <li>• Various neuron configurations (128-1024)</li>
                        <li>• Multiple activation functions (ReLU, Tanh, Leaky ReLU)</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Training Strategies</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Batch sizes: 16, 32, 64</li>
                        <li>• Epochs: 10-50</li>
                        <li>• Loss functions: CrossEntropy, Focal Loss</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Regularization Techniques</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Dropout (0.3)</li>
                        <li>• L2 Regularization</li>
                        <li>• Batch Normalization</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Optimizers Tested</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Adam (Adaptive learning)</li>
                        <li>• SGD (Stochastic Gradient Descent)</li>
                        <li>• RMSprop (Root Mean Square Propagation)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experiments" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">11 Experimental Configurations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300">
                    Each experiment tested different combinations of architecture, hyperparameters, and training techniques to identify the optimal model configuration.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-800/50">
                        <tr>
                          <th className="px-4 py-3 text-white">#</th>
                          <th className="px-4 py-3 text-white">Architecture</th>
                          <th className="px-4 py-3 text-white">Activation</th>
                          <th className="px-4 py-3 text-white">Batch/Epochs</th>
                          <th className="px-4 py-3 text-white">Optimizer</th>
                          <th className="px-4 py-3 text-white">Regularization</th>
                          <th className="px-4 py-3 text-white">Parameters</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-800">
                          <td className="px-4 py-3 font-bold">1</td>
                          <td className="px-4 py-3">512 → 256</td>
                          <td className="px-4 py-3">ReLU</td>
                          <td className="px-4 py-3">32 / 20</td>
                          <td className="px-4 py-3">Adam</td>
                          <td className="px-4 py-3">Dropout (0.3)</td>
                          <td className="px-4 py-3">77.2M</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="px-4 py-3 font-bold">2</td>
                          <td className="px-4 py-3">512 → 256</td>
                          <td className="px-4 py-3">ReLU</td>
                          <td className="px-4 py-3">64 / 20</td>
                          <td className="px-4 py-3">RMSprop</td>
                          <td className="px-4 py-3">L2</td>
                          <td className="px-4 py-3">77.2M</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="px-4 py-3 font-bold">3</td>
                          <td className="px-4 py-3">1024 → 512 → 256</td>
                          <td className="px-4 py-3">Tanh</td>
                          <td className="px-4 py-3">64 / 50</td>
                          <td className="px-4 py-3">SGD</td>
                          <td className="px-4 py-3">Batch Norm</td>
                          <td className="px-4 py-3">154.8M</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="px-4 py-3 font-bold">4</td>
                          <td className="px-4 py-3">1024 → 512 → 256 → 128</td>
                          <td className="px-4 py-3">Leaky ReLU</td>
                          <td className="px-4 py-3">16 / 25</td>
                          <td className="px-4 py-3">RMSprop</td>
                          <td className="px-4 py-3">L2</td>
                          <td className="px-4 py-3">154.8M</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="px-4 py-3 font-bold">5</td>
                          <td className="px-4 py-3">512 → 256</td>
                          <td className="px-4 py-3">Leaky ReLU</td>
                          <td className="px-4 py-3">16 / 10</td>
                          <td className="px-4 py-3">SGD</td>
                          <td className="px-4 py-3">L2</td>
                          <td className="px-4 py-3">77.2M</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="px-4 py-3 font-bold">6</td>
                          <td className="px-4 py-3">512 → 256</td>
                          <td className="px-4 py-3">Tanh</td>
                          <td className="px-4 py-3">32 / 20</td>
                          <td className="px-4 py-3">Adam</td>
                          <td className="px-4 py-3">Dropout (0.3)</td>
                          <td className="px-4 py-3">77.2M</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="px-4 py-3 font-bold">7</td>
                          <td className="px-4 py-3">1024 → 512 → 256 → 128</td>
                          <td className="px-4 py-3">Tanh</td>
                          <td className="px-4 py-3">64 / 50</td>
                          <td className="px-4 py-3">SGD</td>
                          <td className="px-4 py-3">Dropout (0.3)</td>
                          <td className="px-4 py-3">154.8M</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="px-4 py-3 font-bold">8</td>
                          <td className="px-4 py-3">1024 → 512 → 256</td>
                          <td className="px-4 py-3">ReLU</td>
                          <td className="px-4 py-3">32 / 20</td>
                          <td className="px-4 py-3">Adam</td>
                          <td className="px-4 py-3">Batch Norm</td>
                          <td className="px-4 py-3">77.2M</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="px-4 py-3 font-bold">9</td>
                          <td className="px-4 py-3">1024 → 512 → 256</td>
                          <td className="px-4 py-3">Tanh</td>
                          <td className="px-4 py-3">16 / 50</td>
                          <td className="px-4 py-3">SGD</td>
                          <td className="px-4 py-3">Dropout (0.3)</td>
                          <td className="px-4 py-3">154.8M</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="px-4 py-3 font-bold">10</td>
                          <td className="px-4 py-3">1024 → 512 → 256 → 128</td>
                          <td className="px-4 py-3">ReLU</td>
                          <td className="px-4 py-3">32 / 50</td>
                          <td className="px-4 py-3">Adam</td>
                          <td className="px-4 py-3">L2</td>
                          <td className="px-4 py-3">154.8M</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Activation Functions Explored</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-3">ReLU</h4>
                      <p className="text-gray-300 text-sm">
                        <strong>Rectified Linear Unit</strong> - Outputs input directly if positive, otherwise 0. Fast, efficient, and prevents vanishing gradients. Used in Experiments 1, 2, 8, 10.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Tanh</h4>
                      <p className="text-gray-300 text-sm">
                        <strong>Hyperbolic Tangent</strong> - Outputs values between -1 and 1. Zero-centered, better for normalization. Used in Experiments 3, 6, 7, 9.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Leaky ReLU</h4>
                      <p className="text-gray-300 text-sm">
                        <strong>Leaky Rectified Linear Unit</strong> - Allows small negative values instead of 0. Prevents dead neurons problem. Used in Experiments 4, 5.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Key Insights from Experiments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-300">
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Experiment 1 - Baseline Model</h4>
                      <p className="text-sm">Simple 2-layer architecture with ReLU and Adam optimizer. Fast learning with dropout preventing overfitting.</p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Experiment 3 - Deeper Network</h4>
                      <p className="text-sm">3-layer network with Tanh activation and Batch Normalization. Achieved faster convergence and better generalization with 50 epochs.</p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Experiment 6 - Focal Loss</h4>
                      <p className="text-sm">Addressed potential class imbalance using Focal Loss. Better performance on minority classes.</p>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Experiment 10 - Best Performer</h4>
                      <p className="text-sm">4-layer deep model with ReLU, Adam optimizer, and L2 regularization. Optimal balance between accuracy and training time with 154.8M trainable parameters.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Best Performing Model</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Experiment 10 - Final Model</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Architecture</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• <strong>Layers:</strong> 1024 → 512 → 256 → 128</li>
                          <li>• <strong>Activation:</strong> ReLU</li>
                          <li>• <strong>Loss Function:</strong> CrossEntropyLoss</li>
                          <li>• <strong>Optimizer:</strong> Adam</li>
                          <li>• <strong>Regularization:</strong> L2</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Hyperparameters</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• <strong>Batch Size:</strong> 32</li>
                          <li>• <strong>Epochs:</strong> 50</li>
                          <li>• <strong>Trainable Parameters:</strong> 154,831,623</li>
                          <li>• <strong>Training Time:</strong> Optimal</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Why This Model Performed Best</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Deep Architecture:</strong> 4-layer network captures complex hierarchical features in sports images
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Adam Optimizer:</strong> Adaptive learning rates enable efficient convergence and stable training
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>L2 Regularization:</strong> Prevents overfitting while maintaining model capacity
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>ReLU Activation:</strong> Efficient computation and effective gradient propagation
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <strong>Optimal Training:</strong> 50 epochs with batch size 32 balances training time and accuracy
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Model Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    The final model demonstrated strong performance across both training and validation sets, with consistent improvement in accuracy and F1-score over 50 epochs. The model successfully classified images across all 7 sports categories with high precision.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Key Metrics</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Loss convergence on both train and validation sets</li>
                        <li>• F1-Score improvement across epochs</li>
                        <li>• Balanced performance across all 7 sports classes</li>
                        <li>• Minimal overfitting due to L2 regularization</li>
                      </ul>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Model Characteristics</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• 154.8M trainable parameters</li>
                        <li>• 4-layer fully connected network</li>
                        <li>• GPU-optimized training with PyTorch</li>
                        <li>• Efficient inference on test images</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Conclusion & Key Takeaways</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed space-y-4">
                  <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Project Outcomes</h3>
                    <p className="text-lg mb-4">
                      Through systematic experimentation with 11 different model configurations, this project successfully identified an optimal deep learning architecture for sports image classification. The final model (Experiment 10) achieved the best balance between accuracy and computational efficiency.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                        <span className="text-green-400 mr-2">📊</span>
                        Technical Learnings
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Deeper networks capture more complex features</li>
                        <li>• Adam optimizer outperforms SGD for this task</li>
                        <li>• L2 regularization effectively prevents overfitting</li>
                        <li>• ReLU activation enables efficient training</li>
                        <li>• Batch size 32 provides optimal convergence</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                        <span className="text-yellow-400 mr-2">🎯</span>
                        Best Practices
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Systematic experimentation reveals optimal configs</li>
                        <li>• Balance model complexity with training time</li>
                        <li>• Regularization crucial for generalization</li>
                        <li>• Monitor both training and validation metrics</li>
                        <li>• Consider parameter count vs performance</li>
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

export default ImageClassification
