import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // <-- import external CSS
import login_user from "../../images/user.png"


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    // alert("Login form submitted!");
    navigate('/2fa')
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>

        <div className="login-image-wrapper">
          <img
            className="user_login_img"
            alt="user img"
            src={login_user}
          />
        </div>


        <label className="input-label">User Name</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />

        <label className="input-label">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        
        <button type="submit" className="login-button">
          Login
        </button>

        <p className="signup-text">
          Don’t have an account?
          <Link className="signup-btn" to="/signup">Signup</Link>
        </p>
        
      </form>
    </div>
  );
}

export default Login;
