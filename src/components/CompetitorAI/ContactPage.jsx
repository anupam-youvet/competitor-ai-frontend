import { useState, useEffect } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  saasSpend: "",
  goals: "",
};
const ContactPage = ({ setCurrentStep }) => {
  const API_URL = import.meta.env.VITE_APP_API_URL;
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactForm, setContactForm] = useState(initialState);
  const validateForm = () => {
    const newErrors = {};
    if (!contactForm.name?.trim()) {
      newErrors.name = "Name is required";
    }

    if (!contactForm.email?.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!contactForm.phone?.trim()) {
      newErrors.phone = "Phone number is required";
    }

    // if (!contactForm.saasSpend) {
    //   newErrors.saasSpend = "Please select your monthly SaaS spend";
    // }

    // if (!contactForm.goals?.trim()) {
    //   newErrors.goals = "Please describe your goals";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${API_URL}/leads/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactForm),
        });
        await response.json();
        setCurrentStep("contactSuccess");
      } catch (error) {
        console.log("Error in contact form: ", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 gap-8 lg:gap-16">
        {/* Left Column - Info */}
        <div className="lg:w-2/5 lg:pr-8">
          <div className="sticky top-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready to gain competitive intelligence? Let's discuss how
              CompetitorAI can help you stay ahead of the competition.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Quick Response
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Tailored Solutions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Custom competitive intelligence for your needs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Secure & Private
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Your data is protected with enterprise-grade security
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:w-3/5">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={contactForm.name || ""}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, name: e.target.value })
                  }
                  className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 ${
                    errors.name ? "border-red-300 bg-red-50" : "border-gray-200"
                  }`}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Work Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={contactForm.email || ""}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      email: e.target.value,
                    })
                  }
                  className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-gray-200"
                  }`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={contactForm.phone || ""}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, phone: e.target.value })
                  }
                  className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 ${
                    errors.phone
                      ? "border-red-300 bg-red-50"
                      : "border-gray-200"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Monthly SaaS Spend Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Monthly SaaS Spend
                </label>
                <select
                  value={contactForm.saasSpend || ""}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      saasSpend: e.target.value,
                    })
                  }
                  className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 ${
                    errors.saasSpend
                      ? "border-red-300 bg-red-50"
                      : "border-gray-200"
                  }`}
                >
                  <option value="">Select your monthly spend</option>
                  <option value="<1k">Less than $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k+">$10,000+</option>
                </select>
                {errors.saasSpend && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.saasSpend}
                  </p>
                )}
              </div>

              {/* Goals Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Describe your goals
                </label>
                <textarea
                  placeholder="Tell us about your competitive intelligence goals and challenges..."
                  rows={4}
                  value={contactForm.goals || ""}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, goals: e.target.value })
                  }
                  className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 resize-none ${
                    errors.goals
                      ? "border-red-300 bg-red-50"
                      : "border-gray-200"
                  }`}
                />
                {errors.goals && (
                  <p className="mt-2 text-sm text-red-600">{errors.goals}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:transform active:scale-95"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
