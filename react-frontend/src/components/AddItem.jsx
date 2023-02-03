import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import "./styles/AddItem.css";
import axios from "axios";

const AddItem = () => {
  const url = "http://localhost:2500/api/items/";
  const [files, setFiles] = useState("");
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const [platform, setPlatform] = useState("");
  const owner = localStorage.getItem('userName');
  console.log(owner)
  // const [premium, setPremium] = useState(false);

  const navigate = useNavigate();

  const resetValues = () => {
    titleRef.current.value = "";
    priceRef.current.value = "";
    descriptionRef.current.value = "";
    setPlatform("");
    imageRef.current.value = "";
  };

  const createPost = async (newFile) => {
    try {
      await axios.post(url, newFile);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createPost({
      title: titleRef.current.value,
      image: files,
      description: descriptionRef.current.value,
      platform: platform,
      price: priceRef.current.value,
      owner: owner,
    });
    console.log("Item successfully added");
    // Clean up:
    resetValues();
    navigate('/');
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

  const handleChange = (event) => {
    setPlatform(event.target.value);
  };

  return (
    <div id="add-form">
      <h1 className="form-title">LIST NEW ITEM</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          ref={titleRef}
          autoComplete="off"
          maxLength="15"
          placeholder="Maximum 15 characters"
          required
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          ref={priceRef}
          autoComplete="off"
          maxLength="3"
          placeholder="Maximum 3 characters"
          required
        />
        <fieldset>
          <legend>Select a platform:</legend>

          <div>
            <input
              onChange={handleChange}
              // checked={platform === "xbox"}
              type="radio"
              id="xbox"
              name="platform"
              value="Xbox"
            />
            <label htmlFor="xbox">Xbox</label>
          </div>

          <div>
            <input
              onChange={handleChange}
              // checked={platform === "playstation"}
              type="radio"
              id="playstation"
              name="platform"
              value="PlayStation"
            />
            <label htmlFor="playstation">PlayStation</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              // checked={platform === "origin"}
              type="radio"
              id="origin"
              name="platform"
              value="Origin"
            />
            <label htmlFor="origin">Origin</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              // checked={platform === "battlenet"}
              type="radio"
              id="battlenet"
              name="platform"
              value="Battle.net"
            />
            <label htmlFor="battlenet">Battle.net</label>
          </div>

          <div>
            <input
              onChange={handleChange}
              // checked={platform === "steam"}
              type="radio"
              id="steam"
              name="platform"
              value="Steam"
            />
            <label htmlFor="steam">Steam</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              // checked={platform === "epicgames"}
              type="radio"
              id="epicgames"
              name="platform"
              value="Epic Games"
            />
            <label htmlFor="epicgames">Epic Games</label>
          </div>
        </fieldset>
        <label htmlFor="description">Description</label>
        <textarea
          rows="4"
          id="description"
          autoComplete="off"
          ref={descriptionRef}
          maxLength="60"
          placeholder="Maximum 60 characters"
          required
        />
        {/* <div>
          <label htmlFor="prem">List as Premium</label>
          <input
            type="checkbox"
            id="prem"
            // ref={premiumRef}
            onChange={() => setPremium(!premium)}
          />
        </div> */}
        <label htmlFor="image">Image</label>
        <input
          type="file"
          label="image"
          id="image"
          ref={imageRef}
          accept="image/*"
          onChange={(e) => handleFileUpload(e)}
          required
        />
        <button id="submit-btn">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;

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
