import Cart_Item from "./CartItem";
import "../styles/cart-styles/Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-title">My Cart</div>
      <Cart_Item/>
    </div>
  )
};

export default Cart;