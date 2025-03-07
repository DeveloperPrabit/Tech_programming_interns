import React from "react";
import "./Forget.css";

const Forget = () => {
  return (
    <div className="forget-container">
      <div className="forget-box">
        <h1>Forgot Password</h1>
        <p>Enter your email to reset password</p>

        <form className="forget-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              className="forget-input"
            />
          </div>

          <button type="submit" className="forget-btn">
            Reset Password
          </button>
        </form>

        <p className="login-text">
          Remember your password? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Forget;
