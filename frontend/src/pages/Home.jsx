import React from "react";

const Home = () => {
  return (
    <div>
      <div className="news-portal">
        {/* Header Section */}
        <header className="header">
          <h1>News Portal</h1>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#politics">Politics</a>
              </li>
              <li>
                <a href="#technology">Technology</a>
              </li>
              <li>
                <a href="#sports">Sports</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <section className="featured-news">
            <h2>Featured News</h2>
            <div className="news-grid">
              <article className="news-card">
                <img src="https://via.placeholder.com/300x200" alt="News" />
                <h3>Breaking News Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </article>
              {/* Add more news cards as needed */}
            </div>
            <div className="news-grid">
              <article className="news-card">
                <img src="https://via.placeholder.com/300x200" alt="News" />
                <h3>Breaking News Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </article>
              {/* Add more news cards as needed */}
            </div>
            <div className="news-grid">
              <article className="news-card">
                <img src="https://via.placeholder.com/300x200" alt="News" />
                <h3>Breaking News Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </article>
              {/* Add more news cards as needed */}
            </div>
          </section>

          <aside className="sidebar">
            <h2>Trending</h2>
            <ul>
              <li>Trending News 1</li>
              <li>Trending News 2</li>
              <li>Trending News 3</li>
            </ul>
          </aside>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 ews Portal. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;