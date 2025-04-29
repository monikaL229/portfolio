import React from 'react';

const ClientReview = ({ isExpired = false }) => {
  return (
    <div className="min-h-screen flex items-start justify-center  pt-10">
      <div className="container max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-orange-500 mb-4">Project Review</h1>

        <div className="text-sm text-black mb-8">
          Shared by: <span className="font-medium ">sales@ninjatech.com</span> · Link expires in <strong>5 days</strong>
        </div>

        {/* Expired Message - optional */}  
        {isExpired && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6">
            ⚠️ This link has expired. Please contact the sender to request access.
          </div>
        )}

        {/* Portfolio Content */}
        <div className="mb-8 space-y-4">
          <p><strong>Description:</strong> A full-featured fintech dashboard for tracking portfolios, investment insights, and client activities.</p>
          <img
            src="https://via.placeholder.com/700x300"
            alt="Portfolio screenshot"
            className="rounded-lg w-full"
          />
          <p><strong>Technologies:</strong> React, Node.js, PostgreSQL</p>
          <p><strong>Domain:</strong> Finance</p>
          <a
            href="https://example.com/demo-video"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-orange-600 font-medium hover:underline"
          >
            ▶️ Watch Video Explanation
          </a>
        </div>

        <div className="text-xs text-gray-500 text-center mt-12">
          📌 Note: Your access may be logged for activity insights.
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
