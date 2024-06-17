import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Cart from "./Components/Cart/CartItems.js";
import About from "./Components/About/About";
import { ProductProvider } from "./Components/AddCart/CartProviders.js";
import Albums from "./Components/Albums/Home.js";
import Contact from "./Components/Contact/Contact.js";
import Singlepage from "./Components/SinglePage/SinglePage.jsx";
import Signin from "./Components/SignIn/Signin.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Private from "./Components/Privatepage/Private.jsx";
import HomeSection from "./Components/Homesection/HomeSection.jsx";
function App() {


  return (
    <>
      <ProductProvider>
        <Router>
          <Nav />
          <Routes>
            <Route element={<Private/>}>
            <Route path="/" element={<HomeSection />} exact></Route>
            </Route>
            <Route path="singlepage/:id" element={<Singlepage />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/album" element={<Albums />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/Signin" element={<Signin />}></Route>
            <Route path="cart" element={<Cart/>}></Route>
          </Routes>
        </Router>
      </ProductProvider>
    </>
  );
}



export default App;
