import React, { useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/images/logo-white.svg";
import { SocialMediaLinks } from "../../data/social-media";
import { Hidden , TextField} from "@material-ui/core";

const Footer = (props) => {

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const onValidation = (e) => {
    let valid;

    switch (e.target.id) {
      case "email":
        setEmail(e.target.valid);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) {
          setEmailHelper("Invaild email example@email.com");
        } else {
          setEmailHelper("");
        }
        break;
      default:
        break;
    }
  };

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
      <Hidden xsDown>
        <section className="footer__links-box-one">
          <Link className="footer__links-box-one--link">Home</Link>
          <Link className="footer__links-box-one--link">Pricing</Link>
          <Link className="footer__links-box-one--link">Products</Link>
          <Link className="footer__links-box-one--link">About Us</Link>
        </section>
      </Hidden>

      
      <section className="footer__links-box-two">
        <Link className="footer__links-box-two--link">Careers</Link>
        <Link className="footer__links-box-two--link">Community</Link>
        <Link className="footer__links-box-two--link">Privacy Policy</Link>
      </section>

      <Hidden smUp>
        <section className="footer__links-box-one">
          <Link className="footer__links-box-one--link">Home</Link>
          <Link className="footer__links-box-one--link">Pricing</Link>
          <Link className="footer__links-box-one--link">Products</Link>
          <Link className="footer__links-box-one--link">About Us</Link>
        </section>
      </Hidden>

      <section className="footer__subscriptions-box">
        <div className="footer__subscriptions-box--input-box">
          {" "}
          <TextField
            id='email'
            value={email}
            error={emailHelper.length !== 0}
            helperText={emailHelper}
            onChange={onValidation}
            variant='outlined'
            type="text"
            className="footer__subscriptions-box--input-box__input"
            placeholder="Updates in your inbox"
            inputProps={{
              style: {
                background: 'white',
                borderRadius: '10px',

                
              }
            }}

            InputProps={{
              style: {
                borderRadius: '10px',

              }
            }}
          />
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
