import React, { useState } from 'react';

function PortfolioDetail() {
  const [shareLink, setShareLink] = useState("");
  
  const generateLink = () => {
    const expiration = document.getElementById("expiration").value;
    const fakeLink = `https://ninjatech.agency/portfolio/project-alpha?expires=${expiration}days`;
    setShareLink(fakeLink);
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      {/* Header */}
      <h1>Project Details</h1>
      <p className="text-gray-600 text-center text-lg mb-6">
        An in-depth look at Project — a leading solution in Ninjatech providing real-time analytics and data visualization dashboards.
      </p>

      {/* Media Section */}
      <div className="flex justify-center gap-6 mb-8">
        <img className="rounded-xl" src="https://via.placeholder.com/300x180" alt="Project Screenshot" />
        <video className="rounded-xl" controls src="https://www.w3schools.com/" width="300"></video>
      </div>

      {/* Info Section */}
      <div className="bg-gray-100 p-6 rounded-lg mb-8 shadow-md">
        <p className="text-gray-700 mb-2"><strong>Technology:</strong> React, Node.js</p>
        <p className="text-gray-700 mb-2"><strong>Industry:</strong> NinjaTech</p>
        <p className="text-gray-700 mb-2"><strong>Country:</strong> USA</p>
        <p className="text-gray-700 mb-2"><strong>Tags:</strong> Dashboard, Analytics, Top 10</p>
        <p className="text-gray-700">
          <strong>Reference Link:</strong>
          <a href="https://project.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">https://project.com</a>
        </p>
      </div>

      {/* Share Box */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-100 mb-8 flex flex-col gap-4 items-center">
        <label htmlFor="expiration" className="text-lg font-semibold">Set Link Expiration:</label>
        <select id="expiration" className="border p-2 rounded-md w-1/2 text-gray-700">
          <option value="7">1 Week</option>
          <option value="14">2 Weeks</option>
          <option value="30">1 Month</option>
        </select>

        <button 
          className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
          onClick={generateLink}
        >
          Generate Share Link
        </button>
        
        
        <input 
          type="text" 
          id="shareLink" 
          value={shareLink} 
          placeholder="Generated link will appear here" 
          readOnly 
          className="mt-4 p-2 border rounded-md w-1/2 text-gray-700" 
        />
        
        <button 
          className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 mt-4"
          onClick={copyLink}
        >
          Copy Link
        </button>
      </div>
    </div>
  );
}

export default PortfolioDetail;