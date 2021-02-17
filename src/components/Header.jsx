import React from "react";
import "../assets/stylesheets/components/Header.scss";
import "../assets/stylesheets/_global.scss";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container container">
        <img className="header__logo" src={Logo} alt="Logo" />
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__list__item">Features</li>
            <li className="header__nav__list__item">Team</li>
            <li className="header__nav__list__item">Sign In</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
