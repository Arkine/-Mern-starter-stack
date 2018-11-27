import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default ({component: C, props: cProps, ...rest}) => (
	<Route
		{...rest}
		render={props => {
			console.log({PROPS: props})
			return props.userAuthenticated ? <C {...props} {...cProps} show={props.match !== null} /> : <Redirect to="/login" />
		}}
	/>
)