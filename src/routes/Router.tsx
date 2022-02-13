import React from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from "@/pages/home";
import Notfound from "@/pages/notfound";
import { Header } from "@/components";


const Routers: React.FC = () => {

  return (
    <BrowserRouter>
      <Header title={"Random Users"} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;