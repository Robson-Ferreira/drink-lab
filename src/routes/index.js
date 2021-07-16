import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Landing
import Landing from '../containers/Landing';

//Show page not found
import PageNotFound from '../containers/NotFoundPage';

//List all drink categories
import Categories from '../containers/Drinks/Categories';

//List all drinks by category
import Drinks from '../containers/Drinks/Drinks';

//Show details of the selected drink
import Drink from '../containers/Drinks/DrinkDetail';

const route = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Landing } />
                <Route path="/categories" component={ Categories } />
                <Route path="/drinks" component={ Drinks } />
                <Route path="/drink/:id" component={ Drink } />

                <Route component={ PageNotFound } />
            </Switch>
        </Router>
    );
}

export default route;