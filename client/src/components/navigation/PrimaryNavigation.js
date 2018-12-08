import React from 'react';
import {connect} from 'react-redux';

import {Navigation} from './PrimaryNavigationStyled';


const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}

@connect(mapStateToProps)
export default class PrimaryNavigation extends React.PureComponent {
	render() {
		return (
			<Navigation>
				<Navigation.Link to="/">Home</Navigation.Link>
				<Navigation.Link to="/about">About</Navigation.Link>
				{!this.props.auth.isAuthenticated && 
					<React.Fragment>
						<Navigation.Link to="/signup">Sign Up</Navigation.Link>
						<Navigation.Link to="/login">Login</Navigation.Link>
					</React.Fragment>
				}
				{this.props.auth.isAuthenticated &&
					<Navigation.Link to="/logout">Log Out</Navigation.Link>
				}
			</Navigation>
		);
	}
}