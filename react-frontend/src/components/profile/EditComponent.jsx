import { useState, useRef, useEffect } from "react";
import Premium_Item from "../Premium_Item";
import axios from "axios";
import Loading from "../Loading";
import "../styles/profile-styles/EditComponent.css";
import convertToBase64 from "../../helpers/convertToBase64";

const EditComponent = (props) => {
  const url = `http://localhost:2500/api/items/${props.info.itemId}`;
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [edit, setEdit] = useState(true);
  const [files, setFiles] = useState("");
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const platformRef = useRef();

  // Getting logged user's name
  const owner = localStorage.getItem("userName");

  //Resetting ref values after submitting
  const resetValues = () => {
    titleRef.current.value = "";
    priceRef.current.value = "";
    descriptionRef.current.value = "";
    platformRef.current.value = "";
    imageRef.current.value = "";
    setEdit(false);
  };

  //Axios call to backend to update item
  const editItem = async (newInfo) => {
    try {
      await axios.patch(url, newInfo).then((response) => {
        response.status === 200
          ? console.log("Item successfully modified")
          : console.error("Could not modify item");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    editItem({
      title: titleRef.current.value || props.info.title,
      image: files || props.info.image,
      description: descriptionRef.current.value || props.info.description,
      platform: platformRef.current.value || props.info.platform,
      price: priceRef.current.value || props.info.price,
      owner: owner,
    });

    // Clean up:
    resetValues();
    setLoading(true);
    setTimeout(() => {
      location.reload();
      // setLoading(false);
    }, 1000);
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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
                <div className="close-button" onClick={submitHandler}>
                  OK
                </div>
                <label className="edit-pic">
                  <input
                    type="file"
                    className="edit-text"
                    id="image"
                    ref={imageRef}
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e)}
                    required
                  />
                  Choose New Image
                </label>
                <label htmlFor="title" className="edit-text">
                  New title:
                </label>
                <input
                  type="text"
                  placeholder={props.info.title}
                  className="edit-text"
                  id="title"
                  ref={titleRef}
                  autoComplete="off"
                  maxLength="15"
                  required
                ></input>

                <label htmlFor="price" className="edit-text">
                  New price:
                </label>
                <input
                  className="edit-text"
                  type="text"
                  placeholder={props.info.price}
                  id="price"
                  ref={priceRef}
                  autoComplete="off"
                  maxLength="3"
                  required
                ></input>
                {/* <label htmlFor="platform" className="edit-text">
              Update platform:
            </label> */}
                <select
                  className="platform-select"
                  ref={platformRef}
                  id="platform"
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
                <label htmlFor="description" className="edit-text">
                  New description:
                </label>
                <textarea
                  className="edit-description"
                  placeholder={props.info.description}
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
      )}
    </>
  );
};

export default EditComponent;
