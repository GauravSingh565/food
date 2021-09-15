import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
const Backdrop = (props) => {
  return <div className="backDrop"></div>;
};
const Modaloverlays = (props) => {
  return <div className="modalOverlay">{props.children}</div>;
};
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overLays"))}
      {ReactDOM.createPortal(
        <Modaloverlays>{props.children}</Modaloverlays>,
        document.getElementById("overLays")
      )}
    </>
  );
};

export default Modal;
