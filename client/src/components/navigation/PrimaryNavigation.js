import React from 'react';

import {Navigation} from './PrimaryNavigationStyled';

export default props => {
	return (
		<Navigation>
			<Navigation.Link to="/">Home</Navigation.Link>
			<Navigation.Link to="/about">About</Navigation.Link>
			<Navigation.Link to="/signup">Sign Up</Navigation.Link>
			<Navigation.Link to="/login">Login</Navigation.Link>
		</Navigation>
	)
}