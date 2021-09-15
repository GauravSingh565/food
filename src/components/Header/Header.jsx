import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import "./header.css";
const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItem = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="leftDiv">
          <i className="fas fa-utensils food"></i>
          <h2>Food</h2>
        </div>
        <div className="rightDiv">
          <i
            className="fas fa-shopping-cart cart"
            onClick={props.onClickHandler}
          ></i>
          <div className="amountDiv">{numberOfItem}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
