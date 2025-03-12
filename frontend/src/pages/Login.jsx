// import React from "react";
// import "./Login.css";

// const Login = () => {
//   return;
//   <div className="login-container">
//     <div className="login-box">
//       <h1>Welcome Back</h1>
//       <p>Login to access latest news</p>

//       <form className="login-form">
//         <div className="form-group">
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="login-input"
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="password"
//             placeholder="Password"
//             className="login-input"
//           />
//         </div>

//         <button type="submit" className="login-btn">
//           Login
//         </button>
//       </form>

//       <p className="signup-text">
//         Don't have an account? <a href="/signup">Sign up</a>
//       </p>
//     </div>
//   </div>;
// };

// export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.token) {
        setMessage("Login successful!");
        localStorage.setItem("token", response.data.token);
        // Redirect user to dashboard or homepage
        window.location.href = "/Home";
      } else {
        setMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome Back</h1>
        {message && <p className="text-center text-red-500">{message}</p>}
        <p>Login to access the latest news</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              className="login-input"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              className="login-input"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
