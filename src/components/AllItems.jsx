// import './styles/AllItems.css';
import best from '../assets/best.png';
import "./styles/Premium_item_list.css";
import Premium_item from './Premium_item';

const AllItems = () => {
  return (
    <div className="premium-list-container">
      <div className="title-logo">
        <img src={best} alt=""></img>
        <div className="premium-list-title">All Items</div>
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
  )
};

export default AllItems;