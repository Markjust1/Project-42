import Loading from "../Loading";
import { useState, useEffect } from "react";
import star from "../../assets/star.png";
import best from "../../assets/best.png";
import axios from "axios";
import { useNavigate } from "react-router";
import "../styles/Premium_item_list.css";
import Premium_Item from "../Premium_Item";

const MyItems = () => {
  const navigate = useNavigate();
  const local_storage = window.localStorage.getItem("userName");
    const [items, setItems] = useState([]);
  // If user is not logged in -> reroute to login
  if (local_storage == null) {
    navigate("/login");
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
        <img src={star} alt=""></img>
        <div className="premium-list-title">All Items</div>
      </div>
      <div className="list-container">
        {items.length < 1 ? (
          <>
            <Loading/>
            {/* <div>No Items added</div> */}
          </>
        ) : (
          items
            .map((item) => (
              <Premium_Item
                key={item._id}
                title={item.title}
                image={item.image}
                description={item.description}
                platform={item.platform}
                price={item.price}
              />
            ))
            .sort()
        )}
      </div>
    </div>
  );
};

export default MyItems;
