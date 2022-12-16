import { Link } from "react-router-dom";
import "./styles/Information.css";

const Information = () => {
  return (
    <div className="info-container">
      <div className="info-list">
        <Link to='/terms' style={{ textDecoration: "none" }}><div>Terms</div></Link>
        <Link to='/privacy' style={{ textDecoration: "none" }}><div>Privacy</div></Link>
        <Link to='/security' style={{ textDecoration: "none" }}><div>Security</div></Link>
        <Link to='/about' style={{ textDecoration: "none" }}><div>About</div></Link>
      </div>
    </div>
  );
};

export default Information;