import "./styles/Social.css";
import fbook from '../assets/social/facebook.png'
import inst from '../assets//social/instagram.png'
import wts from '../assets/social/whatsapp.png'
import fmes from '../assets/social/facebook-messenger.png'

const Social = () => {

  return (
    <div className="social-container">
      <div className='social-title'>Find us:</div>
      <div>
        <img src={fbook} alt='facebook'></img>
        <img src={inst} alt='instagram'></img>
        <img src={wts} alt='whatsapp'></img>
        <img src={fmes} alt='messenger'></img>
      </div>
    </div>
  );
};

export default Social;