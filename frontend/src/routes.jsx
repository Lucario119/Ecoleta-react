import React from 'react';
import {BrowserRouter, Route, Switch, } from "react-router-dom";

import Home from './pages/Index';
import CreatePoint from './pages/CreatePoint';
import SearchResults from './pages/SearchResults'

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/create-point' component= {CreatePoint}  />
        <Route path='/search' component= {SearchResults} />
 
      </Switch>
    
    </BrowserRouter>
  ) ;
}

export default Routes;