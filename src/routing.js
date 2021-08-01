import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/home";

const Routering = () => {
  return (
    <div className="naviagation"> 
      <Navigation />
      <Switch>
        <Route component={Home} />
      </Switch>
    </div>
  );
};

export default Routering;
