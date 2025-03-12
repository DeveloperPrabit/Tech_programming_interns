// import React, { useState, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Register.css";
// import axios from "axios";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/v1/users/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(formData)
//         }
//       );

//       const result = await response.json();
//       if (response.ok) {
//         setMessage("Registration successful!");
//       } else {
//         setMessage(result.message || "Registration failed.");
//       }
//     } catch (error) {
//       setMessage("Something went wrong. Please try again.");
//     }

//     setLoading(false);
//   };
//   return (
//     <div className="register-container">
//       <div className="register-box">
//         <h1>Create Account</h1>
//         {message && <p className="text-center text-red-500 mb-4">{message}</p>}
//         <p>Sign up to get latest news updates</p>

//         <form className="register-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="register-input"
//               // value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="register-input"
//               // value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               className="register-input"
//               // value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* <div className="form-group">
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="register-input"
//             />
//           </div> */}

//           <button type="submit" className="register-btn" disabled={loading}>
//             {/* Create Account */}
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>

//         <p className="login-text">
//           Already have an account?
//           {/* <a href="/login">Login</a> */}
//           <Link
//             style={{ textDecoration: "none", cursor: "pointer" }}
//             to="/login"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/register",
        formData
        // { headers: { "Content-Type": "application/json" } }
      );

      console.log({ response });
      if (response.status === 201) {
        setMessage("Registration successful!");
        // setTimeout(() => {
        //   navigate("/login"); // Redirect to login page after success
        // }, 2000);
      } else {
        setMessage(response.data.message || "Registration failed.");
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong. Try again."
      );
    }

    setLoading(false);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Create Account</h1>
        {message && <p className="text-center text-red-500">{message}</p>}
        <p>Sign up to get the latest news updates</p>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Full Name"
              className="register-input"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              className="register-input"
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
              className="register-input"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <Link to="/verify-email" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
