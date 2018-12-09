import React from 'react';

import AsyncComponent from 'app/components/common/AsyncComponent';
import Loading from 'app/components/loading/LoadingSpinner';
import NotFound from './NotFound';

const Home = AsyncComponent(
	() => import('./Home'),
	<Loading />
);

const About = AsyncComponent(
	() => import('./About'),
	<Loading />
);

const Login = AsyncComponent(
	() => import('./Login'),
	<Loading />
);

const Logout = AsyncComponent(
	() => import('./Logout'),
	<Loading />
);

const Signup = AsyncComponent(
	() => import('./Signup'),
	<Loading />
);

export {
	Home,
	About,
	Login,
	Logout,
	Signup,
	NotFound
}