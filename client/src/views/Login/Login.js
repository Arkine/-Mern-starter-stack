import React from 'react';

import {Container} from './LoginStyled';

import {
	Form,
	FormGroup,
	TextInput,
	FormLabel
} from 'app/components/form';

export default class Login extends React.PureComponent {

	handleFormSubmit = ({errors, values}) => {
		e.preventDefault();
		console.log({errors, values});
	}

	render() {
		return (
			<Container>
				<h1>Login</h1>
				<Form onSubmit={this.handleFormSubmit}>
					<FormGroup>
						<FormLabel htmlFor="username">Username</FormLabel>
						<TextInput type="text" name="username" />

						<FormLabel htmlFor="password">Password</FormLabel>
						<TextInput type="password" name="password" />
					</FormGroup>
					<button type="submit">Submit</button>
				</Form>
			</Container>
		);
	}
}