import React from "react";
import "./ButtonClear.css";
function ButtonClear({ children, clearInput }) {
  return (
    <button className="Buttonclear-container" onClick={() => clearInput()}>
      {children}
    </button>
  );
}

export default ButtonClear;
