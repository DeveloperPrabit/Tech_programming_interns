import React, { useState } from "react";
import "./Health.css";

const Health = () => {
  const [healthNews] = useState([
    {
      id: 1,
      title: "Breakthrough in Medical Research",
      description:
        "Scientists discover promising new treatment approach for chronic diseases, offering hope to millions...",
      image: "https://example.com/health1.jpg",
      date: "2024-01-20",
    },
    {
      id: 2,
      title: "Mental Health Awareness Campaign",
      description:
        "Global initiative launches to destigmatize mental health issues and improve access to care...",
      image: "https://example.com/health2.jpg",
      date: "2024-01-19",
    },
    {
      id: 3,
      title: "New Fitness Trends for 2024",
      description:
        "Experts reveal emerging workout routines and wellness practices gaining popularity worldwide...",
      image: "https://example.com/health3.jpg",
      date: "2024-01-18",
    },
    {
      id: 4,
      title: "Nutrition Guidelines Updated",
      description:
        "Health organizations revise dietary recommendations based on latest scientific evidence...",
      image: "https://example.com/health4.jpg",
      date: "2024-01-17",
    },
  ]);

  return (
    <div className="health-container">
      <h1 className="health-heading">Health & Wellness News</h1>

      <div className="featured-story">
        <div className="featured-content">
          <h2>{healthNews[0].title}</h2>
          <p>{healthNews[0].description}</p>
          <span className="date">{healthNews[0].date}</span>
        </div>
        <img src={healthNews[0].image} alt="Featured health story" />
      </div>

      <div className="news-grid">
        {healthNews.slice(1).map((news) => (
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

export default Health;
