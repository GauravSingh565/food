import React, { useContext } from "react";
import "./checkout.css";
import Button from "../UI/Button";
import useCheckout from "../Hook/use-chechout";
import CartContext from "../context/cartContext";
const CheckForm = (props) => {
  const cartCtx = useContext(CartContext);
  const {
    input: nameValue,
    inpuBlurHandler: nameBlurHandler,
    inputChangeHandler: nameChangeHandler,
    validInput: validName,
    inputInvalid: invalidName,
    resetInput: resetName,
  } = useCheckout((value) => value.trim());
  const {
    input: addressValue,
    inpuBlurHandler: addressBlurHandler,
    inputChangeHandler: addressChangeHandler,
    validInput: validAddress,
    inputInvalid: invalidAddress,
    resetInput: resetAddress,
  } = useCheckout((value) => value.trim());
  const {
    input: pincodeValue,
    inpuBlurHandler: pincodeBlurHandler,
    inputChangeHandler: pincodeChangeHandler,
    validInput: validPincode,
    inputInvalid: invalidPincode,
    resetInput: resetPincode,
  } = useCheckout((value) => value.trim());
  const {
    input: phoneValue,
    inpuBlurHandler: phoneBlurHandler,
    inputChangeHandler: phoneChangeHandler,
    validInput: validPhone,
    inputInvalid: invalidPhone,
    resetInput: resetPhone,
  } = useCheckout((value) => value.trim());
  let formIsValid = false;
  if (validName && validAddress && validPhone && validPincode) {
    formIsValid = true;
  }

  const placheOrderHandler = () => {
    if (
      validName.trim() === "" &&
      validAddress.trim() === "" &&
      (validPincode.trim() === "") & (validPhone.trim() === "")
    ) {
      formIsValid = false;
    }
    if (
      validName.trim() !== "" &&
      validAddress.trim() !== "" &&
      (validPincode.trim() !== "") & (validPhone.trim() !== "")
    ) {
      resetName();
      resetAddress();
      resetPhone();
      resetPincode();
      props.onPlaceOrder({
        name: nameValue,
        address: addressValue,
        pineCode: pincodeValue,
        phone: phoneValue,
      });
      props.onSubmit();
      cartCtx.clearCartItem();
    }
  };
  const nameClass = invalidName ? "invalidInputClass" : "";
  const addressClass = invalidAddress ? "invalidInputClass" : "";
  const pincodeClass = invalidPincode ? "invalidInputClass" : "";
  const phoneClass = invalidPhone ? "invalidInputClass" : "";
  return (
    <>
      <form>
        <div className="nameDiv">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className={nameClass}
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            autoComplete="off"
          />
          {invalidName && <p className="invalid">Invalid username..</p>}
        </div>
        <div className="addressDiv">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            autoComplete="off"
            className={addressClass}
            value={addressValue}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
          />
          {invalidAddress && <p className="invalid">Invalid address..</p>}
        </div>
        <div className="pincodeDiv">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            className={pincodeClass}
            id="pincode"
            autoComplete="off"
            value={pincodeValue}
            onChange={pincodeChangeHandler}
            onBlur={pincodeBlurHandler}
            maxLength="5"
          />
          {invalidPincode && <p className="invalid">Invalid pincode..</p>}
        </div>
        <div className="phoneDiv">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className={phoneClass}
            id="phone"
            value={phoneValue}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
            autoComplete="off"
            maxLength="10"
          />
          {invalidPhone && <p className="invalid">Invalid phone..</p>}
        </div>
        <Button
          type="button"
          className="checkoutBtn"
          disabled={!formIsValid}
          onClick={placheOrderHandler}
        >
          Place Order
        </Button>
      </form>
    </>
  );
};

export default CheckForm;
