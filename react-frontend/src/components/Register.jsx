import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Register.css";
import axios from "axios";
import { Link } from "react-router-dom";

const user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const pwd_regex = /^(?=.*[a-z])(?=.*[A-Z](?=.*[0-9])(?=.*[!@#$%])).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const matchPasswordRef = useRef();
  const errRef = useRef();
  // State for username
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  // State for password
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  // State for matching password
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  // State for error message
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [addStyle, setAddStyle] = useState("");

  const navigate = useNavigate();

  const url = "http://localhost:2500/api/users/";
  const createUser = (newUser) => {
    axios
      .post(url, newUser)
      .then((res) => {
        console.log(res)
        navigate("/login");
      })
      .catch((err) => {
        console.log("Username already exists..");
        setTimeout(() => {
          setAddStyle("");
        }, 200);
        setAddStyle(" shake");
      });
  };

  // For setting the focus when the component loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // UseEffect for username
  useEffect(() => {
    const result = user_regex.test(user);
    setValidName(result);
  }, [user]);

  // UseEffect for the password
  useEffect(() => {
    const result = pwd_regex.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  // UseEf for error message
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log({
    //   name: userRef.current.value,
    //   password: passwordRef.current.value,
    // });
    createUser({
      name: userRef.current.value,
      password: passwordRef.current.value,
    });
    userRef.current.value = "";
    passwordRef.current.value = "";
    matchPasswordRef.current.value = "";
  };

  return (
    <>
      {success ? (
        <div>
          <h1>Success!</h1>
          <p>
            <a href="#">Log In</a>
          </p>
        </div>
      ) : (
        <div className={'register' + addStyle}>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="form-title">CREATE ACCOUNT</h1>
          <form onSubmit={submitHandler}>
            {/* USERNAME FIELD */}

            <label htmlFor="username">
              Username:
              <span className={validName ? "valid" : "hide"}></span>
              <span className={validName || !user ? "hide" : "invalid"}></span>
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              - Should be 4 to 24 characters.
              <br />
              - Must begin with a letter.
              <br />- Letters, numbers, underscores, hyphens allowed.
            </p>

            {/* PASSWORD FIELD */}

            <label htmlFor="password">
              Password:
              <span className={validPwd ? "valid" : "hide"}></span>
              <span className={validPwd || !pwd ? "hide" : "invalid"}></span>
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              - Should be 8 to 24 characters.
              <br />
              - Must include uppercase and lowercase letters, a number and a
              special character.
              <br />- Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            {/* Matching confirmation */}

            <label htmlFor="confirm_pwd">
              Confirm Password:
              <span
                className={validMatch && matchPwd ? "valid" : "hide"}
              ></span>
              <span
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              ></span>
            </label>
            <input
              type="password"
              id="confirm_pwd"
              ref={matchPasswordRef}
              onChange={(e) => setMatchPwd(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              - Make sure passwords are identical!
            </p>

            {/* submit button */}
            <button
              className="submit-btn"
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              SIGN ME UP!
            </button>
          </form>
          <p className="line-footer">
            Already a member?
            <br />
            <span className="line">
              {/* Router lin goes here */}
              <Link to="/login">Log In</Link>
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default Register;
