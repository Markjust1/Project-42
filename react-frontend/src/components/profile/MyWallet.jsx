import "../styles/profile-styles/MyWallet.css";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import AddCard from "./AddCard";

const MyWallet = (props) => {
  // const card = useRef();
  // const cardholder = useRef();
  // const expiry1 = useRef();
  // const expiry2 = useRef();
  // const cvs = useRef();

  // const url = `http://localhost:2500/api/users/${props.userData.userId}`;


  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   addCardInfo({
  //     cards: [
  //       {
  //         cardNumber: card.current?.value,
  //         cardholder: cardholder.current?.value,
  //         expiryDate: (
  //           new Date(`${expiry1.current?.value} 1, 2023`).getMonth() + 1
  //         )
  //           .toString()
  //           .padStart(2, 0)
  //           .concat(expiry2.current?.value),
  //         cvs: cvs.current?.value,
  //       },
  //     ],
  //   });
  //   // resetValues();
  //   // location.reload();
  // };

  // const addCardInfo = async (cardData) => {
  //   try {
  //     await axios.patch(url, cardData);
  //     console.log("Card added successfully");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const resetValues = () => {
  //   card.current.value = "";
  //   cardholder.current.value = "";
  //   expiry1.current.value = "";
  //   expiry2.current.value = "";
  //   cvs.current.value = "";
  // };

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
