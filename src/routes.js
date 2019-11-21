import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Aboutus from './components/Aboutus/Aboutus';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Recipes from './components/Recipes/Recipes';
import Favorites from './components/Favorites/Favorites';
import RecipeDish from './components/RecipeDish/RecipeDish';

export default (
	<Switch>
		<Route path="/recipsushi/:sushi_id" component={RecipeDish} />
		<Route path="/recipetacos/:tacos_id" component={RecipeDish} />
		<Route path="/recipedessert/:dessert_id" component={RecipeDish} />
		<Route path="/recipechicken/:chicken_id" component={RecipeDish} />
		<Route path="/recipepizza/:pizza_id" component={RecipeDish} />
		<Route path="/recipehamburger/:hamburger_id" component={RecipeDish} />
		<Route path="/recipe/:pizza_id" component={RecipeDish} />
		<Route path="/recipetwo/:chicken_id" component={RecipeDish} />
		<Route path="/recipethree/:sushi_id" component={RecipeDish} />
		<Route path="/recipefour/:tacos_id" component={RecipeDish} />
		<Route path="/recipefive/:dessert_id" component={RecipeDish} />
		<Route path="/recipesix/:hamburger_id" component={RecipeDish} />
		<Route path="/favorites" component={Favorites} />
		<Route path="/recipes" component={Recipes} />
		<Route path="/signup" component={Signup} />
		<Route path="/login" component={Login} />
		<Route path="/aboutus" component={Aboutus} />
		<Route path="/contact" component={Contact} />
		<Route path="/" component={Home} />
	</Switch>
);
