import "./styles/MyAccount.css";
import { Link } from "react-router-dom";
import EditProfile from "./profile/EditProfile";
import MyWallet from "./profile/MyWallet";
import MyItems from "./profile/MyItems";
import MyOrders from "./profile/MyOrders";

const MyAccount = (props) => {
  return (
    <div className="cabinet-container">
      <div className="profile-separator">
        <div className="profile-picture"></div>
        <div className="options-list">
          <EditProfile />
          <MyWallet />
          <MyItems />
          <MyOrders />
        </div>
      </div>
      <div className="my-items">My items</div>
    </div>
  );
};

export default MyAccount;
