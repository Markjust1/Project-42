import "../styles/cart-styles/Cart.css";

const Cart_Item = (props) => {
  console.log(props.id);
  return (
    <div className="cart-item">
      <div className="cart-area">
        <div className="cart-item-title">{props.title}</div>
        <div className="cart-item-platform">{props.platform}</div>
      </div>
      <div className="cart-item-description">{props.description}</div>
      <div className="cart-item-price">${props.price}</div>
      <div className="cart-remove-button">Remove</div>
    </div>
  )
};

export default Cart_Item;