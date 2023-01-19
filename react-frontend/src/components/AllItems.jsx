// import './styles/AllItems.css';
import { useState, useEffect } from "react";
import star from "../assets/star.png";
import "./styles/Premium_item_list.css";
import Premium_item from "./Premium_Item";
import axios from "axios";

const AllItems = () => {
  const [items, setItems] = useState();
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
  }, [])
  console.log(items);
  return (
    <div>
      <div className="title-logo">
        <img src={star} alt=""></img>
        <div className="premium-list-title">All Items</div>
      </div>
      <div className="premium-list-container">

          {items.map((item) => (
            <Premium_item
              key={item._id}
              title={item.title}
              image={item.image}
              description={item.description}
              platform={item.platform}
              price={items.price}
            />
          ))}
        
        {/* <Premium_item 
          key={'item._id'}
          title={'item.title'}
          image={'item.image'}
          description={'item.description'}
          platform={'item.platform'}
          price={'item.price'}/> */}
      </div>
    </div>
  );
};

export default AllItems;
