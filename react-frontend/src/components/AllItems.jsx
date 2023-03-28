import Loading from "./Loading";
import { useState, useEffect } from "react";
import star from "../assets/star.png";
import "./styles/Premium_item_list.css";
import Premium_Item from "./Premium_Item";
import axios from "axios";
import { useNavigate } from "react-router";

const AllItems = (props) => {
  const navigate = useNavigate();
  const local_storage = window.localStorage.getItem("userName");
  if (local_storage == null) {
    navigate('/register')
  }
  const [items, setItems] = useState([]);
  const [userId, setUserId] = useState('')
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/users/`)
      .then((response) => {
        for (let user of response.data) {
          if (user.name == local_storage) {
            //User's info
            setUserId(user._id);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`/api/items/`)
        .then((response) => {
          setIsLoading(false);
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
        {isLoading && <Loading/>}
        {items.length < 1 && !isLoading ? (
          <>
          <div className="premium-list-container">No Items Added Yet</div>
          {/* <div>No Items added</div> */}
          </>
        ) : (
          items.map((item) => (
            <Premium_Item
              key={item._id}
              userId={userId}
              itemId={item._id}
              title={item.title}
              image={item.image}
              description={item.description}
              platform={item.platform}
              price={item.price}
              owner={item.owner}
              setProfileUpdated={props.setProfileUpdated}
              updateCartLength={props.updateCartLength}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default AllItems;
