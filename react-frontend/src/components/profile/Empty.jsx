import "../styles/profile-styles/Empty.css";
import { useNavigate } from "react-router";

const Empty = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-container smaller">
      {/* <div className="empty-title">Add New Item</div> */}
      <div className="add-button" onClick={() => navigate("/add")}>
        <div className="horizontal"></div>
        <div className="square"></div>
        <div className="vertical"></div>
      </div>
    </div>
  );
};

export default Empty;
