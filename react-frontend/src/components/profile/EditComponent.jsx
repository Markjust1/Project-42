import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import Premium_Item from "../Premium_Item";
import axios from "axios";
import "../styles/profile-styles/EditComponent.css";

const EditComponent = (props) => {
  const url = "http://localhost:2500/api/items/";
  const [edit, setEdit] = useState(true);
  const [files, setFiles] = useState("");
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const platformRef = useRef();
  // const [platform, setPlatform] = useState("");
  // Getting logged user's name
  const owner = localStorage.getItem("userName");
  // Enables routing
  const navigate = useNavigate();

  const resetValues = () => {
    titleRef.current.value = "";
    priceRef.current.value = "";
    descriptionRef.current.value = "";
    platformRef.current.value = "";
    // setPlatform("");
    imageRef.current.value = "";
    setEdit(false);
  };

  const editItem = async (newInfo) => {
    try {
      await axios.patch(url, newInfo);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (titleRef.current.value === '' || descriptionRef.current.value === '' || platformRef.current.value === '' || priceRef.current.value === '') {
      console.log('All information has to be filled');
      return;
    }
    // console.log({
    //   title: titleRef.current.value,
    //   image: files,
    //   description: descriptionRef.current.value,
    //   platform: platformRef.current.value,
    //   price: priceRef.current.value,
    //   owner: owner
    // });
    editItem({
      title: titleRef.current.value,
      image: files,
      description: descriptionRef.current.value,
      platform: platformRef.current.value,
      price: priceRef.current.value,
      owner: owner
    });
    console.log("Item successfully modified");
    // Clean up:
    resetValues();
    navigate('/')
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file.size > 1607152) {
      alert("File is too big!");
      imageRef.current.value = "";
      return;
    }
    const base64 = await convertToBase64(file);
    setFiles(base64);
  };

  // const handleChange = (event) => {
  //   setPlatform(event.target.value);
  // };

  return (
    <>
      {edit ? (
        <div className="edit-container smaller">
          <form onSubmit={submitHandler}>
            <div
              className="edit-button"
              onClick={() => {
                setEdit((current) => !current);
              }}
            >
              BACK
            </div>
            <div 
              className="close-button"
              onClick={submitHandler}
            >OK</div>
            <input
              type="text"
              placeholder="Title (max 15 chars)"
              className="edit-text"
              id="title"
              ref={titleRef}
              autoComplete="off"
              maxLength="15"
              required
            ></input>

            <label className="edit-text">Change item picture</label>
            <input
              type="file"
              className="edit-text"
              id="image"
              ref={imageRef}
              accept="image/*"
              onChange={(e) => handleFileUpload(e)}
              required
            ></input>

            <input
              className="edit-text"
              type="text"
              placeholder="Price (max 3 chars)"
              id="price"
              ref={priceRef}
              autoComplete="off"
              maxLength="3"
              required
            ></input>

            <select 
              className="platform-select"
              ref={platformRef}
              required>
              <option value="">Select a platform:</option>
              <option value="Xbox">Xbox</option>
              <option value="Playstation">Playstation</option>
              <option value="Origin">Origin</option>
              <option value="Battle.net">Battle.net</option>
              <option value="Steam">Steam</option>
              <option value="Epic Games">Epic Games</option>
            </select>
            <textarea
              className="edit-description"
              placeholder="Description (max 60 chars)"
              rows="4"
              id="description"
              autoComplete="off"
              ref={descriptionRef}
              maxLength="60"
              required
            ></textarea>
          </form>
        </div>
      ) : (
        <Premium_Item old={props.info} />
      )}
    </>
  );
};

export default EditComponent;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (err) => {
      reject(err);
    };
  });
}
