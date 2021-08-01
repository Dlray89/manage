import React from "react";
import HeroCard from "./HeroCard";
import PrimaryContent from "./Primary-Content";
import TestimonialSlider from "./testimonial-slider/testimonial-slider";
import CallToAction from "./callToAction";

const Home = () => {
  return (
    <div className="naviagation">
      <HeroCard />
      <PrimaryContent />
      <TestimonialSlider />
      <CallToAction />
    </div>
  );
};

export default Home;
