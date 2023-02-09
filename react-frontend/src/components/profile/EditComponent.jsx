import { useState } from "react";
import "../styles/profile-styles/EditComponent.css";

const EditComponent = () => {
  const [edit, setEdit] = useState(true);


  return (
    <>
      <div className='edit-container smaller'>
        <div className="edit-button" onClick={()=>setEdit(false)}>BACK</div>
        <div className="close-button">OK</div>

        <input type="text" placeholder="Title" className="edit-text"></input>
        <label className="edit-text">Change item picture</label>
        <input type="file" className="edit-text"></input>
        <input className="edit-text"type="text" placeholder="Price"></input>
        <input className="edit-text"type="text" placeholder="Platform"></input>
        <textarea className="edit-description" placeholder="Description"></textarea>
      </div>
    </>
  );
};

export default EditComponent;
