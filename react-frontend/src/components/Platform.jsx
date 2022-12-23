import "./styles/Platform.css";
import console from '../assets/console.png';
import xbox from '../assets/platform/xbox.jpeg'

const Platform = () => {
  const Platform = [
    {name: 'xbox', pic: xbox},
    {name: 'playstation', pic: xbox},
    {name: 'origin', pic: xbox},
    {name: 'battlenet', pic: xbox},
    {name: 'steam', pic: xbox},
    {name: 'epicgames', pic: xbox}
  ];
  const listItems = Platform.map((item) => <li key={item.name}>{item.name}</li>);
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