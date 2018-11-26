import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AuthenticatedRoute from './AuthenticatedRoute';
import AppliedRoute from './AppliedRoute';

import {
	Home,
	About,
	Login,
	Signup
} from 'app/views';
import NotFound from 'app/components/common/NotFound';

export default ({childProps}) => (
	<Switch>
		<AppliedRoute exact path="/" component={Home} props={childProps} />
		<AppliedRoute exact path="/login" component={Login} props={childProps} />
		<AppliedRoute exact path="/signup" component={Signup} props={childProps} />
		<AuthenticatedRoute exact path="/about" component={About} props={childProps} />
		<Route component={NotFound} />
	</Switch>
)