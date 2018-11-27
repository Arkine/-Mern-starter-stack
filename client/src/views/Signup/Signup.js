import React from 'react';

import {Container} from './SignupStyled';

import {
	Form,
	FormGroup,
	TextInput,
	FormLabel
} from 'app/components/form';

export default class Signup extends React.PureComponent {
	render() {
		return (
			<Container>
				<Form>
					<h1>Signup</h1>
					<FormGroup>
						<FormLabel htmlFor="username">Username</FormLabel>
						<TextInput type="text" name="username" />

						<FormLabel htmlFor="password">Password</FormLabel>
						<TextInput type="password" name="password" />

						<FormLabel htmlFor="confirm-password">confirm-password</FormLabel>
						<TextInput type="password" name="confirm-password" />
					</FormGroup>
					<button type="submit">Submit</button>
				</Form>
			</Container>
		);
	}
}