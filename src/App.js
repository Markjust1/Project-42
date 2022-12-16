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
import Security from "./components/Security"
import Register from "./components/Register";
import Login from "./components/Login";
import AddItem from "./components/AddItem";
import "./components/styles/Terms.css";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Navigation />
      <AddItem />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
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
        <Route path="/security" element={<Security />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
