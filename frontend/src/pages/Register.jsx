import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Create Account</h1>
        <p>Sign up to get latest news updates</p>

        <form className="register-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              className="register-input"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              className="register-input"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="register-input"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              className="register-input"
            />
          </div>

          <button type="submit" className="register-btn">
            Create Account
          </button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
