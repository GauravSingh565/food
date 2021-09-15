import React, { useReducer } from "react";
import CartContext from "./cartContext";
const defaultValue = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const upDateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItem = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingCartItem = state.items[existingItem];
    let updatedItem;
    if (existingCartItem) {
      const updatedItems = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItem = [...state.items];
      updatedItem[existingItem] = updatedItems;
    } else {
      updatedItem = state.items.concat(action.item);
    }
    return {
      items: updatedItem,
      totalAmount: upDateTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingItem = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const existingCartItem = state.items[existingItem];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItem] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "CLEAR") {
    return defaultValue;
  }
  return defaultValue;
};
const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, defaultValue);
  const addItemHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };
  const clearCartHandler = () => {
    dispatch({ type: "CLEAR" });
  };
  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCartItem: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
