import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./../helper/auth";
import AddPage from './../components/AddPage';
import adminPage from './../components/adminPage';
import itemDetails from './../components/itemDetails';
import LoginPage from './../components/LoginPage';
  

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      
      <Route path="/" exact component={LoginPage}/>

      <Route path="/addPg" exact component={AddPage} />

      <PrivateRoute path="/adminPg" exact component={adminPage}/>

      <PrivateRoute path="/item/:itemTitle" exact component={itemDetails}/>
    
    </Switch>
  </BrowserRouter>
);

export default Routes;