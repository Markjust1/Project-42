import Premium_Item from "./Premium_Item";
import best from '../assets/best.png';
import "./styles/Premium_item_list.css";

const Premium_Item_List = () => {
  return (
    <div className="premium-list-container">
      <div className="title-logo">
        <img src={best} alt=""></img>
        <div className="premium-list-title">Premium Items</div>
      </div>
      <div >
        <Premium_Item />
      </div>
    </div>
  );
};

export default Premium_Item_List;
