import Navigation from "./components/Navigation";
import Popular from "./components/Popular";
import Games from "./components/Games";
import Platform from "./components/Platform";
import Premium_item_list from "./components/Premium_item_list";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Popular />
      <div className="top-content">
        <Games />
        <Platform />
      </div>

        <Premium_item_list />

    </div>
  );
}

export default App;
