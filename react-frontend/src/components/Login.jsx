import { useRef, useState } from "react";
import "./styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const [addStyle, setAddStyle] = useState('');
// Holders for username and email
  const userRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

// Axios call to the server
  const url = "http://localhost:2500/api/users/login";
  function loginUser(loginInfo) {
    axios
      .post(url, loginInfo)
      .then((res) => {
        console.log(res);
        // Executing function and changing login state in app.js
        props.onLoginChange();
        navigate("/");
      })
      .catch((err) => {
        console.log(err)
        setTimeout(()=>{setAddStyle('')},200)
        setAddStyle(' shake');
        
        // setAddStyle('');
        // alert("Wrong username or password entered..");
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
      <div className={"register" + addStyle}>
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
