import "./styles/Premium_item.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import EditComponent from "./profile/EditComponent";
import Validation from "./profile/Validation";
import axios from "axios";

const Premium_Item = (props) => {
  // console.log(props)
  const url = `http://localhost:2500/api/users/${props.userId}`;

  // function to remove extra keys and assign its values to parent element

  const convert = (obj) => {
    let temp = obj;
    while (Object.keys(temp)[0] === "old") {
      temp = temp.old;
    }
    return temp;
  };

  let result = {};
  if (props.old) {
    result = convert(props.old);
  }

  // console.log('props passed to premium item',props.old)
  const location = useLocation();
  const [deleteMode, setDeleteMode] = useState(false);
  const [edit, setEdit] = useState(false);
  const [myItems, setMyItems] = useState("");
  useEffect(() => {
    if (location.pathname == "/profile") {
      setMyItems(" smaller");
    }
  }, []);

  const addToCart = (newItem) => {
    axios
      .patch(url, newItem)
      .then((res) => {
        console.log(res);
        // props.setProfileUpdated(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cartHandler = (e) => {
    e.preventDefault();
    addToCart({
      cart: [
        {
          title: props.title || result.title,
          platform: props.platform || result.platform,
          description: props.description || result.description,
          price: props.price || result.price,
        },
      ],
    });
  };

  return (
    <>
      {deleteMode ? (
        // Weird bug was here! Gladly fixed ;)
        <Validation info={Object.keys(result).length > 1 ? result : props} />
      ) : (
        <>
          {!edit ? (
            <div className={`premium-container${myItems}`}>
              {location.pathname == "/" && (
                <div className="cart-button" onClick={cartHandler}>
                  ADD TO CART
                </div>
              )}
              {location.pathname == "/profile" && (
                <div
                  className="edit-button"
                  onClick={() => {
                    setEdit((current) => !current);
                  }}
                >
                  EDIT
                </div>
              )}
              {location.pathname == "/profile" && (
                <div
                  className="close-button"
                  onClick={() => {
                    setDeleteMode(true);
                    // deleteItem();
                  }}
                >
                  DELETE
                </div>
              )}

              <div className="premium-title">{props.title || result.title}</div>
              <img
                className="premium-image"
                src={props.image || result.image}
                alt="game image"
              />
              <div className="premium-description">
                {props.description || result.description}
              </div>
              <div className="bottom-info">
                <div className="price-circle">
                  <div className="premium-price">
                    ${props.price || result.price}
                  </div>
                </div>
                <div className="platform-info">
                  {props.platform || result.platform}
                </div>
              </div>
            </div>
          ) : (
            <EditComponent info={props} />
          )}
        </>
      )}
    </>
  );
};

export default Premium_Item;
