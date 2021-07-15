import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Landing
import Landing from '../containers/Landing';

//DrinkCategories
import DrinkCategories from '../containers/DrinkCategories';

//Drinks
import Drinks from '../containers/Drinks';

const route = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Landing } />
                <Route path="/categories" component={ DrinkCategories } />
                <Route path="/drinks" component={ Drinks } />
            </Switch>
        </Router>
    )
}

export default route;