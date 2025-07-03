import React, { useState, useEffect } from "react";
import robotImg from "../../assets/robot.png";
const LandingPage = ({
  url,
  setUrl,
  handleAnalyze,
  email,
  setEmail,
  name,
  setName,
}) => {
  const [urlError, setUrlError] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [nameError, setNameError] = useState("");
  const [isValidName, setIsValidName] = useState(false);

  // URL validation function
  const validateUrl = (inputUrl) => {
    if (!inputUrl.trim()) {
      setUrlError("");
      setIsValidUrl(false);
      return;
    }

    try {
      // Add protocol if missing
      let urlToTest = inputUrl.trim();
      if (
        !urlToTest.startsWith("http://") &&
        !urlToTest.startsWith("https://")
      ) {
        urlToTest = "https://" + urlToTest;
      }

      const url = new URL(urlToTest);

      // Check if it's a valid domain
      const domainRegex =
        /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.([a-zA-Z]{2,}|[a-zA-Z]{2,}\.[a-zA-Z]{2,})$/;

      if (!domainRegex.test(url.hostname)) {
        setUrlError("Please enter a valid URL");
        setIsValidUrl(false);
        return;
      }

      setUrlError("");
      setIsValidUrl(true);
    } catch (error) {
      setUrlError("Please enter a valid URL");
      setIsValidUrl(false);
    }
  };

  // Name validation function
  const validateName = (inputName) => {
    if (!inputName.trim()) {
      setNameError("");
      setIsValidName(false);
      return;
    }

    if (inputName.trim().length < 2) {
      setNameError("Name must be at least 2 characters long");
      setIsValidName(false);
      return;
    }

    setNameError("");
    setIsValidName(true);
  };

  // Email validation function
  const validateEmail = (inputEmail) => {
    if (!inputEmail.trim()) {
      setEmailError("");
      setIsValidEmail(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(inputEmail.trim())) {
      setEmailError("Please enter a valid email address");
      setIsValidEmail(false);
      return;
    }

    setEmailError("");
    setIsValidEmail(true);
  };

  // Validate name whenever it changes
  useEffect(() => {
    validateName(name);
  }, [name]);

  // Validate URL whenever it changes
  useEffect(() => {
    validateUrl(url);
  }, [url]);

  // Validate email whenever it changes
  useEffect(() => {
    validateEmail(email);
  }, [email]);

  useEffect(() => {
    setEmail("");
    setUrl("");
    setName("");
    window.scrollTo(0, 0);
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAnalyzeClick = () => {
    if (
      isValidUrl &&
      url.trim() &&
      isValidEmail &&
      email.trim() &&
      isValidName &&
      name?.trim()
    ) {
      handleAnalyze();
    }
  };

  const handleKeyPress = (e) => {
    if (
      e.key === "Enter" &&
      isValidUrl &&
      url.trim() &&
      isValidEmail &&
      email?.trim() &&
      isValidName &&
      name?.trim()
    ) {
      handleAnalyze();
    }
  };

  const isButtonDisabled =
    !url.trim() ||
    !isValidUrl ||
    !email?.trim() ||
    !isValidEmail ||
    !name?.trim() ||
    !isValidName;

  return (
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
              Uncover how your competitors are leveraging AI to boost revenue
              and efficiency. Gain actionable insights to stay ahead in the
              market.
            </p>

            {/* Search Input - Mobile Optimized */}
            <div className="w-full max-w-2xl mx-auto lg:mx-0 mt-2">
              {/* Mobile: Stacked Layout */}
              <div className="flex flex-col sm:hidden w-full gap-3">
                {/* Name Input with Icon */}
                <div
                  className={`flex w-full bg-gray-100 rounded-lg border shadow-sm transition-colors duration-200 ${
                    nameError ? "border-red-300 bg-red-50" : "border-gray-200"
                  }`}
                >
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleNameChange}
                    className={`flex-1 bg-transparent outline-none px-2 py-4 text-base placeholder-gray-500 ${
                      nameError ? "text-red-700" : ""
                    }`}
                    onKeyPress={handleKeyPress}
                  />
                  {/* Name Status Icon */}
                  {name.trim() && (
                    <div className="flex items-center px-3">
                      {isValidName ? (
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </div>
                  )}
                </div>

                {/* Name Error Message */}
                {nameError && (
                  <p className="text-red-600 text-sm text-left px-1">
                    {nameError}
                  </p>
                )}

                {/* URL Input with Icon */}
                <div
                  className={`flex w-full bg-gray-100 rounded-lg border shadow-sm transition-colors duration-200 ${
                    urlError ? "border-red-300 bg-red-50" : "border-gray-200"
                  }`}
                >
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
                    placeholder="Enter website URL"
                    value={url}
                    onChange={handleUrlChange}
                    className={`flex-1 bg-transparent outline-none px-2 py-4 text-base placeholder-gray-500 ${
                      urlError ? "text-red-700" : ""
                    }`}
                    onKeyPress={handleKeyPress}
                  />
                  {/* URL Status Icon */}
                  {url.trim() && (
                    <div className="flex items-center px-3">
                      {isValidUrl ? (
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </div>
                  )}
                </div>

                {/* URL Error Message */}
                {urlError && (
                  <p className="text-red-600 text-sm text-left px-1">
                    {urlError}
                  </p>
                )}

                {/* Email Input with Icon */}
                <div
                  className={`flex w-full bg-gray-100 rounded-lg border shadow-sm transition-colors duration-200 ${
                    emailError ? "border-red-300 bg-red-50" : "border-gray-200"
                  }`}
                >
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`flex-1 bg-transparent outline-none px-2 py-4 text-base placeholder-gray-500 ${
                      emailError ? "text-red-700" : ""
                    }`}
                    onKeyPress={handleKeyPress}
                  />
                  {/* Email Status Icon */}
                  {email?.trim() && (
                    <div className="flex items-center px-3">
                      {isValidEmail ? (
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </div>
                  )}
                </div>

                {/* Email Error Message */}
                {emailError && (
                  <p className="text-red-600 text-sm text-left px-1">
                    {emailError}
                  </p>
                )}

                {/* Full Width Button */}
                <button
                  onClick={handleAnalyzeClick}
                  disabled={isButtonDisabled}
                  className={`w-full py-4 font-bold text-base rounded-lg transition-all duration-200 shadow-sm ${
                    isButtonDisabled
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 hover:shadow-md"
                  }`}
                >
                  Analyze
                </button>
              </div>

              {/* Desktop: Inline Layout */}
              <div className="hidden sm:block w-full">
                <div className="flex flex-col gap-3">
                  {/* Name Input */}
                  <div
                    className={`flex w-full bg-gray-100 rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all duration-200 ${
                      nameError ? "border-red-300 bg-red-50" : "border-gray-200"
                    }`}
                  >
                    {/* Name Icon */}
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
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>

                    {/* Name Input Field */}
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={handleNameChange}
                      className={`flex-1 bg-transparent outline-none px-2 py-3 text-lg placeholder-gray-500 ${
                        nameError ? "text-red-700" : ""
                      }`}
                      onKeyPress={handleKeyPress}
                    />

                    {/* Name Status Icon */}
                    {name.trim() && (
                      <div className="flex items-center px-3">
                        {isValidName ? (
                          <svg
                            className="w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Name Error Message for Desktop */}
                  {nameError && (
                    <p className="text-red-600 text-sm text-left">
                      {nameError}
                    </p>
                  )}

                  {/* URL Input */}
                  <div
                    className={`flex w-full bg-gray-100 rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all duration-200 ${
                      urlError ? "border-red-300 bg-red-50" : "border-gray-200"
                    }`}
                  >
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
                      placeholder="Enter website URL"
                      value={url}
                      onChange={handleUrlChange}
                      className={`flex-1 bg-transparent outline-none px-2 py-3 text-lg placeholder-gray-500 ${
                        urlError ? "text-red-700" : ""
                      }`}
                      onKeyPress={handleKeyPress}
                    />

                    {/* URL Status Icon */}
                    {url.trim() && (
                      <div className="flex items-center px-3">
                        {isValidUrl ? (
                          <svg
                            className="w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </div>
                    )}
                  </div>

                  {/* URL Error Message for Desktop */}
                  {urlError && (
                    <p className="text-red-600 text-sm text-left">{urlError}</p>
                  )}

                  {/* Email Input */}
                  <div
                    className={`flex w-full bg-gray-100 rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all duration-200 ${
                      emailError
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  >
                    {/* Email Icon */}
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
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    {/* Email Input Field */}
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={handleEmailChange}
                      className={`flex-1 bg-transparent outline-none px-2 py-3 text-lg placeholder-gray-500 ${
                        emailError ? "text-red-700" : ""
                      }`}
                      onKeyPress={handleKeyPress}
                    />

                    {/* Email Status Icon */}
                    {email?.trim() && (
                      <div className="flex items-center px-3">
                        {isValidEmail ? (
                          <svg
                            className="w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Email Error Message for Desktop */}
                  {emailError && (
                    <p className="text-red-600 text-sm text-left">
                      {emailError}
                    </p>
                  )}

                  {/* Full Width Analyze Button */}
                  <button
                    onClick={handleAnalyzeClick}
                    disabled={isButtonDisabled}
                    className={`w-full py-4 font-bold text-base rounded-lg transition-all duration-200 shadow-sm ${
                      isButtonDisabled
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 hover:shadow-md cursor-pointer"
                    }`}
                  >
                    Analyze
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
