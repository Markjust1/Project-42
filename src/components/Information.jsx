import { useState } from "react";
import "./styles/Information.css";

const Information = () => {
  const [showTerms, setShowTerms] = useState(false);

  const termsHandler = () => {
    setShowTerms(true);
  }

  return (
    <div className="info-container">
      <div className="info-list">
        <div onClick={termsHandler}>Terms</div>
        <div>Privacy</div>
        <div>Security</div>
        <div>About</div>
      </div>
    </div>
  );
};

export default Information;