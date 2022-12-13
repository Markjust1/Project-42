import { Link } from "react-router-dom";
import "./styles/Information.css";

const Information = () => {
  return (
    <div className="info-container">
      <div className="info-list">
        <Link to='/terms'><div>Terms</div></Link>
        <Link to='/privacy'><div>Privacy</div></Link>
        <Link to='/security'><div>Security</div></Link>
        <Link to='/about'><div>About</div></Link>
      </div>
    </div>
  );
};

export default Information;