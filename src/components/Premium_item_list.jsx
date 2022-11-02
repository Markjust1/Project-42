import Premium_item from "./Premium_item";
import best from '../assets/best.png';
import "./styles/Premium_item_list.css";

const Premium_item_list = () => {
  return (
    <div className="premium-list-container">
      <div className="title-logo">
        <img src={best} alt=""></img>
        <div className="premium-list-title">Premium Items</div>
      </div>
      <div className="premium-list-container">
        <Premium_item />
        <Premium_item />
        <Premium_item />
        <Premium_item />
        <Premium_item />
        <Premium_item />
        <Premium_item />
      </div>
    </div>
  );
};

export default Premium_item_list;
