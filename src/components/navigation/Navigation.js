import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/images/logo.svg";
import { NavLinks } from "../../data/topNav";
import DesktopNav from "./desktopNav";
import { useTheme, useMediaQuery, IconButton, Backdrop } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";

const Navigation = () => {
  const theme = useTheme();
  const mdMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [switchNav, setSwitchNav] = useState(false);
  const [backdrop, setBackdrop] = useState(false)

  const handleNavSwitch = () => { setSwitchNav(true); setBackdrop(!backdrop)};

  const handleSwitchBack = () => { setSwitchNav(false); setBackdrop(false)};

  return (
    <div className="navigation">
      <div className="navigation__main-container">
        <section className="navigation__main-container--logo-container">
          <img
            className="navigation__main-container--logo-container__logo"
            src={Logo}
            alt="log of manage business"
          />
        </section>

        {mdMobile ? (
          <>
            {switchNav ? (
              <div>
                <section>
                  <IconButton onClick={handleSwitchBack}>
                    <CancelIcon />
                  </IconButton>
                </section>

                {NavLinks.map((link) => (
                  <Backdrop open={backdrop}>
                    <Link>{link.name}</Link>
                  </Backdrop>
                ))}
              </div>
            ) : (
              <IconButton onClick={handleNavSwitch}>
                <MenuIcon />
              </IconButton>
            )}
          </>
        ) : (
          <>
            <>
              <DesktopNav />
            </>
            <section className="navigation__main-container--btn-container">
              <div className="btn">Get Started</div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
