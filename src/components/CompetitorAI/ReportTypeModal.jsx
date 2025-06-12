import { useState } from "react";

const ReportTypeModal = ({
  reportType,
  setReportType,
  handleReportGeneration,
}) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation for deep report
    if (reportType === "deep") {
      if (!phone.trim()) {
        newErrors.phone = "Phone number is required for PDF + WhatsApp report";
      } else if (
        !/^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-\(\)]/g, ""))
      ) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      handleReportGeneration({
        reportType,
        email: email.trim(),
        phone: reportType === "deep" ? phone.trim() : null,
      });
    }
  };

  const handleReportTypeChange = (type) => {
    setReportType(type);
    // Clear phone error when switching to quick report
    if (type === "quick" && errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full px-4 my-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Choose your report type
      </h2>

      <div className="w-full max-w-2xl flex flex-col gap-4 mb-8">
        {/* Quick Snapshot Option */}
        <div
          className={`flex items-start gap-4 border rounded-xl px-6 py-5 cursor-pointer transition-all duration-200 bg-white ${
            reportType === "quick"
              ? "border-blue-500 shadow-md ring-1 ring-blue-500 ring-opacity-20"
              : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
          }`}
          onClick={() => handleReportTypeChange("quick")}
        >
          <div className="pt-1 flex-shrink-0">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                reportType === "quick" ? "border-blue-500" : "border-gray-300"
              }`}
            >
              {reportType === "quick" && (
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
              )}
            </div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900 mb-1">
              Quick Snapshot
            </div>
            <div className="text-gray-600 text-sm leading-relaxed">
              Get a quick overview of your competitors delivered to your email.
            </div>
          </div>
        </div>

        {/* Deep PDF + WhatsApp Option */}
        <div
          className={`flex items-start gap-4 border rounded-xl px-6 py-5 cursor-pointer transition-all duration-200 bg-white ${
            reportType === "deep"
              ? "border-blue-500 shadow-md ring-1 ring-blue-500 ring-opacity-20"
              : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
          }`}
          onClick={() => handleReportTypeChange("deep")}
        >
          <div className="pt-1 flex-shrink-0">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                reportType === "deep" ? "border-blue-500" : "border-gray-300"
              }`}
            >
              {reportType === "deep" && (
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
              )}
            </div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900 mb-1">
              Deep PDF + WhatsApp
            </div>
            <div className="text-gray-600 text-sm leading-relaxed">
              Receive a detailed PDF report and WhatsApp updates with in-depth
              analysis.
            </div>
          </div>
        </div>
      </div>

      {/* Input Fields */}
      {reportType && (
        <div className="w-full max-w-2xl mb-8">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">
              Contact Information
            </h3>

            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.email
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300 bg-white"
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone Input (only for deep report) */}
            {reportType === "deep" && (
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.phone
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 bg-white"
                  }`}
                  placeholder="Enter your phone number (for WhatsApp)"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Generate Report Button */}
      <button
        onClick={handleSubmit}
        disabled={!reportType}
        className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
          !reportType
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:transform active:scale-95"
        }`}
      >
        Generate Report
      </button>
    </div>
  );
};

export default ReportTypeModal;
