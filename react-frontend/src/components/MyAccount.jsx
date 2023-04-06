import "./styles/MyAccount.css";
import EditProfile from "./profile/EditProfile";
import MyWallet from "./profile/MyWallet";
import MyItems from "./profile/MyItems";
import MyOrders from "./profile/MyOrders";
import { useState, useEffect } from "react";
import profilep from "../assets/profile-pic.png";
import axios from "axios";

const MyAccount = (props) => {
  const userName = localStorage.getItem("userName");

  const [profile, setProfile] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [myItems, setMyItems] = useState(true);
  const [myOrders, setMyOrders] = useState(false);

  //User data
  const [userId, setUserId] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userProvince, setUserProvince] = useState("");
  const [files, setFiles] = useState("");

  //Credit card data
  const [cardData, setCardData] = useState("");

  const stateHandler = (exception) => {
    setProfile(false);
    setWallet(false);
    setMyItems(false);
    setMyOrders(false);
    const exemptionCall = new Function(eval(`set${exception}(true)`));
    exemptionCall();
  };

  useEffect(() => {
    axios
      .get(`/api/users/`)
      .then((response) => {
        for (let user of response.data) {
          if (user.name == userName) {
            //User's info
            setUserId(user._id);
            setUserFullName(user.fullName);
            setUserAddress(user.address);
            setUserCity(user.city);
            setUserProvince(user.province);
            setFiles(user.image);
            // Cards's info
            setCardData(user.cards);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="cabinet-container">
      <div className="profile-separator">
        <div className="profile-name">{userName}</div>
        <div className="profile-picture">
          <img
            src={files || profilep}
            alt="profile picture"
            className="avatar"
          />
          <div className="edit-profile" onClick={() => stateHandler("Profile")}>
            Edit Profile
          </div>
        </div>

        <div className="options-list">
          <div onClick={() => stateHandler("MyItems")}>My Items</div>
          <div onClick={() => stateHandler("Wallet")}>My Wallet</div>
          <div onClick={() => stateHandler("MyOrders")}>My Orders</div>
          {/* <div onClick={() => stateHandler("Profile")}>Edit Profile</div> */}
        </div>
      </div>
      <div className="side-panel">
        {profile && (
          <EditProfile
            userData={{
              userId,
              userFullName,
              userAddress,
              userCity,
              userProvince,
              files,
            }}
            setProfileUpdated={props.setProfileUpdated}
          />
        )}
        {wallet && (
          <MyWallet
            userData={{
              userId: userId,
              cardData: cardData,
            }}
            setProfileUpdated={props.setProfileUpdated}
            redirect={stateHandler}
          />
        )}
        {myItems && <MyItems setProfileUpdated={props.setProfileUpdated}/>}
        {myOrders && <MyOrders />}
      </div>
    </div>
  );
};

export default MyAccount;
