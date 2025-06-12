import React from "react";
import { ArrowRight, ExternalLink, Lightbulb, Zap, Globe } from "lucide-react";

const ResultsPage = ({ setCurrentStep, snapshot }) => {
  // Parse the snapshot data if it's a string
  const data = typeof snapshot === "string" ? JSON.parse(snapshot) : snapshot;

  return data ? (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4" />
              <span>AI Competitive Analysis</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              How <span className="text-blue-600">{data.companyName}</span>{" "}
              Competitors Use AI
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how your competitors are leveraging AI technology to gain
              competitive advantages in the market.
            </p>
          </div>

          {/* Company Overview Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {data.companyName}
                </h2>
                <a
                  href={data.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center space-x-1 text-sm"
                >
                  <span>{data.companyUrl}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-gray-700 text-lg leading-relaxed">
                We analyzed{" "}
                <strong>{data.competitors.length} key competitors</strong> in
                your industry to understand how they're implementing AI
                technologies. Here's what we discovered about their AI
                strategies and how you can leverage these insights.
              </p>
            </div>
          </div>

          {/* Competitors Analysis */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Competitor AI Analysis
            </h2>

            <div className="grid gap-6">
              {data.competitors.map((competitor, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Competitor Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                          {competitor.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {competitor.name}
                          </h3>
                          <a
                            href={competitor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 inline-flex items-center space-x-1 text-sm"
                          >
                            <span>{competitor.website}</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          <strong>Why they're a competitor:</strong>{" "}
                          {competitor.reasonForInclusion}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* AI Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-blue-600" />
                      <span>AI Use Cases</span>
                    </h4>
                    <div className="space-y-3">
                      {competitor.aiUseCases.map((useCase, useCaseIndex) => (
                        <div
                          key={useCaseIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="bg-blue-100 p-1 rounded-full mt-1">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed flex-1">
                            {useCase}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center space-x-2">
                      <Lightbulb className="h-5 w-5 text-green-600" />
                      <span>Strategic Recommendation</span>
                    </h4>
                    <p className="text-green-700 leading-relaxed">
                      {competitor.recommendation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Ready for a Deeper Analysis?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Get a comprehensive report with detailed implementation
              strategies, ROI projections, and step-by-step AI adoption roadmap.
            </p>
            <button
              onClick={() => {
                setCurrentStep("reportType");
                window.scrollTo(0, 0);
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-bold text-lg inline-flex items-center space-x-3 shadow-lg hover:shadow-xl"
            >
              <span>Get Full Report</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ResultsPage;
