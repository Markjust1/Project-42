import { useRef } from "react";
import "./styles/Register.css";
import { Link } from "react-router-dom";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log({username: userRef.current.value, password: passwordRef.current.value});
    userRef.current.value = '';
    passwordRef.current.value = '';
  }
  

  return (
    <>
        <div id="register">
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
              required
            />
          

            {/* PASSWORD FIELD */}

            <label htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              required
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

              <Link to='/register'>Create Account</Link>
            </span>
          </p>
        </div>
    </>
  );
};

export default Login;