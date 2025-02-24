import React, { useState } from "react";
import "./Sports.css";

const Sports = () => {
  const [sportsNews] = useState([
    {
      id: 1,
      title: "Major Upset in Championship Finals",
      description:
        "Underdog team stuns favorites with last-minute victory in thrilling championship match...",
      image: "https://example.com/sports1.jpg",
      date: "2024-01-20",
    },
    {
      id: 2,
      title: "Star Athlete Signs Record-Breaking Deal",
      description:
        "Top player agrees to historic contract that sets new benchmark in professional sports...",
      image: "https://example.com/sports2.jpg",
      date: "2024-01-19",
    },
    {
      id: 3,
      title: "Olympic Preparations in Full Swing",
      description:
        "Host city unveils state-of-the-art facilities as athletes begin final preparations...",
      image: "https://example.com/sports3.jpg",
      date: "2024-01-18",
    },
    {
      id: 4,
      title: "New League Format Announced",
      description:
        "Major sports organization reveals innovative competition structure for upcoming season...",
      image: "https://example.com/sports4.jpg",
      date: "2024-01-17",
    },
  ]);

  return (
    <div className="sports-container">
      <h1 className="sports-heading">Sports News</h1>

      <div className="featured-story">
        <div className="featured-content">
          <h2>{sportsNews[0].title}</h2>
          <p>{sportsNews[0].description}</p>
          <span className="date">{sportsNews[0].date}</span>
        </div>
        <img src={sportsNews[0].image} alt="Featured sports story" />
      </div>

      <div className="news-grid">
        {sportsNews.slice(1).map((news) => (
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

export default Sports;
