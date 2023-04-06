import axios from "axios";

const MyCards = (props) => {
  // console.log(props)
  const url = `http://localhost:2500/api/users/${props.userId}`;
  const deleteCard = (cardNumber) => {
    axios
      .delete(`${url}/card/${props.cardNumber}`)
      .then((res) => {
        if (res.status == 200) {
          // props.onDelete();
          console.log("Card Deleted...");
          props.setProfileUpdated(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeHandler = (e) => {
    e.preventDefault();
    deleteCard(props.cardNumber);
  };

  return (
    <>
      <div className="card-container">
        <div className="card-title">**** **** **** {props.cardNumber.toString().substr(-4)}</div>
        <div className="card-title">{props.expiryDate.toString().substr(0,2)}/{props.expiryDate.toString().substr(-2)}</div>
      </div>
        <div className="edit-button">EDIT</div>
        <div className="close-button" onClick={removeHandler}>DELETE</div>
    </>
  )
};

export default MyCards; 