import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Login.css";
import {ImFacebook2} from '@react-icons/all-files'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleGoogleLogin = () => {
    // Perform login with Google logic here
  };

  const handleFacebookLogin = () => {
    // Perform login with Facebook logic here
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login logic here
    console.log(`Username: ${email}, Password: ${password}`);
  };

  return (
    <>
      <div className={"loginForm"}>
        <div className="greet">
          <p className="mainHeading">Welcome!</p>
          <p className="greetMessage">Log in to your account</p>
    <i className="fa fa-facebok"/>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={"main"}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleUsernameChange}
              required
            />
          </div>

          <div className={"main"}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="pass">
            <div style={{display:"flex" , justifyContent:"center", alignItems:"center"}}>
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p>Forgot Password</p>
          </div>
          <button type="submit">Login</button>
        </form>

        <div className="socialLogin">
          <button className="googleButton" onClick={handleGoogleLogin}>
            Login with Google
          </button>
          <button className="facebookButton" onClick={handleFacebookLogin}>
            Login with Facebook
          </button>
        </div>
        <p>
        Not signed up yet? <Link to="/signup">Sign up</Link>
      </p>
      </div>

      
    </>
  );
}

export default Login;
