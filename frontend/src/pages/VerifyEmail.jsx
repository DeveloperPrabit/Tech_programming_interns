// import React from "react";
// import "./Login.css";

// const VerifyEmail = () => {
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h1>Email Verification</h1>

//         <form className="login-form">
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="login-input"
//               required
//             />
//           </div>

//           {/* <div className="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               className="login-input"
//             />
//           </div> */}

//           <button type="submit" className="login-btn">
//             Login
//           </button>
//         </form>

//         <p className="signup-text">
//           Don't have an account? <a href="/signup">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default VerifyEmail;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/users/generate-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email })
        }
      );

      const data = await response.json();
      if (response.ok) {
        setOtpSent(true);
      } else {
        setError(data.message || "Failed to send OTP");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  // Function to verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/users/verify-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp })
        }
      );

      const data = await response.json();
      if (response.ok) {
        navigate("/login"); // Redirect to login page
      } else {
        setError(data.message || "Invalid OTP");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Email Verification</h1>

        <form
          className="login-form"
          onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}
        >
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={otpSent}
            />
          </div>

          {otpSent && (
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter OTP"
                className="login-input"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Processing..." : otpSent ? "Verify OTP" : "Get OTP"}
          </button>
        </form>

        {error && <p className="error-text">{error}</p>}

        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
