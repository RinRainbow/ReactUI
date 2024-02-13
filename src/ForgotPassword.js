import React from 'react';
import './ForgotPassword.css';
import icon from './images/login.png';
import arrow from './images/rightarrowpro.png';
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="ForgorPassword">
        <div className="ForgorPasswordForm">
            <div className="TopBlank">
                Reset Password
            </div>

            <div className="InputBox">
                <input type="text" placeholder="Username" />
            </div>

            <div className="InputBox">
                <input type="password" placeholder="New Password" />
            </div>

            <div className="InputBox">
                <input type="password" placeholder="New Password again" />
            </div>

            <div className="ResetButtom" type="submit">
                Reset Password
            </div>

            <div className="Or">
                <div className="OrText">
                    or
                </div>
                <hr className="Line"></hr>
            </div>

            <div className="RememberText">
                Just Remembered?
            </div>

            <Link className="BackToApp" to="/">
                <div className="Option">
                    <img
                        className="Icon"
                        src={icon}
                        alt=""
                    />
                    <div className="OptionText">Log in to Dictator</div>
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

export default ForgotPassword;
