import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home mt-32">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Latest News & Updates</h1>
          <p>Stay informed with the most recent news from around the world</p>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="featured-news">
        <h2>Featured Stories</h2>
        <div className="news-grid">
          <div className="news-card main">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Featured news"
            />
            <div className="news-content">
              <span className="category">World</span>
              <h3>Major Global Event Shapes International Relations</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
          <div className="news-card">
            <img src="https://via.placeholder.com/300x200" alt="News" />
            <div className="news-content">
              <span className="category">Technology</span>
              <h4>New Tech Breakthrough</h4>
            </div>
          </div>
          <div className="news-card">
            <img src="https://via.placeholder.com/300x200" alt="News" />
            <div className="news-content">
              <span className="category">Business</span>
              <h4>Market Updates</h4>
            </div>
          </div>
          <div className="news-card">
            <img src="https://via.placeholder.com/300x200" alt="News" />
            <div className="news-content">
              <span className="category">Business</span>
              <h4>Market Updates</h4>
            </div>
          </div>
          <div className="news-card">
            <img src="https://via.placeholder.com/300x200" alt="News" />
            <div className="news-content">
              <span className="category">Business</span>
              <h4>Market Updates</h4>
            </div>
          </div>
          <div className="news-card">
            <img src="https://via.placeholder.com/300x200" alt="News" />
            <div className="news-content">
              <span className="category">Business</span>
              <h4>Market Updates</h4>
            </div>
          </div>
          <div className="news-card">
            <img src="https://via.placeholder.com/300x200" alt="News" />
            <div className="news-content">
              <span className="category">Business</span>
              <h4>Market Updates</h4>
            </div>
          </div>
          <div className="news-card">
            <img src="https://via.placeholder.com/300x200" alt="News" />
            <div className="news-content">
              <span className="category">Business</span>
              <h4>Market Updates</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="latest-news">
        <h2>Latest News</h2>
        <div className="news-list">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="news-item">
              <img
                src={`https://via.placeholder.com/200x150`}
                alt="News thumbnail"
              />
              <div className="news-details">
                <span className="category">Category</span>
                <h4>News Headline Goes Here</h4>
                <p>Brief description of the news article goes here...</p>
                <div className="news-meta">
                  <span>2 hours ago</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>News Categories</h2>
        <div className="category-grid">
          {[
            "Politics",
            "Technology",
            "Sports",
            "Entertainment",
            "Business",
            "Health"
          ].map((category) => (
            <div key={category} className="category-card">
              <h3>{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest news delivered to your inbox</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
