import { CheckCircle } from "lucide-react";

const ContactFormSuccess = ({ setCurrentStep, setUrl }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
      {/* Success Icon */}
      <div className="mx-auto flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 mb-6">
        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
      </div>

      {/* Success Message */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        Message Sent Successfully!
      </h2>

      <p className="text-gray-600 text-base sm:text-lg mb-2">
        Thank you for reaching out to us.
      </p>

      <p className="text-gray-500 text-sm sm:text-base mb-8">
        We'll get back to you within 24 hours with a response to your inquiry.
      </p>

      {/* Action Button */}
      <button
        onClick={() => {
          setCurrentStep("landing");
        }}
        className="w-full bg-blue-600 text-white font-semibold px-6 py-3 sm:py-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-base sm:text-lg"
      >
        Back to Home
      </button>
    </div>
  </div>
);

export default ContactFormSuccess;
