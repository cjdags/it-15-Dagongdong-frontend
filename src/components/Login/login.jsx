import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./login.css"; 

const StarBackground = () => {
  return (
    <div className="bg-stars">
      {[...Array(4)].map((_, i) => <div key={i} className="star"></div>)}
    </div>
  );
};

const LoginForm = () => {
  const navigate = useNavigate(); 

  const handleSignIn = (e) => {
    e.preventDefault();
 
    navigate("/Dashboard"); 
  };

  return (
    <div className="form">
      <StarBackground />

      <h2 className="form-title"><span>Welcome</span></h2>
      <h1 className="title-2"><span>LOGIN</span></h1>

      <div className="input-container">
        <input type="email" className="input-mail" placeholder="Email" required />
      </div>
      <div className="input-container">
        <input type="password" className="input-pwd" placeholder="Password" required />
      </div>

      {/* 3. Add the onClick handler */}
      <button type="submit" className="submit" onClick={handleSignIn}>
        Sign In
      </button>

      <p className="signup-link">
        Don’t have an account? <a href="/signup" className="up">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginForm;