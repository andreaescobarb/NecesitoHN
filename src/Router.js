import React from 'react';
import App from './App.js';
import Signin from './Signin.js'
import Home from './Home.js';
import { Route, Switch } from 'react-router-dom';

const Router = () =>
    <App>
        <Switch>
            <Route exact path={"/Signin.js"} component={Signin} />
            <Route exact path={"/Home.js"} component={Home} />
            <Route exact path={"/"} component={Signin} />
        </Switch>
    </App>;

export default Router;
