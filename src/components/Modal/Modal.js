import React from "react";
import Styles from "./index.module.scss";
function Modal({ styleClass, children }) {
  return (
    <div className={Styles.Modal} style={styleClass}>
      {children}
    </div>
  );
}
export default Modal;
