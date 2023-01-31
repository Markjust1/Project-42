import "./styles/MyAccount.css";
import EditProfile from "./profile/EditProfile";
import MyWallet from "./profile/MyWallet";
import MyItems from "./profile/MyItems";
import MyOrders from "./profile/MyOrders";
import { useState } from "react";
import { useEffect } from "react";

const MyAccount = (props) => {
  const [profile, setProfile] = useState(true);
  const [wallet, setWallet] = useState(false);
  const [myItems, setMyItems] = useState(false);
  const [myOrders, setMyOrders] = useState(false);

  const stateHandler = (exception) => {
    console.log('exception state:',exception)
    setProfile(false);
    setWallet(false);
    setMyItems(false);
    setMyOrders(false);
    const exemptionCall = new Function(eval(`set${exception}(true)`))
    // console.log(typeof exemptionCall)
    exemptionCall();
  }

  //   setProfile(false);
  //   setWallet(false);
  //   setMyItems(false);
  //   setMyOrders(false);
  // };

  return (
    <div className="cabinet-container">
      <div className="profile-separator">
        <div className="profile-picture"></div>
        <div className="options-list">
          <div onClick={() => stateHandler('Profile')}>Edit Profile</div>
          <div onClick={() => stateHandler('Wallet')}>My Wallet</div>
          <div onClick={() => stateHandler('MyItems')}>My Items</div>
          <div onClick={() => stateHandler('MyOrders')}>My Orders</div>
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
