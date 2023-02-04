import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles/Navigation.css";

const Navigation = () => {
  const local_storage = window.localStorage.getItem("userName");
  const navigate = useNavigate();

  const clearLocalStorage = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-title">PROJECT42</div>
      <div className="navbar-elements">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navbar-item">
            {local_storage == null ? <span></span> : <span>HOME</span>}
          </div>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <div className="navbar-item">
            {local_storage == null ? <span>REGISTER</span> : <span></span>}
          </div>
        </Link>
        <Link to="/add" style={{ textDecoration: "none" }}>
          <div className="navbar-item">
            {local_storage == null ? <span></span> : <span>ADD ITEM</span>}
          </div>
        </Link>

        <div className="profile-container">
          {local_storage !== null && (
            <Link to="/profile">
              <div className="navbar-item">
                <span>MY ACCOUNT</span>
              </div>
            </Link>
          )}
        </div>
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
      </div>
    </nav>
  );
};

export default Navigation;
