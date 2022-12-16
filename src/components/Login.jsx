import { useRef, useState, useEffect } from "react";
import "./styles/Register.css";
import axios from "../api/axios";
import { Link } from "react-router-dom";


const LOGIN_URL = "/login";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  // State for username
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  // State for password
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // State for error message
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // For setting the focus when the component loads
  useEffect(() => {
    userRef.current.focus();
  }, []);


  // UseEf for error message
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      setSuccess(true);
      // Clear input fields
      setUser("");
      setPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Such Username Does Not Exist");
      } else {
        setErrMsg("Login Failed");
      }
    }
    errRef.current.focus();
  };

  return (
    <>
        <section id="register">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className='form-title'>LOGIN</h1>
          <form onSubmit={submitHandler}>
            {/* USERNAME FIELD */}

            <label htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
          

            {/* PASSWORD FIELD */}

            <label htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />

            {/* submit button */}
            <button
              className="submit-btn"
            >
              LOG ME IN!
            </button>
          </form>
          <p className="line-footer">
            Don't have an account yet?
            <br />
            <span className="line">
              {/* Router link goes here */}
              <Link to='/register'><a href="#">Create Account</a></Link>
            </span>
          </p>
        </section>
    </>
  );
};

export default Login;