import "../styles/cart-styles/Cart.css";
import axios from "axios";

const Cart_Item = (props) => {
  const url = `http://localhost:2500/api/users/${props.userId}`;

  const deleteCartItem = (cartItemId) => {
    axios
      .delete(`${url}/cart/${cartItemId}`)
      .then((res) => {
        if (res.status == 200) {
          props.onDelete();
          props.updateCartLength();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeHandler = (e) => {
    e.preventDefault();
    deleteCartItem(props.itemId);
  };

  return (
    <div className="cart-item">
      <div className="cart-area">
        <div className="cart-item-title">{props.title}</div>
        <div className="cart-item-platform">{props.platform}</div>
      </div>
      <div className="cart-item-description">{props.description}</div>
      <div className="cart-item-price">${props.price}</div>
      <div className="cart-remove-button" onClick={removeHandler}>
        Remove
      </div>
    </div>
  );
};

export default Cart_Item;
