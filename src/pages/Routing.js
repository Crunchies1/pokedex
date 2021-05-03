import React from "react";
import { history } from "../utils/history";
import { Router, Switch, Route } from "react-router-dom";
import Pokedex from "./Pokedex"
import Profile from "./Profile"

const createRoutes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={"/"} component={Pokedex} />
                <Route exact path={"/profile"} component={Profile} />
            </Switch>
        </Router>
    );
};

export default createRoutes;