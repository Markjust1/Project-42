import "./styles/Premium_item.css";

const Premium_Item = (props) => {
  console.log(props)
  return (
    <>
      <div className="premium-container">
        <div className="premium-title">{props.title}</div>
        <img className="premium-image" src={props.image} alt="game image" />
        <div className="premium-description">{props.description}</div>
        <div className="bottom-info">
          <div className="price-circle">
            <div className="premium-price">${props.price}</div>
          </div>
          <div className="platform-info">{props.platform}</div>
        </div>
      </div>
    </>
  );
};

export default Premium_Item;
