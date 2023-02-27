import "../styles/profile-styles/MyWallet.css";

const MyWallet = () => {
  return (
    <>
      <div className="wallet-title">My Wallet</div>
      <div className="wallet-container">
        {/* <div className="my-cards">
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

        <div className="my-cards">
          <div>Add new Card</div>
          <form>
            <label>Card number:</label>
            <div>
              <input type="text" className="card-input" maxLength="4" placeholder="0000"></input>-
              <input type="text" className="card-input" maxLength="4" placeholder="0000"></input>-
              <input type="text" className="card-input" maxLength="4" placeholder="0000"></input>-
              <input type="text" className="card-input" maxLength="4" placeholder="0000"></input>
            </div>
            <label>Cardholder name:</label>
            <input type="text" maxLength="25"></input>
            <label>Expiry date: </label>
            <div className="additional-data">
              <select>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select>
                <option>{new Date().getFullYear()}</option>
                <option>{new Date().getFullYear() + 1}</option>
                <option>{new Date().getFullYear() + 2}</option>
                <option>{new Date().getFullYear() + 3}</option>
                <option>{new Date().getFullYear() + 4}</option>
                <option>{new Date().getFullYear() + 5}</option>
                <option>{new Date().getFullYear() + 6}</option>
                <option>{new Date().getFullYear() + 7}</option>
                <option>{new Date().getFullYear() + 8}</option>
                <option>{new Date().getFullYear() + 9}</option>
                <option>{new Date().getFullYear() + 10}</option>
              </select>
              <input type="text" maxLength="3" className="cvs-number" placeholder="CVS"></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyWallet;
