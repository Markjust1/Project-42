import { useState } from "react";
import Premium_Item from "../Premium_Item";
import "../styles/profile-styles/EditComponent.css";

const EditComponent = (props) => {
  // console.log('props passed to edit comp:',props.info)
  const [edit, setEdit] = useState(true);

  return (
    <>
    {edit ? (
      <div className='edit-container smaller'>
        <div className="edit-button" onClick={() => {
                setEdit(current => !current);
              }}>BACK</div>
        <div className="close-button">OK</div>

        <input type="text" placeholder="Title" className="edit-text"></input>
        <label className="edit-text">Change item picture</label>
        <input type="file" className="edit-text"></input>
        <input className="edit-text"type="text" placeholder="Price"></input>
        {/* <input className="edit-text"type="text" placeholder="Platform"></input>
         */}
         <select
      className="platform-select"
      required
    >
       <option value="">Select a platform:</option>
      <option value="Xbox">Xbox</option>
      <option value="Playstation">Playstation</option>
      <option value="Origin">Origin</option>
      <option value="Battle.net">Battle.net</option>
      <option value="Steam">Steam</option>
      <option value="Epic Games">Epic Games</option>
      </select>
        <textarea className="edit-description" placeholder="Description"></textarea>
      </div>
) : (
  <Premium_Item old={props.info}/>
)}
    </>
  );
};

export default EditComponent;
