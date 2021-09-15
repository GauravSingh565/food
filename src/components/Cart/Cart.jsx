import React, { useContext, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartContext from "../context/cartContext";
import "./cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckForm from "../checkoutForm/CheckForm";
const Cart = (props) => {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const cartCtx = useContext(CartContext);
  const Data = cartCtx.items;
  const cartLength = cartCtx.items.length > 0;
  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const addCartItemHandler = (item) => {
    cartCtx.addItem(item);
  };
  const clearCartHandler = () => {
    cartCtx.clearCartItem();
    setShowCheckoutForm(false);
  };
  const orderHandler = () => {
    setShowCheckoutForm(true);
  };

  const placeOrderHandler = async (userData) => {
    await fetch(
      "https://meals-5da9b-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: Data,
        }),
      }
    );
  };

  const submitOrder = () => {
    toast("Your order has been placed");
    setShowCheckoutForm(false);
  };

  const cartClass = showCheckoutForm ? "cartOrderDiv" : "cartDiv";
  return (
    <Modal>
      <Card className={cartClass}>
        {cartLength ? (
          <div className="cartItemDiv">
            {Data.map((item) => {
              return (
                <div className="innerDiv" key={item.id}>
                  <div className="cartRightDiv">
                    <div className="subDiv">
                      <div className="cartImgDiv">
                        <img src={item.img} alt="img" />
                      </div>
                      <p className="cartTitle">{item.title}</p>
                      <p className="cartPrice">&#8377;{item.price}</p>
                    </div>
                    <p className="amount">
                      <i className="fas fa-times"></i> {item.amount}
                    </p>
                  </div>
                  <div className="cartLeftDiv">
                    <Button
                      type="button"
                      className="cartbtn"
                      onClick={removeCartItemHandler.bind(null, item.id)}
                    >
                      -
                    </Button>
                    <Button
                      type="button"
                      className="cartbtn"
                      onClick={addCartItemHandler.bind(null, item)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="emptyDiv">
            <img
              src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-shopping-cart-3.png"
              alt="img"
            />
            <h2>Your cart is empty!! </h2>
          </div>
        )}
        <hr className="cartHr" />
        <div className="cartFooter">
          <div className="cartTotal">
            <h2>Total Amount</h2>
            <h4>&#8377; {cartCtx.totalAmount.toFixed(2)}</h4>
          </div>
          <hr />
          {showCheckoutForm && (
            <CheckForm
              onPlaceOrder={placeOrderHandler}
              onSubmit={submitOrder}
            />
          )}
          <div className="cartButtonDiv">
            <Button
              type="button"
              className="cartbtn"
              onClick={props.removeCart}
            >
              Exit Cart
            </Button>
            {cartLength && (
              <div>
                <Button
                  type="button"
                  className="cartbtn"
                  onClick={clearCartHandler}
                >
                  Clera Cart
                </Button>

                {!showCheckoutForm && (
                  <Button
                    type="button"
                    className="cartbtn"
                    onClick={orderHandler}
                  >
                    Order
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
      <ToastContainer />
    </Modal>
  );
};

export default Cart;
