import "./styles/MyAccount.css";
import EditProfile from "./profile/EditProfile";
import MyWallet from "./profile/MyWallet";
import MyItems from "./profile/MyItems";
import MyOrders from "./profile/MyOrders";
import { useState } from "react";
import profilep from "../assets/profile-pic.png"

const MyAccount = () => {
  const user = localStorage.getItem("userName");

  const [profile, setProfile] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [myItems, setMyItems] = useState(true);
  const [myOrders, setMyOrders] = useState(false);

  const stateHandler = (exception) => {
    setProfile(false);
    setWallet(false);
    setMyItems(false);
    setMyOrders(false);
    const exemptionCall = new Function(eval(`set${exception}(true)`));
    exemptionCall();
  };

  return (
    <div className="cabinet-container">
      <div className="profile-separator">
        <div className="profile-name">{user}</div>
        <div className="profile-picture">
        <img src={profilep} alt='profile picture' className="avatar"/>
          <label className="edit-picture">
            <input type="file" />
            Edit Picture
          </label>
        </div>
        <div className="options-list">
          <div onClick={() => stateHandler("MyItems")}>My Items</div>
          <div onClick={() => stateHandler("Wallet")}>My Wallet</div>
          <div onClick={() => stateHandler("MyOrders")}>My Orders</div>
          <div onClick={() => stateHandler("Profile")}>Edit Profile</div>
        </div>
      </div>
      <div className="side-panel">
        {profile && <EditProfile />}
        {wallet && <MyWallet />}
        {myItems && <MyItems />}
        {myOrders && <MyOrders />}
      </div>
    </div>
  );
};

export default MyAccount;
