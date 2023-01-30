import './styles/MyAccount.css';

const MyAccount = (props) => {
  return (
    <div className='cabinet-container'>
      <div className='profile-separator'>
      <div className='profile-picture'></div>
      <ul className='options-list'>
        <li>Profile</li>
        <li>My Wallet</li>
        <li>My Items</li>
        <li>My Orders</li>
      </ul>
      </div>
      <div>My items</div>
    </div>
  )
};

export default MyAccount;