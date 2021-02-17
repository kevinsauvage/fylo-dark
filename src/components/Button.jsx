import React from "react";
import "../assets/stylesheets/components/Button.scss";

const Button = ({ text, width, height }) => {
  return (
    <button className="button" style={{ width: width, height: height }}>
      {text}
    </button>
  );
};

export default Button;
