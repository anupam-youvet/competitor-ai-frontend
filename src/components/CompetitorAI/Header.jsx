import React from "react";
import { Menu, X } from "lucide-react";

const Header = ({
  setCurrentStep,
  showMobileMenu,
  setShowMobileMenu,
  setUrl,
  setEmail,
}) => {
  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <h1
                onClick={() => {
                  setCurrentStep("landing");
                }}
                className="text-xl sm:text-2xl font-bold text-[#0B0D17] cursor-pointer"
              >
                CompetitorAI
              </h1>
            </div>

            {/* Desktop Navigation & CTA - Right Side */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                {/* <button
                  onClick={() => setCurrentStep && setCurrentStep("landing")}
                  className="text-gray-600 hover:text-[#0B0D17] transition-colors font-medium"
                >
                  Product
                </button>
                <button className="text-gray-600 hover:text-[#0B0D17] transition-colors font-medium">
                  Solutions
                </button>
                <button className="text-gray-600 hover:text-[#0B0D17] transition-colors font-medium">
                  Pricing
                </button> */}
                <button className="text-gray-600 hover:text-[#0B0D17] transition-colors font-medium">
                  About Us
                </button>
              </nav>

              <button
                onClick={() => {
                  setCurrentStep && setCurrentStep("contact");
                }}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-sm cursor-pointer"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() =>
                setShowMobileMenu && setShowMobileMenu(!showMobileMenu)
              }
              aria-label="Toggle mobile menu"
            >
              {showMobileMenu ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Inside Header */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {/* Mobile Navigation Links */}
              {/* <button
                onClick={() => {
                  setCurrentStep && setCurrentStep("landing");
                  setShowMobileMenu && setShowMobileMenu(false);
                }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0B0D17] transition-colors font-medium rounded-lg"
              >
                Product
              </button>
              <button
                onClick={() => setShowMobileMenu && setShowMobileMenu(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0B0D17] transition-colors font-medium rounded-lg"
              >
                Solutions
              </button>
              <button
                onClick={() => setShowMobileMenu && setShowMobileMenu(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0B0D17] transition-colors font-medium rounded-lg"
              >
                Pricing
              </button> */}
              <button
                // onClick={() => setShowMobileMenu && setShowMobileMenu(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0B0D17] transition-colors font-medium rounded-lg"
              >
                About Us
              </button>

              {/* Mobile CTA */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setCurrentStep && setCurrentStep("contact");
                    setShowMobileMenu && setShowMobileMenu(false);
                  }}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-sm"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
