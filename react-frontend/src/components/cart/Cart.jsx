import Cart_Item from "./CartItem";
import "../styles/cart-styles/Cart.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Cart = (props) => {
  const navigate = useNavigate();
  const local_storage = window.localStorage.getItem("userName");
  if (local_storage == null) {
    navigate("/register");
  }
  const [userId, setUserId] = useState();
  const [content, setContent] = useState([]);
  const [subtotal, setSubtotal] = useState();
  const [renderSwitch, setRenderSwitch] = useState(false);
  const [empty, setEmpty] = useState(true);

  const handleDelete = () => {
    setRenderSwitch((prev) => !prev);
    props.setProfileUpdated(true);
  };

  useEffect(() => {
    axios
      .get(`/api/users/`)
      .then((response) => {
        setUserId(response.data[0]._id);
        let num = [];
        for (let user of response.data) {
          if (user.name == local_storage) {
            //User's cart info
            setContent(user.cart);
            if (user.cart.length > 0) {
              let num = user.cart.map((el) => el.price);
              setSubtotal(num.reduce((a, b) => a + b));
              setEmpty(false);
            } else {
              setSubtotal(0);
              setEmpty(true);
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [renderSwitch]);

  return (
    <div className="cart-container">
      <div className="cart-title">My Cart</div>
      <div className="cart-main-area">
        <div className="cart-item-container">
          {content.length < 1 && empty ? (
            <>
              <div className="cart-empty-title">Cart is empty...</div>
              <div
                className="edit-profile centered"
                onClick={() => {
                  navigate("/");
                }}
              >
                Main page
              </div>
            </>
          ) : (
            content.map((item) => (
              <Cart_Item
                key={item.title}
                itemId={item._id}
                userId={userId}
                title={item.title}
                description={item.description}
                price={item.price}
                platform={item.platform}
                onDelete={handleDelete}
                updateCartLength={props.updateCartLength}
              />
            ))
          )}
        </div>
        {!empty && content ? (
          <>
            <span className="cart-separator"></span>
            <div className="cart-total-container">
              <div className="cart-subtotal-title">Subtotal:</div>
              <div className="cart-subtotal-price">${subtotal} + tax</div>
              <div className="edit-profile">Proceed to Checkout</div>
            </div>
          </>
        ) : <></>}
      </div>
    </div>
  );
};

export default Cart;
