import { Link, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Popular from "./components/Popular";
import Games from "./components/Games";
import Platform from "./components/Platform";
import Footer from "./components/Footer";
import Premium_item_list from "./components/Premium_item_list";
import About from "./components/About";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import "./components/styles/Terms.css";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Routes className="App">
        <Route
          path="/"
          element={
            <>
              <Popular />
              <div className="top-content">
                <Games />
                <Platform />
              </div>
              <Premium_item_list />
            </>
          }
        />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
