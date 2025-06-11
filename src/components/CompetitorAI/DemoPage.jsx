import React from 'react';
import demoImg from '../../assets/competitor-x.png'; // Placeholder, replace with actual demo image if available

const DemoPage = ({ setCurrentStep }) => (
  <div className="min-h-screen bg-white pb-16">
    <div className="max-w-3xl mx-auto px-4 pt-10">
      {/* Demo Image with Overlay */}
      <div className="relative rounded-2xl overflow-hidden mb-8">
        <img
          src={demoImg}
          alt="Demo"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow text-center">Interactive Demo</h2>
          <p className="text-white text-base md:text-lg mb-4 text-center drop-shadow">Explore a pre-loaded example to see how our AI-powered competitor intelligence works</p>
          <button className="bg-blue-600 text-white font-bold px-6 py-2 rounded hover:bg-blue-700 transition-colors text-base">Replay</button>
        </div>
      </div>
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-lg border border-gray-200 px-4 py-3 mb-8 w-full max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent outline-none text-lg placeholder-gray-500"
        />
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"></path></svg>
      </div>
      {/* Key Insights */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-1">Key Insights</h3>
        <p className="text-gray-700 mb-4">This analysis reveals key insights into Stripe's competitive landscape, including their target audience, core offerings, and marketing strategies. The AI identifies their strengths and weaknesses, providing a comprehensive overview of their market positioning.</p>
      </div>
      {/* Strengths */}
      <div className="mb-8">
        <h4 className="text-lg font-bold mb-2">Strengths</h4>
        <div className="mb-2">
          <span className="font-semibold">Developer-Centric Approach</span>
          <span className="block text-gray-700 text-sm">Stripe's robust API and developer-friendly documentation make it easy for businesses to integrate payment processing into their platforms.</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Comprehensive Payment Solutions</span>
          <span className="block text-gray-700 text-sm">Stripe offers a wide range of payment solutions, including credit card processing, subscriptions, and invoicing, catering to diverse business needs.</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Global Presence</span>
          <span className="block text-gray-700 text-sm">Stripe's global reach allows businesses to accept payments from customers worldwide, supporting multiple currencies and payment methods.</span>
        </div>
      </div>
      {/* Weaknesses */}
      <div className="mb-8">
        <h4 className="text-lg font-bold mb-2">Weaknesses</h4>
        <div className="mb-2">
          <span className="font-semibold">Complex Pricing</span>
          <span className="block text-gray-700 text-sm">Stripe's pricing structure can be complex, with various fees for different services and transaction types, potentially leading to unexpected costs.</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Learning Curve</span>
          <span className="block text-gray-700 text-sm">While Stripe offers extensive documentation, the complexity of its platform can still pose a challenge for businesses with limited technical expertise.</span>
        </div>
      </div>
      {/* Marketing Strategies */}
      <div className="mb-8">
        <h4 className="text-lg font-bold mb-2">Marketing Strategies</h4>
        <div className="mb-2">
          <span className="font-semibold">Content Marketing</span>
          <span className="block text-gray-700 text-sm">Stripe leverages content marketing, including blog posts, case studies, and guides, to educate potential customers and showcase its expertise in the payment processing industry.</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Community Engagement</span>
          <span className="block text-gray-700 text-sm">Stripe actively engages with the developer community through forums, events, and open-source projects, fostering a strong relationship with its target audience.</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Social Media Marketing</span>
          <span className="block text-gray-700 text-sm">Stripe utilizes social media platforms to share updates, engage with customers, and promote its brand, building a strong online presence.</span>
        </div>
      </div>
      {/* Target Audience */}
      <div className="mb-8">
        <h4 className="text-lg font-bold mb-2">Target Audience</h4>
        <div className="mb-2">
          <span className="font-semibold">Businesses</span>
          <span className="block text-gray-700 text-sm">Stripe primarily targets businesses of all sizes, from startups to large enterprises, that require online payment processing capabilities.</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Developers</span>
          <span className="block text-gray-700 text-sm">Stripe's developer-centric approach makes it particularly appealing to businesses with in-house development teams or those seeking customizable payment solutions.</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">International Businesses</span>
          <span className="block text-gray-700 text-sm">Stripe's global reach and support for multiple currencies make it a suitable choice for businesses with international customers or operations.</span>
        </div>
      </div>
      <div className="text-center mt-10">
        <button
          onClick={() => setCurrentStep('landing')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
        >
          Try with Your Website
        </button>
      </div>
    </div>
  </div>
);

export default DemoPage; 