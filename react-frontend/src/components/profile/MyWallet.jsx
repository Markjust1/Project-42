import "../styles/profile-styles/MyWallet.css";

const MyWallet = () => {
  return (
    <>
    <div className='wallet-title'>My Wallet</div>
    <div className="wallet-container">
      <div className="my-cards">
        <div>My Cards:</div>
        <ul>
          <li>Card 1</li>
          <button>remove</button>
          <li>Card 2</li>
          <button>remove</button>
          <li>Card 3</li>
          <button>remove</button>
        </ul>
      </div>
      
      <div>
        <div>Add new Card</div>
        <form>
          <label>Card number:</label>
          <input></input>
          <label>Cardholder name:</label>
          <input></input>
          <label>Expiry date:</label>
          <input></input>
          <label>CVS number:</label>
          <input></input>
        </form>
      </div>
    </div>
    </>
  );
};

export default MyWallet;
