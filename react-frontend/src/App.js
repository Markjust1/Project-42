import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Popular from "./components/Popular";
import Games from "./components/Games";
import Platform from "./components/Platform";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Security from "./components/Security";
import Register from "./components/Register";
import Login from "./components/Login";
import AddItem from "./components/AddItem";
import AllItems from "./components/AllItems";
import MyAccount from "./components/MyAccount";
import Cart from "./components/cart/Cart";
import "./components/styles/Terms.css";
import "./App.css";
import MyItems from "./components/profile/MyItems";
import EditProfile from "./components/profile/EditProfile";
import MyWallet from "./components/profile/MyWallet";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Checks if user profile was updated and triggers re-render:
  const [profileUpdated, setProfileUpdated] = useState(false);
  useEffect(()=>{setProfileUpdated(false)}, [profileUpdated])

  function loginHandler() {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <main className="App">
      <Navigation />
      <Routes>
        <Route path="/add" element={<AddItem />} />
        <Route path="/login" element={<Login onLoginChange={loginHandler} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<MyAccount key={profileUpdated} setProfileUpdated={setProfileUpdated}/>}>
          {/* <Route path="edit-profile" element={<EditProfile/>}/>
          <Route path="my-items" element={<MyItems/>}/>
          <Route path="my-wallet" element={<MyWallet/>}/>
          <Route path="my-orders" element={<MyItems/>}/> */}
        </Route>
        <Route
          path="/"
          element={
            <>
              {/* <Popular /> */}
              {/* <div className="top-content"> */}
                {/* <Games /> */}
                {/* <Platform /> */}
              {/* </div> */}
              {/* <Premium_Item_List /> */}
              <AllItems/>
            </>
          }
        />
        <Route path="/cart" element={<Cart/>}/>
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
