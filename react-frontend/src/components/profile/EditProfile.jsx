import "../styles/profile-styles/EditProfile.css";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import convertToBase64 from "../../helpers/convertToBase64";
import { useNavigate } from "react-router";

const EditProfile = () => {
  // const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userProvince, setUserProvince] = useState("");
  const [files, setFiles] = useState("");

  const local_storage = window.localStorage.getItem("userName");
  useEffect(() => {
    axios
      .get(`/api/users/`)
      .then((response) => {
        // console.log(response.data)
        // setLoading(true);

        for (let user of response.data) {
          if (user.name == local_storage) {
            setUserId(user._id);
            setUserFullName(user.fullName);
            setUserAddress(user.address);
            setUserCity(user.city);
            setUserProvince(user.province);
            setFiles(user.image)
          }
        }

        // setItems(userId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const url = `http://localhost:2500/api/users/${userId}`;
  const navigate = useNavigate();

  const nameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const provinceRef = useRef();
  const imageRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    addUserInfo({
      fullName: nameRef.current.value || userFullName,
      address: addressRef.current.value || userAddress,
      city: cityRef.current.value || userCity,
      province: provinceRef.current.value || userProvince,
      image: files,
    });
    console.log("User info added successfully");
    resetValues();
    navigate("/");
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
      await axios.patch(url, userData);
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
          <form onSubmit={submitHandler}>
            <label htmlFor="fullName">Full Name:</label>
            <input
              ref={nameRef}
              id="fullName"
              type="text"
              maxLength="40"
              placeholder={userFullName || "Enter your name"}
            ></input>
            <label htmlFor="address">Address:</label>
            <input
              ref={addressRef}
              id="address"
              type="text"
              maxLength="40"
              placeholder={userAddress || "Enter your address"}
            ></input>
            <label htmlFor="city">City:</label>
            <input
              ref={cityRef}
              id="city"
              type="text"
              placeholder={userCity || "Enter your city"}
            ></input>
            <br />
            <label htmlFor="province">Please select a province:</label>
            <select ref={provinceRef} id="province" type="text">
              <option value={userProvince || ""}>Select a province:</option>
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
            <input
              type="file"
              id="image"
              ref={imageRef}
              accept="image/*"
              onChange={(e) => handleFileUpload(e)}
            ></input>
            <button type="submit" id="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
