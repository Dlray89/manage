import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";

const Routering = () => {
  return (
    <div className="naviagation"> 
      <Navigation />
      <Switch>
        <Route component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Routering;
