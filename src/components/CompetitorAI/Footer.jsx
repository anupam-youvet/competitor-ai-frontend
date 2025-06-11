const Footer = ({ setCurrentStep }) => (
  <footer className="bg-white text-gray-600 py-8 md:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6 md:mb-8">
        <button className="text-gray-500 hover:text-gray-800 transition-colors text-sm md:text-base">
          Terms of Service
        </button>
        <button className="text-gray-500 hover:text-gray-800 transition-colors text-sm md:text-base">
          Privacy Policy
        </button>
        <button
          onClick={() => {
            setCurrentStep("contact");
            window.scrollTo(0, 0);
          }}
          className="text-gray-500 hover:text-gray-800 transition-colors text-sm md:text-base"
        >
          Contact Us
        </button>
      </div>

      {/* Copyright */}
      <div className="text-center">
        <p className="text-gray-400 text-sm">
          © 2024 CompetitorAI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
