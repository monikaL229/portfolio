

import React, { useState } from 'react';
import Button from '../components/Button'

const Summary= () => {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "This is a FinTech analytics dashboard project with advanced charts and real-time data." },
    { id: 2, title: "Project 2", description: "Healthcare appointment management solution with clean UI and great reference UX." },
  ]);
  const [preview, setPreview] = useState("");
  const [shareLink, setShareLink] = useState("");

  const handleDescriptionChange = (id, newDescription) => {
    setProjects(prev => prev.map(project => project.id === id ? { ...project, description: newDescription } : project));
  };

  const previewPage = () => {
    let previewHTML = '';
    projects.forEach((project, index) => {
      previewHTML += `<h4>Project ${index + 1}</h4><p>${project.description}</p>`;
    });
    setPreview(previewHTML);
  };

  const shareNow = () => {
    let linkContent = '';
    projects.forEach((project, index) => {
      linkContent += encodeURIComponent(`Project${index + 1}:${project.description};`);
    });

    const generatedURL = `https://ninjatech.agency/shared/portfolio-summary?data=${linkContent}`;
    setShareLink(generatedURL);
  };

  return (
    <div className="container max-w-xl bg-white rounded-2xl shadow-lg p-8 ">

      {/* Header */}
      <h1>Confirm and Share Portfolios</h1>

      {/* Portfolio List */}
      <div className="portfolio-list">
        {projects.map((project, index) => (
          <div key={project.id} className="portfolio-item mb-6">
            <h2 className="text-xl font-medium text-gray-700 mb-2">{project.title}</h2>
            <label className="block text-sm text-gray-500 mb-2">Edit Description:</label>
            <textarea
              rows="3"
              value={project.description}
              onChange={(e) => handleDescriptionChange(project.id, e.target.value)}
              className="w-full p-3 text-sm border border-gray-300 rounded-md resize-none focus:border-orange-500 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Portfolio Options */}
      <div className="portfolio-options flex justify-between mt-6">
      <Button onClick={previewPage}>Preview
    </Button>
    <Button onClick={shareNow}>

          Finalize & Share
        </Button>
      </div>

      {/* Preview Box */}
      <div className="preview-box mt-8" style={{ display: preview ? 'block' : 'none' }}>
        <h3 className="text-2xl font-medium text-gray-800 mb-4">Preview:</h3>
        <div
          id="previewContent"
          dangerouslySetInnerHTML={{ __html: preview }}
        />
      </div>

      {/* Link Box */}
      <div className="link-box mt-8" style={{ display: shareLink ? 'block' : 'none' }}>
        <h3 className="text-2xl font-medium text-gray-800 mb-4">Share Link:</h3>
        <a href={shareLink} id="generatedLink" target="_blank" className="text-lg text-orange-500 hover:underline break-words">{shareLink}</a>
      </div>
    </div>
  );
};

export default Summary;
