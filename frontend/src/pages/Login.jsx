import React from "react";
import "./Login.css";

const Login = () => {
  return;
  <div className="login-container">
    <div className="login-box">
      <h1>Welcome Back</h1>
      <p>Login to access latest news</p>

      <form className="login-form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            className="login-input"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <p className="signup-text">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  </div>;
};

export default Login;
