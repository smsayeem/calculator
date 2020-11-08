import React from "react";

import "./Button.css";

const Button = ({ content, onButtonClick, type, mode }) => {
  return (
    <div
      className={`Button ${mode} ${content === "0" ? "zero" : ""} ${type || ""}`}
      onClick={onButtonClick(content)}
    >
      {content}
    </div>
  );
};

export default Button;
