// import './styles/AllItems.css';
import { useState, useEffect } from "react";
import star from "../assets/star.png";
import "./styles/Premium_item_list.css";
import Premium_item from "./Premium_item";
import axios from "axios";

const AllItems = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    axios
      .get(`/api/items/`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(items);
  return (
    <div className="premium-list-container">
      <div className="title-logo">
        <img src={star} alt=""></img>
        <div className="premium-list-title">All Items</div>
      </div>
      <div className="premium-list-container">
        {/* {items.map((item) => (
          <Premium_item
            key={item._id}
            title={item.title}
            image={item.image}
            description={item.description}
            platform={item.platform}
            price={item.price}
          />
        ))} */}
      </div>
    </div>
  );
};

export default AllItems;
