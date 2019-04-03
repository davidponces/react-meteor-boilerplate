import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from '../ui/Login';
import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

const history = createBrowserHistory();

const onEnterPublicPage = Component => {
	if (Meteor.userId()) {
		return <Redirect to='/dashboard' />;
	} else {
		return <Component />;
	}
};

const onEnterPrivatePage = Component => {
	if (!Meteor.userId()) {
		return <Redirect to='/' />;
	} else {
		return <Component />;
	}
};

export const onAuthChange = isAuthenticated => {
	const pathname = window.location.pathname;
	const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
	const isAuthenticatedPage = authenticatedPages.includes(pathname);
	if (isUnauthenticatedPage && isAuthenticated) {
		history.push('dashboard');
	} else if (isAuthenticatedPage && !isAuthenticated) {
		history.push('/');
	}
};

//on enterprivatepage
export const routes = (
	<Router history={history}>
		<Switch>
			<Route path='/' exact={true} render={() => onEnterPublicPage(Login)} />
			<Route path='/signup' render={() => onEnterPublicPage(Signup)} />
			<Route path='/dashboard' render={() => onEnterPrivatePage(Dashboard)} />
			<Route path='/*' component={NotFound} />
		</Switch>
	</Router>
);
