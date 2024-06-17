import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "../CartModal/CartPort.css";

// Backdrop Component
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

// ModalOverlay Component
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// CartPortal Component
const CartPortal = (props) => {
  const portals = document.getElementById("CartItemList");
  
  if (!portals) {
    console.error("The element with id 'CartItemList' does not exist in the DOM.");
    return null;
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portals)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portals)}
    </Fragment>
  );
};

export default CartPortal;
