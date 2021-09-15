import { useState } from "react";

const useCheckout = (validValue) => {
  const [input, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const validInput = validValue(input);
  const inputInvalid = !validInput && isTouched;

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const inpuBlurHandler = () => {
    setIsTouched(true);
  };
  const resetInput = () => {
    setIsTouched(false);
    setInput("");
  };
  return {
    input,
    isTouched,
    inputInvalid,
    validInput,
    inputChangeHandler,
    inpuBlurHandler,
    resetInput,
  };
};

export default useCheckout;
