import React from "react";
import "./Button.css";
function Button({ children, manageClick }) {
  return (
    <button className="btn-container" onClick={() => manageClick(children)}>
      {children}
    </button>
  );
}

export default Button;
