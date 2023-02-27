import "../styles/profile-styles/EditProfile.css";
import { useRef, useState } from "react";
import axios from "axios";
import convertToBase64 from "../../helpers/convertToBase64";
import { useNavigate } from "react-router";

const EditProfile = () => {
  const url = "http://localhost:2500/api/users/";
  const navigate = useNavigate();

  const nameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const provinceRef = useRef();
  const imageRef = useRef();
  const [files, setFiles] = useState("");
  const owner = localStorage.getItem("userName");

  const submitHandler = async (e) => {
    e.preventDefault();
    addUserInfo({
      fullName: nameRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      province: provinceRef.current.value,
    });
    console.log("User info added successfully");
    resetValues();
    navigate("/profile");
  };

  const resetValues = () => {
    nameRef.current.value = "";
    addressRef.current.value = "";
    cityRef.current.value = "";
    provinceRef.current.value = "";
    imageRef.current.value = "";
  };

  const addUserInfo = async (userData) => {
    try {
      await axios.post(url, userData);
    } catch (err) {
      console.log(err);
    }
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
      <div className="profile-title">Edit My Profile</div>
      <div className="profile-container">
        <div>
          <form>
            <label htmlFor='fullName'>Full Name:</label>
            <input ref={nameRef} id="fullName" required></input>
            <label htmlFor='address'>Address:</label>
            <input ref={addressRef} id="address" required></input>
            <label htmlFor="city">City:</label>
            <input ref={cityRef} id="city" required></input>
            <br />
            <label htmlFor="province">Please select a province:</label>
            <select ref={provinceRef} id="province" required>
              <option value="">Select a province:</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">
                Newfoundland and Labrador
              </option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>

            <label htmlFor="image">Your profile picture:</label>
            <input type="file" id="image"></input>
            <button type="submit" onClick={submitHandler}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
