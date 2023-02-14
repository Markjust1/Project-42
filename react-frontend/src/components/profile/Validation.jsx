import "../styles/profile-styles/Validation.css";

const Validation = (props) => {
  return (
    <div className="validation-container smaller">
      <div className="validation-title">Are you sure?</div>
      <div className="validation-options">
        <div className='validation-yes'>Yes</div>
        <div className='validation-no'>No</div>
      </div>
    </div>
  );
};

export default Validation;
