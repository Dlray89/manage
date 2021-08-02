import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/images/logo-white.svg";
import { SocialMediaLinks } from "../../data/social-media";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer__icons-box">
        <div className="footer__icons-box--logo-box">
          <img
            className="footer__icons-box--logo-box__logo"
            alt="logo white"
            src={Logo}
          />
        </div>

        <div className="footer__icons-box--socialMedia-box">
          {SocialMediaLinks.map((item) => (
            <img
              className="footer__icons-box--socialMedia-box__icons"
              alt="social media links"
              src={item.icon}
            />
          ))}{" "}
        </div>
      </section>

      <section className="footer__links-box-one">
        <Link className="footer__links-box-one--link">Home</Link>
        <Link className="footer__links-box-one--link">Pricing</Link>
        <Link className="footer__links-box-one--link">Products</Link>
        <Link className="footer__links-box-one--link">About Us</Link>
      </section>
      <section className="footer__links-box-two">
        <Link className="footer__links-box-two--link">Careers</Link>
        <Link className="footer__links-box-two--link">Community</Link>
        <Link className="footer__links-box-two--link">Privacy Policy</Link>
          </section>
          
      <section className="footer__subscriptions-box">
        <div className="footer__subscriptions-box--input-box">
          {" "}
          <input type='text' className="footer__subscriptions-box--input-box__input" placeholder="Updates in your inbox" />
              </div>
              
        <div className="footer__subscriptions-box--btn-box">
          {" "}
          <div className="footer__subscriptions-box--btn-box__btn">Go</div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
