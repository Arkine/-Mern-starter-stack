import React from 'react';

import AsyncComponent from 'app/components/common/AsyncComponent';
import Loading from 'app/components/loading/LoadingSpinner';

const Home = AsyncComponent(
	() => import('./Home'),
	<Loading />
)

export {
	Home
}