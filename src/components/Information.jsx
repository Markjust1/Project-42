import { Link } from "react-router-dom";
import "./styles/Information.css";
import Terms from './Terms'

const Information = () => {
  return (
    <div className="info-container">
      <div className="info-list">
        <Link to='/terms'><div>Terms</div></Link>
        <div>Privacy</div>
        <div>Security</div>
        <div>About</div>
      </div>
    </div>
  );
};

export default Information;