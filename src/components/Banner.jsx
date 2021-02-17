import React from "react";
import "../assets/stylesheets/components/Banner.scss";
import Button from "./Button";
import Illustration from "../assets/images/illustration-intro.png";

const Banner = () => {
  return (
    <div className="banner">
      <img
        className="banner__img"
        src={Illustration}
        alt="illustration banner"
      />
      <div className="banner__text">
        <h1 className="banner__text__title">
          All your files in one secure location, accessible anywhere.
        </h1>
        <h2 className="banner__text__subtitle">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </h2>
        <Button text="Get Started" width="280px" height="56px" />
      </div>
    </div>
  );
};

export default Banner;
