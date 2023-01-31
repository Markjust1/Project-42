const MyWallet = () => {
  return (
    <div>
      <div>
        <div>My Cards:</div>
        <ul>
          <li>Card 1</li>
          <li>Card 2</li>
          <li>Card 3</li>
        </ul>
      </div>

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
  )
};

export default MyWallet;