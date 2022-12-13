import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Register.css";

const user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const password_regex =
  /^(?=.*[a-z])(?=.*[A-Z](?=.*[0-9])(?=.*[!@#$%])).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  // State for username
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  // State for password
  const [pwd, setpwd] = useState("");
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

  return <div className="register-container"></div>;
};

export default Register;
