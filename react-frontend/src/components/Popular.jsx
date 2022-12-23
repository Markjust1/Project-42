import "./styles/Popular.css";

const Popular = () => {
  const popularItems = ["Games", "Skins", "Currency", "Boost", "Other"];
  const listItems = popularItems.map((item) => <li key={item}>{item}</li>);
  return (
    <div className="popular-container">
      <ul className="popular-items">
        {listItems}
      </ul>
    </div>
  );
};

export default Popular;
