// export default LoginForm;
import React, { useState } from "react";

 function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
 const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:6900/login/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        throw new Error('Invalid Aadhar number or password');
      }

      // Handle successful login
      // For example, redirect to dashboard or set user state
      console.log('Login successful');

    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };


  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div
          className="col-md-1 text-center company__info"
          style={{ backgroundColor: "white" }}
        >
         
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
  )
};

export default LoginForm;
