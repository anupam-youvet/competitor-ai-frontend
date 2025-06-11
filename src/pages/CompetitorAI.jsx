import React, { useState, useEffect } from "react";
import Header from "../components/CompetitorAI/Header";
import Footer from "../components/CompetitorAI/Footer";
import LandingPage from "../components/CompetitorAI/LandingPage";
import AnalyzingPage from "../components/CompetitorAI/AnalyzingPage";
import ResultsPage from "../components/CompetitorAI/ResultsPage";
import ReportTypeModal from "../components/CompetitorAI/ReportTypeModal";
import ThankYouPage from "../components/CompetitorAI/ThankYouPage";
import DemoPage from "../components/CompetitorAI/DemoPage";
import ContactPage from "../components/CompetitorAI/ContactPage";

const CompetitorAIApp = () => {
  const [currentStep, setCurrentStep] = useState("landing"); // landing, analyzing, results, reportType, thankYou, demo, contact
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reportType, setReportType] = useState("quick");
  const [progress, setProgress] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    workEmail: "",
    phone: "",
    saasSpend: "",
    goals: "",
  });

  // Simulate analysis progress
  useEffect(() => {
    if (currentStep === "analyzing") {
      setProgress(0);
      let progressInterval;
      let apiCompleted = false;

      // Start the API call
      const analyzeWebsite = async () => {
        try {
          setTimeout(async () => {
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/posts"
            );
            await response.json();

            // API completed - stop progress simulation and jump to 100%
            apiCompleted = true;
            clearInterval(progressInterval);

            setProgress(100);

            // Wait a moment to show 100% then go to results
            setTimeout(() => {
              setCurrentStep("results");
            }, 500);
          }, 10000);
        } catch (error) {
          apiCompleted = true;
          clearInterval(progressInterval);
          console.error("Analysis failed:", error);
          setCurrentStep("error"); // Handle error state
        }
      };

      // Simulate progress while API is running
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          // Don't let progress reach 100% until API completes
          if (prev >= 90) return prev + 0.2; // Very slow progress near the end
          if (prev >= 70) return prev + 0.5; // Slower progress
          return prev + 1.5; // Normal progress
        });
      }, 150);

      // Start the API call
      analyzeWebsite();

      // Cleanup function
      return () => {
        if (progressInterval) {
          clearInterval(progressInterval);
        }
      };
    }
  }, [currentStep, url]);

  const handleAnalyze = () => {
    if (url.trim()) {
      setProgress(0);
      setCurrentStep("analyzing");
      window.scrollTo(0, 0);
    }
  };

  const handleReportGeneration = () => {
    // if (email.trim()) {
    setCurrentStep("thankYou");
    // }
  };

  const handleContactSubmit = () => {
    if (contactForm.name && contactForm.workEmail) {
      setCurrentStep("thankYou");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        setCurrentStep={setCurrentStep}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      {currentStep === "landing" && (
        <LandingPage
          url={url}
          setUrl={setUrl}
          handleAnalyze={handleAnalyze}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === "analyzing" && <AnalyzingPage progress={progress} />}
      {currentStep === "results" && (
        <ResultsPage setCurrentStep={setCurrentStep} />
      )}
      {currentStep === "thankYou" && (
        <ThankYouPage setCurrentStep={setCurrentStep} />
      )}
      {currentStep === "demo" && <DemoPage setCurrentStep={setCurrentStep} />}
      {currentStep === "contact" && (
        <ContactPage
          contactForm={contactForm}
          setContactForm={setContactForm}
          handleContactSubmit={handleContactSubmit}
        />
      )}
      {currentStep === "reportType" && (
        <ReportTypeModal
          reportType={reportType}
          setReportType={setReportType}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          handleReportGeneration={handleReportGeneration}
          setCurrentStep={setCurrentStep}
        />
      )}
      <Footer setCurrentStep={setCurrentStep} />
    </div>
  );
};

export default CompetitorAIApp;
