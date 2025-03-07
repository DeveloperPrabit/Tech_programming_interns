import React, { useState } from "react";
import "./Entertainment.css";

const Entertainment = () => {
  const [entertainmentNews] = useState([
    {
      id: 1,
      title: "New Blockbuster Movie Breaks Box Office Records",
      description:
        "The latest superhero film shatters opening weekend expectations with record-breaking ticket sales...",
      image: "https://example.com/entertainment1.jpg",
      date: "2024-01-20",
    },
    {
      id: 2,
      title: "Popular TV Series Announces Final Season",
      description:
        "Fans worldwide react to news of beloved show's upcoming conclusion...",
      image: "https://example.com/entertainment2.jpg",
      date: "2024-01-19",
    },
    {
      id: 3,
      title: "Music Star's New Album Goes Platinum",
      description:
        "Chart-topping artist celebrates milestone achievement with global fan base...",
      image: "https://example.com/entertainment3.jpg",
      date: "2024-01-18",
    },
    {
      id: 4,
      title: "Celebrity Couple Announces Engagement",
      description:
        "Hollywood's favorite duo shares exciting news on social media...",
      image: "https://example.com/entertainment4.jpg",
      date: "2024-01-17",
    },
  ]);

  return (
    <div className="entertainment-container">
      <h1 className="entertainment-heading">Entertainment News</h1>

      <div className="featured-story">
        <div className="featured-content">
          <h2>{entertainmentNews[0].title}</h2>
          <p>{entertainmentNews[0].description}</p>
          <span className="date">{entertainmentNews[0].date}</span>
        </div>
        <img
          src={entertainmentNews[0].image}
          alt="Featured entertainment story"
        />
      </div>

      <div className="news-grid">
        {entertainmentNews.slice(1).map((news) => (
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

export default Entertainment;
