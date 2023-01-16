import "./styles/Premium_item.css";

const Premium_item = (props) => {
  return (
    <div className="premium-container">
      <div className="premium-title">{props.title}</div>
      <div className="premium-main-part">
        <div className="premium-image" src={props.image} alt="game image">
          
        </div>
        <div className="premium-price">${props.price}</div>
        <div className="premium-description">{props.description}</div>
      </div>
    </div>
  );
};

export default Premium_item;
