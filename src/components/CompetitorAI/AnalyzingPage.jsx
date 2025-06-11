const AnalyzingPage = ({ progress }) => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="max-w-2xl mx-auto px-4 text-center">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-[#0B0D17]">
          Analyzing your website...
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-600 to-[#A5FF00] h-3 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {/* <p className="text-gray-600">
          Discovering AI opportunities in your competitive landscape
        </p> */}
      </div>
    </div>
  </div>
);

export default AnalyzingPage;
