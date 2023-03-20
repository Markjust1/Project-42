import "../styles/cart-styles/Cart.css";

const Cart_Item = () => {
  return (
    <div className="cart-item">
      <div className="cart-item-title">Frostmourne</div>
      <div className="cart-item-platform">Playstation</div>
      <div className="cart-item-price">$300</div>
      <div className="cart-remove-button">Remove</div>
    </div>
  )
};

export default Cart_Item;