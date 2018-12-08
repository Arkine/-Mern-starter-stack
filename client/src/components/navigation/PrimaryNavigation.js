import React from 'react';
import {connect} from 'react-redux';

import history from 'app/services/history';

import {Navigation} from './PrimaryNavigationStyled';

import links from './links';

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}

@connect(mapStateToProps)
export default class PrimaryNavigation extends React.Component {

	shouldComponentUpdate(prevProps) {
		const {pathname} = history.location;
		if (prevProps.history.location.pathname !== pathname) {
			return true;
		}
	}

	renderLinks(linkSet) {
		const {pathname} = history.location;

		return linkSet.map((link, i) => (
			<Navigation.Link 
				key={`nav-link-${i}`}
				to={link.to}
				active={(link.to === pathname)}
			>
				{link.label}
			</Navigation.Link>))
	}

	render() {
		const {all, loggedIn, loggedOut} = links;
		return (
			<Navigation>
				{this.renderLinks(all)}
				{!this.props.auth.isAuthenticated && 
					<React.Fragment>
						{this.renderLinks(loggedOut)}
					</React.Fragment>
				}
				{this.props.auth.isAuthenticated &&
					<React.Fragment>
						{this.renderLinks(loggedIn)}
					</React.Fragment>
				}
			</Navigation>
		);
	}
}