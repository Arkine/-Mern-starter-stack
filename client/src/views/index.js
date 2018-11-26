import React from 'react';

import AsyncComponent from 'app/components/common/AsyncComponent';
import Loading from 'app/components/loading/LoadingSpinner';

const Home = AsyncComponent(
	() => import('./Home'),
	<Loading />
);

const About = AsyncComponent(
	() => import('./About'),
	<Loading />
)

export {
	Home,
	About
}