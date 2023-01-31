import "../styles/profile-styles/EditProfile.css";

const EditProfile = () => {
  return (
    <>
    <div className='profile-title'>Edit My Profile</div>
    <div className="profile-container">
      {/* <div>
        <div>My Cards:</div>
        <ul>
          <li>Card 1</li>
          <button>remove</button>
          <li>Card 2</li>
          <button>remove</button>
          <li>Card 3</li>
          <button>remove</button>
        </ul>
      </div> */}
      
      <div>
        <form>
          <label>Full Name:</label>
          <input></input>
          <button>Edit</button>
          <label>Email:</label>
          <input></input>
          <button>Edit</button>
          <label>Username:</label>
          <input></input>
          <button>Edit</button>
          <label>Avatar</label>
          <input type='file'></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
};

export default EditProfile;
