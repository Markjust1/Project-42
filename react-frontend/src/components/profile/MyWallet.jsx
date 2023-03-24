import "../styles/profile-styles/MyWallet.css";
import "../styles/Register.css"
import AddCard from "./AddCard";

const MyWallet = (props) => {

  return (
    <>
      <div className="wallet-title">My Wallet</div>
      <div className="wallet-container">
        <AddCard userData={props.userData}/>
      </div>
    </>
  );
};

export default MyWallet;
