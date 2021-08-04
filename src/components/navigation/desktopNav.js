import React from 'react'
import { Link } from 'react-router-dom'
import { NavLinks } from '../../data/topNav'




const DesktopNav = () => {
    return (
        <section className="navigation__main-container--links-container">
        {NavLinks.map((link) => (
          <Link id={link.id} to={link.endpoint} className="navigation__main-container--links-container__link">
            {link.name}
          </Link>
        ))}
      </section>
    )
}

export default DesktopNav