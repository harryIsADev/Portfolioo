import React, { useState } from "react";

const ProjectItem = ({ imgSrc, altText, title, description }) => (
  <div className="project-item">
    <img src={imgSrc} alt={altText} className="project-image" />
    <div className="project-details">
      <h4>{title}</h4>
      <p>{description}</p>
      {/* <button className="learn-more-btn">Learn More</button> */}
    </div>
  </div>
);

export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      tab: "Coindex",
      items: [
        { imgSrc: "/images/image.png", altText: "Install Coindex", title: "Install Coindex", description: "Get started with Coindex by following our simple installation process." },
        { imgSrc: "/images/1.png", altText: "Run Coindex Command", title: "Run Coindex Command", description: "Learn how to use Coindex commands to fetch cryptocurrency data." },
        { imgSrc: "/images/2.png", altText: "View Cryptocurrency Data", title: "View Cryptocurrency Data", description: "Explore real-time cryptocurrency information with Coindex." },
        { imgSrc: "/images/3.png", altText: "Save Data to File", title: "Save Data to File", description: "Learn how to export and save cryptocurrency data for further analysis." },
        { imgSrc: "/images/4.png", altText: "Analyze the Output", title: "Analyze the Output", description: "Discover insights from the cryptocurrency data using Coindex's analysis tools." }
      ],
    },
    {
      tab: "AgroPredict",
      items: [
        { imgSrc: "/images/agro1.jpg", altText: "Location Verification", title: "Location Verification", description: "Verify farm locations for accurate crop recommendations." },
        { imgSrc: "/images/agro2.jpg", altText: "Dashboard", title: "Dashboard", description: "Get an overview of your farm's performance and predictions." },
        { imgSrc: "/images/agro3.jpg", altText: "Fertilizer Recommendation", title: "Fertilizer Recommendation", description: "Receive personalized fertilizer recommendations for optimal crop growth." },
        { imgSrc: "/images/agro4.jpg", altText: "Disease Detection", title: "Disease Detection", description: "Identify and manage crop diseases early with our AI-powered system." },
        { imgSrc: "/images/agro5.jpg", altText: "Crop Price Prediction", title: "Crop Price Prediction", description: "Get insights into future crop prices to make informed decisions." },
        { imgSrc: "/images/agro6.jpg", altText: "Crop Prediction", title: "Crop Prediction", description: "Predict the best crops to grow based on your location and conditions." }
      ],
    },
    {
      tab: "Bookshop",
      comingSoon: true,
      items: [],
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="tabs">
          {projects.map((project, idx) => (
            <button
              key={idx}
              className={`tab-trigger ${activeTab === idx ? "active" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              {project.tab}
            </button>
          ))}
        </div>

        <div className="slider">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`slide ${activeTab === idx ? "active" : ""}`}
              style={{ transform: `translateX(${-100 * activeTab}%)` }}
            >
              {project.comingSoon ? (
                <p>Coming Soon</p>
              ) : (
                <div className="project-grid">
                  {project.items.map((item, i) => (
                    <ProjectItem key={i} {...item} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
