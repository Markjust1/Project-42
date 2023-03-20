import Cart_Item from "./CartItem";
import "../styles/cart-styles/Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-title">My Cart</div>
      <div className="cart-main-area">
        <div className="cart-item-container">
          <Cart_Item/>
          <Cart_Item/>
          <Cart_Item/>
        </div>
        <span className="cart-separator"></span>
        <div className="cart-total-container">total price info</div>
      </div>
    </div>
  )
};

export default Cart;