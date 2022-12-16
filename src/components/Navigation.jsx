import { Link } from "react-router-dom";
import logo from "../assets/game-icon.png";
import home from "../assets/home.png";
import profile from "../assets/profile.png";
import cart from "../assets/cart.png";
import Title from "./Title";
import "./styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar-container">
      <Title />
      <div className="navbar-elements">
        <Link to="/">
          <div className="navbar-home">
            <img src={home} alt="home"></img>
            <span>HOME</span>
          </div>
        </Link>
        <div className="navbar-profile">
          <Link to="/profile">
            <img src={profile} alt="Profile"></img>
          </Link>
        </div>
        <div className="navbar-cart">
          <Link to="/cart">
            <img src={cart} alt="Cart"></img>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
