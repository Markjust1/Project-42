import Cart_Item from "./CartItem";
import "../styles/cart-styles/Cart.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  const local_storage = window.localStorage.getItem("userName");
  if (local_storage == null) {
    navigate("/register");
  }
  const [content, setContent] = useState([]);
  const [subtotal, setSubtotal] = useState();

  useEffect(() => {
    axios
      .get(`/api/users/`)
      .then((response) => {
        let num = [];
        for (let user of response.data) {
          if (user.name == local_storage) {
            //User's cart info
            setContent(user.cart);
            user.cart.map(el=>{
              num.push(el.price)
            })
          }
        }
        setSubtotal(num.reduce((a,b)=>a+b));

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-title">My Cart</div>
      <div className="cart-main-area">
        <div className="cart-item-container">
          {content.length < 1 ? (
            <>
              <div className="premium-list-container">No content Added Yet</div>
              {/* <div>No content added</div> */}
            </>
          ) : (
            content.map((item) => (
              <Cart_Item
                key={item.title}
                title={item.title}
                description={item.description}
                price={item.price}
                platform={item.platform}
              />
            ))
          )}
        </div>
        <span className="cart-separator"></span>
        <div className="cart-total-container">
          <div className="cart-subtotal-title">Subtotal:</div>
          <div className="cart-subtotal-price">
            ${subtotal} + tax
          </div>
          <div className="edit-profile">Proceed to Checkout</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
