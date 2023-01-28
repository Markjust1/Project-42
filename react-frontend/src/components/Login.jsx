import { useRef } from "react";
import "./styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const url = "http://localhost:2500/api/users/login";
  const loginUser = (loginInfo) => {
    axios
      .post(url, loginInfo)
      .then((res) => {
        console.log(res)
        alert("User has logged in");
        navigate("/");
      })
      .catch((err) => {
        alert("Wrong username or password entered..");
      });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    loginUser({
      name: userRef.current.value,
      password: passwordRef.current.value,
    });
    userRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <>
      <div id="register">
        <h1 className="form-title">LOGIN</h1>
        <form onSubmit={submitHandler}>
          {/* USERNAME FIELD */}

          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={userRef} required />

          {/* PASSWORD FIELD */}

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} required />

          {/* submit button */}

          <button className="submit-btn">LOG ME IN!</button>
        </form>
        <p className="line-footer">
          Don't have an account yet?
          <br />
          <span className="line">
            {/* Router link goes here */}

            <Link to="/register">Create Account</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
