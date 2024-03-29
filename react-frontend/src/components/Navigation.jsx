import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles/Navigation.css";
import cart from "../assets/cart.png";
import { useState, useEffect } from "react";

const Navigation = (props) => {
  const [addStyle, setAddStyle] = useState("");
  const [prevCartLength, setPrevCartLength] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const local_storage = window.localStorage.getItem("userName");
  const navigate = useNavigate();

  useEffect(() => {
    props.updateCartLength();
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
    setTrigger(!trigger);
  };

  useEffect(() => {
    navigate("/");
  }, [trigger]);

  const addCartShaking = () => {
    setAddStyle(" cart-shake");
    setTimeout(() => {
      setAddStyle("");
    }, 1000);
  };

  useEffect(() => {
    if (props.cartLength !== prevCartLength) {
      addCartShaking();
      setPrevCartLength(props.cartLength);
    }
  }, [props.cartLength, prevCartLength]);

  return (
    <nav className="navbar-container">
      <div className="navbar-title">PROJECT42</div>
      <div className="navbar-elements">
        {local_storage == null ? (
          <>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <div className="navbar-item">
                {local_storage == null && <span>REGISTER</span>}
              </div>
            </Link>

            <div className="navbar-item">|</div>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div className="navbar-item">
                {local_storage == null ? (
                  <span>LOGIN</span>
                ) : (
                  <span onClick={clearLocalStorage}>LOGOUT</span>
                )}
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="navbar-item">
                <span>HOME</span>
              </div>
            </Link>

            <Link to="/add" style={{ textDecoration: "none" }}>
              <div className="navbar-item">
                <span>LIST ITEM</span>
              </div>
            </Link>

            <Link to="/profile" style={{ textDecoration: "none" }}>
              <div className="navbar-item">
                <span>MY ACCOUNT</span>
              </div>
            </Link>

            <div className="navbar-item">|</div>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div className="navbar-item">
                  <span onClick={clearLocalStorage}>LOGOUT</span>
              </div>
            </Link>

            <Link to="/cart">
                <div className={"cart" + addStyle}>
                  <img src={cart} alt="Cart" className={"" + addStyle}></img>
                  <div className="nav-cart-title">CART</div>
                  {props.cartLength > 0 && (
                    <div className="cart-item-counter">{props.cartLength}</div>
                  )}
                </div>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
