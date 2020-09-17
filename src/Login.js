import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const registerIn = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_form">
        <Link to="/">
          <img
            className="login_logo"
            alt=""
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <form>
          <div className="login_form_parts">
            <span>Email Id</span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login_form_parts">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login_form_parts">
            <button className="login_button" onClick={signIn}>
              Login
            </button>
          </div>

          <div className="login_form_parts">
            <p className="login_extraText">
              By Signing in you agree to the AMAZON CLONE
            </p>
            <button className="login_createAccount" onClick={registerIn}>
              Create your Amazon Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
