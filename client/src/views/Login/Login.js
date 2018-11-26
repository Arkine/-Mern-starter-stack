import React from 'react';

import {Container} from './LoginStyled';

import {
	Form,
	FormGroup,
	TextInput,
	FormLabel
} from 'app/components/form';

export default class Login extends React.PureComponent {
	render() {
		return (
			<Container>
				<h1>Login</h1>
				<Form>
					<FormGroup>
						<FormLabel for="username">Username</FormLabel>
						<TextInput type="text" name="username" />

						<FormLabel for="password">Password</FormLabel>
						<TextInput type="password" name="password" />
					</FormGroup>
				</Form>
			</Container>
		);
	}
}