import "../styles/profile-styles/EditProfile.css";
import { useRef } from "react";

const EditProfile = () => {
  const nameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const provinceRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(nameRef.current?.value)
    console.log(addressRef.current?.value)
    console.log(cityRef.current?.value)
    console.log(provinceRef.current?.value)
  };
  return (
    <>
    <div className='profile-title'>Edit My Profile</div>
    <div className="profile-container">
      
      <div>
        <form>
          <label>Full Name:</label>
          <input ref={nameRef} required></input>
          <label>Address:</label>
          <input ref={addressRef} required></input>
          <label>City:</label>
          <input ref={cityRef}></input>
          <br/>
          <select
              // className="platform-select"
              ref={provinceRef}
              id="province"
              required
            >
              <option value="">Select a province:</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>

          <label>Avatar</label>
          <input type='file'></input>
          <button type="submit" onClick={submitHandler}>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
};

export default EditProfile;
