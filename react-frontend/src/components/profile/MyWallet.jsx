import "../styles/profile-styles/MyWallet.css";
import "../styles/Register.css";
import AddCard from "./AddCard";
import MyCards from "./MyCards";
import { useState } from "react";

const MyWallet = (props) => {
  const [showAddCard, setShowAddCard] = useState(false);

  const addCardHandler = () => {
    console.log(showAddCard)
    setShowAddCard(!showAddCard);
  };
  return (
    <>
      <div className="wallet-title">My Wallet</div>
      <div className="wallet-container">
      {!showAddCard ? (
        <>
            <MyCards />
          <div className="edit-profile centered" onClick={addCardHandler}>
            Add New Card
          </div>
        </>
      ) : (
        <AddCard userData={props.userData} close={addCardHandler}/>
        )}
        </div>
    </>
  );
};

export default MyWallet;
