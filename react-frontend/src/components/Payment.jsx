import "./styles/Payment.css";
import mcard from '../assets//billing/mastercard.png'
import mir from '../assets//billing/mir.png'
import paypal from '../assets//billing/paypal.png'
import visa from '../assets//billing/visa.png'

const Payment = () => {

  return (
    <div className="payment-container">
      <div className='payment-title'>We accept:</div>
      <>
        <img src={mcard} alt='mastercard'></img>
        <img src={visa} alt='visa'></img>
        <img src={paypal} alt='paypal'></img>
        <img src={mir} alt='mir'></img>
      </>
    </div>
  );
};

export default Payment;