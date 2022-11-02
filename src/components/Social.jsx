import "./styles/Social.css";
import facebook from "../assets/social/facebook.png";
import instagram from "../assets//social/instagram.png";
import whatsapp from "../assets/social/whatsapp.png";
import messenger from "../assets/social/facebook-messenger.png";
import discord from "../assets/social/discord.png";
import telegram from "../assets/social/telegram.png";

const Social = () => {
  return (
    <div className="social-container">
      <div className="social-title">Find us:</div>
      <div>
        <img src={facebook} alt="facebook"></img>
        <img src={instagram} alt="instagram"></img>
        <img src={whatsapp} alt="whatsapp"></img>
        <img src={messenger} alt="messenger"></img>
        <img src={discord} alt="discord"></img>
        <img src={telegram} alt="telegram"></img>
      </div>
    </div>
  );
};

export default Social;
