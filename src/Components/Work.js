import React from "react";
import PickMeals from "../Assests/pick-meals-image.png";
import ChooseMeals from "../Assests/choose-image.png";
import DeliveryMeals from "../Assests/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Pick your favourite meals",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Choose How often you needed ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "No Need to wait more than half an hour",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Curious about how to make the most of your experience at Foodie? We've
          got you covered! Here's a guide to help you navigate your journey with
          us:
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
