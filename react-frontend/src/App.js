import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
// import Popular from "./components/Popular";
// import Games from "./components/Games";
// import Platform from "./components/Platform";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  // const [userInfo, setUserInfo] = useState();
  const [cartLength, setCartLength] = useState(0);
  const navigate = useNavigate();
  const local_storage = window.localStorage.getItem("userName");

  // useEffect(()=>{
  //   if (local_storage == null) {
  //     navigate('/register')
  //   }
  // },[isLoggedIn])

  // Getting user info and sending corresponding info to props
  const updateCartLength = () => {
    axios
      .get(`/api/users/`)
      .then((response) => {
        for (let user of response.data) {
          if (user.name == local_storage) {
            //User's info
            // setUserInfo(user);
            setCartLength(user.cart.length);
          }
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }

  // console.log(cartLength)

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Checks if user profile was updated and triggers re-render:
  const [profileUpdated, setProfileUpdated] = useState(false);
  useEffect(()=>{setProfileUpdated(false)}, [profileUpdated, cartLength])


  function loginHandler() {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <main className="App">
      <Navigation cartLength={cartLength} setProfileUpdated={setProfileUpdated} updateCartLength={updateCartLength}/>
      <Routes>
        <Route path="/add" element={<AddItem />} />
        <Route path="/login" element={<Login onLoginChange={loginHandler} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<MyAccount key={profileUpdated} setProfileUpdated={setProfileUpdated}/>}>
        </Route>
        <Route
          path="/"
          element={
      
              <AllItems setProfileUpdated={setProfileUpdated} updateCartLength={updateCartLength}/>
          }
        />
        <Route path="/cart" element={<Cart setProfileUpdated={setProfileUpdated} updateCartLength={updateCartLength}/>}/>
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
