import { useState, useRef } from "react";
import "./styles/AddItem.css";

const AddItem = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
  };



  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [premium, setPremium] = useState(false);

  return (
    <div id="add-form">
      <h1 className="form-title">LIST NEW ITEM</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          autoComplete="off"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          autoComplete="off"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <fieldset>
          <legend>Select a platform:</legend>

          <div>
            <input type="radio" id="xbox" name="drone" value="xbox" />
            <label htmlFor="xbox">Xbox</label>
          </div>

          <div>
            <input
              type="radio"
              id="playstation"
              name="drone"
              value="playstation"
            />
            <label htmlFor="playstation">PlayStation</label>
          </div>
          <div>
            <input type="radio" id="origin" name="drone" value="origin" />
            <label htmlFor="origin">Origin</label>
          </div>
          <div>
            <input type="radio" id="battlenet" name="drone" value="battlenet" />
            <label htmlFor="battlenet">Battle.net</label>
          </div>

          <div>
            <input type="radio" id="steam" name="drone" value="steam" />
            <label htmlFor="steam">Steam</label>
          </div>
          <div>
            <input type="radio" id="discord" name="drone" value="discord" />
            <label htmlFor="discord">Discord</label>
          </div>
          <div>
            <input type="radio" id="epicgames" name="drone" value="epicgames" />
            <label htmlFor="epicgames">Epic Games</label>
          </div>
        </fieldset>
        <label htmlFor="description">Description</label>
        <textarea
          rows="4"
          id="description"
          autoComplete="off"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <div>
          <label htmlFor="premium">List as Premium</label>
          <input
            type="checkbox"
            id="premium"
            autoComplete="off"
            onChange={(e) => setPremium(true)}
            required
          />
        </div>
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          autoComplete="off"
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button id="submit-btn">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
