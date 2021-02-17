import React from "react";
import "../assets/stylesheets/components/Footer.scss";
import Logo from "../assets/images/logo.svg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLocationArrow,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <img className="footer__logo" src={Logo} alt="logo" />
        <div className="footer__wrapper">
          <div className="footer__wrapper__a">
            <FaLocationArrow size={50} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="footer__wrapper__b">
            <div>
              <FaPhoneAlt size={20} />
              <p>+1-543-123-4567</p>
            </div>
            <div>
              <BiMailSend size={25} />
              <p>example@fylo.com</p>
            </div>
          </div>
          <nav className="footer__wrapper__c">
            <ul className="footer__wrapper__c__list">
              <li className="footer__wrapper__c__item">About Us</li>
              <li className="footer__wrapper__c__item">Jobs</li>
              <li className="footer__wrapper__c__item">Press</li>
            </ul>
            <ul className="footer__wrapper__c__list">
              <li className="footer__wrapper__c__item">Contact Us</li>
              <li className="footer__wrapper__c__item">Terms</li>
              <li className="footer__wrapper__c__item">Privacy</li>
            </ul>
          </nav>
          <div className="footer__wrapper__d">
            <FaFacebookSquare size={25} />
            <FaTwitterSquare size={25} />
            <FaInstagramSquare size={25} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
