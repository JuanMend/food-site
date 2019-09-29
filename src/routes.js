import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Aboutus from './components/Aboutus/Aboutus';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Recipes from './components/Recipes/Recipes';

export default (
	<Switch>
		<Route path="/recipes" component={Recipes} />
		<Route path="/signup" component={Signup} />
		<Route path="/login" component={Login} />
		<Route path="/aboutus" component={Aboutus} />
		<Route path="/contact" component={Contact} />
		<Route path="/" component={Home} />
	</Switch>
);
