import React, { useRef, useContext, useState } from "react";
import CartContext from "../context/cartContext";
import "./meals.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const MealsItem = (props) => {
  const [error, setError] = useState(true);
  const cartCtx = useContext(CartContext);
  const amountData = useRef();
  const addItemHandler = () => {
    const enteredAmount = amountData.current.value;
    const validEnteredAmount = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      validEnteredAmount < 1 ||
      validEnteredAmount > 5
    ) {
      setError(false);
      return;
    } else {
      cartCtx.addItem({
        id: props.id,
        title: props.title,
        price: props.price,
        img: props.img,
        amount: validEnteredAmount,
      });
    }
  };
  return (
    <Card className="mealsCard" key={props.id}>
      <div className="imgDiv">
        <img src={props.img} alt="img" />
      </div>
      <div className="mealsDesc">
        <div>
          <h3>{props.title}</h3>
          <p className="desc">{props.desc}</p>
        </div>
        <p className="price"> &#8377; {props.price}</p>
      </div>
      <div className="cardFooter">
        <Button className="cartBtn" type="button" onClick={addItemHandler}>
          Add to Cart
        </Button>
        <div className="inputDiv">
          <label htmlFor="amount">Amount</label>
          <input
            className="amountInput"
            ref={amountData}
            type="number"
            id="amount"
            min="1"
            max="5"
            defaultValue="1"
            step="1"
          />
        </div>
      </div>
      {!error && <p>Please Enter Valid Amount(1-5)</p>}
    </Card>
  );
};

export default MealsItem;
