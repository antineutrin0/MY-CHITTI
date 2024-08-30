import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-100 mb-8">
        Choose Your Plan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-600 rounded-lg shadow-lg p-6 border-t-4 border-green-500">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">Free</h2>
          <p className="text-gray-100 mb-6">Basic features for personal use.</p>
          <div className="text-3xl font-bold text-gray-100 mb-6">Free</div>
          <ul className="mb-6 space-y-2">
            <li className="text-gray-100">Access to basic features</li>
            <li className="text-gray-100">1 AI model</li>
            <li className="text-gray-100">Community support</li>
          </ul>
          <Link to='/'><button className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
            Get Started
          </button></Link>
        </div>

        {/* Monthly Plan */}
        <div className="bg-slate-600 rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">Monthly</h2>
          <p className="text-gray-100 mb-6">For growing businesses.</p>
          <div className="text-3xl font-bold text-gray-100 mb-6">$29/month</div>
          <ul className="mb-6 space-y-2">
            <li className="text-gray-100">Access to all features</li>
            <li className="text-gray-100">5 AI models</li>
            <li className="text-gray-100">Priority support</li>
          </ul>
          <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            Choose Plan
          </button>
        </div>

        {/* Annual Plan */}
        <div className="bg-slate-600 rounded-lg shadow-lg p-6 border-t-4 border-yellow-500">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">Annual</h2>
          <p className="text-gray-100 mb-6">Best value for long-term use.</p>
          <div className="text-3xl font-bold text-gray-100 mb-6">$299/year</div>
          <ul className="mb-6 space-y-2">
            <li className="text-gray-100">Access to all features</li>
            <li className="text-gray-100">Unlimited AI models</li>
            <li className="text-gray-100">Dedicated support</li>
          </ul>
          <button className="w-full py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
