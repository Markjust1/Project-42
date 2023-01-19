import "./styles/Premium_item.css";

const Premium_Item = (props) => {
  console.log("received props", props);
  return (
    <>
    <div className="premium-container">
      <div className="premium-title">{props.title}</div>
      <img className="premium-image" src={props.image} alt="game image" />
      <div className="premium-description">{props.description}</div>
    </div>
    <div className="price-circle">
      <div className="premium-price">${props.price}</div>
    </div>
    </>
  );
};

export default Premium_Item;
