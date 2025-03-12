import React, { useState, useEffect } from "react";
import "./Politics.css";

const Politics = () => {
  const [politicsNews, setPoliticsNews] = useState([
    {
      id: 1,
      title: "Major Policy Reform Announced",
      description:
        "Government unveils new legislative package aimed at economic growth...",
      image: "https://example.com/politics1.jpg",
      date: "2024-01-20",
    },
    {
      id: 2,
      title: "Election Results Update",
      description: "Latest counting shows close race in key constituencies...",
      image: "https://example.com/politics2.jpg",
      date: "2024-01-19",
    },
    // Add more mock data as needed
  ]);

  return (
    <div className="politics-container">
      <h1 className="politics-heading">Politics News</h1>

      <div className="featured-story">
        <div className="featured-content">
          <h2>{politicsNews[0].title}</h2>
          <p>{politicsNews[0].description}</p>
          <span className="date">{politicsNews[0].date}</span>
        </div>
        <img src={politicsNews[0].image} alt="Featured story" />
      </div>

      <div className="news-grid">
        {politicsNews.slice(1).map((news) => (
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

export default Politics;
