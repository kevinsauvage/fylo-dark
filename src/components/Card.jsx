import React from "react";
import "../assets/stylesheets/components/Card.scss";

const Card = ({ title, subtitle, icon }) => {
  return (
    <div className="card">
      <img className="card__icon" src={icon} alt="" />
      <h2 className="card__title">{title}</h2>
      <h3 className="card__subtitle">{subtitle}</h3>
    </div>
  );
};

export default Card;
