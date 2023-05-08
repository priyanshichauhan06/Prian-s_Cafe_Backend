import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./LogIn.css";
import axios from "axios";

const LogIn = () => {
  //declaring state variables using use state hook
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  //get navigation fn from react router
  const navigate = useNavigate();

  const proceedLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userID || !password) {
      alert("Please enter both UserID and Password");
      return;
    }
  
    try {
      // Make the POST request to the authentication API endpoint
      const response = await axios.post("https://localhost:7211/api/LogIn", {
        userId: userID,
        password: password,
      });
  
      if (response.data === true) {
        // Authentication successful
        // Redirect to the desired page
        navigate("/home");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during login");
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={proceedLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>User ID</label>
            <input type="text" value={userID} required onChange={(e) => setUserID(e.target.value)} className="form-control mt-1" placeholder="Enter User ID"/>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} className="form-control mt-1" placeholder="Enter Password" />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">Log In</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
