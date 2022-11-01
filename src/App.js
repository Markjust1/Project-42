import Navigation from "./components/Navigation";
import Popular from "./components/Popular";
import Games from "./components/Games";
import Platform from "./components/Platform";
import Premium_items from "./components/Premium_items";
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
      <div className="main-content">
        <Premium_items />
      </div>
    </div>
  );
}

export default App;
