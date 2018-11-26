import React from 'react';

import {Container} from './LoginStyled';

import {
	Form,
	FormGroup,
	TextInput,
	FormLabel
} from 'app/components/form';

export default class Login extends React.PureComponent {

	handleFormSubmit = e => {
		e.preventDefault();
	}

	render() {
		return (
			<Container>
				<h1>Login</h1>
				<Form>
					<FormGroup>
						<FormLabel htmlFor="username">Username</FormLabel>
						<TextInput type="text" name="username" />

						<FormLabel htmlFor="password">Password</FormLabel>
						<TextInput type="password" name="password" />
					</FormGroup>
					<button onClick={this.handleFormSubmit}>Submit</button>
				</Form>
			</Container>
		);
	}
}