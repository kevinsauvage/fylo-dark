import React from "react";
import "../assets/stylesheets/components/TestimonialCard.scss";

const TestimonialCard = ({ text, name, job, avatar }) => {
  return (
    <div className="testimonial__card">
      <p className="testimonial__card__text">{text}</p>
      <div className="testimonial__card__user">
        <img className="testimonial__card__user__avatar" src={avatar} alt="" />
        <div className="testimonial__card__user__wrapper">
          <p className="testimonial__card__user__name">{name}</p>
          <p className="testimonial__card__user__job">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
