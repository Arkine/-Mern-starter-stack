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
		console.log({errors, values});
	}

	validateForm = values => {
		console.log('VALIDATOR HERE DOG', values)
		const keys = Object.keys(values);
		for (let i=0; i<keys.length; i++) {
			console.log('VALUES HERE', values[keys[i]]);
		}

		return {};
	}

	render() {
		return (
			<Container>
				<Form onSubmit={this.handleFormSubmit} validator={this.validateForm}>
					<h1>Login</h1>
					<FormGroup>
						<FormLabel htmlFor="username">Username</FormLabel>
						<TextInput type="number" name="username" required />

						<FormLabel htmlFor="password">Password</FormLabel>
						<TextInput type="password" name="password" required />
					</FormGroup>
					<button type="submit">Submit</button>
				</Form>
			</Container>
		);
	}
}