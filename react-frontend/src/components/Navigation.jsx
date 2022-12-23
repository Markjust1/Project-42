import { Link } from "react-router-dom";
import logo from "../assets/game-icon.png";
import home from "../assets/home.png";
import profile from "../assets/profile.png";
import add from "../assets/add.png";
import Title from "./Title";
import "./styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar-container">
      <Title />
      <div className="navbar-elements">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navbar-item">
            <img src={home} alt="home"></img>
            <span>HOME</span>
          </div>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="navbar-item">
            <img src={profile} alt="Login"></img>
            <span>LOGIN</span>
          </div>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <div className="navbar-item">
            <img src={profile} alt="Register"></img>
            <span>REGISTER</span>
          </div>
        </Link>
        <Link to="/add" style={{ textDecoration: "none" }}>
          <div className="navbar-item">
            <img src={add} alt="Add Item"></img>
            <span>ADD ITEM</span>
          </div>
        </Link>
        {/* <div className="navbar-cart">
          <Link to="/cart">
            <img src={cart} alt="Cart"></img>
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navigation;
