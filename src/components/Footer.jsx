import Payment from "./Payment";
import Social from "./Social";
import Information from "./Information";
import "./styles/Footer.css";

const Footer = () => {

  return (
    <div className="footer-container">
      <Payment />
      <Social />
      <Information />
    </div>
  );
};

export default Footer;