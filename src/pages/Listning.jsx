
import { useState } from "react";
import { FaCopy, FaShare, FaCheckCircle, FaClone } from "react-icons/fa";

const projectsData = [
  {
    title: "Project 1",
    tags: "Design, Top 10",
    link: "https://example.com/portfolio/123",
  },
  {
    title: "Project 2",
    tags: "UI, Reference",
    link: "https://example.com/portfolio/456",
  },
  {
    title: "Project 3",
    tags: "UI, Reference",
    link: "https://example.com/portfolio/789",
  },
  {
    title: "Project 4",
    tags: "UI, Reference",
    link: "https://example.com/portfolio/101",
  },
];

const Listing = () => {
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [copiedLink, setCopiedLink] = useState("");

  const handleSelect = (title) => {
    setSelectedProjects((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(link);
    setTimeout(() => setCopiedLink(""), 2000);
  };

  return (
    <div className="container mx-auto p-6">
      <h1>Portfolio Listing</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <input
          type="text"
          placeholder="Search by Title"
          className="border px-4 py-2 rounded-md min-w-[160px]"
        />
        <select className="border px-4 py-2 rounded-md min-w-[160px]">
          <option>Technology</option>
          <option>React</option>
          <option>Vue</option>
        </select>
        <select className="border px-4 py-2 rounded-md min-w-[160px]">
          <option>Country</option>
          <option>USA</option>
          <option>India</option>
        </select>
        <select className="border px-4 py-2 rounded-md min-w-[160px]">
          <option>Industry/Domain</option>
          <option>Healthcare</option>
          <option>Finance</option>
        </select>
        <input
          type="text"
          placeholder="Search by Tag"
          className="border px-4 py-2 rounded-md min-w-[160px]"
        />
      </div>

      {/* Share Options */}
      {selectedProjects.length >= 2 && (
        <div className="flex flex-wrap gap-4 items-center justify-center bg-orange-50 border border-orange-300 p-4 rounded-md mb-6">
          <label>
            <input type="radio" name="share" defaultChecked className="mr-2" />
            Sharing only portfolio links
          </label>
          <label>
            <input type="radio" name="share" className="mr-2" />
            Including additional details
          </label>
          <select className="border px-3 py-2 rounded-md">
            <option>1 week</option>
            <option>2 weeks</option>
          </select>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Share
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Export as PDF
          </button>
        </div>
      )}

      {/* Help text */}
      {selectedProjects.length < 2 && (
        <p className="text-center bg-orange-100 border border-orange-300 p-3 rounded-md text-gray-600 max-w-xl mx-auto mb-8">
          🔶 Select <strong>2 or more portfolios</strong> to enable sharing options above.
        </p>
      )}

      {/* Portfolio Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`relative border p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition ${
              selectedProjects.includes(project.title)
                ? "border-orange-400 shadow-orange-100"
                : ""
            }`}
          >
            <input
              type="checkbox"
              className="absolute top-4 right-4 transform scale-125 accent-orange-500"
              checked={selectedProjects.includes(project.title)}
              onChange={() => handleSelect(project.title)}
            />

            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-500 text-sm mb-4">
              <strong>Tags:</strong> {project.tags}
            </p>

            <div className="flex items-center gap-3 mb-4">
              <button onClick={() => handleCopy(project.link)}>
                {copiedLink === project.link ? (
                  <FaClone className="text-green-500 text-xl" />
                ) : (
                  <FaCopy className="text-gray-500 hover:text-orange-500 text-xl" />
                )}
              </button>
              <FaShare className="text-gray-500 hover:text-orange-500 text-xl cursor-pointer" />
            </div>

            <button className="mt-2 px-4 py-2 border rounded-md bg-gray-50 hover:bg-gray-100 text-sm font-medium">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
