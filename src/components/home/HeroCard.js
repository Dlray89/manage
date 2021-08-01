import React from "react";
import HeroCardImg from '../../asset/home/illustration-intro.svg'

const HeroCard = () => {
  return (
    <div className="hero-card">
      <section className="hero-card__title-section">
        <h1 className="hero-card__title-section--title">
          Bring everyone together to build better products.
              </h1>
              
        <p className="hero-card__title-section--sub">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>

        <div className="hero-card__title-section--btn-section">
          <div className="hero-card__title-section--btn-section__btn">Get Started</div>
        </div>
      </section>
      <section className="hero-card__img-section">
        <img className="hero-card__img-section--img" alt='hero card img' src={HeroCardImg} />
      </section>
    </div>
  );
};

export default HeroCard;
