import "./styles/Premium_item.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Premium_Item = (props) => {
  const location = useLocation();
 
  // console.log('current path:',location.pathname);
  const [myItems, setMyItems] = useState("");
  useEffect(() => {
    if (location.pathname == "/profile") {
      setMyItems(" smaller");
    }
  }, []);

    const deleteItem = () => {
      props.onDelete(props.itemId);
    }

  return (
    <>
      <div className={`premium-container${myItems}`} >
        {location.pathname == "/" && (
          <div className="cart-button">ADD TO CART</div>
        )}
        {location.pathname == "/profile" && (
          <div className="edit-button">EDIT</div>
        )}
        {location.pathname == "/profile" && (
          <div className="close-button" onClick={()=>{deleteItem()}}>DELETE</div>
        )}

        <div className="premium-title">{props.title}</div>
        <img className="premium-image" src={props.image} alt="game image" />
        <div className="premium-description">{props.description}</div>
        <div className="bottom-info">
          <div className="price-circle">
            <div className="premium-price">${props.price}</div>
          </div>
          <div className="platform-info">{props.platform}</div>
        </div>
      </div>
    </>
  );
};

export default Premium_Item;
