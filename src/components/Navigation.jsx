import "./styles/Navigation.css";
import logo from "../assets/game-icon.png";
import search from "../assets/search.png";
import profile from "../assets/profile.png";
import cart from "../assets/cart.png";

const Navigation = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-title">
        <img src={logo} alt="Site logo"></img>
      </div>
      <div className="navbar-elements">
        <div className="navbar-search">
          <img src={search} alt="Search"></img>
        </div>
        <div className="navbar-profile">
          <img src={profile} alt="Profile"></img>
        </div>
        <div className="navbar-cart">
          <img src={cart} alt="Cart"></img>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
