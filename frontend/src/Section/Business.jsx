import React, { useState } from "react";
import "./Business.css";

const Business = () => {
  const [businessNews] = useState([
    {
      id: 1,
      title: "Global Markets Hit Record High",
      description:
        "Stock markets worldwide reach unprecedented levels as investor confidence soars amid positive economic indicators...",
      image: "https://example.com/business1.jpg",
      date: "2024-01-20",
    },
    {
      id: 2,
      title: "Major Merger Creates Industry Giant",
      description:
        "Two leading corporations announce historic merger, reshaping competitive landscape in tech sector...",
      image: "https://example.com/business2.jpg",
      date: "2024-01-19",
    },
    {
      id: 3,
      title: "Startup Secures Record Funding",
      description:
        "Innovative fintech startup raises $500M in Series C funding, marking largest deal this year...",
      image: "https://example.com/business3.jpg",
      date: "2024-01-18",
    },
    {
      id: 4,
      title: "New Economic Policy Announced",
      description:
        "Government unveils comprehensive economic reform package aimed at boosting growth and employment...",
      image: "https://example.com/business4.jpg",
      date: "2024-01-17",
    },
  ]);

  return (
    <div className="business-container">
      <h1 className="business-heading">Business News</h1>

      <div className="featured-story">
        <div className="featured-content">
          <h2>{businessNews[0].title}</h2>
          <p>{businessNews[0].description}</p>
          <span className="date">{businessNews[0].date}</span>
        </div>
        <img src={businessNews[0].image} alt="Featured business story" />
      </div>

      <div className="news-grid">
        {businessNews.slice(1).map((news) => (
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

export default Business;
