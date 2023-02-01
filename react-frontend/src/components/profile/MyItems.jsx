import Loading from "../Loading";
import { useState, useEffect } from "react";
import star from "../../assets/star.png";
import Premium_Item from "../Premium_Item";
import best from '../../assets/best.png';
import axios from "axios";
import { useNavigate } from "react-router";
import "../styles/Premium_item_list.css";



const MyItems = () => {
  const navigate = useNavigate();
  const local_storage = window.localStorage.getItem("userName");
  // If user is not logged in -> reroute to login
  if (local_storage == null) {
    navigate('/login')
  }

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`/api/items/`)
        .then((response) => {
          setItems(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);
  }, []);

  return (
    <div className="premium-list-container">
    <div className="title-logo">
      <img src={best} alt=""></img>
      <div className="premium-list-title">My Items</div>
    </div>
    <div >
      <Premium_Item />
    </div>
  </div>
  )
};

export default MyItems;