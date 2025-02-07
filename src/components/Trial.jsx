import React from "react";

const FreeTrialSection = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh] bg-gray-100 px-6">
      <div className="text-center max-w-3xl w-full">
        <h2 className="text-4xl font-extrabold text-gray-900">Start your free trial</h2>
        <p className="mt-4 text-lg text-gray-600">
          Join over <span className="font-semibold">4,000+ startups</span> already growing with Untitled.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg text-lg font-medium transition-all duration-300 transform hover:bg-gray-200 hover:scale-105">
            Learn more
          </button>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg text-lg font-semibold transition-all duration-300 transform hover:bg-violet-500 hover:scale-105">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialSection;

