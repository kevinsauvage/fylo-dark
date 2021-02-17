import React from "react";
import "../assets/stylesheets/components/Main.scss";
import Card from "./Card";
import IconAcces from "../assets/images/icon-access-anywhere.svg";
import IconSecurity from "../assets/images/icon-security.svg";
import IconColab from "../assets/images/icon-collaboration.svg";
import IconFiles from "../assets/images/icon-any-file.svg";
import MainBannerillustration from "../assets/images/illustration-stay-productive.png";
import QuoteIcon from "../assets/images/bg-quotes.png";
import TestimonialCard from "./TestimonialCard";
import Avatar1 from "../assets/images/profile-1.jpg";
import Avatar2 from "../assets/images/profile-2.jpg";
import Avatar3 from "../assets/images/profile-3.jpg";
import Button from "../components/Button";

const Main = () => {
  return (
    <main className="main">
      <div className="main__cards">
        <Card
          icon={IconAcces}
          title="Access your files, anywhere"
          subtitle="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        />
        <Card
          icon={IconSecurity}
          title="Security you can trust"
          subtitle="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        />
        <Card
          icon={IconColab}
          title="Real-time collaboration"
          subtitle="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        />
        <Card
          icon={IconFiles}
          title="Store any type of file"
          subtitle="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        />
      </div>
      <div className="main__banner">
        <div className="main__banner__container container">
          <img src={MainBannerillustration} alt="Illustration" />
          <div className="main__banner__text">
            <h2 className="main__banner__text__title">
              Stay productive, wherever you are
            </h2>
            <p className="main__banner__text__subtitle">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="main__banner__text__subtitle">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <div className="main__banner__text__btn">See how Fylo works </div>
          </div>
        </div>
      </div>
      <div className="main__testimonial container">
        <img
          className="main__testimonial__quote"
          src={QuoteIcon}
          alt="quote icon"
        />
        <TestimonialCard
          avatar={Avatar1}
          text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          name="Satish Patel"
          job="Founder & CEO, Huddle"
        />
        <TestimonialCard
          avatar={Avatar2}
          text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          name="Bruce McKenzie"
          job="Founder & CEO, Huddle"
        />
        <TestimonialCard
          avatar={Avatar3}
          text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          name="Iva Boyd"
          job="Founder & CEO, Huddle"
        />
      </div>
      <div className="main__mailbox">
        <h3 className="main__mailbox__title">Get early access today</h3>
        <h4 className="main__mailbox__subtitle">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </h4>
        <form type="submit" className="main__mailbox__inputwrapper">
          <input type="text" className="main__mailbox__input" />
          <Button text="Get Started For Free" width="200px" height="48px" />
        </form>
      </div>
    </main>
  );
};

export default Main;
