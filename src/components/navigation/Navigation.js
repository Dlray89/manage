import React from "react";
import { Link } from 'react-router-dom'
import Logo from '../../asset/images/logo.svg'

const Navigation = () => {
    return (
        
        <div className='navigation'>
            <div  className='navigation__main-container'>
                <section className='navigation__main-container--logo-container'>
                    <img className='navigation__main-container--logo-container__logo' src={Logo} alt='log of manage business' />
                </section>

                <section className='navigation__main-container--links-container'>
                    <Link className='navigation__main-container--links-container__link'>Pricing</Link>
                    <Link className='navigation__main-container--links-container__link'>Product</Link>
                    <Link className='navigation__main-container--links-container__link'>About Us</Link>
                    <Link className='navigation__main-container--links-container__link'>Careers</Link>
                    <Link className='navigation__main-container--links-container__link'>Community</Link>
                </section>
                <section className='navigation__main-container--btn-container'>
                    <div className='btn'>Get Started</div>
                </section>
            </div>
        </div>
    );
};

export default Navigation;
