import { useRef, useState } from "react";
import "./styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const [login, setLogin] = useState(false);
  const userRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const url = "http://localhost:2500/api/users/login";
  function loginUser(loginInfo) {
    axios
      .post(url, loginInfo)
      .then((res) => {
        console.log(res);
        setLogin(true)
        // alert("User has logged in");
        props.onLoginChange(login);
        navigate("/");
      })
      .catch((err) => {
        console.log(err)
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
