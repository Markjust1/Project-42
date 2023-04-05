const MyCards = (props) => {

  return (
    <>
      <div className="card-container">
        <div className="card-title">**** **** **** {props.cardNumber.toString().substr(-4)}</div>
        <div className="card-title">{props.expiryDate.toString().substr(0,2)}/{props.expiryDate.toString().substr(-2)}</div>
      </div>
        <div className="edit-button">EDIT</div>
        <div className="close-button">DELETE</div>
    </>
  )
};

export default MyCards; 