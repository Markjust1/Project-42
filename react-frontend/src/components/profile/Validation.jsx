import "../styles/profile-styles/Validation.css";
import { useState } from "react";
import Premium_Item from "../Premium_Item";

const Validation = (props) => {
  const [showVal, setShowVal] = useState(true);
  console.log('props received in validation form',props);
  // console.log(Object.keys(props.info)[0])

  // const convert = (obj) => {
  //   let temp = obj.info;
  //   if (Object.keys(temp)[0] === "old") {
  //     return convert(temp);
  //   } else {
  //     return temp;
  //   }
  // };
  
  // let result = {};
  // if (Object.keys(props.info || props.info.old)[0] === "old") {
  //   result = convert(props);
  // }

  //Function to delete item from db
  const deleteItem = () => {
    props.info.onDelete(props.info.itemId);
  };

  // console.log(result)

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
        <Premium_Item old={props.info || props.info.old} />
      )}
    </>
  );
};

export default Validation;
