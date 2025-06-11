import React from "react";
import robotImg from "../../assets/robot.png";

const LandingPage = ({ url, setUrl, handleAnalyze, progress }) => (
  <div className="min-h-screen bg-white flex flex-col">
    <div className="max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-8 pt-8 sm:pt-12 lg:pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
        {/* Robot Image - Responsive */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start flex-shrink-0">
          <img
            src={robotImg}
            alt="Robot"
            className="w-72 h-64 sm:w-80 sm:h-72 lg:w-96 lg:h-80 xl:w-[380px] xl:h-[340px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 w-full text-center lg:text-left">
          {/* Heading - Responsive Typography */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-black leading-tight">
            How Are Your
            <br />
            Competitors Using
            <br />
            AI Today?
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0">
            Uncover how your competitors are leveraging AI to boost revenue and
            efficiency. Gain actionable insights to stay ahead in the market.
          </p>

          {/* Search Input - Mobile Optimized */}
          <div className="w-full max-w-2xl mx-auto lg:mx-0 mt-2">
            {/* Mobile: Stacked Layout */}
            <div className="flex flex-col sm:hidden w-full gap-3">
              {/* Input with Icon */}
              <div className="flex w-full bg-gray-100 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center px-4 text-gray-400">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Your Website URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 bg-transparent outline-none px-2 py-4 text-base placeholder-gray-500"
                  onKeyPress={(e) => e.key === "Enter" && handleAnalyze()}
                />
              </div>
              {/* Full Width Button */}
              <button
                onClick={handleAnalyze}
                className="w-full bg-blue-600 text-white py-4 font-bold text-base rounded-lg hover:bg-blue-700 transition-colors duration-200 active:bg-blue-800 shadow-sm"
              >
                Analyze
              </button>
            </div>

            {/* Desktop: Inline Layout */}
            <div className="hidden sm:flex w-full bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              {/* Search Icon */}
              <div className="flex items-center px-3 text-gray-400">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                  />
                </svg>
              </div>

              {/* Input Field */}
              <input
                type="text"
                placeholder="Your Website URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 bg-transparent outline-none px-2 py-3 text-lg placeholder-gray-500"
                onKeyPress={(e) => e.key === "Enter" && handleAnalyze()}
              />

              {/* Analyze Button */}
              <button
                onClick={handleAnalyze}
                className="bg-blue-600 text-white px-6 py-3 font-bold text-base hover:bg-blue-700 transition-colors duration-200 active:bg-blue-800"
              >
                Analyze
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
