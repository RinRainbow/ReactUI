import React from 'react';
import './App.css';
import icon from './images/add-user.png';
import arrow from './images/rightarrowpro.png';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="LoginForm">
        <div className="TopBlank">
          Log in to Dictator
        </div>

        <div className="InputBox">
            <input type="text" placeholder="Username" />
        </div>

        <div className="InputBox">
            <input type="password" placeholder="Password" />
        </div>

        <div className="LoginButtom" type="submit">
          Log In
        </div>

        <div className="ForgotPassword">
          <a href="https://www.google.com/">
            Forgot Password
          </a>
        </div>

        <div className="Or">
            <div className="OrText">
              or
            </div>
            <hr className="Line"></hr>
        </div>

        <Link className="NewAccountLink" to="/NewAccount">
            <div className="Option">
              <img
                className="Icon"
                src={icon}
                alt=""
              />
              <div className="OptionText">Create New Account</div>
              <img
                className="Arrow"
                src={arrow}
                alt=""
              />
            </div>
        </Link>

      </div>
    </div>
  );
}

export default App;
