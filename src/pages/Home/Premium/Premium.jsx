import React, { useState } from "react";

const Premium = () => {
  return <PricingPage />;
};

export default Premium;
const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("annual");

  const toggleBillingCycle = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <div className="py-10 px-4">
      <h1 className="text-center text-3xl font-bold mb-10">
        Upgrade to Premium
      </h1>

      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 rounded-l-md text-white ${
            billingCycle === "annual" ? "bg-blue-600" : "bg-gray-800"
          }`}
          onClick={() => toggleBillingCycle("annual")}
        >
          Annual
        </button>
        <button
          className={`px-6 py-2 rounded-r-md text-white ${
            billingCycle === "monthly" ? "bg-blue-600" : "bg-gray-800"
          }`}
          onClick={() => toggleBillingCycle("monthly")}
        >
          Monthly
        </button>
      </div>

      <div className="flex justify-around flex-wrap">
        <div
          className="dark:bg-[#202327] bg-gray-200 rounded-lg shadow-lg p-5 w-64 mb-3 lg:mb-0"
          style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
        >
          <h2 className="text-xl font-semibold">Basic</h2>
          <h3 className="text-2xl mt-2">
            {billingCycle === "annual"
              ? "TRY 49.84 / month"
              : "TRY 59.99 / month"}
          </h3>
          <p className="text-sm">
            {billingCycle === "annual"
              ? "TRY 598.09 billed annually (SAVE 11%)"
              : "Billed monthly"}
          </p>
          <ul className="mt-4">
            <li>✓ Small reply boost</li>
            <li>✓ Encrypted direct messages</li>
            <li>✓ Bookmark folders</li>
            <li>✓ Highlights tab</li>
            <li>✓ Edit post</li>
            <li>✓ Post longer videos</li>
            <li>✓ Longer posts</li>
          </ul>
        </div>

        <div
          className="dark:bg-[#202327] bg-gray-200  border border-[#1d9bf0] rounded-lg shadow-lg p-5 w-64 mb-3 lg:mb-0"
          style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
        >
          <h2 className="text-xl font-semibold">Premium</h2>
          <h3 className="text-2xl mt-2">
            {billingCycle === "annual"
              ? "TRY 130.83 / month"
              : "TRY 149.99 / month"}
          </h3>
          <p className="text-sm">
            {billingCycle === "annual"
              ? "TRY 1,569.99 billed annually (SAVE 12%)"
              : "Billed monthly"}
          </p>
          <ul className="mt-4">
            <li>✓ Everything in Basic, and</li>
            <li>✓ Half Ads in For You and Following</li>
            <li>✓ Larger reply boost</li>
            <li>✓ Get paid to post</li>
            <li>✓ Checkmark</li>
            <li>✓ Grok 2 AI Assistant</li>
            <li>✓ X Pro, Analytics, Media Studio</li>
            <li>✓ Creator Subscriptions</li>
          </ul>
        </div>

        <div
          className="dark:bg-[#202327] bg-gray-200  rounded-lg shadow-lg p-5 w-64 mb-3 lg:mb-0"
          style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
        >
          <h2 className="text-xl font-semibold">Premium+</h2>
          <h3 className="text-2xl mt-2">
            {billingCycle === "annual"
              ? "TRY 261.67 / month"
              : "TRY 299.99 / month"}
          </h3>
          <p className="text-sm">
            {billingCycle === "annual"
              ? "TRY 3,139.98 billed annually (SAVE 12%)"
              : "Billed monthly"}
          </p>
          <ul className="mt-4">
            <li>✓ Everything in Premium, and</li>
            <li>✓ Fully ad-free</li>
            <li>✓ Largest reply boost</li>
            <li>✓ Write Articles</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 hidden lg:block">
        <h2 className="text-2xl text-center mb-4">Compare tiers & features</h2>
        <table
          className="min-w-full dark:bg-[#202327] bg-gray-200  rounded-lg"
          style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
        >
          <thead>
            <tr className="bg-gray-700 text-gray-400">
              <th className="p-3 text-left">Features</th>
              <th className="p-3 text-left">Basic</th>
              <th className="p-3 text-left">Premium</th>
              <th className="p-3 text-left">Premium+</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-600">
              <td className="p-3">Small reply boost</td>
              <td className="p-3">✓</td>
              <td className="p-3">✓</td>
              <td className="p-3">✓</td>
            </tr>
            <tr className="border-t border-gray-600">
              <td className="p-3">Encrypted direct messages</td>
              <td className="p-3">✓</td>
              <td className="p-3">✓</td>
              <td className="p-3">✓</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
