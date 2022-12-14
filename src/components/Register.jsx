import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Register.css";
import axios from "axios";

const user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const pwd_regex = /^(?=.*[a-z])(?=.*[A-Z](?=.*[0-9])(?=.*[!@#$%])).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
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
  // State for matching password
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  // State for error message
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // For setting the focus when the component loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // UseEffect for username
  useEffect(() => {
    const result = user_regex.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  // UseEffect for the password
  useEffect(() => {
    const result = pwd_regex.test(pwd);
    console.log(result);
    console.log(pwd);
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
    // additional check
    const v1 = user_regex.test(user);
    const v2 = pwd_regex.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data)
      setSuccess(true);
      // Clear input fields
      setUser('');
      setPwd('');
    } catch (err) {}
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken')
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Log In</a>
          </p>
        </section>
      ) : (
        <section id="register">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Create account</h1>
          <form onSubmit={submitHandler}>
            {/* USERNAME FIELD */}

            <label htmlFor="username">
              Username:
              <span className={validName ? "valid" : "hide"}>
                {/* <FontAwesomeIcon icon={faCheck} /> */}
              </span>
              <span className={validName || !user ? "hide" : "invalid"}>
                {/* <FontAwesomeIcon icon={faTimes} /> */}
              </span>
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
              {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
              - Should be 4 to 24 characters.
              <br />
              - Must begin with a letter.
              <br />- Letters, numbers, underscores, hyphens allowed.
            </p>

            {/* PASSWORD FIELD */}

            <label htmlFor="password">
              Password:
              <span className={validPwd ? "valid" : "hide"}>
                {/* <FontAwesomeIcon icon={faCheck} /> */}
              </span>
              <span className={validPwd || !pwd ? "hide" : "invalid"}>
                {/* <FontAwesomeIcon icon={faTimes} /> */}
              </span>
            </label>
            <input
              type="password"
              id="password"
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
              {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
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
              <span className={validMatch && matchPwd ? "valid" : "hide"}>
                {/* <FontAwesomeIcon icon={faCheck} /> */}
              </span>
              <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                {/* <FontAwesomeIcon icon={faTimes} /> */}
              </span>
            </label>
            <input
              type="password"
              id="confirm_pwd"
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
              {/* <FontAwesomeIcon icon={faInfoCircle} /> */}- Make sure
              passwords are identical!
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
              <a href="#">Log In</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Register;
