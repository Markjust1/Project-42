import { FilePond, File } from 'react-filepond'
import { useState, useRef } from "react";
import 'filepond/dist/filepond.min.css'
import "./styles/AddItem.css";

const AddItem = () => {
  const [files, setFiles] = useState([])
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const [platform, setPlatform] = useState("");
  // const [premium, setPremium] = useState(false);

  const resetValues = () => {
    titleRef.current.value = '';
    priceRef.current.value = '';
    descriptionRef.current.value = '';
    setPlatform('');
    imageRef.current.value = '';
  };


  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      title: titleRef.current.value,
      price: priceRef.current.value,
      platform: platform,
      description: descriptionRef.current.value,
      // premium: premium,
      image: imageRef.current.value
    })
    // Clean up:
    resetValues();
  };

  const handleChange = (event) => {
    setPlatform(event.target.value)
  }

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
          // required
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          ref={priceRef}
          autoComplete="off"
          // required
        />
        <fieldset>
          <legend>Select a platform:</legend>

          <div>
            <input onChange={handleChange} checked={platform === 'xbox'} type="radio" id="xbox" name="platform" value="xbox" />
            <label htmlFor="xbox">Xbox</label>
          </div>

          <div>
            <input
            onChange={handleChange}
              checked={platform === 'playstation'}
              type="radio"
              id="playstation"
              name="platform"
              value="playstation"
            />
            <label htmlFor="playstation">PlayStation</label>
          </div>
          <div>
            <input onChange={handleChange} checked={platform === 'origin'} type="radio" id="origin" name="platform" value="origin" />
            <label htmlFor="origin">Origin</label>
          </div>
          <div>
            <input onChange={handleChange} checked={platform === 'battlenet'} type="radio" id="battlenet" name="platform" value="battlenet" />
            <label htmlFor="battlenet">Battle.net</label>
          </div>

          <div>
            <input onChange={handleChange} checked={platform === 'steam'} type="radio" id="steam" name="platform" value="steam" />
            <label htmlFor="steam">Steam</label>
          </div>
          <div>
            <input onChange={handleChange} checked={platform === 'epicgames'} type="radio" id="epicgames" name="platform" value="epicgames" />
            <label htmlFor="epicgames">Epic Games</label>
          </div>
        </fieldset>
        <label htmlFor="description">Description</label>
        <textarea
          rows="4"
          id="description"
          autoComplete="off"
          ref={descriptionRef}
          // required
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
          id="image"
          ref={imageRef}
          // required
        />
        <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={false}
        maxFiles={1}
        server="http://localhost:2500/api/items"
        name="files" /* sets the file input name, it's filepond by default */
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
        <button id="submit-btn">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
