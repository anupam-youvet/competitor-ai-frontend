const ThankYouPage = ({ setCurrentStep }) => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center w-full bg-white">
    <h2 className="text-3xl font-bold text-black text-center mb-6">
      Thank you for your submission!
    </h2>
    <div className="text-lg text-gray-700 text-center max-w-2xl mb-8">
      We've received your request and will begin analyzing your competitive
      landscape. Our team will reach out to you shortly with the results.
    </div>
    <button
      onClick={() => {
        setCurrentStep("contact");
      }}
      className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-base mx-auto"
    >
      Book a free 20-min strategy call
    </button>
  </div>
);

export default ThankYouPage;
