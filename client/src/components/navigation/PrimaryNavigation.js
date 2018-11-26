import React from 'react';

import {Navigation} from './PrimaryNavigationStyled';

export default props => {
	return (
		<Navigation>
			<Navigation.Link to="/">Home</Navigation.Link>
			<Navigation.Link to="/about">About</Navigation.Link>
		</Navigation>
	)
}