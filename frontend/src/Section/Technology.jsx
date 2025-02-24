import React, { useState } from "react";
import "./Technology.css";

const Technology = () => {
  const [techNews] = useState([
    {
      id: 1,
      title: "Revolutionary AI Model Breaks New Ground",
      description:
        "A groundbreaking artificial intelligence model demonstrates unprecedented capabilities in problem-solving and natural language processing...",
      image: "https://example.com/tech1.jpg",
      date: "2024-01-20",
    },
    {
      id: 2,
      title: "New Quantum Computing Breakthrough",
      description:
        "Scientists achieve major milestone in quantum computing, bringing us closer to practical applications...",
      image: "https://example.com/tech2.jpg",
      date: "2024-01-19",
    },
    {
      id: 3,
      title: "Latest Smartphone Innovation Unveiled",
      description:
        "Leading tech company reveals next-generation smartphone with revolutionary features...",
      image: "https://example.com/tech3.jpg",
      date: "2024-01-18",
    },
    {
      id: 4,
      title: "Cybersecurity Alert: Major Update",
      description:
        "Important security patch released to address critical vulnerabilities in popular software...",
      image: "https://example.com/tech4.jpg",
      date: "2024-01-17",
    },
  ]);

  return (
    <div className="tech-container">
      <h1 className="tech-heading">Technology News</h1>

      <div className="featured-story">
        <div className="featured-content">
          <h2>{techNews[0].title}</h2>
          <p>{techNews[0].description}</p>
          <span className="date">{techNews[0].date}</span>
        </div>
        <img src={techNews[0].image} alt="Featured tech story" />
      </div>

      <div className="news-grid">
        {techNews.slice(1).map((news) => (
          <div key={news.id} className="news-card">
            <img src={news.image} alt={news.title} />
            <div className="news-content">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <span className="date">{news.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
