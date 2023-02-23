import "./styles/Premium_item.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import EditComponent from "./profile/EditComponent";
import Validation from "./profile/Validation";

const Premium_Item = (props) => {
  // function to remove extra keys and assign its values to parent element
  // console.log("props at prem.item: ", props);
  const convert = (obj) => {
    let temp = obj.old;
    if (Object.keys(temp)[0] === "old") {
      return convert(temp);
    } else {
      return temp;
    }
  };

  // const convert = (obj) => {
  //   let temp = {};
  //   if (Object.keys(obj)[0] === "old") {
  //     temp = 
  //   }
  // };

  let result = {};
  if (Object.keys(props)[0] === "old") {
    result = convert(props);
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

  // const deleteItem = () => {
  //   props.onDelete(props.itemId);
  // };

  // const editItem = () => {
  //   props.onEdit(props.itemId);
  // };

  // const editItem = (boolean) => {};
  // console.log(typeof result);
  // console.log('result:  ',result);
  // console.log('result length:  ',result.length);
  // console.log('props length:  ',Object.keys(props).length);

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
                <div className="cart-button">ADD TO CART</div>
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
