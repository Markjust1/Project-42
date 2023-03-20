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
        <div className="cart-total-container">
          <div className="cart-subtotal-title">Subtotal:</div>
          <div className="cart-subtotal-price">$<b>300</b> + tax</div>
          <div  className="edit-profile">Proceed to Checkout</div>
        </div>
      </div>
    </div>
  )
};

export default Cart;