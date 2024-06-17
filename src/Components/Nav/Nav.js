import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "../Nav/Nav.css";
import Cart from "../Cart/CartItems";

import Authcontext from "../LoginProvider/Loginprovider";
import { useProductContext } from "../AddCart/CartProviders";

const Nav = () => {
  const [visible, setVisible] = useState(false);
 const{cartItems,handleRemove}=useProductContext();
  const Authctx = useContext(Authcontext);
  const isLoggedin = Authctx.isLoggedin;
  const navigate = useNavigate();
  const toggleVisibility = () => {
    setVisible(!visible);
    console.log(visible)
  };

  const HomeNavigation = () => {
    navigate("/");
  };
  const logoutHandler = () => {
    Authctx.Logout();
  };

  return (
    <div>
      <div className="Nav_items">
        <img
          onClick={HomeNavigation}
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/e-commerce-logo-design-template-5dcf2e4daab6379d4824c6dc04e26f17_screen.jpg?ts=1645336764"
          alt="Loading...."
          className="shop"
        ></img>
        <div className="Allnavitems">
          <div className="nav-item-list">
            <Link to="/">HOME</Link>
            <Link to="/album">ALBUM</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/about">ABOUT</Link>
          </div>
          {!isLoggedin && (
            <li style={{ listStyleType: "none" }}>
              <Link to="/signin">LOGIN</Link>
            </li>
          )}

          {isLoggedin && (
            <li style={{ listStyleType: "none" }}>
              <Link to="/profile">PROFILE</Link>
            </li>
          )}

          {isLoggedin && (
            <li className="logout">
              <li onClick={logoutHandler}>LOGOUT</li>
            </li>
          )}
        </div>

        <div>
          <button
            className="insta"
            style={{
              marginRight: "50px",
              cursor: "pointer",
            }}
            onClick={toggleVisibility}
          >
            <div className="cart_page_cart">
              <BsCart4 /> CART
              <span>{cartItems.length}</span>
            </div>
          </button>
          {visible && <Cart ProductsList={cartItems} HandleRemove={handleRemove}/>}
        </div>
      </div>
    </div>
  );
};

export default Nav;
