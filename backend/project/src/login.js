import React, { useState } from "react";
import preamble from "../Assets/preamble.jpg";
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };
  router.post('/login', async (req, res) => {
    res.send("finally it works")})
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div
          className="col-md-1 text-center company__info"
          style={{ backgroundColor: "white" }}
        >
          {/* <span className="company__logo">
            <h2>
              <span className="fa fa-android"></span>
            </h2>
          </span> */}
          <img
            src={preamble}
            width="70"
            height="70"
            className="d-inline-block align-top mr-2"
            alt="Preamble"
          />
          {/* <h4 className="company_title">Your Company Logo</h4> */}
        </div>
        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
          <div className="container-fluid">
            <div className="row">
              <h2>Sign In</h2>
            </div>
            <div className="row">
              <form onSubmit={handleSubmit} className="form-group">
                <div className="row">
                  <input
                    type="text"
                    name="aadharNo"
                    id="aadharNo"
                    className="form__input"
                    placeholder="Aadhar Card"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="row">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form__input"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="row">
                  <input
                    type="checkbox"
                    name="remember_me"
                    id="remember_me"
                    className=""
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <label htmlFor="remember_me">Remember Me!</label>
                </div>
                <div className="row">
                  <input type="submit" value="Submit" className="btnLogin" />
                </div>
              </form>
            </div>
            <div className="row">
              <p>
                Don't have an account? <a href="#">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;