import "./styles/Premium_item.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import EditComponent from "./profile/EditComponent";

const Premium_Item = (props) => {
  console.log('props passed to premium item',props.old)
  const location = useLocation();

  // console.log('current path:',location.pathname);
  const [edit, setEdit] = useState(false);
  const [myItems, setMyItems] = useState("");
  useEffect(() => {
    if (location.pathname == "/profile") {
      setMyItems(" smaller");
    }
  }, []);

  const deleteItem = () => {
    props.onDelete(props.itemId);
  };

  // const editItem = () => {
  //   props.onEdit(props.itemId);
  // };

  const editItem = (boolean) => {};


  return (
    <>
    {!edit ? (
      <div className={`premium-container${myItems}`}>
          {location.pathname == "/" && (
            <div className="cart-button">ADD TO CART</div>
          )}
          {location.pathname == "/profile" && (
            <div
              className="edit-button"
              onClick={() => {
                setEdit(current => !current);
              }}
            >
              EDIT
            </div>
          )}
          {location.pathname == "/profile" && (
            <div
              className="close-button"
              onClick={() => {
                deleteItem();
              }}
            >
              DELETE
            </div>
          )}

          <div className="premium-title">{props.title || props.old.title}</div>
          <img className="premium-image" src={props.image || props.old.image} alt="game image" />
          <div className="premium-description">{props.description || props.old.description}</div>
          <div className="bottom-info">
            <div className="price-circle">
              <div className="premium-price">${props.price || props.old.price}</div>
            </div>
            <div className="platform-info">{props.platform || props.old.platform}</div>
          </div>
        </div>
    ) : (
      <EditComponent info={props}/>
    )}
      </>
    
  );
};

export default Premium_Item;
