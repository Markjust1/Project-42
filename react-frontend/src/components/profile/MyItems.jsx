import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "../styles/Premium_item_list.css";
import Premium_Item from "../Premium_Item";
import Loading from "../Loading";
import Empty from "./Empty";

const MyItems = (props) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const local_storage = window.localStorage.getItem("userName");
  const [items, setItems] = useState([]);

  // If user is not logged in -> reroute to login
  if (local_storage == null) {
    navigate("/login");
  }

  // Render my items
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`/api/items/`)
        .then((response) => {
          setLoading(true);
          const dataContainer = [];
          for (let item of response.data) {
            if (item.owner == local_storage) {
              dataContainer.push(item);
            }
          }
          setItems(dataContainer);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);
  }, []);

  // Handle delete
  const handleDelete = (id) => {
    axios
      .delete(`/api/items/${id}`)
      .then((response) => {
        console.log(response);
        // setTimeout(() => {
        //   setLoading(false);
        // }, 800);
        setLoading(true);
        props.setProfileUpdated(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="premium-list-container">
      {!loading ? (
        <Loading />
      ) : (
        <>
          <div className="title-logo">
            {items.length < 1 && (
              <div className="premium-list-title">Add Your Item:</div>
            )}
            {items.length > 0 && (
              <div className="premium-list-title">My Items:</div>
            )}
          </div>
          <div className="list-container">
            {items?.length > 0 ? (
              items?.map((item) => (
                <Premium_Item
                  key={item._id}
                  itemId={item._id}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  platform={item.platform}
                  price={item.price}
                  onDelete={handleDelete}
                  setProfileUpdated={props.setProfileUpdated}
                />
              ))
            ) : (
              <Empty />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MyItems;
