import "./styles/Platform.css";

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
      <div className="platform-title">Platform</div>
      <ul className="platform-items">{listItems}</ul>
    </div>
  );
};

export default Platform;