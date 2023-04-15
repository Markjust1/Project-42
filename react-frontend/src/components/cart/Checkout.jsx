import "../styles/cart-styles/Cart.css";
import axios from "axios";

const Checkout = (props) => {
  // const url = `http://localhost:2500/api/users/${props.userId}`;

  // const deleteCartItem = (cartItemId) => {
  //   axios
  //     .delete(`${url}/cart/${cartItemId}`)
  //     .then((res) => {
  //       if (res.status == 200) {
  //         props.onDelete();
  //         props.updateCartLength();
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const removeHandler = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="cart-container">
    <div className="cart-title">Checkout</div>
    <div className="cart-main-area">
      <div className="cart-item-container">
        
      </div>
    </div>
  </div>
  );
};

export default Checkout;