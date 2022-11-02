import "./styles/Platform.css";
import console from '../assets/console.png';

const Platform = () => {
  const Platform = [
    "xbox",
    "PS",
    "discord",
    "origin",
    "battle.net",
    "uplay",
    "epic games",
    "steam",
  ];
  const listItems = Platform.map((item) => <li key={item}>{item}</li>);
  return (
    <div className="platform-container">
      <div>
      <img src={console} alt=''></img>
        <div className="platform-title">Platform</div>
      </div>
      <ul className="platform-items">{listItems}</ul>
    </div>
  );
};

export default Platform;