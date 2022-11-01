import "./Games.css";

const Games = () => {
  const games = [
    "game1",
    "game2",
    "game3",
    "game4",
    "game5",
    "game6",
    "game7",
    "game8",
    "game9",
    "game10",
    "game11",
    "game12",
    "game13",
    "game14",
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
