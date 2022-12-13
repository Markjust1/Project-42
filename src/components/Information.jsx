import { useState } from "react";
import "./styles/Information.css";

const Information = (props) => {
  console.log(props)
  return (
    <div className="info-container">
      <div className="info-list">
        <div onClick={props.termFunc}>Terms</div>
        <div>Privacy</div>
        <div>Security</div>
        <div>About</div>
      </div>
    </div>
  );
};

export default Information;