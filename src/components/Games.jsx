import "./Games.css";

const Games = () => {
  const games = [
    "game",
    "game",
    "game",
    "game",
    "game",
    "game",
    "game",
    "game",
    "game",
    "game",
    "game",
    "game",
    "game",
    "game",
  ];
  const listItems = games.map((item) => <li key={item}>{item}</li>);
  return (
    <div className="games-container">
      <div className="games-title">Games</div>
      <ul className="games-items">{listItems}</ul>
    </div>
  );
};

export default Games;
