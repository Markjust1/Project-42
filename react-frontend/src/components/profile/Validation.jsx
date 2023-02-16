import "../styles/profile-styles/Validation.css";
import { useState } from "react";
import Premium_Item from "../Premium_Item";

const Validation = (props) => {
  const [showVal, setShowVal] = useState(true);
  console.log(props);
  
  //Function to delete item from db
  const deleteItem = () => {
    props.info.onDelete(props.info.itemId);
  };

  return (
    <>
      {showVal ? (
        <div className="validation-container smaller">
          <div className="validation-title">Are you sure?</div>
          <div className="validation-options">
            <div
              className="validation-yes"
              onClick={() => {
                deleteItem();
              }}
            >
              Yes
            </div>
            <div className="validation-no" onClick={() => setShowVal(false)}>
              No
            </div>
          </div>
        </div>
      ) : (
        <Premium_Item old={props.info} />
      )}
    </>
  );
};

export default Validation;
