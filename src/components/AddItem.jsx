import { useState } from "react";
import "./styles/AddItem.css";

const AddItem = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
  };

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  return (
    <section id="add-form">
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
        <label htmlFor="description">Description</label>
        <textarea
          rows='4'
          id="description"
          autoComplete="off"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          autoComplete="off"
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button id='submit-btn'>Add Item</button>
      </form>
    </section>
  );
};

export default AddItem;
