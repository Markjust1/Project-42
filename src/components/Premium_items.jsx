import "./Premium_items.css";

const Premium_items = () => {
  return (
    <div className="premium-container">
      <div className="premium-title">Game Title</div>
      <div className="premium-main-part">
        <div className="premium-image" src='' alt='game image'>Game image</div>
        <div className="premium-price">$1000</div>
        <div className="premium-description">description</div>
      </div>
    </div>
  );
};

export default Premium_items;