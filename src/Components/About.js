import React from "react";
import AboutBackground from "../Assests/about-background.png";
import AboutBackgroundImage from "../Assests/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          At Foodie, we are committed to excellence in every aspect of what we
          do. From our attentive service to our dedication to sustainability and
          community involvement, we believe in making a positive impact both
          inside and outside our walls. Come discover the flavors, savor the
          moments, and create unforgettable memories with us at Foodie.
        </p>
        <p className="primary-text">
          Thank you for choosing Foodie. We look forward to serving you soon!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
