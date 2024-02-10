import React from 'react';
import './NewAccount.css';
import icon from './images/login.png';
import arrow from './images/rightarrowpro.png';
import { Link } from "react-router-dom";

function NewAccount() {
  return (
    <div className="NewAccount">
        <div className="CreateNewAccountForm">
            <div className="TopBlank">
                Create New Account
            </div>

            <div className="InputBox">
                <input type="text" placeholder="Username" />
            </div>

            <div className="InputBox">
                <input type="password" placeholder="Password" />
            </div>

            <div className="CreateButtom" type="submit">
                Create Account
            </div>

            <div className="Or">
                <div className="OrText">
                    or
                </div>
                <hr className="Line"></hr>
            </div>

            <div className="AlreadyText">
                Already Have Account?
            </div>

            <Link className="BackToApp" to="/App">
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

export default NewAccount;
