import "../styles/profile-styles/MyWallet.css";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AddCard = (props) => {
  // console.log(props)
  const [addStyle, setAddStyle] = useState("");
  const card = useRef();
  const cardholder = useRef();
  const expiry1 = useRef();
  const expiry2 = useRef();
  const cvs = useRef();
  const navigate = useNavigate();


  const url = `http://localhost:2500/api/users/${props.userData.userId}`;

  const submitHandler = (e) => {
    e.preventDefault();
    addCardInfo({
      cards: [
        {
          cardNumber: card.current?.value,
          cardholder: cardholder.current?.value,
          expiryDate: (
            new Date(`${expiry1.current?.value} 1, 2023`).getMonth() + 1
          )
            .toString()
            .padStart(2, 0)
            .concat(expiry2.current?.value),
          cvs: cvs.current?.value,
        },
      ],
    });
    resetValues();
  };

  const addCardInfo = async (cardData) => {
    try {
      await axios.patch(url, cardData).then((res) => {
        if (res.status == 200) {
          console.log("Card added successfully");
        }
        setTimeout(() => {
          setAddStyle("");
        }, 1000);
        setAddStyle(" form-success");
        props.close()
        // props.setProfileUpdated(true)
        props.redirect("Wallet")
        // props.successHandler("success");
      });
    } catch (err) {
      console.log(err);
      // props.successHandler("fail");
      setTimeout(() => {
        setAddStyle(""); 
      }, 1000);
      setAddStyle(" shake");
    }
  };

  const resetValues = () => {
    card.current.value = "";
    cardholder.current.value = "";
    expiry1.current.value = "";
    expiry2.current.value = "";
    cvs.current.value = "";
  };
  return (
    <div className="my-cards">
      <div className="close-form" onClick={()=>props.close()}>X</div>
      <div className="add-card">Add new credit card:</div>
      <form>
        <label>Card number:</label>
        <div>
          <input
            type="text"
            className="card-input"
            maxLength="16"
            placeholder="16-digit number"
            ref={card}
            required
          ></input>
        </div>
        <label>Cardholder name:</label>
        <input
          type="text"
          maxLength="25"
          placeholder="Name on the credit card"
          ref={cardholder}
          required
        ></input>
        <div className="additional-data">
          <div className="stack">
            <label>Expiry date:</label>
            <div className="row">
              <select ref={expiry1} required>
                <option value="">Month:</option>
                <option value="Jan">01 - January</option>
                <option value="Feb">02 - February</option>
                <option value="Mar">03 - March</option>
                <option value="Apr">04 - April</option>
                <option value="May">05 - May</option>
                <option value="Jun">06 - June</option>
                <option value="Jul">07 - July</option>
                <option value="Aug">08 - August</option>
                <option value="Sep">09 - September</option>
                <option value="Oct">10 - October</option>
                <option value="Nov">11 - November</option>
                <option value="Dec">12 - December</option>
              </select>
              <select ref={expiry2} required>
                <option value="">Year:</option>
                <option
                  value={new Date().getFullYear().toString().substring(2)}
                >
                  {new Date().getFullYear()}
                </option>
                <option
                  value={(new Date().getFullYear() + 1).toString().substring(2)}
                >
                  {new Date().getFullYear() + 1}
                </option>
                <option
                  value={(new Date().getFullYear() + 2).toString().substring(2)}
                >
                  {new Date().getFullYear() + 2}
                </option>
                <option
                  value={(new Date().getFullYear() + 3).toString().substring(2)}
                >
                  {new Date().getFullYear() + 3}
                </option>
                <option
                  value={(new Date().getFullYear() + 4).toString().substring(2)}
                >
                  {new Date().getFullYear() + 4}
                </option>
                <option
                  value={(new Date().getFullYear() + 5).toString().substring(2)}
                >
                  {new Date().getFullYear() + 5}
                </option>
                <option
                  value={(new Date().getFullYear() + 6).toString().substring(2)}
                >
                  {new Date().getFullYear() + 6}
                </option>
                <option
                  value={(new Date().getFullYear() + 7).toString().substring(2)}
                >
                  {new Date().getFullYear() + 7}
                </option>
                <option
                  value={(new Date().getFullYear() + 8).toString().substring(2)}
                >
                  {new Date().getFullYear() + 8}
                </option>
                <option
                  value={(new Date().getFullYear() + 9).toString().substring(2)}
                >
                  {new Date().getFullYear() + 9}
                </option>
                <option
                  value={(new Date().getFullYear() + 10)
                    .toString()
                    .substring(2)}
                >
                  {new Date().getFullYear() + 10}
                </option>
              </select>
            </div>
          </div>
          <div className="stack">
            <label htmlFor="cvs">CVS:</label>
            <input
              type="text"
              maxLength="3"
              id="cvs"
              className="cvs-number"
              placeholder="CVS"
              ref={cvs}
              required
            ></input>
          </div>
        </div>
        <button onClick={submitHandler} className={"submit-btn" + addStyle}>
          Add Card
        </button>
      </form>
    </div>
  );
};

export default AddCard;
