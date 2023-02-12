import "../styles/profile-styles/Empty.css";
import { useNavigate } from "react-router";

const Empty = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-container smaller" onClick={() => navigate("/add")}>
      <div className="add-button">
        <div className="horizontal"></div>
        <div className="square"></div>
        <div className="vertical"></div>
      </div>
    </div>
  );
};

export default Empty;
