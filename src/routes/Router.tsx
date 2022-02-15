import React from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {LABELS} from '@/utils/Contants'

import Home from "@/pages/Home/Home";
import Notfound from "@/pages/notfound";

import { Header } from "@/components";


const Routers: React.FC = () => {

  return (
    <BrowserRouter>
      <Header title={LABELS.appName} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;