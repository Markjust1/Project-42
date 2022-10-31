import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-title">Project-42</div>
      <div className="navbar-elements">
        <div className="navbar-search">Search</div>
        <div className="navbar-profile">My Profile</div>
        <div className="navbar-sell">Sell +</div>
      </div>
    </nav>
  );
};

export default Navigation;
